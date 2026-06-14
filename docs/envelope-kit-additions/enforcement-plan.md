# Phase 2 enforcement plan (PROPOSAL)

Status: PROPOSAL for Sami's per-piece approval. Nothing in this document is active.
This is `claude-codex` proposing to enforce its own `ENVELOPE.md` mechanically —
dogfooding the [agent-envelope](https://github.com/samiserrag/agent-envelope) kit on
the very repo that authors it. That self-enforcement is the strongest proof the kit can
offer.

`ENVELOPE.md` already states (Enforcement status, v1) that these lines are enforced
today only by **human attestation, convention, and sampling**, and names Phase 2 as the
mechanical layer. This plan is that layer, drafted as reviewable proposals.

## What "active" means here (read before approving anything)

Each control activates by a **different** owner action. Drafting the file is never the
activation. Concretely:

| Control                          | Drafted? | Activates ONLY when the owner...                                  |
|----------------------------------|----------|-------------------------------------------------------------------|
| `.github/PULL_REQUEST_TEMPLATE.md` | yes (proposal) | **merges** it — GitHub then auto-fills new PR descriptions      |
| `.github/CODEOWNERS`             | yes (proposal) | merges it **and** turns on branch protection "Require review from Code Owners" |
| `.github/workflows/envelope-checks.yml` | yes (proposal) | **merges** it — CI then runs on every PR (reporting only) |
| `envelope-checks` as a *blocking* gate | n/a    | adds it as a **required status check** in branch protection (GitHub UI/API) |
| Settings permissions + PreToolUse hooks | snippets below | hand-copies them into the live `.claude/settings.json` (NOT done here) |
| Branch protection (no direct push to `main`) | n/a | configures it in the GitHub **UI/API** (owner-only)        |

Proportionality note (the project's hard-won lesson): the CI is two deterministic
checks, not a pipeline. Do not grow it into one. The cure for an uncertain load-bearing
claim is one replayable check, then stop — not a stack of gates.

---

## 1. Per-line enforcement map (ENVELOPE.md → mechanism → status)

This refines `ENVELOPE.md`'s "Per-line enforcement map (target state, Phase 2)" with the
concrete artifact for each line and an honest status. Status values:

- **wired** = already in the repo and operative.
- **proposed-here** = a file in this Phase 2 proposal set; inert until the owner acts
  (see activation column).
- **owner-action-required** = no file can do it; only the owner, in the GitHub UI/API or
  by editing the live `.claude/settings.json`, can activate it.

| ENVELOPE field   | Mechanism (artifact)                                              | Status | Blast tier of the control | Owner action that activates it |
|------------------|------------------------------------------------------------------|--------|---------------------------|--------------------------------|
| Blast radius     | `.claude/settings.json` allow/deny (§2 snippet) + PreToolUse path hook (§3) | proposed-here (snippets only) | high (runtime config) | Copy snippets into live `.claude/settings.json` |
| Blast radius     | `.github/CODEOWNERS` on no-touch / governance paths              | proposed-here | high (governance config) | Merge + enable "Require review from Code Owners" |
| Reversibility    | Branch protection: PR required, no direct push to `main`         | owner-action-required | high (branch protection) | Configure in GitHub UI/API (§4) |
| Required checks   | `envelope-checks.yml` (whitespace + secret scan)                | proposed-here | high (CI) | Merge to activate; add as required check to block |
| Required checks   | PreToolUse hook: block `git commit` without a checks-passed marker (§3) | proposed-here (snippet only) | high (runtime config) | Copy snippet into live `.claude/settings.json` |
| Required checks   | PR-template "Replayable evidence" + checklist                   | proposed-here | low (discipline surface) | Merge the PR template |
| Caps             | Turn cap stated in the experiment's authorizing approval         | wired (convention) | low | none — already the operating norm |
| Caps             | No LLM API spend in this flow (dollar cap N/A)                   | wired (N/A) | n/a | none |
| Escalation       | PreToolUse hook: block irreversible git ops + out-of-repo writes (§3) | proposed-here (snippet only) | high (runtime config) | Copy snippet into live `.claude/settings.json` |
| Escalation       | `.claude/settings.json` `deny`/`ask` for push/merge/commit (§2) | proposed-here (snippet only) | high (runtime config) | Copy snippet into live `.claude/settings.json` |
| Escalation       | PR-template "Escalation" attestation                            | proposed-here | low (discipline surface) | Merge the PR template |
| Attestation      | PR-template "envelope was followed" checkbox                    | proposed-here | low (discipline surface) | Merge the PR template |
| Sampling         | `agent-envelope/scripts/sample-review.sh` run by Sami on a schedule | owner-action-required | low | Run the script (kit already provides it) |
| Evolution        | `ENVELOPE.md` changes only via a PR referencing a postmortem    | wired (convention) + PR-template field | low | none — PR template restates it |

Note on "wired": the **only** lines currently mechanical are the existing `CI`
workflow's scaffold check (`npm test`) and the `git` push/commit gates the owner already
applies by approval convention. Everything tagged proposed-here / owner-action-required
is **not** mechanical yet. Do not read this table as "done."

---

## 2. PROPOSED Claude Code settings permissions (do NOT edit the live file)

The live `.claude/settings.json` is intentionally minimal (model only) and is **not
touched by this proposal**. Below is an example permissions block, adapted from
`agent-envelope/claude-code/settings.example.json` to this repo's envelope (working-tree
writes allowed; pushes/merges denied; commit gated to `ask`). The owner would hand-merge
this into the live file to activate it.

Blast tier of this control: **high** (it is Claude Code runtime config — an Escalation /
governance trigger in `PROTOCOL.md`). It is inert until copied into the live file.

```jsonc
// PROPOSED addition to .claude/settings.json — example, adapt before use.
// Expresses ENVELOPE.md Blast radius + Escalation through Claude Code permissions.
{
  "permissions": {
    "allow": [
      "Read",
      "Edit",
      "Bash(git status:*)",
      "Bash(git diff:*)",
      "Bash(git log:*)",
      "Bash(git add:*)",
      "Bash(npm test:*)"
    ],
    "deny": [
      "Bash(git push:*)",
      "Bash(git merge:*)",
      "Bash(git rebase:*)",
      "Bash(git reset --hard:*)",
      "Bash(rm -rf:*)",
      "WebFetch",
      "Bash(*password*:*)",
      "Bash(*secret*:*)",
      "Bash(*token*:*)",
      "Bash(*credential*:*)"
    ],
    "ask": [
      "Bash(git commit:*)"
    ]
  }
}
```

Notes:
- This denies `git push` / `git merge` outright and routes `git commit` to `ask`, which
  matches ENVELOPE.md Escalation (commit/push/merge need Sami's exact approval).
- ENVELOPE.md allows read-only external probes (curl to public endpoints), so — unlike
  the generic kit example — this proposal does **not** blanket-deny `Bash(curl:*)`. The
  owner may tighten that if desired. `WebFetch` stays denied as the conservative default.
- Merging the existing `.claude/settings.local.json` allows (read-only `git`/`gh`
  inspection, Chrome `select_browser`) is unaffected; this block is additive to
  `settings.json`. Reconcile any overlap before pasting.

---

## 3. PROPOSED PreToolUse hooks (snippets only — not wired)

These express Escalation and Required-checks triggers as PreToolUse hooks, adapted from
`agent-envelope/claude-code/hooks-examples.md`. They are shown here as a proposal; none
is registered. Wiring any of them means editing the live `.claude/settings.json`
`hooks.PreToolUse` block — a **high** blast-tier action requiring the owner.

> Interface caveat: the exact variable / stdin contract for PreToolUse hooks depends on
> the installed Claude Code version. Treat `TOOL_INPUT` / `TOOL_FILE_PATH` below as
> placeholders to reconcile against the current hook docs before wiring.

### 3a. Block irreversible git operations (Escalation)

```bash
#!/usr/bin/env bash
# PROPOSAL — adapt to the live hook interface before wiring.
set -euo pipefail
TOOL_INPUT="${TOOL_INPUT:-}"
IRREVERSIBLE=("git push" "git merge" "git rebase" "git reset --hard" "git push --force")
for p in "${IRREVERSIBLE[@]}"; do
  if printf '%s' "$TOOL_INPUT" | grep -qF "$p"; then
    echo "BLOCKED: irreversible action '$p' — route to Sami (ENVELOPE.md Escalation)." >&2
    echo "Open a draft PR with current state and request human review." >&2
    exit 2
  fi
done
```

### 3b. Block writes outside the blast radius (Blast radius)

```bash
#!/usr/bin/env bash
# PROPOSAL — adapt to the live hook interface before wiring.
# ENVELOPE.md Blast radius: this repo's working tree only; no writes to sibling repos.
set -euo pipefail
TOOL_FILE_PATH="${TOOL_FILE_PATH:-}"
ALLOWED_PREFIX="${ALLOWED_PREFIX:-/Users/samiserrag/GitHub/claude-codex}"
ABS_PATH="$(realpath "$TOOL_FILE_PATH" 2>/dev/null || echo "$TOOL_FILE_PATH")"
case "$ABS_PATH" in
  "$ALLOWED_PREFIX"*) exit 0 ;;
  *)
    echo "BLOCKED: '$ABS_PATH' is outside the blast radius ($ALLOWED_PREFIX)." >&2
    echo "Route to Sami to authorize a blast-radius expansion." >&2
    exit 2 ;;
esac
```

### 3c. Block `git commit` without a checks-passed marker (Required checks)

```bash
#!/usr/bin/env bash
# PROPOSAL — adapt to the live hook interface before wiring.
set -euo pipefail
TOOL_INPUT="${TOOL_INPUT:-}"
printf '%s' "$TOOL_INPUT" | grep -qF "git commit" || exit 0
MARKER_FILE="${CHECKS_MARKER:-/tmp/envelope-checks-passed}"
if [ ! -f "$MARKER_FILE" ]; then
  echo "BLOCKED: required checks have not passed (no marker at $MARKER_FILE)." >&2
  echo "Run the required checks, paste full output into the PR, then commit." >&2
  exit 2
fi
exit 0
```

---

## 4. PROPOSED GitHub branch-protection setup (OWNER performs in the UI)

Branch protection is the Reversibility line: no change reaches `main` except through a
reviewed PR. No file in this repo can set it — it is a **high** blast-tier, owner-only
action in the GitHub UI/API. Adapted from `agent-envelope/github/branch-protection.md`.

Owner steps (rulesets path, GitHub.com):
1. Repo → Settings → Rules → Rulesets → New ruleset. Target `refs/heads/main`.
2. Enable **Require a pull request before merging**, with **≥ 1 approving review**.
   This forbids direct push to `main`.
3. Enable **Dismiss stale approvals when new commits are pushed**.
4. Enable **Require status checks to pass** and add **`envelope-checks`** (this makes the
   CI from §3-of-the-proposal-set a *blocking* gate; until added it only reports).
   Optionally also require the existing **`Collaboration scaffold check`**.
5. Enable **Require branches to be up to date before merging**.
6. Enable **Require review from Code Owners** (this is what makes `.github/CODEOWNERS`
   live — until then CODEOWNERS is inert).
7. Decide on admin bypass deliberately; the conservative envelope default is no bypass.

Equivalent `gh` skeleton (owner runs; adapt the check context name to what GitHub
reports for the `envelope-checks` job):

```sh
gh api repos/samiserrag/claude-codex/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["envelope-checks"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"require_code_owner_reviews":true}' \
  --field restrictions=null
```

---

## 5. Activation checklist (owner, per piece)

Each line is independent. Approve/activate in any order; nothing cascades automatically.

- [ ] Merge `.github/PULL_REQUEST_TEMPLATE.md` → PR descriptions auto-populate. (low)
- [ ] Merge `.github/workflows/envelope-checks.yml` → CI runs on PRs (report-only). (high: CI)
- [ ] Merge `.github/CODEOWNERS` → inert until step below. (high: governance)
- [ ] In GitHub UI: branch-protect `main` — PR required, no direct push. (high)
- [ ] In GitHub UI: add `envelope-checks` as a required status check. (high)
- [ ] In GitHub UI: enable "Require review from Code Owners". (high)
- [ ] Hand-copy §2 permissions into the live `.claude/settings.json`. (high: runtime config)
- [ ] Hand-wire chosen §3 hooks into `.claude/settings.json` `hooks.PreToolUse`. (high: runtime config)
- [ ] Schedule `agent-envelope/scripts/sample-review.sh` for 1-in-10 deep reads. (low)

Until each box is checked by the owner, that line of `ENVELOPE.md` remains enforced by
attestation and sampling only — exactly as `ENVELOPE.md`'s Enforcement-status section
already discloses.
