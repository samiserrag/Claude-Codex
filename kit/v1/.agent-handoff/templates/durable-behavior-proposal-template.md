# Durable Behavior Proposal Template

Use this before creating or changing any durable behavior. A proposal is not
approval. Only the human approver can authorize durable behavior.

## Boundary Reminder

- observed pattern is not durable behavior
- memory is context, not authority
- skill proposal is not approval
- automation proposal is not approval
- repeated workflow is not approval
- only the human approver can authorize durable behavior

## Proposal

- Repeated pattern observed:
- Evidence / dates / frequency:
- Existing skill / memory / subagent / automation checked:
- Proposed smallest durable artifact:
- Artifact type:
- Scope where it applies:
- What it changes:
- What it does NOT authorize:
- Risk / failure mode:
- Reversibility / deletion path:
- Invocation breadcrumb requirement:
- Human decision needed:

## Durable Behavior Types To Check

- memory file
- hosted memory
- skill
- subagent
- automation
- scheduled check
- standing prompt
- rubric change
- protocol change
- dashboard default
- kit template
- approval threshold
- evidence threshold
- workflow checklist

## Invocation Breadcrumb

If approved and invoked later, turn notes must include:

```text
Durable behavior active this turn:
- skills:
- subagents:
- automations:
- memory files consulted:
- standing rules invoked:
```
