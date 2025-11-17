import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const portfolioItems = [
  {
    title: "Dashboard Kit",
    subtitle: "DASHBOARD KIT",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1NTAzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "BL*CK MEN STUFF",
    subtitle: "BL*CK MEN STUFF",
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NTQ3Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Hexa Magazine",
    subtitle: "HEXA MAGAZINE",
    image: "https://images.unsplash.com/photo-1612544408664-5d919fe4d619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGxheW91dCUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1MTEzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Lookbook Pro",
    subtitle: "LOOKBOOK PRO",
    image: "https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1NTM4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Digital UI Kit",
    subtitle: "DIGITAL UI KIT",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1NTAzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "App Branding",
    subtitle: "APP BRANDING",
    image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1NTM4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Portfolio() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const badge = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section id="works" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/10 via-muted/5 to-background relative">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-radial from-lime-400/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div 
          ref={header.ref}
          className={`text-center mb-12 sm:mb-16 ${header.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-lime-400 bg-clip-text text-transparent">
            OUR WORKS
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our portfolio of innovative digital products and creative solutions that drive results.
          </p>
        </div>
        
        <div 
          ref={badge.ref}
          className={`text-center mb-8 sm:mb-12 ${badge.isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}
        >
          <span className="inline-block bg-gradient-to-r from-lime-400 to-emerald-500 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider rounded-full">
            PORTFOLIOS
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => {
            const PortfolioItem = () => {
              const itemRef = useScrollAnimation({ threshold: 0.1 });
              return (
                <div 
                  ref={itemRef.ref}
                  key={index}
                  className={`group cursor-pointer bg-gradient-to-br from-card to-card/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-lime-400/10 transition-all duration-500 border border-border/50 hover:border-lime-400/30 ${
                    itemRef.isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-lime-400/90 via-lime-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ExternalLink className="w-8 h-8 text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl mb-2 group-hover:text-lime-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-lime-400 tracking-wider">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            };
            return <PortfolioItem key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}