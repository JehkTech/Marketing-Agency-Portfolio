import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CaseStudy() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="case-study"
      ref={ref}
      className="py-24 bg-gradient-to-br from-green-900 to-green-950 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div
          className={`mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full mb-4">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
              Case Study
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            American International School
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`${
              isVisible ? 'animate-slide-left animation-delay-200' : 'opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762329352849-f4d0c9e7696a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcm5hdGlvbmFsJTIwc2Nob29sJTIwY2xhc3Nyb29tJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcwODA4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="American International School project"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-slide-right animation-delay-300' : 'opacity-0'
            }`}
          >
            <div className="space-y-6 text-white/90">
              <p className="text-lg leading-relaxed">
                Kinertic Marketing executed a high-end photography and videography project focused on optimizing brand positioning through strategic visual communication. The production process incorporated advanced lighting design, controlled color science, and cinematic framing to ensure visual consistency and brand alignment across all assets.
              </p>

              <p className="text-lg leading-relaxed">
                Through a structured pre-production workflow, precision capture, and high-end post-production grading, the final deliverables achieved a refined, premium aesthetic. The resulting visuals enhanced brand credibility, improved cross-platform performance, and provided scalable media assets tailored for digital, commercial, and marketing applications.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-500/30">
              <div>
                <div className="text-3xl font-bold text-green-400">100+</div>
                <div className="text-sm text-white/60">Assets Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">4K</div>
                <div className="text-sm text-white/60">Resolution</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">3</div>
                <div className="text-sm text-white/60">Week Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
