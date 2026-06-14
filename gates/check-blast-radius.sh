#!/usr/bin/env bash
# Gate: a write target must be INSIDE this repo (the envelope's blast radius).
# The filesystem path decides, not an agent. Anyone can re-run this.
# exit 0 = ALLOW (inside repo) ; exit 1 = BLOCK (outside).
set -uo pipefail
repo="$(cd "$(dirname "$0")/.." && pwd)"
target="${1:?usage: check-blast-radius.sh <path>}"
abs="$(python3 -c 'import os,sys; print(os.path.realpath(sys.argv[1]))' "$target")"
case "$abs" in
  "$repo"|"$repo"/*) echo "ALLOW: inside repo ($abs)"; exit 0 ;;
  *)                 echo "BLOCK: outside the repo blast radius ($abs)"; exit 1 ;;
esac
