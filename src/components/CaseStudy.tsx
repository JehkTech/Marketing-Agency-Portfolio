import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { portfolioFrames } from '../data/portfolioFrames';

const stats = [
  { label: 'Campaign Duration', value: '6 Months' },
  { label: 'Content Pieces', value: '120+' },
  { label: 'Engagement Lift', value: '340%' },
  { label: 'Qualified Reach', value: '2.5M+' },
];

const outcomes = [
  'Launch-ready content system for paid and organic channels',
  'Stronger brand consistency across social, web, and campaigns',
  'Reusable creative assets that lowered monthly production overhead',
];

const positioningPoints = [
  'Strategy and creative under one team',
  'Weekly reporting tied to business outcomes',
  'Execution speed without sacrificing quality',
];

interface CaseStudyProps {
  onOpenPortfolio?: (id: number) => void;
}

export function CaseStudy({ onOpenPortfolio }: CaseStudyProps) {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <span className="text-green-300 text-sm font-semibold tracking-wider uppercase">
              Featured Case Study
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            From Content Chaos To Predictable Growth
          </h2>
          <p className="text-white/75 max-w-3xl text-lg">
            We rebuilt this brand&apos;s strategy, creative system, and campaign execution to convert
            attention into qualified demand.
          </p>
          <div className="h-2 w-32 bg-gradient-to-r from-green-500 to-green-400 rounded-full mt-6" />
        </div>

        <div className={`mb-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 ${isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'}`}>
          {portfolioFrames.map((frame) => (
            <a
              key={frame.id}
              href={`/portfolio/${frame.id}`}
              onClick={(event) => {
                if (!onOpenPortfolio) {
                  return;
                }

                event.preventDefault();
                onOpenPortfolio(frame.id);
              }}
              className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[3/4] border border-green-500/25 block transition-transform hover:scale-[1.02]"
            >
              <ImageWithFallback
                src={frame.src}
                alt={frame.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                rootMargin="450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4">
                <p className="text-sm sm:text-base font-semibold tracking-wide text-green-300 drop-shadow-md mb-1">{frame.label}</p>
                <p className="text-xs sm:text-sm text-white/90 line-clamp-2 drop-shadow-sm">{frame.caption}</p>    
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-12 items-start">
          <div className={`${isVisible ? 'animate-slide-right animation-delay-300' : 'opacity-0'}`}>
            <div className="space-y-6 text-white/90">
              <p className="text-lg leading-relaxed max-w-2xl">
                Most agencies deliver either strategy decks or creative assets. We deliver both,
                then connect them to real campaign performance.
              </p>
              <p className="text-lg leading-relaxed max-w-2xl">
                This integration helped the client increase engagement, sharpen positioning, and
                scale faster with a repeatable growth engine.
              </p>

              <div className="space-y-3 pt-2">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/85 text-sm sm:text-base">{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {positioningPoints.map((point) => (
                  <div key={point} className="rounded-xl border border-green-500/20 bg-green-500/10 px-3 py-3 text-sm text-white/90">
                    {point}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={scrollToContact}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6"
                >
                  Build My Growth Plan
                </Button>
                <Button
                  onClick={scrollToServices}
                  variant="outline"
                  className="border-green-400 text-green-300 hover:bg-green-500 hover:text-white"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-left animation-delay-400' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4 xl:sticky xl:top-28">
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
