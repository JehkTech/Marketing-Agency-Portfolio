// // components/sections/Contact.tsx

// 'use client'

// import { useState, FormEvent } from 'react'
// import ScrollReveal from '@/components/animations/ScrollReveal'
// import Input from '@/components/ui/Input'
// import Button from '@/components/ui/Button'
// import { motion, AnimatePresence } from 'framer-motion'

// /**
//  * Contact Section Component
//  * 
//  * Lead generation form with validation
//  * 
//  * Design Strategy:
//  * - Split layout: Form left, info right
//  * - Minimal fields reduce friction
//  * - Success state provides feedback
//  * 
//  * Marketing Strategy:
//  * - "Company" field qualifies leads
//  * - Headline uses collaborative language
//  * - Multiple contact methods reduce barriers
//  * 
//  * UX Features:
//  * - Real-time validation
//  * - Loading states
//  * - Success confirmation
//  * - Accessible form controls
//  */

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: '',
//   })
//   const [errors, setErrors] = useState<Record<string, string>>({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required'
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid'
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required'
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSuccess(true)
//       setFormData({ name: '', email: '', company: '', message: '' })
      
//       // Reset success message after 5 seconds
//       setTimeout(() => setIsSuccess(false), 5000)
//     }, 1500)
//   }

//   const handleChange = (e: any) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }))
//     }
//   }

//   return (
//     <section id="contact" className="py-20 md:py-32 bg-kinertic-black relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-b from-kinertic-purple/5 via-transparent to-kinertic-blue/5" />
      
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <ScrollReveal variant="fadeUp">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
//               Let's Build Something{' '}
//               <span className="bg-gradient-gold bg-clip-text text-transparent">
//                 Powerful
//               </span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Ready to elevate your brand? Get in touch and let's create something extraordinary together.
//             </p>
//           </div>
//         </ScrollReveal>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Form */}
//           <ScrollReveal variant="fadeUp" delay={0.2}>
//             <div className="glass-card rounded-2xl p-8 md:p-10">
//               <AnimatePresence mode="wait">
//                 {isSuccess ? (
//                   <motion.div
//                     key="success"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     className="text-center py-12"
//                   >
//                     <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                       <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
//                     <p className="text-gray-400">
//                       We'll get back to you within 24 hours.
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <motion.form
//                     key="form"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     onSubmit={handleSubmit}
//                     className="space-y-6"
//                   >
//                     <Input
//                       label="Your Name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       error={errors.name}
//                       required
//                     />

//                     <Input
//                       label="Email Address"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       error={errors.email}
//                       required
//                     />

//                     <Input
//                       label="Company (Optional)"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                     />

//                     <Input
//                       label="Your Message"
//                       name="message"
//                       multiline
//                       value={formData.message}
//                       onChange={handleChange}
//                       error={errors.message}
//                       required
//                     />

//                     <Button
//                       type="submit"
//                       size="lg"
//                       className="w-full"
//                       // disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <span className="flex items-center justify-center">
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                           </svg>
//                           Sending...
//                         </span>
//                       ) : (
//                         'Send Message'
//                       )}
//                     </Button>
//                   </motion.form>
//                 )}
//               </AnimatePresence>
//             </div>
//           </ScrollReveal>

//           {/* Contact Information */}
//           <ScrollReveal variant="fadeUp" delay={0.3}>
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
//                 <p className="text-gray-400 leading-relaxed">
//                   Whether you have a question, need a quote, or want to discuss your next project, 
//                   we're here to help. Reach out through any of these channels.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {/* Email */}
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
//                     <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Email</h4>
//                     <a href="mailto:kinerticmedia97@gmail.com" className="text-gray-400 hover:text-kinertic-gold transition-colors">
//                       kinerticmedia97@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
//                     <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Phone</h4>
//                     <a href="tel:+260975219796" className="text-gray-400 hover:text-kinertic-gold transition-colors">
//                       +260 975 219 796
//                     </a>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
//                     <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Address</h4>
//                     <p className="text-gray-400">Independence Ave, Lusaka, Zambia</p>
//                   </div>
//                 </div>

//                 {/* Website */}
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
//                     <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.75c2.21 0 4 1.79 4 4v2.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V8.75c0-2.21 1.79-4 4-4z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.92 11.99A6 6 0 0012 17a6 6 0 005.08-5.01" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Website</h4>
//                     <a
//                       href="https://kinerticmediaarts.com"
//                       className="text-gray-400 hover:text-kinertic-gold transition-colors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       kinerticmediaarts.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* Social Media */}
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0">
//                     <svg className="w-6 h-6 text-kinertic-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Social Media</h4>
//                     <a 
//                       href="https://www.instagram.com/kinertic_marketing/" 
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-400 hover:text-kinertic-gold transition-colors"
//                     >
//                       @kinertic_marketing
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Response Time Badge */}
//               <div className="glass-card rounded-xl p-6 border-l-4 border-kinertic-gold">
//                 <div className="flex items-center gap-3">
//                   <svg className="w-6 h-6 text-kinertic-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <div>
//                     <p className="font-semibold">Quick Response Time</p>
//                     <p className="text-sm text-gray-400">We typically respond within 2 hours during business hours</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   )
// }

// components/sections/Contact.tsx  (REPLACEMENT — wires form to real API)
'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

/**
 * Contact Section — UPDATED
 *
 * Key changes vs the original:
 * 1. Calls /api/contact (real backend) instead of setTimeout simulation
 * 2. Shows server-side error messages (e.g., rate limit exceeded)
 * 3. "Free consultation" framing (lower commitment, higher conversion)
 * 4. WhatsApp direct link as secondary conversion path
 * 5. Response time badge moved into the form area for higher visibility
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverError, setServerError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) e.name = 'Please enter your name'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Please enter a valid email'
    if (!formData.message.trim() || formData.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setServerError('')
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const json = await res.json()

      if (!res.ok || !json.success) {
        setServerError(json.message ?? 'Something went wrong. Please try again.')
        return
      }

      setIsSuccess(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch {
      setServerError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const whatsappUrl = `https://wa.me/260975219796?text=${encodeURIComponent("Hi Kinertic! I'd like to discuss a project.")}`

  return (
    <section id="contact" className="py-20 md:py-32 bg-kinertic-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kinertic-purple/5 via-transparent to-kinertic-blue/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-gold bg-clip-text text-transparent">Powerful</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start with a free 30-minute discovery call. No obligations, no sales pitch — just honest conversation about your brand.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              {/* Response time badge — in form header for visibility */}
              <div className="flex items-center gap-2 mb-8 px-4 py-2.5 bg-kinertic-gold/10 border border-kinertic-gold/20 rounded-full w-fit">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-kinertic-gold font-medium">Typically responds within 2 hours</span>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We&apos;ll be in touch within 2 business hours.</p>
                    <p className="text-sm text-gray-500 mt-4">
                      Can&apos;t wait?{' '}
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-kinertic-gold hover:underline">
                        Chat on WhatsApp
                      </a>
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
                    <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required />
                    <Input label="Company (Optional)" name="company" value={formData.company} onChange={handleChange} />
                    <Input label="Tell us about your project" name="message" multiline value={formData.message} onChange={handleChange} error={errors.message} required />

                    {serverError && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-lg"
                      >
                        {serverError}
                      </motion.p>
                    )}

                    <Button type="submit" size="lg" className="w-full" >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Or{' '}
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-kinertic-gold hover:underline">
                        message us directly on WhatsApp
                      </a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="text-gray-400 leading-relaxed">
                  Whether you need a full brand strategy or a single campaign, we start every engagement the same way — by listening.
                </p>
              </div>

              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'kinerticmedia97@gmail.com',
                  href: 'mailto:kinerticmedia97@gmail.com',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  label: 'WhatsApp',
                  value: '+260 975 219 796',
                  href: 'https://wa.me/260975219796',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Independence Ave, Lusaka, Zambia',
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kinertic-gold/20 to-kinertic-purple/20 flex items-center justify-center flex-shrink-0 text-kinertic-gold">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-400 mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-white hover:text-kinertic-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
