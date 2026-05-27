# E6-PUBLIC-POSITION-001 - Codex public showcase positioning scope lock

## Clean Entry Evidence

Recorded before any E6-PUBLIC-POSITION-001 file write:

```text
$ git rev-parse HEAD
6a3c9dcc092f7b399859efe76a072e0b8613b4b0

$ git status --short --branch --untracked-files=all
## main...origin/main

$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

Entry conclusion: clean `main` at or after PR #23 merge commit
`6a3c9dcc092f7b399859efe76a072e0b8613b4b0`. Dashboard-design stash is
present and was not popped, dropped, inspected, or restored.

## Full Outcome Packet Scribed Before Analysis

### 1. Outcome description

Define the public-positioning plan for presenting `claude-codex` as a public
showcase / build journal, with `kit/v1` prominent as the adopter path, while
preserving honest boundaries about what is proven and unproven.

This scope-lock should decide:
- whether this repo is the public showcase / build journal
- how to frame dogfood history as credibility evidence
- how prominent `kit/v1` should be
- whether START_HERE.md or KIT.md is needed
- whether turn notes should be framed as proof artifacts
- what the root README needs to say differently
- what dashboard state is acceptable before public viewing
- what claims are allowed before kit dry-run
- what remains explicitly unproven

This is design-only. Do not rewrite README. Do not create START_HERE.md or
KIT.md. Do not edit dashboard. Do not start public release.

### 2. Rubric

PASS only if all criteria are satisfied:

#### A. Entry / packet discipline

- clean entry recorded before any file write
- full packet scribed before analysis
- no `* 2.md` duplicate files
- dashboard-design stash preserved and not popped/dropped
- no unexpected dirty files

#### B. Public-position questions answered

Scope-lock must answer all 8 questions preserved in PR #23:
1. Is this repo the public showcase / build journal?
2. How prominent should `kit/v1` be?
3. Is `START_HERE.md` or `KIT.md` needed?
4. Should turn notes be framed as proof artifacts?
5. What does the root README need to say differently?
6. What dashboard state is acceptable before public viewing?
7. What claims are allowed before dry-run?
8. What remains explicitly unproven?

#### C. Option A-first / B-later evaluated

Evaluate the preserved convergence:
- polish `claude-codex` as public showcase / build journal
- attach the maintainer's name as author/maintainer if desired
- dogfood history becomes part of credibility story
- `kit/v1` becomes the adopter path
- dry-run later proves portability
- clean second repo remains optional later

Do not treat this convergence as binding; evaluate it and state whether to
keep, revise, or reject.

#### D. Claims discipline

Define allowed public claims and forbidden public claims.

Allowed claims should be grounded in preserved evidence:
- protocol proof
- reference cockpit proof
- root README proof
- adopter-facing name scrub proof
- first-pass kit proof
- kit cleanup proof
- repo-strategy/public-position decision history

Forbidden or not-yet-earned claims should include:
- public-alpha ready
- proven at scale
- external adoption proven
- kit production-ready
- legal/compliance suitable
- tamper-proof
- trust-layer implemented
- public-proof runs complete
- agent safety solved
- AI alignment solved
- dashboard is required
- runtime replacement

#### E. Dogfood history framing

Define how public materials should explain:
- the repo is a build journal / dogfood source
- turn notes are evidence, not required adopter ceremony
- old messy history is preserved rather than laundered
- `kit/v1` is the copyable adopter path
- the live `.agent-handoff` system is this repo's dogfood instance
- historical dogfood does not imply the protocol requires the same model trio
  or same process volume

#### F. Kit prominence

Recommend whether to create or later implement:
- root README section changes
- `START_HERE.md`
- `KIT.md`
- top-level link to `kit/v1`
- a "Copy this kit" path
- a "What not to copy from this repo" callout
- quick-start sequence for adopters

Do not create those files in this turn.

#### G. Dashboard public-state decision

Decide what dashboard state is acceptable before public viewing:
- current Decision Cockpit v1 as-is
- paused dashboard lane with note
- minimal copy refresh only
- Concept B / Operator cockpit later
- no dashboard changes before public viewing
- dashboard hidden/de-emphasized in README

Must preserve:
- dashboard lane is paused unless explicitly reopened
- `.design-concepts/` stash remains deferred
- no dashboard implementation in this turn

#### H. Dry-run relationship

Define how E6-KIT-DRY-RUN-001 relates to public positioning:
- portability proof
- kit-readiness evidence
- not a blocker to all public viewing
- still needed before claiming kit production-readiness or external
  extractability
- should happen after public-position scope-lock and any public-facing polish
  plan

#### I. Public proof relationship

Define relationship between:
- dogfood/source proof in this repo
- fresh role-neutral public-proof runs
- optional clean adopter repo
- kit dry-run

Clarify whether fresh public-proof runs are still needed, and if so, when.

#### J. Skills / Durable Behavior Boundary

State whether methodology skills remain deferred:
- no new methodology skills now
- no global skills for this methodology
- any future skill requires Durable Behavior Proposal
- observed pattern is not durable behavior
- memory is context, not authority
- skill proposal is not approval
- automation proposal is not approval

#### K. No-touch discipline

No changes outside allowed files.

### 3. Allowed files

Builder may write:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-PUBLIC-POSITION-001-codex-public-showcase-positioning-scope-lock.md`

Auditor may later write:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-PUBLIC-POSITION-001-claude-audit-public-showcase-positioning-scope-lock.md`

Read-only evidence:
- `.agent-handoff/turns/E6-REPO-STRATEGY-CONSULTATION-002-gpt-revised-public-position-recommendation.md`
- `.agent-handoff/turns/E6-REPO-STRATEGY-001-codex-repo-split-public-proof-scope-lock.md`
- `.agent-handoff/turns/E6-REPO-STRATEGY-001-claude-audit-repo-split-public-proof-scope-lock.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-codex-kit-portability-cleanup-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-claude-audit-kit-portability-cleanup-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-NAME-SCRUB-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-README-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-DASH-003-gpt-exit-synthesis.md`
- root `README.md`
- root `AGENTS.md`
- root `CLAUDE.md`
- `kit/v1/README.md`
- `kit/v1/**`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/COLLAB.md`

### 4. No-touch list

Do not edit:
- root `README.md`
- root `AGENTS.md`
- root `CLAUDE.md`
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
- `.agent-handoff/advisor-notes/`
- `.agent-handoff/reflections/`
- `.agent-handoff/improvements/`
- runtime/product files
- trust-layer files
- memory files
- skills
- subagents
- automations
- scheduled checks
- public-release files
- public-proof-run files
- clean repo / scratch repo files
- unrelated files

### 5. Max iterations

2.

Iteration 2 may only correct scope-lock gaps, claim-risk mistakes,
public-position ambiguity, no-touch defects, or auditor-identified strategic
defects. It may not implement public-position changes.

### 6. Builder

Codex.

Builder cannot grade own work.

### 7. Auditor / grader

Claude Code.

Auditor must independently verify:
- exact files changed
- all 8 public-position questions answered
- no root-doc edits
- no kit edits
- no dashboard edits
- no public-release work
- no public-proof run
- no scratch/clean repo creation
- no memory/skill/automation/subagent/scheduled-check creation
- claims discipline is safe
- dogfood/showcase framing is honest
- E6-KIT-DRY-RUN-001 remains later portability proof, not a public-viewing gate

### 8. Pass evidence

Builder must record:
- clean-entry evidence
- HEAD
- git status
- stash status
- duplicate-file check
- full packet scribed before analysis
- sources read
- recommended path
- allowed claims
- forbidden claims
- root README positioning implications
- kit prominence implications
- dashboard public-state implications
- dry-run implications
- public-proof implications
- no-touch verification
- `git diff --check`

Suggested verification commands:
- `git rev-parse HEAD`
- `git status --short --branch --untracked-files=all`
- `git stash list | head -5`
- `find .agent-handoff -name '* 2.md' -print`
- `git diff --check`
- `git diff -- README.md AGENTS.md CLAUDE.md`
- `git diff -- kit/v1`
- `git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md`
- `git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html`
- `git diff -- .gitignore`
- `test ! -d .design-concepts && echo ".design-concepts absent"`

### 9. Stop conditions

Stop if:
- entry tree is not clean
- dashboard-design stash is missing, popped, or dropped
- duplicate `* 2.md` file exists
- packet cannot be scribed before analysis
- scope-lock would require README rewrite
- scope-lock would require dashboard work
- scope-lock would require kit edits
- scope-lock would require public-release wording
- scope-lock would require public-proof run
- scope-lock would require scratch repo or clean repo creation
- scope-lock would require memory/skill/automation creation
- any no-touch path changes
- Codex and Claude later disagree
- more than 2 iterations would be needed

### 10. When the human approver is called back

Call the human approver for:
- final approval
- any commit/push/branch/PR/merge
- any public-position choice
- any author/maintainer attribution decision
- any root README rewrite
- any START_HERE.md or KIT.md creation
- any dashboard public-state decision
- any public release / launch / top-of-funnel decision
- any public-proof run
- any clean repo / scratch repo creation
- any trust-layer implementation
- any memory/skill/automation creation
- blocker / failed / max iterations / scope conflict / ambiguous state
- satisfied result, because satisfied is not approval

### 11. When GPT is called back

Call GPT for:
- ambiguous public-position recommendation
- claims-boundary uncertainty
- Codex/Claude disagreement
- E6-PUBLIC-POSITION-001 exit synthesis if needed
- deciding whether public-position implementation can start after scope-lock
  preservation

### 12. Commit/push rule

No commit, push, branch, PR, or merge inside this Outcome Circle.

Any preservation PR requires separate exact human approval after audit/exit
synthesis.

### 13. Artifact visibility

Local-only during the circle.

All evidence, commands, judgments, recommendations, and conclusions must be
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
- Public-position scope-lock is not public-release approval.
- Dogfood history can be credibility evidence, but it does not prove external
  adoption.
- Kit dry-run is still needed before claiming kit extractability or
  production-readiness.
- Public-proof runs are not started.
- Dashboard lane remains paused.
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

## Analysis Starts After This Line

## Coordinator Trigger

- State: ROUTINE
- Reason: the configured human approver explicitly authorized this
  design-only scope-lock turn after the revised public-position consultation
  was preserved; the turn applies that evidence and does not require a fresh
  Coordinator call before analysis.

## Project Mode (estimated)

- Dominant mode: Coordinator / public-position scope lock.
- Estimate: Coordinator 90%, human-decision-pending 10%.
- Browser QA: N/A. This is docs-only strategy analysis; no UI or runtime
  surface changed.
- Automation budget: N/A. No polling, cron, webhook, heartbeat, scheduled
  check, notifier, automation, subagent, memory, or skill artifact was created.

## Durable Behavior Active This Turn

```text
Durable behavior active this turn:
- skills: claude-codex-outcome-circle (consulted existing Codex skill
  instructions; no skill created or modified)
- subagents: none
- automations: none
- memory files consulted: /Users/samiserrag/.codex/memories/MEMORY.md
  quick pass only; memory is context, not authority
- standing rules invoked: AGENTS.md, CLAUDE.md, PROTOCOL.md, COLLAB.md,
  current E6-PUBLIC-POSITION-001 authorization, no-touch list, Durable
  Behavior Promotion Boundary, no-stage/no-commit/no-branch/no-PR rules
```

## Scope Boundary

This is a local design-only scope lock. It does not implement public
positioning changes.

Explicitly not authorized:

- root README / AGENTS / CLAUDE edits
- START_HERE.md or KIT.md creation
- kit edits
- live PROTOCOL / OPERATING-MODEL / STRATEGY edits
- live DASHBOARD.md or DASHBOARD.html edits
- dashboard-design work
- stash pop/drop/inspect
- dry-run
- scratch repo or clean repo creation
- public-proof circles
- public-alpha packaging
- trust-layer implementation
- methodology skill creation
- memory file creation
- subagent creation
- automation or scheduled-check creation
- runtime/product work
- branch, PR, commit, push, merge, or staging
- new Outcome Circle

## Sources Read

- `/Users/samiserrag/.codex/skills/claude-codex-outcome-circle/SKILL.md`
- `/Users/samiserrag/.codex/memories/MEMORY.md` targeted quick pass
- `.agent-handoff/turns/E6-REPO-STRATEGY-CONSULTATION-002-gpt-revised-public-position-recommendation.md`
- `.agent-handoff/turns/E6-REPO-STRATEGY-001-codex-repo-split-public-proof-scope-lock.md`
- `.agent-handoff/turns/E6-REPO-STRATEGY-001-claude-audit-repo-split-public-proof-scope-lock.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-codex-kit-portability-cleanup-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-claude-audit-kit-portability-cleanup-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-NAME-SCRUB-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-README-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-DASH-003-gpt-exit-synthesis.md`
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `kit/v1/README.md`
- `kit/v1/**` inventory via `rg --files --hidden kit/v1`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/COLLAB.md`

## Scope-Lock Result

Recommended path: **A-first, B-later with strict claim boundaries**.

Meaning:

1. Treat `claude-codex` as the public showcase / build journal after a later
   public-facing polish pass.
2. Make `kit/v1` the highly visible adopter path from the top-level public
   surfaces.
3. Preserve dogfood history as credibility evidence, not as adopter-required
   ceremony.
4. Keep E6-KIT-DRY-RUN-001 as the portability and kit-readiness proof, not as
   a gate to all public viewing.
5. Keep a clean second repo optional later, especially if dry-run evidence or
   public-reader friction shows that `kit/v1` needs a copy-first distillation.

This revises the earlier E6-REPO-STRATEGY-001 next-track recommendation in
light of E6-REPO-STRATEGY-CONSULTATION-002. The earlier B/E analysis remains
valid for a clean adopter package or clean public-proof surface; it should not
override the newer goal of presenting this repo honestly as the public build
journal under the maintainer's name.

## 1. Eight Public-Position Questions

### 1. Is this repo the public showcase / build journal?

Yes, after a later polish implementation. `claude-codex` should be positioned
as the transparent build journal and dogfood/source proof for the approval
boundary method.

Rationale:

- The revised GPT recommendation removed the depersonalization assumption as a
  primary driver because public attribution is acceptable.
- The repo's strongest credibility asset is the preserved messy history:
  successful circles, blocked turns, audits, exit syntheses, stash deferrals,
  and exact approval boundaries.
- Trying to hide that history would weaken the thesis that governance
  transparency matters.

Boundary: public showcase is not public-alpha release. It is not a claim that
the kit is production-ready, externally adopted, or proven at scale.

### 2. How prominent should `kit/v1` be?

Very prominent. `kit/v1` should be visible in the first public orientation path,
not buried in the repo map.

Later implementation should make the split obvious:

- "Read this repo as the build journal."
- "Copy `kit/v1` if you want to try the method."
- "Do not copy the historical dogfood state unless you are studying the case
  history."

The kit should appear near the top of the root README, in any future
START_HERE.md, and in repo description/navigation text if that is later in
scope.

### 3. Is `START_HERE.md` or `KIT.md` needed?

Recommend: **create `START_HERE.md` later; defer `KIT.md` unless README
navigation remains too crowded after polish.**

`START_HERE.md` would solve the first-touch problem cleanly:

- new reader path: what this repo is, what to read first, what not to infer
- adopter path: go to `kit/v1/README.md`
- evidence path: skim curated proof artifacts, not every turn note
- current limitations: dry-run, external adoption, trust, scale, legal
  boundaries

`KIT.md` is less urgent because `kit/v1/README.md` already exists and is the
canonical kit entrypoint. A top-level `KIT.md` would be useful only as a short
redirect or copy-first landing page if `START_HERE.md` plus README links still
leave adopters uncertain.

No such files are created in this turn.

### 4. Should turn notes be framed as proof artifacts?

Yes, but carefully. Turn notes should be framed as **proof artifacts and build
journal evidence**, not as required adopter ceremony.

Public framing should say:

- The turn notes show the method being used on itself.
- They include failures, pauses, audits, scope locks, and exit syntheses.
- They are evidence that the boundary is practiced, not just described.
- Adopters should not copy the whole historical turn-note tree.
- Adopters should copy the kit's turn-note shape and create their own short,
  local evidence trail.

The root public path should curate a few representative evidence layers instead
of telling readers to inspect every historical turn note.

### 5. What does the root README need to say differently?

Later README polish should make the public posture explicit:

- This repo is a public showcase / build journal for the method.
- The adopter path is `kit/v1`.
- The live `.agent-handoff` tree is this repo's dogfood instance, not the
  minimal adopter requirement.
- Historical turn notes are evidence artifacts, not required ceremony.
- The dashboard is a reference cockpit and may be stale relative to `COLLAB.md`
  unless refreshed in scope.
- The current proof layers are protocol proof, reference cockpit proof, root
  README proof, adopter-facing name scrub proof, first-pass kit proof, kit
  cleanup proof, and repo-strategy/public-position decision history.
- The unproven list should remain explicit: external adoption, stranger dry
  run, kit production-readiness, scale, trust hardening, legal/compliance, and
  public-proof runs.

The README should not present the current repo as a clean adopter repo, a
public-alpha package, or a finished product.

### 6. What dashboard state is acceptable before public viewing?

The current Decision Cockpit v1 can remain in the repo as a reference cockpit
proof artifact, but **it should not be the primary public entrypoint as-is**.

Reason: current `.agent-handoff/DASHBOARD.md` still presents the old
E6-DASH-003 "Courier Only" handoff. `COLLAB.md` is authoritative, but a public
reader who opens the dashboard first may see stale operational state before
understanding the build-journal context.

Acceptable public-viewing paths:

1. **No dashboard edits, but de-emphasize it in README/START_HERE.** This is
   acceptable if public viewing happens before dashboard lane reopens. The
   README should call it a historical/reference cockpit proof, not the current
   public starting point.
2. **Minimal copy refresh later.** A separate approved turn may add a short
   paused/stale/reference note without redesigning the dashboard.
3. **Concept B / Operator cockpit later.** Useful future work, but not required
   before public viewing and not authorized now.

Not acceptable: telling public readers to start with the current dashboard as
the live current-state cockpit unless it is refreshed or clearly framed.

Dashboard lane remains paused. `.design-concepts/` stash remains deferred.

### 7. What claims are allowed before dry-run?

Allowed claims before E6-KIT-DRY-RUN-001:

- This repo is a transparent build journal / dogfood source for a Git-native
  approval-boundary protocol.
- The method separates builder output, auditor satisfaction, model consensus,
  and human approval.
- The repo contains preserved evidence of protocol dogfooding.
- Decision Cockpit v1 exists as an audited static reference cockpit proof.
- The root README has been audited as a strangerprintable orientation layer.
- Adopter-facing current surfaces have been name-scrubbed where appropriate.
- `kit/v1` exists as a first-pass adopter kit with placeholders, templates,
  examples, Durable Behavior Boundary guidance, trust caveats, dashboard
  optionality, and Mirror Status Convention.
- Kit cleanup removed known source-repo residue and casing defects.
- Examples are examples, not proof.
- The dry-run is still needed before claiming kit extractability or
  production-readiness.

### 8. What remains explicitly unproven?

Still unproven:

- external adoption
- external installability
- stranger dry-run success
- kit production-readiness
- kit extractability without help
- public-alpha readiness
- burden-reduction magnitude
- behavior under severe model disagreement
- long-term resistance to sycophantic adaptation or visible-rule gaming
- scale across teams or organizations
- legal/compliance suitability
- trust-layer tamper-evidence
- runtime, wakeup, notifier, or auto-handoff safety
- public-proof runs
- that dashboard adoption is necessary
- that this is an AI alignment solution or general agent-safety solution

## 2. Option A-First / B-Later Evaluation

Preserved convergence evaluated: **keep, with two refinements.**

Convergence to keep:

- Polish `claude-codex` as the public showcase / build journal.
- Treat dogfood history as credibility evidence.
- Make `kit/v1` the adopter path.
- Dry-run later proves portability.
- Clean second repo remains optional later.
- Do not create methodology skills yet.

Refinement 1: public showcase should wait for a public-facing polish
implementation. The scope-lock can decide posture, but the root README and
possibly START_HERE/dashboard framing still need a separate approved
implementation before active public sharing.

Refinement 2: a clean second repo is optional for public positioning, but still
valuable if the goal becomes "copy this now" with minimal dogfood context. The
dry-run should determine whether such a repo is worth creating.

Why not revert to pure B/E now:

- The maintainer has said public attribution is acceptable.
- The dogfood trail is part of the professional story, not just pollution.
- A clean repo is stronger as a later distillation than as the default next
  move before public-position polish.

Why not pure A without dry-run:

- The repo can be public as a showcase, but the kit cannot be called
  production-ready or extractable until a dry-run validates it.

## 3. Claims Discipline

### Allowed Public Claims

Allowed, if linked to preserved evidence:

- Git-native approval-boundary protocol for cross-model agent work.
- Human approval is kept separate from builder output, auditor pass, and model
  consensus.
- Protocol proof exists in the live dogfood harness and preserved turn notes.
- Decision Cockpit v1 is an audited static reference cockpit proof.
- Root README strangerprintability has an audited first implementation.
- Adopter-facing active surfaces have undergone a name-scrub pass.
- `kit/v1` is a first-pass adopter path with templates and examples.
- The kit is role/placeholder based and does not require this repo's model
  assignments.
- The kit preserves dashboard optionality.
- The record is Git-visible / audit-visible.
- Trust hardening is future work.
- Blockchain is not MVP.
- The project is conservative about claims by design.

### Forbidden Or Not-Yet-Earned Claims

Do not claim:

- public-alpha ready
- proven at scale
- external adoption proven
- kit production-ready
- kit extractability proven
- legal/compliance suitable
- tamper-proof
- trust-layer implemented
- public-proof runs complete
- agent safety solved
- AI alignment solved
- dashboard is required
- runtime replacement
- autonomous transport/wakeup/notifier safety
- model trio required
- historical dogfood was role-neutral from the start
- `satisfied`, auditor pass, or model consensus is approval

## 4. Dogfood History Framing

Public materials should use this conceptual split:

```text
This repo is the build journal and source proof.
kit/v1 is the copyable adopter path.
The historical turn notes are evidence, not onboarding requirements.
```

Dogfood history should be framed as credibility evidence because it preserves:

- exact scopes and no-touch lists
- builder/auditor disagreements and stop conditions
- dirty-tree and duplicate-file gates
- public-claim caution
- name-scrub decisions
- dry-run and repo-strategy debates
- explicit non-authorization boundaries

The old messy history should not be laundered. Do not rewrite turn notes to
make the process look cleaner or role-neutral from the beginning.

The live `.agent-handoff` system is this repo's dogfood instance. It can be
studied as a case history. It should not be described as the minimum required
shape for adopters.

Historical dogfood does not imply that the protocol requires the same model
trio, the same volume of turn notes, the same dashboard state, or the same
public identity choices.

## 5. Kit Prominence Recommendations

Later public-position implementation should include:

- root README top-section changes that name `kit/v1` as the adopter path
- a first-screen or near-first-screen "Start here" split:
  - "I want to understand the build journal"
  - "I want to try the kit"
  - "I want to inspect proof artifacts"
- a direct top-level link to `kit/v1/README.md`
- a "Copy this kit" path that tells adopters to copy `kit/v1/**`, not the
  source repo's live `.agent-handoff`
- a "What not to copy from this repo" callout near the adopter path
- a quick-start sequence for adopters that mirrors the kit README without
  duplicating every template field
- a short explanation that `DASHBOARD.html` is not included in the kit and
  dashboard adoption is optional

File recommendations for later:

- `START_HERE.md`: yes, recommended as a public navigation page.
- `KIT.md`: defer. Use only if a top-level single-page kit redirect remains
  needed after README and START_HERE polish.

No root README, START_HERE, KIT, or kit files are edited in this turn.

## 6. Dashboard Public-State Decision

Dashboard public-state recommendation:

- Do not use the current dashboard as the primary public landing path.
- Keep it as a reference cockpit proof artifact.
- Before active public viewing, either:
  - de-emphasize the dashboard in root README / START_HERE, or
  - run a separate minimal copy-refresh turn that labels dashboard lane paused
    and points to `COLLAB.md` as authoritative current state.

Current state assessment:

- `DASHBOARD.md` says "Current Live State: Courier Only" for E6-DASH-003.
- That was correct for the E6-DASH-003 handoff, but it is stale for the
  current repo state.
- `PROTOCOL.md` already says `COLLAB.md` wins on dashboard conflicts.
- Public readers may not know that before they open the dashboard.

Rejected for now:

- Concept B / Operator cockpit implementation in this turn.
- Dashboard layout/design work in this turn.
- `.design-concepts/` stash restore or inspection.
- Treating the dashboard as required adopter surface.

## 7. Dry-Run Relationship

E6-KIT-DRY-RUN-001 remains important, but its role changes:

- It is portability proof.
- It is kit-readiness evidence.
- It is not a blocker to every public viewing of the source/showcase repo.
- It is still required before claiming the kit is production-ready,
  stranger-extractable, or externally validated.
- It should happen after this public-position scope-lock is audited and
  preserved, and after any immediate public-facing polish plan is approved or
  deliberately deferred.

Dry-run should still be isolated:

- disposable scratch repo
- no public-proof claim
- no public-alpha packaging
- no clean repo creation unless separately approved
- no global skills, automations, memory files, MCP/plugin registration, or
  trust-layer work
- defects list returned to `claude-codex` only through a later approved report
  note or preservation path

## 8. Public Proof Relationship

Three proof layers should remain distinct:

1. **Dogfood/source proof in this repo.** Shows the method being practiced on
   real project work, including messy stops and corrections.
2. **Kit dry-run proof.** Shows a stranger-like extraction path in a scratch
   repo, without claiming public adoption.
3. **Fresh public-proof runs.** Optional later stronger evidence, ideally
   role-neutral from the start and clearly separated from historical dogfood.

Fresh role-neutral public-proof runs are still useful, but they are no longer
the gate to all public showcase work. They should happen after:

- public positioning is clear,
- the kit dry-run validates or revises extractability,
- the human approver chooses whether proof should occur in `claude-codex`, a
  scratch repo, or a clean adopter-facing/distillation repo.

If public-proof runs are done, they must never disguise old dogfood history as
clean proof.

## 9. Skills / Durable Behavior Boundary

Methodology skills remain deferred.

Current recommendation:

- no new methodology skills now
- no global skills for this methodology
- any future skill requires a Durable Behavior Proposal
- any adopter-facing skill should wait until the public-position and
  kit-dry-run evidence clarify whether it belongs in `kit/v1`, a clean
  adopter repo, or a dogfood-only path
- dogfood-only skills may exist later only if explicitly approved and labeled
  dogfood

The Codex-side existing skill breadcrumb surfaced in earlier audits does not
change repo strategy. Consulting an existing local skill and naming it in the
breadcrumb is not the same as creating or approving durable methodology
behavior.

Durable Behavior Boundary remains load-bearing:

- observed pattern is not durable behavior
- memory is context, not authority
- skill proposal is not approval
- automation proposal is not approval
- repeated workflow is not approval
- only the human approver can authorize durable behavior

## 10. Root README Positioning Implications

Later README implementation should move from "orientation for the dogfood
harness" toward "orientation for a public build journal with a copyable kit."

Suggested public hierarchy for a future README rewrite:

1. What this is: public build journal and source proof for a Git-native
   approval-boundary protocol.
2. If you want to try it: start at `kit/v1/README.md`.
3. If you want to inspect proof: read curated evidence layers and representative
   turn notes.
4. What not to infer: this repo's historical volume, model assignments,
   dashboard state, and GitHub metadata are not adopter requirements.
5. What is proven and unproven: preserve claim discipline.

The existing README already contains many of these pieces, but their order and
emphasis should be updated for public showcase positioning.

## 11. Recommended Next Track

After Claude audit and preservation of this scope-lock, the next substantive
track should be:

```text
E6-PUBLIC-POSITION-IMPLEMENTATION-001
```

Purpose:

- implement the public-facing framing selected here
- likely edit root README
- likely create START_HERE.md
- decide whether KIT.md is needed or deferred
- de-emphasize or minimally frame the stale dashboard state without reopening
  dashboard design
- keep `kit/v1` prominent and unchanged unless separately scoped
- preserve strict claim discipline

This next track should be an Outcome Circle because it would mutate public
surfaces and possibly create a new top-level file.

Recommended sequencing:

1. Claude audits this E6-PUBLIC-POSITION-001 scope-lock.
2. Human/GPT exit synthesis if needed; direct acceptance may be enough if
   Claude agrees and no strategic ambiguity remains.
3. Preserve E6-PUBLIC-POSITION-001 in a PR after explicit approval.
4. Run public-position implementation as a separate approved Outcome Circle.
5. Run E6-KIT-DRY-RUN-001 after public-facing polish is implemented or
   deliberately deferred.
6. Decide later whether a clean adopter/distillation repo is worth creating.

Not recommended as the immediate next track:

- kit dry-run before resolving public-facing entrypoint polish
- clean repo extraction
- public-proof repo setup
- skills design or implementation
- trust-layer design or implementation
- dashboard-stash disposition

## 12. Preservation Recommendation

Yes, this scope-lock should be preserved in a PR before any public-position
implementation, dry-run, or repo work.

Rationale:

- It records why the project shifted from the earlier B/E repo-split next track
  to A-first/B-later public showcase positioning.
- It keeps the revised GPT consultation and Codex analysis repo-visible rather
  than chat-only.
- It gives Claude a stable audit target before public-surface edits begin.
- It prevents public-position implementation from silently inheriting ambiguous
  claims.

Preservation is not authorized by this turn. Any branch, commit, push, PR, or
merge requires a separate exact approval.

## 13. Human / GPT Callbacks

Call the human approver for:

- final acceptance or rejection of this recommendation
- any author/maintainer attribution choice
- any root README edit
- START_HERE.md or KIT.md creation
- dashboard public-state decision
- public release or active public-sharing decision
- kit dry-run
- scratch repo or clean repo creation
- public-proof runs
- skill, memory, automation, subagent, or scheduled-check creation
- preservation PR authorization

Call GPT if:

- Claude disagrees with the A-first/B-later recommendation
- public-claim boundaries remain ambiguous
- dashboard public-state framing remains contested
- the human approver wants exit synthesis before preservation
- deciding whether public-position implementation can start after
  preservation

## 14. Builder Report For Claude Audit

Builder report:

- Clean entry was recorded before any file write.
- Full Outcome Packet was scribed before analysis.
- All 8 public-position questions were answered.
- Option A-first / B-later was evaluated and recommended with refinements.
- Allowed and forbidden claims were defined.
- Dogfood history framing was defined.
- Kit prominence implications were recorded.
- Dashboard public-state implications were recorded.
- Dry-run and public-proof relationships were defined.
- Methodology skills remain deferred under the Durable Behavior Boundary.
- No implementation work was performed.
- No public release, public-proof run, dry-run, scratch repo, clean repo,
  trust-layer work, dashboard work, memory/skill/automation/subagent creation,
  branch, PR, commit, push, merge, or staging occurred.

Builder cannot grade own work. Hard stop after this report and COLLAB handoff
update for Claude audit.

## Verification After Analysis And COLLAB Update

```text
$ git rev-parse HEAD
6a3c9dcc092f7b399859efe76a072e0b8613b4b0

$ git status --short --branch --untracked-files=all
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-PUBLIC-POSITION-001-codex-public-showcase-positioning-scope-lock.md

$ git diff --check
```

`git diff --check` returned no output.

```text
$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check returned no output. Dashboard-design stash remains
present and was not popped, dropped, inspected, or restored.

Allowed-file shape:

```text
$ git diff --name-only
.agent-handoff/COLLAB.md

$ git ls-files --others --exclude-standard
.agent-handoff/turns/E6-PUBLIC-POSITION-001-codex-public-showcase-positioning-scope-lock.md

$ git diff --cached --name-only
```

No staged files. The only tracked diff is `.agent-handoff/COLLAB.md`; the only
untracked file is the allowed E6-PUBLIC-POSITION-001 Codex turn note.

No-touch verification:

```text
$ git diff -- README.md AGENTS.md CLAUDE.md

$ git diff -- kit/v1

$ git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md

$ git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html

$ git diff -- .gitignore

$ test ! -d .design-concepts && echo ".design-concepts absent"
.design-concepts absent
```

All listed no-touch diffs returned no output. Root docs, kit, live protocol,
operating model, strategy, dashboard, `.gitignore`, and `.design-concepts/`
remain untouched. No public-release work, public-proof run, dry-run, scratch
repo, clean repo, dashboard work, trust-layer work, runtime work, memory file,
skill, automation, subagent, scheduled-check, branch, commit, push, PR, merge,
or staging occurred.
