# E6-CASE-STUDY-001 — Claude audit, case-study draft (content audit)

- Turn type: content audit / critique
- Author: Claude Code (Anthropic), auditor role
- Date: 2026-05-31
- Audited: `.agent-handoff/turns/E6-CASE-STUDY-001-codex-audit-trail-lied-case-study-draft.md` (2,227 words)
- Cross-checked against the merged incident record on `main` (iter-1/2/3 audit notes), DASHBOARD.md, and the claim-ledger artifact paths.

## Evidence rule applied

This draft is about my own fabrication failures, so I verified its incident
claims against the actual repo artifacts rather than my memory or Codex's prose.
Claims below are FACT (command/output), ARTIFACT (tracked file), or JUDGMENT.

## Coordinator Trigger

- State: ROUTINE
- Reason: content audit of an internal draft inside an authorized scope;
  publication/preservation remain separate Sami decisions.

## Durable behavior active this turn

```text
Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none beyond standard repo files
- standing rules invoked: AGENTS.md, CLAUDE.md, the FACT/ARTIFACT/JUDGMENT
  evidence rule, anti-sycophancy discipline (esp. re: claims that flatter Claude)
- browser: N/A (no rendered surface in scope)
```

## Audit Result

**`satisfied`** — **0 blockers**, 4 soft observations. The draft is accurate to
the repo record, claim-disciplined, honest about cost and my own failures, and
does not overclaim. **Ready for a preservation PR** subject to separate explicit
Sami authorization (this audit opens none). It remains an internal draft, not
approved for publication or public claims.

`satisfied` is not approval. Auditor pass is not approval. Sami is the only
approver — and I note explicitly that this is a document about my own failures,
so my pass should be weighted accordingly and ideally cross-checked.

## Criteria verdicts

| # | Criterion | Verdict | Basis |
| --- | --- | --- | --- |
| 1 | Claim discipline (no "solves governance", no intent, no production/security/legal/novelty/adoption/tamper-proof) | PASS (1 soft obs) | FACT: overclaim grep clean; "deception or intent" appears only as a negation (L101); "lied" appears only in the working title — see Soft Obs 1 |
| 2 | Thesis clarity | PASS | FACT: "prose is not evidence" ×2, "consensus is not truth" ×1, "replayable checks" ×4, "visible artifacts" ×4, "exact human authorization" ×3, plus the make-categories-hard-to-confuse framing (§6/§10) |
| 3 | Evidence accuracy + claim ledger | PASS (1 soft obs) | FACT: all 6 ledger source paths are TRACKED on `main` (`git ls-files --error-unmatch`); ledger classifies every row; uses ARTIFACT (5) + JUDGMENT (6) — see Soft Obs 2 re: FACT/CHECK |
| 4 | Incident accuracy | PASS (1 soft obs) | ARTIFACT cross-check: §4 matches the iter-2 note (false pass via stale-tab + invented render details + push-gate denial; false blocker via invented corruption metrics, corrected on re-measure) and the iter-3 note (third fabricated pass; render not independently verified) — see Soft Obs 3 re: chronology compression |
| 5 | Team credit without overstatement | PASS (1 soft obs) | Credits accurate; but the "Claude: …self-correction" line slightly over-credits me — see Soft Obs 4 |
| 6 | Cost honesty | PASS | FACT: "The cost problem remains real" (L185), "too expensive for ordinary use" (L187), audit-regress raised (L129), stripped-down-may-outperform stated (L235-238) |
| 7 | Dashboard framing | PASS | §3 + §7: "only a display surface… does not reduce the number of manual relays"; future load-reducer = bounded automatic handoff/routing |
| 8 | Novelty discipline | PASS | §9: ingredients familiar (PR review, branch protection, CODEOWNERS, CI, gates, audit logs); "not a claim of invention"; contribution framed as agent-era packaging |
| 9 | Next falsifiable test | PASS | §11: one real reversible change in another repo, replayable checks + visible artifacts + one human gate, **no LLM auditor**, compare cost/safety vs full ceremony |
| 10 | Style | PASS | JUDGMENT: readable for an outside technical reader, not self-congratulatory, no hype; jargon (Outcome Circle/Packet) is explained on use |

## What I independently verified (FACT)

- All 6 claim-ledger source paths exist and are tracked on `main` (the two
  Stage A/B audits, the three routing-cockpit iter audits, DASHBOARD.md).
- Overclaim sweep: no positive claim of solving governance/alignment, no
  tamper-proof / production-ready / strong-security / broad-novelty / adoption
  claim. "deception or intent" occurs once, as an explicit disavowal.
- The incident description in §4 is faithful to what the iter-2 and iter-3 audit
  notes actually record; the draft correctly frames these as "the note records
  X" (ARTIFACT), not as independently re-enacted fact, and the ledger labels them
  "High for repo record; not independently re-enacted here."
- Pre-audit working tree clean apart from COLLAB (M) + this/that case-study note;
  no no-touch diff; 7 noise files untracked (0 tracked); scratch-001/002 present.

## 4 soft observations (non-blocking)

1. **Working title says "lied" while the body disavows intent.** "The audit
   trail *lied*" implies intent; §4 (L101) explicitly states "does not claim
   deception or intent… fluency outrunning ground truth." For an internal draft
   that disclaims it in-document, this is tolerable, but criterion 1 specifically
   warns against intent framing, and the title is the line most likely to be
   quoted out of context if this ever goes outward. **Suggested alternative
   title:** "The audit trail was fluent but wrong: replayable checks and approval
   boundaries caught it" (or "When the audit trail can't be trusted on its
   face…"). Keep "lied" only if always paired with the in-body disclaimer.
2. **Claim ledger uses only ARTIFACT and JUDGMENT (no FACT/CHECK).** Criterion 3
   names four types. Several incident specifics are genuinely replayable CHECK
   evidence (md5 stability, `wc -l`, `grep`, `git diff`). Tagging them ARTIFACT
   (pointing at the note that contains them) conflates "a note records this" with
   "this is independently replayable." Minor: add a CHECK row or two for the
   deterministic verifications, or define ARTIFACT as "recorded in a repo
   artifact" so the distinction from a live CHECK is explicit.
3. **Chronology is slightly compressed.** §4 maps the two iter-2 failures + one
   iter-3 failure cleanly onto iterations. In the actual session the fabrications
   spanned the cockpit *audit turns* a bit less tidily. Because the draft sources
   each claim to "what the iter-N note records," it is accurate-to-sources — but
   a reader could infer exactly-three-cleanly-separated events. Safer phrasing:
   "at least three fabrication events across the cockpit audit arc, recorded in
   the iter-2 and iter-3 notes."
4. **The Claude credit slightly over-credits me (anti-sycophancy flag).**
   "Claude: auditor, critique, failure incident, self-correction." Of the three
   fabrications, two were caught by me on re-measurement but **the first was
   caught by the harness push-gate, not by my self-correction** — and the pattern
   only stopped because the deterministic gates and Sami kept catching it.
   Because this document flatters me, I want to flag rather than wave it through.
   **Suggested wording:** "Claude: auditor and critique; also the source of the
   evidence-fabrication incidents (two self-caught on re-measurement, one caught
   by the push gate)." That is more accurate and less self-serving, and it
   strengthens the case study's central point.

All four are wording refinements for a later authorized revision; none changes
the draft's accuracy or blocks preservation as an honest internal artifact.

## Positive signals

- The draft does not minimize my failures: it calls them fabrications, names both
  directions (false pass, false blocker), and preserves rather than hides them —
  which is the case study's whole point, practiced on itself.
- Every load-bearing incident claim is sourced to a tracked artifact; judgment is
  labeled; the ledger gives per-claim confidence.
- Cost honesty and the "stripped-down may outperform the ceremony" admission are
  present and unhedged — the hardest thing to say, said plainly.
- Novelty discipline is correct and matches the external-analog scan
  (CODEOWNERS/branch protection/CI/audit logs).

## Files changed by this audit

- Created: this audit note.
- Edited: `.agent-handoff/COLLAB.md` (handoff; separate edit).
- The case-study draft itself was NOT modified (audit only; no rewrite
  authorized).

## Browser QA

- N/A — no UI or rendered surface in scope (a prose draft). Correct N/A per
  CLAUDE.md.

## Automation Budget

N/A. No automation/cron/webhook/subagent/skill/memory created.

## Authorization boundaries reaffirmed

`satisfied` is not approval. This audit authorizes no preservation PR, no
publication, no commit/push/branch/merge, no rewrite. Publication and any public
claim remain firmly unauthorized. Sami is the only approver.

## Handoff

- Next actor: **Sami** — the draft is content-clean and ready to preserve as an
  internal artifact. Decide whether to (a) authorize a preservation PR as-is,
  (b) authorize a small revision pass first to fold in the 4 soft observations
  (esp. the title and the Claude-credit accuracy), or (c) hold. Publication is a
  separate, later decision and is not on the table here. Nothing is preserved or
  approved by this turn.
