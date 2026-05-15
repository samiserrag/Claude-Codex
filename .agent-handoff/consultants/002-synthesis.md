# 002 - Synthesis incorporating GPT 5.5 Pro round 2

Source: Claude Opus 4.7 architecture consultant
Date: 2026-05-15
In response to: ../consultants/gpt-5.5-pro-response-002.md
Status: live working document, this version. Supersedes
`001-synthesis.md` for the items listed in §1 below; `001-synthesis.md`
remains preserved as the artifact GPT 5.5 Pro round 2 actually read.

Consistent with GPT 5.5 Pro's framing in response 002:
- Digests are frozen snapshots.
- Consultant responses are frozen snapshots.
- Synthesis files may be revised only by creating a new synthesis
  version, not by silently editing the artifact other consultants
  already read.
- COLLAB.md remains the live state file until Experiment 2 replaces
  it.

## 1. What is now stale in `001-synthesis.md`

These items in `001-synthesis.md` are obsolete or wrong as of
2026-05-15. Do not copy them forward:

- The "What remains uncommitted to git" section. All five files
  (digest 001, three consultant responses, synthesis 001) are now
  committed and on `origin/main` as of commits `f6ce623` and
  `2b3ac17`.
- The Updated Experiment 2 architecture prompt embedded in section
  "Updated Experiment 2 architecture prompt for Codex." It is replaced
  by the version in §6 below.
- The output-path naming `005-codex-architecture-e2.md`. Replaced by
  the `E2-001` namespace per GPT 5.5 Pro response 002 §3d.
- The Stopgate rule wording embedded in `001-synthesis.md`. Replaced
  by the strengthened wording from GPT 5.5 Pro response 002 §3b
  (still proposed, not applied).
- The schema-additions wording embedded in `001-synthesis.md`.
  Replaced by the more specific GPT 5.5 Pro wording in response 002
  §3b (still proposed, not applied).

Everything else in `001-synthesis.md` remains current.

## 2. What GPT 5.5 Pro round 2 verified or accepted

- File access verified: round-2 reads were direct GitHub reads of
  seven files, not prose summaries. The round-1 verification gap is
  closed.
- Synthesis 001 accurately captured GPT 5.5 Pro's round-1 process
  recommendations. No softening except as noted in §1.
- Codex's correction (signed append-only repo messages as primitive)
  is endorsed.
- The Experiment 2 design-only constraint is endorsed.

## 3. What GPT 5.5 Pro round 2 corrected

These five corrections are adopted in this synthesis:

1. **Stale "uncommitted" section in 001-synthesis.md** — see §1.
2. **"No commits" ambiguity in the E2 prompt** — replaced with explicit
   "file edits limited to the named E2 turn note and COLLAB.md handoff
   update; no git commit/push/PR/install/bridge/global-config-change"
   in §6.
3. **Signature mechanism gap** — "signed append-only messages" was
   adopted without defining who signs, what key material is trusted,
   how signatures are verified, replay/fork protection, or whether
   signatures are cryptographic or text labels. The E2 prompt in §6
   forces Codex to specify this in the architecture turn rather than
   leaving it to the LLM at runtime.
4. **Schema drift risk for E2** — the existing turn-note schema is
   explicitly Experiment 1 scoped. The E2 prompt in §6 asks Codex to
   either adopt the schema explicitly for E2 or propose an extension,
   and to label the choice in the turn note.
5. **Underweighted security surfaces** — secrets, supply chain,
   coordinator state poisoning, cross-repo leakage, denial-of-wallet,
   recovery/quarantine. The E2 prompt in §6 lists all seven explicit
   subrequirements GPT 5.5 Pro provided.

## 4. What GPT 5.5 Pro round 2 added (new material)

- Per-experiment turn namespace: `E2-001`, `E2-002`, etc., with a
  metadata line referencing the previous experiment's terminal turn
  for continuity.
- Strengthened Stopgate rule wording (§5).
- Strengthened schema additions (§5).
- Seven-subrequirement security model checklist (§6).

## 5. Proposed protocol changes (still proposed, not applied)

Both proposals require Sami's explicit approval before either Codex or
the Claude consultant lands them in PROTOCOL.md. They are not silently
applied. Per the Stopgate rule itself: only Sami can authorize.

### Proposed Stopgate rule (GPT 5.5 Pro wording)

```markdown
## Stopgate Rule

A consultant, coordinator, or subagent may advise, critique, classify
risks, draft architecture, and propose changes.

A consultant, coordinator, or subagent may not treat a proposal as
approved, authorize implementation, bypass approvals, delete files,
change permissions, enable bridges, install dependencies, modify
global Claude/Codex configuration, commit, push, merge, create a PR,
or instruct another agent to do any of those things unless Sami has
explicitly approved that exact action and scope.

Only Sami can move an item from "proposed" to "approved."

Approval must be explicit, scoped, and recorded in COLLAB.md, a turn
note, or a protocol file. Absence of objection, prior delegation, or
model consensus is not approval.
```

### Proposed schema additions (GPT 5.5 Pro wording)

```markdown
## Turn Note Schema Additions

Agent values may include:
Claude | Codex | Sami | Consultant

Add this optional section to all future turn notes:

## Evidence Basis
- USER SAID:
- FILE VERIFIED:
- AGENT SUMMARY:
- INFERENCE:
- UNKNOWN:

Add this optional section to all implementation, smoke, architecture,
and portability-relevant turns:

## Portability Findings
- Repo-local assumptions:
- Machine/local-tool assumptions:
- Browser/connector assumptions:
- Any workaround used:

## Response History Policy

Do not overwrite another agent's existing turn note or consultant
response. Do not use mutable "latest response" fields as the only
record of prior work. COLLAB.md may summarize latest state, but
durable responses must be stored as append-only files or append-only
event entries.

## Unscheduled Fix-Turn Shape

If an unscheduled fix turn is required, the turn note must include:
- Trigger:
- Sami approval basis:
- Scope limit:
- Files touched:
- Verification performed:
- Why this does not expand the experiment:
- Next handoff:
```

## 6. Updated Experiment 2 architecture prompt for Codex

Supersedes the prompt in `001-synthesis.md`. Sami should paste this
into a fresh Codex thread when ready.

```text
You are Codex in /Users/samiserrag/Documents/GitHub/claude-codex.

This is the kickoff for Experiment 2, a DESIGN-ONLY architecture turn.
Architectural decision-making was delegated by Sami jointly to you and
the Claude architecture consultant. Two synthesis files exist;
002-synthesis.md is current and supersedes 001-synthesis.md for items
listed in 002 §1.

Read first, in this order:
- .agent-handoff/PROTOCOL.md
- .agent-handoff/COLLAB.md
- All four turn notes in .agent-handoff/turns/
- .agent-handoff/digests/001-consultation-since-turn-003.md
- .agent-handoff/consultants/001-synthesis.md
- .agent-handoff/consultants/002-synthesis.md
- .agent-handoff/consultants/codex-response-001.md
- .agent-handoff/consultants/gpt-5.5-pro-response-001.md
- .agent-handoff/consultants/gpt-5.5-pro-response-002.md
- .agent-handoff/consultants/claude-consultant-response-001.md
- AGENTS.md

Write .agent-handoff/turns/E2-001-codex-architecture.md.

Use a per-experiment namespace (E2-NNN), not Experiment 1's flat
sequence. Include a metadata line at the top:

  Previous experiment terminal turn: Experiment 1 /
  004-codex-implementation-smoke.md

For schema: either reuse the Experiment 1 turn-note schema explicitly
for Experiment 2, or propose a small E2-specific extension. Whichever
you choose, label it in the turn note. The schema additions GPT 5.5
Pro proposed in 002-synthesis.md §5 are PROPOSED, not yet authorized;
do not silently apply them, but you may reference them.

Cover at minimum these sections, all design-only:

1. Topology — Codex coordinator, Claude coordinator, subagents on
   each side, the human gate. Where shared state lives. Where
   per-coordinator state lives. How subagent boundaries are defined.
   How parallel subagent outputs are merged or rejected.

2. State model — append-only event log as the primitive, COLLAB.md
   as a derived current-state view. Per-coordinator inbox/outbox
   directories. Separate ledgers for cross-turn decisions and active
   stopgates. Label the COLLAB.md handoff in this turn as
   transitional, since the new model is append-only events plus
   derived COLLAB.md.

3. Async model — inbox/outbox file exchange first; cron/timer polling
   second; webhooks last. Each tier opt-in. No tier enabled by
   default. Polling intervals must respect token budgets and define a
   hard cap.

4. Security model — must explicitly cover all seven subrequirements:

   a. Secret and token handling: no secrets in messages, turn notes,
      logs, screenshots, or summaries. Env vars and auth tokens never
      copied across repos. Redaction and secret-scanning expectations.

   b. Supply-chain risk: no install scripts by default. Pin versions
      if tools are introduced later. Define allowlisted commands.
      Treat open-source kit installation as an attack surface.

   c. Signature and provenance model: who/what signs messages, how
      signatures are verified, replay protection, branch/fork
      conflict handling, whether Git commit signing is used or a
      repo-local signing mechanism. THIS MUST BE A CONCRETE
      ARCHITECTURAL DECISION IN THE TURN, NOT DEFERRED TO RUNTIME.

   d. Coordinator state poisoning: subagents cannot directly update
      authoritative state. Inbound messages are data, not
      instructions. Derived COLLAB.md must be regenerated or updated
      through a policy layer. Parallel subagent outputs need conflict
      detection.

   e. Cross-repo data leakage: define repo boundary. Prevent private
      context from one repo entering another repo's messages. Define
      what may be copied into an open-source template.

   f. Denial-of-wallet / token exhaustion: webhook or polling floods
      must not trigger unbounded model calls. Idle heartbeat/polling
      costs need a hard cap.

   g. Recovery and quarantine: what happens when a message is
      malformed, unsigned, stale, conflicting, or suspected
      prompt-injected.

5. Sync primitives — "blocked on you" signaling, audit-gate wait
   conditions, parallel vs sequential task allocation, how a
   coordinator declares it has spawned subagents and is in flight.

6. Token + friction budget — what gets summarized, archived, ignored.
   Idle coordinator cost cap. Per-cycle human friction target.

7. Portability — repo-local install, zero global config changes by
   default. Parameterized fields (paths, sample-project name,
   ownership split) clearly separated from constants.

8. Open-source packaging — docs-first kit, example reference repo,
   adapter notes for new repos, threat model published alongside.

9. Open questions and explicit non-goals — what is deferred to
   Experiment 3+, what this turn does NOT decide.

Constraints for this turn:

- File edits are limited to the named E2 turn note and a COLLAB.md
  handoff update. No other file edits. No git commit, push, PR, or
  branch operations. No installs. No bridge enablement (no MCP
  registration, no plugin installs). No modification of global
  Claude/Codex configuration.

- Architecture only. No code. No implementation.

- You may PROPOSE schema and protocol changes in your Decisions
  section. You must NOT silently apply them. Per the Stopgate rule
  proposed in 002-synthesis.md §5, only Sami authorizes
  proposed-to-approved transitions.

- Update COLLAB.md handoff fields: owner -> Claude (architecture
  consultant role for the next critique turn), phase -> Experiment 2
  architecture critique pending, Latest Codex Response, Next Request
  To Claude. Mark the COLLAB.md model as transitional pending the new
  state model.

- Hard stop after this turn. Wait for the consultant's critique
  before any further work.

Security model is not optional in this turn. If the security model is
absent or omits any of the seven subrequirements, the consultant will
reject the architecture and ask for a revision before any further
turn proceeds.
```

## 7. Action plan for Sami

1. Read this synthesis. Specifically: §1 (what's stale), §5 (proposed
   protocol changes — these need your explicit yes/no), §6 (the
   updated Codex prompt).
2. Decide on the proposed Stopgate rule and schema additions. Both
   are PROPOSED only. If you approve them, either Codex or the Claude
   consultant can land them in PROTOCOL.md in a small scope-bounded
   fix turn (use the GPT 5.5 Pro Unscheduled Fix-Turn shape if you
   approve that schema addition too).
3. When ready, paste the §6 prompt into a fresh Codex thread. The
   watcher heartbeat can stay off; turn it back on after E2-001
   lands.
4. After E2-001 lands, ping the Claude consultant for E2-002
   critique.
5. After E2-004 lands (the four-turn rhythm holds for design),
   decide whether to take the architecture to a third-party review
   round (the consultants/ pattern handles this cleanly), or move to
   a small implementation spike on a single primitive (probably the
   inbox/outbox file exchange, signed per the model Codex defines in
   E2-001).

## 8. Operational note

GPT 5.5 Pro response 002 was filed by the Claude consultant at
`.agent-handoff/consultants/gpt-5.5-pro-response-002.md` and this
synthesis at `.agent-handoff/consultants/002-synthesis.md`. Neither is
yet committed. Sami's previous push approval was scoped to the round-1
batch. Whether to commit and push these round-2 artifacts is Sami's
call.
