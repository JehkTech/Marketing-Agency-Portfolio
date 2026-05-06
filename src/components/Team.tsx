import React from 'react';
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  impact: string;
  market: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
};

type SocialLink = {
  href: string;
  label: string;
  icon: typeof Linkedin;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Willard Phiri',
    role: 'Founder & Creative Director',
    focus: 'Brand strategy, direction, and high-converting positioning.',
    impact: 'Led campaigns that helped clients triple qualified inbound enquiries.',
    market: 'Zambia',
    image: '/images/Willard.png',
    linkedin: 'https://www.linkedin.com/in/willard-phiri',
    twitter: 'https://twitter.com/willardphiri',
  },
  {
    name: 'Praise Ngulube',
    role: 'Marketing & Accountant',
    focus: 'Growth planning, campaign economics, and budget discipline.',
    impact: 'Improves media efficiency by aligning spend with revenue-stage goals.',
    market: 'SADC',
    image: '/images/Praise.png',
    linkedin: 'https://www.linkedin.com/in/praise-ngulube',
  },
  {
    name: 'Jehoiachin Katemangwe',
    role: 'Developer & Creative',
    focus: 'Web performance, UX systems, and conversion-focused build quality.',
    impact: 'Builds fast landing experiences designed to convert paid traffic.',
    market: 'Global',
    image: '/images/Jehoiachin.png',
    twitter: 'https://twitter.com/jehoiachin',
  },
  {
    name: 'Jesse Chibuye',
    role: 'Photographer & Creative',
    focus: 'Premium visual storytelling across social, ads, and launch assets.',
    impact: 'Produces creative that increases watch-time and message recall.',
    market: 'Africa',
    image: '/images/Jesse.png',
    instagram: 'https://www.instagram.com/kinertic_marketing/',
  },
  {
    name: 'Paul Daka',
    role: 'Operations & Creative',
    focus: 'Delivery systems, project quality, and execution consistency.',
    impact: 'Keeps campaigns on schedule with measurable weekly progress.',
    market: 'Remote',
    image: '/images/Paul.png',
    linkedin: 'https://www.linkedin.com/in/paul-daka',
  },
];

function getPrimarySocial(member: TeamMember): SocialLink | null {
  if (member.linkedin) {
    return { href: member.linkedin, label: 'LinkedIn', icon: Linkedin };
  }

  if (member.twitter) {
    return { href: member.twitter, label: 'Twitter', icon: Twitter };
  }

  if (member.instagram) {
    return { href: member.instagram, label: 'Instagram', icon: Instagram };
  }

  return null;
}

const cardDelayClasses = [
  'animation-delay-100',
  'animation-delay-200',
  'animation-delay-300',
  'animation-delay-400',
  'animation-delay-500',
  'animation-delay-600',
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
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-green-500 mb-4">
            The Team Behind Your Growth
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            <span className="text-foreground">NOT FREELANCERS.</span>{' '}
            <span className="text-green-500">A CONVERSION POD.</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-4xl mx-auto">
            Strategy, creative, build, and campaign execution in one accountable team so your
            brand looks premium and converts consistently.
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-10 ${
            isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'
          }`}
        >
          {['200+ Projects Delivered', '98% Client Retention', 'Weekly Performance Reporting'].map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-sm text-foreground/85"
            >
              {item}
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
          aria-label="Team members"
        >
          {teamMembers.map((member, index) => {
            const social = getPrimarySocial(member);
            const Icon = social?.icon;

            return (
              <article
                key={member.name}
                className={`group relative h-[420px] sm:h-[450px] overflow-hidden rounded-2xl border border-green-500/20 shadow-[0_18px_35px_-18px_rgba(34,197,94,0.45)] ${
                  isVisible ? `animate-scale-in ${cardDelayClasses[index] || 'animation-delay-600'}` : 'opacity-0'
                }`}
              >
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  priority={index < 2}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-900/55 to-black/35" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />

                {social && Icon && (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/35 border border-white/25 text-white flex items-center justify-center hover:bg-black/55 transition-colors"
                    aria-label={`${member.name} ${social.label}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )}

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                  <p className="text-2xl font-semibold leading-tight drop-shadow-sm">{member.name}</p>
                  <p className="text-sm text-white/90 mt-1">{member.role}</p>
                  <p className="text-sm text-white/80 mt-3 leading-relaxed">{member.focus}</p>
                  <p className="text-base font-semibold mt-3">{member.impact}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-white/20 border border-white/30 px-2.5 py-1 text-xs uppercase tracking-[0.12em]">
                      {member.market}
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-green-100/95">
                      Growth + Creative
                    </span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-green-400 to-green-500" />
              </article>
            );
          })}
        </div>

        <div
          className={`mt-10 glass rounded-2xl border border-green-500/20 px-5 py-6 sm:px-8 sm:py-7 ${
            isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-lg sm:text-xl font-semibold text-foreground">
                Need senior execution without building an in-house agency team?
              </p>
              <p className="text-sm sm:text-base text-foreground/70 mt-2 max-w-3xl">
                We plug in as one accountable growth partner and ship strategy, creative, and
                campaigns that move pipeline.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-6 py-3 hover:from-green-600 hover:to-green-700 transition-colors"
              >
                Get My Growth Plan
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#case-study"
                className="inline-flex items-center justify-center rounded-full border border-green-500/45 text-green-500 px-6 py-3 hover:bg-green-500 hover:text-white transition-colors"
              >
                See Case Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
