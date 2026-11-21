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
      description: 'Ideal for local pilots, single-neighborhood buzz, or product sampling tests.',
      highlights: ['1 Branded EV', '1 Specific Corridor', 'Sample / Flyer Handout', 'Pilot Report Summary'],
      popular: false,
      accent: 'border-[#DCECF2] bg-white',
      badge: 'Test Pilot',
    },
    {
      id: 'local_reach',
      name: 'Local Reach',
      riders: '2–3 Riders',
      scope: '1-Week Campaign / Multi-Area',
      description: 'Built for store launches, neighborhood saturation, and weekend activations.',
      highlights: ['2–3 Branded EVs', 'Cross-Corridor Routes', 'QR Product Showcasing', 'Visual Proof of Play'],
      popular: false,
      accent: 'border-[#DCECF2] bg-white',
      badge: 'Local Activation',
    },
    {
      id: 'community',
      name: 'Community',
      riders: '4–5 Riders',
      scope: '2-Week Multi-Corridor Blitz',
      description: 'Designed for brands seeking strong, memorable presence across prime urban clusters.',
      highlights: ['4–5 Branded EVs', 'Dual-Cluster Presence', 'Active Showcasing & QR', 'Priority Corridor Routing'],
      popular: true,
      accent: 'border-[#00A8C8] bg-gradient-to-b from-[#EAF9FD]/60 to-white shadow-xl ring-1 ring-[#00A8C8]',
      badge: 'Most Popular',
    },
    {
      id: 'city_activation',
      name: 'City Activation',
      riders: '6–10 Riders',
      scope: '1-Month Strategic Deployment',
      description: 'Full-scale city presence designed to build brand recall across major commercial hubs.',
      highlights: ['6–10 Branded EVs', 'Citywide Corridors', 'Pre-Order & Showcase', 'Dedicated Account Lead'],
      popular: false,
      accent: 'border-[#DCECF2] bg-white',
      badge: 'High Impact',
    },
    {
      id: 'bulk_activation',
      name: 'Bulk Activation',
      riders: '10+ Riders',
      scope: 'Custom Enterprise Blitz',
      description: 'Custom fleet deployments, major event sponsorships and corporate brand rollouts.',
      highlights: ['10+ Custom Fleet', 'Synchronized Convoys', 'Full Media & PR Support', 'Comprehensive Analytics'],
      popular: false,
      accent: 'border-[#DCECF2] bg-white',
      badge: 'Enterprise',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F6FAFC] relative border-t border-[#DCECF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campaign Architecture</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
              FLEXIBLE CAMPAIGNS.{' '}
              <span className="text-[#00A8C8]">BIG POSSIBILITIES.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#637786] font-normal">
              Five compact campaign packages designed for local businesses, product launches and citywide activations.
            </p>
          </div>

          <Link
            href="/campaign-plans"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8C8] hover:text-[#0093AF] transition-colors shrink-0"
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
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`rounded-3xl p-6 border ${pkg.accent} flex flex-col justify-between card-hover-lift transition-all`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    pkg.popular ? 'bg-[#00A8C8] text-white' : 'bg-[#EAF9FD] text-[#00A8C8]'
                  }`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-bold text-[#637786]">{pkg.riders}</span>
                </div>

                <div>
                  <h3 className="font-heading font-black text-2xl text-[#172B3A] uppercase tracking-tight">
                    {pkg.name}
                  </h3>
                  <div className="text-xs font-bold text-[#1756C1] mt-0.5">{pkg.scope}</div>
                </div>

                <p className="text-xs text-[#637786] leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#DCECF2]">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-[#172B3A] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8C8] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4">
                <Link
                  href={`/book-campaign?package=${pkg.id}`}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    pkg.popular
                      ? 'bg-[#00A8C8] hover:bg-[#0093AF] text-white shadow-md'
                      : 'bg-[#F6FAFC] hover:bg-[#EAF9FD] text-[#172B3A] border border-[#DCECF2]'
                  }`}
                >
                  <span>Enquire Package</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
