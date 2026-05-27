# E6-KIT-001-FIX-001 - Codex kit portability cleanup iteration 1

## Clean Entry Evidence

Recorded before any E6-KIT-001-FIX-001 file write:

```text
$ git rev-parse HEAD
4732364df6f39455a990050f8345f18895a2d078

$ git status --short --branch --untracked-files=all
## main...origin/main

$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

Entry conclusion: clean `main` at PR #21 merge commit line
`4732364df6f39455a990050f8345f18895a2d078`. Dashboard-design stash is present
and was not popped, dropped, or inspected.

## Coordinator Trigger

- State: ROUTINE
- Reason: the configured human approver explicitly authorized a small,
  already-scoped kit-only cleanup Outcome Circle; this builder turn executes
  inside the packet and hard-stops for Claude audit.

## Project Mode (estimated)

- Dominant mode: Execution
- Estimate: Execution 90%, human-decision-pending 10%
- Reason: the packet is exact and the implementation surface is two copy
  replacements plus handoff evidence.

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: claude-codex-outcome-circle (consulted existing skill instructions;
  no skill created or modified)
- subagents: none
- automations: none
- memory files consulted: none
- standing rules invoked: AGENTS.md, PROTOCOL.md, COLLAB.md handoff
  discipline, current E6-KIT-001-FIX-001 Outcome Packet, no-stage/no-commit/
  no-touch rules, Durable Behavior Boundary
```

## Full Outcome Packet Scribed Before Implementation

### 1. Outcome description

Perform the smallest kit-only portability cleanup after E6-KIT-001.

Fix the two non-blocking kit audit observations:
- remove or neutralize the `E5-T-FIX-004` source-repo experiment-number
  residue in `kit/v1/.agent-handoff/PROTOCOL.md.template`
- fix the casing inconsistency `What The Human Approver Pastes Next` in
  `kit/v1/.agent-handoff/DASHBOARD.md.template`

This is copy/portability cleanup only.

This does NOT authorize:
- kit redesign
- live protocol edits
- live dashboard edits
- root docs edits
- public release
- public-proof runs
- external dry run
- trust-layer implementation
- memory/skill/automation/subagent/scheduled-check creation
- dashboard design work
- protocol relaxation
- new public repo/branch creation

### 2. Rubric

PASS only if all criteria are satisfied:

#### A. Entry / packet discipline

- clean entry recorded before any file write
- full packet scribed before implementation
- no `* 2.md` duplicate files
- dashboard-design stash preserved and not popped/dropped
- no unexpected dirty files

#### B. Source-repo residue cleanup

- `kit/v1/.agent-handoff/PROTOCOL.md.template` no longer contains
  `E5-T-FIX-004`
- replacement wording is neutral and adopter-facing
- replacement preserves the substance of the single-recommendation principle
- replacement does not require adopters to know this repo's historical
  experiment IDs
- replacement does not edit live `.agent-handoff/PROTOCOL.md`

Preferred replacement direction:
- replace `Respect the E5-T-FIX-004 single-recommendation principle`
- with wording like `Respect the single-recommendation principle`
- or another similarly neutral phrase

#### C. Dashboard template casing cleanup

- `kit/v1/.agent-handoff/DASHBOARD.md.template` no longer contains
  `What The Human Approver Pastes Next`
- replacement should be `What the Human Approver Pastes Next` unless Codex
  finds a better consistent local heading style
- do not change dashboard layout, semantics, sections, or live dashboard files

#### D. Name/model portability preservation

- `kit/v1/**` must still have zero personal-name terms:
  - `Sami`
  - `samiserrag`
  - `Sami Serrag`
  - `needs_sami`
  - `Decision needed from Sami`
  - `Ask Sami`
  - `Call Sami`
  - `when Sami`
  - `Why Sami`
- `kit/v1/**` must still have zero strict permanent model-role terms in
  operative locations:
  - `GPT-5.5 Pro`
  - `Claude Code`
  - `Codex`
- role/placeholder vocabulary must remain intact:
  - Coordinator
  - Builder
  - Auditor
  - human approver
  - `{{COORDINATOR_AGENT}}`
  - `{{BUILDER_AGENT}}`
  - `{{AUDITOR_AGENT}}`
  - `{{HUMAN_APPROVER_LABEL}}`
  - `{{REPO_NAME}}`
  - `{{LOCAL_REPO_PATH}}`

#### E. Kit invariants preserved

- 23-file kit inventory remains intact unless a stop condition fires
- 3 templates remain present
- 5 examples remain present
- examples remain marked examples, not proof
- Durable Behavior Boundary wording remains present
- invocation breadcrumb guidance remains present
- V1 trust caveats remain present
- Mirror Status Convention remains present
- dashboard optionality remains preserved
- `DASHBOARD.html` is not added to the kit

#### F. No-touch discipline

No changes outside allowed files.

### 3. Allowed files

Builder may write:
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-codex-kit-portability-cleanup-iter-1.md`

Auditor may later write:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-claude-audit-kit-portability-cleanup-iter-1.md`

Iteration 2, only if needed:
- same allowed files
- `.agent-handoff/turns/E6-KIT-001-FIX-001-codex-kit-portability-cleanup-iter-2.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-claude-audit-kit-portability-cleanup-iter-2.md`

Read-only evidence:
- `kit/v1/README.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `.agent-handoff/turns/E6-KIT-001-claude-audit-kit-implementation-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-gpt-exit-synthesis.md`

### 4. No-touch list

Do not edit:
- root `README.md`
- root `AGENTS.md`
- root `CLAUDE.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/mockups/**`
- `.agent-handoff/turns/**` except this E6-KIT-001-FIX-001 turn note
- `.agent-handoff/tools/alert-state.sh`
- `.agent-handoff/advisor-notes/`
- `.agent-handoff/reflections/`
- `.agent-handoff/improvements/`
- `.gitignore`
- `.design-concepts/`
- `docs/`
- runtime/product files
- pilot repo
- live Open Mic Colorado
- trust-layer files
- memory files
- skills
- subagents
- automations
- scheduled checks
- NanoClaw/CommonGround/MCP/Notion/plugin/global config
- generated/local/secret files
- unrelated files

### 5. Max iterations

2.

Iteration 2 may only correct incomplete cleanup, accidental overreach, wording
inconsistency, or auditor-identified portability defects. It may not expand
scope.

### 6. Builder

Codex.

Builder cannot grade own work.

### 7. Auditor / grader

Claude Code.

Auditor must independently verify:
- exact files changed
- source-repo residue removed
- casing inconsistency fixed
- no live protocol/dashboard/root-doc drift
- kit personal-name count remains zero
- kit strict permanent model-role count remains zero
- durable-boundary / trust / mirror / examples / dashboard-optionality
  invariants preserved
- stash preserved
- no memory/skill/automation/subagent/scheduled-check created

### 8. Pass evidence

Builder must record:
- clean-entry evidence
- HEAD
- git status
- stash status
- duplicate-file check
- full packet scribed before implementation
- exact files changed
- before/after grep for `E5-T-FIX-004`
- before/after grep for `What The Human Approver Pastes Next`
- kit personal-name grep results
- kit strict model-role grep results
- kit file count
- no-touch verification
- `git diff --check`

Suggested verification commands:
- `git rev-parse HEAD`
- `git status --short --branch --untracked-files=all`
- `git stash list | head -5`
- `find .agent-handoff -name '* 2.md' -print`
- `git diff --check`
- `rg -n "E5-T-FIX-004" kit/v1 || true`
- `rg -n "What The Human Approver Pastes Next" kit/v1 || true`
- `rg -n "Sami|samiserrag|Sami Serrag|needs_sami|Decision needed from Sami|Ask Sami|Call Sami|when Sami|Why Sami" kit/v1 || true`
- `rg -n "GPT-5.5 Pro|Claude Code|Codex" kit/v1 || true`
- `find kit/v1 -type f | sort | wc -l`
- `git diff -- README.md AGENTS.md CLAUDE.md`
- `git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md`
- `git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html`
- `git diff -- .gitignore`
- `test ! -d .design-concepts && echo ".design-concepts absent"`

If grep finds model names only in non-operative prior-art/vendor-family
contexts, record classification.

### 9. Stop conditions

Stop if:
- entry tree is not clean
- dashboard-design stash is missing, popped, or dropped
- duplicate `* 2.md` file exists
- packet cannot be scribed before implementation
- live PROTOCOL.md edit appears required
- live dashboard edit appears required
- root docs edit appears required
- `.gitignore` / `.design-concepts/` would be needed
- cleanup requires broader kit rewrite
- cleanup would change protocol semantics
- personal-name residue appears in adopter-facing kit files after cleanup
- strict permanent model-role residue appears in operative kit locations after
  cleanup
- any no-touch path changes
- Codex and Claude later disagree
- more than 2 iterations would be needed

### 10. When the human approver is called back

Call the human approver for:
- final approval
- any commit/push/branch/PR/merge
- any live protocol edit
- any root-doc edit
- any broad kit rewrite
- any dashboard design choice
- any public release / launch / top-of-funnel decision
- any trust-layer implementation
- any memory/skill/automation creation
- blocker / failed / max iterations / scope conflict / ambiguous state
- satisfied result, because satisfied is not approval

### 11. When GPT is called back

Call GPT for:
- ambiguous replacement wording
- live-vs-kit mirror uncertainty
- Codex/Claude disagreement
- E6-KIT-001-FIX-001 exit synthesis if needed
- deciding whether E6-KIT-DRY-RUN-001 can start after cleanup

### 12. Commit/push rule

No commit, push, branch, PR, or merge inside this Outcome Circle.

Any preservation PR requires separate exact human approval after audit/exit
synthesis.

### 13. Artifact visibility

Local-only during the circle.

All evidence, commands, judgments, replacements, and conclusions must be
recorded in turn notes. Do not rely on chat-only state.

### 14. Branch/PR policy

Not applicable inside the circle.

No branch may be created.
No PR may be opened.
Direct push to main is not allowed.

Safety lines:
- `satisfied` is not approval.
- Auditor pass is not approval.
- Model consensus is not approval.
- Kit cleanup is not public-release approval.
- Kit cleanup does not prove external adoption.
- Kit examples are examples, not proof.
- Do not rewrite historical dogfood evidence.
- Public-proof runs should be fresh and role-neutral from the start.
- Observed pattern is not durable behavior.
- Memory is context, not authority.
- Durable behavior requires human approval.
- Builder cannot grade own work.
- Auditor must search for failure modes.

Result states:
`satisfied`, `needs_revision`, `max_iterations_reached`, `blocker`,
`scope_conflict`, `needs_gpt`, `needs_human`, `failed`, `interrupted`.

Execution instruction: execute iteration 1 as builder. Hard stop after builder
report for Claude audit.

## Sources read before implementation

- `/Users/samiserrag/.codex/skills/claude-codex-outcome-circle/SKILL.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `README.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/STRATEGY.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `.agent-handoff/turns/E6-KIT-001-claude-audit-kit-implementation-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-gpt-exit-synthesis.md`

## Implementation Log

Implementation starts after this line.

### Targeted cleanup performed

Changed exactly the two approved kit template surfaces plus the allowed
handoff/report files:

- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-codex-kit-portability-cleanup-iter-1.md`

Protocol template cleanup:

- Replaced `Respect the E5-T-FIX-004 single-recommendation principle` with
  `Respect the single-recommendation principle`.
- Replaced the second wrapped occurrence with the neutral wording:
  `Respect the single-recommendation principle: Ask the Coordinator becomes
  the one recommendation, not an extra competing surface.`
- Live `.agent-handoff/PROTOCOL.md` was not edited. It still contains the
  source-repo historical wording and remains no-touch for this packet.

Dashboard template cleanup:

- Replaced list item `What The Human Approver Pastes Next` with
  `What the Human Approver Pastes Next`.
- Replaced heading `## What The Human Approver Pastes Next` with
  `## What the Human Approver Pastes Next`.
- Live `.agent-handoff/DASHBOARD.md` and `.agent-handoff/DASHBOARD.html` were
  not edited.

No kit redesign, dashboard redesign, protocol semantic change, public release,
public-proof run, external dry run, trust-layer implementation, memory file,
skill, automation, subagent, scheduled check, branch, PR, merge, commit, push,
or staging occurred.

### Before evidence

Before edits, targeted grep showed:

```text
$ rg -n "E5-T-FIX-004|single-recommendation" kit/v1/.agent-handoff/PROTOCOL.md.template .agent-handoff/PROTOCOL.md
.agent-handoff/PROTOCOL.md:241:GPT. Respect the E5-T-FIX-004 single-recommendation principle.
.agent-handoff/PROTOCOL.md:267:become "Ask GPT-5.5 Pro." Respect the E5-T-FIX-004 single-recommendation
kit/v1/.agent-handoff/PROTOCOL.md.template:302:question to paste to the Coordinator. Respect the E5-T-FIX-004
kit/v1/.agent-handoff/PROTOCOL.md.template:303:single-recommendation principle.
kit/v1/.agent-handoff/PROTOCOL.md.template:330:may become "Ask the Coordinator." Respect the E5-T-FIX-004
kit/v1/.agent-handoff/PROTOCOL.md.template:331:single-recommendation principle: Ask the Coordinator becomes the one

$ rg -n "What The Human Approver Pastes Next|What the Human Approver Pastes Next" kit/v1/.agent-handoff/DASHBOARD.md.template .agent-handoff/DASHBOARD.md
kit/v1/.agent-handoff/DASHBOARD.md.template:37:- What The Human Approver Pastes Next
kit/v1/.agent-handoff/DASHBOARD.md.template:72:## What The Human Approver Pastes Next
```

Classification:

- The two `kit/v1/.agent-handoff/PROTOCOL.md.template` matches were approved
  adopter-facing cleanup targets.
- The two `kit/v1/.agent-handoff/DASHBOARD.md.template` matches were approved
  adopter-facing cleanup targets.
- The live `.agent-handoff/PROTOCOL.md` matches were read-only source-repo
  dogfood residue in a no-touch file and were intentionally left unchanged.
- No live dashboard casing match appeared in the before grep.

Before kit file count:

```text
$ find kit/v1 -type f | sort | wc -l
      23
```

### After evidence

After edits:

```text
$ git rev-parse HEAD
4732364df6f39455a990050f8345f18895a2d078

$ git status --short --branch --untracked-files=all
## main...origin/main
 M .agent-handoff/COLLAB.md
 M kit/v1/.agent-handoff/DASHBOARD.md.template
 M kit/v1/.agent-handoff/PROTOCOL.md.template
?? .agent-handoff/turns/E6-KIT-001-FIX-001-codex-kit-portability-cleanup-iter-1.md

$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

```text
$ git diff --check
```

`git diff --check` printed nothing.

```text
$ rg -n "E5-T-FIX-004" kit/v1 || true
```

No output. The kit no longer contains `E5-T-FIX-004`.

```text
$ rg -n "What The Human Approver Pastes Next" kit/v1 || true
```

No output. The kit no longer contains the inconsistent `What The...` casing.

```text
$ rg -n "Respect the single-recommendation|single-recommendation" kit/v1/.agent-handoff/PROTOCOL.md.template
302:question to paste to the Coordinator. Respect the single-recommendation
330:may become "Ask the Coordinator." Respect the single-recommendation principle:

$ rg -n "What the Human Approver Pastes Next|single-recommendation principle" kit/v1/.agent-handoff/DASHBOARD.md.template kit/v1/.agent-handoff/PROTOCOL.md.template
kit/v1/.agent-handoff/DASHBOARD.md.template:37:- What the Human Approver Pastes Next
kit/v1/.agent-handoff/DASHBOARD.md.template:72:## What the Human Approver Pastes Next
kit/v1/.agent-handoff/PROTOCOL.md.template:330:may become "Ask the Coordinator." Respect the single-recommendation principle:
```

The line-302 `single-recommendation` phrase is split across two lines in the
template; the direct `single-recommendation` grep above verifies it remains.

Kit name/model portability checks:

```text
$ rg -n "Sami|samiserrag|Sami Serrag|needs_sami|Decision needed from Sami|Ask Sami|Call Sami|when Sami|Why Sami" kit/v1 || true

$ rg -n "GPT-5.5 Pro|Claude Code|Codex" kit/v1 || true
```

Both commands printed no output.

Kit inventory checks:

```text
$ find kit/v1 -type f | sort | wc -l
      23

$ find kit/v1/.agent-handoff/templates -type f | sort | wc -l
       3

$ find kit/v1/.agent-handoff/examples -type f | sort | wc -l
       5

$ rg -n "Example only" kit/v1/.agent-handoff/examples
kit/v1/.agent-handoff/examples/human-decision-record-authorize.md:3:Example only. This is not proof, approval for this source repo, public release,
kit/v1/.agent-handoff/examples/minimal-builder-turn-note.md:3:Example only. This is not proof, approval, public release, or evidence of
kit/v1/.agent-handoff/examples/satisfied-not-approved.md:3:Example only. This is not proof, approval, public release, or evidence of
kit/v1/.agent-handoff/examples/minimal-outcome-packet.md:3:Example only. This is not proof, approval, public release, or evidence of
kit/v1/.agent-handoff/examples/minimal-auditor-turn-note.md:3:Example only. This is not proof, approval, public release, or evidence of
```

Invariant spot checks:

```text
$ rg -n "observed pattern is not durable behavior|Durable behavior active this turn|Git-visible|not tamper-proof|Mirror Status Convention|DASHBOARD.html" kit/v1
kit/v1/CLAUDE.md.template:95:- observed pattern is not durable behavior.
kit/v1/AGENTS.md.template:95:- observed pattern is not durable behavior.
kit/v1/README.md:131:- V1 records are Git-visible / audit-visible.
kit/v1/README.md:132:- V1 records are not tamper-proof.
kit/v1/README.md:142:- observed pattern is not durable behavior.
kit/v1/README.md:163:Durable behavior active this turn:
kit/v1/README.md:239:Do not add `DASHBOARD.html` to this kit yet. Do not force dashboard adoption.
kit/v1/README.md:243:## Mirror Status Convention
```

No-touch verification:

```text
$ git diff -- README.md AGENTS.md CLAUDE.md

$ git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md

$ git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html

$ git diff -- .gitignore
```

All four no-touch diff commands printed no output.

```text
$ test ! -d .design-concepts && echo ".design-concepts absent"
.design-concepts absent
```

Tracked diff stat after template edits and COLLAB handoff update:

```text
$ git diff --stat
 .agent-handoff/COLLAB.md                    | 93 +++++++++++++++++++++++++++++
 kit/v1/.agent-handoff/DASHBOARD.md.template |  4 +-
 kit/v1/.agent-handoff/PROTOCOL.md.template  | 10 ++--
 3 files changed, 100 insertions(+), 7 deletions(-)
```

The new builder turn note is untracked by design until a later separately
approved preservation action.

### Handoff update

Updated `.agent-handoff/COLLAB.md` to make Claude Code the next actor for
E6-KIT-001-FIX-001 audit, summarize the exact cleanup, record verification
highlights, and include the paste-ready audit request. Prior E6-KIT-001 closure
state remains below as superseded history.

### Result for auditor

Builder report is ready for Claude audit. Codex does not grade its own work.

No human approval, commit, push, branch, PR, merge, public release,
public-proof run, external dry run, trust-layer implementation, dashboard
design work, memory/skill/automation/subagent/scheduled-check creation, or
protocol relaxation is authorized by this builder result.
