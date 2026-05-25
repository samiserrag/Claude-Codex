# E6-DOCS-ALIGN-001-FIX-002 - Codex approver-label signpost

## Coordinator Trigger

- State: ROUTINE
- Reason: tiny docs portability signpost fix scoped by Sami; no dashboard,
  trust, public release, README, branch, PR, commit, push, or Outcome Circle is
  started.

## Project Mode Estimate

- Dominant mode: Execution / docs-lock fixer
- Reason: this turn adds one discoverable protocol signpost and hands off for
  Claude audit.

## Files Read

- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `.agent-handoff/COLLAB.md`

## Entry State

Pre-edit `git status --short --branch --untracked-files=all` showed the repo
was already locally dirty from E6-DOCS-ALIGN-001, FIX-001, Claude audits,
OC-005 artifacts, and mockup files:

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
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-001-claude-audit-portability-sweep.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-001-codex-portability-wording-sweep.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-claude-audit-decision-notes-trust-doc-alignment.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md
?? .agent-handoff/turns/E6-OC-005-claude-public-positioning-audit-iter-1.md
?? .agent-handoff/turns/E6-OC-005-codex-public-positioning-judgment-iter-1.md
?? .agent-handoff/turns/E6-OC-005-gpt-exit-synthesis.md
```

The OC-005 artifacts and mockup files were present before this fix and were
not touched.

## Exact Section Changed

Added `## Approver Labeling Convention` immediately after `## Source Of Truth`
in:

- `.agent-handoff/PROTOCOL.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`

Mirrored wording:

```text
Reusable protocol language refers to `the human approver` or `configured human
approver`. An adopting repo may display a local label for that role, such as
the configured person's name, but local labels are instance metadata and must
not become reusable protocol state/action vocabulary. Reusable state/action
names must remain portable, for example `needs_human`, not
`needs_<local_name>`.
```

## Before / After Summary

Before:

- The local-label allowance existed only near the Outcome Circle wording.
- A reader could miss the distinction between reusable `human approver`
  vocabulary and local display labels.

After:

- The distinction is discoverable near the top of both live protocol and kit
  template.
- Reusable state/action vocabulary is explicitly portable: `needs_human`, not
  `needs_<local_name>`.
- Kit template avoids adopter-facing hard-coded `Sami` mentions.

Note: Sami's preferred example used `Sami`. I did not hard-code `Sami` into the
mirrored kit signpost because the same approval also required confirming the
kit template has zero adopter-facing hard-coded `Sami` mentions. The mirrored
signpost uses "the configured person's name" instead.

## Mirror Discipline Verification

The new `## Approver Labeling Convention` section is intended to be mirrored
byte-identically between live protocol and kit template.

Verification command:

```sh
diff -u <(awk 'BEGIN{flag=0} /^## Approver Labeling Convention$/{flag=1} /^## Baseline And Optional Layers$/{flag=0} flag{print}' .agent-handoff/PROTOCOL.md) <(awk 'BEGIN{flag=0} /^## Approver Labeling Convention$/{flag=1} /^## Baseline And Optional Layers$/{flag=0} flag{print}' kit/v1/.agent-handoff/PROTOCOL.md.template)
```

Result to be finalized below after the turn note is written.

## Remaining Sami Mention Inventory

Before and after this fix:

- `.agent-handoff/PROTOCOL.md`: zero `Sami` mentions.
- `kit/v1/.agent-handoff/PROTOCOL.md.template`: zero `Sami` mentions.
- `.agent-handoff/OPERATING-MODEL.md`: pre-existing local-context `Sami`
  mentions remain untouched.
- `.agent-handoff/STRATEGY.md`: pre-existing local-context `Sami` mentions
  remain untouched.

This fix did not edit `OPERATING-MODEL.md` or `STRATEGY.md`.

## Intentionally Deferred

- Historical turn-note rewrites.
- COLLAB history rewrites beyond minimal current-owner/handoff update.
- Approval semantics changes.
- Outcome Circle mechanics changes.
- Dashboard implementation.
- Trust-layer implementation.
- Public release.
- README / strangerprintability work.
- New Outcome Circle.
- Polaris rename or protocol naming.
- Multiple-human approval model. This remains a future whitepaper/public
  audience consideration, not MVP scope.
- COLLAB archival/size work.

## Verification

`git status --short --branch --untracked-files=all` after the fix:

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
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-001-claude-audit-portability-sweep.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-001-codex-portability-wording-sweep.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-002-codex-approver-label-signpost.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-claude-audit-decision-notes-trust-doc-alignment.md
?? .agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md
?? .agent-handoff/turns/E6-OC-005-claude-public-positioning-audit-iter-1.md
?? .agent-handoff/turns/E6-OC-005-codex-public-positioning-judgment-iter-1.md
?? .agent-handoff/turns/E6-OC-005-gpt-exit-synthesis.md
```

`git diff --check`: exit 0.

Mirror check for the new `## Approver Labeling Convention` section: exit 0,
no diff output.

Section locations:

```text
kit/v1/.agent-handoff/PROTOCOL.md.template:18:## Approver Labeling Convention
.agent-handoff/PROTOCOL.md:20:## Approver Labeling Convention
```

Reusable durable-doc state checks:

- `needs_sami`, `Decision needed from Sami`, `when Sami`, and `Call Sami`:
  no matches in live protocol, kit template, operating model, or strategy.
- `Sami` in `kit/v1/.agent-handoff/PROTOCOL.md.template`: no matches.
- `Sami` counts after this fix:
  - `.agent-handoff/PROTOCOL.md`: 0
  - `kit/v1/.agent-handoff/PROTOCOL.md.template`: 0
  - `.agent-handoff/OPERATING-MODEL.md`: 27 pre-existing local-context mentions
  - `.agent-handoff/STRATEGY.md`: 10 pre-existing local-context mentions

No-touch checks:

- Dashboard/mockup/alert-state/root-docs/docs diff check: no diff output.
- Kit diff check: only `kit/v1/.agent-handoff/PROTOCOL.md.template`.
- `advisor-notes`, `reflections`, and `improvements` paths remain absent.
- `find .agent-handoff -name '* 2.md' -print`: no output.
- Pilot repo status at
  `/Users/samiserrag/Documents/GitHub/open-mic-colorado-agent-pilot`:
  `## main...origin/main`.
- Live Open Mic Colorado repo status at
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective`:
  `## codex/concierge-url-source-selection...origin/codex/concierge-url-source-selection`.
  No files were changed there by this fix.

Important scope note: `.agent-handoff/OPERATING-MODEL.md` and
`.agent-handoff/STRATEGY.md` still show pre-existing diffs from the broader
E6-DOCS-ALIGN-001 stack. This FIX-002 turn did not edit either file.

No staging, commit, push, branch, PR, merge, dashboard implementation,
trust-layer implementation, public-release work, README/strangerprintability
work, or new Outcome Circle was started.

## Handoff

Next actor: Claude Code auditor.

Ask:

- Confirm the signpost is discoverable near the top of live protocol and kit
  template.
- Confirm mirrored signpost wording is byte-identical.
- Confirm kit template still has zero `Sami` mentions.
- Confirm no STRATEGY, OPERATING-MODEL, dashboard, mockup, OC-005 artifact,
  root doc, runtime/trust/public-release, pilot, or live Open Mic Colorado work
  was touched.

Hard stop after local fix. No staging, commit, push, branch, PR, merge, or new
Outcome Circle.
