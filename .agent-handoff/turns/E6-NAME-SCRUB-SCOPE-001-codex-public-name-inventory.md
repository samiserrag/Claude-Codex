# E6-NAME-SCRUB-SCOPE-001 - Codex public-name inventory

## Coordinator Trigger

- State: ROUTINE
- Reason: Sami explicitly authorized this read-only public-name scrub inventory
  and public-proof planning turn, with only this turn note and `COLLAB.md`
  allowed for edits.

## Project Mode Estimate

- Dominant mode: Coordinator / public-release inventory
- Reason: This turn classifies risk and recommends future strategy, but it does
  not start kit implementation, name-scrub implementation, public-proof runs,
  dashboard work, release work, trust work, or a new Outcome Circle.

## Scope

Approved files touched:

- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-codex-public-name-inventory.md`

Explicit no-touch preserved:

- root public docs
- `kit/v1/**`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- dashboard files
- mockups
- `.gitignore`
- `.design-concepts/`
- `docs/`
- `.agent-handoff/tools/alert-state.sh`
- trust-layer files
- runtime/product files
- pilot/live project repos
- automation/API/model/NanoClaw/CommonGround/MCP/Notion/plugin/global config

## Entry State

```text
$ git rev-parse HEAD
0aafdfcedf470bf492472c45e4dd8b2f282d5ab6

$ git status --short --branch --untracked-files=all
## main...origin/main

$ git log --oneline -5
0aafdfc Merge pull request #18 from samiserrag/e6-kit-scope-001-adopter-path-expansion-scope-lock
4fed96f E6-KIT-SCOPE-001: preserve kit adopter-path expansion scope lock
5b5cb3c Merge pull request #17 from samiserrag/e6-readme-001-root-readme-implementation
788a108 E6-README-001: preserve root README implementation
a1b2a1e Merge pull request #16 from samiserrag/e6-readme-scope-001-repo-strangerprintability-scope-lock
```

State conclusion:

- PR #18 is merged on `main` at
  `0aafdfcedf470bf492472c45e4dd8b2f282d5ab6`.
- E6-KIT-SCOPE-001 is preserved on `main`.
- Kit implementation has not started.
- Dashboard lane remains paused.
- Stash exists and was not popped:
  `stash@{0}: On main: defer dashboard design concepts gitignore workfolder`.

## Sources Read

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `README.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/STRATEGY.md`
- latest turn note:
  `.agent-handoff/turns/E6-KIT-SCOPE-001-codex-adopter-path-expansion-scope-lock.md`
- `AGENTS.md`
- `CLAUDE.md`
- `.agent-handoff/OPERATING-MODEL.md`
- repo-visible file list from `git ls-files --cached --others --exclude-standard`
- targeted `rg` searches for the approved terms
- read-only PR #18 metadata from GitHub:
  `https://github.com/samiserrag/Claude-Codex/pull/18`

Ignored/local worktree note: a raw filesystem search also saw ignored
`.claude/worktrees/**` copies. Those are excluded from repo-visible counts
because `.gitignore` ignores `.claude/worktrees/`.

## Search Method

Search terms:

```text
Sami
samiserrag
Sami Serrag
needs_sami
Decision needed from Sami
Ask Sami
Call Sami
when Sami
Why Sami
GPT-5.5 Pro
Claude Code
Codex
configured human approver
human approver
project maintainer
project lead
```

Repo-visible file count scanned: 198.

No repo-visible file matches found for:

- `Sami Serrag`
- `project maintainer`
- `project lead`

`Sami Serrag` does appear in Git metadata and PR metadata, not in tracked
file contents.

## Inventory Summary

Repo-visible counts by artifact class:

| Artifact class | Key counts | Classification |
| --- | ---: | --- |
| Root public docs | `Sami`: 0; `samiserrag`: 0; `GPT-5.5 Pro`: 0; `Codex`: 16; `Claude Code`: 2 | adopter-facing and should be scrubbed or explicitly labeled local dogfood before public release |
| `kit/v1/**` | `Sami`: 29 across 7 files; `GPT-5.5 Pro`: 5; `Claude Code`: 6; `Codex`: 45 | adopter-facing and should be scrubbed before kit implementation/public packaging |
| Dashboard live UI | `Sami`: 2; `GPT-5.5 Pro`: 2; `Claude Code`: 4; `Codex`: 6 | unsafe for public release without refresh/scrub; dashboard lane remains paused |
| Protocol/operating/strategy docs | `Sami`: 42; `GPT-5.5 Pro`: 9; `Claude Code`: 6; `Codex`: 43 | mixed: protocol should be role-neutral; operating/strategy contain local dogfood assignments |
| `COLLAB.md` | `Sami`: 332; `samiserrag`: 12; `Codex`: 331 | active handoff plus historical rollup; not a clean public proof artifact |
| Turn-note history | `Sami`: 1848; `samiserrag`: 63; `Codex`: 1837 | historical dogfood audit trail; do not silently rewrite |
| Mockups | `Sami`: 6; `GPT-5.5 Pro`: 3; `Claude Code`: 4; `Codex`: 4 | design artifacts; private/internal or scrub before public use |
| Consultants/digests | `Sami`: 79; `samiserrag`: 9; `Codex`: 157 | historical dogfood evidence; private/internal unless explicitly published as case study |
| Support docs | `Sami`: 2; `samiserrag`: 4; `Ask Sami`: 1 | public-support risk; scrub or exclude |
| Tools/helpers | `Sami`: 2; `Codex`: 2 | local dogfood helper; scrub or keep private |
| Trust/event files | `samiserrag`: 5; `Codex`: 6 | unsafe for public release; cannot scrub without trust/history strategy |

## Public-Surface Risk

Visible to a new GitHub visitor without digging through turn-note history:

- `README.md` is clean of `Sami`, `samiserrag`, and `GPT-5.5 Pro`, but the
  title and repo-map still expose the local `Claude-Codex` identity and
  tool-specific root docs.
- `AGENTS.md` and `CLAUDE.md` are clean of `Sami` and `GPT-5.5 Pro`, but they
  are model/tool-specific operational docs and should be treated as local
  dogfood instructions, not neutral adopter proof.
- `kit/v1/**` is the highest adopter-facing risk because it still tells
  adopters that approval/setup comes from `Sami`.
- `.agent-handoff/DASHBOARD.md` and `.agent-handoff/DASHBOARD.html` expose
  local assignments: human approver `Sami`, coordinator `GPT-5.5 Pro`,
  builder `Codex`, auditor `Claude Code`.
- `.agent-handoff/PROTOCOL.md` is mostly role-neutral for approval wording but
  still includes local model assignments in the GPT Coordinator section.
- `.agent-handoff/OPERATING-MODEL.md` and `.agent-handoff/STRATEGY.md` contain
  explicit local-person and local-model assignment prose.
- `docs/chrome-runners.md`, `docs/ubicloud-runners.md`,
  `.agent-handoff/prompts/**`, `.agent-handoff/tools/alert-state.sh`, and
  trust/event files contain support-level local identity references.

Conclusion: root README is relatively clean but not enough. Public release of
this repo as-is would expose local dogfood names through kit files, dashboard,
operating/strategy docs, support docs, trust/event artifacts, COLLAB, and the
historical trail.

## Kit Portability Risk

The prior E6-KIT-SCOPE-001 count still holds:

```text
29 `Sami` mentions across 7 non-PROTOCOL kit files.
```

File counts:

| File | `Sami` count | Recommendation |
| --- | ---: | --- |
| `kit/v1/README.md` | 3 | replace with `configured human approver` or `human approver` depending on sentence |
| `kit/v1/AGENTS.md.template` | 4 | replace reusable authority wording with `configured human approver` |
| `kit/v1/CLAUDE.md.template` | 4 | replace reusable authority wording with `configured human approver` |
| `kit/v1/.agent-handoff/COLLAB.md.template` | 3 | replace field labels with human-approver wording |
| `kit/v1/.agent-handoff/DASHBOARD.md.template` | 6 | replace dashboard labels with human-approver wording |
| `kit/v1/.agent-handoff/prompts/starter-turn-note.md` | 3 | replace agent/next-actor examples with role placeholders |
| `kit/v1/.agent-handoff/prompts/reflection-proposal-template.md` | 6 | replace decision/approval wording with human-approver wording |

Additional kit model-name risk:

- `kit/v1/.agent-handoff/PROTOCOL.md.template` has 0 `Sami` mentions but
  still has local dogfood assignments: `GPT-5.5 Pro`, `Codex`, and
  `Claude Code`.
- Kit implementation should either move these assignments out of the template
  or convert them to explicit placeholder/example language.
- This is a human decision because prior mirror discipline kept the live
  protocol and kit protocol template aligned.

## Historical-Trail Risk

Turn notes and COLLAB contain widespread local names because they are the
actual messy dogfood audit trail:

- `.agent-handoff/turns/**`: `Sami` 1848, `samiserrag` 63,
  `needs_sami` 25, `Decision needed from Sami` 13, `Why Sami` 12,
  `when Sami` 22, `Call Sami` 5, `Ask Sami` 1.
- `.agent-handoff/COLLAB.md`: `Sami` 332, `samiserrag` 12,
  `needs_sami` 5, `Decision needed from Sami` 1, `Why Sami` 2,
  `when Sami` 5, `Call Sami` 1.
- Consultants/digests: `Sami` 79, `samiserrag` 9.

Recommendation:

- Do not silently rewrite historical turn notes in this repo. That would
  damage provenance and make the dogfood record look laundered.
- Treat old turn notes, COLLAB rollups, digests, consultants, trust/event
  artifacts, and support docs as private/internal dogfood unless deliberately
  published as a labeled historical case study.
- If public proof is needed, create fresh role-neutral public proof artifacts
  rather than sanitizing the old trail in place.
- If a sanitized public-release repo is chosen, copy selected current artifacts
  forward after scrub; do not copy old turn-note history by default.

## Metadata Reality Check

Cannot be removed by normal file edits:

- Repository owner URL currently includes `samiserrag`:
  `git@github.com:samiserrag/Claude-Codex.git`.
- PR #18 metadata:
  - URL: `https://github.com/samiserrag/Claude-Codex/pull/18`
  - author login/name: `samiserrag` / `Sami Serrag`
  - merge commit: `0aafdfcedf470bf492472c45e4dd8b2f282d5ab6`
  - merged at: `2026-05-26T11:31:56Z`
- Branch/remote commit history on local branches/remotes has 128 commits:
  - 110 authored by `samiserrag <sami.serrag@gmail.com>`
  - 18 authored by `Sami Serrag <sami.serrag@gmail.com>`
  - 36 commit subjects include `Sami` or `samiserrag`.
- Merge commit subjects include pull request branches from
  `samiserrag/<branch-name>`.
- PR author metadata, historical GitHub activity, repository owner URLs, and
  commit author metadata require a separate account/org/history strategy.
- Historical turn notes and support docs include local paths such as
  `/Users/samiserrag/...`; file edits can remove copied path text from future
  artifacts but cannot change already-published commit history without
  history rewrite.

Stashed dashboard-design concept work:

- `stash@{0}: On main: defer dashboard design concepts gitignore workfolder`
  exists.
- It was not popped or inspected.
- `.design-concepts/` remains deferred and must not be touched in this turn.

## Replacement Vocabulary

Canonical replacements:

| Current wording | Preferred replacement |
| --- | --- |
| `Sami` in reusable approval rules | `the configured human approver` |
| `Sami` in generic explanatory copy | `the human approver` |
| `Sami` in project ownership/maintenance copy | `the project maintainer` or `the project lead`, if the role is not a per-turn approval role |
| `Sami approval` | `human approval` or `configured human approver approval` |
| `Decision needed from Sami` | `Decision needed from human approver` |
| `Why Sami is needed` | `Why the human approver is needed` |
| `Ask Sami` | `ask the human approver` |
| `Call Sami` | `call the human approver` |
| `when Sami approves` | `when the configured human approver approves` |
| `GPT-5.5 Pro` as a fixed role | `Coordinator` or `{{COORDINATOR_AGENT}}` |
| `Codex` as a fixed role | `Builder` or `{{BUILDER_AGENT}}` |
| `Claude Code` as a fixed role | `Auditor` or `{{AUDITOR_AGENT}}` |

Use `configured human approver` for authority and approval gates. Use
`project maintainer` or `project lead` only when the sentence is about repo
ownership, roadmap, taste, or ongoing maintenance rather than protocol approval.

## Artifact Classification

| Artifact class | Current classification | Future action |
| --- | --- | --- |
| Root README | Mostly adopter-facing; no direct person-name hits, but local repo identity remains | scrub or rename public identity before public release; keep `human approver` wording |
| Root `AGENTS.md` / `CLAUDE.md` | local dogfood instructions | keep private/internal or explicitly label as local tool instructions; do not present as neutral protocol proof |
| `kit/v1/**` | adopter-facing and should be scrubbed | highest priority scrub before kit implementation/public packaging |
| Live `PROTOCOL.md` | public/adopter-relevant protocol with local model examples | decide whether to preserve mirror with kit or move assignments to config/operating docs |
| `OPERATING-MODEL.md` / `STRATEGY.md` | internal dogfood/current-state strategy | scrub local assignment copy or keep private before public release |
| Dashboard `.md`/`.html` | live UI but stale paused lane with local assignments | do not touch while dashboard lane paused; scrub/refresh only in separately authorized dashboard scope |
| Mockups | design artifacts with local assignment examples | keep private/internal or scrub before public release |
| `COLLAB.md` | active handoff plus historical rollup | not a clean public artifact; preserve privately or reset in clean public proof repo |
| Turn notes | historical dogfood evidence | keep private or publish only as clearly labeled historical case study |
| Consultants/digests | historical dogfood/advisor evidence | private/internal unless explicitly curated |
| PR bodies/GitHub metadata | public platform metadata if repo is public | cannot remove without GitHub/account/history strategy |
| Commit metadata | durable Git identity history | cannot anonymize without history rewrite |
| Support docs/tools | local setup/support artifacts | scrub or exclude before public release |
| Trust/event files | early trust-layer local key/event artifacts | unsafe for public release without trust/history strategy |
| Stashed design concepts | deferred dashboard-design drift | do not pop or inspect in this scope |

## Public-Proof Strategy

Recommendation: use a clean neutral-org public repo for public proof, not the
current dogfood repo as-is.

Options:

1. Clean public branch in this repo:
   - Pros: closer continuity with dogfood evidence.
   - Cons: owner URL, PR metadata, commit metadata, and reachable history still
     expose local identity unless an orphan/squash strategy is used.
   - Classification: weaker public-proof path.

2. Clean public repo under current personal account:
   - Pros: simpler than an org move.
   - Cons: still exposes `samiserrag` in repo URL and GitHub activity.
   - Classification: useful for prototype release, not clean neutral proof.

3. New neutral-org public repo:
   - Pros: clean URL, clean role-neutral history, no old turn notes, no
     personal-name metadata in first proof commits.
   - Cons: requires separate org/account setup and clear relation to private
     dogfood.
   - Classification: strongest public-proof path.

Recommended copy-forward set for a clean public proof repo:

- scrubbed `README.md`
- scrubbed protocol docs
- scrubbed `kit/v1`
- fresh `COLLAB.md` starting from role-only assignments
- fresh static dashboard/cockpit artifacts, if dashboard is in scope
- new turn notes generated by public proof circles
- minimal examples and Human Decision Records

Recommended exclusions:

- old turn notes
- old COLLAB rollup
- old consultants/digests
- old trust/event files
- local support docs with personal paths
- stashed dashboard design concepts

Relationship wording:

```text
The private dogfood harness produced the protocol and exposed failure modes.
This public proof repo starts fresh with role-neutral artifacts so the public
record proves portability from the beginning instead of retroactively
sanitizing a local experiment.
```

## Fresh Public Proof Circles

Minimum clean proof circles, all role-neutral from the start:

| Circle | Purpose | Proof value | Artifact types | Real or seeded | Must never include |
| --- | --- | --- | --- | --- | --- |
| Objective/mechanical circle | Verify a deterministic docs invariant, such as template placeholders or dashboard/README link parity | Proves the loop can handle mechanical evidence without approval laundering | Outcome Packet, builder note, auditor note, evidence command output, Human Decision Record | Real | personal names, permanent model-role labels, launch/trust/legal claims |
| Judgment-based circle | Review public-facing claim discipline for README or kit copy | Proves auditor judgment can constrain overclaiming | claim rubric, builder analysis, auditor analysis, decision note | Real | personal names, public-alpha claims, compliance/security overclaims |
| `needs_revision` circle | Seed an overclaim, stale field, or missing evidence and require auditor revision | Proves failure is preserved and revision is not hidden | initial builder note, auditor `needs_revision`, revision note, final audit | Seeded/synthetic is acceptable if labeled | personal names, fake real-world user claims |
| Blocker/scope-conflict drill | Attempt a forbidden adjacent action, such as trust implementation or dashboard runtime work, inside docs scope | Proves stop conditions and no-touch boundaries fire | blocker packet, auditor blocker note, human/coordinator decision record | Seeded/synthetic | trust-layer claims, legal/compliance claims, real credentials |
| Human decision note example | Record `satisfied` but not approved, then authorize or reject only one exact consequence | Proves human approval remains separate from auditor satisfaction | Human Decision Record, exact action text, not-authorized block | Real if harmless docs action; seeded if demonstrating reject/redo | personal names, private reasoning, permanent model labels |

## Credibility Risk

Would scrubbing old historical runs damage credibility?

Yes, if done silently in place. The messy history is evidence that the protocol
caught process errors, interruptions, blockers, stale dashboards, duplicate
noise, and overclaim risk. Removing names from historical proof artifacts would
make the trail look cleaned after the fact.

Safe scrub:

- current/adopter-facing docs before public release
- kit templates
- dashboard copy in a scoped dashboard refresh
- protocol/strategy/operating docs when converting local assignments to
  role-neutral language
- support docs and examples copied into a new public release repo

Risky scrub:

- editing old turn notes to make them look role-neutral
- rewriting COLLAB history in place
- editing trust/event artifacts without a trust/history strategy
- changing PR/commit metadata via history rewrite solely to improve optics

Recommended handling:

- Keep old dogfood history private, or publish it only as a clearly labeled
  historical case study with local names intentionally preserved.
- Build fresh public proof runs that are role-neutral from the first commit.
- Say the private dogfood archive informed the public proof; do not pretend
  the public proof is the original raw history.

Fresh public proof is stronger than retroactive sanitization because it tests
the actual portability claim: whether a stranger-facing repo can run the
protocol without inheriting `Sami`, `Claude Code`, `Codex`, or `GPT-5.5 Pro`
as permanent vocabulary.

## Public-Release Recommendation

Recommended sequence:

1. Run a scoped adopter-facing scrub before kit implementation:
   root public docs, kit, live protocol/operating/strategy docs, dashboard
   copy if dashboard scope is approved, support docs, and local helper labels.
2. Do not scrub historical turn notes in this repo unless the explicit strategy
   becomes a sanitized public-release repo with copied-forward artifacts.
3. Treat GitHub owner, PR metadata, and commit metadata as a separate
   account/org/history strategy.
4. Prefer a new neutral-org public proof repo for clean public proof.
5. Keep private dogfood evidence separate from public proof artifacts, or label
   it explicitly as historical dogfood.

Do not do a kit-only scrub and then public-release the current repo. Kit-only
scrub is necessary but insufficient because dashboard, operating/strategy docs,
support docs, COLLAB, turn notes, and metadata still expose local identity.

## Browser Verification

- Tool used: N/A
- Reason: Read-only text inventory and handoff update; no UI behavior changed.
  Dashboard lane is paused, and browser QA was not needed for this scope.
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

## Automation Budget

N/A. No polling, cron, webhook, heartbeat, watcher, or automation work was
approved or performed.

## Verification

Post-edit verification expected and performed:

```text
$ git status --short --branch --untracked-files=all
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-NAME-SCRUB-SCOPE-001-codex-public-name-inventory.md

$ git diff --check
# exit 0

$ git stash list | head -5
stash@{0}: On main: defer dashboard design concepts gitignore workfolder
```

No-touch confirmations:

- only allowed files changed
- no `kit/v1` diff
- no `README.md` / `AGENTS.md` / `CLAUDE.md` diff
- no `.agent-handoff/PROTOCOL.md` / `OPERATING-MODEL.md` / `STRATEGY.md` diff
- no `.agent-handoff/DASHBOARD.md` / `.agent-handoff/DASHBOARD.html` diff
- no `.gitignore` diff
- `.design-concepts/` absent from working tree
- no public-release work
- no new Outcome Circle
- zero `* 2.md` duplicates

## Handoff

Next actor: Sami.

Specific ask: review this inventory and decide the next authorized scope. The
recommended next strategic move is not implementation inside this turn; it is a
separate decision between an adopter-facing scrub Outcome Circle, a clean
public-proof repo strategy, or both.

Hard stop: no staging, commit, push, branch, PR, merge, kit implementation,
name-scrub implementation, dashboard work, public release, trust
implementation, public proof run, clean repo/branch creation, or new Outcome
Circle was performed.
