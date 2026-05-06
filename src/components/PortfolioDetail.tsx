import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { portfolioFrames } from '../data/portfolioFrames';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface PortfolioDetailProps {
  portfolioId: number;
  onBack: () => void;
  onBookCall: () => void;
}

export function PortfolioDetail({ portfolioId, onBack, onBookCall }: PortfolioDetailProps) {
  const frame = portfolioFrames.find((item) => item.id === portfolioId);

  if (!frame) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-green-500/5 text-foreground pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-green-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to homepage
          </button>

          <div className="mt-8 glass rounded-3xl border border-green-500/20 p-8 sm:p-10 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-green-500">Portfolio Not Found</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              That case study does not exist.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              The link may be outdated, or the portfolio frame was removed. Head back to the
              homepage to browse the available case results or request a tailored growth plan.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button onClick={onBack} className="bg-green-500 hover:bg-green-600 text-white font-semibold">
                View Case Results
              </Button>
              <Button
                onClick={onBookCall}
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              >
                Get My Growth Plan
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-green-500/5 text-foreground pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-green-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to homepage
        </button>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl">
            <ImageWithFallback
              src={frame.src}
              alt={frame.label}
              className="w-full h-[360px] sm:h-[440px] object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p className="text-xs uppercase tracking-[0.14em] text-green-200">Case Frame {frame.id}</p>
              <h1 className="text-2xl sm:text-3xl font-bold mt-1">{frame.label}</h1>
              <p className="text-white/85 mt-2 text-sm sm:text-base">{frame.caption}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass rounded-2xl border border-green-500/20 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-green-500">Challenge</p>
              <p className="text-base sm:text-lg text-foreground/85 mt-2 leading-relaxed">{frame.challenge}</p>
            </div>

            <div className="glass rounded-2xl border border-green-500/20 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-green-500">Approach</p>
              <p className="text-base sm:text-lg text-foreground/85 mt-2 leading-relaxed">{frame.approach}</p>
            </div>

            <div className="glass rounded-2xl border border-green-500/20 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-green-500">Outcome</p>
              <p className="text-base sm:text-lg text-foreground/85 mt-2 leading-relaxed">{frame.outcome}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {['Growth-focused creative', 'Weekly optimization loops', 'Revenue-oriented reporting', 'Fast execution cadence'].map((point) => (
                <div key={point} className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-sm text-foreground/85 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={onBookCall}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold"
              >
                Get My Growth Plan
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                onClick={onBack}
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              >
                View Case Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
