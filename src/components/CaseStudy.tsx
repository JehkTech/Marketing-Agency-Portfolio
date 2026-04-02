import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  '/images/6M2B3586.jpg',
  '/images/6M2B3648.jpg',
  '/images/6M2B3651.jpg',
  '/images/6M2B3655.jpg',
];

const stats = [
  { label: 'Campaign Duration', value: '6 Months' },
  { label: 'Content Pieces', value: '120+' },
  { label: 'Engagement Increase', value: '340%' },
  { label: 'Brand Reach', value: '2.5M+' },
];

export function CaseStudy() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section
      id="case-study"
      ref={ref}
      className="py-24 bg-gradient-to-br from-green-900 to-green-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full mb-4">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
              Featured Case Study
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Brand Launch Visual Campaign
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
        </div>

        <div className={`mb-12 ${isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <ImageWithFallback
              src={galleryImages[activeImage]}
              alt={`Case study image ${activeImage + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/45 via-transparent to-transparent" />
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImage(index)}
                className={`relative rounded-lg overflow-hidden aspect-video transition-all ${
                  activeImage === index
                    ? 'ring-2 ring-green-400 scale-[1.02]'
                    : 'opacity-65 hover:opacity-100'
                }`}
                aria-label={`Show gallery image ${index + 1}`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`${isVisible ? 'animate-slide-right animation-delay-300' : 'opacity-0'}`}>
            <div className="space-y-6 text-white/90">
              <p className="text-lg leading-relaxed">
                We produced a complete launch-ready visual package with premium photography,
                social-first content, and strategic brand positioning for digital channels.
              </p>
              <p className="text-lg leading-relaxed">
                The final system gave the client reusable assets for campaigns, website content,
                and ad creatives while improving message consistency across channels.
              </p>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-left animation-delay-400' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-5 border border-green-500/20">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-white/65">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
