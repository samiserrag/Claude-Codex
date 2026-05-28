# Claude-Codex Governance Harness

A public build journal and dogfood source repo for a Git-native
approval-boundary protocol for cross-model agent work.

This repo demonstrates the protocol on itself. The historical handoffs, turn
notes, audits, stops, corrections, and preservation PRs are part of the proof.
They are not the copyable adopter surface. If you want to try the method in
another repo, start with the kit:

- [Start here](START_HERE.md) for the short visitor path.
- [Copy the adopter kit](kit/v1/README.md) from `kit/v1`.
- Read the live dogfood state in [`.agent-handoff/COLLAB.md`](.agent-handoff/COLLAB.md).
- Inspect the reference cockpit in [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md)
  or [`.agent-handoff/DASHBOARD.html`](.agent-handoff/DASHBOARD.html).

The core rule is simple:

> `satisfied` is not approval.

Auditor pass is not approval. Model consensus is not approval. Human approval
authorizes only the exact named consequence.

## What This Is

This is a repo-native governance harness for human-supervised, cross-model
agent work. It is designed for workflows where one agent may build, another may
audit, a coordinator may synthesize, and a human approver must remain the only
actor who can authorize consequences.

The public posture is intentionally transparent:

- `claude-codex` is the build journal and dogfood source.
- `kit/v1` is the adopter path.
- `.agent-handoff/` is this repo's live dogfood instance.
- Historical turn notes are evidence, not required adopter ceremony.
- The reference cockpit is optional; protocol-only adoption is valid.

The protocol is the Git-native approval-boundary protocol. The kit is
`kit/v1`. The reference cockpit is Decision Cockpit v1. An Outcome Circle is a
bounded builder/auditor loop inside an approved Outcome Packet. An Outcome
Packet is the contract for entering that loop.

## Why It Exists

Modern agent workflows can produce plausible work quickly. That creates two
practical risks:

- humans may rubber-stamp work because agents sound confident or agree with
  one another
- agent states such as `done`, `audited`, or `satisfied` may be treated as if
  they were human approval

The method makes the boundary visible:

- agents produce evidence
- agents make judgments and recommendations
- auditors search for failure modes
- coordinators synthesize ambiguity and exit conditions
- humans authorize consequences
- the repo records the trail

Board Mode and similar structured AI workspaces help humans manage agent work.
This protocol helps humans authorize agent consequences. A stable main version
should not change just because an agent completed a task. Task completion,
auditor satisfaction, and model consensus are not human authorization. The
protocol separates exploration, satisfaction, approval, and durable
consequence.

## Visitor Paths

### If you want the short orientation

Read [START_HERE.md](START_HERE.md), then skim this README through
"Current Proof Status."

### If you want to copy the method into another repo

Start with [`kit/v1/README.md`](kit/v1/README.md). Copy the kit files from
`kit/v1`, not this repo's historical `.agent-handoff` state.

The kit includes:

- role and placeholder vocabulary
- Outcome Packet, Human Decision Record, and Durable Behavior Proposal
  templates
- minimal examples marked as examples, not proof
- approval-boundary snippets
- dashboard optionality
- trust caveats

### If you want to inspect the proof trail

Read representative artifacts instead of trying to absorb every historical
turn note first:

- [`.agent-handoff/PROTOCOL.md`](.agent-handoff/PROTOCOL.md) for the live
  dogfood protocol
- [`.agent-handoff/COLLAB.md`](.agent-handoff/COLLAB.md) for current state
- [`.agent-handoff/turns/`](.agent-handoff/turns/) for append-only evidence
- [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md) for the
  reference cockpit snapshot

The turn notes include messy history. That is deliberate. Old dogfood evidence
is preserved rather than laundered.

## How The Protocol Works

The core pattern is:

1. Define a bounded **Outcome Packet** before work begins.
2. Let a **Builder** perform the scoped work.
3. Let an **Auditor** independently inspect the work.
4. Record evidence in repo-visible turn notes.
5. Keep `built`, `audited`, `satisfied`, and `human-approved` as separate
   states.
6. Require exact human approval text before commit, push, merge, release,
   launch, public wording, trust-layer changes, or other named consequences.

The state separation matters because each state answers a different question:

| State | What it means | What it does not mean |
| --- | --- | --- |
| Built | A builder produced the scoped artifact or report. | The artifact is correct, reviewed, or authorized. |
| Audited | An auditor inspected the work against the packet. | The human has approved the consequence. |
| Satisfied | The auditor believes the rubric was met. | Commit, push, merge, launch, or public release is authorized. |
| Human-approved | The configured human approver authorized an exact action. | Any adjacent action, broader scope, or future relaxation is authorized. |
| Committed / pushed / merged | A Git consequence occurred after exact approval. | Public release, naming, launch, or downstream adoption is automatically approved. |
| Launched / published | A public consequence occurred after exact approval. | The method is validated at larger scale or legally/commercially certified. |

This protects humans from quiet scope expansion. It also prevents agents from
being treated as fake approvers.

## Decision Cockpit v1

Decision Cockpit v1 is the optional reference cockpit for this repo-visible
state. It is a static, self-contained view. It does not grant approval and it
does not replace `COLLAB.md`.

The cockpit demonstrates how to foreground:

- the current human role
- the decision needed, if any
- the exact action surfaced
- what the action authorizes
- what the action does not authorize
- evidence at a glance
- risk context, not risk permission
- human decision notes
- source-of-truth reminders

The cockpit is optional. Adopters can use the protocol without this dashboard,
or implement the same approval-boundary semantics inside their own dashboard,
IDE, CI, compliance surface, or runtime.

## Adoption Patterns

| Pattern | Use when | What to copy |
| --- | --- | --- |
| Protocol-only adoption | You already have a repo workflow and want approval-boundary discipline. | Outcome Packet shape, roles, result states, stop conditions, turn notes. |
| Reference cockpit adoption | You want the static cockpit as a human-facing view. | The dashboard semantics, after deciding whether the optional dashboard is in scope. |
| Adapted cockpit adoption | You have your own product UI, IDE, or internal dashboard. | Decision needed, exact action, not-authorized block, evidence, notes, trust caveat. |
| Runtime-integrated adoption | You already run agents in an orchestration layer. | Approval-boundary states and human authorization gates around runtime actions. |
| Compliance / audit adoption | You need a reviewable work record. | Git-visible packets, turn notes, audit reports, exact approval records, and future manifest hardening. |

The kit in [`kit/v1/`](kit/v1/) is the starting adoption path. Treat it as a
template, not as proof that your repo is governed merely because files were
copied.

## Dogfood History

This repo's history is part of the evidence. It shows scoped packets, builder
notes, audits, rejected or paused work, name-scrub decisions, dashboard
iterations, kit implementation, public-position debates, and preservation
discipline.

Read that history as a build journal:

- it shows how the method behaved under real pressure
- it includes old local assumptions and messy turns
- it preserves stops instead of hiding them
- it does not imply adopters need the same model assignments
- it does not imply adopters need the same process volume
- it does not make the historical repo anonymized

Do not copy this repo's dogfood history into an adopter repo as if it were the
protocol. Copy the kit and create your own local evidence trail.

## Current Proof Status

Evidence preserved in this repo supports these claims:

- The Git-native approval-boundary protocol has live dogfood proof.
- Decision Cockpit v1 has audited reference-cockpit proof.
- The root README had a prior audited stranger-orientation pass.
- Adopter-facing active surfaces had a name-scrub pass without rewriting
  historical dogfood evidence.
- `kit/v1` has a first-pass audited kit implementation.
- The kit uses role/placeholder language and preserves dashboard optionality.
- The public showcase positioning has a scoped and audited decision history.
- The record is Git-visible / audit-visible.

This is meaningful evidence because failures, stops, and corrections remain in
the record. The project did not only preserve successes.

## What Remains Unproven

This repo does not prove:

- external adoption
- external installability
- that a stranger can extract and run the kit without help
- production readiness for the kit
- burden-reduction magnitude
- behavior under severe model disagreement
- scale across teams or organizations
- long-term resistance to visible-rule gaming or sycophantic adaptation
- runtime, wakeup, notifier, or auto-handoff safety
- trust-layer tamper-evidence
- legal or compliance suitability
- fresh role-neutral public-proof runs

E6-KIT-DRY-RUN-001 remains future portability proof. It is still needed before
claiming kit extractability or production readiness.

## What Is Not Approved Or Claimed

This README does not approve public-alpha release, public-proof runs, clean
repo creation, trust-layer implementation, dashboard redesign, runtime work,
top-of-funnel launch, skills, memory files, automations, subagents, scheduled
checks, or protocol relaxation.

The method is not a runtime replacement. It is not a general agent-safety
solution. It is not an AI alignment solution. It is not a legal or compliance
product.

## Durable Behavior Boundary

Observed repeated workflow can become a proposal, but it is not durable
behavior by itself.

- observed pattern is not durable behavior
- memory is context, not authority
- skill proposal is not approval
- automation proposal is not approval
- repeated workflow is not approval
- only the human approver can authorize durable behavior

Future skills, memory files, automations, subagents, scheduled checks, standing
prompts, rubric changes, threshold changes, dashboard defaults, and kit
templates require explicit human approval through the durable-behavior path.

## Trust Caveats

Git-visible records are useful because they are easy for humans and agents to
read, diff, preserve, and audit. Git-visible is useful, but it is not
tamper-proof. In plain terms: this repo currently provides an audit-visible
trail, not a fully hardened trust layer.

Current caveats:

- no trust layer exists yet
- tamper-evident hardening is future work
- protected branches, signed commits/tags, manifests, transparency logs, and
  external anchoring are later phases
- Blockchain is not MVP
- no blockchain claim is made here
- no legal or compliance suitability claim is made here
- no actor should treat Markdown alone as an integrity guarantee

Future hardening may improve record integrity. It does not prove good judgment,
human intent, or non-sycophantic agent behavior.

## Repo Map

| Path | Purpose |
| --- | --- |
| [START_HERE.md](START_HERE.md) | Short first-reader orientation and routing. |
| [README.md](README.md) | Public showcase / build journal overview. |
| [AGENTS.md](AGENTS.md) | Codex-facing operational instructions for this dogfood repo. |
| [CLAUDE.md](CLAUDE.md) | Claude Code-facing operational instructions for this dogfood repo. |
| [`kit/v1/`](kit/v1/) | Copyable adopter kit. |
| [`kit/v1/README.md`](kit/v1/README.md) | Kit quick start and adoption checklist. |
| [`.agent-handoff/PROTOCOL.md`](.agent-handoff/PROTOCOL.md) | Live dogfood protocol and stop discipline. |
| [`.agent-handoff/OPERATING-MODEL.md`](.agent-handoff/OPERATING-MODEL.md) | Reference operating model and role/lane explanation. |
| [`.agent-handoff/STRATEGY.md`](.agent-handoff/STRATEGY.md) | Strategy, proof status, public-claim discipline, and trust framing. |
| [`.agent-handoff/COLLAB.md`](.agent-handoff/COLLAB.md) | Current source-of-truth handoff state. |
| [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md) | Markdown reference cockpit snapshot. |
| [`.agent-handoff/DASHBOARD.html`](.agent-handoff/DASHBOARD.html) | Static self-contained reference cockpit. |
| [`.agent-handoff/turns/`](.agent-handoff/turns/) | Append-only turn notes, audits, exits, and historical evidence. |
| [`docs/`](docs/) | Older support docs and historical setup material. |

## Future Work

Likely next work remains narrow:

1. preserve this public-position implementation if it passes audit and receives
   exact human approval
2. run a kit dry-run as portability proof
3. decide later whether a clean adopter/distillation repo is useful
4. consider fresh role-neutral public-proof runs only after the appropriate
   proof surface is chosen
5. consider trust hardening only through a separate approved track

The project is intentionally conservative about claims. The point is not to
make agents sound more authoritative. The point is to make authority visible.
