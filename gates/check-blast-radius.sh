#!/usr/bin/env bash
# Gate: a write target must be INSIDE this repo (the envelope's blast radius),
# OR inside this project's Claude Code memory dir under ~/.claude (a legitimate
# out-of-repo write the harness needs). The filesystem path decides, not an agent.
# Anyone can re-run this. exit 0 = ALLOW ; exit 1 = BLOCK.
set -uo pipefail
repo="$(cd "$(dirname "$0")/.." && pwd)"
# This project's harness memory dir is ~/.claude/projects/<repo path, slashes -> dashes>/memory
mem="$HOME/.claude/projects/$(printf '%s' "$repo" | sed 's#/#-#g')/memory"
target="${1:?usage: check-blast-radius.sh <path>}"
abs="$(python3 -c 'import os,sys; print(os.path.realpath(sys.argv[1]))' "$target")"
case "$abs" in
  "$repo"|"$repo"/*) echo "ALLOW: inside repo ($abs)"; exit 0 ;;
  "$mem"|"$mem"/*)   echo "ALLOW: this project's harness memory ($abs)"; exit 0 ;;
  *)                 echo "BLOCK: outside the repo blast radius ($abs)"; exit 1 ;;
esac
