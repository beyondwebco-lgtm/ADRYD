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
      cardBg: 'bg-[#092D19]/60 hover:bg-[#092D19]/80',
      border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
      glow: 'shadow-[0_0_30px_rgba(180,240,0,0.25)]',
      color: 'text-[#B4F000]',
      iconBg: 'bg-[#B4F000]/20',
      btnBg: 'bg-[#B4F000] hover:bg-[#c3fc18] text-[#092D19] font-black',
      href: '/become-a-rider?type=own_ev_rider',
      cta: 'Register With My EV',
    },
    {
      id: 'without_ev',
      action: 'BECOME A RIDER',
      title: 'Rider Without EV',
      description: 'Apply for opportunities involving partner-arranged electric two-wheelers and gear.',
      icon: UserCheck,
      cardBg: 'bg-[#005522]/35 hover:bg-[#005522]/55',
      border: 'border-[#65B32E]/40 hover:border-[#B4F000]',
      glow: 'shadow-[0_0_30px_rgba(101,179,46,0.25)]',
      color: 'text-[#65B32E]',
      iconBg: 'bg-[#65B32E]/20',
      btnBg: 'bg-gradient-to-r from-[#65B32E] to-[#B4F000] text-[#092D19] font-black',
      href: '/become-a-rider?type=without_ev_rider',
      cta: 'Apply as a Rider',
    },
    {
      id: 'fleet_partner',
      action: 'MANAGE A FLEET',
      title: 'Commercial Fleet Partner',
      description: 'Monetize your commercial two-wheeler fleet during scheduled high-recall campaign hours.',
      icon: Building2,
      cardBg: 'bg-[#092D19]/70 hover:bg-[#092D19]/90',
      border: 'border-[#E4EBE5]/25 hover:border-[#B4F000]',
      glow: 'shadow-[0_0_30px_rgba(0,85,34,0.3)]',
      color: 'text-[#E4EBE5]',
      iconBg: 'bg-[#005522]/50',
      btnBg: 'bg-[#E4EBE5] hover:bg-white text-[#092D19] font-black',
      href: '/become-a-rider?type=fleet_partner',
      cta: 'Submit Fleet Enquiry',
    },
  ];

  return (
    <section id="partner" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Forest Green, Deep Emerald & Electric Lime Atmosphere */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#005522]/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-[#B4F000]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-[#092D19]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#092D19]/60 backdrop-blur-md border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>MOBILITY COMMUNITY</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            BE PART OF{' '}
            <span className="bg-gradient-to-r from-[#B4F000] via-[#E4EBE5] to-[#65B32E] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(180,240,0,0.4)]">
              THE MOVEMENT.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#E4EBE5] leading-relaxed max-w-2xl mx-auto font-normal">
            Whether you own an EV, seek rider opportunities, or manage a commercial fleet, join our mobility community.
          </p>
        </div>

        {/* 3 Frosted Partnership Cards */}
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
                className={`p-8 rounded-3xl ${opt.cardBg} backdrop-blur-2xl border ${opt.border} ${opt.glow} card-hover-lift flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-black uppercase tracking-wider ${opt.color}`}>
                      {opt.action}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${opt.iconBg} border border-white/15 flex items-center justify-center text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white mb-3">
                    {opt.title}
                  </h3>

                  <p className="text-sm text-[#E4EBE5]/80 leading-relaxed font-normal mb-8">
                    {opt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={opt.href}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all ${opt.btnBg}`}
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
        <div className="rounded-3xl overflow-hidden border border-[#B4F000]/20 shadow-2xl relative aspect-[21/9] max-h-[300px]">
          <Image
            src="/images/adryd-rider-partner.jpg"
            alt="ADRYD Electric Partner Rider in Hyderabad"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061C12]/90 via-[#061C12]/50 to-transparent flex items-center p-8 sm:p-12">
            <div className="max-w-md text-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B4F000]">Verified Partner Network</span>
              <p className="text-xl sm:text-2xl font-heading font-bold text-white">
                Join Hyderabad&apos;s fastest growing zero-emission marketing fleet.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
