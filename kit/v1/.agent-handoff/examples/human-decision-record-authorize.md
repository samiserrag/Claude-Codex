# Example: Human Decision Record - Authorize Exact Action

Example only. This is not proof, approval for this source repo, public release,
or evidence of external adoption.

## Decision Metadata

- Decision action: `authorize_exact_action`
- Prior state: `auditor_satisfied`
- New state: `approved_for_exact_pr`
- Timestamp: `{{YYYY-MM-DDTHH:MM:SSZ}}`
- Repo ref: `{{COMMIT_SHA_OR_BRANCH}}`
- Recorded by: `{{SCRIBE_OR_AGENT}}`
- Human approver label: `{{HUMAN_APPROVER_LABEL}}`

## Decision

- Decision needed from human approver: approve only the preservation PR named
  in the Outcome Packet.
- Exact approval text:

```text
I authorize opening one preservation PR containing only the files listed in the
audited Outcome Packet. This does not authorize merge, release, public proof,
automation, dashboard work, trust-layer work, or any new scope.
```

- Human decision note:
  - Why I chose this: the Auditor found the bounded packet satisfied.
  - Scope boundary: one preservation PR, listed files only.
  - Caveat / condition: merge remains a separate decision.

## Authorization Boundary

This authorizes:
- opening one exact preservation PR

This does NOT authorize:
- merge, release, public proof, automation, dashboard work, trust-layer work,
  or new scope

## Evidence References

- `.agent-handoff/turns/001-builder-example.md`
- `.agent-handoff/turns/002-auditor-example.md`

## Trust Status

- Record type: Git-visible / audit-visible
- Tamper status: not tamper-proof
- Legal/compliance suitability: no claim
