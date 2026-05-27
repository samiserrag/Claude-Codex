# Example: Minimal Auditor Turn Note

Example only. This is not proof, approval, public release, or evidence of
external adoption.

## Coordinator Trigger

- State: ROUTINE
- Reason: the Auditor is grading a bounded Builder result against an approved
  packet.

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none
- standing rules invoked: Outcome Packet, protocol, no-touch list
```

## Agent

Auditor

## Phase

critique

## Files touched this turn

- `.agent-handoff/turns/002-auditor-example.md` (created)

## Audit Result

`satisfied`

This means the Auditor believes the packet rubric is met. It does not authorize
commit, push, merge, release, public claims, or any adjacent scope.

## Findings

- Blockers: none
- Nits: none
- Residual risk: examples remain local-only and are not proof of adoption.

## Verification

```text
$ git diff --check
{{DIFF_CHECK_OUTPUT}}

$ git diff -- .gitignore
{{NO_OUTPUT_EXPECTED}}
```

## Handoff

- Next agent: human approver
- Specific ask: decide whether to authorize any exact preservation action.
