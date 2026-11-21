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
      <div className="w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-[#F6FAFC] border border-[#DCECF2] flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#00A8C8] border-t-transparent animate-spin" />
        <span className="text-xs font-semibold text-[#637786]">Loading 3D Physics Sandbox...</span>
      </div>
    ),
  }
);

export default function GravitySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#DCECF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header per prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF9FD] border border-[#D5EFF7] text-xs font-semibold text-[#00A8C8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-World Presence &amp; Tangible Impact</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#172B3A] tracking-tight uppercase">
              CREATIVE IDEAS.{' '}
              <span className="text-[#00A8C8]">REAL-WORLD IMPACT.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#637786] max-w-2xl leading-relaxed font-normal">
              Every ADRYD campaign brings digital concepts into the physical world. Watch our showcase units settle into urban streets with tangible weight and presence.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              href="/book-campaign"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00A8C8] hover:bg-[#0093AF] text-white text-xs font-bold transition-all shadow-sm hover:shadow"
            >
              <span>Bring Your Products to the Streets</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3D Physics Canvas Sandbox */}
        <GravityPhysicsCanvas />

        {/* Supporting Micro-Highlights in Palapitta Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-5 rounded-2xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00A8C8] mb-1">01 • Tangible Encounters</div>
            <p className="text-xs text-[#637786] leading-relaxed">
              Customers interact with real merchandise, samples, and physical displays rather than scrolling past pixels.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1756C1] mb-1">02 • Zero Friction Commerce</div>
            <p className="text-xs text-[#637786] leading-relaxed">
              Instant QR scanning enables real-time orders, pre-order reserves, and product inquiries on the spot.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#F6FAFC] border border-[#DCECF2]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#123C83] mb-1">03 • City-Level Momentum</div>
            <p className="text-xs text-[#637786] leading-relaxed">
              Targeted corridors across Hyderabad deliver repetitive, high-recall impressions where consumers live and shop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
