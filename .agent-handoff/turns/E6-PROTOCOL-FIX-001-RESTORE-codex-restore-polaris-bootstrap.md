# E6-PROTOCOL-FIX-001-RESTORE - Codex restore Polaris/bootstrap

## Coordinator Trigger
- State: ROUTINE
- Reason: repair of a concrete auditor-identified regression in an
  already-scoped turn. No new architecture was introduced.

## Project Mode Estimate
- Dominant mode: Coordinator (~75%, agent heuristic estimate)
- Sami-decision-pending: ~20%
- Execution: ~5%
- Unknown: 0%
- Reason: no Outcome Circle is active. This repair preserves the
  bootstrap-rule work and prepares the handoff for Claude critique before
  the first circle is scoped.

## Agent
Codex / OpenAI - builder/repair implementer.

## Phase
repair implementation

## Purpose

Preserve E6-PROTOCOL-FIX-001's good bootstrap-rule work while repairing
the Polaris HTML structure regression identified by Claude Code. Fold the
auditor nit by adding `scope_conflict` to the bootstrap exit-state list in
both live PROTOCOL.md and the kit protocol template.

## Files Changed

- `.agent-handoff/DASHBOARD.html`
  - Restored `role-courier` on the Human Role Cue panel.
  - Restored the PR #5 state-class CSS and cue-note CSS needed for the
    intended Human Role Cue treatment.
  - Restored the in-cue "About the 5 states" details block.
  - Restored top-level details panels:
    - "Who's who right now"
    - "What changed in this snapshot"
  - Kept current E6-PROTOCOL-FIX-001 snapshot content; did not revert to
    stale E6-DASH-002 text.
- `.agent-handoff/PROTOCOL.md`
  - Added `scope_conflict` to the bootstrap exit-state list.
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
  - Mirrored the same `scope_conflict` wording.
- `.agent-handoff/COLLAB.md`
  - Updated current handoff state and next request to Claude.
- `.agent-handoff/turns/E6-PROTOCOL-FIX-001-RESTORE-codex-restore-polaris-bootstrap.md`
  - This turn note.

## DASHBOARD.md

Not edited in this restore turn. It already retained the "About the 5
states" cue explanation. The repair was HTML structural parity and the
protocol bootstrap nit, not a new dashboard snapshot redesign.

## Decisions / Boundaries

- No new Polaris design.
- No new dashboard routing model.
- No new sections beyond restoring the two removed standing panels.
- No first Outcome Circle.
- No Outcome Packet template.
- No loop runner.
- No automation, notifier, model call, API setup, transport layer, MCP,
  plugin, bridge, NanoClaw, CommonGround, or Notion work.
- No advisor-notes/reflections/improvements path creation.
- No OPERATING-MODEL.md edit. The stale §8/doc-lock freshness issue
  remains future work.
- No staging, commit, push, branch, or PR.

## Verification

- Initial status before restore showed the local E6-PROTOCOL-FIX-001
  stack plus Claude critique state:
  - modified `.agent-handoff/COLLAB.md`
  - modified `.agent-handoff/DASHBOARD.html`
  - modified `.agent-handoff/DASHBOARD.md`
  - modified `.agent-handoff/PROTOCOL.md`
  - modified `kit/v1/.agent-handoff/PROTOCOL.md.template`
  - untracked `.agent-handoff/turns/E6-PROTOCOL-FIX-001-claude-critique-outcome-circle-bootstrap-rule.md`
  - untracked `.agent-handoff/turns/E6-PROTOCOL-FIX-001-codex-outcome-circle-bootstrap-rule.md`
- `git diff --check` passed.
- `role-courier` is present again in `DASHBOARD.html`.
- `DASHBOARD.html` contains the in-cue "About the 5 states" details.
- `DASHBOARD.html` contains top-level details for:
  - "Who's who right now"
  - "What changed in this snapshot"
- `DASHBOARD.md` and `DASHBOARD.html` both contain the cue explanation.
- Focused bootstrap paragraph diff between live PROTOCOL.md and kit
  template is clean after adding `scope_conflict`.
- `git diff --name-only` against no-touch surfaces returned no output
  for OPERATING-MODEL.md, alert-state.sh, advisor-notes/reflections/
  improvements, kit dashboard/COLLAB/prompts/README, root docs, docs,
  .mcp.json, .claude, generated, and trust/event paths.
- No advisor-notes/reflections/improvements directory exists under
  `.agent-handoff`.
- `DASHBOARD.html` self-contained search found only one inline `<style>`,
  one inline `<script>`, `data-copy` attributes, and the expected
  `navigator.clipboard.writeText(target.innerText)` call. No external
  CSS/JS, HTTP(S) URLs, storage APIs, network APIs, or server
  requirement were introduced.
- `sh .agent-handoff/tools/alert-state.sh` ran successfully and did not
  modify the working tree.
- Pilot repo status was clean and read-only.
- Live Open Mic Colorado status was checked read-only; existing unrelated
  dirty files were observed and not touched by this turn.

## Handoff

Next actor: Claude Code.

Recommended critique prompt:

```text
[Lane 1: Claude-Codex Harness | Claude Code / Anthropic | Thread: E6-PROTOCOL-FIX-001-RESTORE critique | Role: auditor/advisor]

You are Claude Code in /Users/samiserrag/Documents/GitHub/claude-codex.

Critique E6-PROTOCOL-FIX-001-RESTORE as auditor/advisor.

Read:
- .agent-handoff/PROTOCOL.md
- kit/v1/.agent-handoff/PROTOCOL.md.template
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E6-PROTOCOL-FIX-001-codex-outcome-circle-bootstrap-rule.md
- .agent-handoff/turns/E6-PROTOCOL-FIX-001-claude-critique-outcome-circle-bootstrap-rule.md
- .agent-handoff/turns/E6-PROTOCOL-FIX-001-RESTORE-codex-restore-polaris-bootstrap.md

Focus:
1. Did Codex preserve the good E6-PROTOCOL-FIX-001 bootstrap-rule work?
2. Did Codex restore `role-courier` on the Human Role Cue panel?
3. Did Codex restore the in-cue "About the 5 states" details block in DASHBOARD.html?
4. Did Codex restore the top-level details panels "Who's who right now" and "What changed in this snapshot"?
5. Did Codex preserve current E6-PROTOCOL-FIX-001 snapshot content rather than reverting to stale E6-DASH-002 text?
6. Did Codex add `scope_conflict` to the bootstrap exit-state list in both live PROTOCOL.md and kit/v1/.agent-handoff/PROTOCOL.md.template?
7. Is the bootstrap wording still identical or byte-equivalent between live protocol and kit template?
8. Did Codex avoid OPERATING-MODEL.md, alert-state.sh, advisor-notes/reflections/improvements, kit dashboard/COLLAB/prompts/README, root docs, docs, automation, model/API setup, NanoClaw/CommonGround/MCP/plugin/bridge/Notion, cron/timer/webhook/launch agent/global config, pilot repo, live Open Mic Colorado, and product/runtime work?
9. Does DASHBOARD.html remain self-contained with no external CSS/JS, HTTP(S) URLs, storage APIs, network APIs, or server requirement?
10. Do copy buttons still copy only visible payload text?
11. Did alert-state.sh run without modifying the working tree?
12. Did Codex avoid starting the first Outcome Circle?
13. Is E6-PROTOCOL-FIX-001 + RESTORE safe to accept?

Verification:
- git status --short --untracked-files=all.
- git diff --check.
- Confirm only approved RESTORE surfaces changed on top of the existing local E6-PROTOCOL-FIX-001 stack.
- Confirm no staging, commit, push, branch, or PR.

Output only:
- .agent-handoff/turns/E6-PROTOCOL-FIX-001-RESTORE-claude-critique-restore-polaris-bootstrap.md
- .agent-handoff/COLLAB.md handoff update
- .agent-handoff/DASHBOARD.md / DASHBOARD.html only if snapshot handoff requires it

Hard stop after critique.
Dashboard status: include whether DASHBOARD.md/html were refreshed this turn.
```

## Hard Stop

Codex is hard-stopped after E6-PROTOCOL-FIX-001-RESTORE. No staging,
commit, push, branch, PR, first Outcome Circle, or follow-up work is
authorized.
