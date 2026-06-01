# E6-CASE-STUDY-001 - Codex Revision Note

- Turn type: small revision pass only
- Author: Codex
- Date: 2026-05-31
- Draft revised:
  `.agent-handoff/turns/E6-CASE-STUDY-001-codex-audit-trail-lied-case-study-draft.md`
- Audit source:
  `.agent-handoff/turns/E6-CASE-STUDY-001-claude-audit-audit-trail-lied-case-study-draft.md`

## Scope

Applied a small wording and claim-ledger revision pass addressing Claude's four
soft observations. This turn did not publish, implement, stage, commit, push,
branch, open a PR, merge, clean scratch, clean Finder duplicate noise, or edit
dashboard/protocol/strategy/kit/root docs.

## Changes

1. Title / intent nuance
   - Replaced the working title with:
     "The audit trail was fluent but wrong: replayable checks and approval
     boundaries caught it."
   - Removed title-level "lied" framing from the draft body. The draft continues
     to explicitly state that it makes no deception, intent, or malice claim.

2. Claim ledger
   - Added CHECK rows for deterministic verifications supported by preserved
     repo artifacts:
     - `DASHBOARD.html` md5 / line / byte checks from the Iteration 3 audit.
     - static grep checks for scripts, buttons, handlers, external refs,
       network/storage/timer APIs, and "safe to approve" wording.
     - `git diff --check` and tracked-modified-file checks.
   - Did not add a browser/render CHECK row because no Sami-independent render
     source was available in the read artifacts for this revision pass.

3. Chronology
   - Replaced too-crisp "twice" framing with safer language around
     "at least three audit-evidence failures across the cockpit audit arc."
   - Kept the Iteration 1 / Iteration 2 / Iteration 3 descriptions tied to what
     the preserved audit notes record.

4. Credit accuracy / anti-sycophancy
   - Clarified that one fabrication was caught by the harness push gate.
   - Clarified that later unsupported claims were corrected through
     remeasurement / rechecking.
   - Rewrote the Claude credit line so the push gate and replayable checks get
     more credit than polished audit prose.

## Preserved Limits

The revised draft still preserves:

- n=1 limitation
- no production-readiness claim
- no public-release claim
- no strong-security claim
- no broad novelty claim
- no claim that multi-agent audit creates truth
- no intentional deception claim
- cost / copy-paste burden honesty
- stripped-down falsification test as the next step

`satisfied` is not approval. Auditor pass is not approval. Model consensus is
not approval. Sami remains the only approver. This revision note is not
publication authorization.
