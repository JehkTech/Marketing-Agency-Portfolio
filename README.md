# Kinertic Media Arts (Vite + React)

Marketing site frontend built with **React 18 + Vite**. The homepage is composed of section components (Hero → Contact) and includes a dark/light theme toggle, scroll progress, and conversion-focused CTAs.

## Requirements

- Node.js (modern LTS recommended)
- npm

## Quick start

```bash
npm i
npm run dev
```

Vite will start on `http://localhost:3000` (see `vite.config.ts`).

## Build

```bash
npm run build
```

- Output directory: `build/` (see `vite.config.ts`)

## Documentation

- `docs/ENVIRONMENT.md`: environment variables and `.env` files
- `docs/DEPLOYMENT.md`: production build + hosting notes
- `docs/PROJECT_STRUCTURE.md`: where things live, how the page is composed
- `docs/TROUBLESHOOTING.md`: common fixes

## Project notes

- **Entry point**: `src/main.tsx`
- **App composition**: `src/App.tsx`
- **Sections**: `src/components/*` (Hero, About, Services, Process, CaseStudy, Testimonials, Vision/Mission/Values, Team, Clients, Contact, Footer)
- **UI primitives**: `src/components/ui/*` (Radix + shadcn-style components)
- **Static assets**: `public/images`, `public/logos`
- **Styling**: `src/index.css` (global styles)

## Environment variables

This repo currently does **not** reference `import.meta.env` anywhere, but a local `.env.local` exists for future integrations (contact form email delivery, analytics, etc.). For the canonical list and safe defaults, see `docs/ENVIRONMENT.md` and use `.env.example` as a starting point.

## Latest documented update

Date: **April 2, 2026**  
Branch: **`lightdesign`**

### Summary

The `lightdesign` experience was upgraded to preserve its lighter visual style while adopting the stronger conversion flow, interactions, and production media from the `kinertic-media-arts` implementation.

### What changed

- Reordered homepage flow in `src/App.tsx` to:
  `Hero -> About -> Services -> Process -> Case Study -> Testimonials -> Vision/Mission/Values -> Team -> Clients -> Contact`
- Improved navigation/header behavior in `src/components/Header.tsx`:
  - active section highlighting
  - expanded nav structure
  - improved mobile menu behavior
  - stronger top-level CTA visibility
- Added new conversion-focused sections:
  - `src/components/Process.tsx`
  - `src/components/Testimonials.tsx`
- Added floating contact action menu:
  - `src/components/FloatingCTA.tsx`
- Updated existing sections with real project assets and stronger content:
  - `src/components/CaseStudy.tsx`
  - `src/components/Team.tsx`
  - `src/components/Clientele.tsx`
  - `src/components/Contact.tsx`
  - `src/components/Footer.tsx`
- Adjusted scroll-to-top placement to avoid overlap with floating CTA:
  - `src/components/ScrollToTop.tsx`

### Media migration (from `kinertic-media-arts`)

Added real image/logo assets into this branch:

- `public/images/6M2B3586.jpg`
- `public/images/6M2B3648.jpg`
- `public/images/6M2B3651.jpg`
- `public/images/6M2B3655.jpg`
- `public/images/KIN05484.JPG`
- `public/images/detox.png`
- `public/images/lpgb.png`
- `public/images/prnd.png`
- `public/logos/clientele.png`

### Verification

- Production build was run successfully after the update:
  `npm run build -- --outDir .tmp-build`
