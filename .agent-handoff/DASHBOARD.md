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

**Decide what to do with E6-D — Claude critique complete.**

All 18 focus areas PASS with zero blockers; 3 observational nits foldable
into a future E6-D2. Sami's decision: route the next NEEDS_GPT turn via
GPT (recommended), authorize push of the local E6-D + critique state, or
pause-and-observe.

### Where you are in the loop

```text
✓ GPT framed → ✓ Codex designed E6-D → ✓ Claude critiqued → [SAMI DECIDES] → Next turn
                                                                ↑ YOU ARE HERE
```

### Why this snapshot

E6-D defines the minimum safe mechanics for future Outcome Circles. The
auditor pass means the design is safe to accept; it does NOT mean E6-D is
approved (only Sami approves). The next NEEDS_GPT decision is which turn
to take next: E6-D2 protocol/schema codification (Claude's preference;
matches Codex's §18 recommendation), E6-DASH-002 Polaris Project Mode
panel, E6-D-FIX-001 (not needed per critique), or pause.

### Three actions

#### 1. RECOMMENDED — Copy question, paste to **GPT-5.5 Pro**

Ask GPT to recommend the next turn (E6-D2 codification vs E6-DASH-002 vs
other), given that E6-D passed the auditor critique cleanly.

See the full question under "What gets pasted to GPT" below.

#### 2. OPTIONAL — Copy push approval, paste to **Claude Code**

Push the local E6-D design + critique via PR (6 files: 3 modifications +
3 new turn notes including the E6-C post-merge refresh carried along).
ROUTINE; routed via feature branch + PR per E6-C empirical learning.

See the full push approval under "What gets pasted to Claude" below.

#### 3. OR — Pause and observe

Do nothing. The local E6-D + critique state stays as-is until you act.

### Status

- Snapshot expires when: Sami routes next turn, authorizes push,
  pauses-and-observes, or any actor changes
- Coordinator Trigger: **NEEDS_GPT** (next substantive turn — E6-D2
  codification vs E6-DASH-002 vs other — is architecture outside any
  active circle); this refresh itself is **ROUTINE** (auditor handoff)
- Project Mode: **Coordinator dominant (~70%)**, Sami-decision-pending (~25%), Execution (~5%)

---

## What gets pasted to Claude (the E6-D + critique push approval)

**Paste this entire block to Claude Code.** Claude will run pre-flight (git
status + diff --check + no-touch verify), stage exactly the 6 listed files,
commit with the exact message, push to a feature branch, open a PR, and
report. Hard stop after PR open.

```text
Approved:

Stage, commit, and push only these E6-D design + Claude critique files via PR (not direct to main):
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E6-C-POST-MERGE-claude-dashboard-refresh.md
- .agent-handoff/turns/E6-D-codex-outcome-circle-mechanics-design.md
- .agent-handoff/turns/E6-D-claude-critique-outcome-circle-mechanics-design.md

Do not stage or commit:
- .agent-handoff/PROTOCOL.md
- .agent-handoff/OPERATING-MODEL.md
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
- exactly 6 files staged (3 modifications: COLLAB.md, DASHBOARD.md, DASHBOARD.html; 3 new turn notes: E6-C post-merge refresh, E6-D Codex design, E6-D Claude critique)
- no PROTOCOL.md, OPERATING-MODEL.md, alert-state.sh, kit/v1, advisor-notes/reflections/improvements, .mcp.json, Notion/NanoClaw/CommonGround, plugin/config, automation, cron/timer/webhook/launch-agent, MCP/bridge, API setup, or global config staged
- no pilot repo or live Open Mic Colorado touch

Branch: e6-d-outcome-circle-mechanics
Commit message:
E6-D: Outcome Circle mechanics design + Claude critique

After PR open, hard stop.
```

---

## What gets pasted to GPT (the next-turn routing question)

**Paste this to GPT-5.5 Pro** to get a coordinator recommendation for the
next turn now that Claude has critiqued E6-D cleanly.

```text
[Lane 1: Claude-Codex Harness | GPT-5.5 Pro / OpenAI | Thread: Post-E6D next-turn routing | Role: coordinator/outcome architect]

Codex designed E6-D (Outcome Circle mechanics, design-only). Claude critiqued
it as auditor and found:

- All 18 focus areas PASS with zero blockers.
- E6-D is safe to accept as-is; no E6-D-FIX-001 needed.
- 3 observational nits (foldable into future codification):
  1. Cross-repo terminology inconsistency in §Verification — Codex called a
     read-only status check in `/colorado-songwriters-collective` a "pilot
     repo status check" but the actual pilot is
     `open-mic-colorado-agent-pilot` at `655e75bc`. Read-only, no writes.
  2. §5 and §6 extend OPERATING-MODEL.md §8 without a doc-lock: 4 extra
     non-entry cases (3 → 7) and 4 extra packet fields (10 → 14). The
     extensions are sensible but should fold into OPERATING-MODEL.md via
     E6-D2's authorization scope so the reference doc stays current.
  3. §13 lacks a default-PR-over-direct-push hint. The packet field
     "whether push to main is forbidden" exists but a PR-default (per E6-C
     empirical learning) isn't established. Foldable into E6-D2.

Anti-sycophancy compliance: 3 named nits + 10 enumerated failure modes
checked-and-found-absent. Critique COMPLETE per OPERATING-MODEL.md §12.

Claude's tentative next-turn preference: E6-D2 protocol/schema codification.

Why E6-D2 first (not E6-DASH-002):
- The design is useful only if future agents can reliably identify valid
  circle entry and required packet fields.
- Codifying into PROTOCOL.md and the kit protocol template (mirror
  discipline) makes "satisfied != approval" enforceable before any UI or
  automation encourages Execution mode.
- E6-DASH-002 (Polaris Project Mode panel) is valuable but visual; it
  doesn't reduce per-turn burden until circles are actually entered, which
  requires codification.

E6-D2 proposed scope (Claude's first-pass):
- PROTOCOL.md: add Outcome Circle entry rule (exact phrase + inline packet
  + non-entry cases) and the 14-field Outcome Packet schema.
- kit/v1/.agent-handoff/PROTOCOL.md.template: byte-identical mirror.
- OPERATING-MODEL.md §8: fold in the 4 extra non-entry cases and 4 extra
  packet fields E6-D introduced (this is a doc-lock action, requires
  explicit authorization).
- COLLAB.md + Polaris + one E6-D2 turn note.

Please answer:
- E6-D2, E6-DASH-002, E6-D-FIX-001, E6-E advisor-notes, or pause?
- If E6-D2: do you agree with the proposed scope (including the
  OPERATING-MODEL.md §8 fold)?
- Any coordinator concern with accepting E6-D as-is?
- Any third turn that should jump the queue?

Do not authorize approval. Sami remains sole approval authority.
```

---

## Pause and observe — what that means

```text
Do nothing. The local working tree stays as-is after E6-D + this critique:
- M .agent-handoff/COLLAB.md
- M .agent-handoff/DASHBOARD.md
- M .agent-handoff/DASHBOARD.html
- ?? .agent-handoff/turns/E6-C-POST-MERGE-claude-dashboard-refresh.md (pre-existing; carried since merge)
- ?? .agent-handoff/turns/E6-D-codex-outcome-circle-mechanics-design.md (Codex's E6-D design)
- ?? .agent-handoff/turns/E6-D-claude-critique-outcome-circle-mechanics-design.md (this critique)

When you want to resume, paste the GPT next-turn question (primary), paste
the push approval to Claude Code (secondary), or route a different action.

To revert the local working tree back to the merge commit (171f568),
discarding both E6-D and this critique entirely:
  git restore .agent-handoff/COLLAB.md .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html
  rm .agent-handoff/turns/E6-C-POST-MERGE-claude-dashboard-refresh.md
  rm .agent-handoff/turns/E6-D-codex-outcome-circle-mechanics-design.md
  rm .agent-handoff/turns/E6-D-claude-critique-outcome-circle-mechanics-design.md
```

---

## Snapshot status & provenance

| Field | Current value |
| --- | --- |
| Prepared for | Sami to route next turn (GPT synthesis recommended), authorize push, or pause |
| As of | HEAD `171f568` plus local E6-C post-merge refresh + E6-D design + this critique |
| Expires after | Sami routes next turn, authorizes push, pauses-and-observes, or any actor changes |
| After this action | Do not reuse this dashboard snapshot until a repo-writing agent refreshes it |
| Prepared by | Codex (E6-D design) + Claude (E6-D critique + this snapshot refresh) |
| Last repo action | `171f568 Merge pull request #2 from samiserrag/e6-c-operating-model-lock` |
| Snapshot basis | HEAD `171f568` plus local COLLAB / DASHBOARD.md / DASHBOARD.html refresh + 3 new turn notes (E6-C post-merge refresh, E6-D Codex design, E6-D Claude critique) |
| Source turn notes | `E6-D-claude-critique-outcome-circle-mechanics-design.md` (this critique); also `E6-D-codex-outcome-circle-mechanics-design.md` and `E6-C-POST-MERGE-claude-dashboard-refresh.md` |
| Coordinator Trigger | NEEDS_GPT for next substantive turn (E6-D2 vs E6-DASH-002 vs other); ROUTINE for this auditor handoff refresh |
| Project Mode | Coordinator dominant (~70%), Sami-decision-pending (~25%), Execution (~5%), Unknown 0% |

---

## Who's who right now

| Role | Agent | What they're doing |
| --- | --- | --- |
| Coordinator (pending) | GPT-5.5 Pro / OpenAI / advisor-class | Awaiting next-turn routing question (E6-D2 codification vs E6-DASH-002 vs other) |
| Builder / designer | Codex / OpenAI / architect-class | Idle — last action: E6-D Outcome Circle mechanics design |
| Auditor (completed) | Claude Code / Anthropic / architect-class | Critiqued E6-D: 18/18 PASS, 0 blockers, 3 nits; refreshed this snapshot post-critique |
| Approver | Sami | Vision / priority / risk / taste. Routes next turn or pauses |
| Source of truth | Repo (`COLLAB.md` authoritative) | This dashboard is a view |
| Diversity | Multi-org (Anthropic + OpenAI) | 3-way coordination preserved through E6-D |

---

## Technical packet

- Latest pushed baseline: `171f568 Merge pull request #2 from samiserrag/e6-c-operating-model-lock` (E6-C merge commit).
- E6-D is design-only: a 489-line turn note documenting Outcome Circle
  mechanics across 19 sections (entry rule, packet schema, rubric design,
  loop mechanics, 9 result states, 14 stop conditions, GPT/Sami call-back
  conditions, commit/push defaults, anti-sycophancy, Project Mode mapping,
  Polaris design-only relationship, risk table, smallest-next-step
  recommendation, exact approval text examples, verification).
- Claude critique: 18/18 focus areas PASS, zero blockers, 3 observational
  nits (cross-repo terminology; OPERATING-MODEL.md §8 extension without
  doc-lock; missing PR-default hint in §13).
- Combined push (when authorized): 6 files via PR — 3 modifications
  (COLLAB.md, DASHBOARD.md, DASHBOARD.html) + 3 new turn notes (E6-C
  post-merge refresh carried from prior turn, E6-D Codex design, E6-D
  Claude critique).
- HTML self-contained: 1 inline `<script>`, 1 inline `<style>`, 0 external
  `<link>` / network APIs / storage APIs; single legitimate executable
  `clipboard.writeText(target.innerText)` call.
- Dashboard snapshot discipline preserved (text content only; no CSS,
  buttons, collapsibles, mode panels, or structural additions).
- No `PROTOCOL.md`, `OPERATING-MODEL.md`, kit, alert-state, advisor-notes,
  automation, model/API, transport, or product/runtime edit was made.
- Outcome-loop implementation remains deferred to E6-D2 (codification)
  before any tooling.
- Subagents not used.
- Pilot repo (`open-mic-colorado-agent-pilot`) untouched at `655e75bc`.

---

## No-touch list

- No `.agent-handoff/PROTOCOL.md` edit.
- No `.agent-handoff/OPERATING-MODEL.md` edit.
- No `.agent-handoff/tools/alert-state.sh` edit.
- No `.agent-handoff/reflections/`, `.agent-handoff/improvements/`, or
  `.agent-handoff/advisor-notes/` path creation.
- No `kit/v1/` edit.
- No root README/AGENTS/CLAUDE or `docs/` edit.
- No product/runtime, live Open Mic Colorado, pilot repo, CommonGround,
  NanoClaw, Notion, `.mcp.json`, plugin/config, automation, model/API setup,
  MCP/bridge, cron/timer/webhook/launch agent, or global config change.
