# Deployment Guide (Vercel + Resend)

This project targets Vercel for hosting and Resend for contact email delivery.

## 1. Pre-Deploy Checks

Run locally:

```bash
pnpm type-check
npm run lint
npm run build
```

Expected outcome:
- Type-check passes
- Lint passes
- Build passes without Next config or metadata warnings

## 2. Resend Setup

1. Create/confirm a Resend account.
2. Verify the sender domain used in `CONTACT_FROM`.
3. Generate an API key with send permissions.

Required environment values:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=kinerticmedia97@gmail.com
CONTACT_FROM=noreply@kinerticmediaarts.com
```

## 3. Vercel Project Setup

1. Push branch to GitHub.
2. Import repo into Vercel.
3. Set framework to Next.js (auto-detected).
4. Add env vars in Vercel Project Settings:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=kinerticmedia97@gmail.com
CONTACT_FROM=noreply@kinerticmediaarts.com
```

5. Deploy to preview/staging.

## 4. Staging Smoke Test

Verify:
1. `/` loads and section navigation works.
2. `/portfolio` loads correctly.
3. Team section layout is responsive and content complete.
4. Contact form scenarios:
   - valid submit -> success message and delivered email
   - invalid submit -> user-friendly validation error
   - rapid repeated submits -> rate limit (`429`) behavior

## 5. Production Release

1. Promote the approved deployment or merge to production branch.
2. Confirm production domain is bound in Vercel.
3. Re-run smoke tests on production URL.

## 6. Rollback

Use Vercel rollback to restore previous stable deployment:
1. Open Vercel project.
2. Go to Deployments.
3. Promote last known stable deployment.

After rollback:
1. Re-test `/` and `/portfolio`.
2. Submit one contact form test.
3. Confirm email delivery is restored.
