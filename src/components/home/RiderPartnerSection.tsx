'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bike, UserCheck, Building2, ArrowRight, Sparkles } from 'lucide-react';

export default function RiderPartnerSection() {
  const options = [
    {
      id: 'own_ev',
      action: 'OWN AN EV',
      title: 'Rider With Own EV',
      description: 'Monetize your electric scooter through scheduled brand showcase routes across Hyderabad.',
      icon: Bike,
      bg: 'bg-[#ECFEFF]',
      border: 'border-[#CFFAFE]',
      color: 'text-[#00A8C8]',
      btnBg: 'bg-[#00A8C8] hover:bg-[#0093AF] text-white',
      href: '/become-a-rider?type=own_ev_rider',
      cta: 'Register With My EV',
    },
    {
      id: 'without_ev',
      action: 'BECOME A RIDER',
      title: 'Rider Without EV',
      description: 'Apply for opportunities involving partner-arranged electric two-wheelers and gear.',
      icon: UserCheck,
      bg: 'bg-[#F0FDFA]',
      border: 'border-[#CCFBF1]',
      color: 'text-[#0D9488]',
      btnBg: 'bg-[#0D9488] hover:bg-[#0F766E] text-white',
      href: '/become-a-rider?type=without_ev_rider',
      cta: 'Apply as a Rider',
    },
    {
      id: 'fleet_partner',
      action: 'MANAGE A FLEET',
      title: 'Commercial Fleet Partner',
      description: 'Monetize your commercial two-wheeler fleet during scheduled high-recall campaign hours.',
      icon: Building2,
      bg: 'bg-[#EFF6FF]',
      border: 'border-[#DBEAFE]',
      color: 'text-[#2563EB]',
      btnBg: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white',
      href: '/become-a-rider?type=fleet_partner',
      cta: 'Submit Fleet Enquiry',
    },
  ];

  return (
    <section id="partner" className="py-24 lg:py-32 bg-[#F0FDFA] relative overflow-hidden border-t border-[#CCFBF1]">
      {/* Ambient Mint and Turquoise Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2DD4BF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#00A8C8]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CCFBF1] text-[#0D9488] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>MOBILITY COMMUNITY</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#142238] tracking-tight uppercase leading-[1.05]">
            BE PART OF{' '}
            <span className="text-[#0D9488]">
              THE MOVEMENT.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
            Whether you own an EV, seek rider opportunities, or manage a commercial fleet, join our mobility community.
          </p>
        </div>

        {/* 3 Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {options.map((opt, idx) => {
            const Icon = opt.icon;

            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`p-8 rounded-3xl ${opt.bg} border ${opt.border} card-hover-lift flex flex-col justify-between shadow-xs`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-black uppercase tracking-wider ${opt.color}`}>
                      {opt.action}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-slate-800">
                      <Icon className="w-6 h-6" style={{ color: opt.color === 'text-[#00A8C8]' ? '#00A8C8' : opt.color === 'text-[#0D9488]' ? '#0D9488' : '#2563EB' }} />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-[#142238] mb-3">
                    {opt.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed font-normal mb-8">
                    {opt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <Link
                    href={opt.href}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all ${opt.btnBg}`}
                  >
                    <span>{opt.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real Hyderabad Fleet & Partner Photographic Banner */}
        <div className="rounded-3xl overflow-hidden border border-[#CCFBF1] shadow-xl relative aspect-[21/9] max-h-[300px]">
          <Image
            src="/images/adryd-rider-partner.jpg"
            alt="ADRYD Electric Partner Rider in Hyderabad"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142238]/80 via-transparent to-transparent flex items-center p-8 sm:p-12">
            <div className="max-w-md text-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2DD4BF]">Verified Partner Network</span>
              <p className="text-xl sm:text-2xl font-heading font-bold">
                Join Hyderabad&apos;s fastest growing zero-emission marketing fleet.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
