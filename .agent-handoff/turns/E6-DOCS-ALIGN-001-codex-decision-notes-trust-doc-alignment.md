# E6-DOCS-ALIGN-001 - Codex decision-notes + trust-layer docs alignment

## Coordinator Trigger

- State: ROUTINE
- Reason: executing Sami-approved, GPT-framed docs realignment scope; no new
  dashboard implementation, trust implementation, public release, branch, PR,
  commit, push, or Outcome Circle is started.

## Project Mode Estimate

- Dominant mode: Coordinator / docs-lock implementation
- Estimate: Coordinator 55%, Execution 35%, Human-decision-pending 10%
- Reason: the turn updates durable alignment docs and enforced protocol
  wording after pre-build convergence, then hands off for Claude audit.

## Sources Read

- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-OC-005-codex-public-positioning-judgment-iter-1.md`
- `.agent-handoff/turns/E6-OC-005-claude-public-positioning-audit-iter-1.md`
- `.agent-handoff/turns/E6-OC-005-gpt-exit-synthesis.md`
- Sami-provided GPT/Claude/Codex advisory material in the current thread on
  Decision Cockpit v1, Human Decision Notes, decision actions, trust-layer
  phases, sycophantic adaptation, prompt/API injection screening, and
  smarter-agent limitations.

## Entry State Observed

Before E6-DOCS-ALIGN-001 edits, the repo was already locally dirty from prior
OC-005 and mockup artifacts:

```text
HEAD: 64ef94a1574361e9341c8db4e57a557b318dbfce

## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/mockups/decision-cockpit-v1.html
?? .agent-handoff/mockups/decision-cockpit-v2.html
?? .agent-handoff/mockups/decision-cockpit-v3.html
?? .agent-handoff/turns/E6-OC-005-claude-public-positioning-audit-iter-1.md
?? .agent-handoff/turns/E6-OC-005-codex-public-positioning-judgment-iter-1.md
?? .agent-handoff/turns/E6-OC-005-gpt-exit-synthesis.md
```

Those pre-existing local artifacts were preserved. This turn did not edit the
mockup files or E6-OC-005 turn notes.

## Files Changed

- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`

## Exact Sections Changed

### `.agent-handoff/PROTOCOL.md`

- Updated Human Decision Packet field labels from Sami-specific wording to
  portable `human approver` wording.
- Updated Outcome Circle exit/result vocabulary from `needs_sami` to
  `needs_human`.
- Updated minimum packet field from `when Sami is called back` to `when the
  human approver is called back`.
- Added `#### Human Decision Actions And Notes`, covering:
  - `authorize_exact_action`
  - `reject_redo`
  - `reject_close`
  - `ask_coordinator`
  - `pause_pending`
  - action/state mapping
  - required-note rules
  - decision rationale shape
  - notes as descriptive, not normative
  - sycophantic-adaptation prohibition
  - attribution line for cited decision notes
  - future meta-audit patterns

### `kit/v1/.agent-handoff/PROTOCOL.md.template`

- Mirrored the same protocol wording changes as `.agent-handoff/PROTOCOL.md`.

### `.agent-handoff/OPERATING-MODEL.md`

- Refreshed doc-lock header to `E6-DOCS-ALIGN-001`.
- Reframed the one-page role model as portable role names with current local
  model assignments as instance metadata.
- Added E6-OC-002 / E6-OC-005 bootstrap observation and E6-DOCS-ALIGN-001 to
  the pivot timeline.
- Added human decision actions, action/state mapping, and note requirements to
  the Outcome Circle model.
- Updated Polaris direction to Decision Cockpit first, Kanban/Operations Board
  secondary.
- Added Human Decision Notes and sycophantic adaptation to anti-sycophancy
  discipline.
- Added phased trust model, trust wording rules, prompt/API injection scanning
  boundaries, and smarter-agent/alignment limitations to the security boundary
  model.
- Updated backlog, next-turn sequence, explicit deferrals, and source
  breadcrumbs.

### `.agent-handoff/STRATEGY.md`

- Reframed the role model as portable roles with local assignments.
- Added honest limitation language: friction + transparency, not strong
  security or an alignment solution.
- Added sycophantic-adaptation risk from Human Decision Notes.
- Expanded Minimal Dashboard into Decision Cockpit v1 direction with decision
  options, notes, approval boundary, risk context, trust footer, and avoid-list.
- Updated evidence state to record OC-002 and locally recorded OC-005 bootstrap
  milestone while noting OC-005 preservation PR status was not verified here.
- Added trust-layer phased plan, safe/unsafe public wording, blockchain
  non-MVP assessment, and prompt/API injection screening as future auditor/CI
  input.
- Updated candidate next steps and open questions.
- Added source breadcrumbs for OC-002, OC-005, and E6-DOCS-ALIGN-001.

### `.agent-handoff/COLLAB.md`

- Added a current-owner handoff for Claude audit of E6-DOCS-ALIGN-001.
- Preserved the previous OC-005 handoff content as historical context.

## Mirror Discipline Verification

Protocol wording added or changed in `.agent-handoff/PROTOCOL.md` was mirrored
into `kit/v1/.agent-handoff/PROTOCOL.md.template`.

The mirrored block is:

- Human Decision Packet field label updates.
- Outcome Circle `needs_human` result vocabulary.
- Minimum packet `human approver` callback label.
- `#### Human Decision Actions And Notes` section.

Command-level mirror verification is recorded below.

## Document Precedence Notes

- `PROTOCOL.md` remains enforced governance.
- `OPERATING-MODEL.md` remains explanatory reference / current architecture.
- `STRATEGY.md` remains positioning and alignment.
- `COLLAB.md` remains current handoff state.
- Turn notes remain history/evidence.
- Kit templates mirror enforced protocol wording where relevant.

## Decisions / Deferrals

Encoded:

- Human decision actions and action/state mapping.
- Human Decision Notes required/optional rules.
- `needs_human` portable result-state vocabulary.
- Sycophantic-adaptation threat and anti-adaptation rule.
- Trust-layer Phase 0/1/2/3 framing.
- "Tamper-evident" / "audit-visible" wording discipline.
- Blockchain not MVP and not a trust cure-all.
- Prompt/API injection screening as future auditor/CI input, not an approval
  gate.
- Decision Cockpit v1 as future dashboard direction.
- Polaris remains reference cockpit; broader protocol naming remains deferred.

Deferred:

- Dashboard implementation.
- Trust-layer implementation.
- Signed manifest tooling.
- Transparency-log integration.
- Blockchain anchoring.
- Prompt/API scanner implementation.
- README / strangerprintability work.
- Public-alpha launch.
- Naming decision.
- Outcome Circle or bootstrap-rule relaxation.
- Advisor-notes path.
- Runtime, notification, automation, model/API, NanoClaw, CommonGround,
  Notion, MCP/plugin/bridge, or global config work.

## OC-005 Status Handling

Verified locally:

- E6-OC-005 builder note exists.
- E6-OC-005 Claude audit note exists.
- E6-OC-005 GPT exit synthesis exists.
- The exit synthesis records E6-OC-005 as fully compliant bootstrap Circle 2
  of 2 and states the bootstrap observation requirement is satisfied.

Not verified here:

- Whether the OC-005 preservation PR has been opened, merged, or pushed.

E6-DOCS-ALIGN-001 records that distinction rather than inventing preservation
status.

## Verification

### Current HEAD

```sh
git rev-parse HEAD
```

Output:

```text
64ef94a1574361e9341c8db4e57a557b318dbfce
```

### Final Status

```sh
git status --short --branch --untracked-files=all
```

Output:

```text
## main...origin/main
 M .agent-handoff/COLLAB.md
 M .agent-handoff/OPERATING-MODEL.md
 M .agent-handoff/PROTOCOL.md
 M .agent-handoff/STRATEGY.md
 M kit/v1/.agent-handoff/PROTOCOL.md.template
?? .agent-handoff/mockups/decision-cockpit-v1.html
?? .agent-handoff/mockups/decision-cockpit-v2.html
?? .agent-handoff/mockups/decision-cockpit-v3.html
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md
?? .agent-handoff/turns/E6-OC-005-claude-public-positioning-audit-iter-1.md
?? .agent-handoff/turns/E6-OC-005-codex-public-positioning-judgment-iter-1.md
?? .agent-handoff/turns/E6-OC-005-gpt-exit-synthesis.md
```

Notes:

- The five modified tracked files are allowed for E6-DOCS-ALIGN-001.
- The new E6-DOCS-ALIGN-001 turn note is allowed.
- The three mockup files and three E6-OC-005 turn notes were pre-existing
  local artifacts before this turn and were not edited by this turn.

### Diff Hygiene

```sh
git diff --check
```

Output: no output; exit 0.

### Changed Tracked Files

```sh
git diff --name-only
```

Output:

```text
.agent-handoff/COLLAB.md
.agent-handoff/OPERATING-MODEL.md
.agent-handoff/PROTOCOL.md
.agent-handoff/STRATEGY.md
kit/v1/.agent-handoff/PROTOCOL.md.template
```

### Kit Non-Template Check

```sh
git diff --name-only -- kit/v1
```

Output:

```text
kit/v1/.agent-handoff/PROTOCOL.md.template
```

Only the allowed kit protocol template changed.

### Protocol / Kit Mirror Check

Compared the changed enforced protocol range from `## Packet Field Vocabulary`
through the new Human Decision Actions section in both files:

```sh
diff -u <(awk 'BEGIN{flag=0} /^## Packet Field Vocabulary$/{flag=1} /^NanoClaw or any transport layer/{flag=0} flag{print}' .agent-handoff/PROTOCOL.md) <(awk 'BEGIN{flag=0} /^## Packet Field Vocabulary$/{flag=1} /^NanoClaw or any transport layer/{flag=0} flag{print}' kit/v1/.agent-handoff/PROTOCOL.md.template)
```

Output: no output; exit 0.

Also compared the `#### Human Decision Actions And Notes` block directly:
no output; exit 0.

### Legacy State Vocabulary Check

```sh
rg -n "needs_sami|when Sami is called back|Decision needed from Sami|Why Sami is needed" .agent-handoff/PROTOCOL.md kit/v1/.agent-handoff/PROTOCOL.md.template .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md
```

Output: no output; exit 1 from no matches. This is expected.

### No-Touch Checks

```sh
git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html .agent-handoff/tools/alert-state.sh README.md AGENTS.md CLAUDE.md docs
```

Output: no output; exit 0.

Confirmed:

- No dashboard diff.
- No `alert-state.sh` diff.
- No root docs / `docs/` diff.
- No kit non-template diff.
- `.agent-handoff/advisor-notes/` absent.
- `.agent-handoff/reflections/` absent.
- `.agent-handoff/improvements/` absent.
- `.mcp.json` absent.
- `find .agent-handoff -name '* 2.md' -print` produced no output.

### Pilot / Live Repo Touch Check

Pilot repo status:

```text
## main...origin/main
```

Live Open Mic Colorado repo status:

```text
## codex/concierge-url-source-selection...origin/codex/concierge-url-source-selection
```

No files were modified in either repo by this turn.

### Scope Confirmation

No staging, commit, push, branch, PR, merge, dashboard implementation,
trust-layer implementation, public release, README work, automation,
model/API setup, NanoClaw, CommonGround, Notion, MCP/plugin/bridge, global
config, trust/event/private-key, pilot repo, or live Open Mic Colorado work
was performed.

## Handoff

Next actor: Claude Code auditor/co-architect.

Audit request:

- Verify only allowed files changed for E6-DOCS-ALIGN-001.
- Verify no dashboard, alert-state, advisor-notes, reflections, improvements,
  root docs, `docs/`, kit non-template files, runtime/product files, pilot repo,
  live Open Mic Colorado, automation/API/model/NanoClaw/CommonGround/MCP/
  Notion/plugin/global-config files, or trust/event/private-key files changed.
- Verify live protocol and kit template mirror the new/changed enforced wording.
- Verify five decision actions and action/state mapping are clear.
- Verify note-required rules avoid fuzzy "high consequence" classification.
- Verify sycophantic adaptation is named and notes are descriptive, not
  normative until codified.
- Verify trust wording uses "tamper-evident" / "audit-visible," avoids
  "tamper-proof," and keeps blockchain out of MVP.
- Verify prompt/API injection scanning is auditor/CI input, not an approval
  gate.
- Verify Decision Cockpit v1 remains future scope, not implementation.
- Verify OC-005 preservation status is not overclaimed.

Hard stop after local docs alignment. No staging, commit, push, branch, PR,
merge, dashboard implementation, trust implementation, public release, or new
Outcome Circle.
