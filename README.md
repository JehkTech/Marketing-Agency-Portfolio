# Kinertic Media Arts - Premium Digital Marketing Agency Website

![Kinertic Media Arts](./public/og-image.jpg)

## 🎯 Project Overview

A premium, modern website for Kinertic Media Arts - a digital marketing and media solutions company specializing in strategic brand growth through photography, videography, digital marketing, and web design.

## ✨ Features

- 🎨 **Premium Design** - Modern, minimal, cinematic aesthetic
- ⚡ **High Performance** - Optimized for speed and SEO
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎭 **Smooth Animations** - Framer Motion & Lenis scroll
- 🔍 **SEO Optimized** - Meta tags, schema markup, sitemap
- 📝 **Contact Form** - Integrated lead generation
- 🎬 **Glassmorphism UI** - Modern card designs

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Font:** Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/kinertic-media-arts.git
cd kinertic-media-arts
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/kinertic-media-arts)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Netlify
```bash
npm run build
```

Then drag the `/out` folder to Netlify.

## 📁 Project Structure
```
kinertic-media-arts/
├── app/                      # Next.js app router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   └── animations/          # Animation components
│       ├── LenisScroll.tsx
│       └── ScrollReveal.tsx
├── lib/                     # Utilities and hooks
│   ├── utils.ts
│   └── hooks/
├── public/                  # Static assets
│   ├── images/
│   └── logos/
└── styles/                  # Additional styles
```

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  kinertic: {
    black: '#0A0A0A',
    gold: '#D4AF37',
    // Add your colors
  }
}
```

### Modify Content

Edit section components in `/components/sections/`:

- **Hero:** Update headline and CTA
- **About:** Change company description
- **Services:** Add/remove service offerings
- **Contact:** Update contact information

### Add Images

1. Place images in `/public/images/`
2. Reference in components: `/images/your-image.jpg`

## 📊 Performance

- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Bundle Size:** < 200KB initial

## 🔧 Configuration

### Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://kinerticmedia.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### SEO Configuration

Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ...
}
```

## 📝 Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

© 2024 Kinertic Media Arts. All rights reserved.

## 📞 Contact

**Kinertic Media Arts**

- 📧 Email: kinerticmedia97@gmail.com
- 📱 Phone: +260 975 219 796
- 📍 Location: Lusaka, Zambia
- 📷 Instagram: @kinertic-photography

## 🙏 Acknowledgments

- Design inspiration: Apple, Stripe, Vercel
- Icons: Heroicons
- Fonts: Google Fonts (Inter)
- Animations: Framer Motion

---

**Built with ❤️ by Kinertic Media Arts**