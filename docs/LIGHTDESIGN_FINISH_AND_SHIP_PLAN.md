# Lightdesign Finish-and-Ship Plan

Date: April 24, 2026  
Branch: `lightdesign`

## Goal

Finish the `kinertic-media-arts` lightdesign branch using the current local state as the source of truth, stabilize the in-progress redesign, harden the new portfolio-detail flow, and ship it through a dedicated Vercel project rooted at this subdirectory.

## Scope

- Keep the current conversion-focused redesign direction.
- Harden the portfolio detail route so invalid portfolio ids render a deliberate not-found state.
- Keep `src/data/portfolioFrames.ts` as the single source of truth for case-study gallery and detail content.
- Normalize CTA language and polish interaction consistency across the recently edited homepage sections.
- Preserve and validate the Vercel serverless contact flow in `api/contact.ts`.
- Add Vercel routing so direct loads to `/portfolio/:id` resolve correctly without interfering with `/api/contact`.

## Implementation Notes

- `src/components/PortfolioDetail.tsx`
  - Render an explicit not-found state instead of silently falling back to frame `1`.
  - Keep `onBack` and `onBookCall` as the recovery actions.
- `src/components/Contact.tsx`
  - Map success, rate-limit, and fallback states cleanly to API responses.
  - Keep the WhatsApp fallback visible when email delivery is unavailable.
  - Treat `RESEND_API_KEY` as required for real delivery.
- Homepage section polish
  - Keep the updated `Hero`, `CaseStudy`, `Team`, `Testimonials`, and `Contact` sections.
  - Normalize primary CTA language around discovery and growth-plan actions.
- `vercel.json`
  - Add a targeted rewrite for `/portfolio/:path*` to `/index.html`.
  - Avoid blanket catch-all rewrites that could affect `/api/contact`.

## Deployment Contract

- Vercel project root: `kinertic-media-arts`
- Build command: `npm run build`
- Output directory: `build`
- Required Vercel environment variables:
  - `RESEND_API_KEY`
  - `CONTACT_EMAIL`
  - `CONTACT_FROM`

## Verification Checklist

- `npm run build` succeeds locally from `kinertic-media-arts`
- Homepage sections render in the intended order
- Theme toggle persists across refresh
- Header navigation and mobile menu scroll to the correct sections
- Clicking case-study cards opens `/portfolio/{id}`
- Refreshing `/portfolio/1` through `/portfolio/4` works on Vercel preview
- Invalid routes such as `/portfolio/999` show the not-found recovery state
- Contact success, fallback, and rate-limit states behave clearly
- Preview deployment comes from a dedicated `kinertic-media-arts` Vercel project
