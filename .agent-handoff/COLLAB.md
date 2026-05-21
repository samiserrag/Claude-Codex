# Collaboration State

## Goal

Prove a practical two-way Claude Code <-> Codex collaboration loop in this repo.
The sample build is a small static Decision Ledger app.

## Current Owner

Claude next, for E5-N critique. Sami accepted E5-M as successful and
authorized E5-N as a read-only CommonGround feasibility review. Codex completed
E5-N locally and hard-stopped. No staging, commit, push, branch, or PR action
occurred in E5-N.

## Current Phase

Experiment 5 E5-N CommonGround feasibility review: read-only review filed
locally by Codex. CommonGround was evaluated as prior art / possible future
substrate only. No install, clone, Postgres, local service, adapter,
notification/wake, automation, bridge, MCP/plugin, Hermes, Claude Dreams,
global config, staging, commit, push, branch, or PR occurred.

E5-N outputs (local-only until separately approved for commit/push):
- `.agent-handoff/turns/E5-N-codex-commonground-feasibility-review.md`
- `.agent-handoff/COLLAB.md` (this handoff update)

E5-N findings summary:
- CommonGround maps well to durable turn records, agent identity, work records,
  claim/lifecycle, causal lineage, ledger/feed, and pull-first inspection.
- CommonGround does not visibly replace this harness's exact approval text,
  Human Decision Packet, no-touch scope, artifact visibility, and Git-visible
  source-of-truth semantics without a custom governance layer.
- Source inconsistency is the headline risk: accessible CommonGround surfaces
  conflict between a GitHub-rendered `v3r1` preview story and raw/release
  `V1R4` / Common Ground Core material. Before any adoption, the exact release
  line and API horizon must be pinned.
- Recommendation: do not pivot to CommonGround now and do not build an adapter
  yet. If immediate relay pain needs relief, prefer D1: tiny external
  alert-only watcher (zsh/tmux/OS notification, no model calls, no repo writes).
  If CommonGround is later tested, start with B: one-way mirror from committed
  `.agent-handoff/turns/*.md` to CommonGround records, audit-only.

E5-N did not modify protocol, templates, dashboard, reflection paths, kit
files, root docs, product/runtime files, live Open Mic Colorado, or the pilot
repo. No CommonGround install, Postgres setup, adapter/prototype, repo
migration, automation, notification/wake, bridge, MCP/plugin, Hermes, Claude
Dreams, timer, cron, webhook, global config, staging, commit, push, branch, or
PR occurred.

Current hard stop: Claude should critique E5-N before any notification/wake
design, CommonGround install, adapter prototype, source pinning work, protocol
or template edit, live dashboard/reflection/improvement path creation, pilot
repo work, live Open Mic Colorado work, automation, install, or publish action.

— Historical phase content below is preserved per
the Response History Policy (durable detail lives in
append-only turn notes under
`.agent-handoff/turns/`). —

Experiment 3 E3-K scaffold-only extraction filed; E3-L
Claude critique pending.

Sami accepted E3-I as a successful first-extraction
design-only turn, accepted E3-J as a successful critique
with zero blockers, and authorized E3-K on 2026-05-16 as
the first scaffold-only extraction implementation into
`colorado-songwriters-collective`.

Latest Codex response:
- E3-K created exactly the six authorized target files:
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective/.agent-handoff/PROTOCOL.md`
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective/.agent-handoff/COLLAB.md`
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective/.agent-handoff/turns/.gitkeep`
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective/.agent-handoff/digests/.gitkeep`
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective/.agent-handoff/consultants/.gitkeep`
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective/.agent-handoff/prompts/starter-turn-note.md`
- Target immediate post-write `git status --short
  --untracked-files=all` showed only those six new
  `.agent-handoff/` files beyond the pre-existing dirty
  target surface.
- Target immediate post-write `git diff --name-only`
  remained limited to the same pre-existing tracked dirty
  files; no tracked target file was modified by E3-K.
- A later final target sanity check, after E3-K target
  verification and after local Claude-Codex note/COLLAB
  edits, showed unrelated image-file drift under
  `web/public/images/` that was absent from the immediate
  post-write E3-K status and outside every authorized E3-K
  write path. Codex did not edit, restore, remove, stage, or
  otherwise touch those image files.
- Target `AGENTS.md`, `CLAUDE.md`, `README.md`, `.gitignore`,
  `.github/`, `web/`, `supabase/`, `docs/`, `.claude/`,
  `.symphony/`, package files, `.env*`, current dirty/
  untracked artifacts, and trust/event/private-key files
  remained no-touch.
- Rendered target `PROTOCOL.md` uses honest multi-doc
  project-brief wording: "Project brief sources:
  README.md, docs/PRODUCT_NORTH_STAR.md, docs/CONTRACTS.md,
  and docs/GOVERNANCE.md."
- Starter prompt matches the kit/v1 template exactly, the
  three `.gitkeep` files are 0 bytes, and no scaffold
  `.DS_Store` was created.
- Signed governance remains optional; no `.agent-handoff/local/`,
  trust registry, event log, key, verifier, MCP, plugin,
  bridge, automation, install, target test, staging, commit,
  push, branch, or PR action occurred.
- The durable E3-K record is
  `.agent-handoff/turns/E3-K-codex-colorado-scaffold-extraction.md`.

Next Request To Claude:
- Critique E3-K as E3-L. Verify the target delta is limited
  to the six authorized `.agent-handoff/` scaffold files,
  the rendered protocol and collaboration state are honest
  and target-specific, no no-touch target surface was
  modified, `.gitignore` was deferred, signed governance
  stayed optional, browser QA and automation were correctly
  marked `N/A`, and no target tests, staging, commit, push,
  branch, PR, bridge, MCP, plugin, install, or global config
  action occurred.

Next Request To Codex:
- None active. Hard stop after E3-K until E3-L critique and
  Sami's next explicit authorization.

Next Request To Sami:
- None immediate until Claude's E3-L critique lands.

Hard stop remains active. No commit or push in either repo,
no staging, no branch, no PR, no additional target writes,
no target tests, no installs, no MCP/plugin/bridge/global
config action, no signed trust/event/private-key edit, and
no proposed-to-approved transition is active.

— Historical phase content below is preserved per the
Response History Policy (durable detail lives in the
append-only turn notes under `.agent-handoff/turns/`). —

Experiment 3 E3-I extraction design filed; Claude critique
pending.

E3-H accepted by Sami on 2026-05-16 as a successful read-only
discovery turn. E3-I was authorized by Sami on 2026-05-16 as
the first extraction DESIGN turn for `colorado-songwriters-
collective`. Explicit authorization text recorded here and in
the consultation thread:

  "Approved:

  1. Accept E3-H as a successful read-only discovery turn.

  2. Authorize E3-I as the first extraction DESIGN turn for
     colorado-songwriters-collective.

  Purpose:
  - Design the first safe kit/v1 extraction into colorado-songwriters-collective
    using E3-H discovery findings.
  - Do not write to colorado-songwriters-collective yet.

  Use this four-turn extraction shape:
  - E3-I: Codex extraction design
  - E3-J: Claude critique of extraction design
  - E3-K: Codex extraction implementation, only if separately authorized after E3-J
  - E3-L: Claude critique of extraction implementation

  Scope for E3-I:
  - Design only.
  - No writes to colorado-songwriters-collective.
  - No creating directories there.
  - No installs.
  - No test execution in colorado-songwriters-collective.
  - No MCP registration.
  - No plugin setup.
  - No bridge enablement.
  - No global config changes.
  - No commits, pushes, PRs, branches, or staging in either repo.
  - No signed trust/event/private-key edits.
  - Do not move any proposal to approved except by recording this exact E3-I
    authorization in COLLAB.md.

  Required design decisions:
  1. Whether first extraction should proceed while target repo is dirty.
     If yes, name the exact dirty files/surfaces to avoid.
  2. Exact files proposed for first extraction.
  3. Exact files explicitly not touched.
  4. Whether AGENTS.md and CLAUDE.md are merge surfaces, reference-only, or
     no-touch for first extraction.
  5. Whether .gitignore should be touched in first extraction or deferred because
     it is already dirty.
  6. Exact .agent-handoff scaffold files proposed.
  7. Whether signed governance remains optional for first adoption.
  8. Browser runner value: Chrome-first, based on target docs.
  9. Automation budget: N/A unless automation is separately approved.
  10. Per-experiment turn cap for E3-K implementation, if later authorized.
  11. Verification plan for extraction implementation.
  12. Rollback plan.
  13. Risks and blockers before extraction.

  Recommended starting point:
  - Treat AGENTS.md and CLAUDE.md as merge surfaces, not overwrite targets.
  - Treat target dirty state as an explicit-awareness constraint, not an automatic
    blocker, only if the implementation scope avoids dirty surfaces.
  - Prefer scaffold-only first extraction:
    - create .agent-handoff/PROTOCOL.md
    - create .agent-handoff/COLLAB.md
    - create .agent-handoff/turns/.gitkeep
    - create .agent-handoff/digests/.gitkeep
    - create .agent-handoff/consultants/.gitkeep
    - create .agent-handoff/prompts/starter-turn-note.md
  - Defer .gitignore edits unless E3-I proves a safe exact patch, because target
    .gitignore is already dirty.
  - Do not copy AGENTS.md.template or CLAUDE.md.template into the target in the
    first extraction unless E3-I proves a safe merge strategy.

  Output:
  - .agent-handoff/turns/E3-I-codex-colorado-extraction-design.md
  - .agent-handoff/COLLAB.md handoff update only

  Subagents:
  - Codex may use bounded advisory subagents:
    1. dirty-state risk reviewer
    2. target-doc merge reviewer
    3. scaffold-minimalism reviewer
    4. rollback/verification reviewer
  - Subagents inspect and report only.
  - Subagents may not edit files, install tools, run write-producing commands,
    expand scope, approve actions, or touch any repo outside read-only inspection.

  Verification required:
  - git status --short in Claude-Codex before and after E3-I.
  - git status --short in colorado-songwriters-collective before and after E3-I.
  - Target status must remain byte-identical because E3-I is design-only.
  - git diff --check in Claude-Codex after writing the E3-I note.
  - Do not run target tests.

  Hard stop after E3-I."

Codex filed `.agent-handoff/turns/E3-I-codex-colorado-extraction-design.md`
as the design-only turn. Design recommendation: E3-K, if later
authorized, should create only these target files:
`.agent-handoff/PROTOCOL.md`, `.agent-handoff/COLLAB.md`,
`.agent-handoff/turns/.gitkeep`,
`.agent-handoff/digests/.gitkeep`,
`.agent-handoff/consultants/.gitkeep`, and
`.agent-handoff/prompts/starter-turn-note.md`.

Target `AGENTS.md` and `CLAUDE.md` are treated as eventual merge
surfaces but no-touch for first extraction. Target `.gitignore`
should be deferred from first extraction because it is already
dirty, though the safe future patch is to add
`.agent-handoff/local/` and `.claude/worktrees/`. Signed
governance remains optional; browser runner is Chrome-first;
automation budget is N/A; proposed E3-K cap is one Codex
implementation turn followed by E3-L Claude critique.

E3-I did not write to `colorado-songwriters-collective`; target
`git status --short` before and after E3-I is byte-identical.
Hard stop remains active. E3-J Claude critique is next. No E3-K
implementation, target write, install, MCP registration, plugin
setup, bridge enablement, global config change, signed
trust/event/private-key edit, commit, push, branch, PR, staging,
or proposed-to-approved transition is authorized.

— Historical phase content below is preserved per the
Response History Policy (durable detail lives in the
append-only turn notes under `.agent-handoff/turns/`). —

Experiment 3 E3-H discovery filed; Claude critique pending.

Codex filed `.agent-handoff/turns/E3-H-codex-colorado-discovery.md`
on 2026-05-16 as the read-only discovery turn for
`colorado-songwriters-collective`. Target path exists. Target repo
identity from local Git metadata: branch `main`, remote
`https://github.com/samiserrag/colorado-songwriters-collective.git`,
local remote HEAD `origin/main`, target HEAD
`cadd9f69474ccb46ee21d83d56626532e0d01c90`.

Discovery headline: the target repo already has active
`AGENTS.md`, `CLAUDE.md`, README, governance docs, multi-lane
agent docs, Symphony prototype boundaries, Next.js/Supabase app
surfaces, GitHub Actions quality gates, and Chrome-first browser
validation rules, but no `.agent-handoff/` scaffold. The target
was dirty before discovery and remained dirty after discovery
with the same `git status --short` output. No tests were run
because no target command was justified as no-write under E3-H.

Claude critiques E3-H next. Hard stop remains active. No kit
extraction, no target-repo write, no install, no MCP registration,
no plugin setup, no bridge enablement, no global config change,
no signed trust/event/private-key edit, no commit/push/branch/PR,
and no proposed-to-approved transition is authorized.

E3-H was authorized by Sami on 2026-05-16 as a read-only
discovery turn for `colorado-songwriters-collective`. Precondition
sanity check (read-only by consultant; Codex will re-verify when
running the turn): the target directory
`/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective/`
exists. Explicit authorization text recorded here and in the
consultation thread:

  "Approved:

  1. Accept E3-G-FIX-001 as a successful kit-template housekeeping
     turn.

  2. Authorize E3-H as a read-only discovery turn for
     colorado-songwriters-collective.

  Purpose:
  - Discover the actual target-repo values needed before applying
    kit/v1.
  - Do not copy, create, edit, delete, install, configure,
    register, or enable anything in colorado-songwriters-collective.

  Precondition:
  - Verify that
    /Users/samiserrag/Documents/GitHub/colorado-songwriters-collective/
    exists.
  - If it does not exist, stop gracefully and report that discovery
    cannot proceed.

  Scope:
  - Read-only inspection of colorado-songwriters-collective.
  - Output only a turn note in this Claude-Codex repo:
    .agent-handoff/turns/E3-H-codex-colorado-discovery.md
  - Update only this repo's .agent-handoff/COLLAB.md handoff fields.
  - No writes to colorado-songwriters-collective at all.
  - No creating directories there.
  - No commands that write logs, caches, lockfiles, generated files,
    or config inside colorado-songwriters-collective.
  - No installs.
  - No npm install / bun install / pip install.
  - No MCP registration.
  - No plugin setup.
  - No bridge enablement.
  - No global config changes.
  - No commits, pushes, PRs, branches, or staging in either repo.
  - No signed trust/event/private-key edits.
  - Do not move any proposal to approved except by recording this
    exact E3-H authorization in COLLAB.md.

  Discover and report:
  1. Target repo identity and default branch.
  2. Existing AGENTS.md / CLAUDE.md / README.md status.
  3. Existing .agent-handoff/ status, if any.
  4. Existing .gitignore rules relevant to .agent-handoff/local/,
     .DS_Store, .claude/worktrees/, generated files, and secrets.
  5. Existing package/test commands and whether a safe read-only
     test command is identifiable. Do not run commands that may
     write.
  6. Existing CI/workflow runner conventions.
  7. Existing browser/UI surface and likely browser-runner choice,
     or explicit N/A if no browser surface.
  8. Candidate no-touch files/directories.
  9. Candidate first experiment scope and per-experiment turn cap.
  10. Whether signed governance should stay optional for first
      adoption.
  11. Which kit/v1 placeholders can be filled confidently and which
      remain UNKNOWN.
  12. Any risks before first extraction.

  Subagents:
  - Codex may use bounded advisory subagents where helpful:
    1. repo-structure discovery reviewer
    2. docs/agent-instruction reviewer
    3. test/CI discovery reviewer
    4. portability/no-touch reviewer
  - Subagents inspect and report only.
  - Subagents may not edit files, install tools, run write-producing
    commands, expand scope, approve actions, or touch any repo
    outside read-only inspection.

  Verification required:
  - git status --short in Claude-Codex before and after the turn.
  - git status --short in colorado-songwriters-collective before
    and after the turn, proving no target-repo writes occurred.
  - If target repo status is not clean before discovery, report
    that fact and do not modify it.
  - No test command should be run unless Codex can justify it is
    read-only. Otherwise mark test execution as deferred.

  Next agent:
  - Codex authors E3-H.
  - Claude critiques E3-H after it is pushed.

  Hard stop after E3-H."

E3-G-FIX-001 acceptance recap (consultant critique commit
`266bc82`): zero blockers, all eight Sami focus areas pass, two
cosmetic nits-of-the-fix surfaced and explicitly NOT blocking
(Phase enum now in two places; `COLLAB.md.template` disclaimer is
bullet sibling rather than sub-bullet). Sami chose option (a):
accept and proceed to E3-H read-only discovery rather than a
tiny additional kit-polish turn for the cosmetic nits.

Hard stop remains active. Per the active Stopgate Rule, no
write into `colorado-songwriters-collective`, no install, no MCP
registration, no plugin install, no bridge enablement, no global
config change, no signed trust/event/private-key edit, no commit
or push in either repo, no branch creation, no PR, and no
proposed-to-approved transition occurs without Sami's explicit
per-action approval.

— Historical phase content below is preserved per the
Response History Policy (durable detail lives in the
append-only turn notes under `.agent-handoff/turns/`). —

Experiment 3 E3-G-FIX-001 critique filed. Hard stop active per
Sami's instruction; awaiting Sami decision on next step.

E3-G-FIX-001 Claude consultant critique filed (2026-05-16) at
HEAD `2a09c02`. Zero blockers. All eight Sami focus areas pass.
Independent verification by consultant matches every claim in
Codex's self-check:
- `npm test` exit 0, "Collaboration scaffold check passed."
- `git diff --check` exit 0.
- Leak greps across `kit/v1/`: zero matches for `colorado`,
  `songwriters`, `denver`, `decision.ledger`, `sami-root`,
  `wrapper-codex-mcp`, `agent-event-envelope`. The four
  `claude.?codex` matches are product/config references only;
  the nine `install` matches are negative/anti-installer
  framing only.

Per-focus-area verdict:
1. Addressed only the five E3-G critique nits — PASS (295/68
   diff across exactly the eight authorized files; no scope
   creep).
2. Response History Policy disclaimer clear enough — PASS
   (inline summary-only qualifier in `COLLAB.md.template`
   beside latest-response fields, plus mirrored summary-only
   language in `AGENTS.md.template` and `CLAUDE.md.template`
   collaboration rules).
3. `fix` and `rescope` reconciled without schema drift — PASS
   (literal enum addition `architecture | critique |
   implementation | smoke | retrospective | fix | rescope`
   updated in BOTH `PROTOCOL.md.template §Turn Note Schema`
   AND `starter-turn-note.md` placeholder syntax; Codex's
   defense of literal-over-prose accepted).
4. Starter-turn-note placeholder instructions clear — PASS
   (top-of-file two-sentence directive: replace every
   `{{placeholder}}` before filing; empty fields → `N/A` with
   brief reason).
5. Experiment Authorization Convention marked as kit standard
   — PASS (`PROTOCOL.md.template §Experiment Authorization
   Convention` opens with "Recommended convention for kit
   adopters. This is the kit's forward-looking standard, not
   a requirement to retroactively rewrite older source-repo
   prose authorizations." — Codex's defense of marking-over-
   aligning accepted).
6. README Quick Start step 1 says "preserving the directory
   structure" — PASS (also adds useful specificity: "especially
   `.agent-handoff/` and its subdirectories").
7. Verification passed — PASS (consultant re-ran independently).
8. colorado-songwriters-collective, global config, bridges,
   MCP, plugins, signed trust/events, private keys, and
   installs untouched — PASS (`git log --oneline -- 'kit/v1/**'`
   shows only E3-G and E3-G-FIX-001 commits touching the kit).

Codex's three open questions answered: yes to addressing only
the authorized nits without scope expansion; yes to nit 2 and
nit 4 choices being defensible and consistent with the
Stopgate Rule; no new portability leak (the Response History
Policy disclaimer actually IMPROVES mutable-history clarity).

Notable strengths called out: two-place Phase enum consistency
(both `PROTOCOL.md.template` and `starter-turn-note.md`
updated); summary-only disclaimer at point of use across three
surfaces (`COLLAB.md.template`, `AGENTS.md.template`,
`CLAUDE.md.template`); "forward-looking standard, not
retroactive requirement" framing for nit 4 preserves repo's
existing authorization habits while giving adopters a cleaner
convention; tight 295/68 diff stat across exactly the
authorized files; subagents intentionally not used given small
scope.

Two tiny cosmetic nits-of-the-fix (NOT blocking; deferrable):
1. Phase enum now lives in two places (`PROTOCOL.md.template`
   and `starter-turn-note.md`). Future changes must update
   both. Acceptable for prose templates of this size; flag
   only if strict single-source-of-truth discipline is wanted
   as future kit hardening.
2. The `COLLAB.md.template` Response-History-Policy disclaimer
   line is a bullet sibling of the latest-response fields
   rather than a sub-bullet underneath them. Visually it reads
   as another Current Phase field. Could be tightened in a
   future template-polish pass.

Sami's decision queue:
- None immediate while Codex authors E3-H read-only discovery.
- After Codex files E3-H and Claude critiques it, decide on next
  scope: first kit-extraction action into
  colorado-songwriters-collective (separately authorized
  per-action), a tiny additional kit-polish turn for the two
  cosmetic E3-G-FIX-001 nits, Experiment 4 council skill pack,
  separate wrapper-codex-mcp trust turn, or deferral of further
  E3 work.

Hard stop remains active. No kit-extraction action, no write
into `colorado-songwriters-collective`, no file creation outside
this Claude-Codex repo, no installs, no MCP registration, no
plugin install, no bridge enablement, no global config change,
no signed trust/event/private-key edit, no commit or push in
either repo, no branch creation, no PR, and no
proposed-to-approved transition occurs without Sami's explicit
per-action approval.

E3-G accepted. E3-G-FIX-001 was authorized by Sami on 2026-05-16
as a tiny kit-template housekeeping turn addressing the five E3-G
critique nits. Explicit authorization text recorded here and in
the consultation thread:

  "Approved:
  1. Accept E3-G as a successful first kit-bootstrap
     implementation turn.
  2. Authorize E3-G-FIX-001 as a tiny kit-template housekeeping
     turn.

  Scope:
  - Address only the five E3-G critique nits:
    1. Add a Response History Policy disclaimer around
       latest-response / current-state fields so users do not
       treat mutable summary fields as the durable record.
    2. Add or reconcile phase values so `fix` and `rescope` are
       not schema drift.
    3. Add placeholder-replacement instructions to the starter
       turn-note.
    4. Align the Experiment Authorization Convention with actual
       repo practice, or clearly mark it as the new kit standard.
    5. Update README Quick Start step 1 to say \"preserving the
       directory structure.\"

  Allowed files:
  - kit/v1/README.md
  - kit/v1/AGENTS.md.template
  - kit/v1/CLAUDE.md.template
  - kit/v1/.agent-handoff/PROTOCOL.md.template
  - kit/v1/.agent-handoff/COLLAB.md.template
  - kit/v1/.agent-handoff/prompts/starter-turn-note.md
  - .agent-handoff/COLLAB.md
  - .agent-handoff/turns/E3-G-FIX-001-codex-kit-template-housekeeping.md

  Constraints:
  - Do not touch colorado-songwriters-collective.
  - Do not install anything, enable bridges, register MCP, set
    up plugins, modify global config, or edit signed
    trust/event/private-key files.
  - Do not expand the kit beyond the five nits.
  - Do not move any proposal to approved except by recording
    this exact E3-G-FIX-001 authorization.
  - No branches, PRs, or pushes unless separately approved.
  - Hard stop after the fix note and COLLAB.md handoff update.

  Verification required:
  - git diff --check
  - npm test
  - repeat the E3-G leak/portability grep checks:
    - no colorado/songwriters/denver leaks
    - no decision-ledger sample-app leaks
    - no Sami root / wrapper / signed-event implementation leaks
    - no global install/config instructions presented as default
    - any Claude/Codex matches are product references only
    - any install matches are negative/anti-installer framing only

  Subagents:
  - Codex may use bounded advisory subagents:
    1. template-minimalism reviewer
    2. portability/leak reviewer
    3. stopgate/security reviewer
    4. scaffold/test reviewer
  - Subagents may inspect and report only.
  - Subagents may not edit files, install tools, expand scope,
    approve actions, or touch other repos."

Codex authored E3-G-FIX-001. Claude consultant filed the critique
(zero blockers, two cosmetic nits — see above).

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, E3-E-FIX-001 kit
housekeeping, E3-F docs alignment, E3-F-FIX-001 scaffold-check
fix, and E3-G first kit-bootstrap all accepted. E3-G-FIX-001
kit-template housekeeping critique filed; awaiting Sami's
accept-or-redirect decision. After Sami accepts E3-G-FIX-001,
the consultant-recommended next step is E3-H read-only
discovery of colorado-songwriters-collective per Sami's prior
stated sequencing.

E3-G Claude consultant critique filed (2026-05-16) at HEAD
`a612ddf`. Zero blockers. All 12 Sami focus areas pass.
Independent verification by consultant confirms every claim in
Codex's 8-criterion portability self-check:
- `npm test` exit 0, "Collaboration scaffold check passed."
- `git diff --check` exit 0.
- Leak greps across `kit/v1/`: zero matches for `colorado`,
  `songwriters`, `denver`, `decision.ledger`, `sami-root`,
  `wrapper-codex-mcp`, `agent-event-envelope`. The four
  `Claude/Codex` matches refer to the two products'
  configurations, not the repo name `Claude-Codex`. All 9
  `install` matches are negative framings.

Notable strengths: `.gitignore.snippet` framing prevents
common overwrite footgun; "What This Kit Is Not" section in
README satisfies E3-E nit; PROTOCOL.md.template §Prior-Art
Citation Policy generalizes read-date convention to non-URL
prior art per E3-E-FIX-001 nit 3; Experiment Authorization
Convention names Turn cap as a per-experiment field per
E3-E-FIX-001 nit 2; AGENTS.md.template and CLAUDE.md.template
are perfect mirrors.

Five small consultant nits (NOT for E3-G acceptance):
1. COLLAB.md.template includes mutable latest-response fields
   without disclaimer about Response History Policy.
2. PROTOCOL.md.template Phase enum doesn't include `fix` or
   `rescope` despite our actual practice and the Agent values
   list being extended.
3. `starter-turn-note.md` placeholder syntax needs a one-line
   "replace each {{placeholder}} before filing" instruction.
4. Experiment Authorization Convention introduces a 7-field
   shape that doesn't exactly match our actual repo practice;
   either align repo practice or note convention is
   recommended-not-required.
5. README §Quick Start step 1 should say "preserving the
   directory structure."

Codex's three open questions answered: yes to kit minimalism
preserving discipline; no portability leaks (independent grep
matches self-check on every criterion); yes COLLAB handoff
updated without restructuring.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, E3-E-FIX-001 kit
housekeeping, E3-F docs alignment, E3-F-FIX-001 scaffold-check
fix, and E3-G first kit-bootstrap all accepted. Kit extraction
INTO another repo remains a separate sub-experiment requiring
Sami's explicit per-action approval.

Sami's decision queue:
- Accept E3-G as filed, then choose between:
  (a) authorize a small E3-G-FIX-001 housekeeping turn for the
      five consultant nits (consultant recommended — small and
      prevents friction at first adoption);
  (b) authorize the first kit-extraction action sub-experiment
      (likely a discovery turn reading colorado-songwriters-
      collective's actual state before any files are copied);
  (c) pivot to a queued item (Experiment 4 council skill pack,
      separate wrapper-codex-mcp trust turn);
  (d) defer further E3 work.

Hard stop remains active. No files were copied into another
repo, no installs or setup were run, no bridges/adapters were
enabled, no MCP/plugin/global config changes were made, no
signed trust/event/private-key files were touched, and no
proposal was moved to approved.

E3-G was authorized by Sami on 2026-05-16 as the first
kit-bootstrap implementation turn. Explicit authorization text
recorded here and in the consultation thread:

  "Approved:
  1. Accept E3-F-FIX-001 as a successful scaffold-check/docs-
     consistency fix.
  2. Authorize E3-G as the first kit-bootstrap implementation
     turn.

  Scope:
  - Create a reviewable portable kit folder inside this
    Claude-Codex repo only.
  - Do not copy anything into colorado-songwriters-collective
    yet.
  - Do not install anything.
  - Do not enable bridges.
  - Do not register MCP.
  - Do not set up plugins.
  - Do not modify global config.
  - Do not edit signed trust/event/private-key files.
  - Do not move any proposal to approved except by recording
    this exact E3-G authorization.
  - Hard stop after E3-G and hand off for critique.

  Create only:
  - kit/v1/README.md
  - kit/v1/.gitignore.snippet
  - kit/v1/AGENTS.md.template
  - kit/v1/CLAUDE.md.template
  - kit/v1/.agent-handoff/PROTOCOL.md.template
  - kit/v1/.agent-handoff/COLLAB.md.template
  - kit/v1/.agent-handoff/turns/.gitkeep
  - kit/v1/.agent-handoff/digests/.gitkeep
  - kit/v1/.agent-handoff/consultants/.gitkeep
  - kit/v1/.agent-handoff/prompts/starter-turn-note.md
  - .agent-handoff/turns/E3-G-codex-kit-v1-bootstrap.md
  - .agent-handoff/COLLAB.md handoff update

  Verification required:
  - git diff --check
  - npm test
  - a portability self-check in the turn note:
    - no Claude-Codex-specific repo name leaks except examples
      clearly labeled
    - no colorado-songwriters-collective files touched
    - no global install/config instructions presented as default
    - signed governance marked optional
    - adapters/bridges marked disabled until separately approved
    - browser runner supports named runner or explicit N/A
    - automation budget is N/A unless automation is approved
    - turn cap is per-experiment

  Subagents:
  - Codex may use bounded advisory subagents:
    1. template-minimalism reviewer
    2. portability/leak reviewer
    3. stopgate/security reviewer
    4. scaffold/test reviewer
  - Subagents may inspect and report only.
  - Subagents may not edit files, install tools, expand scope,
    approve actions, or touch other repos."

Codex authored E3-G. Claude consultant critiques next.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, E3-E-FIX-001 kit
housekeeping, E3-F docs alignment, and E3-F-FIX-001
scaffold-check fix all accepted. E3-G first kit-bootstrap is
filed and awaiting Claude critique. Kit extraction INTO another
repo remains a separate sub-experiment requiring Sami's explicit
per-action approval AFTER E3-G is critiqued.

E3-F-FIX-001 Claude consultant critique filed (2026-05-15) at
HEAD `2ce3cbf`. Zero blockers. Independent `npm test` run by
consultant: exit 0, "Collaboration scaffold check passed."

Headline finding: Codex caught and resolved an "accidental pass"
bug. Before this fix, in the current working tree, `npm test`
actually passed — but for the wrong reason. The pre-edit check
used substring matching, and Sami's verbatim authorization quote
text in COLLAB.md happened to contain the stale E1 heading
strings as substrings. So the check was matching quoted text,
not real headings. Codex did NOT silently accept the accidental
pass: diagnosed the bug, refused to ratify the pass, and fixed
both the wrong heading names AND the wrong matching method. The
new check validates real `^## .+$` level-2 headings via regex
and pins to current load-bearing heading names (`## Current
Phase`, `## Questions Requiring Sami Approval`, plus the
existing four).

Fix shape A endorsed (update scaffold check to current shape vs
B accepting both eras). Codex's defense: "encoding two eras of
heading names into a tiny scaffold check would be more confusing
for kit adopters than just pinning to the current load-bearing
names."

Three small consultant nits-of-the-fix (NOT for E3-F-FIX-001
acceptance):
1. Heading-rename brittleness preserved (still pins to six
   specific names). Future scaffold/schema cleanup correctly
   proposed by Codex as separate work.
2. Heading-set check doesn't validate order or uniqueness;
   duplicates collapse. Low-probability bug; same future
   cleanup.
3. Scaffold check should be wired into adopter CI in the
   kit-extraction turn so silent regressions are caught.

Codex's two open questions answered: yes, shape A is cleaner
than dual-era acceptance; yes, heading-aware validation is
within authorized scope (implementation of the alignment, not
schema expansion).

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, E3-E-FIX-001 kit
housekeeping, E3-F docs alignment, and E3-F-FIX-001
scaffold-check fix all accepted. Kit extraction remains a
separate sub-experiment requiring Sami's explicit per-action
approval.

Sami's decision queue:
- Accept E3-F-FIX-001 as filed, then choose between:
  (a) authorize the first kit-extraction action sub-experiment
      (likely portable folder inside this repo OR a discovery
      turn reading colorado-songwriters-collective's actual
      state);
  (b) pivot to a queued item (Experiment 4 council skill pack,
      separate wrapper-codex-mcp trust turn);
  (c) defer further E3 work.

Hard stop remains active. No kit files were created outside
this repo, no signed governance packaging was performed, no
adapter was enabled, and no proposed item was moved to
approved.

E3-F-FIX-001 was authored by Codex with the substring → heading
match correctness improvement. `scripts/check-collab.mjs` updated
to validate real level-2 headings; `npm test` passes.

E3-F accepted. E3-F-FIX-001 authorized by Sami on 2026-05-15 as a tiny
scaffold-check/docs-consistency fix. Explicit authorization text recorded here
and in the consultation thread:

  "Approved:
  1. Accept E3-F as a successful docs-alignment turn.
  2. Authorize E3-F-FIX-001 as a tiny scaffold-check/docs
     consistency fix.

  Scope:
  - Fix the pre-existing npm test scaffold expectation mismatch
    where the scaffold check expects old COLLAB.md headings:
    - ## Hard Constraints / Approval Stopgates
    - ## Decisions Made
  - Align the scaffold check with the current accepted COLLAB.md
    shape, or make it accept the current equivalent headings if
    that is safer.
  - Do not restructure COLLAB.md just to satisfy an old test.
  - Do not change E3-F in place.
  - Create a new fix-turn note:
    .agent-handoff/turns/E3-F-FIX-001-codex-scaffold-check.md
  - Update COLLAB.md handoff only.

  Allowed files:
  - the scaffold/test file that contains the stale heading
    expectations
  - .agent-handoff/COLLAB.md
  - .agent-handoff/turns/E3-F-FIX-001-codex-scaffold-check.md

  Verification required:
  - git diff --check
  - npm test
  - If npm test still fails, explain exactly why and stop.

  Constraints:
  - No kit extraction.
  - No file creation outside this Claude-Codex repo.
  - No installs, MCP registration, plugin setup, bridge
    enablement, or global config changes.
  - No signed trust/event/private-key edits.
  - No branches, PRs, or pushes unless separately approved.
  - Do not move any proposal to approved except by recording this
    exact E3-F-FIX-001 authorization.
  - Hard stop after the fix note and COLLAB.md handoff update.

  Subagents:
  - Codex may use a narrow test/scaffold-inspection subagent if
    available.
  - Codex may use a narrow docs-consistency subagent if available.
  - Subagents are advisory only. They may inspect and report, not
    expand scope, install tools, edit unrelated files, or approve
    anything."

Codex authored E3-F-FIX-001. Claude consultant critiques next.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, E3-E-FIX-001 kit
housekeeping, and E3-F docs alignment all accepted. E3-F-FIX-001
scaffold-check fix filed and awaiting Claude critique. Kit extraction remains
a separate sub-experiment requiring Sami's explicit per-action approval AFTER
E3-F-FIX-001 is critiqued and accepted.

E3-F Claude consultant critique filed (2026-05-15) at HEAD
`fbe8bf5`. Zero blockers. All six Sami focus areas pass:
- Docs aligned with accepted E3 state without expanding scope.
- PROTOCOL.md changed only via conservative language alignment;
  no new schema fields, event kinds, or approval mechanics; future
  schema additions correctly proposed (not applied).
- README/AGENTS/CLAUDE avoided stale local-only and bridge-first
  framing; "Bridge And Adapter Status" disclaimer in README
  prevents accidental copy-paste of example bridge command.
- File-based handoff preserved as minimal binding reference path
  across all four edited surfaces.
- Signed governance, adapters, council runtime, and kit
  extraction kept optional / separately approved.
- npm test pre-existing failure (E1-era heading names
  `## Hard Constraints / Approval Stopgates` and `## Decisions
  Made` no longer present in current COLLAB.md) honestly disclosed
  in Evidence Basis. Codex did NOT silently rename headings, did
  NOT silently change scaffold script, did NOT skip the failure.
  Independent verification by consultant: same failure on `npm
  test`, exit 1.

Three small consultant nits-of-the-alignment (NOT for E3-F
acceptance):
1. Pre-existing scaffold-check failure (`scripts/check-collab.mjs`
   expects E1-era heading names) should be fixed before any kit
   extraction so adopters don't inherit a broken check. Most
   consequential nit. Recommend small E3-F-FIX-001 turn that
   updates the check, makes it more flexible, or retires it.
2. README "First Run" §4 has a clunky compound (cap IS turn note
   004); simplify to "Stop at Experiment 1's authorized cap (turn
   note 004) and write a retrospective." Cosmetic.
3. AGENTS/CLAUDE "Browser Runner: Chrome First" section wasn't
   touched and still reads as repo-binding. Correct for this
   repo, but future kit-extraction will need to genericize per
   `{{BROWSER_RUNNER_CHOICE}}` pattern. Forward-flag only.

Codex's three open questions answered: yes, PROTOCOL.md changes
are conservative language alignment only; mostly clean wording
with one clunky compound flagged; yes, leaving
`docs/chrome-runners.md` unchanged is correct for this repo's
named runner.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, E3-E-FIX-001 kit
housekeeping, and E3-F docs alignment all accepted. Kit
extraction remains a separate sub-experiment requiring Sami's
explicit per-action approval.

Sami's decision queue:
- Accept E3-F as filed, then choose between:
  (a) authorize first kit-extraction action sub-experiment;
  (b) authorize small E3-F-FIX-001 scaffold-check fix turn first
      (consultant recommended — broken check would travel into
      any adopter repo);
  (c) pivot to a queued item (Experiment 4 council skill pack,
      separate wrapper-codex-mcp trust turn);
  (d) defer further E3 work.

Hard stop remains active. E3-F aligned existing docs only and
created the append-only E3-F turn note. No kit files were created
outside this repo, no signed governance packaging was performed,
no adapter was enabled, and no proposed item was moved to
approved. E3-E-FIX-001 was accepted, and E3-F was
authorized by Sami on 2026-05-15 as a docs-alignment turn before
any kit extraction. Explicit authorization text recorded here and
in the consultation thread:

  "Approved:
  1. Accept E3-E-FIX-001 as a successful design/prose-only
     housekeeping turn.
  2. Authorize E3-F as a docs-alignment turn before any kit
     extraction.

  Scope:
  - Update existing docs only to align the repo with the accepted
    E3 state.
  - No kit extraction into colorado-songwriters-collective.
  - No new adapter setup.
  - No installs, MCP registration, plugin setup, bridge
    enablement, or global config changes.
  - No branches, PRs, or pushes unless separately approved.
  - Do not move any proposal to approved except by recording this
    exact E3-F authorization.
  - Hard stop after E3-F and hand off for critique.

  Allowed files:
  - README.md
  - AGENTS.md
  - CLAUDE.md
  - .agent-handoff/PROTOCOL.md
  - .agent-handoff/COLLAB.md
  - optionally docs/chrome-runners.md only if stale browser-runner
    language needs alignment
  - new turn note:
    .agent-handoff/turns/E3-F-codex-docs-alignment.md

  Required alignment points:
  1. Local-first, not local-only.
  2. File-based handoff is the minimal binding reference path.
  3. Signed event governance is optional add-on, not required v1
     kit.
  4. Live bridge/adapters remain disabled until separately
     approved.
  5. Turn caps are per-experiment authorization values.
  6. Browser runner can be named or explicit N/A with reason.
  7. Automation budget is N/A unless polling/cron/webhook/
     heartbeat is approved.
  8. Council/GPT/Claude/Codex consultation is optional and
     file-based by default.
  9. Prior art such as gstack, AgentBridge, tmux bridge, LLM
     Council, Zenith is cited as prior art only, not dependency.
  10. Kit extraction remains a separate action after docs
      alignment."

Codex authored E3-F. Claude consultant critiques after this docs
alignment lands.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, and E3-E-FIX-001
kit housekeeping all accepted. E3-F docs-alignment is filed and
awaiting Claude critique.
Kit extraction remains a separate sub-experiment requiring
Sami's explicit per-action approval AFTER E3-F lands and is
critiqued.

E3-E-FIX-001 Claude consultant critique filed (2026-05-15) at
HEAD `10227c5`. Zero blockers. All five authorized nits resolved
with precision: `{{IDLE_AUTOMATION_BUDGET}}` N/A-by-default with
anti-pattern call-out against silently inheriting E2's numbers;
`{{TURN_CAP}}` per-experiment scope-bounded set by authorizing
approval; `{{BROWSER_RUNNER_CHOICE}}` named-runner-or-explicit-N/A
with documented reason; starter turn-note template with full schema
plus optional sections; Zenith citations include
"read 2026-05-15" annotation captured in the fix-turn note rather
than retroactively edited into E3-E (correct append-only
discipline).

Three small consultant nits-of-the-fix flagged as forward-flags
for future kit-bootstrap or first extraction turn (NOT for
E3-E-FIX-001 acceptance):
1. Two starter-turn-template locations proposed; future
   kit-bootstrap should pick one. Consultant preference:
   `.agent-handoff/prompts/starter-turn-note.md`.
2. Per-experiment turn cap mechanism now framed but not located;
   future PROTOCOL.md template should specify where in
   authorization wording the cap appears (e.g., "Cap: N turns"
   labeled line).
3. Read-date convention specified for URL citations only; should
   generalize to non-URL prior art (papers, screenshots, talks).

Codex's two open questions answered: yes, only authorized nits
addressed without silent protocol/extraction action (verified
E3-E itself unedited); no blocker wording before future extraction.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, and E3-E-FIX-001
kit housekeeping all accepted. E3 enablement (actual adapter
setup, install, MCP registration, plugin install, kit extraction
into another repo) remains a separate per-action sub-experiment
requiring Sami's explicit approval recorded in COLLAB.md.

Sami's decision queue:
- None immediate while Claude's E3-F critique is pending.
- Later only, if separately authorized: choose whether the next E3
  step is a first kit-extraction action, a portable kit folder
  inside this repo, a discovery turn reading
  `colorado-songwriters-collective` current state, Experiment 4
  council skill pack work, separate `wrapper-codex-mcp` trust work,
  or deferral.

Hard stop remains active. E3-F aligned existing docs only and
created the append-only E3-F turn note. No kit files were created
outside this repo, no signed governance packaging was performed,
no adapter was enabled, and no proposed item was moved to
approved.

E3-E accepted. E3-E-FIX-001 was authorized by Sami on 2026-05-15 as
a design/prose-only housekeeping turn. Explicit authorization text
is recorded here and in the consultation thread:

  "Approved:
  1. Accept E3-E as a successful kit-extraction + harness-control
     design-only turn.
  2. Authorize E3-E-FIX-001 as a tiny design/prose-only
     housekeeping turn.

  Scope:
  - Do not edit E3-E in place.
  - Create a new fix-turn note:
    .agent-handoff/turns/E3-E-FIX-001-codex-kit-housekeeping.md
  - Update COLLAB.md handoff only.
  - Address only the five E3-E critique nits:
    1. {{IDLE_AUTOMATION_BUDGET}} explicitly says N/A if no
       automation is enabled.
    2. {{TURN_CAP}} is reframed as per-experiment, not repo-wide.
    3. {{BROWSER_RUNNER_CHOICE}} includes an explicit N/A
       acceptable path.
    4. Starter turn-note template is added to the future kit
       contents.
    5. Zenith citations include read date, e.g. \"read 2026-05-15.\"

  Constraints:
  - Design/prose only.
  - No kit extraction into colorado-songwriters-collective.
  - No file creation outside this Claude-Codex repo.
  - No installs, MCP registration, plugin setup, bridge
    enablement, or global config changes.
  - No protocol changes unless proposed and stopped for approval.
  - No commits, pushes, PRs, or branches unless separately
    approved.
  - Hard stop after the fix note and COLLAB.md handoff update."

Codex filed `.agent-handoff/turns/E3-E-FIX-001-codex-kit-housekeeping.md`
as the authorized tiny housekeeping turn. It addresses only the five
E3-E critique nits: automation budget N/A path, per-experiment turn
cap framing, browser-runner N/A path, starter turn-note template, and
Zenith citation read dates. E3-E itself remains unedited.

Claude consultant critiques E3-E-FIX-001 next. No further E3 work or
kit-extraction action is authorized while that critique is pending.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
and E3-E kit-extraction + harness-control design all accepted.
E3-E-FIX-001 housekeeping is filed and awaiting Claude critique.
E3 enablement (actual adapter setup, install, MCP registration,
plugin install, kit extraction into another repo) remains a separate
per-action sub-experiment requiring Sami's explicit approval recorded
in COLLAB.md.

E3-E Claude consultant critique filed (2026-05-15) at HEAD
`a77860b`. Zero blockers. All six focus areas endorsed:
minimal/optional file split correct; signed governance properly
optional; harness-control loop preserves the proven pattern with
six elements + eight gap-finding triggers + six replanning
triggers; Zenith cited only as article/report prior art with
exemplary UNKNOWN labeling; stopping discipline / token budget
strong (concrete numbers + "What NOT to extract" enumeration);
colorado-songwriters-collective portability concrete enough as
placeholders (right discipline to not inherit this repo's values
silently).

Codex's four open questions answered: yes to signed-event trust
bootstrap optional in minimal kit; one minimal-file recommendation
(starter turn-note template); yes to digests/ and consultants/ as
cheap empty directories in v1; no Zenith reference overclaims.

Five small consultant nits (NOT for E3-E acceptance):
1. `{{IDLE_AUTOMATION_BUDGET}}` placeholder should explicitly say
   N/A if no automation is enabled.
2. `{{TURN_CAP}}` is per-experiment in our actual practice, not
   per-repo; reframe placeholder to match.
3. `{{BROWSER_RUNNER_CHOICE}}` lacks an explicit "N/A acceptable"
   path for adopters with no browser surface.
4. Starter turn-note template missing from optional files (would
   drop highest-friction part of cold start).
5. Zenith citation read-date not pinned ("read 2026-05-15" would
   improve reproducibility of the prior-art claim).

Sami's decision queue:
- None immediate while Claude's E3-E-FIX-001 critique is pending.
- Later only, if separately authorized: choose whether the next E3
  step is kit extraction toward `colorado-songwriters-collective`, a
  portable kit folder inside this repo, a protocol/template update, or
  deferral of further E3 work.

Hard stop remains active. No kit files were created outside this
repo, no protocol change was applied, no signed governance
packaging was performed, no adapter was enabled, and no proposed
item was moved to approved.

E3-D accepted. E3-D-FIX-001 was authorized by Sami on 2026-05-15 as
design/prose only. Explicit authorization text recorded here and in
the consultation thread:

  "Approved:
  - Accept E3-D as a successful adapter-selection design turn.
  - Authorize E3-D-FIX-001 as design/prose only.
  Scope:
  - Edit only COLLAB.md and a new E3-D-FIX-001 turn note, unless
    the agent proposes a tiny PROTOCOL.md note and stops for
    approval.
  - Address only the five E3-D critique nits:
    1. make Claude/wrapper coordinator registration explicit;
    2. choose wrapper-as-own-coordinator vs Claude-key signing;
    3. define inbound attested_by_observer semantics;
    4. define durable approval-event-before-allow ordering;
    5. define wrapper binary/source identity verification.
  - No installs, MCP registration, plugin setup, .mcp.json, bridge
    enablement, global config changes, commits, pushes, PRs,
    branches, or adapter execution.
  - Hard stop after E3-D-FIX-001 and hand off for critique."

Sami's preferred answers (Codex may agree, push back, or refine each
in writing):
- Nit 2: wrapper gets its own coordinator identity/keypair.
- Nit 3: inbound MCP responses are `attested_by_observer`, not
  Codex-signed.
- Nit 4: approval events must be durably accepted before the
  wrapper sends `allow`.
- Nit 5: wrapper source/binary identity must be verified before it
  can emit approval-related events.

Codex authored E3-D-FIX-001 (mirrors E3-B-FIX-001 authorship pattern).
Claude consultant is the next critique agent.

E3 status: E3-A spec accepted, E3-B trust-bootstrap accepted, E3-C
adapter inspection accepted, E3-B-FIX-001 verifier hardening
accepted, E3-D adapter-selection design accepted. E3-D-FIX-001 will
tighten direct-MCP wrapper preconditions before any future
enablement sub-experiment. E3 enablement (actual adapter setup,
install, MCP registration, plugin install) remains a separate
per-adapter sub-experiment requiring Sami's explicit approval
recorded in COLLAB.md.

E3-D Claude consultant critique filed (2026-05-15). Zero blockers.
Independent review endorsed: direct codex mcp-server first selection
(with Codex's correction that direct MCP is "not a risk downgrade,
just the cleaner first wrapper target"); the six-method allow-list
verbatim; the blocked-by-default surface enumeration; the
signed-event boundary; the 9-step rollback procedure (especially the
plugin-install-during-direct-MCP-rollback defensive rule); the
10-item verification evidence list; the Stop-hook isolation as a
separate sub-experiment.

Five nits flagged for future direct-MCP enablement sub-experiment
(NOT for E3-D acceptance):
1. Make Claude/wrapper coordinator registration step explicit in
   preconditions (recommend separate prior trust turn, not a
   sub-step of direct-MCP enablement).
2. Pick wrapper-coordinator identity design: transport-only using
   Claude's keys vs the wrapper as its own coordinator with
   Sami-rooted keypair. Recommend the latter for trust separation.
3. Sharpen inbound signature semantics: wrapper-observed envelopes
   must mark themselves `attested_by_observer`, not as
   Codex-signed events.
4. Document approval-timing ordering: signed approval event
   durably persisted BEFORE wrapper sends allow response BEFORE
   Codex acts.
5. Add wrapper binary identity verification (committed source hash
   or build artifact signature) before granting approval-event-
   emission capability.

Plus consultant-side answers to Codex's two structural open questions
(yes to direct-MCP first; additional blocked-method categories
enumerated for the deny list: server-initiated push, session
lifecycle, telemetry/logging).

E3 status: E3-A spec accepted, E3-B trust-bootstrap accepted, E3-C
adapter inspection accepted, E3-B-FIX-001 verifier hardening
accepted, E3-D adapter-selection design accepted. E3 enablement
(actual adapter setup, install, MCP registration, plugin install)
remains a separate per-adapter sub-experiment requiring Sami's
explicit approval recorded in COLLAB.md.

Sami's immediate decision queue:
- None while Claude's E3-D-FIX-001 critique is pending.
- Later only, if separately authorized: decide whether the next E3
  step is a wrapper-coordinator trust turn, a direct-MCP enablement
  design, Experiment 4 council skill pack work, or kit extraction
  toward colorado-songwriters-collective.

Codex filed `.agent-handoff/turns/E3-D-codex-adapter-selection.md`
as the authorized adapter-selection design-only turn. E3-D selects
direct `codex mcp-server` wrapper as the first future enablement
candidate, official Codex plugin wrapper as the second future
candidate, and keeps CCB and Claude Squad pattern-only under the
current AGPL posture. File-based handoff remains the binding
reference path.

Sami's verbatim E3-D authorization is preserved in the E3-D turn note;
it was also recorded in prior `COLLAB.md` state at commit `0a1f326`.

E3-D does not authorize any install, plugin setup, MCP registration,
`.mcp.json` edit, bridge enablement, live transport, global config
change, commit, push, PR, branch, wrapper code, or proposed-to-approved
transition. Any actual adapter enablement remains a separate
per-adapter sub-experiment requiring Sami's explicit approval recorded
in `COLLAB.md`.

E3 status: E3-A spec accepted, E3-B trust-bootstrap accepted, E3-C
adapter inspection accepted, E3-B-FIX-001 verifier hardening accepted,
and E3-D design filed for Claude critique.

E3-B Claude consultant critique filed (2026-05-15). Zero blockers.
Independent verification by the consultant passed across all checks:
`.gitignore` contains exactly `.agent-handoff/local/`; both private
keys mode 0600 and gitignored; `git check-ignore` confirms protection;
secret-leakage grep returned only filename references (no key material
outside `.agent-handoff/local/`); `node trust-bootstrap.mjs self-test`
passes (canonical_json_vector, duplicate_key_rejection,
ed25519_sign_verify); `node trust-bootstrap.mjs verify` reports `ok:
true` for registry, both events, possession_proof, hash_chain,
parent_link, prior_trust_link, and final_registry_links.

Five small nits flagged for optional future housekeeping: expand
`.gitignore` to add `.DS_Store` and `.claude/worktrees/`; future split
of `trust-bootstrap.mjs` into modules; refusal-to-overwrite test
fixture; redundant-fingerprint-in-proof storage; document
strict-integer-only payload constraint in adapter-author guide.

E3-C concurrently filed by Codex at
`.agent-handoff/turns/E3-C-codex-adapter-inspection.md` per Sami's
parallel authorization. E3-C critique by the Claude consultant was
filed and accepted with zero blockers.

E3-B trust-bootstrap implementation completed on 2026-05-15 and handed
to Claude for architecture-consultant critique. Codex created the
secret-safety `.gitignore` rule for `.agent-handoff/local/`, verified
`git check-ignore` before key generation, generated the Sami root and
Codex coordinator Ed25519 keypairs into ignored local paths, wrote the
root-signed trust registry and two root-signed bootstrap events, wrote
the Codex possession proof, and verified the registry/event/proof/hash
chain with `.agent-handoff/src/trust-bootstrap.mjs`.

E3-C concurrently authorized as read-only adapter/security inspection:
CCB (`bfly123/claude_codex_bridge`), Claude Squad, official Codex
plugin for Claude Code, and `codex mcp-server` should all get
license/config/security inspection before any bridge setup is
approved. E3-C must stay read-only and must not block E3-B.

Secret safety status: `.gitignore` contains `.agent-handoff/local/`,
`.DS_Store`, and `.claude/worktrees/`.
The private key paths `.agent-handoff/local/keys/sami-root.ed25519` and
`.agent-handoff/local/keys/codex.ed25519` are ignored, untracked, and
mode `0600`.

Single-developer per-repo Sami root key model selected for this
prototype. Org/team signing path deferred to a later design.

Private key backup is Sami's responsibility outside the repo (password
manager or encrypted local/off-machine backup).

Seven E3-A critique nits addressed in E3-B's turn note: time skew
window default, integer-only-numbers rule scope for payloads,
`recipient_coordinator_ids` broadcast semantics, `possession_proof_hash`
byte format, replay-vs-import nonce semantics, branch/force-push
policy, prompt-injection minimum baseline.

E3-A schema is endorsed: JCS-narrowed canonical JSON, Ed25519
signatures, SHA-256 hashing, UUIDv7 opaque event ids, integer-only
envelope numbers, hybrid sequence+hash filenames, domain-separation
prefix `agent-event-envelope:v1\n` for signing. Strengths called out
in the critique: domain-separation prefix prevents cross-protocol
signature reuse; `previous_accepted_event_hash` separated from
`parent_event_ids`; quarantine refuses to store hash of suspected
secret value alone; UUIDv7 treated as opaque (no timestamp trust);
fixtures cite real base commit `4543fc44...`.

E3-A was authorized by Sami on 2026-05-15. Explicit authorization text
recorded in this COLLAB.md entry and the consultation thread:

  "Run E3-A as a design-only event-envelope schema/spec turn. No
  implementation, installs, bridge enablement, commits, pushes, or
  protocol approval implied."

E3-A proposed canonical event envelope fields, deterministic JSON
serialization rules, signature coverage, trust-registry snapshot shape, file
naming conventions, quarantine rules, minimal fixture requirements, and
pass/fail acceptance checks. Design only: no code, no installs, no bridge
enablement, no commits, no protocol approval.

Concurrent decision: official Codex plugin and `codex mcp-server` paths
added to the E3-C read-only adapter/security inspection queue alongside
CCB and Claude Squad. Reason: their security/config surface is real
(approval boundaries, project/global config changes, sandbox
interactions, cross-tool context) even though their license risk
differs from third-party adapters.

Deferred per Sami: council skill pack work waits until E3-A lands;
porting to `colorado-songwriters-collective` waits until E3-B lands.
AgentBridge / CCB / plugin implementation work waits until they are
judged against E3-A's schema and governance contract; they may not
define the contract.

(E2 four-turn re-scope rhythm previously closed cleanly; all E2-006
critique blockers resolved by E2-007 and accepted by E2-008.)

`COLLAB.md` remains transitional pending the new state model.

Hard stop: E3-B implementation is complete and no further E3-B work
continues until Claude critiques it. E3-C remains separately authorized
as read-only adapter/security inspection and must not block E3-B. No
bridge enablement, installs, commits, pushes, PRs, branches, global
config changes, or proposed-to-approved transitions are authorized.

## Tool Observations

- Codex CLI is installed: `/opt/homebrew/bin/codex`, `codex-cli 0.130.0`.
- Claude Code is installed: `/opt/homebrew/bin/claude`, `2.1.58`.
- `codex mcp-server --help` works.
- `claude mcp serve --help` works.
- Claude currently has the Vercel plugin installed, but not the OpenAI Codex
  plugin.
- `claude mcp list` currently reports only a Vercel MCP entry and that health
  check fails.
- No project-level Claude MCP entry for Codex has been confirmed yet.
- Browser runner setup is Chrome-first. Do not default to Playwright.
- Chrome health checks passed: Chrome is installed and running; the Codex Chrome
  Extension is installed/enabled; the Codex Chrome native host manifest is
  correct.
- Codex Chrome connector smoke verification blocked direct `file://`
  navigation by URL policy, so turn 004 used an explicit local static server at
  `http://localhost:8765/app/index.html` and stopped it after verification.
- `denver-songwriters-collective` is the old repo name. Use
  `colorado-songwriters-collective` for current sibling-repo references.
- Ubicloud runner clarification: the CI runner provider is Ubicloud. The
  console project is `pj0qdnp2x6fp4q5p24j13cqv81`; the console shows the
  `samiserrag` GitHub integration and no active runners at setup time.
- GitHub repository verified as `samiserrag/Claude-Codex`, private, default
  branch `main`.

## E1 Historical Constraints / Still-Active Approval Stopgates

- Do not install dependencies without Sami's explicit approval.
- Do not commit, push, merge, or create a PR without Sami's explicit approval.
- Do not use dangerous sandbox or approval-bypass modes.
- Do not modify global Claude/Codex config without Sami's explicit approval.
- Stop after the four Experiment 1 turn notes unless Sami says to continue.

## E1 Historical Decisions Made

- Use repo files as the source of truth for collaboration state.
- Use a no-dependency static web app as the sample project.
- Use append-only turn notes to avoid both agents rewriting the same history.
- Run Experiment 1 file-based only. Do not use an MCP/plugin bridge in the
  first loop.
- Limit Experiment 1 to one feature: add a decision, persist it to
  localStorage, and verify reload preservation.
- Stop Experiment 1 after four turn notes: 001 Claude architecture, 002 Codex
  critique, 003 Claude implementation, 004 Codex implementation + smoke.
- Use Chrome-based browser runners for validation: Codex Chrome connector for
  Codex and Claude in Chrome MCP for Claude Code.
- Use Ubicloud for GitHub Actions CI via `runs-on: ubicloud-standard-2`.

## E1 Historical Considered And Rejected

- Rejected a dependency-heavy app because setup noise would obscure the workflow
  test.
- Rejected a fully free-running loop as the first test because approval and
  context boundaries need to be observed before automation is trusted.
- Rejected bridge use in Experiment 1 because the file-based contract needs a
  baseline before MCP/plugin routing is evaluated.
- Rejected implementing the full Decision Ledger feature list in Experiment 1
  because scope noise would obscure whether the collaboration loop works.

## E1 Historical Proposed File Ownership

- Claude owns turn 001 architecture, `app/index.html`, and first-pass
  `app/styles.css`.
- Codex owns turn 002 critique, `app/app.js`, and Chrome smoke evidence.
- Both agents may update `.agent-handoff/COLLAB.md` and add turn notes.
- Neither agent should edit another agent's existing turn note.
- Experiment 1 no-touch files after this setup pass: `.github/`, `.claude/`,
  `docs/`, `package.json`, `README.md`, `AGENTS.md`, `CLAUDE.md`,
  `.agent-handoff/PROTOCOL.md`.

## Current Diff / Branch

- Branch: `main`
- Turn 001 architecture note added at
  `.agent-handoff/turns/001-claude-architecture.md`.
- Turn 002 critique note added at
  `.agent-handoff/turns/002-codex-critique.md`.
- Turn 003 implementation note added at
  `.agent-handoff/turns/003-claude-implementation.md`.
- Turn 004 implementation/smoke note added at
  `.agent-handoff/turns/004-codex-implementation-smoke.md`.
- `app/index.html`, `app/styles.css`, and `app/app.js` are in place. No
  dependencies were installed and no commits, pushes, merges, or PRs were
  created during Experiment 1.
- E1-FIX-001 protocol fix turn added at
  `.agent-handoff/turns/E1-FIX-001-protocol-stopgate-and-schema.md`,
  landing the Stopgate Rule and four schema additions into `PROTOCOL.md`.
- E2-001 architecture turn added at
  `.agent-handoff/turns/E2-001-codex-architecture.md`.
- E2-002 critique turn added at
  `.agent-handoff/turns/E2-002-claude-critique.md`.
- E2-003 revision turn added at
  `.agent-handoff/turns/E2-003-codex-revision.md`.
- E2-004 second critique turn added at
  `.agent-handoff/turns/E2-004-claude-second-critique.md`.
- Round-3 consultation: GPT 5.5 Pro response 003 at
  `.agent-handoff/consultants/gpt-5.5-pro-response-003.md` and
  Claude consultant prior-art deeper audit at
  `.agent-handoff/digests/002-prior-art-audit.md`. Both pushed to
  `origin/main` in commit `b6e6999`.
- E2-005 re-scope turn added at
  `.agent-handoff/turns/E2-005-claude-rescope.md`. Locally
  uncommitted at filing; awaiting Sami's commit/push authorization.
- E2-006 Codex re-scope critique added at
  `.agent-handoff/turns/E2-006-codex-rescope-critique.md`. Locally
  uncommitted at filing; requests Claude consultant revision before
  Experiment 3 authorization.
- Round-4 consultation: GPT 5.5 Pro response 004 at
  `.agent-handoff/consultants/gpt-5.5-pro-response-004.md` (trifecta
  vs gstack skill catalog framing; council skill pack as future
  Experiment 4 scope). Pushed to `origin/main` in commit `75eeb5a`.
- E2-007 Claude rescope revision added at
  `.agent-handoff/turns/E2-007-claude-rescope-revision.md`. Accepts
  all three E2-006 blockers, splits E2-001 §3 into binding reference
  + exploratory adapters, reorders Experiment 3 with E3-A schema spec
  before E3-B trust bootstrap. Locally uncommitted at filing;
  awaiting Sami's commit/push authorization.
- E2-008 Codex rescope acceptance added at
  `.agent-handoff/turns/E2-008-codex-rescope-acceptance.md`. Accepts
  E2-007 as adequately resolving all three E2-006 blockers. Hands off
  to Sami for the Experiment 3 authorization decision. Locally
  uncommitted at filing; awaiting Sami's commit/push authorization.
- E3-A Codex envelope schema/spec added at
  `.agent-handoff/turns/E3-A-codex-envelope-schema.md`. Proposes the
  event envelope, canonical serialization, signature coverage, trust
  snapshot shape, file naming, quarantine rules, fixture contract, and
  pass/fail checks. Locally uncommitted at filing; awaiting Claude
  consultant critique before further E3 work.
- E3-G-FIX-001 Claude consultant critique added at
  `.agent-handoff/turns/E3-G-FIX-001-claude-critique.md`. Zero
  blockers, two cosmetic nits, all eight Sami focus areas pass.
  Independent verification by consultant: `npm test` exit 0,
  `git diff --check` exit 0, leak greps over `kit/v1/` match
  Codex's self-check. Committed and pushed in `266bc82` per
  Sami's per-push authorization on 2026-05-16.
- E3-H read-only discovery authorization recorded in
  `.agent-handoff/COLLAB.md` per Sami's verbatim authorization
  on 2026-05-16. Committed and pushed in `605f6e7` per Sami's
  per-push authorization on 2026-05-16.
- E3-H Codex colorado discovery added at
  `.agent-handoff/turns/E3-H-codex-colorado-discovery.md`.
  Read-only discovery with byte-identical pre/post target
  status, twelve discover-and-report items addressed,
  placeholder table with confidence column, six concrete
  pre-extraction risks named. Committed and pushed in
  `809eb4e` per Sami's per-push authorization on
  2026-05-16.
- E3-H Claude consultant critique added at
  `.agent-handoff/turns/E3-H-claude-critique.md`. Zero
  blockers, three tiny nits, all nine Sami focus areas
  pass. Independent verification by consultant matches
  every Codex claim tested (byte-identical target status
  re-run, target identity, `.agent-handoff/` absence,
  ignore gaps, governance docs presence, legacy denver
  references). Committed and pushed in `206ed7d` per
  Sami's per-push authorization on 2026-05-16.
- E3-I Codex colorado extraction design added at
  `.agent-handoff/turns/E3-I-codex-colorado-extraction-design.md`.
  Design-only first extraction proposal: 6 target files
  + 2 Claude-Codex files write set, comprehensive
  no-touch surface, three-scenario rollback plan, exact
  expected post-write target delta, sandbox blocking
  flagged. Committed and pushed in `a70bb41` per Sami's
  per-push authorization on 2026-05-16.
- E3-J Claude consultant critique of E3-I extraction
  design added at
  `.agent-handoff/turns/E3-J-claude-colorado-extraction-design-critique.md`.
  Zero blockers, three tiny cosmetic nits, all fifteen
  Sami focus areas pass. Independent verification by
  consultant matches every E3-I claim tested
  (byte-identical target status, target `.agent-handoff/`
  absence, all kit/v1 source files exist, all four
  `{{PROJECT_BRIEF_PATH}}` candidate docs exist,
  AGENTS/CLAUDE template overwrite hazard confirmed
  real). Committed and pushed in `66eae60` per Sami's
  per-push authorization on 2026-05-16.
- E3-K Codex colorado scaffold extraction added at
  `.agent-handoff/turns/E3-K-codex-colorado-scaffold-extraction.md`.
  First scaffold-only extraction implementation: 6
  target files created in
  `colorado-songwriters-collective/.agent-handoff/`,
  stage-in-tmp-then-exact-copy write pattern, all three
  E3-J cosmetic nits addressed inline. Target writes
  remain uncommitted per the authorized scope. Committed
  and pushed in `c080052` per Sami's per-push
  authorization on 2026-05-16.
- E3-L Claude consultant critique of E3-K scaffold
  extraction added at
  `.agent-handoff/turns/E3-L-claude-colorado-scaffold-extraction-critique.md`.
  Zero blockers, three tiny cosmetic nits, all fourteen
  Sami focus areas pass. Independent verification by
  consultant: target `.agent-handoff/` tree contains
  exactly 6 authorized files; `cmp` proves
  starter-turn-note byte-identical to kit source; no
  unfilled placeholders; no accidental `.DS_Store`;
  unrelated `web/public/images/` drift correctly
  classified as target-side concurrent actor change
  outside E3-K scope. Locally uncommitted at filing;
  awaiting Sami's per-push authorization.

## Latest Claude Response

E3-L architecture-consultant critique of E3-K scaffold
extraction filed at
`.agent-handoff/turns/E3-L-claude-colorado-scaffold-extraction-critique.md`.
Verdict: zero blockers, accept E3-K as a successful first
scaffold-only extraction implementation. **SAFE TO ACCEPT,
SAFE TO COMMIT LATER IN TARGET WITH PRECISE STAGING, NO
FIX TURN NEEDED.** All fourteen Sami focus areas pass on
independent verification:
- Target `.agent-handoff/` tree contains EXACTLY the
  six authorized files (PROTOCOL.md, COLLAB.md,
  prompts/starter-turn-note.md, 3x .gitkeep) — verified
  via independent `find -maxdepth 3`.
- `cmp` proves starter-turn-note.md is BYTE-IDENTICAL
  to kit/v1 source (no drift from kit).
- Independent `grep '{{'` returns zero matches — no
  unfilled placeholders in rendered PROTOCOL/COLLAB.
- Independent `find -name .DS_Store` returns no output
  — no accidental .DS_Store in scaffold tree.
- Rendered PROTOCOL.md uses the multi-doc PROJECT_BRIEF
  statement exactly as E3-J nit #1 recommended (option
  a: inline multi-doc sentence rather than
  single-anchor fiction).
- Rendered PROTOCOL.md adds TWO target-specific
  protections beyond the kit template: AGENTS/CLAUDE
  merge-surface protection (lines 17-18) and
  Chrome-first repository statement (lines 39-40).
- Target `git diff --name-only` after E3-K lists ONLY
  the 12 pre-existing tracked dirty files — no
  E3-K-caused tracked-file modification.
- `git show --stat c080052` confirms only 2 Claude-Codex
  files touched; target writes remain uncommitted.

All three E3-J cosmetic nits addressed inline:
multi-doc PROJECT_BRIEF, `--untracked-files=all`
consistency throughout, explicit `.DS_Store` check.
Strongest single-strength: **stage-in-tmp-then-exact-copy
write pattern** (Codex staged rendered files in
`/private/tmp/e3k-colorado-scaffold/` before atomic copy
to target — safest possible cross-repo write).

Unrelated `web/public/images/` drift classified as
**target-state drift outside E3-K scope from
concurrent actor change**. Evidence: drift sits
entirely in `web/public/images/` (in E3-I no-touch
surface); a 7th drift entry appeared AFTER Codex's
final sanity check (concurrent target activity);
paths cannot overlap with E3-K's `.agent-handoff/`
write surface. NOT a blocker. IS a constraint for
any later target-side commit: precise staging
(`git add .agent-handoff/`) required to avoid
bundling unrelated drift.

Three tiny cosmetic nits-of-the-implementation (NOT
blocking; deferrable): (1) target COLLAB.md uses
double-hyphen (`--`) where kit template may use
em-dash (`—`); (2) Current Phase rendered as single
bulleted block rather than separate sub-sections;
(3) future cross-repo turns could include a brief
"drift watch window" re-check to surface concurrent
activity arriving just after primary verification.

Open question for Sami: Codex's drift report missed
one new image (`?? web/public/images/hero/Hero
1920-W.png`) that appeared AFTER its final sanity
check — almost certainly your own concurrent target
work, worth confirming.

Subagents intentionally not used. Hard stop active
per Sami's instruction; standing by for Sami's
per-push authorization.

## Earlier Claude Response

E3-J architecture-consultant critique of E3-I extraction
design filed at
`.agent-handoff/turns/E3-J-claude-colorado-extraction-design-critique.md`.
Verdict: zero blockers, accept E3-I as a successful
first-extraction design-only turn. All fifteen Sami focus
areas passed. E3-K was identified as SAFE TO AUTHORIZE
with three tiny cosmetic nits (PROJECT_BRIEF multi-doc
phrasing, `--untracked-files=all` consistency, .DS_Store
check) — all of which Codex subsequently addressed
inline in E3-K rather than deferring to a fix turn.
Further-back Claude responses (E3-H critique,
E3-G-FIX-001 critique, E2-007 rescope revision, and
earlier) preserved in their append-only turn notes
under `.agent-handoff/turns/` per the Response History
Policy in `.agent-handoff/PROTOCOL.md`.

(Below is residual prose from earlier turn-note consolidation
that should have been removed; preserved here verbatim until
a future polish turn can excise it cleanly without scope
expansion.)

(1) E2-001 §3 split into binding reference path
(Tier 0 manual handoff + Tier 1 inbox/outbox file exchange) and
exploratory opt-in adapters (Tier 2 cron, Tier 3 webhooks, AgentBridge,
CCB, tmux variants, official Codex plugin, `codex mcp-server`). External
transports replace delivery mechanics but not the durable signed
envelope, import validation, quarantine, audit log, or human-readable
fallback. (2) Experiment 3 reordered: E3-A event-envelope schema/spec
(design only: canonical envelope fields, JSON serialization, signature
coverage, registry snapshot shape, file naming, fixtures, acceptance
checks), then E3-B trust-bootstrap implementation against the binding
reference path only, with E3-C adapter evaluation (read-only license
inspection on CCB and Claude Squad, plus read-only evaluation of
AgentBridge, CCB, tmux variants, official Codex plugin and
`codex mcp-server`) running in parallel, followed by E3-D Sami adapter
selection per scoped sub-experiment. (3) Transport-choice matrix now
includes official Codex plugin in Claude Code and `codex mcp-server`
project-scoped MCP entry alongside AgentBridge, CCB, tmux variants, and
the file-based default. The LLM Council adoption moved out of
Experiment 3 to a separate future council experiment. All five E2-006
nits addressed in writing (deferred housekeeping for Phase enum,
sub-decision count alignment, council API-key tradeoff, Codex Mate /
Ruflo control-plane read, stale "Original Hard-Stop Note" cleanup).
Further-back Claude responses (E2-005 rescope and earlier) are
preserved in their append-only turn notes under
`.agent-handoff/turns/` per the Response History Policy in
`.agent-handoff/PROTOCOL.md`.

## Latest Codex Response

E3-K Colorado scaffold extraction filed at
`.agent-handoff/turns/E3-K-codex-colorado-scaffold-extraction.md`.

Summary:
- Created EXACTLY the six authorized target scaffold files under
  `colorado-songwriters-collective/.agent-handoff/`: PROTOCOL.md, COLLAB.md,
  prompts/starter-turn-note.md, plus three 0-byte .gitkeep files (turns,
  digests, consultants).
- Used stage-in-tmp-then-exact-copy write pattern: rendered files staged in
  `/private/tmp/e3k-colorado-scaffold/` before scoped escalated atomic copy
  to target. Single authorized write path, not a broad workaround.
- Addressed all three E3-J cosmetic nits inline rather than via a fix turn:
  (1) PROJECT_BRIEF_PATH rendered as multi-doc statement
  ("Project brief sources: README.md, docs/PRODUCT_NORTH_STAR.md,
  docs/CONTRACTS.md, and docs/GOVERNANCE.md."); (2) all pre/post target
  status checks use `git status --short --untracked-files=all` for
  apples-to-apples granularity; (3) explicit `find .agent-handoff -name
  .DS_Store` check confirms no accidental .DS_Store created.
- Added two target-specific protections in rendered PROTOCOL.md beyond the
  kit template: AGENTS/CLAUDE merge-surface protection and Chrome-first
  repository statement.
- Verification: target `git diff --name-only` shows no E3-K-caused tracked
  file modification; `cmp` proves starter-turn-note.md byte-identical to
  kit/v1 source; `rg '{{'` returns no unfilled placeholders. No target
  tests run (deferred with reason: scaffold-only, tests not proven
  read-only).
- Honest drift disclosure: a final sanity check observed unrelated
  `web/public/images/` drift (5 deletions + 1 untracked image) outside
  E3-K scope. Codex correctly did not attempt cleanup. (E3-L consultant
  re-verification found one ADDITIONAL untracked image that appeared
  after Codex's final check — concurrent target-side actor activity.)
- Target writes remain uncommitted in target repo per the authorized
  read-only-target-commit scope. Claude-Codex commit `c080052` is only
  the two-file note + COLLAB.md update.

## Earlier Codex Response

Turn 002 critique written at `.agent-handoff/turns/002-codex-critique.md`.
Codex accepts the Experiment 1 scope, bare-array `localStorage` shape, ID rule,
DOM contract, and hardcoded `"proposed"` status. Codex listed one blocker:
write-failure behavior must not render or treat a new decision as saved when
`localStorage.setItem` fails, because that would violate the reload-preserves
promise. The required correction is to attempt the storage write against a
candidate list first, then update in-memory state and render only after the
write succeeds. Nits cover ARIA linkage, locale timestamp rendering, and
keeping parse-failure recovery simple.

## Questions Requiring Sami Approval

- None for Codex in E5-N. Codex is hard-stopped after local review.
- Claude critique is the next review step once Sami provides visibility into
  the local E5-N artifacts.
- Optional later: decide whether to run D1 tiny external alert-only watcher
  design, B CommonGround one-way mirror source-pinning/design, or another menu
  option after E5-N critique.
- Optional later: align live `.agent-handoff/COLLAB.md` to the
  `kit/v1/.agent-handoff/COLLAB.md.template` structured field shape and
  rename root docs to reference the newly backported rules (carried forward
  from E5-I/J/K/L critiques).

## Next Request To Claude

Critique E5-N. Focus on the source inconsistency finding, whether Git should
remain authoritative, whether exact approval text is unverified as
CommonGround-first-class, and whether D1 tiny external alert-only watcher is a
better immediate next step than a CommonGround adapter.

## Next Request To Codex

None active. Hard stop after E5-N. E5-N does not authorize CommonGround
install, Postgres setup, adapter/prototype creation, notification/wake design,
live `.agent-handoff/reflections/` creation, live `.agent-handoff/improvements/`
creation, live `.agent-handoff/DASHBOARD.md` creation or edits, protocol edits,
template edits, starter-turn-note edits, root-doc edits, kit edits, pilot repo
edits, live Open Mic Colorado work, product/runtime changes, installs,
automation, bridges, MCP/plugins, Hermes, Claude Dreams, timers, cron,
webhooks, global config changes, staging, commit, push, branch, PR, or any
proposed-to-approved transition.

## Next Request To Sami

No immediate decision is required from Sami unless Sami wants to authorize
staging/commit/push of E5-N artifacts or route them to Claude by another
visibility path. The next safe action is E5-N critique after artifact
visibility is sufficient.
