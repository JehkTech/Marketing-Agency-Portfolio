import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Reviews() {
  const image = useScrollAnimation({ threshold: 0.2 });
  const content = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-lime-400/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-radial from-emerald-400/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div 
            ref={image.ref}
            className={`order-2 lg:order-1 ${image.isVisible ? 'animate-slide-right' : 'opacity-0'}`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 shadow-2xl relative group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NTg1Mjk3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Product Image"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div 
            ref={content.ref}
            className={`order-1 lg:order-2 ${content.isVisible ? 'animate-slide-left animation-delay-200' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 text-lime-400" />
              <span className="text-sm text-lime-400">Client Testimonials</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-lime-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            
            <div className="bg-gradient-to-br from-card/80 to-muted/20 rounded-2xl p-6 sm:p-8 border border-border/50 backdrop-blur-sm shadow-xl relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                "Working with Kinertic Media Arts transformed our digital presence. Their creative approach and technical expertise delivered results beyond our expectations. Truly exceptional service!"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-black text-lg sm:text-xl">ML</span>
                </div>
                <div>
                  <cite className="not-italic text-base sm:text-lg">Mike Lewis</cite>
                  <p className="text-xs sm:text-sm text-muted-foreground">CEO, Tech Innovations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}