'use client'

import { useMemo, useState } from 'react'

export interface PortfolioGroup {
  title: string
  images: string[]
}

interface PortfolioGalleryProps {
  groups: PortfolioGroup[]
}

export default function PortfolioGallery({ groups }: PortfolioGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const activeTitle = useMemo(() => {
    if (!activeImage) return ''
    const group = groups.find((g) => g.images.includes(activeImage))
    return group?.title ?? ''
  }, [activeImage, groups])

  return (
    <div>
      {groups.map((group) => (
        <section key={group.title} className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{group.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {group.images.map((file) => (
              <button
                key={file}
                type="button"
                onClick={() => setActiveImage(file)}
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
      ))}

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-full w-full max-w-5xl overflow-hidden rounded-3xl bg-kinertic-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="p-6 pb-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400">Series</p>
                  <p className="text-lg font-semibold">{activeTitle}</p>
                </div>
                <p className="text-sm text-gray-400">Click outside to close</p>
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
