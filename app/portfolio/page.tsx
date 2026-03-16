import fs from 'fs'
import path from 'path'

import PortfolioGallery, { PortfolioGroup } from '@/components/portfolio/PortfolioGallery'

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
    if (file.toLowerCase().startsWith('@fern')) {
      groups.fern.push(file)
    } else if (file.startsWith('KIN')) {
      groups.KIN.push(file)
    } else if (file.startsWith('6M')) {
      groups['6M'].push(file)
    } else {
      groups.other.push(file)
    }
  })

  const portfolioGroups: PortfolioGroup[] = [
    { title: 'Fern Series', images: groups.fern },
    { title: 'KIN Series', images: groups.KIN },
    { title: '6M Series', images: groups['6M'] },
    { title: 'Other Work', images: groups.other },
  ].filter((group) => group.images.length > 0)

  return (
    <main className="min-h-screen bg-kinertic-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2">Full Portfolio</h1>
            <p className="text-gray-400 max-w-2xl">
              Browse every published shoot grouped by source. Click an image to open it in a lightbox.
            </p>
          </div>
        </div>

        <PortfolioGallery groups={portfolioGroups} />
      </div>
    </main>
  )
}
