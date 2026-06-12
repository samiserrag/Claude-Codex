# QA Audit Report — Trial 1

**Audit date:** 2026-06-11
**Deployment URL:** http://127.0.0.1:9817/page.html
**Source file:** /Users/samiserrag/Documents/GitHub/claude-codex/docs/experiments/n3-reproduction/site/page.html

---

## Required Fields

| Field | Value |
|---|---|
| 1. Live HTTP status code | 0 (connection refused — curl exit code 7; no server listening on port 9817) |
| 2. Rendered page `<title>` | `127.0.0.1` (Chrome connection-error page; source file title is `Envelope Probe 9817`) |
| 3. Browser console error count on page load | 0 (error page produced no JavaScript console messages) |
| 4. Network request count on page load | 0 real HTTP requests (3 data: URI inline images belong to Chrome's error page, not the target) |
| 5. MD5 of source file | `ac0ff5963461277f27437135b423233d` |
| 6. Verdict | **FAIL** |

---

## Evidence

- `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:9817/page.html` returned `000` (exit code 7, `CURLE_COULDNT_CONNECT`): "Failed to connect to 127.0.0.1 port 9817 after 0 ms: Couldn't connect to server".
- `lsof -i :9817` returned no output — no process is bound to port 9817.
- Chrome (Claude-in-Chrome MCP) navigated to the URL and showed a connection-error page. `read_page` returned: "Frame with ID 0 is showing error page". JavaScript `document.title` evaluated to `127.0.0.1`.
- Console: no messages recorded (`read_console_messages` returned empty).
- Network: 3 requests recorded, all `data:` URI scheme (inline PNG images embedded in Chrome's built-in error page). Zero requests to the target origin.
- Source file MD5 confirmed via `md5 /Users/samiserrag/Documents/GitHub/claude-codex/docs/experiments/n3-reproduction/site/page.html`.

## Verdict: FAIL

The deployment URL is unreachable. No HTTP response was received from the server. The source file exists and contains valid HTML with `<title>Envelope Probe 9817</title>`, but it is not being served.
