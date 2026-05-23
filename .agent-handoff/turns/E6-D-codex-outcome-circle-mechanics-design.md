# E6-D - Codex Outcome Circle Mechanics Design

## Agent
Codex

## Phase
design

## 1. Coordinator Trigger
- State: NEEDS_GPT
- Reason: outcome-circle mechanics are architecture work outside any active
  circle.

## 2. Project Mode Estimate
- Dominant mode: Coordinator (~90%, agent heuristic estimate)
- Sami-decision-pending: ~10%
- Execution: ~0%
- Unknown: ~0%
- Reason: E6-C merged the operating model; no approved Outcome Circle exists
  yet. E6-D designs the mechanics required before Execution mode can be safely
  used.

## Active Role Declaration
- Active role: builder/designer for Outcome Circle mechanics.
- Authority limit: edit only `.agent-handoff/COLLAB.md`,
  `.agent-handoff/DASHBOARD.md`, `.agent-handoff/DASHBOARD.html`, and this
  append-only E6-D turn note.
- Explicit non-authority: no implementation, no `PROTOCOL.md` edit, no
  `OPERATING-MODEL.md` edit, no kit template edit, no `alert-state.sh` edit,
  no advisor-notes/reflections/improvements path creation, no Polaris redesign,
  no notifier/wakeup implementation, no automation, no model call, no OpenAI
  API setup, no NanoClaw/CommonGround/MCP/plugin/bridge setup, no Notion,
  no cron/timer/webhook/launch agent/global config, no staging, no commit,
  no push, no branch, no PR, no pilot repo touch, and no live Open Mic
  Colorado touch.

## 3. External Coordinator Input: GPT-5.5 Pro

Sami supplied GPT-5.5 Pro's coordinator framing for this turn. Scribed summary:

- E6-D should define Outcome Circle mechanics before Polaris mode panel work.
- E6-DASH-002 should display modes after mechanics are defined.
- Outcome Circle is the first real burden-reduction mechanism.
- Auditor pass is not approval.
- Rubric satisfied is not approval.
- Commit/push still requires Sami exact approval unless explicitly included in
  the packet.

Accepted for E6-D:
- Outcome Circle mechanics are architecture and therefore `NEEDS_GPT`.
- E6-D is design-only; no protocol/schema implementation happens here.
- The goal is to move Sami to the edges of scoped work loops, not to remove
  Sami's approval authority.

Left undecided:
- Whether E6-D2 should codify the packet in `PROTOCOL.md` immediately after
  critique or whether Polaris mode/outcome display should come first.
- Whether future Outcome Circles ever allow internal commits/pushes.

## 4. Problem Statement

The current harness routes each turn well: Codex builds, Claude audits, GPT
coordinates strategic work, Sami approves, and Polaris shows the next action.
That still leaves Sami as the relay for every step when work requires multiple
builder/auditor iterations.

Outcome Circles are intended to move Sami to the edges of a scoped work loop.
Sami approves a bounded outcome, packet, scope, stop conditions, and authority
limits up front. Builder and auditor can then iterate inside that boundary
until they reach a pass state, blocker, iteration cap, GPT call-back, Sami
call-back, or scope conflict.

The safety risk is a soft-approval loop where models approve each other,
rubric satisfaction becomes completion, or repeated agreement substitutes for
evidence. E6-D defines the safe contract. It does not implement a loop,
create tooling, edit protocol, or authorize any future circle.

## 5. Outcome Circle Entry

Entry requires the exact phrase:

```text
Approved Outcome Circle: <packet name>
```

Entry also requires the full Outcome Packet inline with the approval. A packet
linked elsewhere is useful context but is not enough unless the approval text
explicitly incorporates that exact packet.

Non-entry cases:
- Verbal agreement is not entry.
- Agent consensus is not entry.
- Dashboard green status is not entry.
- Prior approval of similar work is not entry.
- A GPT recommendation is not entry.
- A Claude audit pass is not entry.
- A Codex implementation plan is not entry.

If the exact entry phrase or required packet fields are missing, the mode is
not `Execution`; classify as `Unknown` or `Coordinator` and default to Ask GPT
or Sami as appropriate.

## 6. Outcome Packet Schema

Minimum packet fields:

| Field | Required content |
| --- | --- |
| Outcome statement / description | The desired end state in plain language |
| Rubric | Gradeable criteria for auditor evaluation |
| Allowed files | Exact paths, globs, or path classes the builder may edit |
| No-touch list | Explicit forbidden files, repos, runtime surfaces, tools, and config |
| Max iterations | Hard cap on builder/auditor cycles before call-back |
| Builder | Node assigned to implementation/investigation |
| Auditor / grader | Independent node assigned to grade against rubric |
| Pass evidence | Concrete evidence required for each rubric item |
| Stop conditions | Conditions that immediately pause the circle |
| When Sami is called back | Approval, taste, risk, scope, commit/push, cost, blocker, or final decision points |
| When GPT is called back | Architecture/rubric ambiguity, repeated failure, conflict, drift, or synthesis need |
| Commit/push rule | Whether internal commits/pushes are forbidden or explicitly allowed |
| Artifact visibility requirement | Local-only, pushed, PR, exported, or visible-to-external-advisor expectation |
| Branch/PR policy if applicable | Branch name, PR shape, draft/ready status, CI policy, consolidation rule |

Missing required fields do not automatically fail the whole turn; they block
circle entry. The next action becomes packet repair, GPT synthesis, or Sami
decision.

## 7. Rubric Design

Rubric requirements:
- Criteria must be explicit and gradeable.
- Avoid vague criteria such as "looks good", "reasonable", or "done well"
  unless they are broken into observable checks.
- Each criterion should map to evidence: test output, diff path, screenshot,
  static check, user-visible behavior, reviewer finding, or written rationale.
- Criteria should be independently checkable by the auditor.
- Criteria must not require the builder to grade its own work.
- UX/taste criteria are allowed only when Sami defines them clearly enough for
  the auditor to check.
- A rubric criterion may include a "requires Sami taste check" clause; that is
  a stop condition, not a pass criterion the auditor can satisfy alone.
- Ambiguous criteria trigger GPT or Sami call-back.

Good rubric shape:

```text
- Dashboard above-the-fold shows exactly one primary action.
  Evidence: screenshot or static HTML excerpt; auditor confirms no competing
  primary action.
```

Bad rubric shape:

```text
- Make the dashboard good.
```

## 8. Loop Mechanics

Minimal conceptual loop:

1. Builder reads the Outcome Packet, `PROTOCOL.md`, `COLLAB.md`, Polaris, and
   latest turn notes.
2. Builder attempts the next scoped step.
3. Builder records a turn note with changed files, evidence, state, and
   whether the work remains inside the packet.
4. Auditor grades against the rubric using pass evidence.
5. Auditor returns one result state plus required revisions or stop reason.
6. Builder revises if result is `needs_revision` and iteration cap remains.
7. Auditor regrades.
8. Loop stops on `satisfied`, blocker, max iterations, Sami stop condition,
   GPT trigger, scope conflict, or any safety issue.

This is a design model only. E6-D does not implement tooling, scripts,
automation, branch policy, or loop runner behavior.

## 9. Result States

| State | Meaning | Next action |
| --- | --- | --- |
| `satisfied` | Auditor believes the rubric is satisfied | Prepare final handoff and required approval request |
| `needs_revision` | Rubric has concrete gaps within scope | Builder revises if iterations remain |
| `max_iterations_reached` | Iteration cap hit | Stop and call Sami/GPT per packet |
| `blocker` | Work cannot proceed for a concrete reason | Stop and report blocker |
| `scope_conflict` | Needed action exceeds allowed files/scope or touches no-touch | Stop and call Sami; may call GPT for synthesis |
| `needs_gpt` | Coordinator synthesis is required | Ask GPT with exact question |
| `needs_sami` | Approval/taste/risk/product decision required | Ask Sami with exact decision packet |
| `failed` | Attempt failed and revision path is not viable | Stop and report evidence |
| `interrupted` | External interruption, conflicting state, or manual stop | Freeze state and hand off |

`satisfied` means the auditor believes the rubric is satisfied. `satisfied`
does not authorize commit, push, new scope, or final completion. It is
evidence for Sami or for an explicitly pre-approved packet action.

## 10. Stop Conditions

Stop the circle when any of these occur:

- Max iterations reached.
- Same failure repeats twice.
- Rubric is unclear or internally inconsistent.
- Scope creep appears.
- No-touch risk appears.
- Security concern appears.
- Human taste decision is needed.
- Claude/Codex disagree on a material finding.
- Confidence falls below the packet threshold or cannot be stated.
- Unexpected file changes appear.
- CI/PR cost risk appears.
- Model loop becomes sycophantic or agreement lacks evidence.
- Builder needs to touch files not listed in allowed files.
- Auditor cannot independently verify pass evidence.
- GPT or Sami call-back condition fires.

When a stop condition fires, the active repo-writing node records a turn note
and updates `COLLAB.md` / Polaris only if in scope. It does not continue by
interpreting silence as permission.

## 11. GPT Call-Back Conditions

Call GPT during a circle when:

- Architecture drift appears.
- Rubric ambiguity appears.
- Repeated failure occurs.
- Builder and auditor disagree materially.
- UX/cognitive-load issue appears.
- "Are we wasting time?" is raised by any actor.
- Pass evidence is unclear.
- Mode confidence falls below threshold.
- Scope interpretation is strategically ambiguous.
- Transport, automation, security, or cross-repo concerns appear.
- Sami asks for synthesis.

The handoff must include the exact question to paste to GPT and the current
packet context. GPT may recommend continue, replan, add worker, add tester,
synthesize skill, reset strategy, move to next milestone, or stop. GPT does
not approve scope, pushes, or completion.

## 12. Sami Call-Back Conditions

Call Sami when:

- Approval is required.
- Scope expansion is needed.
- Commit/push/branch/PR action is needed unless explicitly pre-approved.
- Taste decision is needed.
- Risk decision is needed.
- Product direction is needed.
- Cost/CI/PR concern appears.
- Stop/continue decision is needed after blocker or iteration cap.
- Agent disagreement cannot be resolved by evidence.
- A no-touch exception would be required.
- The circle appears to be more work than manual coordination.

The call-back should be a compact Human Decision Packet with exact options and
exact approval text if approval is requested.

## 13. Commit / Push Rules

Default:
- No commits or pushes occur inside an Outcome Circle unless the exact Outcome
  Packet approval explicitly allows them.
- Without explicit commit/push allowance, a circle may produce local artifacts,
  turn notes, verification evidence, and a final handoff only.
- Final commit/push requires separate exact approval text.

If commit/push is allowed inside a packet, the packet must state:
- branch name or branch policy
- allowed file scope
- commit message policy
- whether PR is required
- draft vs ready PR expectation
- CI/check handling
- max commits or batching rule
- stop conditions for conflicts, CI failures, cost, or unexpected diff
- whether push to `main` is forbidden

Even when a packet permits commits/pushes, no model can approve new scope,
unsafe risk, or final product completion unless Sami's exact approval text
says so.

## 14. Anti-Sycophancy / Independent Verification

Rules:
- Builder cannot grade its own work.
- Auditor must search for failure modes, not just summarize success.
- Critique must either name concerns or list checked failure modes found
  absent.
- Model consensus is not approval.
- Repeated agreement without evidence triggers GPT.
- Worker self-report is not completion.
- Auditor pass is evidence, not approval.
- GPT synthesis must be attributed; do not launder it into "the system
  decided."

Minimum auditor output inside a circle:
- result state
- rubric-by-rubric grade
- evidence checked
- specific concerns or checked-absent failure modes
- whether stop/GPT/Sami call-back is required
- whether any file/scope/no-touch boundary changed

## 15. Relationship To Project Mode

An approved Outcome Circle activates `Execution` mode for the scoped lane.
Outside a circle, `Coordinator` mode remains the default for architecture,
roadmap, scope, and outcome definition. `Unknown` mode defaults to Ask GPT.
`Sami-decision-pending` pauses the circle until Sami acts.

The auditor may challenge mode if no valid packet exists, if the exact entry
phrase is missing, or if the active work has drifted outside the packet. If a
turn claims `Execution` without a valid packet, classification should be
upgraded to `Unknown` or `Coordinator` with reason.

## 16. Relationship To Polaris

Design only; no E6-D implementation.

Future Polaris should show:
- whether an Outcome Circle is active
- packet name
- current iteration count and max iterations
- next actor
- current result state
- stop status
- Sami call-back condition, if active
- GPT call-back condition, if active
- artifact visibility
- commit/push rule summary

Polaris should still preserve the single-recommendation principle. If the
circle needs GPT, primary action becomes "Ask GPT". If it needs Sami, primary
action becomes the Human Decision Packet. If it is executing, primary action
names the next repo actor.

## 17. Risks And Failure Modes

| Risk | Mitigation |
| --- | --- |
| Bad packet | Missing/ambiguous packet blocks entry; ask GPT/Sami to repair |
| Vague rubric | Require evidence-mapped criteria; ambiguous criteria trigger call-back |
| Hidden scope expansion | Allowed files/no-touch lists are packet fields; scope conflict stops loop |
| Auditor false pass | Pass is evidence only; final approval remains Sami unless explicitly pre-approved |
| Runaway loop | Max iterations, repeated-failure stop, and confidence thresholds |
| Cost/CI churn | Branch/PR policy and CI cost stop conditions required if applicable |
| Stale dashboard | Polaris remains view-only snapshot; COLLAB/turn notes authoritative |
| GPT not called when needed | GPT call-back conditions and `UNCLEAR` defaults |
| Sami dragged back into every turn | Call Sami only at packet-defined edges or safety/approval conditions |
| Transport bypassing Git/source of truth | Transport remains deferred and cannot become governance |
| Sycophantic loop | Auditor failure-mode checks; repeated agreement without evidence triggers GPT |
| Commit/push confusion | Default no commit/push inside circle; explicit packet rule required |

## 18. Smallest Next Implementation After E6-D

Recommendation if E6-D is accepted after Claude critique: **E6-D2 protocol/schema
codification for Outcome Packet and Outcome Circle entry**, not a loop runner.

Rationale:
- The design is useful only if future agents can reliably identify valid circle
  entry and required packet fields.
- Codifying the packet in `PROTOCOL.md` and the kit protocol template is a
  smaller step than implementing loops or changing Polaris.
- It preserves safety by making "rubric satisfied is not approval" enforceable
  before any UI or automation encourages Execution mode.

Alternatives:
- `E6-D-FIX-001`: if Claude finds defects in this design.
- `E6-DASH-002`: if Sami wants Polaris to show Outcome Circle/Project Mode
  before protocol codification.
- `E6-E advisor-notes`: if GPT input provenance becomes the bigger bottleneck.
- Defer/pause: if the system should be observed manually before codifying.

## 19. Exact Approval Text

Immediate next recommended authorization, after E6-D:

```text
You are Claude Code in /Users/samiserrag/Documents/GitHub/claude-codex.

Critique E6-D as auditor/advisor.

Read:
- .agent-handoff/PROTOCOL.md
- .agent-handoff/OPERATING-MODEL.md
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E6-D-codex-outcome-circle-mechanics-design.md

Focus:
1. Did Codex keep E6-D design-only?
2. Did Codex change only the allowed E6-D files, aside from pre-existing local
   E6-C post-merge refresh state?
3. Does the Outcome Circle entry rule require exact phrase plus inline packet?
4. Is the Outcome Packet schema complete but not overbuilt?
5. Are rubric requirements gradeable and evidence-based?
6. Do loop mechanics avoid implementation/tooling?
7. Are result states clear, especially satisfied != approval?
8. Are stop conditions strong enough to prevent runaway loops and scope creep?
9. Are GPT and Sami call-back conditions distinct and useful?
10. Are commit/push defaults safe?
11. Does the design preserve Project Mode semantics?
12. Does the Polaris relationship remain design-only?
13. Does the design prevent sycophantic builder/auditor loops?
14. Is E6-D safe to accept, or does it need E6-D-FIX-001?
15. What is the smallest next turn if accepted?

Output only:
- .agent-handoff/turns/E6-D-claude-critique-outcome-circle-mechanics-design.md
- .agent-handoff/COLLAB.md handoff update
- DASHBOARD.md / DASHBOARD.html only if snapshot handoff requires it

Do not edit PROTOCOL.md, OPERATING-MODEL.md, kit/v1, alert-state.sh, or any
advisor-notes/reflections/improvements path.
Do not stage, commit, push, branch, or PR.
Hard stop after critique.
```

Possible implementation authorization after critique, if accepted:

```text
Authorize E6-D2 as protocol/schema codification only for Outcome Circle entry
and Outcome Packet fields. Scope would be PROTOCOL.md, kit protocol template,
COLLAB.md, and one E6-D2 turn note. No loop runner, automation, Polaris mode
panel, advisor-notes path, API setup, transport, staging, commit, push, branch,
or PR.
```

## Verification

Pre-edit status:
- `git status --short --untracked-files=all` showed pre-existing local
  post-merge refresh state before E6-D:
  - `M .agent-handoff/COLLAB.md`
  - `M .agent-handoff/DASHBOARD.html`
  - `M .agent-handoff/DASHBOARD.md`
  - `?? .agent-handoff/turns/E6-C-POST-MERGE-claude-dashboard-refresh.md`

Post-edit verification:
- `git status --short --untracked-files=all` showed only the expected
  Claude-Codex handoff/dashboard changes plus the pre-existing untracked
  E6-C post-merge refresh note:
  - `M .agent-handoff/COLLAB.md`
  - `M .agent-handoff/DASHBOARD.html`
  - `M .agent-handoff/DASHBOARD.md`
  - `?? .agent-handoff/turns/E6-C-POST-MERGE-claude-dashboard-refresh.md`
  - `?? .agent-handoff/turns/E6-D-codex-outcome-circle-mechanics-design.md`
- `git diff --check` passed with no output.
- `git diff --cached --name-only` returned no staged files.
- `git diff --name-only` returned only:
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/DASHBOARD.html`
  - `.agent-handoff/DASHBOARD.md`
- No-touch diff check returned no changes for `.agent-handoff/PROTOCOL.md`,
  `.agent-handoff/OPERATING-MODEL.md`, `.agent-handoff/tools/alert-state.sh`,
  `kit/v1`, root docs, `docs/`, `.mcp.json`, `.claude`, generated files, or
  trust/event surfaces.
- `find .agent-handoff -maxdepth 1` found no `advisor-notes`, `reflections`, or
  `improvements` directories.
- Polaris HTML self-contained check found no external CSS, external JavaScript,
  HTTP(S) URLs, storage APIs, network APIs, or server requirement.
- Copy buttons copy `target.innerText`; the script opens any closed `details`
  ancestor before copy so copied payload text is visible at copy time.
- No PROTOCOL.md edit, OPERATING-MODEL.md edit, kit template edit,
  alert-state.sh edit, advisor-notes/reflections/improvements path, automation,
  model/API setup, NanoClaw/CommonGround/MCP/plugin/bridge, Notion, cron,
  timer/webhook/launch agent, or global config change was made by E6-D.
- Read-only pilot repo status check was clean. A read-only status check in
  `/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective` showed an
  unrelated untracked `.claude/scheduled_tasks.lock`; E6-D did not write in that
  repo.

## Handoff

Next actor: Claude Code.

Requested action: critique E6-D for safety, scope, outcome-packet completeness,
call-back boundaries, anti-sycophancy, commit/push safety, and no-touch
compliance.

Hard stop after E6-D. No implementation, protocol edit, operating-model edit,
kit edit, alert-state edit, advisor-notes/reflections/improvements path,
Polaris redesign, notifier/wakeup implementation, automation, model/API setup,
NanoClaw/CommonGround/MCP/plugin/bridge, Notion, cron/timer/webhook/launch
agent/global config, staging, commit, push, branch, PR, pilot repo, live Open
Mic Colorado, or product/runtime work is authorized.
