# 🚀 Complete Installation Guide

## Prerequisites Checklist

- [ ] Node.js 18.17 or later installed
- [ ] npm 9.0 or later (comes with Node.js)
- [ ] Code editor (VS Code recommended)
- [ ] Git installed (optional)

## Step-by-Step Installation

### 1. Create Project Directory
```bash
mkdir kinertic-media-arts
cd kinertic-media-arts
```

### 2. Initialize Next.js Project
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --import-alias="@/*"
```

When prompted:
- ✅ Would you like to use TypeScript? **Yes**
- ✅ Would you like to use ESLint? **Yes**
- ✅ Would you like to use Tailwind CSS? **Yes**
- ✅ Would you like to use `src/` directory? **No**
- ✅ Would you like to use App Router? **Yes**
- ✅ Would you like to customize the default import alias? **No**

### 3. Install Dependencies
```bash
npm install framer-motion @studio-freight/lenis
```

### 4. Create Folder Structure
```bash
# Create all directories
mkdir -p components/sections
mkdir -p components/ui
mkdir -p components/animations
mkdir -p lib/hooks
mkdir -p public/images
mkdir -p public/logos
mkdir -p styles

# Verify structure
ls -R
```

### 5. Copy Component Files

Copy all the component files provided in this documentation into their respective directories.

### 6. Update Configuration Files

Replace the following files with the versions provided:
- `tailwind.config.ts`
- `next.config.js`
- `tsconfig.json`
- `package.json`

### 7. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

## Troubleshooting

### Error: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### TypeScript errors
```bash
# Run type check
npm run type-check
```

### Build errors
```bash
# Clean build
rm -rf .next
npm run build
```

## Production Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## Post-Installation

### 1. Add Your Content

- Replace placeholder images in `/public/images/`
- Update team member information
- Add client logos to `/public/logos/`
- Customize service descriptions

### 2. Configure SEO

- Update metadata in `app/layout.tsx`
- Add sitemap.xml
- Configure robots.txt

### 3. Set Up Analytics
```typescript
// Add to app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

### 4. Test Across Devices

- Desktop browsers
- Mobile devices
- Tablet views
- Different screen sizes

## Next Steps

- [ ] Customize colors and branding
- [ ] Add real images and content
- [ ] Set up contact form backend
- [ ] Configure domain name
- [ ] Enable HTTPS
- [ ] Set up monitoring

## Support

For issues or questions:
- Email: kinerticmedia97@gmail.com
- Phone: +260 975 219 796