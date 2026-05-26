# Claude-Codex Governance Harness

A Git-native approval-boundary protocol for cross-model agent work.

This repo is a dogfood harness for coordinating AI agents without laundering
their work into human approval. Agents can build, audit, critique, and
synthesize. Humans authorize consequences.

The current reference UI is **Polaris / Decision Cockpit v1**. It is a static,
view-only cockpit that shows the human approver what decision is needed, what
evidence supports it, what exact action would be authorized, and what remains
explicitly outside authorization.

The dashboard is useful, but it is not the whole method. The portable part is
the approval-boundary discipline in the repo-visible protocol, packets, turn
notes, audits, and handoffs.

## What This Is

This is a repo-native governance harness for human-supervised, cross-model
agent work. It is designed for workflows where one agent may build, another may
audit, a coordinator may synthesize, and a human approver must remain the only
actor who can authorize consequences.

The core pattern is:

1. Define a bounded **Outcome Packet** before work begins.
2. Let a **Builder** perform the scoped work.
3. Let an **Auditor** independently inspect the work.
4. Record evidence in repo-visible turn notes.
5. Keep `built`, `audited`, `satisfied`, and `human-approved` as separate
   states.
6. Require exact human approval text before commit, push, merge, release,
   launch, public wording, trust-layer changes, or other named consequences.

The project currently includes:

- a repo-visible protocol in [`.agent-handoff/PROTOCOL.md`](.agent-handoff/PROTOCOL.md)
- an operating model in [`.agent-handoff/OPERATING-MODEL.md`](.agent-handoff/OPERATING-MODEL.md)
- a strategy and positioning record in [`.agent-handoff/STRATEGY.md`](.agent-handoff/STRATEGY.md)
- the current shared state in [`.agent-handoff/COLLAB.md`](.agent-handoff/COLLAB.md)
- append-only turn evidence in [`.agent-handoff/turns/`](.agent-handoff/turns/)
- the reference cockpit in [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md)
  and [`.agent-handoff/DASHBOARD.html`](.agent-handoff/DASHBOARD.html)
- a starter adoption kit in [`kit/v1/`](kit/v1/)

The repo name reflects the original dogfood pairing. The roles are portable.
Reusable protocol language uses **Coordinator**, **Builder**, **Auditor**, and
**human approver**, not permanent model names.

For a five-minute orientation, read this README through "Current Proof Status",
then open the dashboard HTML and skim the latest `COLLAB.md` handoff. That gives
the mental model before the historical turn notes get dense.

## What This Is Not

This repo is not a runtime, IDE, orchestration framework, tracing product, or
agent transport layer. It does not replace tools such as agent runtimes, coding
IDEs, HITL cards, workflow engines, trace viewers, CI systems, or compliance
platforms.

It is also not a claim that human-in-the-loop agent work was invented here.
The narrower claim is that this repo demonstrates a Git-native approval
boundary for cross-model work where the audit record makes it hard to confuse
agent satisfaction with human authorization.

This repo does not claim:

- broad novelty across all agent governance
- readiness for public alpha launch
- validation across many teams or organizations
- legal or compliance suitability
- strong adversarial security
- autonomous wakeup, notification, or transport safety
- trust-layer hardening by default
- blockchain-based guarantees
- replacement of runtime or orchestration systems

If a reader wants a production runtime, they should use a runtime. If they want
an approval-boundary method that can sit beside their runtime, dashboard, or
manual repo workflow, this repo is the relevant artifact.

## Why It Exists

Modern agent workflows can produce a lot of plausible work quickly. That creates
two related risks:

- humans may rubber-stamp work because agents sound confident or agree with one
  another
- agents may be treated as if their `done`, `audited`, or `satisfied` state is
  equivalent to human approval

The method here tries to make the boundary visible and durable:

- agents produce evidence
- agents make judgments and recommendations
- auditors search for failure modes
- coordinators synthesize ambiguity and exit conditions
- humans authorize consequences

The goal is cognitive scalability without approval laundering. The human should
not have to carry every handoff in their head, but the human should also never
be tricked into approving more than the exact named consequence.

That is why the repo emphasizes packets, turn notes, no-touch lists, exact
approval text, current-state handoffs, stop conditions, and a cockpit that says
what is authorized and what is not.

## Core Idea: `satisfied` Is Not Approval

The load-bearing rule is simple:

> `satisfied` is not approval.

Plainly: satisfied is not approval.

Related rules:

- Auditor pass is not approval.
- Model consensus is not approval.
- Human approval authorizes only the exact named consequence.

The state separation matters because each state answers a different question:

| State | What it means | What it does not mean |
| --- | --- | --- |
| Built | A builder produced the scoped artifact or report. | The artifact is correct, reviewed, or authorized. |
| Audited | An auditor inspected the work against the packet. | The human has approved the consequence. |
| Satisfied | The auditor believes the rubric was met. | Commit, push, merge, launch, or public release is authorized. |
| Human-approved | The configured human approver authorized an exact action. | Any adjacent action, broader scope, or future relaxation is authorized. |
| Committed / pushed / merged | A Git consequence occurred after explicit approval. | Public release, naming, launch, or downstream adoption is automatically approved. |
| Launched / published | A public consequence occurred after explicit approval. | The method is proven at larger scale or legally/commercially certified. |

This distinction protects humans from quiet scope expansion. It also protects
agents from being treated as fake approvers. An agent can say, "I am satisfied
against the rubric." It cannot say, "the consequence is approved."

## Decision Cockpit / Reference Cockpit

The reference cockpit is a static dashboard for the current repo-visible state.
Open [`.agent-handoff/DASHBOARD.html`](.agent-handoff/DASHBOARD.html) in a
browser, or read [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md)
as the Markdown equivalent.

Decision Cockpit v1 demonstrates the method by foregrounding:

- the current human role
- the decision needed, if any
- the primary action surfaced, not a vague recommendation
- exact decision options such as authorize, reject/redo, reject/close, ask
  coordinator, or pause
- Human Decision Notes for rationale that belongs in the audit trail
- what the action authorizes
- what the action does not authorize
- evidence at a glance
- risk context, not risk permission
- wait-risk and interruptibility
- trust caveats
- source-of-truth reminders

The cockpit is view-only. It does not infer approval from UI state. Its copy
buttons copy visible text only. It has no backend, no network calls, no storage
API, no one-click hidden approval payload, no notifications, and no runtime
transport.

The cockpit also has an Execution Mode concept: agents may work inside an
approved Outcome Packet without human approval for every reversible micro-turn.
The human remains able to pause, stop, ask the coordinator, reject/redo,
reject/close, or steer if drift appears. Irreversible actions still require
exact human approval.

## How It Works

The method has three phases.

### 1. Pre-Build Convergence

Before implementation, the coordinator and human approver narrow the outcome:

- what result is being sought
- what files may be written
- what files are read-only
- what paths are no-touch
- who builds
- who audits
- how many iterations are allowed
- what evidence must be recorded
- what stop conditions end the turn
- when the human or coordinator must be called back

The result is an Outcome Packet. For non-trivial work, the builder scribes the
packet into a turn note before implementation begins. That makes scope visible
to the repo, not just to the chat window.

### 2. During-Build Outcome Circle

An **Outcome Circle** is a bounded builder/auditor loop. The builder performs
the scoped work, records evidence, and stops. The auditor independently checks
the work against the packet. If the auditor finds gaps, a second iteration may
be allowed only if the packet permits it.

The builder cannot grade its own work. The auditor must search for failure
modes, not merely confirm that lines exist.

Typical result states include `satisfied`, `needs_revision`, `blocker`,
`scope_conflict`, `needs_gpt`, `needs_human`, `failed`, and `interrupted`.
These are workflow states. They are not human approval.

### 3. Post-Build Exit And Preservation

After a circle, the coordinator or human may synthesize the outcome:

- what counted
- what did not count
- what changed
- what remains unproven
- what must be preserved
- whether a PR should be opened
- whether any next work is allowed

Preservation usually means a narrow PR containing the relevant turn notes and
allowed doc changes. A preservation PR is still a consequence. It requires exact
human approval.

## Adoption Patterns

The protocol can be adopted with or without this dashboard.

| Pattern | Use when | What to copy |
| --- | --- | --- |
| Protocol-only adoption | You already have a repo workflow and want approval-boundary discipline. | Outcome Packet shape, roles, result states, stop conditions, turn notes. |
| Reference cockpit adoption | You want the static dashboard as a default human-facing view. | `DASHBOARD.md` / `DASHBOARD.html` pattern plus `COLLAB.md` source-of-truth discipline. |
| Adapted cockpit adoption | You have your own product UI, IDE, or internal dashboard. | The cockpit semantics: decision needed, exact action, not-authorized block, evidence, notes, trust caveat. |
| Runtime-integrated adoption | You already run agents in an orchestration layer. | Approval-boundary states and human authorization gates around runtime actions. |
| Compliance / audit adoption | You need a reviewable work record. | Git-visible packets, turn notes, audit reports, exact approval records, and future manifest hardening. |

The kit in [`kit/v1/`](kit/v1/) is the starting adoption path. It should be
treated as a template, not as proof that your repo is governed merely because
files were copied.

## Who This Is For

This repo is most relevant for:

- a solo developer using multiple coding agents and wanting cleaner handoffs
- a small AI-heavy team that needs one place to see who is waiting on whom
- an open-source maintainer who wants agents to contribute without silently
  crossing approval boundaries
- an AI consulting shop that needs client-visible evidence and exact scope
  authorization
- a compliance-aware team that wants audit-visible records before stronger
  trust hardening exists
- an eval, safety, or red-team group studying agent sycophancy, rubric drift,
  and approval laundering
- a runtime or tool vendor that wants to adapt the approval-boundary layer
  without adopting this cockpit

Different adopters should start in different places. A solo dev may only need
the packet and turn-note discipline. A team may want the cockpit. A vendor may
only want the state model and exact-approval boundary.

## Current Proof Status

What has been demonstrated in this repo:

- the bootstrap observation rule reached 2 of 2 fully compliant circles
- one counted circle used an objective rubric
- one counted circle used a judgment-based rubric
- honest process stops were preserved instead of hidden
- a packet-scribe gap was found and repaired
- duplicate-file and dirty-state stop conditions fired when they should
- public-positioning overclaim risk was reduced before README work began
- Decision Cockpit v1 was implemented and audited
- the protocol and reference cockpit now have proof of life in the same repo

This is meaningful evidence for the method, especially because the failed or
interrupted attempts are part of the record. The protocol did not only preserve
successes. It also preserved stops, blockers, and corrections.

What this does not prove:

- public adoption
- external installability
- burden-reduction magnitude
- autonomy without the human acting as transport
- behavior under severe model disagreement
- runtime, wakeup, notification, or agent-to-agent transport safety
- trust-layer tamper-evidence
- legal or compliance suitability
- scale across teams
- long-term resistance to smarter agents gaming visible rules

The honest status is: protocol and reference-cockpit proof exists. Public
packaging, external adoption, trust hardening, and larger-scale validation are
future work.

## Current Limitations

The method is a friction and transparency layer, not a strong security layer.
It assumes mostly cooperative agents that can make mistakes, drift, overfit to
human preferences, or blur approval boundaries, but are not fully adversarial
against the protocol itself.

Known limitations include:

- agents may still misread or under-check evidence
- auditors may become formulaic
- builders may pad evidence to match perceived human preferences
- decision notes can become a sycophantic-adaptation channel if treated as
  silent protocol changes
- a stale dashboard can mislead if `COLLAB.md` and turn notes are not kept
  current
- repo-visible Markdown can be modified unless Git and branch protections are
  hardened
- Git history can be rewritten by actors with sufficient permissions
- exact approval text can be forged if identity and review controls are weak
- legal, compliance, and regulated-use claims require separate expert review

The protocol names these limits because hiding them would make the project less
credible. The method is useful because it catches common failure patterns and
makes review easier. It does not solve AI alignment or adversarial security.

## How To Dogfood / Adopt

For this repo:

1. Read [`.agent-handoff/COLLAB.md`](.agent-handoff/COLLAB.md) for current state.
2. Open [`.agent-handoff/DASHBOARD.html`](.agent-handoff/DASHBOARD.html) for the
   reference cockpit view.
3. Read [`.agent-handoff/PROTOCOL.md`](.agent-handoff/PROTOCOL.md) before any
   non-trivial agent work.
4. Inspect recent turn notes in [`.agent-handoff/turns/`](.agent-handoff/turns/)
   for evidence and precedent.
5. Use exact Outcome Packets for bounded work.
6. Preserve important outcomes with narrow PRs only after exact human approval.

For another repo:

1. Decide whether you want protocol-only adoption or a cockpit.
2. Copy only the pieces you need from [`kit/v1/`](kit/v1/).
3. Replace local labels with your own configured human approver metadata.
4. Keep role names portable: Coordinator, Builder, Auditor, human approver.
5. Define what counts as irreversible in your context.
6. Make exact approval text mandatory for those consequences.
7. Add a no-touch list before agents work.
8. Record stop conditions in the packet.
9. Let a separate auditor inspect builder work.
10. Treat `satisfied` as evidence, not approval.

Do not copy this repo's historical dogfood details as if they are protocol
requirements. The reusable pieces are the packet shape, role separation,
approval boundary, evidence trail, and stop discipline.

## Repo Map

| Path | Purpose |
| --- | --- |
| [`README.md`](README.md) | Public orientation for new readers. |
| [`AGENTS.md`](AGENTS.md) | Codex-facing operational instructions. |
| [`CLAUDE.md`](CLAUDE.md) | Claude Code-facing operational instructions. |
| [`.agent-handoff/PROTOCOL.md`](.agent-handoff/PROTOCOL.md) | Enforced local protocol and stop discipline. |
| [`.agent-handoff/OPERATING-MODEL.md`](.agent-handoff/OPERATING-MODEL.md) | Reference operating model and role/lane explanation. |
| [`.agent-handoff/STRATEGY.md`](.agent-handoff/STRATEGY.md) | Positioning, proof status, public-claim discipline, and trust framing. |
| [`.agent-handoff/COLLAB.md`](.agent-handoff/COLLAB.md) | Current source-of-truth handoff state. |
| [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md) | Markdown version of the reference cockpit. |
| [`.agent-handoff/DASHBOARD.html`](.agent-handoff/DASHBOARD.html) | Static self-contained reference cockpit. |
| [`.agent-handoff/turns/`](.agent-handoff/turns/) | Append-only turn notes, audits, exits, and historical evidence. |
| [`kit/v1/`](kit/v1/) | Starter kit for adopters. |
| [`docs/`](docs/) | Older support docs and historical setup material. |

The source of truth for active work is `COLLAB.md`, backed by the turn notes.
The dashboard renders the state for humans, but the dashboard is not
authoritative by itself.

## Safety / Trust Caveats

Git-visible records are useful because they are easy for humans and agents to
read, diff, preserve, and audit. Git-visible is useful, but it is not tamper-proof.
In plain terms: this repo currently provides an audit-visible trail, not a
fully hardened trust layer.

Safe trust wording for the current state:

- Git-native, audit-visible governance record
- Git-visible work evidence
- verifiable by PR and commit history when preserved
- tamper-evident when protected branches, signing, and manifests are configured
- externally anchorable later

Current caveats:

- no trust-layer implementation exists yet
- tamper-evident hardening is future work
- protected branches, signed commits/tags, manifests, transparency logs, and
  external anchoring are later phases
- Blockchain is not MVP
- no blockchain claim is made here
- no legal or compliance suitability claim is made here
- no actor should treat Markdown alone as an integrity guarantee

Future trust hardening may include protected branches, signed commits or tags,
hash manifests, CI manifest checks, transparency logs, external timestamping,
mirror repositories, or optional hash anchoring for high-stakes deployments.
Those mechanisms can improve record integrity. They do not solve forged human
intent, bad rubrics, prompt injection, compromised credentials, insider misuse,
or agents optimizing for approval.

## Human Decision Notes

Human Decision Notes are intended to preserve concise human rationale without
asking for private chain-of-thought.

The useful shape is:

- why I chose this
- scope boundary
- caveat or condition

Examples:

- "Approving preservation PR only; not authorizing public release or protocol
  relaxation."
- "Reject and redo with clearer evidence that dashboard copy does not imply
  approval."
- "Pause until the preservation PR lands; no agent is blocked."

Notes are descriptive, not normative, until codified by a later protocol or
docs-lock turn. Agents may cite notes as context, but they may not silently
change thresholds, pad evidence, or treat one human decision as a new rule.

## Contributing / Future Work

This repo is still a dogfood project. Public-alpha launch is not approved by
this README.

Useful future work includes:

- clearer adopter examples in `kit/v1/`
- a Human Decision Record template
- a minimal example circle for external repos
- a public-docs scrub after README audit
- a design-only trust-layer plan
- optional trust manifest experiments
- a whitepaper section on cognitive scalability without approval laundering
- explicit discussion of smarter-agent limitations
- future multi-human approval patterns for teams and regulated deployments
- runtime integrations that preserve, rather than blur, the approval boundary

Near-term work should stay narrow:

1. audit this README implementation
2. preserve the result if approved
3. improve adopter kit clarity
4. only then consider public-alpha packaging

The project is intentionally conservative about claims. That is part of the
method. The point is not to make agents sound more authoritative. The point is
to make authority visible.
