# E6-B - Codex GPT Coordinator Protocol Wording

## Agent
Codex

## Phase
implementation

## Active Role Declaration
- Active role: protocol wording implementer for the accepted E6-A GPT
  Coordinator / Outcome Architect design.
- Authority limit: edit only `.agent-handoff/PROTOCOL.md`,
  `kit/v1/.agent-handoff/PROTOCOL.md.template`, `.agent-handoff/COLLAB.md`,
  and this append-only E6-B turn note.
- Explicit non-authority: no dashboard edit, no DASHBOARD.html edit, no
  `alert-state.sh` edit, no kit dashboard template edit, no reflection
  proposal template edit, no kit README edit, no advisor-notes/reflections/
  improvements path creation, no automation, no model calls, no OpenAI API
  setup, no NanoClaw, no CommonGround, no MCP/plugin/bridge, no Notion, no
  cron/timer/webhook/launch agent/global config, no staging, no commit, no
  push, no branch, no PR, no pilot repo touch, and no live Open Mic Colorado
  touch.

## Files Touched
- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md`

## Implementation Summary

Added a concise `GPT Coordinator / Outcome Architect` subsection to both the
live protocol and the kit protocol template under `Node Capability And Advisor
Rules`.

The mirrored subsection codifies:
- Stable role model:
  - GPT-5.5 Pro: coordinator / outcome architect / external advisor.
  - Codex: builder / implementer / investigator.
  - Claude Code: auditor / critic / verifier.
  - Sami: approval / priority / risk / taste.
  - Repo: source of truth.
- GPT may recommend, synthesize, draft prompts, and define outcome/rubric
  proposals, but does not approve scope, pushes, or completion.
- GPT invocation is trigger-based, not mandatory every turn.
- GPT is not required for routine implementation, routine critique,
  straightforward push authorization, already-scoped no-choice handoffs, or
  low-risk verification where Claude/Codex agree and Sami is not being asked
  for strategic judgment.
- GPT output contract: concise synthesis, consensus recommendation, divergent
  opinions, risk/tradeoff summary, exact next prompts, outcome/rubric proposal
  when relevant, exact approval text when Sami must approve, explicit
  uncertainty / unknowns, and no repo-authoritative claims unless scribed.
- Near-term scribing discipline: Sami pastes GPT output into Claude/Codex, and
  the active repo-writing node scribes with attribution, verbatim quote when
  exact text is available, no length cap, structured summary, and accepted /
  rejected / left undecided status.
- Dashboard guidance only: if a GPT trigger fires, the dashboard primary
  recommendation may become `Ask GPT-5.5 Pro`, preserving E5-T-FIX-004's
  single-recommendation rule.
- Multi-turn outcome/rubric loops remain deferred to E6-C or later, and
  rubric satisfaction does not authorize commit, push, new scope, or final
  completion without Sami's exact approval text.
- NanoClaw or any transport layer remains a future option only and requires a
  separate review.

## Verification

Pre-edit status:
- `git status --short --untracked-files=all` was clean before E6-B edits.

Post-edit verification:
- `git status --short --untracked-files=all` shows only:
  - `M .agent-handoff/COLLAB.md`
  - `M .agent-handoff/PROTOCOL.md`
  - `M kit/v1/.agent-handoff/PROTOCOL.md.template`
  - `?? .agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md`
- `git diff --check` passed with no output.
- Direct diff of the `GPT Coordinator / Outcome Architect` subsection between
  live `PROTOCOL.md` and kit `PROTOCOL.md.template` returned no output; the
  coordinator-rule content is identical.
- `git diff --name-only` shows only the three tracked approved files; the E6-B
  turn note is new/untracked, as expected.
- Scoped no-touch diff check against `DASHBOARD.md`, `DASHBOARD.html`,
  `alert-state.sh`, advisor-notes/reflections/improvements paths, kit
  dashboard template, kit COLLAB template, kit starter turn note, kit
  reflection proposal template, kit README, root docs, `docs`, `.mcp.json`,
  `.claude`, `generated`, and `trust/event` returned no output.
- `find .agent-handoff -maxdepth 1 -type d \( -name advisor-notes -o -name reflections -o -name improvements \) -print`
  returned no output; no advisor-notes/reflections/improvements path was
  created.
- Search for `.mcp.json`, Notion, NanoClaw, and CommonGround artifacts found
  only pre-existing E5-N CommonGround feasibility turn notes; no new
  integration or config files were created.
- Pilot repo status at `/Users/samiserrag/Documents/GitHub/open-mic-colorado-agent-pilot`
  was clean.
- Live Open Mic Colorado status was checked read-only. It showed existing
  product/runtime dirty files outside this E6-B scope; E6-B did not write
  there.

Not run / not done:
- No tests were run; this was markdown/protocol wording only.
- No dashboard/browser verification was run; dashboard files were out of scope.
- No `alert-state.sh` run; E6-B did not authorize script execution.
- No automation, model calls, OpenAI API setup, NanoClaw, CommonGround,
  MCP/plugin/bridge, Notion, cron/timer/webhook/launch agent/global config,
  staging, commit, push, branch, or PR.

## Handoff

Claude Code should critique E6-B as auditor/advisor, focusing on whether the
protocol wording is concise, mirrored between live and kit protocol surfaces,
faithful to E6-A, and strictly scoped to the four approved files.

Hard stop after E6-B. No staging, commit, push, branch, PR, dashboard edit,
advisor-notes path creation, automation, API setup, transport work, protocol
expansion beyond this wording, or outcome-loop design is authorized.
