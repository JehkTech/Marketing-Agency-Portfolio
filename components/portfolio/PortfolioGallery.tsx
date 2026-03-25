"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type SeriesKey = "all" | "fern" | "kin" | "m6";
export type SeriesMap = {
  fern: string[];
  kin: string[];
  m6: string[];
};

type Props = {
  series: SeriesMap;
};

const tabs: { key: SeriesKey; label: string }[] = [
  { key: "all", label: "All Series" },
  { key: "fern", label: "Fern" },
  { key: "kin", label: "KIN" },
  { key: "m6", label: "6M" },
];

export default function PortfolioGallery({ series }: Props) {
  const [activeTab, setActiveTab] = useState<SeriesKey>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = useMemo(() => {
    if (activeTab === "all")
      return [...series.fern, ...series.kin, ...series.m6];
    return series[activeTab];
  }, [activeTab, series]);

  const isOpen = activeIndex !== null;
  const currentSrc = isOpen ? `/images/${images[activeIndex]}` : "";

  const openAt = (idx: number) => setActiveIndex(idx);
  const close = () => setActiveIndex(null);

  const prev = () => {
    if (!images.length || activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    if (!images.length || activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex, images.length]);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => {
              setActiveTab(tab.key);
              setActiveIndex(null);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab.key
                ? "bg-kinertic-gold text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((file, i) => (
          <button
            key={`${file}-${i}`}
            type="button"
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-xl"
          >
            <Image
              src={`/images/${file}`}
              alt=""
              width={1200}
              height={900}
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button always on top */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-[70] inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white hover:bg-black"
            >
              ×
            </button>

            {/* Arrow buttons below close button */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-[60] -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-[60] -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black"
            >
              →
            </button>

            <div className="flex h-full items-center justify-center px-16 py-16">
              <Image
                src={currentSrc}
                alt=""
                width={1800}
                height={1200}
                className="max-h-full w-auto max-w-full rounded-lg object-contain"
                priority
              />
            </div>

            <p className="pointer-events-none absolute bottom-4 left-1/2 z-[55] -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs text-gray-200">
              Use ← / → to navigate, Esc to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
