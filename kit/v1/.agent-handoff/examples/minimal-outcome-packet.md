# Example: Minimal Outcome Packet

Example only. This is not proof, approval, public release, or evidence of
external adoption.

## Outcome Description

Update one documentation file so the adopting repo's first Builder/Auditor
loop can be tried manually.

This authorizes:
- Edit `docs/example.md`.
- Add one Builder turn note and one Auditor turn note.

This does NOT authorize:
- commits, pushes, PRs, public release, automation, runtime work, dashboard
  implementation, trust-layer work, or edits outside the listed files.

## Rubric

PASS only if:
- `docs/example.md` explains the approval boundary in plain language.
- Builder records verification evidence in a turn note.
- Auditor independently checks no-touch paths and reports findings.

## Allowed Files

Builder may write:
- `docs/example.md`
- `.agent-handoff/turns/001-builder-example.md`

Auditor may write:
- `.agent-handoff/turns/002-auditor-example.md`

## No-Touch List

Do not edit:
- `.gitignore`
- runtime files
- credentials or generated files

## Max Iterations

1.

## Builder

`{{BUILDER_AGENT}}`

## Auditor / Grader

`{{AUDITOR_AGENT}}`

## Pass Evidence

- clean entry status
- files changed
- exact diff summary
- no-touch verification
- unresolved risks

## Stop Conditions

Stop for scope expansion, dirty unexpected files, no-touch edits, or any need
to commit, push, publish, or automate.

## Human Approver Callback

Call the human approver for final approval and any irreversible consequence.

## Coordinator Callback

Call the Coordinator for ambiguous scope or Builder/Auditor disagreement.

## Commit / Push Rule

No commit, push, branch, PR, or merge.

## Artifact Visibility

Local-only during the example circle.

## Branch / PR Policy

No branch or PR.
