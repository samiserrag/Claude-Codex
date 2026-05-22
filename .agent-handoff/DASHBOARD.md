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

Decide E5-T-FIX-002: combined push (option a) or pause-and-observe (option b).

Sami needed: `yes - choose combined push or pause-and-observe`

Next actor: `Sami push decision; then Claude (if push) for hard stop`

Why: Claude critique passed all 13 focus areas with zero blockers. The 5-file
combined push lands the lifecycle clarity in one commit. Pause-and-observe
leaves it local-only for 3-5 real handoff cycles first. Either is safe.
Critique-only push is impractical because Codex's FIX-002 modifications and
Claude's critique freshness refresh are entangled in the same three modified
files.

## Snapshot Status

- Prepared for: Sami push decision for E5-T-FIX-002 + Claude critique.
- As of: HEAD `b5bd337` plus local E5-T-FIX-002 implementation and Claude
  critique working tree changes.
- Expires after: Sami authorizes a push, Sami routes pause-and-observe, or
  the next actor changes.
- After this action: do not reuse this dashboard snapshot until a repo-writing
  agent refreshes `DASHBOARD.md` and `DASHBOARD.html`.

Primary paste (option a - combined push authorization):

```text
Approved:

Stage, commit, and push only these E5-T-FIX-002 implementation + Claude critique files:
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E5-T-FIX-002-codex-dashboard-snapshot-lifecycle.md
- .agent-handoff/turns/E5-T-FIX-002-claude-critique-dashboard-snapshot-lifecycle.md

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
E5-T-FIX-002: dashboard snapshot lifecycle + Claude critique

After push, hard stop.
```

Option b - pause-and-observe: requires no approval text. Means do nothing;
the local working tree remains unchanged so the lifecycle card can be felt
in real use for 3-5 handoff cycles before any further dashboard work.

## Details

| Field | Current value |
| --- | --- |
| Current status | E5-T-FIX-002 + Claude critique both local-only; awaiting Sami push decision |
| Builder | Codex (`OpenAI`, `architect-class`) |
| Auditor | Claude Code (`Anthropic`, `architect-class`) |
| Diversity | strong |
| External advisor needed | no |
| Subagent delegations this turn | 0 - none |
| Critique result | All 13 focus areas PASS with zero blockers; 3 optional nits |
| Alternative | Pause-and-observe: do nothing; let the lifecycle card sit local for 3-5 real handoff cycles |

## Technical Packet

- Latest pushed baseline before this fix:
  `b5bd337 E5-U Claude critique: accept dashboard refresh notification design`.
- E5-T-FIX-002 clarifies that `DASHBOARD.html` is a static one-action snapshot,
  not a live recomputing app.
- Changed files (combined for option a - 5 files):
  - `.agent-handoff/DASHBOARD.html`
  - `.agent-handoff/DASHBOARD.md`
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/turns/E5-T-FIX-002-codex-dashboard-snapshot-lifecycle.md`
  - `.agent-handoff/turns/E5-T-FIX-002-claude-critique-dashboard-snapshot-lifecycle.md`
- Required script check for this turn:
  `sh .agent-handoff/tools/alert-state.sh` ran and left the working tree
  byte-identical (pre/post `git status --short --untracked-files=all` diff
  empty; script output 109 lines).
- Independent self-contained HTML check: grep for external API patterns
  returns exactly one match (the legitimate
  `navigator.clipboard.writeText(target.innerText)` for copy buttons).

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
No Codex action is needed. Codex remains hard-stopped after E5-T-FIX-002 until Sami routes a new turn or push authorization.
```

Ask GPT-5.5 Pro / external advisor:

```text
Not needed for E5-T-FIX-002. Critique completed with zero blockers. Optional only if Sami wants external strategy review before deciding push vs pause-and-observe.
```

Exact approval text:

```text
The combined-push authorization for option a is the primary paste block in the DO THIS NOW section above. Pause-and-observe (option b) requires no approval text — it simply means do nothing; the local working tree remains unchanged. No approval text is active until Sami pastes the primary block or routes a new action.
```
