# {{PROPOSAL_TITLE}}

Use this template for proposal-only reflection artifacts. Reflection may
generate proposals, but it may not apply proposals. No proposal is approved by
silence, model consensus, or "good idea" language; approval requires the
configured human approver's explicit approval of exact files and scope.

If the proposal would create or change memory, skills, subagents, automations,
scheduled checks, standing prompts, workflow checklists, rubric thresholds,
dashboard defaults, kit templates, approval thresholds, or evidence thresholds,
also fill `.agent-handoff/templates/durable-behavior-proposal-template.md`.
Observed pattern is not durable behavior, and memory is context, not authority.

## Improvement Classification

`{{harness | project | mixed | unclear}}`

Routing:
- `harness` -> `.agent-handoff/reflections/harness/`
- `project` -> `.agent-handoff/reflections/project/`
- `mixed` or `unclear` -> `.agent-handoff/reflections/mixed-needs-classification/`

Mixed proposals must be split before implementation. Unclear proposals must be
classified before action.

## Observed Friction

{{What friction, failure mode, ambiguity, or repeated cost was observed?}}

## Evidence

- {{Path, turn note, command output, user statement, or other concrete evidence}}

If advisor input is used, cite the advisor note path or include a quote block.
Advisor input may inform this proposal, but it is not approval. Exact approval
text still requires the configured human approver's explicit approval of exact
files and scope.

## Proposed Change

{{Proposal only. Do not implement in this file.}}

## Risk

{{Risks, tradeoffs, failure modes, and what could go wrong if adopted.}}

## Files That Would Change

- {{path or N/A if not yet known}}

## Reviewer

{{Auditor | Builder | human approver | Coordinator / third model | other}}

## Human Decision Packet

- State: {{none | FYI | decision needed | approval required | blocker}}
- Decision needed from human approver: {{decision_or_NA}}
- Why human approver is needed: {{why_or_NA}}
- Consensus recommendation: {{recommendation_or_NA}}
- Divergent opinions: {{opinions_or_none}}
- Options: {{options_or_NA}}
- Risk / tradeoff: {{risk_or_NA}}
- Exact approval text, if approval is required: {{approval_text_or_NA}}
- Technical packet: {{technical_packet_path_or_this_proposal}}

## Technical Review Packet, If Needed

- Needed: {{yes | no}}
- Intended reviewer: {{reviewer_or_NA}}
- Question: {{question_or_NA}}
- Evidence paths: {{paths_or_NA}}
- Constraints: {{constraints_or_NA}}
- Output requested: {{output_or_NA}}
- Status: {{not prepared | prepared local-only | sent | responded | incorporated | summarized}}

When no separate technical packet exists, this proposal itself may be the
Technical packet.

## Exact Approval Text

```text
{{Exact approval text the human approver could use if this proposal should become scoped work.}}
```

## Out-of-Scope / No-Touch List

- {{path_or_surface}}

## Artifact Visibility

{{local-only | pushed | visible to external reviewer | action needed}}

## Next Safe Action

{{One concrete action that requires no unstated approval, or hard stop with the needed approval/artifact.}}
