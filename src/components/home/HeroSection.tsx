'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import HeroFuturisticUniverse from '@/components/3d/HeroFuturisticUniverse';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center bg-[#142238] text-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* 1. Cinematic Futuristic Animated Background */}
      <HeroFuturisticUniverse />

      {/* 2. Hero Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-ping" />
          <span>ENTER THE MOVING MARKETING UNIVERSE</span>
        </motion.div>

        {/* Massive Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.98] uppercase max-w-5xl mx-auto"
        >
          <span className="text-white drop-shadow-sm">YOUR BRAND.</span>
          <br />
          <span className="bg-gradient-to-r from-[#38BDF8] via-[#EC4899] to-[#7856FF] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(120,86,255,0.4)]">
            EVERYWHERE.
          </span>
          <br />
          <span className="text-[#38BDF8] drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
            IN MOTION.
          </span>
        </motion.h1>

        {/* Short Supporting Copy per prompt */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-2xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow"
        >
          Turn everyday movement into brand visibility, product discovery and real-world connections.
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7856FF] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-base font-bold shadow-[0_10px_35px_rgba(37,99,235,0.4)] hover:shadow-[0_14px_45px_rgba(120,86,255,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <span>Launch a Campaign</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>

          <a
            href="#the-idea"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 text-base font-semibold transition-all duration-200 hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>Explore ADRYD</span>
          </a>
        </motion.div>

        {/* Micro-Features Floating Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span>Zero Emission Fleet</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>Illuminated Showcases</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
            <span>Instant QR Commerce</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
            <span>Hyderabad Pilot Phase</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#the-idea"
            className="text-slate-400 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
