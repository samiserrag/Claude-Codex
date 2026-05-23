# E6-C - Codex Operating Model Docs Lock

## Agent
Codex

## Phase
design / docs-lock

## Coordinator Trigger
- State: NEEDS_GPT
- Reason: operating-model architecture outside an approved outcome circle.

## Project Mode Estimate
- Dominant mode: Coordinator (~95%, agent heuristic estimate)
- Sami-decision-pending: ~5%
- Execution: ~0%
- Unknown: ~0%
- Reason: no approved outcome circle exists; this is architecture, roadmap,
  coordinator-preservation, and operating-model documentation work.

## Active Role Declaration
- Active role: builder/designer for the E6-C operating-model doc-lock.
- Authority limit: edit only `.agent-handoff/OPERATING-MODEL.md`,
  `.agent-handoff/COLLAB.md`, `.agent-handoff/DASHBOARD.md`,
  `.agent-handoff/DASHBOARD.html`, and this append-only E6-C turn note.
- Explicit non-authority: no `PROTOCOL.md` edit, no kit template edit, no
  `alert-state.sh` edit, no advisor-notes/reflections/improvements path
  creation, no notifier implementation, no automation, no model call, no API
  setup, no NanoClaw, no CommonGround, no MCP/plugin/bridge, no Notion, no
  cron/timer/webhook/launch agent/global config, no staging, no commit, no
  push, no branch, no PR, no pilot repo touch, no live Open Mic Colorado touch,
  and no product/runtime touch.

## External Coordinator Input: GPT-5.5 Pro

Sami routed the current GPT coordinator framing into E6-C and accepted the core
model:

```text
GPT coordinates. Codex builds. Claude audits. Sami approves. Repo records the trail.
```

Sami's current instruction added the Polaris role explicitly: Polaris shows the
next action but is not the coordinator.

Scribed GPT-5.5 Pro framing excerpt:

```text
Polaris is not the coordinator. Polaris is the cockpit.

The actual intended system is still:

GPT coordinates.
Codex builds.
Claude audits.
Sami approves.
Repo records the trail.
Polaris shows the next action.

For the rest of this project, the remaining work is not routine.
```

Structured summary of GPT's framing:
- The project is currently in a `NEEDS_GPT` architecture phase.
- The two-agent Claude <-> Codex loop must not drift into a closed loop with
  Sami as router.
- Polaris is the human control surface, not the coordinator or source of
  authority.
- Remaining work includes coordinator preservation, advisor/scribing,
  Polaris, notifications/wakeups, auto handoffs, outcome/rubric loops,
  cross-repo adoption, security/anti-sycophancy, and transport options.
- A durable roadmap/doc-lock is needed before further dashboard, notifier, or
  transport work.

Sami accepted:
- GPT should remain structurally present as coordinator/outcome architect.
- Codex remains builder / implementer / investigator.
- Claude remains auditor / critic / verifier.
- Sami remains approval / priority / risk / taste.
- Repo-visible docs should lock the model so context compaction does not erase
  it.
- Polaris is cockpit/control surface, not coordinator.

Sami left undecided:
- Whether advisor-notes should be created in a later turn.
- Whether the next implementation should prioritize Polaris Project Mode,
  advisor-notes, outcome-loop design, or another coordinator-preservation
  surface.
- Whether GPT remains ChatGPT/copy-paste long term or later becomes
  API/repo-backed.

Deferred:
- Outcome-loop mechanics.
- Advisor-notes path creation.
- Notification/wakeup implementation.
- NanoClaw or any transport layer review.
- API-backed GPT coordinator.
- Cross-repo rollout.

## Subagent Delegations

None. I did the inventory and synthesis directly from repo-visible source
files. The scope was broad but still tractable without read-only subagents, and
using none avoided extra coordination surfaces.

## Files Changed

- `.agent-handoff/OPERATING-MODEL.md`
  - Created as the durable operating-model reference updated only by
    authorized doc-lock turns.
  - Captures precedence, role model, major E5/E6 pivot timeline, Coordinator
    Trigger, Project Mode, Mode Confidence, Coordinator Decision Menu, Outcome
    Circle concept, research synthesis, Polaris, advisor/scribing, anti-
    sycophancy, security, cross-repo adoption, backlog, next three turns,
    explicit deferrals, and source breadcrumbs.
- `.agent-handoff/COLLAB.md`
  - Updated current handoff to E6-C and pointed next action to Claude critique.
- `.agent-handoff/DASHBOARD.md`
  - Refreshed Polaris as a snapshot for the E6-C Claude critique handoff.
- `.agent-handoff/DASHBOARD.html`
  - Refreshed existing Polaris copy/action content for the E6-C Claude critique
    handoff.
  - No CSS, buttons, scripts, collapsibles, mode panel, or structural dashboard
    additions were intended.
- `.agent-handoff/turns/E6-C-codex-operating-model-docs-lock.md`
  - Created this append-only turn note.

## Decisions / Deferrals

Locked now:
- `OPERATING-MODEL.md` exists as the durable architecture/reference doc.
- `PROTOCOL.md` remains enforced governance.
- `OPERATING-MODEL.md` may be more current before protocol codification, but
  `PROTOCOL.md` wins after codification.
- `COLLAB.md` remains current handoff state.
- Polaris remains view-only cockpit/control surface.
- The stable role model is GPT coordinator, Codex builder, Claude auditor,
  Sami approver, repo source of truth.
- Project Mode has four documented modes: Coordinator, Execution,
  Sami-decision-pending, Unknown.
- Outcome Circle entry requires exact phrase `Approved Outcome Circle:
  <packet name>` plus inline Outcome Packet.

Deferred:
- `PROTOCOL.md` mode codification.
- Kit propagation.
- Outcome-loop mechanics and rubric/grader semantics.
- Advisor-notes path creation.
- Notifier/wakeup implementation.
- NanoClaw/transport review.
- API-backed GPT coordinator.
- Cross-repo rollout.

## Verification

Pre-edit verification:
- `git status --short --untracked-files=all` was clean before E6-C edits.

Post-edit verification:
- `git status --short --untracked-files=all` shows only the five allowed E6-C
  files:
  - `M .agent-handoff/COLLAB.md`
  - `M .agent-handoff/DASHBOARD.html`
  - `M .agent-handoff/DASHBOARD.md`
  - `?? .agent-handoff/OPERATING-MODEL.md`
  - `?? .agent-handoff/turns/E6-C-codex-operating-model-docs-lock.md`
- `git diff --check` passed with no output.
- `git diff --name-only` shows only the three tracked approved files; the
  operating-model doc and E6-C turn note are new/untracked, as expected.
- Scoped no-touch diff/status check against `.agent-handoff/PROTOCOL.md`,
  `.agent-handoff/tools/alert-state.sh`, `kit/v1`, root README/AGENTS/CLAUDE,
  `docs`, `.mcp.json`, `.claude`, `generated`, and `trust/event` returned no
  output.
- `find .agent-handoff -maxdepth 1 -type d -name advisor-notes -o -name reflections -o -name improvements`
  returned no output; no advisor-notes/reflections/improvements path was
  created.
- Static HTML self-containment check found no external CSS/JS, no HTTP(S)
  URLs, no storage APIs, no network APIs, and no server requirement patterns.
  The HTML still contains one inline `<style>` block and one inline `<script>`
  block.
- Copy buttons still use visible `<pre>` payloads and
  `navigator.clipboard.writeText(target.innerText)` after auto-expanding any
  closed `<details>` ancestor.
- No `PROTOCOL.md`, kit template, `alert-state.sh`, advisor-notes/
  reflections/improvements path, automation, model/API setup, NanoClaw,
  CommonGround, MCP/plugin/bridge, Notion, cron/timer/webhook/launch agent, or
  global config file was created or modified.
- No command was run with the live Open Mic Colorado repo or pilot repo as the
  working directory, and all changed paths are confined to the allowed
  Claude-Codex E6-C files.

Not run / not done:
- No tests; this was docs/static dashboard text only.
- No browser verification; E6-C did not change app/runtime behavior and did
  not authorize a server.
- No `alert-state.sh` run; E6-C did not authorize script execution.
- No subagents used.
- No staging, commit, push, branch, or PR.

## Handoff

Next actor: Claude Code.

Requested action: critique E6-C as auditor/advisor for doc-lock fidelity,
scope compliance, source breadcrumbs, Project Mode / Outcome Circle clarity,
Polaris snapshot limits, and no-touch compliance.

Hard stop after E6-C. No staging, commit, push, branch, PR, protocol edit, kit
edit, alert-state edit, advisor-notes/reflections/improvements path creation,
outcome-loop implementation, notifier, automation, model/API setup,
NanoClaw/CommonGround/Notion, MCP/plugin/bridge, cron/timer/webhook/launch
agent/global config, pilot repo, live Open Mic Colorado, or product/runtime
work is authorized.
