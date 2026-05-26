# E6-DURABLE-SCOPE-001 - Claude audit of Durable Behavior Promotion Boundary

## Coordinator Trigger

- State: ROUTINE
- Reason: this audit grades a Sami-authorized design-only scope-lock turn.
  No new architecture, kit implementation, memory/skill/automation
  creation, protocol relaxation, or new Outcome Circle is introduced. The
  next handoff (Sami preservation-PR decision + post-merge GPT framing
  for kit-implementation packet) is `NEEDS_GPT` per the bootstrap rule
  for public-facing strategic work and is named explicitly below.

## Project Mode (estimated)

- Dominant mode: Coordinator / scope-lock audit (~50%)
- Sami-decision-pending: ~40% (combined-vs-split preservation PR shape +
  durable-behavior boundary kit-insertion decision)
- Execution: ~10%
- Reason: substantive design convergence happened in the pre-build chat
  + Codex's scope lock. This audit grades whether the boundary is
  buildable, honest, well-bounded, and properly distinguishes
  observation from authorization.

## Agent

Claude

## Phase

critique

## Sources Read

- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-codex-durable-behavior-promotion-boundary.md`
  (614 lines, 12 substantive sections)
- `.agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-codex-public-name-inventory.md`
- `.agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-claude-audit-public-name-inventory.md`
- `.agent-handoff/turns/E6-KIT-SCOPE-001-codex-adopter-path-expansion-scope-lock.md`
- `.agent-handoff/turns/E6-KIT-SCOPE-001-claude-audit-adopter-path-expansion-scope-lock.md`
- `.agent-handoff/PROTOCOL.md`, `OPERATING-MODEL.md`, `STRATEGY.md`
  (verified untouched)
- `.agent-handoff/COLLAB.md` (current-owner section read)
- `README.md`, `AGENTS.md`, `CLAUDE.md` (verified untouched)
- `kit/v1/README.md`, `kit/v1/.agent-handoff/PROTOCOL.md.template`
  (verified untouched)
- Prior pre-build convergence chat on Durable Behavior Boundary (GPT
  framing + Claude additions) for context
- `.gitignore` (verified L3 `.claude/worktrees/` is pre-existing
  Claude Code worktree infrastructure, not Codex-created skill/
  automation)

## Durable behavior active this turn

(Following Codex's §5 invocation-breadcrumb convention — applied to
this audit turn for consistency.)

```text
Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none (audit relies on repo-visible artifacts only)
- standing rules invoked: current user audit packet, AGENTS.md, PROTOCOL.md,
  COLLAB.md handoff discipline, prior turn-note schema, no-stage/no-commit/
  no-touch rules
```

## Files touched this turn

- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-claude-audit-durable-behavior-promotion-boundary.md`
  (created)
- `.agent-handoff/COLLAB.md` (edited — current-owner handoff updated
  with audit result; prior history blocks preserved beneath)

## Audit Result

**PASS with 0 blockers, 0 nits, 3 soft observations.**

Codex's E6-DURABLE-SCOPE-001 is buildable, honest, well-bounded, and
correctly distinguishes observation from authorization. All 15 audit
foci pass. The 12 substantive sections cover boundary definition,
durable behavior types, promotion path, proposal template, creation
vs invocation (with self-applied breadcrumb), sycophantic adaptation,
memory governance, skills/automations, kit implications, what-not-to-
implement-yet, failure modes, and final recommendation.

The 3 soft observations cover (a) §7 memory-surfaces list doesn't
explicitly enumerate hosted/Cowork memory (covered elsewhere in §2 +
§10), (b) §11 failure modes don't explicitly name the "viral prompt"
social-influence vector (covered implicitly), and (c) §9 kit
implications don't explicitly mention adopter memory-enable/disable
decision (Sami's focus 11 last bullet). None blocking.

## Verification

### `git status --short --branch --untracked-files=all`

```text
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-DURABLE-SCOPE-001-codex-durable-behavior-promotion-boundary.md
?? .agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-claude-audit-public-name-inventory.md
?? .agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-codex-public-name-inventory.md
```

Matches Codex's L31-35 entry-state and L566-571 post-edit-state
verbatim. Pre-existing dirty stack (Codex's E6-NAME-SCRUB inventory +
my E6-NAME-SCRUB audit + COLLAB.md handoff layering) is preserved
untouched.

### `git diff --check`

Exit `0`, no whitespace errors.

### Stash preserved

```text
stash@{0}: On main: defer dashboard design concepts gitignore workfolder
```

✅ Stash NOT popped, NOT dropped, NOT inspected (per packet
restriction + my own audit discipline).

### No-touch per-path diffs (all exit 0)

- `git diff -- README.md AGENTS.md CLAUDE.md`: exit 0
- `git diff -- kit/v1`: exit 0
- `git diff -- .agent-handoff/PROTOCOL.md OPERATING-MODEL.md STRATEGY.md`: exit 0
- `git diff -- .agent-handoff/DASHBOARD.md DASHBOARD.html`: exit 0
- `git diff -- .gitignore`: exit 0
- `git diff -- docs .agent-handoff/mockups .agent-handoff/tools/alert-state.sh`: exit 0

All listed durable docs, dashboard files, mockups, kit, root docs,
scripts, `.gitignore`, and `.design-concepts/` unchanged from main.

### Forbidden paths

`.agent-handoff/advisor-notes/`, `.agent-handoff/reflections/`,
`.agent-handoff/improvements/`, `.mcp.json`, `.design-concepts/` —
all absent.

### Finder duplicates

`find .agent-handoff -name '* 2.md' -print`: no output.

### No new Outcome Circle

No `E6-OC-006` or later turn notes.

### No memory/skill/automation/subagent file created

`find . -type d \( -name '.claude' -o -name 'skills' -o -name
'subagents' -o -name 'memory' -o -name 'automations' \) ! -path
'./.git/*'` returns only `./.claude/worktrees/...` paths. Verified:
`.claude/worktrees/` is pre-existing Claude Code worktree
infrastructure (gitignored at `.gitignore` L3 since before this
turn). Not a Codex-created skill / subagent / automation. ✓

## Findings — 15 Audit Foci

### 1. Scope discipline — PASS

- ✅ Only allowed files modified: COLLAB.md + new turn note (per
  Codex's §5 allowed-files; per packet's allowed list).
- ✅ No kit/v1 diff.
- ✅ No README / AGENTS / CLAUDE diff.
- ✅ No PROTOCOL / OPERATING-MODEL / STRATEGY diff.
- ✅ No DASHBOARD.md/html diff.
- ✅ No `.gitignore` diff.
- ✅ `.design-concepts/` absent.
- ✅ No memory file / skill / automation / scheduled check / subagent
  artifact created (verified by find above; `.claude/worktrees/` is
  pre-existing infrastructure).
- ✅ No public-release work, no trust-layer implementation, no new
  Outcome Circle.

### 2. Pre-existing dirty-stack handling — PASS

Codex L23-49 §"Entry State" explicitly discloses the mismatch:

> "Expected state from the packet: `main` should be clean after PR #18
> and after the name-scrub scope preservation sequence.
>
> Actual state at entry: [3 dirty files listed]
>
> Entry mismatch: the name-scrub preservation stack was still local and
> uncommitted."

And the discipline clause:

> "This turn treats the name-scrub COLLAB diff and two untracked
> name-scrub notes as pre-existing state. It does not revert, stage,
> commit, preserve, rewrite, or otherwise implement that lane."

Independent verification confirms:
- All 3 pre-existing files match name-scrub state from prior turn
- Codex's edits are scoped exactly to E6-DURABLE (its own turn note +
  COLLAB current-owner section, layered above the prior name-scrub
  handoff which is preserved as "Prior Current Owner" history)

Codex correctly did **not** misclassify the pre-existing stack as
E6-DURABLE work. Per packet instruction ("Do not require a fix solely
because E6-DURABLE ran before name-scrub preservation, unless the
dirty state caused substantive ambiguity or scope drift"):
**substantive ambiguity = none; scope drift = none.** Acceptable as
transparent sequencing caveat. ✓

### 3. Boundary definition — PASS

§1 defines all 6 required terms with operational clarity:

- ✅ **Observed Pattern** (L106-118): behavior that happened
  repeatedly or seemed useful; examples enumerated; explicit "not
  durable behavior."
- ✅ **Proposal** (L120-127): explicit, reviewable suggestion to
  promote; "no operational force until explicitly approved."
- ✅ **Durable Behavior** (L129-142): "any reusable instruction,
  artifact, configuration, memory, skill, automation, template,
  rubric, schedule, or default that can affect future agent behavior
  beyond the current turn." Includes "both explicit artifacts and de
  facto standing dependencies."
- ✅ **Approved Durable Behavior** (L143-155): 6 required scoping
  elements (artifact type / exact boundary / behavior changed / where
  it applies / what it does not authorize / deletion path).
- ✅ **Rejected Durable Behavior** (L157-162): "must not be silently
  reintroduced through memory, skill wording, automation scaffolding,
  template drift, dashboard defaults, or 'we usually do this'
  behavior." Sharp anti-resurrection clause.
- ✅ **Deprecated Durable Behavior** (L164-170): clear replacement
  path or deletion path required; "Agents must not treat deprecated
  behavior as the active default unless the current packet explicitly
  says so."

All 6 required boundary-lines present:
- ✅ "Observed pattern is not durable behavior" (L116)
- ✅ "Memory is context, not authority" (L140)
- ✅ "Skill proposal is not approval" (L126)
- ✅ "Automation proposal is not approval" (L126)
- ✅ "Repeated workflow is not approval" (L127)
- ✅ "Only the human approver can authorize durable behavior" (L155)

### 4. Durable behavior types — PASS

§2 table covers all 14 types Sami requested, each with Why-It-Is-
Durable + Approval-Boundary columns:

- ✅ Memory file
- ✅ Hosted memory / Cowork-style memory
- ✅ Skill
- ✅ Subagent
- ✅ Automation
- ✅ Scheduled check
- ✅ Standing prompt
- ✅ Rubric change
- ✅ Protocol change
- ✅ Dashboard default
- ✅ Kit template
- ✅ Approval threshold
- ✅ Evidence threshold
- ✅ Workflow checklist

Table is operationally usable. ✓

### 5. Promotion path — PASS

§3 state flow (verbatim from L195-197):

```text
Observed -> shortlisted -> proposed -> audited -> human-approved -> durable
```

Each state defined (L200-208). Plus additional states (L212-219):
- ✅ Rejected
- ✅ Paused
- ✅ Deprecated
- ✅ Deleted / rolled back

Critical clause (L221-222): *"none of the intermediate states
authorize behavior. Observed, shortlisted, proposed, and audited are
still non-authoritative."* This is the load-bearing rule that prevents
any intermediate state from being mistaken for approval. ✓

### 6. Durable Behavior Proposal template — PASS

§4 template (L228-242) has exactly the 12 minimum fields Sami
requested:

- ✅ Repeated pattern observed
- ✅ Evidence / dates / frequency
- ✅ Existing skill / memory / subagent / automation checked
- ✅ Proposed smallest durable artifact
- ✅ Artifact type
- ✅ Scope where it applies
- ✅ What it changes
- ✅ What it does NOT authorize
- ✅ Risk / failure mode
- ✅ Reversibility / deletion path
- ✅ Invocation breadcrumb requirement
- ✅ Human decision needed

Plus template notes (L244-254) explaining design choices:
- "Smallest durable artifact" biases toward least-persistent thing
  (turn-note convention before protocol rewrite, kit example before
  repo-wide rule, checklist before automation) — sharp
- "Existing checked" prevents duplicate skills/memories/automations
- "Does NOT authorize" is mandatory because durable behavior often
  leaks into adjacent domains
- "Invocation breadcrumb" mandatory for visibility

Template is small, fillable, and includes the "what does NOT
authorize" field that prevents scope leak. ✓

### 7. Creation vs invocation — PASS

§5 distinguishes all 4 modes:

- ✅ **Creating** (L258-262): adds new persistent artifact; requires
  explicit human approval
- ✅ **Editing** (L264-268): changes content/scope/trigger/schedule/
  invocation-condition/owner/threshold/expected-output; requires
  explicit human approval "even when the edit appears small" (sharp —
  prevents incremental drift)
- ✅ **Invoking** (L270-273): uses already-approved artifact within
  approved scope; requires breadcrumb when behavior materially shaped
  the turn
- ✅ **Silently relying** (L275-280): treated as a failure mode
  unless the current repo convention explicitly makes the behavior
  visible elsewhere

Invocation breadcrumb format (L284-291) exactly matches Sami's
requested shape:

```text
Durable behavior active this turn:
- skills:
- subagents:
- automations:
- memory files consulted:
- standing rules invoked:
```

**Meta-discipline note: Codex applies the breadcrumb to itself
(L293-303)**, declaring its own context for this turn:

```text
- skills: none
- subagents: none
- automations: none
- memory files consulted: Codex memory registry excerpts, context only
- standing rules invoked: current user packet, AGENTS.md, PROTOCOL.md,
  COLLAB.md handoff rules, developer no-stage/no-commit/no-touch rules
```

This is the right discipline — the scope-lock practices what it
preaches by using the format it's recommending. I've applied the same
breadcrumb at the top of this audit. ✓

### 8. Sycophantic adaptation — PASS

§6 threat model covers all 5 items Sami requested:

- ✅ Agents reading human notes may optimize for approval patterns
- ✅ Audit findings may become formulaic
- ✅ Builders may pad evidence
- ✅ Auditors may soften blockers into nits
- ✅ Coordinators may become ceremony generators (L314 "ceremony
  generators instead of decision clarifiers")
- ✅ Implicit: "all roles adapting toward 'approved shapes'" covered
  by the general framing

Design rules (L318-323):
- ✅ Agents may cite prior human decision notes as context
- ✅ Agents may NOT adjust evidence/grading/rubric/approval/blocker
  thresholds based on past notes
- ✅ Individual human notes are descriptive, not normative, until
  promoted through explicit durable behavior approval
- ✅ Individual notes cannot silently become standing rubric/protocol/
  dashboard/kit/workflow changes (covered by "repeated human
  preference may justify a Durable Behavior Proposal. It does not
  itself become a new rule.")

**Critical anti-compliance-cover clause (L326-328):**

> "A model writing 'not adapting' is not sufficient evidence. The
> audit needs to inspect whether thresholds, evidence, pass/fail
> language, or blocker handling actually changed."

This is the right discipline — prevents agents from claiming they're
not adapting while in fact adapting. Audits must inspect actual
behavior, not just self-reported compliance. ✓

### 9. Memory governance — PASS (with 1 soft observation)

§7 memory surfaces covered (L333-339):
- ✅ Claude Code auto memory
- ✅ Claude app/project memory
- ✅ OpenAI/Codex memory and session summaries
- ✅ Chronicle/session history
- ✅ repo-visible turn notes

**Soft observation 1:** §7's surfaces list at L333-339 does NOT
explicitly include "hosted/Cowork-style memory" as a 6th surface item.
However, hosted memory IS covered:
- §2 type table (L177-178) explicitly includes "Hosted memory /
  Cowork-style memory" as a durable behavior type with "Context only
  unless explicitly promoted; hosted integration requires separate
  approval" boundary
- §10 deferrals (L446-447) explicitly defer "hosted memory
  integrations" and "Claude Code auto-memory configuration changes"

So the discipline is covered, just split across sections. The §7
surfaces list could be tightened by adding "hosted/Cowork-style
memory" as an explicit 6th surface. Minor structural issue. Not
blocking.

Rules covered (L341-352):
- ✅ Memory may be evidence
- ✅ Memory is not source of truth
- ✅ Memory cannot override Outcome Packet / rubric / no-touch list /
  approval boundary / PROTOCOL.md / COLLAB.md / allowed-file list
- ✅ Memory-generated suggestions must be proposed, not applied
- ✅ Memory cannot convert prior user tolerance into future approval
- ✅ Memory cannot expand scope, soften stopgates, or make public-
  release claims
- ✅ Memory must not silently change thresholds or role behavior
  (implicit in proposal-not-applied + sycophantic-adaptation rules)

Plus useful "Memory should be cited as / Memory should not be cited
as" dual list (L354-365):

Cited AS:
- context consulted
- evidence for a possible proposal
- stale unless verified when current state matters

NOT cited AS:
- approval
- a binding protocol rule
- a substitute for the current packet
- proof that a repeated action is now default

This is operationally usable as cite-format guidance. ✓

### 10. Skills and automations — PASS

§8 covers all required points:

Skills (L371-378):
- ✅ Skills are durable behavior (encode reusable behavior across
  turns)
- ✅ Repo/team-shared skills require explicit approval before
  creation/modification/adoption/default-invocation
- ✅ Skill proposal is not approval
- ✅ Invocation breadcrumb required when skill materially affects a
  turn
- ✅ Sharp clause: *"Skill discovery should not become skill
  adoption."* (L378)

Automations (L382-392):
- ✅ Automations are durable behavior (run/wake work outside current
  turn)
- ✅ Scheduled recurring checks are durable behavior
- ✅ Automation proposals are not approval
- ✅ Explicit approval required before creation/schedule-change/
  trigger-change/destination-change/escalation-change/scope-expansion
- ✅ Automation must define allowed-when-it-fires vs human-approval-
  required actions
- ✅ Explicit prohibition (L390-392): "No automation should stage,
  commit, push, merge, publish, alter global config, create
  credentials, or change approval boundaries unless a later explicit
  authorization says so."

Subagents (L394-399):
- ✅ Subagents are durable behavior when role/prompt/tool-access/
  routing can affect future work
- ✅ Creation, modification, default routing require explicit approval
- ✅ A subagent pass is not human approval

### 11. Kit implications — PASS (with 1 soft observation)

§9 enumerates kit-implementation items:

- ✅ Short Durable Behavior Boundary section
- ✅ Durable Behavior Proposal template
- ✅ "observed pattern is not approval" direct copy
- ✅ "memory is context, not authority" direct copy
- ✅ "skill proposal is not approval" direct copy
- ✅ "automation proposal is not approval" direct copy
- ✅ "repeated workflow is not approval" direct copy
- ✅ Memory / skill / automation caveats in adopter-facing language
- ✅ Invocation breadcrumb in turn-note examples
- ✅ State flow `Observed -> shortlisted -> proposed -> audited ->
  human-approved -> durable`
- ✅ Explicit "what this does not authorize" copy
- ✅ "What the kit should not copy from this repo" (12-item list,
  L418-432)
- ✅ Recommended kit placement (L434-438)

**Soft observation 2:** Sami's audit focus 11 last bullet was:
*"guidance that adopters should decide whether memory is enabled or
disabled before running Outcome Circles"* — this is NOT explicitly
present in §9. The closest coverage is L412 "memory / skill /
automation caveats in adopter-facing language" but that's generic
caveats, not a specific "decide enable/disable before running"
prompt.

Recommend the future kit implementation packet add a one-sentence
adopter prompt like: *"Before running an Outcome Circle, decide
whether per-project memory (Cowork / Codex memory / Claude Code
memory) should be enabled. If enabled, treat memory as evidence per
the boundary."*

Not blocking — the discipline is implicit in the boundary, just not
adopter-facing prompted.

### 12. What not to implement yet — PASS

§10 enumerates 25 explicit deferrals (L443-467), exceeding Sami's
13-item minimum:

All 13 Sami-requested items present:
- ✅ actual skills
- ✅ actual memory files
- ✅ actual automations
- ✅ actual scheduled tasks
- ✅ protocol edits
- ✅ dashboard edits
- ✅ trust-layer implementation
- ✅ public-release work
- ✅ whitepaper publication
- ✅ runtime / wakeup / notifier / auto-handoff
- ✅ hosted memory integration
- ✅ public-proof runs
- ✅ clean public repo/branch creation (covered by "public-release
  work" + new-OC deferral)

Plus 12 bonus deferrals: subagents, operating-model edits, strategy
edits, kit edits, Claude Code auto-memory configuration changes,
Claude app/project memory changes, Codex/OpenAI memory changes,
Chronicle/session-history integrations, recurring checks, etc.

Closing discipline (L469-470): *"This note should be preserved and
audited before implementation. It should not be treated as
implementation authorization."* ✓

### 13. Failure modes — PASS (with 1 soft observation)

§11 enumerates 12 failure modes (L474-487), covering all 11 Sami-
requested items + 1 bonus:

- ✅ pattern becomes durable behavior without approval
- ✅ memory silently changes thresholds
- ✅ skill invocation becomes invisible
- ✅ automation acts outside approved scope
- ✅ repeated human notes become unapproved rubric drift
- ✅ agent writes "not adapting" while adapting
- ✅ agents behave correctly during audits but drift elsewhere
  (excellent failure mode — "Boundary exists only in high-scrutiny
  turns" with mitigation "Put the short boundary and breadcrumb in
  kit examples and normal turn notes")
- ✅ durable behavior becomes hard to delete
- ✅ adopters mistake templates for enforcement (sharp clause: "Label
  templates as governance aids, not enforcement machinery.")
- ✅ model-generated "learning" becomes hidden authority — covered
  implicitly by "Memory silently changes thresholds" + "Pattern
  becomes durable behavior without approval"

**Soft observation 3:** Sami's audit focus 13 final bullet was:
*"new durable behavior gets created because a viral prompt says to
create it"* — this is the social/cultural failure mode that Greg
Brockman's prompt going viral pre-staged in our pre-build chat. It is
NOT explicitly enumerated in §11's failure-modes table.

The discipline IS covered by the broader rule that observed pattern
≠ approval, and by the proposal template requiring evidence/risk/
reversibility — but the specific "viral prompt as social pressure to
adopt durable behavior" vector isn't named. Worth adding to the
table as a 13th row: *"Viral or trending prompt creates social
pressure to package work. Mitigation: same proposal/audit/approval
gate as any other observed pattern; popularity is not evidence of
fit."*

Bonus failure modes from Codex:
- Proposal template becomes ceremony
- Dashboard default implies approval
- Kit template bakes in local dogfood behavior

These are useful additions that go beyond Sami's minimum.

### 14. Sequencing / next-step judgment — PASS

§12 Final Recommendation answers Sami's questions:

- ✅ Should this be codified before kit implementation? **Yes.**
  *"At minimum, preserve and audit this scope-lock before E6-KIT-001
  implementation."*
- ✅ Should it be short kit section or whitepaper section? **Short
  kit section now + small proposal template; full whitepaper later
  after fresh public proof runs.**
- ✅ Should it modify PROTOCOL.md now or wait for E6-KIT-001?
  **Wait. Design-only; should not modify PROTOCOL.md now. Implementation
  packet decides kit-first vs later protocol promotion. Lean: kit-
  facing inclusion first.**
- ⚠ Should it be preserved together with the name-scrub artifacts? —
  Codex doesn't explicitly answer this (it's the question the auditor
  is asked to recommend on, since Codex's stack is now interleaved).
  See PR-shape recommendation below.
- ✅ Should E6-KIT-001 wait until both scope-locks are preserved?
  **Yes** (L494).
- ✅ What remains a human/GPT decision? 10 explicit open decisions
  enumerated (L529-541).

### 15. Overclaim / underclaim — PASS

Codex's scope lock does NOT claim:
- ✅ durable behavior is technically enforced (explicit L484:
  *"Label templates as governance aids, not enforcement machinery."*)
- ✅ memory cannot drift (multiple anti-drift rules)
- ✅ skills are safe by default (L373-378 multiple approval gates)
- ✅ automations are safe by default (L386-392 multiple approval
  gates)
- ✅ public-alpha is approved (explicit defer)
- ✅ trust-layer is implemented (explicit defer)
- ✅ kit implementation has started (explicit defer)
- ✅ protocol has already been changed (explicit defer + "wait" in
  §12)
- ✅ agent memory is governed by file docs alone (memory governance
  is a rule, not a technical guarantee)
- ✅ this solves AI alignment or adversarial smarter-agent behavior
  (no such claim made; consistent with STRATEGY.md §5 honest-
  limitation framing)

Codex doesn't overclaim about itself either: explicit "This turn is
design-only and should not modify PROTOCOL.md." ✓

## Blockers (must-fix before continuing)

None.

## Nits (suggested, not required)

None.

## Soft observations (not nits, for kit-implementation packet)

### Soft observation 1 — Hosted/Cowork memory in §7 surfaces list

§7 memory-surfaces list at L333-339 enumerates 5 surfaces (Claude
Code auto memory / Claude app/project memory / OpenAI/Codex memory /
Chronicle / repo-visible turn notes) but doesn't explicitly include
"hosted/Cowork-style memory" as a 6th surface. The discipline IS
covered in §2 type table (L177-178) and §10 deferrals (L446-447), so
this is a minor structural inconsistency rather than a substantive
gap. Future kit implementation packet should either (a) add hosted/
Cowork memory as a 6th surface item in §7, or (b) cross-reference §2
from §7 explicitly.

### Soft observation 2 — Adopter memory-enable/disable prompt missing

Sami's audit focus 11 last bullet was: *"guidance that adopters
should decide whether memory is enabled or disabled before running
Outcome Circles"* — this specific adopter-facing decision prompt is
NOT explicitly in §9 kit implications. The discipline is implicit but
not surfaced. Recommend the kit-implementation packet add a one-
sentence adopter prompt under "memory caveats" along the lines of:
*"Before running an Outcome Circle, decide whether per-project
memory (Cowork / Codex memory / Claude Code memory) should be
enabled. If enabled, treat memory as evidence per the boundary."*

### Soft observation 3 — Viral-prompt failure mode not explicitly named

Sami's audit focus 13 final bullet was: *"new durable behavior gets
created because a viral prompt says to create it"* — this is the
social/cultural failure mode that the Greg Brockman viral-prompt
discussion pre-staged. §11 failure modes table covers the governance
mechanism but doesn't explicitly name the "viral prompt as social
pressure" vector. Recommend adding a 13th row to the failure modes
table:

| Failure Mode | Risk | Mitigation |
| --- | --- | --- |
| Viral or trending prompt creates social pressure to package work as durable behavior | Cultural pressure substitutes for evidence; "everyone is doing this" becomes adoption justification | Same proposal/audit/approval gate as any other observed pattern; popularity is not evidence of fit; require packet-shaped Durable Behavior Proposal regardless of source |

The discipline IS implicit in the broader rule (observed pattern ≠
approval), but naming it explicitly closes a known social-influence
attack surface. Especially relevant given the originating context
was literally a viral OpenAI co-founder tweet.

## Other observations (not nits, for awareness)

1. **Meta-discipline: Codex applies the invocation breadcrumb to
   itself (L293-303).** This is the right pattern — the scope-lock
   practices the format it recommends. I've mirrored this in my own
   audit turn note at the top, for the same reason.

2. **Length: 614 lines / 25472 bytes.** Comparable to prior scope
   locks (E6-NAME-SCRUB-SCOPE-001 at 479 lines, E6-KIT-SCOPE-001 at
   559 lines). Appropriate length for a 12-section meta-governance
   scope lock.

3. **Cross-reference to prior session pre-build chat:** Codex's §6
   sycophantic-adaptation framing extends the E6-DOCS-ALIGN-001
   discipline (which already prohibited threshold adaptation based on
   past notes). The Durable Behavior Boundary is correctly framed as
   an extension of the existing reflection-safety + sycophantic-
   adaptation rules to a broader class of artifacts (skills, memory,
   automations) — not a brand-new rule. Matches the framing I
   suggested in the pre-build convergence chat: *"This extends an
   existing rule, not a new one."* ✓

4. **The scope-lock pre-stages a future audit rubric in §12 L513-528
   ("What should Claude audit next?")** with 10 specific checks
   directly usable as the auditor's rubric. I've grouped these into
   the 15 audit foci above; all 10 of Codex's pre-staged checks pass.

5. **No claims of public adoption / external installability / scale
   proof / etc.** are made. Substantively honest about the boundary
   being design-only proposal-ware.

## Open Questions For The Other Agent

None for Codex this turn. The audit accepts E6-DURABLE-SCOPE-001 as
PASS.

The substantive open question is Sami's (the preservation-PR shape
decision, framed below in §"PR-Shape Recommendation").

## Browser Verification

- Tool used: N/A
- Reason: design-only scope-lock audit; no HTML or runtime touched.
  DASHBOARD files unchanged from PR #15 merge.

## Evidence Basis

- USER SAID: 15-focus E6-DURABLE-SCOPE-001 audit request covering
  scope discipline, pre-existing dirty-stack handling, boundary
  definition, durable behavior types, promotion path, proposal
  template, creation vs invocation, sycophantic adaptation, memory
  governance, skills/automations, kit implications, what-not-to-
  implement-yet, failure modes, sequencing, overclaim/underclaim.
- FILE VERIFIED: scope-lock turn note (614 lines, 12 substantive
  sections); git status (1 modified + 3 untracked including this turn
  note); git diff --check exit 0; HEAD `0aafdfc` (PR #18 merge);
  per-path no-touch diff exit 0 for README/AGENTS/CLAUDE / kit /
  PROTOCOL/OPERATING-MODEL/STRATEGY / DASHBOARD / `.gitignore` / docs /
  mockups / alert-state.sh; advisor-notes / reflections / improvements
  / `.mcp.json` / `.design-concepts` absent; no `* 2.md` duplicates;
  no E6-OC-006+; `.claude/worktrees/` is gitignored pre-existing
  infrastructure, not Codex-created skill/automation; stash@{0}
  preserved; pre-existing name-scrub stack present and untouched per
  Codex's explicit disclosure.
- AGENT SUMMARY: Codex's scope lock self-reports clean entry, entry
  mismatch disclosure, sources read, scope boundary, 12 substantive
  sections, verification commands and results, hard stop. Verified
  independently above.
- INFERENCE: 3 soft observations on hosted/Cowork-memory surface
  list, adopter memory-enable/disable prompt, viral-prompt failure
  mode. PR-shape recommendation (Option A combined). Kit-OC-waiting
  recommendation (yes).
- UNKNOWN: none material to this audit.

## Portability Findings

- Repo-local assumptions: scope lock uses portable role vocabulary
  (Coordinator / Builder / Auditor / human approver) consistently.
  Model names appear only in §7 memory-surfaces list (correct usage
  — naming surfaces that exist today, not claiming they're required).
  No reusable Sami-name vocabulary introduced.
- Machine/local-tool assumptions: scope lock references `git stash
  list` for stash verification; matches existing verification
  patterns.
- Browser/connector assumptions: none.
- Any workaround used: none.

## PR-Shape Recommendation (For Sami)

This is the substantive question Codex couldn't answer (because the
stacks are interleaved, the shape decision is the auditor's call):
how to preserve E6-DURABLE-SCOPE-001 given E6-NAME-SCRUB-SCOPE-001
artifacts are also still dirty.

### Current dirty state

- M `.agent-handoff/COLLAB.md` (now interleaved: name-scrub audit
  handoff + this durable audit handoff layered above)
- ?? `.agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-codex-public-name-inventory.md`
- ?? `.agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-claude-audit-public-name-inventory.md`
- ?? `.agent-handoff/turns/E6-DURABLE-SCOPE-001-codex-durable-behavior-promotion-boundary.md`
- ?? `.agent-handoff/turns/E6-DURABLE-SCOPE-001-claude-audit-durable-behavior-promotion-boundary.md`
  (this audit)

= 5 files total (1 modified + 4 untracked).

### Three options

**Option A (Claude's lean — combined preservation PR):**

- Branch: `e6-name-scrub-and-durable-behavior-scope-locks`
- Files (5): COLLAB.md + 2 name-scrub turn notes + 2 durable turn
  notes
- Commit: `E6-NAME-SCRUB-SCOPE-001 + E6-DURABLE-SCOPE-001: preserve scope locks`
- PR title: `E6-NAME-SCRUB-SCOPE-001 + E6-DURABLE-SCOPE-001: preserve scope locks`

Pros:
- COLLAB.md is now interleaved — splitting would require either hand-
  editing COLLAB.md to extract just the name-scrub layer (the kind of
  history-rewriting the protocol explicitly prohibits per the OC-005
  preservation-PR stop-condition pattern), or shipping both scope-
  locks together
- Both are pre-build convergence design-only artifacts — same scope
  class, same target lane (before kit implementation)
- Tells a cleaner story: "two parallel scope-locks landed before kit
  implementation"
- Avoids the OC-005-style preservation stop-condition that we hit
  before

Cons:
- Slightly larger PR scope (~5 files vs ~3 typical)
- Reviewers parse two scope-locks in one PR

**Option B (name-scrub-only PR without COLLAB, then durable PR):**

- B1: name-scrub turn notes only (NO COLLAB.md edit)
- B2: durable turn notes + COLLAB.md (current state)

Pros:
- Each PR keeps its scope crisp

Cons:
- B1 lands without a COLLAB.md handoff record, which violates the
  established "every preservation PR includes COLLAB handoff" pattern
- COLLAB.md would be in an inconsistent state between B1 merge and
  B2 merge (showing durable-audit handoff while name-scrub
  preservation is on main but COLLAB doesn't reflect it)
- Re-introduces the OC-005 hand-edit-history-to-split problem

**Option C (other):**
- C1: stash this audit + COLLAB; split name-scrub PR; unstash and
  finish durable PR. This is the same kind of stash workaround that
  worked for the dashboard-design drift earlier, but it adds two extra
  stash cycles for marginal benefit.

### Claude's lean: Option A (combined)

**Reasoning:**

1. The interleaved COLLAB.md is the same situation we hit with OC-005
   preservation. The prior precedent was: "do not hand-edit COLLAB.md
   to force a split." That precedent applies here too.
2. Both scope-locks are pre-build convergence design-only artifacts
   in the same lane (before kit implementation). They're not unrelated
   work.
3. Codex's scope lock §12 explicitly recommends "preserve and audit
   this scope-lock before E6-KIT-001 implementation" — and the name-
   scrub inventory has the same gating effect on kit implementation
   (since the kit needs both name-scrub guidance AND durable-behavior
   guidance). Combining them keeps the gating-PR singular.
4. The combined PR body can clearly distinguish the two scope-locks
   in subsections, so reviewer scope is still legible.

### E6-KIT-001 should wait

E6-KIT-001 implementation **should wait** until this combined
preservation lands so the kit implementation can reference both
scope-locks on main as authoritative design references:
- E6-NAME-SCRUB-SCOPE-001: portability vocabulary + adopter success
  test + what-not-to-copy + replacement table
- E6-DURABLE-SCOPE-001: durable behavior boundary + proposal template
  + invocation breadcrumb + memory governance + skills/automations
  discipline

Per Codex's §12 final recommendation: *"At minimum, preserve and
audit this scope-lock before E6-KIT-001 implementation."*

### Remaining GPT/human decisions

After preservation merges, NEEDS_GPT framing for:
- Strategic option A/B/C from E6-NAME-SCRUB-SCOPE-001 audit (scrub
  current repo / clean public-proof repo / both)
- Kit implementation packet shape (max iterations, allowed files,
  no-touch list, stop conditions)
- Whether to fold the 3 soft observations from this audit into the
  kit implementation packet (hosted/Cowork memory in surfaces list;
  adopter memory-enable/disable prompt; viral-prompt failure mode)
- Dashboard-design stash disposition (unstash / defer / drop)
- Kit-implementation location (current repo vs new public-proof repo)

## Coordinator Trigger For Next Handoff

`NEEDS_GPT` per the bootstrap rule for public-facing strategic work.
The post-preservation decisions span 5 strategic forks (A/B/C scrub
strategy, kit-implementation packet, soft-observation folding,
dashboard-stash disposition, kit location).

Exact GPT paste question (after preservation PR merges):

```text
After combined preservation lands (E6-NAME-SCRUB-SCOPE-001 +
E6-DURABLE-SCOPE-001), the next strategic fork is the same multi-
decision space pre-staged in the E6-NAME-SCRUB audit, now expanded
by the Durable Behavior Boundary work.

State of paused work:
- E6-KIT-SCOPE-001 preserved (PR #18), kit implementation not started
- E6-NAME-SCRUB-SCOPE-001 + E6-DURABLE-SCOPE-001 preserved (this PR),
  no implementation started
- stash@{0}: dashboard-design concept work (concept-a-observatory.html
  + concept-b-operator.html + .gitignore .design-concepts/ line)
  still deferred outside any track stack
- Trust-layer design-only (E6-RETRO-001 / E6-README-001 candidate
  parallel track)
- Whitepaper outline (E6-README-001 candidate track)

E6-NAME-SCRUB-SCOPE-001 strategic options (verbatim from prior
audit):
A. Adopter-facing scrub OC in current repo (kit + dashboard +
   operating/strategy + protocol model-assignments + COLLAB current
   section + support docs). Does NOT scrub turn-note history.
B. Clean neutral-org public-proof repo with copied-forward role-
   neutral artifacts and fresh public-proof circles.
C. Both: do A first to make the source repo more publishable, then
   B to launch from a clean repo.

E6-DURABLE-SCOPE-001 adds new kit-implementation requirements:
- Durable Behavior Boundary section (short)
- Durable Behavior Proposal template
- Invocation breadcrumb in turn-note examples
- Memory/skill/automation caveats
- "Observed pattern is not approval" copy

Open packet-shape questions:

1. Which strategic option (A/B/C)?
2. How should the kit implementation packet integrate both scope-
   locks? Suggested: single kit-implementation OC with both name-
   scrub portability sweep AND durable-behavior boundary insertion
   as MVP deliverables. Max iterations 2.
3. Should the 3 soft observations from the durable-behavior audit
   fold into the kit packet?
   - Hosted/Cowork memory in §7 memory surfaces list (small fix)
   - Adopter memory-enable/disable prompt (one sentence)
   - Viral-prompt failure mode as 13th row in failure-modes table
4. Dashboard-design stash: unstash + address in parallel, defer
   until kit lands, or drop?
5. Kit implementation location: current repo first (cheap
   iterations) or directly in new public repo (proves portability
   from first commit)?

Claude's lean (unchanged from E6-NAME-SCRUB audit):
- Option C (do A first, then B)
- Single combined kit-implementation OC including both scope-locks
- Fold all 3 soft observations
- Defer dashboard stash until kit lands
- Kit in current repo first for iteration speed
```

## Handoff

- Next agent: Sami (then GPT-5.5 Pro for next-track framing after
  combined preservation PR merges)
- Specific ask:
  1. Read this audit; confirm PASS or request revision.
  2. Authorize the combined preservation PR (recommended shape:
     Option A above with 5 files).
  3. After preservation merges, paste the GPT framing question
     above (or refined) to GPT-5.5 Pro for next-track packet
     synthesis.
  4. After GPT synthesis, authorize the next track with explicit
     scope (A/B/C scrub + kit-implementation packet + soft-
     observation folding + dashboard-stash decision + kit-
     implementation location).

Hard stop after audit. No staging, commit, push, branch, PR, merge,
kit implementation, name-scrub implementation, memory/skill/
automation creation, dashboard work, public release, trust
implementation, public-proof run, clean repo/branch creation, stash
pop/drop, new Outcome Circle, OPERATING-MODEL.md / STRATEGY.md /
PROTOCOL.md / kit / mockups / docs / runtime edits, COLLAB
archival, pilot repo touch, or live Open Mic Colorado touch is
authorized by this audit.
