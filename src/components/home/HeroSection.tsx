'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, MapPin, Zap, ShieldCheck, Sparkles, QrCode } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 overflow-hidden bg-gradient-hero">
      {/* Background Decorative Grid & Minimal Neon Light Trails */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-[#24212C]/80 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[380px] h-[380px] bg-[#E7FF39]/8 rounded-full blur-[130px] pointer-events-none" />

      {/* Animated SVG Neon Route Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50,600 C300,550 500,200 900,350 C1200,450 1500,250 1950,400"
          fill="none"
          stroke="#E7FF39"
          strokeWidth="2"
          className="animate-route-dash"
        />
        <path
          d="M-50,720 C400,680 700,480 1100,580 C1400,660 1600,520 2000,560"
          fill="none"
          stroke="#353740"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="w-2 h-2 rounded-full bg-[#E7FF39] animate-ping" />
              <span>THE NEXT GENERATION OF MOBILE COMMERCE</span>
            </div>

            {/* Oversized Cinematic Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white uppercase leading-[0.95] mb-6">
              YOUR BRAND.{' '}
              <br />
              YOUR PRODUCTS.{' '}
              <br />
              <span className="text-[#E7FF39] drop-shadow-[0_0_35px_rgba(231,255,57,0.35)]">
                OUR MOVING MARKETPLACE.
              </span>
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-[#A5A8B3] max-w-xl font-normal leading-relaxed mb-8">
              Take your brand and products directly to local audiences through electric mobility-powered
              advertising, product showcases, QR-enabled shopping experiences, pre-orders and delivery solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/book-campaign"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(231,255,57,0.35)] hover:shadow-[0_0_35px_rgba(231,255,57,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Launch a Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/adryd-upgrade"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#17191F] hover:bg-[#24212C] border border-[#353740] hover:border-[#E7FF39]/40 text-[#F2F3F5] font-heading font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E7FF39]" />
                <span>Discover ADRYD Upgrade</span>
              </Link>
            </div>

            {/* Micro Proof Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#353740] w-full text-xs text-[#A5A8B3] font-tech">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E7FF39]" />
                <span className="text-white tracking-wider font-semibold">HYDERABAD PILOT</span>
                <span>• 5 TARGET ZONES</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E7FF39]" />
                <span className="text-white tracking-wider font-semibold">100% ELECTRIC</span>
                <span>• ZERO EMISSION FLEET</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E7FF39]" />
                <span className="text-white tracking-wider font-semibold">PROPOSED PLATFORM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Clean Transparent Scooter (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Backdrop Ring */}
            <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-[#24212C] blur-3xl -z-10" />
            <div className="absolute w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] rounded-full border border-[#E7FF39]/20 animate-pulse -z-10" />

            {/* Scooter Graphic Container */}
            <div className="relative w-full max-w-lg lg:max-w-none group">
              <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/adryd-scooter-hero.png"
                  alt="ADRYD Electric Advertising & Product Showcase Scooter"
                  width={1004}
                  height={731}
                  priority
                  className="w-full h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] filter contrast-105"
                />

                {/* Ground Shadow Glow */}
                <div className="w-3/4 h-6 mx-auto -mt-3 bg-[#0C0D12]/95 rounded-full blur-md" />
              </div>

              {/* Floating Tech Stat Pill 1: Mobile Showcase */}
              <div className="hidden xs:flex absolute -top-4 left-0 sm:left-4 bg-[#17191F]/90 backdrop-blur-md border border-[#353740] px-3.5 py-2.5 rounded-xl shadow-2xl items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-tech uppercase text-[#A5A8B3]">Product Discovery</div>
                  <div className="text-xs font-heading font-bold text-white whitespace-nowrap">
                    Live Mobile Showcases
                  </div>
                </div>
              </div>

              {/* Floating Tech Stat Pill 2: Frictionless QR Commerce */}
              <div className="hidden xs:flex absolute -bottom-4 right-0 sm:right-6 bg-[#17191F]/90 backdrop-blur-md border border-[#353740] px-3.5 py-2.5 rounded-xl shadow-2xl items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#24212C] border border-[#E7FF39]/40 flex items-center justify-center text-[#E7FF39] shrink-0">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-tech uppercase text-[#A5A8B3]">Connected Commerce</div>
                  <div className="text-xs font-heading font-bold text-white whitespace-nowrap">
                    Scan • Pre-Order • Deliver
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Extended Brand Line Strip */}
      <div className="mt-12 w-full border-y border-[#353740] bg-[#17191F]/70 py-3 backdrop-blur-md overflow-hidden">
        <div className="flex items-center justify-around gap-8 text-[11px] sm:text-xs font-tech font-bold uppercase tracking-widest text-[#F2F3F5] animate-pulse">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            RIDE
          </span>
          <span className="text-[#353740]">/</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            PROMOTE
          </span>
          <span className="text-[#353740]">/</span>
          <span className="flex items-center gap-2 text-[#E7FF39]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            SHOWCASE
          </span>
          <span className="text-[#353740]">/</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            SELL
          </span>
          <span className="text-[#353740]">/</span>
          <span className="flex items-center gap-2 text-[#E7FF39]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            PRE-ORDER
          </span>
          <span className="text-[#353740]">/</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            DELIVER
          </span>
          <span className="text-[#353740]">/</span>
          <span className="flex items-center gap-2 text-[#E7FF39]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            GROW
          </span>
        </div>
      </div>
    </section>
  );
}
