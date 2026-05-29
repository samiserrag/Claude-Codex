# E6-KIT-DRY-RUN-001-EXEC-A — Guided Clean-Room Kit Dry-Run (Standalone Stage A Packet, v2-applied)

[Lane 1: Claude-Codex Harness | Builder: fresh-profile / fresh-home Codex (OpenAI) | Auditor: Claude (Anthropic) | Thread: E6-KIT-DRY-RUN-001-EXEC-A guided clean-room dry-run]

APPROVED PACKET SPEC — NOT AN EXECUTION TRIGGER

This file was regenerated for final format-only / block-by-block confirm-audit, then approved by Sami as the final E6-KIT-DRY-RUN-001-EXEC-A Stage A execution packet / approval-target specification and preserved on main. It is not itself an execution trigger. Existence of this file does not authorize execution (see section 6, separate-execution-authorization rule). Execution requires a separate explicit Sami execution authorization.

Packet status:
- Final approved Stage A execution packet / approval-target specification.
- Not an execution trigger by itself.
- Do not execute unless a separate explicit Sami execution authorization is present.
- Do not create or use a fresh Codex profile/home unless authorized by the separate execution authorization or by a bounded setup-prep authorization.
- Do not create a scratch repo unless authorized by the separate execution authorization.
- Do not copy kit files unless authorized by the separate execution authorization.
- Do not run Stage A commands unless authorized by the separate execution authorization.
- This standalone packet supersedes prior Stage A drafts and patch addenda for execution-spec purposes.

Packet lineage (metadata, non-operative):
- Standalone Stage A packet operating WITHIN the preserved E6-KIT-DRY-RUN-001 scope-lock turn note (PR #26, merge commit 84639b2). It does not reopen or reclassify that scope-lock.
- Regenerated from the audited base Stage A packet (sections 1–21, Max iterations = 2) with all converged corrective blocks applied through Codex + Claude packet audit under Sami-directed convergence.
- No operative instruction in this packet depends on who authored any patch round.

Packet-format rule:
- This packet body intentionally contains no nested Markdown code fences.
- If transmitted as Markdown, preserve the whole packet as plain text.
- Do not infer missing sections.
- Do not execute from a truncated packet.

Packet audit plan before approval:
- Codex audits technical feasibility and whether the packet fairly tests Codex-side side-artifact contamination.
- Claude audits protocol discipline, no-touch boundaries, and whether the packet preserves prior E6-KIT-DRY-RUN-001 scope-lock requirements.
- Sami is the only approver.
- Model consensus is not approval.

Proposed Outcome Circle name if Sami later approves:
E6-KIT-DRY-RUN-001-EXEC-A — guided clean-room kit dry-run

1. Outcome description

Run Stage A of the kit dry-run evidence ladder: a guided clean-room dry-run.

Narrow question:

Can the contents of `kit/v1/` be copied into a fresh local scratch repo and support one small manual Outcome Circle when a detailed dry-run packet is provided?

This is a guided clean-room test, not a kit-led self-sufficiency test.

This Stage A execution may support only this kind of claim if it passes:

"The kit was manually extracted into a fresh local scratch repo and operated once using an explicit guided dry-run procedure."

It does NOT prove:
- kit-led self-sufficiency
- external adoption
- stranger extraction
- production readiness
- public-alpha readiness
- legal/compliance suitability
- tamper-evidence / trust-layer hardening
- scale
- public-proof runs
- clean adopter-facing repo readiness
- public release

Stage B is separate:
- E6-KIT-DRY-RUN-001-EXEC-B will test kit-led self-sufficiency with minimal instruction.
- Stage B is not authorized by this packet.
- Stage B requires its own scope-lock / execution packet / Sami approval.
- If Stage A exposes kit defects, fix `kit/v1` before Stage B unless Sami explicitly accepts running Stage B with known friction.

OC result state and dry-run proof classification are separate.

The Outcome Circle may be `satisfied` if:
- execution evidence is complete;
- no unauthorized mutation occurred;
- all required artifacts were produced, or the correct stop condition was triggered;
- source citations are complete;
- proof quality is honestly classified.

The OC may be `satisfied` with proof classification `guided_contaminated_but_useful` if evidence is complete and classification is honest. The OC may NOT be `satisfied` with proof classification `invalid_proof`.

A `guided_contaminated_but_useful` result does not prove kit-only extractability, but it may still be a successful diagnostic result because it identifies which support still lives outside `kit/v1`.

The OC result should be `failed`, `blocker`, `needs_human`, or `needs_gpt` when the run violates scope, lacks evidence, cannot classify material sources, uses undeclared hidden support, proceeds after an isolation failure without approval, or receives proof classification `invalid_proof`.

A pre-scratch stop for missing setup, existing scratch path, unreadable source path, unwritable scratch parent, or unresolved contamination should return `needs_human` or `blocker`, not `satisfied`.

Canonical vocabulary (do not conflate):
- OC result states are only: `satisfied`, `needs_revision`, `max_iterations_reached`, `blocker`, `scope_conflict`, `needs_gpt`, `needs_human`, `failed`, `interrupted`.
- Dry-run proof classifications are only: `guided_clean`, `guided_clean_enough`, `guided_contaminated_but_useful`, `invalid_proof`.
- `invalid_proof` is a proof classification, not an OC result state.

2. Rubric

PASS for Stage A execution requires all of the following:

A. Entry and clean-room setup discipline
- `claude-codex` working tree is clean before execution.
- PR #26 is already preserved on main (containment verified per section 8A).
- Before execution, Sami must choose exactly one clean-room mechanism:
  - Mode A: fresh `CODEX_HOME` / fresh Codex profile, with exact path named; OR
  - Mode B: separate OS user, with equivalent skill/memory paths named.
- Mode A is preferred when a fresh `CODEX_HOME` is available and structurally verifiable.
- Main-profile quarantine is not an approved Stage A clean-room mechanism. Stage A supports only Mode A or Mode B. If neither is available or structurally verifiable, stop with `needs_human`.
- Freshness is structurally verified, not merely asserted.
- Fresh profile/home has no methodology-specific skills or memories visible.
- Prefer starting fresh Codex from a neutral working directory outside `claude-codex`.
- Use absolute source and scratch paths.
- If fresh Codex must start inside `claude-codex` and root `AGENTS.md` or root `CLAUDE.md` is loaded, record that as source-repo side context.
- Visibility alone is not failure.
- If root `claude-codex/AGENTS.md`, root `CLAUDE.md`, `.agent-handoff/COLLAB.md`, or historical turn notes are visible but do not materially shape scratch procedure, record them as source-repo side context.
- If root `claude-codex/AGENTS.md`, root `CLAUDE.md`, `.agent-handoff/COLLAB.md`, or historical turn notes materially supply procedure, vocabulary, pass/fail criteria, routing, repair steps, artifact shape, source-citation logic, or claim classification not present in copied kit files or this packet, classify as `guided_contaminated_but_useful`.
- If materiality is unclear, stop with `needs_gpt` or `needs_human`.
- If source-repo side context is visible but non-material, classification cannot be `guided_clean` unless the auditor agrees it was non-material.

Execution has two phases:

Phase A (scratch):
- Run from a neutral working directory outside `claude-codex` if possible.
- Use absolute `SOURCE` and `SCRATCH` paths.
- Do not rely on source-repo dogfood files for scratch procedure.
- Do not read or use source-repo `AGENTS.md`, `CLAUDE.md`, `.agent-handoff/COLLAB.md`, or historical turn notes as procedure sources during scratch work unless they are explicitly source-cited and classification-limited.
- Scratch artifacts and the raw per-step source-citation table must be complete before switching into `claude-codex`.

Phase B (source-report):
- After scratch artifacts are complete, switch to `claude-codex` only to write the allowed report files:
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-A-codex-guided-clean-room-execution-iter-1.md`
- Source-repo `AGENTS.md`, `CLAUDE.md`, `.agent-handoff/COLLAB.md`, or historical turn notes loaded only during source-reporting must be recorded as source-report side context.
- Source-report side context contaminates the scratch proof only if it shaped scratch artifacts, scratch procedure, source citations, or claim classification.
- Once Phase B begins, scratch artifacts and the source-citation table are FROZEN; the builder must not retroactively edit scratch artifacts using `claude-codex` context.

If fresh Codex cannot both:
- run Phase A cleanly, and
- later write the allowed `claude-codex` report files without permission broadening,

then stop with `needs_human`.

Required structural checks, adapted only within the approved setup mode:
- If using fresh `CODEX_HOME`:
  - record `CODEX_HOME`
  - list `"$CODEX_HOME/skills/"`, recording explicitly whether the directory is absent, or present-and-listed (do not normalize a failed check with `|| true`)
  - list `"$CODEX_HOME/memories/"`, recording explicitly whether the directory is absent, or present-and-listed (do not normalize a failed check with `|| true`)
  - confirm `claude-codex-outcome-circle` absent from the active skills path
  - confirm repo-specific Codex memory absent or not consulted
  - verify source repo path is readable: `/Users/samiserrag/Documents/GitHub/claude-codex`
  - Preflight verifies only: scratch parent `/private/tmp` is writable, and scratch target `/private/tmp/claude-codex-kit-dry-run-001` is absent. Do not create the scratch target during preflight. Create it only during the scratch setup phase, after all preflight checks pass.
- If using separate OS user:
  - record OS user / home path
  - list the equivalent skills directory, recording explicitly whether absent or present-and-listed (no `|| true`)
  - list the equivalent memories directory, recording explicitly whether absent or present-and-listed (no `|| true`)
  - confirm `claude-codex-outcome-circle` absent from the active profile
  - confirm repo-specific Codex memory absent or not consulted
  - verify source repo path is readable: `/Users/samiserrag/Documents/GitHub/claude-codex`
  - Preflight verifies only: scratch parent `/private/tmp` is writable, and scratch target `/private/tmp/claude-codex-kit-dry-run-001` is absent. Do not create the scratch target during preflight; create it only during scratch setup.
  - do not run `chmod`
  - do not run `chown`
  - do not broaden file permissions
  - do not move source repo files
  - do not copy the source repo to a new location
  - if source readability or scratch parent writability fails, stop with `needs_human`
- If setup evidence is incomplete, stop with `needs_human`.

Structural listing constrains classification:
- The structural listing of active skills and memories directories constrains classification. If a methodology-specific skill or repo-specific memory is present in the active profile/home or available to the execution thread, `guided_clean` is unavailable unless the auditor can verify it was demonstrably unavailable to the execution thread.
- If it is invoked or materially shapes scratch work, classify `guided_contaminated_but_useful`.
- If it is used but undeclared, classify `invalid_proof`.
- For each directory, record whether it is absent or present-and-listed; do not normalize a failed check with `|| true`.

Clean classification reachability:
- `guided_clean` requires verified methodology-skill isolation and verified repo-specific-memory isolation.
- If memory isolation is not performed or not verifiable, the realistic best classification is `guided_clean_enough`, not `guided_clean`. Under a verified-empty fresh memories directory, isolation IS verified and `guided_clean` is reachable.
- `guided_clean_enough` is a valid useful Stage A result, not a degraded failure.
- `guided_clean_enough` means Stage A produced guided clean-room evidence with residual isolation uncertainty, while still showing that all material steps came from copied kit files, this packet, or generic git convention.
- Generic platform/system/developer instructions do not by themselves contaminate the run.
- Available but unused generic/system skills do not contaminate the run by themselves.
- Invoked methodology-specific skills, repo-specific memories, source-repo dogfood instructions, or hidden side artifacts must be declared and source-classified.

B. Pre-test durable-behavior breadcrumb
Before scratch work, fresh Codex must report:

Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none
- standing rules invoked: platform/system/developer instructions; this packet; no methodology-specific or repo-specific side rules

In this breadcrumb, `skills` means active or invoked skills for this turn, not merely generic platform capabilities that are available but unused.

If any item is not `none` except standing rules:
- stop before scratch work
- run the troubleshooting tree in section 10
- do not proceed under `guided_clean` framing
- do not create scratch repo unless Sami explicitly approves contaminated diagnostic execution

After kit copy, subsequent scratch turn notes must use this breadcrumb:

Durable behavior active this turn:
- skills: none OR declared
- subagents: none OR declared
- automations: none OR declared
- memory files consulted: none OR declared
- standing rules invoked: platform/system/developer instructions; this packet; copied scratch repo files; no repo-specific dogfood instructions

C. Scratch repo setup
Define paths explicitly:

SOURCE=/Users/samiserrag/Documents/GitHub/claude-codex
SCRATCH=/private/tmp/claude-codex-kit-dry-run-001

Requirements:
- Fresh Codex should use neutral cwd outside `claude-codex` during scratch phase if possible.
- Scratch repo path is exactly: `/private/tmp/claude-codex-kit-dry-run-001`
- If `/private/tmp/claude-codex-kit-dry-run-001` already exists, stop with `needs_human`.
- Do not delete it.
- Do not overwrite it.
- Do not reuse it.
- Do not rename it.
- Do not inspect it beyond confirming that it exists.
- Any disposition of an existing scratch path requires separate exact Sami approval.
- Use the canonical `/private/tmp` form in every existence/creation check (on macOS `/tmp` resolves to `/private/tmp`; a `/tmp` string must not bypass the existing-path stop).
- Scratch repo is local/private.
- Local git is initialized inside scratch repo only.
- Scratch `.git/` must be inside: `/private/tmp/claude-codex-kit-dry-run-001/.git`
- `git remote -v` in scratch repo is empty.
- No scratch local commits in iteration 1.
- No GitHub remote is created.
- No push/publication occurs.
- Scratch repo remains in place until Claude audit closes.
- Scratch repo deletion/cleanup requires separate Sami approval.

D. Kit extraction
- Copy the contents of `kit/v1/` using the required hidden-file-preserving command.
- Copy must preserve hidden files and directories.
- Required copy command:

SOURCE=/Users/samiserrag/Documents/GitHub/claude-codex
SCRATCH=/private/tmp/claude-codex-kit-dry-run-001

cp -R "$SOURCE/kit/v1/." "$SCRATCH/"

- Do not use shell globs like `kit/v1/*`, `kit/v1/**`, or `$SOURCE/kit/v1/*`.
- Record source kit commit SHA copied.
- Record exact source path and destination path.
- Confirm scratch `.agent-handoff/` exists after copy.
- If scratch `.agent-handoff/` is absent after copy, stop because hidden-file copy failed.
- Render minimal active adopter files from templates:
  - `AGENTS.md`
  - `CLAUDE.md`
  - `.agent-handoff/PROTOCOL.md`
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/turns/`
- Record placeholder mapping used.
- Keep templates/examples available as source reference.
- Do NOT include `DASHBOARD.html`. Record: `test ! -f "$SCRATCH/DASHBOARD.html" && echo 'DASHBOARD.html absent'`. If `DASHBOARD.html` exists in scratch, classify as a defect unless Sami separately approved dashboard inclusion.
- Preserve dashboard optionality and protocol-only adoption.
- Examples remain examples, not proof.

E. First scratch Outcome Circle
Run one small manual Outcome Circle:
`E6-KIT-DRY-RUN-SCRATCH-001: one-doc project brief mirror check`

The scratch circle must create this exact `PROJECT_BRIEF.md`:

PROJECT_BRIEF.md exact content begins:

# Project Brief

This scratch repo tests whether `kit/v1` can be extracted from `claude-codex`.

The goal is one small manual Outcome Circle: verify this brief is mirrored into the active handoff state.

No public release, production claim, legal/compliance claim, trust-layer claim, or external-adoption claim is made.

The dashboard is optional and is not required for this dry-run.

PROJECT_BRIEF.md exact content ends.

The scratch circle must:
- create the exact `PROJECT_BRIEF.md`
- write a scratch Outcome Packet using copied kit guidance and this packet
- write a scratch builder turn note using copied kit template/guidance
- produce either:
  - a simulated/test auditor turn note clearly labeled as builder-produced test artifact, OR
  - an audit-path note saying independent audit remains Claude later in `claude-codex`
- draft a Human Decision Record using copied kit template/guidance
- keep `satisfied` separate from approval
- require no dashboard
- require no root `claude-codex` dogfood history

Important:
- The scratch Human Decision Record must be labeled "DRY-RUN SAMPLE — no approver authority exercised," so a sandbox artifact cannot be mistaken for a real or named approval.
- Any Codex-created scratch "auditor" note is a simulated/test artifact only.
- It is not independent audit.
- Independent audit remains Claude (per the auditor role), later, in `claude-codex`.

F. Per-material-step source citation
Every material step must cite its source as one of:
- copied kit file
- this packet, with exact section number
- generic git convention
- declared hidden side artifact
- source-repo side context
- unknown

Material steps include:
- clean-room setup verification
- fresh-thread confirmation
- model/runtime mode disclosure
- runtime instruction update check
- pre-test durable-behavior breadcrumb
- scratch path existence check
- scratch repo creation
- local git initialization
- kit copy
- hidden-file verification after copy
- template rendering
- placeholder mapping
- `PROJECT_BRIEF.md` creation
- scratch Outcome Packet creation
- scratch builder note creation
- scratch simulated/test auditor artifact or audit-path note creation
- Human Decision Record creation
- verification commands
- source-repo side-context classification
- hidden skill/memory classification
- final proof classification
- recommended kit-fix mapping
- source-report phase writeback to `claude-codex`

For every material step, record:
- step number
- action
- source category
- exact source path/section
- contamination note, if any

Rules:
- A material step without source citation is a defect.
- A material step with `unknown` source is contamination evidence.
- If a step cites "this packet," it must cite section number, such as `section 2D`.
- If a step cites source-repo root `AGENTS.md`, `CLAUDE.md`, `COLLAB.md`, or historical turn notes, classification cannot be `guided_clean`.
- If source-repo side context materially supplies procedure missing from copied kit files or this packet, classify as `guided_contaminated_but_useful`.
- If builder and auditor disagree on classification, call GPT per section 15.

G. No-touch discipline in `claude-codex`
In `claude-codex`, builder may write only:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-A-codex-guided-clean-room-execution-iter-1.md`

Builder must not edit:
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
- `.agent-handoff/advisor-notes/`
- `.agent-handoff/reflections/`
- `.agent-handoff/improvements/`
- `.mcp.json`
- historical turn notes except the one authorized EXEC-A builder note
- runtime/product files
- trust-layer files
- public-release files
- public-proof-run files
- clean adopter repo files
- pilot repo
- live Open Mic Colorado
- memory files
- skills
- subagents
- automations
- scheduled checks
- NanoClaw files
- CommonGround files
- MCP files
- Notion files
- plugin files
- global config files
- unrelated files

Also:
- no commit, push, branch, PR, or merge in `claude-codex`
- no historical turn-note rewrite
- no `.mcp.json`
- no NanoClaw / CommonGround / MCP / Notion / plugin / global config files
- no network access and no dependency installs during scratch execution; any step that requires network or install is a defect, must be source-classified, and cannot be classified `guided_clean`
- `.agent-handoff/tools/alert-state.sh` remains 6519 bytes
- dashboard-design stash remains preserved, not popped/dropped

H. Claim classification
Builder must classify result as one of:

1. `guided_clean`
   - fresh profile/home structurally verified
   - methodology-specific skill isolation verified
   - repo-specific memory isolation verified
   - no source-repo dogfood instructions materially shaped scratch procedure
   - every material step cites copied kit files, this packet by section, or generic git convention

2. `guided_clean_enough`
   - fresh profile/home mostly verified, but memory isolation or generic platform context cannot be fully proven
   - no methodology-specific hidden artifact supplied material procedure
   - no source-repo dogfood instruction materially supplied missing procedure
   - every material step is source-cited
   - supports only a qualified guided manual extractability claim
   - valid useful Stage A result, not a degraded failure

3. `guided_contaminated_but_useful`
   - hidden or side artifact supplied missing procedure, vocabulary, criteria, routing, or repair steps
   - source-repo root `AGENTS.md`, `CLAUDE.md`, `COLLAB.md`, or historical turn notes materially supplied procedure not present in copied kit files or this packet
   - output is still useful to identify what `kit/v1` lacks

4. `invalid_proof`
   - hidden skill/memory used but undeclared
   - material steps have unknown source
   - work proceeded after isolation failure without Sami approval
   - agent cannot classify what shaped material work

Auditor may override classification.
If builder and auditor disagree on classification, call GPT per section 15.

3. Allowed files and locations

In `claude-codex`, builder may write only:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-A-codex-guided-clean-room-execution-iter-1.md`

In scratch repo, builder may create/modify only:
- `/private/tmp/claude-codex-kit-dry-run-001/**`
- local `.git/` inside that scratch repo
- copied/rendered kit files
- scratch `PROJECT_BRIEF.md`
- scratch `.agent-handoff/**`
- scratch turn notes
- scratch Human Decision Record

Scratch local git commits:
- forbidden in iteration 1
- require separate Sami approval if later desired

No remote creation.
No push.

Auditor may later write in `claude-codex`:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-A-claude-audit-guided-clean-room-execution-iter-1.md`

4. No-touch list

Do not edit in `claude-codex`:
- every path listed in section 2G no-touch list
- any file in `.agent-handoff/turns/` except the authorized EXEC-A builder note
- any file outside `claude-codex` except the approved scratch repo path
- any profile/skill/memory files from inside builder execution

Fresh profile/home setup is a Sami local-tooling precondition, not a builder mutation.

Do not:
- commit in `claude-codex`
- push in `claude-codex`
- branch in `claude-codex`
- open PR in `claude-codex`
- merge in `claude-codex`
- rewrite historical turn notes
- pop/drop dashboard-design stash
- create or edit `.mcp.json`
- create NanoClaw/CommonGround/MCP/Notion/plugin/global config files
- fetch network resources or install dependencies during scratch execution
- run `chmod`, `chown`, or permission-broadening commands for source repo access
- move source repo files
- copy the whole source repo to a new location

5. Max iterations

2.

Iteration 2 may only correct:
- failed kit copy/rendering
- missing source citation
- missing breadcrumb
- incomplete scratch Outcome Circle artifact
- missing Human Decision Record
- incorrect claim classification
- auditor-identified dry-run evidence defect

Iteration 2 may not:
- edit `claude-codex` kit files
- publish anything
- create a remote
- create a scratch local commit
- broaden the dry-run
- create skills/memory/automations
- run public-proof circles
- start release work
- start Stage B

6. Builder

Builder:
- Fresh-profile / fresh-home Codex

Builder cannot grade own work.

Preconditions:
- Fresh Codex profile/home or separate OS user must be established before execution.
- Sami must provide the chosen setup mode and path evidence in the execution prompt or builder note.
- The active Codex environment must not load `claude-codex-outcome-circle`.
- The active Codex environment must not consult repo-specific Codex memory.
- If structural freshness cannot be verified, stop with `needs_human`.
- A new chat tab alone is not sufficient.
- Fresh-thread isolation: execution must start in a fresh Codex thread with no prior dogfood conversation context. The execution thread may receive only: the final approved Stage A packet, Sami's setup-mode evidence, the absolute source path, and the absolute scratch path. It must not receive prior `claude-codex` conversation history, previous dry-run packet drafts, previous audit debates, current-thread context, or summaries of dogfood decisions beyond what is in the final approved packet. If fresh-thread isolation cannot be established, stop with `needs_human`. A fresh profile with a contaminated thread is `invalid_proof`.
- Separate execution-authorization trigger: execution may begin only from a prompt that contains a distinct Sami execution authorization. The existence of this packet is not an execution trigger. If the packet arrives without a separate explicit Sami execution authorization, do not execute; treat it as audit/design input only.
- Model/runtime mode disclosure (recorded per section 8, see Model/runtime mode block): autonomous/parallel workflow mode, subagents/sub-sessions, and mid-task system/developer/runtime instruction updates are not allowed for this Stage A run unless explicitly listed in the final approved packet.
- If Codex starts in `claude-codex` and source root `AGENTS.md` / `CLAUDE.md` auto-loads, the run must record that side context and classification cannot be `guided_clean` if those files materially shape the scratch procedure.

7. Auditor / grader

Auditor:
- Claude Code

Auditor must independently verify:
- exact files changed in `claude-codex`
- no `claude-codex` no-touch drift
- scratch repo path and contents
- scratch repo local git state
- scratch `.git/` inside scratch path only
- `git remote -v` empty in scratch repo
- no scratch local commits
- kit copy/rendering
- hidden-file copy preservation
- scratch `.agent-handoff/` exists
- all scratch artifacts
- source citation per material step
- durable-behavior breadcrumb in every relevant turn note
- model/runtime mode disclosure recorded
- fresh-thread isolation evidence
- fresh profile/home evidence
- whether root `AGENTS.md` / `CLAUDE.md` / `COLLAB.md` or historical turn notes materially shaped the run
- `guided_clean` / `guided_clean_enough` / `guided_contaminated_but_useful` / `invalid_proof` classification
- no public release / public proof / trust / dashboard design / clean repo work

8. Pass evidence

Builder must record:

A. Entry evidence in `claude-codex`
- `git rev-parse HEAD`
- `git status --short --branch --untracked-files=all`
- `git stash list | head -5`
- `find .agent-handoff -name '* 2.md' -print`
- `git diff --check`
- `test ! -f .mcp.json && echo ".mcp.json absent"`
- `stat -f%z .agent-handoff/tools/alert-state.sh` or equivalent; expected 6519 bytes
- PR #26 containment: HEAD is `84639b2` or descends from it (e.g., `git merge-base --is-ancestor 84639b2 HEAD` succeeds), or `git log --oneline --decorate -20` shows the PR #26 merge. If containment cannot be verified, stop with `needs_human`.
- dashboard-design stash present by name in `git stash list`: `defer dashboard design concepts gitignore workfolder`. Do not pop, drop, inspect, or depend on the stash. Do not include `.gitignore` or `.design-concepts/` in this run.

B. Fresh profile/home evidence
Record:
- setup mode chosen by Sami:
  - `fresh CODEX_HOME/profile`, OR
  - `separate OS user`
- profile/home path if applicable
- neutral cwd used, if applicable
- source repo absolute path
- scratch repo absolute path
- source repo readability check
- scratch parent writability check
- scratch target absence check (preflight does not create the target)
- skills directory listing (explicitly absent or present-and-listed; no `|| true`)
- memories directory listing (explicitly absent or present-and-listed; no `|| true`)
- confirmation `claude-codex-outcome-circle` absent from active profile/home or demonstrably unavailable to the execution thread
- confirmation repo-specific memory absent or not consulted
- freshness attestation: structural fresh-profile/home evidence recorded in the builder note, with skills and memories directories recorded as absent or present-and-listed and methodology-specific skills / repo-specific memories absent or demonstrably unavailable to the execution thread, OR Sami timestamped attestation recorded in the builder note
- pre-test breadcrumb timestamp

Model/runtime mode disclosure (record before scratch work):
Model/runtime mode active this turn:
- model/client:
- effort/verbosity level (if applicable):
- autonomous/parallel workflow mode active (any equivalent): yes/no/unknown
- subagents/sub-sessions active: yes/no/unknown
- mid-task system/developer/runtime instruction updates allowed: yes/no
- mid-task system/developer/runtime instruction updates observed: yes/no

For E6-KIT-DRY-RUN-001-EXEC-A:
- autonomous/parallel workflow mode is not allowed
- subagents/sub-sessions are not allowed
- mid-task system/developer/runtime instruction updates are not allowed unless explicitly listed in the final approved packet
- effort/verbosity level is recorded only; it does not by itself contaminate the run

If autonomous workflow mode, subagents, or mid-task runtime instruction updates are active before scratch work, stop with `needs_human` unless Sami explicitly approves contaminated diagnostic execution. If any appear after scratch work begins: record exactly what changed or appeared; source-classify it; classification cannot be `guided_clean`; classify `guided_contaminated_but_useful` if material influence is declared and bounded, or `invalid_proof` if undeclared, untraceable, or inseparable from scratch work. A vendor-specific feature name (e.g., a "dynamic workflow" or high-effort mode) is recorded under the generic categories above — the control is the mode's behavior, not the product name.

C. Pre-test breadcrumb
Before scratch work:

Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none
- standing rules invoked: platform/system/developer instructions; this packet; no methodology-specific or repo-specific side rules

D. Scratch setup
- `SOURCE=/Users/samiserrag/Documents/GitHub/claude-codex`
- `SCRATCH=/private/tmp/claude-codex-kit-dry-run-001`
- proof scratch path was absent before execution
- if scratch path existed, stop evidence records `needs_human`
- source repo readability check
- scratch parent writability check
- files created/copied
- exact commands run
- source kit commit SHA
- local git status
- `git -C "$SCRATCH" rev-parse --show-toplevel`; it must resolve exactly to `/private/tmp/claude-codex-kit-dry-run-001`
- `git -C "$SCRATCH" remote -v` output; it must be empty
- confirmation no scratch local commits in iteration 1; acceptable proof is `git -C "$SCRATCH" log` returning no commits (e.g., "does not have any commits yet")
- confirmation scratch `.git/` exists only under `$SCRATCH/.git`

E. Kit extraction evidence
- exact copy command: `cp -R "$SOURCE/kit/v1/." "$SCRATCH/"`
- source path
- destination path
- hidden file check after copy:
  - confirm `$SCRATCH/.agent-handoff/` exists
  - confirm expected hidden kit paths/files exist if present in source
- placeholder mapping used
- rendered active files list
- `DASHBOARD.html` absence check: `test ! -f "$SCRATCH/DASHBOARD.html" && echo 'DASHBOARD.html absent'`
- examples remain examples, not proof

F. Per-step source-citation table
For each material step:
- step
- action
- source category
- exact source path/section
- contamination note if any

G. Scratch Outcome Circle evidence
- scratch Outcome Packet
- scratch `PROJECT_BRIEF.md`
- scratch builder note
- scratch simulated/test auditor note or audit-path note
- scratch Human Decision Record (labeled "DRY-RUN SAMPLE — no approver authority exercised")
- pass/fail table
- result classification
- source kit commit SHA from `claude-codex` HEAD at time of copy
- placeholder mapping table of `{{PLACEHOLDER}}` to substituted value

H. Scope-lock return package (section K lineage)
Return:
- scratch repo path
- source kit commit SHA copied
- files created
- exact commands run
- placeholder mapping used
- Outcome Packet used
- builder/auditor test artifact excerpts or full copies
- pass/fail table
- hidden skill/memory classification
- source-repo side-context classification
- defects found
- recommended kit fixes mapped to source kit files
- what claims remain unearned

I. Claim ladder classification
- `guided_clean` / `guided_clean_enough` / `guided_contaminated_but_useful` / `invalid_proof`
- rationale
- what claim is now allowed
- what claim remains unearned
- recommended kit fixes mapped to source kit files if defects are found
- whether Stage B is recommended, blocked pending kit fixes, or requires GPT/Sami decision

J. Post-run no-touch checks in `claude-codex`
- `git status --short --branch --untracked-files=all`; allowed output is the branch line plus only:
  - ` M .agent-handoff/COLLAB.md`
  - `?? .agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-A-codex-guided-clean-room-execution-iter-1.md`
  - If any other file is modified, deleted, staged, or untracked in `claude-codex`, stop with `blocker`.
- `git diff --check`
- `git diff -- README.md START_HERE.md AGENTS.md CLAUDE.md`
- `git diff -- kit/v1`
- `git diff -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md`
- `git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html`
- `git diff -- .gitignore`
- `git stash list | head -5`; confirm dashboard-design stash still present by name
- `test ! -d .design-concepts && echo ".design-concepts absent"`
- `test ! -f .mcp.json && echo ".mcp.json absent"`
- `find .agent-handoff -name '* 2.md' -print`
- confirm no historical turn notes rewritten
- confirm no NanoClaw/CommonGround/MCP/Notion/plugin/global config files created
- confirm `.agent-handoff/tools/alert-state.sh` remains 6519 bytes

9. Fresh-profile setup — Sami manual local-tooling action, outside the OC

These setup actions are not builder actions.
They happen only if Sami later approves execution.
They do not authorize execution.

Before execution, Sami must choose exactly one:
- Mode A: fresh `CODEX_HOME` / fresh Codex profile
- Mode B: separate OS user / equivalent isolated profile

Preferred setup:
- fresh Codex home/profile if Codex supports one
- separate OS user if fresh `CODEX_HOME` is unavailable or unverifiable

Required property:
- no profile-local methodology-specific skill is present in the active profile/home or available to the execution thread. Specifically, `claude-codex-outcome-circle` must be absent from the active profile/home or demonstrably unavailable to the execution thread, and no repo-specific methodology skill may be invoked or materially shape scratch work. Generic/system/bundled capabilities may exist; available but unused generic/system skills do not contaminate the run by themselves. Any invoked methodology-specific skill, repo-specific memory, source-repo dogfood instruction, or hidden side artifact must be declared and source-classified. Classification consequences of presence/availability are governed by section 2A (structural listing constrains classification).
- no repo-specific Codex memory active or consulted

Main-profile quarantine is not an approved Stage A clean-room mechanism. Do not move, restore, disable, or verify files inside the main Codex profile as a clean-room mechanism.

If neither clean-room mechanism is available or verifiable:
- stop before execution
- return `needs_human`
- do not run scratch work

If using source path from neutral cwd:
SOURCE=/Users/samiserrag/Documents/GitHub/claude-codex
SCRATCH=/private/tmp/claude-codex-kit-dry-run-001

Fresh Codex should begin outside `claude-codex` if possible.

If it cannot, root `AGENTS.md` / `CLAUDE.md` auto-load must be recorded as source-repo side context.

Future execution lifecycle — only if Sami explicitly approves execution:
- If Codex is relaunched into the fresh profile/home, record either structural fresh-profile evidence or Sami timestamped attestation.
- Restore or cleanup actions are not authorized by this packet unless explicitly listed by Sami.
- Scratch repo deletion/cleanup is not authorized by this packet; preserve it locally until Claude audit and later Sami disposition.

10. Troubleshooting if pre-test reveals contamination

If methodology skill appears active:
1. Stop before scratch work.
2. Fully quit and relaunch fresh Codex (into the fresh `CODEX_HOME`/profile or separate OS user).
3. Re-test breadcrumb.
4. Re-check active profile/home skills directory.
5. If still active, classify environment as contaminated by construction.
6. Proceed only if Sami explicitly approves contaminated diagnostic execution.
7. Otherwise stop with `needs_human`.

If memory appears active or consulted:
1. Stop before scratch work.
2. Re-check active profile/home memory directory.
3. If memory cannot be verified absent, classification cannot exceed `guided_clean_enough`.
4. If repo-specific memory is active, classify contaminated by construction.
5. Proceed only if Sami explicitly approves contaminated diagnostic execution.
6. Otherwise stop with `needs_human`.

If source-repo root `AGENTS.md`, root `CLAUDE.md`, `COLLAB.md`, or historical turn notes auto-load or materially shape scratch procedure:
1. Record exact file(s) and effect.
2. If visible but non-material, classification cannot be `guided_clean` unless auditor agrees non-material.
3. If material, classify as `guided_contaminated_but_useful`.
4. If unknown whether material, stop with `needs_gpt` or `needs_human`.

If autonomous workflow mode, subagents, or mid-task runtime instruction updates appear active:
1. Stop before scratch work.
2. Record exactly what is active.
3. Proceed only if Sami explicitly approves contaminated diagnostic execution.
4. Otherwise stop with `needs_human`.

If hidden artifact is unknown or undisclosed:
- stop with `needs_human`
- do not run scratch work
- if scratch work already occurred, classification is `invalid_proof`

If scratch path already exists:
- stop with `needs_human`
- do not delete, overwrite, rename, inspect beyond existence, or reuse without separate exact Sami approval

If separate OS user lacks source readability or scratch parent writability:
- stop with `needs_human`
- do not run `chmod`, `chown`, permission-broadening commands, or source repo moves

11. Success criteria

Minimum success:
- scratch repo initialized locally
- no remote exists
- no scratch local commits
- scratch `.git/` is inside scratch path only
- contents of `kit/v1/` copied as source reference with hidden files preserved
- scratch `.agent-handoff/` exists
- minimal active files rendered
- source kit commit SHA recorded
- placeholder mapping recorded
- one small scratch Outcome Circle packet written from kit guidance and this packet
- exact `PROJECT_BRIEF.md` from section 2E created
- builder turn note produced using kit template/guidance
- simulated/test auditor artifact or audit-path note produced using kit template/guidance
- Human Decision Record drafted (labeled "DRY-RUN SAMPLE — no approver authority exercised")
- `satisfied` remains separate from approval
- no dashboard required
- no hard-coded Sami / Claude / Codex / GPT-5.5 role names required in reusable scratch protocol
- no public/production claims made
- hidden skill/memory reliance classified
- source-repo side context classified
- model/runtime mode disclosed
- examples remain examples, not proof
- OC result state and proof classification both reported separately

12. Failure criteria

Failures include:
- scratch repo cannot initialize from kit docs + guided packet
- scratch repo already exists and no disposition approval exists
- scratch repo needs `claude-codex` dogfood history to proceed
- root source-repo `AGENTS.md`, `CLAUDE.md`, `COLLAB.md`, or historical turn notes materially supply missing procedure
- hard-coded local paths or personal names required in reusable scratch protocol
- model-specific roles required in reusable scratch protocol
- dashboard becomes required
- valid Outcome Packet cannot be produced
- valid turn note cannot be produced
- Human Decision Record cannot be drafted
- approval boundary collapses into `satisfied`
- hidden skill/memory materially supplies missing process
- source citations are missing or unknown
- network access or dependency install is required during scratch execution
- public/production claims appear
- scratch remote created
- scratch local commit created without explicit approval
- dry-run needs broader scope because kit guidance is unclear
- any `claude-codex` no-touch path changes
- historical turn notes rewritten
- source kit commit SHA / placeholder mapping / kit-fix return package missing
- source repo readability or scratch parent writability requires permission broadening

13. Stage transition gate

If Stage A result is `guided_clean` or `guided_clean_enough`:
- recommend scoping Stage B kit-led clean-room dry-run as the next kit-proof track
- Stage B is not authorized by Stage A
- Stage B requires its own scope-lock + Sami approval
- stranger comprehension test may be scoped in parallel

If Stage A result is `guided_contaminated_but_useful`:
- recommend kit fix OC before Stage B
- defects should be mapped to `kit/v1` source files
- likely next sequence: Stage A guided dry-run -> E6-KIT-001-FIX-002 kit fix OC -> Stage B kit-led dry-run
- Stage B should wait until fixes land or known friction is explicitly accepted

If Stage A result is `invalid_proof`:
- do not proceed to Stage B
- call GPT/Sami for revised proof design

Stranger comprehension test:
- may be scoped in parallel after Stage A
- does not depend on Stage B
- must have its own packet with:
  - 10-minute enforced timebox
  - recording method
  - auditor / answer-key method
  - tester count
  - failure handling

14. When the human approver is called back

Call the human approver for:
- missing fresh profile/home
- pre-test contamination
- hidden skill/memory ambiguity
- source-repo side-context ambiguity
- missing memory-path clarity
- existing scratch path
- separate OS user source-readability or scratch-writability failure
- autonomous workflow mode / subagents / mid-task runtime instruction updates active
- whether to proceed with contaminated diagnostic run
- any scratch repo remote creation
- any push/publication
- any scratch local commit request
- any `claude-codex` kit edit
- any broader dry-run scope
- any public-proof run
- any public release / launch / top-of-funnel decision
- any trust-layer implementation
- any memory/skill/automation creation
- any no-touch drift
- blocker / failed / max iterations / scope conflict / ambiguous state
- final approval, because `satisfied` is not approval

15. When GPT is called back

Call GPT for:
- Codex/Claude disagreement
- contamination classification disagreement
- source-repo side-context classification disagreement
- result-state vs proof-classification ambiguity
- claim-boundary uncertainty
- whether contaminated result still supports a narrow public claim
- whether to run Stage B next
- whether to run a fresh-different-model second-pass control
- whether to run stranger comprehension in parallel
- release-readiness sequencing after dry-run preservation
- any ambiguity that would otherwise expand the dry-run

16. Commit/push rule

Inside `claude-codex`:
- no commit
- no branch
- no PR
- no merge
- no push

Inside scratch repo:
- local git init is allowed
- local commits are forbidden in iteration 1
- no remote
- no push
- no GitHub repo creation

Any preservation PR in `claude-codex` requires separate Sami approval.

17. Artifact visibility

Local-only during execution.

Scratch repo remains local/private at: `/private/tmp/claude-codex-kit-dry-run-001`

Scratch repo remains until Claude audit closes.
Scratch deletion requires separate Sami approval.

Evidence is returned to `claude-codex` through:
- builder execution turn note
- later Claude audit turn note

18. Branch/PR policy

No branch/PR in `claude-codex`.

No GitHub remote/PR for scratch repo.

19. Optional later controls

Stage B:
- kit-led clean-room dry-run
- same `PROJECT_BRIEF.md` task
- minimal instruction
- separate scope-lock + execution packet

Cross-model control:
- different model/session
- different directory
- copied kit files
- same task
- separate OC only

Stranger comprehension test:
- separate packet
- 10-minute enforced timebox
- defined questions and pass/fail criteria
- explicit recording mechanism
- one tester minimum; two or three stronger
- no release decision implied

20. Final packet-format and approval-safety check

Before Sami approval, the auditor must confirm:
- the approval artifact is ONE standalone Stage A packet with all converged corrective blocks applied, not a patch/addendum bundle and not "base packet plus mental patch"
- the applied standalone packet has been compared block-by-block against the converged corrective patch, confirming faithful application with no dropped or drifted block
- operative instructions contain no patch-drafting / authoring chatter (e.g., "Claude-authored", "Codex confirm-audit", patch-round history); necessary builder/auditor role assignments and historical/audit metadata are retained; no operative instruction depends on who authored any patch
- creating the merged standalone packet as a repo file is a separate repo edit requiring exact Sami authorization naming the allowed path
- no malformed fences and no truncated sections
- all sections through Safety Lines and Hard Stop are present
- the Max iterations section value is exactly 2
- no main-profile quarantine path remains
- fresh-thread isolation is required
- scratch/source-report phase split and scratch-freeze are present
- the existing scratch-path stop rule is present and preflight does not pre-create the scratch path
- no `chmod`, `chown`, permission-broadening, source-repo move, or source-repo copy is authorized
- the source-repo `AGENTS.md` / `CLAUDE.md` visibility-vs-materiality rule is present
- generic/system instructions and unused generic skills are not treated as contamination by themselves
- result-state vs proof-classification separation is present and `invalid_proof` appears only as a proof classification
- model/runtime mode disclosure (section 8B) is present
- a separate Sami execution authorization is required to begin execution
- no wording implies dry-run execution has already been approved
- the operative packet can be followed without ambiguity

If packet formatting is malformed, if sections are truncated, or if the packet cannot be resolved into a single operative instruction set:
- stop with `needs_human`
- do not infer missing content
- do not execute

21. Safety lines

- `satisfied` is not approval.
- Auditor pass is not approval.
- Model consensus is not approval.
- OC result state is not the same as dry-run proof classification.
- `invalid_proof` is a proof classification, not an OC result state.
- Guided dry-run execution is not public release.
- Guided dry-run execution is not external adoption.
- Guided dry-run execution is not public-proof run.
- Guided dry-run does not prove kit-led self-sufficiency.
- Guided dry-run does not prove production readiness.
- Kit extractability is not proven until the dry-run result is classified.
- Clean Stage A supports only a narrow guided manual extractability claim.
- `guided_clean_enough` supports only a qualified guided manual extractability claim.
- Contaminated result is useful evidence, not failure.
- Hidden skill/memory must be declared and source-classified.
- Source-repo dogfood side context must be declared and source-classified.
- Visibility alone is not failure; material influence is what changes classification.
- Available generic/system skills do not contaminate the run unless invoked or material.
- Autonomous workflow mode, subagents, and mid-task runtime instruction updates must be disclosed and source-classified.
- Memory is context, not authority.
- Skill proposal is not approval.
- Durable behavior requires human approval.
- Builder cannot grade own work.
- Auditor must search for failure modes.

Result states for the execution OC (the only valid OC result states):
`satisfied`, `needs_revision`, `max_iterations_reached`, `blocker`, `scope_conflict`, `needs_gpt`, `needs_human`, `failed`, `interrupted`.

Dry-run proof classifications (the only valid proof classifications):
`guided_clean`, `guided_clean_enough`, `guided_contaminated_but_useful`, `invalid_proof`.

`invalid_proof` is a proof classification, not an OC result state.

Hard stop after builder report for Claude audit.

END OF STANDALONE STAGE A PACKET (v2-applied approved packet spec — execution requires separate explicit Sami authorization).
