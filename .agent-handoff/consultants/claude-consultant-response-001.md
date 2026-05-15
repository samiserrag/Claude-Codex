# Claude consultant response 001

Source: Claude Opus 4.7 architecture-consultant thread (long-running
since Experiment 1 kickoff)
Date: 2026-05-14
In response to: ../digests/001-consultation-since-turn-003.md
Status: frozen (pre-synthesis position; the synthesis file holds the
post-merge view)

## Verification status

VERIFIED FROM: direct read of every file in
`/Users/samiserrag/Documents/GitHub/claude-codex` including all four
turn notes, COLLAB.md, PROTOCOL.md, app/*, docs/*, and the digest
itself
USER SAID: Sami's expanded brief, transcribed verbatim in the digest
INFERENCE: the decoded interpretation in the digest is mine; Sami
delegated architectural decisions jointly to Codex and the Claude
consultant

## Position before synthesis

This response captures the Claude consultant's position before reading
Codex's or GPT 5.5 Pro's responses. It is filed so the synthesis is a
real three-way merge rather than a Claude-with-edits document.

### Q1: Decoded brief interpretation

The interpretation in the digest is mine. I stand by it but it is
explicitly open to correction by the other consultants. The single
most likely error is over-decoding "communicate directly" — Sami's
language did not specify the message-passing primitive and the digest's
"two coordinators talking" framing may be too direct a read.

### Q2: What from Experiment 1 should NOT survive into the multi-agent system

- The fixed four-turn cap. It worked for one feature in one experiment
  but does not generalize to multi-feature, multi-subagent
  coordination. Replace with explicit stop conditions per task, not a
  global cap.
- The "Latest <Agent> Response" mutating field in COLLAB.md. It
  required hand-archiving as "Earlier ..." and creates write
  contention. Replace with append-only event log + derived view.
- The single shared COLLAB.md as both authoritative state and ad-hoc
  bulletin. Split: persistent state (committed), volatile state
  (gitignored or ephemeral), and inbox/outbox (per-direction).

### Q3: Most dangerous attack surface

Async triggers (cron, webhook) reading repo text or external payloads
as instructions for an agent. A maliciously crafted COLLAB.md commit,
a webhook payload from a compromised endpoint, or a prompt injection
in a fetched doc could steer an agent across an approval gate. The
mitigation is to treat all inter-agent messages and external payloads
as data, validate them through a policy layer with explicit allowed
actions and deny rules, and never let an agent's read of its own
inbox bypass a human approval gate.

### Q4: Experiment 2 design-only spike

Yes. Architecture only, no code, no installs, no bridge enablement,
security model required in the same turn. The four-turn rhythm
(architecture, critique, revision, second critique) ports to design
work without modification.

### Q5: Schema and state model changes

Already known from the Experiment 1 retrospective input:

- Add `Sami` as an Agent value.
- Define response-history archival policy (avoid the "Earlier ..."
  hack).
- Add a Portability findings section to the schema.
- Define the unscheduled fix-turn shape.
- Either delete the dead `prompts/chrome-smoke-runner.md` reference
  or use the prompts directory as the canonical handoff mechanism.

For the multi-agent coordinator topology specifically:

- Replace the single mutable COLLAB.md with an append-only event log
  plus a derived current-state view.
- Add per-coordinator inbox/outbox directories.
- Add a Decisions ledger separate from per-turn decisions, so
  cross-turn architectural commitments are findable.
- Add a Stopgates ledger separate from prose stopgates so policy
  enforcement is mechanical rather than a reading exercise.

## Operational notes from the consultation thread (USER SAID + AGENT SUMMARY)

These are positions established earlier in the consultation thread
relevant to the synthesis:

- The file-based protocol's "two-agent review" pattern materially
  outperformed single-agent + consultant grading in Experiment 1.
  Codex's turn 002 caught a real defect (in-memory-after-write-failure)
  that the consultant missed when grading turn 001. Keep the pattern.
- The Chrome runner `file://` refusal was the most expensive friction
  point of Experiment 1. Both runners (Claude in Chrome MCP and Codex
  Chrome connector) independently blocked file URLs and forced a
  `python3 -m http.server` workaround mid-turn. Claude in Chrome MCP
  also exhibits a `file:///` -> `https://file///` URL rewrite bug.
- The watcher heartbeat self-corrects false positives. Convention to
  carry forward: write the turn note LAST in any turn so its presence
  is the canonical "turn complete" marker.
- Sami delegated architectural decisions jointly to Codex and the
  Claude consultant. The synthesis should reflect that joint mandate.
