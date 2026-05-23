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

> ✉ **COURIER ONLY** — paste content already authored by an agent; no
> judgment from you.

| Field | Value |
| --- | --- |
| GPT needed now | No — GPT already routed E6-DASH-002 to Claude Design |
| Sami decision needed now | No — Codex verifies file scope + self-contained HTML next |
| Next paste target | Codex |
| Payload type | Agent-authored prompt |
| Why | Codex verifies scope/HTML; no judgment needed from you. |

**About this cue** (new in E6-DASH-002): the 5 states answer "what role am I
playing right now?"

- ✉ **COURIER ONLY** — paste agent-authored content; no judgment needed.
- 🔑 **APPROVAL ONLY** — paste authorization text; only Sami can approve.
- 💬 **ASK GPT** — coordinator question needs synthesis or routing.
- ⚙ **AGENTS RUNNING** — agents work inside an approved Outcome Circle;
  monitor for callback (scope, risk, blocker, iteration cap).
- ⚠ **STOP / UNKNOWN** — inputs unavailable or contradictory; default to
  Ask GPT.

The cue is derived from `(Coordinator Trigger × inside Outcome Circle? ×
Next Actor)`. It is not an authored field. Project Mode remains visible
below as descriptive context, but is not the routing input.

## DO THIS NOW

**Send E6-DASH-002 to Codex for verification — Claude Design added the
Human Role Cue (this panel) and refreshed stale post-PR4 state.**

E6-DASH-002 implementation is local-only. 4 files touched per
authorization: `DASHBOARD.html`, `DASHBOARD.md`, `COLLAB.md`, and the new
turn note. Codex verifies file scope, HTML self-containment, and no-touch
surface compliance. Sami accepts or routes differently after Codex
reports.

### Where you are in the loop

```text
✓ PR #4 (E6-D2) merged → ✓ GPT routed DASH-002 → ✓ Claude Design implemented → [Codex verifies] → Sami accepts → First Outcome Circle scope (NEEDS_GPT, future)
                                                                                  ↑ YOU ARE HERE
```

### Why this snapshot

E6-DASH-002 adds a compact Human Role Cue above the fold so Sami no longer
has to translate `Coordinator Trigger` + `Project Mode` into "what should
I do right now?" The 5 human-facing states (`ASK GPT` / `COURIER ONLY` /
`APPROVAL ONLY` / `AGENTS RUNNING` / `STOP / UNKNOWN`) are derived from
existing fields per a published routing map — not a new authored field.
Step 0 of this turn refreshed Polaris/COLLAB from stale "Push E6-D2"
framing to current post-merge state.

### Three actions

#### 1. RECOMMENDED — Copy verification prompt, paste to **Codex**

Codex verifies E6-DASH-002: only 4 authorized files changed, Human Role
Cue is above the fold, distinguishes Project Mode from current step,
COURIER vs ASK GPT vs APPROVAL ONLY are visually and label-distinct,
HTML remains self-contained, alert-state.sh ran without modifying the
working tree. Codex writes one verify turn note; no staging/commit/push.

See the full verification prompt under "What gets pasted to Codex" below.

#### 2. OPTIONAL — Copy question, paste to **GPT-5.5 Pro**

Ask GPT for any coordinator concern about the cue design before Codex
verifies, or for framing of the next substantive work (first Outcome
Circle scope decision, which is NEEDS_GPT and follows acceptance of
E6-DASH-002).

See the full question under "What gets pasted to GPT" below.

#### 3. OR — Pause and observe

Do nothing. The local E6-DASH-002 implementation state stays as-is until
you act.

### Status

- Snapshot expires when: Sami pastes Codex verification, asks GPT,
  pauses-and-observes, or any actor changes.
- Coordinator Trigger: **ROUTINE** for this implementation handoff (GPT
  already routed E6-DASH-002 to Claude Design; Codex verification is
  mechanical scope/HTML check).
- Project Mode: **Coordinator dominant (~80%)**, Execution (~10%, this
  implementation), Sami-decision-pending (~10%, post-verify accept).

---

## What gets pasted to Codex (the E6-DASH-002 verification)

**Paste this entire block to Codex.** Codex verifies file scope, Human
Role Cue presence/correctness, HTML self-containment, and no-touch
surfaces; writes one verify turn note + COLLAB handoff update; does not
stage/commit/push.

```text
[Lane 1: Claude-Codex Harness | Codex / OpenAI | Thread: E6-DASH-002 verification | Role: verifier]

Verify E6-DASH-002.

Focus:
1. Did Claude Design change only the four approved files?
   - .agent-handoff/DASHBOARD.html
   - .agent-handoff/DASHBOARD.md
   - .agent-handoff/COLLAB.md
   - .agent-handoff/turns/E6-DASH-002-claude-design-human-role-cue.md
2. Does Polaris now show a clear Human Role Cue above the fold?
3. Does the cue distinguish Project Mode (big-picture) from current step
   (human role now)?
4. Does it make COURIER ONLY obvious when GPT is not needed?
5. Does it make ASK GPT obvious when GPT is needed?
6. Does it avoid making Sami classify routine vs. GPT?
7. Does it preserve one-primary-action discipline?
8. Does it preserve paste-to-whom labels (Claude Code / Codex / GPT /
   Claude Design / Sami)?
9. Does it preserve COLLAB.md authority warning and no-approval-inference
   warning?
10. Does DASHBOARD.html remain self-contained:
    - no external CSS (no <link rel="stylesheet">)
    - no external JS (no <script src=...>)
    - no HTTP(S) URLs
    - no storage/localStorage/sessionStorage
    - no network APIs (fetch, XMLHttpRequest, EventSource, WebSocket)
    - no server requirement
11. Did `sh .agent-handoff/tools/alert-state.sh` run without modifying
    the working tree?
12. Does the published routing map (Coordinator Trigger × Inside Outcome
    Circle? × Next Actor → Human Role Cue) match the cue shown in the
    current snapshot? Confirm UNCLEAR → ASK GPT (not STOP / UNKNOWN) per
    PROTOCOL.md L222.
13. Is APPROVAL ONLY vs COURIER ONLY distinguishable by text label
    (Authorization text vs Agent-authored prompt), not by color alone?
14. Does AGENTS RUNNING wording convey "monitor for callback" (scope,
    risk, blocker, iteration cap), not "do nothing"?
15. Is E6-DASH-002 safe to accept?

Output only:
- .agent-handoff/turns/E6-DASH-002-codex-verify-human-role-cue.md
- .agent-handoff/COLLAB.md handoff update
- .agent-handoff/DASHBOARD.md / DASHBOARD.html only if Polaris snapshot
  handoff requires it

Do not stage, commit, push, branch, or PR.
Hard stop after verification.

Dashboard status: include whether DASHBOARD.md/html were refreshed this turn.
```

---

## What gets pasted to GPT (optional pre-verify / post-impl review)

**Paste this to GPT-5.5 Pro** only if you want coordinator review before
Codex verifies, or for framing the next substantive work (first Outcome
Circle scope decision).

```text
[Lane 1: Claude-Codex Harness | GPT-5.5 Pro / OpenAI | Thread: E6-DASH-002 post-impl | Role: coordinator/outcome architect]

Claude Design implemented E6-DASH-002 (Polaris Human Role Cue above the
fold). Codex verifies next. Cue design highlights:

- 5 human-facing states: ASK GPT / COURIER ONLY / APPROVAL ONLY /
  AGENTS RUNNING / STOP / UNKNOWN.
- Derived from (Coordinator Trigger × inside Outcome Circle? × Next
  Actor) per a published routing map in the E6-DASH-002 turn note. Not
  a new authored field.
- UNCLEAR maps to ASK GPT (per PROTOCOL.md L222), not STOP / UNKNOWN.
  STOP / UNKNOWN is reserved for unavailable/contradictory routing inputs.
- APPROVAL ONLY vs COURIER ONLY distinguished by text label
  (Authorization text vs Agent-authored prompt), not color alone.
- AGENTS RUNNING wording conveys "monitor for callback: scope, risk,
  blocker, iteration cap" — not "do nothing."
- Project Mode kept visible as descriptive context, not a routing input.
- Visual treatment is provisional for AGENTS RUNNING (no Outcome Circle
  has run yet); refine after first circle.
- Bootstrap rule ("GPT-in-loop for circle entry/exit until 2 circles
  complete") tracked as a separate future E6-PROTOCOL-FIX, not folded
  into E6-DASH-002.

Optional coordinator review:
- Any concern about the routing map or the 5-state taxonomy before Codex
  verifies?
- After E6-DASH-002 is accepted, the next substantive work is choosing/
  framing the first Outcome Circle scope. Want to frame that now as a
  separate NEEDS_GPT turn, or wait until E6-DASH-002 lands?
- Bootstrap rule placement: still recommend a tiny E6-PROTOCOL-FIX in
  PROTOCOL.md § Outcome Circles, or fold into the first-circle authorization
  text?

Do not authorize approval. Sami remains sole approval authority.
```

---

## Pause and observe — what that means

```text
Do nothing. The local working tree stays as-is after E6-DASH-002:
- M .agent-handoff/COLLAB.md
- M .agent-handoff/DASHBOARD.md
- M .agent-handoff/DASHBOARD.html
- ?? .agent-handoff/turns/E6-DASH-002-claude-design-human-role-cue.md

When you want to resume, paste the Codex verification prompt (primary),
paste the GPT question (secondary), or route a different action.

To revert the local working tree back to the merge commit (d8fa722),
discarding E6-DASH-002 entirely:
  git restore .agent-handoff/COLLAB.md .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html
  rm .agent-handoff/turns/E6-DASH-002-claude-design-human-role-cue.md
```

---

## Snapshot status & provenance

| Field | Current value |
| --- | --- |
| Prepared for | Sami to paste Codex verification prompt for E6-DASH-002 (or ask GPT, or pause) |
| As of | HEAD `d8fa722` plus local E6-DASH-002 implementation |
| Expires after | Sami pastes verification, asks GPT, pauses-and-observes, or any actor changes |
| After this action | Do not reuse this dashboard snapshot until a repo-writing agent refreshes it |
| Prepared by | Claude Design (E6-DASH-002 implementation + this snapshot refresh) |
| Last repo action | `d8fa722 Merge pull request #4 from samiserrag/e6-d2-outcome-circle-protocol-codification` (E6-D2 merge commit) |
| Snapshot basis | HEAD `d8fa722` plus local COLLAB / dashboard refresh + 1 new turn note (E6-DASH-002 Claude Design implementation) |
| Source turn notes | `E6-DASH-002-claude-design-human-role-cue.md` (this turn) |
| Coordinator Trigger | ROUTINE for this implementation handoff (GPT already routed E6-DASH-002; Codex verification is mechanical scope/HTML check) |
| Project Mode | Coordinator dominant (~80%), Execution (~10%, this implementation), Sami-decision-pending (~10%, post-verify accept), Unknown 0% |

---

## Who's who right now

| Role | Agent | What they're doing |
| --- | --- | --- |
| Coordinator | GPT-5.5 Pro / OpenAI / advisor-class | Idle — last action: routed E6-DASH-002 to Claude Design with 5-state taxonomy proposal |
| Designer (completed) | Claude Design / Anthropic / architect-class | Implemented E6-DASH-002 (Human Role Cue + stale-state refresh); refreshed this snapshot |
| Verifier (pending) | Codex / OpenAI / architect-class | Will verify file scope, HTML self-containment, no-touch surfaces |
| Approver | Sami | Vision / priority / risk / taste. Pastes verification, asks GPT, or pauses |
| Source of truth | Repo (`COLLAB.md` authoritative) | This dashboard is a view |
| Diversity | Multi-org (Anthropic + OpenAI) | 3-way coordination preserved |

---

## What changed in this snapshot

- Step 0 stale-state refresh: previous Polaris pointed at "Push E6-D2"
  but PR #4 merged at `d8fa722`. H1, subtitle, role-flow, why-panel,
  three actions, snapshot fields, and all paste blocks now reflect
  post-merge state.
- Added **Human Role Cue** panel above the fold in both `DASHBOARD.md`
  and `DASHBOARD.html`. Cue shows 6 fields: Human role, GPT needed,
  Sami decision needed, Next paste target, Payload type, Why.
- Published 5-state taxonomy with icons (✉ COURIER ONLY, 🔑 APPROVAL
  ONLY, 💬 ASK GPT, ⚙ AGENTS RUNNING, ⚠ STOP / UNKNOWN). Icons
  reinforce text labels for color-blind accessibility.
- HTML adds minimal CSS for the cue: 5 state classes (`role-courier`,
  `role-approval`, `role-ask-gpt`, `role-agents-running`, `role-stop`)
  with distinct background + left-border color, plus a `.cue-fields`
  grid layout. No JS changes. No new buttons. No new collapsibles.
- All existing Polaris strengths preserved: plain-language H1,
  paste-to-whom button labels, role-flow strip, visible Ask-GPT path,
  one primary recommendation, collapsed technical payloads, COLLAB.md
  authority warning, no-approval-inference warning.

---

## Technical packet

- Latest pushed baseline: `d8fa722 Merge pull request #4 from
  samiserrag/e6-d2-outcome-circle-protocol-codification` (E6-D2 merge
  commit; brings Outcome Circle entry rule + 14-field packet schema +
  9 result states + PR-over-direct-push hint to durable governance).
- E6-DASH-002 scope: dashboard UX/content only. Four files: `.agent-handoff/
  DASHBOARD.html`, `.agent-handoff/DASHBOARD.md`, `.agent-handoff/
  COLLAB.md`, `.agent-handoff/turns/E6-DASH-002-claude-design-human-role-
  cue.md`.
- Human Role Cue routing map (published in turn note):

```text
Coordinator Trigger  Inside Circle?  Next Actor          Human Role Cue
NEEDS_GPT            any             any                 ASK GPT
UNCLEAR              any             any                 ASK GPT
ROUTINE              yes             builder/auditor     AGENTS RUNNING
ROUTINE              no              Sami                APPROVAL ONLY
ROUTINE              no              Claude/Codex/Design APPROVAL ONLY when
                                                         payload is auth text;
                                                         else COURIER ONLY
inputs unavailable   unknown         unknown             STOP / UNKNOWN
```

- UNCLEAR maps to ASK GPT per PROTOCOL.md L222 (not STOP / UNKNOWN).
- Payload type label disambiguates APPROVAL ONLY vs COURIER ONLY when
  Next Actor is an agent: `Authorization text` (Sami's explicit approval
  phrase, including Outcome Circle entry text) vs `Agent-authored
  prompt` / `Coordinator question` / `No paste`.
- AGENTS RUNNING wording: "monitor for callback: scope, risk, blocker,
  iteration cap." Visual treatment is provisional; refine after first
  Outcome Circle runs.
- Bootstrap rule ("GPT-in-loop for circle entry/exit until 2 circles
  complete") NOT folded into E6-DASH-002. Tracked as follow-up: tiny
  E6-PROTOCOL-FIX adds one paragraph to PROTOCOL.md § Outcome Circles.
- HTML self-contained: 1 inline `<script>`, 1 inline `<style>`, 0
  external `<link>` / network APIs / storage APIs. Single executable
  `clipboard.writeText(target.innerText)` call preserved (now at L660
  after the cue addition).
- Cue CSS additions: 5 state classes + `.cue-fields` grid + base
  `.human-role-cue` panel. No structural HTML refactor.
- Subagents not used.
- Pilot repo (`open-mic-colorado-agent-pilot`) untouched at `655e75bc`.

---

## No-touch list

- No `PROTOCOL.md` edit.
- No `OPERATING-MODEL.md` edit.
- No kit template edits (kit/v1/**).
- No `alert-state.sh` edit.
- No advisor-notes, reflections, or improvements path creation.
- No root `README.md` / `AGENTS.md` / `CLAUDE.md` / `docs/` edit.
- No packet template, first Outcome Circle, loop runner, automation,
  tooling, notifier, model/API setup, NanoClaw, CommonGround, Notion,
  `.mcp.json`, MCP/plugin/bridge, cron/timer/webhook/launch agent,
  global config, product/runtime, live Open Mic Colorado, or pilot
  repo work.
