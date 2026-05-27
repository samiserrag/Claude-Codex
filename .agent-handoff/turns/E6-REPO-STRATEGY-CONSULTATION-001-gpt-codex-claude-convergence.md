# E6-REPO-STRATEGY-CONSULTATION-001 — GPT-5.5 Pro consultation + Codex commentary + Claude convergence

## Coordinator Trigger

- State: NEEDS_GPT (consultation), now resolved by this scribe turn
- Reason: Sami sent a strategic-fork-level question (repo strategy /
  dogfood-pollution / methodology-skills placement) to GPT-5.5 Pro for
  coordinator consultation, then routed to Codex for commentary, then
  to Claude Code for convergence response. This scribe turn captures
  the three-way convergence as repo-visible evidence per PROTOCOL.md
  "Hidden chat context is not authoritative unless it is summarized
  into these files."

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none beyond standard repo files
- standing rules invoked: AGENTS.md, CLAUDE.md, PROTOCOL.md, COLLAB.md,
  Durable Behavior Promotion Boundary (E6-DURABLE-SCOPE-001), Response
  History Policy, External Advisor Input rule, no-touch list from
  Sami's pasted scribe authorization
```

## Agent

Scribe (Claude Code), recording GPT-5.5 Pro consultation response +
Codex commentary verbatim with attribution. Claude Code is not the
author of either; Claude is preserving both per the configured human
approver's pasted authorization.

## Phase

retrospective (consultation scribe).

## Files touched this turn

- `.agent-handoff/turns/E6-REPO-STRATEGY-CONSULTATION-001-gpt-codex-claude-convergence.md`
  (this note, created)

No other files touched by this scribe action. The consultation outcome
itself does not authorize any commit, push, branch, PR, merge, public
release, public-proof run, repo creation, trust-layer implementation,
dashboard design work, memory/skill/automation/subagent/scheduled-check
creation, or new Outcome Circle. Consultation is recommendation, not
approval.

## Source context

Sami's pending consultation prompt (drafted by Claude, pasted by Sami
to GPT-5.5 Pro) covered:

- Repo-strategy question with five options A–E:
  - A. Fresh public-proof repo
  - B. Two-repo split
  - C. Continue here with stronger framing
  - D. Stop dogfood OCs here
  - E. Dry-run first, then decide
- Methodology-supporting skills placement (four options i–iv)
- Whether `E6-REPO-STRATEGY-001` warranted a separate scope-lock OC

Both GPT-5.5 Pro and Codex responded. Their responses are scribed
below verbatim.

## Verbatim GPT-5.5 Pro consultation response

The text below was authored by GPT-5.5 Pro and scribed into this repo
by Claude Code under the configured human approver's exit-synthesis
authorization. Length cap removed per PROTOCOL.md external-advisor
scribing rules. Markdown formatting preserved as received.

```text
Consensus recommendation:

Lead with a synthesized version of B + E, not pure A, C, D, or E:

B/E hybrid:
Keep claude-codex as the dogfood/source repo.
After the current kit cleanup lands, run one dry-run or dry-run scope to test extractability.
Then create a clean adopter-facing repo from kit/v1, with new history and role-neutral proof runs.

Why not pure A? A fresh public-proof repo is probably the final public-proof surface, but jumping straight there before a dry run risks copying a kit that has not actually been tested by a "stranger-like" workflow.

Why not pure B immediately? The two-repo split is the right architecture, but the exact contents of the adopter-facing repo should be informed by the dry run and the current E6-KIT-001-FIX-001 cleanup.

Why not C? "Continue here, harden framing" is useful internally but insufficient for serious public adoption. A banner cannot overcome hundreds of dogfood artifacts and non-anonymized GitHub history.

Why not D? Stopping dogfood OCs here is too restrictive. The dogfood repo is valuable as a living lab. The problem is not dogfooding; it is confusing dogfood with adopter-facing proof.

Why not pure E? A dry run first is good, but it should be framed as a step toward repo strategy, not a substitute for repo strategy. If the dry run succeeds, you still likely want a clean adopter repo for public proof.

Divergent opinions:

The strongest alternative is A now: immediately create a neutral public-proof repo and stop worrying about the polluted source repo. That is attractive if the goal is zero personal-name / zero dogfood impression. The downside is you may fork too early, before E6-KIT-001-FIX-001 and dry-run findings improve the kit.

The second alternative is C now: keep everything in claude-codex, add a very explicit "this is a dogfood repo; kit is under kit/v1" banner, and ship faster. That is cheaper and preserves continuity, but it makes the adopter work too hard and keeps GitHub metadata/personal-account concerns in the foreground.

The third alternative is D now: stop dogfood here. I would not do that. This repo's dogfood history is the strongest proof of discipline. The cleaner move is to keep dogfooding here while extracting public surfaces elsewhere.

Skills placement:

Do not create methodology skills yet.

The Durable Behavior Boundary applies: skills, automations, subagents, memory files, and standing workflow changes require explicit human-approved promotion. The MD lists four placement options, and the safest current answer is iv: no skills yet. The skill-placement decision depends on whether kit/v1/** stays here or becomes a separate adopter repo.

After the repo strategy is decided:

If clean adopter repo:
  Put any adopter-facing methodology skills in that repo's kit only,
  after an explicit Durable Behavior Proposal.

If claude-codex remains dogfood:
  Dogfood-only skills may live in this repo only if clearly labeled dogfood,
  but they should not be presented as adopter requirements.

Never use global ~/.claude/skills for this project yet.

High-confidence skill candidates like preservation PR flow, no-touch verification, audit turn-note shape, and GPT exit-synthesis scribing are real repeated patterns. But they should remain proposals until approved as durable behavior.

Risk / tradeoff summary:

The highest risk is category confusion: adopters think the dogfood harness is the required protocol. That would make the method look heavy, personal, and model-specific even though the kit is becoming role-neutral.

The second risk is credibility laundering: if you scrub or rewrite dogfood history too aggressively, you weaken the very proof that the process preserved failures honestly. The better story is "private/source dogfood produced a clean kit and fresh public-proof runs."

The third risk is premature skills/automation: a skill that helps this repo might become hidden dogfood machinery, exactly the kind of durable behavior the new boundary is meant to govern. Skills should come after repo strategy, not before.

The fourth risk is sync overhead in a two-repo split. But that is manageable if claude-codex remains source/dogfood and the adopter repo only receives stable, audited kit exports.

My recommended next sequence:

Assuming E6-KIT-001-FIX-001 goes as planned:

1. Preserve E6-KIT-001-FIX-001.
2. Run E6-REPO-STRATEGY-001 as a design-only scope lock.
3. Decide source/dogfood repo vs adopter-facing repo strategy.
4. Run E6-KIT-DRY-RUN-001 against extracted kit, preferably in a scratch repo.
5. If dry-run passes, create clean adopter-facing repo.
6. Run 3–5 fresh role-neutral public-proof circles there.
7. Only then consider public-alpha/top-of-funnel.

Approval boundary:

This is not approval. It is a coordinator recommendation. Sami remains the only approver.
```

GPT also supplied a paste-ready scope-lock prompt for
`E6-REPO-STRATEGY-001`. Preserved verbatim in §"Pre-staged
`E6-REPO-STRATEGY-001` scope-lock prompt (GPT-drafted)" below.

End of verbatim GPT-5.5 Pro text.

## Verbatim Codex commentary

The text below was authored by Codex and scribed into this repo by
Claude Code under the same authorization. Length cap removed.

```text
CODEX: I agree with Claude's concern and GPT's core answer: claude-codex should be treated as the dogfood/source repo, not the clean adopter repo.

One state correction from the current MD: E6-KIT-001-FIX-001 is now audited locally as `satisfied`, but not preserved. The working tree is dirty with the fix + Claude audit notes. That matters because any clean-entry repo-strategy OC should either wait until this fix stack is preserved, or explicitly start from a known dirty state. I would not start repo-strategy while pretending main is clean.

My recommendation:

1. Accept E6-KIT-001-FIX-001 audit directly, without a separate GPT exit-synthesis note.
2. Authorize a small preservation PR for E6-KIT-001-FIX-001.
3. After that merges, run E6-REPO-STRATEGY-001 design-only.
4. Then run E6-KIT-DRY-RUN-001 in a scratch repo, not inside claude-codex.
5. If dry-run passes, create a clean adopter-facing repo from the kit with fresh role-neutral public-proof runs.

I would sharpen GPT's B/E hybrid this way: repo-strategy scope-lock should come before the dry-run, because the dry-run needs to know whether it is testing "copy kit from dogfood repo" or "extract into a clean repo shape." But the actual public/adopter repo should wait until after the dry-run, so you do not fossilize early kit mistakes.

On skills: Claude's concern is stronger now because Codex used an existing global-ish Codex skill and declared it in the breadcrumb. That was not a violation, but it proves hidden methodology support can shape turns. I would choose `iv` for now: no new methodology skills yet. After repo strategy, adopter-facing skills should live in the clean kit/adopter repo only after a Durable Behavior Proposal. Dogfood-only skills may exist here later, but should be labeled dogfood and never presented as adopter requirements. Avoid global skills for this methodology.

Biggest underweighted risk: first-impression category error. A reader may conclude the protocol requires hundreds of turn notes, model-specific roles, dashboard history, and personal GitHub metadata. A banner helps, but does not solve that. The cleaner story is: dogfood/source repo proves the messy development trail; clean adopter repo proves extractability.

Approval boundary: this is a recommendation only. No commit, PR, repo creation, skill creation, dry-run, or public-proof work is approved by this response.
```

End of verbatim Codex text.

## Claude convergence response (this auditor/scribe agent)

I (Claude Code) responded to Sami's chat-only relay of the GPT and
Codex outputs by confirming convergence and surfacing two things:

1. **Both GPT and Codex independently picked option (a) from my
   E6-KIT-001-FIX-001 audit's handoff framing** — accept satisfied
   directly, no separate GPT exit synthesis for that surgical fix.
2. **Codex's state correction is right.** My E6-KIT-001-FIX-001 audit
   leaned toward "wait for consultation before preserving" — but
   Codex's framing is cleaner: preserve FIX-001 first → main returns
   to clean → then start E6-REPO-STRATEGY-001 from clean entry.
   Running repo-strategy with the FIX-001 stack still dirty would
   conflate two scopes.

I also flagged the chat-only-state preservation problem (PROTOCOL.md
"Hidden chat context is not authoritative unless it is summarized into
these files") and recommended scribing the consultation now rather
than losing GPT's paste-ready scope-lock prompt and the three-way
convergence to chat history. This turn note is that scribe.

I did not act on any next step without Sami's explicit authorization.
Specifically I did not: scribe autonomously, authorize FIX-001
preservation, start `E6-REPO-STRATEGY-001`, start `E6-KIT-DRY-RUN-001`,
create any skill/subagent/automation/memory file, or act on the
durable-behavior shortlist I produced earlier the same day (now
explicitly parked per consultation verdict `iv`).

## Structured summary (Claude scribe)

This summary is Claude's compression of the consultation for cold
readers. The verbatim blocks above are authoritative on conflict.

### Repo-strategy decision

| Option | Verdict |
| --- | --- |
| A. Fresh public-proof repo immediately | **Not chosen** — too early; forks before dry-run validation |
| B. Two-repo split | **Chosen as architecture**, but timing depends on dry-run |
| C. Continue here, harden framing | **Not chosen** — insufficient for serious public adoption; banner cannot overcome non-anonymized GitHub history |
| D. Stop dogfood OCs here | **Explicitly rejected** — dogfood history is the strongest proof of discipline |
| E. Dry-run first, then decide | **Chosen as gating experiment**, but framed as step toward strategy, not substitute |
| **B/E hybrid (synthesized)** | **Accepted** — `claude-codex` stays dogfood/source; dry-run validates extractability; clean adopter repo extracted after dry-run passes |

### Skills-placement verdict

| Option | Verdict |
| --- | --- |
| (i) Skills shipped inside `kit/v1/.claude/skills/` or `kit/v1/.agent-handoff/skills/` | Deferred — conditional on repo-strategy outcome and explicit Durable Behavior Proposal |
| (ii) Skills inside this repo's `.claude/skills/` outside `kit/v1/**` | Deferred — only allowed if clearly labeled dogfood and never presented as adopter requirement |
| (iii) Skills in `~/.claude/skills/` (global) | **Explicitly rejected for this project** |
| **(iv) No skills yet** | **CHOSEN** — defer all packaging until repo strategy is decided |

The high-confidence shortlist from Claude's earlier scan (preservation
PR flow, no-touch verification, audit turn-note shape, GPT
exit-synthesis scribing) remains observed-not-promoted. None advance to
the `proposed` stage of the Durable Behavior Promotion Flow without
explicit human-approver authorization.

### Final agreed sequence

```
1. Preserve E6-KIT-001-FIX-001 (this PR).
2. Run E6-REPO-STRATEGY-001 as design-only scope lock.
3. Decide source/dogfood repo vs adopter-facing repo strategy.
4. Run E6-KIT-DRY-RUN-001 against extracted kit, in a scratch repo
   (NOT inside claude-codex).
5. If dry-run passes, create clean adopter-facing repo from kit/v1
   with fresh role-neutral history.
6. Run 3–5 fresh role-neutral public-proof circles in that clean repo.
7. Only then consider public-alpha / top-of-funnel.
```

### Biggest underweighted risk identified

**First-impression category error.** An adopter reading this repo
before reading `kit/v1/README.md` "What Not To Copy" section may
conclude the protocol requires hundreds of turn notes, model-specific
roles, dashboard history, and personal GitHub metadata. A banner helps
but does not solve this. Two-repo separation does.

Three secondary risks identified (full text in verbatim GPT block):
- credibility laundering (over-scrubbing dogfood history would
  weaken the discipline proof)
- premature skills/automation (would become hidden dogfood machinery)
- two-repo sync overhead (manageable if dogfood is source-of-truth and
  adopter repo only receives stable audited exports)

### Accepted / rejected / undecided record

| Item | Disposition |
| --- | --- |
| `claude-codex` stays dogfood/source repo | **Accepted** by GPT, Codex, Claude convergence |
| Separate clean adopter-facing repo extracted later | **Accepted** — timing after dry-run |
| Repo strategy scope-lock BEFORE dry-run | **Accepted** (Codex sharpening) |
| Dry-run in scratch repo, NOT in `claude-codex` | **Accepted** |
| Clean adopter repo creation AFTER dry-run validates extractability | **Accepted** |
| 3–5 fresh role-neutral public-proof circles in clean repo | **Recommended** |
| No methodology skills yet (verdict `iv`) | **Accepted** |
| Adopter-facing skills only via Durable Behavior Proposal (after repo strategy) | **Accepted** |
| Global `~/.claude/skills/` for this project | **Rejected** |
| Accept E6-KIT-001-FIX-001 audit directly, no separate GPT exit synthesis | **Accepted** by GPT, Codex, Claude — independent convergence |
| Preserve E6-KIT-001-FIX-001 before starting `E6-REPO-STRATEGY-001` | **Accepted** (Codex state correction) |
| Preserve consultation convergence in the same PR | **Accepted** (this scribe) |
| Public-alpha packaging | **Explicitly still not approved** |
| Public-proof runs in this repo | **Explicitly still not approved** |
| Trust-layer implementation | **Explicitly still not approved** |
| Dashboard-design work | **Explicitly still not approved (stash preserved)** |
| Memory / skill / subagent / automation / scheduled-check creation | **Explicitly still not approved** |
| Banner-only mitigation (Option C) | **Rejected** as insufficient for public adoption |
| Stopping dogfood OCs here (Option D) | **Rejected** — dogfood is the discipline proof |

## Pre-staged `E6-REPO-STRATEGY-001` scope-lock prompt (GPT-drafted)

GPT supplied a paste-ready scope-lock prompt for `E6-REPO-STRATEGY-001`
to be used **after this preservation PR merges**. Preserved verbatim
below for re-use without re-derivation.

```text
[Lane 1: Claude-Codex Harness | Codex / OpenAI | Thread: E6-REPO-STRATEGY-001 repo split and public-proof strategy scope lock | Role: repo-strategy architect]

Approved:

Run E6-REPO-STRATEGY-001 as a design-only scope-lock turn.

Purpose:
- Decide how to separate dogfood/source evidence from adopter-facing public proof.
- Evaluate whether claude-codex should remain the dogfood/source repo.
- Evaluate whether kit/v1 should be extracted to a clean adopter-facing repo.
- Decide whether E6-KIT-DRY-RUN-001 should run before or after repository split.
- Decide where methodology-supporting skills may live, if anywhere.
- Preserve that public release is not approved.
- Preserve that public-proof runs are not started.
- Preserve that dashboard-design stash remains paused.
- Preserve that no skill, subagent, automation, or memory file may be created without explicit Durable Behavior approval.

Current expected state:
- main is clean after PR #21 and after E6-KIT-001-FIX-001 preservation, if completed.
- kit/v1 is the current adopter-facing kit.
- claude-codex contains dogfood/source artifacts, turn notes, dashboard, strategy, operating model, and GitHub metadata.
- Dashboard lane is paused.
- No public-alpha packaging is approved.

Allowed files:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-REPO-STRATEGY-001-codex-repo-split-public-proof-scope-lock.md`

Do not edit:
- `kit/v1/**`
- root `README.md`
- root `AGENTS.md`
- root `CLAUDE.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/mockups/**`
- `.gitignore`
- `.design-concepts/`
- `docs/`
- runtime/product files
- trust-layer files
- memory files
- skills
- subagents
- automations
- scheduled checks
- public-release files
- public-proof-run files
- unrelated files

Scope-lock output must answer:

1. Repo role classification
- Should `claude-codex` be treated as dogfood/source repo?
- Should a separate adopter-facing repo exist?
- Should fresh public-proof runs happen in a clean repo?
- What should happen to the current historical dogfood evidence?

2. Strategy options
Evaluate:
- A. Fresh public-proof repo
- B. Two-repo split
- C. Continue here with stronger framing
- D. Stop dogfood OCs here
- E. Dry-run first, then decide
- Any synthesized option.

3. Recommended path
Give a single recommended path and rationale.

4. Dry-run placement
Should E6-KIT-DRY-RUN-001 run:
- inside claude-codex?
- in a scratch repo?
- in a future adopter-facing repo?
- before or after repo split?

5. Public-proof plan
Recommend 3–5 fresh role-neutral public-proof circles:
- objective/mechanical
- judgment-based
- needs_revision
- blocker/scope_conflict
- human decision note example

6. Skills placement
Evaluate:
- kit-included skills
- dogfood-only repo skills
- global skills
- no skills yet

Apply Durable Behavior Boundary:
- observed pattern is not durable behavior
- skill proposal is not approval
- automation proposal is not approval
- only the human approver can authorize durable behavior

7. First-impression risk
Assess what an adopter sees before reading "What Not To Copy."
Recommend whether a banner is sufficient or whether separate repo is required.

8. Metadata reality
State what file edits cannot remove:
- owner account
- repo URL
- PR metadata
- commit metadata
- branch names
- historical GitHub activity

9. Exact next track
Recommend the next authorized track:
- E6-KIT-DRY-RUN-001
- clean repo extraction
- public-proof repo setup
- skills design-only
- other

Verification:
- `git status --short --branch --untracked-files=all`
- `git diff --check`
- `git stash list | head -5`
- confirm only allowed files changed
- confirm no kit diff
- confirm no root-doc diff
- confirm no protocol/strategy/operating/dashboard diff
- confirm no `.gitignore` diff
- confirm `.design-concepts/` remains absent
- confirm no skills/memory/automation/subagent files created
- confirm no public-release work
- confirm no new Outcome Circle
- confirm zero `* 2.md` duplicates

Hard stop after scope lock.
No staging, commit, push, branch, PR, merge, kit edits, repo creation, skill creation, dashboard work, public release, trust implementation, public proof run, or new Outcome Circle.
```

End of GPT-drafted scope-lock prompt.

## Authorization boundaries reaffirmed

This scribe action preserves the consultation as repo-visible evidence
but does NOT authorize any action. Specifically:

- ❌ `E6-REPO-STRATEGY-001` is **not started** (paste-ready prompt
  above is preserved for later use after this preservation PR merges)
- ❌ `E6-KIT-DRY-RUN-001` is **not started**
- ❌ Clean adopter-facing repo creation is **not authorized**
- ❌ Public-proof runs are **not authorized**
- ❌ Public-alpha packaging is **not authorized**
- ❌ Trust-layer implementation is **not authorized**
- ❌ Top-of-funnel publishing is **not authorized**
- ❌ Whitepaper publication is **not authorized**
- ❌ Dashboard design work is **not authorized** (stash preserved)
- ❌ Memory / skill / subagent / automation / scheduled-check creation
  is **not authorized**
- ❌ Skills shortlist from earlier today is **parked** per consultation
  verdict `iv`; no autonomous promotion
- ❌ No new Outcome Circle is **started** by this scribe action

Consultation output is now preserved as evidence. The next move is
this preservation PR (E6-KIT-001-FIX-001 + this scribe note), then
Sami's explicit authorization for `E6-REPO-STRATEGY-001` after the
PR merges.

## Browser QA

- Tool used: N/A
- Reason: consultation scribe note only; no UI, browser-rendered
  surface, or runtime behavior changed.

## Automation Budget

N/A. No polling, cron, webhook, heartbeat, scheduled check, notifier,
automation, subagent, skill, memory file, hosted memory integration,
or runtime work was created or required during this scribe action.

## Handoff

- Next agent: **the configured human approver (Sami)**.
- Specific ask: after this scribe note is created, proceed with the
  E6-KIT-001-FIX-001 preservation PR per Sami's pasted authorization
  (bundling this scribe note into the same PR). Do not merge until
  Sami explicitly authorizes merge.
