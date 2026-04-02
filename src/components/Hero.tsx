import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from './ui/button';

export function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-green-500/5 pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        
        {/* Floating 3D Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400/20 to-green-600/10 rounded-3xl rotate-12 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-700/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-green-300/15 to-green-500/10 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div
            className={`space-y-2 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-foreground">WE POSITION</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                BRANDS TO WIN
              </span>
            </h1>
          </div>

          {/* Glossy Browser Mockup */}
          <div
            className={`relative mx-auto max-w-5xl ${
              isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
            }`}
          >
            {/* Browser Window */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-b border-white/10 px-6 py-4 flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 ml-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-foreground/40">
                    https://kinerticmediaarts.com
                  </div>
                </div>
              </div>

              {/* Browser Content Area */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8">
                {/* Content Grid */}
                <div className="h-full flex flex-col gap-6">
                  {/* Hero Section Preview */}
                  <div className="flex-1 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl border border-green-500/30 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="relative space-y-4">
                      <div className="h-4 w-3/4 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-60" />
                      <div className="h-4 w-1/2 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-40" />
                      <div className="mt-6 flex gap-3">
                        <div className="h-10 w-32 bg-green-500 rounded-full opacity-80" />
                        <div className="h-10 w-32 bg-white/10 border-2 border-green-500/50 rounded-full" />
                      </div>
                    </div>
                    
                    {/* Floating Elements Inside Browser */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-400/30 to-green-600/20 rounded-2xl rotate-12 animate-pulse" />
                    <div className="absolute bottom-8 right-12 w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-700/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>

                  {/* Bottom Cards Preview */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 backdrop-blur-sm" />
                    <div className="h-20 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl border border-green-500/20 backdrop-blur-sm" />
                    <div className="h-20 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 backdrop-blur-sm" />
                  </div>
                </div>

                {/* Glossy Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Shadow beneath browser */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-green-500/20 blur-3xl rounded-full" />
          </div>

          {/* Sub-headline */}
          <div
            className={`space-y-2 ${
              isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">THROUGH STRATEGY, CREATIVE</span>{' '}
              <br className="hidden md:block" />
              <span className="text-foreground">AND</span>{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                PERFORMANCE
              </span>
            </h2>
          </div>

          {/* Supporting Text */}
          <div
            className={`max-w-3xl mx-auto ${
              isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'
            }`}
          >
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              Kinertic Media Arts is a full-service growth agency helping ambitious teams
              turn attention into pipeline, bookings, and long-term brand equity.
            </p>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-3 ${
              isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'
            }`}
          >
            {['200+ Projects Delivered', '50+ Active Clients', '98% Client Retention', '4+ Years Experience'].map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-sm text-foreground/85"
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 ${
              isVisible ? 'animate-slide-up animation-delay-700' : 'opacity-0'
            }`}
          >
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
            >
              Book a Strategy Call
            </Button>
            <Button
              onClick={() => scrollToSection('case-study')}
              size="lg"
              variant="outline"
              className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              See Results
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-green-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
