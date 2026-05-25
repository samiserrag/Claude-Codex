# E6-DOCS-ALIGN-001 - Claude audit of Codex decision-notes + trust-layer docs alignment

## Coordinator Trigger

- State: ROUTINE
- Reason: this is an auditor pass on an already-Sami-approved, GPT-framed
  docs-realignment turn. No new architecture, pivot, or strategic decision is
  being made in the audit itself. The next handoff (Sami's PR-shape decision +
  bootstrap retrospective) is `NEEDS_GPT` and is named explicitly below; the
  audit turn does not itself need GPT to grade Codex's wording against the
  scope Codex was given.

## Project Mode (estimated)

- Dominant mode: Coordinator / audit pass on docs-lock (~55%)
- Sami-decision-pending: ~35% (PR shape + bootstrap retrospective)
- Execution: ~10%
- Reason: substantive convergence already happened pre-build; this turn grades
  whether Codex's `E6-DOCS-ALIGN-001` execution matched the converged wording
  without expanding scope. The next steps are strategic and Sami-owned.

## Agent

Claude

## Phase

critique

## Sources Read

- `.agent-handoff/PROTOCOL.md` (live, 601 lines, 24928 bytes)
- `kit/v1/.agent-handoff/PROTOCOL.md.template` (568 lines, 23384 bytes)
- `.agent-handoff/OPERATING-MODEL.md` (582 lines, 35701 bytes)
- `.agent-handoff/STRATEGY.md` (668 lines, 23321 bytes)
- `.agent-handoff/COLLAB.md` (5691 lines, 287632 bytes; current-owner section + OC-005 historical block)
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`
- `.agent-handoff/turns/E6-OC-005-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-OC-005-claude-public-positioning-audit-iter-1.md`
- `.agent-handoff/turns/E6-OC-005-codex-public-positioning-judgment-iter-1.md`
- Git state at HEAD `64ef94a` (PR #11 merge), working tree diff vs HEAD, `git ls-files --others --exclude-standard`

## Files touched this turn

- `.agent-handoff/turns/E6-DOCS-ALIGN-001-claude-audit-decision-notes-trust-doc-alignment.md` (created)
- `.agent-handoff/COLLAB.md` (edited — current-owner handoff updated with audit result; OC-005 historical block preserved unchanged)

## Audit Result

**Satisfied with 2 nits, 0 blockers.**

Codex's E6-DOCS-ALIGN-001 correctly folded the converged Human Decision Notes,
five decision actions, trust-layer phasing, sycophantic-adaptation threat,
prompt/API injection scoping, smarter-agent honest limitation, portable-naming
of operative state vocabulary, and Decision Cockpit v1 direction into durable
docs without starting dashboard implementation, trust implementation, runtime
work, public release, or unauthorized OC-005 preservation. Mirror discipline
across `PROTOCOL.md` and `kit/v1/.agent-handoff/PROTOCOL.md.template` is clean
on the enforced range. No-touch surfaces are unchanged.

The two nits are documentation-hygiene observations about pre-existing
Sami-name residue in the kit template and the live `## GPT Coordinator` section.
They are out of E6-DOCS-ALIGN-001's authorized scope this turn and do not
require a redo. They are flagged for a future authorized portability sweep
(e.g., `E6-PORTABILITY-001`) before any external adopter uses the kit.

## Findings — 13 Audit Foci

### 1. Scope: only allowed files changed — PASS

`git diff --name-only`:

```text
.agent-handoff/COLLAB.md
.agent-handoff/OPERATING-MODEL.md
.agent-handoff/PROTOCOL.md
.agent-handoff/STRATEGY.md
kit/v1/.agent-handoff/PROTOCOL.md.template
```

Plus one new turn note (`E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`).
Three mockup files and three E6-OC-005 turn notes remain untracked from the
prior local-only state and were not edited by this turn.

`git diff --name-only -- kit/v1` returns only the allowed template, not any
kit non-template file.

### 2. PROTOCOL.md / kit-template mirror discipline — PASS

Independent verification of the changed enforced range:

```sh
diff <(awk 'BEGIN{flag=0} /^## Packet Field Vocabulary$/{flag=1} /^NanoClaw or any transport layer/{flag=0} flag{print}' .agent-handoff/PROTOCOL.md) \
     <(awk 'BEGIN{flag=0} /^## Packet Field Vocabulary$/{flag=1} /^NanoClaw or any transport layer/{flag=0} flag{print}' kit/v1/.agent-handoff/PROTOCOL.md.template)
```

Exit `0`, no output. The Packet Field Vocabulary block, Outcome Circle
result-state vocabulary, minimum packet `human approver` callback label, and
the new `#### Human Decision Actions And Notes` subsection are byte-identical
between live `PROTOCOL.md` and the kit template.

### 3. Portable naming for operative state vocabulary — PASS

```sh
grep -i 'needs_sami\|decision needed from sami\|why sami is needed\|when sami is called back' \
  .agent-handoff/PROTOCOL.md kit/v1/.agent-handoff/PROTOCOL.md.template \
  .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md
```

No matches across all four files. `needs_human` replaces `needs_sami`. Packet
field labels read "Decision needed from the human approver" and "Why the human
approver is needed." Minimum packet field reads "when the human approver is
called back." The explicit instance-vs-protocol caveat ("The adopting repo may
configure a local label for the human approver.") is present in both
`PROTOCOL.md` and the kit template.

### 4. Five decision actions and action/state mapping — PASS

All five actions present in `PROTOCOL.md` §"Human Decision Actions And Notes"
(L325-345), mirrored in kit template, and surfaced as a table in
`OPERATING-MODEL.md` §8 (L254-263) with explicit `Human action / Protocol
meaning / Resulting state / Note requirement` columns. Action set:

- `authorize_exact_action` → `authorized_exact_action` / exact local approval
  state; note optional
- `reject_redo` → `needs_revision` (or new packet); note required
- `reject_close` → `closed_rejected`; note required
- `ask_coordinator` → `paused_pending_coordinator` or `needs_gpt`; note
  required; 24-hour default re-surface
- `pause_pending` → `paused_pending_human`; note required when blocking another
  agent or long-running

PROTOCOL.md explicitly prohibits collapsing `reject_redo` and `reject_close`
into a generic reject (L348-350). Rejection's authority boundary is named:
"Rejection does not authorize new scope, automatic redo, file edits, commits,
pushes, public release, naming, dashboard changes, protocol changes, or
runtime work."

### 5. Note-required rules avoid fuzzy "high consequence" — PASS

PROTOCOL.md L357-361 lists concrete triggers: `reject_redo`, `reject_close`,
`ask_coordinator`, `pause_pending` when the pause blocks another agent or is
long-running, and any decision that overrides a Builder, Auditor, or
Coordinator recommendation. Then explicit guard:

> "Notes are optional for routine `authorize_exact_action`. Do not use fuzzy
> 'high consequence' classification as a required-note trigger unless a later
> protocol turn defines exact thresholds."

This is exactly the audit's pre-converged ask: avoid fuzzy thresholds; favor
concrete actor-action triggers. ✓

### 6. Sycophantic-adaptation threat named — PASS

Codified in three places at three altitudes:

- `PROTOCOL.md` L369-371: explicit prohibition — agents may not "adjust
  builder or auditor thresholds based on past notes, pad evidence to match
  what was approved last time, add boilerplate or proactive flags merely to
  match perceived human preferences, treat individual past decisions as
  protocol changes, or silently modify rubrics or evidence collection based
  on past notes."
- `OPERATING-MODEL.md` §12 L380 lists "Agents silently adapting thresholds to
  past Human Decision Notes" as a discipline risk; L387-391 codifies the
  prohibition; L393-396 names future meta-audit patterns (formulaic findings,
  declining rejection rates, mirrored sections, rising builder/auditor
  agreement without quality cause).
- `STRATEGY.md` §5 L231-236 frames it as the specific new risk introduced by
  the Notes feature itself.

Citation attribution line is codified in `PROTOCOL.md` L378-382:

```text
Citing this note as context only; not adjusting [builder/auditor/coordinator] thresholds based on it.
```

### 7. Notes descriptive-not-normative — PASS

`PROTOCOL.md` L374-376: "Notes are descriptive, not normative, until codified
by an explicit protocol or doc-lock turn. Redo notes may propose rubric
changes, but they do not automatically modify rubrics."

Mirrored in kit template. Reinforced in `OPERATING-MODEL.md` L275-276:
"Redo notes may propose rubric changes, but they do not modify rubrics until
a later protocol/doc-lock turn codifies the change."

### 8. Trust wording discipline — PASS

Forbidden-word grep across all four enforced/durable docs:

```sh
grep -i 'tamper-proof\|immutable audit trail\|legally compliant\|legally verified\|blockchain-secured\|ai-safe approval\|cannot be forged' \
  .agent-handoff/PROTOCOL.md kit/v1/.agent-handoff/PROTOCOL.md.template \
  .agent-handoff/OPERATING-MODEL.md .agent-handoff/STRATEGY.md
```

The forbidden phrases appear only in:
- `STRATEGY.md` §11 L530-537 — explicit "Unsafe wording:" prohibition list.
- `STRATEGY.md` §8 L352-353 — dashboard trust-footer guidance: "Git-visible /
  tamper-evident when configured / not tamper-proof." Negative-framing use.
- `OPERATING-MODEL.md` §13 L431-435 — explicit "Never claim ..." prohibition.

Zero occurrences as positive claims. "Tamper-evident" is conditioned ("only
when protected-branch, signing, manifest, or external witness discipline is
actually configured" — `OPERATING-MODEL.md` L431-433). Safe public wording
("Git-native, audit-visible governance record" / "Tamper-evident with
protected-branch and signing discipline" / "Externally anchorable evidence
record" / "Audit-friendly by design") is enumerated in `STRATEGY.md`
L524-528. ✓

### 9. Trust-layer Phase 0/1/2/3 — PASS

Both `OPERATING-MODEL.md` §13 L419-429 and `STRATEGY.md` §11 L487-521 codify
the four-phase model identically in spirit:

- Phase 0: Git-visible Markdown, PR history, exact approval text, no-touch
  lists, turn notes, COLLAB.
- Phase 1: protected branches, signed commits/tags where practical, artifact
  manifests with stable hashes, hash-bound approval records, CI manifest
  consistency.
- Phase 2: transparency logs, attestations, external timestamping, signed
  release artifacts, WORM/append-only storage, independent mirror repo.
- Phase 3: optional blockchain hash anchoring, hashes not content, deployment
  plugin not a default dependency.

Both docs explicitly state blockchain is not MVP and does not solve forged
human intent, bad rubrics, prompt injection, model-generated fake evidence,
compromised credentials, insider misuse, sycophancy, or governance drift.
`STRATEGY.md` L521 adds "Avoid crypto-theater framing." ✓

### 10. Prompt/API injection screening as auditor/CI input — PASS

`OPERATING-MODEL.md` L449-452 and `STRATEGY.md` L539-542 use identical scoping
language:

> "Prompt/API injection screening is future auditor or CI input, not an
> approval gate. It may scan high-stakes PR diffs, approval text, dashboard
> copy, protocol changes, kit changes, and external advisor transcripts. Its
> output should be 'concerns found' or 'no concerns detected,' never
> 'approved.'"

This is the exact converged framing. The screening cannot become approval.
✓

### 11. Decision Cockpit v1 remains future scope — PASS

`.agent-handoff/DASHBOARD.md` and `.agent-handoff/DASHBOARD.html` are
unchanged since HEAD `64ef94a` (`git diff` exit 0). The three
`decision-cockpit-v1/v2/v3.html` mockup files in `.agent-handoff/mockups/`
are pre-existing untracked artifacts from the prior session and were not
edited by this turn.

All `Decision Cockpit v1` references in `STRATEGY.md` (L593-594) and
`OPERATING-MODEL.md` (L101, L332, L343, L502, L520) are framed as future
direction: "lock scope," "Build in a separately approved Outcome Circle,"
"design lock," "after OC-005 preservation + bootstrap retrospective." No
language claims the cockpit has been built or is being built in this turn. ✓

### 12. Smarter-agent / alignment honest limitation — PASS

Both `OPERATING-MODEL.md` §13 L454-458 and `STRATEGY.md` §5 L224-229 land
this honestly:

> (OPERATING-MODEL) "This protocol is a friction and transparency layer, not
> a strong security layer or a solution to AI alignment. It assumes mostly
> cooperative agents. Smarter agents may game visible rules, attribution
> lines, meta-audits, or approval patterns. The honest value is making
> common failures visible and reviewable, not preventing all adversarial
> behavior."

> (STRATEGY) "Honest limitation: this is a friction and transparency layer,
> not a strong security layer and not a solution to AI alignment. ...
> Cryptographic integrity can help with record tampering, but it does not
> prove good judgment, honest intent, or non-sycophantic behavior."

The white-paper-ready framing is present and consistent. ✓

### 13. OC-005 preservation status not overclaimed — PASS

Codex explicitly preserved the distinction in three places:

- E6-DOCS-ALIGN-001 turn note §"OC-005 Status Handling" (L184-200): exit
  synthesis is locally present and records Circle 2 of 2 satisfied, "Not
  verified here: whether the OC-005 preservation PR has been opened,
  merged, or pushed."
- `OPERATING-MODEL.md` L100 timeline row: "OC-005 preservation PR status not
  verified in E6-DOCS-ALIGN-001."
- `STRATEGY.md` L420-422 evidence section: "E6-OC-005 exit synthesis is
  present locally and records E6-OC-005 as fully compliant bootstrap Circle 2
  of 2. E6-DOCS-ALIGN-001 did not verify whether the OC-005 preservation PR
  has landed."

Independent verification: `git log --oneline -20` shows HEAD at `64ef94a`
(PR #11 merge) with no OC-005 preservation PR in the log. The four E6-OC-005
turn notes (Codex builder, Claude auditor, GPT exit synthesis) and the
mockup files remain untracked locally. ✓ No overclaiming.

## Independent Verification Of No-Touch Surfaces

```sh
git diff -- .agent-handoff/DASHBOARD.md .agent-handoff/DASHBOARD.html \
            .agent-handoff/tools/alert-state.sh README.md AGENTS.md CLAUDE.md docs
```

Exit `0`, no output.

```sh
ls -la .agent-handoff/advisor-notes/ .agent-handoff/reflections/ \
       .agent-handoff/improvements/ .mcp.json
```

All four paths absent (4 × "No such file or directory").

```sh
find .agent-handoff -name '* 2.md' -print
```

No output — no Finder duplicate files.

```sh
wc -c .agent-handoff/tools/alert-state.sh
```

`6519 .agent-handoff/tools/alert-state.sh` — unchanged from the byte-count
that has held throughout the session.

CLAUDE.md and AGENTS.md last-modified dates remain May 15 (not touched this
turn). docs/ unchanged.

## Blockers (must-fix before continuing)

None.

## Nits (suggested, not required)

1. **Kit template carries pre-existing Sami-name residue beyond the operative
   state vocabulary that Codex correctly swept this turn.** `kit/v1/.agent-handoff/PROTOCOL.md.template`
   still contains 30 Sami mentions, including L181 "Sami: approval / priority /
   risk / taste" (stable role model bullet), L186 "Sami's sole authority",
   L433 "use this schema unless Sami explicitly approves a schema change", L515
   "Sami approval basis", L533 "Stop and ask Sami before", and approval-context
   wording throughout. These are non-operative-state mentions (approver
   context, instruction-author voice) and are correctly out of E6-DOCS-ALIGN-001's
   authorized scope this turn — Codex was scoped to the operative-state
   vocabulary (`needs_sami`, packet field labels, callback labels). However,
   they reduce the kit's drop-in portability: an external adopter copying the
   kit template into their own repo today would inherit a template that names
   the source-repo human approver throughout. Recommend a future authorized
   portability sweep (`E6-PORTABILITY-001` or similar) before any external
   adopter uses the kit, with the kit template's role-name placeholders
   (e.g., `<human_approver>` or "the configured human approver") replacing
   "Sami" in the stable role model bullet, schema-change rule, approval-basis
   field, and stopgate list. Live `PROTOCOL.md` may keep Sami because Sami is
   the configured human approver in this repo, but it should still be reviewed
   alongside the sweep for consistency.

2. **Live `PROTOCOL.md` §"GPT Coordinator / Outcome Architect" and §"Node
   Capability And Advisor Rules" still use Sami-specific authority wording
   while the new Outcome Circles subsection uses portable "the human approver"
   wording.** Specifically: L160 "Sami alone has approval capability", L181
   "Sami: approval / priority / risk / taste", L186 "Approval remains Sami's
   sole authority." These coexist with the new Outcome Circles wording at
   L308-310 ("Commit, push, new scope, and final completion still require the
   human approver's exact approval ... The adopting repo may configure a local
   label for the human approver."). For the live repo this is fine (Sami IS
   the configured human approver), but the document now contains two voices.
   Codex could have noted the internal inconsistency in the turn note. This is
   a documentation-hygiene nit, not a correctness blocker. The portability
   sweep above resolves both nits in one pass.

## Soft Observation (Not A Nit, For Sami's Awareness)

`.agent-handoff/COLLAB.md` is now 287632 bytes (281KB / 5691 lines). The
historical OC-005 block beneath the current-owner section accounts for most of
the volume. `STRATEGY.md` §12 already names evidence bloat as an open
question to measure, not a current blocker. A future archival convention
(e.g., `COLLAB.md` slimming to current state only, with prior sections moved
to dated `COLLAB-archive-NNNN-MM.md` files) is worth considering after the
bootstrap retrospective. Out of scope this turn.

## Open Questions For The Other Agent

None for Codex this turn. The audit accepts E6-DOCS-ALIGN-001 as satisfied.

The next strategic questions are Sami's, framed for GPT synthesis below.

## Browser Verification

- Tool used: N/A
- Reason: docs/protocol audit; no HTML or runtime touched. `DASHBOARD.html`
  diff exit 0 confirms no dashboard change to verify.

## Evidence Basis

- USER SAID: E6-DOCS-ALIGN-001 audit request listed 15 sections covering
  scope, mirror, decision actions, portable naming, Notes, sycophantic
  adaptation, satisfaction/approval discipline, trust wording, trust phases,
  prompt injection scanning, Dashboard v1 scope, naming/layer discipline,
  smarter-agent limitation, OC-005 status handling, and PR-shape
  recommendation.
- FILE VERIFIED: `PROTOCOL.md` L77-345 (Packet vocab + Outcome Circles + new
  Human Decision Actions And Notes); kit template same range; `OPERATING-MODEL.md`
  §8 / §12 / §13; `STRATEGY.md` §5 / §8 / §11; Codex turn note
  `E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`; git state.
- AGENT SUMMARY: Codex's E6-DOCS-ALIGN-001 turn note self-reports allow-list
  files, mirror discipline, decisions encoded, and OC-005 non-claim.
  Verified independently above.
- INFERENCE: PR shape recommendation for Sami; portability sweep proposal
  for the kit template residue.
- UNKNOWN: whether the OC-005 preservation PR has been opened, merged, or
  pushed (Codex explicitly did not verify this; this audit also does not
  verify it — `git log` shows HEAD at `64ef94a` PR #11 merge with no OC-005
  preservation PR yet).

## Portability Findings

- Repo-local assumptions: live `PROTOCOL.md` still names Sami in approval-
  authority sections (correct for this repo, but see nit #2). Kit template
  inherits the same residue (nit #1).
- Machine/local-tool assumptions: none introduced. No new dependencies, no
  config edits, no global state.
- Browser/connector assumptions: none. No MCP, plugin, bridge, or `.mcp.json`
  touched (all absent / unchanged).
- Any workaround used: none.

## PR-Shape Recommendation (For Sami, NEEDS_GPT)

This is a strategic decision and is `NEEDS_GPT` per the bootstrap rule and
the milestone context. Recommend Sami paste the following to GPT-5.5 Pro:

```text
We have two locally-pending arcs:
(a) OC-005 preservation: 3 turn notes (Codex builder + Claude auditor + GPT
    exit synthesis) plus the bootstrap-milestone COLLAB.md handoff.
(b) E6-DOCS-ALIGN-001: 5 modified tracked files (PROTOCOL.md, kit template,
    OPERATING-MODEL.md, STRATEGY.md, COLLAB.md) plus 2 new turn notes (Codex
    builder + Claude audit).
Plus 3 untracked mockup files (decision-cockpit-v1/v2/v3.html) from the
design conversation.

Two PR-shape options:

A. Single combined PR.
   Pros: minimizes ceremony; preserves convergence-then-codification as
   one unit.
   Cons: bundles substantive protocol-vocabulary change with audit-trail
   preservation; reviewers must parse two arcs in one PR.

B. Two sequential PRs.
   B1: OC-005 preservation (matches PR #9/#10/#11 pattern).
   B2: E6-DOCS-ALIGN-001 docs realignment + audit.
   Pros: matches established OC-preservation rhythm; crisp scope per PR;
   aligns with the bootstrap retrospective gate (preserve OC-005 → docs
   realignment → retrospective).
   Cons: 2 PR cycles instead of 1.

Question: which shape do you recommend, and where do the 3 mockup files
belong (B1, B2, neither, or a separate C3)?
```

Claude's lean: Option B (two sequential PRs). Reasoning:
- OC-005 preservation is the bootstrap milestone closure; it deserves a
  scoped PR per the OC-002/OC-003/OC-004 established pattern.
- E6-DOCS-ALIGN-001 is a substantive protocol-vocabulary change and warrants
  its own reviewable scope.
- The 3 mockup files belong in B2 (or a separate C3) since they are design
  artifacts from the convergence that drove E6-DOCS-ALIGN-001's wording
  choices, not OC-005 evidence.

This is a recommendation, not approval. Sami decides after GPT synthesis.

## Handoff

- Next agent: Sami (then GPT for PR-shape synthesis)
- Specific ask:
  1. Read this audit; confirm satisfied or request revision.
  2. Paste the PR-shape question above to GPT-5.5 Pro.
  3. After GPT synthesis, authorize one of the recommended PR shapes with
     exact files and branch name.
  4. Optionally authorize the kit-template portability sweep as a separate
     future turn (`E6-PORTABILITY-001`) — not required to land before the
     bootstrap retrospective.

Hard stop after audit. No staging, commit, push, branch, PR, merge,
dashboard implementation, trust implementation, public release, new Outcome
Circle, kit template Sami-sweep, COLLAB archival, or runtime work is
authorized by this audit.
