// components/sections/Contact.tsx

'use client'

import { useState, FormEvent } from 'react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Contact Section Component
 * 
 * Lead generation form with validation
 * 
 * Design Strategy:
 * - Split layout: Form left, info right
 * - Minimal fields reduce friction
 * - Success state provides feedback
 * 
 * Marketing Strategy:
 * - "Company" field qualifies leads
 * - Headline uses collaborative language
 * - Multiple contact methods reduce barriers
 * 
 * UX Features:
 * - Real-time validation
 * - Loading states
 * - Success confirmation
 * - Accessible form controls
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-kinertic-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-kinertic-purple/5 via-transparent to-kinertic-blue/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Let's Build Something{' '}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Powerful
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to elevate your brand? Get in touch and let's create something extraordinary together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <Input
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                    />

                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                    />

                    <Input
                      label="Company (Optional)"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />

                    <Input
                      label="Your Message"
                      name="message"
                      multiline
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      required
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      // disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-400 leading-relaxed">
                  Whether you have a question, need a quote, or want to discuss your next project, 
                  we're here to help. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:kinerticmedia97@gmail.com" className="text-gray-400 hover:text-kinertic-gold transition-colors">
                      kinerticmedia97@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+260975219796" className="text-gray-400 hover:text-kinertic-gold transition-colors">
                      +260 975 219 796
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Lusaka, Zambia</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Social Media</h4>
                    <a 
                      href="https://instagram.com/kinerticmedia" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-kinertic-gold transition-colors"
                    >
                      @kinerticmedia
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="glass-card rounded-xl p-6 border-l-4 border-kinertic-gold">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-kinertic-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Quick Response Time</p>
                    <p className="text-sm text-gray-400">We typically respond within 2 hours during business hours</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}