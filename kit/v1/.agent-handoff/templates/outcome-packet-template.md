# Outcome Packet Template

Use this before substantive work in a bounded Builder/Auditor loop. Fill every
placeholder or write `N/A` with a reason.

## 1. Outcome Description

{{WHAT_RESULT_SHOULD_EXIST_WHEN_DONE}}

This authorizes:
- {{EXACT_AUTHORIZED_SCOPE}}

This does NOT authorize:
- {{EXCLUDED_SCOPE_OR_CONSEQUENCE}}

## 2. Rubric

PASS only if:
- {{PASS_CRITERION_1}}
- {{PASS_CRITERION_2}}
- {{PASS_CRITERION_3}}

Public-claim and approval reminders:
- satisfied is not approval
- Auditor pass is not approval
- Model consensus is not approval
- Human approval authorizes only the exact named consequence

## 3. Allowed Files

Builder may write:
- {{ALLOWED_PATH}}

Auditor may write:
- {{AUDITOR_ALLOWED_PATH}}

Read-only evidence:
- {{READ_ONLY_PATH}}

## 4. No-Touch List

Do not edit:
- {{NO_TOUCH_PATH_OR_SURFACE}}

## 5. Max Iterations

{{MAX_ITERATIONS}}

## 6. Builder

{{BUILDER_AGENT}}

Builder cannot grade own work.

## 7. Auditor / Grader

{{AUDITOR_AGENT}}

Auditor must independently verify the rubric and search for failure modes.

## 8. Pass Evidence

Builder must record:
- HEAD / repo ref
- working tree status
- files changed
- verification commands and results
- no-touch verification
- unresolved risks or human-decision needs

## 9. Stop Conditions

Stop if:
- {{STOP_CONDITION}}
- scope would expand beyond allowed files
- no-touch files would need edits
- public claims or irreversible actions would be required
- more than the approved iteration count would be needed

## 10. When The Human Approver Is Called Back

Call the human approver for:
- final approval
- any commit, push, branch, PR, merge, release, launch, public claim, or other
  irreversible consequence
- any scope expansion
- blocker / failed / max iterations / scope conflict / ambiguous state
- satisfied result, because satisfied is not approval

## 11. When The Coordinator Is Called Back

Call the Coordinator for:
- ambiguous scope
- conflicting Builder/Auditor findings
- public-claim risk
- strategic sequencing
- outcome/rubric redesign

## 12. Commit / Push Rule

{{COMMIT_PUSH_RULE}}

Default: no commit, push, branch, PR, or merge inside the circle unless this
packet explicitly says otherwise.

## 13. Artifact Visibility

{{LOCAL_ONLY_OR_OTHER_VISIBILITY}}

All evidence, commands, judgments, replacements, and conclusions must be
recorded in repo-visible turn notes. Do not rely on chat-only state.

## 14. Branch / PR Policy

{{BRANCH_PR_POLICY}}

## Required Turn-Note Breadcrumb

```text
Durable behavior active this turn:
- skills:
- subagents:
- automations:
- memory files consulted:
- standing rules invoked:
```
