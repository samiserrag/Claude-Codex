#!/usr/bin/env bash
# Gate: a file must contain no obvious secret. A pattern match anyone can re-run.
# exit 0 = ALLOW (clean) ; exit 1 = BLOCK (secret-like content found).
set -uo pipefail
file="${1:?usage: check-secrets.sh <file>}"
pat='-----BEGIN ([A-Z ]+ )?PRIVATE KEY-----|client_secret|eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}'
if grep -aEiq -e "$pat" "$file"; then
  echo "BLOCK: secret-like pattern found in $file"; exit 1
fi
echo "ALLOW: no secret pattern in $file"; exit 0
