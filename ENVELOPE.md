# ENVELOPE.md

This file is owned by a named human. Agents may propose edits as pull requests;
they may never author authority over this file. The human who merges a change to
this file is the human who owns the consequences of that change.

This is `claude-codex` dogfooding the [agent-envelope](https://github.com/samiserrag/agent-envelope)
kit on itself. It is the compact, kit-shaped statement of how agents may work in
this repo. It does not replace `.agent-handoff/PROTOCOL.md` (the detailed dogfood
protocol) or `CLAUDE.md` (Claude Code operating instructions); it summarizes their
boundary in the kit's vocabulary and points to them for detail.

## Envelope (v1)

```
ENVELOPE:       claude-codex (Git-native approval-boundary governance dogfood) v1
Owner:          Sami Serrag <sami.serrag@gmail.com>
Blast radius:   This repo's working tree only. No writes to sibling repos
                (agent-envelope, colorado-songwriters-collective). No production,
                no external sends or publishing, no spend. Read-only external
                probes (curl to public endpoints) are allowed. No OMC or
                third-party credentials are held in this repo.
Reversibility:  Working-tree-first; every change is git-revertible. Nothing
                irreversible happens without Sami's exact, named approval:
                commit, push, branch, PR, merge, release, public wording,
                config/hook/branch-protection, MCP/plugin, or credential change.
Required checks: Load-bearing claims reduce to pasted command output (substrate
                over self-report). No-touch surfaces unchanged. Stale-claim greps
                return zero. Cross-project / OMC-bound artifacts pass an em/en
                dash check. The seven duplicate-noise files stay untouched.
Caps:           No LLM API spend in this flow (dollar cap N/A). Iteration/turn cap
                = the current experiment's authorized cap; stop at it rather than
                continue.
Escalation:     Stop and ask Sami before any: commit / push / branch / PR / merge
                / release; public wording or external send; write outside this
                repo; change to .claude/settings, a hook, CODEOWNERS, branch
                protection, .mcp.json, a plugin, or global config; automation,
                cron, or webhook; production action; or dependency install.
Attestation:    Per meaningful turn, Claude attests "the envelope was followed" in
                the turn note. This attests PROCESS, not that the work product is
                correct. Correctness is established by the Required checks and by
                Sampling, not by the attestation.
Sampling:       Sami deep-reads 1 in 10 turns / PRs.
Evolution:      This file changes only via a PR that references a postmortem.
```

## Enforcement status (honest, v1)

As of v1 these lines are enforced by **human attestation, convention, and
sampling**, not yet by mechanical gates. That is a deliberate, disclosed
limitation, not a claim of hardening. Mechanical enforcement is a separate,
explicitly-gated phase (Phase 2): Claude Code permissions/hooks for blast radius
and escalation, CODEOWNERS for no-touch paths, branch protection so no push
reaches `main` without a PR, a PR-template attestation checkbox, and a sampling
script. None of those are wired today. Do not read this envelope as a guarantee;
read it as the policy the human owns and the controls we intend to wire.

The harness itself has already demonstrated why the mechanical layer matters: the
push gate and replayable checks caught fabricated audit evidence three times when
prose review did not (see `docs/fabricated-audit-vs-deterministic-checks.md`).

## Per-line enforcement map (target state, Phase 2)

| Field           | Intended mechanism (not yet wired)                                 |
|-----------------|--------------------------------------------------------------------|
| Blast radius    | `.claude/settings` allow/deny; CODEOWNERS on no-touch paths        |
| Reversibility   | Branch protection (no direct push to `main`); PR required          |
| Required checks | PreToolUse hook blocks commit absent a checks-passed marker; CI    |
| Caps            | Turn cap stated in the experiment authorization                    |
| Escalation      | PreToolUse hook blocks irreversible commands and out-of-repo writes |
| Attestation     | PR-template checkbox                                                |
| Sampling        | `scripts/sample-review.sh` (from the kit) on a schedule            |
| Evolution       | Postmortem reference required in the change's PR                    |
