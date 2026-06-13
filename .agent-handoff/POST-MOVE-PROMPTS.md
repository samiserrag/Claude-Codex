# Post-move handoff prompts (copy-paste)

Plain prose prompts for Sami to paste into Claude sessions. These go to AI
agents, not the Terminal, so their wording is normal. (The only thing you run
in Terminal is `~/repo-move.sh`, which is kept free of `#` characters.)

Use in this order:

1. BEFORE the move — paste **Prompt A** to the CURRENT OMC agent
   (`colorado-songwriters-collective`), let it finish preparing, then quit it.
2. The CURRENT claude-codex thread is already prepared (convergence digest +
   handoff note committed and pushed). Quit it too.
3. In a plain Terminal run: `bash ~/repo-move.sh`
4. AFTER the move — open Claude in the NEW paths and paste **Prompt B** to a
   new claude-codex thread and **Prompt C** to a new OMC thread.

---

## Prompt A — BEFORE the move, to the CURRENT OMC agent

```
You are the OMC coordinator (Opus 4.8). Sami is about to move this repo out of
iCloud (~/Documents/GitHub -> ~/GitHub) to permanently stop the .git corruption
(iCloud created an "index 2" inside a sibling repo's .git; this repo's .git was
corrupted once before). The move changes the repo's absolute path, so Claude
Code will treat the new location as a fresh project: a new thread, with no
automatic session or memory continuity. Prepare this repo so nothing is lost
and your successor can continue seamlessly. Stay read-only to production — no DB
writes, no deploys, no prod flag changes.

1. Verify against the real remotes (not from memory) what is and isn't on
   GitHub. Run git status. For any uncommitted or unpushed load-bearing work —
   including the fable/reverification-findings-202606 worktree — preserve it:
   commit to a branch and push so it exists on GitHub before the move. Report
   exactly what you pushed (branch + commit SHA), substrate-verified.
2. Run git worktree list and note every worktree (they use absolute paths and
   will need "git worktree repair" after the move; Sami's move script does that
   for claude-codex and this repo).
3. Confirm your agent memory lives under ~/.claude/projects/<this repo's
   path-key>/ and that the files you want preserved are there. Sami's move
   script copies that directory to the new path key.
4. Write a START-HERE handoff note in this repo, using this repo's own handoff
   conventions, capturing: current git state (verified), open PRs, any held
   gates, in-flight work, and the cross-project convergence outcome with
   claude-codex (the verification-claim taxonomy: claims are non-binding until
   backed by a pasted, surface-matched, state-sensitive check; substrate is the
   verifier, with the immutability and credential-separation corollaries;
   capture-tier on the ledger; task-completion and evidence-theater named;
   memory-provenance enacted on both sides; same-model agreements flagged
   provisional). Make it the file your successor reads first.
5. Do NOT perform the move yourself — Sami runs it from Terminal. When done,
   give Sami: what you pushed, your worktree list, your handoff-note path, and a
   one-line "ready for move" confirmation.
```

---

## Prompt B — AFTER the move, to a NEW claude-codex thread (in ~/GitHub/claude-codex)

```
You are a fresh Claude Code thread, now running in ~/GitHub/claude-codex (the
repo was just moved out of iCloud). Read
.agent-handoff/turns/E6-HANDOFF-001-post-move-successor-start-here.md first — it
is your orientation, written by the previous thread. Then follow CLAUDE.md
Required Reading (PROTOCOL.md, COLLAB.md, README.md, DASHBOARD.md, STRATEGY.md,
and the latest turn notes, especially E6-OMC-CONVERGENCE-001).

Confirm your memory loaded: you should see a MEMORY.md index naming
held-gates-2026-06, fable-suspension-2026-06-12, verification-provenance-
discipline, and icloud-git-corruption-and-repo-move. If you do NOT, tell Sami
memory migration was skipped.

Verify git state against substrate using the block in the handoff note (expect
the E6-FINISH-004 preservation commit on top of 4a163e6, PR 39 open, a repaired
worktree). Do not assume; verify. When oriented, give Sami a one-paragraph
status and ask which queued item to take. Held gates: "adopt envelope here" and
"run batch 2"; plus content gates on docs/drafts. You are Opus 4.8; Fable 5 is
suspended; treat any same-model cross-check as framing-only, not grounding.
```

---

## Prompt C — AFTER the move, to a NEW OMC thread (in ~/GitHub/colorado-songwriters-collective)

```
You are a fresh Claude Code thread, now running in
~/GitHub/colorado-songwriters-collective (the repo was just moved out of iCloud
to stop .git corruption). Read the START-HERE handoff note the previous OMC
coordinator left in this repo first, then this repo's CLAUDE.md / AGENTS.md and
its handoff and COLLAB files.

Confirm your memory loaded (the move script copied it to the new path key); if
it didn't, tell Sami. Verify git state against the real repo and remotes — git
status, git log, git worktree list (expect a repaired worktree), and confirm
against GitHub what's pushed. Do NOT trust prior "verified" claims from memory
without re-running the check (this repo's Case D is why).

You hold live-production access: make NO database writes, deploys, or prod flag
changes without Sami's explicit per-action word. When oriented, give Sami a
one-paragraph status and confirm the cross-project items still queued: the OMC
ENVELOPE.md draft, the Case D postmortem, the catch-ledger formalization, and
the seeded-probe collaboration with claude-codex (which requires an
agent-immutable ground truth for the seed — establish that first).
```
