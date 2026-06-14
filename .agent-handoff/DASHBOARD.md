# Decision Cockpit v1

> ## GRAVEYARD — preserved as evidence, demoted to tried-and-found-theatre
>
> **This Decision Cockpit is not working oversight. It is kept as evidence of a
> control we tried and found to be theatre.** A dashboard that summarizes agent
> work for a human to approve — when the human cannot independently check the
> summary, and the summary is written by the untrusted agent — does not produce
> oversight. It launders agent decisions into a human-signable form: it moves the
> blame to the human without moving the understanding. See the full accounting in
> [the whitepaper](../docs/verification-theater-in-ai-agent-work.md) and
> the front-door [`README.md`](../README.md).
>
> What survived the dogfood instead is small and lives elsewhere: a handful of
> deterministic, human-approved gates a human can read in full, run on inputs they
> choose, and confirm by the *consequence* — not the printed verdict — see
> [`gates/`](../gates/); plus a human who refuses to trust the agent's
> self-report. The one surviving rule: **`satisfied` is not approval.**
>
> The snapshot below is preserved unchanged as the artifact under report. Read it
> as the thing we are demoting, not as a recommendation. (Note: this snapshot
> predates the rename of the boundary doc from "envelope" to **operating limits**
> and of the mechanical checks to **human-approved gates**; historical wording is
> left intact on purpose.)

Static reference cockpit snapshot for the current handoff. This file is a view,
not the source of truth, not an approval mechanism, and not a routing runtime.

Snapshot as-of: 2026-05-31, Iteration 3 convergence pass.

## Human Role Right Now

No decision needed.

Manual relay only. You are forwarding an agent-to-agent audit request because
automatic handoff is not built yet.

Human attention needed: Low — quick scan only.

Review depth: quick scan for obvious wrong direction.

Next action: send the audit request to Claude Code.

Do not approve, merge, preserve, publish, clean up, or expand scope from this
screen. Human approval is only needed when an exact named consequence is
requested.

Quick scan:

1. Does the next actor + paste target match what you expect?
2. Does the named action touch anything irreversible: commit, PR, merge,
   release, public claim, credential, global config, or scratch cleanup?
   If yes, this is not a relay. Slow down and route as a human decision.

Route strip:

`Codex implemented -> Claude audits -> Sami decides`

Lifecycle stage:

`implemented locally / audit pending / not approved / not merged / not released`

## Exact Next Action

Recipient / paste target: Claude Code audit thread.

```text
CLAUDE — AUDIT E6-ROUTING-COCKPIT-001 IMPLEMENTATION ITER 3

Audit the Codex Iteration 3 implementation against Sami's Iteration 3
authorization and the preserved implementation packet.

Read:
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E6-ROUTING-COCKPIT-001-claude-audit-routing-cockpit-implementation-iter-2.md
- .agent-handoff/turns/E6-ROUTING-COCKPIT-001-codex-routing-cockpit-implementation-iter-3.md

Verify:
- top of page distinguishes routine manual relay from a real human decision
- human role, attention level, review depth, exact next action, and paste target are visible
- quick-scan checklist is visible
- verification basis separates replayable checks, environment-dependent checks, visible artifacts, agent judgment, and human judgment
- replayable factual claims cite a command/result or tell the reader exactly what to rerun
- non-checkable claims are marked as agent judgment, not fact
- route strip and lifecycle stage are present
- done ≠ audited ≠ satisfied ≠ approved ≠ merged ≠ released remains visible
- Ask Coordinator and Pause remain visible as valid options
- slow-down triggers remain visible
- static dashboard only: no executable page code, inline event handlers, browser storage, external assets, hidden state, automation, notification layer, approval control, public claim, protocol edit, kit edit, global config, or scratch change
- localhost rendered browser QA evidence is real, or any gap is recorded honestly
- no no-touch files changed
- seven pre-existing duplicate-noise files remain untouched
- scratch dirs remain untouched

Do not implement, edit, stage, commit, branch, push, PR, merge, clean scratch,
clean noise files, preserve, or broaden scope.

Return blockers, nits, missing controls, rendered-QA result, result state, and
exact fixes if needed.
```

## Verification Basis

Do not trust polished prose by itself. Load-bearing claims must reduce to
replayable checks, visible artifacts, or explicit human judgment.

### Anyone-Replayable Deterministic Checks

These checks are cheap to replay. Run them before relying on this snapshot, or
read the latest builder note for the actual output captured during this turn.

| Claim type | Command or replay pointer | Current interpretation |
| --- | --- | --- |
| Working tree shape | `git status --short --branch --untracked-files=all` | Run before relying; status changes as audit and preservation files are added. |
| Whitespace / patch hygiene | `git diff --check` | Latest builder note records the actual result. |
| Static self-containment | Search `DASHBOARD.html` for executable page code, inline event handlers, browser storage, external asset refs, timers, approval controls, and forbidden approval-framing text. | Latest builder note records the exact searches and outputs. |
| Artifact size / identity | `wc -l .agent-handoff/DASHBOARD.html` and `md5 .agent-handoff/DASHBOARD.html` | Run before relying; these identify the local artifact but do not prove correctness. |
| No-touch boundary | Diff the no-touch paths named in the implementation authorization. | Latest builder note records the actual no-touch check. |

### Environment-Dependent Checks

These are reproducible, but the result depends on local browser/tooling state.

- Localhost render QA requires serving `.agent-handoff/` locally, opening the
  dashboard in Chrome, and verifying visible text plus browser-tool evidence.
- Console and network observations must say whether they were actually captured
  after the browser tooling was attached.
- If rendered QA is not actually performed, the audit must say so. Do not infer
  rendered evidence from static prose.

### Visible Artifacts

- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-codex-routing-cockpit-implementation-iter-3.md`
- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-claude-audit-routing-cockpit-implementation-iter-2.md`
- PR metadata, only when a PR exists

### Agent Judgment

These are useful judgments, not self-validating facts:

- layout is clearer
- risk framing is appropriate
- human cognitive load is reduced
- the quick-scan model is more humane
- the current handoff is low attention

Treat these as claims for the auditor or human to inspect, not as proof.

### Human Judgment

Only Sami can authorize exact named consequences such as commit, PR, merge,
release, cleanup, public claim, scope expansion, protocol change, kit change,
dashboard implementation, credential/global config change, or durable behavior
change.

## Slow Down If...

- The named action is irreversible.
- The named action includes approval, merge, PR creation, preservation,
  publication, release, public claim, credential, global config, or scratch
  cleanup.
- The scope expands beyond this bounded dashboard convergence pass.
- Evidence is unclear, missing, stale, or conflicts across agents.
- Agent outputs disagree about whether the work passed.
- There is pressure to approve quickly.
- The exact action text is missing.
- The human approver is uncertain.
- The request would create hidden state, automation, memory, skills, subagents,
  scheduled checks, global config, network services, or runtime behavior.

Valid options include:

- `ask_coordinator`
- `pause_pending`
- `reject_redo`
- `reject_close`
- `authorize_exact_action` only when the exact consequence is named by Sami

Not acting immediately is allowed.

## Approval Boundary

`done ≠ audited ≠ satisfied ≠ approved ≠ merged ≠ released`

Drafted text is not approval. `satisfied` is not approval. Auditor pass is not
approval. Model consensus is not approval. Sami is the only approver.

Irreversible, approval, scope-expanding, permission-changing, public, or durable
behavior actions route to Sami. A classifier, dashboard, auditor, coordinator,
or model consensus cannot waive human approval.

## What This Screen Authorizes

- Claude may audit the Iteration 3 local static dashboard implementation.
- Claude may read the listed evidence files.
- Claude may report blockers, nits, missing controls, rendered-QA result, and
  result state.
- Codex stops after the builder report and waits for audit.

## What This Screen Does Not Authorize

- Commit, push, branch, PR, merge, preservation, or release.
- Public-proof run, public claim, launch, or top-of-funnel action.
- Protocol, kit, README, START_HERE, strategy, operating-model, `.gitignore`,
  trust-layer, runtime, memory creation, skill creation/modification,
  automation, subagent, scheduled-check, MCP/plugin/global-config, or credential
  changes.
- Scratch cleanup or changes to `/private/tmp/claude-codex-kit-dry-run-001` or
  `/private/tmp/claude-codex-kit-dry-run-002`.
- Cleanup, staging, deletion, or modification of the seven duplicate-noise
  files.
- A generic approval action or any approval without exact named consequence.

## Standard Pattern Mapping

These are routing metaphors and evidence inputs, not implemented subsystems.

| Standard pattern | Harness use | Boundary |
| --- | --- | --- |
| Reviewer gates | Claude audits Codex output and may upgrade route risk. | Auditor pass is evidence, not approval. |
| Policy checks | Allowed files, no-touch lists, stale/as-of state, verification commands. | Checks can block or inform; they do not approve. |
| Risk tiers | Routine manual relay is low attention; irreversible/public/config work is high attention. | Higher attention routes to Sami; tier labels do not authorize action. |
| CODEOWNERS / branch protection | Human owns consequences; auditor owns critique; builder owns scoped implementation. | Role ownership is not approval unless the role is the human approver. |
| CI/status checks | Diff hygiene, static searches, browser QA, and changed-file lists. | Passing checks are evidence inputs, not approval. |
| Escalation on ambiguity | `UNCLEAR` routes to Coordinator unless a human-required trigger is primary. | Ambiguity is not permission to proceed. |
| Human-in-the-loop review | Human decision actions use exact text. | Drafted text is not approval. |

## Burden Baseline Capture

No burden-reduction claim is made by this implementation. This section captures
a baseline so later cockpit work can be measured instead of asserted.

Baseline window: Stage A / Stage B kit dry-run arc through preservation of the
E6-ROUTING-COCKPIT-001 implementation packet draft and the Iteration 1 / 2 QA
and audit-integrity events.

| Metric | Baseline capture | Claim status |
| --- | --- | --- |
| Manual routing prompts / exact authorizations | Multiple exact Sami authorization prompts were required across Stage A packet preservation, Stage A execution, Stage A result preservation, Stage B proposal/result preservation, routing scope-lock preservation, implementation packet preservation, Iteration 1 implementation, Iteration 2 authorization, and Iteration 3 convergence. Exact count should be audited before use as a metric. | Baseline only; no reduction claim. |
| Ambiguous handoff moments | The routing scope-lock, implementation packet, and Iteration 3 convergence pass exist because the Stage A/B to preservation arc exposed repeated actor-routing friction and audit-trust friction. Exact count is `unknown` from repo-visible evidence alone. | Unknown fields cannot support a reduction claim. |
| Handoffs by actor class | Codex builder, Claude auditor, GPT coordinator synthesis, and Sami approval all appeared in the arc. Exact copy/paste count remains `unknown` without manual transcript counting. | Baseline only. |
| Coordinator/auditor correction count | Known examples include packet drift repair / reconfirm, Claude packet-draft soft observations, the Iteration 1 rendered-QA blocker, and the Iteration 2 audit-integrity event. Exact count remains `unknown` until audited. | Baseline only. |

## Deferred By This Dashboard

- No automatic handoff; this is still manual relay.
- No dashboard runtime.
- No live routing engine.
- No notification or wakeup layer.
- No automation, scheduled checks, subagents, memory, or skills.
- No trust-layer implementation.
- No public-proof run or release.
- No kit cleanup or Stage B retry.
- No cleanup of duplicate-noise files.

## Trust Footer

Audit trail: Git-visible when preserved. Verifiable through PR and commit
history. Tamper-evident only when protected branches, signing, manifests, or
external witnesses are configured. Not tamper-proof. No blockchain, legal,
compliance, production-readiness, or public-release claim is made by this
dashboard.

Static self-contained file. No external CSS or JavaScript. No network, storage,
automation, hidden state, or approval action exists in this dashboard.
