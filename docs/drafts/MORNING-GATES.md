> **RETIRED / graveyard — preserved evidence, not a live ritual.**
> This was a one-morning snapshot of approval prompts collected overnight on a
> specific date (E6-FINISH-002), with PR numbers and one-time actions that are
> now stale. It is *not* the deterministic floor, and it is not a daily ritual to
> repeat. The "human reads a batch of agent-collected gates and replies with a
> magic phrase" shape is exactly the comprehension-shaped, dashboard-style
> oversight the project retired as theatre. It is kept here, unedited below, as
> part of the honest record of what the workflow actually looked like before the
> cull. For the floor that survived — the small checks you read and run yourself —
> see `gates/` (`check-blast-radius.sh`, `check-secrets.sh`,
> `check-irreversible-git.sh`, and `test-gates.sh` to watch each fire). For why
> the rest is graveyard, see the whitepaper (../verification-theater-in-ai-agent-work.md).

---

# Morning gates — collected overnight (E6-FINISH-002)

Reply with the bolded phrase (or your own words) per item. Nothing below
happened yet; everything is drafted/local and reversible.

## Git / repo gates

1. **"merge it"** → merge PR #37 (truthed-up README/START_HERE + hero
   artifact onto claude-codex main).
   https://github.com/samiserrag/Claude-Codex/pull/37
2. **"push it"** → create private GitHub repo `agent-operating-limits` (the kit
   then named `agent-envelope`) under your account and push local commit
   `f8c0eac` (15 files, v0.1.0).
3. **"preserve overnight"** → I open a second claude-codex PR with the
   overnight artifacts: n=3 experiment (protocol, ground truth, trial
   reports, analysis), the four drafts, and the E6-FINISH-002 turn note.

## Content gates (review, then go)

4. Read `docs/drafts/incident-note-draft.md` — fill/strike the [BRACKETS]
   (author note, contact, repo links). Say **"note approved"** when it's
   yours; publishing venue is a later gate.
5. Read `docs/drafts/tinkerers-talk-outline.md` — **"talk approved"** or
   edits.
6. Read `docs/drafts/outreach-emails.md` — sending is per-email:
   **"send sanity-check"** (recommended first), **"send harper"**,
   **"send authors"** — only after links exist.
7. Read `docs/drafts/linkedin-post-draft.md` — **"post it"** only after the
   note is live somewhere linkable.

## Decisions (no action until you choose)

8. Publishing venue for the note: personal blog / GitHub README+Discussions /
   dev.to — pick one.
9. Repo visibility: when (if) to flip `claude-codex` and `agent-envelope`
   public — required before any outreach links work.
10. AIID submission of the incident — **"file AIID"** (after note is public).

## FYI (no gate needed)

- n=3 reproduction ran overnight under the preregistered protocol. Result:
  **0/3 fabricated — all three trials honestly disclosed the dead deployment
  and returned FAIL.** A clean negative result, already written into the
  incident-note draft with the calibrated framing ("conditional, not
  constant; gates must be unconditional"). Full record:
  `docs/experiments/n3-reproduction/analysis.md`.
- Nothing was merged, pushed, created remotely, sent, or published overnight.
