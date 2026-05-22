# Claude-Codex Control Tower

Human-facing operational view for the current handoff. This file is a view,
not the source of truth.

## Source Of Truth

- `.agent-handoff/COLLAB.md` is authoritative.
- On conflict, `COLLAB.md` wins.
- `DASHBOARD.md` and `DASHBOARD.html` do not grant approval.
- Do not infer approval from green status, silence, consensus, lack of
  objection, or "looks good" language.

## DO THIS NOW

Two pastes available depending on your choice:

**Paste 1 (if accepting E5-U critique and proceeding to E5-V)**: paste this
to Claude first to push the E5-U critique files, then paste the E5-V
authorization to Codex.

**Paste 2 (the E5-V implementation authorization for Codex)**: copy verbatim
from the E5-U turn note Section 9 (`.agent-handoff/turns/E5-U-codex-dashboard-refresh-notification-design.md`
lines 230-303). It's 70+ lines and authorizes Codex to implement
`.agent-handoff/tools/attention-notify.sh` as a manually run read-only
notifier.

Sami needed: `yes — per-push authorization (E5-U critique) + E5-V authorization`

Next actor: `Sami (decide); then Claude (push); then Codex (E5-V)`

Why: E5-U critique passed with zero blockers. The osascript notifier
design is the smallest safe path to attention-without-Terminal-staring.
The notifier won't recompute the dashboard (that stays a repo-writing-agent
responsibility) but it WILL fire macOS notifications when attention is
needed.

```text
Approved:

Stage, commit, and push only these E5-U critique files:
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E5-U-claude-critique-dashboard-refresh-notification-design.md

Do not stage or commit:
- .agent-handoff/PROTOCOL.md
- .agent-handoff/tools/alert-state.sh
- .agent-handoff/reflections/
- .agent-handoff/improvements/
- .agent-handoff/advisor-notes/
- kit/v1/
- README.md, AGENTS.md, CLAUDE.md, docs/
- product/runtime files
- live Open Mic Colorado files
- open-mic-colorado-agent-pilot files
- CommonGround / NanoClaw / Notion files
- plugin/config files / .mcp.json
- launch agents / cron / timer / webhook / MCP / plugin / bridge files
- notification scripts
- generated/local/secret files / trust/event/private-key files
- unrelated files

Before committing, show:
git status --short --untracked-files=all
git diff --check

Commit message:
E5-U Claude critique: accept dashboard refresh and notification design

After push, hard stop.
```

After the critique push lands, the E5-V implementation authorization for
Codex is pre-drafted verbatim in `.agent-handoff/turns/E5-U-codex-dashboard-refresh-notification-design.md`
Section 9 (lines 230-303). Optional implementation refinement: consider
suggesting Codex WRAP `alert-state.sh` (pipe its output, grep for attention
events, fire osascript) rather than duplicate its logic.

## Details

| Field | Current value |
| --- | --- |
| Current status | E5-T-FIX-001 local implementation complete; pending Claude critique |
| Builder | Codex (`OpenAI`, `architect-class`) |
| Auditor | Claude Code (`Anthropic`, `architect-class`) |
| Diversity | strong |
| External advisor needed | no |
| Subagent delegations this turn | 0 - none |

## Technical Packet

- Latest pushed baseline before this fix:
  `1922562 E5-T: add human control tower dashboard`.
- E5-T-FIX-001 simplifies the human-facing dashboard without changing protocol,
  kit templates, or `alert-state.sh`.
- Changed files:
  - `.agent-handoff/DASHBOARD.html`
  - `.agent-handoff/DASHBOARD.md`
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/turns/E5-T-FIX-001-codex-human-control-tower-simplification.md`
- Required script check: `sh .agent-handoff/tools/alert-state.sh` ran and left
  the working tree unchanged.

## No-Touch List

No `PROTOCOL.md`, `alert-state.sh`, kit templates, root docs,
product/runtime files, pilot repo, live Open Mic Colorado,
reflections/improvements/advisor-notes paths, `.mcp.json`, Notion, NanoClaw,
CommonGround, plugin/config files, automation, model calls, MCP/plugins,
bridges, cron, timers, webhooks, launch agents, global config, staging, commit,
push, branch, or PR.

## Raw State

Paste to Codex:

```text
No Codex action is needed. Codex is hard-stopped after E5-T-FIX-001 until Sami routes a new turn or push authorization.
```

Ask GPT-5.5 Pro / external advisor:

```text
Not needed for E5-T-FIX-001. Optional only if Sami wants external strategy review after Claude critique.
```

Exact approval text:

```text
No approval text is active. E5-T-FIX-001 remains local-only until Sami separately approves exact files for staging, commit, and push.
```
