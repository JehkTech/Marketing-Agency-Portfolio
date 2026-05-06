# Installation Guide

## Prerequisites

- Node.js 20.9+ (recommended for Next.js 16)
- npm 10+ (or compatible npm from Node install)

## Install

```bash
npm install
```

## Environment Variables

Create `.env.local` in project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=kinerticmedia97@gmail.com
CONTACT_FROM=noreply@kinerticmediaarts.com
```

Notes:
- `CONTACT_FROM` must be a verified sender domain in Resend for production.
- `NEXT_PUBLIC_SITE_URL` is used for metadata base URLs.

## Run and Verify

Start dev server:

```bash
npm run dev
```

Validation checklist:

```bash
pnpm type-check
npm run lint
npm run build
```

Open:
- `http://localhost:3000/`
- `http://localhost:3000/portfolio`

## Contact Form Verification

1. Submit a valid contact request.
2. Confirm success UI appears.
3. Confirm internal email arrives at `CONTACT_EMAIL`.
4. Confirm acknowledgment email arrives at submitter inbox.

## Troubleshooting

### `npm run lint` fails with ESLint module errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails with metadata warning

Confirm `NEXT_PUBLIC_SITE_URL` exists in `.env.local`.

### Contact form returns 500

Check:
- `RESEND_API_KEY` is valid
- `CONTACT_EMAIL` is set
- `CONTACT_FROM` is set and verified in Resend

### Contact form returns 429

Rate limit was triggered. Wait and retry (window-based limiter).
