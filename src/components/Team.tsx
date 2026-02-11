import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Twitter } from 'lucide-react';

export function Team() {
  const { ref, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      name: 'Sarah Mwangi',
      role: 'CEO & Creative Director',
      bio: 'Award-winning creative director with 12+ years of experience in brand strategy and visual storytelling.',
      image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDgwODU2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Kimani',
      role: 'Head of Digital Strategy',
      bio: 'Digital marketing expert specializing in performance-driven campaigns and data analytics.',
      image: 'https://images.unsplash.com/photo-1624670319970-37aa780d4874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwYnVzaW5lc3MlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA4MDg1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Grace Ochieng',
      role: 'Lead Designer',
      bio: 'Creative designer passionate about crafting beautiful, user-centered digital experiences.',
      image: 'https://images.unsplash.com/photo-1742473716788-72ec6df8a830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFmcmljYW4lMjBjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODA4NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Omondi',
      role: 'Director of Photography',
      bio: 'Experienced photographer and cinematographer with a keen eye for visual storytelling.',
      image: 'https://images.unsplash.com/photo-1588747020836-451633b46e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGhvdG9ncmFwaGVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODA4NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-green-500/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
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
            <span className="text-green-500">TEAM</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Meet the creative minds behind Kinertic Media Arts
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`${
                isVisible
                  ? `animate-scale-in animation-delay-${(index + 1) * 100}`
                  : 'opacity-0'
              }`}
            >
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 text-center">
                {/* Image */}
                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-green-500/20"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-green-500/50 ring-offset-2 ring-offset-background" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="text-sm font-semibold text-green-500 mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center hover:bg-green-500/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-green-500" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center hover:bg-green-500/20 transition-colors">
                    <Twitter className="w-4 h-4 text-green-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
