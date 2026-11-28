const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components', 'brand-activation');

// 8. FashionConnectSection.tsx
const fashionContent = `'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ChevronDown, ChevronUp, QrCode, Shield, Shirt, UserCheck } from 'lucide-react';
import { FASHION_CATEGORIES, FASHION_WORKFLOW_STEPS } from '@/data/brandActivationData';

export default function FashionConnectSection() {
  const [policiesOpen, setPoliciesOpen] = useState(false);

  return (
    <section id="fashion" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>ADRYD Fashion Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            YOUR PRODUCTS BECOME THE ADVERTISEMENT.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Eliminate sterile mannequins and studio models. Trained brand promoters wear your shirts, dresses, jackets, and footwear during prime pedestrian street hours.
          </p>
        </div>

        {/* Fashion Categories Badges Grid */}
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-wider text-center text-white/60 mb-6 font-mono">
            Supported Apparel &amp; Lifestyle Categories
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {FASHION_CATEGORIES.map((cat, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-[#040E1B] border border-white/10 hover:border-[#0A9BE0]/40 text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column: 10-Step Sequence + Illustrative Promoter Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 10-Step Sequential Storyboard (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-2">
              <Shirt className="w-5 h-5 text-[#B4F000]" />
              <span>10-Step Street-to-Sale Storyboard</span>
            </h3>

            <div className="space-y-2.5">
              {FASHION_WORKFLOW_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-3.5 rounded-xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-colors flex items-start gap-3.5"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#0A9BE0]/15 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustrative Promoter Profile Card (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-[0_0_40px_rgba(10,155,224,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B4F000] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase text-[#B4F000]">Active Street Ambassador</span>
              </div>
              <span className="text-xs font-mono text-white/50">HYDERABAD CORRIDOR</span>
            </div>

            {/* Promoter Visual Identity */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0A9BE0]/20 border border-[#0A9BE0]/40 flex items-center justify-center text-[#0A9BE0] shrink-0 font-black text-xl">
                AF
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Vikram Sharma</h4>
                <div className="text-xs text-[#0A9BE0] font-mono mt-0.5">Promoter ID: ADRYD-F101</div>
                <div className="text-xs text-slate-400 mt-0.5">Outfit Spec: Summer Linen Co-ord (SKU-F01)</div>
              </div>
            </div>

            {/* Conceptual QR Code Display */}
            <div className="p-6 rounded-2xl bg-[#010810] border border-[#0A9BE0]/30 text-center mb-6">
              <div className="w-32 h-32 mx-auto rounded-xl bg-white p-2.5 flex items-center justify-center shadow-md">
                <QrCode className="w-full h-full text-black" />
              </div>
              <div className="mt-3 text-xs font-mono text-[#B4F000] font-semibold">
                SCAN TO VIEW OUTFIT LOOKBOOK
              </div>
              <div className="text-[11px] text-white/50 font-mono mt-0.5">
                (Demonstration QR Code • Attribution ID: F101-HYD)
              </div>
            </div>

            {/* Real-Time Telemetry Simulation */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2">
              <div className="p-2.5 rounded-xl bg-white/[0.04]">
                <span className="text-lg font-black text-white block">184</span>
                <span className="text-[10px] text-slate-400 font-mono block">QR Scans</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04]">
                <span className="text-lg font-black text-[#B4F000] block">42</span>
                <span className="text-[10px] text-slate-400 font-mono block">Inquiries</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04]">
                <span className="text-lg font-black text-[#0A9BE0] block">15</span>
                <span className="text-[10px] text-slate-400 font-mono block">Direct Orders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Safeguards & Product Protection Policy */}
        <div className="mt-12 p-6 rounded-2xl bg-[#040E1B] border border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[#0A9BE0]" />
              <h4 className="text-sm sm:text-base font-bold text-white">
                Apparel Security, Sanitization &amp; Return Protocol
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setPoliciesOpen(!policiesOpen)}
              className="text-xs font-bold text-[#0A9BE0] hover:text-[#B4F000] flex items-center gap-1 transition-colors"
            >
              <span>{policiesOpen ? 'Hide Policies' : 'View Protocol Details'}</span>
              {policiesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {policiesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6 border-t border-white/10 mt-4 space-y-3 text-xs sm:text-sm text-slate-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-white block mb-1">Product Ownership &amp; Return:</strong>
                    Sample garments remain 100% property of the brand partner. Garments are systematically inventoried, tagged, and returned post-campaign.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-white block mb-1">Sanitization &amp; Care:</strong>
                    All apparel undergoes professional eco-friendly steam sanitization before and between promoter allocations.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-white block mb-1">Damage &amp; Loss Coverage:</strong>
                    ADRYD maintains structured sample protection agreements covering accidental tears, stains, or transit damage at agreed replacement value.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-white block mb-1">Promoter Code of Conduct:</strong>
                    Promoters strictly adhere to non-smoking, clean hydration, and professional posture guidelines while wearing partner apparel.
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
`;

// 9. QRCustomerJourney.tsx
const journeyContent = `'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, QrCode, BookOpen, CheckSquare, ShoppingCart, CreditCard, Award } from 'lucide-react';

const STEPS = [
  { step: '01', title: 'Discover Product', desc: 'Shopper encounters brand promoter or moving display unit on urban street.', icon: <Eye className="w-4 h-4" /> },
  { step: '02', title: 'Scan Promoter QR', desc: 'Shopper scans promoter\\'s unique lanyard QR code using any smartphone camera.', icon: <QrCode className="w-4 h-4" /> },
  { step: '03', title: 'Browse Digital Lookbook', desc: 'Mobile web catalogue opens instantly with high-res photos, video reels, and sizing charts.', icon: <BookOpen className="w-4 h-4" /> },
  { step: '04', title: 'Select Product & Size', desc: 'Customer selects color, size, and tries physical fabric swatches from promoter.', icon: <CheckSquare className="w-4 h-4" /> },
  { step: '05', title: 'Order or Pre-Order', desc: 'Chooses immediate on-ground delivery or reserves items via pre-order deposit.', icon: <ShoppingCart className="w-4 h-4" /> },
  { step: '06', title: 'Instant UPI Payment', desc: 'Completes touch-free checkout via Google Pay, PhonePe, Paytm, or Card.', icon: <CreditCard className="w-4 h-4" /> },
  { step: '07', title: 'Promoter Attribution', desc: 'System automatically tags transaction to promoter ID for 12-month commission tracking.', icon: <Award className="w-4 h-4" /> },
];

export default function QRCustomerJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="journey" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frictionless Discovery Funnel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            SEE. SCAN. SHOP.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The 7-step street-to-checkout journey connecting real-world pedestrian interest with digital commerce and instant promoter attribution.
          </p>
        </div>

        {/* 7-Step Journey Interactive Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {STEPS.map((s, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={s.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={\`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer \${
                  isCurrent
                    ? 'bg-[#031526] border-[#0A9BE0] shadow-[0_0_25px_rgba(10,155,224,0.3)] scale-[1.02]'
                    : 'bg-[#030C16] border-white/10 hover:border-white/20'
                }\`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={\`text-xs font-mono font-bold \${isCurrent ? 'text-[#B4F000]' : 'text-white/50'}\`}>
                      {s.step}
                    </span>
                    <div className={\`w-8 h-8 rounded-lg flex items-center justify-center \${isCurrent ? 'bg-[#0A9BE0]/20 text-[#0A9BE0]' : 'bg-white/5 text-slate-400'}\`}>
                      {s.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{s.desc}</p>
                </div>

                <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Step {idx + 1} of 7</span>
                  {isCurrent && <span className="text-[#B4F000] font-bold">ACTIVE</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Conceptual Note */}
        <div className="mt-8 text-center text-xs text-slate-500 font-mono">
          *Demonstration journey architecture. Production lookbook and checkout modules connect to brand partner eCommerce or ADRYD hosted catalogues.
        </div>

      </div>
    </section>
  );
}
`;

// 10. AffiliateNetworkSection.tsx
const affiliateContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Share2, Award, Calendar, Repeat, ShieldCheck } from 'lucide-react';
import { ILLUSTRATIVE_AFFILIATE_DATA } from '@/data/brandActivationData';

export default function AffiliateNetworkSection() {
  const totalOrders = ILLUSTRATIVE_AFFILIATE_DATA.reduce((acc, row) => acc + row.orders, 0);
  const totalSales = ILLUSTRATIVE_AFFILIATE_DATA.reduce((acc, row) => acc + row.salesValue, 0);
  const totalCommission = ILLUSTRATIVE_AFFILIATE_DATA.reduce((acc, row) => acc + row.commission, 0);

  return (
    <section id="affiliate" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Affiliate &amp; Repeat Commerce</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            ONE CAMPAIGN. CONTINUING OPPORTUNITIES.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Registered campaign promoters don&apos;t disappear after day one. Each promoter receives a persistent affiliate identity, generating sales over a 12-month attribution window.
          </p>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
            <Share2 className="w-5 h-5 text-[#B4F000] mb-3" />
            <h4 className="text-sm font-bold text-white">Unique Promoter IDs</h4>
            <p className="text-xs text-slate-300 mt-1">Lanyard badges &amp; personal QR codes linking directly to brand catalog.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
            <Calendar className="w-5 h-5 text-[#0A9BE0] mb-3" />
            <h4 className="text-sm font-bold text-white">12-Month Attribution</h4>
            <p className="text-xs text-slate-300 mt-1">Customers who scan once remain attributed to the promoter for 1 full year.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
            <Repeat className="w-5 h-5 text-[#74D7FF] mb-3" />
            <h4 className="text-sm font-bold text-white">Repeat-Purchase Equity</h4>
            <p className="text-xs text-slate-300 mt-1">Promoters earn commissions on repeat purchases, incentivizing genuine advocacy.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
            <ShieldCheck className="w-5 h-5 text-white mb-3" />
            <h4 className="text-sm font-bold text-white">Direct Settlement</h4>
            <p className="text-xs text-slate-300 mt-1">Commissions apply strictly to completed, non-refunded retail orders.</p>
          </div>
        </div>

        {/* Illustrative Performance Data Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#03101E] border border-[#0A9BE0]/30 shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-white">Illustrative Affiliate Performance Benchmark</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Sample Campaign: 4 Promoters / ₹2,000 Average Order Value</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-mono font-bold self-start sm:self-auto">
              SAMPLE DATA
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-2">Promoter ID</th>
                  <th className="py-3 px-2">Promoter Name</th>
                  <th className="py-3 px-2 text-center">Orders</th>
                  <th className="py-3 px-2 text-right">Avg Order Value</th>
                  <th className="py-3 px-2 text-right">Gross Sales</th>
                  <th className="py-3 px-2 text-right">Commission (6%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {ILLUSTRATIVE_AFFILIATE_DATA.map((row) => (
                  <tr key={row.promoterId} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-2 font-mono text-[#0A9BE0] font-bold">{row.promoterId}</td>
                    <td className="py-3.5 px-2 font-medium text-white">{row.name}</td>
                    <td className="py-3.5 px-2 text-center font-bold">{row.orders}</td>
                    <td className="py-3.5 px-2 text-right font-mono text-slate-300">₹{row.avgOrderValue.toLocaleString()}</td>
                    <td className="py-3.5 px-2 text-right font-mono font-bold text-white">₹{row.salesValue.toLocaleString()}</td>
                    <td className="py-3.5 px-2 text-right font-mono font-bold text-[#B4F000]">₹{row.commission.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-[#0A9BE0]/40 font-bold text-white text-xs sm:text-sm">
                  <td className="py-4 px-2 uppercase font-mono" colSpan={2}>Campaign Total</td>
                  <td className="py-4 px-2 text-center text-[#B4F000]">{totalOrders}</td>
                  <td className="py-4 px-2 text-right font-mono text-slate-300">₹2,000</td>
                  <td className="py-4 px-2 text-right font-mono text-[#74D7FF]">₹{totalSales.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right font-mono text-[#B4F000]">₹{totalCommission.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
            <span className="font-bold text-white">Legal &amp; Operational Qualification:</span> Illustrative affiliate performance figures provided for financial modeling. Commissions apply exclusively to eligible, non-refunded transactions under signed partner agreements. ADRYD does not guarantee specific order volumes or lifetime income.
          </div>
        </div>

      </div>
    </section>
  );
}
`;

// 11. SocialMediaSection.tsx
const socialContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Video, Camera, Users, Globe, BarChart3, ArrowRight } from 'lucide-react';

export default function SocialMediaSection() {
  return (
    <section id="social" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Viral Social Amplification</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            FROM STREETS TO SCREENS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Every physical street campaign doubles as a high-production daylight studio photoshoot and viral video generator, syndicated across Instagram Reels, YouTube Shorts, and WhatsApp.
          </p>
        </div>

        {/* Illustrative Campaign Production Scope */}
        <div className="p-8 rounded-3xl bg-[#031222] border-2 border-[#0A9BE0]/40 shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#B4F000] font-bold">Illustrative 5-City Production Scope</span>
              <h3 className="text-2xl font-black text-white mt-1">Multi-City Social Content Blitz</h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold self-start sm:self-auto">
              TURNKEY SOCIAL ENGINE
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-3xl sm:text-4xl font-black text-[#B4F000] block">20</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Trained Promoters</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-3xl sm:text-4xl font-black text-[#0A9BE0] block">40</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Dedicated Reels</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-3xl sm:text-4xl font-black text-[#74D7FF] block">100</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Pro Photographs</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-3xl sm:text-4xl font-black text-white block">05</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Influencer Collabs</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-3xl sm:text-4xl font-black text-[#B4F000] block">05</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Target Metros</span>
            </div>
          </div>
        </div>

        {/* Measurable Reporting Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#030C16] border border-white/10">
            <Video className="w-6 h-6 text-[#0A9BE0] mb-3" />
            <h4 className="text-base font-bold text-white">Short-Form Video Production</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Street encounters, customer reactions, styling lookbooks, and behind-the-scenes rider footage edited specifically for 9:16 vertical engagement algorithms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030C16] border border-white/10">
            <Users className="w-6 h-6 text-[#B4F000] mb-3" />
            <h4 className="text-base font-bold text-white">Micro-Influencer Integration</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Local lifestyle creators intercept the campaign fleet on location, capturing authentic unboxing and try-on content for their geo-targeted followers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030C16] border border-white/10">
            <BarChart3 className="w-6 h-6 text-[#74D7FF] mb-3" />
            <h4 className="text-base font-bold text-white">Full-Funnel Reporting</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Transparent telemetry tracking impressions, profile visits, bio QR scans, catalogue inquiries, completed checkouts, and customer acquisition costs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(dir, 'FashionConnectSection.tsx'), fashionContent, 'utf8');
fs.writeFileSync(path.join(dir, 'QRCustomerJourney.tsx'), journeyContent, 'utf8');
fs.writeFileSync(path.join(dir, 'AffiliateNetworkSection.tsx'), affiliateContent, 'utf8');
fs.writeFileSync(path.join(dir, 'SocialMediaSection.tsx'), socialContent, 'utf8');

console.log('Created FashionConnectSection, QRCustomerJourney, AffiliateNetworkSection, and SocialMediaSection');
