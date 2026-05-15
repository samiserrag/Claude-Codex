# 001 - Consultation digest since turn 003 landing

## Purpose

This file brings any agent (the main Codex watcher thread, a third-party
consultant, or a future fresh thread) up to speed on what has happened in
the architecture-consultant Claude Opus thread between the moment turn 003
landed cleanly and now. It is not a turn note. It is a context handoff so
new consults can give informed input without re-reading the full
consultation transcript.

The watcher's last input was the post-turn-003 clean-state report. The
heartbeat was disabled before turn 004 began. Everything below the
"Timeline" section happened off the watcher's view.

## Timeline since the watcher's last input

1. Watcher heartbeat disabled before turn 004 to reduce mid-turn
   false-positive reports and cut token use during the implementation
   window.
2. Turn 004 ran in a fresh Codex thread. Codex created `app/app.js`,
   wrote `004-codex-implementation-smoke.md`, updated `COLLAB.md`, ran
   Chrome smoke verification through the Codex Chrome connector
   (success path: add a decision, see it render, reload, see it
   persist), and stopped at the four-turn cap. `node --check` passed
   on `app/app.js`. Chrome console warnings/errors were `[]`.
3. Direct `file://` was blocked by the Codex Chrome connector URL
   policy. Codex used `python3 -m http.server 8765` and stopped the
   server after verification. Codex surfaced this as a "Portability
   finding" sub-bullet under Browser verification, exactly the format
   the consultant had asked for in the portability addendum.
4. Consultant graded turn 004 as a strong pass on every criterion. The
   experiment's full Definition of Done was confirmed met: all four
   turn notes present and schema-conformant, one Codex blocker addressed
   in writing by Claude (write-failure semantics in turn 002 -> turn
   003), at least one nit deferred in writing, three app files in
   place, browser verification by both agents, no installs/commits/
   pushes/PRs/global config changes, turn log readable cold.
5. Sami requested retrospective input from both implementer threads.
   The Codex turn-004 thread and the Claude turn-003 thread each
   answered four questions in writing without editing files. Both
   converged on the same single most expensive friction point: the
   Chrome runner `file://` refusal, which forced both agents to spin up
   `python3 -m http.server` mid-turn. Claude additionally surfaced that
   Claude in Chrome MCP rewrites `file:///` to `https://file///`,
   exhibiting a real bug rather than a clean refusal. Both agents
   recommended: Sami writes a retrospective and stops before any
   bridge experiment or kit extraction begins.
6. The consultant drafted a turn 005 retrospective (file-ready text
   embedded below) for Sami to edit and file. Sami had not yet filed it
   when the next message arrived.
7. Sami then significantly expanded the deliverable's scope. He
   stepped back from technical decision-making and explicitly delegated
   architectural decisions jointly to the Claude consultant and Codex.
   His expanded brief is reproduced verbatim in the next section.
8. The consultant responded that this scope expansion makes the small
   file-based kit obsolete as a deliverable, and reframed Experiment 2
   from "MCP bridge on/off comparison" to "design-only architecture
   spike covering the multi-agent coordinator system, with security
   model in the same turn." A paste-ready prompt for Codex's turn 005
   architecture turn was provided to Sami, embedded below.
9. Sami asked: should we loop the main Codex watcher thread back in
   before that turn 005 architecture happens, get its consultation,
   and additionally get a third consultation from another model
   (Sami referenced "GPT 5.5 Pro"; the actual model name is at Sami's
   discretion)? This digest is the answer to that ask: produce one
   shared context document that any consultant can read.

## Sami's expanded brief, verbatim

> we want it to be private, correct, minimum friction and token use, and
> optimizable for a high level agent in codex coordinating subagents to
> communicate directly with the same in claude code in any repo and
> maybe should use the repo docs instead of HTML and also Maybe should
> use crons or timers or webhooks or something to trigger each other to
> updates while not interupting flows being run in each so they dont
> get slowed down too much, they just keep feeding each other
> additional context and give each other advice, coordinate splitting
> up parallel and sequential tasks, and being able to know when one
> should wait for the other, like for audits. I hope that helps. I do
> trust you and Codex to make the final decisions on this and ideally
> this can be an open source repo with instructions for anyone to adapt
> to their repos and has security at it's highest priority.

## Decoded requirements (consultant's interpretation, open to revision)

- Hierarchical agents: a coordinator on each side (Codex coordinator,
  Claude Code coordinator) able to spawn and manage subagents on its own
  side.
- Asynchronous coordination between the two coordinators via cron,
  timers, or webhooks. Neither side should block the other's flow.
- State and content live in the repo's docs and code, not in a sample
  HTML web app. Decision Ledger was a test vehicle, not the deliverable.
- Continuous context feeding between coordinators without interrupting
  in-flight subagent work.
- Task negotiation primitives: parallel vs sequential split, "blocked
  on you" signaling, audit-gate wait conditions.
- Portable to any repo running both CLIs.
- Open-source distribution with adaptation instructions.
- Privacy and security as the top constraint, not a feature.
- Token-efficient and low-friction for the human.

## Current state of the experiment

- Experiment 1 file-based loop is complete and validated. Definition of
  Done is met.
- Turn 005 retrospective is drafted but NOT filed yet. Embedded below.
- Codex Experiment 2 architecture turn (turn 005, design-only,
  security-model required) is prompted but NOT run yet. Embedded below.
- The watcher heartbeat is OFF.
- No installs, commits, pushes, PRs, or global config changes have
  occurred.
- The MCP bridge has not been enabled and should not be enabled until
  the architecture spike is complete and reviewed.

## Drafts in flight

### A. Drafted turn 005 retrospective (not filed)

The consultant drafted this for Sami to edit. Sami did not file it. The
expanded brief now arguably supersedes the retrospective's "what's next"
section, but the friction-finding and protocol-validation content remains
correct.

(Full draft is in the consultant thread; the binding decisions in it are:
Experiment 1 met DoD; the file:// refusal was the most expensive friction
point; two-agent review materially outperformed single-agent + consultant
grading; defer Experiment 2 until the kit is extracted and tested
elsewhere. The last decision is now under revision given Sami's expanded
brief.)

### B. Drafted prompt for Codex Experiment 2 architecture turn

The consultant drafted this paste-ready prompt for a fresh Codex thread.
Sami has not yet pasted it. It instructs Codex to write a design-only
architecture turn at `.agent-handoff/turns/005-codex-architecture-e2.md`
covering at minimum: topology, trigger model, sync primitives, security
model, token + friction budget, open-source packaging. Hard constraints:
architecture only, no code, no installs, no bridge enablement, no
commits, security model required in the same turn. The prompt includes
the verbatim brief above and explicitly tells Codex that Sami delegated
architectural decisions to Codex and the Claude consultant jointly.

## What this digest is asking the new consultant for

If you are the main Codex watcher thread reading this for the first time:

1. Confirm or push back on the consultant's interpretation of Sami's
   expanded brief.
2. Identify anything in the file-based protocol's success that you
   believe should NOT survive into the multi-agent coordinator system
   and explain why.
3. Identify the single most dangerous attack surface in the proposed
   async-trigger model (cron/webhook) and how the architecture should
   handle it before any implementation.
4. Vote on whether Experiment 2's first turn should be the design-only
   architecture spike as proposed, or whether something earlier is
   missing (for example a separate threat-model document, a cost model,
   or a stricter scoping pass).
5. Propose any structural changes to the turn-note schema or the
   COLLAB.md state model that the multi-agent coordinator topology will
   require. Some are already known (no `Sami` agent value, no response
   archival policy, no Portability findings slot, no fix-turn shape).

If you are a third-party consultant from a different model:

Same five questions. Be willing to disagree with both Codex and the
Claude consultant. The point of a third consult is independent signal,
not consensus theater.

## Suggested cover prompt for the consultant

Paste this as the message that introduces this digest to whichever
consultant you ask:

```text
You are a consultant brought in to weigh in on a multi-agent
collaboration architecture project in
/Users/samiserrag/Documents/GitHub/claude-codex.

Read first:
- .agent-handoff/digests/001-consultation-since-turn-003.md
- .agent-handoff/PROTOCOL.md
- .agent-handoff/COLLAB.md
- All files in .agent-handoff/turns/

Then answer the five questions in the "What this digest is asking"
section of the digest. Be specific. Be willing to disagree. Do not edit
any files, do not install anything, do not commit, do not push. This is
read-only consult.
```

## Stopgates that still apply

No installs. No commits, pushes, merges, or PRs. No dangerous sandbox
or approval-bypass modes. No global Claude/Codex config changes. The
four-turn cap on Experiment 1 is satisfied; do not start turn 005 of any
kind without Sami's explicit approval. The MCP bridge is not enabled
and should not be enabled before the architecture spike is reviewed.
