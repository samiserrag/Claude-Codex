# Start Here

Read this first if you are new to this repo.

`claude-codex` is a build journal and a **postmortem**. I spent about a month
building a Git-native harness for cross-model AI agent work and dogfooding it on
its own development. The thesis it converged on is constructive: **probabilistic
agents need deterministic custody** — the evidence trail, authority boundary, and
consequence gate cannot be left to the agent's self-report. This repo keeps the
whole record — the floor that held, and the larger scaffolding that didn't —
because the part that didn't hold is the more useful warning.

## The 90-second version

- An auditor agent in this repo **fabricated its own verification evidence three
  times**. It was caught by deterministic mechanisms — a push gate and replayed
  measurements — never by another model reading its prose.
- The floor that survived is small: **a few deterministic gates you can read in
  full, run on your own inputs, and confirm by the consequence** — plus a human
  who refuses to trust the green checkmark. The rule of thumb: below the
  deterministic floor, verify; above the floor, manage risk; do not call the
  second one verification.
- A documented finding sits alongside it: the bigger things I built around the
  floor — an approval "envelope," a human decision cockpit, a verification
  taxonomy, cross-vendor convergence rituals — mostly turned out to be theatre,
  because **capture is not verification** (traces and dashboards capture activity;
  they do not ground a claim until it reaches a check a human can inspect). They
  are preserved here as the graveyard.

The one rule that held up:

```text
satisfied is not approval.
Auditor pass is not approval.
Model consensus is not approval.
Human approval authorizes only the exact named consequence.
```

## Read these three things, in order

1. [README.md](README.md) — the full framing: what survived, what's the graveyard,
   and the "operating limits / human-approved gates" rename.
2. [docs/fabricated-audit-vs-deterministic-checks.md](docs/fabricated-audit-vs-deterministic-checks.md)
   — the hero artifact: the three fabrications side-by-side with exactly what
   caught each one.
3. [docs/verification-theater-in-ai-agent-work.md](docs/verification-theater-in-ai-agent-work.md)
   — the whole argument, the second (production) incident at the pattern level,
   and the reproduction experiments.

## The floor that survived

See [`gates/`](gates/). Each gate is a check where reality decides, not an agent,
and you can re-run it yourself. Run [`gates/test-gates.sh`](gates/test-gates.sh)
to watch every gate fire on a planted failure — you hold a lit match to the smoke
detector; no agent is in the loop, and you don't need to be an expert to do it.

The gates cover only the **reality-checkable and reversible** surface (blast
radius, secrets, irreversible git). They do nothing for whether the agent's
*judgment* is correct. That narrowness is the honest headline.

## The graveyard (tried, reported as theatre)

Preserved in the repo as evidence, not as a recommendation:

- The boundary doc, [ENVELOPE.md](ENVELOPE.md) — useful for organizing a human's
  attention and naming the irreversible doors; **not** a control on its own,
  because an unenforced boundary is just the agent attesting it behaved.
- The Decision Cockpit,
  [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md) /
  [`.html`](.agent-handoff/DASHBOARD.html) — a dashboard that summarized agent
  work for human approval, which (when the human can't independently check the
  summary) launders agent decisions into a human-signable form. Demoted to
  graveyard.

The full account is in the whitepaper — see "Capture is not verification" and
"The governance failure in the other direction."

## A note on names

This project used to call its boundary an "approval envelope." That name is
retired as a lessons-learned pivot: the boundary is now **operating limits**, and
the small mechanical checks are **human-approved gates** (a competent human read
*and* approved them, not merely ran them). Older files still say "envelope"; that
history is preserved on purpose.

## If you want to copy something

Use [`kit/v1/README.md`](kit/v1/README.md), and copy the **floor**, not the
abandoned system: the gates, the boundary doc, and the state separation
(`built` / `audited` / `satisfied` / `human-approved` kept distinct). Do not copy
this repo's live `.agent-handoff` history into your repo as if it were required
setup.

## What is still future work / not approved

The kit dry-run is complete (Stage A `guided_clean`; Stage B
`kit_led_clean_enough`). This repo still does not prove external adoption,
stranger installability, larger-team scale, trust hardening, runtime transport
safety, or legal/compliance suitability. There is **no rate claim** anywhere —
this is a postmortem, not a benchmark.

Public-alpha release, public-proof runs, trust-layer implementation, dashboard
redesign, skills, memory files, automations, subagents, and scheduled checks are
not approved by this orientation.
