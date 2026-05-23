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

Recommended: push E5-T-FIX-004 (combined with Claude critique).

Why: critique passed 10/11 cleanly with 1 PARTIAL (chip styling near-blocker,
foldable into a tight FIX-005 if it bothers in real use). The 5-file combined
push lands the single-recommendation structural simplification in one commit.

Sami needed: `yes - paste combined push authorization, or route pause-and-observe`

Next actor: `Sami push decision`

Snapshot expiry: `expires after Sami authorizes push, routes pause-and-observe, or next actor changes`

Not sure? Open Alternatives below.

Primary paste (combined push authorization):

```text
Approved:

Stage, commit, and push only these E5-T-FIX-004 implementation + Claude critique files:
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E5-T-FIX-004-codex-dashboard-single-action-simplification.md
- .agent-handoff/turns/E5-T-FIX-004-claude-critique-dashboard-single-action-simplification.md

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
E5-T-FIX-004: single-action dashboard simplification + Claude critique

After push, hard stop.
```

<details>
<summary>Alternatives</summary>

- Pause-and-observe: do nothing; let the simplified single-action architecture
  sit in the local working tree first to feel whether chip styling or total
  dashboard length actually bother in real use. No approval text required.
- Ask GPT-5.5 Pro for external strategy only if Sami wants a non-operational
  second opinion on push timing.

</details>

<details>
<summary>Snapshot provenance</summary>

- Prepared for: Sami push decision for E5-T-FIX-004 + Claude critique.
- As of: HEAD `3f8d583` plus local E5-T-FIX-004 implementation and Claude
  critique working tree changes.
- Expires after: Sami authorizes a push, Sami routes pause-and-observe, or
  the next actor changes.
- After this action: do not reuse this dashboard snapshot until a repo-writing
  agent refreshes `DASHBOARD.md` and `DASHBOARD.html`.
- Prepared by: Codex (E5-T-FIX-004 implementation) + Claude (critique
  freshness refresh).
- Last repo action:
  `3f8d583 E5-T-FIX-003: add dashboard provenance and advisor visibility`.
- Snapshot basis: HEAD `3f8d583` plus local E5-T-FIX-004 dashboard/handoff
  edits + Claude critique freshness refresh.
- Source turn notes:
  `.agent-handoff/turns/E5-T-FIX-004-codex-dashboard-single-action-simplification.md`
  and
  `.agent-handoff/turns/E5-T-FIX-004-claude-critique-dashboard-single-action-simplification.md`.

</details>

<details>
<summary>External advisor visibility</summary>

- External advisor: GPT-5.5 Pro / OpenAI / advisor-class.
- Current need: optional; not required for this E5-T-FIX-004 critique.
- Last advisor input: N/A - no repo-visible advisor note or scribed record is
  incorporated in this snapshot.
- Authority: external advisor output is not operational unless Sami approves
  it or a repo-visible record captures it.

</details>

<details>
<summary>Details</summary>

| Field | Current value |
| --- | --- |
| Current status | E5-T-FIX-004 + Claude critique both local-only; awaiting Sami push decision |
| Builder | Codex / OpenAI / architect-class |
| Auditor | Claude Code / Anthropic / architect-class |
| External advisor | GPT-5.5 Pro / OpenAI / advisor-class when invoked; not operational unless repo-visible and approved |
| Sami | Approval / priority / risk |
| Diversity | strong |
| Subagent delegations this turn | 0 - none |
| Advisor input | No repo-visible advisor note or scribed advisor record incorporated in this snapshot |
| Critique result | 10 of 11 focus areas PASS clean; 1 PARTIAL (chip styling); 3 optional nits |
| Alternative | Pause-and-observe: defer the push so chip weight + total dashboard length can be felt in real use first |

</details>

<details>
<summary>Technical packet</summary>

- Latest pushed baseline before this fix:
  `3f8d583 E5-T-FIX-003: add dashboard provenance and advisor visibility`.
- E5-T-FIX-004 moves provenance, advisor visibility, alternatives, technical
  packet, no-touch list, and raw state below the fold into collapsed details.
- Changed files (combined for recommended push - 5 files):
  - `.agent-handoff/DASHBOARD.html`
  - `.agent-handoff/DASHBOARD.md`
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/turns/E5-T-FIX-004-codex-dashboard-single-action-simplification.md`
  - `.agent-handoff/turns/E5-T-FIX-004-claude-critique-dashboard-single-action-simplification.md`
- Required script check for this turn:
  `sh .agent-handoff/tools/alert-state.sh` ran and left the working tree
  byte-identical (pre/post `git status --short --untracked-files=all` diff
  empty; script output 109 lines).
- Independent self-contained HTML check: grep for external API patterns
  returns exactly one match (the legitimate
  `navigator.clipboard.writeText(target.innerText)` for copy buttons);
  1 inline `<script>`, 1 inline `<style>`, 0 `<link>` tags.

</details>

<details>
<summary>No-touch list</summary>

No `PROTOCOL.md`, `alert-state.sh`, kit templates, root docs,
product/runtime files, pilot repo, live Open Mic Colorado,
reflections/improvements/advisor-notes paths, `.mcp.json`, Notion, NanoClaw,
CommonGround, plugin/config files, automation, model calls, MCP/plugins,
bridges, cron, timers, webhooks, launch agents, global config, staging, commit,
push, branch, or PR.

</details>

<details>
<summary>Raw state</summary>

Paste to Codex:

```text
No Codex action is needed. Codex remains hard-stopped after E5-T-FIX-004 until Sami routes a new turn or push authorization.
```

Ask GPT-5.5 Pro / external advisor:

```text
GPT-5.5 Pro / OpenAI / advisor-class is visible below the fold as an external advisor. Critique completed with 1 PARTIAL (chip styling) but no blockers. Optional only if Sami wants external strategy review before deciding push vs pause-and-observe. No repo-visible advisor note or scribed advisor record is incorporated in this snapshot.
```

Exact approval text:

```text
The combined-push authorization is the primary paste block in the DO THIS NOW section above. Pause-and-observe requires no approval text — it simply means do nothing; the local working tree remains unchanged. No approval text is active until Sami pastes the primary block or routes a new action.
```

</details>
