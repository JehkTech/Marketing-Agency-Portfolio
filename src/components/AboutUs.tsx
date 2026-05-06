import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pillars = [
  {
    title: 'Positioning That Differentiates',
    description:
      'We define a clear market position so your brand is remembered for the right reasons, not just seen.',
  },
  {
    title: 'Creative That Converts',
    description:
      'From photography and video to campaign assets, every output is designed to move prospects closer to action.',
  },
  {
    title: 'Performance You Can Track',
    description:
      'You get transparent reporting tied to leads, pipeline, and growth priorities rather than vanity metrics.',
  },
];

export function AboutUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">ABOUT</span>{' '}
            <span className="text-green-500">KINERTIC</span>
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-green-500 to-green-400 rounded-full mt-6" />
        </div>

        <div className="max-w-5xl space-y-6 mb-10">
          <p className={`text-lg sm:text-xl text-foreground/80 leading-relaxed ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            <span className="text-green-500 font-semibold">Kinertic Media Arts</span> is a growth-focused
            creative agency helping brands turn attention into measurable business results.
          </p>

          <p className={`text-lg sm:text-xl text-foreground/80 leading-relaxed ${isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            Since 2020, we have combined strategy, content production, and campaign execution under one team
            so clients can move faster with less fragmentation.
          </p>

          <p className={`text-lg sm:text-xl text-foreground/80 leading-relaxed ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            We partner with ambitious businesses that want better positioning, stronger lead quality, and
            scalable growth systems.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className={`pt-8 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <p className="text-2xl sm:text-3xl font-bold text-foreground">
            We do not just produce content. <span className="text-green-500">We build growth engines.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
