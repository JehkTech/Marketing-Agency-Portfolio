## Security policy

### Reporting a vulnerability

If you believe you’ve found a security issue, please do **not** open a public issue.

Send details to:

- **Email**: `kinerticmedia97@gmail.com`

Include:

- A description of the issue and impact
- Steps to reproduce
- Any relevant screenshots/logs

### Handling secrets

- Do not commit secrets (`.env.local` is git-ignored).
- Do not expose API keys to the browser bundle.
- For Vite, remember: only `VITE_*` env vars can be accessed by client code; that also means **anything `VITE_*` is not a secret**.

### Supported versions

This project does not currently publish versioned releases. Security fixes should be applied to the active working branch and deployed as soon as practical.

