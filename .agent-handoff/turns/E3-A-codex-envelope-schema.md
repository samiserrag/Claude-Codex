Previous experiment terminal turn: Experiment 2 / E2-008-codex-rescope-acceptance.md

# E3-A - Codex envelope schema

## Agent
Codex

## Phase
architecture

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis
and Portability Findings sections per E1-FIX-001. This is an E3-A
architecture-only schema/spec turn. It does not approve protocol changes,
implement validation, choose libraries, create event directories, create
keys, install dependencies, enable bridges, commit, push, or open a PR.

## Files touched this turn
- `.agent-handoff/turns/E3-A-codex-envelope-schema.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami explicitly authorized E3-A as a design-only event-envelope
  schema/spec turn, with no implementation, installs, bridge enablement,
  commits, pushes, or protocol approval implied.
- FILE VERIFIED: `PROTOCOL.md` contains the active Stopgate Rule: only Sami
  can move proposed items to approved.
- FILE VERIFIED: `COLLAB.md` records E3-A authorization and keeps
  `COLLAB.md` transitional pending the new state model.
- FILE VERIFIED: `E2-001-codex-architecture.md` proposes signed append-only
  events with repo identity, branch, base commit, event id, coordinator id,
  sequence, nonce, payload hash, previous accepted event hash, payload, and
  signature.
- FILE VERIFIED: `E2-003-codex-revision.md` defines the Sami-rooted Ed25519
  trust bootstrap, root-signed registry snapshots, coordinator registration,
  benign fork tiebreaking, and the local recovery channel.
- FILE VERIFIED: `E2-007-claude-rescope-revision.md` restores Tier 0 manual
  handoff and Tier 1 inbox/outbox files as the binding reference path, with
  adapters deferred to read-only evaluation.
- FILE VERIFIED: `E2-008-codex-rescope-acceptance.md` accepts the E2-007
  rescope and hands E3-A back to Sami for explicit authorization.
- FILE VERIFIED: `AGENTS.md` requires append-only turn notes, COLLAB.md
  handoff updates, Chrome-first browser validation when browser QA is needed,
  and no installs or git operations without Sami's approval.
- INFERENCE: E3-A should define enough deterministic structure for Claude to
  critique and for E3-B to implement later, but must not generate cryptographic
  artifacts or mark the schema approved.
- UNKNOWN: the actual canonical JSON library, Ed25519 library, E3-B
  programming language, and CI enforcement path remain intentionally undecided.

## Decisions (binding)
- Proposed schema decision for critique: the event envelope is a strict JSON
  object using `agent-event-envelope.v1`, Ed25519 signatures, SHA-256 payload
  hashes, SHA-256 event hashes, and a monotonic per-coordinator sequence.
- Proposed serialization decision for critique: canonical bytes use an RFC
  8785 JCS-compatible deterministic JSON subset, with integer-only numbers,
  sorted object keys at every nesting level, UTF-8 bytes, and no whitespace.
- Proposed signature decision for critique: the Ed25519 signature covers a
  domain-separation prefix plus canonical JSON for the envelope with the
  `signature` field omitted. `signing_key_id` and `signature_algorithm` are
  outside the `signature` field so they are covered.
- Proposed storage decision for critique: accepted events use hybrid
  sequence-plus-content-addressed filenames under `.agent-handoff/events/`;
  inbox/outbox files carry the same signed envelopes before import; rejected
  inputs go to quarantine with metadata and redacted snippets only.
- These decisions are not protocol approval. They are the E3-A proposal for
  Claude's architecture critique and Sami's later explicit approval decision.

## Canonical event envelope

The envelope is a JSON object. Unknown top-level fields are invalid for
`agent-event-envelope.v1`; extensions require a later schema version or a
kind-specific payload field.

Required fields:

| Field | Type | Constraints |
|---|---|---|
| `schema_version` | string | Exact value `agent-event-envelope.v1`. |
| `event_kind` | string | One of the supported event kinds for the active schema. Pattern before enum check: `^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$`, length 3 to 96. |
| `repo_identity` | string | Configured repo identity, exact-match against trust registry. URI-like string, 1 to 200 chars, no ASCII control chars. Example: `github:samiserrag/Claude-Codex`. |
| `branch` | string | Git branch or ref name, 1 to 255 chars, no ASCII control chars, no `..`, no trailing slash, no backslash. Must match the import policy's current or explicit review branch. |
| `base_commit` | string | Lowercase Git object id: 40 hex chars for SHA-1 repos or 64 hex chars for SHA-256 repos. Must be an ancestor of the current or explicit review branch unless imported as review-only data. |
| `experiment_namespace` | string | Pattern `^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$`. Example: `E3`. |
| `event_id` | string | Lowercase RFC 9562 UUID string. UUIDv7 is preferred for new events; the verifier treats it as an opaque id and does not trust timestamp bits. |
| `coordinator_id` | string | Pattern `^[a-z][a-z0-9_-]{1,63}$`. For root trust events, use a root coordinator id such as `sami-root`. |
| `author_role` | string | Enum: `root`, `coordinator`, `consultant_proxy`, `subagent_proxy`, `human_proxy`, `policy`. Must match the signer role allowed by the active trust registry. |
| `parent_event_ids` | array | Array of 0 to 32 unique lowercase UUID strings. Parents express semantic dependency; the per-coordinator hash chain is separate. |
| `sequence` | integer | Monotonic per `repo_identity` plus `experiment_namespace` plus `coordinator_id`. Range 0 to 9007199254740991. Root genesis may use 0. Normal coordinator sequence starts at the registry's `sequence_start`, usually 1. |
| `created_at` | string | UTC RFC 3339 timestamp with exactly millisecond precision: `YYYY-MM-DDTHH:MM:SS.sssZ`. Leap seconds are invalid. |
| `nonce` | string | 16 random bytes encoded as 32 lowercase hex chars. Unique per coordinator id. |
| `payload_hash` | string | SHA-256 of the canonical JSON bytes of `payload`, lowercase hex, 64 chars. |
| `previous_accepted_event_hash` | string or null | Lowercase SHA-256 event hash of the previous accepted event for the same coordinator chain, or null for that chain's genesis/start event. |
| `signing_key_id` | string | Pattern `^[A-Za-z0-9][A-Za-z0-9._:-]{0,95}$`. Must resolve to exactly one active root or coordinator key in the trust registry at validation time. |
| `signature_algorithm` | string | Exact value `Ed25519`. |
| `payload` | object | Kind-specific JSON object. Arrays, null, strings, or numbers are invalid as the top-level payload. |
| `signature` | string | Ed25519 signature bytes encoded as unpadded base64url. Raw length 64 bytes; encoded length 86 chars. |

Optional top-level fields:

| Field | Type | Constraints |
|---|---|---|
| `expires_at` | string or null | Same timestamp form as `created_at`. If present, import after this instant is stale unless policy explicitly accepts review-only import. |
| `recipient_coordinator_ids` | array | Array of 1 to 16 coordinator ids. Absence means broadcast to the repo coordination layer. |
| `parent_event_hashes` | array | Array of 0 to 32 lowercase SHA-256 hashes. If present, each listed parent id must resolve to the matching hash. |
| `supersedes_event_ids` | array | Array of 0 to 32 event ids. Used for explicit supersession; does not delete or rewrite the superseded event. |

Supported initial event kinds:

- Trust and key events: `trust.registry.initialized`,
  `coordinator.registered`, `coordinator.key_rotation.requested`,
  `coordinator.key_rotated`, `coordinator.key_revoked`.
- Coordinator exchange events: `message.created`, `task.requested`,
  `task.accepted`, `task.in_flight`, `subagent.spawned`,
  `subagent.result`, `blocked_on_you`.
- Governance events: `audit_gate.opened`, `audit_gate.cleared`,
  `decision.proposed`, `decision.approved`, `stopgate.requested`,
  `stopgate.approved`, `stopgate.denied`, `fork.resolved`.
- Safety events: `quarantine.created`, `recovery.request_observed`,
  `recovery.abuse_detected`.

Unknown event kinds are quarantined, not ignored, because silently ignoring a
new kind can hide an attempted policy bypass.

Derived values that are not envelope fields:

- `payload_hash = sha256(canonical_json(payload))`.
- `event_core_bytes = canonical_json(envelope_without_signature)`.
- `event_hash = sha256(event_core_bytes)`, lowercase hex. This is the hash
  used in `previous_accepted_event_hash`, filenames, fork tiebreaking, and
  accepted-event references.
- `signature_input = ascii("agent-event-envelope:v1\n") || event_core_bytes`.

## Canonical JSON serialization rules

The schema family is RFC 8785 JSON Canonicalization Scheme, narrowed to a
portable subset so E3-B can implement it consistently in more than one
language. This turn does not choose the actual library.

Rules:

- Input JSON must be UTF-8 without a byte order mark.
- Parsed objects must reject duplicate member names before canonicalization.
- The top-level value for an event envelope must be an object.
- Object members are sorted at every nesting level according to RFC 8785 JCS
  property sorting. Because all envelope field names are ASCII, their order is
  also normal ASCII lexicographic order.
- No whitespace is emitted outside string values.
- Strings use JSON escaping compatible with RFC 8785. Control characters,
  quote, and backslash are escaped. Solidus is not escaped. Non-control
  Unicode characters remain Unicode and are encoded as UTF-8 bytes.
- Unicode is not normalized. `NFC` and `NFD` strings that look similar are
  different signed values. Unpaired surrogates and invalid UTF-8 are rejected.
- Numbers are restricted to integers in the safe range
  `0..9007199254740991` for envelope fields. Payload schemas should use
  strings for decimals, durations, file sizes above that range, or arbitrary
  precision values. Floating point, negative zero, `NaN`, and infinities are
  invalid.
- Arrays preserve order exactly. Any array that is specified as unique must be
  checked after parsing and before signing.
- Source file member order is irrelevant. A verifier re-parses and
  re-canonicalizes before hashing or verifying.
- Canonical bytes are the UTF-8 encoding of the canonical JSON text.

## Signature coverage rule

For an event envelope:

1. Parse JSON and reject malformed JSON, duplicate keys, unsupported schema
   version, unknown top-level fields, or invalid field types.
2. Remove only the top-level `signature` member.
3. Canonicalize the remaining envelope using the rules above.
4. Construct signing bytes as:

   `ascii("agent-event-envelope:v1\n") || canonical_json(envelope_without_signature)`

5. Verify the Ed25519 signature in `signature` with the public key selected by
   `repo_identity`, `coordinator_id`, `author_role`, `signing_key_id`,
   `created_at`, `sequence`, and the active trust registry.

The signature covers `schema_version`, `event_kind`, `repo_identity`,
`branch`, `base_commit`, `experiment_namespace`, `event_id`,
`coordinator_id`, `author_role`, `parent_event_ids`, `sequence`,
`created_at`, `nonce`, `payload_hash`, `previous_accepted_event_hash`,
`signing_key_id`, `signature_algorithm`, optional top-level fields, and the
entire `payload`. It does not cover the `signature` field itself.

The domain-separation prefix prevents a valid signature over another message
type from being reused as an event signature. A future schema version must use
a different prefix.

## Trust-registry snapshot shape

The future `.agent-handoff/trust/agents.json` snapshot is a signed current
view derived from root-signed trust events. A Git commit that edits the file
without a valid root signature is not authority.

Required snapshot fields:

| Field | Type | Constraints |
|---|---|---|
| `schema_version` | string | Exact value `agent-trust-registry.v1`. |
| `repo_identity` | string | Same configured repo identity used by event envelopes. |
| `registry_version` | integer | Monotonic integer in range 1 to 9007199254740991. |
| `root_key_id` | string | Root signing key id, same constraints as `signing_key_id`. |
| `root_public_key` | string | Raw Ed25519 public key, 32 bytes, unpadded base64url, encoded length 43 chars. |
| `root_public_key_fingerprint` | string | `sha256:` plus lowercase SHA-256 hex of the raw public key bytes. |
| `active_coordinators` | array | Array of active coordinator records, sorted by `coordinator_id` then `public_key_id` in canonical snapshots. |
| `revoked_coordinator_keys` | array | Array of revoked coordinator key records, sorted by revocation event hash. Empty array if none. |
| `accepted_trust_event_hash` | string | Lowercase SHA-256 event hash of the latest accepted root-signed trust event represented by this snapshot. |
| `root_signature_algorithm` | string | Exact value `Ed25519`. |
| `root_signature_key_id` | string | Must equal `root_key_id` unless a later root-rotation schema changes this rule. |
| `root_signature` | string | Root Ed25519 signature, 64 raw bytes, unpadded base64url, encoded length 86 chars. |

Active coordinator record:

| Field | Type | Constraints |
|---|---|---|
| `coordinator_id` | string | Same coordinator id constraints as event envelopes. |
| `public_key_id` | string | Key id used by `signing_key_id`. Unique within the snapshot. |
| `public_key` | string | Raw Ed25519 public key, 32 bytes, unpadded base64url, encoded length 43 chars. |
| `public_key_fingerprint` | string | `sha256:` plus lowercase SHA-256 hex of raw public key bytes. |
| `allowed_role` | string | One of the allowed event `author_role` values. Normal Codex/Claude coordinators use `coordinator`. |
| `sequence_start` | integer | First valid event sequence for this key. Usually 1. |
| `valid_from` | string | UTC RFC 3339 millisecond timestamp. |
| `valid_until` | string or null | Null for active open-ended keys; timestamp for scheduled sunset. |
| `registered_event_hash` | string | Event hash of the root-signed registration event. |

Revoked coordinator key record:

| Field | Type | Constraints |
|---|---|---|
| `coordinator_id` | string | Affected coordinator. |
| `public_key_id` | string | Revoked key id. |
| `public_key_fingerprint` | string | Fingerprint of the revoked key. |
| `revoked_at` | string | UTC RFC 3339 millisecond timestamp. |
| `revocation_event_hash` | string | Event hash of the root-signed revocation event. |
| `reason_code` | string | Pattern `^[a-z][a-z0-9_]{1,63}$`; examples: `rotation`, `lost_key`, `suspected_compromise`. |

Registry signature coverage:

- `registry_core_bytes = canonical_json(agents_json_without_root_signature)`.
- `registry_signature_input = ascii("agent-trust-registry:v1\n") || registry_core_bytes`.
- `root_signature = Ed25519(root_private_key, registry_signature_input)`.

`root_signature_key_id` and `root_signature_algorithm` are covered because
only `root_signature` is omitted for registry signing.

## File naming convention

This turn specifies future paths only. It does not create any of these
directories.

Tier 0 manual handoff remains the current human-readable reference:

- `.agent-handoff/turns/<turn-id>-<agent>-<summary>.md`
- `COLLAB.md` handoff fields remain transitional current state until a later
  approved event-derived view exists.

Tier 1 authoritative accepted events:

- `.agent-handoff/events/<coordinator_id>/<sequence_16>-<event_hash>.json`
- `sequence_16` is zero-padded decimal sequence, 16 digits.
- `event_hash` is the full 64-char lowercase SHA-256 event hash.
- Example:
  `.agent-handoff/events/codex/0000000000000001/` is not used because it
  creates nested single-file directories. Use one file:
  `.agent-handoff/events/codex/0000000000000001-<event_hash>.json`.
- Accepted root trust events use the root coordinator id, for example
  `.agent-handoff/events/sami-root/0000000000000000-<event_hash>.json`.

Inbox/outbox exchange:

- `.agent-handoff/outbox/<coordinator_id>/<sequence_16>-<event_hash>.json`
  for events produced by that coordinator and ready for another coordinator
  to import.
- `.agent-handoff/inbox/<coordinator_id>/<sender_id>-<sequence_16>-<event_hash>.json`
  for events copied or delivered to the receiving coordinator.
- Importing from inbox never executes the payload. It runs validation and
  policy checks first, then either writes the event to authoritative
  `.agent-handoff/events/` or writes a quarantine record.

Quarantine:

- `.agent-handoff/quarantine/<yyyy>/<mm>/<raw_or_event_hash>.quarantine.json`
- If a valid event hash can be computed, use the event hash.
- If JSON cannot be parsed or canonicalized, use
  `raw-<sha256_of_raw_bytes>`.
- Quarantine records are metadata plus redacted snippets only, not raw copies
  of rejected payloads.

Trust:

- `.agent-handoff/trust/agents.json` for the current root-signed registry
  snapshot.
- `.agent-handoff/trust/events/<sequence_16>-<event_hash>.json` for
  root-signed trust events if E3-B chooses a trust-specific mirror. The
  authoritative event still lives under `.agent-handoff/events/sami-root/`.
- `.agent-handoff/trust/archive/agents-v<registry_version>-<snapshot_hash>.json`
  for older signed snapshots if archival snapshots are approved later.

Local gitignored state:

- `.agent-handoff/local/keys/` for root and coordinator private keys.
- `.agent-handoff/local/recovery/recovery.txt` for the E2-003 recovery
  channel.
- `.agent-handoff/local/watermarks/<coordinator_id>.json` for last imported
  hashes and sequences.
- `.agent-handoff/local/nonces/<coordinator_id>.json` or equivalent for local
  replay caches if E3-B needs a cache in addition to accepted event replay.

E3-B must add or verify the gitignore rule before creating anything under
`.agent-handoff/local/`; this E3-A turn does not edit `.gitignore`.

## Quarantine rules

An inbound file is quarantined when any import, replay, or policy check fails.
Quarantine is the default for ambiguity.

Quarantine triggers:

- Malformed bytes: non-UTF-8 input, byte order mark, malformed JSON,
  duplicate object keys, unpaired surrogates, invalid canonicalization input,
  or file size above the approved cap.
- Schema failure: missing required field, invalid type, unknown top-level
  field, unsupported schema version, unknown event kind, invalid timestamp,
  invalid hash length, invalid signature encoding, unsafe number, or invalid
  payload shape.
- Hash failure: `payload_hash` mismatch, uncomputable event hash, or
  `previous_accepted_event_hash` mismatch.
- Signature failure: missing signature, unknown signing key, revoked or expired
  key, role mismatch, invalid Ed25519 signature, or registry snapshot with an
  invalid root signature.
- Replay failure: duplicate nonce, duplicate event id with different content,
  duplicate sequence with different content, exact replay delivered as
  actionable input, or event signed before the key's valid window.
- Lineage failure: repo identity mismatch, branch mismatch, base commit not an
  ancestor of the allowed branch, missing parent, non-accepted parent, or fork
  requiring Sami intervention.
- Policy failure: payload requests an install, bridge enablement, global
  config mutation, git operation, deletion, protocol approval, or
  proposed-to-approved transition without explicit Sami approval.
- Safety failure: detected secret, private key material, token-like value,
  credential URL, prompt-injection instruction, or cross-repo private context
  leak.
- Budget or freshness failure: expired `expires_at`, stale branch/base,
  over-budget automation trigger, or repeated invalid delivery.

Quarantine metadata:

- `quarantine_schema_version`: exact value `agent-quarantine.v1`.
- `quarantine_id`: local UUIDv7 generated by the quarantining coordinator.
- `observed_at`: UTC RFC 3339 millisecond timestamp.
- `observed_by_coordinator_id`: coordinator that performed validation.
- `source_path`: repo-relative path where the input was observed.
- `raw_sha256`: SHA-256 of raw input bytes, lowercase hex.
- `parse_status`: `unparsed`, `parsed`, or `canonicalized`.
- Parseable event hints when available: `event_id`, `event_hash`,
  `event_kind`, `repo_identity`, `coordinator_id`, `sequence`, `nonce`,
  `created_at`.
- `reason_codes`: array of stable codes such as `missing_signature`,
  `payload_hash_mismatch`, `duplicate_nonce`, `unknown_event_kind`,
  `prompt_injection_suspected`.
- `policy_basis`: short string naming the rule source, for example
  `Stopgate Rule`, `E3-A schema`, or `trust registry`.
- `severity`: `info`, `warning`, `blocked`, or `security`.
- `redacted_snippets`: bounded snippets as described below.
- `recommended_recovery`: `request_resend`, `request_rebase`,
  `ask_sami`, `rotate_key`, `pause_automation`, or `none`.

Redaction rules:

- Never store raw secrets, private keys, cookies, tokens, environment values,
  credential-bearing URLs, or complete prompt-injection payloads in quarantine.
- Preserve field names and structural path where useful; replace sensitive
  values with `[REDACTED:<reason>]`.
- For malformed JSON, keep at most the first 512 bytes after text-based secret
  redaction and control-character escaping.
- For parsed JSON, keep only the smallest field-level snippet needed to explain
  the failure, capped at 256 chars per snippet and 2048 chars total.
- Do not include a hash of a suspected secret value. `raw_sha256` of the whole
  rejected file is enough for local deduplication without creating a
  brute-force oracle for short secrets.
- Quarantine records cannot authorize recovery, key rotation, approval,
  deletion, or execution. They can only inform the next human or coordinator
  decision.

## Minimal fixtures

E3-B should materialize these as real fixture files with real Ed25519
signatures after the implementation language and crypto library are chosen.
E3-A intentionally does not generate key material or cryptographic artifacts.
The JSON below is concrete at schema level; placeholders such as
`<ed25519-signature-86-base64url>` are not valid until E3-B replaces them.
A fixture set must not be considered passing while placeholders remain.

Fixture key labels:

- Root key id: `fixture-sami-root-2026-05-15`.
- Codex key id: `fixture-codex-2026-05-15`.
- Claude key id may be added later but is not needed for the minimal E3-B
  import tests.
- The fixed nonce values below are deterministic fixture inputs only. Runtime
  events must use random 16-byte nonces.

Valid fixture 1: `trust.registry.initialized` bootstrap genesis.

```json
{
  "schema_version": "agent-event-envelope.v1",
  "event_kind": "trust.registry.initialized",
  "repo_identity": "github:samiserrag/Claude-Codex",
  "branch": "main",
  "base_commit": "4543fc44be3bd529d5ba57429a913b97f2679698",
  "experiment_namespace": "E3",
  "event_id": "019e5a00-0000-7000-8000-000000000001",
  "coordinator_id": "sami-root",
  "author_role": "root",
  "parent_event_ids": [],
  "sequence": 0,
  "created_at": "2026-05-15T00:00:00.000Z",
  "nonce": "00000000000000000000000000000001",
  "payload_hash": "<sha256-canonical-payload-64-hex>",
  "previous_accepted_event_hash": null,
  "signing_key_id": "fixture-sami-root-2026-05-15",
  "signature_algorithm": "Ed25519",
  "payload": {
    "registry_version": 1,
    "root_key_id": "fixture-sami-root-2026-05-15",
    "root_public_key": "<root-public-key-43-base64url>",
    "root_public_key_fingerprint": "sha256:<root-public-key-sha256-64-hex>",
    "active_coordinators": [],
    "revoked_coordinator_keys": []
  },
  "signature": "<ed25519-signature-86-base64url>"
}
```

Valid fixture 2: `coordinator.registered` root-signed coordinator
registration.

```json
{
  "schema_version": "agent-event-envelope.v1",
  "event_kind": "coordinator.registered",
  "repo_identity": "github:samiserrag/Claude-Codex",
  "branch": "main",
  "base_commit": "4543fc44be3bd529d5ba57429a913b97f2679698",
  "experiment_namespace": "E3",
  "event_id": "019e5a00-0000-7000-8000-000000000002",
  "coordinator_id": "sami-root",
  "author_role": "root",
  "parent_event_ids": ["019e5a00-0000-7000-8000-000000000001"],
  "sequence": 1,
  "created_at": "2026-05-15T00:01:00.000Z",
  "nonce": "00000000000000000000000000000002",
  "payload_hash": "<sha256-canonical-payload-64-hex>",
  "previous_accepted_event_hash": "<event-hash-of-fixture-1-64-hex>",
  "signing_key_id": "fixture-sami-root-2026-05-15",
  "signature_algorithm": "Ed25519",
  "payload": {
    "registry_version": 2,
    "coordinator_id": "codex",
    "public_key_id": "fixture-codex-2026-05-15",
    "public_key": "<codex-public-key-43-base64url>",
    "public_key_fingerprint": "sha256:<codex-public-key-sha256-64-hex>",
    "allowed_role": "coordinator",
    "sequence_start": 1,
    "valid_from": "2026-05-15T00:01:00.000Z",
    "valid_until": null,
    "possession_proof_hash": "<sha256-possession-proof-64-hex>",
    "prior_trust_event_hash": "<event-hash-of-fixture-1-64-hex>"
  },
  "signature": "<ed25519-signature-86-base64url>"
}
```

Valid fixture 3: ordinary `message.created` signed by the registered Codex
coordinator.

```json
{
  "schema_version": "agent-event-envelope.v1",
  "event_kind": "message.created",
  "repo_identity": "github:samiserrag/Claude-Codex",
  "branch": "main",
  "base_commit": "4543fc44be3bd529d5ba57429a913b97f2679698",
  "experiment_namespace": "E3",
  "event_id": "019e5a00-0000-7000-8000-000000000003",
  "coordinator_id": "codex",
  "author_role": "coordinator",
  "parent_event_ids": ["019e5a00-0000-7000-8000-000000000002"],
  "sequence": 1,
  "created_at": "2026-05-15T00:02:00.000Z",
  "nonce": "00000000000000000000000000000003",
  "payload_hash": "<sha256-canonical-payload-64-hex>",
  "previous_accepted_event_hash": null,
  "signing_key_id": "fixture-codex-2026-05-15",
  "signature_algorithm": "Ed25519",
  "payload": {
    "message_markdown": "E3-B should validate this signed message fixture before importing it.",
    "requested_next_agent": "claude",
    "scope": "schema-validation-fixture"
  },
  "signature": "<ed25519-signature-86-base64url>"
}
```

Invalid fixture requirements:

- `invalid.missing_signature.json`: same as valid fixture 3 with the
  `signature` field removed. Expected reason: `missing_signature`.
- `invalid.broken_hash_chain.json`: same as valid fixture 3 with
  `previous_accepted_event_hash` set to a non-null hash that does not match
  the accepted Codex predecessor. Expected reason:
  `previous_event_hash_mismatch`.
- `invalid.duplicate_nonce.json`: a different Codex event with a new
  `event_id` but nonce `00000000000000000000000000000003`. Expected reason:
  `duplicate_nonce`.
- `invalid.malformed_json.json`: bytes containing malformed JSON, for example
  `{ "schema_version": "agent-event-envelope.v1", "event_kind": }`. Expected
  reason: `malformed_json`.
- `invalid.unknown_event_kind.json`: structurally valid signed envelope with
  `event_kind` set to `bridge.enablement.approved`. Expected reason:
  `unknown_event_kind` before any policy action.
- `invalid.replay_attempt.json`: exact byte-for-byte copy of an already
  accepted `message.created` delivered again through inbox as actionable input.
  Expected reason: `replay_attempt` or idempotent no-op during authoritative
  replay, but never a second action.

## Pass/fail acceptance checks

An event is valid for import only when all checks pass:

- File path check: source path is an allowed inbox, outbox, trust, or manual
  import path for the current mode.
- Parse check: UTF-8, valid JSON, no duplicate keys, canonicalizable under the
  E3-A rules.
- Schema check: exact `schema_version`, required fields present, no unknown
  top-level fields, correct types, safe integer range, valid timestamp format,
  valid hash/signature encodings, payload is an object, and event kind is
  supported.
- Payload hash check: recomputed `payload_hash` matches the envelope.
- Event hash check: recomputed event hash matches any filename hash,
  parent-event-hash reference, or previous-hash reference being validated.
- Registry check: root-signed `agents.json` is valid; signer key exists,
  signer key is active for `created_at` and `sequence`, role is allowed, and
  revoked keys are rejected.
- Signature check: Ed25519 verifies over the exact signature input bytes.
- Sequence check: `sequence` is the expected next value for the coordinator
  chain, or is a benign fork candidate handled under the approved fork policy.
- Hash-chain check: `previous_accepted_event_hash` equals the previous accepted
  event hash for the same coordinator chain, or is null only where the registry
  permits a chain start.
- Nonce check: nonce has not appeared in any accepted or quarantined event for
  that coordinator where replay protection is active.
- Parent check: required parents are present, accepted, and match optional
  `parent_event_hashes` if provided.
- Branch check: repo identity matches, base commit is allowed, and branch
  policy accepts the event as actionable rather than review-only.
- Freshness check: timestamp is not outside the allowed skew window,
  `expires_at` has not passed, and key validity windows include the event.
- Safety check: payload passes secret scan, prompt-injection scan, cross-repo
  leakage scan, and size caps.
- Policy check: payload does not imply a stopgated action without explicit
  Sami approval recorded in an accepted event or current protocol file.

An event set is valid for deterministic replay when:

- Every accepted event still passes parse, schema, hash, registry, and
  signature checks.
- For each coordinator chain, sequences are contiguous from the registered
  `sequence_start` unless an accepted trust event explicitly changes the key
  or sequence window.
- No duplicate nonce exists in accepted events for the same coordinator.
- No duplicate sequence exists with different event content outside an
  accepted `fork.resolved` record.
- Every `previous_accepted_event_hash` points to the preceding event in the
  replayed chain.
- Replaying the accepted event set from genesis yields the same final
  trust-registry snapshot, decision ledger, stopgate ledger, and derived
  current-state hash.

An input is valid for quarantine when any check above fails or cannot be
completed. A quarantine write records the failure; it does not repair,
approve, delete, rotate keys, or execute the event.

## Open questions for the other agent
- Does Claude agree that `signing_key_id` and `signature_algorithm` should be
  top-level signed fields while `signature` alone is omitted from signature
  coverage?
- Does Claude agree that unknown top-level fields should be invalid in
  `agent-event-envelope.v1`, with extensibility pushed into payload schemas or
  future schema versions?
- Does Claude agree with hybrid sequence-plus-hash filenames for accepted
  events, or should E3-B use pure content-addressed paths with a separate
  sequence index?
- Does Claude see any portability issue with the JCS-compatible integer-only
  subset before E3-B chooses an actual canonical JSON library?

## Open questions and explicit non-goals
- Deferred to E3-B: implementation language, exact canonical JSON library,
  exact Ed25519 library, key import/generation commands, possession-proof
  byte format, real cryptographic fixture generation, `.gitignore` updates,
  directory creation, validation CLI shape, and trust-bootstrap code.
- Deferred to E3-C: read-only adapter evaluation for AgentBridge, CCB,
  tmux-style bridges, official Codex plugin, and `codex mcp-server` against
  this governance contract.
- Deferred to E3-D: Sami adapter selection and any approval to install,
  register, configure, or enable an adapter.
- Deferred to later experiments: CI enforcement, packaging, open-source kit
  migration mechanics, complete payload schemas for every event kind, and
  derived `COLLAB.md` regeneration.
- Non-goal: this turn does not approve the schema, modify `PROTOCOL.md`, write
  trust files, create `.agent-handoff/events/`, create `.agent-handoff/inbox/`,
  create `.agent-handoff/trust/`, create `.agent-handoff/local/`, create keys,
  run signing commands, install dependencies, enable bridges, commit, push, or
  open a PR.

## Blockers (must-fix before continuing)
- E3-A Claude architecture-consultant critique is required before any E3-B
  implementation turn.
- Sami's explicit approval is required before any proposed schema item here
  becomes approved protocol or implementation scope.

## Nits (suggested, not required)
- E3-B should keep fixture files small and separate from prose docs so
  cryptographic test failures are easy to inspect in Git diffs.
- A later housekeeping turn can add `rescope` to the protocol Phase enum if
  the repo keeps using that value historically.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: design-only schema/spec turn. No app behavior, browser surface,
runtime bridge, or automation path changed.

## Portability Findings
- Repo-local assumptions: the binding reference path stays under
  `.agent-handoff/` and can be reviewed as ordinary repo files. The proposal
  does not require global Claude/Codex config or any live bridge.
- Machine/local-tool assumptions: future E3-B signing and validation need a
  JSON canonicalizer and Ed25519 implementation, but this turn deliberately
  does not choose, install, or run them.
- Browser/connector assumptions: none for E3-A. Chrome-first browser rules
  remain relevant only for future browser QA.
- Any workaround used: no workaround. The only local constraint observed is
  that the future event/trust/local directories do not exist yet and were not
  created.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-A architecture-consultant critique of this
  envelope schema/spec. Focus on deterministic serialization, signature
  coverage, trust-registry snapshot shape, replay/quarantine behavior,
  filename conventions, and whether the minimal fixture contract is concrete
  enough for E3-B implementation. Do not implement, install dependencies,
  enable bridges, edit global config, commit, push, open a PR, create event
  directories, create keys, or treat any proposed schema item as approved.
