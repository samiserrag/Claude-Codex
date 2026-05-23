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

**Get Codex to verify the new dashboard.**

Claude just redesigned this dashboard for clarity. Codex needs to check scope
and self-contained HTML before you trust it as the new control surface.

### Where you are in the loop

```
✓ Claude designed → [SAMI SENDS TO CODEX] → Codex verifies → Sami + GPT judge → Push if good
                              ↑ YOU ARE HERE
```

### Why this redesign

You said the old dashboard "feels like an audit log displayed to me, not a
control surface for me." This pass adds: paste-to-WHOM labels on every action,
a visible Ask-GPT path, a role-flow strip showing where you are, plain-language
headings instead of turn IDs, and the agent payload moved into a labeled
section.

### Three actions

#### 1. RECOMMENDED — Copy verification prompt, paste to **Codex**

Codex will check file scope, self-contained HTML, and no-touch surfaces.

See the full prompt under "What gets pasted to Codex" below.

#### 2. OPTIONAL — Copy question, paste to **GPT-5.5 Pro**

Get GPT's design opinion on whether the redesign actually solves the
"confusing as a human" problem you flagged.

See the full question under "What gets pasted to GPT" below.

#### 3. OR — Pause and observe

Do nothing. The local working tree stays as-is until you act.

### Status

- Snapshot expires when: Codex starts verifying, you change direction, or any
  actor changes
- Coordinator Trigger: **NEEDS_GPT** (for the original UX failure that
  triggered this redesign; the verification itself is ROUTINE)

---

## What gets pasted to Codex (the verification prompt)

**Paste this entire block to Codex.** Codex will verify file scope,
self-contained HTML, no-touch discipline, and return a verification turn note.
Codex is NOT being asked to judge UX usability — that's for you and GPT.

```text
[Lane 1: Claude-Codex Harness | Codex / OpenAI | Thread: E6-DASH-001 verification | Role: scope/discipline verifier]

You are Codex in /Users/samiserrag/Documents/GitHub/claude-codex.

Verify E6-DASH-001 (Claude's dashboard UX redesign).

Coordinator Trigger:
- State: ROUTINE
- Reason: mechanical scope/discipline verification of an already-scoped Claude design pass; no architecture/pivot/UX/conflict/safety/automation/tooling trigger active.

Scope: verification only. No edits to dashboard, protocol, kit, or any other surface unless Codex finds defects that need correction (in which case state the defects and ask Sami before fixing).

Focus:
1. Did Claude touch only the four approved E6-DASH-001 files (.agent-handoff/DASHBOARD.html, .agent-handoff/DASHBOARD.md, .agent-handoff/COLLAB.md, .agent-handoff/turns/E6-DASH-001-claude-design-human-control-tower-redesign.md)?
2. Is DASHBOARD.html self-contained (no external CSS/JS, no URLs, no storage APIs, no network APIs, no server requirement)?
3. Are copy buttons restricted to visible text only (no exfiltration of hidden/non-visible state)? Note: copy script auto-expands any closed details ancestor before copying, so text is visible at the moment of copy.
4. Did Claude avoid all no-touch surfaces (PROTOCOL.md, alert-state.sh, kit templates, advisor-notes/reflections/improvements paths, root README/AGENTS/CLAUDE, docs/, .mcp.json, automation, NanoClaw, CommonGround, MCP/plugin/bridge, Notion, cron/timer/webhook/launch agent/global config)?
5. Did alert-state.sh remain unchanged and does running it leave the working tree unchanged?
6. Are COLLAB.md authority, view-only dashboard status, no-approval-inference, and Sami-sole-approval rules preserved in the dashboard text?
7. Does the dashboard preserve the FIX-004 single-recommendation principle (one primary recommendation above the fold, alternatives below)?
8. Did the E6-DASH-001 turn note include the new mandatory `## Coordinator Trigger` section?
9. Is the new dashboard structurally honest (no UI fakes, no "live" claims, snapshot lifecycle preserved in collapsed details)?

Verification commands to run:
- git status --short --untracked-files=all (before and after)
- git diff --check
- diff verification on no-touch surfaces
- sh .agent-handoff/tools/alert-state.sh (confirm working tree unchanged after)

Important note: this verification is scope/discipline only. UX usability evaluation is for Sami + GPT separately, not for this Codex verification turn.

Output:
- .agent-handoff/turns/E6-DASH-001-codex-verify-dashboard-redesign.md
- .agent-handoff/COLLAB.md handoff update
- DASHBOARD.md / DASHBOARD.html only if Codex finds defects that need correction (otherwise no edits)

Do not stage, commit, push, branch, or PR.
Hard stop after verification.

Dashboard status: include whether you refreshed DASHBOARD.md/html this turn.
```

---

## What gets pasted to GPT (optional design-feedback question)

**Optional.** Paste this to GPT-5.5 Pro if you want a design opinion before
Codex's scope verification. GPT can comment on whether the redesign actually
solves the "confusing as a human" problem you flagged.

```text
[Lane 1: Claude-Codex Harness | GPT-5.5 Pro / OpenAI | Thread: E6-DASH-001 design review | Role: external UX coordinator]

You routed the dashboard UX work to Claude Design. Claude has now produced a redesign of .agent-handoff/DASHBOARD.html and .agent-handoff/DASHBOARD.md.

Sami's original complaint: "I still find it very confusing as a human on a team of advanced AI agents communicating with each other relying on me for project decisions that are more directional and not technical details. I dont know where I'm supposed to paste what next and how GPT is invoked, etc."

Changes Claude made:
1. h1 is plain language ("Get Codex to verify the new dashboard") not turn IDs
2. One-sentence subtitle explains what's happening
3. Three explicit action buttons, each naming the receiving agent:
   - Primary (green): Copy verification prompt — paste to Codex
   - GPT (purple): Copy question — paste to GPT-5.5 Pro
   - Tertiary (outlined): Pause and observe
4. Role-flow strip near the top showing "Claude designed → Sami sends to Codex → Codex verifies → Sami + GPT judge → Push if good" with current step highlighted
5. The full agent payload moved into a collapsed details labeled "What gets pasted to Codex (the verification prompt)" with a label explaining "Paste this entire block to Codex"
6. The GPT path is a permanent secondary button (not buried in raw state)
7. Coordinator Trigger is mentioned in a small route-info line near the action buttons, not as a competing chip
8. Snapshot provenance, technical packet, no-touch list, and details all moved into collapsed details below the fold
9. Why-paragraph kept to one block explaining what changed and why
10. HTML still self-contained (no external resources); copy script auto-expands closed details before copying so users see what they're copying

Please judge:
1. Does the redesign actually fix Sami's confusion? Or did Claude solve a different problem?
2. Above-the-fold cognitive load: can Sami know what to do in 10 seconds?
3. Is the "paste TO WHOM" affordance now obvious?
4. Is the Ask-GPT path discoverable and appropriately sized?
5. Does the role-flow strip help, or is it noise?
6. Anything Claude over-designed or under-designed?
7. Any structural concerns about how Coordinator Trigger metadata is now surfaced?

If you have specific corrections, please draft them as a Codex implementation prompt that Sami can paste. If the design is good, say so and recommend Sami proceed with the Codex verification step.

Hard stop: do not authorize approval. Sami remains the sole approval authority.
```

---

## Pause and observe — what that means

Do nothing. The local working tree stays exactly as Claude left it (5
modifications + 4 new turn notes from the pushed E6-B work, plus this
dashboard redesign in DASHBOARD.html, DASHBOARD.md, COLLAB.md, and the
E6-DASH-001 turn note). When you want to resume, you can:

- Send the Codex verification prompt (action 1)
- Send the GPT design-feedback question (action 2)
- Manually craft a different prompt
- Revert: `git restore .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md .agent-handoff/COLLAB.md && rm .agent-handoff/turns/E6-DASH-001-claude-design-human-control-tower-redesign.md`

No approval text is required for pause-and-observe. Nothing is being pushed.

---

## Snapshot status & provenance

| Field | Current value |
| --- | --- |
| Prepared for | Sami to send the verification prompt to Codex (or alternative actions) |
| As of | HEAD `dbb9172` plus local E6-DASH-001 dashboard redesign working tree changes |
| Expires after | Codex verification turn lands, Sami routes a different action, or any actor changes |
| After this action | Do not reuse this dashboard snapshot until a repo-writing agent refreshes it |
| Prepared by | Claude Code (acting as dashboard UX designer for this turn, per GPT's routing recommendation) |
| Last repo action | `dbb9172 E6-B: codify GPT coordinator and trigger classification` |
| Snapshot basis | HEAD `dbb9172` plus local DASHBOARD.html + DASHBOARD.md + COLLAB.md edits + new E6-DASH-001 turn note |
| Source turn note | `E6-DASH-001-claude-design-human-control-tower-redesign.md` |
| Coordinator Trigger | NEEDS_GPT — Sami's "dashboard is confusing" flagged the UX/cognitive-load failure trigger from the new PROTOCOL.md §"Coordinator Trigger Classification"; GPT was consulted and routed the work to Claude as design specialist |

---

## Who's who right now

| Role | Agent | What they're doing |
| --- | --- | --- |
| Designer (this turn) | Claude Code / Anthropic / architect-class | Wrote the dashboard redesign in response to GPT's routing |
| Verifier (next) | Codex / OpenAI / architect-class | Checks file scope, self-contained HTML, no-touch discipline |
| Coordinator | GPT-5.5 Pro / OpenAI / advisor-class | Diagnosed the original UX failure, routed the work to Claude, will judge usability after Codex verifies |
| Approver | Sami | Vision / priority / risk / taste. Decides whether to push the redesign or revert. |
| Source of truth | Repo (`COLLAB.md` authoritative) | This dashboard is a view |
| Diversity | strong | 3-way: Anthropic + OpenAI + OpenAI; 3 specializations: build, audit, coordinate |

---

## What changed in this redesign (priority recommendations from the critique)

- **Paste-TO-WHOM on every action button.** Button labels now say "Paste to
  Codex" / "Paste to GPT-5.5 Pro" explicitly, with a small hint about what
  that agent will do.
- **Ask-GPT is a first-class above-the-fold button** (purple to distinguish
  from the primary green). Not buried in collapsed details anymore.
- **Role-flow strip near the top.** Shows "Claude designed → Sami sends to
  Codex → Codex verifies → Sami + GPT judge → Push if good" with the current
  step highlighted. Resolves "where am I in the loop?"
- **h1 is plain language.** "Get Codex to verify the new dashboard" instead
  of "Recommended: Push E6-B + E6-B-FIX-001". Internal turn IDs moved to
  provenance details.
- **"Why" is one block** in a highlighted box, not a wall of jargon.
  Technical justification lives in details.
- **Coordinator Trigger surfaced contextually.** Mentioned in the small
  route info line, not as a big chip competing with action buttons.
- **Agent payload labeled as agent payload.** Moved into a collapsed details
  panel labeled "What gets pasted to Codex" with a payload-label explaining
  the recipient and what they'll do. Sami doesn't have to read the bash
  commands to know what to do.
- **Auto-expand on copy**: clicking any copy button auto-opens the
  collapsed details so the user sees what they're copying. Preserves "only
  visible text" constraint (text becomes visible at the moment of copy).
- **Color-coded action tiers**: primary (mint green = accent), GPT (purple
  = external advisor), tertiary (gray outline = no-op). Distinct visual
  weight matches the distinct semantic meaning.

---

## Technical packet

- Latest pushed baseline: `dbb9172 E6-B: codify GPT coordinator and trigger
  classification`.
- E6-DASH-001 is a Claude-led dashboard UX redesign in response to Sami's
  repeated "still confusing" feedback after 5 dashboard iterations. GPT
  routed the work to Claude as design specialist (recorded in the
  E6-DASH-001 turn note's coordinator input section).
- Changed files (combined for any future push - 4 files): DASHBOARD.html
  (full rewrite), DASHBOARD.md (parallel rewrite), COLLAB.md (handoff
  update), E6-DASH-001 turn note (new).
- Required script check for this turn: `alert-state.sh` ran and left the
  working tree byte-identical (pre/post `git status --short
  --untracked-files=all` diff empty).
- **Independent self-contained HTML check**: grep for external API patterns
  returns exactly one match (the legitimate
  `navigator.clipboard.writeText(target.innerText)` for copy buttons);
  1 inline `<script>`, 1 inline `<style>`, 0 `<link>` tags.
- Copy buttons auto-expand parent details before copying, ensuring only
  visible text is copied (constraint preserved).
- No new CSS frameworks, no new fonts beyond system stack, no JavaScript
  libraries.

---

## No-touch list

E6-DASH-001 authorized DASHBOARD.html + DASHBOARD.md + COLLAB.md edits + new
E6-DASH-001 turn note. All four touched as expected.

Otherwise no `PROTOCOL.md`, `alert-state.sh`, `kit/v1/*` templates, root
README/AGENTS/CLAUDE, `docs/`, product/runtime files, pilot repo, or live
Open Mic Colorado touch.

No reflections, improvements, advisor-notes, `.mcp.json`, Notion, NanoClaw,
CommonGround, plugin/config files, or generated secret files.

No automation, model calls, OpenAI API setup, MCP/plugins, bridges, cron,
timers, webhooks, launch agents, global config, staging, commit, push,
branch, or PR (beyond any future Sami per-push authorization).

---

_✦ POLARIS · for the human at the helm_
