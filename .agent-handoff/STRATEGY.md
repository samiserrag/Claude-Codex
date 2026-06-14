# Strategy - Polaris And The Governance Protocol

_Status: E6-STRATEGY-001 local strategy alignment artifact._

_This is not enforced protocol. `PROTOCOL.md` governs. `OPERATING-MODEL.md`
explains current architecture. `COLLAB.md` carries current handoff state._

> **Read this first (the postmortem reframe).** This document was written while
> the project still believed its governance scaffolding was the product. It was
> dogfooded for ~1 month, and the honest result is that **most of the machinery
> below turned out to be theatre** — see the front-door
> [`README.md`](../README.md) and the canonical statement in
> [the whitepaper](../docs/verification-theater-in-ai-agent-work.md). What
> survived is small: (a) a handful of deterministic, **human-approved gates** a
> human can read in full, run on inputs they choose, and confirm by the
> *consequence* (not the printed verdict) — see [`gates/`](../gates/); and (b) a
> human who refuses to trust the agent's self-report. The **Decision Cockpit**
> (Polaris), the boundary doc (renamed from "envelope" to **operating limits**),
> the verification taxonomy, and the cross-vendor convergence ritual are
> preserved here as **graveyard** — tried, documented, and reported as
> tried-and-found-theatre, not as a working solution. The positioning prose below
> is kept for the historical record; weight it against this reframe and §15.
>
> **Two renames apply throughout (a logical pivot from what the dogfood taught,
> not a rewrite of history):** the boundary doc "envelope" is now **operating
> limits**; the small mechanical checks are **human-approved gates**
> ("human-approved" = a competent human *read and approved* the check, not merely
> ran it; a gate can fail two ways, too tight or too loose). The one rule that
> survived: **`satisfied` is not approval.**

## 1. Current Thesis

> **Reframed by the postmortem.** This section originally read "the protocol is
> the product thesis." After dogfooding, the honest product thesis is narrower:
> **the deterministic floor survived; the broader protocol is largely graveyard.**
> The surviving claim is that load-bearing claims must terminate at a substrate a
> human can check, and irreversible consequences must terminate at exact human
> approval — and that the impressive scaffolding (cockpit, operating-limits
> doc-as-control, convergence ritual) did not hold. Polaris is preserved as a
> demonstration of *what laundered agent decisions into a human-signable form*,
> not as a working oversight surface. The positioning below is kept for the
> record.

Polaris is the dashboard / reference cockpit, preserved as graveyard evidence
(see the reframe above and §8). The broader thing is the governance
protocol / harness. Formal naming for that broader thing remains deferred.

The protocol was the original product thesis; the dogfood result is that only the
deterministic floor survived (see [`gates/`](../gates/) and the whitepaper). `kit/v1`
is the adoption path — for the surviving floor, not the abandoned system.

The strategic thesis:

> We do not compete with runtime, IDE, or orchestration vendors. We define a
> governance contract those substrates could implement against.

That boundary matters. LangGraph, LangSmith, Fleet-style agents, Cursor,
Windsurf, CodeLayer, HumanLayer, CrewAI, AutoGen, ADK, NanoClaw, and future
agent platforms may provide useful execution, tracing, transport, or
developer-workspace surfaces. The differentiator here is not another runtime.
It is auditable coordination and approval discipline across different model
families.

The portable role model is:

```text
Coordinator frames.
Builder implements.
Auditor verifies.
Human approver decides.
Repo records the trail.
Polaris shows the next action.
```

Current local assignments are GPT-5.5 Pro as Coordinator, Codex as Builder,
Claude Code as Auditor, Claude Design as Design specialist, and a configured
human approver for approval. Those assignments are instance metadata, not fixed
protocol semantics.

The strategy should be open-source-first unless evidence later says otherwise.
Open-source-first does not foreclose later B-corp services, nonprofit/spec
governance, commercial support, or compliance/audit tooling. It preserves the
largest option set while the protocol is still being proven.

## 2. What This Is / Is Not

What survived the dogfood (the floor):

- Exact approval discipline — irreversible consequences terminate at exact human
  approval; `satisfied` is not approval.
- A repo-visible evidence layer where load-bearing claims reduce to a substrate a
  human can re-check.
- Human-approved gates: deterministic checks small enough to read in full
  (see [`gates/`](../gates/)).
- A human posture of refusing to trust the agent's self-report.

What this also was, now preserved as graveyard (tried-and-found-theatre, see §8
and the whitepaper):

- A governance protocol for human-supervised multi-agent work (most of the
  machinery did not hold).
- A human role cockpit (Polaris) showing what the human approver should do next —
  demoted: a dashboard that summarizes agent work for human approval, when the
  human cannot independently check the summary, launders agent decisions into a
  human-signable form.
- Cross-model role separation (useful for review, not a grounding control;
  cross-vendor diversity did not stop the fabrication incident).
- An operating-limits boundary protocol (formerly "envelope"; a boundary a human
  owns, not a control that holds on its own when enforced by agent attestation).
- Anti-sycophancy critique discipline.
- A reference implementation in one repo.
- A kit path for adoption experiments (the floor, not the abandoned system).

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
- The human approver decides.
- Disagreements are named before implementation starts.

This phase is active in the strategy work itself. The human approver asks for a
view; GPT, Codex, and Claude each inspect the framing; refinements are captured
before scope is released. That is the pre-build method.

### During-Build: Outcome Circle

Purpose: let builder and auditor work inside exact scope without the human
approver routing every micro-step.

Current pattern:

- The human approver approves an exact Outcome Packet.
- Builder works inside allowed files and no-touch boundaries.
- Auditor grades against explicit pass evidence.
- Stop conditions call back the Coordinator or the human approver.
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

Of this combination, the parts that survived the dogfood are the approval
invariants — exact approval text, "model consensus / auditor pass / rubric
satisfied is not approval," and human-owned consequences — plus repo-visible
evidence that reduces to a re-checkable substrate. The role-separation and
consensus-as-review pieces are useful for organizing work but are *not* grounding
controls (cross-vendor pairing did not prevent the fabrication incident; see
the whitepaper). Runtime platforms can execute agents. IDEs can host coding
sessions. Observability products can trace model calls. Workspace platforms can
organize tasks. The surviving governance contract says what counts as a
load-bearing claim, what substrate it must terminate at, when exact human
approval is required, and what never counts as approval.

## 5. Build For Smarter Future Agents

The protocol should be capability-based, not a wrapper around today's model
interfaces.

Current examples:

- GPT-5.5 Pro as coordinator / outcome architect.
- Codex as builder / implementer / investigator.
- Claude Code as auditor / critic / verifier.
- Claude Design as design specialist.
- Configured human approver for approval / priority / risk / taste.

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
- Stop conditions must call back the Coordinator or the human approver.
- Transport cannot become governance.

Honest limitation: this is a friction and transparency layer, not a strong
security layer and not a solution to AI alignment. It assumes mostly
cooperative agents. Smarter agents may learn to game visible rules,
attribution lines, meta-audits, or approval patterns. Cryptographic integrity
can help with record tampering, but it does not prove good judgment, honest
intent, or non-sycophantic behavior.

Human Decision Notes add a useful audit trail and a specific new risk:
sycophantic adaptation. Agents may read notes as context, but notes are
descriptive, not normative, until codified by an explicit protocol/doc-lock
turn. Agents should not pad evidence, soften audit thresholds, or add
boilerplate merely because prior notes revealed what the human liked or
disliked.

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

- Interrupts become human-approver/Coordinator callback conditions.
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

> **Graveyard reframe.** The Decision Cockpit (Polaris) is preserved as
> tried-and-found-theatre, not as working oversight. A dashboard that summarizes
> agent work for a human to approve — when the human cannot independently check
> the summary, and the summary is written by the untrusted agent — does not
> produce oversight; it launders agent decisions into a human-signable form
> (the whitepaper). The design discipline below (no fake "approve," `satisfied`
> never looks like approval, surface the boundary) is the *least-harmful* way to
> build such a surface and is retained for the record — but the surviving control
> is the deterministic floor in [`gates/`](../gates/), not the cockpit. The
> preserved snapshot lives at [`DASHBOARD.md`](DASHBOARD.md) /
> [`DASHBOARD.html`](DASHBOARD.html).

Polaris should remain minimal, directional, and human-role-aware.

It should show:

- Current human role.
- Decision needed.
- Primary action surfaced.
- Decision options.
- Human Decision Notes.
- Paste target.
- Approval / courier / Ask-GPT distinction.
- Approval boundary: this authorizes / this does not authorize.
- Risk context, not risk permission.
- Trust footer: Git-visible / tamper-evident when configured / not
  tamper-proof.
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
product by itself. It was intended to place the human in the right role at the
right time without reading a wall of terminal or turn-note text — but the
dogfood showed the limit: placing the human "in the right role" still depends on
a summary the human cannot independently check, which is exactly the laundering
failure. It does not prove oversight; it is preserved as the demonstration of why
a readable, runnable floor (not a prettier summary) is what survived.

The line between cockpit and IDE:

- Polaris shows current handoff state and approval surface.
- Polaris does not run agents, manage worktrees, display full traces, or host
  the runtime.

The current v1 design direction is Decision Cockpit / Command View as the
default, with Kanban / Operations Board as a secondary scan view. The default
screen should answer: am I needed, what decision is needed, what exact action
is surfaced, who receives it, what evidence supports it, what is not
authorized, and what happens if I wait.

Decision options should include:

- `authorize_exact_action`
- `reject_redo`
- `reject_close`
- `ask_coordinator`
- `pause_pending`

Human Decision Notes should appear as decision rationale, not private
reasoning. Copy direction for the later dashboard:

```text
Decision rationale (required for reject, ask, override, or long pause)
Visible to future agents and preserved in the audit trail. Keep to ~2-4
sentences. Avoid private reasoning, secrets, or content you would not include
in a PR review.
```

Avoid generic "Approve" without scope, green "safe to approve" badges,
progress rings that imply approved, drag/drop approval, agent-online vanity
metrics, full traces, and dashboard copy that makes `satisfied` look like
approval.

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
- E6-OC-002 is recorded as fully compliant bootstrap Circle 1 of 2.
- E6-OC-005 exit synthesis is present locally and records E6-OC-005 as fully
  compliant bootstrap Circle 2 of 2. E6-DOCS-ALIGN-001 did not verify whether
  the OC-005 preservation PR has landed.

Evidence limits:

- E6-OC-001 is Circle 0.5 / pilot observed, not fully compliant Circle 1.
- Bootstrap observation is locally recorded as 2 of 2 after E6-OC-005 exit
  synthesis, but automatic bootstrap-rule relaxation is not authorized.
- Observed pilot counter is 1.
- Burden reduction magnitude is unproven.
- Autonomy without the human approver as transport is unproven.
- Subjective rubric grading is unproven.
- Behavior under serious Claude/Codex disagreement is unproven.
- Product/runtime task safety is unproven.
- Cross-repo rollout is unproven.

Claim discipline:

- We can say the protocol is promising.
- We can say it caught real problems in this harness.
- We can say it has a coherent differentiator.
- We can say the bootstrap observation requirement is locally recorded as met
  only after OC-002 and OC-005, with OC-003 and OC-004 preserved as non-counting
  process stops.
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

## 11. Trust Layer And Public Wording

Repo-visible evidence is necessary but not sufficient for legal/audit trust.
The trust model should be phased.

Phase 0 - current:

- Git-visible Markdown records.
- PR history.
- Exact approval text.
- No-touch lists.
- Turn notes.
- `COLLAB.md` handoff.

Phase 1 - Git hardening:

- Protected branches.
- Signed commits or signed tags where practical.
- Artifact manifests with stable hashes.
- Hash-bound approval records.
- CI verification of manifest consistency.

Phase 2 - external transparency:

- Transparency logs or attestations.
- External timestamping.
- Signed release artifacts.
- WORM/append-only storage.
- Independent mirror repo.

Phase 3 - optional high-stakes anchoring:

- Blockchain hash anchoring for approval/evidence manifests only.
- No content on-chain.
- Optional deployment plugin, not a default dependency.

Blockchain is not MVP. It may later prove useful for censorship-resistant hash
anchoring, but it does not solve forged human intent, bad rubrics, prompt
injection, model-generated fake evidence, compromised credentials, insider
misuse, sycophancy, or governance drift. Avoid crypto-theater framing.

Safe public wording:

- Git-native, audit-visible governance record.
- Tamper-evident with protected-branch and signing discipline.
- Externally anchorable evidence record.
- Audit-friendly by design.

Unsafe wording:

- Tamper-proof.
- Immutable audit trail.
- Legally compliant or legally verified.
- Blockchain-secured.
- AI-safe approval system.
- Cannot be forged.

Prompt/API injection screening belongs later as auditor or CI input, not as an
approval gate. It may scan high-stakes PR diffs, approval text, dashboard copy,
protocol changes, kit changes, and external advisor transcripts. Its output
should be "concerns found" or "no concerns detected," never "approved."

## 12. Documentation And Evidence Bloat

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

## 13. Candidate Next Steps

These are candidates, not commitments. No implementation is authorized by this
section.

Candidate sequence:

1. Claude critiques E6-DOCS-ALIGN-001 for scope, mirror discipline, trust
   wording, decision-action clarity, and no-touch compliance.
2. Preserve OC-005 artifacts and this docs alignment by whatever PR shape the
   configured human approver separately authorizes.
3. Run the bootstrap retrospective before relaxing the bootstrap rule,
   implementing dashboard v1, or beginning public-alpha packaging.
4. Lock Decision Cockpit v1 scope.
5. Build Decision Cockpit v1 in a separately approved Outcome Circle.
6. Run a trust-layer design-only turn for signing/manifest/transparency design.
7. Consider README/strangerprintability only after the retrospective and
   preservation path are settled.
8. Consider runtime mapping only after manual governance mechanics prove useful.

Near-term restraint:

- Do not build runtime.
- Do not build integrations.
- Do not build automation.
- Do not build a graph editor.
- Do not build dashboard features beyond what the human needs for the next
  action.
- Do not implement trust-layer machinery, blockchain anchoring, prompt/API
  scanning, or public-release artifacts in this strategy/docs turn.

## 14. Open Questions

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
- What is the minimum Human Decision Record schema that preserves rationale
  without turning notes into essays?
- Which trust phase is the honest public-alpha default: Phase 0 only, or Phase
  0 with a Phase 1 roadmap?
- Which prompt/API injection checks belong in auditor practice versus CI?
- How do we detect sycophantic adaptation without creating a new gameable
  checklist?

## 15. Proportionality And The Bidirectional Failure Mode

The governance method has two failure modes, not one:

- Under-verification: a fluent but false claim slips through. Examples: the origin
  auditor-fabrication incident; the live MCP flag-state miss-latency that only an
  external probe caught.
- Over-verification: audits stack on audits, every agent doubts every other, and the
  process grinds real work to a halt. Example: a self-experienced 2026-06 episode
  across claude-codex and OMC. This is the meta-form of the project's own
  evidence-theater.

The product is the calibrated middle, not maximal doubt. The goal is to minimize where
trust is needed, not to maximize suspicion:

```text
Agents may say what they want.
Load-bearing claims terminate at substrate.
Irreversible consequences terminate at exact human approval.
Everything else moves.
```

Operating consequences (codified in `PROTOCOL.md`, Proportionality):

- Verification weight matches blast radius. The default classifier is the binary
  "irreversible / high-blast / outward-public?" Heavy process fires only on objective
  high-blast triggers, never on complexity or model disagreement alone.
- Substrate terminates doubt; do not audit audits.
- A governance cooldown pauses expensive ceremony, not the cheap always-on floor —
  the human-approved gates in [`gates/`](../gates/), small enough to read and
  confirm by consequence.
- OMC raises `n` for the whitepaper via a passive organic catch-ledger (small entries
  when a verification/fabrication/evidence-theater case arises in normal work), with an
  immediate tripwire only when prod, users, or adopters could be misled. It does not
  become a research harness that blocks product.

For the whitepaper, the bidirectional framing is itself a finding: most writeups warn
only about under-verification. Reporting the over-verification collapse, lived rather
than hypothesized, is part of the honesty.

## Source Breadcrumbs

Primary repo artifacts:

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-BRAND-001-claude-naming-discovery.md`
- `.agent-handoff/turns/E6-OC-001-codex-protocol-mirror-verification-iter-1.md`
- `.agent-handoff/turns/E6-OC-001-claude-protocol-mirror-audit-iter-1.md`
- `.agent-handoff/turns/E6-OC-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-OC-002-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-OC-005-codex-public-positioning-judgment-iter-1.md`
- `.agent-handoff/turns/E6-OC-005-claude-public-positioning-audit-iter-1.md`
- `.agent-handoff/turns/E6-OC-005-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`

User-provided strategy material:

- Codex strategy review.
- Claude strategy audit.
- GPT coordinator framing.
- Screenshots and commentary about LangSmith / Fleet-style surfaces.
- Discussion of docs bloat, open-source paths, and purpose-driven strategy.
- Decision Cockpit v1 design convergence.
- Human Decision Notes and trust-layer advisory material.
- Sycophantic-adaptation and smarter-agent limitation notes.

## Operating Guardrail

This document is alignment, not authorization. It does not approve new files,
edits, commits, pushes, branches, PRs, integrations, model calls, automation,
runtime work, or public release.

Any implementation still requires exact human approval under `PROTOCOL.md`.
