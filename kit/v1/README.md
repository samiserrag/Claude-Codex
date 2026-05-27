# Portable Collaboration Kit v1

This kit is a reviewable protocol scaffold for running a builder/auditor
collaboration inside an adopting repository. It gives agents a
shared source of truth, append-only turn notes, explicit approval stopgates,
and a cold-readable handoff shape.

The kit is deliberately small. It is not an installer, not a live bridge, not
a framework, not an MCP registration, and not a plugin setup. It copies
plain repository files that humans and agents can review before use.

## Minimum Success Test

The MVP success test is modest:

```text
An adopter copied the kit into {{REPO_NAME}}, assigned their own Coordinator,
Builder, Auditor, and human approver, created one Outcome Packet, ran one
manual Builder/Auditor loop, recorded evidence under .agent-handoff/, and did
not treat satisfied, auditor pass, or model consensus as approval.
```

This kit does not prove external adoption, public proof, public-alpha readiness,
or scale. The examples are examples, not proof.

## Role Assignment Guide

Assign roles before the first turn and write the assignment into the copied
templates:

| Role | Responsibility | Suggested placeholder |
| --- | --- | --- |
| Human approver | Authorizes exact consequences, scope, risk, priority, and release decisions. | `{{HUMAN_APPROVER_LABEL}}` |
| Coordinator | Frames outcomes, synthesizes ambiguity, and drafts packet or exit recommendations. | `{{COORDINATOR_AGENT}}` |
| Builder | Implements or investigates inside the approved scope. | `{{BUILDER_AGENT}}` |
| Auditor | Independently verifies the Builder output and searches for failure modes. | `{{AUDITOR_AGENT}}` |
| Scribe | Records external or human-provided text when the active agent is only preserving a source. | Optional |
| Verifier | Runs a focused check when separate from the Auditor. | Optional |

Role names are portable. Local agent names, vendor names, account names, and
human labels are instance metadata. They should not become reusable state names,
approval states, or template vocabulary.

## Quick Start

1. Copy the files from this folder into the root of the adopting repository,
   preserving the directory structure (especially `.agent-handoff/` and its
   subdirectories).
2. Append the contents of `.gitignore.snippet` to the adopter repo's existing
   `.gitignore`. Do not overwrite the adopter repo's existing ignore rules.
3. Rename template files by removing the `.template` suffix:
   - `AGENTS.md.template` -> `AGENTS.md`
   - `CLAUDE.md.template` -> `CLAUDE.md`
   - `.agent-handoff/PROTOCOL.md.template` -> `.agent-handoff/PROTOCOL.md`
   - `.agent-handoff/COLLAB.md.template` -> `.agent-handoff/COLLAB.md`
   - `.agent-handoff/DASHBOARD.md.template` -> `.agent-handoff/DASHBOARD.md`
     (optional current-state view)
4. Fill every `{{PLACEHOLDER}}` before the first collaboration turn, or leave
   an explicit `N/A` with a reason where the template allows it.
5. Record the local path as `{{LOCAL_REPO_PATH}}` only when a path is needed
   for local reproduction. Do not hard-code machine-specific paths into
   reusable examples.
6. Create an Outcome Packet using
   `.agent-handoff/templates/outcome-packet-template.md`.
7. Write the first turn note under `.agent-handoff/turns/` using
   `.agent-handoff/prompts/starter-turn-note.md`.
8. Stop at the turn cap named in the current experiment authorization until
   the configured human approver explicitly approves continuation.

## Adoption Checklist

- Copy the kit files into the adopting repo.
- Fill role placeholders:
  `{{COORDINATOR_AGENT}}`, `{{BUILDER_AGENT}}`, `{{AUDITOR_AGENT}}`,
  `{{HUMAN_APPROVER_LABEL}}`, `{{REPO_NAME}}`, and `{{LOCAL_REPO_PATH}}`.
- Define irreversible actions that always require exact human approval.
- Define no-touch paths for the first experiment.
- Choose whether the optional Markdown dashboard is in scope.
- Create a minimal Outcome Packet before substantive work.
- Run one manual Builder/Auditor loop.
- Record Builder evidence and Auditor findings in append-only turn notes.
- Use a Human Decision Record for any exact approval, rejection, ask, or pause.
- Preserve via commit or PR only after exact human approval.

## Operating Defaults

- Work local-first, not local-only. Repo-file coordination is the default;
  bridges and adapters are opt-in later layers only when the configured human
  approver approves exact setup.
- Treat file-based handoff as the minimal binding reference: manual paste plus
  `COLLAB.md` and append-only turn notes, with inbox/outbox files only if a
  later scope authorizes them.
- Treat signed event governance as an optional add-on. It is not required for
  the v1 file-based kit.
- Keep live bridges and adapters disabled until the configured human approver
  separately approves the exact MCP registration, plugin setup, bridge
  enablement, `.mcp.json`, or global config change.
- Treat turn caps as per-experiment authorization values, not repo-wide
  defaults.
- Browser QA must name the runner or explicitly say `N/A` with a reason.
- Automation budget is `N/A` unless polling, cron, webhook, or heartbeat work
  is explicitly approved.
- Council, coordinator, builder, auditor, and consultant input is optional and
  file-based by default through prompts, responses, digests, and turn notes.
- Treat gstack, AgentBridge, tmux bridges, LLM Council, Zenith, CCB, Claude
  Squad, and related projects as prior art only unless a separate scope
  approves dependency use.
- Copying this kit into another repository is a separate action from designing
  or reviewing the kit. Do not extract into another repo without explicit
  approval for that repo and file list.

## What This Kit Is Not

- Not an installer or bootstrap script.
- Not a dependency package.
- Not a live MCP bridge, plugin, wrapper, or adapter.
- Not a global agent, model, or tool configuration.
- Not a signed-event governance implementation.
- Not an authorization to create keys, trust registries, event logs, or
  private-key files.
- Not a CI system or test framework.
- Not permission to commit, push, merge, open a PR, install dependencies, or
  enable automation.
- Not a public-alpha release package.
- Not proof that public-proof runs have happened.
- Not a dashboard requirement.
- Not a runtime replacement, agent safety solution, or AI alignment solution.

## Trust Caveats

- V1 records are Git-visible / audit-visible.
- V1 records are not tamper-proof.
- Tamper-evident hardening is future work.
- Blockchain is not MVP and is not required by this kit.
- This kit makes no legal/compliance suitability claim.
- Signing, manifests, and transparency logs are optional future hardening.
- Cryptographic hardening does not prove good judgment, human intent, or
  non-sycophantic agent behavior.

## Durable Behavior Boundary

- observed pattern is not durable behavior.
- memory is context, not authority.
- skill proposal is not approval.
- automation proposal is not approval.
- repeated workflow is not approval.
- only the human approver can authorize durable behavior.

Use `.agent-handoff/templates/durable-behavior-proposal-template.md` before
creating or changing memory, hosted memory, skills, subagents, automations,
scheduled checks, standing prompts, rubric thresholds, dashboard defaults, kit
templates, evidence thresholds, approval thresholds, or workflow checklists.

Memory may be evidence, but memory is context, not authority. Memory,
summaries, and repeated workflow patterns cannot override the Outcome Packet,
rubric, no-touch list, or approval boundary.

## Invocation Breadcrumb

When durable behavior materially shapes a turn, name it in the turn note:

```text
Durable behavior active this turn:
- skills:
- subagents:
- automations:
- memory files consulted:
- standing rules invoked:
```

If no durable behavior was active, write `none` rather than omitting the
breadcrumb.

## Approval-Boundary Snippets

Reusable copy for packets, turn notes, audits, and human decision records:

```text
satisfied is not approval.
Auditor pass is not approval.
Model consensus is not approval.
Human approval authorizes only the exact named consequence.
This authorizes: {{EXACT_AUTHORIZED_ACTION}}.
This does NOT authorize: {{EXCLUDED_ACTIONS}}.
```

## Templates And Examples

Templates:

- `.agent-handoff/templates/outcome-packet-template.md`
- `.agent-handoff/templates/human-decision-record-template.md`
- `.agent-handoff/templates/durable-behavior-proposal-template.md`

Examples:

- `.agent-handoff/examples/minimal-outcome-packet.md`
- `.agent-handoff/examples/minimal-builder-turn-note.md`
- `.agent-handoff/examples/minimal-auditor-turn-note.md`
- `.agent-handoff/examples/human-decision-record-authorize.md`
- `.agent-handoff/examples/satisfied-not-approved.md`

All examples are illustrative only. They are not proof that the protocol is
public-ready, legally suitable, tamper-proof, adopted by external teams, or
validated at scale.

## Included Files

- `AGENTS.md.template`: builder-facing instructions for the adopter repo.
- `CLAUDE.md.template`: auditor-facing mirror instructions.
- `.agent-handoff/PROTOCOL.md.template`: shared collaboration protocol.
- `.agent-handoff/COLLAB.md.template`: current-state handoff template.
- `.agent-handoff/DASHBOARD.md.template`: optional current-state dashboard.
- `.agent-handoff/turns/.gitkeep`: tracks the turn-log directory.
- `.agent-handoff/digests/.gitkeep`: tracks optional digest storage.
- `.agent-handoff/consultants/.gitkeep`: tracks optional consultant responses.
- `.agent-handoff/prompts/starter-turn-note.md`: first-turn note skeleton.
- `.agent-handoff/prompts/reflection-proposal-template.md`: optional
  proposal-only reflection template.
- `.agent-handoff/templates/`: reusable Outcome Packet, Human Decision Record,
  and Durable Behavior Proposal templates.
- `.agent-handoff/examples/`: minimal example artifacts, clearly marked as
  examples and not proof.
- `.agent-handoff/reflections/harness/.gitkeep`: tracks optional harness
  reflection proposals.
- `.agent-handoff/reflections/project/.gitkeep`: tracks optional project
  reflection proposals.
- `.agent-handoff/reflections/mixed-needs-classification/.gitkeep`: tracks
  mixed or unclear proposals that must be split or classified before action.
- `.gitignore.snippet`: ignore rules to append to the adopter repo.

## Dashboard Optionality

Protocol-only adoption is valid. The optional Decision Cockpit / reference
dashboard is a convenience surface, not the protocol. Some adopters may use
`.agent-handoff/DASHBOARD.md.template`; others may implement the protocol
inside their own dashboard, IDE, CI, compliance surface, or runtime.

Do not add `DASHBOARD.html` to this kit yet. Do not force dashboard adoption.
`COLLAB.md` remains authoritative; the dashboard is operational only, does not
grant approval, and should be refreshed when freshness-trigger fields change.

## Mirror Status Convention

This kit intentionally diverges from this source repo in some places:

- Live `.agent-handoff/PROTOCOL.md` in the source repo is the dogfood
  instance.
- `kit/v1/.agent-handoff/PROTOCOL.md.template` is adopter-facing.
- Some kit template sections use role placeholders where the live dogfood
  protocol may name current local assignments.
- Future protocol/kit packets must explicitly decide whether each section is
  byte-mirrored or intentionally diverged.

Role-model and Coordinator sections currently use placeholders in the kit.
Adopters should treat those placeholders as local configuration, not evidence
that any specific model, vendor, dashboard, or human label is required.

## What Not To Copy From This Source Repo

Do not copy old dogfood turn-note history, local dashboard-design stashes,
ignored design concepts, private advisor notes, trust-layer experiments,
runtime files, account/org identity, local paths, or current source-repo branch
metadata into an adopter repo unless a separate packet explicitly approves that
artifact class.

If public proof is needed, create fresh role-neutral proof artifacts from the
start. Do not rewrite historical dogfood evidence to make it look clean.

## Optional Reflection Proposals

Adopters may use `.agent-handoff/prompts/reflection-proposal-template.md` and
the `.agent-handoff/reflections/` subdirectories when they want proposal-only
reflection artifacts. Reflection may propose improvements, but proposals do not
grant approval or implement changes.

## PR Consolidation In CI-Heavy Repos

For repos with expensive CI or many GitHub Actions checks, prefer one PR per
experiment arc rather than one PR per turn. Use a draft PR while the arc is in
progress. Per-turn `.agent-handoff/` updates may accumulate on one branch. Mark
the PR ready only at a consolidation point, then squash or batch at the PR
boundary when appropriate.

## Prior-Art Citation Convention

When citing prior art, record the source, what was verified, and the date it
was read or observed. For URLs, use this pattern:

```text
{{SOURCE_URL}} (read YYYY-MM-DD)
```

For papers, screenshots, talks, local files, or private notes, record the
medium and observation date instead of implying live verification.

Prior art is not a dependency. Do not install, vendor, enable, or copy
third-party tools unless a separate approval explicitly scopes that action.
