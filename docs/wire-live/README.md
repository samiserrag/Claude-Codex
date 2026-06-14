# wire-live — exactly what to do, step by step

Three independent things turn the gates in [`gates/`](../../gates/) from "runnable
on demand" into "fire automatically." Do them in **any order**; each is small and
each has an **Undo**, so nothing here is scary. Every step ends with a *Check it
worked* that looks at the **consequence** (a real blocked action), not a printed
"BLOCKED" message — that is the whole discipline.

Every command block below is **plain commands only** (no inline `#` notes), so you
can paste a whole block at once without your shell choking on the comments.

**Before anything, open a terminal and go to the repo:**

```sh
cd /Users/samiserrag/GitHub/claude-codex
```

Already true on your machine: `jq` and `python3` are installed; the gates are on
`main` (PR #45 is merged). Nothing below sends anything anywhere — Parts A and B
are local to your machine; Part C changes settings on your own GitHub repo.

> **One ordering tip.** Part C (branch protection) will route *all* changes to
> `main` through a pull request — including your own. If you'd rather **commit your
> current wrap-up work straight to `main` one last time**, do that *before* Part C.
> After Part C, you'll commit on a branch and open a PR (still easy — shown below).

---

## Part A — the git hooks (about 5 minutes, lowest risk, start here)

These run on **your machine** when you `git commit` or `git push`. GitHub is not
touched.

### A1. Install them

```sh
cp docs/wire-live/git-hooks/pre-commit .git/hooks/pre-commit
cp docs/wire-live/git-hooks/pre-push   .git/hooks/pre-push
chmod +x .git/hooks/pre-commit .git/hooks/pre-push
```

### A2. Check it worked — make the secret gate block a real commit

```sh
printf 'client_secret=THIS_IS_ONLY_A_TEST\n' > secret-test.txt
git add secret-test.txt
git commit -m "test: this should be blocked"
```

**Expected:** the commit is **refused**, ending with
`pre-commit BLOCK: gates/check-secrets.sh tripped on: secret-test.txt`.

Confirm nothing actually got committed — `git log` should still show `6c64242`
(the #45 merge), not your test commit:

```sh
git log --oneline -1
```

Clean up the test file:

```sh
git restore --staged secret-test.txt && rm secret-test.txt
```

*(If the commit was NOT blocked, the hook isn't installed right. Undo the stray
commit with `git reset --soft HEAD~1`, then redo A1 and check the files are
executable with `ls -l .git/hooks/pre-commit`.)*

### A3. (Optional) see the push gate

`git push origin main` right now would just say "Everything up-to-date" (there's
nothing to push), so to actually *see* the gate fire, push a throwaway branch:

```sh
git checkout -b _wiretest
git commit --allow-empty -m "wire test"
git push origin _wiretest
git checkout main && git branch -D _wiretest
```

The push is refused (the floor self-tests, then the token check stops it), so
`_wiretest` never reaches GitHub — confirm by checking your repo's branch list on
GitHub: it isn't there. When you *do* mean to push, you approve that exact action:

```sh
ENVELOPE_HUMAN_APPROVAL=approved git push origin <branch-name>
```

### A4. Undo Part A (anytime)

```sh
rm .git/hooks/pre-commit .git/hooks/pre-push
```

---

## Part B — the Claude Code settings (about 5 minutes)

This makes **Claude** unable to push/merge, blocks it from writing outside this
repo, and routes `git commit` to "ask you first."

### B1. Back up your current settings

```sh
cp .claude/settings.json .claude/settings.json.bak
```

### B2. Drop in the ready-made file

I built the complete file for you (it keeps your existing `model` line and adds the
deny-list + the gate hooks). Just copy it over:

```sh
cp docs/wire-live/settings.json.ready .claude/settings.json
```

### B3. Reload so the hooks take effect

Hooks load when a Claude Code session starts. **Quit and reopen Claude Code** (or
start a new session) in this repo.

### B4. Check it worked

In a Claude session, **ask Claude to run** `git push origin main`.

**Expected:** it is blocked with
`BLOCKED by gates/check-irreversible-git.sh: ...`.

> **If instead you see** `No such file or directory` for the gate, your Claude Code
> version doesn't provide `$CLAUDE_PROJECT_DIR`. Fix: open `.claude/settings.json`
> and replace **both** occurrences of `$CLAUDE_PROJECT_DIR` with the literal path
> `/Users/samiserrag/GitHub/claude-codex`, save, and reload. (Downside: if you ever
> move the repo, update that path.)

### B5. Two choices you can make in that file

- **`WebFetch` is in the `deny` list** as a conservative default. If you want
  Claude to fetch URLs (e.g. to verify citations like we did today), delete the
  `"WebFetch"` line.
- Your separate `.claude/settings.local.json` (read-only `git`/`gh` allows) is
  fine as-is — leave it. `deny` always wins over `allow`, so there's no conflict.

### B6. Undo Part B (anytime)

```sh
cp .claude/settings.json.bak .claude/settings.json
```

Then reload Claude Code.

---

## Part C — GitHub branch protection (about 10 minutes, on your repo)

This protects `main` on GitHub so changes go through a pull request and the
`envelope-checks` CI must pass — **tuned for a solo owner** so you can still merge
your own PRs (a team-style "require 1 review" would lock you out, since you can't
approve your own PR).

### C1. See what's there now (should be "Not Found" = no protection yet)

```sh
gh api repos/samiserrag/claude-codex/branches/main/protection 2>&1 | head -3
```

### C2. Turn it on — one command

```sh
gh api -X PUT repos/samiserrag/claude-codex/branches/main/protection --input - <<'JSON'
{
  "required_status_checks": { "strict": true, "contexts": ["envelope-checks"] },
  "enforce_admins": true,
  "required_pull_request_reviews": { "required_approving_review_count": 0 },
  "restrictions": null
}
JSON
```

What each line means:
- `required_status_checks … "envelope-checks"` — a PR can't merge until the
  envelope-checks CI passes.
- `enforce_admins: true` — the rule applies to **you too**: no direct pushing to
  `main`, even as owner. This is the discipline ("make the agent — and yourself —
  come through the front door"). If you'd rather keep the ability to push to `main`
  directly, change this to `false`.
- `required_approving_review_count: 0` — a PR is **required**, but you can merge it
  yourself with no second approver. This is the solo-safe setting.

### C3. Check it worked

```sh
gh api repos/samiserrag/claude-codex/branches/main/protection \
  -q '"PR required, checks: " + (.required_status_checks.contexts|join(",")) + "; admins enforced: " + (.enforce_admins.enabled|tostring)'
```

Expected: `PR required, checks: envelope-checks; admins enforced: true`.

(Or visually: GitHub → your repo → **Settings → Branches** shows the rule on
`main`.)

### C4. Your new everyday flow once C is on

You no longer commit straight to `main`. Instead:

```sh
git checkout -b my-change
git add -A
git commit -m "my change"
ENVELOPE_HUMAN_APPROVAL=approved git push origin my-change
gh pr create --fill
gh pr merge --merge
```

The `ENVELOPE_HUMAN_APPROVAL=approved` prefix is only needed if Part A's hooks are
installed. After `gh pr create`, wait for `envelope-checks` to go green before
`gh pr merge`.

### C5. Undo Part C (anytime)

```sh
gh api -X DELETE repos/samiserrag/claude-codex/branches/main/protection
```

---

## 4. Before you flip public — align the docs to the final whitepaper

The whitepaper evolved into the "Verification Theater / deterministic custody"
framing. The other public docs and drafts still lead with the earlier "governance
was theatre / graveyard" framing and carry ~16 now-wrong `whitepaper §N`
cross-references (the section numbers shifted; §7 is no longer the graveyard). This
does **not** block wiring, and nothing is public yet — but before you flip the repo
public, run one copy pass that:

- **repoints or de-numbers every `whitepaper §N` reference** — in README,
  START_HERE, ENVELOPE, AGENTS, STRATEGY, DASHBOARD, kit/v1, and the drafts
  (tinkerers, linkedin, outreach, incident-note, MORNING-GATES);
- **adopts the whitepaper's current vocabulary** — *deterministic custody*,
  *capture is not verification*, *below the floor verify / above it manage risk* —
  in the public-copy docs (README, START_HERE, tinkerers, linkedin, outreach,
  incident-note). Internal docs may keep the graveyard framing;
- **creates the `whitepaper-v1` tag at the wrap-up commit** so the whitepaper's
  evidence links resolve (`git tag whitepaper-v1 && git push origin whitepaper-v1`).

## The honest reminder

These hooks and rules just call the few-line gates in `gates/` — which you can
read in full in under five minutes. **Don't trust a "BLOCKED" message; trust the
consequence:** the push that's genuinely absent from `git log` and the GitHub
commit list, the file genuinely absent from `ls`. If a gate ever lets through what
it should stop, it's theatre — `bash gates/test-gates.sh` is how you hold a match
to it, and you fix it before trusting it again.

For the *why* behind each control, see
[`../envelope-kit-additions/enforcement-plan.md`](../envelope-kit-additions/enforcement-plan.md).
