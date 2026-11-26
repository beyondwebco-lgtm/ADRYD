'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[94vh] lg:min-h-[98vh] flex items-center justify-center bg-transparent text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient Forest Green, Deep Emerald & Electric Lime Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#B4F000]/20 via-[#005522]/30 to-[#65B32E]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#092D19]/60 backdrop-blur-md border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_25px_rgba(180,240,0,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#B4F000] animate-ping" />
          <span>ENTER THE MOVING MARKETING UNIVERSE</span>
        </motion.div>

        {/* Massive Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.98] uppercase max-w-5xl mx-auto"
        >
          <span className="text-white drop-shadow-md">YOUR BRAND.</span>
          <br />
          <span className="bg-gradient-to-r from-[#B4F000] via-[#F4DE26] to-[#65B32E] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_6px_35px_rgba(180,240,0,0.45)]">
            EVERYWHERE.
          </span>
          <br />
          <span className="text-[#B4F000] text-glow-lime drop-shadow-[0_0_40px_rgba(180,240,0,0.55)]">
            IN MOTION.
          </span>
        </motion.h1>

        {/* Short Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-lg sm:text-2xl text-[#E4EBE5] max-w-2xl mx-auto font-normal leading-relaxed drop-shadow"
        >
          Turn everyday urban movement into high-recall brand visibility, product discovery and real-world connections.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/book-campaign"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#092D19] text-base font-black shadow-[0_10px_35px_rgba(180,240,0,0.35)] hover:shadow-[0_14px_45px_rgba(180,240,0,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <span>Launch a Campaign</span>
            <ArrowRight className="w-5 h-5 text-[#092D19]" />
          </Link>

          <a
            href="#the-idea"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-[#B4F000]/25 text-base font-semibold transition-all duration-200 hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-[#B4F000]" />
            <span>Explore ADRYD</span>
          </a>
        </motion.div>

        {/* Micro-Features Floating Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#E4EBE5]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B4F000] shadow-[0_0_8px_#B4F000]" />
            <span>Zero Emission Fleet</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#65B32E] shadow-[0_0_8px_#65B32E]" />
            <span>Illuminated Showcases</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F4DE26] shadow-[0_0_8px_#F4DE26]" />
            <span>Instant QR Commerce</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E4EBE5] shadow-[0_0_8px_#E4EBE5]" />
            <span>Hyderabad Pilot Phase</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#the-idea"
            className="text-slate-300 hover:text-[#B4F000] transition-colors animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
