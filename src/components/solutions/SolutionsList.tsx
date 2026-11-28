'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bike,
  Users,
  Building2,
  Compass,
  ArrowRight,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { SOLUTIONS_CARD_DETAILS, DetailCardItem } from '@/data/websiteCardsData';
import CardDetailsModal from '@/components/ui/CardDetailsModal';

interface SolutionFormat {
  slug: string;
  name: string;
  headline: string;
  desc: string;
  icon: React.ElementType;
  bg: string;
  border: string;
  color: string;
  specs: string[];
}

const solutionsList: SolutionFormat[] = [
  {
    slug: 'single-rider',
    name: 'Single Rider Campaign',
    headline: 'Hyper-Local Street Visibility for Neighborhood Brands',
    desc: 'Deploy a dedicated branded electric scooter covering targeted local retail corridors and residential catchments.',
    icon: Bike,
    bg: 'bg-[#041220]/80',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
    specs: ['1 Electric Scooter & Rider', 'Local Corridor Focus', 'Side & Rear Panels', '3 to 30 Day Packages'],
  },
  {
    slug: 'dual-rider',
    name: 'Dual Rider Campaign',
    headline: 'Synchronized Twin-Rider High-Recall Deployments',
    desc: 'Two branded electric two-wheelers moving in tandem across twin commercial zones for multiplied commuter recall.',
    icon: Users,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
    specs: ['2 Electric Scooters & Riders', 'Tandem Corridor Sweeps', 'Double Street Frequency', 'High Launch Recall'],
  },
  {
    slug: 'fleet-advertising',
    name: 'Multi-Rider Fleet Advertising',
    headline: 'Citywide Synchronized Blitz for Enterprises & Retailers',
    desc: 'Deploy a coordinated fleet of 4 to 10+ branded vehicles blanketing Hyderabad’s prime tech hubs and shopping districts.',
    icon: Building2,
    bg: 'bg-[#041220]/80',
    border: 'border-[#0A9BE0]/30 hover:border-[#0A9BE0]',
    color: 'text-[#0A9BE0]',
    specs: ['4 to 10+ Electric Scooters', 'Multi-Corridor Coverage', 'Dedicated Operations Lead', 'Maximum Street Buzz'],
  },
  {
    slug: 'location-targeting',
    name: 'Location & Corridor Targeting',
    headline: 'Surgical Geographic Targeting by Prime Corridors',
    desc: 'Focus your campaign on precise business corridors: HITEC City, Gachibowli, Madhapur, Jubilee Hills, and Kukatpally.',
    icon: Compass,
    bg: 'bg-[#051C33]/75',
    border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
    color: 'text-[#B4F000]',
    specs: ['Commercial Zone Selection', 'PIN-Code Cluster Mapping', 'Arterial Road Schedules', 'Event & Metro Corridors'],
  },
];

export default function SolutionsList() {
  const [selectedSolution, setSelectedSolution] = useState<DetailCardItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {solutionsList.map((sol) => {
          const Icon = sol.icon;
          const detailItem = SOLUTIONS_CARD_DETAILS[sol.slug] || null;

          return (
            <div
              key={sol.slug}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedSolution(detailItem)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedSolution(detailItem);
                }
              }}
              className={`group rounded-3xl ${sol.bg} backdrop-blur-xl border ${sol.border} p-8 lg:p-10 card-hover-lift flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.35)] cursor-pointer relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B4F000]`}
            >
              {/* Subtle top indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-white/70 group-hover:text-white group-hover:bg-[#0A9BE0]/20 group-hover:border-[#0A9BE0]/40 transition-all">
                <Maximize2 className="w-3.5 h-3.5 text-[#B4F000]" />
                <span>Click for Details</span>
              </div>

              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl bg-[#041220]/80 border border-[#B4F000]/30 shadow-sm flex items-center justify-center ${sol.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading font-black text-2xl text-white">
                    {sol.name}
                  </h2>
                  <p className={`text-xs font-bold mt-1 ${sol.color}`}>
                    {sol.headline}
                  </p>
                  <p className="text-sm text-[#E2E8F0] leading-relaxed mt-2.5">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-2">
                  {sol.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#E2E8F0]">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${sol.color} shrink-0`} />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 flex items-center justify-between border-t border-[#B4F000]/15">
                <span className="text-xs font-bold text-white group-hover:text-[#B4F000] transition-colors flex items-center gap-1">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>

                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black text-[#000000] shadow-[0_4px_15px_rgba(180,240,0,0.3)] transition-all bg-[#B4F000] group-hover:bg-[#c3fc18]">
                  <span>Enquire Format</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium Smooth Animated Details Modal */}
      <CardDetailsModal
        item={selectedSolution}
        onClose={() => setSelectedSolution(null)}
      />
    </>
  );
}
