import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AboutUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">ABOUT</span>{' '}
            <span className="text-green-500">US</span>
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-green-500 to-green-400 rounded-full mt-6" />
        </div>

        {/* Content */}
        <div className="max-w-5xl space-y-8">
          <div
            className={`${
              isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'
            }`}
          >
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              <span className="text-green-500 font-semibold">Kinertic Media Arts</span>, established in 2020, is a premium digital marketing and media solutions company delivering strategic, results-driven brand growth for modern businesses.
            </p>
          </div>

          <div
            className={`${
              isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'
            }`}
          >
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              Formed by a team of some of the industry's best creatives, marketers, and developers, we bring together strategy, creativity, and technology to build powerful digital experiences. Our expertise spans digital marketing, visual content production, film, brand storytelling, and performance-driven campaigns.
            </p>
          </div>

          <div
            className={`${
              isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'
            }`}
          >
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              We specialize in creating high-impact digital strategies, compelling visual content, and conversion-focused solutions that elevate brands, strengthen identity, and communicate purpose in competitive markets.
            </p>
          </div>

          <div
            className={`${
              isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'
            }`}
          >
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              With a strong focus on storytelling, brand positioning, and measurable outcomes, we help our clients achieve sustainable growth through strategic and visually compelling digital solutions.
            </p>
          </div>

          <div
            className={`pt-6 ${
              isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'
            }`}
          >
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              At Kinertic, we don't just market brands —{' '}
              <span className="text-green-500">we build them</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
