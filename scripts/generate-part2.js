const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components', 'brand-activation');

// 2. BrandActivationHero.tsx
const heroContent = `'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Zap, TrendingUp, Users } from 'lucide-react';

export default function BrandActivationHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black text-white">
      {/* Background Energy Ribbons & Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#0A9BE0]/20 via-[#B4F000]/15 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#0A9BE0]/15 blur-[100px] rounded-full" />
        
        {/* Subtle SVG Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: \`linear-gradient(to right, #0A9BE0 1px, transparent 1px), linear-gradient(to bottom, #0A9BE0 1px, transparent 1px)\`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#041426] border border-[#0A9BE0]/40 text-[#74D7FF] text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(10,155,224,0.25)]"
        >
          <Sparkles className="w-4 h-4 text-[#B4F000] animate-pulse" />
          <span className="tracking-wide uppercase font-mono text-[11px] sm:text-xs">
            ADRYD BRAND ACTIVATION &amp; COMMERCE NETWORK
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] max-w-5xl mx-auto uppercase"
        >
          <span className="block text-white">DON&apos;T JUST ADVERTISE.</span>
          <span className="block mt-2 bg-gradient-to-r from-[#B4F000] via-[#74D7FF] to-[#0A9BE0] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(180,240,0,0.3)]">
            ACTIVATE YOUR BRAND.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto mt-6 leading-relaxed font-normal"
        >
          A next-generation business growth platform designed to connect mobility, human promotion, direct sales, affiliate marketing and nationwide brand experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button
            type="button"
            onClick={() => scrollToSection('enquire')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c5fc1b] text-black font-black text-sm sm:text-base shadow-[0_4px_25px_rgba(180,240,0,0.35)] hover:shadow-[0_6px_30px_rgba(180,240,0,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Launch Your Brand</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('opportunities')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-white/15 hover:border-[#0A9BE0]/40 transition-all"
          >
            <Compass className="w-4 h-4 text-[#0A9BE0]" />
            <span>Explore Opportunities</span>
          </button>
        </motion.div>

        {/* 4 Pillars Quick Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-14"
        >
          <div className="p-4 rounded-2xl bg-[#030B14]/80 border border-[#0A9BE0]/20 text-center">
            <span className="text-2xl sm:text-3xl font-black text-[#B4F000] block">12</span>
            <span className="text-xs font-semibold text-[#94A3B8] mt-1 block">Promotion Vectors</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#030B14]/80 border border-[#0A9BE0]/20 text-center">
            <span className="text-2xl sm:text-3xl font-black text-[#0A9BE0] block">03</span>
            <span className="text-xs font-semibold text-[#94A3B8] mt-1 block">Synergistic Engines</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#030B14]/80 border border-[#0A9BE0]/20 text-center">
            <span className="text-2xl sm:text-3xl font-black text-[#74D7FF] block">10</span>
            <span className="text-xs font-semibold text-[#94A3B8] mt-1 block">National Metro Hubs</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#030B14]/80 border border-[#0A9BE0]/20 text-center">
            <span className="text-2xl sm:text-3xl font-black text-white block">90%</span>
            <span className="text-xs font-semibold text-[#94A3B8] mt-1 block">Direct Creator Revenue</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`;

// 3. SectionNavigation.tsx
const navContent = `'use client';

import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'advantage', label: 'Overview' },
  { id: 'opportunities', label: '12 Vectors' },
  { id: 'engines', label: '3 Engines' },
  { id: 'divisions', label: '5 Divisions' },
  { id: 'fashion', label: 'Fashion Connect' },
  { id: 'journey', label: 'Customer Journey' },
  { id: 'affiliate', label: 'Affiliate Network' },
  { id: 'mobile-media', label: 'Moving Media' },
  { id: 'footfall', label: 'Footfall' },
  { id: 'pre-orders', label: 'Pre-Orders' },
  { id: 'travel', label: 'Travel Collabs' },
  { id: 'national', label: 'National Reach' },
  { id: 'packages', label: 'Packages' },
  { id: 'revenue', label: 'Revenue Split' },
  { id: 'roi-calculator', label: 'ROI Calculator' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'enquire', label: 'Get Started' },
];

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState('advantage');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[64px] sm:top-[72px] z-30 w-full bg-[#000000]/90 backdrop-blur-xl border-y border-[#0A9BE0]/20 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollTo(sec.id)}
                className={\`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 \${
                  isActive
                    ? 'bg-[#B4F000] text-black shadow-[0_2px_10px_rgba(180,240,0,0.35)]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/10'
                }\`}
              >
                {sec.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
`;

// 4. TheAdrydAdvantage.tsx
const advantageContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, Sparkles, Check, XCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SHOWROOM_INVESTMENT } from '@/data/brandActivationData';

export default function TheAdrydAdvantage() {
  return (
    <section id="advantage" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>The ADRYD Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            YOUR BRAND. BEYOND THE SHOWROOM.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            ADRYD combines active mobility, personal human interaction, digital product discovery and live commerce into one high-conversion system.
          </p>
        </div>

        {/* 2-Column Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Traditional Model */}
          <div className="p-8 rounded-3xl bg-[#040B13] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-red-400 block font-bold">Traditional Approach</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Physical Retail Showroom</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-300">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Heavy Upfront Capital:</strong> ₹4,00,000+ sunk into security deposits, interior fitouts, lighting and fixtures.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Fixed-Location Dependency:</strong> Waiting for walk-in shoppers who happen to pass one specific storefront.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Disconnected Marketing:</strong> Separate budget required for print ads, billboards, and local social boosts.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Inventory Risk:</strong> Must manufacture complete inventory runs before knowing if styles resonate with local shoppers.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
              High risk commitment before verifying product-market fit.
            </div>
          </div>

          {/* Right Column: ADRYD Activation Model */}
          <div className="p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/50 shadow-[0_0_40px_rgba(10,155,224,0.15)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B4F000]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#0A9BE0]/30 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#B4F000] block font-bold">ADRYD Model</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Mobile Brand Activation</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Zero Showroom Overhead:</strong> Deploy campaigns starting at ₹30,000 with zero long-term lease liabilities.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Active Transit Saturation:</strong> Branded EV fleets and promoters proactively target high-traffic tech parks &amp; high streets.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Live Promoters Wearing Apparel:</strong> Customers touch, feel, and see fabric styled in daylight conditions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Pre-Orders &amp; Affiliate Attribution:</strong> Collect advance deposits to validate demand, backed by 12-month affiliate repeat sales.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A9BE0]/30 text-xs text-[#74D7FF] font-semibold flex items-center justify-between">
              <span>Rapid multi-corridor deployment within 48 hours</span>
              <span className="text-[#B4F000] font-bold">73.6% Capital Saved</span>
            </div>
          </div>
        </div>

        {/* Validation Callout Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#04101D] border border-[#0A9BE0]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B4F000]" />
              <span>Market Validation Before Heavy Capital Commitment</span>
            </h4>
            <p className="text-sm text-[#94A3B8]">
              ADRYD does not replace permanent flagship retail. We empower entrepreneurs to test consumer appetite, sizing preferences, and pricing elasticity on city streets before signing multi-year commercial leases.
            </p>
          </div>
          <a
            href="#enquire"
            className="px-6 py-3 rounded-full bg-[#0A9BE0] hover:bg-[#0889c7] text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md transition-all shrink-0"
          >
            Validate Demand Now →
          </a>
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(dir, 'BrandActivationHero.tsx'), heroContent, 'utf8');
fs.writeFileSync(path.join(dir, 'SectionNavigation.tsx'), navContent, 'utf8');
fs.writeFileSync(path.join(dir, 'TheAdrydAdvantage.tsx'), advantageContent, 'utf8');

console.log('Created BrandActivationHero, SectionNavigation, and TheAdrydAdvantage');
