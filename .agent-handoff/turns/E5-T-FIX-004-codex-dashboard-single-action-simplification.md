# E5-T-FIX-004 - Codex Dashboard Single Action Simplification

## Agent
Codex

## Phase
implementation

## Active Role Declaration
- Active role: builder for the tiny human-control-tower simplification turn.
- Authority limit: edit only the four approved E5-T-FIX-004 files:
  `.agent-handoff/DASHBOARD.html`, `.agent-handoff/DASHBOARD.md`,
  `.agent-handoff/COLLAB.md`, and this append-only turn note.
- Explicit non-authority: no protocol edit, kit template edit,
  `alert-state.sh` edit, notification script, osascript helper, automation,
  model call, NanoClaw, CommonGround, Notion, MCP/plugin/bridge, server,
  advisor-notes/reflections/improvements path creation, cron, timer, webhook,
  launch agent, global config, staging, commit, push, branch, PR, pilot repo
  touch, live Open Mic Colorado touch, or product/runtime touch.

## Files Touched
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-T-FIX-004-codex-dashboard-single-action-simplification.md`

## Implementation Summary
- Preserved the one-action dashboard architecture.
- Replaced the decision-menu top state with one recommendation:
  ask Claude to critique E5-T-FIX-004.
- Kept the above-fold HTML surface to:
  - `DO THIS NOW`
  - one recommended action
  - one-sentence why
  - one primary copy button/block
  - compact status chips for Sami needed, next actor, and snapshot expiry
  - a visually secondary "Not sure? Open Alternatives below." affordance
- Moved alternatives, snapshot provenance, external advisor visibility,
  technical packet, no-touch list, and raw state into collapsed details.
- Kept GPT-5.5 Pro visible below the fold only, because GPT is not the next
  action for this snapshot.
- Preserved source-of-truth rules:
  - `COLLAB.md` is authoritative.
  - The dashboard is view-only.
  - The dashboard does not grant approval.
  - No approval is inferred from green status, silence, consensus, or
    "looks good".
  - The dashboard is a one-action snapshot and expires after the primary
    action completes.

## Verification
- Pre-edit `git status --short --untracked-files=all`: clean.
- Post-edit changed files:
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/DASHBOARD.html`
  - `.agent-handoff/DASHBOARD.md`
  - `.agent-handoff/turns/E5-T-FIX-004-codex-dashboard-single-action-simplification.md`
- `git diff --check`: passed.
- Self-contained HTML check: passed. `rg` found no external URLs/resources,
  storage APIs, network APIs, or server dependency patterns.
- Copy-button check: passed. The only copy API use is
  `navigator.clipboard.writeText(target.innerText)`, which copies visible
  text from the target block.
- `sh .agent-handoff/tools/alert-state.sh`: ran once successfully.
- Post-script working tree comparison: unchanged file set before and after
  script execution:
  - `M .agent-handoff/COLLAB.md`
  - `M .agent-handoff/DASHBOARD.html`
  - `M .agent-handoff/DASHBOARD.md`
  - `?? .agent-handoff/turns/E5-T-FIX-004-codex-dashboard-single-action-simplification.md`
- No-touch confirmation: no diff in `PROTOCOL.md`, `alert-state.sh`, kit/v1,
  root docs, docs/, `.mcp.json`, `.claude`, generated/local, or trust/event
  paths; no live reflections/improvements/advisor-notes paths; no Notion,
  NanoClaw, or `.mcp.json` files; no new CommonGround files beyond the
  pre-existing E5-N turn notes; pilot repo clean.

## Handoff
Claude Code should critique whether E5-T-FIX-004 makes the dashboard useful
to Sami in under 10 seconds by showing one recommendation and moving
supporting truth/provenance into collapsed details. Codex is hard-stopped
after this turn.
