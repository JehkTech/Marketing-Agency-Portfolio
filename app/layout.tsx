// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LenisScroll from "@/components/animations/LenisScroll";
import AdvancedScrollProgressBar from "@/components/ui/AdvancedScrollProgressBar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kinerticmedia.com"),
  title: "Kinertic Media Arts | Premium Digital Marketing & Media Solutions",
  description:
    "Strategic digital marketing, photography, videography, and web design services. We build brands that grow businesses through creative storytelling and performance-driven campaigns.",
  keywords:
    "digital marketing agency, brand strategy, photography, videography, web design, Lusaka, Zambia, creative agency",
  authors: [{ name: "Kinertic Media Arts" }],
  openGraph: {
    title: "Kinertic Media Arts | Premium Digital Marketing Agency",
    description:
      "We build brands through strategic marketing, visual storytelling, and technology-driven solutions.",
    url: "https://kinerticmedia.com",
    siteName: "Kinertic Media Arts",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kinertic Media Arts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinertic Media Arts",
    description: "Premium digital marketing and media solutions",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon-512.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`(function(){try{var storageKey='theme-preference';var saved=null;try{saved=localStorage.getItem(storageKey)}catch(e){}var savedTheme=saved;var prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=savedTheme||(prefersDark?'dark':'light');var root=document.documentElement;root.setAttribute('data-theme',theme);if(theme==='dark'){root.classList.add('dark');root.classList.remove('light')}else{root.classList.add('light');root.classList.remove('dark')} }catch(e){} })();`}
        </Script>
      </head>
      <body className={inter.className}>
        <AdvancedScrollProgressBar
          variant="premium"
          showPercentage={true}
          showSectionDots={false}
        />
        
        <Analytics />
        <SpeedInsights />

        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}

