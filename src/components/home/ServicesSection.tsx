'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      action: 'PROMOTE',
      color: '#38BDF8',
      textColor: 'text-[#38BDF8]',
      cardBg: 'bg-[#2563EB]/15 hover:bg-[#2563EB]/25',
      border: 'border-[#2563EB]/35 hover:border-[#38BDF8]',
      glow: 'hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]',
      iconBg: 'bg-[#2563EB]/30',
      icon: Megaphone,
      desc: 'Make your brand visible.',
      detail: 'High-recall electric vehicle livery and rider apparel navigating prime urban corridors.',
      id: 'promote',
    },
    {
      action: 'SHOWCASE',
      color: '#C4B5FD',
      textColor: 'text-[#C4B5FD]',
      cardBg: 'bg-[#7856FF]/15 hover:bg-[#7856FF]/25',
      border: 'border-[#7856FF]/35 hover:border-[#C4B5FD]',
      glow: 'hover:shadow-[0_0_30px_rgba(120,86,255,0.35)]',
      iconBg: 'bg-[#7856FF]/30',
      icon: ShoppingBag,
      desc: 'Bring products closer.',
      detail: 'Illuminated, weather-sealed compartments letting customers see and touch actual items.',
      id: 'showcase',
    },
    {
      action: 'SELL',
      color: '#34D399',
      textColor: 'text-[#34D399]',
      cardBg: 'bg-[#10B981]/15 hover:bg-[#10B981]/25',
      border: 'border-[#10B981]/35 hover:border-[#34D399]',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]',
      iconBg: 'bg-[#10B981]/30',
      icon: QrCode,
      desc: 'Turn interest into enquiries.',
      detail: 'Scan-and-buy catalogues connecting on-street curiosity with instant checkout.',
      id: 'sell',
    },
    {
      action: 'PRE-ORDER',
      color: '#F472B6',
      textColor: 'text-[#F472B6]',
      cardBg: 'bg-[#EC4899]/15 hover:bg-[#EC4899]/25',
      border: 'border-[#EC4899]/35 hover:border-[#F472B6]',
      glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]',
      iconBg: 'bg-[#EC4899]/30',
      icon: PackageCheck,
      desc: 'Capture demand early.',
      detail: 'Validate customer interest and reserve orders before major retail rollouts.',
      id: 'preorder',
    },
    {
      action: 'DELIVER',
      color: '#22D3EE',
      textColor: 'text-[#22D3EE]',
      cardBg: 'bg-[#00A8C8]/15 hover:bg-[#00A8C8]/25',
      border: 'border-[#00A8C8]/35 hover:border-[#22D3EE]',
      glow: 'hover:shadow-[0_0_30px_rgba(0,168,200,0.35)]',
      iconBg: 'bg-[#00A8C8]/30',
      icon: Truck,
      desc: 'Connect local commerce.',
      detail: 'Same-day neighborhood replenishment and promotional sample pack drop-offs.',
      id: 'deliver',
    },
    {
      action: 'VIRAL',
      color: '#E879F9',
      textColor: 'text-[#E879F9]',
      cardBg: 'bg-[#D946EF]/15 hover:bg-[#D946EF]/25',
      border: 'border-[#D946EF]/35 hover:border-[#E879F9]',
      glow: 'hover:shadow-[0_0_30px_rgba(217,70,239,0.35)]',
      iconBg: 'bg-[#D946EF]/30',
      icon: Video,
      desc: 'Create moments worth sharing.',
      detail: 'Authentic street reaction reels and creator collaborations amplifying physical buzz.',
      id: 'viral',
    },
    {
      action: 'INSIGHTS',
      color: '#60A5FA',
      textColor: 'text-[#60A5FA]',
      cardBg: 'bg-[#1756C1]/15 hover:bg-[#1756C1]/25',
      border: 'border-[#1756C1]/35 hover:border-[#60A5FA]',
      glow: 'hover:shadow-[0_0_30px_rgba(23,86,193,0.35)]',
      iconBg: 'bg-[#1756C1]/30',
      icon: BarChart3,
      desc: 'Explore campaign intelligence.',
      detail: 'Planned corridor telemetry, active hours verification and audience engagement logs.',
      id: 'insights',
      isPlanned: true,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Violet, Pink & Blue Glowing Orbs */}
      <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-[#7856FF]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-[#D946EF]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[450px] h-[450px] bg-[#2563EB]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#C4B5FD] text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>THE 7 CAPABILITIES</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            ONE NETWORK.{' '}
            <span className="bg-gradient-to-r from-[#22D3EE] via-[#C4B5FD] to-[#E879F9] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(120,86,255,0.4)]">
              MANY POSSIBILITIES.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            From high-recall brand visibility to illuminated product showcases and same-day delivery.
          </p>
        </div>

        {/* 7 Distinctive Multicolor Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isWide = idx === 6; // Insights spans remaining space

            return (
              <motion.div
                key={svc.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={isWide ? 'md:col-span-2 xl:col-span-2' : ''}
              >
                <Link
                  href={`/services#${svc.id}`}
                  className={`group block h-full p-8 rounded-3xl ${svc.cardBg} backdrop-blur-2xl border ${svc.border} ${svc.glow} card-hover-lift transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Card Header: Icon & Planned Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className={`w-14 h-14 rounded-2xl ${svc.iconBg} border border-white/15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}
                        style={{ color: svc.color }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      {svc.isPlanned ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#60A5FA] border border-[#60A5FA]/30 shadow-xs">
                          Planned Architecture
                        </span>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-white/20 transition-all border border-white/10">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {/* Action-First Typography */}
                    <div className="space-y-2">
                      <h3 className={`font-heading font-black text-3xl tracking-tight uppercase ${svc.textColor}`}>
                        {svc.action}.
                      </h3>
                      <p className="text-base font-bold text-white">
                        {svc.desc}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed pt-2 font-normal">
                        {svc.detail}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA link */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                    <span>Explore capability</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
