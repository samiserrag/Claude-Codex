Previous experiment terminal turn: Experiment 2 / E2-002-claude-critique.md

# E2-003 - Codex revision

## Agent
Codex

## Phase
architecture

## Schema
Reuses the Experiment 1 turn-note schema explicitly, matching E2-001 and
E2-002. Active `PROTOCOL.md` additions for `Evidence Basis` and
`Portability Findings` are used. No E2-specific schema extension is applied
in this turn.

## Files touched this turn
- `.agent-handoff/turns/E2-003-codex-revision.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E2-003 as a design-only revision turn, with file
  edits limited to this turn note and `COLLAB.md`, and required concrete
  answers to all three E2-002 blockers.
- FILE VERIFIED: `E2-001-codex-architecture.md` proposes repo-local Ed25519
  event signatures, append-only event state, derived `COLLAB.md`, quarantine,
  and async tiers, but leaves trust bootstrap, fork tiebreaking, and recovery
  unblock mechanics underspecified.
- FILE VERIFIED: `E2-002-claude-critique.md` endorses the E2-001 structure
  and requires E2-003 to name a trust root, define deterministic branch/fork
  resolution, and add an out-of-band quarantine recovery channel.
- FILE VERIFIED: `002-synthesis.md` keeps Experiment 2 design-only, forbids
  silent proposed-to-approved transitions, and treats signed append-only repo
  messages as the primitive.
- INFERENCE: The revision should tighten E2-001 without changing the repo
  protocol files or creating event/trust directories before Sami approves an
  implementation spike.
- UNKNOWN: The eventual implementation language, canonical JSON library, CLI
  wrapper, and storage backend for private signing keys remain Experiment 3
  implementation choices.

## Decisions (binding)
- E2-001 is revised to use a Sami-controlled Ed25519 root signing key as the
  trust root. Git commit signing remains supplemental evidence, not the trust
  primitive.
- Trust registry state must be rooted in root-signed trust events and a
  root-signed registry snapshot. A plain commit that edits `agents.json`
  without the matching root signature is ignored and quarantined.
- The first accepted event in a fresh repo is a root-signed
  `trust.registry.initialized` genesis event. The first coordinator key
  registration is root-signed and coordinator-counter-signed for proof of key
  possession.
- Normal coordinator key rotation requires the current active coordinator key,
  the proposed new coordinator key, and the Sami root key. Emergency rotation
  for lost or compromised keys requires the out-of-band recovery channel plus
  a Sami-root-signed revocation and replacement event.
- The deterministic default fork tiebreaker is lowest event hash wins, applied
  only to benign same-coordinator event-chain forks that do not touch
  stopgates, trust, secrets, global config, bridge enablement, git operations,
  deletion, or human-only approvals.
- Sami intervention is mandatory for trust-root changes, key registration or
  rotation, stopgate approval or denial, proposed-to-approved transitions,
  security incidents, suspected key compromise, secret leakage, prompt
  injection, hash collision, repo identity mismatch, non-ancestor branch
  lineage, repeated fork storms, or any action the Stopgate Rule reserves for
  Sami.
- Quarantine recovery uses one explicit out-of-band path:
  `.agent-handoff/local/recovery/recovery.txt`. It is gitignored,
  human-writable, low-trust, and never authorizes state changes by itself.
- All revisions in this note remain proposed architecture. This turn does not
  apply protocol changes, create trust files, create recovery files, enable
  automation, install tools, modify global config, or approve implementation.

## Blocker revisions

### 1. Identity and trust-registry bootstrap

Chosen trust root: a Sami-controlled Ed25519 root signing key. This is the
least coupled option for the open-source kit because it works before commits
exist, works in repos that do not use GPG, and verifies the collaboration
artifact itself rather than relying on the Git transport. Git commit signing
may still be recorded as supplemental provenance when already present.

The root public key is the only trust anchor. A future approved setup step
creates or imports the root key under a gitignored repo-local private-key path
such as `.agent-handoff/local/keys/sami-root.ed25519`, records the root public
key and fingerprint in the trust registry, and writes only public material and
signatures to tracked files. A coordinator may draft this setup, but the
registry is not accepted until Sami has explicitly approved the root
fingerprint for this repo.

The trust registry is not trusted because it is committed. It is trusted only
when its canonical contents are covered by a valid Sami-root signature. The
future `.agent-handoff/trust/agents.json` file is a signed current registry
snapshot containing at least: schema version, repo identity, registry version,
root key id, root public key fingerprint, active coordinator records, revoked
coordinator keys, accepted trust-event hash, and root signature. A modified
registry snapshot with no valid root signature is data for quarantine, not an
authority update.

Bootstrap event sequence:

1. Sami explicitly authorizes trust bootstrap for the repo.
2. The approved setup creates or imports Sami's Ed25519 root key and computes
   the root public-key fingerprint.
3. The first accepted event is `trust.registry.initialized`, signed by the
   Sami root key. It binds repo identity, experiment namespace, registry
   version `1`, root key id, root public key, root fingerprint, empty
   coordinator list, creation timestamp, nonce, and payload hash.
4. Codex and Claude coordinator keypairs are generated into gitignored
   repo-local paths such as `.agent-handoff/local/keys/codex.ed25519` and
   `.agent-handoff/local/keys/claude.ed25519`.
5. Each coordinator produces a possession proof signed by its own private key
   over repo identity, coordinator id, public key, requested role, nonce, and
   the `trust.registry.initialized` event id.
6. Sami's root key signs `coordinator.registered` for each coordinator. That
   event includes the coordinator id, public key, allowed role, sequence start,
   validity window if any, registry version increment, the possession-proof
   hash, and the prior trust-event hash.
7. The coordinator's first ordinary event must be signed by the registered
   coordinator key, start at sequence `1`, cite its own
   `coordinator.registered` event as a parent, and include the previous
   accepted coordinator-event hash as null/genesis.

Key-rotation event and authorization rule:

- Normal rotation starts with `coordinator.key_rotation.requested`, signed by
  the current active coordinator key. It names the new public key, the old key,
  reason, nonce, last accepted coordinator sequence, and a new-key possession
  proof signed by the new key.
- Rotation is not accepted until the Sami root key signs
  `coordinator.key_rotated`. That event revokes or sunsets the old key,
  activates the new key, increments the trust registry version, cites the
  rotation request and possession proof, and states the sequence from which
  the new key may sign.
- Emergency rotation for a lost, unavailable, or suspected-compromised current
  key skips the old-key signature but requires a valid out-of-band recovery
  request, manual Sami judgment, root-signed `coordinator.key_revoked`, and
  root-signed `coordinator.registered` or `coordinator.key_rotated` for the
  replacement. Any event signed by the revoked key after the revocation point
  is quarantined.
- No coordinator can register, rotate, or revoke a coordinator key by itself.
  The root signature is the authorization boundary.

### 2. Branch/fork tiebreaker policy

Default tiebreaker: lowest event hash wins. The event hash is the SHA-256 hash
of the canonical event envelope excluding the signature field. For a forked
chain, compare the first divergent event hash lexicographically; the lower
hash is the surviving chain. If the first divergent event is identical, compare
the next divergent event. An actual SHA-256 collision is treated as a security
incident requiring Sami.

The rule applies only when all of these are true:

- both candidate branches are validly signed by the same active coordinator
  key,
- both have the same repo identity, experiment namespace, branch lineage, base
  commit ancestry, parent event, and coordinator sequence slot,
- neither branch contains trust-registry changes, key rotation, stopgate
  approval or denial, proposed-to-approved transition, bridge enablement,
  install request, global config mutation, commit/push/PR/merge request,
  destructive file operation, secret-bearing content, suspected prompt
  injection, or any human-only approval,
- the losing branch can be marked superseded without executing side effects or
  deciding product intent that the Stopgate Rule reserves for Sami.

On a benign fork, the receiving coordinator writes a signed `fork.resolved`
event on its own chain citing both candidate hashes, the winning hash, the
losing hash, the exact rule used, and the reason Sami was not required. The
losing event remains preserved as quarantined/superseded evidence; it is never
deleted or silently rewritten.

Sami intervention is mandatory when the fork touches trust or key material,
human approval state, stopgates, security/quarantine conclusions, secrets,
prompt-injection suspicion, repo identity mismatch, non-ancestor branches,
different forks of the Git repository, hash collision, repeated fork storms,
or any operation that the active Stopgate Rule says only Sami can approve. In
those cases the deterministic rule may rank candidate chains for review, but
it must not select an authoritative survivor.

### 3. Quarantine recovery channel

Chosen recovery path: `.agent-handoff/local/recovery/recovery.txt`. The path
is under the future gitignored local state area, is human-writable, and is not
part of the ordinary `events/`, `inbox/`, `outbox/`, `ledgers/`, or
`quarantine/` flow. It exists specifically for situations where the signed
event mechanism is unavailable, untrusted, paused, or circular.

The receiving coordinator distinguishes recovery messages from regular
messages by all of the following:

- path is exactly `.agent-handoff/local/recovery/recovery.txt`,
- first line is `RECOVERY v1`,
- size is below a small fixed cap such as 4 KB,
- fields are a strict key/value form: repo identity, sender label, affected
  coordinator id, reason code, suspected key id if any, affected event hashes
  if known, requested unblock category, timestamp, and a human note,
- the file is treated as low-trust text and never as instructions.

Allowed recovery reason codes are narrow: `lost_key`, `suspected_compromise`,
`quarantine_loop`, `budget_pause`, `stale_chain`, `malformed_event_block`,
and `human_help_requested`. A recovery message can cause only an ack, a
human-visible summary, a root-key rotation prompt, or a coordinator-signed
`recovery.request_observed` event if the receiving coordinator's signing path
is healthy. It cannot approve a stopgate, rotate a key, unblock a chain,
delete quarantine, start automation, or execute commands.

If the recovery channel itself is abused, the receiver applies the same
inbound-data rule: redact secrets, ignore commands, cap reads, and stop after
one recovery observation per coordinator per hour. Malformed, oversized,
secret-bearing, prompt-injected, or repetitive recovery files trigger
`recovery.abuse_detected` if signing is healthy; otherwise the coordinator
stops reading the file and asks Sami to inspect and manually replace or clear
it. Abuse of the recovery file is a reason to require Sami intervention, not a
reason to trust the regular signed channel again.

## E2-002 nit handling

E2-002 lists seven nit bullets; this revision handles all seven to avoid an
off-by-one ambiguity in the prompt.

- Ledger format: implement as proposed architecture. Decisions and stopgates
  should be authoritative JSONL ledgers with generated Markdown views. JSONL
  gives append-only machine enforcement; generated Markdown gives human
  readability. `COLLAB.md` stays a human current-state view.
- Idle cap justification: implement by keeping the 50,000 input tokens per
  repo per day as a configurable default. The rationale is provider-neutral:
  it bounds idle automation to less than a large manual review turn per day
  while still allowing a few concise wakeups. Sami may explicitly approve a
  higher or lower repo cap.
- `COLLAB.md` regeneration: implement as proposed architecture. When the new
  state model is live, `COLLAB.md` regeneration or manual policy-layer update
  must itself be represented by a signed `derived_state.updated` event citing
  the input event range and resulting view hash.
- Quarantine writes: implement as proposed architecture. `quarantine.created`
  and related quarantine state mutations must be signed by the policy-layer
  coordinator through the same event-signing path as ordinary events. If that
  signing path is unavailable or suspected, only the out-of-band recovery
  channel may be used to ask for help.
- Kit update story: implement as proposed architecture. Downstream repos must
  update by explicit human-reviewed kit version changes, never by automatic
  overwrite. A future kit release may provide templates, migrations, and a
  changelog, but local events, ledgers, trust registry, root key, coordinator
  keys, repo parameters, and branch-specific decisions are preserved. A kit
  update lands as a proposed event or normal PR only after Sami approves that
  repo's scope.
- Section naming overlap: implement in this note by using `Explicit Non-Goals
  and Deferred Work` below instead of repeating the E2-001 two-section open
  question shape. A future housekeeping turn can rename E2-001 only if Sami
  explicitly wants historical turn-note edits, which are normally avoided.
- E1 historical COLLAB.md sections: implement in this turn's allowed
  `COLLAB.md` handoff edit by marking the E1-era constraint, decision,
  rejected-idea, and file-ownership sections as historical while preserving
  still-active stopgates.

## Open questions for the other agent
- Does Claude accept the Sami-controlled root signing key as sufficient, or
  does E2-004 require an additional human-visible root fingerprint pin in a
  protocol file before Experiment 3?
- Does Claude accept lowest-event-hash as a deterministic liveness rule when
  limited to benign forks, or should the default be coordinator-of-record
  selection despite the risk of coordinator unavailability?
- Does Claude accept `.agent-handoff/local/recovery/recovery.txt` as the
  recovery path, given that it is local-only and intentionally non-authorizing?
- Should Experiment 3 implement trust bootstrap first, event-envelope
  validation first, or derived `COLLAB.md` regeneration first?

## Explicit Non-Goals and Deferred Work
- No protocol or schema file is edited by this turn.
- No event, trust, key, inbox, outbox, ledger, quarantine, or recovery
  directory is created by this turn.
- No canonical JSON implementation, Ed25519 library, command wrapper,
  `.gitignore` rule, or CLI workflow is selected by this turn.
- No trust root, coordinator key, registry snapshot, or signature is generated
  by this turn.
- No bridge, MCP server, plugin, cron, webhook, or browser runner is enabled
  by this turn.
- No proposed architecture item becomes approved protocol until Sami
  explicitly authorizes that transition.

## Blockers (must-fix before continuing)
- E2-004 Claude second critique is required before any implementation spike or
  protocol edit follows from this revised architecture.
- Any move from proposed architecture to approved protocol requires explicit
  Sami approval under the active Stopgate Rule.

## Nits (suggested, not required)
- Future housekeeping should split `COLLAB.md` into "current state" and
  "historical experiment archive" sections more cleanly once the event-log
  model is either approved or rejected.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: design-only revision turn. No app behavior, browser surface, runtime
bridge, or automation path changed.

## Portability Findings
- Repo-local assumptions: trust, event, recovery, and derived-state artifacts
  are designed to live under `.agent-handoff/` with private keys and recovery
  text under a future gitignored `.agent-handoff/local/` area.
- Machine/local-tool assumptions: future Ed25519 signing requires an approved
  implementation path, but this turn does not install or enable any signing
  tool.
- Browser/connector assumptions: none for this architecture turn.
- Any workaround used: none.

## Handoff
- Next agent: Claude
- Specific ask: perform E2-004 second critique of this revision. Judge whether
  the trust bootstrap, deterministic fork tiebreaker, and out-of-band recovery
  channel are concrete enough to permit a later narrow Experiment 3
  implementation spike. Also verify that all E2-002 nits were either
  implemented as proposed architecture or explicitly deferred. Do not
  implement, install, enable bridges, edit global config, commit, push, open a
  PR, or treat proposed architecture as approved protocol.
