import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote:
      'Kinertic transformed our online presence. Enquiry quality improved almost immediately and our team finally had a clear growth direction.',
    author: 'Dr. Sandra Mwale',
    role: 'Principal',
    company: 'American International School',
    avatar: 'SM',
  },
  {
    quote:
      'The campaign assets looked premium and converted better than anything we had run before. Their process was clear and dependable.',
    author: 'Chanda Bwalya',
    role: 'CEO',
    company: 'Detox Labs Zambia',
    avatar: 'CB',
  },
  {
    quote:
      'Within two months, qualified leads doubled. The team focused on outcomes, not vanity metrics, and that made all the difference.',
    author: 'Mulenga Kasonde',
    role: 'Marketing Manager',
    company: 'LPGB Properties',
    avatar: 'MK',
  },
  {
    quote:
      'From strategy to launch, every step was intentional. The final site and content package gave us confidence to scale faster.',
    author: 'Thandeka Phiri',
    role: 'Director',
    company: 'PRND Consulting',
    avatar: 'TP',
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;

    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [paused]);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const active = testimonials[current];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-green-500/5 relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">CLIENT</span>{' '}
            <span className="text-green-500">RESULTS</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            Real feedback from teams we have helped grow.
          </p>
        </div>

        <div className={`${isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'}`}>
          <div className="glass rounded-3xl p-8 md:p-12 border border-green-500/20">
            <div key={active.author} className="animate-fade-in">
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-500 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{active.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white font-bold flex items-center justify-center">
                  {active.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{active.author}</div>
                  <div className="text-sm text-foreground/60">
                    {active.role} | {active.company}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-8">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.author}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-green-500' : 'w-4 bg-green-500/25 hover:bg-green-500/45'
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 ${
            isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'
          }`}
        >
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Retention' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 border border-green-500/15 text-center">
              <div className="text-2xl font-bold text-green-500">{stat.value}</div>
              <div className="text-xs text-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
