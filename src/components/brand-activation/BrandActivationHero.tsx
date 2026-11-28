'use client';

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
            backgroundImage: `linear-gradient(to right, #0A9BE0 1px, transparent 1px), linear-gradient(to bottom, #0A9BE0 1px, transparent 1px)`,
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
