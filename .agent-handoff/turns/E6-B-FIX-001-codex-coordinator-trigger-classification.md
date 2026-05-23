# E6-B-FIX-001 - Codex Coordinator Trigger Classification

## Agent
Codex

## Phase
fix

## Coordinator Trigger
- State: ROUTINE
- Reason: Sami already authorized the exact narrow protocol wording fix, and no unresolved strategic, UX, safety, automation, tooling, or scope decision requires GPT input for this implementation turn.

## Active Role Declaration
- Active role: protocol wording implementer for the E6-B coordinator-trigger
  classification fix.
- Authority limit: edit only `.agent-handoff/PROTOCOL.md`,
  `kit/v1/.agent-handoff/PROTOCOL.md.template`, `.agent-handoff/COLLAB.md`,
  and this append-only E6-B-FIX-001 turn note.
- Explicit non-authority: no dashboard edit, no DASHBOARD.html edit, no
  `alert-state.sh` edit, no advisor-notes/reflections/improvements path
  creation, no kit dashboard template edit, no kit README edit, no prompt
  template edit, no automation, no model calls, no API setup, no NanoClaw,
  no CommonGround, no MCP/plugin/bridge, no Notion, no cron/timer/webhook/
  launch agent/global config, no staging, no commit, no push, no branch, no
  PR, no pilot repo touch, and no live Open Mic Colorado touch.

## Files Touched
- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-B-FIX-001-codex-coordinator-trigger-classification.md`

## Implementation Summary

Added a mirrored `Coordinator Trigger Classification` subsection under the
existing `GPT Coordinator / Outcome Architect` protocol wording in both the
live protocol and kit protocol template.

The fix codifies:
- Every turn note must include a near-top `Coordinator Trigger` section with
  `State: ROUTINE | NEEDS_GPT | UNCLEAR` and a one-sentence reason.
- Sami is never responsible for determining routine status.
- The active repo-writing node must classify the Coordinator Trigger state.
- Missing classification is treated as `UNCLEAR` and defaults to Ask GPT.
- `ROUTINE` is allowed only for already scoped, low-risk, non-strategic turns
  with no active architecture, pivot, UX-friction, cognitive-load, conflict,
  safety, automation, or tooling trigger.
- `NEEDS_GPT` applies when any GPT coordinator invocation trigger fires.
- `UNCLEAR` applies when the active repo-writing node cannot confidently mark
  the turn `ROUTINE`, and it defaults to Ask GPT.
- When state is `NEEDS_GPT` or `UNCLEAR`, dashboard guidance should make
  `Ask GPT-5.5 Pro` the primary recommendation rather than asking Sami to
  decide whether GPT is needed.
- Handoffs must include the exact GPT paste question when state is
  `NEEDS_GPT` or `UNCLEAR`.
- Auditors may upgrade the classification during critique with a one-sentence
  reason.

Preserved E6-B's existing coordinator/scribe rules: GPT may recommend,
synthesize, draft prompts, and propose outcome/rubric content, but GPT may not
approve scope, pushes, or completion; Sami remains sole approval authority;
rubric satisfaction is not approval; multi-turn outcome loops remain deferred.

## Pre-existing Local State

Before this fix, the working tree already contained local E6-B implementation
and Claude critique state, including Claude's dashboard freshness refresh:
- `M .agent-handoff/COLLAB.md`
- `M .agent-handoff/DASHBOARD.html`
- `M .agent-handoff/DASHBOARD.md`
- `M .agent-handoff/PROTOCOL.md`
- `M kit/v1/.agent-handoff/PROTOCOL.md.template`
- `?? .agent-handoff/turns/E6-B-claude-critique-gpt-coordinator-protocol-wording.md`
- `?? .agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md`

This FIX-001 turn preserved that state and did not reset, clean, delete, or
edit the pre-existing dashboard files.

## Verification

Pre-fix local state:
- `git status --short --untracked-files=all` showed pre-existing local E6-B
  implementation + Claude critique state:
  - `M .agent-handoff/COLLAB.md`
  - `M .agent-handoff/DASHBOARD.html`
  - `M .agent-handoff/DASHBOARD.md`
  - `M .agent-handoff/PROTOCOL.md`
  - `M kit/v1/.agent-handoff/PROTOCOL.md.template`
  - `?? .agent-handoff/turns/E6-B-claude-critique-gpt-coordinator-protocol-wording.md`
  - `?? .agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md`

Post-fix verification:
- `git status --short --untracked-files=all` shows the same pre-existing
  local E6-B implementation + critique state, plus this new FIX-001 turn note:
  - `M .agent-handoff/COLLAB.md`
  - `M .agent-handoff/DASHBOARD.html`
  - `M .agent-handoff/DASHBOARD.md`
  - `M .agent-handoff/PROTOCOL.md`
  - `M kit/v1/.agent-handoff/PROTOCOL.md.template`
  - `?? .agent-handoff/turns/E6-B-FIX-001-codex-coordinator-trigger-classification.md`
  - `?? .agent-handoff/turns/E6-B-claude-critique-gpt-coordinator-protocol-wording.md`
  - `?? .agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md`
- `git diff --check` passed with no output.
- Direct diff of the `Coordinator Trigger Classification` subsection between
  live `PROTOCOL.md` and kit `PROTOCOL.md.template` returned no output; the
  coordinator-trigger content is identical.
- E6-B-FIX-001 edited only the four allowed files:
  `.agent-handoff/PROTOCOL.md`,
  `kit/v1/.agent-handoff/PROTOCOL.md.template`,
  `.agent-handoff/COLLAB.md`, and this turn note.
- `.agent-handoff/DASHBOARD.md` and `.agent-handoff/DASHBOARD.html` were
  already modified before this FIX-001 turn by Claude's E6-B critique
  freshness refresh. Codex did not edit either dashboard file in FIX-001.
- Scoped no-touch diff check against `alert-state.sh`,
  advisor-notes/reflections/improvements paths, kit dashboard template, kit
  COLLAB template, kit prompts, kit README, root docs, `docs`, `.mcp.json`,
  `.claude`, `generated`, and `trust/event` returned no output.
- `find .agent-handoff -maxdepth 1 -type d \( -name advisor-notes -o -name reflections -o -name improvements \) -print`
  returned no output; no advisor-notes/reflections/improvements path was
  created.
- Search for `.mcp.json`, Notion, NanoClaw, and CommonGround artifacts found
  only pre-existing E5-N CommonGround feasibility turn notes; no new
  integration or config files were created.
- Pilot repo status at `/Users/samiserrag/Documents/GitHub/open-mic-colorado-agent-pilot`
  was clean.
- Live Open Mic Colorado was not touched by this turn; no command was run with
  the live repo as working directory.

Not run / not done:
- No tests were run; this was markdown/protocol wording only.
- No dashboard/browser verification was run; dashboard files were out of scope
  for Codex in this FIX-001 turn.
- No `alert-state.sh` run; E6-B-FIX-001 did not authorize script execution.
- No automation, model calls, API setup, NanoClaw, CommonGround,
  MCP/plugin/bridge, Notion, cron/timer/webhook/launch agent/global config,
  staging, commit, push, branch, or PR.

## Handoff

Claude Code should critique E6-B-FIX-001 as auditor/advisor, focusing on
whether the protocol fix removes the burden from Sami, requires active
repo-writing-node classification, defaults missing/unclear classification to
Ask GPT, preserves E6-B's coordinator/scribe rules, mirrors the wording between
live and kit protocol surfaces, and avoids dashboard edits by Codex.

Hard stop after E6-B-FIX-001. No staging, commit, push, branch, PR, dashboard
edit, advisor-notes path creation, automation, API setup, transport work,
protocol expansion beyond this fix, or outcome-loop design is authorized.
