# E6-A - Codex GPT Coordinator Outcome Architect Design

## Agent
Codex

## Phase
design

## Active Role Declaration
- Active role: builder/designer for the GPT Coordinator / Outcome Architect
  integration design.
- Authority limit: edit only `.agent-handoff/COLLAB.md` and this append-only
  E6-A turn note.
- Explicit non-authority: no implementation, no PROTOCOL.md edit, no
  DASHBOARD.md or DASHBOARD.html edit, no kit template edit, no
  `alert-state.sh` edit, no advisor-notes/reflections/improvements path
  creation, no automation, no model calls, no OpenAI API setup, no NanoClaw,
  no CommonGround, no MCP/plugin/bridge, no Notion, no cron/timer/webhook/
  launch agent/global config, no staging, no commit, no push, no branch, no
  PR, no pilot repo touch, and no live Open Mic Colorado touch.

## Files Touched
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-A-codex-gpt-coordinator-outcome-architect-design.md`

## 1. External Coordinator Input: GPT-5.5 Pro

Sami accepted the core framing:

```text
GPT coordinates. Codex builds. Claude audits. Sami approves. Repo records the trail.
```

GPT-5.5 Pro's coordinator framing is the reason E6-A exists. The two-agent
Claude <-> Codex repo bridge works technically, but the workflow becomes less
usable for Sami when GPT is absent from the coordinator/outcome-architect
role.

Structured summary of the GPT framing:
- The two-agent Claude <-> Codex bridge works technically.
- The system becomes unusable for Sami if GPT is absent as coordinator.
- GPT should be coordinator/outcome architect, not routine repo actor.
- Codex should remain builder / implementer / investigator.
- Claude Code should remain auditor / critic / verifier.
- Sami should remain approval / priority / risk / taste.
- The repo remains source of truth.

Sami accepted:
- GPT should be structurally present as coordinator/outcome architect.
- GPT does not approve scope, pushes, or completion.
- GPT output must become repo-visible through scribing or future repo-write
  capability.

Sami rejected:
- No explicit rejection was recorded for this E6-A scope.

Sami left undecided:
- Whether GPT remains ChatGPT-only or later becomes API/repo-backed.
- Whether `.agent-handoff/advisor-notes/` should be created in E6-B.

Deferred:
- Multi-turn outcome/rubric loops.
- NanoClaw or any transport layer integration.

E6-A does not create `.agent-handoff/advisor-notes/`.

## 2. Problem Statement

The Claude <-> Codex repo loop now works technically: Codex can build/design,
Claude can critique, and the repo records handoff state through COLLAB,
DASHBOARD, turn notes, and exact push approvals.

The workflow is not usable enough for Sami when GPT is absent from the
coordinator role. Without GPT, Sami becomes the person who synthesizes agent
outputs, decides when a problem is strategic rather than mechanical, identifies
whether the team is wasting time, and translates recommendations into next
agent prompts. That is too much continuous coordination burden for the product
owner.

Sami should provide vision, approval, risk tolerance, priority, and taste. Sami
should not be the always-on coordinator for every handoff. GPT-5.5 Pro
currently provides the best human-facing synthesis, architecture framing, and
strategic next-step translation in this workflow.

E6-A adds GPT's structural coordinator role, but it does not eliminate Sami's
relay burden in the near term. Sami still copy-pastes GPT output unless a
future turn adds an API-backed GPT node, transport layer, notification system,
or similar infrastructure. None of those are implemented in E6-A.

## 3. Role Model

Stable team model:
- GPT-5.5 Pro: coordinator / outcome architect / external advisor.
- Codex: builder / implementer / investigator.
- Claude Code: auditor / critic / verifier.
- Sami: approval / priority / risk / taste.
- Repo: source of truth.

This preserves the E5-S node capability rules:
- Write capability: whether a node can directly create or modify repo-visible
  artifacts in the current workspace.
- Operational role: the per-turn assignment, such as builder, auditor,
  coordinator, advisor, or scribe.
- Approval capability: the ability to approve scope, files, risk, priority,
  pushes, or movement from proposal to implementation.
- Tier: the per-turn role-fit class, such as architect-class, worker-class, or
  external-advisor.

GPT may recommend, synthesize, draft prompts, and define outcome/rubric
proposals. GPT does not approve scope, pushes, or completion. Approval remains
Sami's sole authority.

GPT can be structurally important without being a repo-writing operational
node. If GPT lacks repo write access, GPT output is not operational until Sami
approves it or a repo-writing node records it with attribution.

## 4. Coordinator Invocation Triggers

Ask GPT when any of these triggers fire:
- Milestone reached.
- Architecture or pivot decision.
- Repeated UX or cognitive-load failure.
- "Are we wasting time?" question.
- Conflicting Claude/Codex recommendations.
- Outcome/rubric definition.
- Multi-turn loop approval consideration.
- High-stakes, noisy, or ambiguous decision.
- Sami requests external synthesis.

GPT is not required for:
- Routine implementation.
- Routine critique.
- Straightforward push authorization.
- Already-scoped no-choice handoff.
- Low-risk verification where Claude/Codex agree and Sami is not being asked
  to make a strategic decision.

Ask GPT is trigger-based, not mandatory on every turn. Making GPT routine on
every turn would recreate relay burden rather than reduce it.

## 5. GPT Output Contract

When invoked as coordinator/outcome architect, GPT should produce:
- Concise synthesis.
- Consensus recommendation.
- Divergent opinions.
- Risk/tradeoff summary.
- Exact next prompts for Codex and/or Claude.
- Outcome/rubric proposal when a multi-turn loop is being considered.
- Exact approval text if Sami must approve.
- Explicit uncertainty / unknowns.
- No repo-authoritative claims unless the output is scribed into repo-visible
  state.

GPT output should be written for Sami and the next repo actor, not as a broad
essay. The best output makes the next decision or prompt obvious.

## 6. Scribing / Repo Visibility

Near-term path:
- Sami pastes GPT output into Claude/Codex.
- The active repo-writing node scribes the GPT input with attribution.
- The scribe includes a verbatim quote in a code block when exact text is
  available.
- There is no length cap for text.
- The scribe includes a structured summary.
- The scribe records what Sami accepted, rejected, or left undecided.
- The scribe does not silently launder GPT advice into "the system decided."

Scribing responsibility:
- The active repo-writer for the next turn scribes GPT input.
- If no turn is active and GPT input arrives during a Sami-only decision
  window, the scribe happens in the next repo-writing turn that uses the input.
- Avoid both-scribe duplication and neither-scribe loss.
- If GPT input applies to both Codex and Claude, the next repo-writing node
  records the shared source once with attribution, and the other node
  references that source instead of re-scribing.

Possible future path:
- If `.agent-handoff/advisor-notes/` is needed, propose it for E6-B.
- Do not create `.agent-handoff/advisor-notes/` in E6-A.

## 7. Dashboard Coordinator Trigger

Dashboard behavior to design later, without editing dashboard files in E6-A:
- If a GPT invocation trigger fires, the dashboard's primary recommendation may
  become "Ask GPT-5.5 Pro."
- If GPT is not the next action, GPT stays visible below the fold as
  advisor-class.
- The dashboard must distinguish:
  - next repo actor
  - external coordinator needed
  - Sami approval needed
- "What Sami Pastes Next" should include an Ask GPT block when appropriate.

Any future dashboard implementation must respect E5-T-FIX-004's
single-recommendation principle. Above the fold remains one recommendation and
one primary paste/action. If Ask GPT is the trigger, Ask GPT becomes the
recommendation; it does not add a competing surface beside the repo actor.

## 8. Multi-Turn Outcome Loop Deferral

E6-A does not design a full multi-turn outcome loop.

That work is deferred because it changes the safety model more than
coordinator-role definition does. It risks turning auditor rubric satisfaction
into a soft approval surface, and it needs its own focused design and critique.
It should be E6-C or later, not E6-B implementation hidden inside E6-A.

Later design questions:
- What is the outcome statement?
- What is the rubric?
- What files/scope are allowed?
- What is the no-touch list?
- What is the max iteration count?
- Who grades?
- What evidence counts as pass?
- What stop conditions call Sami back?
- Does "rubric satisfied" mean only "auditor believes pass," or does Sami
  still need to confirm completion before commit/push?
- How are commits/pushes handled?
- How is CI/PR cost controlled?
- How is scope expansion prevented?
- How is self-approval prevented?

Recommended default:

```text
Rubric satisfied means the auditor believes the rubric is satisfied; it does not authorize commit, push, new scope, or final completion unless Sami's exact approval text says so.
```

## 9. Safety Model

Bad coordinator recommendation:
- GPT recommendations remain advisory until Sami accepts them or a repo-writing
  node records them with attribution.
- The scribe must preserve uncertainty and divergent opinions, not flatten them
  into a fake consensus.

Bad rubric:
- Outcome/rubric proposals are not implemented in E6-A.
- Later outcome-loop design must call Sami back when the rubric is ambiguous,
  under-specified, or producing work that feels correct to models but wrong to
  the product owner.

Grader false pass:
- An auditor pass is evidence, not approval.
- "Rubric satisfied" does not authorize commit, push, new scope, or final
  completion unless Sami's exact approval text says so.

Model consensus mistaken as approval:
- GPT/Codex/Claude agreement is not approval.
- Green status, silence, "looks good," or consensus language still cannot move
  a proposal to approved.

Hidden state:
- GPT coordinator output becomes usable only when scribed into repo-visible
  artifacts or explicitly pasted into the next authorized turn.
- Dashboard state remains view-only; COLLAB and turn notes are authoritative.

GPT advice not repo-visible:
- If GPT advice affects a repo turn, the next repo-writing node must scribe it
  or cite an existing scribed source.
- If exact text is unavailable, the scribe states the gap.

Scope creep across iterations:
- No coordinator recommendation may expand allowed files, no-touch surfaces, or
  push authority without Sami's exact approval.

CI/PR cost:
- Coordinator and outcome-loop designs should prefer one PR per experiment arc,
  draft PRs while in progress, and batch/squash at consolidation points when
  appropriate.

Human fatigue / cognitive overload:
- GPT should be invoked when synthesis burden is high, not for every routine
  handoff.
- The dashboard should surface Ask GPT only when a trigger fires.

Exact approval:
- Exact approval text remains required for new scope, staging, commit, push,
  branch, PR, automation, transport, API setup, or other material action.

## 10. Managed-Agent / Outcome-Grader Comparison

Managed-agent and outcome-grader systems provide a useful pattern: define an
outcome/rubric, use an independent grader, and cap iterations. Their common
limitation is that they are usually same-lab or platform-native. This harness
should borrow the outcome/rubric plus independent-grade plus iteration-cap
pattern while keeping the differentiator: cross-lab, repo-governed,
auditable, swappable nodes with Git, COLLAB, DASHBOARD, and turn notes as the
source of truth.

## 11. Near-Term vs Future Implementation

Near-term:
- GPT remains ChatGPT/copy-paste coordinator.
- Claude/Codex scribe GPT input.
- Dashboard exposes Ask GPT when trigger conditions fire.
- E6-A does not create advisor-notes.

Future:
- Possible `.agent-handoff/advisor-notes/` path.
- Possible API-backed GPT coordinator node.
- Possible multi-turn outcome loop after separate E6-C design.
- Possible transport layer only after separate review.

NanoClaw or any transport layer is a possible future option only. NanoClaw was
previously investigated and deferred for governance-fit reasons; reconsidering
it would require a separate review. Do not treat NanoClaw as the default future
path.

## 12. E6-B / E6-C Planning Questions, Not Exact Files

E6-A does not enumerate exact E6-B implementation files.

E6-B must answer:
- Is E6-B implementing advisor-notes path, dashboard Ask GPT trigger, protocol
  coordinator wording, or some smaller coordinator visibility step?
- Should advisor-notes be created before dashboard Ask GPT?
- Should dashboard Ask GPT be implemented before any API-backed coordinator?
- What is the smallest implementation that proves GPT coordinator visibility
  without adding automation?

Likely sequence:
- E6-B: coordinator rule + scribing/advisor-notes + dashboard Ask GPT trigger,
  if accepted.
- E6-C: multi-turn outcome/rubric loop design.
- Later: any API-backed GPT coordinator or transport/NanoClaw review.

E6-A success criterion:

```text
After reading the design, a reader should know -- without asking another agent -- exactly when GPT should be invoked, what GPT produces, who scribes it, and how that gets into the repo. If the design itself requires Sami or another agent to interpret it, the design failed its own goal.
```

## Verification

Pre-edit status:
- `git status --short --untracked-files=all` was clean before E6-A edits.

Post-edit verification:
- `git status --short --untracked-files=all` shows only:
  - `M .agent-handoff/COLLAB.md`
  - `?? .agent-handoff/turns/E6-A-codex-gpt-coordinator-outcome-architect-design.md`
- `git diff --check` passed with no output.
- `git diff --name-only` shows only `.agent-handoff/COLLAB.md`; the E6-A turn
  note is new/untracked, as expected.
- Scoped no-touch diff check against `.agent-handoff/PROTOCOL.md`,
  `.agent-handoff/DASHBOARD.md`, `.agent-handoff/DASHBOARD.html`,
  `.agent-handoff/tools/alert-state.sh`, `kit/v1`, root docs, `docs`,
  `.mcp.json`, `.claude`, `generated`, and `trust/event` returned no output.
- `find .agent-handoff -maxdepth 1 -type d \( -name advisor-notes -o -name reflections -o -name improvements \) -print`
  returned no output; no advisor-notes/reflections/improvements path was
  created.
- Search for `.mcp.json`, Notion, NanoClaw, and CommonGround artifacts found
  only pre-existing E5-N CommonGround feasibility turn notes; no new integration
  or config files were created.
- Pilot repo status at `/Users/samiserrag/Documents/GitHub/open-mic-colorado-agent-pilot`
  was clean.

Not run / not done:
- No tests were run; this was a design-only documentation turn.
- No dashboard/browser verification was run; dashboard files were out of scope.
- No `alert-state.sh` run; E6-A did not authorize script execution.
- No automation, model calls, OpenAI API setup, NanoClaw, CommonGround,
  MCP/plugin/bridge, Notion, cron/timer/webhook/launch agent/global config,
  staging, commit, push, branch, or PR.

## Handoff

Claude Code should critique E6-A as auditor/advisor, focusing on whether the
design restores GPT-5.5 Pro as coordinator/outcome architect without making GPT
a repo-writing node or approval authority, while keeping multi-turn outcome
loops deferred.
