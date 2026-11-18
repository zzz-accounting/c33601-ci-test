# EU testing fixtures

Intentional scan findings for SMS-4038. These files are never imported by the app.

- Code: the shell=True call in findings.py.
- Secrets: a synthetic GitHub token verified to return HTTP 401, plus an unused password. The token was never issued by GitHub; it is not a formerly active, revoked token.
- Supply Chain: lodash 4.17.20 with a reachable _.template call.

Use SEMGREP_APP_URL=https://app.eu.semgrep.dev,
SEMGREP_FAIL_OPEN_URL=https://fail-open.eu.semgrep.dev, and SEMGREP_SEND_METRICS=off
for CLI and CI testing. The Semgrep EU workflow uses the SEMGREP_APP_TOKEN_EU repository secret.
