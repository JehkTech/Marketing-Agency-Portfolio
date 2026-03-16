import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function PortfolioPage() {
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  const allFiles = fs.readdirSync(imagesDir)
    .filter((name) => /\.(jpe?g|png|webp|avif)$/i.test(name))
    .sort()

  const groups: Record<string, string[]> = {
    fern: [],
    KIN: [],
    '6M': [],
    other: [],
  }

  allFiles.forEach((file) => {
    if (file.toLowerCase().startsWith('fern')) {
      groups.fern.push(file)
    } else if (file.startsWith('KIN')) {
      groups.KIN.push(file)
    } else if (file.startsWith('6M')) {
      groups['6M'].push(file)
    } else {
      groups.other.push(file)
    }
  })

  const groupOrder = ['fern', 'KIN', '6M', 'other']
  const groupTitles: Record<string, string> = {
    fern: 'Fern Series',
    KIN: 'KIN Series',
    '6M': '6M Series',
    other: 'Other Work',
  }

  return (
    <main className="min-h-screen bg-kinertic-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2">Full Portfolio</h1>
            <p className="text-gray-400 max-w-2xl">
              Browse every published shoot grouped by source. Tap any image to open it in a new tab.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-semibold text-kinertic-black hover:shadow-lg hover:shadow-kinertic-gold/40"
          >
            Back to Home
          </Link>
        </div>

        {groupOrder.map((groupKey) => {
          const images = groups[groupKey]
          if (!images || images.length === 0) return null

          return (
            <section key={groupKey} className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{groupTitles[groupKey]}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((file) => (
                  <a
                    key={file}
                    href={`/images/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:scale-[1.02] hover:border-kinertic-gold"
                  >
                    <img
                      src={`/images/${file}`}
                      alt={file}
                      className="h-56 w-full object-cover transition duration-200 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="px-4 py-3">
                      <div className="font-semibold text-white truncate">{file}</div>
                      <div className="text-xs text-gray-400">{groupTitles[groupKey]}</div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
