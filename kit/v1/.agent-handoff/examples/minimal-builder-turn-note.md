# Example: Minimal Builder Turn Note

Example only. This is not proof, approval, public release, or evidence of
external adoption.

## Coordinator Trigger

- State: ROUTINE
- Reason: the Builder is working inside an approved, low-risk Outcome Packet.

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none
- standing rules invoked: Outcome Packet, AGENTS.md, PROTOCOL.md, no-touch list
```

## Agent

Builder

## Phase

implementation

## Files touched this turn

- `docs/example.md` (edited)
- `.agent-handoff/turns/001-builder-example.md` (created)

## Work Performed

- Added a short approval-boundary section to `docs/example.md`.
- Did not edit no-touch paths.

## Verification

```text
$ git status --short --branch --untracked-files=all
{{STATUS_OUTPUT}}

$ git diff --check
{{DIFF_CHECK_OUTPUT}}
```

## Result

Builder result candidate: ready for Auditor review. Builder does not grade own
work.

## Handoff

- Next agent: Auditor
- Specific ask: verify the packet rubric and no-touch discipline.
