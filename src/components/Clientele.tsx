import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';

const clients = [
  { name: 'Kinertic Media', logo: '/logos/clientele.png' },
  { name: 'Detox Labs', logo: '/images/detox.png' },
  { name: 'LPGB', logo: '/images/lpgb.png' },
  { name: 'PRND', logo: '/images/prnd.png' },
];

export function Clientele() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clients" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">TRUSTED</span>{' '}
            <span className="text-green-500">BY</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Partnering with ambitious brands across industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`${isVisible ? `animate-scale-in animation-delay-${(index + 1) * 100}` : 'opacity-0'}`}
            >
              <div className="glass rounded-xl p-6 h-28 flex items-center justify-center hover:scale-105 transition-all duration-300 border border-green-500/15">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden bg-white/40 dark:bg-white/5">
                    <ImageWithFallback
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-xs text-foreground/55">{client.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${
            isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">200+</div>
            <div className="text-foreground/60">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">50+</div>
            <div className="text-foreground/60">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">4+</div>
            <div className="text-foreground/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">98%</div>
            <div className="text-foreground/60">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
