# E3-H - Codex Colorado discovery

## Agent
Codex

## Phase
architecture

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis
and Portability Findings per the active `PROTOCOL.md` additions. This is a
read-only discovery turn for `colorado-songwriters-collective`. It does not
write to that target repo, install tools, run tests, enable bridges, register
MCP, set up plugins, modify global config, edit signed trust/event/private-key
files, create a branch, stage, commit, push, open a PR, or move any proposal to
approved.

## Files touched this turn
- `.agent-handoff/turns/E3-H-codex-colorado-discovery.md` (created)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)

## Decisions (binding)
- E3-H discovery is read-only against
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective`.
- The target repo existed and was inspected only with read-only commands.
- The target repo was dirty before discovery and remained dirty after
  discovery with the same `git status --short` output. No target-repo writes
  were made.
- No target tests were run. I did not identify a test command that could be
  justified as no-write under this E3-H scope.
- Future kit extraction into the target repo remains separately gated. This
  turn only records discovery and candidate values.
- Subagents were not used. The inspection surface was bounded enough to keep
  direct evidence control in the main Codex turn.

## Open questions for the other agent
- Does Claude agree that existing target `AGENTS.md` and `CLAUDE.md` should be
  treated as merge surfaces, not overwrite targets, for any later extraction?
- Does Claude agree that the target repo's dirty state is a blocker before any
  first extraction write, unless Sami explicitly scopes around those existing
  changes?
- Does Claude see a safer first-experiment turn cap than the candidate
  two-turn scaffold-only extraction and critique proposed below?

## Blockers (must-fix before continuing)
- No blocker to completing E3-H.
- Before first extraction: target repo is already dirty, including tracked
  changes to `.gitignore`, `AGENTS.md`, `CLAUDE.md`, web tests/routes/libs, and
  many untracked artifacts. A future write turn needs an explicit decision to
  either wait for a clean target repo or work around named preexisting changes.
- Before first extraction: target `AGENTS.md` and `CLAUDE.md` already exist and
  are active operational documents. Kit templates must not overwrite them.
- Before first extraction: `.agent-handoff/local/` and `.claude/worktrees/` are
  not ignored by the current target `.gitignore`; `.gitignore` itself is
  currently modified.

## Nits (suggested, not required)
- Target `web/package.json` still uses package name
  `denver-songwriters-collective` while the current repo and README are
  Colorado-branded.
- Target `CLAUDE.md` is a compatibility index that still points to
  `/Users/samiserrag/Documents/GitHub/denver-songwriters-collective/...`.
- Target `.gitignore` ignores `Claude Worktrees/` but not
  `.claude/worktrees/`, and `.claude/worktrees/` is currently untracked.
- Root-level `output/` and several Lane 9 screenshot/smoke artifacts are
  untracked and not ignored by the checked ignore rules.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: E3-H is read-only repository discovery. I inspected docs and files only
and did not launch, open, or drive a browser.

## Evidence Basis
- USER SAID: E3-H is read-only discovery of
  `colorado-songwriters-collective`; output only this turn note and a
  Claude-Codex `COLLAB.md` handoff update; no writes to the target repo, no
  installs, no tests unless justified as read-only, no git operations beyond
  status/inspection, and hard stop after the note plus handoff.
- USER SAID: verify Claude-Codex is on `main` at or after commit `605f6e7`
  where E3-H authorization was recorded.
- FILE VERIFIED: Claude-Codex branch is `main`; `HEAD` is
  `605f6e7ef6be2da441dfe1fc2f9ea83fc09b1ae6`; `git merge-base --is-ancestor
  605f6e7 HEAD` exited 0; `COLLAB.md` records E3-H authorization.
- FILE VERIFIED: read `.agent-handoff/PROTOCOL.md`,
  `.agent-handoff/COLLAB.md`, `docs/test-project.md`,
  `docs/chrome-runners.md`, the required E3-G and E3-G-FIX-001 turn notes, and
  the required `kit/v1` templates before editing.
- FILE VERIFIED: target path exists:
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective`.
- FILE VERIFIED: target repo current branch is `main`; toplevel is
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective`;
  `origin` points to `https://github.com/samiserrag/colorado-songwriters-collective.git`;
  local remote HEAD is `origin/main`; target `HEAD` is
  `cadd9f69474ccb46ee21d83d56626532e0d01c90`.
- FILE VERIFIED: target `.agent-handoff/` does not exist; `find
  .agent-handoff -maxdepth 3 -type f` returned "No such file or directory".
- FILE VERIFIED: target `AGENTS.md`, `CLAUDE.md`, `README.md`,
  `.gitignore`, `package.json`, `web/package.json`, workflows, governance
  docs, agent docs, and UI route structure were inspected read-only.
- FILE VERIFIED: target `git status --short` before and after discovery
  matched exactly and showed preexisting dirty state.
- AGENT SUMMARY: The target repo already has strong governance and agent
  documentation, a Next.js/Supabase app in `web/`, GitHub Actions quality gates,
  Chrome-first browser validation rules, and no `.agent-handoff/` scaffold.
- INFERENCE: The first safe extraction should be scaffold-only and avoid
  overwriting target `AGENTS.md`, `CLAUDE.md`, README, workflows, Supabase, web,
  Symphony, or Claude local surfaces unless Sami later approves exact file
  merges.
- UNKNOWN: Exact future extraction turn cap, allowed write set, and whether to
  modify existing `AGENTS.md`/`CLAUDE.md` versus create handoff docs only remain
  unknown until Sami authorizes the next scope.

## Verification

Claude-Codex pre-discovery `git status --short`:

```text
<clean; no output>
```

Claude-Codex branch and commit:

```text
main
605f6e7ef6be2da441dfe1fc2f9ea83fc09b1ae6
```

Target repo pre-discovery `git status --short`:

```text
 M .gitignore
 M AGENTS.md
 M CLAUDE.md
 M web/src/__tests__/ops-event-csv.test.ts
 M web/src/__tests__/ops-venue-csv.test.ts
 M web/src/app/api/guest/request-code/route.test.ts
 M web/src/app/api/guest/request-code/route.ts
 M web/src/app/guest/action/page.tsx
 M web/src/lib/email/email.test.ts
 M web/src/lib/email/render.ts
 M web/src/lib/ops/eventCsvParser.ts
 M web/src/lib/ops/venueCsvParser.ts
?? .claude/scheduled_tasks.lock
?? .claude/worktrees/
?? docs/investigation/2026-04-29-symphony-orchestration-stopgate.md
?? docs/investigation/2026-05-10-fort-collins-area-events-existing-venues-import.csv
?? docs/investigation/assets/
?? "docs/investigation/symphony-phase-2-spec-gap 2.md"
?? "docs/investigation/track1-claims 2.md"
?? "docs/investigation/track1-claims 3.md"
?? "docs/investigation/track2-2f0-concierge-write-gate-adr 2.md"
?? "docs/investigation/track2-2l1-bola-rls-service-role-audit-report 2.md"
?? "docs/investigation/track2-2l2-bola-route-resource-matrix 2.md"
?? "docs/runbooks/ai-telemetry-consumption 2.md"
?? lane9-rmu-draft-detail-404.png
?? lane9-rmu-drafts-list.png
?? lane9-rmu-smoke-console-2026-05-03.md
?? lane9-rmu-smoke-timeout-2026-05-03.png
?? output/
?? "tools/symphony/test/config.test 2.mjs"
?? web/scripts/security/public-secret-exposure-scan.mjs
?? web/src/app/guest/action/page.test.tsx
```

Target repo post-discovery `git status --short`:

```text
 M .gitignore
 M AGENTS.md
 M CLAUDE.md
 M web/src/__tests__/ops-event-csv.test.ts
 M web/src/__tests__/ops-venue-csv.test.ts
 M web/src/app/api/guest/request-code/route.test.ts
 M web/src/app/api/guest/request-code/route.ts
 M web/src/app/guest/action/page.tsx
 M web/src/lib/email/email.test.ts
 M web/src/lib/email/render.ts
 M web/src/lib/ops/eventCsvParser.ts
 M web/src/lib/ops/venueCsvParser.ts
?? .claude/scheduled_tasks.lock
?? .claude/worktrees/
?? docs/investigation/2026-04-29-symphony-orchestration-stopgate.md
?? docs/investigation/2026-05-10-fort-collins-area-events-existing-venues-import.csv
?? docs/investigation/assets/
?? "docs/investigation/symphony-phase-2-spec-gap 2.md"
?? "docs/investigation/track1-claims 2.md"
?? "docs/investigation/track1-claims 3.md"
?? "docs/investigation/track2-2f0-concierge-write-gate-adr 2.md"
?? "docs/investigation/track2-2l1-bola-rls-service-role-audit-report 2.md"
?? "docs/investigation/track2-2l2-bola-route-resource-matrix 2.md"
?? "docs/runbooks/ai-telemetry-consumption 2.md"
?? lane9-rmu-draft-detail-404.png
?? lane9-rmu-drafts-list.png
?? lane9-rmu-smoke-console-2026-05-03.md
?? lane9-rmu-smoke-timeout-2026-05-03.png
?? output/
?? "tools/symphony/test/config.test 2.mjs"
?? web/scripts/security/public-secret-exposure-scan.mjs
?? web/src/app/guest/action/page.test.tsx
```

Claude-Codex post-write `git status --short`:

```text
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E3-H-codex-colorado-discovery.md
```

Test execution:

```text
Not run. Test execution deferred because E3-H authorized read-only discovery
and no target test command was justified as no-write.
```

## Twelve Discovery Items

### 1. Target repo identity and default branch
- FILE VERIFIED: target toplevel is
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective`.
- FILE VERIFIED: `origin` fetch/push URL is
  `https://github.com/samiserrag/colorado-songwriters-collective.git`.
- FILE VERIFIED: current branch is `main`.
- FILE VERIFIED: local `refs/remotes/origin/HEAD` resolves to `origin/main`.
- FILE VERIFIED: current target `HEAD` is
  `cadd9f69474ccb46ee21d83d56626532e0d01c90`.
- INFERENCE: default branch is `main` based on local remote HEAD. I did not
  contact GitHub live.

### 2. Existing AGENTS.md / CLAUDE.md / README.md status
- FILE VERIFIED: `AGENTS.md` exists and is a substantial operational handbook.
  It points to `docs/GOVERNANCE.md` as canonical, then `CLAUDE.md`, then
  contracts/north-star docs.
- FILE VERIFIED: `CLAUDE.md` exists and is a short compatibility index. It
  points primary memory and scoped rules to old
  `denver-songwriters-collective` paths and repeats Chrome-first browser
  validation.
- FILE VERIFIED: root `README.md` exists and describes Colorado Songwriters
  Collective as a Next.js 16 / React 19 / Supabase / Tailwind CSS v4 /
  TypeScript app.
- FILE VERIFIED: `web/README.md` exists and is mostly default Next.js README
  plus conversational event interpreter notes.
- INFERENCE: future kit adoption should merge into existing agent docs or
  reference `.agent-handoff/` from them; it should not overwrite these files.

### 3. Existing .agent-handoff/ status
- FILE VERIFIED: no tracked `.agent-handoff/` files were returned by
  `git ls-files`.
- FILE VERIFIED: `find .agent-handoff -maxdepth 3 -type f` failed with
  "No such file or directory".
- INFERENCE: target has no existing file-based handoff scaffold. A future
  extraction could create `.agent-handoff/`, but only after separate approval.

### 4. Existing .gitignore rules relevant to handoff, generated files, and secrets
- FILE VERIFIED: `.gitignore` currently ignores `.DS_Store`.
- FILE VERIFIED: `.gitignore` currently ignores `.env`, `.env.local`,
  `.env.*.local`, `.env.vercel-check`, and `.env*.local`.
- FILE VERIFIED: `.gitignore` currently ignores `node_modules/`, `.next/`,
  `out/`, `build/`, `dist/`, `/logs/`, `*.log`, `.vercel/`,
  `supabase/.temp/`, `.symphony/`, `web/.tmp/`, `flyers/`, `test files/`,
  and `cowork-workspace/`.
- FILE VERIFIED: `git check-ignore -v` confirmed ignore matches for
  `.DS_Store`, `.env.local`, `.env.vercel-check`, `node_modules/`,
  `web/.next/`, and `web/.tmp/`.
- FILE VERIFIED: `git check-ignore -v` did not report matches for
  `.agent-handoff/local/`, `.claude/worktrees/`, `.env.test`, `output/`, or
  `lane9-rmu-draft-detail-404.png`.
- FILE VERIFIED: `.env.test` is tracked.
- INFERENCE: kit `.gitignore.snippet` values are only partially present.
  `.agent-handoff/local/` is missing and `.claude/worktrees/` is missing.

### 5. Existing package/test commands and safe read-only test command
- FILE VERIFIED: root `package.json` scripts are `symphony:doctor`,
  `symphony:dry-run`, `symphony:once`, `symphony:recover-stale`, and
  `symphony:test`.
- FILE VERIFIED: `web/package.json` scripts are `dev`, `build`,
  `build:webpack`, `start`, `lint`, `test`, `test:watch`, and
  `verify:prepush`.
- FILE VERIFIED: `AGENTS.md` documents a Codex Vitest workaround that writes to
  `web/.tmp` via `TMPDIR="$PWD/.tmp"` and a TypeScript check that avoids
  `tsconfig.tsbuildinfo` by using `--incremental false`.
- FILE VERIFIED: `docs/GOVERNANCE.md` quality gates are `npm run lint`,
  `npm run test -- --run`, `npm run build`, plus `docs/SMOKE-PROD.md`; local
  pre-push is `cd web && npm run verify:prepush`.
- AGENT SUMMARY: no target tests were run.
- INFERENCE: no fully safe no-write test command was identifiable for E3-H.
  Vitest and build/lint flows may write temp/cache/build artifacts, and
  Symphony commands interact with local state/manifests or GitHub/runtime
  assumptions.

### 6. Existing CI/workflow runner conventions
- FILE VERIFIED: workflows are `.github/workflows/ci.yml`,
  `.github/workflows/test.yml`, `.github/workflows/web-tests.yml`, and
  `.github/workflows/supabase-rls-tripwire.yml`.
- FILE VERIFIED: workflows use GitHub Actions `ubuntu-latest`, Node 20, npm
  cache keyed to `web/package-lock.json`, and `npm ci` in `web`.
- FILE VERIFIED: primary `ci.yml` quality gate runs rollback SQL scanner,
  policy-change acknowledgment scanner, `npm run lint`, `npm run test`, and
  `npm run build` with dummy public Supabase env.
- FILE VERIFIED: `test.yml` is labeled legacy CI and duplicates build/test plus
  rollback scanner.
- FILE VERIFIED: `web-tests.yml` runs `npm test --silent`.
- FILE VERIFIED: `supabase-rls-tripwire.yml` installs Supabase CLI, starts
  local Postgres-only Supabase services, resets DB, runs
  `scripts/security/supabase-rls-tripwire.mjs`, writes `web/tripwire.log`, and
  uploads it as an artifact.
- INFERENCE: first kit adoption should not edit workflows; CI writes/logging
  behavior is not part of E3-H.

### 7. Existing browser/UI surface and likely browser-runner choice
- FILE VERIFIED: `README.md` describes a public web app with Happenings, Open
  Mics, DSC Events, Member Directory, Gallery, Blog, map view, and admin/member
  workflows.
- FILE VERIFIED: `web/src/app` contains many App Router pages including `/`,
  `/happenings`, `/events`, `/open-mics`, `/members`, `/venues`, `/gallery`,
  `/blog`, `/friends-of-the-collective`, and protected dashboard/admin routes.
- FILE VERIFIED: `web/src/app/(protected)/dashboard/admin` and
  `web/src/app/api/admin` exist.
- FILE VERIFIED: `AGENTS.md` and `CLAUDE.md` both require Chrome-first browser
  validation: Codex uses Codex Chrome tool, Claude Code uses Claude in Chrome
  MCP, and Playwright is not the default.
- INFERENCE: target browser-runner choice is Chrome-first, not N/A. For this
  E3-H turn only, browser verification is N/A because no browser was launched.

### 8. Candidate no-touch files/directories
- INFERENCE: no-touch by default for a first extraction:
  `.env*`, `.vercel/`, `.claude/`, `.symphony/`, `node_modules/`, `output/`,
  Lane 9 screenshots/smoke artifacts, `supabase/**`, `web/**`,
  `.github/workflows/**`, `WORKFLOW.md`, `docs/GOVERNANCE.md`,
  `docs/CONTRACTS.md`, `docs/PRODUCT_NORTH_STAR.md`, `docs/agents/**`, and
  existing `AGENTS.md` / `CLAUDE.md` / `README.md` unless explicitly scoped for
  merge edits.
- INFERENCE: all files already listed in the target dirty status should be
  treated as preexisting and no-touch unless Sami assigns that exact surface.

### 9. Candidate first experiment scope and per-experiment turn cap
- INFERENCE: safest first target experiment is scaffold-only adoption of the
  file-based handoff layer, not runtime work:
  create `.agent-handoff/PROTOCOL.md`, `.agent-handoff/COLLAB.md`,
  `.agent-handoff/turns/.gitkeep`, and an initial turn note; optionally append
  missing ignore rules only if separately authorized.
- INFERENCE: do not overwrite target `AGENTS.md`, `CLAUDE.md`, README, CI,
  web, Supabase, `.claude`, or `.symphony` in the first extraction.
- INFERENCE: candidate cap is 2 turns: Codex scaffold/extraction note, then
  Claude critique. Any follow-up fix turn should require separate approval.
- UNKNOWN: actual turn cap must be named by Sami in the future experiment
  authorization.

### 10. Whether signed governance should stay optional for first adoption
- INFERENCE: yes. The target already has mature stop-gate governance,
  single-writer rules, Symphony prototype boundaries, Supabase migration
  governance, and Chrome validation. Adding signed event governance in the
  first adoption would expand the surface beyond file-based coordination.
- INFERENCE: signed governance should remain optional until Sami authorizes an
  exact trust/event/key scope.

### 11. Which kit/v1 placeholders can be filled confidently
- FILE VERIFIED and INFERENCE: see placeholder-fill table below.

### 12. Risks before first extraction
- INFERENCE: target dirty state creates a high risk of accidental overwrite or
  blame confusion.
- INFERENCE: target `AGENTS.md` / `CLAUDE.md` are already active; copying
  templates over them would damage existing workflow knowledge.
- INFERENCE: `.gitignore` is modified and missing two kit-relevant ignore
  rules; appending needs explicit scope and a current diff review.
- INFERENCE: target has local secrets/env files present and `.env.test`
  tracked; no extraction should read or alter env files unless explicitly
  scoped.
- INFERENCE: target has `.claude/worktrees/` and `.symphony/state/manifests/`
  local orchestration surfaces; extraction must avoid them.
- INFERENCE: CI/test commands can write logs, temp files, build output, local
  Supabase state, or artifacts; E3-H correctly deferred test execution.

## Placeholder-Fill Table

| placeholder | discovered value | confidence | evidence | UNKNOWN reason if not filled |
|---|---|---:|---|---|
| `{{REPO_NAME}}` | `colorado-songwriters-collective` | High | remote URL and repo path | N/A |
| `{{GOAL}}` | Coordinate Claude/Codex collaboration for the Colorado Songwriters Collective Next.js/Supabase community platform. | Medium | root README product/tech stack | Exact collaboration goal depends on future authorization. |
| `{{PROTOCOL_PATH}}` | `.agent-handoff/PROTOCOL.md` | High | kit default; target lacks `.agent-handoff/` | N/A |
| `{{COLLAB_PATH}}` | `.agent-handoff/COLLAB.md` | High | kit default; target lacks `.agent-handoff/` | N/A |
| `{{TURN_LOG_DIR}}` | `.agent-handoff/turns/` | High | kit default; target lacks `.agent-handoff/` | N/A |
| `{{PROJECT_BRIEF_PATH}}` | Candidate: `docs/PRODUCT_NORTH_STAR.md` with `docs/CONTRACTS.md` and `docs/GOVERNANCE.md` as canonical companions. | Medium | target AGENTS/README/GOVERNANCE/CONTRACTS/NORTH_STAR | One placeholder may be too narrow for this repo's existing canonical-doc set. |
| `{{BROWSER_RUNNER_DOC_PATH_OR_NA}}` | Candidate: `AGENTS.md` browser section, with `docs/SMOKE-PROD.md` for production smoke detail. | Medium | AGENTS browser validation and SMOKE-PROD references | No dedicated target `docs/chrome-runners.md` equivalent found. |
| `{{BROWSER_RUNNER_CHOICE}}` | Codex Chrome tool for Codex; Claude in Chrome MCP for Claude Code; do not default to Playwright. | High | AGENTS.md and CLAUDE.md | N/A |
| `{{BROWSER_RUNNER_NA_REASON}}` | N/A for target adoption overall; browser surface exists. For E3-H only: read-only repo discovery, no browser launched. | High | README/web routes plus E3-H scope | N/A |
| `{{AUTOMATION_BUDGET_OR_NA}}` | `N/A` for first kit adoption unless polling/cron/webhook/heartbeat is explicitly authorized. | High | kit default and E3-H scope; target Symphony remains prototype-gated | N/A |
| `{{CURRENT_EXPERIMENT}}` | UNKNOWN | Low | future extraction not yet authorized | Must be named by Sami. |
| `{{AUTHORIZATION_BASIS}}` | UNKNOWN for extraction; E3-H authorization covers discovery only. | High | COLLAB.md E3-H authorization | Future extraction needs separate authorization. |
| `{{CURRENT_EXPERIMENT_TURN_CAP}}` | UNKNOWN; candidate is 2 turns for scaffold-only extraction plus critique. | Low | E3-H inference only | Must be named by Sami. |
| `{{TURN_CAP_EXAMPLE}}` | `2 turns` as a candidate example, not an approval. | Low | E3-H inference only | Sami must approve actual cap. |
| `{{CURRENT_OWNER}}` | UNKNOWN for future target adoption. | Low | no target `.agent-handoff/COLLAB.md` exists | Depends on next authorized turn. |
| `{{CURRENT_PHASE}}` | UNKNOWN for future target adoption. | Low | no target `.agent-handoff/COLLAB.md` exists | Depends on next authorized turn. |
| `{{LATEST_CLAUDE_RESPONSE}}` | UNKNOWN / `N/A` at bootstrap. | Medium | no target `.agent-handoff/` history | No target handoff history yet. |
| `{{LATEST_CODEX_RESPONSE}}` | UNKNOWN / `N/A` at bootstrap. | Medium | no target `.agent-handoff/` history | No target handoff history yet. |
| `{{NO_TOUCH_FILES}}` | Candidate list: `.env*`, `.vercel/`, `.claude/`, `.symphony/`, `node_modules/`, `output/`, `supabase/**`, `web/**`, `.github/workflows/**`, `WORKFLOW.md`, canonical docs, existing AGENTS/CLAUDE/README unless scoped. | Medium | status, gitignore, AGENTS, governance, workflow docs | Final no-touch list must be approved with extraction scope. |
| `{{QUESTION_OR_NONE}}` | UNKNOWN for future target adoption. | Low | no target COLLAB exists | Depends on next scope. |
| `{{NEXT_REQUEST_TO_CLAUDE}}` | UNKNOWN for future target adoption. | Low | no target COLLAB exists | Depends on next scope. |
| `{{NEXT_REQUEST_TO_CODEX}}` | UNKNOWN for future target adoption. | Low | no target COLLAB exists | Depends on next scope. |
| `{{SOURCE_URL}}` | N/A for local target discovery. | High | no external prior-art citation needed | N/A |

## Portability Findings
- Repo-local assumptions: target has existing repo-specific governance,
  agent docs, Symphony workflow, Supabase migrations, and web app surfaces.
  The kit can provide `.agent-handoff/`, but existing top-level agent docs
  require merge discipline.
- Machine/local-tool assumptions: discovery used local Git and read-only file
  inspection only. Existing `node_modules/` is present, but no install or test
  command was run.
- Browser/connector assumptions: target's standing browser runner is
  Chrome-first. E3-H browser QA is N/A because no browser surface was exercised.
- Any workaround used: none. No subagents used.

## Risks Before First Extraction
- Dirty target worktree before and after discovery.
- Existing active `AGENTS.md` / `CLAUDE.md` conflict with same-named kit
  templates.
- Missing `.agent-handoff/local/` and `.claude/worktrees/` ignore coverage.
- Existing `.gitignore` is itself dirty, so even an append-only ignore update
  needs careful pre-diff review.
- Target has `.claude`, `.symphony`, Supabase, Vercel, env, and production
  validation surfaces that must stay outside the first adoption unless
  explicitly named.
- Test commands are not no-write under this scope; validation strategy must be
  separately authorized.

## Handoff
- Next agent: Claude
- Specific ask: critique this E3-H read-only discovery before any extraction
  action. Verify the twelve discovery items, especially the dirty target state,
  no `.agent-handoff/` status, existing agent-doc collision, `.gitignore`
  gaps, deferred test execution, Chrome-first runner finding, candidate
  no-touch list, candidate first-experiment scope/cap, optional signed
  governance recommendation, placeholder table, and risks before first
  extraction. Stay read-only; do not edit files, install tools, enable
  bridges, register MCP, set up plugins, change global config, touch the
  target repo, or move any proposal to approved.
