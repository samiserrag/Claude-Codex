# Ubicloud GitHub Actions Runners

## Purpose

This repo uses Ubicloud for GitHub Actions CI. Ubicloud starts ephemeral GitHub
Actions runners when a workflow job uses an Ubicloud runner label.

## Repo-Side Setup

Workflow file:

`/.github/workflows/ci.yml`

Runner label:

```yaml
runs-on: ubicloud-standard-2
```

The workflow runs:

```bash
npm test
```

This currently validates the collaboration scaffold.

## Ubicloud Console State

Project URL:

`https://console.ubicloud.com/project/pj0qdnp2x6fp4q5p24j13cqv81/dashboard`

Observed during setup:

- GitHub integration account: `samiserrag`
- Active runners: none at setup time
- Console guidance: change `runs-on` to an Ubicloud label, commit and push,
  then trigger the workflow

No active runner is expected until a GitHub Actions job is queued.

## GitHub App Requirement

The repo-side workflow is necessary but not sufficient. The Ubicloud GitHub app
must also be installed or authorized for:

`samiserrag/Claude-Codex`

If the workflow waits forever for a runner, check the Ubicloud GitHub integration
settings and GitHub app repository access.

## Runner Label Choice

Use `ubicloud-standard-2` for this test repo. It is enough for the current
Node-based scaffold check and keeps cost low. Larger labels can be tested later
if the project grows.

## Verification After Push

After the workflow is pushed:

1. Open GitHub Actions for `samiserrag/Claude-Codex`.
2. Run the `CI` workflow manually, or push a branch/PR.
3. Confirm the job starts on `ubicloud-standard-2`.
4. Confirm `npm test` passes.
5. Check the Ubicloud console Active Runners page while the job is running.
