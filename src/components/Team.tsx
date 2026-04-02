import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    name: 'Willard Phiri',
    role: 'Founder & Creative Director',
    bio: 'Leads creative strategy and brand storytelling across video, photo, and design.',
    image: '/images/Willard.png',
    linkedin: 'https://www.linkedin.com/in/willard-phiri',
    twitter: 'https://twitter.com/willardphiri',
  },
  {
    name: 'Praise Ngulube',
    role: 'Marketing & Accountant',
    bio: 'Balances growth strategy with financial clarity to keep campaigns profitable.',
    image: '/images/Praise.png',
    linkedin: 'https://www.linkedin.com/in/praise-ngulube',
  },
  {
    name: 'Jehoiachin Katemangwe',
    role: 'Developer & Creative',
    bio: 'Builds digital experiences that blend performance with polished design.',
    image: '/images/Jehoiachin.png',
    twitter: 'https://twitter.com/jehoiachin',
  },
  {
    name: 'Jesse Chibuye',
    role: 'Photographer & Creative',
    bio: 'Captures brand stories with a cinematic eye across photo and video.',
    image: '/images/Jesse.png',
    instagram: 'https://www.instagram.com/kinertic_marketing/',
  },
  {
    name: 'Paul Daka',
    role: 'Operations & Creative',
    bio: 'Keeps projects running smoothly while maintaining high creative standards.',
    image: '/images/Paul.png',
    linkedin: 'https://www.linkedin.com/in/paul-daka',
  },
];

export function Team() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-green-500/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">OUR</span>{' '}
            <span className="text-green-500">TEAM</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Meet the specialists behind our creative and performance work.
          </p>
        </div>

        <div
          className="flex flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          aria-label="Team members"
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`min-w-[230px] flex-1 snap-start ${isVisible ? `animate-scale-in animation-delay-${(index + 1) * 100}` : 'opacity-0'}`}
            >
              <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center h-full border border-green-500/20">
                <div className="mb-5">
                  <div className="relative w-28 h-28 mx-auto">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-green-500/20"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-green-500/45 ring-offset-2 ring-offset-background" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <div className="text-sm font-semibold text-green-500 mb-3">{member.role}</div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-5">{member.bio}</p>

                <div className="flex items-center justify-center gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center hover:bg-green-500/20 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-green-500" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center hover:bg-green-500/20 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4 text-green-500" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center hover:bg-green-500/20 transition-colors"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4 text-green-500" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
