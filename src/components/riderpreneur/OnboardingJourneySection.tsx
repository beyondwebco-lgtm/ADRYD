'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Sparkles, MessageCircle } from 'lucide-react';
import { ONBOARDING_JOURNEY } from '@/data/riderpreneurData';

export default function OnboardingJourneySection() {
  return (
    <section className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0A9BE0]/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
            Step-by-Step Onboarding
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            HOW TO START YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              ADRYD JOURNEY
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From your 2-minute digital sign-up to dispatching on your first paid corridor campaign, our streamlined process gets you on the road within 48 hours.
          </p>
        </div>

        {/* 9-Step Timeline Grid with Connection Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative">
          {ONBOARDING_JOURNEY.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl p-6 bg-[#030d17]/85 border border-[#0A9BE0]/25 hover:border-[#B4F000]/60 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#0A9BE0]/20 border border-[#0A9BE0]/40 flex items-center justify-center font-mono font-black text-sm text-[#B4F000]">
                    0{step.step}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    <Clock className="w-3 h-3 text-[#0A9BE0]" />
                    <span>{step.duration}</span>
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#0A9BE0] uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-[#B4F000] transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Phase {Math.ceil(step.step / 3)} of 3</span>
                <span className="text-[#B4F000]">Verified Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* Final High-Impact CTA Box */}
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#001426] via-[#041a2e] to-[#010810] border-2 border-[#B4F000]/50 shadow-[0_20px_60px_rgba(180,240,0,0.25)] text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
          {/* Subtle Ambient Orbs */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#B4F000]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="space-y-4 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B4F000]/20 border border-[#B4F000]/40 text-xs font-black uppercase tracking-wider text-[#B4F000]">
              <Sparkles className="w-4 h-4" />
              <span>Join the Movement Today</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              READY TO RISE WITH{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
                ADRYD?
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Unlock a professional career in mobile brand promotion. Zero registration fees, prompt weekly payouts, certified safety gear, and structured upward mobility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <Link
              href="/become-a-rider?type=own_vehicle"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-base shadow-[0_6px_25px_rgba(180,240,0,0.4)] hover:shadow-[0_8px_35px_rgba(180,240,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Join with Own EV</span>
              <ArrowRight className="w-5 h-5 text-[#000000]" />
            </Link>

            <Link
              href="/become-a-rider?type=rental"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0A9BE0] hover:bg-[#20aff5] text-white font-black text-base shadow-[0_6px_25px_rgba(10,155,224,0.35)] hover:shadow-[0_8px_35px_rgba(10,155,224,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Apply for Rental EV</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <span>Have questions before applying?</span>
            <Link
              href="/contact"
              className="text-[#B4F000] hover:underline font-bold inline-flex items-center gap-1"
            >
              <span>Chat with our Onboarding Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
