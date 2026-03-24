import fs from "fs";
import path from "path";
import Link from "next/link";

import PortfolioGallery, {
  SeriesMap,
} from "@/components/portfolio/PortfolioGallery";

export default function PortfolioPage() {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const files = fs
    .readdirSync(imagesDir)
    .filter((name) => /\.(jpe?g|png|webp|avif)$/i.test(name))
    .sort();

  const series: SeriesMap = {
    fern: [],
    kin: [],
    m6: [],
  };

  files.forEach((file) => {
    if (file.toLowerCase().startsWith("@fern")) {
      series.fern.push(file);
    } else if (file.startsWith("KIN")) {
      series.kin.push(file);
    } else if (file.startsWith("6M")) {
      series.m6.push(file);
    }
  });

  return (
    <main className="min-h-screen bg-kinertic-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2">
              Full Portfolio
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Browse image series with tab filters. Open an image, then use
              arrow keys to navigate and Esc to close.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-kinertic-gold hover:text-kinertic-gold"
          >
            Back to Main Page
          </Link>
        </div>

        <PortfolioGallery series={series} />
      </div>
    </main>
  );
}
