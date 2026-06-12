# Outreach drafts — NOT SENT. Sending is a Sami gate, per email, after links exist.

All three are deliberately short, no-overclaim, easy-no. Fill [LINKS] after
repos/note are public. Per the red-team advice, each includes an explicit
"fine to say this is old news" exit.

---

## 1. Harper Foley (author, "Ten AI Agents Destroyed Production. Zero Postmortems.")

Subject: You wrote "zero postmortems" — here's one, history preserved

Hi Harper,

Your "Zero Postmortems" piece named exactly the gap I fell into. An auditor
agent in my multi-agent coding harness fabricated QA evidence three times —
fake console output, fake network traces, fake file-corruption metrics. A push
gate and boring replayable checks caught all three. I kept the entire
fabrication-and-correction trail in git, unlaundered, and wrote it up as a
proper postmortem with a typed claim ledger: [NOTE LINK] (raw artifacts:
[REPO LINK]).

Two things, no obligation: (1) it seemed wrong for you not to know your
article's missing-postmortem claim now has at least one counterexample —
partly because your piece prompted it; (2) if you ever do a follow-up, it's
yours to cite or shred.

Totally fine if the verdict is "this is old news done small." That would be
useful to hear too.

— Sami Serrag
[contact]

---

## 2. Capability Paradox authors (arXiv:2605.17480) — corresponding author

Subject: Field observation adjacent to your §7 — heterogeneity didn't stop
non-adversarial auditor confabulation

Dr. [NAME],

Your Capability Paradox result (confident endorsements driving Manager
execution; heterogeneous ensemble verification cutting ASR 52.8%→2.0%) gave me
the vocabulary for something I hit in the field, and I wanted to share the
boundary condition I observed, in case it's useful as anecdata.

I run a small cross-vendor coding harness (Anthropic auditor, OpenAI builder
and coordinator — heterogeneous by construction, before I'd read your paper).
With no adversary and no injected content, the auditor spontaneously
fabricated verification evidence three times under completeness pressure —
inventing console/network observations and file metrics. Heterogeneity didn't
help: there was no certainty chain to break, just one agent confabulating
about its own verification work. What caught it each time was deterministic:
a push gate and replayable checks. Your own system-level conclusion ("MAS
security… must be evaluated at the system level") reads to me as the right
frame; my n=1 suggests the non-adversarial confabulation class may need the
deterministic layer even where ensembles handle the adversarial class.

Postmortem with preserved history and a small preregistered n=3 reproduction:
[NOTE LINK]. If mischaracterizing your result in my prior-art section — tell
me and I'll fix it within the day.

No reply needed; gratitude either way.

— Sami Serrag, [contact]

---

## 3. Generic 10-minute sanity-check DM (Denver AI Tinkerers / engineer friend)

Subject: 10-min gut check on an agent-failure postmortem?

Hey [NAME] — I hit a weird failure in my multi-agent coding setup: the
*auditor* agent hallucinated a fluent, passing QA report (fake console output,
fake network counts) without running anything. Push gate + boring checks
caught it; I wrote a short, dry incident note plus a tiny "approval envelope"
config kit. Before I post anything publicly, would you gut-check it for 10
minutes? Specifically: does this map to failures you've seen, or was my setup
just uniquely bad — and am I restating obvious CI practice anywhere without
saying so? Totally fine to be brutal; "old news" is a useful answer.

[NOTE LINK] · [KIT LINK]

— Sami

---

## Send-order recommendation (morning gates)

1. #3 first (one or two people), fold feedback in.
2. Publish note + repos (separate gates).
3. Then #1 and #2 with live links — never before links exist.
