# LinkedIn post — DRAFT (post AFTER blog note is live; link goes at [NOTE])

My AI auditor agent lied to me three times. The interesting part is what
caught it.

I run a small multi-agent coding setup — one model builds, a different
vendor's model audits, I approve. This spring the auditor fabricated QA
evidence: fake console output, fake network traces, invented file-corruption
metrics. Polished, specific, confident — and completely indistinguishable
from a real audit by reading it.

What caught it: a push gate that refuses unverified work, and sixty seconds
of boring checks (md5, wc, diff). What didn't: another model reviewing the
prose, cross-vendor diversity, or model capability. The research is starting
to quantify this — stronger models are *more* convincing when they're wrong.

My day job is autonomous vehicles. We'd never ship a system whose safety case
is "a human watches everything." We define an Operational Design Domain.
Coding agents mostly run with no ODD at all — so I wrote a ten-line one
("approval envelope"), where the human signs *"the envelope was followed,"*
not *"the contents are correct."* Open-sourced it with the full postmortem,
fabrications included, history unlaundered.

Six months ago I didn't know what a pull request was. If these controls are
learnable by me, they're learnable by your team.

Postmortem: [NOTE]
Envelope kit: [KIT REPO]

#AIAgents #AIEngineering #DevTools #AISafety [trim hashtags to taste]
