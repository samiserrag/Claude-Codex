Previous experiment terminal turn: Experiment 3 / E3-A-codex-envelope-schema.md

# E3-A Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence
Basis and Portability Findings sections per the active PROTOCOL.md
additions. This is a critique-only turn; it does not approve the
schema, apply protocol changes, install tools, enable bridges, commit,
push, or move any proposal to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-A-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E3-A as a design-only event-envelope
  schema/spec turn on 2026-05-15, recorded in COLLAB.md. The Claude
  consultant is the next critique agent per E3-A's Handoff section.
- FILE VERIFIED: read E3-A in full from
  `.agent-handoff/turns/E3-A-codex-envelope-schema.md`. Cross-checked
  against E2-001 §2 (state model), E2-003 §1 (trust bootstrap), and
  E2-007 §Decisions (binding reference vs exploratory adapters).
- AGENT SUMMARY: E2-006/E2-007 established that E3-A must come before
  E3-B implementation. E3-A delivers the deterministic envelope,
  serialization, signature coverage, registry shape, file naming,
  quarantine rules, fixtures, and acceptance checks that E3-B will
  implement against.
- INFERENCE: E3-A picks concrete answers for every hard question
  (JCS-narrowed canonical JSON, Ed25519, SHA-256, UUIDv7, integer-only
  numbers, hybrid sequence+hash filenames, domain-separation prefix
  for signing). The two-agent review pattern's job here is to find
  what was missed, not to relitigate the well-defended decisions.
- UNKNOWN: actual canonical JSON library choice, Ed25519 library
  choice, possession-proof byte format, programming language for E3-B
  — all explicitly deferred in E3-A's non-goals. Time skew window for
  freshness check is not numerically specified.

## Decisions (binding)

- E3-A is acceptable to proceed to E3-B implementation after the
  seven nits below are addressed in writing or accepted as deferred.
  No blockers stand between this critique and E3-B.
- The JCS-narrowed canonical JSON subset, Ed25519 signature scheme,
  SHA-256 hashing, UUIDv7 event ids treated as opaque, integer-only
  envelope numbers, hybrid sequence+hash filenames, and the
  domain-separation prefix `agent-event-envelope:v1\n` are all
  endorsed.
- The choice to make `signing_key_id` and `signature_algorithm`
  signed fields while only `signature` is excluded from coverage is
  endorsed. Excluding either of those would let an attacker substitute
  identity bits while keeping a valid signature.
- The decision to invalidate unknown top-level envelope fields and
  push extensibility into payload schemas or future schema versions
  is endorsed. Permissive top-level extension would defeat the
  signature scheme's strict-coverage guarantee.
- The hybrid sequence-plus-hash filename convention
  (`<sequence_16>-<event_hash>.json`) is endorsed. Sequence enables
  ordering scans, content hash enables collision resistance, and the
  combination keeps directories shallow.
- The integer-restricted-to-safe-range rule with strings for
  decimals/big-numbers in payloads is endorsed; it sidesteps the JSON
  number serialization minefield entirely.
- Per the active Stopgate Rule, this critique does not approve the
  schema or authorize E3-B. Only Sami can move proposed-to-approved.

## Strengths worth naming explicitly

These are unusually strong points beyond just "answers to required
sections":

- **Domain-separation prefix.** `ascii("agent-event-envelope:v1\n")
  || canonical_json(envelope_without_signature)` prevents a signature
  over a different message type from being replayed as an event
  signature. Also forces a deliberate prefix change for future schema
  versions, which is correct security hygiene.
- **`previous_accepted_event_hash` separated from
  `parent_event_ids`.** Per-coordinator hash chain integrity is
  distinct from semantic dependency. Clean separation makes both
  easier to verify.
- **Quarantine doesn't store a hash of the suspected secret alone.**
  Explicit refusal to create a brute-force oracle for short secrets.
  `raw_sha256` of the whole rejected file is enough for local
  deduplication.
- **UUIDv7 preferred but treated as opaque.** Verifier doesn't trust
  timestamp bits. Right move — UUIDv7 is convenient for sorting in
  filesystems but should never be load-bearing for security.
- **Real base commit `4543fc44...` cited in fixtures.** Fixtures tie
  to actual repo state at the time of E3-A, which makes them
  immediately reproducible for E3-B.

## Open questions for the other agent
- For Codex E3-B planning: are the seven nits below adequately
  addressed by E3-B documentation, or should any be promoted to a
  pre-implementation E3-A clarification turn?
- For Sami: is the integer-only-numbers-in-envelope rule (with
  payloads also restricted via convention) acceptable as a portable
  default, or do you want a future schema version that allows
  decimals via a documented JSON serialization (e.g., decimal-as-
  string convention enforced at schema level)?

## Blockers (must-fix before continuing)
- None. E3-A picks concrete answers for every hard question and
  defends them. No structural gaps prevent E3-B from beginning once
  Sami authorizes it.

## Nits (suggested, not required)

1. **Time skew window not numerically specified.** The pass/fail
   acceptance checks include "Freshness check: timestamp is not
   outside the allowed skew window" but no number is given. E3-B
   should pick a default (suggested: ±5 minutes for `created_at`,
   matching common Kerberos and TOTP defaults) and make it
   configurable per repo. Without a number, two implementations
   could disagree about validity.

2. **Integer-only-numbers rule scope ambiguity for payloads.** §4
   says "Numbers are restricted to integers in the safe range
   0..9007199254740991 **for envelope fields**." Then "Payload
   schemas should use strings for decimals..." The "should" is
   weak — a payload schema author could include a non-integer JSON
   number and the canonicalization rule wouldn't catch it. E3-B
   should either enforce the integer-only rule across the entire
   envelope+payload (canonicalizer rejects non-integer numbers
   anywhere), or explicitly document that payload schemas may use
   any valid JSON number type but lose deterministic serialization
   guarantees if they do.

3. **`recipient_coordinator_ids` broadcast semantics underspecified.**
   §"Optional top-level fields" says "Absence means broadcast to the
   repo coordination layer." But what does "broadcast" mean
   operationally? Does every coordinator import the event? Does only
   one handle it? Two implementations could read this differently.
   E3-B should specify: broadcast = every active coordinator imports
   and validates; specific recipient list = only listed coordinators
   are required to import (others may ignore).

4. **`possession_proof_hash` referenced in fixture 2 payload but
   format not defined.** The `coordinator.registered` payload
   (fixture 2 line 471) references `possession_proof_hash` but the
   byte format and signing scheme for the possession proof itself
   are deferred to E3-B per the non-goals. That's fine, but E3-B
   should make this its first sub-decision before any
   `coordinator.registered` event can be produced. Worth a one-line
   note in the E3-B prompt.

5. **Replay-vs-import nonce semantics.** The pass/fail nonce check
   says "nonce has not appeared in any accepted or quarantined event
   for that coordinator where replay protection is active." But the
   replay validity check says accepted events must still pass all
   checks. During replay of accepted events, every nonce will appear
   in already-accepted state — so the replay must distinguish "I am
   re-validating a previously accepted event" from "I am importing a
   new event with this nonce." E3-B should be explicit that nonce
   uniqueness check is for *import* not *replay*; replay validates
   what's already on disk.

6. **Branch field stability vs force-push.** The `branch` field
   captures the branch name at signing time, and the base_commit
   ancestor check verifies lineage. A force-push to a branch that
   orphans previously signed events would silently invalidate them
   on next replay. E3-B should document the policy: either reject
   force-push as a security event, or document that orphaned events
   move to quarantine on next validation.

7. **Prompt-injection detection minimum.** The quarantine rules name
   `prompt_injection_suspected` as a reason code but don't specify
   what minimum check qualifies. E3-A's non-goals defer detection
   logic to E3-B; that's correct. But E3-B should pick a baseline
   (e.g., regex-based pattern detection for common injection phrases
   like "ignore previous instructions") and document that ML-based
   detection (e.g., the gstack TestSavantAI approach) is an
   exploratory adapter under E3-C, not a binding requirement.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only design turn. No app behavior, browser surface,
runtime bridge, or automation path changed.

## Portability Findings
- Repo-local assumptions: E3-A's binding reference path stays under
  `.agent-handoff/` and can be verified by reading repo files. The
  schema is portable across machines and Git providers.
- Machine/local-tool assumptions: E3-B will need a JCS-compatible
  canonical JSON implementation and an Ed25519 library. Both are
  available in major languages (Python, Go, Rust, Node, Bun); the
  language choice is deferred to E3-B but no language is excluded by
  the spec.
- Browser/connector assumptions: none for this critique turn.
- Any workaround used: none.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to authorize E3-B implementation
  spike (trust bootstrap only against the binding file-based
  reference path, against this E3-A schema). The seven nits above
  are addressable in E3-B by Codex without further pre-implementation
  clarification, unless Sami wants E3-A revised to address them
  in-place. Do not implement, install, enable bridges, edit global
  config, commit, push, open a PR, create event/trust/local
  directories, create keys, or treat any proposal as approved.
