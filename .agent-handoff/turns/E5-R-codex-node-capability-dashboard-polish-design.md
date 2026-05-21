# E5-R Codex Node Capability Dashboard Polish Design

## Authorization

Sami accepted E5-Q as a successful live dashboard adoption test and authorized
E5-R as a design-only node-capability, dashboard polish, PR-consolidation, and
tier/subagent governance turn.

## Scope

Design only. Files changed in this turn:
- `.agent-handoff/turns/E5-R-codex-node-capability-dashboard-polish-design.md`
- `.agent-handoff/COLLAB.md`

No `PROTOCOL.md`, kit template, `DASHBOARD.md`, `alert-state.sh`, root doc,
reflection/improvement path, product/runtime file, pilot repo, live Open Mic
Colorado file, automation, runtime, model call, CommonGround, MCP/plugin,
bridge, cron, timer, webhook, global config, staging, commit, push, branch, or
PR is authorized by E5-R.

## Tooling Near-Miss

While preparing E5-R, Codex accidentally invoked the Notion/plugin install
flow. The install flow was not completed:

```text
completed=false
user_confirmed=false
```

No Notion plugin was installed through that flow, and Notion/plugin tooling was
not used for E5-R. E5-R remains design-only. E5-R allowed files remain only:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-R-codex-node-capability-dashboard-polish-design.md`

Repo-side verification for this near-miss is recorded in the Verification
section below.

## Evidence Basis

- USER SAID: E5-R must be design-only and cover the four-property node model,
  external advisor and scribe rules, vendor diversity spectrum, architect
  subagent delegation, co-architect per-turn role, dashboard additions,
  freshness triggers, PR-consolidation guidance, explicit deferrals, and E5-S
  implementation plan.
- FILE VERIFIED: `PROTOCOL.md`, `COLLAB.md`, live `DASHBOARD.md`,
  `alert-state.sh`, E5-Q Codex note, E5-Q Claude critique, kit README, kit
  PROTOCOL template, kit DASHBOARD template, and reflection proposal template.
- FILE VERIFIED: E5-Q critique at commit `172d563` says the live dashboard
  works but lacks a dedicated "What Sami Pastes Next" field.
- INFERENCE: E5-R should be implemented later as concise protocol/template
  changes, not as a live dashboard edit in this design turn.
- UNKNOWN: Future GPT or other advisor tooling may later gain repo write
  capability; this design treats capability as declared per turn, not fixed
  forever.

## 1. Node Capability And Authority

A node should be described by four independent properties:

1. Write capability
2. Operational role
3. Approval capability
4. Tier

Write capability means whether the node can directly create or modify
repo-visible artifacts in the current workspace. Examples: Codex and Claude
Code can write repo files when authorized; GPT-5.5 Pro via chat cannot write
repo files unless a separate connector or scribe path exists; `alert-state.sh`
is read-only.

Operational role means the node is currently assigned to perform repo-visible
work in a turn, such as builder, auditor, advisor, coordinator, scribe, or
handoff writer. Operational work must produce repo-visible output: a file
change, turn note, dashboard/COLLAB update, commit, or other authorized
artifact.

Approval capability means the ability to approve exact scope, files, risk,
priority, or transition from proposal to implementation. Sami alone has
approval capability. No model, subagent, script, green status, silence,
consensus, or "good idea" language grants approval.

Tier means the role-fit and discipline class for a node in a given turn:
architect-class, worker-class, or external-advisor. Tier is assigned or
declared per turn. It is not a permanent intelligence ranking.

Rules:
- Write capability does not imply operational role.
- Operational role is assigned per turn.
- Tier is assigned or declared per turn.
- Sami alone has approval capability.
- A node may hold multiple roles in the same turn or across consecutive turns,
  such as auditor plus advisor.
- When a node operates in multiple roles, the turn note must distinguish which
  output came from which role.
- Operational handoff state can be owned only by a repo-writing node acting
  inside an approved operational role.

## 2. External Advisor Rule

External advisors may provide synthesis, critique, strategy, prompts, technical
questions, and divergent opinions. Their output is non-operational until Sami
approves it or a repo-visible record captures it.

Sami may invoke external synthesis at any decision point. Frequency is Sami's
judgment, not a system constraint. The harness should not make GPT, Gemini, or
other external advisors mandatory for routine turns.

A repo-write-capable advisor may self-scribe an attribution note, but this does
not automatically make the advice operational. Self-scribed advisor notes
should use:

```text
.agent-handoff/advisor-notes/
```

Self-scribed advisor notes must not silently blend into operational turn notes.
Operational turn notes that incorporate advisor input must explicitly attribute
the source by file path or quoted block.

External advisor output can become operational in two ways:
- Sami approves exact action, files, and scope based on the advice.
- A repo-writing operational node records the advice and the accepted decision
  in `COLLAB.md`, `DASHBOARD.md`, a turn note, or another approved artifact.

## 3. Scribe Rule

If an advisor cannot write to the repo, Sami or a repo-writing node may scribe
the advisor output. The scribe must include:

- advisor name
- verbatim text in a code block, with no length cap
- structured summary
- what Sami accepted, rejected, or left undecided

Exceptions are allowed only for genuine non-text artifacts or unavailable
transient surfaces. The scribe must state the gap explicitly.

Do not truncate text to save storage or tokens. Storage growth is a later
management concern; truncation destroys provenance. Sami-as-scribe entries must
attribute the source advisor, not default to Sami. Unattributed records imply
repo-writing-node authorship and should be avoided.

Operational turn notes that incorporate advisor input must attribute the
advisor source by file path or quoted block. If a turn note only references a
summary without the source text, it should say where the source text lives or
state that the source text was unavailable.

## 4. Vendor Diversity Spectrum

Vendor diversity should be represented as a spectrum, not binary.

- Strong diversity: different model families, such as Anthropic, OpenAI,
  Google, Mistral, or Meta.
- Moderate diversity: different tiers, model sizes, versions, or runtimes
  within one family.
- Weak diversity: same model with different prompts, context, temperature, or
  role framing.

Stronger diversity catches more blind spots, especially in design, critique,
and milestone decisions. This is a guideline, not a hard rule. Sami may
override for speed, cost, tool availability, or trust.

Dashboard implication: show the selected diversity level for the current turn
next to the operational nodes. Example:

```text
Builder: Codex (OpenAI, architect) | Auditor: Claude Code (Anthropic, architect) | Diversity: strong
```

## 5. Tier Property And Subagent Delegation Rule

Tier should describe role fit and discipline-following capacity in the current
turn:

- Architect-class: high-discipline node that can own handoff state inside an
  approved turn, reason about scope, update turn notes, and verify final diff.
- Worker-class: lower-cost or lower-scope node used for bounded subtasks.
- External-advisor: out-of-loop synthesis, critique, strategy, or prompt
  drafting.

Examples that may date over time:
- Architect-tier examples: Claude Code, Codex CLI, GPT-5 Pro if repo-capable.
- Worker-tier examples: Haiku, GPT-mini-style models, Codex-mini-style models,
  Gemini Flash, deterministic scripts.
- External-advisor examples: GPT-5.5 Pro via chat, Gemini via chat, Claude web
  without repo write.

The tier classification is about role fit and observed discipline, not a fixed
model-intelligence ranking. Sami may classify any model into any tier based on
observed behavior.

Subagent delegation is architect-decided, not Sami-routed. Architect-tier nodes
may invoke worker-tier subagents within an authorized turn without separate
per-subagent approval when all conditions are met:

- Scope constraint: subagent task fits inside the turn's authorized scope.
- Review discipline: architect reviews output before incorporation.
- Attribution: turn note includes a `Subagent Delegations` section.
- No state ownership: subagents do not own `COLLAB.md`, `DASHBOARD.md`, turn
  notes, commits, pushes, or approvals.
- No approval inference: subagent output is advisory to the architect.

Worker subagents may perform scoped file edits only when those files are
already authorized for the parent architect's turn. The architect owns and
verifies the final diff.

Sami's routing role is at the turn boundary: which architect-tier node gets the
turn, with what authorization, what no-touch list, and optionally what cost
ceiling. Sami does not route within turns.

## 6. Co-Architect Per-Turn Role

Two architect-tier nodes may be assigned as parallel designers for one turn.
Default initiation should be Sami assigning them at the turn boundary for
high-stakes or expensive decisions.

An architect may recommend co-architecture for the next turn, with rationale,
but should not create a parallel co-architect turn without Sami routing.

Reconciliation happens in a downstream synthesis turn note with explicit
attribution. The reconciliation turn note must include:

```text
Convergence Status: converged | synthesized | divergent | escalated
```

Meanings:
- converged: both architects independently recommended materially the same
  next action.
- synthesized: differences were combined into one coherent recommendation.
- divergent: unresolved disagreement remains.
- escalated: human decision, third-model review, or more evidence is needed.

No turn proceeds to implementation while convergence status is divergent or
escalated without explicit Sami routing decision.

Default remains sequential design plus critique. Co-architecture is opt-in when
blind-spot coverage is worth the cost.

## 7. Dashboard Additions

E5-Q validated the dashboard as a fast current-state view but showed the
highest-value missing field: "What Sami Pastes Next." The kit dashboard
template should gain these fields in a future implementation turn:

### What Sami Pastes Next

Purpose: make the dashboard directly actionable.

Suggested shape:

```markdown
## What Sami Pastes Next

| Target | Prompt / action |
| --- | --- |
| Next repo actor | `{{PASTE_READY_PROMPT_OR_NONE}}` |
| External advisor | `{{QUESTION_FOR_EXTERNAL_ADVISOR_OR_NA}}` |
| Approval text | `{{EXACT_APPROVAL_TEXT_OR_NA}}` |
```

If no paste is needed, say `No paste needed; hard stop until X`.

### External Advisor Input

Show whether an external advisor is involved and where the attributed text
lives.

```markdown
## External Advisor Input

- External advisor needed: `{{yes | no}}`
- Advisor: `{{GPT-5.5 Pro | Gemini | Claude web | other | N/A}}`
- Status: `{{not requested | local chat only | scribed | incorporated | not needed}}`
- Attribution path or quoted block: `{{path_or_NA}}`
```

### Current Operational Nodes

Keep this concise. Full capability cards belong in `PROTOCOL.md`, not the
dashboard.

```markdown
## Current Operational Nodes

Builder: `{{name}}` (`{{vendor}}`, `{{tier}}`)
Auditor: `{{name}}` (`{{vendor}}`, `{{tier}}`)
Diversity: `{{strong | moderate | weak | N/A}}`
Next repo actor: `{{Codex | Claude Code | Sami | none}}`
External advisor needed: `{{yes | no}}`
```

### Subagent Delegations This Turn

Dashboard should summarize subagent delegation as count plus brief summary:

```markdown
Subagent delegations this turn: `{{0 | count}}` - `{{brief_summary_or_none}}`
```

Full delegation details live in the turn note.

## 8. Freshness Trigger Update

Add explicit freshness triggers for the new dashboard fields:

- What Sami Pastes Next changed.
- External Advisor Input changed.
- Current Operational Nodes changed.
- Subagent delegations changed.

Use explicit triggers for now. If trigger checking becomes a maintenance
burden, flag future consolidation rather than consolidating prematurely.

## 9. Adopter PR-Consolidation Guidance

Design a short `kit/v1/README.md` addition for CI/GitHub Actions repos:

```markdown
## PR Consolidation In CI-Heavy Repos

For repos with expensive CI or many GitHub Actions checks, prefer one PR per
experiment arc rather than one PR per turn. Use a draft PR while the arc is in
progress. Per-turn `.agent-handoff/` updates may accumulate on one branch.
Mark the PR ready only at a consolidation point, then squash or batch at the PR
boundary when appropriate.
```

This is adopter guidance, not a rule for every repo. It should not weaken
per-turn commit discipline in repos where direct commits to `main` are the
chosen workflow.

## 10. Explicit Deferrals

- `COLLAB.md` compaction: not pursued now; no hard caps.
- Advisor transcript storage strategy: future separate design turn if needed.
- Per-note advisor storage location: `.agent-handoff/advisor-notes/`, as
  designed in Section 2.
- Bulk advisor transcript strategy means indexing, search, archive, or summary
  policy across many advisor notes; it is distinct from the per-note location.
- Preferred future strategy, if needed, is the same
  `.agent-handoff/advisor-notes/` subdirectory inside the main repo because
  most coding agents operate one repo at a time.
- Advisor transcript storage strategy trigger: revisit when a transcript
  becomes repeatedly referenced across operational turns, or when Sami judges
  advisor transcript search/reuse to be painful.
- `alert-state.sh` mirroring: defer until pause-and-observe produces evidence.
- CommonGround, MCP, and model-calling triage: not part of E5-R.
- Additional automation, notifications, launch agents, cron, timers, and
  webhooks: not part of E5-R.

## 11. E5-S Implementation Plan

Likely files for E5-S:

- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `kit/v1/.agent-handoff/prompts/reflection-proposal-template.md`
- `kit/v1/README.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-S-codex-node-capability-dashboard-polish-implementation.md`

Recommended implementation sequence:

1. Add concise node capability/authority rules to live `PROTOCOL.md`.
2. Mirror the same concise rules into the kit PROTOCOL template.
3. Add dashboard template fields for "What Sami Pastes Next", External Advisor
   Input, Current Operational Nodes, and Subagent Delegations.
4. Add freshness triggers for the new dashboard fields.
5. Add a short reflection-template reminder to attribute external advisor input
   by file path or quoted block.
6. Add the PR-consolidation README note.
7. Update `COLLAB.md` handoff and create the E5-S turn note.

Explicit no-touch list for E5-S:

- live `.agent-handoff/DASHBOARD.md`, unless Sami explicitly includes it
- `.agent-handoff/tools/alert-state.sh`
- `.agent-handoff/reflections/`
- `.agent-handoff/improvements/`
- root `README.md`, `AGENTS.md`, `CLAUDE.md`
- docs unless explicitly authorized
- product/runtime files
- live Open Mic Colorado files
- open-mic-colorado-agent-pilot files
- CommonGround clones/files
- automation, notification/wake runtime, model calls, MCP/plugins, bridges,
  Hermes, Claude Dreams, timers, cron, webhooks, launch agents, global config
- generated/local/secret files and trust/event/private-key files

Decision on `alert-state.sh`: keep it untouched until pause-and-observe
produces evidence. E5-S should not mirror, template, chmod, or extend the
script.

Pre-drafted exact approval text:

```text
Approved:

1. Accept E5-R as a successful node-capability + dashboard polish design turn.

2. Authorize E5-S as a narrow implementation of the E5-R design.

Scope:
- Implement concise node capability and authority rules.
- Add dashboard template fields for What Sami Pastes Next, External Advisor
  Input, Current Operational Nodes, and Subagent Delegations.
- Add explicit freshness triggers for those fields.
- Add concise advisor attribution guidance to the reflection proposal template.
- Add short PR-consolidation guidance to kit/v1/README.md.
- Update COLLAB.md handoff fields.
- Create one append-only E5-S turn note.
- Keep alert-state.sh untouched until pause-and-observe produces evidence.

Allowed files:
- .agent-handoff/PROTOCOL.md
- kit/v1/.agent-handoff/PROTOCOL.md.template
- kit/v1/.agent-handoff/DASHBOARD.md.template
- kit/v1/.agent-handoff/prompts/reflection-proposal-template.md
- kit/v1/README.md
- .agent-handoff/COLLAB.md
- .agent-handoff/turns/E5-S-codex-node-capability-dashboard-polish-implementation.md

Do not edit:
- .agent-handoff/DASHBOARD.md
- .agent-handoff/tools/alert-state.sh
- .agent-handoff/reflections/
- .agent-handoff/improvements/
- root README.md / AGENTS.md / CLAUDE.md
- docs/
- product/runtime files
- live Open Mic Colorado files
- open-mic-colorado-agent-pilot files
- CommonGround clones/files
- automation, notification/wake runtime, model calls, MCP/plugins, bridges,
  Hermes, Claude Dreams, timers, cron, webhooks, launch agents, global config

Verification:
- git status --short --untracked-files=all before and after.
- git diff --check.
- Confirm only allowed E5-S files changed.
- Confirm alert-state.sh was not modified.
- Confirm live DASHBOARD.md was not modified.
- Confirm no live reflection/improvement paths were created.
- Confirm no live Open Mic Colorado or pilot repo touch.

Hard stop after E5-S and hand off for Claude critique.
```

## Verification

Completed verification:
- `git status --short --untracked-files=all` before E5-R edits: clean.
- `git status --short --untracked-files=all` after E5-R edits showed only:
  `.agent-handoff/COLLAB.md` and
  `.agent-handoff/turns/E5-R-codex-node-capability-dashboard-polish-design.md`.
- `git diff --check`: pass.
- Confirmed only allowed E5-R files changed.
- Confirmed no `PROTOCOL.md`, kit template, live `DASHBOARD.md`, or
  `alert-state.sh` edits.
- Confirmed no `.mcp.json` exists in the repo.
- Confirmed no Notion-related file exists in the repo.
- Confirmed no plugin, bridge, MCP, or config file was created or modified in
  the repo.
- Confirmed no install commands were run by Codex.
- Based on the observable plugin-flow result (`completed=false`,
  `user_confirmed=false`), no global config change was completed through the
  accidental Notion/plugin install flow.
- Confirmed no live Open Mic Colorado touch.
- Confirmed no pilot repo touch.
- Confirmed no automation, installs, CommonGround, MCP, bridges, plugins,
  timers, cron, webhooks, model calls, or global config changes in repo state.

Browser verification: N/A; no browser used.
Tests: N/A; design-only markdown/handoff turn.

## Handoff

Next agent: Claude.

Requested action: critique E5-R as design-only. Verify that the design covers
the required node capability, external advisor, scribe, diversity, tier,
subagent, co-architect, dashboard, freshness, PR-consolidation, deferral, and
E5-S planning sections without implementing them.

Hard stop after E5-R. No E5-S implementation, staging, commit, push, branch,
PR, protocol/template/dashboard/script edit, automation, model call, MCP,
CommonGround, cron/timer/webhook, global config, live Open Mic Colorado, pilot
repo, product/runtime, reflection/improvement path, or alert-state change is
authorized by this turn.
