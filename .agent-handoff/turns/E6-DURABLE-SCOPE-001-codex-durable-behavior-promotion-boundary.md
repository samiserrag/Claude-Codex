# E6-DURABLE-SCOPE-001 - Codex Durable Behavior Promotion Boundary

## Coordinator Trigger

- State: ROUTINE for this turn.
- Reason: Sami explicitly authorized a design-only scope-lock turn. This note
  proposes a boundary and kit-facing copy shape, but it creates no memory file,
  skill, subagent, automation, scheduled task, protocol change, dashboard
  default, trust layer, public release artifact, public proof run, branch, PR, or
  Outcome Circle.
- Future trigger: NEEDS_GPT/HUMAN before public-facing strategy, kit insertion,
  protocol rewrite, hosted memory integration, automation, or proof-run launch.

## Project Mode Estimate

- Dominant mode: coordinator / scope-lock design.
- Secondary mode: governance architecture.
- Browser QA: N/A. This is docs-only scope analysis with no UI or dashboard
  change.
- Automation budget: N/A. No polling, cron, webhook, heartbeat, scheduled check,
  notifier, or automation creation was authorized.

## Entry State

Expected state from the packet: `main` should be clean after PR #18 and after
the name-scrub scope preservation sequence.

Actual state at entry:

```text
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-claude-audit-public-name-inventory.md
?? .agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-codex-public-name-inventory.md
```

Entry mismatch: the name-scrub preservation stack was still local and
uncommitted. HEAD was still the PR #18 merge line seen in prior handoffs:
`0aafdfcedf470bf492472c45e4dd8b2f282d5ab6`.

This turn treats the name-scrub COLLAB diff and two untracked name-scrub notes
as pre-existing state. It does not revert, stage, commit, preserve, rewrite, or
otherwise implement that lane. This turn adds only:

- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-codex-durable-behavior-promotion-boundary.md`
- an incremental update to `.agent-handoff/COLLAB.md`

The dashboard-design stash was checked only by stash-list verification and was
not popped, dropped, inspected, or restored.

## Sources Read

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `.agent-handoff/DASHBOARD.md` as required by AGENTS.md
- `kit/v1/README.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-claude-audit-decision-notes-trust-doc-alignment.md`
- `.agent-handoff/turns/E6-KIT-SCOPE-001-codex-adopter-path-expansion-scope-lock.md`
- `.agent-handoff/turns/E6-KIT-SCOPE-001-claude-audit-adopter-path-expansion-scope-lock.md`
- `.agent-handoff/turns/E6-README-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-RETRO-001-codex-bootstrap-retrospective.md`

External/session context consulted:

- Codex memory registry excerpts about prior `claude-codex` kit scope,
  reflection-safety, automation deferral, and no-touch discipline. Memory was
  used as context only, not as authority.

## Scope Boundary

This is a design-only scope lock. It does not authorize implementation.

Explicitly not authorized:

- actual skills
- actual memory files
- actual hosted memory setup
- actual automations
- scheduled tasks or recurring checks
- subagent creation
- protocol edits
- operating-model edits
- strategy edits
- kit edits
- dashboard edits
- mockup edits
- trust-layer work
- public-release work
- public-proof runs
- whitepaper publication
- runtime, wakeup, notifier, or auto-handoff work
- stash pop/drop
- branch, PR, commit, push, merge, or staging
- a new Outcome Circle

## 1. Boundary Definition

### Observed Pattern

An observed pattern is behavior that has happened repeatedly or seemed useful in
one or more turns. Examples:

- agents repeatedly adding a certain verification line
- auditors repeatedly flagging the same risk
- coordinators repeatedly using a handoff shape
- the user repeatedly making a similar decision
- memory summaries surfacing a recurring preference

Observed pattern is not durable behavior. It is evidence that may justify a
proposal. It does not change the protocol, rubric, approval threshold, kit
template, dashboard default, or standing instructions.

### Proposal

A proposal is an explicit, reviewable suggestion to promote an observed pattern
into a durable artifact or standing rule. A proposal has no operational force
until explicitly approved by the configured human approver.

Skill proposal is not approval. Automation proposal is not approval. Memory
suggestion is not approval. Repeated workflow is not approval.

### Durable Behavior

Durable behavior is any reusable instruction, artifact, configuration, memory,
skill, automation, template, rubric, schedule, or default that can affect future
agent behavior beyond the current turn.

Durable behavior includes both explicit artifacts and de facto standing
dependencies. If future agents are expected to rely on it, invoke it, remember
it, enforce it, or treat it as default, it is durable behavior.

Memory is context, not authority. Memory can explain why a proposal exists, but
it cannot authorize itself and cannot override current repo-visible instructions
or the current user packet.

### Approved Durable Behavior

Approved durable behavior is durable behavior that the configured human approver
has explicitly authorized with enough scope to identify:

- the artifact type
- the exact file, memory, skill, automation, schedule, or template boundary
- the behavior it changes
- where it applies
- what it does not authorize
- how it can be deleted, paused, or rolled back

Only the human approver can authorize durable behavior.

### Rejected Durable Behavior

Rejected durable behavior is a proposed durable behavior that was declined by
the configured human approver or failed an audit gate. It must not be silently
reintroduced through memory, skill wording, automation scaffolding, template
drift, dashboard defaults, or "we usually do this" behavior.

### Deprecated Durable Behavior

Deprecated durable behavior is previously approved durable behavior that should
no longer be used, but may remain visible for historical, compatibility, or
migration reasons. Deprecated behavior needs a clear replacement path or a clear
deletion path. Agents must not treat deprecated behavior as the active default
unless the current packet explicitly says so.

## 2. Durable Behavior Types

| Type | Why It Is Durable | Approval Boundary |
| --- | --- | --- |
| Memory file | Carries instructions, preferences, or summaries across turns. | Explicit approval before creation or modification when repo/team behavior could change. |
| Hosted memory / Cowork-style memory | Can shape future agent context outside the repo. | Context only unless explicitly promoted; hosted integration requires separate approval. |
| Skill | Encodes reusable operating behavior and may be auto-invoked. | Explicit approval before creation, modification, repo adoption, or team sharing. |
| Subagent | Encodes role, instructions, tools, and expected handoff behavior. | Explicit approval before creation, modification, routing, or default use. |
| Automation | Runs or wakes work outside the immediate turn. | Explicit approval before creation, schedule change, trigger change, or scope expansion. |
| Scheduled check | Recurring verification, polling, cron, heartbeat, or watchdog. | Same as automation; no recurrence by implication. |
| Standing prompt | Persistent wording that future agents are expected to follow. | Explicit approval before adding to repo, memory, skill, template, or handoff defaults. |
| Rubric change | Alters how builders, auditors, coordinators, or GPT decide pass/fail. | Human approval required; prior notes cannot silently change it. |
| Protocol change | Changes binding workflow rules. | Requires authorized protocol/doc-lock scope. |
| Dashboard default | Changes what the cockpit presents as normal, expected, blocked, or next. | Explicit dashboard scope and human approval required. |
| Kit template | Teaches adopters what to copy. | Must be scrubbed, role-neutral, and explicitly approved for adopter-facing packaging. |
| Approval threshold | Changes what counts as enough human decision, signoff, or merge permission. | Human-only authority; model consensus cannot change it. |
| Evidence threshold | Changes how much proof is needed for pass/fail, implementation, or audit. | Explicit approval required; cannot drift through memory or notes. |
| Workflow checklist | Reusable execution checklist that future agents treat as required. | Proposal first; durable only after explicit approval and scope. |

## 3. Promotion Path

Canonical state flow:

```text
Observed -> shortlisted -> proposed -> audited -> human-approved -> durable
```

State definitions:

- Observed: pattern appeared in one or more turns.
- Shortlisted: pattern is worth considering, but no artifact is proposed yet.
- Proposed: a minimal durable artifact is named and bounded.
- Audited: another agent or review pass checks scope, risks, reversibility, and
  unintended authority expansion.
- Human-approved: the configured human approver explicitly authorizes the exact
  durable artifact and scope.
- Durable: the artifact exists and may be invoked within its approved boundary.

Additional states:

- Rejected: the proposal is declined. Agents must not reintroduce it by stealth.
- Paused: proposal or durable behavior is intentionally inactive pending a later
  decision.
- Deprecated: once-approved behavior remains visible but should no longer guide
  new work unless specifically reactivated.
- Deleted / rolled back: artifact removed or disabled. Future turns may cite the
  history, but must not treat it as active.

Important rule: none of the intermediate states authorize behavior. Observed,
shortlisted, proposed, and audited are still non-authoritative.

## 4. Durable Behavior Proposal Template

Smallest proposed template:

```md
## Durable Behavior Proposal

- Repeated pattern observed:
- Evidence / dates / frequency:
- Existing skill / memory / subagent / automation checked:
- Proposed smallest durable artifact:
- Artifact type:
- Scope where it applies:
- What it changes:
- What it does NOT authorize:
- Risk / failure mode:
- Reversibility / deletion path:
- Invocation breadcrumb requirement:
- Human decision needed:
```

Template notes:

- "Smallest durable artifact" should bias toward the least persistent thing that
  solves the problem: turn-note convention before protocol rewrite, kit example
  before repo-wide standing rule, checklist before automation.
- "Existing checked" prevents duplicate skills, duplicate memories, duplicate
  automations, and accidental shadow instructions.
- "Does NOT authorize" is mandatory because durable behavior often leaks into
  adjacent domains.
- "Invocation breadcrumb" is mandatory for visibility. Durable behavior should
  be discoverable when it affects a turn.

## 5. Creation vs Invocation

Creating a durable behavior:

- Adds a new memory, skill, automation, subagent, standing prompt, checklist,
  dashboard default, protocol rule, kit template, threshold, or equivalent
  persistent artifact.
- Requires explicit human approval.

Editing a durable behavior:

- Changes the content, scope, trigger, schedule, invocation condition, owner,
  threshold, or expected output of an existing durable artifact.
- Requires explicit human approval, even when the edit appears small.

Invoking a durable behavior:

- Uses an already-approved durable artifact within its approved scope.
- Requires a breadcrumb when the behavior materially shaped the turn.

Silently relying on a durable behavior:

- Lets an artifact or memory shape the turn without naming it.
- Should be treated as a failure mode unless the current repo convention
  explicitly makes the behavior visible elsewhere.

Invocation breadcrumb:

```md
Durable behavior active this turn:
- skills:
- subagents:
- automations:
- memory files consulted:
- standing rules invoked:
```

For this turn:

```md
Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: Codex memory registry excerpts, context only
- standing rules invoked: current user packet, AGENTS.md, PROTOCOL.md,
  COLLAB.md handoff rules, developer no-stage/no-commit/no-touch rules
```

## 6. Sycophantic Adaptation

Threat model:

- Agents reading human notes may optimize for approval patterns instead of the
  actual rubric.
- Audit findings may become formulaic and lose force.
- Builders may pad evidence to resemble prior accepted packets.
- Auditors may soften blockers into nits because prior notes rewarded smoother
  handoffs.
- Coordinators may become ceremony generators instead of decision clarifiers.

Design rule:

- Agents may cite prior human decision notes as context.
- Agents may not adjust evidence thresholds, grading thresholds, rubric
  strictness, approval standards, or blocker severity based on past notes.
- Individual human notes are descriptive, not normative, until promoted through
  explicit durable behavior approval.
- A repeated human preference may justify a Durable Behavior Proposal. It does
  not itself become a new rule.
- A model writing "not adapting" is not sufficient evidence. The audit needs to
  inspect whether thresholds, evidence, pass/fail language, or blocker handling
  actually changed.

## 7. Memory Governance

Memory surfaces covered:

- Claude Code auto memory
- Claude app/project memory
- OpenAI/Codex memory and session summaries where available
- Chronicle/session history where available
- repo-visible turn notes

Rules:

- Memory may be evidence.
- Memory is not source of truth.
- Memory cannot override the current Outcome Packet, current user packet,
  rubric, no-touch list, approval boundary, PROTOCOL.md, COLLAB.md, or the
  allowed-file list.
- Memory-generated suggestions must be proposed, not applied.
- Memory cannot convert prior user tolerance into future approval.
- Memory cannot expand scope, soften stopgates, or make public-release claims.
- Repo-visible turn notes are historical evidence and coordination context; they
  do not become normative until a properly scoped protocol, kit, operating, or
  dashboard change says so.

Memory should be cited as:

- context consulted
- evidence for a possible proposal
- stale unless verified when current state matters

Memory should not be cited as:

- approval
- a binding protocol rule
- a substitute for the current packet
- proof that a repeated action is now default

## 8. Skills and Automations

Skills:

- Skills are durable behavior because they encode reusable behavior across
  turns.
- Repo/team-shared skills require explicit approval before creation,
  modification, adoption, or default invocation.
- A skill proposal is not approval.
- A skill should carry an invocation breadcrumb when it materially affects a
  turn.
- Skill discovery should not become skill adoption.

Automations:

- Automations are durable behavior because they run or wake work outside the
  current turn.
- Scheduled recurring checks are durable behavior.
- Automation proposals are not approval.
- Automations require explicit approval before creation, schedule changes,
  trigger changes, destination changes, escalation changes, or scope expansion.
- An automation must define what it is allowed to do when it fires and what it
  must leave for human approval.
- No automation should stage, commit, push, merge, publish, alter global config,
  create credentials, or change approval boundaries unless a later explicit
  authorization says so.

Subagents:

- Subagents are durable behavior when their role, prompt, tool access, or
  routing can affect future work.
- Subagent creation, modification, or default routing requires explicit approval.
- A subagent pass is not human approval.

## 9. Kit Implications

E6-KIT-001 should include:

- a short Durable Behavior Boundary section
- the Durable Behavior Proposal template
- direct copy: "observed pattern is not approval"
- direct copy: "memory is context, not authority"
- direct copy: "skill proposal is not approval"
- direct copy: "automation proposal is not approval"
- direct copy: "repeated workflow is not approval"
- memory / skill / automation caveats in adopter-facing language
- invocation breadcrumb in turn-note examples
- a small state flow: `Observed -> shortlisted -> proposed -> audited ->
  human-approved -> durable`
- explicit "what this does not authorize" copy

What the kit should not copy from this repo:

- personal names as approval labels
- local model-role labels as permanent role labels
- local dashboard dogfood defaults
- private dogfood turn-note history
- GitHub owner, PR, or commit metadata
- local filesystem paths
- deferred stash details
- this repo's specific memory summaries
- unapproved automation or watcher patterns
- public-alpha claims
- trust-layer claims
- legal, compliance, or security guarantees

Recommended kit placement:

- Add a short boundary section in the kit protocol/template material.
- Add the proposal template in a templates/examples area.
- Add a breadcrumb field to example turn notes.
- Keep a future whitepaper expansion separate from the MVP kit.

## 10. What Not To Implement Yet

Defer all of the following:

- actual skills
- actual memory files
- hosted memory integrations
- Claude Code auto-memory configuration changes
- Claude app/project memory changes
- Codex/OpenAI memory changes
- Chronicle/session-history integrations
- subagents
- automations
- scheduled tasks
- recurring checks
- protocol edits
- operating-model edits
- strategy edits
- dashboard edits
- kit edits
- trust-layer implementation
- public-release work
- whitepaper publication
- runtime work
- wakeup work
- notifier work
- auto-handoff work
- public proof runs

This note should be preserved and audited before implementation. It should not
be treated as implementation authorization.

## 11. Failure Modes and Mitigations

| Failure Mode | Risk | Mitigation |
| --- | --- | --- |
| Pattern becomes durable behavior without approval | Repetition quietly changes the protocol. | Require proposal state and human-approved state before durable use. |
| Memory silently changes thresholds | Past preferences become hidden rubric drift. | Memory context cannot override packet, rubric, no-touch list, or approval boundary. |
| Skill invocation becomes invisible | Future behavior changes without reviewability. | Require invocation breadcrumbs for material skill use. |
| Automation acts outside approved scope | Background process mutates state or creates pressure to accept its output. | Require explicit scope, schedule, trigger, allowed action, and deletion path. |
| Repeated human notes become unapproved rubric drift | Agents optimize for approval patterns instead of evidence. | Treat notes as descriptive until promoted by explicit approval. |
| Agent writes "not adapting" while adapting | Compliance language hides actual threshold movement. | Audit outputs against thresholds, evidence, blocker handling, and pass/fail criteria. |
| Agents behave correctly during audits but drift elsewhere | Boundary exists only in high-scrutiny turns. | Put the short boundary and breadcrumb in kit examples and normal turn notes. |
| Durable behavior becomes hard to delete | Teams accumulate invisible rules and automations. | Every proposal must include reversibility / deletion path. |
| Adopters mistake templates for enforcement | Kit appears stronger than the actual repo-file protocol. | Label templates as governance aids, not enforcement machinery. |
| Proposal template becomes ceremony | Agents overproduce paperwork for simple one-off turns. | Use only when behavior would persist beyond the current turn. |
| Dashboard default implies approval | UI green state becomes de facto permission. | Dashboard defaults must say what they display and what they do not authorize. |
| Kit template bakes in local dogfood behavior | Adopters inherit this repo's private patterns. | Scrub and role-neutralize before kit packaging. |

## 12. Final Recommendation

Should this be codified before kit implementation?

Yes. At minimum, preserve and audit this scope-lock before E6-KIT-001
implementation. The kit should not teach adopters memory, skills, automations,
or repeated workflows without also teaching that these are proposal inputs, not
approval.

Should it be a short kit section or a separate full whitepaper section?

Use a short adopter-facing kit section plus a small proposal template now. A
full whitepaper section can come later, after fresh public proof runs show that
the boundary works in role-neutral settings.

Should it modify PROTOCOL.md now or wait for E6-KIT-001?

Wait. This turn is design-only and should not modify PROTOCOL.md. The next
implementation packet should decide whether E6-KIT-001 adds kit-only wording
first or whether a later protocol/doc-lock turn promotes the boundary into the
repo protocol. The lean is kit-facing inclusion first, full protocol rewrite
later if the kit copy proves stable.

What should Claude audit next?

Claude should audit this turn note for:

- scope discipline and allowed-file compliance
- whether every requested durable behavior type is covered
- whether the definitions preserve "observed pattern is not approval"
- whether the promotion path distinguishes proposed, audited, approved, and
  durable states
- whether the proposal template is small enough to use
- whether memory, skills, subagents, and automations are bounded clearly
- whether sycophantic adaptation is treated as threshold drift, not tone drift
- whether the kit implications are implementable without starting kit work
- whether the note accidentally authorizes implementation
- whether verification preserves the name-scrub pre-existing dirty state without
  laundering it

What remains a human/GPT decision?

- whether this scope-lock is accepted
- whether Claude's audit is required before preservation
- whether E6-KIT-001 should include this boundary
- exact kit files and template locations for insertion
- whether PROTOCOL.md should eventually be updated
- whether a separate whitepaper section is worth writing
- whether any memory, skill, subagent, automation, or scheduled check should
  ever be created
- public-proof repo/branch/org strategy
- dashboard-design stash disposition
- any public-alpha, trust-layer, runtime, notifier, or hosted-memory work

## Verification

Verification commands run after edits:

- `git status --short --branch --untracked-files=all`
- `git diff --check`
- `git stash list | head -5`
- `git diff -- kit/v1`
- `git diff -- README.md AGENTS.md CLAUDE.md`
- `git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md`
- `git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html`
- `git diff -- .gitignore`
- `find . -maxdepth 1 -name .design-concepts -print`
- `find .agent-handoff/turns -name 'E6-OC-006*' -print`
- `find . -name '* 2.md' -not -path './.git/*' -print`
- `git ls-files --others --exclude-standard`
- `git diff --cached --name-only`

Results:

- `git status --short --branch --untracked-files=all`:

  ```text
  ## main...origin/main
   M .agent-handoff/COLLAB.md
  ?? .agent-handoff/turns/E6-DURABLE-SCOPE-001-codex-durable-behavior-promotion-boundary.md
  ?? .agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-claude-audit-public-name-inventory.md
  ?? .agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-codex-public-name-inventory.md
  ```

- `git diff --check`: exit 0, no output.
- `git stash list | head -5`: `stash@{0}: On main: defer dashboard design
  concepts gitignore workfolder`.
- `git diff -- kit/v1`: exit 0, no output.
- `git diff -- README.md AGENTS.md CLAUDE.md`: exit 0, no output.
- `git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md`:
  exit 0, no output.
- `git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html`:
  exit 0, no output.
- `git diff -- .gitignore`: exit 0, no output.
- `find . -maxdepth 1 -name .design-concepts -print`: exit 0, no output.
- `find .agent-handoff/turns -name 'E6-OC-006*' -print`: exit 0, no output.
- `find . -name '* 2.md' -not -path './.git/*' -print`: exit 0, no output.
- `git diff --name-only`: `.agent-handoff/COLLAB.md`.
- `git ls-files --others --exclude-standard`: this turn's durable note plus the
  two pre-existing untracked name-scrub notes.
- `git diff --cached --name-only`: exit 0, no output.

Interpretation:

- This turn changed only allowed files: `.agent-handoff/COLLAB.md` and this
  durable scope-lock note.
- Pre-existing name-scrub untracked notes remain untouched.
- No kit/v1 diff.
- No README / AGENTS / CLAUDE diff.
- No PROTOCOL / OPERATING-MODEL / STRATEGY diff.
- No DASHBOARD.md/html diff.
- No `.gitignore` diff.
- `.design-concepts/` remains absent from working tree.
- No public-release work was performed.
- No new Outcome Circle was created.
- Zero `* 2.md` duplicates were found.
- Nothing was staged.

## Hard Stop

Hard stop after local scope-lock note and COLLAB handoff update.

No staging, commit, push, branch, PR, merge, kit implementation,
memory/skill/automation creation, dashboard work, public release, trust
implementation, public proof run, clean repo/branch creation, stash pop/drop, or
new Outcome Circle was performed.
