import React from 'react';
import { Button } from './ui/button';
import { Check, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pricingPlans = [
  {
    name: "Basic",
    price: "5.9",
    description: "Perfect for small businesses and startups looking to establish their digital presence.",
    features: [
      "Digital Marketing",
      "Content Strategy"
    ],
    highlighted: false
  },
  {
    name: "Standard", 
    price: "17.9",
    description: "Ideal for growing businesses ready to scale their digital marketing efforts.",
    features: [
      "Digital Marketing",
      "Content Strategy", 
      "Branding Design"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    price: "29.9", 
    description: "Comprehensive solution for enterprises seeking full-service digital excellence.",
    features: [
      "Digital Marketing",
      "Content Strategy",
      "Branding Design",
      "Web Development",
      "Web Inspection",
      "Social Campaign"
    ],
    highlighted: false
  }
];

export function Pricing() {
  const headerLeft = useScrollAnimation({ threshold: 0.2 });
  const headerRight = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/5 to-background relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-lime-400/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-emerald-400/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
          <div 
            ref={headerLeft.ref}
            className={headerLeft.isVisible ? 'animate-slide-right' : 'opacity-0'}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-foreground to-lime-400 bg-clip-text text-transparent">
              PRICING
            </h2>
          </div>
          <div 
            ref={headerRight.ref}
            className={headerRight.isVisible ? 'animate-slide-left animation-delay-200' : 'opacity-0'}
          >
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Transparent, flexible pricing designed to grow with your business. Choose the plan that fits your needs.
            </p>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-emerald-500 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider rounded-full cursor-pointer hover:shadow-lg hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105">
              CONTACT US →
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => {
            const PricingCard = () => {
              const cardRef = useScrollAnimation({ threshold: 0.1 });
              return (
                <div 
                  ref={cardRef.ref}
                  key={index}
                  className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-500 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-500 text-black md:scale-105 shadow-2xl shadow-lime-400/25' 
                      : 'bg-gradient-to-br from-card/80 to-muted/30 border border-border/50 hover:border-lime-400/30 backdrop-blur-sm hover:shadow-xl hover:shadow-lime-400/10'
                  } hover:md:scale-105 cursor-pointer ${
                    cardRef.isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-2 bg-black text-lime-400 px-4 py-1.5 rounded-full text-xs">
                        <Sparkles className="w-3 h-3" />
                        <span>MOST POPULAR</span>
                      </div>
                    </div>
                  )}
                  
                  <h3 className={`text-xl sm:text-2xl mb-3 sm:mb-4 ${
                    plan.highlighted ? 'text-black' : ''
                  }`}>
                    {plan.name}
                  </h3>
                  
                  <p className={`mb-6 sm:mb-8 text-sm sm:text-base ${
                    plan.highlighted ? 'text-black/80' : 'text-muted-foreground'
                  }`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6 sm:mb-8">
                    <span className="text-3xl sm:text-4xl lg:text-5xl">${plan.price}</span>
                    <span className={`ml-2 text-sm sm:text-base ${
                      plan.highlighted ? 'text-black/70' : 'text-muted-foreground'
                    }`}>
                      /Month
                    </span>
                  </div>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlighted ? 'bg-black/20' : 'bg-lime-400/20'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            plan.highlighted ? 'text-black' : 'text-lime-400'
                          }`} />
                        </div>
                        <span className={`text-sm sm:text-base ${plan.highlighted ? 'text-black' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full rounded-full transition-all duration-300 ${
                      plan.highlighted 
                        ? 'bg-black text-lime-400 hover:bg-black/90 hover:shadow-lg' 
                        : 'bg-gradient-to-r from-lime-400 to-emerald-500 text-black hover:from-lime-500 hover:to-emerald-600 hover:shadow-lg hover:shadow-lime-400/25'
                    }`}
                  >
                    CHOOSE PLAN
                  </Button>
                </div>
              );
            };
            return <PricingCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}