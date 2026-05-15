#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  createHash,
  createPrivateKey,
  createPublicKey,
  generateKeyPairSync,
  randomBytes,
  sign,
  verify,
} from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '../..');

const EVENT_PREFIX = Buffer.from('agent-event-envelope:v1\n', 'ascii');
const REGISTRY_PREFIX = Buffer.from('agent-trust-registry:v1\n', 'ascii');
const POSSESSION_PREFIX = Buffer.from('agent-possession-proof:v1\n', 'ascii');
const ED25519_SPKI_PREFIX = Buffer.from('302a300506032b6570032100', 'hex');
const MAX_SAFE_JSON_INTEGER = 9007199254740991;

const CONFIG = {
  repoIdentity: 'github:samiserrag/Claude-Codex',
  experimentNamespace: 'E3',
  rootCoordinatorId: 'sami-root',
  rootKeyId: 'sami-root-2026-05-15',
  codexCoordinatorId: 'codex',
  codexKeyId: 'codex-2026-05-15',
  rootPrivateKeyPath: repoPath('.agent-handoff/local/keys/sami-root.ed25519'),
  codexPrivateKeyPath: repoPath('.agent-handoff/local/keys/codex.ed25519'),
  registryPath: repoPath('.agent-handoff/trust/agents.json'),
  possessionProofPath: repoPath('.agent-handoff/trust/possession-proofs/codex.ed25519.proof.json'),
  rootEventsDir: repoPath('.agent-handoff/events/sami-root'),
};

function repoPath(...segments) {
  return path.join(REPO_ROOT, ...segments);
}

function repoRel(filePath) {
  return path.relative(REPO_ROOT, filePath).split(path.sep).join('/');
}

class StrictJsonParser {
  constructor(text) {
    this.text = text;
    this.index = 0;
  }

  parse() {
    if (this.text.charCodeAt(0) === 0xfeff) {
      throw new Error('JSON byte order mark is not allowed');
    }
    const value = this.parseValue();
    this.skipWhitespace();
    if (this.index !== this.text.length) {
      throw new Error(`Unexpected trailing JSON at byte ${this.index}`);
    }
    return value;
  }

  skipWhitespace() {
    while (this.index < this.text.length) {
      const char = this.text[this.index];
      if (char !== ' ' && char !== '\n' && char !== '\r' && char !== '\t') {
        break;
      }
      this.index += 1;
    }
  }

  parseValue() {
    this.skipWhitespace();
    const char = this.text[this.index];
    if (char === '{') return this.parseObject();
    if (char === '[') return this.parseArray();
    if (char === '"') return this.parseString();
    if (char === 't') return this.parseLiteral('true', true);
    if (char === 'f') return this.parseLiteral('false', false);
    if (char === 'n') return this.parseLiteral('null', null);
    if (char === '-' || isDigit(char)) return this.parseNumber();
    throw new Error(`Unexpected JSON token at byte ${this.index}`);
  }

  parseObject() {
    this.expect('{');
    const object = {};
    const seenKeys = new Set();
    this.skipWhitespace();
    if (this.peek() === '}') {
      this.index += 1;
      return object;
    }
    while (true) {
      this.skipWhitespace();
      if (this.peek() !== '"') {
        throw new Error(`Expected object key at byte ${this.index}`);
      }
      const key = this.parseString();
      if (seenKeys.has(key)) {
        throw new Error(`Duplicate JSON object key: ${key}`);
      }
      seenKeys.add(key);
      this.skipWhitespace();
      this.expect(':');
      object[key] = this.parseValue();
      this.skipWhitespace();
      const char = this.peek();
      if (char === '}') {
        this.index += 1;
        return object;
      }
      this.expect(',');
    }
  }

  parseArray() {
    this.expect('[');
    const array = [];
    this.skipWhitespace();
    if (this.peek() === ']') {
      this.index += 1;
      return array;
    }
    while (true) {
      array.push(this.parseValue());
      this.skipWhitespace();
      const char = this.peek();
      if (char === ']') {
        this.index += 1;
        return array;
      }
      this.expect(',');
    }
  }

  parseString() {
    this.expect('"');
    let output = '';
    while (this.index < this.text.length) {
      const char = this.text[this.index];
      this.index += 1;
      if (char === '"') {
        assertNoUnpairedSurrogates(output);
        return output;
      }
      if (char === '\\') {
        output += this.parseEscape();
        continue;
      }
      if (char.charCodeAt(0) <= 0x1f) {
        throw new Error(`Unescaped control character in string at byte ${this.index - 1}`);
      }
      output += char;
    }
    throw new Error('Unterminated JSON string');
  }

  parseEscape() {
    const char = this.text[this.index];
    this.index += 1;
    if (char === '"' || char === '\\' || char === '/') return char;
    if (char === 'b') return '\b';
    if (char === 'f') return '\f';
    if (char === 'n') return '\n';
    if (char === 'r') return '\r';
    if (char === 't') return '\t';
    if (char !== 'u') {
      throw new Error(`Invalid string escape at byte ${this.index - 1}`);
    }
    const hex = this.text.slice(this.index, this.index + 4);
    if (!/^[0-9A-Fa-f]{4}$/.test(hex)) {
      throw new Error(`Invalid unicode escape at byte ${this.index}`);
    }
    this.index += 4;
    return String.fromCharCode(Number.parseInt(hex, 16));
  }

  parseNumber() {
    const start = this.index;
    if (this.peek() === '-') {
      throw new Error('Negative JSON numbers are outside this prototype canonical subset');
    }
    if (this.peek() === '0') {
      this.index += 1;
      if (isDigit(this.peek())) {
        throw new Error(`Leading zero in JSON number at byte ${start}`);
      }
    } else {
      if (!isDigitOneToNine(this.peek())) {
        throw new Error(`Invalid JSON number at byte ${start}`);
      }
      while (isDigit(this.peek())) {
        this.index += 1;
      }
    }
    if (this.peek() === '.' || this.peek() === 'e' || this.peek() === 'E') {
      throw new Error('Non-integer JSON numbers are outside this prototype canonical subset');
    }
    const raw = this.text.slice(start, this.index);
    const asBigInt = BigInt(raw);
    if (asBigInt > BigInt(MAX_SAFE_JSON_INTEGER)) {
      throw new Error(`JSON integer exceeds safe range: ${raw}`);
    }
    return Number(asBigInt);
  }

  parseLiteral(raw, value) {
    if (this.text.slice(this.index, this.index + raw.length) !== raw) {
      throw new Error(`Invalid literal at byte ${this.index}`);
    }
    this.index += raw.length;
    return value;
  }

  expect(char) {
    if (this.text[this.index] !== char) {
      throw new Error(`Expected ${char} at byte ${this.index}`);
    }
    this.index += 1;
  }

  peek() {
    return this.text[this.index];
  }
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

function isDigitOneToNine(char) {
  return char >= '1' && char <= '9';
}

function assertNoUnpairedSurrogates(value) {
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);
    if (code >= 0xd800 && code <= 0xdbff) {
      const next = value.charCodeAt(index + 1);
      if (!(next >= 0xdc00 && next <= 0xdfff)) {
        throw new Error('Unpaired high surrogate is not canonicalizable');
      }
      index += 1;
    } else if (code >= 0xdc00 && code <= 0xdfff) {
      throw new Error('Unpaired low surrogate is not canonicalizable');
    }
  }
}

function parseJsonStrict(text) {
  return new StrictJsonParser(text).parse();
}

function readJsonStrict(filePath) {
  return parseJsonStrict(fs.readFileSync(filePath, 'utf8'));
}

function canonicalJson(value) {
  if (value === null) return 'null';
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (typeof value === 'number') {
    if (!Number.isSafeInteger(value) || value < 0) {
      throw new Error(`Unsafe or unsupported JSON number: ${value}`);
    }
    return String(value);
  }
  if (typeof value === 'string') {
    assertNoUnpairedSurrogates(value);
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalJson(item)).join(',')}]`;
  }
  if (typeof value === 'object') {
    const keys = Object.keys(value).sort();
    const members = keys.map((key) => {
      assertNoUnpairedSurrogates(key);
      const memberValue = value[key];
      if (typeof memberValue === 'undefined' || typeof memberValue === 'function') {
        throw new Error(`Unsupported JSON value for key: ${key}`);
      }
      return `${JSON.stringify(key)}:${canonicalJson(memberValue)}`;
    });
    return `{${members.join(',')}}`;
  }
  throw new Error(`Unsupported JSON value: ${typeof value}`);
}

function canonicalBytes(value) {
  return Buffer.from(canonicalJson(value), 'utf8');
}

function sha256Hex(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function base64url(bytes) {
  return Buffer.from(bytes)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/u, '');
}

function base64urlDecode(value) {
  if (!/^[A-Za-z0-9_-]+$/u.test(value)) {
    throw new Error('Invalid base64url value');
  }
  const padded = value.padEnd(value.length + ((4 - (value.length % 4)) % 4), '=');
  return Buffer.from(padded.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
}

function exportRawPublicKey(publicKey) {
  const der = publicKey.export({ type: 'spki', format: 'der' });
  if (der.length !== ED25519_SPKI_PREFIX.length + 32 || !der.subarray(0, ED25519_SPKI_PREFIX.length).equals(ED25519_SPKI_PREFIX)) {
    throw new Error('Unexpected Ed25519 SPKI public key format');
  }
  return der.subarray(ED25519_SPKI_PREFIX.length);
}

function publicKeyFromRaw(rawPublicKey) {
  if (rawPublicKey.length !== 32) {
    throw new Error('Ed25519 raw public key must be 32 bytes');
  }
  return createPublicKey({
    key: Buffer.concat([ED25519_SPKI_PREFIX, rawPublicKey]),
    type: 'spki',
    format: 'der',
  });
}

function publicKeyRecord(publicKey) {
  const raw = exportRawPublicKey(publicKey);
  return {
    raw,
    encoded: base64url(raw),
    fingerprintHex: sha256Hex(raw),
    fingerprint: `sha256:${sha256Hex(raw)}`,
  };
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${canonicalJson(value)}\n`, { mode: 0o644 });
}

function generatePrivateKeyFile(filePath) {
  if (fs.existsSync(filePath)) {
    throw new Error(`Refusing to overwrite existing private key: ${repoRel(filePath)}`);
  }
  const { privateKey, publicKey } = generateKeyPairSync('ed25519');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(
    filePath,
    privateKey.export({ type: 'pkcs8', format: 'pem' }),
    { mode: 0o600, flag: 'wx' },
  );
  fs.chmodSync(filePath, 0o600);
  return { privateKey, publicKey, mode: modeString(filePath) };
}

function loadPrivateKey(filePath) {
  return createPrivateKey(fs.readFileSync(filePath));
}

function modeString(filePath) {
  return `0${(fs.statSync(filePath).mode & 0o777).toString(8)}`;
}

function git(args) {
  return execFileSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
}

function checkIgnored(filePath) {
  return git(['check-ignore', repoRel(filePath)]);
}

function ensureIgnoredAndUntracked(filePath) {
  const ignored = checkIgnored(filePath);
  const status = git(['status', '--short', '--', repoRel(filePath)]);
  if (status !== '') {
    throw new Error(`Private key path appears in git status: ${status}`);
  }
  return ignored;
}

function utcMilliseconds(date) {
  return date.toISOString();
}

function uuidv7() {
  const timestamp = Date.now();
  const random = randomBytes(10);
  const bytes = Buffer.alloc(16);
  bytes.writeUIntBE(timestamp, 0, 6);
  bytes[6] = 0x70 | (random[0] & 0x0f);
  bytes[7] = random[1];
  bytes[8] = 0x80 | (random[2] & 0x3f);
  bytes[9] = random[3];
  bytes[10] = random[4];
  bytes[11] = random[5];
  bytes[12] = random[6];
  bytes[13] = random[7];
  bytes[14] = random[8];
  bytes[15] = random[9];
  const hex = bytes.toString('hex');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function eventCore(event) {
  const core = { ...event };
  delete core.signature;
  return core;
}

function prepareEvent(event) {
  event.payload_hash = sha256Hex(canonicalBytes(event.payload));
  return event;
}

function eventCoreBytes(event) {
  return canonicalBytes(eventCore(event));
}

function eventHash(event) {
  return sha256Hex(eventCoreBytes(event));
}

function eventSignatureInput(event) {
  return Buffer.concat([EVENT_PREFIX, eventCoreBytes(event)]);
}

function signEvent(event, privateKey) {
  prepareEvent(event);
  const signature = sign(null, eventSignatureInput(event), privateKey);
  event.signature = base64url(signature);
  return { event, eventHash: eventHash(event) };
}

function verifyEvent(event, rawPublicKey) {
  const expectedPayloadHash = sha256Hex(canonicalBytes(event.payload));
  if (event.payload_hash !== expectedPayloadHash) {
    return { ok: false, reason: 'payload_hash_mismatch' };
  }
  const signature = base64urlDecode(event.signature);
  if (signature.length !== 64) {
    return { ok: false, reason: 'invalid_signature_length' };
  }
  const publicKey = publicKeyFromRaw(rawPublicKey);
  const ok = verify(null, eventSignatureInput(event), publicKey, signature);
  return { ok, reason: ok ? 'ok' : 'signature_mismatch', eventHash: eventHash(event) };
}

function registryCore(registry) {
  const core = { ...registry };
  delete core.root_signature;
  return core;
}

function registryCoreBytes(registry) {
  return canonicalBytes(registryCore(registry));
}

function registrySignatureInput(registry) {
  return Buffer.concat([REGISTRY_PREFIX, registryCoreBytes(registry)]);
}

function signRegistry(registry, rootPrivateKey) {
  const signature = sign(null, registrySignatureInput(registry), rootPrivateKey);
  registry.root_signature = base64url(signature);
  return registry;
}

function verifyRegistry(registry) {
  const signature = base64urlDecode(registry.root_signature);
  if (signature.length !== 64) {
    return { ok: false, reason: 'invalid_root_signature_length' };
  }
  const rootPublicKey = publicKeyFromRaw(base64urlDecode(registry.root_public_key));
  const ok = verify(null, registrySignatureInput(registry), rootPublicKey, signature);
  return {
    ok,
    reason: ok ? 'ok' : 'root_signature_mismatch',
    snapshotHash: sha256Hex(registryCoreBytes(registry)),
  };
}

function possessionProofCore(proof) {
  const core = { ...proof };
  delete core.signature;
  return core;
}

function possessionProofSignatureInput(proof) {
  return Buffer.concat([POSSESSION_PREFIX, canonicalBytes(possessionProofCore(proof))]);
}

function signPossessionProof(proof, coordinatorPrivateKey) {
  proof.signature = base64url(sign(null, possessionProofSignatureInput(proof), coordinatorPrivateKey));
  return proof;
}

function possessionProofHash(proof) {
  return sha256Hex(canonicalBytes(proof));
}

function verifyPossessionProof(proof) {
  const signature = base64urlDecode(proof.signature);
  if (signature.length !== 64) {
    return { ok: false, reason: 'invalid_possession_signature_length' };
  }
  const publicKey = publicKeyFromRaw(base64urlDecode(proof.public_key));
  const ok = verify(null, possessionProofSignatureInput(proof), publicKey, signature);
  return { ok, reason: ok ? 'ok' : 'possession_signature_mismatch', proofHash: possessionProofHash(proof) };
}

function eventPath(sequence, hash) {
  return path.join(CONFIG.rootEventsDir, `${String(sequence).padStart(16, '0')}-${hash}.json`);
}

function assertTargetDoesNotExist(filePath) {
  if (fs.existsSync(filePath)) {
    throw new Error(`Refusing to overwrite existing artifact: ${repoRel(filePath)}`);
  }
}

function buildBaseEvent({ eventKind, coordinatorId, authorRole, parentEventIds, sequence, createdAt, nonce, previousAcceptedEventHash, signingKeyId, payload }) {
  return {
    schema_version: 'agent-event-envelope.v1',
    event_kind: eventKind,
    repo_identity: CONFIG.repoIdentity,
    branch: git(['branch', '--show-current']),
    base_commit: git(['rev-parse', 'HEAD']),
    experiment_namespace: CONFIG.experimentNamespace,
    event_id: uuidv7(),
    coordinator_id: coordinatorId,
    author_role: authorRole,
    parent_event_ids: parentEventIds,
    sequence,
    created_at: createdAt,
    nonce,
    payload_hash: '',
    previous_accepted_event_hash: previousAcceptedEventHash,
    signing_key_id: signingKeyId,
    signature_algorithm: 'Ed25519',
    payload,
    signature: '',
  };
}

function bootstrap() {
  assertTargetDoesNotExist(CONFIG.rootPrivateKeyPath);
  assertTargetDoesNotExist(CONFIG.codexPrivateKeyPath);
  assertTargetDoesNotExist(CONFIG.registryPath);
  assertTargetDoesNotExist(CONFIG.possessionProofPath);

  const rootCheckIgnore = checkIgnored(CONFIG.rootPrivateKeyPath);
  const codexCheckIgnoreBefore = checkIgnored(CONFIG.codexPrivateKeyPath);

  const rootKeys = generatePrivateKeyFile(CONFIG.rootPrivateKeyPath);
  const codexKeys = generatePrivateKeyFile(CONFIG.codexPrivateKeyPath);

  const rootMode = modeString(CONFIG.rootPrivateKeyPath);
  const codexMode = modeString(CONFIG.codexPrivateKeyPath);
  if (rootMode !== '0600' || codexMode !== '0600') {
    throw new Error(`Unexpected key mode root=${rootMode} codex=${codexMode}`);
  }

  const rootIgnoredAfter = ensureIgnoredAndUntracked(CONFIG.rootPrivateKeyPath);
  const codexIgnoredAfter = ensureIgnoredAndUntracked(CONFIG.codexPrivateKeyPath);

  const rootPublic = publicKeyRecord(rootKeys.publicKey);
  const codexPublic = publicKeyRecord(codexKeys.publicKey);
  const nowMs = Date.now();
  const initializedAt = utcMilliseconds(new Date(nowMs));
  const registeredAt = utcMilliseconds(new Date(nowMs + 1));

  const initPayload = {
    active_coordinators: [],
    registry_version: 1,
    revoked_coordinator_keys: [],
    root_key_id: CONFIG.rootKeyId,
    root_public_key: rootPublic.encoded,
    root_public_key_fingerprint: rootPublic.fingerprint,
  };

  const initEvent = prepareEvent(buildBaseEvent({
    eventKind: 'trust.registry.initialized',
    coordinatorId: CONFIG.rootCoordinatorId,
    authorRole: 'root',
    parentEventIds: [],
    sequence: 0,
    createdAt: initializedAt,
    nonce: randomBytes(16).toString('hex'),
    previousAcceptedEventHash: null,
    signingKeyId: CONFIG.rootKeyId,
    payload: initPayload,
  }));
  const initEventHash = eventHash(initEvent);

  const registryV1 = signRegistry({
    schema_version: 'agent-trust-registry.v1',
    repo_identity: CONFIG.repoIdentity,
    registry_version: 1,
    root_key_id: CONFIG.rootKeyId,
    root_public_key: rootPublic.encoded,
    root_public_key_fingerprint: rootPublic.fingerprint,
    active_coordinators: [],
    revoked_coordinator_keys: [],
    accepted_trust_event_hash: initEventHash,
    root_signature_algorithm: 'Ed25519',
    root_signature_key_id: CONFIG.rootKeyId,
    root_signature: '',
  }, rootKeys.privateKey);
  writeJson(CONFIG.registryPath, registryV1);

  signEvent(initEvent, rootKeys.privateKey);
  const initEventFile = eventPath(0, initEventHash);
  writeJson(initEventFile, initEvent);

  const proof = signPossessionProof({
    schema_version: 'agent-possession-proof.v1',
    repo_identity: CONFIG.repoIdentity,
    coordinator_id: CONFIG.codexCoordinatorId,
    public_key_id: CONFIG.codexKeyId,
    public_key: codexPublic.encoded,
    public_key_fingerprint: codexPublic.fingerprint,
    requested_role: 'coordinator',
    nonce: randomBytes(16).toString('hex'),
    trust_registry_initialized_event_id: initEvent.event_id,
    signature_algorithm: 'Ed25519',
    signature: '',
  }, codexKeys.privateKey);
  writeJson(CONFIG.possessionProofPath, proof);
  const proofHash = possessionProofHash(proof);

  const registeredPayload = {
    allowed_role: 'coordinator',
    coordinator_id: CONFIG.codexCoordinatorId,
    possession_proof_hash: proofHash,
    prior_trust_event_hash: initEventHash,
    public_key: codexPublic.encoded,
    public_key_fingerprint: codexPublic.fingerprint,
    public_key_id: CONFIG.codexKeyId,
    registry_version: 2,
    sequence_start: 1,
    valid_from: registeredAt,
    valid_until: null,
  };

  const registeredEvent = signEvent(buildBaseEvent({
    eventKind: 'coordinator.registered',
    coordinatorId: CONFIG.rootCoordinatorId,
    authorRole: 'root',
    parentEventIds: [initEvent.event_id],
    sequence: 1,
    createdAt: registeredAt,
    nonce: randomBytes(16).toString('hex'),
    previousAcceptedEventHash: initEventHash,
    signingKeyId: CONFIG.rootKeyId,
    payload: registeredPayload,
  }), rootKeys.privateKey);

  const registeredEventFile = eventPath(1, registeredEvent.eventHash);
  writeJson(registeredEventFile, registeredEvent.event);

  const registryV2 = signRegistry({
    schema_version: 'agent-trust-registry.v1',
    repo_identity: CONFIG.repoIdentity,
    registry_version: 2,
    root_key_id: CONFIG.rootKeyId,
    root_public_key: rootPublic.encoded,
    root_public_key_fingerprint: rootPublic.fingerprint,
    active_coordinators: [
      {
        coordinator_id: CONFIG.codexCoordinatorId,
        public_key_id: CONFIG.codexKeyId,
        public_key: codexPublic.encoded,
        public_key_fingerprint: codexPublic.fingerprint,
        allowed_role: 'coordinator',
        sequence_start: 1,
        valid_from: registeredAt,
        valid_until: null,
        registered_event_hash: registeredEvent.eventHash,
      },
    ],
    revoked_coordinator_keys: [],
    accepted_trust_event_hash: registeredEvent.eventHash,
    root_signature_algorithm: 'Ed25519',
    root_signature_key_id: CONFIG.rootKeyId,
    root_signature: '',
  }, rootKeys.privateKey);
  writeJson(CONFIG.registryPath, registryV2);

  const verification = verifyChain();

  return {
    command: 'bootstrap',
    language_library_choice: 'Node.js v22 built-in node:crypto Ed25519 and SHA-256; custom no-dependency JCS-narrowed canonical JSON.',
    git_check_ignore: {
      sami_root_before: rootCheckIgnore,
      codex_before: codexCheckIgnoreBefore,
      sami_root_after: rootIgnoredAfter,
      codex_after: codexIgnoredAfter,
    },
    private_key_modes: {
      sami_root: rootMode,
      codex: codexMode,
    },
    public_key_fingerprints: {
      sami_root_sha256_raw_hex: rootPublic.fingerprintHex,
      codex_sha256_raw_hex: codexPublic.fingerprintHex,
    },
    artifacts: {
      registry: repoRel(CONFIG.registryPath),
      possession_proof: repoRel(CONFIG.possessionProofPath),
      trust_registry_initialized_event: repoRel(initEventFile),
      coordinator_registered_event: repoRel(registeredEventFile),
    },
    hashes: {
      trust_registry_initialized_event_hash: initEventHash,
      possession_proof_hash: proofHash,
      coordinator_registered_event_hash: registeredEvent.eventHash,
      final_registry_core_hash: verification.registry.snapshotHash,
    },
    verification,
  };
}

function listRootEventFiles() {
  if (!fs.existsSync(CONFIG.rootEventsDir)) {
    throw new Error(`Missing root events dir: ${repoRel(CONFIG.rootEventsDir)}`);
  }
  return fs.readdirSync(CONFIG.rootEventsDir)
    .filter((name) => name.endsWith('.json'))
    .sort()
    .map((name) => path.join(CONFIG.rootEventsDir, name));
}

function verifyFilenameHash(filePath, computedHash) {
  const fileName = path.basename(filePath);
  return fileName.endsWith(`-${computedHash}.json`);
}

function verifyChain() {
  const registry = readJsonStrict(CONFIG.registryPath);
  const registryResult = verifyRegistry(registry);
  const rootRawPublicKey = base64urlDecode(registry.root_public_key);
  const codexRecord = registry.active_coordinators.find((record) => record.coordinator_id === CONFIG.codexCoordinatorId);
  if (!codexRecord) {
    throw new Error('Final registry does not contain active Codex coordinator');
  }
  const codexRawPublicKey = base64urlDecode(codexRecord.public_key);
  const proof = readJsonStrict(CONFIG.possessionProofPath);
  const proofResult = verifyPossessionProof(proof);
  const eventResults = {};
  const eventFiles = listRootEventFiles();
  let initEvent;
  let initEventFile;
  let registeredEvent;
  let registeredEventFile;
  for (const filePath of eventFiles) {
    const event = readJsonStrict(filePath);
    const result = verifyEvent(event, rootRawPublicKey);
    const filenameHashOk = result.ok && verifyFilenameHash(filePath, result.eventHash);
    eventResults[event.event_kind] = {
      ok: result.ok,
      reason: result.reason,
      event_hash: result.eventHash,
      filename_hash_ok: filenameHashOk,
      path: repoRel(filePath),
    };
    if (event.event_kind === 'trust.registry.initialized') {
      initEvent = event;
      initEventFile = filePath;
    } else if (event.event_kind === 'coordinator.registered') {
      registeredEvent = event;
      registeredEventFile = filePath;
    }
  }
  if (!initEvent || !registeredEvent) {
    throw new Error('Missing expected trust bootstrap events');
  }
  const initHash = eventResults['trust.registry.initialized'].event_hash;
  const registeredHash = eventResults['coordinator.registered'].event_hash;
  const proofHashMatchesEvent = possessionProofHash(proof) === registeredEvent.payload.possession_proof_hash;
  const proofPublicKeyMatchesRegistry = proof.public_key === codexRecord.public_key;
  const proofHashMatchesVerification = proofResult.proofHash === registeredEvent.payload.possession_proof_hash;
  const hashChainOk = registeredEvent.previous_accepted_event_hash === initHash;
  const parentOk = registeredEvent.parent_event_ids.includes(initEvent.event_id);
  const priorTrustOk = registeredEvent.payload.prior_trust_event_hash === initHash;
  const registryAcceptedTrustOk = registry.accepted_trust_event_hash === registeredHash;
  const registryCoordinatorEventOk = codexRecord.registered_event_hash === registeredHash;
  return {
    registry: registryResult,
    events: eventResults,
    possession_proof: {
      ...proofResult,
      proof_hash_matches_event: proofHashMatchesEvent,
      proof_public_key_matches_registry: proofPublicKeyMatchesRegistry,
      proof_hash_matches_verification: proofHashMatchesVerification,
      path: repoRel(CONFIG.possessionProofPath),
    },
    hash_chain: {
      ok: hashChainOk,
      previous_accepted_event_hash: registeredEvent.previous_accepted_event_hash,
      expected_previous_accepted_event_hash: initHash,
    },
    parent_link: {
      ok: parentOk,
      parent_event_id: initEvent.event_id,
    },
    prior_trust_link: {
      ok: priorTrustOk,
      prior_trust_event_hash: registeredEvent.payload.prior_trust_event_hash,
      expected_prior_trust_event_hash: initHash,
    },
    final_registry_links: {
      accepted_trust_event_hash_ok: registryAcceptedTrustOk,
      registered_event_hash_ok: registryCoordinatorEventOk,
    },
    files: {
      trust_registry_initialized_event: repoRel(initEventFile),
      coordinator_registered_event: repoRel(registeredEventFile),
    },
  };
}

function selfTest() {
  const input = '{"b":2,"a":1,"nested":{"z":0,"y":"yes"},"arr":[3,{"d":4,"c":"see"}]}';
  const expected = '{"a":1,"arr":[3,{"c":"see","d":4}],"b":2,"nested":{"y":"yes","z":0}}';
  const actual = canonicalJson(parseJsonStrict(input));
  if (actual !== expected) {
    throw new Error(`Canonical JSON vector failed:\nexpected ${expected}\nactual   ${actual}`);
  }
  let duplicateRejected = false;
  try {
    parseJsonStrict('{"a":1,"a":2}');
  } catch {
    duplicateRejected = true;
  }
  if (!duplicateRejected) {
    throw new Error('Duplicate-key JSON vector was not rejected');
  }
  const { privateKey, publicKey } = generateKeyPairSync('ed25519');
  const message = Buffer.concat([EVENT_PREFIX, canonicalBytes({ a: 1 })]);
  const signature = sign(null, message, privateKey);
  const signatureOk = verify(null, message, publicKey, signature);
  if (!signatureOk) {
    throw new Error('Ed25519 sign/verify self-test failed');
  }
  return {
    command: 'self-test',
    canonical_json_vector: 'pass',
    duplicate_key_rejection: 'pass',
    ed25519_sign_verify: 'pass',
  };
}

function printResult(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

function main() {
  const command = process.argv[2] ?? 'verify';
  if (command === 'self-test') {
    printResult(selfTest());
    return;
  }
  if (command === 'bootstrap') {
    printResult(bootstrap());
    return;
  }
  if (command === 'verify') {
    printResult({ command: 'verify', verification: verifyChain() });
    return;
  }
  throw new Error(`Unknown command: ${command}`);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
