'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';

export default function CampaignPackagesSection() {
  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      desc: 'Focused single-corridor campaign pilot for local businesses and initial product sampling.',
      badge: 'Pilot',
      color: 'text-[#2563EB]',
      badgeBg: 'bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]',
      border: 'border-[#DBEAFE]',
      bg: 'bg-white',
    },
    {
      id: 'local-reach',
      name: 'Local Reach',
      desc: 'Cross-corridor tandem presence built for store openings and neighborhood commercial saturation.',
      badge: 'Local',
      color: 'text-[#2563EB]',
      badgeBg: 'bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]',
      border: 'border-[#DBEAFE]',
      bg: 'bg-white',
    },
    {
      id: 'community',
      name: 'Community',
      desc: 'Multi-corridor coordinated deployment across premier tech parks, shopping avenues and universities.',
      badge: 'Featured',
      color: 'text-[#7856FF]',
      badgeBg: 'bg-[#7856FF] text-white border-[#7856FF]',
      border: 'border-[#7856FF] ring-2 ring-[#7856FF]/30 shadow-xl',
      bg: 'bg-gradient-to-b from-[#F5F3FF] to-white',
      featured: true,
    },
    {
      id: 'city-activation',
      name: 'City Activation',
      desc: 'Strategic high-frequency city coverage designed for sustained brand recall across prime hubs.',
      badge: 'Strategic',
      color: 'text-[#2563EB]',
      badgeBg: 'bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]',
      border: 'border-[#DBEAFE]',
      bg: 'bg-white',
    },
    {
      id: 'bulk-activation',
      name: 'Bulk Activation',
      desc: 'Large-scale fleet mobilizations, major brand launches, festival sponsorships and bespoke activations.',
      badge: 'Enterprise',
      color: 'text-[#7856FF]',
      badgeBg: 'bg-[#F5F3FF] text-[#7856FF] border-[#EDE9FE]',
      border: 'border-[#EDE9FE]',
      bg: 'bg-white',
    },
  ];

  return (
    <section id="plans" className="py-24 lg:py-32 bg-[#F5F3FF] relative overflow-hidden border-t border-[#E0E7FF]">
      {/* Ambient Violet and Electric Blue Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7856FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#2563EB]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EDE9FE] text-[#7856FF] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAMPAIGN TIERS</span>
            </div>
            
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#142238] tracking-tight uppercase leading-[1.05]">
              START SMALL.{' '}
              <span className="text-[#7856FF]">
                THINK BIG.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#64748B] font-normal leading-relaxed">
              Five compact campaign options tailored for local pilots, neighborhood launches and citywide activations.
            </p>
          </div>

          <div>
            <Link
              href="/campaign-plans"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#7856FF] hover:text-[#5B21B6] transition-colors"
            >
              <span>Explore Monthly Retainers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5 Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-7 rounded-3xl ${pkg.bg} border ${pkg.border} card-hover-lift flex flex-col justify-between relative shadow-xs`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pkg.badgeBg}`}>
                    {pkg.badge}
                  </span>
                  {pkg.featured && (
                    <span className="text-xs font-black text-[#7856FF]">★</span>
                  )}
                </div>

                <h3 className="font-heading font-black text-2xl text-[#142238] mb-3">
                  {pkg.name}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed font-normal mb-6">
                  {pkg.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5">
                <Link
                  href={`/book-campaign?package=${pkg.id}`}
                  className={`w-full py-3 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    pkg.featured
                      ? 'bg-[#7856FF] hover:bg-[#6440FF] text-white shadow-md'
                      : 'bg-slate-100 hover:bg-[#EFF6FF] text-[#142238] hover:text-[#2563EB]'
                  }`}
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
