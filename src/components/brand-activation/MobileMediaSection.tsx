'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Tv, ShoppingBag, Wrench, Shield, Check } from 'lucide-react';

const VIEWS = [
  {
    id: 'led',
    label: 'LED Advertising Side',
    icon: <Tv className="w-4 h-4" />,
    badge: 'High-Impact Digital Screen',
    headline: 'High-Resolution Moving Digital Billboard',
    desc: 'High-brightness exterior LED displays broadcasting video lookbooks, product offers, brand commercials, and dynamic QR codes at eye level along heavy traffic corridors.',
    highlights: [
      'Daylight-visible ultra-bright LED video wall',
      'Remote cloud-scheduled video playlists & promo loops',
      'Dynamic flash-sale announcements & live QR codes',
      'Replaces static roadside billboards with moving presence',
    ],
  },
  {
    id: 'display',
    label: 'Product Display Side',
    icon: <ShoppingBag className="w-4 h-4" />,
    badge: 'Transparent Showcase Box',
    headline: 'Weatherproof Daylight Showroom Capsule',
    desc: 'Backlit, crystal-clear transparent display capsules mounting actual physical apparel, luxury bags, footwear, and consumer goods directly onto the vehicle chassis.',
    highlights: [
      'Weather-sealed transparent polycarbonate casing',
      'Interior 360-degree LED showcase spotlighting',
      'Prominently displays premium shirts, shoes & lifestyle goods',
      'Instant customer inspection without entering a store',
    ],
  },
  {
    id: 'internal',
    label: 'Internal Operations',
    icon: <Wrench className="w-4 h-4" />,
    badge: 'Mobile POS & Inventory',
    headline: 'Self-Sustained Mobile Retail Hub',
    desc: 'Internal vehicle compartment engineered for secure inventory stocking, instant contactless soundbox payments, sample wardrobe reserves, and battery power management.',
    highlights: [
      'Instant UPI payment soundbox checkout',
      'Micro-inventory compartment for immediate purchases',
      'Garment steamer & promoter staging accessories',
      'Zero emissions electric powertrain & auxiliary battery pack',
    ],
  },
];

export default function MobileMediaSection() {
  const [activeView, setActiveView] = useState('led');
  const currentView = VIEWS.find((v) => v.id === activeView) || VIEWS[0];

  return (
    <section id="mobile-media" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mobile LED &amp; Direct Commerce Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            A MOVING SHOWROOM.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The proposed ADRYD mobile media vehicle combines digital video billboards, physical product capsules, and mobile checkout operations into an electric mobility chassis.
          </p>
        </div>

        {/* 3-View Interactive Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar">
          {VIEWS.map((v) => {
            const isActive = activeView === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveView(v.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-[#0A9BE0] text-white shadow-[0_0_20px_rgba(10,155,224,0.4)]'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {v.icon}
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive View Display Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto p-8 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-2xl">
          
          {/* Framed Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-72 sm:h-80 rounded-2xl bg-[#010810] border border-[#0A9BE0]/30 overflow-hidden flex items-center justify-center p-4">
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#0A9BE0]/60 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#0A9BE0]/60 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#0A9BE0]/60 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#0A9BE0]/60 pointer-events-none" />

            <div className="relative w-full h-full">
              <Image
                src="/images/brand-activation/promoters-standee-hero.jpg"
                alt={currentView.headline}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#B4F000]">
              {currentView.badge}
            </div>
          </div>

          {/* Description & Highlights (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#0A9BE0] font-bold">
                {currentView.badge}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {currentView.headline}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentView.desc}
            </p>

            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <span className="text-[11px] uppercase font-mono text-white/50 block font-bold">
                Specifications &amp; Capabilities
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                {currentView.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 font-mono">
          *Proposed premium vehicle configuration subject to municipal electric vehicle display permissions, corridor scheduling, and fleet allocation.
        </div>

      </div>
    </section>
  );
}
