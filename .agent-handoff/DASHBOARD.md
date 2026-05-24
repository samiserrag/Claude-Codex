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

## Human Role Cue

> 🔑 **APPROVAL ONLY** — Claude's critique is complete (13/13 PASS); your
> decision authorizes what happens next.

| Field | Value |
| --- | --- |
| Next paste target | Claude Code (for push) — or none if you pause |
| Payload type | Authorization text |
| GPT needed now | No — critique surfaced no NEEDS_GPT triggers |
| Sami decision now | Yes — accept/push, request one more tweak, or pause |
| Why | Combined FIX-001 + RESTORE is safe to accept. |

<details>
<summary>About the 5 states</summary>

- ✉ **COURIER ONLY** — paste agent content; no judgment.
- 🔑 **APPROVAL ONLY** — paste authorization text; only Sami can approve.
- 💬 **ASK GPT** — coordinator question needs synthesis or routing.
- ⚙ **AGENTS RUNNING** — agents work inside an approved Outcome Circle;
  monitor for callback (scope, risk, blocker, iteration cap).
- ⚠ **STOP / UNKNOWN** — inputs unavailable or contradictory; default to
  Ask GPT.

Derived from `Coordinator Trigger × inside Outcome Circle? × Next Actor`;
not an authored field. Project Mode remains visible below as descriptive
context but is not a routing input.

</details>

## DO THIS NOW

**Decide on E6-PROTOCOL-FIX-001 + RESTORE — Claude critique complete
(13/13 PASS, safe to accept).**

Codex's RESTORE repaired the FIX-001 Polaris HTML regression (restored
`role-courier` class, About-the-5-states cue-note, and the two standing
top-level panels) and applied Claude's `scope_conflict` nit
byte-equivalently to both PROTOCOL.md and the kit template.

### Where you are in the loop

```text
✓ PR #5 merged → ✓ Codex added bootstrap rule → ✓ Claude critiqued (flagged regression) → ✓ Codex restored → ✓ Claude re-critiqued → [Sami decides]
                                                                                                                                       ↑ YOU ARE HERE
```

### Why this snapshot

The combined FIX-001 + RESTORE stack adds the Outcome Circle bootstrap
rule (entry/exit always NEEDS_GPT until 2 circles complete successfully
and are reviewed in repo-visible turn notes; packets can't self-classify
entry/exit as ROUTINE; mechanical inside-circle work stays ROUTINE-
eligible when within the packet) AND restores the Polaris HTML
structure that FIX-001 inadvertently regressed. Independent
verification: mirror byte-identical (diff exit 0); 9 `<details>` /
`<summary>` count matches origin/main; all no-touch surfaces clean;
`alert-state.sh` runs without modifying the working tree.

### Three actions

#### 1. RECOMMENDED — Copy push authorization, paste to **Claude Code**

Authorize push of the combined FIX-001 + RESTORE as one PR (5
modifications + 3 new turn notes = 8-file PR; matches prior
combined-push shapes). Suggested branch:
`e6-protocol-fix-001-bootstrap-rule`. Suggested commit message:
`E6-PROTOCOL-FIX-001: add Outcome Circle bootstrap rule (+ RESTORE
repair)`.

Sami authors the exact push authorization text; Claude Code executes
the PR creation under the same shape as the E6-DASH-002 push (verify
scope → stage exactly the listed files → commit → push to feature
branch → open PR → report URL/SHA/state → hard stop).

#### 2. OPTIONAL — Request one more tweak

If Sami wants any of the three foldable nits addressed before push:
1. Fix the bootstrap paragraph's slightly awkward line wrap (cosmetic).
2. Fold an OPERATING-MODEL.md §8 reference to the bootstrap rule.
3. Trim the "final synthesis" phrase in the bootstrap exit list.

#### 3. OR — Pause and observe

Do nothing. The local FIX-001 + RESTORE stack stays as-is until you
act.

### Status

- Snapshot expires when: Sami authorizes push, requests a tweak,
  pauses, or any actor changes.
- Coordinator Trigger: **ROUTINE** for this critique handoff.
- Project Mode: **Coordinator (~65%)**, Sami-decision-pending (~30%),
  Execution (~5%); no Outcome Circle active.

---

## What gets pasted to Claude Code (push authorization)

**Sami authors the exact authorization text.** Use the same shape as
the E6-DASH-002 push approval: list the 8 files to stage, the
no-touch list, the verification checklist, the exact commit message,
the branch name, and the PR title/body requirements. Then "hard stop
after PR opens; report PR URL, branch, commit SHA, local main /
feature-branch state."

Suggested 8-file stage list:

```text
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/DASHBOARD.md
- .agent-handoff/PROTOCOL.md
- kit/v1/.agent-handoff/PROTOCOL.md.template
- .agent-handoff/turns/E6-PROTOCOL-FIX-001-codex-outcome-circle-bootstrap-rule.md
- .agent-handoff/turns/E6-PROTOCOL-FIX-001-claude-critique-outcome-circle-bootstrap-rule.md
- .agent-handoff/turns/E6-PROTOCOL-FIX-001-RESTORE-codex-restore-polaris-bootstrap.md
- .agent-handoff/turns/E6-PROTOCOL-FIX-001-RESTORE-claude-critique-restore-polaris-bootstrap.md
```

(That's 9 files counting both critique turn notes — adjust scope if
you'd prefer to land RESTORE in a separate PR.)

---

## What gets pasted to GPT (optional)

```text
[Lane 1: Claude-Codex Harness | GPT-5.5 Pro / OpenAI | Thread: E6-PROTOCOL-FIX-001 + RESTORE post-critique | Role: coordinator/outcome architect]

Claude completed the combined FIX-001 + RESTORE critique: 13 of 13 focus areas PASS, safe to accept. The bootstrap rule for Outcome Circles is now codified in both live PROTOCOL.md and the kit template byte-identically (entry/exit NEEDS_GPT until 2 circles complete successfully and are reviewed; packets can't self-classify entry/exit as ROUTINE; mechanical inside-circle work stays ROUTINE-eligible). The Polaris HTML regression from FIX-001 was repaired in RESTORE. scope_conflict was added to the bootstrap exit list per Claude's nit.

Any coordinator concern before Sami pushes? Anything to fold in for the upcoming first Outcome Circle packet drafting (which will be NEEDS_GPT per the bootstrap rule)?

Do not approve. Sami remains sole approval authority.
```

---

## Pause and observe

```text
Do nothing. The local working tree stays as-is after FIX-001 + RESTORE + Claude critique:
- M .agent-handoff/COLLAB.md
- M .agent-handoff/DASHBOARD.html
- M .agent-handoff/DASHBOARD.md
- M .agent-handoff/PROTOCOL.md
- M kit/v1/.agent-handoff/PROTOCOL.md.template
- ?? .agent-handoff/turns/E6-PROTOCOL-FIX-001-codex-outcome-circle-bootstrap-rule.md
- ?? .agent-handoff/turns/E6-PROTOCOL-FIX-001-claude-critique-outcome-circle-bootstrap-rule.md
- ?? .agent-handoff/turns/E6-PROTOCOL-FIX-001-RESTORE-codex-restore-polaris-bootstrap.md
- ?? .agent-handoff/turns/E6-PROTOCOL-FIX-001-RESTORE-claude-critique-restore-polaris-bootstrap.md

When you want to resume, paste a push authorization to Claude Code, ask GPT, request a tweak, or route a different action.
```

---

## Snapshot Status & Provenance

| Field | Current value |
| --- | --- |
| Prepared for | Sami to authorize push of FIX-001 + RESTORE (or tweak / pause) |
| As of | `fbdb0b3` plus local FIX-001 + RESTORE + Claude critique |
| Expires after | Sami authorizes push, requests a tweak, pauses, or any actor changes |
| After this action | Do not reuse this dashboard snapshot until a repo-writing agent refreshes it |
| Prepared by | Claude Code (FIX-001 critique + RESTORE critique + this snapshot refresh); FIX-001 + RESTORE implementations by Codex |
| Last repo action | `fbdb0b3` Merge pull request #5 from `e6-dash-002-human-role-cue` |
| Source turn notes | All four E6-PROTOCOL-FIX-001 turn notes (Codex FIX-001 impl, Claude FIX-001 critique, Codex RESTORE impl, Claude RESTORE critique) |
| Coordinator Trigger | ROUTINE for this critique handoff |
| Project Mode | Coordinator ~65%, Sami-decision-pending ~30%, Execution ~5%; no Outcome Circle active |

---

## Who's who right now

| Role | Agent | What they're doing |
| --- | --- | --- |
| Coordinator | GPT-5.5 Pro / OpenAI / advisor-class | Idle — last action: routed E6-PROTOCOL-FIX-001 scope. Available for optional post-critique review. |
| Builder | Codex / OpenAI / architect-class | Idle — completed FIX-001 implementation + RESTORE repair. |
| Auditor (completed) | Claude Code / Anthropic / architect-class | Critiqued FIX-001 (flagged HTML regression), then re-critiqued RESTORE (13/13 PASS). Refreshed this snapshot. |
| Approver | Sami | Decides push / tweak / pause. |
| Source of truth | Repo (`COLLAB.md` authoritative) | This dashboard is a view. |
| Diversity | Multi-org (Anthropic + OpenAI) | 3-way coordination preserved through both turns. |

---

## What changed in this snapshot

- Human Role Cue advanced from COURIER ONLY (paste to Claude) → 🔑
  APPROVAL ONLY (Sami decides).
- H1, subtitle, role-flow, three-actions, and snapshot status fields
  advanced to post-RESTORE-critique state.
- Cue field values updated to reflect Sami-decision-needed state.
- "Three actions" updated: primary is now "Copy push authorization,
  paste to Claude Code"; optional shifted to "Request one more tweak";
  tertiary still pause.
- Paste blocks updated: "What gets pasted to Claude Code" now stages
  push authorization framing (Sami authors specific text); GPT
  optional updated to post-critique synthesis question.
- "Pause and observe" file list updated to include all 4 FIX-001 +
  RESTORE turn notes.
- Snapshot status `Prepared by` updated to credit Claude Code (FIX-001
  critique + RESTORE critique + snapshot refresh) + Codex (FIX-001 +
  RESTORE implementations).
- Polaris remains a one-action snapshot; no new CSS, buttons,
  collapsibles, scripts, sections, or mode panel added.

---

## Technical Packet

- Latest pushed baseline: `fbdb0b3` Merge pull request #5 from
  `e6-dash-002-human-role-cue` (brings the Human Role Cue + FIX-001
  visual tightening to durable governance).
- Bootstrap rule added in PROTOCOL.md L267–280 and mirrored
  byte-identically into `kit/v1/.agent-handoff/PROTOCOL.md.template`
  (independently verified: diff exit 0 on paragraph extraction; diff
  exit 0 on full Outcome Circles section, 71 lines each).
- `scope_conflict` added to bootstrap exit list per Claude's nit
  (byte-equivalent in both files).
- DASHBOARD.html structural elements restored per Claude's FIX-001
  critique: `role-courier` class on cue panel; "About the 5 states"
  cue-note; "Who's who right now" + "What changed in this snapshot"
  standing panels. `<details>` / `<summary>` count = 9 (matches
  origin/main).
- HTML self-contained: 0 external CSS/JS/URLs, 0 storage/network
  APIs, 1 executable `clipboard.writeText` call (pre-existing).
- `alert-state.sh` runs without modifying the working tree (verified
  via pre/post `git status` diff exit 0; still 6519 bytes).
- All no-touch surfaces clean: PROTOCOL.md (only the bootstrap
  paragraph + scope_conflict edit), kit/v1/ (only PROTOCOL.md.template),
  OPERATING-MODEL.md (untouched), root docs (untouched), docs/
  (untouched), advisor-notes/reflections/improvements (still absent),
  `.mcp.json` (still absent), pilot repo (untouched), live Open Mic
  Colorado (untouched).
- 4 turn notes for this stack (2 Codex implementations + 2 Claude
  critiques).
- Subagents not used in any of the 4 turns.

## No-Touch Summary

- No further `PROTOCOL.md` edit beyond the bootstrap rule + scope_conflict.
- No `OPERATING-MODEL.md` edit.
- No `alert-state.sh` edit.
- No kit edits outside `kit/v1/.agent-handoff/PROTOCOL.md.template`.
- No root README / AGENTS / CLAUDE / docs edit.
- No advisor-notes, reflections, or improvements path creation.
- No product/runtime, pilot repo, live Open Mic Colorado, CommonGround,
  NanoClaw, Notion, MCP/plugin/bridge, `.mcp.json`, cron/timer/webhook/
  launch agent, model/API, or global config work.

Dashboard status: refreshed by Claude Code this turn (text content
only — no structural changes; modeling the right "snapshot refresh"
discipline). COLLAB.md is authoritative.
