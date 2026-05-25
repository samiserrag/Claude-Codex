# E6-README-SCOPE-001 - Codex repo strangerprintability scope lock

## Coordinator Trigger

- State: ROUTINE
- Reason: Sami explicitly authorized this design-only public-docs scope lock; it defines README / kit / whitepaper scope without editing public docs, starting public release, implementing trust-layer machinery, or opening a new Outcome Circle.

## Project Mode Estimate

- Dominant mode: Coordinator / public-docs scope lock
- Reason: this turn translates post-cockpit evidence into a buildable documentation scope and handoff, not implementation.

## Entry State

Recorded before any E6-README-SCOPE-001 file write:

```text
$ git rev-parse HEAD
3de5856e02e7612b19d216c8f26d7ca3ac2c15cb

$ git status --short --branch --untracked-files=all
## main...origin/main

$ find .agent-handoff -name '* 2.md' -print
```

Duplicate-file check printed nothing.

Entry conclusion: clean `main` at PR #15 merge commit `3de5856e02e7612b19d216c8f26d7ca3ac2c15cb`.

## Sources Read

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/turns/E6-DASH-003-gpt-exit-synthesis.md`
- `.agent-handoff/turns/E6-RETRO-001-codex-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-RETRO-001-claude-audit-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-claude-audit-decision-notes-trust-doc-alignment.md`
- `kit/v1/README.md`
- root `README.md`
- root `AGENTS.md`
- root `CLAUDE.md`

Memory note: I also checked the local Codex memory registry for prior `claude-codex` Decision Cockpit / strangerprintability context. It confirmed the same durable rule already visible in repo docs: Decision Cockpit v1 should precede README / strangerprintability and the bootstrap rule should not relax automatically.

## 1. Strangerprintability Definition

For this repo, "strangerprintable" means a new reader can land on the repository cold and understand the following within five minutes:

- **What problem this solves:** multi-agent work can produce convincing outputs, audits, and consensus while silently laundering approval. The protocol separates agent evidence from human authorization.
- **What this does not solve:** it does not solve AI alignment, provide a runtime, replace an IDE, prove legal compliance, make records tamper-proof, or eliminate human judgment.
- **Who it is for:** people or teams using multiple agents/models who need explicit scope, review, evidence, and human approval boundaries.
- **What `satisfied is not approval` means:** `satisfied` is an auditor/grader state. It says the rubric appears met. It does not authorize commit, push, merge, deploy, public release, scope expansion, or final completion.
- **What Decision Cockpit v1 demonstrates:** Polaris can be a static, self-contained reference cockpit that shows role, decision, evidence, approval boundary, risk context, trust posture, and execution-mode interruptibility without becoming a runtime.
- **How the protocol can be adopted without this dashboard:** the protocol is repo-file governance. Teams can use `PROTOCOL.md`, Outcome Packets, turn notes, COLLAB-style handoff, and exact approval text without adopting Polaris.
- **Where to start:** root `README.md` for public orientation, `.agent-handoff/DASHBOARD.html` for the reference cockpit proof, `.agent-handoff/PROTOCOL.md` for enforced governance, `.agent-handoff/STRATEGY.md` for positioning, and `kit/v1/` for adopter scaffolding.

Minimum success test:

```text
After five minutes, a stranger should be able to explain:
"This is a Git-native approval-boundary protocol for cross-model agent work.
Agents produce evidence and recommendations. Humans authorize consequences.
Polaris is the reference cockpit, not the whole protocol."
```

## 2. Public Claim Discipline

Safe wording:

- Git-native approval-boundary protocol.
- Cross-model agent work.
- Agents produce evidence; humans authorize consequences.
- Decision Cockpit / Polaris is a reference implementation.
- `kit/v1` is the adoption path.
- Git-visible / audit-visible record today.
- Tamper-evident when protected branches, signing, manifests, or external witnesses are configured.
- Protocol plus reference cockpit proof.
- Proof of life inside this repo.

Unsafe wording to reject:

- first agent governance system
- first HITL approval system
- tamper-proof
- immutable audit trail
- legally compliant / legally verified
- AI-safe approval system
- public-alpha ready
- proven at scale
- runtime replacement
- LangGraph competitor
- Microsoft AGT competitor
- enterprise agent management replacement
- blockchain-secured

Boundary sentence for README:

```text
This repo demonstrates a governance pattern, not a runtime: agents may build,
audit, and recommend, but only the human approver authorizes consequences.
```

## 3. Audience Segmentation

The public docs should support separate entry paths:

| Audience | First question | README path |
| --- | --- | --- |
| Solo dev using Claude/Codex/GPT-style tools | "How do I stop my agents from treating agreement as approval?" | Start with the core idea, then use the protocol-only or reference cockpit path. |
| Small AI-heavy team | "Can this reduce coordination confusion across roles?" | Start with Outcome Packets, role separation, Decision Cockpit v1, and human decision actions. |
| Open-source maintainer | "Can I make agent PRs auditable without adding a platform?" | Start with Git-visible turn notes, exact approval text, no-touch lists, and kit templates. |
| AI consulting shop | "Can this become a client-safe operating pattern?" | Start with adoption patterns, caveats, and what not to claim. |
| Regulated / compliance-aware team | "Is this legally trustworthy?" | Start with trust caveats: Git-visible by default, tamper-evident only when configured, not legal compliance. |
| AI safety / eval / red-team team | "What failure mode is being studied?" | Start with approval laundering, sycophantic adaptation, model consensus not approval, and honest limits. |
| Runtime/tool vendor | "Can this plug into my substrate?" | Start with protocol-only adoption and runtime-integrated adoption; Polaris is optional. |

The README should not force all audiences through the history of E5/E6. It should provide one orientation layer and then route readers to the correct deeper artifact.

## 4. Adoption Patterns

Future public docs should name five adoption patterns:

1. **Protocol-only adoption**
   - Copy the rules, Outcome Packet shape, result states, and approval language.
   - Keep or replace the dashboard.
   - Best for teams that already have a task board or IDE.

2. **Reference cockpit adoption**
   - Use Polaris / Decision Cockpit as-is.
   - Best for small teams or solo developers who want a ready human-facing surface.

3. **Adapted cockpit adoption**
   - Preserve the approval-boundary semantics but redesign the UI for a local workflow.
   - Best for open-source projects or teams with existing dashboards.

4. **Runtime-integrated adoption**
   - Integrate the protocol into LangGraph-class, IDE-class, or agent-platform substrates.
   - The runtime executes; the protocol governs authorization boundaries.

5. **Compliance / audit adoption**
   - Add signed commits, protected branches, manifests, attestations, or external witnesses.
   - Public docs must say this is not legally compliant by default and needs jurisdiction/use-case review.

## 5. Root README Recommended Structure

Section outline only:

1. **What This Is**
   - Git-native approval-boundary protocol for cross-model agent work.
   - Decision Cockpit v1 is the reference cockpit.

2. **What This Is Not**
   - Not a runtime, IDE, orchestration framework, hosted agent platform, legal compliance product, or tamper-proof audit system.

3. **Why It Exists**
   - Approval laundering, model consensus as fake approval, human transport burden, lost evidence, and unclear authority.

4. **Core Idea: Satisfied Is Not Approval**
   - Built, audited, satisfied, authorized, committed/pushed/merged/launched are distinct states.

5. **Quick Visual: Decision Cockpit v1**
   - Point to `.agent-handoff/DASHBOARD.html` and summarize what it shows.
   - Avoid claiming the cockpit is the whole product.

6. **How It Works**
   - Three-phase method: pre-build convergence, during-build Outcome Circle, post-build exit synthesis.
   - Roles: Coordinator, Builder, Auditor, Human approver, Repo, Polaris.
   - Outcome Packet and no-touch boundaries.

7. **Current Proof Status**
   - Bootstrap 2 of 2 observed.
   - Objective and judgment rubrics tested.
   - Decision Cockpit v1 implemented and audited.
   - Honest failures preserved.

8. **Current Limitations**
   - No public adoption, external installability, burden-reduction measurement, severe disagreement evidence, trust hardening, legal/compliance suitability, or autonomous transport proof.

9. **How To Dogfood / Adopt**
   - Start with protocol-only path.
   - Try reference cockpit.
   - Use `kit/v1`.
   - Run one narrow Outcome Circle.

10. **Repo Map**
    - `.agent-handoff/PROTOCOL.md`
    - `.agent-handoff/OPERATING-MODEL.md`
    - `.agent-handoff/STRATEGY.md`
    - `.agent-handoff/DASHBOARD.html`
    - `.agent-handoff/turns/`
    - `kit/v1/`

11. **Safety / Trust Caveats**
    - Git-visible today.
    - Tamper-evident only when configured.
    - Not tamper-proof.
    - Not legal advice or legal compliance.
    - Does not solve alignment.

12. **Contributing / Future Work**
    - README / kit polish.
    - trust-layer design.
    - example circles.
    - multi-human approval pattern later.
    - runtime integrations later.

README length target: compact enough to read in under ten minutes. Deeper explanation belongs in the whitepaper or strategy docs.

## 6. Kit Extraction / Adopter Path

`kit/v1` should eventually include or clarify:

- `PROTOCOL.md.template` with portable human-approver vocabulary.
- Outcome Packet template.
- Human Decision Record template.
- Human Decision Notes guidance.
- Decision-action vocabulary and action/state mapping.
- Dashboard optionality: Polaris is optional; approval-boundary semantics are not.
- Approval-boundary copy: this authorizes / this does NOT authorize.
- Trust-layer caveats: Git-visible by default; tamper-evident only when configured; not tamper-proof.
- Example Outcome Circle.
- Example `COLLAB.md` current-state handoff.
- What not to copy from this repo:
  - historical E5/E6 clutter
  - hard-coded local model/person assignments
  - local branch/PR history
  - Open Mic / old Decision Ledger context
  - stale experiment caps
  - unmerged or historical turn-specific instructions

Adopter path should be framed as:

```text
Start protocol-only. Add the reference cockpit if useful. Adapt the cockpit
only after preserving the approval boundary.
```

## 7. Whitepaper Track

The README should not carry the full theory. A later whitepaper should hold:

- cognitive scalability without approval laundering
- MAS governance vs centaurian fusion
- protecting humans from fake approval pressure
- protecting agents from being treated as fake approvers
- sycophantic adaptation from agents reading Human Decision Notes
- trust-layer phases and threat model
- limitations against smarter/adversarial agents
- what the protocol does not solve about alignment
- multi-human approval as future governance layer
- adoption patterns across products, teams, runtimes, and workflows
- how Decision Cockpit v1 teaches the method without becoming the method

Whitepaper should be honest and limit-forward. It should not be a launch manifesto.

## 8. Naming / Branding

Preserve current naming:

- **Polaris** = dashboard / reference cockpit.
- **Decision Cockpit** = the v1 default view within Polaris.
- **Outcome Circle** = bounded builder/auditor loop.
- **Outcome Packet** = entry contract.
- **Human Decision Notes** = repo-visible decision rationale.
- **Broader protocol name** = deferred.

Do not adopt "Outcome Circles Protocol" yet.

Public naming remains open. README can say:

```text
This repo currently uses "Polaris" for the reference cockpit. The broader
governance protocol name is still deferred.
```

Public docs should minimize hard-coded "Sami" except:

- local configured human approver metadata
- historical attribution
- case-study sections explicitly about this repo

Reusable language should use:

- human approver
- configured human approver
- human decision
- human approval

If a public doc needs to mention Sami, it should explain that Sami is the local configured human approver in this case study, not a reusable protocol role.

## 9. Proof Status

Proven in this repo:

- 2 of 2 bootstrap Outcome Circles completed and accepted.
- Objective rubric tested through E6-OC-002.
- Judgment rubric tested through E6-OC-005.
- Honest process stops preserved: OC-001 as Circle 0.5, OC-003 interrupted, OC-004 blocker.
- Decision Cockpit v1 implemented, audited, and GPT-exit-accepted in E6-DASH-003.
- Protocol plus reference cockpit proof exists.
- Static dashboard can remain self-contained, view-only, and parity-aligned with Markdown.
- Approval-boundary language can be made visible in a human-facing cockpit.

Not proven:

- public adoption
- external installability
- repo strangerprintability
- measured burden-reduction magnitude
- autonomy without the human approver as transport
- severe model-disagreement behavior
- trust-layer tamper-evidence
- legal/compliance suitability
- autonomous wakeup / notifier / transport safety
- scale across teams
- multi-human approval behavior
- runtime-integrated behavior

Claim discipline:

```text
Say "proof of life" and "protocol + reference cockpit proof."
Do not say "public-alpha ready" or "proven at scale."
```

## 10. Next Implementation Turn

Recommended next build track:

1. Claude audits this E6-README-SCOPE-001 scope lock.
2. If accepted, preserve the scope lock in a PR.
3. Run one README implementation Outcome Circle.
4. Include the first public-docs scrub in that README circle or as an immediately adjacent follow-on:
   - root README
   - root AGENTS / CLAUDE public-facing residue only if explicitly authorized
   - kit README / adopter path only if explicitly authorized
5. Run trust-layer design-only in parallel or immediately after README scope, but do not block README on trust implementation.
6. Whitepaper outline comes after README establishes the short public orientation.

My lean:

- **Root README first** because it is the main strangerprintability entry point and is currently stale.
- **Outcome Circle** because README is public-facing, strategic, and could easily overclaim.
- **Public-docs scrub adjacent** because root README cannot be truly strangerprintable if nearby root files still imply this is only the old Decision Ledger experiment.
- **Kit/adopter example second** because the README should decide the public mental model before kit docs are expanded.
- **Whitepaper outline third** because it needs the README's concise claim discipline as a spine.
- **Trust-layer design-only can run in parallel** after README scope is stable; trust implementation is later.

The README implementation packet should explicitly forbid public-alpha launch, landing page, Medium/X, runtime integration, trust-layer implementation, protocol relaxation, and broad kit rewrites unless separately authorized.

## 11. Failure Modes

| Failure mode | Risk | Mitigation |
| --- | --- | --- |
| Overclaiming novelty | Serious readers discount the project | Use "Git-native approval-boundary protocol"; reject "first agent governance system." |
| Confusing protocol vs dashboard | Users think Polaris is required | Say Polaris is reference cockpit; protocol can be adopted without it. |
| README too long | Stranger cannot orient quickly | Keep README compact; route theory to whitepaper and strategy docs. |
| Hiding limitations | Looks like marketing instead of governance | Put "What this does not prove" and trust caveats in the README. |
| Looking like a Claude/Codex/GPT wrapper | Reduces portability | Use portable roles; model names only as current assignments or case-study metadata. |
| Hard-coded personal names | Adopters inherit local assumptions | Use "human approver"; preserve names only for attribution/case study. |
| Inviting trust in non-hardened trail | Creates false compliance confidence | Say Git-visible by default; tamper-evident only when configured; not legal compliance. |
| Treating Decision Cockpit as runtime | Scope drifts into orchestration | Say static view-only reference cockpit; no backend/runtime/network/storage. |
| Losing adoption-pattern portability | Users believe there is only one way to use it | Name the five adoption patterns and dashboard optionality. |
| Making kit sound production-ready | External users copy unstable assumptions | Mark kit as scaffold/adoption path, not installer or compliance artifact. |
| Whitepaper absorbs README scope | Public entry becomes too theoretical | Keep whitepaper later and deeper. |

## 12. Final Recommendation

Exact next step:

```text
Claude audits E6-README-SCOPE-001. If accepted, preserve it. Then run one
README implementation Outcome Circle focused on root README strangerprintability.
```

Claude audit is needed:

```text
Yes. The scope lock is public-facing and strategic, even though it is design-only.
```

Open GPT / human decisions:

- Sami must decide whether to accept this scope lock after Claude audit.
- GPT/Coordinator should frame the README implementation Outcome Packet because README strangerprintability is public-facing and claim-sensitive.
- Sami must approve exact implementation files before any README / root docs / kit edits.
- Public-alpha launch remains a separate future decision.
- Trust-layer implementation remains unapproved.

Ready for README implementation packet:

```text
Conditionally yes: after Claude audit passes or requested fixes land.
```

## Verification

`git status --short --branch --untracked-files=all`:

```text
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-README-SCOPE-001-codex-repo-strangerprintability-scope-lock.md
```

`git diff --check`: exit 0.

Tracked diff names:

```text
.agent-handoff/COLLAB.md
```

The new scope-lock turn note is untracked, as expected.

`find .agent-handoff -name '* 2.md' -print`: no output.

No-touch status/diff checks returned no output for:

```text
README.md
AGENTS.md
CLAUDE.md
docs/
.agent-handoff/PROTOCOL.md
.agent-handoff/OPERATING-MODEL.md
.agent-handoff/STRATEGY.md
.agent-handoff/DASHBOARD.md
.agent-handoff/DASHBOARD.html
.agent-handoff/mockups/
kit/v1/
.agent-handoff/tools/alert-state.sh
.agent-handoff/advisor-notes/
.agent-handoff/reflections/
.agent-handoff/improvements/
```

New Outcome Circle check:

```sh
find .agent-handoff/turns \( -name 'E6-OC-00[6-9]*' -o -name 'E6-OC-0[1-9][0-9]*' \) -print
```

Output: no output.

Confirmed:

- Only allowed files changed: `.agent-handoff/COLLAB.md` and this turn note.
- No README / root docs / `docs/` diff.
- No `PROTOCOL.md`, `OPERATING-MODEL.md`, or `STRATEGY.md` diff.
- No `DASHBOARD.md` / `DASHBOARD.html` diff.
- No mockup diff.
- No kit diff.
- No trust-layer implementation.
- No public-release work.
- No new Outcome Circle.
- No staging, commit, push, branch, PR, or merge.

Hard stop after local scope-lock note. No staging, commit, push, branch, PR, merge, README edits, public release, trust implementation, dashboard edits, or new Outcome Circle.
