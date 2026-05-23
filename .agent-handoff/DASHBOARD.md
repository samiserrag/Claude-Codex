# Polaris ✦ Claude-Codex Control Tower

> _Your fixed point in a multi-agent workflow._

Human-facing operational view for the current handoff. This file is a view,
not the source of truth.

## Source Of Truth

- `.agent-handoff/COLLAB.md` is authoritative.
- On conflict, `COLLAB.md` wins.
- `DASHBOARD.md` and `DASHBOARD.html` do not grant approval.
- Do not infer approval from green status, silence, consensus, lack of
  objection, or "looks good" language.
- Sami alone approves; agents may classify routine, but cannot approve.

## DO THIS NOW

**Push E6-C — lock the operating model into the repo.**

Claude critiqued the doc-lock: **all 15 focus areas PASS with zero blockers;
3 optional nits**. Sami's decision: push the 6-file combined set, or
pause-and-observe.

### Where you are in the loop

```text
✓ GPT framed → ✓ Codex locked docs → ✓ Claude critiqued → [SAMI DECIDES PUSH] → Push if good
                                                              ↑ YOU ARE HERE
```

### Why push

E6-C creates `.agent-handoff/OPERATING-MODEL.md` — a 435-line durable
reference for the converged E5/E6 architecture. Surviving chat compaction was
the explicit goal. Critique passed clean (15/15, zero blockers). 3 nits are
observational only (web-source URLs not in breadcrumbs; mode estimate not yet
in PROTOCOL.md; Polaris branding not its own pivot row — all foldable into
future doc-locks).

### Three actions

#### 1. RECOMMENDED — Copy push approval, paste to **Claude Code**

Claude verifies pre-flight (git status + diff --check + no-touch), stages
exactly the 6 listed files (3 modifications + 3 new turn notes & docs),
commits with the exact message, and pushes. Hard stop after push.

See the full push approval under "What gets pasted to Claude" below.

#### 2. OPTIONAL — Copy question, paste to **GPT-5.5 Pro**

Ask GPT for optional coordinator review before push, or for the next NEEDS_GPT
turn recommendation (E6-D outcome-circle vs E6-DASH-002 Polaris mode panel).
Per the new Coordinator Trigger Classification, GPT is NOT required for this
push (push verification is ROUTINE).

See the full question under "What gets pasted to GPT" below.

#### 3. OR — Pause and observe

Do nothing. The local working tree stays as-is until you push or revert.

### Status

- Snapshot expires when: Sami authorizes push, routes pause-and-observe, or
  any actor changes
- Coordinator Trigger: **ROUTINE** (auditor freshness refresh of already-scoped
  E6-C critique; no architecture/safety/governance defect detected)
- Project Mode: **Coordinator dominant (~75%)**, Sami-decision-pending (~20%)

---

## What gets pasted to Claude (the push approval)

**Paste this entire block to Claude Code.** Claude will run pre-flight (git
status + diff --check + no-touch verify), stage exactly the 6 listed files,
commit with the exact message, push, and report. Hard stop after push.

```text
Approved:

Stage, commit, and push only these E6-C operating-model docs-lock + Claude critique files:
- .agent-handoff/COLLAB.md
- .agent-handoff/OPERATING-MODEL.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E6-C-codex-operating-model-docs-lock.md
- .agent-handoff/turns/E6-C-claude-critique-operating-model-docs-lock.md

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

Confirm:
- exactly 6 files staged (3 modifications: COLLAB.md, DASHBOARD.md, DASHBOARD.html; 3 new: OPERATING-MODEL.md, E6-C Codex turn note, E6-C Claude critique turn note)
- no PROTOCOL.md, alert-state.sh, kit/v1, advisor-notes/reflections/improvements, .mcp.json, Notion/NanoClaw/CommonGround, plugin/config, automation, cron/timer/webhook/launch-agent, MCP/bridge, API setup, or global config staged
- no pilot repo or live Open Mic Colorado touch

Commit message:
E6-C: lock operating model into OPERATING-MODEL.md

After push, hard stop.
```

---

## What gets pasted to GPT (optional coordinator review question)

**Optional.** Paste this to GPT-5.5 Pro if you want post-critique coordinator
review before push, or to ask GPT to recommend the next NEEDS_GPT turn after
push.

```text
[Lane 1: Claude-Codex Harness | GPT-5.5 Pro / OpenAI | Thread: E6-C post-critique coordinator review | Role: coordinator/outcome architect]

Codex created E6-C, a design-only operating-model doc-lock in Claude-Codex.
Claude critiqued it as auditor and found:

- All 15 focus areas PASS with zero blockers.
- 3 optional/observational nits:
  1. §18 source breadcrumbs do not include the three external research URLs
     (Anthropic outcomes, Zenith, CGK).
  2. The Project Mode estimate (~95% Coordinator) is not a documented PROTOCOL
     convention yet.
  3. §3 pivot timeline doesn't list Polaris naming/branding (E6-DASH-001) as
     its own discrete row.
- Coordinator Trigger reclassified to ROUTINE per the new classification rule
  (auditor freshness refresh of already-scoped E6-C; no architecture/safety/
  governance defect).
- Anti-sycophancy compliance: enumerated 10 failure modes checked-and-found-
  absent plus the 3 nits above.

Locked model the doc captures:
GPT coordinates. Codex builds. Claude audits. Sami approves. Repo records the trail. Polaris shows the next action.

Please answer:
- Push as-is, fold the 3 nits into a follow-up doc-lock, or reframe?
- Any missing coordinator-rule or anti-sycophancy issue you see?
- After push, do you recommend Polaris Project Mode panel (E6-DASH-002) or
  E6-D outcome-circle design as the next turn?
- Any other coordinator concern before push?

Do not authorize approval. Sami remains sole approval authority.
```

---

## Pause and observe — what that means

```text
Do nothing. The local working tree stays exactly as it is after E6-C +
Claude's critique:
- .agent-handoff/OPERATING-MODEL.md (new)
- .agent-handoff/COLLAB.md (modified)
- .agent-handoff/DASHBOARD.md (modified)
- .agent-handoff/DASHBOARD.html (modified)
- .agent-handoff/turns/E6-C-codex-operating-model-docs-lock.md (new)
- .agent-handoff/turns/E6-C-claude-critique-operating-model-docs-lock.md (new)

When you want to resume, paste the push approval to Claude Code, ask GPT for
optional post-critique coordinator review, or manually route a different
action.

To revert local working tree to last pushed baseline (0fe671c), discarding
E6-C entirely:
  git restore .agent-handoff/COLLAB.md .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html
  rm .agent-handoff/OPERATING-MODEL.md
  rm .agent-handoff/turns/E6-C-codex-operating-model-docs-lock.md
  rm .agent-handoff/turns/E6-C-claude-critique-operating-model-docs-lock.md
```

---

## Snapshot status & provenance

| Field | Current value |
| --- | --- |
| Prepared for | Sami to decide push vs pause-and-observe for E6-C |
| As of | HEAD `0fe671c` plus local E6-C docs-lock + Claude critique working tree changes |
| Expires after | Sami authorizes push, routes pause-and-observe, or any actor changes |
| After this action | Do not reuse this dashboard snapshot until a repo-writing agent refreshes it |
| Prepared by | Codex (doc-lock) + Claude (critique + snapshot refresh) |
| Last repo action | `0fe671c E6-DASH-001: add Polaris human control tower redesign` |
| Snapshot basis | HEAD `0fe671c` plus local E6-C OPERATING-MODEL, COLLAB, DASHBOARD, Codex turn note, and Claude critique turn note |
| Source turn notes | `E6-C-codex-operating-model-docs-lock.md` + `E6-C-claude-critique-operating-model-docs-lock.md` |
| Coordinator Trigger | ROUTINE — auditor freshness refresh of already-scoped E6-C; no architecture/safety/governance defect detected |
| Project Mode | Coordinator dominant (~75%), Sami-decision-pending (~20%), Execution ~5% |

---

## Who's who right now

| Role | Agent | What they're doing |
| --- | --- | --- |
| Coordinator | GPT-5.5 Pro / OpenAI / advisor-class | Supplied the framing Sami accepted; available for optional post-critique review |
| Builder / doc-lock author | Codex / OpenAI / architect-class | Created OPERATING-MODEL.md and refreshed this snapshot |
| Auditor (completed) | Claude Code / Anthropic / architect-class | Critiqued E6-C: 15/15 pass, 3 nits, ROUTINE; refreshed this snapshot post-critique |
| Approver | Sami | Vision / priority / risk / taste. Decides whether to push, fold nits later, or pause. |
| Source of truth | Repo (`COLLAB.md` authoritative) | This dashboard is a view |
| Diversity | Multi-org (Anthropic + OpenAI) | 3-way coordination active; converged role model preserved |

---

## Technical packet

- Latest pushed baseline: `0fe671c E6-DASH-001: add Polaris human control tower redesign`.
- E6-C is design/docs-only and creates the first durable
  `.agent-handoff/OPERATING-MODEL.md` doc-lock (435 lines, 18 sections).
- Claude critique: 15/15 focus areas PASS, zero blockers, 3 observational nits
  (foldable into a future doc-lock).
- Working tree shows exactly 6 expected files (3 modifications + 3 new turn
  notes / operating-model doc).
- HTML self-contained: 1 inline `<style>`, 1 inline `<script>`, 0 external
  `<link>` / network APIs / storage APIs; single legitimate
  `navigator.clipboard.writeText(target.innerText)`.
- Dashboard snapshot discipline preserved (text content only; no CSS, buttons,
  collapsibles, mode panels, or structural additions).
- Project Mode and Outcome Circle are documented for future codification; no
  `PROTOCOL.md` edit occurred.
- Outcome-loop mechanics are explicitly deferred to E6-D or later.
- Subagents were not used by Codex (E6-C) or Claude (critique).

---

## No-touch list

- No `.agent-handoff/PROTOCOL.md` edit.
- No `.agent-handoff/tools/alert-state.sh` edit.
- No `.agent-handoff/reflections/`, `.agent-handoff/improvements/`, or
  `.agent-handoff/advisor-notes/` path creation.
- No `kit/v1/` edit.
- No root README/AGENTS/CLAUDE or `docs/` edit.
- No product/runtime, live Open Mic Colorado, pilot repo, CommonGround,
  NanoClaw, Notion, `.mcp.json`, plugin/config, automation, model/API setup,
  MCP/bridge, cron/timer/webhook/launch agent, or global config change.
