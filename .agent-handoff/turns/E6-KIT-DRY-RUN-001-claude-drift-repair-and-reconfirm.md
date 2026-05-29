# E6-KIT-DRY-RUN-001 — Claude: drift repair + Codex re-confirm

- Turn type: review / repair (auditor + mechanical-execution driver)
- Author: Claude Code (Anthropic), auditor role
- Date: 2026-05-28
- Approval target: `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-A-packet-v2.md`
  (1033 lines, untracked DRAFT — banner "DRAFT PACKET — NOT YET
  APPROVED FOR EXECUTION")

## What this turn did

Codex's confirm-audit of the regenerated Stage A dry-run packet
returned **3 drift findings** (sections 1–15 and 14 of the 17
corrective blocks faithful). On Sami's authorization naming the exact
file path, Claude applied **3 drift-only fixes** — no new design, no
scope change:

1. **Block 3, line 586 (freshness attestation).** Replaced
   `(skills and memories listed empty/absent)` with the frozen wording:
   "structural fresh-profile/home evidence recorded in the builder
   note, with skills and memories directories recorded as absent or
   present-and-listed and methodology-specific skills / repo-specific
   memories absent or demonstrably unavailable to the execution thread,
   OR Sami timestamped attestation."
2. **Block 7, line 429.** Deleted the leftover rejected-v1 bullet
   `self-reported breadcrumb is contradicted by the structural listing`.
   The correct Block 7 rule already lives at lines 164–168.
3. **Base-structure, §16.** Restored the verbatim base section
   `16. Commit/push rule` (the corrective Block-16 content had
   overwritten it, losing the commit/push/merge prohibition and "Any
   preservation PR requires separate Sami approval"). Re-established the
   base's exact 16–21 order; the pre-approval check is retained later as
   §20 `Final packet-format and approval-safety check`, canonical-state
   lines folded into §21 `Safety lines`.

## Verification (independent pass)

- All 3 drift targets grep = 0 (`empty/absent`, `self-reported
  breadcrumb is contradicted`, old header `Final pre-approval format /
  artifact check`).
- Restored base content present (base §16 `Any preservation PR…` = 1;
  re-added bullet `the operative packet can be followed without
  ambiguity` = 1; corrected freshness wording = 1).
- Top-level sections a clean 1–21, no gaps/dupes.
- Working tree: only `COLLAB.md` (modified) + this packet (untracked)
  dirty. No commit, no other file touched.

## Gate state after this turn

- **Codex drift-only re-confirm: "confirm — faithful, no re-open"**
  (2026-05-28). Faithfulness gate cleared.
- **GPT exit synthesis: in progress** at time of writing (design-level;
  synthesis is not approval).
- **Next actor: Sami — approval decision on the packet.**

## Honest evidence-chain note

Claude's own v1 "Block 16 self-check" missed all 3 drifts because it
tested for *presence of correct content*, not *absence of leftover /
displaced content*. Codex's independent audit caught them. This is the
experiment's core principle demonstrating itself: **internal
verification ≠ independent audit**, and **Codex confirm ≠ approval**.

## Rehydration pointer (for a fresh thread / agent)

If picking this up cold, read in this order:
1. `.agent-handoff/PROTOCOL.md` — invariants and result-state vocabulary.
2. `.agent-handoff/COLLAB.md` "Current Owner" — live state + the
   answered re-confirm request.
3. This turn note.
4. The approval-target packet
   `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-A-packet-v2.md`.
5. The scope-lock foundation
   `E6-KIT-DRY-RUN-001-codex-kit-dry-run-scope-lock.md` and the matching
   Claude audit note (`satisfied`).

Hard invariants to carry forward (do NOT relax):
- `satisfied` ≠ approval · auditor pass ≠ approval · model consensus ≠
  approval · Codex confirm ≠ approval · GPT synthesis ≠ approval ·
  **Sami is the only approver.**
- `invalid_proof` is a **proof classification**, not an OC result state.
- Packet existence is **not** an execution trigger (Block 9): a
  separate explicit Sami execution authorization is required.
- Clean-room execution requires **structural** freshness (Mode A fresh
  `CODEX_HOME` or Mode B separate OS user) — a self-reported "didn't use
  the skill" breadcrumb is NOT sufficient for `guided_clean`.
- No commit / push / PR / merge in `claude-codex`, and no execution,
  without separate explicit Sami authorization.

## Downstream path (unchanged)

Codex re-confirm (PASSED) → Sami approval → Sami-authorized
preservation PR → clean tree → SEPARATE explicit Sami execution
authorization → fresh `CODEX_HOME` + fresh execution thread → guided
clean-room dry run.
