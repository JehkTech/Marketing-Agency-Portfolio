/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Compression
  compress: true,
  
  // Production optimizations
  swcMinify: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

/*
```

---

## 📋 Complete File Structure Created
```

kinertic-media-arts/
├── app/
│   ├── layout.tsx ✅
│   ├── page.tsx ✅
│   ├── globals.css ✅
│   └── favicon.ico
├── components/
│   ├── animations/
│   │   ├── LenisScroll.tsx ✅
│   │   ├── ScrollReveal.tsx ✅
│   │   └── FadeIn.tsx ✅
│   ├── ui/
│   │   ├── Button.tsx ✅
│   │   ├── Card.tsx ✅
│   │   ├── SectionHeader.tsx ✅
│   │   └── Input.tsx ✅
│   └── sections/
│       ├── Hero.tsx ✅
│       ├── About.tsx ✅
│       ├── VisionMissionValues.tsx ✅
│       ├── Services.tsx ✅
│       ├── CaseStudy.tsx ✅
│       ├── Team.tsx ✅
│       ├── Clients.tsx ✅
│       ├── Contact.tsx ✅
│       └── Footer.tsx ✅
├── public/
│   └── (images, logos, assets)
├── tailwind.config.ts ✅
├── next.config.js ✅
├── package.json ✅
├── tsconfig.json
└── README.md
*/
