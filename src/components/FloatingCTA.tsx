import React, { useEffect, useState } from 'react';
import { MessageCircle, PhoneCall, X } from 'lucide-react';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setVisible(progress > 35 && !dismissed);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const whatsappMessage = encodeURIComponent(
    "Hi Kinertic Media Arts! I'm interested in your services and would love to chat."
  );
  const whatsappUrl = `https://wa.me/260975219796?text=${whatsappMessage}`;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setExpanded(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="glass rounded-2xl p-3 border border-green-500/20 shadow-xl shadow-green-500/10 animate-fade-in">
          <div className="flex flex-col gap-2 min-w-[220px]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors text-left"
            >
              <PhoneCall className="w-4 h-4" />
              Request a Quote
            </button>
            <button
              onClick={() => {
                setDismissed(true);
                setExpanded(false);
              }}
              className="text-xs text-foreground/60 hover:text-foreground transition-colors py-1"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl shadow-green-500/30 hover:scale-105 active:scale-95 transition-transform"
        aria-label={expanded ? 'Close contact menu' : 'Open contact menu'}
      >
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping pointer-events-none" />
        )}
        <span className="relative flex items-center justify-center">
          {expanded ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        </span>
      </button>
    </div>
  );
}
