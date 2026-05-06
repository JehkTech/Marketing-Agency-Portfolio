# Kinertic Media Arts

Kinertic Media Arts is a Next.js App Router website for a digital marketing agency.  
The `lightdesign` branch contains the migrated Next architecture, refreshed design system, and a production-ready contact email flow.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend (contact email delivery)
- Vercel Analytics

## Project Structure

```text
kinertic-media-arts/
  app/
    layout.tsx
    page.tsx
    portfolio/page.tsx
    api/contact/route.ts
  components/
    sections/
    ui/
    animations/
  lib/
  public/
  styles/
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=kinerticmedia97@gmail.com
CONTACT_FROM=noreply@kinerticmediaarts.com
```

3. Run locally:

```bash
npm run dev
```

4. Verify core checks:

```bash
pnpm type-check
npm run lint
npm run build
```

## Contact Email Flow

The contact section posts to `POST /api/contact`.

- Client validation runs in `components/sections/Contact.tsx`.
- Server validation, anti-spam checks, and rate limiting run in `app/api/contact/route.ts`.
- Resend sends:
  - an internal notification email to `CONTACT_EMAIL`
  - an acknowledgment email to the submitter

Response contract:

```json
{ "success": true, "message": "Message sent successfully." }
```

```json
{ "success": false, "message": "..." }
```

## Deployment

Primary target is Vercel.  
See [DEPLOYMENT.md](./DEPLOYMENT.md) for staging/production steps, sender-domain verification, smoke tests, and rollback.
