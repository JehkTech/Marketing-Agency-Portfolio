'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * Team Section
 * 
 * Team Members:
 * 1. Willard Phiri - Founder/Creative Director
 * 2. Praise Nculube - Marketing/Accountant
 * 3. Jehoiachin Katemangwe - Developer/Creative
 * 4. Jesse Chibuye - Photographer/Creative
 * 5. Paul Daka - Operations/Creative
 */

const teamMembers = [
  {
    id: 1,
    name: 'Willard Phiri',
    role: 'Founder/Creative Director',
    image: '/team/willard.png',
    bio: 'Visionary leader combining strategy with creative excellence',
  },
  {
    id: 2,
    name: 'Praise Nculube',
    role: 'Marketing/Accountant',
    image: '/team/praise.png',
    bio: 'Strategic marketer with sharp financial acumen',
  },
  {
    id: 3,
    name: 'Jehoiachin Katemangwe',
    role: 'Developer/Creative',
    image: '/team/jehoiachin.png',
    bio: 'Full-stack developer bringing ideas to life',
  },
  {
    id: 4,
    name: 'Jesse Chibuye',
    role: 'Photographer/Creative',
    image: '/team/jesse.png',
    bio: 'Visual storyteller with cinematic eye',
  },
  {
    id: 5,
    name: 'Paul Daka',
    role: 'Operations/Creative',
    image: '/team/paul.png',
    bio: 'Operations excellence meets creative passion',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent dark:via-white/10" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-[var(--color-primary-900)]">Our Team</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A collective of strategists, creatives, and technologists obsessed with building brands that matter.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full flex flex-col rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                <div className="relative mb-6 aspect-square overflow-hidden rounded-[1.5rem] bg-[var(--color-light-gray)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-white/10" />
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-1 text-[var(--color-text)] line-clamp-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--color-primary-800)] mb-3 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2">
                    {member.bio}
                  </p>

                  <div className="mt-auto flex gap-1 pt-4" aria-label={`${member.name} rating`}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-[var(--color-primary-800)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Ready to work with our team? Let's build something incredible together.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[var(--color-primary-800)] text-white rounded-full font-bold hover:bg-[var(--color-primary-900)] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
