# Lightdesign Finalization + Documentation Update + 2-Week MVP to Production

## Summary
We will finish `lightdesign` with three coordinated outcomes:
1. Technical cleanup and merge readiness.
2. Full documentation refresh aligned to the new Next.js architecture.
3. A 2-week production MVP rollout on Vercel with working Resend email flows.

## Key Implementation Changes
1. **Warning cleanup and platform alignment**
- Clean `next.config.js` to remove invalid/deprecated keys and non-config pasted text.
- Add `metadataBase` in `app/layout.tsx` sourced from `NEXT_PUBLIC_SITE_URL`.
- Re-run build checks to confirm warning-free output.

2. **Email service completion**
- Implement `app/api/contact/route.ts` for POST submissions from `Contact.tsx`.
- Add server-side payload validation and stable JSON response contract (`success`, `message`).
- Wire Resend using `RESEND_API_KEY`, `CONTACT_EMAIL`, and `CONTACT_FROM`.
- Add MVP-safe protections: basic rate limiting, payload size cap, and simple spam guard.
- Keep frontend contact UX states fully aligned with API responses.

3. **Documentation updates (explicitly requested)**
- Update `README.md` to reflect:
  - Next.js App Router architecture
  - actual folder structure (`app/`, `components/`, `lib/`, `public/`)
  - local setup/run/test commands
  - contact/email flow overview
- Update `INSTALLATION_GUIDE.md` with:
  - required env variables
  - local verification checklist (`type-check`, `build`, `dev`)
  - troubleshooting for common Next/Resend issues
- Update deployment docs (`DEPLOYMENT.md` and any active ops docs) with:
  - Vercel deployment steps
  - domain/sender verification for Resend
  - production smoke-test checklist
  - rollback steps
- Ensure stale Vite-era references are removed across docs.

4. **Commit and merge structure**
- **Commit 1**: architecture migration + Team layout/detail upgrade.
- **Commit 2**: warning cleanup + contact API/email wiring + docs refresh + verification.
- Prepare PR summary with migration notes, risk items, and test evidence.

## 2-Week MVP Schedule
1. **Week 1**
- Day 1-2: config cleanup + metadata + doc baseline rewrite.
- Day 3-4: build contact API + Resend integration + frontend response handling.
- Day 5: local end-to-end QA and doc accuracy pass.

2. **Week 2**
- Day 6-7: abuse protections + observability/logging hygiene.
- Day 8: deploy to Vercel staging with real env vars and verified sender domain.
- Day 9: cross-device visual QA (Team/section flow) + contact funnel testing.
- Day 10: production release, smoke test, and rollback validation.

## Test Plan
- `pnpm type-check`
- `npm run build` (must be warning-clean)
- `npm run lint` after lint-script/config correction
- Contact API tests:
  - valid submit → success and delivered email
  - invalid payload → 400
  - rate-limited submit → 429
  - missing email env → controlled 500
- UI verification:
  - Team layout responsive and content-complete
  - Contact form states: validation, loading, success, server error
- Production smoke:
  - `/` and `/portfolio` render
  - contact submission reaches inbox
  - docs match actual deployed behavior

## Assumptions and Defaults
- Active target remains `lightdesign` branch until merge.
- Production platform remains `Vercel + Resend`.
- Documentation source of truth is in-repo markdown files (no external wiki required for MVP).
- Scope remains MVP-focused: reliable contact/email flow and deploy readiness, not CRM automation yet.
