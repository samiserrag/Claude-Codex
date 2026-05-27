# Human Decision Record Template

Use this to record an explicit human decision. Do not include secrets, private
reasoning, or content unsuitable for a PR review.

## Decision Metadata

- Decision action:
  `{{authorize_exact_action | reject_redo | reject_close | ask_coordinator | pause_pending}}`
- Prior state: `{{PRIOR_STATE}}`
- New state: `{{NEW_STATE}}`
- Timestamp: `{{YYYY-MM-DDTHH:MM:SSZ_OR_LOCAL_WITH_TIMEZONE}}`
- Repo ref: `{{COMMIT_SHA_OR_BRANCH_OR_NA}}`
- Recorded by: `{{SCRIBE_OR_AGENT}}`
- Human approver label: `{{HUMAN_APPROVER_LABEL}}`

## Decision

- Decision needed from human approver: {{DECISION_NEEDED}}
- Exact approval text, if approval is required: {{EXACT_APPROVAL_TEXT_OR_NA}}
- Human decision note:
  - Why I chose this: {{RATIONALE_SAFE_FOR_REPO}}
  - Scope boundary: {{AUTHORIZED_SCOPE_OR_REJECTED_SCOPE}}
  - Caveat / condition: {{CAVEAT_OR_NA}}

## Authorization Boundary

This authorizes:
- {{EXACT_AUTHORIZED_ACTION_OR_NONE}}

This does NOT authorize:
- {{EXCLUDED_ACTION_OR_SCOPE}}

## Evidence References

- {{TURN_NOTE_OR_AUDIT_PATH}}
- {{COMMAND_OR_ARTIFACT_REFERENCE}}

## Trust Status

- Record type: Git-visible / audit-visible
- Tamper status: not tamper-proof
- Tamper-evident hardening: optional future work, not provided by this record
- Legal/compliance suitability: no claim

## Approval Reminder

- satisfied is not approval
- Auditor pass is not approval
- Model consensus is not approval
- Human approval authorizes only the exact named consequence
