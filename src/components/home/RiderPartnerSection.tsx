'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bike, UserCheck, Building2, ArrowRight, Sparkles } from 'lucide-react';

export default function RiderPartnerSection() {
  const options = [
    {
      id: 'own_ev',
      title: 'Rider With Own EV',
      description: 'Own an electric scooter? Participate in planned mobile advertising, product showcase and local promotional campaigns.',
      icon: Bike,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      accentColor: 'text-[#00A8C8]',
      btnBg: 'bg-[#00A8C8] text-white hover:bg-[#0093AF]',
      href: '/become-a-rider?type=own_ev_rider',
      cta: 'Register With My EV',
    },
    {
      id: 'without_ev',
      title: 'Rider Without EV',
      description: 'Want to partner with ADRYD? Register as a rider candidate for potential opportunities involving partner-arranged vehicles.',
      icon: UserCheck,
      bg: 'bg-white',
      border: 'border-[#DCECF2]',
      accentColor: 'text-[#1756C1]',
      btnBg: 'bg-[#1756C1] text-white hover:bg-[#13469E]',
      href: '/become-a-rider?type=without_ev_rider',
      cta: 'Apply as a Rider',
    },
    {
      id: 'fleet_partner',
      title: 'Fleet Partner',
      description: 'Commercial EV fleet owner? Partner with ADRYD to monetize your electric scooter fleet during commercial campaign hours.',
      icon: Building2,
      bg: 'bg-[#F6FAFC]',
      border: 'border-[#DCECF2]',
      accentColor: 'text-[#123C83]',
      btnBg: 'bg-[#123C83] text-white hover:bg-[#0F2F66]',
      href: '/become-a-rider?type=fleet_partner',
      cta: 'Submit Fleet Enquiry',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative border-t border-[#DCECF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Partner Network</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
            RIDE WITH ADRYD.
          </h2>
          <p className="text-base sm:text-lg text-[#637786] font-normal">
            Whether you own an EV, seek rider opportunities, or manage a commercial fleet, join our mobility community.
          </p>
        </div>

        {/* 3 Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-3xl ${opt.bg} border ${opt.border} p-8 card-hover-lift flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${opt.accentColor}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-[#172B3A]">
                      {opt.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#637786] leading-relaxed font-normal">
                      {opt.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={opt.href}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all ${opt.btnBg}`}
                  >
                    <span>{opt.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
