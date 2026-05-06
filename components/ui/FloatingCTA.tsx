// components/ui/FloatingCTA.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Floating CTA Component
 *
 * CONVERSION STRATEGY:
 * - Appears after 40% scroll (user is engaged, not bouncing)
 * - WhatsApp link = lowest-friction contact for African markets
 *   (WhatsApp is the primary business communication channel in Zambia)
 * - "Get a Quote" secondary CTA for higher-intent leads
 * - Dismissible to avoid annoyance (UX respect)
 * - Pulsing ring animation draws attention without being aggressive
 *
 * DATA: WhatsApp CTAs in service businesses typically see 3–8× higher
 * click-through than email forms because of zero friction to start a conversation.
 */

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setVisible(scrollPercent > 40 && !dismissed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  const whatsappMessage = encodeURIComponent(
    "Hi Kinertic Media Arts! I found your website and I'm interested in learning more about your services. Can we chat?"
  )
  const whatsappUrl = `https://wa.me/260975219796?text=${whatsappMessage}`

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Expanded action buttons */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                className="flex flex-col gap-3 items-end"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full font-semibold shadow-lg shadow-green-500/30 hover:scale-105 transition-transform text-sm whitespace-nowrap"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                {/* Get a Quote */}
                <a
                  href="#contact"
                  onClick={() => setExpanded(false)}
                  className="flex items-center gap-3 bg-gradient-gold text-kinertic-black px-5 py-3 rounded-full font-semibold shadow-lg shadow-kinertic-gold/30 hover:scale-105 transition-transform text-sm whitespace-nowrap"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Get a Quote
                </a>

                {/* Dismiss */}
                <button
                  onClick={() => { setDismissed(true); setExpanded(false) }}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors pr-1"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB button */}
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="relative w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-xl shadow-kinertic-gold/40 focus:outline-none focus:ring-2 focus:ring-kinertic-gold focus:ring-offset-2 focus:ring-offset-kinertic-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={expanded ? 'Close contact menu' : 'Open contact menu'}
          >
            {/* Pulsing ring (only when collapsed) */}
            {!expanded && (
              <motion.div
                className="absolute inset-0 rounded-full bg-kinertic-gold"
                animate={{ scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
              />
            )}

            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.svg
                  key="close"
                  className="w-6 h-6 text-kinertic-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="chat"
                  className="w-6 h-6 text-kinertic-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
