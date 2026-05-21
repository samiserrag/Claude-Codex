# {{PROPOSAL_TITLE}}

Use this template for proposal-only reflection artifacts. Reflection may
generate proposals, but it may not apply proposals. No proposal is approved by
silence, model consensus, or "good idea" language; approval requires Sami's
explicit approval of exact files and scope.

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

## Proposed Change

{{Proposal only. Do not implement in this file.}}

## Risk

{{Risks, tradeoffs, failure modes, and what could go wrong if adopted.}}

## Files That Would Change

- {{path or N/A if not yet known}}

## Reviewer

{{Claude | Codex | Sami | GPT-5.5 Pro / third model | other}}

## Human Decision Packet

- State: {{none | FYI | decision needed | approval required | blocker}}
- Decision needed from Sami: {{decision_or_NA}}
- Why Sami is needed: {{why_or_NA}}
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
{{Exact approval text Sami could use if this proposal should become scoped work.}}
```

## Out-of-Scope / No-Touch List

- {{path_or_surface}}

## Artifact Visibility

{{local-only | pushed | visible to web-GPT | action needed}}

## Next Safe Action

{{One concrete action that requires no unstated approval, or hard stop with the needed approval/artifact.}}
