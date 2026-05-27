# Example: Satisfied Is Not Approved

Example only. This is not proof, approval, public release, or evidence of
external adoption.

## State

Auditor result: `satisfied`

Human approval state: `not approved`

## Meaning

The Auditor believes the rubric was met. That is useful evidence, but it does
not authorize a consequence.

## Safe Next Action

Ask the human approver for an exact decision.

## Copyable Reminder

```text
The audit result is satisfied, but satisfied is not approval. Auditor pass is
not approval. Model consensus is not approval. No commit, push, merge, release,
public claim, automation, dashboard work, trust-layer work, or new scope is
authorized unless the human approver authorizes that exact action.
```

## Human Decision Record Stub

- Decision action: `{{authorize_exact_action | reject_redo | reject_close | ask_coordinator | pause_pending}}`
- Exact approval text, if any: `{{EXACT_APPROVAL_TEXT_OR_NA}}`
- This authorizes: `{{EXACT_AUTHORIZED_ACTION_OR_NONE}}`
- This does NOT authorize: `{{EXCLUDED_SCOPE}}`
