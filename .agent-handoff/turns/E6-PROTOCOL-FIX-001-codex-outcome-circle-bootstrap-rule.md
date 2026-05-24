# E6-PROTOCOL-FIX-001 - Codex Outcome Circle Bootstrap Rule

## Coordinator Trigger
- State: ROUTINE
- Reason: implementation of a GPT/Sami-scoped bootstrap rule already identified by E6-DASH-002, Claude audit, and GPT coordination. No new architecture introduced.

## Project Mode (estimated)
- Dominant mode: Coordinator (~80%, agent heuristic estimate)
- Sami-decision-pending: ~15%
- Execution: ~5%
- Unknown: 0%
- Reason: no Outcome Circle is active yet. This fix prepares the protocol for the first circle, then hands off for Claude critique.

## Agent
Codex / OpenAI — builder/implementer.

## Phase
implementation

## Purpose

Add the early Outcome Circle bootstrap rule before the first circle runs:

- Until at least two Outcome Circles complete successfully and are reviewed in repo-visible turn notes, Outcome Circle entry and exit are always `NEEDS_GPT`.
- During bootstrap, an Outcome Packet may not self-classify entry or exit as `ROUTINE`.
- Mechanical builder/auditor work inside a valid approved Outcome Circle may still be `ROUTINE` when it remains within the packet.
- The rule can be revised only by explicit later protocol change after the first two circles are observed.

## Files Changed

- `.agent-handoff/PROTOCOL.md`
  - Added the bootstrap paragraph inside the existing `#### Outcome Circles` section.
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
  - Mirrored the same bootstrap paragraph in the same section.
- `.agent-handoff/COLLAB.md`
  - Refreshed stale post-PR5 state and handed off to Claude critique.
- `.agent-handoff/DASHBOARD.md`
  - Refreshed the static Polaris snapshot to point at Claude critique.
- `.agent-handoff/DASHBOARD.html`
  - Refreshed the static browser Polaris snapshot to point at Claude critique.
- `.agent-handoff/turns/E6-PROTOCOL-FIX-001-codex-outcome-circle-bootstrap-rule.md`
  - This implementation note.

## Bootstrap Wording

Added to both live and kit protocol:

```markdown
Bootstrap rule for early circles: until at least two Outcome Circles have
completed successfully and been reviewed in repo-visible turn notes, Outcome
Circle entry and Outcome Circle exit are always `NEEDS_GPT`. During this
bootstrap period, an Outcome Packet may not self-classify entry or exit as
`ROUTINE`. Mechanical builder/auditor work inside a valid approved Outcome
Circle may still be `ROUTINE` when it remains within the packet. Entry includes
drafting, finalizing, and approving the packet. Exit includes `satisfied`,
`blocker`, `failed`, `interrupted`, `max_iterations_reached`, `needs_gpt`,
`needs_sami`, or final synthesis about whether the outcome was met. This
bootstrap rule may be revised only by explicit later protocol change after the
first two circles are observed.
```

## Decisions

1. **Entry and exit are explicitly bootstrap-gated.** This prevents early circles from treating their own entry or exit as routine before the pattern has evidence.
2. **Inside-circle mechanical work remains eligible for ROUTINE.** The rule intentionally does not make every builder/auditor iteration NEEDS_GPT once a valid packet exists.
3. **Exit includes all final result states and final synthesis.** This blocks a soft path where `satisfied` becomes a routine exit without coordinator review during the first two circles.
4. **The rule is protocol-level, not dashboard-only.** Polaris is refreshed only as the current view; `PROTOCOL.md` carries the enforceable rule.

## Scope Boundaries

- No Outcome Circle execution.
- No Outcome Packet template.
- No loop runner.
- No automation.
- No notifier/wakeup.
- No advisor-notes/reflections/improvements path creation.
- No model calls.
- No OpenAI API setup.
- No NanoClaw/CommonGround/MCP/plugin/bridge setup.
- No Notion.
- No cron/timer/webhook/launch agent/global config.
- No staging, commit, push, branch, or PR.
- No `OPERATING-MODEL.md` edit.
- No `alert-state.sh` edit.
- No kit edits outside `kit/v1/.agent-handoff/PROTOCOL.md.template`.
- No pilot repo, live Open Mic Colorado, or product/runtime touch.

## Polaris Refresh

Polaris was refreshed from stale post-PR5 verification/merge state to this handoff:

- Human Role Cue: `COURIER ONLY`
- Next paste target: Claude Code
- Primary action: copy E6-PROTOCOL-FIX-001 critique prompt to Claude
- Optional action: ask GPT only if a protocol concern appears
- Snapshot basis: `fbdb0b3` plus local E6-PROTOCOL-FIX-001 changes

DASHBOARD.html remains a static self-contained view. It is not a source of truth and does not grant approval.

## Verification Performed

Pre-edit:
- `git status --short --branch --untracked-files=all` showed clean `main...origin/main`.
- Latest commit: `fbdb0b3 Merge pull request #5 from samiserrag/e6-dash-002-human-role-cue`.

Post-edit verification confirmed:
- `git status --short --branch --untracked-files=all` shows only the six
  approved E6-PROTOCOL-FIX-001 files changed:
  - `M .agent-handoff/COLLAB.md`
  - `M .agent-handoff/DASHBOARD.html`
  - `M .agent-handoff/DASHBOARD.md`
  - `M .agent-handoff/PROTOCOL.md`
  - `M kit/v1/.agent-handoff/PROTOCOL.md.template`
  - `?? .agent-handoff/turns/E6-PROTOCOL-FIX-001-codex-outcome-circle-bootstrap-rule.md`
- `git diff --check` clean.
- Live and kit bootstrap paragraphs are byte-equivalent; focused `diff -u`
  returned no output.
- Each protocol file contains exactly one `Bootstrap rule for early circles:`
  marker.
- No no-touch diff output for `OPERATING-MODEL.md`, `alert-state.sh`,
  advisor-notes/reflections/improvements, kit files outside the protocol
  template, root docs, `docs/`, `.mcp.json`, `.claude`, generated files, or
  trust/event surfaces.
- `find .agent-handoff -maxdepth 1` found no advisor-notes, reflections, or
  improvements directories.
- DASHBOARD.html remains self-contained. Static search found only inline
  `<style>`, inline `<script>`, `data-copy` buttons, and the single
  `navigator.clipboard.writeText(target.innerText)` copy call; no external
  CSS/JS, HTTP(S) URLs, storage APIs, network APIs, or server requirement.
- `sh .agent-handoff/tools/alert-state.sh` ran successfully and left the
  working tree unchanged except for the already-present approved local edits.
- Pilot repo remained clean. Live Open Mic Colorado was not touched; a
  read-only status check showed pre-existing unrelated worktree changes there.

## Handoff

Next actor: Claude Code.

Claude should critique this local implementation before Sami decides whether to accept, request a fix, pause, or authorize a later exact-scope push/PR.

Hard stop. No staging, commit, push, branch, PR, first Outcome Circle, packet template, loop runner, notifier, automation, model/API setup, transport, advisor-notes path, pilot repo, live Open Mic Colorado, or product/runtime work was performed.
