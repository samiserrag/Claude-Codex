import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "README.md",
  "CLAUDE.md",
  "AGENTS.md",
  ".agent-handoff/PROTOCOL.md",
  ".agent-handoff/COLLAB.md",
  ".agent-handoff/prompts/claude-start.md",
  ".agent-handoff/prompts/codex-response.md",
  ".agent-handoff/prompts/chrome-smoke-runner.md",
  ".agent-handoff/turns/000-codex-bootstrap.md",
  "docs/test-project.md",
  "docs/chrome-runners.md",
  "docs/ubicloud-runners.md",
  ".github/workflows/ci.yml",
  ".claude/settings.json"
];

const requiredSections = [
  "## Goal",
  "## Current Owner",
  "## Current Phase",
  "## Questions Requiring Sami Approval",
  "## Next Request To Claude",
  "## Next Request To Codex"
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    failures.push(`Missing required file: ${file}`);
  }
}

if (existsSync(".agent-handoff/COLLAB.md")) {
  const collab = readFileSync(".agent-handoff/COLLAB.md", "utf8");
  const collabHeadings = new Set(collab.match(/^## .+$/gm) ?? []);
  for (const section of requiredSections) {
    if (!collabHeadings.has(section)) {
      failures.push(`COLLAB.md missing section: ${section}`);
    }
  }
}

if (existsSync(".agent-handoff/turns")) {
  const turns = readdirSync(".agent-handoff/turns").filter((name) =>
    name.endsWith(".md")
  );
  if (turns.length === 0) {
    failures.push("No turn notes found in .agent-handoff/turns");
  }
}

for (const dir of [".agent-handoff/prompts", ".agent-handoff/turns", "docs"]) {
  if (!existsSync(join(process.cwd(), dir))) {
    failures.push(`Missing required directory: ${dir}`);
  }
}

if (failures.length > 0) {
  console.error("Collaboration scaffold check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Collaboration scaffold check passed.");
