'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CampaignPackagesSection() {
  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      desc: 'Focused single-corridor campaign pilot for local businesses and initial product sampling.',
      badge: 'Pilot',
      badgeStyle: 'bg-[#2563EB]/30 text-[#38BDF8] border-[#38BDF8]/30',
      border: 'border-[#2563EB]/35 hover:border-[#38BDF8]',
      cardBg: 'bg-[#2563EB]/15 hover:bg-[#2563EB]/25',
      glow: 'shadow-[0_0_25px_rgba(37,99,235,0.2)]',
    },
    {
      id: 'local-reach',
      name: 'Local Reach',
      desc: 'Cross-corridor tandem presence built for store openings and neighborhood commercial saturation.',
      badge: 'Local',
      badgeStyle: 'bg-[#38BDF8]/30 text-[#22D3EE] border-[#22D3EE]/30',
      border: 'border-[#38BDF8]/35 hover:border-[#22D3EE]',
      cardBg: 'bg-[#38BDF8]/15 hover:bg-[#38BDF8]/25',
      glow: 'shadow-[0_0_25px_rgba(56,189,248,0.2)]',
    },
    {
      id: 'community',
      name: 'Community',
      desc: 'Multi-corridor coordinated deployment across premier tech parks, shopping avenues and universities.',
      badge: 'Featured Tier',
      badgeStyle: 'bg-[#7856FF] text-white border-[#C4B5FD]',
      border: 'border-[#7856FF] ring-2 ring-[#7856FF]/40',
      cardBg: 'bg-[#7856FF]/25 hover:bg-[#7856FF]/35',
      glow: 'shadow-[0_0_40px_rgba(120,86,255,0.4)]',
      featured: true,
    },
    {
      id: 'city-activation',
      name: 'City Activation',
      desc: 'Strategic high-frequency city coverage designed for sustained brand recall across prime hubs.',
      badge: 'Strategic',
      badgeStyle: 'bg-[#D946EF]/30 text-[#E879F9] border-[#E879F9]/30',
      border: 'border-[#D946EF]/35 hover:border-[#E879F9]',
      cardBg: 'bg-[#D946EF]/15 hover:bg-[#D946EF]/25',
      glow: 'shadow-[0_0_25px_rgba(217,70,239,0.2)]',
    },
    {
      id: 'bulk-activation',
      name: 'Bulk Activation',
      desc: 'Large-scale fleet mobilizations, major brand launches, festival sponsorships and bespoke activations.',
      badge: 'Enterprise',
      badgeStyle: 'bg-[#6D28D9]/30 text-[#C4B5FD] border-[#C4B5FD]/30',
      border: 'border-[#6D28D9]/35 hover:border-[#C4B5FD]',
      cardBg: 'bg-[#6D28D9]/15 hover:bg-[#6D28D9]/25',
      glow: 'shadow-[0_0_25px_rgba(109,40,217,0.2)]',
    },
  ];

  return (
    <section id="plans" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Royal Blue, Violet & Magenta Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-[#7856FF]/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D946EF]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C4B5FD] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>CAMPAIGN TIERS</span>
            </div>
            
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#C4B5FD] to-[#E879F9] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(120,86,255,0.4)]">
                START SMALL. THINK BIG.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              Five compact campaign options tailored for local pilots, neighborhood launches and citywide activations.
            </p>
          </div>

          <div>
            <Link
              href="/campaign-plans"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#38BDF8] hover:text-[#22D3EE] transition-colors"
            >
              <span>Explore Monthly Retainers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5 Compact Frosted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-7 rounded-3xl ${pkg.cardBg} backdrop-blur-2xl border ${pkg.border} ${pkg.glow} card-hover-lift flex flex-col justify-between relative`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pkg.badgeStyle}`}>
                    {pkg.badge}
                  </span>
                  {pkg.featured && (
                    <span className="text-xs font-black text-[#C4B5FD] animate-pulse">★ FEATURED</span>
                  )}
                </div>

                <h3 className="font-heading font-black text-2xl text-white mb-3">
                  {pkg.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {pkg.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href={`/book-campaign?package=${pkg.id}`}
                  className={`w-full py-3 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-[#7856FF] to-[#D946EF] hover:from-[#6D28D9] hover:to-[#C026D3] text-white shadow-lg'
                      : 'bg-white/15 hover:bg-white/25 text-white border border-white/15'
                  }`}
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
