# Operating Limits

> **Naming note (lessons-learned pivot).** This document used to be called "the
> approval envelope." That name is retired: "envelope" collided two ideas (an
> aviation/automotive *operating envelope* — a bounded region of safe states — and
> a paper mail envelope you'd metaphorically sign the flap of) and the collision
> obscured what is actually true. What is true is plainer: **a human owns a
> boundary and signs an attestation about *process*.** The boundary is now called
> **operating limits**; the small mechanical checks are **human-approved gates**
> ([`gates/`](gates/)). The file is still named `ENVELOPE.md` for link stability;
> renaming it to `OPERATING-LIMITS.md` (and sweeping the references) is a discrete
> follow-up. See [the whitepaper](docs/verification-theater-in-ai-agent-work.md)
> for why the envelope-as-solution framing is reported as theatre.

This file is owned by a named human. Agents may propose edits as pull requests;
they may never author authority over this file. The human who merges a change to
this file is the human who owns the consequences of that change.

It is the compact statement of how agents may work in this repo. It does not
replace `.agent-handoff/PROTOCOL.md` (the detailed dogfood protocol) or
`CLAUDE.md` (Claude Code operating instructions); it summarizes their boundary and
points to them for detail. Read it as **the policy the human owns and the limits
the gates enforce**, not as a guarantee — an unenforced boundary is just the agent
attesting it behaved, which is the exact self-report this project learned not to
trust.

## Operating limits (v1)

```
OPERATING LIMITS: claude-codex (Git-native approval-boundary governance dogfood) v1
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

There are two separable things here: the **checks** and the **wiring**.

- **The checks now exist.** [`gates/`](gates/) holds small, readable, self-testing
  deterministic gates for the reality-checkable and reversible surface (blast
  radius, secrets, irreversible git). They are runnable on demand by a human today
  (`bash gates/test-gates.sh` proves each fires on a planted failure), and any
  human can read each one in full. This is the part that survived the cull.
- **The wiring is still Phase 2.** Until wired, the gates *ask* the agent to stop
  rather than *make* it stop, so the operative enforcement of the limits below is
  still **human attestation, convention, sampling, and on-demand gate runs** — not
  automatic mechanical refusal. That is a deliberate, disclosed limitation, not a
  claim of hardening. Wiring (a separate, explicitly-gated step the human applies)
  means: a Claude Code PreToolUse hook calling the gates before a tool runs;
  CODEOWNERS on no-touch paths; a git pre-push hook + CI (`.github/workflows/
  envelope-checks.yml`); branch protection so no push reaches `main` without a PR;
  and a PR-template attestation checkbox. See
  `docs/envelope-kit-additions/enforcement-plan.md`.

Do not read this as a guarantee; read it as the policy the human owns plus the
gates that exist and the wiring still to apply.

The harness itself demonstrated why the mechanical layer matters: a push gate and
replayable checks caught fabricated audit evidence three times when prose review
did not (see `docs/fabricated-audit-vs-deterministic-checks.md`). And it cuts both
ways — a gate can be miscalibrated too tight (blocking legitimate work) or too
loose (waving through what it should catch), so a gate only counts as
"human-approved" once a competent human has read and approved it, not merely run
it.

## Per-line enforcement map

The gate scripts exist (`gates/`); the wiring that makes them fire automatically
is the Phase-2 step the human applies.

| Field           | Gate that exists                         | Wiring still to apply                              |
|-----------------|------------------------------------------|---------------------------------------------------|
| Blast radius    | `gates/check-blast-radius.sh`            | PreToolUse hook; CODEOWNERS on no-touch paths     |
| Reversibility   | `gates/check-irreversible-git.sh`        | Branch protection (no direct push to `main`); PR  |
| Required checks | `gates/check-secrets.sh`, `test-gates.sh`| git pre-push hook + CI                             |
| Caps            | (none — convention)                      | Turn cap stated in the experiment authorization   |
| Escalation      | `gates/check-irreversible-git.sh`        | PreToolUse hook blocks irreversible cmds / writes |
| Attestation     | (none — human-authored)                  | PR-template checkbox                               |
| Sampling        | (none — human-run)                       | `scripts/sample-review.sh` on a schedule          |
| Evolution       | (none — convention)                      | Postmortem reference required in the change's PR   |
