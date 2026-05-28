# E6-KIT-DRY-RUN-001 - Codex kit dry-run scope lock

## Coordinator Trigger

- State: ROUTINE
- Reason: the configured human approver approved this design-only scope-lock
  Outcome Circle with exact allowed files, no scratch-repo creation, no kit
  edits, and no public-proof or release work.

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: claude-codex-outcome-circle
- subagents: none
- automations: none
- memory files consulted: /Users/samiserrag/.codex/memories/MEMORY.md quick pass
- standing rules invoked: AGENTS.md, PROTOCOL.md, COLLAB.md, current Outcome
  Packet, Durable Behavior Boundary, no-touch list, no-branch/no-PR/no-merge
  rules
```

Memory was used as context only, not as authority. The current Outcome Packet
and repo-visible files govern on conflict.

## Clean Entry Evidence

Recorded before any E6-KIT-DRY-RUN-001 file write:

```text
$ git rev-parse HEAD
8162a55c6f93f96afbc9b62507fe8e695d8e7fcc

$ git status --short --branch --untracked-files=all
## main...origin/main

$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

Entry conclusion: clean `main` at or after PR #25 merge commit
`8162a55c6f93f96afbc9b62507fe8e695d8e7fcc`. Dashboard-design stash is
present and was not popped, dropped, inspected, or restored.

## Full Outcome Packet Scribed Before Analysis

### 1. Outcome Description

Define the exact dry-run plan for testing whether `kit/v1` is actually
extractable and usable in a scratch repo by a stranger-like adopter.

This is design-only.

Do not create a scratch repo. Do not copy kit files. Do not run the dry-run. Do
not edit `kit/v1/**`. Do not edit README / START_HERE / dashboard. Do not
start public-proof runs. Do not create a clean adopter-facing repo. Do not
publish anything.

The dry-run scope-lock must answer:

- what the dry-run will test
- where it will run
- what kit files will be copied
- what minimal adopter setup will look like
- what the first adopter Outcome Circle should be
- what counts as success
- what counts as failure
- how hidden side-skills/memories will be handled
- what artifacts will be allowed in the scratch repo
- what must remain unclaimed after the dry-run

### 2. Rubric

PASS only if all criteria are satisfied.

#### A. Entry / Packet Discipline

- clean entry recorded before any file write
- full packet scribed before analysis
- no `* 2.md` duplicate files
- dashboard-design stash preserved and not popped/dropped
- no unexpected dirty files

#### B. Dry-Run Goal

Define the dry-run goal precisely.

Expected goal:

- test whether a new repo can adopt `kit/v1` enough to run one small manual
  Outcome Circle
- test whether a visitor can understand the protocol from README / START_HERE /
  kit docs
- test whether the kit can operate without this repo's dogfood history
- test whether a scratch repo can produce turn notes, handoff state, and human
  decision records using the kit templates

The dry-run must not claim:

- external adoption proven
- kit production-ready
- public-alpha ready
- legal/compliance suitable
- trust-layer implemented
- scale proven

#### C. Scratch Repo Placement

Recommend exact dry-run placement.

Must answer:

- local scratch directory vs GitHub repo
- private vs public
- whether to initialize git
- whether to create remote
- whether to commit dry-run artifacts
- whether to delete/archive after test

Expected lean:

- local scratch repo first
- no GitHub remote initially
- git initialized locally
- dry-run artifacts preserved locally and then summarized back into
  `claude-codex`
- no public repo creation during first dry-run

#### D. Kit Extraction Plan

Specify exactly what is copied from `kit/v1`.

Must decide:

- copy all of `kit/v1/**`
- or copy only selected files
- whether to rename `.template` files
- whether to keep placeholders
- whether to instantiate placeholders
- whether to copy examples
- whether to copy dashboard template
- whether to include `DASHBOARD.html` (expected: no)

Must preserve:

- dashboard optionality
- protocol-only adoption valid
- examples are examples, not proof

#### E. Minimal Adopter Setup

Define the minimal scratch repo content.

Expected content:

- `.agent-handoff/PROTOCOL.md` or rendered equivalent from template
- `.agent-handoff/COLLAB.md` or rendered equivalent
- `.agent-handoff/turns/`
- kit templates/examples as source reference
- simple project brief
- optional AGENTS / CLAUDE templates only if needed
- no runtime/product app required

#### F. First Dry-Run Outcome Circle

Specify the first small Outcome Circle to run in the scratch repo.

Must be:

- low-risk
- mechanical or lightly judgment-based
- not public-facing
- not dependent on this repo's dogfood history
- doable in one builder/auditor iteration if the kit works

Candidate examples to evaluate:

- create a tiny PROJECT_BRIEF.md
- verify protocol/template placeholder rendering
- run a one-doc mirror check
- create a minimal Human Decision Record
- test `satisfied is not approval` example

Recommend one.

#### G. Hidden Skills / Memory Test

This is load-bearing.

The dry-run must test whether scratch-repo/adopter turns rely on hidden
side-skills or memories an adopter would not have.

Scope-lock must define:

- how the builder/auditor will declare active durable behavior
- how to detect if global skills/memories shaped the turn
- whether agents should avoid using repo-specific global skills/memories if
  controllable
- what to do if they cannot avoid them
- what counts as a clean adopter-like dry-run
- what counts as a contaminated dry-run

Required rule:

- If Codex or Claude uses a methodology-specific skill/memory during the
  dry-run, the dry-run may still be useful, but it cannot claim pure kit-only
  extractability unless the role of that skill/memory is explicitly isolated
  and judged non-essential.

Required breadcrumb:

```text
Durable behavior active this turn:
- skills:
- subagents:
- automations:
- memory files consulted:
- standing rules invoked:
```

#### H. Success Criteria

Define concrete success criteria.

Minimum success should include:

- scratch repo can be initialized from kit docs without editing `claude-codex`
- one small Outcome Circle packet can be written from kit guidance
- builder turn note can be produced using kit template
- auditor turn note can be produced using kit template
- human decision record can be drafted
- `satisfied` remains separate from approval
- no hidden dogfood-only paths are required
- no hard-coded Sami / Claude / Codex / GPT-5.5 role names are required
- no dashboard is required
- no public release claims are made

#### I. Failure Criteria

Define concrete failure criteria.

Failures should include:

- kit instructions require this repo's turn history to understand
- hard-coded local paths or personal names are required
- model-specific roles are required
- dashboard becomes required
- scratch repo cannot produce a valid Outcome Packet
- scratch repo cannot produce a valid turn note
- agents rely on hidden skills/memories without which the kit would not work
- approval boundary collapses into `satisfied`
- public/production claims appear
- dry-run needs more than scoped iterations because kit guidance is unclear

#### J. Allowed Scratch Mutations For Future Dry-Run

Define what future dry-run implementation may mutate.

Should include:

- create local scratch directory
- initialize git locally
- copy/render kit files
- create small project brief
- create dry-run turn notes
- create dry-run COLLAB
- run read-only verification commands
- possibly commit locally, if explicitly approved in the future dry-run packet

Should not include:

- GitHub remote creation
- public repo creation
- pushing
- publishing
- modifying `claude-codex` kit during the dry-run
- installing runtimes or services
- creating skills/memories/automations
- using production app repos
- touching Open Mic Colorado

#### K. Evidence To Return To claude-codex

Define what the dry-run returns to this repo.

Expected:

- scratch repo path
- files created
- exact commands run
- outcome packet used
- builder/auditor turn note excerpts or full copies
- pass/fail table
- hidden skills/memory classification
- defects found
- recommended kit fixes
- what claims remain unearned

#### L. Public-Position Relationship

Define how the dry-run relates to public positioning.

Must say:

- dry-run is portability proof
- dry-run is not public release
- dry-run is not public-proof run
- dry-run is not external adoption
- dry-run may support a future claim that the kit is manually extractable if it
  passes
- public-alpha remains unapproved

#### M. Board Mode / Workspace Context

Use the Board Mode insight only as context if relevant.

Allowed framing:

- structured AI workspaces separate exploratory tasks from stable main versions
- this protocol separates task completion, auditor satisfaction, and model
  consensus from human authorization

Do not turn the dry-run into:

- Board Mode
- Kanban
- agent workspace product
- dashboard redesign
- operations board

#### N. Naming Discipline

Preserve:

- protocol = Git-native approval-boundary protocol
- kit = `kit/v1`
- reference cockpit = Decision Cockpit v1
- do not use `Polaris` as protocol name

#### O. No-Touch Discipline

No changes outside allowed files.

### 3. Allowed Files

Builder may write:

- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-DRY-RUN-001-codex-kit-dry-run-scope-lock.md`

Auditor may later write:

- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-DRY-RUN-001-claude-audit-kit-dry-run-scope-lock.md`

Read-only evidence:

- `README.md`
- `START_HERE.md`
- `kit/v1/README.md`
- `kit/v1/**`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/turns/E6-PUBLIC-POSITION-IMPLEMENTATION-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-PUBLIC-POSITION-IMPLEMENTATION-001-claude-audit-public-showcase-implementation-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-codex-durable-behavior-promotion-boundary.md`
- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-claude-audit-durable-behavior-promotion-boundary.md`

### 4. No-Touch List

Do not edit:

- `README.md`
- `START_HERE.md`
- `AGENTS.md`
- `CLAUDE.md`
- `kit/v1/**`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/mockups/**`
- `.gitignore`
- `.design-concepts/`
- `docs/`
- `.agent-handoff/tools/alert-state.sh`
- runtime/product files
- trust-layer files
- memory files
- skills
- subagents
- automations
- scheduled checks
- public-release files
- public-proof-run files
- scratch repo files
- clean repo files
- pilot repo
- live Open Mic Colorado
- unrelated files

### 5. Max Iterations

2.

Iteration 2 may only correct dry-run scope gaps, hidden-skill/memory test gaps,
claim-risk mistakes, no-touch defects, or auditor-identified scope-lock
defects. It may not run the dry-run.

### 6. Builder

Codex.

Builder cannot grade own work.

### 7. Auditor / Grader

Claude Code.

Auditor must independently verify:

- exact files changed
- all dry-run scope questions answered
- hidden skill/memory test is first-class
- dry-run remains design-only
- no scratch repo created
- no kit edits
- no public release / public-proof / trust-layer / dashboard work
- no memory/skill/automation/subagent/scheduled-check created
- no `.design-concepts` / stash work
- claims discipline safe

### 8. Pass Evidence

Builder must record:

- clean-entry evidence
- HEAD
- git status
- stash status
- duplicate-file check
- full packet scribed before analysis
- sources read
- recommended dry-run path
- scratch repo placement decision
- kit extraction plan
- first dry-run Outcome Circle recommendation
- hidden skill/memory testing plan
- success criteria
- failure criteria
- allowed scratch mutations
- evidence-return plan
- no-touch verification
- `git diff --check`

Suggested verification commands:

- `git rev-parse HEAD`
- `git status --short --branch --untracked-files=all`
- `git stash list | head -5`
- `find .agent-handoff -name '* 2.md' -print`
- `git diff --check`
- `git diff -- README.md START_HERE.md AGENTS.md CLAUDE.md`
- `git diff -- kit/v1`
- `git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md`
- `git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html`
- `git diff -- .gitignore`
- `test ! -d .design-concepts && echo ".design-concepts absent"`

### 9. Stop Conditions

Stop if:

- entry tree is not clean
- dashboard-design stash is missing, popped, or dropped
- duplicate `* 2.md` file exists
- packet cannot be scribed before analysis
- scope-lock would require kit edits
- scope-lock would require scratch repo creation
- scope-lock would require public release wording
- scope-lock would require public-proof run
- scope-lock would require clean repo creation
- scope-lock would require memory/skill/automation creation
- any no-touch path changes
- Codex and Claude later disagree
- more than 2 iterations would be needed

### 10. When The Human Approver Is Called Back

Call the human approver for:

- final approval
- any commit/push/branch/PR/merge
- any scratch repo creation
- any clean repo creation
- any public-proof run
- any public release / launch / top-of-funnel decision
- any trust-layer implementation
- any memory/skill/automation creation
- hidden skill/memory ambiguity
- dry-run environment choice ambiguity
- blocker / failed / max iterations / scope conflict / ambiguous state
- satisfied result, because satisfied is not approval

### 11. When GPT Is Called Back

Call GPT for:

- ambiguous dry-run strategy
- claims-boundary uncertainty
- hidden skill/memory uncertainty
- Codex/Claude disagreement
- E6-KIT-DRY-RUN-001 exit synthesis if needed
- deciding whether actual dry-run can start after scope-lock preservation

### 12. Commit/Push Rule

No commit, push, branch, PR, or merge inside this Outcome Circle.

Any preservation PR requires separate exact human approval after audit/exit
synthesis.

### 13. Artifact Visibility

Local-only during the circle.

All evidence, commands, judgments, recommendations, and conclusions must be
recorded in turn notes. Do not rely on chat-only state.

### 14. Branch/PR Policy

Not applicable inside the circle.

No branch may be created. No PR may be opened. Direct push to main is not
allowed.

Safety lines:

- `satisfied` is not approval.
- Auditor pass is not approval.
- Model consensus is not approval.
- Dry-run scope-lock is not dry-run execution.
- Dry-run execution is not public release.
- Scratch repo creation is not approved by this packet.
- Kit extractability is not yet proven.
- Public-proof runs are not started.
- Dashboard lane remains paused.
- Observed pattern is not durable behavior.
- Memory is context, not authority.
- Skill proposal is not approval.
- Durable behavior requires human approval.
- Builder cannot grade own work.
- Auditor must search for failure modes.

Result states:

`satisfied`, `needs_revision`, `max_iterations_reached`, `blocker`,
`scope_conflict`, `needs_gpt`, `needs_human`, `failed`, `interrupted`.

Execute iteration 1 as builder. Hard stop after builder report for Claude
audit.

## Analysis Starts After This Line

## Sources Read

- `AGENTS.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `README.md`
- `START_HERE.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html` targeted content checks
- `.agent-handoff/STRATEGY.md`
- latest turn note:
  `.agent-handoff/turns/E6-PUBLIC-POSITION-IMPLEMENTATION-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-PUBLIC-POSITION-IMPLEMENTATION-001-claude-audit-public-showcase-implementation-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-codex-durable-behavior-promotion-boundary.md`
- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-claude-audit-durable-behavior-promotion-boundary.md`
- `kit/v1/README.md`
- `kit/v1/**` inventory and targeted content search
- Codex memory registry quick pass for prior repo-strategy, kit, and durable
  behavior context

## Scope Boundary

This turn defines a dry-run plan only. It does not create a scratch repo, copy
kit files, run a dry-run, edit `kit/v1/**`, edit README/START_HERE/dashboard,
start public-proof runs, create a clean adopter-facing repo, publish anything,
create skills/memory/automations/subagents/scheduled checks, stage, commit,
push, branch, PR, or merge.

## Recommended Dry-Run Path

Recommendation: run the future dry-run as a local-only scratch-repo exercise
using a disposable directory, initialized as a local git repo, with no GitHub
remote and no public visibility.

Proposed future scratch path:

```text
/private/tmp/claude-codex-kit-dry-run-001
```

This path is only a recommendation for the future execution packet. This
scope-lock did not create it.

Recommended sequence for the future dry-run:

1. Create the local scratch directory.
2. Initialize git locally.
3. Copy `kit/v1/**` into the scratch repo as the source kit payload.
4. Render the minimal adopter files from templates.
5. Fill placeholders with role-neutral scratch values.
6. Run one small manual Outcome Circle in the scratch repo.
7. Produce builder/auditor turn notes and a Human Decision Record draft.
8. Return a summary and defects list to `claude-codex`.
9. Preserve or delete the scratch repo only under a later exact approval.

No public repo, GitHub remote, public-proof run, or clean adopter repo should be
created during the first dry-run.

## B. Dry-Run Goal

The dry-run should test one specific question:

```text
Can a stranger-like adopter initialize a new repo from kit/v1 and run one
small manual Outcome Circle without relying on claude-codex dogfood history or
hidden methodology-specific side artifacts?
```

The dry-run tests:

- whether a new repo can adopt `kit/v1` enough to run one small manual Outcome
  Circle
- whether README, START_HERE, and kit docs give enough orientation to reach the
  kit and understand the protocol
- whether the kit operates without this repo's historical `.agent-handoff`
  state, turn-note chain, GitHub metadata, dashboard stash, or dogfood role
  assignments
- whether a scratch repo can produce an Outcome Packet, COLLAB handoff state,
  builder turn note, auditor turn note, and Human Decision Record draft using
  only copied kit guidance plus the future dry-run packet
- whether the approval boundary remains intact when no local dogfood history is
  present

The dry-run must not claim:

- external adoption proven
- kit production-ready
- public-alpha ready
- legal/compliance suitable
- trust-layer implemented
- scale proven
- public-proof runs complete
- fresh role-neutral proof complete
- dashboard adoption required
- pure kit-only extractability if hidden side-skills or memories were essential

## C. Scratch Repo Placement

Use a local scratch directory first, not a GitHub repo.

| Question | Recommendation |
| --- | --- |
| Local scratch directory vs GitHub repo | Local scratch directory under `/private/tmp/claude-codex-kit-dry-run-001`. |
| Private vs public | Private/local only. No publication. |
| Initialize git? | Yes, initialize local git so Git-visible/audit-visible mechanics are exercised. |
| Create remote? | No remote in the first dry-run. |
| Commit artifacts? | Prefer no commit unless the future execution packet explicitly authorizes a local-only commit. If authorized, local commit may be useful to freeze scratch evidence, but it must not be pushed. |
| Delete/archive after test? | Preserve locally until the dry-run report and audit complete. Delete/archive only after a separate exact human approval. |

Rationale: a local git repo tests the protocol's file and diff mechanics while
avoiding public visibility, GitHub metadata, remote history, or accidental
public-proof claims. It also keeps the first dry-run reversible.

## D. Kit Extraction Plan

Copy all of `kit/v1/**` into the scratch repo as the kit payload, preserving
hidden paths and directory structure. Do not cherry-pick the first dry-run
payload. Testing the full kit is the only way to find friction in the real
copyable package.

Then render only the minimal active adopter files needed for the first test:

- `AGENTS.md.template` -> `AGENTS.md`
- `CLAUDE.md.template` -> `CLAUDE.md`
- `.agent-handoff/PROTOCOL.md.template` -> `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md.template` -> `.agent-handoff/COLLAB.md`

Dashboard handling:

- Copy `.agent-handoff/DASHBOARD.md.template` as part of the source kit payload.
- Do not instantiate it for the first dry-run unless the future packet
  explicitly chooses to test optional dashboard adoption.
- Do not include or generate `DASHBOARD.html`.
- Record that protocol-only adoption remains valid.

Placeholder handling:

- Fill placeholders in rendered active files before the first scratch turn.
- Keep placeholders intact in source template/reference copies where useful.
- Use role-neutral scratch values, for example:
  - `{{REPO_NAME}}` -> `kit-dry-run-scratch`
  - `{{LOCAL_REPO_PATH}}` -> `/private/tmp/claude-codex-kit-dry-run-001`
  - `{{HUMAN_APPROVER_LABEL}}` -> `test human approver`
  - `{{COORDINATOR_AGENT}}` -> `Coordinator`
  - `{{BUILDER_AGENT}}` -> `Builder`
  - `{{AUDITOR_AGENT}}` -> `Auditor`

Examples:

- Copy examples as examples.
- Do not treat examples as proof.
- Do not rewrite example artifacts into dry-run proof artifacts.
- If an example is used as a starting point, the dry-run turn note must say so.

## E. Minimal Adopter Setup

Minimum scratch repo content:

- `.agent-handoff/PROTOCOL.md` rendered from the kit template
- `.agent-handoff/COLLAB.md` rendered from the kit template
- `.agent-handoff/turns/` directory
- `.agent-handoff/templates/` source templates
- `.agent-handoff/examples/` source examples, clearly classified as examples
- `.agent-handoff/prompts/starter-turn-note.md`
- `PROJECT_BRIEF.md` created during the future dry-run
- optional rendered `AGENTS.md` and `CLAUDE.md`; recommendation is to render
  both because many adopters will rely on agent-facing instructions

No runtime/product app is required. The first dry-run should test protocol
extractability, not product implementation.

## F. First Dry-Run Outcome Circle Recommendation

Recommended first Outcome Circle:

```text
E6-KIT-DRY-RUN-SCRATCH-001: one-doc project brief mirror check
```

Goal: create a tiny `PROJECT_BRIEF.md` in the scratch repo from a 4-6 line
authorized brief, then have the auditor verify that the document mirrors the
brief, uses role-neutral language, preserves `satisfied is not approval`, and
does not require dashboard adoption or hidden dogfood history.

Why this is the best first test:

- Low-risk: it creates one inert Markdown file in a disposable local scratch
  repo.
- Mechanical/lightly judgment-based: the builder mostly mirrors an approved
  brief; the auditor can verify exact content and boundary language.
- Not public-facing: the scratch repo is local-only and private.
- Not dogfood-dependent: no historical E6 context should be needed.
- One iteration should be enough if the kit guidance works.
- It exercises the core kit surfaces: Outcome Packet, COLLAB, turn notes,
  auditor note, and Human Decision Record.

Candidate evaluation:

| Candidate | Evaluation |
| --- | --- |
| Create a tiny `PROJECT_BRIEF.md` | Strong, but should be paired with an auditable mirror check so the approval boundary is tested. |
| Verify protocol/template placeholder rendering | Necessary setup check, but too meta as the only Outcome Circle. |
| Run a one-doc mirror check | Best first Outcome Circle when paired with `PROJECT_BRIEF.md`. |
| Create a minimal Human Decision Record | Required supporting artifact, but not enough alone to test builder/auditor loop. |
| Test `satisfied is not approval` example | Useful concept, but too synthetic as the primary dry-run work. |

First scratch Outcome Packet should explicitly state that `satisfied` does not
authorize commit, push, publication, repo creation, dashboard adoption, or kit
changes.

## G. Hidden Skills / Memory Test

This is the highest-risk part of the dry-run because current `claude-codex`
work has repeatedly declared Codex-side methodology skill and memory use. That
use has been transparent and auditable here, but a stranger-like adopter will
not have those hidden side artifacts.

The future dry-run must include this breadcrumb in every builder and auditor
turn note:

```text
Durable behavior active this turn:
- skills:
- subagents:
- automations:
- memory files consulted:
- standing rules invoked:
```

Declaration rules:

- Builder and auditor must list every skill, memory file, standing prompt,
  automation, subagent, or scheduled check that materially shaped the turn.
- If none were active, write `none`.
- If a global/system memory or methodology-specific skill is invoked
  automatically and cannot be disabled, declare it and classify its role.
- If a hidden artifact supplies a step, template, vocabulary, checklist,
  failure mode, or pass/fail criterion not present in the copied kit or future
  dry-run packet, mark it as potentially essential.

Avoidance rule:

- Agents should avoid using repo-specific global methodology skills/memories
  during the dry-run when controllable.
- If avoiding them is not controllable, the dry-run can proceed only as a
  contaminated-or-qualified dry-run, not as pure kit-only proof.

Detection plan:

1. Compare each scratch turn note to the copied kit docs and future dry-run
   packet.
2. Mark each material action as sourced from:
   - copied kit file
   - future dry-run packet
   - generic tool/repo convention
   - declared hidden skill/memory
   - unknown
3. Require builder and auditor to classify hidden artifacts as:
   - none used
   - used but non-essential
   - used and possibly essential
   - used and essential
   - undisclosed / ambiguous
4. If any methodology-specific hidden artifact is "possibly essential",
   "essential", or undisclosed, the dry-run fails the pure extractability claim
   even if it still finds useful kit defects.

Clean adopter-like dry-run means:

- no methodology-specific hidden skill/memory was used; or
- hidden side artifacts were declared, isolated, and shown non-essential because
  every material procedure was available in the copied kit or dry-run packet.

Contaminated dry-run means:

- a hidden side artifact was undeclared
- a hidden side artifact supplied missing procedure, templates, approval
  vocabulary, pass/fail criteria, or repair steps that the kit did not contain
- the scratch repo could not proceed without repo-specific memory, dogfood turn
  history, or global methodology skill behavior

Required rule: if Codex or Claude uses a methodology-specific skill/memory
during the dry-run, the dry-run may still be useful, but it cannot claim pure
kit-only extractability unless the role of that skill/memory is explicitly
isolated and judged non-essential.

## H. Success Criteria

Minimum success:

- scratch repo can be initialized from kit docs without editing `claude-codex`
- all needed kit files are copied/rendered without relying on historical
  dogfood turn notes
- one small Outcome Circle packet can be written from kit guidance
- builder turn note can be produced using kit template/guidance
- auditor turn note can be produced using kit template/guidance
- Human Decision Record can be drafted
- `satisfied` remains separate from approval
- no hidden dogfood-only paths are required
- no hard-coded personal names are required
- no hard-coded model-role names are required
- no dashboard is required
- no `DASHBOARD.html` is required
- no public release, production, public-alpha, legal/compliance, trust-layer, or
  public-proof claim appears
- source examples remain classified as examples, not proof
- any hidden skill/memory use is declared and either absent or non-essential
- defects, if found, are bounded and fixable through later kit changes

## I. Failure Criteria

Failure conditions:

- kit instructions require `claude-codex` turn history to understand
- hard-coded local paths or personal names are required
- model-specific roles are required
- dashboard becomes required
- `DASHBOARD.html` becomes required
- scratch repo cannot produce a valid Outcome Packet
- scratch repo cannot produce a valid builder turn note
- scratch repo cannot produce a valid auditor turn note
- scratch repo cannot draft a Human Decision Record
- agents rely on hidden skills/memories without which the kit would not work
- hidden skill/memory use is not disclosed
- approval boundary collapses into `satisfied`
- examples are misrepresented as proof
- public/production/legal/compliance/trust-layer claims appear
- scratch repo setup requires installing runtime services, creating a remote,
  touching production repos, or using Open Mic Colorado
- dry-run needs more than scoped iterations because kit guidance is unclear

Failure does not mean the protocol is worthless. It means the current kit is
not yet extractable enough for the specific claim being tested.

## J. Allowed Scratch Mutations For Future Dry-Run

Allowed only in a later execution packet, not in this scope-lock:

- create local scratch directory
- initialize git locally
- copy/render kit files
- create or edit scratch-only `PROJECT_BRIEF.md`
- create scratch-only `.agent-handoff/COLLAB.md`
- create scratch-only `.agent-handoff/turns/*` builder/auditor notes
- create scratch-only Human Decision Record draft
- run local read-only verification commands inside the scratch repo
- optionally create a local-only git commit if the future dry-run packet
  explicitly authorizes it

Not allowed in the future first dry-run unless separately and explicitly
approved:

- GitHub remote creation
- public repo creation
- pushing
- publishing
- modifying `claude-codex` kit during the dry-run
- editing `claude-codex` README/START_HERE/dashboard during the dry-run
- installing runtimes or services
- creating skills, memory files, automations, subagents, or scheduled checks
- using production app repos
- touching Open Mic Colorado
- creating a clean adopter-facing repo
- starting public-proof runs
- making public-alpha claims

## K. Evidence To Return To claude-codex

The future dry-run should return a repo-visible report to `claude-codex` after
it completes, but should not import the entire scratch repo unless separately
authorized.

Return:

- scratch repo path
- git status from scratch repo before and after
- exact files created/rendered
- exact commands run
- source kit commit SHA
- placeholder mapping used
- Outcome Packet used
- builder turn note excerpt or full copy
- auditor turn note excerpt or full copy
- Human Decision Record draft excerpt or full copy
- pass/fail table against the dry-run criteria
- hidden skill/memory breadcrumb and classification
- defects found
- recommended kit fixes, each mapped to a source kit file if known
- what claims remain unearned

Recommended return artifact in `claude-codex` after the future dry-run:

```text
.agent-handoff/turns/E6-KIT-DRY-RUN-001-codex-kit-dry-run-execution-report.md
```

That report path is a recommendation only. It is not authorized by this
scope-lock.

## L. Public-Position Relationship

The dry-run is portability proof. It is not public release, not a public-proof
run, not external adoption, and not public-alpha packaging.

If the dry-run passes cleanly, it may support a future narrow claim:

```text
The kit was manually extracted into a local scratch repo and used for one
small manual Outcome Circle.
```

It still would not support:

- external adoption proven
- production readiness
- public-alpha readiness
- legal/compliance suitability
- trust-layer hardening
- scale
- fresh role-neutral public-proof runs
- public release

Public-alpha remains unapproved. Public-proof runs remain unstarted. Clean repo
creation remains separate.

## M. Board Mode / Workspace Context

Board Mode and similar structured AI workspace patterns are useful context
only. They separate exploratory tasks from stable main versions. This protocol
separates task completion, auditor satisfaction, and model consensus from
human authorization.

The dry-run should not become Board Mode, Kanban, an agent workspace product,
a dashboard redesign, or an operations board. It should test whether the
file-based kit can support one small manual approval-boundary loop.

## N. Naming Discipline

Use these terms:

- protocol = Git-native approval-boundary protocol
- kit = `kit/v1`
- reference cockpit = Decision Cockpit v1
- Outcome Circle = bounded builder/auditor loop inside an approved Outcome
  Packet
- Outcome Packet = contract for entering a circle

Do not use `Polaris` as the protocol name in dry-run materials. Existing
historical dogfood files may still contain old vocabulary, but the scratch repo
should use role-neutral, protocol/kit/reference-cockpit language.

## O. No-Touch Discipline

This turn writes only:

- `.agent-handoff/turns/E6-KIT-DRY-RUN-001-codex-kit-dry-run-scope-lock.md`
- `.agent-handoff/COLLAB.md` handoff update, after the scope-lock note

It does not edit README, START_HERE, AGENTS, CLAUDE, `kit/v1/**`, live
PROTOCOL, OPERATING-MODEL, STRATEGY, DASHBOARD, `.gitignore`,
`.design-concepts/`, docs, tools, runtime/product, trust-layer, memory, skills,
subagents, automations, scheduled checks, public-release, public-proof,
scratch-repo, clean-repo, pilot repo, live Open Mic Colorado, or unrelated
files.

## Final Recommendation

Recommended next track after this scope-lock is audited and preserved:

```text
E6-KIT-DRY-RUN-001 execution packet
```

That next packet should be a separate Outcome Circle. It should authorize only
local scratch-repo creation, local git initialization, kit copy/rendering, and
one small manual Outcome Circle in the scratch repo. It should include the
hidden skill/memory test as a first-class pass/fail criterion.

Do not skip straight to public-proof runs, clean adopter repo creation,
public-alpha packaging, or methodology skills. The dry-run should happen first
because kit extractability is still unproven.

## Preservation Recommendation

Yes, preserve this scope-lock in a PR after Claude audit and any required
exit/human synthesis. Dry-run execution should not start until this scope-lock
is preserved and the future dry-run execution packet is explicitly approved.

`satisfied` is not approval. Auditor pass is not approval. Model consensus is
not approval.

## Verification

### Entry / Exit Commands

```text
$ git rev-parse HEAD
8162a55c6f93f96afbc9b62507fe8e695d8e7fcc

$ git status --short --branch --untracked-files=all
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-KIT-DRY-RUN-001-codex-kit-dry-run-scope-lock.md

$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

```text
$ git diff --check
```

Exit 0; no output.

### No-Touch Verification

```text
$ git diff -- README.md START_HERE.md AGENTS.md CLAUDE.md
```

No output.

```text
$ git diff -- kit/v1
```

No output.

```text
$ git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md
```

No output.

```text
$ git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html
```

No output.

```text
$ git diff -- .gitignore
```

No output.

```text
$ test ! -d .design-concepts && echo ".design-concepts absent"
.design-concepts absent

$ git diff -- .agent-handoff/tools/alert-state.sh docs .agent-handoff/mockups .agent-handoff/advisor-notes .agent-handoff/reflections .agent-handoff/improvements
```

No output.

```text
$ test ! -e .mcp.json && echo ".mcp.json absent"
.mcp.json absent

$ wc -c .agent-handoff/tools/alert-state.sh
    6519 .agent-handoff/tools/alert-state.sh

$ test ! -d /private/tmp/claude-codex-kit-dry-run-001 && echo "scratch repo absent"
scratch repo absent
```

### Changed Files

```text
$ git diff --name-only
.agent-handoff/COLLAB.md

$ git ls-files --others --exclude-standard
.agent-handoff/turns/E6-KIT-DRY-RUN-001-codex-kit-dry-run-scope-lock.md

$ git diff --cached --name-only
```

No staged files.

Only allowed files changed:

- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-DRY-RUN-001-codex-kit-dry-run-scope-lock.md`

No kit edit, no root-doc edit, no dashboard edit, no protocol/strategy/
operating-model edit, no `.gitignore` edit, no `.design-concepts` work, no
scratch repo, no clean repo, no public-release work, no public-proof run, no
trust-layer work, no memory/skill/automation/subagent/scheduled-check artifact,
no staging, no commit, no push, no branch, no PR, no merge.

## Builder Report

Result state: ready for Claude audit. Builder cannot grade own work.

The scope-lock defines:

- dry-run goal
- local scratch repo placement
- exact kit extraction/rendering plan
- minimal adopter setup
- first scratch Outcome Circle recommendation
- hidden skill/memory declaration and contamination test
- success and failure criteria
- allowed future scratch mutations
- evidence-return plan
- public-position relationship
- Board Mode context boundary
- naming discipline
- no-touch verification

Hard stop for Claude audit.
