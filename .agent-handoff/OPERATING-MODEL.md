# Operating Model — Claude-Codex Harness

_Last doc-lock: E6-C (commit pending)_

_Document is updated only via authorized doc-lock turns._

_Read this first if you are a future agent entering the repo cold. PROTOCOL.md
contains enforced rules; this document explains the operating model and roadmap._

## 0. Document Status, Precedence, And Update Rule

`OPERATING-MODEL.md` is a durable reference, not a live dashboard. It is updated
only by authorized doc-lock turns. Normal turns may not silently edit it. If a
normal turn's work would contradict this document, the active repo-writing node
must surface the conflict and request a re-lock instead of patching the model.

Precedence:
- `PROTOCOL.md` is enforced governance.
- `OPERATING-MODEL.md` is reference / current architecture.
- Until specific elements are codified into `PROTOCOL.md`,
  `OPERATING-MODEL.md` may describe newer architecture.
- After codification, `PROTOCOL.md` wins on conflicts.
- `COLLAB.md` remains the current handoff state.
- Polaris (`DASHBOARD.md` / `DASHBOARD.html`) remains the human control surface.
- Turn notes remain the append-only historical record.

Breadcrumbs: `PROTOCOL.md`, `COLLAB.md`, E5-I, E5-T, E5-U, E6-B, E6-DASH-001.

## 1. Purpose / One-Page Summary

The converged operating model is:

```text
GPT coordinates.
Codex builds.
Claude audits.
Sami approves.
Repo records the trail.
Polaris shows the next action.
```

Polaris is the cockpit, not the coordinator. GPT-5.5 Pro, or an equivalent
head model selected by Sami, supplies coordinator / outcome-architect judgment
for architecture, pivots, outcomes, repeated friction, and other strategic
questions. Codex remains the default builder / implementer / investigator.
Claude Code remains the default auditor / critic / verifier. Sami remains the
sole approval authority for scope, pushes, completion, priority, risk, and
taste. The repo remains the durable source of truth.

Transport, notification, API-backed nodes, or NanoClaw-like runtimes may assist
later, but they cannot become governance. They may move messages; they do not
grant approval or replace Git, `COLLAB.md`, Polaris, and turn notes.

Breadcrumbs: E6-A, E6-B, E6-B-FIX-001, E6-DASH-001, E5-N, E5-U.

## 2. Stable Role Model

| Role | Node | Stable responsibility | Boundaries |
| --- | --- | --- | --- |
| Coordinator / outcome architect / external advisor | GPT-5.5 Pro or equivalent head model | Synthesize, frame outcomes, draft prompts, identify strategic next steps, surface tradeoffs | Does not approve scope, pushes, or completion; output is not repo-authoritative until scribed |
| Builder / implementer / investigator | Codex | Implement scoped changes, investigate repo state, produce turn notes and verification | Does not self-approve; does not expand scope without Sami approval |
| Auditor / critic / verifier | Claude Code | Critique builder output, verify scope, detect missing risks, challenge classifications | Does not approve; may upgrade Coordinator Trigger classification |
| Design specialist | Claude Design or equivalent | UX / visual / interaction design when routed | Does not become general coordinator unless explicitly assigned |
| Approver / priority / risk / taste | Sami | Final approval, direction, risk tolerance, product taste | Not responsible for routine-vs-GPT classification |
| Durable source of truth | Repo | `PROTOCOL.md`, `COLLAB.md`, Polaris, turn notes, commits | Chat alone is not durable operating state |
| Human control surface | Polaris | Shows one primary next action and paste target | View only; cannot grant approval |

GPT may recommend, synthesize, draft prompts, and define outcome/rubric
proposals. GPT does not approve scope, pushes, or completion. Approval remains
Sami's sole authority. Model consensus is not approval. Green status, silence,
"looks good", or lack of objection is not approval.

Breadcrumbs: E5-S, E6-A, E6-B, E6-B-FIX-001, E6-DASH-001.

## 3. Major Pivot Timeline

| Phase | Pivot | Why it mattered | Reference: turn note / commit |
| --- | --- | --- | --- |
| E5-I | Backported packet vocabulary, freshness, visibility/noise gates, and reflection safety into Claude-Codex + kit | Established portable harness rules without pilot identity leakage. | `E5-I-codex-phase-1-backport-implementation.md`; commit before E5-J/E5-K arc |
| E5-L/E5-M | Reflection/proposal discipline | Reflections became proposal-only surfaces with classification and no silent implementation. Live reflection paths stayed deferred. | `E5-L-*`, `E5-M-*` |
| E5-N | CommonGround feasibility review | Treated CommonGround as prior art / future substrate, not primary authority. Git/COLLAB/turn notes stayed source of truth. | `E5-N-codex-commonground-feasibility-review.md` |
| E5-P | `alert-state.sh` manual helper | Added a read-only terminal status helper without daemon, cron, model calls, or authority. | `E5-P-codex-alert-state-script.md` |
| E5-Q | First live dashboard adoption | Proved a live dashboard can summarize current handoff state, but surfaced the need for a paste-ready human action field. | `E5-Q-*` |
| E5-R/E5-S | Node capability and authority model | Split write capability, operational role, approval capability, and tier. External advisor output became operational only by approval or repo-visible capture. | `E5-R-*`, `E5-S-*`; commits `b46624c`, `02afd2f` |
| E5-T | Browser dashboard | Made a static local HTML dashboard with copy blocks and source-of-truth warnings. | `E5-T-*`; commit `1922562` |
| E5-U | Static lifecycle / notification design | Clarified browser refresh only reloads bytes; it does not recompute dashboard state. | `E5-U-*`; commits `802baa1`, `b5bd337` |
| E5-T-FIX-002/003 | Snapshot lifecycle and provenance/advisor visibility | Added prepared-for/as-of/expires-after and made external advisor visibility explicit without promoting GPT to operational actor. | `E5-T-FIX-002-*`, `E5-T-FIX-003-*` |
| E5-T-FIX-004 | Single-recommendation dashboard | Replaced decision-menu overload with one primary action above the fold. | `E5-T-FIX-004-*`; commit `9187c92` |
| E6-A | GPT coordinator restoration | Restored GPT-5.5 Pro as coordinator/outcome architect while preserving repo-governed Claude <-> Codex loop. | `E6-A-*`; commit `5b53d27` |
| E6-B | Coordinator/scribe protocol wording | Codified GPT role, output contract, scribing, dashboard Ask-GPT guidance, outcome-loop deferral, and transport caveat. | `E6-B-*`; commit `dbb9172` |
| E6-B-FIX-001 | Coordinator Trigger Classification | Removed burden from Sami to decide routine status; active repo-writing node classifies `ROUTINE`, `NEEDS_GPT`, or `UNCLEAR`. | `E6-B-FIX-001-*`; commit `dbb9172` |
| E6-DASH-001 | Polaris redesign | Reframed dashboard as a human cockpit: paste-to-whom actions, role-flow strip, visible Ask-GPT path, and collapsed agent payloads. | `E6-DASH-001-*`; commit `0fe671c` |
| E6-C | Operating model doc-lock | Locks the E5/E6 convergence into durable repo documentation and adds Project Mode / Outcome Circle concepts. | `E6-C-codex-operating-model-docs-lock.md`; commit pending |

## 4. Coordinator Trigger

Every turn note must include a near-top section:

```md
## Coordinator Trigger
- State: ROUTINE | NEEDS_GPT | UNCLEAR
- Reason: <one sentence>
```

`ROUTINE` is allowed only when the turn is already scoped, low-risk,
non-strategic, and no architecture, pivot, UX-friction, cognitive-load,
conflict, safety, automation, or tooling trigger is active.

`NEEDS_GPT` applies when a GPT coordinator invocation trigger fires, including:
architecture, pivot, repeated UX/cognitive-load failure, conflict,
outcome/rubric definition, multi-turn loop approval consideration, milestone,
"are we wasting time?", high-stakes/noisy/ambiguous decision, automation or
tooling architecture, safety boundary, or Sami request.

`UNCLEAR` applies when the active repo-writing node cannot confidently classify
the turn as `ROUTINE`. Missing classification is treated as `UNCLEAR`.
`UNCLEAR` defaults to Ask GPT.

Sami is never responsible for determining routine status. The active
repo-writing node classifies. The auditor may upgrade classification with a
one-sentence reason when critique detects an architecture, UX, safety,
automation, scope, or other strategic trigger. If state is `NEEDS_GPT` or
`UNCLEAR`, the handoff must include the exact GPT paste question.

Breadcrumbs: `PROTOCOL.md` §"GPT Coordinator / Outcome Architect", E6-B,
E6-B-FIX-001.

## 5. Project Mode State Machine

Project Mode is a higher-level estimate of the lane's operating state. It is
not yet enforced protocol in E6-C; it is documented for future codification.

| Mode | Meaning | Entry signals | Exit signals | Default Coordinator Trigger | What Sami should expect | What Polaris should show later |
| --- | --- | --- | --- | --- | --- | --- |
| Coordinator | The lane needs architecture, routing, outcome definition, synthesis, or roadmap work | No approved outcome circle; strategic backlog; repeated friction; scope unclear; transport/security/adoption decisions | An approved outcome circle starts, or only a Sami approval decision remains | `NEEDS_GPT` unless the active node can justify `ROUTINE` | GPT-led synthesis, exact next prompts, and decision framing | "Ask GPT" or coordinator-authored next action |
| Execution | Builder/auditor are working inside an approved outcome circle or already-scoped implementation | Exact approved scope, allowed files, no-touch list, rubric/packet if applicable | Pass/blocker/iteration cap, new scope, ambiguity, or Sami call-back condition | `ROUTINE` unless a trigger fires | Less routing burden; agents proceed within bounds | Current worker/auditor step and stop condition |
| Sami-decision-pending | The next step is Sami's explicit approval, priority, risk, or taste decision | Exact approval text present; options narrowed; no model decision remains | Sami approves, rejects, edits scope, or asks GPT | `ROUTINE` for mechanical presentation; `NEEDS_GPT` if decision is strategic/unclear | A compact decision card, not an architecture essay | Approval text / reject / ask GPT |
| Unknown | The active node cannot confidently determine mode | Conflicting state, stale dashboard, missing trigger, unclear scope, hidden advisor input, or mode confidence below threshold | Repo-writing node or auditor classifies, or GPT resolves | `UNCLEAR` -> Ask GPT | Do not infer safety; ask for coordinator synthesis | Ask GPT with exact question |

Outside an approved outcome circle, the default mode is `Coordinator` unless
the only pending item is a Sami approval decision. Inside an approved outcome
circle, the default mode is `Execution`. If mode cannot be confidently
determined, mode is `Unknown` and per-turn trigger defaults to `UNCLEAR` ->
Ask GPT.

Sami is not responsible for determining mode. The active repo-writing node
estimates mode. The auditor may challenge or upgrade the assessment with a
one-sentence reason.

Breadcrumbs: E6-B-FIX-001, E6-C current authorization, E6-A.

## 6. Mode Confidence

Mode percentages are heuristic estimates, not Bayesian probabilities. They are
a trigger signal for routing, not a statistical claim. Future turn notes should
include both:

```md
## Coordinator Trigger
- State: ROUTINE | NEEDS_GPT | UNCLEAR
- Reason: <one sentence>

## Project Mode (estimated)
- Dominant mode: Coordinator | Execution | Sami-decision-pending | Unknown
- Estimate: <rough percentages>
- Reason: <one sentence>
```

If dominant mode confidence is below roughly 60%, use `Unknown` and default to
`UNCLEAR` -> Ask GPT. E6-C documents this for future codification; it does not
edit `PROTOCOL.md`.

Breadcrumbs: E6-B-FIX-001, E6-C current authorization.

## 7. Coordinator Decision Menu

When GPT is invoked as coordinator, it should choose or recommend a concrete
coordination move rather than merely "advise." Available options:

- Continue: proceed with the current plan.
- Replan: change sequence, scope, or actor routing.
- Add worker: delegate a bounded implementation/inventory task.
- Add tester: route independent verification or browser/static checks.
- Synthesize skill: convert repeated practice into reusable local guidance.
- Reset strategy: stop the current loop and reframe the approach.
- Move to next milestone: consolidate current arc and pick the next lane.
- Stop: recommend no further work until Sami decides.

This menu prevents vague coordinator behavior, supports cost/stopping
discipline, and maps cleanly to future Polaris displays and outcome-circle
routing.

Breadcrumbs: E3-E / Zenith prior-art handling, E6-A, E6-C current
authorization.

## 8. Outcome Circle Model

An Outcome Circle is a pre-approved bounded loop where builder and auditor can
work toward a shared outcome without Sami copy-pasting every micro-turn.

Entry requires the exact phrase:

```text
Approved Outcome Circle: <packet name>
```

The full Outcome Packet must be inline with the approval. Minimum fields:

- outcome statement / description
- rubric
- allowed files
- no-touch list
- max iterations
- grader / auditor
- pass evidence
- stop conditions
- when Sami is called back
- commit/push rule

Verbal agreement is not circle entry. Agent consensus is not circle entry.
Auditor pass is not approval. "Rubric satisfied" means the auditor believes
the rubric is satisfied; it does not mean the work is approved. Commit, push,
new scope, and final completion still require Sami's exact approval unless the
exact Outcome Packet approval explicitly says otherwise.

Bright-line deferral: E6-C does not design rubric formats, grader behaviors,
iteration semantics, commit/push handling inside loops, or detailed loop
mechanics. Those belong to E6-D or later.

Breadcrumbs: E6-A, E6-B, E6-B-FIX-001, E6-C current authorization.

## 9. Research Synthesis

Anthropic Managed Agents / outcome-grader pattern: use an outcome/description,
rubric, independent grader in separate context, and max-iteration cap. The
result-state shape can distinguish satisfied, needs revision,
max-iterations-reached, failed, or interrupted. Adaptation for this harness:
`satisfied` is grader evidence only; it does not approve scope, commit, push,
or completion.

Zenith prior-art handling: repo notes cite Zenith only as article/report prior
art, with implementation details marked unknown. The useful principles are
state preservation, gap-finding, revisable planning, independent verification,
adaptive orchestration, and stopping discipline. The harness must stand on its
own repo evidence even if the Zenith citation is removed.

CommonGround Kernel: useful prior art for durable public records, turn
lifecycle, causal lineage, and work-memory preservation. It is not adopted as
an agent runtime or automatic orchestration replacement. Earlier review found
source/version inconsistency and governance-fit concerns. Git, `COLLAB.md`,
Polaris, and turn notes remain source of truth here.

Breadcrumbs: E6-A §10, E3-E, E3-E Claude critique, E5-N Codex and Claude notes.

## 10. Polaris

Polaris is the human cockpit/control surface. It should show one primary
recommendation, name the receiving agent, keep the Ask-GPT path visible when
Coordinator Trigger is `NEEDS_GPT` or `UNCLEAR`, and keep alternatives or
technical packets below the primary path.

Polaris must not become the coordinator. It must not compete with the primary
action, infer approval, or hide stale-state risk. Snapshot lifecycle and
staleness are expected: browser refresh reloads the same static file bytes
until a repo-writing agent refreshes the dashboard. Future Project Mode panel
work belongs in a later turn.

Breadcrumbs: E5-T, E5-U, E5-T-FIX-002, E5-T-FIX-004, E6-DASH-001.

## 11. Advisor / Scribing / Context Preservation

GPT coordinator input must become repo-visible when it affects architecture,
roadmap, scope, or future operating model. Near-term scribing happens in turn
notes. A future `.agent-handoff/advisor-notes/` path remains undecided unless
later authorized.

The scribe must include:
- attribution
- verbatim quote when available
- structured summary
- what Sami accepted, rejected, or left undecided
- explicit uncertainty or gaps

Do not launder GPT advice into "the system decided." If GPT input applies to
both Codex and Claude, the next repo-writing node records the shared source
once and the other node references it.

Breadcrumbs: E5-S, E6-A, E6-B, E6-DASH-001.

## 12. Anti-Sycophancy / Critique Discipline

Critique must not become rubber-stamping. Risks to prevent:

- Claude rubber-stamping Codex.
- Codex blindly implementing Claude.
- GPT being laundered out of the record.
- Model consensus becoming approval.
- Auditor pass becoming approval.
- Worker self-reporting as completion.

Every critique must either name at least one specific concern or explicitly
state which failure modes were checked and found absent. "Looks good, ship it"
alone is not a valid critique. Incomplete critiques should be re-routed to
another auditor or to GPT synthesis.

Breadcrumbs: E3-E harness-control loop, E6-A safety model, E6-B-FIX-001 auditor
upgrade rule, E6-DASH-001 verification discipline.

## 13. Security / Boundary Model

The harness security boundary is governance-first:

- no hidden state
- no autonomous approval
- no self-modification
- no unattended automation unless separately approved
- no credentials/API/OAuth setup by agents unless separately approved
- no transport layer as governance
- no cross-repo data leakage
- no product/runtime touching unless explicitly authorized
- exact approval text remains required for new scope and pushes

Scripts and dashboards may assist humans, but they cannot authorize actions.
Transport and wake layers may route messages later, but they cannot replace
Git-visible approval artifacts.

Breadcrumbs: `PROTOCOL.md`, E5-P, E5-N, E5-U, E6-B.

## 14. Cross-Repo Adoption

New repo install path: use `kit/v1` scaffold, then set repo identity, no-touch
surfaces, source-of-truth rules, and initial COLLAB/dashboard state before any
agent loop work.

Existing dirty repo install path: inspect status first, identify unrelated
drift, use exact-path staging, and avoid product-doc pollution. Harness docs
should live under `.agent-handoff/` unless explicitly scoped elsewhere.

CI-heavy repos: prefer one PR per experiment arc, use draft PRs while in
progress, batch/squash at PR boundary when appropriate, and avoid one PR per
turn unless a narrow fix demands it.

Multi-lane repos: use lane numbers and node/thread prefixes so state remains
separable. Single-lane repos can stay simpler but must still name actor,
scope, no-touch list, and next action.

Direct repo-writing agents can own operational handoff state only inside an
approved role. External advisors, including GPT via chat, must be scribed.

Breadcrumbs: E3-K/E3-L cross-repo extraction notes, E5-I, E5-S kit mirror
discipline, E6-B.

## 15. Remaining Build Backlog

| Group | Classification | Next likely turn | Risk if skipped |
| --- | --- | --- | --- |
| Coordinator preservation | NEEDS_GPT + Sami approval for codification | E6-C now, then future protocol lock if needed | System drifts back to Claude <-> Codex with Sami as router |
| Project Mode protocol/schema codification | NEEDS_GPT, deferred | After E6-C critique, maybe E6-DASH-002 or E6-PROTOCOL | Agents keep mode estimates informal |
| Polaris mode panel | NEEDS_GPT design, routine implementation once scoped | E6-DASH-002 | Sami cannot see Coordinator/Execution/Sami-pending state quickly |
| Advisor-notes / durable scribing | NEEDS_GPT + Sami approval | E6-E or similar | GPT input remains buried in long turn notes |
| Notifications / wakeups | NEEDS_GPT + Sami approval | Later after cockpit/mode settles | Sami still must check manually |
| Auto handoffs | NEEDS_GPT + Sami approval | After outcome-loop design | Relay burden remains high |
| Outcome/rubric loop design | NEEDS_GPT | E6-D | Work-until-done remains undefined and unsafe |
| Cross-repo adoption | NEEDS_GPT | After core model stabilizes | New repos copy stale or partial rules |
| Security / anti-sycophancy hardening | NEEDS_GPT | Parallel design when loops/transport approach | Consensus or grader pass may become soft approval |
| Transport / NanoClaw / API-backed options | NEEDS_GPT, deferred | Later separate review | Premature runtime adds hidden state and authority confusion |
| Kit propagation | ROUTINE after design accepted + Sami approval | After protocol/dashboard decisions | Adopter repos miss coordinator/mode rules |
| Multi-lane support | NEEDS_GPT | Later | Lanes may cross-contaminate state |

## 16. Next Three Turns

Recommended minimal sequence after E6-C:

1. E6-C Claude critique: audit this doc-lock for fidelity, scope, source
   breadcrumbs, and whether Project Mode / Outcome Circle are clear without
   over-implementing.
2. E6-DASH-002 or similar: Polaris Project Mode panel design/implementation,
   if Claude accepts E6-C and Sami wants mode visible in the cockpit. Keep it
   dashboard-only and single-recommendation preserving.
3. E6-D: Outcome Circle / rubric-loop design. Do not implement loops; design
   the safety model, packet, iteration cap, grader, stop conditions, and commit
   / push handling.

Advisor-notes / durable scribing path can be E6-E or swapped earlier if E6-C
critique finds scribing is the bigger blocker than dashboard mode display.

Breadcrumbs: E6-C current authorization, E6-A, E6-B, E6-DASH-001.

## 17. Explicit Deferrals

- `PROTOCOL.md` mode codification.
- Kit propagation.
- Outcome-loop mechanics.
- Advisor-notes path creation.
- Notifier/wakeup implementation.
- NanoClaw/transport review.
- API-backed GPT coordinator.
- Cross-repo rollout.
- Any automation, cron, timer, webhook, launch agent, MCP/plugin/bridge,
  CommonGround, Notion, or global config.

Breadcrumbs: E6-C current authorization, E5-U, E5-N, E6-B.

## 18. Source Breadcrumbs

| Source path / commit | What it contributed | E5/E6 phase |
| --- | --- | --- |
| `.agent-handoff/PROTOCOL.md` | Enforced governance, GPT coordinator rule, trigger classification, outcome-loop deferral, approval boundaries | E6-B / E6-B-FIX-001 |
| `.agent-handoff/COLLAB.md` | Current handoff state and historical turn summaries | Ongoing |
| `.agent-handoff/turns/E3-E-codex-kit-extraction-harness-design.md` | Harness-control loop, Zenith prior-art limits, gap-finding / stopping discipline | E3 |
| `.agent-handoff/turns/E3-E-claude-critique.md` | Endorsed Zenith as article/report prior art only and validated harness-control loop | E3 |
| `.agent-handoff/turns/E5-I-codex-phase-1-backport-implementation.md` | Backported dashboard freshness, packet vocabulary, visibility/noise, reflection safety, review routing | E5-I |
| `.agent-handoff/turns/E5-L-codex-reflection-paths-template-design.md` | Reflection path design and proposal-only discipline | E5-L |
| `.agent-handoff/turns/E5-M-codex-reflection-template-implementation.md` | Kit-only reflection proposal template and live-path deferral | E5-M |
| `.agent-handoff/turns/E5-N-codex-commonground-feasibility-review.md` | CommonGround capability mapping, preview/API churn risk, Git-authoritative stance | E5-N |
| `.agent-handoff/turns/E5-N-claude-critique-commonground-feasibility-review.md` | Confirmed CommonGround source inconsistency/security risk and prior-art-only stance | E5-N |
| `.agent-handoff/turns/E5-P-codex-alert-state-script.md` | Manual read-only helper constraints and no-authority script model | E5-P |
| `.agent-handoff/turns/E5-Q-codex-live-dashboard-adoption-test.md` | First live dashboard adoption and COLLAB-over-dashboard authority | E5-Q |
| `.agent-handoff/turns/E5-R-codex-node-capability-dashboard-polish-design.md` | Four-property node model, external advisor/scribe, vendor diversity, subagent delegation | E5-R |
| `.agent-handoff/turns/E5-S-codex-node-capability-dashboard-polish-implementation.md` | Implemented node capability + dashboard field/template changes | E5-S |
| `.agent-handoff/turns/E5-T-codex-human-control-tower-dashboard.md` | First static HTML dashboard and copy-ready control surface | E5-T |
| `.agent-handoff/turns/E5-U-codex-dashboard-refresh-notification-design.md` | Static-file lifecycle and notification/wakeup design boundaries | E5-U |
| `.agent-handoff/turns/E5-T-FIX-002-codex-dashboard-snapshot-lifecycle.md` | Snapshot lifecycle fields and stale-dashboard correction | E5-T-FIX-002 |
| `.agent-handoff/turns/E5-T-FIX-003-codex-dashboard-provenance-advisor-visibility.md` | Provenance and external advisor visibility without operational promotion | E5-T-FIX-003 |
| `.agent-handoff/turns/E5-T-FIX-004-codex-dashboard-single-action-simplification.md` | One primary action above the fold and collapsed details principle | E5-T-FIX-004 |
| `.agent-handoff/turns/E6-A-codex-gpt-coordinator-outcome-architect-design.md` | GPT coordinator restoration, output contract, scribing, outcome-loop deferral, managed-agent comparison | E6-A |
| `.agent-handoff/turns/E6-A-claude-critique-gpt-coordinator-outcome-architect-design.md` | Acceptance of E6-A and safety checks around GPT not being approval/repo-writing | E6-A |
| `.agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md` | Protocol implementation of GPT coordinator/scribe wording | E6-B |
| `.agent-handoff/turns/E6-B-claude-critique-gpt-coordinator-protocol-wording.md` | Audit of E6-B mirror discipline, outcome-loop deferral, and NanoClaw caveat | E6-B |
| `.agent-handoff/turns/E6-B-FIX-001-codex-coordinator-trigger-classification.md` | Mandatory Coordinator Trigger classification, auditor upgrade, Ask-GPT default | E6-B-FIX-001 |
| `.agent-handoff/turns/E6-B-FIX-001-claude-critique-coordinator-trigger-classification.md` | Audit confirming trigger taxonomy and Sami-is-not-classifier correction | E6-B-FIX-001 |
| `.agent-handoff/turns/E6-DASH-001-claude-design-human-control-tower-redesign.md` | Polaris cockpit redesign and GPT-routed design-specialist work | E6-DASH-001 |
| `.agent-handoff/turns/E6-DASH-001-codex-verify-dashboard-redesign.md` | Scope/static verification of Polaris and no-touch/self-contained checks | E6-DASH-001 |
| `.agent-handoff/turns/E6-C-codex-operating-model-docs-lock.md` | Current GPT coordinator framing, Project Mode, Outcome Circle, and roadmap doc-lock | E6-C |
| `0fe671c E6-DASH-001: add Polaris human control tower redesign` | Latest pushed baseline before E6-C | E6-DASH-001 |
