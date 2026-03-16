// components/ui/SectionHeader.tsx

import ScrollReveal from '@/components/animations/ScrollReveal'

/**
 * SectionHeader Component
 * 
 * Consistent section title styling across the site
 * 
 * Props:
 * @param title - Main section heading
 * @param subtitle - Optional subtitle text
 * @param centered - Center align text
 * @param accent - Show decorative accent line
 * 
 * Design Pattern:
 * - Large, bold headlines establish hierarchy
 * - Optional subtitle provides context
 * - Gold accent line adds visual interest
 * - Consistent spacing maintains rhythm
 */

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  accent?: boolean
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = false,
  accent = true 
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {accent && (
        <ScrollReveal variant="scaleIn">
          <div className={`w-20 h-1 bg-gradient-gold rounded-full mb-6 ${centered ? 'mx-auto' : ''}`} />
        </ScrollReveal>
      )}
      
      <ScrollReveal variant="fadeUp">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
          {title}
        </h2>
      </ScrollReveal>
      
      {subtitle && (
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}