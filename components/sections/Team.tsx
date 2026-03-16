// components/sections/Team.tsx

'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import Card from '@/components/ui/Card'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * Team Section Component
 * 
 * Humanizes the brand through team member profiles
 * 
 * Design Strategy:
 * - Professional headshot placeholders
 * - Role-based hierarchy
 * - Social links for credibility
 * 
 * Marketing Purpose:
 * - Builds trust through transparency
 * - Shows expertise diversity
 * - Creates personal connection
 */

export default function Team() {
  const team = [
    {
      name: 'Willard Phiri',
      role: 'Founder & Creative Director',
      bio: 'Leads creative strategy and brand storytelling across video, photo, and design.',
      image: '/images/KIN05484.JPG',
      social: {
        linkedin: 'https://www.linkedin.com/in/willard-phiri',
        twitter: 'https://twitter.com/willardphiri',
      },
    },
    {
      name: 'Praise Ngulube',
      role: 'Marketing & Accountant',
      bio: 'Balances growth strategy with financial clarity to keep campaigns profitable.',
      image: '/images/6M2B3586.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/praise-ngulube',
      },
    },
    {
      name: 'Jehoiachin Katemangwe',
      role: 'Developer & Creative',
      bio: 'Builds digital experiences that blend performance with polished design.',
      image: '/images/6M2B3648.jpg',
      social: {
        twitter: 'https://twitter.com/jehoiachin',
      },
    },
    {
      name: 'Jesse Chibuye',
      role: 'Photographer & Creative',
      bio: 'Captures brand stories with a cinematic eye across photo and video.',
      image: '/images/6M2B3651.jpg',
      social: {
        instagram: 'https://instagram.com/kinerticmedia',
        twitter: 'https://twitter.com/kinerticmedia',
      },
    },
    {
      name: 'Paul Daka',
      role: 'Operations & Creative',
      bio: 'Keeps projects running smoothly while maintaining high creative standards.',
      image: '/images/6M2B3655.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/paul-daka',
      },
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-kinertic-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Meet Our Team"
          subtitle="The creative minds behind your success"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
              <Card hover className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 overflow-hidden shadow-inner">
                  <img
                    src={member.image}
                    alt={`${member.name} headshot`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-kinertic-gold text-sm mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-kinertic-gold transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-kinertic-gold transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-kinertic-gold transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 4.813.11 4.086.278 3.45.525a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 00.525 3.45C.278 4.086.11 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.05 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.415 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.05 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.415-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.05-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0016.55.525C15.914.278 15.187.11 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.097 3.097 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}