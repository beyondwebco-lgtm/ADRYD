'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { SERVICES_CARD_DETAILS, DetailCardItem } from '@/data/websiteCardsData';
import CardDetailsModal from '@/components/ui/CardDetailsModal';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<DetailCardItem | null>(null);

  const services = [
    {
      action: 'PROMOTE',
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#041220]/70 hover:bg-[#041220]/90',
      border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(180,240,0,0.35)]',
      iconBg: 'bg-[#B4F000]/20',
      icon: Megaphone,
      desc: 'Make your brand visible.',
      detail: 'High-recall electric vehicle livery and rider apparel navigating prime urban corridors.',
      id: 'promote',
      image: '/images/campaigns/service-adryd-promote.jpg',
    },
    {
      action: 'SHOWCASE',
      color: '#0A9BE0',
      textColor: 'text-[#0A9BE0]',
      cardBg: 'bg-[#051C33]/60 hover:bg-[#051C33]/85',
      border: 'border-[#0A9BE0]/40 hover:border-[#0A9BE0]',
      glow: 'hover:shadow-[0_0_30px_rgba(10,155,224,0.35)]',
      iconBg: 'bg-[#0A9BE0]/20',
      icon: ShoppingBag,
      desc: 'Bring products closer.',
      detail: 'Illuminated, weather-sealed compartments letting customers see and touch actual items.',
      id: 'showcase',
      image: '/images/campaigns/service-adryd-showcase.jpg',
    },
    {
      action: 'SELL',
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#041220]/70 hover:bg-[#041220]/90',
      border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(180,240,0,0.3)]',
      iconBg: 'bg-[#B4F000]/20',
      icon: QrCode,
      desc: 'Turn interest into enquiries.',
      detail: 'Scan-and-buy catalogues connecting on-street curiosity with instant checkout.',
      id: 'sell',
      image: '/images/campaigns/service-adryd-sell.jpg',
    },
    {
      action: 'PRE-ORDER',
      color: '#0A9BE0',
      textColor: 'text-[#0A9BE0]',
      cardBg: 'bg-[#051C33]/60 hover:bg-[#051C33]/85',
      border: 'border-[#0A9BE0]/40 hover:border-[#0A9BE0]',
      glow: 'hover:shadow-[0_0_30px_rgba(10,155,224,0.3)]',
      iconBg: 'bg-[#0A9BE0]/20',
      icon: PackageCheck,
      desc: 'Capture demand early.',
      detail: 'Validate customer interest and reserve orders before major retail rollouts.',
      id: 'preorder',
      image: '/images/campaigns/service-adryd-preorder.jpg',
    },
    {
      action: 'DELIVER',
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#041220]/70 hover:bg-[#041220]/90',
      border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(180,240,0,0.35)]',
      iconBg: 'bg-[#B4F000]/20',
      icon: Truck,
      desc: 'Connect local commerce.',
      detail: 'Same-day neighborhood replenishment and promotional sample pack drop-offs.',
      id: 'deliver',
      image: '/images/campaigns/service-adryd-deliver.jpg',
    },
    {
      action: 'VIRAL',
      color: '#0A9BE0',
      textColor: 'text-[#0A9BE0]',
      cardBg: 'bg-[#051C33]/60 hover:bg-[#051C33]/85',
      border: 'border-[#0A9BE0]/40 hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(10,155,224,0.35)]',
      iconBg: 'bg-[#0A9BE0]/20',
      icon: Video,
      desc: 'Create moments worth sharing.',
      detail: 'Authentic street reaction reels and creator collaborations amplifying physical buzz.',
      id: 'viral',
      image: '/images/campaigns/service-adryd-viral.jpg',
    },
    {
      action: 'INSIGHTS',
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#041220]/80 hover:bg-[#041220]/95',
      border: 'border-[#0A9BE0]/40 hover:border-[#B4F000]',
      glow: 'hover:shadow-[0_0_30px_rgba(180,240,0,0.35)]',
      iconBg: 'bg-[#B4F000]/20',
      icon: BarChart3,
      desc: 'Explore campaign intelligence.',
      detail: 'Planned corridor telemetry, active hours verification and audience engagement logs.',
      id: 'insights',
      isPlanned: true,
      image: '/images/campaigns/service-adryd-insights.jpg',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Electric Blue & Chartreuse Glows */}
      <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-[#0A9BE0]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-[#B4F000]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[450px] h-[450px] bg-[#041220]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#041220]/80 backdrop-blur-md text-[#0A9BE0] text-xs font-bold uppercase tracking-wider border border-[#0A9BE0]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>THE 7 CAPABILITIES</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            ONE NETWORK.{' '}
            <span className="bg-gradient-to-r from-[#0A9BE0] via-[#E2E8F0] to-[#B4F000] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(10,155,224,0.4)]">
              MANY POSSIBILITIES.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto font-normal">
            From high-recall brand visibility to illuminated product showcases and same-day delivery.
          </p>
        </div>

        {/* 7 Distinctive Frosted Glass Cards */}
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
                <button
                  type="button"
                  onClick={() => setSelectedService(SERVICES_CARD_DETAILS[svc.id] || null)}
                  className={`group text-left block w-full h-full p-8 rounded-3xl ${svc.cardBg} backdrop-blur-2xl border ${svc.border} ${svc.glow} card-hover-lift transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer active:scale-[0.99]`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl ${svc.iconBg} border border-white/10 flex items-center justify-center`}
                        style={{ color: svc.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        {svc.isPlanned && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B4F000]/20 text-[#B4F000] border border-[#B4F000]/30">
                            Planned
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity">
                          Details ↗
                        </span>
                      </div>
                    </div>

                    {svc.image && (
                      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-3 border border-white/10 group-hover:border-[#0A9BE0]/40 transition-all bg-[#000000]/50 shadow-inner">
                        <Image
                          src={svc.image}
                          alt={svc.action}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}

                    <div>
                      <h3 className={`font-heading font-black text-2xl tracking-wider ${svc.textColor}`}>
                        {svc.action}.
                      </h3>
                      <p className="text-base font-bold text-white mt-1">
                        {svc.desc}
                      </p>
                      <p className="text-xs text-[#E2E8F0]/80 leading-relaxed mt-2 font-normal">
                        {svc.detail}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between w-full">
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                      View Service Details
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: svc.color }}
                    />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Details Modal */}
      <CardDetailsModal
        item={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
