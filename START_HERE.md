# Start Here

Read this first if you are new to this repo.

`claude-codex` is a public showcase and build journal for a Git-native
approval-boundary protocol. The repo dogfoods the method on its own work. The
history is part of the evidence, but it is not the adopter kit.

## If You Want To Understand The Method

Start with [README.md](README.md), then read:

1. [`.agent-handoff/PROTOCOL.md`](.agent-handoff/PROTOCOL.md) for the live
   dogfood protocol.
2. [`.agent-handoff/COLLAB.md`](.agent-handoff/COLLAB.md) for current state.
3. A few recent files in [`.agent-handoff/turns/`](.agent-handoff/turns/) for
   proof artifacts.

The core boundary:

```text
satisfied is not approval.
Auditor pass is not approval.
Model consensus is not approval.
Human approval authorizes only the exact named consequence.
```

## If You Want To Copy The Kit

Use [`kit/v1/README.md`](kit/v1/README.md).

Copy the kit from `kit/v1`. Do not copy this repo's live `.agent-handoff`
history into your repo as if it were required protocol setup.

The kit supports protocol-only adoption. The reference cockpit is optional.

## If You Want To Inspect Proof

Treat the turn notes as build-journal evidence:

- Outcome Packets show the scope before work began.
- Builder notes show what changed and how it was verified.
- Auditor notes show independent critique.
- Exit or consultation notes show what was accepted, deferred, or left
  unproven.

The old messy history is preserved rather than laundered. It does not mean an
adopter needs the same model assignments, process volume, local labels, or
dashboard state.

## If You Want To See The Reference Cockpit

Open [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md) or
[`.agent-handoff/DASHBOARD.html`](.agent-handoff/DASHBOARD.html).

Decision Cockpit v1 is a static reference cockpit snapshot. `COLLAB.md`
remains authoritative. The cockpit does not grant approval and is not the
primary public entrypoint.

## Board Mode / Structured Workspace Context

Board Mode and similar structured AI workspaces help humans manage agent work.
This protocol helps humans authorize agent consequences.

Task completion, auditor satisfaction, and model consensus are not human
authorization. A stable main version should not change just because an agent
completed a task. The protocol separates exploration, satisfaction, approval,
and durable consequence.

## What Not To Treat As Adoption Requirements

Do not treat these as requirements for your repo:

- this repo's historical turn-note volume
- this repo's live `.agent-handoff` state
- this repo's current model assignments
- this repo's dashboard snapshot
- this repo's GitHub metadata
- old local paths or old dogfood-specific labels in historical notes

Use the kit, fill local placeholders, define your own human approver, and keep
the approval boundary explicit.

## What Is Still Future Work

The kit dry-run is still future portability proof. This repo does not prove
external adoption, external installability, larger-team scale, trust hardening,
runtime transport safety, or legal/compliance suitability.

Public-alpha release, public-proof runs, clean repo creation, trust-layer
implementation, dashboard redesign, skills, memory files, automations,
subagents, and scheduled checks are not approved by this orientation.
