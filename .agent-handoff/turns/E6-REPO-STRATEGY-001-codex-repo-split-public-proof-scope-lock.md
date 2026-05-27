# E6-REPO-STRATEGY-001 - Codex repo split and public-proof strategy scope lock

## Clean Entry Evidence

Recorded before any E6-REPO-STRATEGY-001 file write:

```text
$ git rev-parse HEAD
51865946edf8e4701b6ad68c97c0155f8db2ef1a

$ git status --short --branch --untracked-files=all
## main...origin/main

$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

Entry conclusion: clean `main` at PR #22 merge line
`51865946edf8e4701b6ad68c97c0155f8db2ef1a`. E6-KIT-001-FIX-001 and the
repo-strategy consultation scribe are preserved on main. Dashboard-design
stash is present and was not popped, dropped, inspected, or restored.

## Coordinator Trigger

- State: ROUTINE for this turn.
- Reason: the configured human approver explicitly authorized this
  design-only scope-lock turn after GPT/Codex/Claude convergence was already
  scribed; the turn applies that evidence to a repo-visible strategy
  recommendation and does not require a fresh Coordinator call.

## Project Mode (estimated)

- Dominant mode: Coordinator / strategy scope lock.
- Estimate: Coordinator 85%, human-decision-pending 15%.
- Browser QA: N/A. This is docs-only strategy analysis; no UI or runtime
  surface changed.
- Automation budget: N/A. No polling, cron, webhook, heartbeat, scheduled
  check, notifier, automation, subagent, memory, or skill artifact was created.

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: claude-codex-outcome-circle (consulted existing Codex skill
  instructions; no skill created or modified)
- subagents: none
- automations: none
- memory files consulted: /Users/samiserrag/.codex/memories/MEMORY.md
  quick pass only; memory is context, not authority
- standing rules invoked: AGENTS.md, CLAUDE.md, PROTOCOL.md, COLLAB.md,
  current E6-REPO-STRATEGY-001 authorization, no-touch list, Durable Behavior
  Promotion Boundary, no-stage/no-commit/no-branch/no-PR rules
```

## Scope Boundary

This is a local design-only scope lock. It does not start implementation.

Explicitly not authorized:

- kit edits
- root README / AGENTS / CLAUDE edits
- live PROTOCOL / OPERATING-MODEL / STRATEGY edits
- live DASHBOARD.md or DASHBOARD.html edits
- dashboard-design work
- stash pop/drop/inspect
- dry-run
- clean repo creation
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
- `.agent-handoff/turns/E6-REPO-STRATEGY-CONSULTATION-001-gpt-codex-claude-convergence.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-codex-kit-portability-cleanup-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-FIX-001-claude-audit-kit-portability-cleanup-iter-1.md`
- `.agent-handoff/turns/E6-KIT-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-KIT-001-claude-audit-kit-implementation-iter-1.md`
- `.agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-codex-public-name-inventory.md`
- `.agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-claude-audit-public-name-inventory.md`
- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-codex-durable-behavior-promotion-boundary.md`
- `.agent-handoff/turns/E6-DURABLE-SCOPE-001-claude-audit-durable-behavior-promotion-boundary.md`
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `docs/test-project.md`
- `kit/v1/README.md`
- `kit/v1/**` inventory via `rg --files --hidden kit/v1`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/COLLAB.md`
- `git log --oneline -5`
- `git remote -v`

## 1. Repo Role Classification

### Should `claude-codex` be treated as dogfood/source repo?

Yes. `claude-codex` should be classified as the dogfood/source repo.

Rationale:

- Its historical value is the messy, repo-visible proof that the method was
  developed under real approval-boundary pressure.
- It contains the live protocol instance, current dashboard snapshot,
  operating model, strategy docs, COLLAB rollups, turn-note history, PR
  metadata, branch metadata, and account metadata.
- Those surfaces make it a strong source-of-truth and case-study repo, but a
  weak first-touch adopter repo.

### Should a separate adopter-facing repo exist?

Yes, later. The adopter-facing repo should be clean, role-neutral, and based on
the stable kit surface after a scratch dry-run validates extractability. It
should not be created in this scope-lock turn.

### Should fresh public-proof runs happen in a clean repo?

Yes. Fresh public-proof runs should happen in the clean adopter-facing repo, not
inside `claude-codex`. Public proof should be role-neutral from the first
turn, with no historical dogfood cleanup masquerading as clean proof.

### What should happen to current historical dogfood evidence?

Keep it intact in `claude-codex`. Do not silently rewrite or sanitize old turn
notes, COLLAB history, PR metadata, dashboard history, or local assignment
records. The dogfood trail should be described as historical source evidence,
not as adopter-required protocol surface.

### What should happen to GitHub metadata that cannot be scrubbed by file edits?

Treat it as source-repo metadata. Do not imply file edits can anonymize it.
If a public surface needs clean identity, use a new clean repo / neutral org
strategy rather than rewriting dogfood history.

## 2. Strategy Options

| Option | Pros | Cons / cost | Credibility impact | First-impression impact | Laundering-history risk | Dogfood/protocol confusion risk |
| --- | --- | --- | --- | --- | --- | --- |
| A. Fresh public-proof repo now | Cleanest public first touch; avoids dogfood metadata at the proof layer. | Too early; copies kit before scratch dry-run validates usability; risks fossilizing defects. | Strong clean-proof credibility if done later; weaker now because extractability is unproven. | Best for adopters once ready. | Low if old dogfood remains linked and labeled; high if presented as the whole history. | Low in the new repo; medium if relation to dogfood repo is unclear. |
| B. Two-repo split | Preserves dogfood/source evidence while giving adopters a clean repo; best long-term architecture. | Requires export discipline, synchronization convention, and clear cross-linking. | Strongest combined credibility: messy source plus clean proof. | Strong; adopter sees the right surface first. | Low if source repo remains intact. | Low if docs clearly say source repo is not the required protocol shape. |
| C. Continue here with stronger framing | Lowest cost; no split overhead; preserves continuity. | Banner cannot overcome turn-note volume, live dashboard state, PR/account metadata, and dogfood docs. | Keeps dogfood credibility but weakens adopter confidence. | Poor to mixed; reader sees dogfood before kit. | Low if no rewriting occurs. | High; adopters may mistake working history for required process. |
| D. Stop dogfood OCs here | Limits future pollution growth. | Gives up the living lab that proves the protocol under real pressure. | Weakens future source credibility. | Slight improvement but current pollution remains. | Low. | Medium; existing volume remains and no clean alternative appears. |
| E. Dry-run first, then decide | Adds evidence before committing to repo split details. | Needs a target location and success criteria; cannot by itself solve first-impression risk. | Strong if framed as extractability test. | Does not improve first impression until a clean repo exists. | Low if dogfood history remains labeled. | Medium until split happens. |
| Synthesized B/E with repo-strategy before dry-run | Decides repo roles first, then validates kit in a scratch repo, then extracts clean adopter repo only after evidence. | Requires at least two more scoped turns and later preservation. | Strong: source evidence plus tested clean path. | Strong after extraction; honest before extraction. | Low. | Lowest practical risk after clean repo exists. |

Recommendation from this comparison: choose the synthesized B/E path, with
repo strategy first, scratch dry-run second, clean adopter repo third, and fresh
public-proof circles fourth.

## 3. Recommended Path

Single recommended path:

```text
1. Preserve this E6-REPO-STRATEGY-001 scope lock after Claude audit.
2. Run E6-KIT-DRY-RUN-001 in a disposable scratch repo.
3. Use dry-run findings to revise kit or confirm extraction readiness.
4. Create a clean adopter-facing repo only after dry-run validation.
5. Run fresh role-neutral public-proof circles in the clean adopter-facing repo.
6. Only after that, consider public-alpha / top-of-funnel work.
```

Rationale:

- It accepts the convergence that `claude-codex` is source/dogfood, not the
  adopter repo.
- It avoids creating a clean repo before the kit is tested by a
  stranger-like workflow.
- It keeps historical dogfood credible by preserving it intact.
- It gives adopters a future surface that is not dominated by local history.
- It keeps skills and automations behind explicit Durable Behavior approval.

What this does not authorize: the dry-run, clean repo, public proof, public
release, skill creation, or any branch/PR action.

## 4. Dry-Run Placement

### Should E6-KIT-DRY-RUN-001 run inside `claude-codex`?

No. Running the dry-run inside `claude-codex` would test the polluted source
environment, not the adopter experience. It would also add more dogfood volume
to the surface being evaluated.

### Should it run in a scratch repo?

Yes. The dry-run should mutate only a disposable scratch repo. The scratch repo
should be local/private unless separately authorized otherwise.

### Should it run in a future adopter-facing repo?

No. The future adopter-facing repo should be created after the dry-run, not used
as the test bed before the kit shape is validated.

### Should it run before or after repo split?

After this repo-strategy scope lock, before clean adopter-repo creation. This
means the strategic choice is made first, but the final clean repo is delayed
until evidence exists.

### Exact dry-run goal

Prove that an agent can copy `kit/v1/**` into a disposable repo, fill
placeholders, create a minimal Outcome Packet, run one manual builder/auditor
loop, record a Human Decision Record example when needed, preserve approval
boundaries, and avoid importing dogfood/source artifacts.

### Dry-run success criteria

- Scratch repo starts from a minimal empty or toy project state.
- Only approved kit files are copied.
- Placeholders are filled or explicitly marked `N/A`.
- The adopter repo can run one minimal Outcome Circle manually.
- Builder and auditor turn notes are understandable without `claude-codex`
  historical context.
- `satisfied`, auditor pass, and model consensus remain separate from human
  approval.
- Dashboard remains optional.
- No personal names, permanent model-role labels, local dogfood IDs, GitHub
  owner references, local paths, or public-launch claims leak into the scratch
  repo.
- The dry-run produces a concrete defects list: kit text that confused the
  adopter, missing instructions, over-heavy sections, or hidden assumptions.

### Dry-run failure criteria

- The adopter cannot identify what to copy.
- Hidden `.agent-handoff` kit files are missed.
- The copied kit requires source-repo history to make sense.
- Placeholders are unclear or incomplete.
- The dry-run imports dogfood turn notes, live dashboard state, local strategy
  docs, or GitHub metadata by accident.
- The scratch repo treats dashboard adoption as required.
- The process creates or relies on unapproved skills, memory, automations,
  subagents, scheduled checks, MCP/plugin/global config, or trust-layer files.
- The dry-run makes public-proof, launch, legal/compliance, trust-layer, or
  adoption claims.

### What must not happen during dry-run

- No mutation to `claude-codex` except a later scoped report note if approved.
- No public repo creation.
- No public-proof circle.
- No public-alpha packaging.
- No methodology skill creation.
- No trust-layer implementation.
- No dashboard redesign.
- No external publication.
- No claim that a scratch dry-run is public proof.

## 5. Public-Proof Plan

Fresh public-proof circles should happen only in the clean adopter-facing repo,
after scratch dry-run validation and after explicit authorization.

Each public-proof circle must never include:

- personal names
- permanent model-role labels
- launch claims
- trust-layer claims
- legal/compliance claims
- old dogfood history disguised as clean proof

Recommended minimal set:

| Circle | Purpose | Proof value | Likely artifacts | Real or seeded/synthetic |
| --- | --- | --- | --- | --- |
| Objective / mechanical circle | Run a small deterministic file or doc update with exact pass/fail checks. | Shows the protocol handles simple scoped execution without approval laundering. | Outcome Packet, builder note, auditor note, Human Decision Record if preserving. | Real, low-risk scratch task. |
| Judgment-based circle | Evaluate wording, UX copy, or architecture tradeoff with explicit divergent opinions. | Shows auditor critique and coordinator/human boundaries under subjective judgment. | Outcome Packet, builder analysis, auditor critique, decision packet. | Real but low-stakes. |
| `needs_revision` circle | Seed a builder defect and require auditor to return work for revision. | Shows the system does not rubber-stamp and can recover inside scope. | Builder note with defect, auditor `needs_revision`, iteration-2 correction, final audit. | Seeded/synthetic defect is acceptable if disclosed. |
| `blocker` or `scope_conflict` drill | Create a case where the requested action would violate no-touch or require new approval. | Shows stop conditions work and agents refuse scope expansion. | Outcome Packet, blocker/scope-conflict audit, human decision prompt. | Seeded/synthetic is preferable for safety. |
| Human Decision Note example | Record exact approval/rejection/ask/pause with rationale and not-authorized block. | Shows human decision notes are descriptive, not approval laundering or hidden rubric drift. | Human Decision Record, turn note reference, optional dashboard copy. | Synthetic example is acceptable if clearly marked. |

Fresh proof should be created cleanly. Do not sanitize old dogfood and present it
as if it began role-neutral.

## 6. Skills Placement

### Kit-included skills

Potentially useful later, but not now. Adopter-facing skills should wait until:

- the repo strategy is accepted,
- the scratch dry-run identifies repeated pain that a skill would actually
  reduce,
- a Durable Behavior Proposal specifies artifact, path, scope, invocation
  breadcrumb, risk, and deletion path,
- the configured human approver explicitly approves creation.

If created later, adopter-facing skills should live in the clean adopter-facing
repo or its kit path, not in the polluted dogfood layer.

### Dogfood-only repo skills

Possible later, but they must be explicitly labeled dogfood, must not be
described as adopter requirements, and must be declared in invocation
breadcrumbs when used. Dogfood-only skills should not silently alter audit
thresholds, approval thresholds, or rubric strictness.

### Global skills

Avoid for this methodology. Global `~/.claude/skills/`, global Codex skills,
or equivalent global durable behavior creates hidden dependency risk and makes
public proof harder to interpret. If a global skill is already used, it must be
declared in the turn breadcrumb, and public-proof runs should avoid relying on
hidden global skills unless their contents are explicitly part of the public
proof surface.

### No skills yet

Recommended now. Observed repeated workflows remain observed patterns, not
durable behavior. Skill proposal is not approval. Automation proposal is not
approval. Memory is context, not authority. Only the human approver can
authorize durable behavior.

### Codex-side existing skill breadcrumb

E6-KIT-001-FIX-001 surfaced a Codex-side
`claude-codex-outcome-circle` skill. That does not change the repo strategy:
`claude-codex` still remains the dogfood/source repo. It does change the
evidence requirement for future turns:

- existing skill use must be declared in the invocation breadcrumb;
- auditors may treat hidden skill contents as an opacity risk when the work is
  broad or judgment-heavy;
- public-proof runs should avoid undisclosed or non-repo-visible skills;
- adopter-facing skills should wait for the clean adopter repo and explicit
  Durable Behavior approval.

## 7. First-Impression Risk

Before reading `kit/v1/README.md` "What Not To Copy", a GitHub visitor sees:

- repo/account identity: `git@github.com:samiserrag/Claude-Codex.git`;
- root README that honestly says this is a dogfood harness;
- root `AGENTS.md` and `CLAUDE.md` with local dogfood instructions;
- `.agent-handoff/` as the largest visible system surface;
- dozens of turn notes and COLLAB history;
- current dashboard files with stale source-repo snapshot behavior;
- live PROTOCOL.md with local dogfood assignments in source form;
- OPERATING-MODEL.md and STRATEGY.md with roadmap and current local roles;
- GitHub PR history, branch names, author metadata, merge metadata, and
  historical activity.

This creates a category-error risk: the adopter may conclude that the protocol
requires all dogfood history, this dashboard state, these model assignments,
and this account metadata.

A banner is useful but insufficient. It should exist in this source repo, but
serious public adoption requires a separate clean adopter-facing repo. A banner
can orient; it cannot erase volume, metadata, or first-touch confusion.

## 8. Metadata Reality

File edits cannot remove or reliably anonymize:

- owner account;
- repo URL;
- PR metadata;
- commit metadata;
- branch names;
- historical GitHub activity;
- historical merge commit subjects;
- historical author/committer fields;
- local paths already committed in dogfood notes, if any;
- external screenshots, search-engine caches, forks, clones, or PR mirrors.

If "no personal/local identity on the public proof surface" is required, the
answer is clean repo / neutral org / new history, not more file edits inside
`claude-codex`.

## 9. Dogfood Credibility vs Clean Proof

### What credibility does the dogfood/source repo provide?

It proves the method was developed and stress-tested in a real working loop,
with real handoffs, mistakes, stop conditions, audits, reversals, scope locks,
and preservation PRs. It gives the project historical credibility because it
does not pretend the process was clean from the beginning.

### What credibility does a clean adopter repo provide?

It proves extractability and adopter comprehension. It shows the method can be
used without local names, old turn-note volume, stale dashboards, source
strategy docs, or hidden dogfood assumptions.

### Why not launder old dogfood history?

Laundering old history would weaken both stories. It would make source evidence
less trustworthy and still would not remove GitHub metadata. The honest split
is stronger: dogfood repo as source evidence; clean repo as fresh public proof.

### How should public materials describe the relationship?

Use a simple two-surface explanation:

```text
claude-codex is the source/dogfood lab that produced the method and preserves
the messy audit trail.

The adopter-facing repo is the clean extraction for trying the protocol without
source-repo baggage.

Public-proof runs are fresh role-neutral runs in the clean repo, not sanitized
copies of old dogfood history.
```

## 10. Exact Next Track

Next substantive track after this scope lock is audited and preserved:

```text
E6-KIT-DRY-RUN-001
```

It should be an Outcome Circle because it will mutate a disposable scratch repo
and should have exact:

- scratch path,
- allowed writes,
- no-touch surfaces,
- pass/fail criteria,
- evidence requirements,
- cleanup/preservation rules,
- explicit "not public proof" and "not public release" boundaries.

Do not choose clean repo extraction yet. Do not choose public-proof repo setup
yet. Do not choose skills design-only yet. Do not choose trust-layer design-only
yet. Do not choose dashboard-stash disposition yet. Those are later tracks.

One nuance: before E6-KIT-DRY-RUN-001, this E6-REPO-STRATEGY-001 scope-lock
should receive Claude audit and should be preserved if the configured human
approver accepts it.

## 11. Preservation Recommendation

Yes. Preserve this scope-lock in a PR before any dry-run or repo work.

Reasons:

- It is the decision basis for scratch dry-run placement.
- It records why the clean repo is delayed until after dry-run validation.
- It records why `claude-codex` remains dogfood/source.
- It prevents future agents from re-litigating skills placement or banner-only
  mitigation from chat memory.
- It keeps repo strategy visible before any downstream scratch-repo mutation.

Preservation is not approved by this note. Auditor pass is not approval.
Model consensus is not approval. Human approval authorizes only exact named
consequences.

## Browser QA

- Tool used: N/A
- Reason: design-only scope-lock note; no UI, HTML, runtime, browser-rendered
  artifact, or dashboard file changed.

## Automation Budget

N/A. No polling, cron, webhook, heartbeat, scheduled check, notifier,
automation, subagent, skill, hosted memory integration, memory file, or runtime
work was created or required.

## Verification

Verification after the COLLAB handoff update:

```text
$ git status --short --branch --untracked-files=all
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-REPO-STRATEGY-001-codex-repo-split-public-proof-scope-lock.md

$ git diff --check
```

`git diff --check` printed no output.

```text
$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

Changed-file set:

```text
$ git diff --name-only
.agent-handoff/COLLAB.md

$ git ls-files --others --exclude-standard
.agent-handoff/turns/E6-REPO-STRATEGY-001-codex-repo-split-public-proof-scope-lock.md
```

Only allowed files changed:

- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-REPO-STRATEGY-001-codex-repo-split-public-proof-scope-lock.md`

No-touch verification:

```text
$ git diff -- kit/v1

$ git diff -- README.md AGENTS.md CLAUDE.md

$ git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md

$ git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html

$ git diff -- .gitignore

$ git diff -- docs .agent-handoff/mockups .agent-handoff/tools/alert-state.sh
```

All six no-touch diff commands printed no output.

```text
$ test ! -d .design-concepts && echo ".design-concepts absent"
.design-concepts absent

$ wc -c .agent-handoff/tools/alert-state.sh
    6519 .agent-handoff/tools/alert-state.sh

$ test ! -e .agent-handoff/advisor-notes && echo "advisor-notes absent"
advisor-notes absent

$ test ! -e .agent-handoff/reflections && echo "reflections absent"
reflections absent

$ test ! -e .agent-handoff/improvements && echo "improvements absent"
improvements absent

$ find . -maxdepth 2 -name '.mcp.json' -print

$ find . -maxdepth 3 \( -path './.git' -o -path './.claude/worktrees' \) -prune -o \( -name 'skills' -o -name 'subagents' -o -name 'automations' -o -name 'memory' \) -print

$ git diff --cached --name-only

$ git branch --show-current
main
```

`.mcp.json`, skill/subagent/automation/memory directories, and staged files
checks printed no output. Current branch remains `main`.

Tracked diff stat:

```text
$ git diff --stat
 .agent-handoff/COLLAB.md | 59 ++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 59 insertions(+)
```

The new scope-lock turn note is untracked until a later separately authorized
preservation action.

Confirmed no kit diff, root-doc diff, live protocol/operating/strategy diff,
live dashboard diff, `.gitignore` diff, docs diff, mockups diff, public-release
work, public-proof-run work, clean repo/branch creation, dry-run, trust-layer
work, dashboard work, skill creation, memory creation, automation creation,
subagent creation, scheduled-check creation, staging, commit, push, branch, PR,
merge, or new Outcome Circle.

## Handoff

Next actor: Claude Code, auditor.

Requested audit:

```text
[Lane 1: Claude-Codex Harness | Claude Code / Anthropic | Thread:
E6-REPO-STRATEGY-001 repo split and public-proof strategy scope-lock audit |
Role: auditor]

Audit E6-REPO-STRATEGY-001.

Inspect:
- .agent-handoff/turns/E6-REPO-STRATEGY-001-codex-repo-split-public-proof-scope-lock.md
- .agent-handoff/COLLAB.md
- .agent-handoff/turns/E6-REPO-STRATEGY-CONSULTATION-001-gpt-codex-claude-convergence.md
- relevant prior kit/name-scrub/durable-boundary evidence as needed

Grade against the approved E6-REPO-STRATEGY-001 scope-lock packet:
clean entry; only allowed files changed; no kit/root/protocol/strategy/
operating/dashboard/.gitignore/docs/mockups/trust/runtime/public-proof/
clean-repo/skills/memory/automation/subagent drift; stash preserved; no
duplicate * 2.md files; repo role classification; A-E strategy option
evaluation; single recommended path; dry-run placement and pass/fail
criteria; public-proof circle plan; skills placement with Durable Behavior
Boundary; first-impression risk; metadata reality; dogfood credibility vs
clean proof; exact next track; preservation recommendation.

Hard stop after audit. Auditor pass is not approval. satisfied is not
approval. Model consensus is not approval.
```
