import React from 'react';
import { FileText, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from './ui/button';

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    duration: '30-60 min',
    description:
      'We learn your goals, audience, and current bottlenecks before proposing any work.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Strategy & Plan',
    duration: '3-5 days',
    description:
      'You get a clear roadmap with deliverables, milestones, and budget alignment.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Production',
    duration: '1-6 weeks',
    description:
      'Design, content, and campaign execution move in sync with regular updates.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Launch & Growth',
    duration: 'Ongoing',
    description:
      'After go-live, we optimize performance and scale what delivers the best results.',
    icon: TrendingUp,
  },
];

export function Process() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 bg-gradient-to-b from-background via-green-500/5 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-5">
            <span className="text-green-500 text-sm font-semibold tracking-wide">How We Work</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">OUR</span>{' '}
            <span className="text-green-500">PROCESS</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            A clear, low-friction path from idea to launch so you always know what comes next.
          </p>
        </div>

        <div className="hidden md:block relative mb-12">
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-green-500/20" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`${isVisible ? `animate-fade-in animation-delay-${(index + 1) * 100}` : 'opacity-0'}`}
              >
                <div className="glass rounded-3xl p-6 h-full border border-green-500/20 hover:scale-[1.02] transition-transform duration-300">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-xl shadow-green-500/20 relative z-10">
                    <span className="text-xl font-black">{step.step}</span>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold mb-3">
                      <step.icon className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-foreground/65 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-5 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`glass rounded-2xl p-5 border border-green-500/20 ${
                isVisible ? `animate-slide-up animation-delay-${(index + 1) * 100}` : 'opacity-0'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-black">
                  {step.step}
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold mb-2">
                    <step.icon className="w-3.5 h-3.5" />
                    <span>{step.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-foreground/65 mt-1.5">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
          <div className="glass rounded-2xl p-8 border border-green-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to start?</h3>
            <p className="text-foreground/70 mb-6">
              Book a discovery call and we will map the fastest growth path for your brand.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8"
              size="lg"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
