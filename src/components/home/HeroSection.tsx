'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Compass, Sparkles } from 'lucide-react';

const HeroScooterCanvas = dynamic(
  () => import('@/components/3d/HeroScooterCanvas'),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient Blue & Violet Lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#EAF9FD] rounded-full blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#F0ECFF] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#EAF9FD]/70 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF9FD] border border-[#D5EFF7] text-[#00A8C8] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#7856FF] animate-pulse" />
              <span>THE MOVING MARKETPLACE • HYDERABAD</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-[#172B3A] tracking-tight leading-[1.05] uppercase">
              YOUR BRAND.{' '}
              <br />
              <span className="text-[#00A8C8]">EVERYWHERE</span>{' '}
              <span className="text-[#7856FF]">IT MATTERS.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-[#637786] leading-relaxed max-w-xl font-normal">
              Electric mobility meets live product showcases. Bringing brands, physical sampling and hyperlocal commerce directly to people across Hyderabad.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/book-campaign"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00A8C8] hover:bg-[#0093AF] text-white text-base font-bold shadow-[0_8px_25px_rgba(0,168,200,0.25)] hover:shadow-[0_12px_32px_rgba(0,168,200,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Launch a Campaign</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F0ECFF] hover:bg-[#E4DCFF] text-[#7856FF] border border-[#E4DCFF] text-base font-bold transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#7856FF]" />
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Trust Chips */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-[#637786] font-medium">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#EAF9FD] text-[#00A8C8] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>100% Electric Transit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#F0ECFF] text-[#7856FF] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Hyperlocal Corridors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#EAF9FD] text-[#00A8C8] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Physical Product Showcase</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Palapitta & Violet Electric Scooter with Instant Static Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Visual Canvas Container */}
            <div className="relative w-full aspect-square max-w-[540px] rounded-3xl bg-gradient-to-tr from-[#F7FAFC] via-white to-[#EAF9FD] p-2 sm:p-4 flex items-center justify-center border border-[#DFEAF0] shadow-[0_20px_60px_rgba(120,86,255,0.06)]">
              
              {/* Instant Static Fallback Image - Always rendered underneath so no flash/blank */}
              <div className="absolute inset-0 flex items-center justify-center p-8 z-0">
                <Image
                  src="/images/adryd-scooter-hero.png"
                  alt="ADRYD Palapitta 3D Electric Scooter"
                  width={500}
                  height={500}
                  priority
                  className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain drop-shadow-2xl"
                />
              </div>

              {/* 3D Scooter Canvas Overlay */}
              <div className="w-full h-full relative z-10">
                <HeroScooterCanvas />
              </div>

              {/* Floating Pill Badge 1 (Palapitta Blue) */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute -top-3 -left-3 sm:top-4 sm:-left-4 z-20 bg-white/95 backdrop-blur-md border border-[#DFEAF0] px-4 py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(0,168,200,0.1)] flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-[#EAF9FD] text-[#00A8C8] flex items-center justify-center font-bold">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#172B3A]">100% Electric</div>
                  <div className="text-[10px] text-[#637786]">Zero-Emission Mobility</div>
                </div>
              </motion.div>

              {/* Floating Pill Badge 2 (Vibrant Violet) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -right-3 sm:bottom-4 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-[#E4DCFF] px-4 py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(120,86,255,0.1)] flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-[#F0ECFF] text-[#7856FF] flex items-center justify-center font-bold">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#172B3A]">High Visibility</div>
                  <div className="text-[10px] text-[#637786]">Prime Hyderabad Corridors</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
