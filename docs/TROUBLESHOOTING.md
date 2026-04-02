## Troubleshooting

### The dev server won’t start

- Delete `node_modules/` and reinstall:

```bash
rm -rf node_modules
npm i
npm run dev
```

### Port 3000 is already in use

- Change the port in `vite.config.ts` (recommended), or run Vite with a different port:

```bash
npm run dev -- --port 3001
```

### Env vars “don’t work”

- In Vite, only `VITE_*` vars are readable in client code via `import.meta.env`.
- Restart the dev server after changing `.env.*` files.
- See `docs/ENVIRONMENT.md`.

### Build succeeds but assets are missing in production

- Ensure assets are in `public/` and referenced with absolute paths like `/images/foo.jpg`.
- Confirm your host serves the `build/` directory.

### Theme toggle doesn’t persist

- Theme persistence uses `localStorage` in `src/App.tsx`.
- Check if the browser is blocking storage (privacy mode / strict settings).
