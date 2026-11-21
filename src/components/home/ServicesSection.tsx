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
      color: '#2563EB',
      textColor: 'text-[#2563EB]',
      bg: 'bg-[#EFF6FF]',
      border: 'border-[#DBEAFE]',
      hoverBorder: 'hover:border-[#2563EB]',
      icon: Megaphone,
      desc: 'Make your brand visible.',
      detail: 'High-recall electric vehicle livery and rider apparel navigating prime urban corridors.',
      id: 'promote',
    },
    {
      action: 'SHOWCASE',
      color: '#7856FF',
      textColor: 'text-[#7856FF]',
      bg: 'bg-[#F5F3FF]',
      border: 'border-[#EDE9FE]',
      hoverBorder: 'hover:border-[#7856FF]',
      icon: ShoppingBag,
      desc: 'Bring products closer.',
      detail: 'Illuminated, weather-sealed compartments letting customers see and touch actual items.',
      id: 'showcase',
    },
    {
      action: 'SELL',
      color: '#10B981',
      textColor: 'text-[#10B981]',
      bg: 'bg-[#ECFDF5]',
      border: 'border-[#D1FAE5]',
      hoverBorder: 'hover:border-[#10B981]',
      icon: QrCode,
      desc: 'Turn interest into enquiries.',
      detail: 'Scan-and-buy catalogues connecting on-street curiosity with instant checkout.',
      id: 'sell',
    },
    {
      action: 'PRE-ORDER',
      color: '#EC4899',
      textColor: 'text-[#EC4899]',
      bg: 'bg-[#FDF2F8]',
      border: 'border-[#FCE7F3]',
      hoverBorder: 'hover:border-[#EC4899]',
      icon: PackageCheck,
      desc: 'Capture demand early.',
      detail: 'Validate customer interest and reserve orders before major retail rollouts.',
      id: 'preorder',
    },
    {
      action: 'DELIVER',
      color: '#00A8C8',
      textColor: 'text-[#00A8C8]',
      bg: 'bg-[#ECFEFF]',
      border: 'border-[#CFFAFE]',
      hoverBorder: 'hover:border-[#00A8C8]',
      icon: Truck,
      desc: 'Connect local commerce.',
      detail: 'Same-day neighborhood replenishment and promotional sample pack drop-offs.',
      id: 'deliver',
    },
    {
      action: 'VIRAL',
      color: '#D946EF',
      textColor: 'text-[#D946EF]',
      bg: 'bg-[#FDF4FF]',
      border: 'border-[#F5D0FE]',
      hoverBorder: 'hover:border-[#D946EF]',
      icon: Video,
      desc: 'Create moments worth sharing.',
      detail: 'Authentic street reaction reels and creator collaborations amplifying physical buzz.',
      id: 'viral',
    },
    {
      action: 'INSIGHTS',
      color: '#1756C1',
      textColor: 'text-[#1756C1]',
      bg: 'bg-[#EEF2FF]',
      border: 'border-[#E0E7FF]',
      hoverBorder: 'hover:border-[#1756C1]',
      icon: BarChart3,
      desc: 'Explore campaign intelligence.',
      detail: 'Planned corridor telemetry, active hours verification and audience engagement logs.',
      id: 'insights',
      isPlanned: true,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Subtle Multicolor Glows */}
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#D946EF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#142238]">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>THE 7 CAPABILITIES</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#142238] tracking-tight uppercase leading-[1.05]">
            ONE NETWORK.{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7856FF] to-[#D946EF] bg-clip-text text-transparent animate-gradient-slow">
              MANY POSSIBILITIES.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
            From high-recall brand visibility to illuminated product showcases and same-day delivery.
          </p>
        </div>

        {/* 7 Multicolor Creative Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isWide = idx === 6; // Insights spans remaining space nicely

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
                  className={`group block h-full p-8 rounded-3xl ${svc.bg} border ${svc.border} ${svc.hoverBorder} card-hover-lift transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Card Header: Icon & Planned Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ color: svc.color }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      {svc.isPlanned ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#1756C1] border border-[#E0E7FF] shadow-xs">
                          Planned Architecture
                        </span>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:bg-white transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {/* Action-First Typography */}
                    <div className="space-y-2">
                      <h3 className={`font-heading font-black text-3xl tracking-tight uppercase ${svc.textColor}`}>
                        {svc.action}.
                      </h3>
                      <p className="text-base font-bold text-[#142238]">
                        {svc.desc}
                      </p>
                      <p className="text-sm text-[#64748B] leading-relaxed pt-1 font-normal">
                        {svc.detail}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="pt-6 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-slate-900">
                    <span>Explore {svc.action} Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
