## Environment variables

This project is a **Vite** app.

### How Vite env vars work

- Vite loads `.env*` files automatically.
- **Only variables prefixed with `VITE_` are exposed to browser code** via `import.meta.env`.
- Non-`VITE_` variables may exist locally, but they will not be readable in the client bundle.

### What’s required to run the frontend today

**Nothing.** The current codebase does not reference `import.meta.env` (no required env vars).

### Recommended workflow

1. Copy `.env.example` to `.env.local`
2. Fill in values as needed for your environment

```bash
cp .env.example .env.local
```

### Existing local env file note

There is a `.env.local` in this repo that contains values like:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `CONTACT_FROM`

Because this is Vite (not Next.js), `NEXT_PUBLIC_*` naming is **not** special here. If/when the frontend needs client-readable values, prefer **`VITE_*`** names.

### Security

- Never expose real secrets to the browser.
- Keep API keys server-side (in a backend or serverless function).
- `.env.local` is already git-ignored (see `.gitignore`).
