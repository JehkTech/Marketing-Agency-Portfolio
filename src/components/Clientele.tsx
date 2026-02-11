import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Clientele() {
  const { ref, isVisible } = useScrollAnimation();

  // Placeholder client logos - in real implementation, these would be actual logo images
  const clients = [
    { name: 'TechCorp', abbr: 'TC' },
    { name: 'GlobalBank', abbr: 'GB' },
    { name: 'MediaHub', abbr: 'MH' },
    { name: 'EcoSolutions', abbr: 'ES' },
    { name: 'RetailPro', abbr: 'RP' },
    { name: 'HealthFirst', abbr: 'HF' },
    { name: 'EduSmart', abbr: 'ED' },
    { name: 'FoodieNet', abbr: 'FN' },
    { name: 'TravelHub', abbr: 'TH' },
    { name: 'FinanceOne', abbr: 'FO' },
    { name: 'PropTech', abbr: 'PT' },
    { name: 'SportMax', abbr: 'SM' },
  ];

  return (
    <section
      id="clients"
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">OUR</span>{' '}
            <span className="text-green-500">CLIENTS</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Trusted by leading brands across multiple industries
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`${
                isVisible
                  ? `animate-scale-in animation-delay-${(index % 6) * 100}`
                  : 'opacity-0'
              }`}
            >
              <div className="glass rounded-xl p-6 h-24 flex items-center justify-center hover:scale-110 transition-all duration-300 group cursor-pointer border border-green-500/10 hover:border-green-500/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 group-hover:text-green-400 transition-colors">
                    {client.abbr}
                  </div>
                  <div className="text-xs text-foreground/40 mt-1">
                    {client.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 ${
            isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">
              100+
            </div>
            <div className="text-foreground/60">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">
              50+
            </div>
            <div className="text-foreground/60">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">
              4+
            </div>
            <div className="text-foreground/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">
              98%
            </div>
            <div className="text-foreground/60">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
