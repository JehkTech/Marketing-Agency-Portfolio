## Deployment

This is a **static frontend** built with Vite.

### Build output

- Command: `npm run build`
- Output folder: `build/` (configured in `vite.config.ts`)

### Hosting options

#### Option A: Any static host (recommended baseline)

Deploy the contents of `build/` to:

- Vercel (Static / Vite)
- Netlify
- Cloudflare Pages
- S3 + CloudFront
- Any Nginx/Apache static directory

#### Option B: Vercel (static)

Typical settings:

- Build command: `npm run build`
- Output directory: `build`

### SPA routing

This site currently behaves like a single-page app. If you later add client-side routing (e.g. React Router), ensure the host is configured to rewrite unknown routes to `index.html`.

### Environment variables in production

If you later add client-readable env vars, they must be prefixed with `VITE_` to be available in the browser bundle.

### Smoke test checklist

- `npm run build` completes
- Load homepage
- Header navigation scrolls to sections
- Mobile menu opens/closes and links work
- Contact section renders correctly
- Dark/light toggle works and persists across refresh
