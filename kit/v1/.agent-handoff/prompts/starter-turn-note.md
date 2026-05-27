Replace each `{{placeholder}}` with concrete content before filing. Empty
fields should be `N/A` with a brief reason, not left as `{{ }}`.

If `.agent-handoff/DASHBOARD.md` exists, document dashboard freshness in the
turn note: whether it was checked against `COLLAB.md` and latest relevant turn
notes, whether it was refreshed before use, and whether it was refreshed at
handoff or left stale because dashboard edits were out of scope.

If a Human Decision Packet is needed, use the protocol's field list and the
term `Exact approval text`. Include `Technical packet`; when no separate packet
exists, set it to the proposal path itself. Use only the protocol's Technical
Review Packet status values.

When local-only artifacts or duplicate/noise files are relevant, record their
status in the turn note and keep known Finder duplicates such as `* 2.md`
unstaged unless the configured human approver explicitly authorizes the exact
path.

For reflection/self-improvement work, reference the protocol's Reflection
Safety And Approval rule: proposals are not approval, and mixed proposals must
be split before implementation.

If memory, skills, subagents, automations, scheduled checks, standing prompts,
workflow checklists, or other durable behavior shaped the turn, name them in
the durable-behavior breadcrumb. Observed pattern is not durable behavior.
Memory is context, not authority. Skill proposal is not approval. Automation
proposal is not approval. Repeated workflow is not approval. Only the human
approver can authorize durable behavior.

# {{TURN_ID}} - {{AGENT}} {{PHASE}}

## Coordinator Trigger
- State: {{ROUTINE | NEEDS_COORDINATOR | UNCLEAR}}
- Reason: {{one_sentence}}

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: {{none_or_list}}
- subagents: {{none_or_list}}
- automations: {{none_or_list}}
- memory files consulted: {{none_or_list}}
- standing rules invoked: {{none_or_list}}
```

## Agent
{{Auditor | Builder | human approver | Consultant}}

## Phase
{{architecture | critique | implementation | smoke | retrospective | fix | rescope}}

## Files touched this turn
- {{path}} ({{created | edited | deleted}})

## Decisions (binding)
- {{decision}}

## Open questions for the other agent
- {{question}}

## Blockers (must-fix before continuing)
- {{blocker_or_none}}

## Nits (suggested, not required)
- {{nit_or_none}}

## Browser verification
- Tool used: {{named runner | N/A}}
- URL or file path opened: {{url_or_path_or_NA}}
- Action: {{action_or_NA}}
- Visible outcome: {{outcome_or_NA}}
- Console/network issues: {{issues_or_NA}}

## Evidence Basis
- USER SAID: {{user_statement_or_NA}}
- FILE VERIFIED: {{file_and_finding_or_NA}}
- AGENT SUMMARY: {{agent_summary_or_NA}}
- INFERENCE: {{inference_or_NA}}
- UNKNOWN: {{unknown_or_NA}}

## Portability Findings
- Repo-local assumptions: {{assumptions_or_NA}}
- Machine/local-tool assumptions: {{assumptions_or_NA}}
- Browser/connector assumptions: {{assumptions_or_NA}}
- Any workaround used: {{workaround_or_none}}

## Handoff
- Next agent: {{Auditor | Builder | human approver}}
- Specific ask: {{specific_ask}}
