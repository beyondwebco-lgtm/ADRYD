'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, MapPin, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 overflow-hidden bg-gradient-hero">
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-burgundy/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-electric-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Animated SVG Route Trail Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50,600 C300,550 500,200 900,350 C1200,450 1500,250 1950,400"
          fill="none"
          stroke="#FFE500"
          strokeWidth="2"
          className="animate-route-dash"
        />
        <path
          d="M-50,750 C400,700 700,500 1100,600 C1400,680 1600,550 2000,580"
          fill="none"
          stroke="#730018"
          strokeWidth="3"
          strokeDasharray="6 8"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite/80 border border-electric-yellow/30 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="w-2 h-2 rounded-full bg-electric-yellow animate-ping" />
              <span>Electric Mobility × Brand Advertising</span>
            </div>

            {/* Oversized Cinematic Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-[0.95] mb-6">
              YOUR BRAND.{' '}
              <br />
              <span className="text-electric-yellow drop-shadow-[0_0_35px_rgba(255,229,0,0.4)]">
                EVERY STREET.
              </span>{' '}
              <br />
              EVERY MOVE.
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-soft-ivory/85 max-w-xl font-normal leading-relaxed mb-8">
              Take your brand beyond static billboards. Discover high-recall, location-targeted
              promotional campaigns powered by daily electric scooter mobility across Hyderabad.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/book-campaign"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-black text-base uppercase tracking-wider shadow-xl hover:shadow-electric-yellow/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Launch a Campaign</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="#concept"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-graphite/70 hover:bg-graphite border border-graphite-border hover:border-soft-ivory/40 text-soft-ivory font-heading font-bold text-sm tracking-wide backdrop-blur-sm transition-all"
              >
                <span>Explore ADRYD</span>
                <ChevronDown className="w-4 h-4 text-electric-yellow" />
              </Link>
            </div>

            {/* Micro Badges / Proof Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 w-full text-xs text-muted-grey font-tech">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-electric-yellow" />
                <span className="text-soft-ivory tracking-wider font-semibold">HYDERABAD</span>
                <span>• INITIAL LAUNCH MARKET</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-soft-ivory tracking-wider font-semibold">100% ELECTRIC</span>
                <span>• ZERO EMISSION MOBILITY</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-electric-yellow" />
                <span className="text-soft-ivory tracking-wider font-semibold">PILOT VALIDATION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Clean Transparent Scooter (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Backdrop Ring */}
            <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-burgundy/40 blur-2xl -z-10" />
            <div className="absolute w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] rounded-full border border-electric-yellow/20 animate-pulse -z-10" />

            {/* Scooter Graphic Container */}
            <div className="relative w-full max-w-lg lg:max-w-none group">
              <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/adryd-scooter-hero.png"
                  alt="ADRYD Electric Advertising Scooter"
                  width={1004}
                  height={731}
                  priority
                  className="w-full h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter contrast-105"
                />

                {/* Ground Shadow Glow */}
                <div className="w-3/4 h-6 mx-auto -mt-3 bg-carbon-black/90 rounded-full blur-md" />
              </div>

              {/* Floating Tech Stat Pill 1 */}
              <div className="hidden xs:flex absolute -top-4 left-0 sm:left-4 bg-carbon-card/90 backdrop-blur-md border border-graphite-border px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-2xl items-center gap-2.5 sm:gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-burgundy/60 border border-burgundy-light flex items-center justify-center text-electric-yellow shrink-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-tech uppercase text-muted-grey">Mobility Channel</div>
                  <div className="text-[11px] sm:text-xs font-heading font-bold text-white whitespace-nowrap">Active Street Transit</div>
                </div>
              </div>

              {/* Floating Tech Stat Pill 2 */}
              <div className="hidden xs:flex absolute -bottom-4 right-0 sm:right-6 bg-carbon-card/90 backdrop-blur-md border border-graphite-border px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-2xl items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-electric-yellow/20 border border-electric-yellow/40 flex items-center justify-center text-electric-yellow shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-tech uppercase text-muted-grey">ADRYD Upgrade</div>
                  <div className="text-[11px] sm:text-xs font-heading font-bold text-white whitespace-nowrap">Mobile Showcases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-tech text-muted-grey/70 uppercase tracking-widest pointer-events-none">
        <span>Scroll to Explore</span>
        <div className="w-1 h-4 rounded-full bg-electric-yellow/50 animate-pulse" />
      </div>
    </section>
  );
}
