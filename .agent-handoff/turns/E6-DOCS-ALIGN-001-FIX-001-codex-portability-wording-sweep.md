# E6-DOCS-ALIGN-001-FIX-001 - Codex portability wording sweep

## Coordinator Trigger

- State: ROUTINE
- Reason: narrow docs-lock fix for Claude audit nits; no new strategy,
  dashboard, trust implementation, public release, branch, PR, commit, push, or
  Outcome Circle is started.

## Project Mode Estimate

- Dominant mode: Execution / docs-lock fixer
- Reason: this turn repairs approved portability wording in durable protocol
  docs and hands off for audit.

## Files Read

- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`

## Entry State

The repo was already locally dirty from E6-DOCS-ALIGN-001, Claude audit,
OC-005 local artifacts, and mockup files. This fix preserved that local state
and edited only the allowed protocol/template, COLLAB handoff, and this turn
note.

## Sami Mention Counts

Before this fix, durable-doc `Sami` mention counts were:

```text
31 .agent-handoff/PROTOCOL.md
30 kit/v1/.agent-handoff/PROTOCOL.md.template
32 .agent-handoff/OPERATING-MODEL.md
10 .agent-handoff/STRATEGY.md
```

After this fix, durable-doc `Sami` mention counts are:

```text
32 .agent-handoff/OPERATING-MODEL.md
10 .agent-handoff/STRATEGY.md
```

`PROTOCOL.md` and `kit/v1/.agent-handoff/PROTOCOL.md.template` now have zero
`Sami` mentions.

## Classification Of Remaining Mentions

### `.agent-handoff/PROTOCOL.md`

No remaining `Sami` mentions.

### `kit/v1/.agent-handoff/PROTOCOL.md.template`

No remaining `Sami` mentions.

### `.agent-handoff/OPERATING-MODEL.md`

Remaining mentions are preserved as local-instance metadata, current local
role labels, historical source breadcrumbs, current local dashboard copy, or
backlog labels. They were not swept because this fix is scoped to live
protocol/template portability and the file was optional-only.

Examples:

- Local current assignment: `Sami remains the sole approval authority`.
- Local role table row: `Approver / priority / risk / taste | Sami`.
- Historical breadcrumbs: E6-B-FIX-001 "Sami-is-not-classifier" wording.
- Current local dashboard/mode labels: `Sami-decision-pending`.
- Backlog descriptions about current relay burden or local dashboard clarity.

These should be handled in a later broad portability or public-facing docs
sweep if the project decides to publish `OPERATING-MODEL.md` as adopter-facing
material.

### `.agent-handoff/STRATEGY.md`

Remaining mentions are preserved as local-instance metadata, current local
role examples, historical/convergence narrative, or local authorization guard
language.

Examples:

- Local assignment: `Sami as the configured human approver`.
- Historical/convergence narrative: `Sami asks for a view`.
- Current local evidence/next-step language: PR shape Sami authorizes.
- Local guardrail: exact Sami approval under this repo's protocol.

These are not template protocol wording. They should be reconsidered during
future public/whitepaper packaging, not in this narrow fix.

## Sections Changed

### `.agent-handoff/PROTOCOL.md`

Replaced reusable Sami-specific authority wording with portable wording:

- `Sami separately approves` -> `configured human approver separately approves`
- `Sami can paste` -> `configured human approver can paste`
- duplicate/noise staging authorization
- reflection proposal approval
- review routing authority
- node approval capability
- advisor approval/scribing acceptance language
- stable role list
- GPT coordinator approval authority
- GPT trigger wording
- routine-status burden wording
- Outcome Circle entry authority
- direct-push authority
- vendor-diversity override
- co-architect divergent/escalated routing
- turn-note schema actor examples
- unscheduled fix-turn approval basis
- Experiment 1 retrospective handoff
- later bridge/adapter approval
- stopgates and stopgate rule

Also preserved prior E6-DOCS-ALIGN-001 changes:

- `needs_human`
- `when the human approver is called back`
- Human Decision Actions And Notes

### `kit/v1/.agent-handoff/PROTOCOL.md.template`

Mirrored the same reusable authority wording changes into the kit template.

Template-specific phrasing remains where the template intentionally differs
from this local harness, such as `{{COLLAB_PATH}}`, `{{PROJECT_BRIEF_PATH}}`,
and kit-only experiment authorization conventions.

### `.agent-handoff/COLLAB.md`

Updated current handoff for Claude audit of E6-DOCS-ALIGN-001-FIX-001.

## Mirror Discipline Verification

The core changed enforced range from `## Packet Field Vocabulary` through the
new Human Decision Actions section is byte-identical between live protocol and
kit template:

```sh
diff -u <(awk 'BEGIN{flag=0} /^## Packet Field Vocabulary$/{flag=1} /^NanoClaw or any transport layer/{flag=0} flag{print}' .agent-handoff/PROTOCOL.md) <(awk 'BEGIN{flag=0} /^## Packet Field Vocabulary$/{flag=1} /^NanoClaw or any transport layer/{flag=0} flag{print}' kit/v1/.agent-handoff/PROTOCOL.md.template)
```

Output: no output; exit 0.

Other changed authority wording was mirrored into corresponding live/template
sections. Some surrounding sections intentionally differ because the kit uses
template placeholders and generic experiment conventions.

## Deferred

- Broad E6-PORTABILITY-001 sweep.
- Public-facing whitepaper rewrite.
- Multi-human approval model.
- Dashboard or mockup edits.
- OC-005 artifact edits.
- Operating Model and Strategy wording sweep.
- Human Decision Record schema.
- Trust implementation, signing, manifests, transparency logs, blockchain
  anchoring, or prompt/API scanning implementation.
- README / strangerprintability / public release.
- New Outcome Circle.

Future whitepaper note from Sami during this turn:

```text
Multiple humans in the loop may matter for real audiences and higher-stakes
deployments. Not needed for MVP, but mention in the whitepaper as a future
governance direction: multi-party approval, separated human roles, or
organization-specific approver policies.
```

## Verification

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
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-001-codex-portability-wording-sweep.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-claude-audit-decision-notes-trust-doc-alignment.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md
?? .agent-handoff/turns/E6-OC-005-claude-public-positioning-audit-iter-1.md
?? .agent-handoff/turns/E6-OC-005-codex-public-positioning-judgment-iter-1.md
?? .agent-handoff/turns/E6-OC-005-gpt-exit-synthesis.md
```

Notes:

- E6-DOCS-ALIGN-001 modified `OPERATING-MODEL.md` and `STRATEGY.md` before
  this fix; FIX-001 did not edit those optional files.
- Mockups, E6-OC-005 artifacts, and the E6-DOCS-ALIGN-001 Claude audit note
  were pre-existing local/untracked artifacts before this fix and were not
  edited by this fix.

### Diff Hygiene

```sh
git diff --check
```

Output: no output; exit 0.

### Portability Grep

```sh
rg -n "Sami|needs_sami|Decision needed from Sami|when Sami|Call Sami" .agent-handoff/PROTOCOL.md kit/v1/.agent-handoff/PROTOCOL.md.template .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md || true
```

Output contains remaining `Sami` mentions only in:

- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`

Output contains no matches in:

- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`

No matches for `needs_sami`, `Decision needed from Sami`, `when Sami`, or
`Call Sami` remained in the checked docs.

### Mirror Check

```sh
diff -u <(awk 'BEGIN{flag=0} /^## Packet Field Vocabulary$/{flag=1} /^NanoClaw or any transport layer/{flag=0} flag{print}' .agent-handoff/PROTOCOL.md) <(awk 'BEGIN{flag=0} /^## Packet Field Vocabulary$/{flag=1} /^NanoClaw or any transport layer/{flag=0} flag{print}' kit/v1/.agent-handoff/PROTOCOL.md.template)
```

Output: no output; exit 0.

This confirms the changed enforced range from Human Decision Packet vocabulary
through Outcome Circle / Human Decision Actions wording remains byte-identical
between live protocol and kit template.

### No-Touch Checks

```sh
git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html .agent-handoff/mockups .agent-handoff/tools/alert-state.sh README.md AGENTS.md CLAUDE.md docs
```

Output: no output; exit 0.

```sh
git diff --name-only -- kit/v1
```

Output:

```text
kit/v1/.agent-handoff/PROTOCOL.md.template
```

Confirmed:

- No dashboard diff.
- No mockup diff.
- No OC-005 artifact edits by this turn.
- No kit non-template diff.
- No `alert-state.sh` diff.
- No root docs / `docs/` diff.
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

No staging, commit, push, branch, PR, merge, dashboard/mockup edit, OC-005
artifact edit, trust implementation, runtime/product work, public release,
README work, automation, API/model setup, NanoClaw, CommonGround, Notion,
MCP/plugin/bridge, global config, trust/event/private-key work, pilot repo
work, or live Open Mic Colorado work was performed.

## Handoff

Next actor: Claude Code auditor.

Ask:

- Confirm `PROTOCOL.md` and kit template now have zero `Sami` mentions.
- Confirm remaining `Sami` mentions in `OPERATING-MODEL.md` and `STRATEGY.md`
  were not swept because they are outside this narrow protocol/template fix.
- Confirm changed protocol wording is mirrored where required.
- Confirm no dashboard, mockup, OC-005 artifact, root doc, runtime/product,
  trust implementation, public-release, automation/API/model/NanoClaw/
  CommonGround/MCP/Notion/plugin/global-config, pilot repo, or live Open Mic
  Colorado work was started.

Hard stop after local fix. No staging, commit, push, branch, PR, or merge.
