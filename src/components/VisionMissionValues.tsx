import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Compass, Award } from 'lucide-react';

export function VisionMissionValues() {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      icon: Target,
      title: 'Vision',
      content:
        'To become a trusted digital growth partner, delivering innovative marketing solutions that elevate brands, drive measurable impact, and create long-term value in a digital-first world.',
      gradient: 'from-green-500/20 to-green-600/10',
    },
    {
      icon: Compass,
      title: 'Mission',
      content:
        'To help businesses grow through strategic digital marketing, compelling visual storytelling, and technology-driven solutions — combining creativity, data, and execution to build strong, scalable brands.',
      gradient: 'from-green-400/20 to-green-500/10',
    },
    {
      icon: Award,
      title: 'Values',
      content:
        'Our core values are built on excellence, strategic thinking, innovation, integrity, collaboration, and a relentless focus on delivering measurable results for our clients.',
      gradient: 'from-green-600/20 to-green-700/10',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-green-500/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`${
                isVisible
                  ? `animate-slide-up animation-delay-${(index + 1) * 200}`
                  : 'opacity-0'
              }`}
            >
              <div className={`glass rounded-3xl p-8 h-full bg-gradient-to-br ${card.gradient} hover:scale-105 transition-transform duration-300`}>
                <div className="mb-6">
                  <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <card.icon className="w-7 h-7 text-green-500" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
