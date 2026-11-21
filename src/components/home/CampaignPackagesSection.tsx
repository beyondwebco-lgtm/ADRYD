'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function CampaignPackagesSection() {
  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      riders: '1 Rider',
      scope: '3-Day Test / Single Corridor',
      description: 'Ideal for local pilots, single-neighborhood buzz, or initial product sampling tests.',
      highlights: ['1 Branded EV', '1 Specific Corridor', 'Sample / Flyer Handout', 'Pilot Report Summary'],
      popular: false,
      border: 'border-[#DFEAF0]',
      bg: 'bg-white',
      badge: 'Test Pilot',
      badgeClass: 'bg-[#EAF9FD] text-[#00A8C8]',
      btnClass: 'bg-[#F7FAFC] hover:bg-[#EAF9FD] text-[#00A8C8] border border-[#DFEAF0]',
    },
    {
      id: 'local_reach',
      name: 'Local Reach',
      riders: '2–3 Riders',
      scope: '1-Week Campaign / Multi-Area',
      description: 'Built for store launches, neighborhood saturation, and weekend retail activations.',
      highlights: ['2–3 Branded EVs', 'Cross-Corridor Routes', 'QR Product Showcasing', 'Visual Proof of Play'],
      popular: false,
      border: 'border-[#DFEAF0]',
      bg: 'bg-white',
      badge: 'Local Activation',
      badgeClass: 'bg-[#EAF9FD] text-[#1756C1]',
      btnClass: 'bg-[#F7FAFC] hover:bg-[#EAF9FD] text-[#1756C1] border border-[#DFEAF0]',
    },
    {
      id: 'community',
      name: 'Community',
      riders: '4–5 Riders',
      scope: '2-Week Multi-Corridor Blitz',
      description: 'Designed for brands seeking strong, memorable presence across prime urban clusters.',
      highlights: ['4–5 Branded EVs', 'Dual-Cluster Presence', 'Active Showcasing & QR', 'Priority Corridor Routing'],
      popular: true,
      border: 'border-[#7856FF] ring-2 ring-[#7856FF]/30 shadow-xl',
      bg: 'bg-gradient-to-b from-[#F0ECFF]/60 to-white',
      badge: 'Most Popular',
      badgeClass: 'bg-[#7856FF] text-white',
      btnClass: 'bg-[#7856FF] hover:bg-[#6440FF] text-white shadow-md',
    },
    {
      id: 'city_activation',
      name: 'City Activation',
      riders: '6–10 Riders',
      scope: '1-Month Strategic Deployment',
      description: 'Full-scale city presence designed to build brand recall across major commercial hubs.',
      highlights: ['6–10 Branded EVs', 'Citywide Corridors', 'Pre-Order & Showcase', 'Dedicated Account Lead'],
      popular: false,
      border: 'border-[#DFEAF0]',
      bg: 'bg-white',
      badge: 'High Impact',
      badgeClass: 'bg-[#EAF9FD] text-[#00A8C8]',
      btnClass: 'bg-[#F7FAFC] hover:bg-[#EAF9FD] text-[#00A8C8] border border-[#DFEAF0]',
    },
    {
      id: 'bulk_activation',
      name: 'Bulk Activation',
      riders: '10+ Riders',
      scope: 'Custom Enterprise Blitz',
      description: 'Custom fleet deployments, major event sponsorships and corporate brand rollouts.',
      highlights: ['10+ Custom Fleet', 'Synchronized Convoys', 'Full Media & PR Support', 'Comprehensive Analytics'],
      popular: false,
      border: 'border-[#DFEAF0]',
      bg: 'bg-white',
      badge: 'Enterprise',
      badgeClass: 'bg-[#F0ECFF] text-[#7856FF]',
      btnClass: 'bg-[#F7FAFC] hover:bg-[#F0ECFF] text-[#7856FF] border border-[#DFEAF0]',
    },
  ];

  return (
    <section id="plans" className="py-20 lg:py-28 bg-[#EAF9FD] relative border-t border-[#DFEAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0ECFF] text-[#7856FF] text-xs font-bold uppercase tracking-wider border border-[#E4DCFF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campaign Architecture</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
              FLEXIBLE CAMPAIGNS.{' '}
              <span className="text-[#00A8C8]">BIG</span>{' '}
              <span className="text-[#7856FF]">POSSIBILITIES.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#637786] font-normal">
              Five compact campaign packages designed for local businesses, product launches and citywide activations.
            </p>
          </div>

          <Link
            href="/campaign-plans"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7856FF] hover:text-[#6440FF] transition-colors shrink-0"
          >
            <span>View Monthly Retainer Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`rounded-3xl ${pkg.bg} border ${pkg.border} p-6 flex flex-col justify-between card-hover-lift relative`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${pkg.badgeClass}`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-bold text-[#172B3A]">
                    {pkg.riders}
                  </span>
                </div>

                {/* Package Name */}
                <h3 className="font-heading font-black text-xl text-[#172B3A] uppercase tracking-tight mb-1">
                  {pkg.name}
                </h3>

                {/* Scope */}
                <div className="text-xs font-semibold text-[#7856FF] mb-3">
                  {pkg.scope}
                </div>

                {/* Description */}
                <p className="text-xs text-[#637786] leading-relaxed mb-6 font-normal">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#172B3A] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8C8] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button linking with preselected plan query */}
              <Link
                href={`/book-campaign?plan=${pkg.id}`}
                className={`w-full py-3 px-4 rounded-full text-xs font-bold text-center block transition-all ${pkg.btnClass}`}
              >
                Book Package
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
