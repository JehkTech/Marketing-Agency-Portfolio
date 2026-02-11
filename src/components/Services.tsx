import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  TrendingUp,
  Target,
  Lightbulb,
  Camera,
  Palette,
  Home,
  Heart,
  Coffee,
  Video,
  Briefcase,
  Film,
  Instagram,
} from 'lucide-react';

export function Services() {
  const { ref, isVisible } = useScrollAnimation();

  const serviceCategories = [
    {
      title: 'Digital Marketing',
      icon: TrendingUp,
      services: [
        {
          icon: Target,
          name: 'Performance-driven campaigns',
          description: 'Data-driven marketing strategies that deliver measurable ROI and sustainable growth.',
        },
        {
          icon: Palette,
          name: 'Brand positioning',
          description: 'Strategic brand development that creates powerful market presence and recognition.',
        },
        {
          icon: Lightbulb,
          name: 'Strategy development',
          description: 'Comprehensive digital strategies tailored to your business goals and target audience.',
        },
      ],
    },
    {
      title: 'Photography',
      icon: Camera,
      services: [
        {
          icon: Briefcase,
          name: 'Corporate photography',
          description: 'Professional imagery that elevates your corporate brand and team presence.',
        },
        {
          icon: Palette,
          name: 'Product photography',
          description: 'High-quality product shots that drive conversions and showcase your offerings.',
        },
        {
          icon: Camera,
          name: 'Brand & lifestyle photography',
          description: 'Authentic visual storytelling that connects with your audience emotionally.',
        },
        {
          icon: Home,
          name: 'Real estate & architecture',
          description: 'Stunning property photography that highlights spaces and drives sales.',
        },
        {
          icon: Heart,
          name: 'Weddings & traditional events',
          description: 'Capturing precious moments with artistic precision and emotional depth.',
        },
        {
          icon: Coffee,
          name: 'Food & beverage',
          description: 'Mouthwatering food photography that makes your culinary creations irresistible.',
        },
      ],
    },
    {
      title: 'Videography',
      icon: Video,
      services: [
        {
          icon: Briefcase,
          name: 'Corporate videography',
          description: 'Professional video production that communicates your brand message effectively.',
        },
        {
          icon: Film,
          name: 'Commercial videos',
          description: 'High-impact commercial content that drives engagement and conversions.',
        },
        {
          icon: Camera,
          name: 'Event highlights',
          description: 'Dynamic event coverage that captures the energy and key moments beautifully.',
        },
        {
          icon: Home,
          name: 'Real estate property videos',
          description: 'Cinematic property tours that showcase spaces in their best light.',
        },
        {
          icon: Instagram,
          name: 'Social media reels',
          description: 'Engaging short-form content optimized for social media platforms.',
        },
        {
          icon: Lightbulb,
          name: 'Brand storytelling',
          description: 'Compelling narrative videos that build emotional connections with audiences.',
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
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
            <span className="text-green-500">SERVICES</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`${
                isVisible
                  ? `animate-fade-in animation-delay-${(categoryIndex + 1) * 200}`
                  : 'opacity-0'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    className={`glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-green-500/20 ${
                      isVisible
                        ? `animate-scale-in animation-delay-${
                            (categoryIndex + 1) * 200 + serviceIndex * 100
                          }`
                        : 'opacity-0'
                    }`}
                  >
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {service.name}
                    </h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
