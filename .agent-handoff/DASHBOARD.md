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

**Push E6-D2 — Claude critique complete; codification ready to land.**

All 17 focus areas PASS with zero blockers. Mirror discipline byte-identical
between live `PROTOCOL.md` and `kit/v1/.agent-handoff/PROTOCOL.md.template`.
1 observational nit (stale `OPERATING-MODEL.md` L3 "Last doc-lock" header)
is foldable into a future small turn. After push, the next turn is the
first test circle: `Approved Outcome Circle: one-doc protocol mirror
verification`.

### Where you are in the loop

```text
✓ E6-D designed → ✓ Claude critiqued E6-D → ✓ Codex codified E6-D2 → ✓ Claude critiqued E6-D2 → [SAMI DECIDES PUSH] → First test circle
                                                                                                     ↑ YOU ARE HERE
```

### Why this snapshot

E6-D2 codifies the Outcome Circle entry rule, 14-field packet schema, 9
result states, and PR-over-direct-push hint into enforceable governance —
`PROTOCOL.md` + kit template (byte-identical mirror) + `OPERATING-MODEL.md`
§8 (doc-lock fold). The codification is durable only after push. After
push, the first test circle (mirror verification) validates the protocol
shape on an objective task with read-only scope; commit/push default-deny
is naturally upheld.

### Three actions

#### 1. RECOMMENDED — Copy push approval, paste to **Claude Code**

Claude verifies pre-flight (git status + diff --check + no-touch verify +
mirror discipline + HTML self-containment), stages exactly the 7 listed
files, commits with the exact message, pushes to feature branch
`e6-d2-outcome-circle-protocol-codification`, opens PR, and reports. Hard
stop after PR open.

See the full push approval under "What gets pasted to Claude" below.

#### 2. OPTIONAL — Copy question, paste to **GPT-5.5 Pro**

Ask GPT for any pre-push concerns about E6-D2, or for scope guidance on the
first test circle (`Approved Outcome Circle: one-doc protocol mirror
verification`).

See the full question under "What gets pasted to GPT" below.

#### 3. OR — Pause and observe

Do nothing. The local E6-D2 + this critique state stays as-is until you act.

### Status

- Snapshot expires when: Sami authorizes push, routes a different action,
  pauses-and-observes, or any actor changes
- Coordinator Trigger: **ROUTINE** for this auditor handoff refresh and for
  the push itself (mechanical PR creation); next substantive turn (first
  test circle) will be Sami-decision-pending then Execution
- Project Mode: **Coordinator dominant (~70%)**, Sami-decision-pending (~25%), Execution (~5%)

---

## What gets pasted to Claude (the E6-D2 push approval)

**Paste this entire block to Claude Code.** Claude will run pre-flight (git
status + diff --check + no-touch verify + mirror discipline + HTML
self-containment), stage exactly the 8 listed files, commit with the exact
message, push to a feature branch, open a PR, and report. Hard stop after
PR open.

```text
Approved:

Stage, commit, and push only these E6-D2 codification + Claude critique files via PR (not direct to main):
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/OPERATING-MODEL.md
- .agent-handoff/PROTOCOL.md
- kit/v1/.agent-handoff/PROTOCOL.md.template
- .agent-handoff/turns/E6-D2-codex-outcome-circle-protocol-codification.md
- .agent-handoff/turns/E6-D2-claude-critique-outcome-circle-protocol-codification.md

Do not stage or commit:
- .agent-handoff/tools/alert-state.sh
- .agent-handoff/reflections/
- .agent-handoff/improvements/
- .agent-handoff/advisor-notes/
- kit/v1/.agent-handoff/DASHBOARD.md.template
- kit/v1/.agent-handoff/COLLAB.md.template
- kit/v1/.agent-handoff/prompts/
- kit/v1/README.md
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
- exactly 8 files staged (6 modifications: COLLAB.md, DASHBOARD.md, DASHBOARD.html, OPERATING-MODEL.md, PROTOCOL.md, kit/v1/.agent-handoff/PROTOCOL.md.template; 2 new turn notes: E6-D2 Codex codification + E6-D2 Claude critique)
- byte-identical mirror: diff between Outcome Circles section of live PROTOCOL.md and kit template returns empty
- no alert-state.sh, kit dashboard/COLLAB template, kit prompts, kit README, advisor-notes/reflections/improvements, .mcp.json, Notion/NanoClaw/CommonGround, plugin/config, automation, cron/timer/webhook/launch-agent, MCP/bridge, API setup, or global config staged
- no pilot repo or live Open Mic Colorado touch

Branch: e6-d2-outcome-circle-protocol-codification
Commit message:
E6-D2: codify Outcome Circle protocol + Claude critique

After PR open, hard stop.
```

---

## What gets pasted to GPT (optional pre-push / first-circle scope check)

**Paste this to GPT-5.5 Pro** only if you want coordinator review before
authorizing the E6-D2 push, or for scope guidance on the upcoming first test
circle.

```text
[Lane 1: Claude-Codex Harness | GPT-5.5 Pro / OpenAI | Thread: E6-D2 post-critique + first-circle scope | Role: coordinator/outcome architect]

Codex codified E6-D2 (Outcome Circle entry rule + 14-field packet schema +
PR-over-direct-push hint into PROTOCOL.md + kit template + OPERATING-MODEL.md
§8). Claude critiqued it as auditor and found:

- All 17 focus areas PASS with zero blockers.
- Mirror discipline: byte-identical between live PROTOCOL.md and kit template
  (diff returns empty).
- All 7 non-entry cases codified.
- All 14 packet fields codified.
- All 9 result states codified.
- All 4 non-approval rules preserved verbatim (auditor pass, rubric
  satisfied, model consensus, satisfied-as-evidence-only).
- Default-deny on commit/push inside circles + PR-over-direct-push hint
  triple-placed (PROTOCOL.md + kit + OPERATING-MODEL.md §8).
- All 3 E6-D critique nits addressed by E6-D2.
- 1 observational nit (foldable, not blocking): OPERATING-MODEL.md L3
  "Last doc-lock" header is stale (says "E6-C (commit pending)" but E6-C
  is merged AND E6-D2 has now landed §8 doc-lock changes). Codex chose
  conservative scope interpretation; foldable into E6-D2-FIX-001 or a
  future docs-cleanup turn.

Claude's recommended next sequence after push:
1. Push E6-D2 (8-file PR — codification is durable only after it lands).
2. First test circle: Approved Outcome Circle: one-doc protocol mirror verification
   - Read-only verification that Outcome Circles section is byte-identical
     in live PROTOCOL.md and kit/v1/.agent-handoff/PROTOCOL.md.template.
   - Pass criterion: objective (diff exit 0).
   - Builder = investigator runs diff and reports.
   - Auditor = independent investigator re-runs diff and verifies.
   - Max iterations: 2.
   - Commit/push: NO (verification-only; one auditor turn note).
   - Stop conditions: max iterations, non-empty diff, scope creep,
     unexpected file changes.

Please answer:
- Any coordinator concern before E6-D2 push?
- Agree with mirror-verification as first test circle (objective pass
  criterion + minimal scope), or do you prefer a different first
  candidate?
- Should the first packet include any extra fields beyond E6-D §6's 14
  (e.g., explicit confidence threshold, retry behavior)?
- Any coordinator concern about the test sequence after first circle
  passes (graduate to wording-cleanup as second test; then retrospective
  before scaling)?

Do not authorize approval. Sami remains sole approval authority.
```

---

## Pause and observe — what that means

```text
Do nothing. The local working tree stays as-is after E6-D2 + this critique:
- M .agent-handoff/PROTOCOL.md
- M kit/v1/.agent-handoff/PROTOCOL.md.template
- M .agent-handoff/OPERATING-MODEL.md
- M .agent-handoff/COLLAB.md
- M .agent-handoff/DASHBOARD.md
- M .agent-handoff/DASHBOARD.html
- ?? .agent-handoff/turns/E6-D2-codex-outcome-circle-protocol-codification.md
- ?? .agent-handoff/turns/E6-D2-claude-critique-outcome-circle-protocol-codification.md

When you want to resume, paste the push approval (primary), paste the GPT
question (secondary), or route a different action.

To revert the local working tree back to the merge commit (e0deb0e),
discarding both E6-D2 and this critique entirely:
  git restore .agent-handoff/COLLAB.md .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html .agent-handoff/OPERATING-MODEL.md .agent-handoff/PROTOCOL.md kit/v1/.agent-handoff/PROTOCOL.md.template
  rm .agent-handoff/turns/E6-D2-codex-outcome-circle-protocol-codification.md
  rm .agent-handoff/turns/E6-D2-claude-critique-outcome-circle-protocol-codification.md
```

---

## Snapshot status & provenance

| Field | Current value |
| --- | --- |
| Prepared for | Sami to authorize push of E6-D2 + critique (8-file PR), ask GPT for any pre-push concerns, or pause |
| As of | HEAD `e0deb0e` plus local E6-D2 codification + Claude critique |
| Expires after | Sami authorizes push, routes a different action, pauses-and-observes, or any actor changes |
| After this action | Do not reuse this dashboard snapshot until a repo-writing agent refreshes it |
| Prepared by | Codex (E6-D2 codification) + Claude (E6-D2 critique + this snapshot refresh) |
| Last repo action | `e0deb0e Merge pull request #3 from samiserrag/e6-d-outcome-circle-mechanics` (E6-D merge commit) |
| Snapshot basis | HEAD `e0deb0e` plus local PROTOCOL / kit protocol / OPERATING-MODEL / COLLAB / dashboard refresh + 2 new turn notes (E6-D2 Codex codification + E6-D2 Claude critique) |
| Source turn notes | `E6-D2-claude-critique-outcome-circle-protocol-codification.md` (this critique); also `E6-D2-codex-outcome-circle-protocol-codification.md` |
| Coordinator Trigger | ROUTINE for this auditor handoff refresh and for the push itself; next substantive turn (first test circle) will be Sami-decision-pending then Execution |
| Project Mode | Coordinator dominant (~70%), Sami-decision-pending (~25%), Execution (~5%), Unknown 0% |

---

## Who's who right now

| Role | Agent | What they're doing |
| --- | --- | --- |
| Builder / implementer | Codex / OpenAI / architect-class | Idle — last action: E6-D2 codification (PROTOCOL.md + kit mirror + OPERATING-MODEL.md §8 fold) |
| Auditor (completed) | Claude Code / Anthropic / architect-class | Critiqued E6-D2: 17/17 PASS, 0 blockers, 1 nit; refreshed this snapshot post-critique |
| Coordinator (pending) | GPT-5.5 Pro / OpenAI / advisor-class | Optional pre-push review available; first-circle scope guidance optional |
| Approver | Sami | Vision / priority / risk / taste. Authorizes push or routes differently |
| Source of truth | Repo (`COLLAB.md` authoritative) | This dashboard is a view |
| Diversity | Multi-org (Anthropic + OpenAI) | 3-way coordination preserved through E6-D2 |

---

## What changed in this snapshot

- H1, short Why, role-flow, current-step text, and paste-block contents now
  reflect post-critique handoff (was: "Send E6-D2 to Claude for critique";
  now: "Push E6-D2 — Claude critique complete; codification ready to land").
- Primary action elevated to push approval (8-file PR via feature branch
  `e6-d2-outcome-circle-protocol-codification`); secondary is GPT pre-push /
  first-circle scope question; tertiary is pause.
- Role-flow advanced: Claude critiqued E6-D2 (done); current step is Sami
  decides push; next step is first test circle.
- Snapshot status fields refreshed: prepared-by is Codex + Claude (was Codex
  only); source turn notes include this critique plus the E6-D2 codification.
- Project Mode estimate updated: Coordinator (~70%), Sami-decision-pending
  (~25%), Execution (~5%, this refresh).
- Polaris remains a one-action snapshot; no new CSS, buttons, collapsibles,
  scripts, sections, or mode panel added.

---

## Technical packet

- Latest pushed baseline: `e0deb0e Merge pull request #3 from samiserrag/e6-d-outcome-circle-mechanics` (E6-D merge commit).
- E6-D2 codified Outcome Circle entry rule + 14-field packet schema + 9
  result states + PR-over-direct-push hint into `.agent-handoff/PROTOCOL.md`
  (52 lines added, 4 removed). Same content byte-equivalently mirrored into
  `kit/v1/.agent-handoff/PROTOCOL.md.template` (52 added, 4 removed).
- `OPERATING-MODEL.md` §8 folded in E6-D refinements (10→14 packet fields;
  3→7 non-entry cases; new default commit/push policy). §18 added 2 source
  breadcrumb rows for E6-D Codex design + E6-D Claude critique.
- Claude critique: 17/17 focus areas PASS, zero blockers, 1 observational
  nit (stale OPERATING-MODEL.md L3 "Last doc-lock" header; foldable).
- Mirror discipline verified: `diff` between live `PROTOCOL.md` and kit
  template Outcome Circles section returned **empty (byte-identical)**.
- Combined push (when authorized): 8 files via PR — 6 modifications
  (COLLAB.md, DASHBOARD.md, DASHBOARD.html, OPERATING-MODEL.md, PROTOCOL.md,
  kit/v1/.agent-handoff/PROTOCOL.md.template) + 2 new turn notes (E6-D2
  Codex codification, E6-D2 Claude critique).
- HTML self-contained: 1 inline `<script>`, 1 inline `<style>`, 0 external
  `<link>` / network APIs / storage APIs; single legitimate executable
  `clipboard.writeText(target.innerText)` call at L596.
- Dashboard snapshot discipline preserved (text content only; no CSS,
  buttons, collapsibles, mode panels, or structural additions).
- The first test circle was not run by E6-D2. Recommended later candidate:
  `Approved Outcome Circle: one-doc protocol mirror verification`. Pass
  criterion is mechanical (`diff` exit 0); commit/push default-deny is
  naturally upheld (verification + one turn note only).
- Burden reduction still depends on future outcome-circle use plus later
  handoff/wakeup/transport layers. E6-D2 codifies the contract; full burden
  reduction requires loop tooling deferred to later turns.
- Subagents not used.
- Pilot repo (`open-mic-colorado-agent-pilot`) untouched at `655e75bc`.

---

## No-touch list

- No alert-state.sh edit.
- No advisor-notes, reflections, or improvements path creation.
- No kit dashboard template, kit README, or prompt-template edit.
- No root README/AGENTS/CLAUDE or docs edit.
- No packet template, first Outcome Circle, loop runner, automation, tooling,
  notifier, model/API setup, NanoClaw, CommonGround, Notion, .mcp.json,
  MCP/plugin/bridge, cron/timer/webhook/launch agent, global config,
  product/runtime, live Open Mic Colorado, or pilot repo work.
