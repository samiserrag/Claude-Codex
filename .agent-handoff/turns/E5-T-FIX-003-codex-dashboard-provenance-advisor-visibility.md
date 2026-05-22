# E5-T-FIX-003 - Codex Dashboard Provenance Advisor Visibility

## Agent
Codex

## Phase
implementation

## Active Role Declaration
- Active role: builder for the tiny dashboard representation/provenance fix.
- Authority limit: edit only the four approved E5-T-FIX-003 files:
  `.agent-handoff/DASHBOARD.html`, `.agent-handoff/DASHBOARD.md`,
  `.agent-handoff/COLLAB.md`, and this append-only turn note.
- Explicit non-authority: no protocol edit, kit template edit,
  `alert-state.sh` edit, automation, model call, NanoClaw, CommonGround,
  Notion, MCP/plugin/bridge, advisor-notes/reflections/improvements path
  creation, cron, timer, webhook, launch agent, global config, staging,
  commit, push, branch, PR, pilot repo touch, live Open Mic Colorado touch,
  or product/runtime touch.

## Files Touched
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-T-FIX-003-codex-dashboard-provenance-advisor-visibility.md`

## Implementation Summary
- Preserved the E5-T-FIX-002 single-primary-action snapshot design.
- Refreshed the primary action to Claude critique of E5-T-FIX-003.
- Added snapshot provenance near the Snapshot status card:
  - Prepared by: Codex / OpenAI / architect-class.
  - Last repo action:
    `d6cdc7b E5-T-FIX-002: dashboard snapshot lifecycle + Claude critique`.
  - Snapshot basis: HEAD `d6cdc7b` plus local E5-T-FIX-003 dashboard/handoff
    edits.
  - Source turn note:
    `.agent-handoff/turns/E5-T-FIX-003-codex-dashboard-provenance-advisor-visibility.md`.
- Added external advisor visibility without making GPT operational:
  - External advisor: GPT-5.5 Pro / OpenAI / advisor-class.
  - Current need: optional; not required for this E5-T-FIX-003 critique.
  - Last advisor input: N/A, because no repo-visible advisor note or scribed
    advisor record is incorporated in this snapshot.
  - Authority: external advisor output is not operational unless Sami approves
    it or a repo-visible record captures it.
- Updated Details to show Builder, Auditor, External advisor, and Sami roles.
- Preserved source-of-truth rules:
  - `COLLAB.md` is authoritative.
  - The dashboard is view-only.
  - The dashboard does not grant approval.
  - No approval is inferred from green status, silence, consensus, or
    "looks good".

## Verification
- Pre-edit `git status --short --untracked-files=all`: clean.
- Post-edit changed files:
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/DASHBOARD.html`
  - `.agent-handoff/DASHBOARD.md`
  - `.agent-handoff/turns/E5-T-FIX-003-codex-dashboard-provenance-advisor-visibility.md`
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
  - `?? .agent-handoff/turns/E5-T-FIX-003-codex-dashboard-provenance-advisor-visibility.md`
- No-touch confirmation: no diff in `PROTOCOL.md`, `alert-state.sh`, kit/v1,
  root docs, docs/, `.mcp.json`, `.claude`, generated/local, or trust/event
  paths; no live reflections/improvements/advisor-notes paths; no Notion,
  NanoClaw, or `.mcp.json` files; no new CommonGround files beyond the
  pre-existing E5-N turn notes; pilot repo clean.

## Handoff
Claude Code should critique whether E5-T-FIX-003 fixes the representation gap
by making provenance and external advisor status visible while preserving the
one-action dashboard and keeping GPT out of operational repo ownership. Codex
is hard-stopped after this turn.
