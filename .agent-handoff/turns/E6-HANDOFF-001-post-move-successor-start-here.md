# E6-HANDOFF-001 — Post-move successor: START HERE

You are a fresh Claude thread, opened in `claude-codex` after Sami moved the
repo out of iCloud (`~/Documents/GitHub` to `~/GitHub`). The previous thread
(Opus 4.8, supervisor) could not follow the repo across the path change —
Claude Code keys session history and memory to the absolute repo path — so this
file plus CLAUDE.md's Required Reading plus your migrated memory ARE the
handoff. The repo carries its own state by design; that's the project's whole
thesis.

Written 2026-06-12 by the pre-move thread. If you're reading it, the move
happened.

## First actions

1. Read CLAUDE.md, then `.agent-handoff/COLLAB.md`, then the most recent turn
   notes — especially `E6-OMC-CONVERGENCE-001-...` (the latest substantive
   synthesis).
2. Confirm memory loaded: you should see a MEMORY.md index naming
   `held-gates-2026-06`, `fable-suspension-2026-06-12`,
   `verification-provenance-discipline`, `icloud-git-corruption-and-repo-move`.
   If you do NOT see those, tell Sami memory migration was skipped (the
   copy of the project dir to the new path key didn't run).
3. Run the git verify block (below) before trusting any state.

## Exact state at move time (2026-06-12)

- **git:** on `main` @ `4a163e6` plus one preservation commit on top
  (E6-FINISH-004: this handoff note, the OMC convergence digest, and the
  post-move prompts). Pushed to origin `samiserrag/Claude-Codex`.
- **PR 39 OPEN, unmerged** — branch `e6-finish-003-fishing-batch-1`:
  fabrication-fishing batch 1 (first controlled catch, trial B1), the
  E6-FINISH-003 turn note, and a COLLAB "Current Owner" update to E6-FINISH-003
  including the held gates. Sami's merge phrase: "merge 39".
- **agent-envelope:** separate PRIVATE repo (also moved); origin at `f8c0eac`
  (v0.1.0 kit). Not a submodule; independent.
- **iCloud noise:** seven `" 2"` duplicate files were untouchable while in
  iCloud; now that we've left iCloud they can finally be deleted — but confirm
  with Sami first (standing rule was never to stage or delete them).
- **One git worktree** existed: `.claude/worktrees/bold-roentgen-e2695f`
  (branch `claude/bold-roentgen-e2695f`, clean). `git worktree repair` should
  have been run by the move script; verify with `git worktree list`.

## Held gates (Sami, "remind me soon" — 2026-06-12)

- **"adopt envelope here"** — write a filled `ENVELOPE.md` from the
  agent-envelope kit plus enable existing enforcement. Includes the new kit
  additions from the OMC convergence (see digest): `verification-taxonomy.md`,
  the non-binding-claim rule, the capture-tier ledger spec.
- **"run batch 2"** — fishing Amendment 2 (OMITTED_EVIDENCE marker, mechanical
  log-join omission check, trap-grep fix, favicon fix) plus new casts. Design
  in `docs/experiments/fabrication-fishing/analysis-batch-1.md` section
  "Batch 2".

## Queued on Sami's word

- (Done if you're reading this) repo move; the convergence digest + this note
  are already committed and pushed.
- (Gated) the kit additions from the convergence.
- Seeded-probe collaboration with the OMC agent (OMC = a second live/fan-out
  environment for the fishing method; needs preregistration plus an
  agent-immutable ground truth for the seed — see digest).
- Content gates on the drafts (`docs/drafts/`) — Sami's edit pass, then
  venue/visibility/AIID/outreach.
- OMC artifacts: critique its `ENVELOPE.md` plus Case D postmortem;
  independently replay any OMC fact used as public evidence.

## Cross-project + model context

OMC (`colorado-songwriters-collective`, also moved) and claude-codex converged
on a verification-claim taxonomy; the loop is CLOSED (see digest). Both
coordinators are Opus 4.8 because Fable 5 and Mythos 5 are suspended by a US
government directive (2026-06-12). Same-model agreements are flagged
**provisional framing**, not validated — real grounding waits for a
cross-vendor reviewer. Facts reduce to substrate replay, always.

## git verify block (run first, read-only)

Expected: latest commit is the E6-FINISH-004 preservation commit on top of
`4a163e6`; PR 39 open; `git worktree list` shows main plus a repaired worktree
with no errors; about 15 local branches; `fsck` dangling trees are benign.
(No `#` characters in the block, so it is safe to paste into a Mac Terminal.)

```sh
cd ~/GitHub/claude-codex
git status
git log -2 --oneline
git worktree list
git fsck --no-progress | head
git branch | wc -l
gh pr list --state open
```
