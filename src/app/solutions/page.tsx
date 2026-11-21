import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Bike,
  Users,
  Building2,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campaign Formats & Solutions | ADRYD',
  description:
    'Explore ADRYD mobile advertising campaign formats in Hyderabad: Single Rider, Dual Rider, Multi-Rider Fleet and Location Targeting.',
};

const solutionsList = [
  {
    slug: 'single-rider',
    name: 'Single Rider Campaign',
    headline: 'Hyper-Local Street Visibility for Neighborhood Brands',
    desc: 'Deploy a dedicated branded electric scooter covering targeted local retail corridors and residential catchments.',
    icon: Bike,
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#DCECF2]',
    color: 'text-[#00A8C8]',
    specs: ['1 Electric Scooter & Rider', 'Local Corridor Focus', 'Side & Rear Panels', '3 to 30 Day Packages'],
  },
  {
    slug: 'dual-rider',
    name: 'Dual Rider Campaign',
    headline: 'Synchronized Twin-Rider High-Recall Deployments',
    desc: 'Two branded electric two-wheelers moving in tandem across twin commercial zones for multiplied commuter recall.',
    icon: Users,
    bg: 'bg-[#F6FAFC]',
    border: 'border-[#DCECF2]',
    color: 'text-[#1756C1]',
    specs: ['2 Electric Scooters & Riders', 'Tandem Corridor Sweeps', 'Double Street Frequency', 'High Launch Recall'],
  },
  {
    slug: 'fleet-advertising',
    name: 'Multi-Rider Fleet Advertising',
    headline: 'Citywide Synchronized Blitz for Enterprises & Retailers',
    desc: 'Deploy a coordinated fleet of 4 to 10+ branded vehicles blanketing Hyderabad’s prime tech hubs and shopping districts.',
    icon: Building2,
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#DCECF2]',
    color: 'text-[#123C83]',
    specs: ['4 to 10+ Electric Scooters', 'Multi-Corridor Coverage', 'Dedicated Operations Lead', 'Maximum Street Buzz'],
  },
  {
    slug: 'location-targeting',
    name: 'Location & Corridor Targeting',
    headline: 'Surgical Geographic Targeting by Prime Corridors',
    desc: 'Focus your campaign on precise business corridors: HITEC City, Gachibowli, Madhapur, Jubilee Hills, and Kukatpally.',
    icon: Compass,
    bg: 'bg-[#F6FAFC]',
    border: 'border-[#DCECF2]',
    color: 'text-[#58C9EF]',
    specs: ['Commercial Zone Selection', 'PIN-Code Cluster Mapping', 'Arterial Road Schedules', 'Event & Metro Corridors'],
  },
];

export default function SolutionsHubPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Campaign Formats
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Tailored solutions for{' '}
            <br />
            <span className="text-[#00A8C8]">every campaign goal.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            From focused single-neighborhood brand visibility to citywide synchronized multi-rider activations.
          </p>
        </div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {solutionsList.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.slug}
                className={`rounded-3xl ${sol.bg} border ${sol.border} p-8 lg:p-10 card-hover-lift flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${sol.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-heading font-black text-2xl text-[#172B3A]">
                      {sol.name}
                    </h2>
                    <p className={`text-xs font-bold mt-1 ${sol.color}`}>
                      {sol.headline}
                    </p>
                    <p className="text-sm text-[#637786] leading-relaxed mt-2.5">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="pt-2 grid grid-cols-2 gap-2">
                    {sol.specs.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-[#172B3A]">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${sol.color} shrink-0`} />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between border-t border-[#DCECF2]">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-xs font-bold text-[#172B3A] hover:text-[#00A8C8] transition-colors"
                  >
                    View Details
                  </Link>

                  <Link
                    href={`/book-campaign?format=${sol.slug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-sm transition-all bg-[#00A8C8] hover:bg-[#0091AD]"
                  >
                    <span>Enquire Format</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
