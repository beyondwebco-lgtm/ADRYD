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
      badgeStyle: 'bg-[#E4EBE5]/15 text-[#E4EBE5] border-[#E4EBE5]/30',
      border: 'border-[#E4EBE5]/25 hover:border-[#B4F000]',
      cardBg: 'bg-[#092D19]/60 hover:bg-[#092D19]/80',
      glow: 'shadow-[0_0_25px_rgba(9,45,25,0.3)]',
    },
    {
      id: 'local-reach',
      name: 'Local Reach',
      desc: 'Cross-corridor tandem presence built for store openings and neighborhood commercial saturation.',
      badge: 'Local',
      badgeStyle: 'bg-[#65B32E]/25 text-[#65B32E] border-[#65B32E]/30',
      border: 'border-[#65B32E]/35 hover:border-[#B4F000]',
      cardBg: 'bg-[#005522]/30 hover:bg-[#005522]/50',
      glow: 'shadow-[0_0_25px_rgba(101,179,46,0.2)]',
    },
    {
      id: 'community',
      name: 'Community',
      desc: 'Multi-corridor coordinated deployment across premier tech parks, shopping avenues and universities.',
      badge: 'Featured Tier',
      badgeStyle: 'bg-[#B4F000] text-[#092D19] font-black border-[#B4F000]',
      border: 'border-[#B4F000] ring-2 ring-[#B4F000]/40',
      cardBg: 'bg-[#005522]/60 hover:bg-[#005522]/80',
      glow: 'shadow-[0_0_40px_rgba(180,240,0,0.35)]',
      featured: true,
    },
    {
      id: 'city-activation',
      name: 'City Activation',
      desc: 'Strategic high-frequency city coverage designed for sustained brand recall across prime hubs.',
      badge: 'Strategic',
      badgeStyle: 'bg-[#F4DE26]/20 text-[#F4DE26] border-[#F4DE26]/30',
      border: 'border-[#F4DE26]/35 hover:border-[#F4DE26]',
      cardBg: 'bg-[#092D19]/60 hover:bg-[#092D19]/80',
      glow: 'shadow-[0_0_25px_rgba(244,222,38,0.2)]',
    },
    {
      id: 'bulk-activation',
      name: 'Bulk Activation',
      desc: 'Large-scale fleet mobilizations, major brand launches, festival sponsorships and bespoke activations.',
      badge: 'Enterprise',
      badgeStyle: 'bg-[#B4F000]/20 text-[#B4F000] border-[#B4F000]/30',
      border: 'border-[#005522] hover:border-[#B4F000]',
      cardBg: 'bg-[#005522]/35 hover:bg-[#005522]/55',
      glow: 'shadow-[0_0_25px_rgba(0,85,34,0.3)]',
    },
  ];

  return (
    <section id="plans" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Forest Green, Deep Emerald & Golden Highlights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#005522]/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-[#092D19]/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B4F000]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#092D19]/60 backdrop-blur-md border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
              <span>CAMPAIGN TIERS</span>
            </div>
            
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
              <span className="bg-gradient-to-r from-[#B4F000] via-[#E4EBE5] to-[#F4DE26] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(180,240,0,0.4)]">
                START SMALL. THINK BIG.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#E4EBE5] font-normal leading-relaxed">
              Five compact campaign formats tailored for local business pilots, neighborhood launches and citywide activations.
            </p>
          </div>

          <div>
            <Link
              href="/campaign-plans"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#B4F000] hover:text-[#c4fc19] transition-colors"
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
                    <span className="text-xs font-black text-[#B4F000] animate-pulse">★ FEATURED</span>
                  )}
                </div>

                <h3 className="font-heading font-black text-2xl text-white mb-3">
                  {pkg.name}
                </h3>

                <p className="text-sm text-[#E4EBE5]/80 leading-relaxed font-normal mb-6">
                  {pkg.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href={`/book-campaign?package=${pkg.id}`}
                  className={`w-full py-3 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    pkg.featured
                      ? 'bg-[#B4F000] hover:bg-[#c3fc18] text-[#092D19] font-black shadow-lg shadow-[#B4F000]/25'
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
