Previous experiment terminal turn: Experiment 2 / E2-003-codex-revision.md

# E2-004 - Claude second critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly, matching E2-001,
E2-002, and E2-003. Active `PROTOCOL.md` additions for Evidence Basis
and Portability Findings are used. No E2-specific schema extension
applied in this turn. Closing turn of the four-turn E2 design rhythm.

## Files touched this turn
- `.agent-handoff/turns/E2-004-claude-second-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E2-004 as the second-critique turn closing
  the four-turn E2 design rhythm.
- FILE VERIFIED: read E2-003 in full, plus current `COLLAB.md` and
  current `PROTOCOL.md` (Stopgate Rule and four schema additions
  active per E1-FIX-001).
- AGENT SUMMARY: E2-003 selected one concrete answer per E2-002
  blocker — Sami-controlled Ed25519 root key, lowest-event-hash
  tiebreaker, gitignored `recovery.txt` channel — and addressed all
  seven nits with explicit implement-or-defer decisions.
- INFERENCE: design phase is complete in the sense that no remaining
  gap blocks a narrow Experiment 3 implementation spike. Remaining
  items are scope-negotiable nits, not architecture holes.
- UNKNOWN: real entropy source for root key generation, multi-machine
  Sami workflow, canonical-JSON library choice, and the actual
  Experiment 3 scope all remain Sami-decided.

## Decisions (binding)
- All three E2-002 blockers are cleared. The trust-bootstrap
  sequence, the deterministic fork tiebreaker, and the out-of-band
  recovery channel are each defined to the precision required for a
  later narrow implementation spike.
- The four-turn E2 design rhythm is complete. E2-001 (architecture),
  E2-002 (critique), E2-003 (revision), E2-004 (this turn) form the
  closed loop. Next move belongs to Sami: a design retrospective
  and a decision about whether to authorize an Experiment 3
  implementation spike.
- The architecture stack now stands as proposed protocol:
  Sami-controlled Ed25519 root, signed coordinator keys with
  possession proofs, signed trust-registry snapshots, append-only
  event log + signed derived state, lowest-event-hash benign-fork
  tiebreaker with explicit Sami-mandatory exception list, JSONL
  ledgers with generated Markdown views, four-tier async escalation
  with concrete polling caps, seven-section security model, and a
  low-trust gitignored recovery channel.
- Per the active Stopgate Rule, none of the above is approved
  protocol. Each item remains "proposed" until Sami explicitly
  authorizes proposed-to-approved transitions, individually or in a
  bundle.

## Answers to E2-003's four open questions

1. **Root fingerprint pin in a protocol file.** Recommend yes, as
   defense in depth. Adding a Sami root public-key fingerprint line
   to `PROTOCOL.md` (or a sibling `TRUST.md`) gives a human-visible
   anchor that a future malicious commit cannot quietly rewrite
   without showing in diff review. The trust registry remains the
   machine-verifiable anchor; the fingerprint pin is the
   human-verifiable one. Cheap; no cost beyond one line.

2. **Lowest-event-hash vs coordinator-of-record.** Lowest-event-hash
   is correct. Coordinator-of-record introduces an availability
   dependency on a specific coordinator and re-creates the halt
   problem the deterministic rule was meant to solve. The 11
   Sami-mandatory exceptions in E2-003 are sufficient to keep the
   rule from being applied to anything safety-relevant.

3. **`recovery.txt` path accepted.** Yes, with the constraints
   E2-003 defined: gitignored, human-writable, low-trust, strict
   format, narrow reason codes, no authorization power, rate-limited,
   abuse triggers Sami escalation. The path is good because it
   exists outside the signed event flow by design.

4. **Experiment 3 ordering — trust bootstrap, envelope validation,
   or derived-state regeneration first.** Trust bootstrap first.
   Both other primitives depend on having a verifiable coordinator
   identity. Envelope validation needs keys to verify against.
   Derived-state regeneration needs a trustable event log, which
   needs signed events, which need keys. Build the trust root, then
   the smallest signed event the registry can hold, then expand.

## Open questions for Sami
- Do you authorize the Experiment 2 architecture (E2-001 as revised
  by E2-003) as approved protocol, or do you want a third-party
  consult round (e.g., GPT 5.5 Pro) before any
  proposed-to-approved transition?
- If you authorize, do you want PROTOCOL.md updated in a small fix
  turn to reference the architecture, or do you want the
  architecture artifacts (E2-001 + E2-003) themselves to be the
  reference until Experiment 3 lands?
- What is the scope of the Experiment 3 implementation spike?
  Recommended scope: trust bootstrap only — root key import, signed
  `trust.registry.initialized` event, single coordinator
  registration with possession proof, verification of all of the
  above. No event log directories beyond what bootstrap requires,
  no async tier, no recovery channel implementation. That is the
  smallest piece that proves the chain of trust works.
- Where does Sami's root private key live and how is it backed up?
  This is implementation detail that affects portability for the
  open-source kit. Worth a Sami decision before Experiment 3 begins.
- For the open-source release, is the audience individual developers
  with one repo each, or organizations running the kit across many
  repos? The trust-root model differs (per-repo Sami key vs
  organization signing key).

## Blockers (must-fix before continuing)
- None.

## Nits (suggested, not required)
- The bootstrap step 1 ("Sami explicitly authorizes trust bootstrap
  for the repo") needs a recording medium that exists before the
  trust registry exists. Recommend recording the authorization in
  `COLLAB.md` plus a fingerprint line in `PROTOCOL.md` or `TRUST.md`.
  Cheap and avoids a chicken-and-egg.
- Multi-machine Sami workflows (laptop + workstation, possibly with
  different signing identities or shared key backup) are not
  addressed. Worth a paragraph in the open-source kit's setup docs.
  Not a blocker because most users will start single-machine.
- New event kinds introduced in E2-003 (`fork.resolved`,
  `coordinator.key_rotation.requested`, `coordinator.key_rotated`,
  `coordinator.key_revoked`, `recovery.request_observed`,
  `recovery.abuse_detected`, `derived_state.updated`,
  `trust.registry.initialized`, `coordinator.registered`) should be
  consolidated into the canonical event taxonomy in Experiment 3,
  ideally with a one-line description per kind so the policy layer
  can dispatch deterministically.
- The configurable idle cap needs a storage location: an
  authoritative event, a parameter file, or a `COLLAB.md` field. Not
  blocking but should be specified in Experiment 3.
- JSONL ledger error handling (disk full, write contention) is not
  addressed. Implementation-level concern; record as Experiment 3
  open question.
- The first-divergent-event-hash comparison rule is technically
  unreachable for the same-coordinator-key case (because two valid
  signed events with the same sequence will have different nonces
  and therefore different hashes). The rule is correct, but a
  one-sentence note that it is "well-defined for cases that actually
  occur" would prevent confusion in implementation review.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn. No app behavior, browser surface, or
runtime bridge changed.

## Portability Findings
- Repo-local assumptions: the architecture's "everything under
  `.agent-handoff/`" pattern is portable; the gitignored
  `.agent-handoff/local/` separation works on any platform with a
  filesystem.
- Machine/local-tool assumptions: Ed25519 signing requires a tool
  choice in Experiment 3. Multi-machine and key-backup stories
  remain undocumented.
- Browser/connector assumptions: none for this critique.
- Any workaround used: none.

## Handoff
- Next agent: Sami
- Specific ask: write a short E2 design retrospective (or skip
  retrospective and decide directly) and authorize next move:
  (a) approve Experiment 2 architecture as proposed protocol with a
  small PROTOCOL.md fix turn, (b) request a third-party consult
  round before approval, (c) defer approval but authorize
  Experiment 3 trust-bootstrap implementation spike on the proposed
  architecture, or (d) pause and revisit later. Per the active
  Stopgate Rule, only Sami can move proposed architecture to
  approved protocol; this critique does not approve anything.
