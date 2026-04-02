## Contributing

### Setup

```bash
npm i
npm run dev
```

### Project conventions

- Read `src/guidelines/Guidelines.md` before making UI changes.
- Keep the homepage section order in sync with `src/App.tsx`.
- Prefer updating existing UI primitives in `src/components/ui/*` rather than introducing new variants.

### Environment variables

- See `docs/ENVIRONMENT.md`.
- Don’t commit `.env.local` (it’s already git-ignored).

### PR checklist (even if you don’t use GitHub PRs)

- `npm run build` passes
- Theme toggle still works
- Mobile menu still works
- No console errors on load
- New assets are placed under `public/` and referenced with absolute paths

