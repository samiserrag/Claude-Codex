# E3-I - Codex Colorado extraction design

## Agent
Codex

## Phase
architecture

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis
and Portability Findings per the active `PROTOCOL.md` additions. This is a
design-only turn for the first safe `kit/v1` extraction into
`colorado-songwriters-collective`. It does not write to that target repo,
create target directories, install tools, run target tests, enable bridges,
register MCP, set up plugins, modify global config, edit signed
trust/event/private-key files, stage, commit, push, create a branch, open a PR,
or move any proposal to approved beyond recording Sami's exact E3-I
authorization in this repo's `COLLAB.md`.

## Files touched this turn
- `.agent-handoff/turns/E3-I-codex-colorado-extraction-design.md` (created)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)

## Decisions (binding)
- E3-H is accepted as a successful read-only discovery turn per Sami's
  authorization.
- E3-I is design-only. No files are written in
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective`.
- The recommended first extraction remains scaffold-only and additive under a
  new target `.agent-handoff/` directory.
- The first extraction may proceed while the target repo is dirty only if the
  later E3-K authorization names the exact write set and that write set avoids
  every current dirty target surface listed below.
- `AGENTS.md` and `CLAUDE.md` are merge surfaces in general but no-touch for
  the first extraction implementation. Do not copy `AGENTS.md.template` or
  `CLAUDE.md.template` in E3-K.
- `.gitignore` has a safe future patch shape, but it should be deferred from
  the first extraction because target `.gitignore` is already dirty.
- Signed governance remains optional for first adoption.
- Browser runner value for future target collaboration is Chrome-first:
  Codex Chrome tool for Codex, Claude in Chrome MCP for Claude Code, do not
  default to Playwright.
- Automation budget is `N/A` unless separately approved.
- Proposed E3-K implementation turn cap, if later authorized: 1 Codex
  implementation turn, followed by E3-L Claude critique. No fix turn or
  cleanup turn without separate approval.
- Subagents were not used. The design follows E3-H plus the E3-H Claude
  critique, and the scoped design questions were answerable directly.

## Open questions for the other agent
- Does Claude agree that first extraction should create only the six
  `.agent-handoff/` scaffold files listed below?
- Does Claude agree `.gitignore` should be deferred despite the known missing
  `.agent-handoff/local/` and `.claude/worktrees/` ignore rules?
- Does Claude agree that `AGENTS.md` and `CLAUDE.md` should remain no-touch in
  E3-K, even though they are eventual merge surfaces?

## Blockers (must-fix before continuing)
- E3-J Claude critique is required before any E3-K implementation
  authorization.
- E3-K is not authorized by E3-I. No target extraction write may happen until
  Sami separately authorizes E3-K.
- If target `.agent-handoff/` appears before E3-K, this design must be
  re-checked before implementation.
- If target dirty status changes before E3-K, the dirty-surface avoid list must
  be refreshed before implementation.
- If the sandbox blocks writes to the target repo during a later E3-K, stop and
  request the required approval or writable-root adjustment; do not work around
  the sandbox.

## Nits (suggested, not required)
- A later kit-polish turn could add a confidence column to the starter
  placeholder table pattern, following the E3-H discovery note.
- A later target-side housekeeping turn could address legacy `denver-*`
  references in target `web/package.json` and `CLAUDE.md`, but that is not kit
  extraction work.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: E3-I is design-only over repository files. I inspected docs and Git
status only and did not launch or drive a browser.

## Evidence Basis
- USER SAID: Accept E3-H as successful and authorize E3-I as the first
  extraction design turn for `colorado-songwriters-collective`.
- USER SAID: E3-I output is only this turn note and a Claude-Codex
  `COLLAB.md` handoff update.
- USER SAID: E3-I must not write to `colorado-songwriters-collective`, create
  directories there, install tools, run target tests, enable bridges, register
  MCP, set up plugins, modify global config, edit signed
  trust/event/private-key files, perform git mutations, or move proposals to
  approved except by recording this exact authorization.
- USER SAID: Use a four-turn extraction shape: E3-I design, E3-J Claude
  critique, E3-K implementation only if separately authorized, E3-L Claude
  critique.
- FILE VERIFIED: Claude-Codex started E3-I clean on `main` at
  `206ed7d2ae0954437faebaa7e66b0359f3809d67`.
- FILE VERIFIED: target `git status --short` before E3-I matches the dirty
  target surface discovered in E3-H at the default collapsed-directory status
  granularity.
- FILE VERIFIED: read active `PROTOCOL.md`, `COLLAB.md`, `docs/test-project.md`,
  `docs/chrome-runners.md`, latest turn note
  `.agent-handoff/turns/E3-H-claude-critique.md`, E3-H Codex discovery note,
  and relevant `kit/v1` templates before editing.
- FILE VERIFIED: target `.gitignore` ignores `.DS_Store` but does not ignore
  `.agent-handoff/local/` or `.claude/worktrees/`; `git check-ignore -v
  .agent-handoff/local/ .DS_Store .claude/worktrees/` reported only the
  `.DS_Store` match.
- FILE VERIFIED: target `AGENTS.md` is an active operational handbook, and
  target `CLAUDE.md` is an active compatibility index. Both must not be
  overwritten by kit templates.
- AGENT SUMMARY: E3-H and Claude's E3-H critique both support a scaffold-only
  first extraction, with `AGENTS.md`/`CLAUDE.md` as merge surfaces but no-touch
  in the first implementation.
- INFERENCE: Additive `.agent-handoff/` scaffold files avoid all current dirty
  target surfaces and make rollback simple.
- UNKNOWN: The exact E3-K authorization wording, whether E3-K will include git
  staging/commit/push, and whether the target dirty state will remain unchanged
  are unknown until Sami authorizes E3-K.

## Verification

Claude-Codex pre-E3-I `git status --short`:

```text
<clean; no output>
```

Claude-Codex branch and commit:

```text
main
206ed7d2ae0954437faebaa7e66b0359f3809d67
```

Target repo pre-E3-I `git status --short`:

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

Target repo post-E3-I `git status --short`:

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

Target status comparison:

```text
Byte-identical at `git status --short` granularity.
```

Claude-Codex post-E3-I `git status --short`:

```text
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E3-I-codex-colorado-extraction-design.md
```

Claude-Codex `git diff --check`:

```text
<no output; exit 0>
```

Target test execution:

```text
Not run. E3-I forbids target test execution.
```

## Extraction Design Decisions

### 1. Proceed while target repo is dirty?

Decision: yes, but only as an explicit-awareness constraint, not as a casual
dirty-worktree tolerance.

E3-K may proceed while the target is dirty if and only if:

- Sami separately authorizes E3-K.
- E3-K re-runs target `git status --short` before writing.
- The dirty surface is byte-identical to the E3-I/E3-H status, or any change is
  explicitly understood before writing.
- E3-K writes only the exact first-extraction files listed in decision 2.
- E3-K avoids every dirty target file/surface listed here.
- E3-K records pre/post target status and proves the only target status delta
  is the newly created `.agent-handoff/` scaffold.

Dirty target files/surfaces to avoid:

- `.gitignore`
- `AGENTS.md`
- `CLAUDE.md`
- `web/src/__tests__/ops-event-csv.test.ts`
- `web/src/__tests__/ops-venue-csv.test.ts`
- `web/src/app/api/guest/request-code/route.test.ts`
- `web/src/app/api/guest/request-code/route.ts`
- `web/src/app/guest/action/page.tsx`
- `web/src/lib/email/email.test.ts`
- `web/src/lib/email/render.ts`
- `web/src/lib/ops/eventCsvParser.ts`
- `web/src/lib/ops/venueCsvParser.ts`
- `.claude/scheduled_tasks.lock`
- `.claude/worktrees/`
- `docs/investigation/2026-04-29-symphony-orchestration-stopgate.md`
- `docs/investigation/2026-05-10-fort-collins-area-events-existing-venues-import.csv`
- `docs/investigation/assets/`
- `docs/investigation/symphony-phase-2-spec-gap 2.md`
- `docs/investigation/track1-claims 2.md`
- `docs/investigation/track1-claims 3.md`
- `docs/investigation/track2-2f0-concierge-write-gate-adr 2.md`
- `docs/investigation/track2-2l1-bola-rls-service-role-audit-report 2.md`
- `docs/investigation/track2-2l2-bola-route-resource-matrix 2.md`
- `docs/runbooks/ai-telemetry-consumption 2.md`
- `lane9-rmu-draft-detail-404.png`
- `lane9-rmu-drafts-list.png`
- `lane9-rmu-smoke-console-2026-05-03.md`
- `lane9-rmu-smoke-timeout-2026-05-03.png`
- `output/`
- `tools/symphony/test/config.test 2.mjs`
- `web/scripts/security/public-secret-exposure-scan.mjs`
- `web/src/app/guest/action/page.test.tsx`

### 2. Exact files proposed for first extraction

Target repo files proposed for E3-K, if separately authorized:

- `.agent-handoff/PROTOCOL.md` (create)
- `.agent-handoff/COLLAB.md` (create)
- `.agent-handoff/turns/.gitkeep` (create)
- `.agent-handoff/digests/.gitkeep` (create)
- `.agent-handoff/consultants/.gitkeep` (create)
- `.agent-handoff/prompts/starter-turn-note.md` (create)

Claude-Codex files that E3-K should also update for the coordination record,
if separately authorized:

- `.agent-handoff/turns/E3-K-codex-colorado-extraction-implementation.md`
  (create)
- `.agent-handoff/COLLAB.md` (handoff update only)

No other target or Claude-Codex files should be touched in E3-K unless Sami
names them in the E3-K authorization.

### 3. Exact files explicitly not touched

Target no-touch in E3-K:

- `.gitignore`
- `AGENTS.md`
- `CLAUDE.md`
- `README.md`
- `web/**`
- `supabase/**`
- `.github/**`
- `.claude/**`
- `.symphony/**`
- `.vercel/**`
- `.env`, `.env.local`, `.env.*.local`, `.env.vercel-check`, `.env*.local`,
  `.env.test`
- `node_modules/**`
- `output/**`
- `WORKFLOW.md`
- `docs/GOVERNANCE.md`
- `docs/CONTRACTS.md`
- `docs/PRODUCT_NORTH_STAR.md`
- `docs/SMOKE-PROD.md`
- `docs/agents/**`
- `docs/investigation/**`
- `docs/runbooks/**`
- `memory/**`
- `tools/symphony/**`
- any trust/event/private-key files if they appear
- every dirty target path listed in decision 1

Claude-Codex no-touch in E3-K unless separately authorized:

- `kit/v1/**`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/src/**`
- `.agent-handoff/local/**`
- `.agent-handoff/trust/**`
- `.agent-handoff/events/**`
- app/sample files
- scripts/tests

### 4. AGENTS.md and CLAUDE.md treatment

Decision: `AGENTS.md` and `CLAUDE.md` are merge surfaces in general, but
reference-only/no-touch for first extraction.

- Do not copy `kit/v1/AGENTS.md.template` into the target.
- Do not copy `kit/v1/CLAUDE.md.template` into the target.
- Do not edit target `AGENTS.md` or `CLAUDE.md` in E3-K.
- Future follow-up may propose a tiny merge patch that points existing target
  docs at `.agent-handoff/PROTOCOL.md`, but only after separate approval and
  after current target changes to those files are resolved or explicitly
  scoped around.

Reason: target `AGENTS.md` and `CLAUDE.md` already carry active operational
knowledge. Overwrite would be destructive; merge needs its own review.

### 5. .gitignore treatment

Decision: defer `.gitignore` from first extraction.

E3-I proves a safe future patch shape, but it should not be bundled into E3-K
because target `.gitignore` is already modified. A future separately approved
patch could add:

```gitignore
# Agent handoff local state
.agent-handoff/local/

# Claude local worktrees
.claude/worktrees/
```

`.DS_Store` is already ignored. E3-K must not create `.agent-handoff/local/`,
trust keys, private keys, event logs, or `.claude/worktrees/`, so deferring this
ignore patch is safe for the first scaffold-only extraction.

### 6. Exact .agent-handoff scaffold files proposed

`.agent-handoff/PROTOCOL.md`:

- Use `kit/v1/.agent-handoff/PROTOCOL.md.template` as source.
- Fill `{{REPO_NAME}}` as `colorado-songwriters-collective`.
- Fill `{{COLLAB_PATH}}` as `.agent-handoff/COLLAB.md`.
- Fill `{{TURN_LOG_DIR}}` as `.agent-handoff/turns/`.
- Replace `{{PROJECT_BRIEF_PATH}}` with a multi-doc target phrasing rather than
  a single-file fiction:
  `AGENTS.md`, `docs/GOVERNANCE.md`, `docs/PRODUCT_NORTH_STAR.md`, and
  `docs/CONTRACTS.md` define the project/work surface, with lane docs read as
  scoped by the current task.
- Keep signed governance optional.
- Keep bridges/adapters disabled.
- Keep browser QA named-runner-or-N/A.
- Keep automation budget N/A unless approved.

`.agent-handoff/COLLAB.md`:

- Use `kit/v1/.agent-handoff/COLLAB.md.template` as source.
- Fill goal as file-based Claude/Codex coordination for
  `colorado-songwriters-collective` without changing product/runtime surfaces
  unless explicitly approved.
- If created during E3-K, set current owner to Claude for E3-L critique.
- If created during E3-K, set current phase to E3-K scaffold extraction filed,
  E3-L critique pending.
- Record E3-K authorization basis exactly when E3-K is authorized; do not reuse
  E3-I as write authorization.
- Set turn cap to 1 Codex implementation turn for E3-K.
- Set browser runner to Chrome-first, with E3-K browser QA N/A because
  scaffold-only docs were created.
- Set automation budget to N/A.
- List no-touch files from decision 3.
- Next request to Claude: critique E3-K extraction implementation.
- Next request to Codex: none active.

`.agent-handoff/turns/.gitkeep`:

- Create empty file.

`.agent-handoff/digests/.gitkeep`:

- Create empty file.

`.agent-handoff/consultants/.gitkeep`:

- Create empty file.

`.agent-handoff/prompts/starter-turn-note.md`:

- Copy from `kit/v1/.agent-handoff/prompts/starter-turn-note.md`.
- Do not add target-specific claims beyond the existing placeholder guidance.

### 7. Signed governance treatment

Decision: signed governance remains optional for first adoption.

E3-K must not create:

- `.agent-handoff/local/`
- private keys
- trust registries
- event logs
- signed event envelopes
- verifier scripts

Reason: the target already has mature governance, and first adoption is meant
to prove the file-based scaffold only. Signed governance is a later layer if
Sami explicitly scopes it.

### 8. Browser runner value

Decision: Chrome-first.

Target docs state:

- Codex uses the Codex Chrome tool by default.
- Claude Code uses Claude in Chrome MCP.
- Do not default to Playwright for this repo's browser QA.

E3-K browser verification should be N/A with reason: scaffold-only file
extraction, no app behavior or browser surface changed.

### 9. Automation budget

Decision: `N/A` unless automation is separately approved.

E3-K must not add polling, cron, webhook, heartbeat, Symphony execution, MCP
registration, plugin setup, bridge enablement, or any automated runner.

### 10. Per-experiment turn cap for E3-K

Decision: if E3-K is later authorized, cap E3-K at one Codex implementation
turn.

E3-K stops after:

- creating the exact scaffold files authorized for target,
- writing the Claude-Codex E3-K implementation turn note,
- updating Claude-Codex `COLLAB.md` handoff fields,
- recording verification evidence.

No E3-K fix turn, cleanup turn, staging, commit, push, branch, PR, `.gitignore`
edit, `AGENTS.md` edit, `CLAUDE.md` edit, or target test run is included unless
Sami separately authorizes it.

### 11. Verification plan for E3-K implementation

Before target writes:

- Run `git status --short` in Claude-Codex.
- Run `git status --short` in target.
- Run `git status --short --untracked-files=all` in target for exact untracked
  scaffold evidence.
- Verify target branch and HEAD.
- Verify target `.agent-handoff/` is still absent or stop for re-design.
- Verify target dirty surface is unchanged or explicitly understood.

After target writes:

- Run `find .agent-handoff -maxdepth 3 -type f | sort` in target.
- Run `git status --short` in target and confirm the only new collapsed status
  line is `?? .agent-handoff/` beyond the pre-existing dirty surface.
- Run `git status --short --untracked-files=all` in target and confirm only the
  six authorized `.agent-handoff/` files were added beyond pre-existing dirty
  files.
- Run `git diff --name-only` in target and confirm no tracked target file was
  modified.
- Run `git status --short` in Claude-Codex and confirm only
  `.agent-handoff/COLLAB.md` plus the E3-K turn note changed.
- Run `git diff --check` in Claude-Codex.
- Do not run target tests.
- Browser QA: N/A, with reason scaffold-only docs.

Expected target `git status --short --untracked-files=all` E3-K delta:

```text
?? .agent-handoff/COLLAB.md
?? .agent-handoff/PROTOCOL.md
?? .agent-handoff/consultants/.gitkeep
?? .agent-handoff/digests/.gitkeep
?? .agent-handoff/prompts/starter-turn-note.md
?? .agent-handoff/turns/.gitkeep
```

### 12. Rollback plan

If E3-K is uncommitted and rollback is explicitly authorized:

1. Confirm target `.agent-handoff/` did not exist before E3-K.
2. Remove only the six E3-K-created `.agent-handoff/` files and empty
   directories.
3. Re-run target `git status --short` and confirm it returns to the exact
   pre-E3-K dirty status.
4. Do not touch `.gitignore`, `AGENTS.md`, `CLAUDE.md`, web, Supabase, CI,
   `.claude`, `.symphony`, env, generated, trust/event/private-key, or any
   pre-existing dirty files.

If E3-K has been committed later under separate approval, rollback should be a
normal revert of that commit, not manual edits mixed with unrelated target
state.

If rollback permission is not included in the future E3-K authorization and a
problem is found, stop and report the exact files created instead of deleting
them silently.

### 13. Risks and blockers before extraction

Risks:

- Target dirty status may change before E3-K, invalidating the avoid list.
- Target `.gitignore` does not yet ignore `.agent-handoff/local/`; E3-K avoids
  local/key files, but later signed-governance work must not proceed before
  ignore coverage is fixed.
- Target `AGENTS.md` and `CLAUDE.md` need eventual merge treatment, but first
  extraction deliberately leaves them untouched. Future agents must read E3-K
  prompt and `.agent-handoff/PROTOCOL.md` directly until a separate merge is
  approved.
- Target write permission may be blocked by the current sandbox because the
  target repo is outside Claude-Codex's writable root.
- Creating no initial target turn note means target `.agent-handoff/turns/`
  starts empty except `.gitkeep`; that is acceptable for scaffold-only
  extraction but should be called out in E3-K.
- If E3-K accidentally copies `AGENTS.md.template` or `CLAUDE.md.template`, it
  could overwrite active target instructions. This is the main design hazard.

Blockers:

- E3-J critique must land first.
- Sami must separately authorize E3-K with exact target write list.
- E3-K must refresh target status and `.agent-handoff/` absence before writing.

## Portability Findings
- Repo-local assumptions: the target already has strong governance and active
  agent docs, so the first extraction is intentionally narrower than the full
  `kit/v1` README quick start.
- Machine/local-tool assumptions: E3-I used only read-only Git/file inspection
  plus local edits in Claude-Codex. E3-K may need explicit write permission for
  the target repo if the sandbox blocks target writes.
- Browser/connector assumptions: Chrome-first is the target runner, but E3-I
  browser QA is N/A and E3-K browser QA should also be N/A for scaffold-only
  extraction.
- Any workaround used: none.

## Handoff
- Next agent: Claude
- Specific ask: critique E3-I as the extraction design for
  `colorado-songwriters-collective`. Verify whether the proposed E3-K write set
  is tight enough, whether dirty-target execution is acceptable under the
  explicit avoid list, whether `.gitignore` should remain deferred, whether
  `AGENTS.md`/`CLAUDE.md` should remain no-touch merge surfaces, whether the
  verification and rollback plans are sufficient, and whether any blocker
  should prevent Sami from later authorizing E3-K. Stay read-only: do not write
  to either repo, install tools, run target tests, enable bridges, register MCP,
  set up plugins, change global config, touch signed trust/event/private-key
  files, stage, commit, push, create a branch, open a PR, or move any proposal
  to approved.
