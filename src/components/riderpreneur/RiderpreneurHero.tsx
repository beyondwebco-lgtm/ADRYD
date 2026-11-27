'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function RiderpreneurHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#000000]">
      {/* Background Ambience & Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#0A9BE0]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-[#B4F000]/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#0A9BE0_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Message & Metrics */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 shadow-[0_0_20px_rgba(10,155,224,0.2)]">
              <Sparkles className="w-4 h-4 text-[#B4F000]" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white">
                Riderpreneur Program <span className="text-[#B4F000]">↗</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B4F000] animate-pulse" />
              <span className="text-[11px] font-semibold text-slate-300 hidden sm:inline">The Future of Rider Careers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]">
              DON&apos;T JUST RIDE.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] via-[#5eff00] to-[#0A9BE0]">
                RISE WITH ADRYD.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Transform from an ordinary gig delivery rider into an{' '}
              <strong className="text-white font-semibold">independent brand promoter</strong>,{' '}
              <strong className="text-[#B4F000] font-semibold">direct sales partner</strong>, and{' '}
              <strong className="text-[#0A9BE0] font-semibold">on-ground marketing professional</strong>.
              Unlock multiple revenue streams while riding electric.
            </p>

            {/* Key Metric Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0 pt-2">
              <div className="p-4 rounded-2xl bg-[#030d17]/80 border border-[#0A9BE0]/25 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] text-center">
                <div className="text-3xl sm:text-4xl font-black text-[#B4F000]">11</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Opportunity</div>
                <div className="text-[10px] text-slate-400 font-medium">Categories</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#030d17]/80 border border-[#0A9BE0]/25 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] text-center">
                <div className="text-3xl sm:text-4xl font-black text-[#0A9BE0]">10</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Career Growth</div>
                <div className="text-[10px] text-slate-400 font-medium">Progression Levels</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#030d17]/80 border border-[#0A9BE0]/25 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] text-center">
                <div className="text-3xl sm:text-4xl font-black text-white">2</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Ways to Join</div>
                <div className="text-[10px] text-slate-400 font-medium">Own EV or Rental</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('join-options')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-base shadow-[0_6px_25px_rgba(180,240,0,0.4)] hover:shadow-[0_8px_35px_rgba(180,240,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Become a Riderpreneur</span>
                <ArrowRight className="w-5 h-5 text-[#000000]" />
              </button>

              <button
                onClick={() => scrollTo('opportunities')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-base border border-[#0A9BE0]/30 hover:border-[#0A9BE0] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all"
              >
                <span>Explore Opportunities</span>
              </button>
            </div>

            {/* Quick trust checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-400 pt-2">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B4F000]" />
                Daily & Weekly UPI Payouts
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A9BE0]" />
                Zero Registration Fees
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B4F000]" />
                Verified Partner Insurance
              </span>
            </div>
          </div>

          {/* Right Column: Branded Kit & Official Fleet Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#0A9BE0] via-[#B4F000] to-[#0A9BE0] opacity-35 blur-xl animate-pulse" />

              <div className="relative rounded-3xl bg-[#040e17] border border-[#0A9BE0]/40 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-black/60">
                  <Image
                    src="/images/adryd-riderpreneur-kit.jpg"
                    alt="ADRYD Riderpreneur Branded Gear Kit and Electric Scooter Showcase"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/20 to-transparent pointer-events-none" />
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#000000]/85 backdrop-blur-xl border border-[#0A9BE0]/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#B4F000] uppercase tracking-wider">
                        Official Gear & Fleet Standards
                      </div>
                      <div className="text-sm font-extrabold text-white">
                        ADRYD Certified Riderpreneur Kit
                      </div>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-[#0A9BE0]/20 border border-[#0A9BE0]/40 flex items-center justify-center text-[#B4F000]">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400">Jacket & Gear</div>
                      <div className="text-xs font-bold text-white">High-Vis Reflective</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Display Box</div>
                      <div className="text-xs font-bold text-[#B4F000]">Illuminated LED</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Identity</div>
                      <div className="text-xs font-bold text-[#0A9BE0]">Lifetime Smart ID</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
