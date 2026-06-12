# E6-FINISH-001 — Step ①: front-door truth-up + hero artifact

- Author: Claude Code (auditor role, acting as builder for the finishing arc)
- Date: 2026-06-01
- Mode: **lightweight envelope turn** — deliberately run under the project's
  own concluded pattern (envelope + checks + human gate) instead of the full
  Outcome-Circle ceremony. This is dogfood of the finding, not a relaxation of
  the approval boundary.

## Envelope (stated before work)

```text
Blast radius:  README.md, START_HERE.md, docs/ (1 new file),
               .agent-handoff/turns/ (this note), COLLAB.md — nothing else
Reversibility: working-tree only; no commit/branch/push/PR/merge (Sami's gate)
Checks:        hero quotes grep-verified against merged notes BEFORE writing;
               git diff --check; no-touch diff empty; stale-claim greps = 0
Escalation:    anything outside the list → stop and ask
Attestation:   envelope followed — not "contents perfect"
```

## What changed

1. `README.md` — added **"The Incident (Read This First)"** section (the
   repo's strongest evidence, now at the front door); added Stage A/B dry-run
   results, cockpit iterations, and the fabrication record to **Current Proof
   Status**; fixed the stale claim that the kit dry-run "is still needed"
   (both stages are complete and audited); refreshed **Future Work** to the
   actual finishing plan (envelope kit, public incident note, n=3 repro, AIID
   submission, longitudinal log).
2. `START_HERE.md` — same stale dry-run claim fixed; pointer added to the
   hero artifact and case study.
3. `docs/fabricated-audit-vs-deterministic-checks.md` — **NEW** hero
   artifact: the three fabrication events side-by-side with what was true,
   what caught each one, file:line provenance on `main`, and replay commands.
   All quotes were grep-verified against the merged iter-2/iter-3 notes
   (iter-2 L57–68, L114, L156; iter-3 L13–22, L48–50) before writing.
4. `COLLAB.md` — Current Owner handoff updated (this arc).

## Checks run (outputs in COLLAB handoff)

- `git diff --check` — clean.
- No-touch diff (PROTOCOL / OPERATING-MODEL / STRATEGY / kit/v1 /
  DASHBOARD.md / DASHBOARD.html / .gitignore / AGENTS / CLAUDE) — empty.
- Stale-claim greps (`remains future portability proof`,
  `kit dry-run is still future`) — 0 after edits.
- The 7 Finder-duplicate noise files — untouched.
- **Scratch dirs discovered ABSENT** during this turn's verification:
  `/private/tmp/claude-codex-kit-dry-run-001` and `-002` no longer exist.
  Not deleted by any authorized turn — no reboot occurred (20-day uptime), so
  macOS's periodic /tmp cleanup is the likely cause. The load-bearing evidence
  (builder reports, audit notes, file inventories, source-citation tables) was
  preserved into merged turn notes and survives; the raw scratch artifacts are
  lost. Honest lesson for the writeup: evidence parked in ephemeral storage
  evaporates — anything load-bearing must move into versioned storage
  promptly. This was flagged as a risk ("local-only pending disposition") but
  disposition was deferred too long.

## Attestation

The envelope was followed: only the five listed surfaces were touched, all in
the working tree, nothing committed or pushed. `satisfied` is not approval.

## Gate (Sami)

1. Authorize a preservation PR for these five files (exact parameters yours).
2. Pick the envelope-kit repo name and authorize step ② scaffolding.

Then: ③ n=3 reproduction → ④ public incident note → ⑤ AI Tinkerers →
⑥ publish. Nothing beyond this turn's envelope was performed.
