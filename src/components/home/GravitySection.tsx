'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const GravityPhysicsCanvas = dynamic(
  () => import('@/components/3d/GravityPhysicsCanvas'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-[#041220]/75 border border-[#0A9BE0]/30 flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#0A9BE0] border-t-transparent animate-spin" />
        <span className="text-xs font-semibold text-[#E2E8F0]">Loading 3D Physics Sandbox...</span>
      </div>
    ),
  }
);

export default function GravitySection() {
  return (
    <section className="py-20 lg:py-28 relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#041220]/80 border border-[#0A9BE0]/30 text-xs font-semibold text-[#0A9BE0]">
              <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
              <span>Real-World Presence &amp; Tangible Impact</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              CREATIVE IDEAS.{' '}
              <span className="text-[#B4F000] text-glow-chartreuse">REAL-WORLD IMPACT.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#E2E8F0] max-w-2xl leading-relaxed font-normal">
              Every ADRYD campaign brings digital concepts into the physical world. Watch our showcase units settle into urban streets with tangible weight, color and presence.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              href="/book-campaign"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] text-xs font-black transition-all shadow-[0_4px_20px_rgba(180,240,0,0.35)]"
            >
              <span>Bring Your Products to the Streets</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3D Physics Canvas Sandbox */}
        <GravityPhysicsCanvas />

        {/* Supporting Micro-Highlights in Black × Electric Blue × Chartreuse Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-5 rounded-2xl bg-[#041220]/80 backdrop-blur-xl border border-[#0A9BE0]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B4F000] mb-1">01 • Tangible Encounters</div>
            <p className="text-xs text-[#E2E8F0] leading-relaxed">
              Customers interact with real merchandise, samples, and physical displays rather than scrolling past pixels.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#051C33]/70 backdrop-blur-xl border border-[#0A9BE0]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0A9BE0] mb-1">02 • Zero Friction Commerce</div>
            <p className="text-xs text-[#E2E8F0] leading-relaxed">
              Instant QR scanning enables real-time orders, pre-order reserves, and product inquiries on the spot.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#041220]/80 backdrop-blur-xl border border-[#0A9BE0]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B4F000] mb-1">03 • City-Level Momentum</div>
            <p className="text-xs text-[#E2E8F0] leading-relaxed">
              Targeted corridors across Hyderabad deliver repetitive, high-recall impressions where consumers live and shop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
