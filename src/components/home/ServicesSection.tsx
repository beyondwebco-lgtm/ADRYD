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
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#092D19]/60 hover:bg-[#092D19]/80',
      border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(180,240,0,0.35)]',
      iconBg: 'bg-[#B4F000]/20',
      icon: Megaphone,
      desc: 'Make your brand visible.',
      detail: 'High-recall electric vehicle livery and rider apparel navigating prime urban corridors.',
      id: 'promote',
    },
    {
      action: 'SHOWCASE',
      color: '#65B32E',
      textColor: 'text-[#65B32E]',
      cardBg: 'bg-[#005522]/35 hover:bg-[#005522]/55',
      border: 'border-[#005522]/50 hover:border-[#65B32E]',
      glow: 'hover:shadow-[0_0_30px_rgba(101,179,46,0.35)]',
      iconBg: 'bg-[#65B32E]/20',
      icon: ShoppingBag,
      desc: 'Bring products closer.',
      detail: 'Illuminated, weather-sealed compartments letting customers see and touch actual items.',
      id: 'showcase',
    },
    {
      action: 'SELL',
      color: '#F4DE26',
      textColor: 'text-[#F4DE26]',
      cardBg: 'bg-[#F4DE26]/10 hover:bg-[#F4DE26]/20',
      border: 'border-[#F4DE26]/30 hover:border-[#F4DE26]',
      glow: 'hover:shadow-[0_0_30px_rgba(244,222,38,0.3)]',
      iconBg: 'bg-[#F4DE26]/20',
      icon: QrCode,
      desc: 'Turn interest into enquiries.',
      detail: 'Scan-and-buy catalogues connecting on-street curiosity with instant checkout.',
      id: 'sell',
    },
    {
      action: 'PRE-ORDER',
      color: '#E4EBE5',
      textColor: 'text-[#E4EBE5]',
      cardBg: 'bg-[#E4EBE5]/10 hover:bg-[#E4EBE5]/20',
      border: 'border-[#E4EBE5]/30 hover:border-[#E4EBE5]',
      glow: 'hover:shadow-[0_0_30px_rgba(228,235,229,0.3)]',
      iconBg: 'bg-[#E4EBE5]/20',
      icon: PackageCheck,
      desc: 'Capture demand early.',
      detail: 'Validate customer interest and reserve orders before major retail rollouts.',
      id: 'preorder',
    },
    {
      action: 'DELIVER',
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#092D19]/60 hover:bg-[#092D19]/80',
      border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(180,240,0,0.35)]',
      iconBg: 'bg-[#B4F000]/20',
      icon: Truck,
      desc: 'Connect local commerce.',
      detail: 'Same-day neighborhood replenishment and promotional sample pack drop-offs.',
      id: 'deliver',
    },
    {
      action: 'VIRAL',
      color: '#65B32E',
      textColor: 'text-[#65B32E]',
      cardBg: 'bg-[#005522]/35 hover:bg-[#005522]/55',
      border: 'border-[#65B32E]/40 hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(101,179,46,0.35)]',
      iconBg: 'bg-[#65B32E]/20',
      icon: Video,
      desc: 'Create moments worth sharing.',
      detail: 'Authentic street reaction reels and creator collaborations amplifying physical buzz.',
      id: 'viral',
    },
    {
      action: 'INSIGHTS',
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#092D19]/70 hover:bg-[#092D19]/90',
      border: 'border-[#005522] hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(180,240,0,0.35)]',
      iconBg: 'bg-[#005522]/60',
      icon: BarChart3,
      desc: 'Explore campaign intelligence.',
      detail: 'Planned corridor telemetry, active hours verification and audience engagement logs.',
      id: 'insights',
      isPlanned: true,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Forest Green, Deep Emerald & Electric Lime Glows */}
      <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-[#005522]/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-[#B4F000]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[450px] h-[450px] bg-[#092D19]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#092D19]/60 backdrop-blur-md text-[#B4F000] text-xs font-bold uppercase tracking-wider border border-[#B4F000]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>THE 7 CAPABILITIES</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            ONE NETWORK.{' '}
            <span className="bg-gradient-to-r from-[#B4F000] via-[#E4EBE5] to-[#F4DE26] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(180,240,0,0.4)]">
              MANY POSSIBILITIES.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#E4EBE5] leading-relaxed max-w-2xl mx-auto font-normal">
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
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl ${svc.iconBg} border border-white/10 flex items-center justify-center`}
                        style={{ color: svc.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {svc.isPlanned && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B4F000]/20 text-[#B4F000] border border-[#B4F000]/30">
                          Planned
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className={`font-heading font-black text-2xl tracking-wider ${svc.textColor}`}>
                        {svc.action}.
                      </h3>
                      <p className="text-base font-bold text-white mt-1">
                        {svc.desc}
                      </p>
                      <p className="text-xs text-[#E4EBE5]/80 leading-relaxed mt-2 font-normal">
                        {svc.detail}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                      Learn More
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: svc.color }}
                    />
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
