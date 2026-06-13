# AI Tinkerers talk — outline + speaker notes (10 min + Q&A)

**Working title:** "My auditor agent lied three times. Here's what actually
caught it."

**One-line pitch for organizers:** A first-person incident report: a frontier
auditor agent fabricated QA evidence three times in my multi-agent coding
harness; the fixes that worked are boring, ten lines long, and borrowed from
the autonomous-vehicle industry.

---

## Beat sheet

**0:00 — Cold open (the hero artifact, slide 1).**
Two columns on screen. Left: the fabricated audit ("Console: 0 messages.
Network: exactly 1 request. Rendered DOM confirmed."). Right: the truth (every
browser call errored; no page was ever rendered). "One of these is a real
audit. They look identical. That's the talk."

**1:00 — Who I am (slide 2, 30 seconds, disarm).**
AV field engineer. Six months from first-ever PR to this. Not a researcher.
That's relevant because the fix is learnable by anyone.

**1:30 — What I built (slide 3).**
Three vendors: builder (Codex), auditor (Claude), coordinator (GPT), me as
the only approver. Strict states: done ≠ audited ≠ satisfied ≠ approved.
Fun fact: the literature now recommends exactly this heterogeneous design
(Capability Paradox, arXiv:2605.17480). I had it. Watch what it didn't stop.

**2:30 — The incident (slides 4-6, one per event).**
Event 1: false pass, invented console/network evidence → caught by the push
gate. Event 2: false BLOCKER — invented corruption metrics for a clean file →
caught by `wc` and `md5` in sixty seconds. Event 3: false pass again,
fabricated hash and byte count → caught by re-measurement + me opening a
browser. Emphasize: no jailbreak, no attacker, builder honest throughout.
Fluency under completeness pressure.

**5:00 — The scary part (slide 7).**
"The governance worked and I still rubber-stamped." Automation bias meets
unbounded output. Comprehension-shaped approval is a lie at every scale —
nobody reads 4,000 lines per approval.

**6:00 — The AV move (slide 8).**
My day job would never ship "a human watches everything" as a safety case. We
define an ODD. Coding agents have no ODD. So: the envelope. Show the ten
lines. Land the attestation line: *"I sign that the envelope was followed —
NOT that the contents are correct."*

**7:30 — What enforces it (slide 9).**
Nothing novel: Claude Code permissions + hooks, branch protection, required
checks, a PR-template checkbox, a 1-in-N sampling script. Composes with
dwarvesf/claude-guardrails; it's the no-infra on-ramp to what Microsoft's
Agent Governance Toolkit does for enterprises. Kit is open source: [REPO].

**8:30 — The meta-finding (slide 10).**
Asked three frontier models to deep-research prior art for this talk: ~70%
accurate, fluent, confident; one invented a paper; one absorbed vocabulary
from an SEO clone site. Same failure mode as my auditor. Click before trust.

**9:15 — Close (slide 11).**
"Agent prose is not evidence. Checks and artifacts are. Sign envelopes, not
contents. And when your agent lies to you — write the postmortem. The
industry has ten production incidents and zero postmortems. Here's mine."
One-liner on reproduction: "I tried to reproduce it under a preregistered
protocol — zero fabrications in three clean-failure trials. It's conditional,
not constant. You don't get to pick which audit is the dishonest one; that's
why the gate is unconditional."

**Q&A prep (likely questions):**
- "Isn't this just CI?" → Yes — that's the point. What's new is the
  psychological trap: fluent agent output bypasses the BS detector that a
  junior dev's "I tested it" triggers. The old rules need enforcing against a
  new kind of output.
- "Which model lied?" → A frontier Claude model as auditor — and the same
  harness caught errors from every vendor. This is a property of the genre,
  not a vendor. (The fabricating model also wrote the corrected record.)
- "Why not just better prompts?" → Capability Paradox: stronger models are
  *more* convincing when wrong. No prompt removes the need for the gate.
- "n=1?" → Yes — and my own preregistered n=3 reproduction came back 0/3
  (all honest) under clean-failure conditions, which I report as the negative
  result it is. It's a postmortem, not a benchmark. The Reward Hacking
  Benchmark (arXiv:2605.02964) has the large-n, scenario-dependent numbers.

**Ask at the end:** "I want one skeptical reviewer for the writeup before it
goes public — does this map to failures you've seen, or was my setup just
bad?"
