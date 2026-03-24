'use client'

import { useEffect, useMemo, useState } from 'react'

export interface SeriesMap {
  fern: string[]
  kin: string[]
  m6: string[]
}

type TabKey = 'all' | 'fern' | 'kin' | 'm6'

interface GalleryProps {
  series: SeriesMap
}

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: 'all', label: 'All Series' },
  { key: 'fern', label: 'Fern Series' },
  { key: 'kin', label: 'KIN Series' },
  { key: 'm6', label: '6M Series' },
]

export default function PortfolioGallery({ series }: GalleryProps) {
  const [tab, setTab] = useState<TabKey>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const images = useMemo(() => {
    if (tab === 'all') {
      return [...series.fern, ...series.kin, ...series.m6]
    }
    return series[tab]
  }, [tab, series])
  const activeImage = activeIndex !== null ? images[activeIndex] : null

  useEffect(() => {
    setActiveIndex(null)
  }, [tab])

  useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
        return
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => {
          if (prev === null) return 0
          return (prev + 1) % images.length
        })
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => {
          if (prev === null) return 0
          return (prev - 1 + images.length) % images.length
        })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, images.length])

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {TABS.map((item) => {
          const count = item.key === 'all'
            ? series.fern.length + series.kin.length + series.m6.length
            : series[item.key].length
          const disabled = count === 0

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              disabled={disabled}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${tab === item.key
                ? 'bg-gradient-gold text-kinertic-black'
                : 'bg-white/10 text-white hover:bg-white/20'} ${disabled ? 'cursor-not-allowed opacity-40' : ''}`}
              aria-pressed={tab === item.key}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          {TABS.find((item) => item.key === tab)?.label}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((file, index) => (
            <button
              key={file}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:scale-[1.02] hover:border-kinertic-gold"
            >
              <img
                src={`/images/${file}`}
                alt={file}
                className="h-56 w-full object-cover transition duration-200 group-hover:brightness-110"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-h-full w-full max-w-5xl overflow-hidden rounded-3xl bg-kinertic-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="p-6 pb-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400">Series</p>
                  <p className="text-lg font-semibold">{TABS.find((item) => item.key === tab)?.label}</p>
                </div>
                <p className="text-sm text-gray-400">Use Left/Right arrows to browse, Esc to close</p>
              </div>
            </div>

            <div className="relative h-[60vh] w-full">
              <img
                src={`/images/${activeImage}`}
                alt={activeImage}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
