# Strategy - Polaris And The Governance Protocol

_Status: E6-STRATEGY-001 local strategy alignment artifact._

_This is not enforced protocol. `PROTOCOL.md` governs. `OPERATING-MODEL.md`
explains current architecture. `COLLAB.md` carries current handoff state._

## 1. Current Thesis

Polaris is the dashboard / reference cockpit. The broader thing is the
governance protocol / harness. Formal naming for that broader thing remains
deferred.

The protocol is the product thesis. Polaris demonstrates it. `kit/v1` is the
adoption path for trying the protocol in other repos.

The strategic thesis:

> We do not compete with runtime, IDE, or orchestration vendors. We define a
> governance contract those substrates could implement against.

That boundary matters. LangGraph, LangSmith, Fleet-style agents, Cursor,
Windsurf, CodeLayer, HumanLayer, CrewAI, AutoGen, ADK, NanoClaw, and future
agent platforms may provide useful execution, tracing, transport, or
developer-workspace surfaces. The differentiator here is not another runtime.
It is auditable coordination and approval discipline across different model
families.

The current working role model remains:

```text
GPT coordinates.
Codex builds.
Claude audits.
Sami approves.
Repo records the trail.
Polaris shows the next action.
```

The strategy should be open-source-first unless evidence later says otherwise.
Open-source-first does not foreclose later B-corp services, nonprofit/spec
governance, commercial support, or compliance/audit tooling. It preserves the
largest option set while the protocol is still being proven.

## 2. What This Is / Is Not

What this is:

- A governance protocol for human-supervised multi-agent work.
- A human role cockpit showing what Sami should do next.
- A repo-visible evidence layer.
- Exact approval discipline.
- Cross-model role separation.
- An Outcome Circle boundary protocol.
- Anti-sycophancy critique discipline.
- A reference implementation in one repo.
- A kit path for adoption experiments.

What this is not:

- A hosted agent runtime.
- An agent scheduler.
- An integration marketplace.
- A tracing backend.
- A model wrapper.
- A full agent IDE.
- A LangGraph / LangSmith competitor.
- A Cursor / Windsurf / CodeLayer competitor.
- A ClickUp-style workspace OS.

The key line:

```text
Polaris is the cockpit. The protocol is the governance contract.
```

Polaris should stay useful and serious, but it should not absorb every
possible runtime or IDE feature. It should show the next safe action, not
become the system that performs all actions.

## 3. Three-Phase Governance Method

The reusable method is stronger than the dashboard name or current harness
shape. It has three phases.

### Pre-Build: Convergence

Purpose: converge before work begins.

Current pattern:

- GPT frames or synthesizes.
- Codex reviews as builder / co-architect.
- Claude audits as auditor / co-architect.
- Sami decides.
- Disagreements are named before implementation starts.

This phase is active in the strategy work itself. Sami asks for a view; GPT,
Codex, and Claude each inspect the framing; refinements are captured before
scope is released. That is the pre-build method.

### During-Build: Outcome Circle

Purpose: let builder and auditor work inside exact scope without Sami routing
every micro-step.

Current pattern:

- Sami approves an exact Outcome Packet.
- Builder works inside allowed files and no-touch boundaries.
- Auditor grades against explicit pass evidence.
- Stop conditions call back GPT or Sami.
- No scope expansion occurs inside the circle.
- Rubric satisfaction is evidence, not approval.

This is the most formally codified phase today.

### Post-Build: Exit Synthesis

Purpose: learn before claiming success.

Current pattern:

- Evidence is reviewed.
- Result state is named.
- Lessons are captured.
- Bootstrap counter is updated or explicitly not updated.
- Claims are limited to what the evidence supports.

E6-OC-001 demonstrated why this matters. The mirror check passed, but GPT exit
synthesis correctly classified it as Circle 0.5 / pilot observed, not a fully
compliant bootstrap circle.

The three-phase method is the broader reusable governance pattern. Outcome
Circles currently cover the during-build phase most explicitly. Pre-build and
post-build are partially demonstrated and should remain lightweight until more
evidence justifies additional protocol.

## 4. Differentiator

The differentiator is:

```text
Auditable coordination and approval discipline across different model families.
```

Breakdown:

- Coordinator / builder / auditor / approver roles are separate.
- Exact approval text is required for scope, commit, push, and completion.
- Repo-visible turn notes preserve evidence and decisions.
- Model consensus is not approval.
- Auditor pass is not approval.
- Rubric satisfied is not approval.
- Human Role Cue makes the human's current role explicit.
- Outcome Circle entry and exit are bounded by protocol.
- Bootstrap rule requires GPT at entry and exit until two fully compliant
  circles complete and are reviewed.
- Anti-sycophancy discipline requires real critique or explicit failure-mode
  clearance.
- Git remains the source-of-truth layer until a later explicit change.

This combination is the part to protect. Runtime platforms can execute agents.
IDEs can host coding sessions. Observability products can trace model calls.
Workspace platforms can organize tasks. The governance contract says what the
agents are allowed to do, what evidence they must leave behind, when the human
is needed, and what never counts as approval.

## 5. Build For Smarter Future Agents

The protocol should be capability-based, not a wrapper around today's model
interfaces.

Current examples:

- GPT-5.5 Pro as coordinator / outcome architect.
- Codex as builder / implementer / investigator.
- Claude Code as auditor / critic / verifier.
- Claude Design as design specialist.
- Sami as approver / priority / risk / taste.

Future agents may:

- Wake each other.
- Self-route.
- Write to repos.
- Invoke tools.
- Run long tasks.
- Operate across multiple systems.
- Generate audit-ready prose that looks persuasive.
- Communicate through channels not visible in repo files.

The protocol is designed to survive model churn, but it currently embeds
assumptions about today's model capabilities. Those assumptions must be
revisited as agents become more capable.

Smarter-agent threat model:

- Hidden side channels bypass repo-visible state.
- Tool use bypasses approval boundaries.
- Cross-repo data leakage occurs through shared context or tools.
- Synthetic audit text becomes indistinguishable from genuine independent
  verification.
- Agent scale exceeds human readability of turn notes.
- Remote-system writes occur outside Git review.
- Agent coordination happens outside repo-visible artifacts.
- Builder and auditor share blind spots or collude through model similarity,
  shared prompts, or over-alignment to the last speaker.

The answer is not to build a giant runtime first. The answer is to keep the
invariants explicit:

- Approval remains human-only.
- Operational state must be repo-visible.
- Independent review must be evidenced, not asserted.
- Stop conditions must call back the coordinator or Sami.
- Transport cannot become governance.

## 6. Lessons From Existing Products

This is not a vendor survey. It is a compressed lesson map.

### LangGraph / LangSmith / Fleet-Style Runtimes

Lesson: runtime state, traces, interrupts, checkpoints, A2A, templates,
integrations, evaluators, and Studio-style debugging are valuable substrate
capabilities.

Conclusion: do not homebuild a full runtime now.

Governance implication: the protocol should be substrate-compatible, not
substrate-dependent. LangGraph-class systems can run workflows; Polaris-class
governance can define when work is allowed, when it stops, what evidence is
required, and who can approve.

### Cursor / Windsurf / CodeLayer

Lesson: coding-agent IDEs, sessions, worktrees, parallel workers, and
developer cockpit surfaces are important execution surfaces.

Conclusion: do not compete with them first.

Governance implication: the protocol should clarify role, scope, evidence,
handoff, and approval around those tools.

### ClickUp / Workspace AI

Lesson: workspace context, task surfaces, and team coordination matter.

Conclusion: avoid becoming a workspace OS.

Governance implication: preserve repo-visible outcomes and approval
boundaries even when tasks originate in another system.

### CrewAI / AutoGen / ADK

Lesson: multi-agent orchestration patterns are converging around roles,
handoffs, tools, and evaluators.

Conclusion: do not re-create broad orchestration frameworks.

Governance implication: codify the approval and evidence layer those
frameworks often leave implicit.

### NanoClaw / CommonGround

Lesson: transport, approval-card, preservation, ledger, and durable-record
patterns are relevant.

Conclusion: evaluate as future substrate or prior art, not the default control
plane.

Governance implication: transport cannot become governance. Git and
source-of-truth surfaces remain primary unless explicitly changed.

### Our Own Convergence

Lessons already observed:

- The third model caught structural gaps Claude/Codex missed.
- The auditor caught a real dashboard regression before merge.
- The bootstrap rule constrained behavior immediately.
- E6-OC-001 proved a tiny objective mirror check can be run through
  builder/auditor evidence.

Conclusion: the discipline is already doing real work, but it is not proven at
scale.

## 7. What We Borrow / What We Avoid

Borrow narrowly:

- Interrupts become Sami/GPT callback conditions.
- Evaluators become auditor rubrics.
- Traces become turn notes and evidence packets.
- Checkpoints become Git commits, PRs, and turn-note snapshots.
- Studio/cockpit ideas become minimal Polaris state display.

Avoid for now:

- Hosted runtime.
- Scheduler.
- Slack / Gmail / Calendar / Docs integration layer.
- Visual graph editor.
- Tracing backend.
- Deployment platform.
- Model marketplace.
- Agent memory system.
- API-backed GPT coordinator.
- NanoClaw transport integration.
- LangGraph runtime integration.
- Advisor-notes path unless separately scoped.

The borrowed-concept list must stay smaller than the differentiator. If the
project starts borrowing every runtime feature, it becomes an underpowered
runtime instead of a governance protocol.

## 8. Minimal Dashboard, Serious Governance

Polaris should remain minimal, directional, and human-role-aware.

It should show:

- Current human role.
- Paste target.
- Approval / courier / Ask-GPT distinction.
- Source-of-truth warning.
- Snapshot lifecycle.
- One primary recommendation.

It should not show by default:

- Real-time graph topology.
- Full traces.
- Runtime execution detail.
- Long audit logs.
- Integration state.
- Agent marketplace surfaces.
- Everything an IDE already shows better.

The dashboard is a reference cockpit for the governance protocol, not the
product by itself. It proves that the human can be placed in the right role at
the right time without reading a wall of terminal or turn-note text.

The line between cockpit and IDE:

- Polaris shows current handoff state and approval surface.
- Polaris does not run agents, manage worktrees, display full traces, or host
  the runtime.

## 9. Current Evidence And Limits

Evidence actually shipped:

- Human Role Cue landed in Polaris.
- Outcome Circle bootstrap rule landed.
- Auditor caught a real Polaris regression before merge.
- GPT caught prior coordinator and classifier gaps.
- E6-OC-001 satisfied a small mirror-verification rubric.
- E6-BRAND-001 clarified naming boundaries.
- The repo has multiple merged governance PRs and a clean pattern of scoped
  turn notes, no-touch verification, and source-of-truth warnings.

Evidence limits:

- E6-OC-001 is Circle 0.5 / pilot observed, not fully compliant Circle 1.
- Bootstrap counter remains 0 of 2 fully compliant circles.
- Observed pilot counter is 1.
- Burden reduction magnitude is unproven.
- Autonomy without Sami as transport is unproven.
- Subjective rubric grading is unproven.
- Behavior under serious Claude/Codex disagreement is unproven.
- Product/runtime task safety is unproven.
- Cross-repo rollout is unproven.

Claim discipline:

- We can say the protocol is promising.
- We can say it caught real problems in this harness.
- We can say it has a coherent differentiator.
- We cannot yet say it reduces burden by a measured amount.
- We cannot yet say it generalizes to teams, regulated environments, or
  production agent swarms.
- We cannot yet say it is an industry breakthrough.

The honesty is part of the product.

## 10. Market / Mission Positioning Fork

Open-source reference spec is the best starting shape.

This preserves future paths:

- Developer-tools / open-source project.
- B-corp commercial services.
- Nonprofit / foundation / spec governance.
- Compliance / audit / governance tooling.

Do not choose enterprise/compliance buyer shape prematurely. Keep compliance
and audit positioning as viable later pivots, but do not force the current
harness into enterprise product theater before the protocol is proven.

Personal mission and open-source values are relevant. They shape why this
should be built carefully and shared if it works. Strategy claims, however,
must remain evidence-grounded.

The starting posture:

```text
Spec first.
Reference cockpit second.
Commercial paths later.
```

If the protocol fails to generalize, a clear negative result is still useful:
it can show which governance assumptions broke and why.

## 11. Documentation And Evidence Bloat

Repo-visible evidence is part of the product.

Do not compact prematurely. Do not truncate important reasoning just to save
space. Do structure docs so future readers can skim.

Useful evidence traits:

- Attributed.
- Searchable.
- Path-specific.
- Connected to decisions.
- Honest about unknowns.
- Clear about what was accepted, rejected, or deferred.

Evidence bloat may become a real issue later. Treat it as an open question to
measure, not a current blocker.

Open question:

```text
How much repo-visible evidence is enough before humans or agents drown in records?
```

Possible future approaches, not authorized here:

- Summary indexes.
- Source breadcrumb tables.
- Retrospective templates.
- Evidence caps by artifact class.
- Archival conventions.
- Advisor-note paths.

No compaction machinery is recommended in this strategy turn.

## 12. Candidate Next Steps

These are candidates, not commitments. No implementation is authorized by this
section.

Candidate sequence:

1. Claude critiques E6-STRATEGY-001 for accuracy, scope, evidence discipline,
   naming boundary, and overclaiming.
2. Run a fully compliant Outcome Circle #1 with explicit full-packet entry,
   GPT at entry, builder review, auditor review, and GPT exit.
3. Run a second fully compliant circle.
4. After two fully compliant circles, hold a retrospective on whether the
   bootstrap rule can be relaxed for non-novel circles.
5. Consider an Outcome Packet template only if packet authoring proves painful.
6. Consider advisor-notes only if external input becomes hard to preserve in
   turn notes.
7. Consider runtime mapping only after manual governance mechanics prove useful.
8. Consider open-source/spec packaging only after at least two fully compliant
   circles and a retrospective.

Near-term restraint:

- Do not build runtime.
- Do not build integrations.
- Do not build automation.
- Do not build a graph editor.
- Do not build dashboard features beyond what the human needs for the next
  action.

## 13. Open Questions

- What is the formal name of the broader protocol?
- When does Polaris become open-source vs remain internal harness?
- Is likely positioning developer-tooling, governance/compliance, or team
  operating protocol?
- How much repo-visible evidence is enough before humans drown in records?
- How do we measure burden reduction honestly?
- Which smarter-agent threats require stronger controls first?
- Which runtime substrate, if any, should be evaluated first?
- What is the minimum dashboard that remains serious enough for adoption?
- Should the first public artifact be a spec, a kit, a demo repo, or a
  reference implementation?
- What belongs in `STRATEGY.md` vs `OPERATING-MODEL.md` vs `PROTOCOL.md`?
- When should the bootstrap counter move from observation to protocol change?

## Source Breadcrumbs

Primary repo artifacts:

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-BRAND-001-claude-naming-discovery.md`
- `.agent-handoff/turns/E6-OC-001-codex-protocol-mirror-verification-iter-1.md`
- `.agent-handoff/turns/E6-OC-001-claude-protocol-mirror-audit-iter-1.md`
- `.agent-handoff/turns/E6-OC-001-gpt-exit-synthesis.md`

User-provided strategy material:

- Codex strategy review.
- Claude strategy audit.
- GPT coordinator framing.
- Screenshots and commentary about LangSmith / Fleet-style surfaces.
- Discussion of docs bloat, open-source paths, and purpose-driven strategy.

## Operating Guardrail

This document is alignment, not authorization. It does not approve new files,
edits, commits, pushes, branches, PRs, integrations, model calls, automation,
runtime work, or public release.

Any implementation still requires exact Sami approval under `PROTOCOL.md`.
