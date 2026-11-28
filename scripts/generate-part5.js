const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components', 'brand-activation');

// 12. FootfallSection.tsx
const footfallContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, TrendingUp, Users, QrCode, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { FOOTFALL_LOCATIONS, FUNNEL_METRICS } from '@/data/brandActivationData';

export default function FootfallSection() {
  return (
    <section id="footfall" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Hyperlocal Footfall Capture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            GO WHERE YOUR CUSTOMERS ARE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Intercept high-density urban footfall corridors during peak lunch and evening shopping hours. Transform passive pedestrians into active brand patrons.
          </p>
        </div>

        {/* 10 Footfall Locations Grid */}
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-wider text-center text-white/60 mb-6 font-mono">
            Target Deployment Corridors &amp; High-Footfall Zones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {FOOTFALL_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B4F000] shrink-0" />
                  <h4 className="text-xs font-bold text-white">{loc.name}</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Day Campaign Conversion Funnel */}
        <div className="p-8 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-[#B4F000] font-bold">Illustrative Conversion Funnel</span>
              <h3 className="text-2xl font-black text-white mt-0.5">3-Day Saturation Campaign Metrics</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold self-start sm:self-auto">
              BENCHMARK SIMULATION
            </span>
          </div>

          <div className="space-y-4">
            {FUNNEL_METRICS.map((m, idx) => {
              const widthPct = Math.max(15, 100 - idx * 18);
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">{m.stage}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-white/60 text-xs">{m.pct}</span>
                      <span className="font-mono font-black text-base text-[#B4F000]">
                        {m.count.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/[0.05] overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: \`\${widthPct}%\`,
                        backgroundColor: m.color,
                      }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400">{m.label}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#010810] p-4 rounded-2xl border border-white/10">
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-400 block">Illustrative Output</span>
              <span className="text-xl font-black text-white">60 Completed Orders × ₹1,500 AOV</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-mono uppercase text-[#B4F000] block">Gross Product Sales</span>
              <span className="text-2xl font-black text-[#B4F000]">₹90,000</span>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-slate-500 font-mono text-center">
            *Planning conversion targets based on commercial proposal modeling. Actual performance varies with product category, pricing, season, and corridor permissions.
          </div>
        </div>

      </div>
    </section>
  );
}
`;

// 13. MobileMediaSection.tsx
const mediaContent = `'use client';

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
                className={\`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all \${
                  isActive
                    ? 'bg-[#0A9BE0] text-white shadow-[0_0_20px_rgba(10,155,224,0.4)]'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }\`}
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
`;

// 14. PreOrderSection.tsx
const preOrderContent = `'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PreOrderSection() {
  const [orders, setOrders] = useState(200);
  const [productValue, setProductValue] = useState(1200);
  const [deposit, setDeposit] = useState(300);

  const potentialValue = orders * productValue;
  const advanceCashflow = orders * deposit;
  const balancePayable = potentialValue - advanceCashflow;

  return (
    <section id="pre-orders" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Pre-Order &amp; Demand Validation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            SELL BEFORE YOU SCALE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Eliminate deadstock risk. Demonstrate physical fabric samples and lookbooks on city streets to gather verified customer pre-orders and advance cash deposits before bulk production.
          </p>
        </div>

        {/* 2-Column: Workflow + Interactive Financial Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 6-Step Pre-Order Workflow (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-black text-white uppercase mb-2">
              The 6-Step Demand Validation Sequence
            </h3>

            <div className="space-y-3">
              {[
                { step: '01', title: 'Upload New Collection', desc: 'Create digital lookbook with high-res images, sizing specs, and targeted launch date.' },
                { step: '02', title: 'Curate Street Samples', desc: 'Provide 5–10 sample garments for brand promoters to wear and showcase in daylight.' },
                { step: '03', title: 'Demonstrate to Pedestrians', desc: 'Shoppers feel fabric texture, examine stitching, and view lookbook on mobile.' },
                { step: '04', title: 'Collect Verified Pre-Orders', desc: 'Customer selects size & color, booking the reservation via mobile form.' },
                { step: '05', title: 'Confirm Advance Deposit', desc: 'Customer pays advance reservation deposit (e.g., ₹300) via instant UPI.' },
                { step: '06', title: 'Manufacture & Ship', desc: 'Manufacture only confirmed quantities, delivering items with verified cash on delivery balance.' },
              ].map((s) => (
                <div key={s.step} className="p-3.5 rounded-xl bg-[#030C16] border border-white/10 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{s.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calculator (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/40 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#B4F000]" />
                <h3 className="text-lg font-bold text-white">Pre-Order Cashflow Simulator</h3>
              </div>
              <span className="text-xs font-mono text-[#0A9BE0]">LIVE MODEL</span>
            </div>

            {/* Sliders */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Verified Pre-Orders:</span>
                  <span className="font-mono text-[#B4F000] font-bold">{orders} Orders</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={orders}
                  onChange={(e) => setOrders(Number(e.target.value))}
                  className="w-full accent-[#B4F000] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Average Product Retail Value:</span>
                  <span className="font-mono text-white font-bold">₹{productValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={productValue}
                  onChange={(e) => setProductValue(Number(e.target.value))}
                  className="w-full accent-[#0A9BE0] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Advance Deposit per Order:</span>
                  <span className="font-mono text-[#74D7FF] font-bold">₹{deposit.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full accent-[#74D7FF] cursor-pointer"
                />
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.04] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Potential Gross Order Value</span>
                  <span className="text-xs text-slate-300">(Orders × Product Value)</span>
                </div>
                <span className="text-xl font-black text-white font-mono">
                  ₹{potentialValue.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#B4F000] font-mono block font-bold">Advance Cashflow Collected</span>
                  <span className="text-xs text-slate-300">(Orders × Deposit Amount)</span>
                </div>
                <span className="text-2xl font-black text-[#B4F000] font-mono">
                  ₹{advanceCashflow.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Balance Payable on Delivery</span>
                  <span className="text-xs text-slate-300">(Collected upon parcel handover)</span>
                </div>
                <span className="text-lg font-bold text-slate-200 font-mono">
                  ₹{balancePayable.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#B4F000] inline-block mr-1" />
              <span>Customer deposits held safely under agreed delivery fulfillment and refund policies.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
`;

// 15. NationalExpansionSection.tsx
const expansionContent = `'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, ChevronRight, ChevronDown, ChevronUp, Globe2, Building2 } from 'lucide-react';
import { EXPANSION_CITIES, EXPANSION_PHASES, ExpansionCity } from '@/data/brandActivationData';

export default function NationalExpansionSection() {
  const [selectedCity, setSelectedCity] = useState<ExpansionCity>(EXPANSION_CITIES[0]);
  const [breakdownOpen, setBreakdownOpen] = useState(false);

  return (
    <section id="national" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proposed National Expansion Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            ONE BRAND. MULTIPLE CITIES.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A synchronized multi-city campaign network deploying 140 promoters across 10 top metropolitan commerce hubs. Synchronized brand launches without permanent real estate overhead.
          </p>
        </div>

        {/* 2-Column: Interactive India Map + City Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* India SVG Map (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs font-mono uppercase text-[#0A9BE0] font-bold">10 Metros • 140 Promoters</span>
              <span className="text-[11px] font-mono text-white/50">CLICK CITY NODE TO INSPECT</span>
            </div>

            {/* SVG Visual Container */}
            <div className="relative w-full aspect-[4/3] bg-[#010810] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Connecting Route Lines */}
                <path
                  d="M48,62 L44,74 L53,77 L42,86 L33,60 L30,56 L26,45 L34,36 L38,30 L73,46 Z"
                  fill="none"
                  stroke="#0A9BE0"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  className="opacity-40"
                />

                {/* City Nodes */}
                {EXPANSION_CITIES.map((city) => {
                  const isSelected = selectedCity.id === city.id;
                  return (
                    <g
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      className="cursor-pointer group"
                    >
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isSelected ? 4 : 2.5}
                        fill={isSelected ? '#B4F000' : '#0A9BE0'}
                        className="transition-all duration-200"
                      />
                      {isSelected && (
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r={6}
                          fill="none"
                          stroke="#B4F000"
                          strokeWidth="0.8"
                          className="animate-ping"
                        />
                      )}
                      <text
                        x={city.x + 3.5}
                        y={city.y + 1}
                        fill={isSelected ? '#FFFFFF' : '#94A3B8'}
                        fontSize="3.2"
                        fontFamily="monospace"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Selected City Details Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#030E1B] border-2 border-[#0A9BE0]/40 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#B4F000] font-bold">Phase {selectedCity.phase} Metro</span>
                <h3 className="text-3xl font-black text-white mt-0.5">{selectedCity.name}</h3>
                <span className="text-xs text-slate-400 font-mono">{selectedCity.state}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-[#0A9BE0] font-mono block">
                  {selectedCity.promoters}
                </span>
                <span className="text-[10px] text-slate-400 font-mono block">Promoters Allocated</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/[0.04]">
                <strong className="text-white block mb-1">Target Retail Corridors:</strong>
                <p className="text-slate-300 leading-relaxed">{selectedCity.corridors}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04]">
                <strong className="text-white block mb-1">Campaign Strategy &amp; Audience:</strong>
                <p className="text-slate-300 leading-relaxed">{selectedCity.focus}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Ready for booking</span>
              <a href="#enquire" className="text-[#B4F000] font-bold hover:underline">
                Select {selectedCity.name} →
              </a>
            </div>
          </div>
        </div>

        {/* 4 Expansion Phases Grid */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-center text-white/60 mb-6 font-mono">
            4-Phase Rollout Roadmap
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPANSION_PHASES.map((ph) => (
              <div key={ph.phase} className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#B4F000]">Phase {ph.phase}</span>
                  <span className="text-[10px] font-mono text-white/50">{ph.timeline}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{ph.title}</h4>
                <p className="text-xs text-[#0A9BE0] font-semibold mb-2">{ph.cities}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{ph.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable National Campaign Simulation */}
        <div className="p-6 rounded-2xl bg-[#040E1B] border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Illustrative Pan-India Campaign Performance Example
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Campaign Budget: ₹2,00,000 across 10 Cities | 320 Orders | ₹4,80,000 Gross Sales Target
              </p>
            </div>
            <button
              type="button"
              onClick={() => setBreakdownOpen(!breakdownOpen)}
              className="text-xs font-bold text-[#0A9BE0] hover:text-[#B4F000] flex items-center gap-1 transition-colors"
            >
              <span>{breakdownOpen ? 'Hide Simulation' : 'View City-Wise Split'}</span>
              {breakdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {breakdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6 border-t border-white/10 mt-4 overflow-x-auto text-xs sm:text-sm text-slate-300"
              >
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                      <th className="py-2 px-2">City</th>
                      <th className="py-2 px-2">Budget Allocated</th>
                      <th className="py-2 px-2 text-center">Promoters</th>
                      <th className="py-2 px-2 text-center">Projected Orders</th>
                      <th className="py-2 px-2 text-right">Projected Sales (AOV ₹1,500)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    {EXPANSION_CITIES.map((c) => {
                      const cityOrders = c.promoters * 2.3;
                      const citySales = cityOrders * 1500;
                      return (
                        <tr key={c.id}>
                          <td className="py-2.5 px-2 text-white font-medium">{c.name}</td>
                          <td className="py-2.5 px-2 text-slate-300">₹{(c.promoters * 1428).toFixed(0)}</td>
                          <td className="py-2.5 px-2 text-center text-[#B4F000] font-bold">{c.promoters}</td>
                          <td className="py-2.5 px-2 text-center text-[#0A9BE0]">{Math.round(cityOrders)}</td>
                          <td className="py-2.5 px-2 text-right text-white">₹{Math.round(citySales).toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(dir, 'FootfallSection.tsx'), footfallContent, 'utf8');
fs.writeFileSync(path.join(dir, 'MobileMediaSection.tsx'), mediaContent, 'utf8');
fs.writeFileSync(path.join(dir, 'PreOrderSection.tsx'), preOrderContent, 'utf8');
fs.writeFileSync(path.join(dir, 'NationalExpansionSection.tsx'), expansionContent, 'utf8');

console.log('Created FootfallSection, MobileMediaSection, PreOrderSection, and NationalExpansionSection');
