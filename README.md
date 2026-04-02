# Kinertic Media Arts (Lightdesign Branch)

Frontend for the Kinertic Media Arts website, built with React + Vite and styled with utility classes and custom animation patterns.

## Quick Start

1. Install dependencies:
   `npm i`
2. Run the dev server:
   `npm run dev`
3. Build for production:
   `npm run build`

## Project Notes

- Framework: React 18 + Vite
- Entry point: `src/App.tsx`
- Main sections live in `src/components`
- Static media assets live in `public/images` and `public/logos`

## Latest Documented Update

Date: **April 2, 2026**  
Branch: **`lightdesign`** 

### Summary

The `lightdesign` experience was upgraded to preserve its lighter visual style while adopting the stronger conversion flow, interactions, and production media from the `kinertic-media-arts` implementation.

### What Changed

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

### Media Migration (From `kinertic-media-arts`)

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
