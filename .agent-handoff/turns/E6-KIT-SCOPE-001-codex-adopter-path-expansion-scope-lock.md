# E6-KIT-SCOPE-001 - Codex kit adopter-path expansion scope lock

## Coordinator Trigger

- State: ROUTINE
- Reason: Sami explicitly authorized this design-only kit scope lock after
  PR #17; it defines a future kit implementation Outcome Circle without editing
  kit files, public docs, protocol docs, dashboard files, trust-layer files, or
  starting public release.

## Project Mode Estimate

- Dominant mode: Coordinator / adopter-path scope lock
- Reason: this turn translates root README proof plus live kit inventory into a
  buildable implementation scope. It does not implement the kit.

## Entry State

Recorded before any E6-KIT-SCOPE-001 file write:

```text
$ git rev-parse HEAD
5b5cb3c5965c644be8eaff07b52f8d63605e27cb

$ git status --short --branch --untracked-files=all
## main...origin/main

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

Entry conclusion: clean `main` at PR #17 merge commit
`5b5cb3c5965c644be8eaff07b52f8d63605e27cb`.

## Sources Read

- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `kit/v1/README.md`
- `kit/v1/AGENTS.md.template`
- `kit/v1/CLAUDE.md.template`
- `kit/v1/.gitignore.snippet`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/COLLAB.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `kit/v1/.agent-handoff/prompts/starter-turn-note.md`
- `kit/v1/.agent-handoff/prompts/reflection-proposal-template.md`
- live kit directory inventory from `rg --files --hidden kit/v1`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/turns/E6-README-001-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-README-001-claude-audit-root-readme-implementation-iter-1.md`
- `.agent-handoff/turns/E6-README-SCOPE-001-codex-repo-strangerprintability-scope-lock.md`
- `.agent-handoff/turns/E6-README-SCOPE-001-claude-audit-repo-strangerprintability-scope-lock.md`
- `.agent-handoff/turns/E6-DASH-003-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-RETRO-001-codex-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-RETRO-001-claude-audit-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`

Memory note: local Codex memory was checked for prior `claude-codex` kit and
strangerprintability context. It matched the live repo rule that kit paths must
be verified with `rg --files --hidden kit/v1` because older shorthand prompts
miss hidden `.agent-handoff` kit files.

## 1. Current Kit Inventory

Live inventory from `rg --files --hidden kit/v1`:

```text
kit/v1/CLAUDE.md.template
kit/v1/.gitignore.snippet
kit/v1/README.md
kit/v1/AGENTS.md.template
kit/v1/.agent-handoff/DASHBOARD.md.template
kit/v1/.agent-handoff/turns/.gitkeep
kit/v1/.agent-handoff/digests/.gitkeep
kit/v1/.agent-handoff/prompts/reflection-proposal-template.md
kit/v1/.agent-handoff/prompts/starter-turn-note.md
kit/v1/.agent-handoff/PROTOCOL.md.template
kit/v1/.agent-handoff/consultants/.gitkeep
kit/v1/.agent-handoff/COLLAB.md.template
kit/v1/.agent-handoff/reflections/harness/.gitkeep
kit/v1/.agent-handoff/reflections/project/.gitkeep
kit/v1/.agent-handoff/reflections/mixed-needs-classification/.gitkeep
```

Inventory assessment:

| File | Current purpose | Adopter-facing? | Scope-lock assessment |
| --- | --- | --- | --- |
| `kit/v1/README.md` | Quick-start and file inventory for the portable kit. | Yes | Useful but stale: still frames the kit as a Claude Code / Codex scaffold and says Sami approves. It lacks the post-README adopter success test, adoption patterns, trust caveats, Outcome Packet guidance, Human Decision Record guidance, and examples. |
| `kit/v1/AGENTS.md.template` | Codex-facing agent instructions for an adopter repo. | Yes | Operationally useful but too dogfood-specific: hard-codes Codex/Claude and Sami in reusable authority wording. Needs configured-human-approver wording and a clearer "agent role assignment" convention. |
| `kit/v1/CLAUDE.md.template` | Claude-facing mirror instructions. | Yes | Same issue as `AGENTS.md.template`: useful, but not sufficiently portable for non-Claude/Codex adopters. |
| `kit/v1/.agent-handoff/PROTOCOL.md.template` | Main protocol template. | Yes | Strongest existing kit file. It already has approver-label convention, `needs_human`, decision actions, notes, anti-adaptation, and Outcome Circle rules. It still carries model-specific examples (`GPT-5.5 Pro`, `Codex`, `Claude Code`) that should become local-assignment examples rather than reusable assumptions. |
| `kit/v1/.agent-handoff/COLLAB.md.template` | Current-state handoff template. | Yes | Useful but stale: fields still say "Decision needed from Sami", "Why Sami is needed", "Questions Requiring Sami Approval", and model-specific response fields. Needs portable human-approver labels and role-assignment flexibility. |
| `kit/v1/.agent-handoff/DASHBOARD.md.template` | Optional Markdown dashboard template. | Yes, optional | Useful for adopters who want a dashboard, but old cockpit semantics remain behind current Decision Cockpit v1. It still says "What Sami Pastes Next" and has older Human Decision Packet copy. It should become optional Decision Cockpit guidance, not a forced dashboard. |
| `kit/v1/.agent-handoff/prompts/starter-turn-note.md` | First-turn note skeleton. | Yes | Useful but incomplete for Outcome Packet work. It still references Sami for duplicate authorization and next-agent examples. Needs Coordinator Trigger / Evidence Basis preservation, but should not become a bloated universal turn-note template. |
| `kit/v1/.agent-handoff/prompts/reflection-proposal-template.md` | Proposal-only reflection template. | Yes, advanced | Useful but not MVP-critical. It still says Sami and GPT-5.5 Pro. It should be ported or clearly marked advanced/deferred. |
| `.gitignore.snippet` | Ignore rules to append to adopter repo. | Yes | Likely still useful. Future implementation should check whether it needs comments about local generated/private artifacts, but no scope expansion is needed. |
| `.gitkeep` files | Preserve empty directories for turns, digests, consultants, reflections. | Structural | Fine. Do not over-expand. The future implementation may leave these untouched unless directory layout changes. |

Summary: the kit is a real scaffold, but it is not stranger-extractable yet.
The current main gap is not protocol theory; it is adopter path, portability
copy, example artifacts, and trust/dashboard optionality.

## 2. External Adopter Success Test

A stranger should be able to copy `kit/v1` into a different repo and do the
following without hidden chat context:

1. Understand the approval-boundary protocol:
   - agents produce evidence, judgment, and recommendations
   - the human approver authorizes consequences
   - `satisfied` is not approval
2. Assign portable roles:
   - Coordinator
   - Builder
   - Auditor
   - human approver / configured human approver
   - Scribe or verifier only when needed
3. Create a minimal Outcome Packet with:
   - outcome description
   - rubric
   - allowed files
   - no-touch list
   - max iterations
   - builder
   - auditor
   - pass evidence
   - stop conditions
   - human callback conditions
   - coordinator callback conditions
   - commit/push rule
   - artifact visibility
   - branch/PR policy
4. Run a manual builder/auditor loop inside that packet.
5. Record a builder turn note and auditor turn note.
6. Use Human Decision Notes without asking for private chain-of-thought.
7. Preserve evidence in repo-visible files.
8. Avoid assuming Claude, Codex, GPT-5.5 Pro, or Sami are required.
9. Understand that the dashboard is optional.
10. Understand that Git-visible records are useful but not tamper-proof.

Minimum success test:

```text
An adopter should be able to say:
"I copied the kit, assigned my own Builder/Auditor/Coordinator/human approver,
created an Outcome Packet, ran one manual review loop, recorded evidence, and
did not treat satisfied/model consensus as approval."
```

## 3. Minimum Kit Deliverables

Future E6-KIT implementation should be the smallest useful adopter-path
upgrade, not a full product package.

Required MVP deliverables:

1. **Expand `kit/v1/README.md`.**
   - Add the external adopter success test.
   - Add a clear "start here" flow.
   - Add the five adoption patterns.
   - Add "what not to copy from this repo."
   - Add a dashboard optionality section.
   - Add trust caveats.
   - Add role-assignment guidance.
   - Add a concise file map.

2. **Portability sweep kit templates.**
   - Replace reusable `Sami` authority wording with `human approver` /
     `configured human approver`.
   - Keep model names only where the file is explicitly model-specific or
     clearly marked as an example assignment.
   - Prefer placeholders such as `{{BUILDER_AGENT}}`, `{{AUDITOR_AGENT}}`,
     `{{COORDINATOR_AGENT}}`, and `{{CONFIGURED_HUMAN_APPROVER_LABEL}}`.

3. **Add an Outcome Packet template.**
   - Suggested path:
     `kit/v1/.agent-handoff/prompts/outcome-packet-template.md`.
   - It should be compact, fillable, and include the 14-field shape used in
     recent circles.
   - It should state that packet visibility precedes substantive work for
     scoped Outcome Circles.

4. **Add a Human Decision Record template.**
   - Suggested path:
     `kit/v1/.agent-handoff/prompts/human-decision-record-template.md`.
   - It should include decision action, exact approval text if any, human
     decision note, authorized scope, not-authorized scope, evidence refs,
     prior state, next state, timestamp, repo ref, and trust status.
   - It should avoid private reasoning and secrets.

5. **Add approval-boundary copy snippets.**
   - `satisfied` is not approval.
   - Auditor pass is not approval.
   - Model consensus is not approval.
   - Human approval authorizes only the exact named consequence.
   - This authorizes / this does NOT authorize.

6. **Add an adoption checklist.**
   - Copy files.
   - Fill placeholders.
   - Assign roles.
   - Define irreversible actions.
   - Define no-touch paths.
   - Run one minimal circle.
   - Record evidence.
   - Preserve via PR only after exact human approval.

7. **Add minimal examples.**
   - One minimal Outcome Packet.
   - One minimal builder turn note.
   - One minimal auditor turn note.
   - One Human Decision Record showing `satisfied` but not approved.
   - One short reject/redo example, either as a Human Decision Record or a
     compact paired example.

Recommended but non-MVP deliverables:

- Full scope-conflict example.
- Full reject/close example.
- Multi-human approval example.
- Runtime-integrated example.
- CI manifest/trust example.
- Hosted dashboard example.

## 4. What Not To Include Yet

Explicitly defer:

- public-alpha packaging
- Medium / X / landing page
- whitepaper
- trust-layer implementation
- signed manifests
- blockchain anchoring
- transparency-log integration
- runtime / wakeup / notifier / auto-handoff
- vendor-specific automation
- hosted dashboard
- legal/compliance claims
- new protocol name
- public launch language
- broad refactor of repo root docs
- broad protocol rewrite

The future kit implementation should make the kit understandable, not make it
look complete in ways the project has not proven.

## 5. Protocol Portability

The kit should remain role-based:

- human approver
- configured human approver
- Coordinator
- Builder
- Auditor
- Scribe / verifier only if needed

Avoid reusable assumptions:

- Sami
- GPT-5.5 Pro
- Claude Code
- Codex
- this repo's specific E6 history
- Polaris as whole-protocol name

Current findings:

- `PROTOCOL.md.template` already has the approver-label convention and modern
  result states, but still includes dogfood assignment examples such as
  "GPT-5.5 Pro: coordinator", "Codex: builder", and "Claude Code: auditor".
  Future implementation should either move those into an example block or make
  them placeholder assignments.
- `AGENTS.md.template`, `CLAUDE.md.template`, `COLLAB.md.template`,
  `DASHBOARD.md.template`, `starter-turn-note.md`, and
  `reflection-proposal-template.md` still contain reusable `Sami` mentions.
  These should be ported in the kit implementation circle.
- It is acceptable for file names `AGENTS.md.template` and
  `CLAUDE.md.template` to remain for current adopter convenience, but the kit
  README must say they are example agent-instruction templates, not proof that
  the protocol requires those specific models.

## 6. Dashboard Portability

Decision Cockpit / Polaris is the reference cockpit. The dashboard is optional.

Kit guidance should say:

- Protocol-only adoption is valid.
- The reference cockpit is useful if an adopter wants a ready human-facing
  surface.
- Adopters may instead implement the same approval-boundary semantics in their
  own dashboard, IDE, CI surface, compliance tool, or runtime.
- The kit should not force dashboard adoption.
- `COLLAB.md` / turn notes / protocol remain authoritative; dashboards are
  views.
- Dashboard copy must not imply approval from `satisfied`, auditor pass, model
  consensus, UI state, copy buttons, or silence.

Minimum future dashboard work inside kit:

- Update `DASHBOARD.md.template` from the old human-decision-packet dashboard
  shape to a lighter optional Decision Cockpit starter.
- Keep it Markdown-only for kit v1.
- Do not add `DASHBOARD.html` to the kit yet unless a later scope specifically
  asks for a static HTML reference.

## 7. Trust-Layer Caveats

Recommended exact kit wording:

```text
This kit creates a Git-visible / audit-visible work record by default.
That record is useful for review, but it is not tamper-proof.
Tamper-evident hardening requires separately configured protected branches,
signing, manifests, CI checks, transparency logs, mirrors, or external
witnesses. Blockchain is not MVP. This kit does not make legal or compliance
suitability claims.
```

Expanded optional wording:

```text
Signing, manifests, transparency logs, and external anchors can make records
more tamper-evident when configured. They do not prove good judgment, prevent
prompt injection, prove human intent, prevent compromised credentials, or make
agent recommendations legally sufficient.
```

The kit should not include trust implementation in this round. It should only
teach honest trust posture.

## 8. Example Artifact Strategy

MVP examples should be minimal and clearly labeled as examples, not evidence
that the protocol works in the adopter's repo.

Required for MVP:

1. **Minimal Outcome Packet**
   - Demonstrates the 14-field shape with a harmless docs-only task.
2. **Minimal builder turn note**
   - Shows clean entry, sources read, files changed, evidence, and handoff.
3. **Minimal auditor turn note**
   - Shows independent check, finding categories, pass/fail/result, and
     explicit "auditor pass is not approval."
4. **Human Decision Record: satisfied not approved**
   - Shows that `satisfied` can exist while human approval remains pending.
5. **Reject / Redo example**
   - Shows required decision rationale, scope boundary, and `needs_revision`
     mapping.

Deferred examples:

- Full scope-conflict example.
- Full reject/close example.
- Ask-coordinator example with timeout/resurface behavior.
- Multi-human approval example.
- Trust-manifest example.
- Runtime-integrated example.

Reasoning: the MVP needs enough examples that a stranger can run one manual
loop. Too many examples will look like a finished product and create a false
sense of safety.

## 9. Public-Docs Scrub Dependency

PR #17 appears sufficient for root public-docs scrub before kit expansion.

Evidence:

- Root README now explains the project, proof status, limitations, adoption
  patterns, and trust caveats.
- Root `AGENTS.md` and `CLAUDE.md` were narrowly scrubbed and audited as part
  of E6-README-001.
- E6-README-001 GPT exit synthesis explicitly says root README proof is
  achieved and external installability / kit extractability remain separate,
  unproven work.

Recommendation: do not edit root README / AGENTS / CLAUDE as part of kit
scope. If the future kit implementation discovers a direct contradiction in
root docs, stop and report rather than folding a root-doc scrub into kit work.

## 10. Implementation PR Shape

Recommended future implementation:

- One kit implementation Outcome Circle after this scope lock and Claude audit.
- Max iterations: 2.
- Entry and exit: GPT/human required because adopter-path work is public-facing
  strategic work and can overclaim portability.
- Builder: Codex is reasonable.
- Auditor: Claude Code.
- GPT exit synthesis: required if auditor returns `satisfied` or if ambiguity
  remains.

Likely files to edit:

- `kit/v1/README.md`
- `kit/v1/AGENTS.md.template`
- `kit/v1/CLAUDE.md.template`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/COLLAB.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `kit/v1/.agent-handoff/prompts/starter-turn-note.md`
- `kit/v1/.agent-handoff/prompts/reflection-proposal-template.md` only if
  scoped for the same portability sweep
- new `kit/v1/.agent-handoff/prompts/outcome-packet-template.md`
- new `kit/v1/.agent-handoff/prompts/human-decision-record-template.md`
- new `kit/v1/.agent-handoff/examples/` files for minimal examples, if scoped

No-touch list for future implementation should include:

- root `README.md`, `AGENTS.md`, `CLAUDE.md` unless a direct contradiction is
  separately authorized
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/mockups/**`
- `docs/`
- trust-layer files
- runtime/product files
- automation/API/model/plugin/global config
- live Open Mic Colorado / pilot / unrelated repo paths

Future audit should check:

- adopter can run one manual builder/auditor loop from kit docs alone
- no reusable `Sami` authority wording remains
- model names are examples or local assignments only
- dashboard remains optional
- trust caveats are honest
- examples are labeled as examples, not proof
- no public-alpha / launch / legal / compliance overclaims
- no new protocol name is adopted

## 11. Failure Modes

| Risk | Failure mode | Mitigation |
| --- | --- | --- |
| Model/person coupling | Kit appears to require Claude/Codex/GPT/Sami. | Use role names and placeholders; keep model/person names only as example assignments. |
| Dashboard coupling | Adopters think Polaris is required. | Put protocol-only adoption first; dashboard optionality in README and dashboard template. |
| Trust overclaim | Kit implies tamper-evidence or compliance exists. | Use explicit Phase 0 wording; "not tamper-proof"; "Blockchain is not MVP"; no legal claim. |
| Excess length | Kit becomes too long to use. | Keep README path short; push examples into example files; avoid whitepaper theory. |
| Too few examples | Adopter cannot run first loop. | Include packet, builder, auditor, decision record, and reject/redo examples. |
| Example-as-proof | Users treat fictional examples as validation. | Label examples as examples; state they are not adopter proof. |
| Stale dogfood export | Kit leaks E6 history, Decision Ledger, or local assignments. | Add "what not to copy" and run grep for repo-local strings. |
| New name drift | Kit accidentally brands the whole protocol as Polaris or another new name. | Preserve current naming discipline; broader protocol name deferred. |
| False safety | Adopters believe copying files makes work governed. | Add adoption checklist and "files copied are not governance until used." |
| Hidden implementation creep | Kit turn starts trust tooling, hosted dashboard, or runtime work. | Future packet must forbid trust implementation, hosted dashboard, runtime, automation, and public release. |

## 12. Final Recommendation

Exact next step:

```text
Claude audits E6-KIT-SCOPE-001. If accepted, preserve the scope lock. Then ask
GPT/human to frame one kit implementation Outcome Circle for kit/v1 adopter-path
expansion, max 2 iterations.
```

Claude audit needed:

```text
Yes. This is public-facing strategic scope, even though it is design-only.
```

Open GPT / human decisions:

- Sami must decide whether to accept this scope lock after Claude audit.
- GPT should frame the kit implementation Outcome Packet after preservation.
- Sami must approve exact kit files before implementation.
- Public-alpha packaging remains separate and unapproved.
- Trust-layer implementation remains separate and unapproved.

Ready for kit implementation Outcome Circle:

```text
Conditionally yes: after Claude audit passes or requested fixes land.
```

Trust-layer design timing:

```text
Run trust-layer design in parallel or after kit implementation, not before it.
Kit expansion should include trust caveats but not trust implementation. The
project should prove external extractability before hardening a trail that
external adopters cannot yet use.
```

## Verification

`git status --short --branch --untracked-files=all`:

```text
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-KIT-SCOPE-001-codex-adopter-path-expansion-scope-lock.md
```

`git diff --check`: exit 0.

`find .agent-handoff -name '* 2.md' -print`: no output.

Tracked diff names:

```text
.agent-handoff/COLLAB.md
```

No-touch status/diff checks returned no output for:

```text
kit/v1
README.md
AGENTS.md
CLAUDE.md
docs
.agent-handoff/PROTOCOL.md
.agent-handoff/OPERATING-MODEL.md
.agent-handoff/STRATEGY.md
.agent-handoff/DASHBOARD.md
.agent-handoff/DASHBOARD.html
.agent-handoff/mockups
.agent-handoff/tools/alert-state.sh
.agent-handoff/advisor-notes
.agent-handoff/reflections
.agent-handoff/improvements
```

Confirmed:

- Only allowed files changed: `.agent-handoff/COLLAB.md` and this turn note.
- No kit/v1 diff.
- No README / AGENTS / CLAUDE diff.
- No docs diff.
- No PROTOCOL / OPERATING-MODEL / STRATEGY diff.
- No DASHBOARD.md / DASHBOARD.html diff.
- No trust-layer implementation.
- No public-release work.
- No new Outcome Circle.
- No staging, commit, push, branch, PR, or merge.

Hard stop after local scope-lock note. No staging, commit, push, branch, PR,
merge, kit edits, README edits, public release, trust implementation,
dashboard edits, or new Outcome Circle.
