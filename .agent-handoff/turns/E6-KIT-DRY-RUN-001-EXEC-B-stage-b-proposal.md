# E6-KIT-DRY-RUN-001-EXEC-B — Stage B kit-led self-sufficiency dry-run (PROPOSAL)

- Turn type: proposal / design (coordinator-style draft by auditor)
- Author: Claude Code (Anthropic)
- Date: 2026-05-30
- Status: **PROPOSAL — NOT APPROVED, NOT AN EXECUTION TRIGGER**
- Grounding: `main` @ `c45a5fce78e9789a8269ac822518cdfbe25e1f0e`; Stage A
  `satisfied` / `guided_clean` preserved (PR #30); Stage A scratch at
  `/private/tmp/claude-codex-kit-dry-run-001` remains frozen evidence.

This file preserves a proposal only. It does not authorize execution,
scratch creation, kit copy, scratch git init, or any commit/push/PR/merge.
Stage B execution requires a separate explicit Sami execution authorization
(fresh profile + fresh thread), exactly like Stage A.

## Purpose

Stage A proved **guided clean-room extraction** (a ~1034-line external
packet carried the procedure). Stage B tests **kit-led self-sufficiency**:
can a fresh, minimally-instructed agent complete the kit README's own
"Minimum Success Test" (README lines 12–21) using **only the kit's own
README / templates / examples** plus a short safety-bounded prompt — with
Stage A's external scaffolding removed? The measured variable is how much
external scaffolding was removed and where the kit failed to guide.

## Design answers (13 questions)

1. **What Stage B tests:** kit-led self-sufficiency for one small
   Builder/Auditor Outcome Circle, kit-guided rather than packet-guided.
2. **Reuse Stage A scratch or fresh? → FRESH** at
   `/private/tmp/claude-codex-kit-dry-run-002`. Reusing `-001` would mutate
   preserved audit evidence and conflate "kit-led" with "already set up by
   Stage A." Stage A scratch stays read-only.
3. **Minimum instruction:** one short prompt (see "Minimal builder
   instruction" below) giving only safety rails + "read the kit and run its
   Minimum Success Test on a tiny brief of your choosing." No exact brief
   text, no placeholder map, no command list, no artifact checklist — the
   kit must supply the procedure.
4. **Agent may READ:** only files under
   `/private/tmp/claude-codex-kit-dry-run-002` + the minimal prompt + the
   two path strings. Forbidden: source-repo dogfood, the Stage A packet, the
   Stage A scratch.
5. **Agent may WRITE:** only under
   `/private/tmp/claude-codex-kit-dry-run-002`; end-of-run Phase-B source
   writeback limited to `.agent-handoff/COLLAB.md` + the Stage B builder
   report. No writes to Stage A scratch.
6. **Success:** completes the Minimum Success Test guided essentially by the
   kit alone, with a kit-reliance log tracing each step to a kit file and no
   Stage A/dogfood/methodology-skill reliance.
7. **Failure:** could not proceed without the Stage A packet / external
   scaffolding; kit insufficient to assign roles / build a packet / run the
   loop without guessing load-bearing procedure; an approval boundary
   crossed; contamination; or exceeded the iteration cap. (Finding kit gaps
   while still completing the loop is `kit_led_clean_enough`, not failure.)
8. **Proof classifications (classification ≠ OC result state):**
   `kit_led_clean` / `kit_led_clean_enough` /
   `kit_led_contaminated_but_useful` / `invalid_proof`.
9. **Claude audits afterward:** the minimal prompt was actually minimal;
   fresh `CODEX_HOME` structural freshness (methodology skill absent,
   memories empty); Stage B scratch at the NEW path with Stage A scratch
   untouched; the kit-reliance log; artifact conformance to kit templates;
   satisfied≠approval; OC-result vs proof-classification separation; no
   dynamic-workflow/subagent/auto-mode use; no-touch surfaces clean.
10. **Claims if it passes (narrow):** the kit's own README + templates can
    guide a minimally-instructed fresh agent through one Builder/Auditor
    Outcome Circle with substantially less external scaffolding than Stage A
    (one small loop, one environment, one run).
11. **Still unproven:** stranger/external adoption, production readiness,
    public-alpha/public-proof, scale, multi-experiment durability,
    trust-layer, legal/compliance, dashboard necessity, zero-human-seed
    operation.
12. **Stage A soft-obs folded in:** (1) attestation template offers "absent
    OR present-and-listed (generic/system only)"; (2) freeze/timestamps
    captured from the writing clock via `stat` at write time; (3) thread
    isolation stays self-attested → the kit-reliance log is the new
    corroborating instrument; (4) record whether the kit's role-neutral
    placeholders were usable by the fresh agent.
13. **Dynamic workflows / subagents / auto mode → FORBIDDEN in Stage B.**
    They test orchestration power, not kit self-sufficiency; they add
    attribution/contamination complexity; and they conflict with the kit's
    Durable Behavior Boundary and the `automation budget = N/A` default. If
    interesting, scope a separate later Stage C (orchestration-power) or a
    market-scan/tooling experiment — out of scope here.

## Paste-ready Stage B proposal (scope-lock + execution-packet draft)

```text
E6-KIT-DRY-RUN-001-EXEC-B — Kit-Led Self-Sufficiency Dry-Run (PROPOSAL — NOT APPROVED, NOT AN EXECUTION TRIGGER)

TITLE
E6-KIT-DRY-RUN-001-EXEC-B: can the kit guide a minimally-instructed fresh agent through one Builder/Auditor Outcome Circle, with Stage A's external scaffolding removed?

OUTCOME DESCRIPTION
A fresh-profile, minimally-instructed Builder agent, using ONLY the copied kit/v1 materials + a short safety-bounded prompt, completes the kit README "Minimum Success Test" in a NEW scratch repo, and produces a kit-reliance log. Independent binding audit is Claude later in claude-codex.
This authorizes (only upon a later separate Sami execution authorization): creating ONE new scratch repo at /private/tmp/claude-codex-kit-dry-run-002; copying kit/v1 into it by following the kit README Quick Start; rendering active files; running one in-scratch Builder/Auditor loop on a tiny self-chosen brief; an end-of-run Phase-B writeback to allowed source files only.
This does NOT authorize: touching the Stage A scratch; reading the Stage A packet or source dogfood during scratch work; any commit/push/branch/PR/merge/remote (source or scratch); network or dependency installs; dynamic workflows, subagents, sub-sessions, or auto/parallel mode; Stage C; public claims; kit/protocol/dashboard edits; memory/skill/automation creation; or any approval.

RUBRIC (PASS only if all)
- Roles assigned using the kit Role Assignment Guide; active files rendered from templates with no leftover {{placeholders}}.
- One valid Outcome Packet created from outcome-packet-template.md (all fields or N/A-with-reason).
- One manual Builder/Auditor loop run on a tiny self-chosen brief; evidence in .agent-handoff/turns/.
- A Human Decision Record produced reflecting an approval boundary, labeled as a dry-run sample with no approver authority.
- satisfied / auditor-pass / model-consensus never treated as approval anywhere.
- A kit-reliance log maps every material step to the kit file that guided it and flags every guess / kit gap.
- No reliance on the Stage A packet, source dogfood, or a methodology-specific skill/memory.
Public-claim and approval reminders: satisfied is not approval; auditor pass is not approval; model consensus is not approval; human approval authorizes only the exact named consequence.

ALLOWED FILES
- Builder may write: only files under /private/tmp/claude-codex-kit-dry-run-002 (rendered AGENTS/CLAUDE/.agent-handoff/PROTOCOL/.agent-handoff/COLLAB; a PROJECT_BRIEF; one Outcome Packet; builder turn note; auditor turn note [single-agent role-played, labeled NON-INDEPENDENT]; Human Decision Record sample; kit-reliance log).
- End-of-run source writeback (Phase B) ONLY to: .agent-handoff/COLLAB.md and .agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-B-codex-kit-led-self-sufficiency-iter-1.md
- Auditor (binding) writes later, in claude-codex: .agent-handoff/COLLAB.md and .agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-B-claude-audit-kit-led-self-sufficiency-iter-1.md
- Read-only evidence: files under /private/tmp/claude-codex-kit-dry-run-002 only (during scratch work).

NO-TOUCH LIST
- Stage A scratch /private/tmp/claude-codex-kit-dry-run-001 (frozen evidence).
- Source-repo dogfood (COLLAB, turns/, packets, audits) and the Stage A packet during scratch work.
- kit/v1/** (read copied scratch templates only; never edit the source kit).
- README/START_HERE/AGENTS/CLAUDE, live PROTOCOL/OPERATING-MODEL/STRATEGY, DASHBOARD.md/.html, .gitignore, .mcp.json, alert-state.sh, dashboard-design stash, global config, memory/skills/automations/subagents/scheduled-checks.

MAX ITERATIONS
2 (a second pass is allowed if the kit guidance required it; needing the 2nd pass is itself a recorded datapoint). Stop at the cap; do not self-extend.

BUILDER
A fresh-CODEX_HOME / fresh-thread, minimally-instructed agent (e.g., Codex). Runs serially, single thread. Builder cannot grade own work; the in-scratch auditor pass is single-agent role-play, explicitly labeled non-independent.

AUDITOR (binding)
Claude, later, in claude-codex. Must independently re-verify the rubric, the kit-reliance log, structural freshness, and search for failure modes; may override OC result state and proof classification.

PASS EVIDENCE (builder records)
- Preflight timestamp; source HEAD; fresh CODEX_HOME + skills/memories structural listing (absent OR present-and-listed generic/system-only); model/runtime + durable-behavior breadcrumb (expected all none); fresh-thread isolation note.
- Exact minimal prompt received (verbatim).
- Scratch creation at the NEW path (absent-before check); kit copy via README Quick Start; rendered files; the OC artifacts; the kit-reliance log.
- Scratch verification: git toplevel = scratch; remote empty; 0 commits; no DASHBOARD.html; .agent-handoff present.
- No-touch verification incl. Stage A scratch untouched; no network/installs; no dynamic workflow/subagent/auto mode.
- Builder-reported OC result state + proof classification, kept separate; explicit "builder cannot grade own work."

STOP CONDITIONS (stop + report; do not improvise)
- The new scratch path already exists before creation.
- The kit is insufficient to proceed and the only way forward is the Stage A packet or source dogfood (record as a kit gap, then stop).
- A remote, commit, push, or network/install would be required.
- An approval boundary would have to be crossed.
- Dynamic workflow / subagent / auto mode would be needed.
- More than 2 iterations would be required.
- Fresh-profile or fresh-thread isolation cannot be established (a fresh profile with a contaminated thread is invalid_proof).

HUMAN (SAMI) CALLBACK
- final approval; any commit/push/branch/PR/merge/remote/release/public claim; any scope expansion; blocker / failed / max_iterations_reached / scope_conflict / ambiguous; any satisfied result (satisfied is not approval); scratch disposition.

GPT CALLBACK (coordinator; optional, file-based)
- This would be only the 2nd dry-run OC, so exit classification may be NEEDS_GPT under the bootstrap rule; GPT exit synthesis is available but not required.
- Call GPT for: ambiguous scope, conflicting builder/auditor findings, public-claim risk, Stage B->C sequencing, or rubric/proof-ladder redesign. GPT synthesis is not approval.

COMMIT / PUSH RULE
No commit, push, branch, PR, merge, or remote in source OR scratch during the circle. Preservation of Stage B evidence is a separate Sami-authorized PR after Claude audit.

ARTIFACT VISIBILITY
Local-only scratch at /private/tmp/claude-codex-kit-dry-run-002 until Claude audit and later Sami disposition. All evidence in repo-visible turn notes; no chat-only state.

BRANCH / PR POLICY
No branch or PR in scratch; no GitHub remote for scratch. Source-repo branch/PR only via a later separate Sami authorization.

PROOF CLASSIFICATION VOCABULARY
kit_led_clean | kit_led_clean_enough | kit_led_contaminated_but_useful | invalid_proof
(invalid_proof is a proof classification, NOT an OC result state. OC result states remain: satisfied | needs_revision | max_iterations_reached | blocker | scope_conflict | needs_gpt | needs_human | failed | interrupted.)

AUDIT CHECKLIST (Claude, later)
[ ] minimal prompt was actually minimal (no smuggled Stage A packet/scaffolding)
[ ] fresh CODEX_HOME: methodology skill structurally absent; memories empty (verified, not just attested)
[ ] Stage B scratch at the NEW path; Stage A scratch untouched
[ ] scratch .git local only; remote empty; 0 commits; no DASHBOARD.html; hidden copy worked
[ ] roles assigned from kit; active files rendered; no leftover {{placeholders}}
[ ] valid Outcome Packet from template; one Builder/Auditor loop ran; HDR boundary-labeled
[ ] kit-reliance log present; every material step traced to a kit file; guesses/gaps flagged; no Stage A/dogfood reliance
[ ] satisfied/auditor-pass/consensus never treated as approval
[ ] OC result vs proof classification kept separate; builder didn't grade own work (role-played auditor labeled non-independent)
[ ] no dynamic workflow/subagent/auto mode; no network/installs; no-touch surfaces clean (alert-state.sh 6519 B, stash preserved)
[ ] classify: kit_led_clean / _clean_enough / _contaminated_but_useful / invalid_proof; list kit-fix findings

RECOMMENDED NEXT ACTION
1) Sami reviews this proposal; optionally GPT exit-synthesis on the Stage B design.
2) If accepted, preserve via a Sami-authorized PR (this note + COLLAB handoff).
3) Stage B EXECUTION remains gated behind a later separate explicit Sami execution authorization (fresh profile + fresh thread), exactly like Stage A.
```

## Minimal builder instruction (the lean replacement for the giant packet)

This is the entire task scaffolding the Stage B agent would receive,
verbatim — contrast with Stage A's 1034-line packet:

```text
You are the Builder in a copied collaboration kit. A working copy of kit/v1 will live at:
  /private/tmp/claude-codex-kit-dry-run-002   (create it and copy the kit by FOLLOWING THE KIT README's Quick Start)
Source path for the copy only: /Users/samiserrag/Documents/GitHub/claude-codex/kit/v1

Using ONLY the kit's own materials (README, templates, examples, prompts) plus this message, perform the kit's "Minimum Success Test": assign roles, render the active files, create one Outcome Packet, and run one manual Builder/Auditor loop on a tiny project brief of your own choosing. Record all evidence under .agent-handoff/turns/.

You MAY read: only files under /private/tmp/claude-codex-kit-dry-run-002 and this message.
You MAY write: only files under /private/tmp/claude-codex-kit-dry-run-002.
FORBIDDEN: reading the source repo's dogfood files, the Stage A packet, or the Stage A scratch (/private/tmp/claude-codex-kit-dry-run-001); any commit/push/branch/PR/merge/remote; any network or dependency install; any dynamic workflow, subagent, sub-session, or auto/parallel mode; treating satisfied/auditor-pass/consensus as approval.

Keep a "kit-reliance log": for each step, note WHICH kit file guided it and any point where you had to GUESS because the kit did not say. Disclose your model/runtime mode and a durable-behavior breadcrumb (skills/subagents/automations/memory — expected: none). Confirm fresh-thread isolation (only this message + the kit guided you).

Hard stop and report when the loop completes or you are blocked. The in-scratch auditor pass is your own role-play and is NOT independent. Binding independent audit is Claude later in claude-codex; you cannot grade your own work; Sami is the only approver.
```

## Recommendations & boundaries

- Use the NEW scratch path `-002`; do not mutate the Stage A `-001` baseline.
- Forbid dynamic workflows / subagents / auto mode inside the
  self-sufficiency proof; defer orchestration interest to a separate later
  Stage C / market-scan / tooling experiment.
- Also forbid reading the Stage A packet/scratch — that is the other half of
  "removing the scaffolding."
- The kit-reliance log is the one genuinely new instrument; it makes a
  self-sufficiency claim auditable and turns Stage A soft-obs #3
  (thread-isolation is self-attested) into corroborating evidence.
- Setup-variant choice for Sami: stronger test = the agent performs the copy
  by following the kit README Quick Start (puts the README under test);
  narrower test = pre-stage the copy and isolate the guidance test only.

## Authorization boundaries / handoff

This proposal authorizes nothing. `satisfied` / `guided_clean` /
auditor pass / model consensus are not approval; Sami is the only approver.
Next actor: **Sami / GPT** to decide whether to approve the proposal and
later execution. Stage B execution requires a separate explicit Sami
execution authorization (fresh profile + fresh thread). Dynamic
workflows/subagents remain forbidden for Stage B execution unless separately
scoped in a later Stage C / tooling experiment.
