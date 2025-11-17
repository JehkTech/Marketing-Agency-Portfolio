import React from 'react';
import { 
  Lightbulb, 
  Star, 
  Heart, 
  Monitor, 
  MessageCircle, 
  Image, 
  Palette, 
  Edit3, 
  Rocket 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Lightbulb,
    title: "DIGITAL MARKETING",
    description: "Strategic campaigns that amplify your brand and drive measurable results.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Star,
    title: "BRANDING DESIGN",
    description: "Create memorable brand identities that resonate with your audience.",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Heart,
    title: "USER EXPERIENCE",
    description: "Design intuitive experiences that users love and remember.",
    gradient: "from-rose-400 to-red-500"
  },
  {
    icon: Monitor,
    title: "REBRANDING",
    description: "Refresh your brand identity for modern markets and audiences.",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: MessageCircle,
    title: "SOCIAL MEDIA",
    description: "Engage your audience with compelling social media strategies.",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: Image,
    title: "GRAPHIC DESIGN",
    description: "Stunning visuals that communicate your message effectively.",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    icon: Palette,
    title: "WEBSITE DESIGN",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    gradient: "from-lime-400 to-green-500"
  },
  {
    icon: Edit3,
    title: "COPYWRITING",
    description: "Persuasive content that tells your story and drives action.",
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "PRODUCT LAUNCH",
    description: "End-to-end launch strategies that make your product stand out.",
    gradient: "from-orange-400 to-red-500"
  }
];

export function Services() {
  const headerLeft = useScrollAnimation({ threshold: 0.2 });
  const headerRight = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-emerald-400/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-lime-400/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
          <div 
            ref={headerLeft.ref}
            className={headerLeft.isVisible ? 'animate-slide-right' : 'opacity-0'}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-foreground via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              WHAT WE DO
            </h2>
          </div>
          <div 
            ref={headerRight.ref}
            className={headerRight.isVisible ? 'animate-slide-left animation-delay-200' : 'opacity-0'}
          >
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              We deliver comprehensive digital solutions tailored to your business needs. From strategy to execution, we're your partner in digital success.
            </p>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-emerald-500 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider rounded-full cursor-pointer hover:shadow-lg hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105">
              CUSTOM SERVICES →
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const ServiceCard = () => {
              const cardRef = useScrollAnimation({ threshold: 0.1 });
              const IconComponent = service.icon;
              return (
                <div 
                  ref={cardRef.ref}
                  key={index}
                  className={`group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-card/50 to-muted/20 hover:from-card hover:to-muted/30 border border-border/50 hover:border-lime-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-lime-400/10 cursor-pointer backdrop-blur-sm ${
                    cardRef.isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 sm:mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>
                    <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-3 sm:p-3.5 group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="w-full h-full text-black" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 group-hover:text-lime-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            };
            return <ServiceCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}