# Deployment Guide - Kinertic Media Arts

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration needed
- Automatic previews for branches
- Global CDN
- Free SSL certificate

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! ✨

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### Option 2: Netlify

**Steps:**

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login
   netlify login
   
   # Deploy
   netlify deploy --prod
   ```

3. **Configure**
   - Add `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

---

### Option 3: AWS Amplify

**Steps:**

1. Connect GitHub repository
2. Select branch
3. Amplify auto-detects Next.js
4. Click "Save and Deploy"

**Build Settings:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
```

---

### Option 4: Custom Server (VPS/Dedicated)

**Requirements:**
- Node.js 18+ installed
- PM2 process manager
- Nginx reverse proxy

**Steps:**

1. **Install Dependencies**
   ```bash
   npm install
   npm run build
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Start Application**
   ```bash
   pm2 start npm --name "kinertic-website" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## 🔧 Environment Variables

Create `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=kinerticmedia97@gmail.com
```

---

## 📊 Post-Deployment Checklist

### SEO & Analytics

- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site in Bing Webmaster Tools
- [ ] Add structured data (Schema.org)
- [ ] Test with PageSpeed Insights
- [ ] Test with GTmetrix

### Performance

- [ ] Enable CDN
- [ ] Configure caching headers
- [ ] Optimize images (use WebP)
- [ ] Enable Brotli compression
- [ ] Test Core Web Vitals

### Security

- [ ] Force HTTPS
- [ ] Add security headers
- [ ] Configure CSP (Content Security Policy)
- [ ] Enable rate limiting
- [ ] Add CAPTCHA to contact form

### Functionality

- [ ] Test contact form submission
- [ ] Check all navigation links
- [ ] Verify mobile responsiveness
- [ ] Test cross-browser compatibility
- [ ] Check accessibility (WAVE, axe)

---

## 🔄 Updates & Maintenance

### Making Updates

```bash
# Pull latest changes
git pull origin main

# Install dependencies (if changed)
npm install

# Build
npm run build

# Vercel auto-deploys on push to main
# For custom server:
pm2 restart kinertic-website
```

### Monitoring

**Vercel Analytics:**
- Built-in performance monitoring
- Real User Monitoring (RUM)
- Web Vitals tracking

**Custom Server:**
```bash
# Install monitoring tools
npm install -g pm2
pm2 install pm2-logrotate

# Monitor
pm2 monit
```

---

## 🐛 Troubleshooting

### Build Errors

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**"Out of memory"**
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Runtime Errors

**Check logs:**
```bash
# Vercel
vercel logs

# PM2
pm2 logs kinertic-website
```

---

## 📞 Support

For deployment assistance:
- Email: kinerticmedia97@gmail.com
- Phone: +260 975 219796

---

**Recommended:** Start with Vercel for fastest deployment, migrate to custom server later if needed for specific requirements.