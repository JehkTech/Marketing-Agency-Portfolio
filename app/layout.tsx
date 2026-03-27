// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/animations/LenisScroll";
import AdvancedScrollProgressBar from "@/components/ui/AdvancedScrollProgressBar";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
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
    icon: "/favicon.ico",
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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>

        <AdvancedScrollProgressBar
          variant="premium"
          showPercentage={true}
          showSectionDots={false}
        />

        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}

