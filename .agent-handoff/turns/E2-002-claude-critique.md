Previous experiment terminal turn: Experiment 2 / E2-001-codex-architecture.md

# E2-002 - Claude critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly, matching E2-001's
choice. Active `PROTOCOL.md` additions for Evidence Basis and
Portability Findings are used. No E2-specific schema extension is
proposed in this turn.

## Files touched this turn
- `.agent-handoff/turns/E2-002-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized the consultant Claude thread to perform the
  E2-002 architecture critique role per the COLLAB.md handoff written
  by Codex in E2-001.
- FILE VERIFIED: read E2-001 in full from
  `.agent-handoff/turns/E2-001-codex-architecture.md`, plus current
  `PROTOCOL.md` (with E1-FIX-001 active) and current `COLLAB.md`.
- AGENT SUMMARY: convergence with the round-2 synthesis: append-only
  signed events as primitive, security in same turn as architecture,
  inbox/outbox before cron before webhooks, derived `COLLAB.md`.
- INFERENCE: where E2-001 says "approved policy" or "Sami selects" or
  "according to approved policy," I treat that as a deferred decision
  rather than a defined mechanism, and grade accordingly.
- UNKNOWN: actual implementation language, the canonical-JSON library
  choice, runtime CLI shape, and any third-party dependency that would
  carry supply-chain risk are explicitly deferred to a later experiment.

## Decisions (binding)
- E2-001 is acceptable to proceed to E2-003 revision after the three
  blockers below are addressed in writing. Nothing in E2-001 needs to
  be discarded; the gaps are at the layer above the signature
  primitive, not in the primitive itself.
- The repo-local Ed25519 event-signing decision is endorsed as the
  message-verification primitive. The defense for keeping Git commit
  signing supplemental only is correct: events may exist before
  commits, and commit signing does not express coordinator sequence,
  nonce, or policy validation.
- The append-only event log plus derived `COLLAB.md` state model is
  endorsed. The transitional handoff status of the current `COLLAB.md`
  is correctly labeled.
- The four-tier async model (manual, inbox/outbox, cron, webhooks)
  with each tier opt-in and none enabled by default is endorsed. The
  concrete polling caps (one poll per 15 minutes per coordinator, two
  model wakeups per hour per repo, 50,000 input tokens per day,
  three-empty-poll automatic pause) are reasonable defaults.
- The seven-section security model is structurally complete. The gaps
  identified below are within sections 4c and 4g, not omissions of
  required sections.
- Per the active Stopgate Rule, every binding decision in E2-001
  remains "proposed architecture" until Sami explicitly approves
  proposed-to-approved transitions. This critique does not approve any
  of them; it only assesses fitness for the E2-003 revision turn.

## Open questions for the other agent
- For Blocker 1: do you prefer Sami's signing key as the trust root
  via Git commit signing of `agents.json`, or a separate
  out-of-band-published trust root (e.g., a public-key fingerprint
  referenced in `PROTOCOL.md`)?
- For Blocker 2: would you accept a deterministic default tiebreaker
  (e.g., lowest-event-hash wins) as a baseline policy, with Sami able
  to override per case?
- For Blocker 3: should the recovery channel be a separate
  `.agent-handoff/recovery/` directory with its own minimal schema,
  or should quarantine itself emit "ack" events that even a degraded
  coordinator can produce?
- For the ledger nits: are the decisions and stopgates ledgers
  Markdown for human readability with a parseable header section, or
  fully JSONL with a generated Markdown view?
- Is there a reason the trust registry should NOT be the same file
  type as the event envelope (canonical JSON), so the same parser and
  signature library handle both?

## Blockers (must-fix before continuing)

1. **Identity and trust-registry bootstrap is undefined.** E2-001
   specifies Ed25519 signature verification but the chain of trust
   above the signatures is missing. Specifically: (a) what signs the
   first event in a fresh repo when no keypair yet exists; (b) what
   protects `.agent-handoff/trust/agents.json` itself — a malicious
   commit could rotate out the legitimate public key or add an
   attacker's key, after which all "verified" events from that
   coordinator id are forgeable; (c) what defines a key-rotation
   policy and how rotation events themselves are authorized. The
   signature primitive is concrete; the trust root is hand-wavy.
   Required for E2-003: name a trust root (Sami-controlled signing
   key, GPG-signed commits on `agents.json`, or out-of-band-published
   fingerprint), define the bootstrap event sequence (what creates
   the trust registry, what signs it, what signs the first
   coordinator key registration), and define the rotation event with
   its authorization rule.

2. **Branch/fork tiebreaker policy is undefined.** §4c says "If two
   valid events fork the same coordinator sequence or parent, both
   branches are quarantined until a coordinator proposes and Sami or
   the receiving coordinator selects the surviving chain according
   to approved policy." But "approved policy" does not exist. If
   both branches are quarantined and Sami is unavailable, the system
   halts. Required for E2-003: define a default deterministic
   tiebreaker that lets the system make forward progress without
   human intervention in the common case (e.g., earliest accepted
   timestamp wins, lowest event hash wins, or coordinator-of-record
   breaks ties), and explicitly mark the cases where a Sami
   intervention is mandatory rather than optional.

3. **Quarantine recovery has a circular dependency.** §4g says
   recovery happens by "request rebase," "ask sender to restate,"
   "ask Sami whether to rotate," etc. — but each of these requests
   is itself a message that must flow through the signed event
   mechanism. If a coordinator's keys are compromised, lost, or
   under suspicion, its requests for unblock are also under
   suspicion. If quarantine is full or the receiving coordinator is
   itself paused, no unblock request can land. Required for E2-003:
   define an explicit out-of-band recovery channel — either a
   gitignored-but-human-readable `recovery.txt` Sami can write
   directly, or a "low-trust ack-only" event tier that accepts
   minimal unsigned messages strictly for the purpose of requesting
   unblock and is itself rate-limited and quarantined-on-abuse.

## Nits (suggested, not required)
- The decisions and stopgates ledger format is undecided; E2-001
  raises it in open questions. Markdown is human-friendly but not
  programmatically enforceable; JSONL is enforceable but
  human-hostile. A pragmatic answer is JSONL-with-generated-Markdown
  for ledgers, leaving COLLAB.md prose for humans. Resolve in E2-003
  or commit to deferring to Experiment 3.
- The 50,000-input-tokens-per-day idle cap is concrete but
  unjustified. Either justify the number (e.g., reference Anthropic
  API pricing assumptions) or make it a per-repo configurable
  default with a documented rationale for the chosen value.
- §4d implies but does not state that COLLAB.md regeneration must
  itself be a signed event when the new state model is live. Make
  this explicit when the policy layer is specified.
- The event taxonomy includes `quarantine.created` (line 143). Good.
  But the act of quarantining is itself a state mutation; verify
  E2-003 explicitly requires that the policy layer authoring the
  `quarantine.created` event uses the same signing path as ordinary
  events.
- The kit update story for downstream repos is undefined. If
  `colorado-songwriters-collective` installs the kit and the kit
  later patches the protocol, how does the downstream repo update
  without losing its local state, ledgers, or branch-specific
  decisions? Worth a paragraph in §Open-source packaging.
- The "Open questions for the other agent" section and the "Open
  questions and explicit non-goals" section have similar names but
  different purposes. Renaming the second to "Explicit non-goals"
  would prevent confusion in future turns.
- COLLAB.md still has Experiment 1-scoped content under
  Hard Constraints, Decisions Made, Considered And Rejected, and
  Proposed File Ownership. The `Current Phase` field correctly notes
  "transitional," but those four older sections will mislead a fresh
  agent reading cold. Mark them as `## E1 historical` or similar
  before E2-003 to prevent stale instruction reads.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn. No app behavior, browser surface, or
runtime bridge changed.

## Portability Findings
- Repo-local assumptions: the Ed25519 decision implies a future
  signing tool dependency. The implementation experiment must
  surface which tool, on which platforms.
- Machine/local-tool assumptions: the gitignored
  `.agent-handoff/local/keys/` path is per-machine. Multi-machine
  Sami workflows (laptop + workstation) need a documented
  story.
- Browser/connector assumptions: none for this critique turn.
- Any workaround used: none.

## Handoff
- Next agent: Codex
- Specific ask: write `.agent-handoff/turns/E2-003-codex-revision.md`
  addressing each of the three blockers above with concrete language
  matching the precision of the existing §4c. Do not silently apply
  the proposed protocol changes; per the Stopgate Rule, only Sami
  can authorize proposed-to-approved transitions. Address blockers
  as binding revisions to the E2 architecture; address nits at your
  discretion in writing (defer or implement, just be explicit).
  Update `COLLAB.md` to hand off to Claude for the E2-004 second
  critique turn after E2-003 lands.
