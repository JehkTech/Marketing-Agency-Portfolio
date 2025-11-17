import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const badge = useScrollAnimation({ threshold: 0.3 });
  const title = useScrollAnimation({ threshold: 0.3 });
  const description = useScrollAnimation({ threshold: 0.3 });
  const button = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-lime-950/5 to-emerald-950/10 dark:from-background dark:via-lime-500/5 dark:to-emerald-500/10"></div>
      
      {/* Radial gradients for depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-lime-400/20 to-transparent blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-emerald-400/20 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div 
            ref={badge.ref}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 mb-8 backdrop-blur-sm ${
              badge.isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span className="text-sm text-lime-400">Creative Digital Solutions</span>
          </div>
          
          <h1 
            ref={title.ref}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 leading-none ${
              title.isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <span className="block bg-gradient-to-r from-foreground via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              DIGITAL
            </span>
            <span className="block bg-gradient-to-r from-lime-400 via-emerald-400 to-foreground bg-clip-text text-transparent">
              PRODUCT
            </span>
            <span className="block bg-gradient-to-r from-foreground via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              CREATOR
            </span>
          </h1>
          
          <p 
            ref={description.ref}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto px-4 leading-relaxed ${
              description.isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'
            }`}
          >
            Transforming ideas into stunning digital experiences. We design and develop creative solutions that solve real problems and delight millions of users worldwide.
          </p>
          
          <div ref={button.ref} className={button.isVisible ? 'animate-scale-in animation-delay-300' : 'opacity-0'}>
            <Button 
              size="lg" 
              onClick={() => {
                const worksSection = document.getElementById('works');
                worksSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-lime-400 to-emerald-500 hover:from-lime-500 hover:to-emerald-600 text-black rounded-full px-6 sm:px-8 py-4 sm:py-6 shadow-lg shadow-lime-400/25 hover:shadow-xl hover:shadow-lime-400/30 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm sm:text-base lg:text-lg">OUR WORKS</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom banner with gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-500 text-black py-3 sm:py-4 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-xs sm:text-sm md:text-base">
            WE DESIGN AND DEVELOP CREATIVE DIGITAL PRODUCTS TO SOLVE PROBLEMS. TRUSTED BY MILLIONS OF USERS.
          </p>
        </div>
      </div>
    </section>
  );
}