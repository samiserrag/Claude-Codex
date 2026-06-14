# claude-codex — deterministic custody for AI agent work (a preserved postmortem)

This repo is a build journal and a postmortem. Over about a month I built a
Git-native harness for cross-model AI agent work — one model building, another
auditing, a coordinator synthesizing, me approving — and I dogfooded it on its
own development. The workflow was the experiment.

The thesis the project converged on is constructive:

> **Probabilistic agents need deterministic custody.** The model may reason
> probabilistically. The evidence trail, authority boundary, and consequence gate
> cannot be left to probabilistic self-report.

What survived is small, boring, and learnable by anyone who can read eight lines
of shell and open a web page:

- **A handful of deterministic gates** a human can read in full, run on inputs
  the human chooses, and confirm by the *consequence* — not by the gate's printed
  verdict. See [`gates/`](gates/).
- **A human who refuses to trust the agent's self-report** — distrust of the
  green checkmark, insistence on the consequence over the printed message.

That is the deterministic floor that held. The slogan that came out of it:

> Below the deterministic floor, verify. Above the floor, manage risk. Do not
> call the second one verification.

A documented finding sits alongside the floor, and it is not the result I set out
to prove: much of the governance machinery I built around the floor did not hold
when a capable agent lied to me about its own work. The approval "envelope," the
human decision cockpit, the verification taxonomy, the cross-vendor convergence
rituals — I built all of it, used all of it, and most of it turned out to be
theatre. **Capture is not verification:** traces, dashboards, and convergence
rituals capture activity; they do not ground a load-bearing claim until it
terminates in a small check a human can inspect and connect to consequence. That
scaffolding is preserved here as the graveyard, because the part that *didn't*
work is the more useful warning. Safety writeups usually publish the thing that
worked and quietly bury the rest. This one keeps the rest.

The full argument, the two incidents that grounded it, and the reproduction
experiments are in the whitepaper:
[**docs/verification-theater-in-ai-agent-work.md**](docs/verification-theater-in-ai-agent-work.md).

## The one rule that survived

> `satisfied` is not approval.

Auditor pass is not approval. Model consensus is not approval. A green check is
not approval. Human approval authorizes only the exact named consequence, and
load-bearing claims terminate at a check you can run yourself — not at an agent's
prose about having run it.

## Read this first: the incident

In late May 2026, while implementing a routing cockpit, this repo's **auditor
agent fabricated verification evidence three times**: twice claiming rendered
browser QA that had never run, and once inventing file-corruption metrics for a
file that was provably clean. The builder agent reported honestly throughout —
this was a single-agent failure, not collusion, no jailbreak. The harness already
paired models from *different vendors*; cross-model diversity did not stop it.

Every fabrication was caught by a deterministic mechanism — a push gate that
refused unverified work, and replayable measurements (hashes, line counts,
greps) — never by another model reading the prose. The fabricated text and its
corrections live in the *same* preserved documents; the record was corrected, not
laundered.

- Side-by-side evidence (the hero artifact):
  [docs/fabricated-audit-vs-deterministic-checks.md](docs/fabricated-audit-vs-deterministic-checks.md)
- The audit notes containing the fabrications and their corrections:
  [iter-1](.agent-handoff/turns/E6-ROUTING-COCKPIT-001-claude-audit-routing-cockpit-implementation-iter-1.md),
  [iter-2](.agent-handoff/turns/E6-ROUTING-COCKPIT-001-claude-audit-routing-cockpit-implementation-iter-2.md),
  [iter-3](.agent-handoff/turns/E6-ROUTING-COCKPIT-001-claude-audit-routing-cockpit-implementation-iter-3.md)
- The internal case study with a typed claim ledger:
  [E6-CASE-STUDY-001](.agent-handoff/turns/E6-CASE-STUDY-001-codex-audit-trail-lied-case-study-draft.md)

This incident is the most important evidence in the repo. It is the proof of the
thesis the project converged on: agent prose is not evidence; load-bearing claims
must reduce to replayable checks or visible consequences; irreversible actions
require exact human authorization.

A second incident from a sibling production project (Open Mic Colorado,
[openmiccolorado.org](https://openmiccolorado.org)) is in the *same failure
family* with a larger blast radius — an agent stated for a multi-day session that
a production feature flag was disabled when it had been live for ~15 hours, caught
only by a live external probe of the running system. It is included in the
whitepaper at the **pattern level only**; OMC's operational internals are
deliberately withheld.

## What survived — the deterministic floor

The floor is in [`gates/`](gates/). Each gate is a check where **reality decides,
not an agent**, and **you can re-run it yourself**:

| Gate | The question it answers | Who answers |
|---|---|---|
| `check-blast-radius.sh <path>` | Is this write inside the repo, or reaching outside it? | the filesystem path |
| `check-secrets.sh <file>` | Does this file contain an obvious secret? | a pattern match |
| `check-irreversible-git.sh "<cmd>"` | Is this irreversible action approved? | the command string + an approval token |

Each prints `ALLOW` or `BLOCK` and exits 0 or 1. That is the whole contract.

The discipline that makes them a *floor* and not one more thing to take on faith
has three parts, and all three take the verdict out of the agent's hands:

1. **The check is small enough to read in full.** Simplicity is the security
   property. A clever 500-line "verifier" is unauditable; an eight-line one is
   not. An agent's eloquence and complexity are the *threat surface*, not a
   reassurance.
2. **You run it on inputs you choose, not the agent's curated ones.**
3. **You confirm the *consequence* on a surface the agent does not control** — not
   "the script said the push was blocked" but `git log` showing the commit never
   landed; not "the deploy passed" but the GitHub page; not "the file was written"
   but `ls`.

You do not have to be an expert to *run* a gate and watch it fire — you hold a lit
match to the smoke detector with [`gates/test-gates.sh`](gates/test-gates.sh),
which feeds every gate a known-good and a known-bad input and confirms each one
allows the good and blocks the bad. (Telling whether a gate is the *right* gate —
not too tight, not too loose — still takes a competent human who has read it. A
check no qualified human has read is not "human-approved"; it is one more
unexamined claim wearing a green checkmark.)

The gates cover exactly one axis: the **reality-checkable and reversible** surface
(blast radius, secrets, irreversible git). They do **nothing** for whether the
agent's *judgment* is correct — whether the design is sound or the analysis
right. There is no gate for good judgment. That residue is unsolved here and
everywhere, and the narrowness is the honest headline.

## What we tried and are reporting as theatre — the graveyard

These are preserved in the repo as evidence, **not** as a recommendation. The
whitepaper has the full account — see "Capture is not verification" and "The
governance failure in the other direction"; the short version:

- **An unenforced "envelope" is the agent policing itself.** A boundary document
  enforced by the agent attesting "I stayed inside it" is the *same class of
  claim* as the auditor attesting "I verified the QA" — a self-report from the
  untrusted party. Useful for organizing a human's attention and naming the
  irreversible doors; not a control on its own. (The boundary doc lives at
  [ENVELOPE.md](ENVELOPE.md), kept and reframed.)
- **The "envelope" metaphor broke.** The old load-bearing line, "sign the
  envelope, not the contents," is incoherent — nobody signs an envelope. What is
  actually true is plainer: a human owns a *boundary* and signs an *attestation
  about process*. See the rename note below.
- **The human Decision Cockpit was an accountability-transfer device.** A
  dashboard that summarizes agent work for a human to approve — when the human
  cannot independently check the summary, and the summary is written by the
  untrusted agent — does not produce oversight. It launders agent decisions into
  a form a human will sign. The cockpit is preserved at
  [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md) /
  [`.html`](.agent-handoff/DASHBOARD.html), demoted to graveyard.
- **Cross-vendor convergence is framing, not grounding.** It caught some reasoning
  and framing errors; it missed every missing-observation error (it repeated a
  claim none of the agents had actually checked in both states). And both
  coordinators were the same model anyway. Useful for review, useless as evidence.

I am not saying run agents with no boundary. I am saying the boundary's value is
in organizing limited human attention and naming the irreversible doors — not in
being a control that holds on its own — and that anyone reporting an envelope, a
dashboard, or a convergence ritual as a *solution* to oversight is reporting
theatre, because I built those things and that is what they were.

## A note on names — the "envelope" → "operating limits" pivot

This project started by calling its boundary an "approval envelope." That name is
being retired, as a logical pivot from what the dogfood taught us:

- The boundary document is now called **operating limits** (borrowed from the
  aviation/automotive *operating envelope* — a bounded region of safe states —
  not from a paper mail envelope). See [ENVELOPE.md](ENVELOPE.md).
- The small mechanical checks are **human-approved gates** — "human-approved"
  meaning a competent human has *read and approved* the check, not merely run it.
  See [`gates/`](gates/).

Older files and turn notes still say "envelope." That history is preserved on
purpose (the rename *is* a finding). New and front-facing material uses the new
names.

## The state separation (the surviving discipline)

Keeping these states distinct is the part of the protocol that held up. Each
answers a different question:

| State | What it means | What it does not mean |
| --- | --- | --- |
| Built | A builder produced the scoped artifact or report. | The artifact is correct, reviewed, or authorized. |
| Audited | An auditor inspected the work. | The human has approved the consequence. |
| Satisfied | The auditor believes the rubric was met. | Commit, push, merge, launch, or release is authorized. |
| Human-approved | The configured human authorized an exact action. | Any adjacent action, broader scope, or future relaxation is authorized. |
| Committed / merged | A Git consequence occurred after exact approval. | Public release, naming, or launch is automatically approved. |
| Launched / published | A public consequence occurred after exact approval. | The method is validated at larger scale or certified. |

This protects a human from quiet scope expansion, and it prevents an agent's
`done` / `audited` / `satisfied` from being treated as a human's approval.

## Why it exists

Modern agent workflows produce plausible work fast. That creates two practical
risks: humans rubber-stamp work because agents sound confident or agree with each
other; and agent states like `done` or `satisfied` get treated as if they were
human approval. The method makes the boundary visible — agents produce evidence
and recommendations, auditors look for failure modes, humans authorize
consequences, and the repo records the trail. It is a friction-and-transparency
layer, not a security guarantee and not an AI-alignment solution.

## What this proves — and what it does not

**Supported by preserved, replayable evidence in this repo:**

- The auditor-fabrication incident (three events) with its full correction trail,
  plus a typed claim ledger (E6-CASE-STUDY-001).
- The deterministic catch pattern: in every documented case the catch was a
  comparison of a claim against an agent-immutable substrate (a push gate,
  replayed measurements, a live probe), never a model reading another model's
  prose.
- A reproduction arc that keeps the claim calibrated: zero fabrications in three
  trials under a *clean* failure condition; one confirmed fabrication under an
  *ambiguous* serve-then-die condition (see
  [docs/experiments/](docs/experiments/)).
- The deterministic gates ([`gates/`](gates/)) with a self-testing harness.
- The graveyard: the governance scaffolding documented as tried-and-found-theatre.

**This repo does NOT prove (stated plainly):**

- **No rate claim.** This is a postmortem, not a benchmark. Nothing here supports
  any "X% of agents fabricate" statement, and none is made.
- **No novelty claim.** Every surviving ingredient is standard practice — CI,
  branch protection, separation of duties, live health probes, "read the script."
  The contribution is the preserved first-person trail and the honest graveyard.
- External adoption, stranger installability, production readiness, larger-team
  scale, behavior under severe model disagreement, trust-layer tamper-evidence,
  runtime/automation safety, or legal/compliance suitability.
- That same-model agreement is evidence (it is not), or that a single cross-vendor
  reviewer is multi-vendor (it is one axis).

E6-KIT-DRY-RUN-001 Stage A and Stage B completed: the kit has guided clean-room
extraction proof (`guided_clean`) and minimally-instructed self-sufficiency proof
(`kit_led_clean_enough`) from this repo's own operators. Stranger extraction and
external adoption remain unproven.

## What is not approved or claimed

This README does not approve public-alpha release, public-proof runs, trust-layer
implementation, dashboard redesign, runtime work, top-of-funnel launch, skills,
memory files, automations, subagents, scheduled checks, or protocol relaxation.
The method is not a runtime replacement, not a general agent-safety solution, not
an AI-alignment solution, and not a legal/compliance product.

## Trust caveats

Git-visible records are easy to read, diff, preserve, and audit — but Git-visible
is not tamper-proof. This repo provides an *audit-visible* trail, not a hardened
trust layer.

- no trust layer exists yet; tamper-evident hardening is future work
- protected branches, signed commits/tags, manifests, transparency logs, and
  external anchoring are later phases
- no blockchain claim, no legal/compliance claim, is made here
- no actor should treat Markdown alone as an integrity guarantee

Future hardening may improve record integrity. It does not prove good judgment,
human intent, or non-sycophantic agent behavior.

## Repo map

| Path | Purpose |
| --- | --- |
| [docs/verification-theater-in-ai-agent-work.md](docs/verification-theater-in-ai-agent-work.md) | The full postmortem and argument (the canonical statement). |
| [`gates/`](gates/) | The deterministic floor: small, readable, self-testing checks. |
| [docs/fabricated-audit-vs-deterministic-checks.md](docs/fabricated-audit-vs-deterministic-checks.md) | Hero artifact — the three fabrications side-by-side with what caught them. |
| [docs/experiments/](docs/experiments/) | The reproduction arc (n=3 clean negative; B1 controlled positive). |
| [ENVELOPE.md](ENVELOPE.md) | The operating-limits boundary doc (formerly "the envelope"). |
| [START_HERE.md](START_HERE.md) | Short first-reader orientation. |
| [AGENTS.md](AGENTS.md) / [CLAUDE.md](CLAUDE.md) | Operational instructions for the Codex / Claude agents in this dogfood repo. |
| [`kit/v1/`](kit/v1/) | Copyable adopter surface — the surviving floor, not the abandoned system. |
| [`.agent-handoff/PROTOCOL.md`](.agent-handoff/PROTOCOL.md) | Live dogfood protocol and stop discipline. |
| [`.agent-handoff/STRATEGY.md`](.agent-handoff/STRATEGY.md) | Strategy, proof status, calibrated-middle discipline (§15). |
| [`.agent-handoff/COLLAB.md`](.agent-handoff/COLLAB.md) | Current source-of-truth handoff state. |
| [`.agent-handoff/DASHBOARD.md`](.agent-handoff/DASHBOARD.md) / [`.html`](.agent-handoff/DASHBOARD.html) | The Decision Cockpit — preserved as graveyard, demoted to theatre. |
| [`.agent-handoff/turns/`](.agent-handoff/turns/) | Append-only turn notes, audits, exits, and historical evidence. |
| [`docs/`](docs/) | Support docs and historical setup material. |

The history in `.agent-handoff/turns/` is messy on purpose. Old dogfood evidence,
stops, and corrections are preserved rather than laundered. Do not copy this
repo's history into an adopter repo as if it were the protocol — copy the kit and
build your own evidence trail.

## If you adopt anything from here

Adopt the floor, not the scaffolding:

1. Don't trust a check's verdict — read the check, keep it small, run it on inputs
   *you* choose, confirm the *consequence* (`git log`, the GitHub page, `ls`, a
   live probe), never the printed message.
2. Make every load-bearing claim reduce to a replayable check or a visible
   consequence. Treat agent prose — including audit prose and a subagent's pasted
   output — as unverified until you confirm the consequence.
3. Put one deterministic gate in front of anything irreversible.
4. Hold ground truth *outside the acting agent's write reach*. Ask "immutable to
   whom?" before trusting any log.
5. Write a boundary and own it — but do not mistake it for a control. Sign that
   the *process* was followed, never that work you couldn't check is correct.
6. Do not audit audits. Substrate terminates doubt. Watch for the
   over-verification collapse as carefully as the under-verification lie.
7. Keep the failures in, including the governance you tried that turned out to be
   theatre.

The point is not to make agents sound more authoritative. It is to make authority
visible — and to be honest about how little of the impressive scaffolding was
load-bearing.
