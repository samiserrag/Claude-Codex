# gates — the deterministic floor

These are the boring, real mechanisms the whole project actually rests on. Each one
is a check where **reality decides, not an agent**, and **you can re-run it yourself**.
An agent can *say* a check passed; it cannot make the filesystem, the pattern match,
or the exit code lie to a check you run with your own hands.

## The gates

| Gate | The question | Who answers |
|---|---|---|
| `check-blast-radius.sh <path>` | Is this write inside the repo, or reaching outside it? | the filesystem path |
| `check-secrets.sh <file>` | Does this file contain an obvious secret? | a pattern match |
| `check-irreversible-git.sh "<cmd>"` | Is this an irreversible action with no human approval? | the command string + an approval token |

Each prints `ALLOW` or `BLOCK` and exits 0 or 1. That is the entire contract.

## Who checks the checks? You do — without being an expert.

The honest worry: an agent could write a *fake* check that always says `ALLOW`. You
don't need to read its code to catch that. You hold a lit match to the smoke
detector:

```
bash gates/test-gates.sh
```

It feeds every gate a **known-good** and a **known-bad** input and confirms each one
allows the good and blocks the bad. If a gate ever fails to fire on a planted
failure, it is theatre, and the harness says so and exits non-zero. Running this
needs no competence in the gate's internals — only the ability to plant a known fire
and watch for the alarm. No agent is in the loop.

## Where these get wired (so they stop the agent, not ask it to stop)

See `docs/envelope-kit-additions/enforcement-plan.md`. In short:
- a Claude Code PreToolUse hook calls `check-irreversible-git.sh` / `check-blast-radius.sh` before a tool runs;
- a git pre-push hook + CI (`.github/workflows/envelope-checks.yml`) run `check-secrets.sh` on changes;
- branch protection makes the CI check required.

Until wired, these are runnable on demand. Wired, they refuse actions deterministically.

## Honest scope (what these do NOT do)

These cover exactly one axis: the **reality-checkable and reversible** surface —
blast radius, secrets, irreversible git. They do **not** check whether the agent's
*judgment* is correct: whether the code is well-designed, the analysis sound, the
strategy wise. There is no `test-gates.sh` for good judgment. That residue is
unsolved here and elsewhere; these gates shrink the surface where you must trust an
agent's word, they do not eliminate it. The whitepaper says so plainly.
