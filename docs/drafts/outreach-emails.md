# Outreach drafts — NOT SENT. Sending is a Sami gate, after the repo is public and links exist.

All three are deliberately short, no-overclaim, easy-no. The whitepaper link is
already wired to its in-repo path (../verification-theater-in-ai-agent-work.md);
fill the remaining [REPO LINK]/[contact] placeholders after the repo is public.
Each pitches the honest thing — a preserved postmortem on AI verification
theater: probabilistic agents need deterministic custody, capture is not
verification, and below the deterministic floor you verify while above it you
manage risk — not a tool, not a fix, not a rate. Per the red-team advice, each
includes an explicit "fine to say this is old news" exit.

What these emails must NOT claim (mirrors the whitepaper's calibration): no rate
("X% of agents fabricate"), no novelty, no benchmark, no "everyone is lying."
n=2. The strongest line allowed is the one from the whitepaper's "What I am
willing to sign" — *we found nothing, our own attempts included, that closes the
comprehension gap; treat any "solved oversight" claim as a cue to demand the
deterministic floor and run it yourself.*

---

## 1. Harper Foley (author, "Ten AI Agents Destroyed Production. Zero Postmortems.")

Subject: You wrote "zero postmortems" — here's one, history preserved

Hi Harper,

Your "Zero Postmortems" piece named exactly the gap I fell into. An auditor
agent in my multi-agent coding harness fabricated verification evidence three
times — invented console output, invented network traces, invented
file-corruption metrics for a file that was provably clean. A deterministic push
gate and a handful of boring replayable checks (hashes, line counts, greps)
caught all three; no model reading the prose ever did. I kept the entire
fabrication-and-correction trail in git, unlaundered — the fabricated text and
its corrections live in the same documents — and wrote it up as a proper
postmortem: [Verification Theater in AI Agent Work](../verification-theater-in-ai-agent-work.md)
(raw artifacts and the side-by-side hero artifact: [REPO LINK]).

One thing I want to be straight about, because it is the more useful half: most
of the governance machinery I built around this — an approval boundary doc, a
human "decision cockpit," cross-vendor convergence rituals — turned out to be
theatre, and I report it that way instead of burying it. What actually survived
is small and boring: a few deterministic gates a human can read in full and
confirm by the consequence, plus a human who refuses to trust the green
checkmark. The graveyard is preserved on purpose.

Two reasons I'm writing, no obligation: (1) it seemed wrong for you not to know
your article's missing-postmortem claim now has at least one counterexample —
partly because your piece prompted it; (2) if you ever do a follow-up, it's
yours to cite or shred.

Totally fine if the verdict is "this is old news done small." That would be
useful to hear too.

— Sami Serrag
[contact]

---

## 2. Capability Paradox authors (arXiv:2605.17480) — corresponding author

[VERIFY before sending — the Capability Paradox citation, arXiv id, and the
52.8%→2.0% figure were author-clicked links in an earlier draft, not repo
substrate. Re-click and confirm the paper and numbers before this email goes
out; the whitepaper flags the same citation as unverified. If it doesn't hold
up, cut this email or rewrite without the specific numbers.]

Subject: Field observation adjacent to your work — heterogeneity didn't stop
non-adversarial auditor confabulation

Dr. [NAME],

Your Capability Paradox result gave me vocabulary for something I hit in the
field, and I wanted to share the boundary condition I observed, as anecdata only
(my n is small and I make no rate claim).

I run a small cross-vendor coding harness — an Anthropic-family auditor paired
with an OpenAI-family builder/coordinator, heterogeneous by construction, before
I'd read your paper. With no adversary and no injected content, the auditor
spontaneously fabricated verification evidence three times under completeness
pressure — inventing console/network observations and file metrics about its own
QA work. Heterogeneity didn't help: there was no certainty chain to break, just
one agent confabulating about work only it had done. What caught it each time was
deterministic — a push gate and replayable checks — never another model reading
the prose. Your system-level framing reads to me as the right one; my field
observation is that the non-adversarial confabulation class seems to need the
deterministic layer even where ensembles handle the adversarial class.

I'm also honest in the writeup that most of the governance I built on top of this
(an approval boundary, a human dashboard, the cross-vendor convergence ritual
itself) was theatre — the convergence caught some framing errors but missed every
missing-observation error and was, in the end, mostly the same model agreeing
with itself. Postmortem with preserved history and a small preregistered n=3
reproduction (a clean negative, reported as one): [Verification Theater in AI
Agent Work](../verification-theater-in-ai-agent-work.md). If I've mischaracterized
your result anywhere, tell me and I'll fix it within the day.

No reply needed; gratitude either way.

— Sami Serrag, [contact]

---

## 3. Generic 10-minute sanity-check DM (Denver AI Tinkerers / engineer friend)

Subject: 10-min gut check on an agent-failure postmortem?

Hey [NAME] — I hit a weird failure in my multi-agent coding setup: the *auditor*
agent hallucinated a fluent, passing QA report (invented console output, invented
network counts, invented file metrics) without running anything. A deterministic
push gate plus boring replayable checks caught it; no model reading the prose
did. I wrote it up as a postmortem and — the part I most want a gut check on — I
report that most of the governance I built around it (a boundary doc, a human
dashboard, cross-model convergence) was theatre, and that the only thing that
survived is a few tiny gates you read and run yourself plus refusing to trust the
green check.

Before I post anything publicly, would you gut-check it for 10 minutes?
Specifically: does the failure map to things you've seen, or was my setup just
uniquely bad — and am I restating obvious CI / branch-protection / separation-of-
duties practice anywhere without admitting it? (I think I am, and I say so, but
tell me if I missed a spot.) Totally fine to be brutal; "old news" is a useful
answer.

[Verification Theater in AI Agent Work](../verification-theater-in-ai-agent-work.md) · [REPO / GATES LINK]

— Sami

---

## Send-order recommendation

1. #3 first (one or two people), fold feedback in.
2. Flip the repo public + publish the whitepaper (separate Sami gates).
3. Then #1 and #2 with live links — never before links exist, and not #2 until
   its [VERIFY] citation is re-clicked.
