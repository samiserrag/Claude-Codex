# E6-ROUTING-COCKPIT-001 — Claude audit, routing-cockpit scope-lock

- Turn type: audit / critique (design-only scope-lock)
- Author: Claude Code (Anthropic), auditor role
- Date: 2026-05-30
- Audited: `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-codex-routing-cockpit-scope-lock.md` (556 lines)
- Audited against: PROTOCOL.md, OPERATING-MODEL.md (§4 Coordinator Trigger, §5 Project Mode, §8 Outcome Circle), STRATEGY.md (§7 borrow/avoid), DASHBOARD.md, and the Stage A/B milestone reviews.

## Coordinator Trigger

- State: NEEDS_GPT (auditor upgrade — see Soft Obs 1)
- Reason: the *content* is tooling/routing architecture, which is a NEEDS_GPT
  trigger under OPERATING-MODEL §4 even though the drafting turn was bounded;
  the go-forward adoption decision warrants GPT exit synthesis before approval.

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none beyond standard repo files
- standing rules invoked: AGENTS.md, CLAUDE.md, PROTOCOL.md, OPERATING-MODEL.md,
  STRATEGY.md, the E6-ROUTING-COCKPIT-001 design-only scope, anti-sycophancy
  critique discipline
```

## Agent / Phase

Auditor (Claude Code) / critique.

## Audit Result

**`satisfied`** — 0 blockers, 4 soft observations. Ready for preservation PR
if Sami chooses, with an auditor recommendation to route through GPT exit
synthesis before *approving the routing architecture for implementation*
(Soft Obs 1). The scope-lock is a faithful, well-bounded design-only artifact.

`satisfied` is not approval. Auditor pass is not approval. Model consensus is
not approval. This result authorizes nothing: no preservation PR, no commit,
push, branch, PR, merge; no dashboard implementation; no scratch work; no
Stage C. Sami is the only approver.

## Scope discipline (criterion 1) — PASS

- Working tree before audit: exactly ` M .agent-handoff/COLLAB.md` +
  `?? …E6-ROUTING-COCKPIT-001-codex-routing-cockpit-scope-lock.md`.
- `git diff --check` clean. HEAD `943ea38d2ec42e33e6bb6f9eeeb327d109eee9a8`.
- No-touch diff empty across PROTOCOL/OPERATING-MODEL/STRATEGY/DASHBOARD.md/
  DASHBOARD.html/kit/v1/README/START_HERE/AGENTS/CLAUDE/.gitignore.
- scratch-001 and scratch-002 present, untouched (read-only confirm).
- Codex's COLLAB edit is **additive**: a new Current Owner block plus a demoted
  `### Previous preserved packet context` subheader. No history deleted, no
  invariant removed. In scope (COLLAB allowed).
- Auditor writes this turn: this note + the COLLAB audit section only.

## Criteria 2–13 — all PASS (independent check)

| # | Criterion | Verdict | Evidence in scope-lock |
| --- | --- | --- | --- |
| 2 | Milestone alignment | PASS | Stage A `guided_clean` / Stage B `kit_led_clean_enough` (L42-43, L93-96); proof loops not the bottleneck (L59-61); routing/copy-paste burden is (L76-77, L97-98); kit gaps real but deferred (L96, Non-Goals L107) |
| 3 | Incorporates both milestone reviews | PASS (1 nit) | cockpit as display surface (Outcome Desc, §7); deterministic routing spine (§1-§2); no further proof loop (L59-61); standard gate/risk/escalation patterns (§6); irreversible⇒Sami (§2 rule 5, §3, L177-179); burden metric (§8). Nit: anti-collapse ladder not stated as one line — Soft Obs 2 |
| 4 | Routing-state quality | PASS | reuses ROUTINE/NEEDS_GPT/NEEDS_HUMAN/UNCLEAR + blocked/paused_*; OC result states held separate from approval (§1 L154-157) |
| 5 | "Who decides?" | PASS | node proposes route+reason; auditor upgrades/challenges; coordinator resolves ambiguity; human approves exact consequence; classifier never waives human approval (§2, esp. rule 5 + L177-179) |
| 6 | Human-required triggers | PASS | §3 covers all 15 required items + memory/skill/automation/dependency/runtime; framed "consequence changes state outside approved reversible scope" |
| 7 | Coordinator-required triggers | PASS | §4 covers all 8 required items incl. standard-pattern-mapping uncertainty and auditor upgrade |
| 8 | Routine discipline | PASS | §1 + §5 twice state "ROUTINE does not authorize mutation"; examples are read-only/draft/in-scope |
| 9 | Standard-pattern mapping | PASS | §6 maps reviewer gates, policy checks, risk tiers (0-3), CODEOWNERS/branch-protection, CI/status-as-evidence, escalation, human-in-the-loop; explicit "none implemented by this scope-lock" (L297-298) |
| 10 | Minimum cockpit fields | PASS | §7 has all 11 required fields + decision options + auditor-pass/consensus reminder; names anti-patterns to avoid |
| 11 | Burden metrics | PASS | §8 = 4 primary + 1 optional (incl. GPT-rewrite-passes); "measurement fields, not approval gates" |
| 12 | No-automation boundary | PASS | §9 explicit (autonomous approval, commit/push/merge, hidden state, background agents, notifications, services, credentials, global config, dashboard impl, live routing scripts, MCP/bridge, scheduler, subagents, memory/skill, scratch cleanup) |
| 13 | Future build packet outline | PASS | §10 names future surfaces (DASHBOARD.md/.html, COLLAB.md, one turn note), describes without implementing; includes likely no-touch + pass evidence + browser-QA-if-HTML |

## Failure-mode sweep (criterion 14) — all CLEAR

Checked and found ABSENT: invents routing theory without standard mapping (no
— §6 maps thoroughly); classifier waives human approval (no — §2 rule 5);
cockpit draft text becomes approval (no — "drafted text is not approval"
field, §7); dashboard implementation performed (no); no-touch files changed
(no — empty diff); automation or hidden state added (no — §9); burden metrics
missing (no — §8); Sami-as-sole-approver not preserved (no — stated
throughout). No accidental authorization: §11 allowed files = COLLAB + this
scope-lock note; §17 authorizes no git action.

## 4 soft observations (non-blocking; real critique, not padding)

1. **Self-classified `ROUTINE`; the adoption decision is a `NEEDS_GPT`
   trigger.** The scope-lock's own Coordinator Trigger is `ROUTINE` (L12),
   defensible for the *drafting act* under Sami's bounded instructions. But the
   *subject* — routing/tooling architecture — is a documented `NEEDS_GPT`
   trigger (OPERATING-MODEL §4), and the bootstrap posture (STRATEGY §9: no
   automatic relaxation) leans toward GPT exit synthesis before adopting a new
   routing architecture. **Auditor upgrade:** route the go-forward *adoption*
   decision through GPT exit synthesis before Sami approves implementation.
   §16 already lists architecture/strategy and standard-pattern-mapping
   uncertainty as coordinator triggers — this just makes the recommendation
   explicit. Not a blocker for preserving the design-only draft.

2. **The anti-collapse ladder isn't stated as a single invariant.** Sami's
   criterion 3 and both milestone reviews name the exact framing
   `done ≠ audited ≠ satisfied ≠ approved ≠ merged ≠ released must not
   collapse`. The scope-lock has the *substance* distributed (result-states-
   aren't-approval §1; who-decides §2; human-required triggers §3; repeated
   "satisfied is not approval"), but never enumerates the lifecycle ladder as
   one line. Forward fix for the implementation packet: state it once,
   verbatim, as the cockpit's load-bearing invariant.

3. **Cockpit shows route state but not lifecycle stage.** Since the
   differentiator is preventing the six lifecycle states from collapsing, the
   minimum panel (§7) would be stronger with a distinct **lifecycle-stage**
   indicator (where an item sits on done→audited→satisfied→approved→merged→
   released) alongside the routing state. Routing state answers "who's next";
   lifecycle stage answers "how far toward released" — they're different axes
   and the product thesis lives in the second. Forward recommendation for the
   implementation packet.

4. **No burden baseline.** §8 defines good metrics but no baseline-capture
   step. The Stage A/B → preservation arc just produced exactly this data
   (multiple hand-authored exact authorizations, multi-actor routing,
   per-PR copy-paste handoffs). Forward fix: capture a one-time baseline from
   the recent arc in the implementation packet so "reduces burden" becomes
   measurable rather than asserted.

All four are forward recommendations for the *implementation* packet or the
adoption decision. None changes the design-only scope-lock's correctness, and
none blocks preservation.

## Positive signals

- Standard-pattern mapping (§6) is the strongest part: it directly answers the
  milestone-review imperative "don't invent routing theory," including the
  honest "none of these are implemented by this scope-lock."
- The non-overridable human-required trigger list (§3) is more complete than
  Sami's prompt asked for, and is framed by the right principle (consequence
  leaves approved reversible scope).
- `ROUTINE`-is-not-mutation is stated twice (§1, §5) — exactly the back-door
  the smarter-agent threat model (STRATEGY §5) warns about.
- Design-only discipline held: zero implementation, zero no-touch edits.

## Scope-lock disposition

Ready for a preservation PR **if Sami chooses**. Auditor recommendation:
consider GPT exit synthesis on the routing architecture before approving the
*implementation* (Soft Obs 1); the four soft observations are best folded into
the future implementation packet, not the scope-lock.

## Browser QA

- Tool used: N/A
- Reason: docs-only audit of a design scope-lock; no UI or browser-rendered
  surface changed. Correct N/A per CLAUDE.md Browser Runner rule. (Browser QA
  will be required when the later DASHBOARD.html implementation runs.)

## Automation Budget

N/A. No polling, cron, webhook, heartbeat, scheduled check, notifier,
automation, subagent, skill, or memory work created or required.

## Authorization boundaries reaffirmed

`satisfied` is not approval. Auditor pass is not approval. Model consensus is
not approval. This audit authorizes no preservation PR, commit, push, branch,
PR, merge, dashboard implementation, scratch work/cleanup, Stage C, or
execution. A separate explicit Sami authorization is required for any of
those, including preserving these audit artifacts.

## Handoff

- Next actor: **Sami** (sole approver) — decide: (a) accept this audit; (b)
  whether to route the routing architecture through GPT exit synthesis before
  approving implementation (auditor lean: yes, per Soft Obs 1); (c) whether to
  authorize a preservation PR for the scope-lock + this audit + COLLAB; (d)
  defer kit-fix findings and scratch disposition as before. Nothing is
  preserved or approved by this turn.
