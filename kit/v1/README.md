# Portable Collaboration Kit v1

This kit is the copyable adopter surface for a build-journal postmortem on AI
verification theatre. Read [`README.md`](../../README.md) and the whitepaper
([`docs/verification-theater-in-ai-agent-work.md`](../../docs/verification-theater-in-ai-agent-work.md))
first for the full result. The short version: over about a month the author
built a Git-native governance harness and dogfooded it, and **most of the
governance machinery turned out to be theatre.** This kit gives you the part
that survived — and is honest about the part that did not.

## Copy the floor, not the scaffolding

What survived is small, boring, and learnable by anyone who can read eight
lines of shell and open a web page. It is the only thing worth copying:

1. **Human-approved gates** — a handful of deterministic checks a competent
   human has *read and approved* (not merely run), small enough to read in
   full, run on inputs the human chooses, and confirm by the *consequence* —
   not by the gate's printed verdict. These live in the source repo's
   [`gates/`](../../gates/). Copy them, read them, run the smoke-detector
   self-check, and keep them small. See **[How To Copy And Run The
   Gates](#how-to-copy-and-run-the-gates)** below.
2. **The operating-limits boundary doc** — a short document a human owns that
   names the allowed blast radius and the irreversible doors. Useful for
   organizing a human's attention; *not* a control on its own. See
   [`ENVELOPE.md`](../../ENVELOPE.md) (kept and reframed) and **[The Operating-
   Limits Boundary Doc](#the-operating-limits-boundary-doc)** below.
3. **The state separation** — keeping `built` / `audited` / `satisfied` /
   `human-approved` distinct, and the one rule that survived: **`satisfied` is
   not approval.** The protocol files this kit ships exist to hold that
   separation. See **[The State Separation](#the-state-separation-the-surviving-discipline)**
   below.

That is the surviving toolkit. It is much smaller than what was built, and
**none of it is novel** — it is CI, branch protection, separation of duties,
live probes, and "read the script," assembled with a human who refuses to
trust the agent's self-report.

## Do not copy the graveyard

The elaborate scaffolding around these incidents was tried, documented, and is
reported as theatre — preserved as a warning, **not** as a recommendation. The
[whitepaper](../../docs/verification-theater-in-ai-agent-work.md) has the
item-by-item accounting. The short list of what **not** to treat as a control:

- **The "envelope" / operating-limits doc as a *solution*.** A boundary
  enforced only by the agent attesting "I stayed inside it" is the *same class
  of claim* as the auditor attesting "I verified the QA" — a self-report from
  the untrusted party. Keep the doc to organize attention; do not mistake it
  for a control.
- **The Decision Cockpit / dashboard as oversight.** A dashboard that
  summarizes agent work for a human to approve — when the human cannot
  independently check the summary, and the summary is written by the untrusted
  agent — launders agent decisions into a form a human will sign. The optional
  dashboard template in this kit is a convenience surface only (see [Dashboard
  Optionality](#dashboard-optionality)); it is not the floor and grants no
  approval.
- **Cross-vendor convergence as grounding.** Pairing different vendors' models
  caught some reasoning errors and missed every missing-observation error. It
  is useful for review, useless as evidence — and the strongest claim this work
  supports is only: *we found nothing — our own attempts included — that closes
  the comprehension gap; demand the deterministic floor and run it yourself.*

## What this kit ships, and what it does not

This kit is deliberately small. It is not an installer, not a live bridge, not
a framework, not an MCP registration, and not a plugin setup. It copies plain
repository files that humans and agents can review before use. The files it
ships are the **scaffolding for the state separation and the operating-limits
boundary** — the protocol, the handoff template, the append-only turn-note
shape, and the approval-boundary snippets. The **human-approved gates
themselves are the load-bearing floor and are not yet shipped inside this kit**;
copy them from the source repo's [`gates/`](../../gates/) and read them before
you rely on them. (Gate files in this kit are future work; see [What This Kit
Is Not](#what-this-kit-is-not).)

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

## How To Copy And Run The Gates

The gates are the part where **reality decides, not an agent**, and **you can
re-run them yourself**. Copy them from the source repo's [`gates/`](../../gates/).
Each one answers a single yes/no question, prints `ALLOW` or `BLOCK`, and exits
`0` or `1`. That is the whole contract.

| Gate | The question it answers | Who answers |
| --- | --- | --- |
| `check-blast-radius.sh <path>` | Is this write inside the repo, or reaching outside it? | the filesystem path |
| `check-secrets.sh <file>` | Does this file contain an obvious secret? | a pattern match |
| `check-irreversible-git.sh "<cmd>"` | Is this irreversible action approved? | the command string + an approval token |

The discipline that makes them a *floor* and not one more thing to take on
faith has three parts, and all three take the verdict out of the agent's hands:

1. **The check is small enough to read in full.** Simplicity is the security
   property. A clever 500-line "verifier" is unauditable; an eight-line one is
   not. An agent's eloquence and complexity are the *threat surface*, not a
   reassurance.
2. **You run it on inputs you choose, not the agent's curated ones.**
3. **You confirm the *consequence* on a surface the agent does not control** —
   not "the script said the push was blocked" but `git log` showing the commit
   never landed; not "the deploy passed" but the GitHub page; not "the file was
   written" but `ls`.

You do not have to be an expert to *run* a gate and watch it fire. Hold a lit
match to the smoke detector with `gates/test-gates.sh`, which feeds every gate a
known-good and a known-bad input and confirms each one allows the good and
blocks the bad — no agent in the loop. Telling whether a gate is the *right*
gate — not too tight, not too loose — is where human competence still has to
live. A gate can be miscalibrated in either direction: too tight, it blocks
legitimate work while the green elsewhere gives false comfort; too loose, it
waves through exactly what it was meant to catch. A check no qualified human has
read is not "human-approved" — it is one more unexamined claim wearing a green
checkmark.

The gates cover exactly one axis: the **reality-checkable and reversible**
surface (blast radius, secrets, irreversible git). They do **nothing** for
whether the agent's *judgment* is correct. There is no gate for good judgment,
and that narrowness is the honest headline, not a gap to paper over.

## The Operating-Limits Boundary Doc

Write a short boundary document a human owns. It names the allowed blast radius,
what is reversible, and which irreversible doors always require exact human
approval. The reference is [`ENVELOPE.md`](../../ENVELOPE.md) in the source
repo — kept and reframed from the project's original "approval envelope."

Use it to organize a human's limited attention and to write down what counts as
irreversible. Do **not** mistake it for a control: a boundary enforced only by
the agent attesting "I stayed inside it" is a self-report from the untrusted
party, the same class of claim as a fabricated audit. Sign that the *process*
was followed; never sign that work you could not check is correct. (This is the
"envelope → operating limits" rename — borrowed from the aviation/automotive
*operating envelope*, a bounded region of safe states, not from a paper mail
envelope. Older files and turn notes still say "envelope"; that history is
preserved on purpose because the rename *is* a finding.)

## The State Separation (the surviving discipline)

Keeping these states distinct is the part of the protocol that held up. Each
answers a different question, and the protocol files this kit ships exist to
keep them from collapsing into one another:

| State | What it means | What it does not mean |
| --- | --- | --- |
| Built | A builder produced the scoped artifact or report. | The artifact is correct, reviewed, or authorized. |
| Audited | An auditor inspected the work. | The human has approved the consequence. |
| Satisfied | The auditor believes the rubric was met. | Commit, push, merge, launch, or release is authorized. |
| Human-approved | The configured human authorized an exact action. | Any adjacent action, broader scope, or future relaxation is authorized. |
| Committed / merged | A Git consequence occurred after exact approval. | Public release, naming, or launch is automatically approved. |

This protects a human from quiet scope expansion, and it prevents an agent's
`done` / `audited` / `satisfied` from being treated as a human's approval. The
one rule that survived: **`satisfied` is not approval.** Auditor pass is not
approval. Model consensus is not approval. A green check is not approval. Human
approval authorizes only the exact named consequence.

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
- Copy the human-approved gates from the source repo's [`gates/`](../../gates/),
  read each one in full, and run `gates/test-gates.sh` (the smoke-detector
  self-check) before relying on them.
- Write an operating-limits boundary doc a human owns, and record its path as
  `{{OPERATING_LIMITS_DOC_OR_NA}}` in the agent templates (or `N/A` with a
  reason if you are deferring it).
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
- Not yet a carrier for the human-approved gates themselves: the deterministic
  floor lives in the source repo's [`gates/`](../../gates/) and must be copied
  and read from there. Bundling the gate files into this kit is future work.

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

Protocol-only adoption is valid, and it is the recommended path. The optional
Decision Cockpit / reference dashboard is a convenience surface, not the
protocol, and **not the floor.** Some adopters may use
`.agent-handoff/DASHBOARD.md.template`; others may implement the protocol
inside their own dashboard, IDE, CI, compliance surface, or runtime.

Be honest about what a dashboard is and is not. In the source project the
Decision Cockpit was reported as theatre: a dashboard that summarizes agent work
for a human to approve does not produce oversight when the human cannot
independently check the summary and the summary is written by the untrusted
agent. It launders agent decisions into a form a human will sign. Use the
dashboard, if at all, to *navigate* the substrate — never as the thing you
approve from. The approval still terminates at a consequence you confirmed
yourself.

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
