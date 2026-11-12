import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Bike,
  Users,
  Building2,
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advertising Solutions | ADRYD Mobile EV Media',
  description:
    'Explore ADRYD mobile advertising campaign formats in Hyderabad: Single Rider, Dual Rider, Multi-Rider Fleet, Location Targeting, and ADRYD Upgrade mobile commerce showcases.',
};

const solutionsList = [
  {
    slug: 'single-rider',
    name: 'Single Rider Campaign',
    headline: 'Hyper-Local Street Visibility for Neighbourhood Brands',
    desc: 'Deploy a dedicated branded electric scooter covering targeted local retail corridors and residential catchments.',
    icon: Bike,
    specs: ['1 Electric Scooter & Rider', 'Local Zone Focus', 'Side & Rear Panels', '3 to 30 Day Packages'],
    cta: 'Explore Single Rider',
  },
  {
    slug: 'dual-rider',
    name: 'Dual Rider Campaign',
    headline: 'Synchronized Twin-Rider High-Recall Deployments',
    desc: 'Two branded electric two-wheelers moving in tandem or covering twin high-density corridors for maximum commuter noticeability.',
    icon: Users,
    specs: ['2 Electric Scooters & Riders', 'Tandem Corridor Sweeps', 'Double Street Frequency', 'High Launch Recall'],
    cta: 'Explore Dual Rider',
  },
  {
    slug: 'fleet-advertising',
    name: 'Multi-Rider Fleet Advertising',
    headline: 'Citywide Synchronized Blitz for Enterprises & FMCG',
    desc: 'Deploy a coordinated fleet of 4 to 10+ branded vehicles blanketing Hyderabad’s major tech corridors and commercial arteries.',
    icon: Building2,
    specs: ['4 to 10+ Electric Scooters', 'Multi-Corridor Coverage', 'Dedicated Operations Lead', 'Maximum Street Buzz'],
    cta: 'Explore Fleet Campaigns',
  },
  {
    slug: 'location-targeting',
    name: 'Location & Corridor Targeting',
    headline: 'Surgical Geographic Targeting by PIN Code & Arterial Roads',
    desc: 'Focus your campaign on precise business districts like HITEC City, Gachibowli, Madhapur, Jubilee Hills, and Kukatpally.',
    icon: Compass,
    specs: ['Commercial Zone Selection', 'PIN-Code Cluster Mapping', 'Arterial Road Schedules', 'Event & Metro Corridors'],
    cta: 'Explore Location Targeting',
  },
];

export default function SolutionsHubPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-electric-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-yellow/10 border border-electric-yellow/30 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" />
            Mobility Media Formats
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-6">
            Mobile Advertising Solutions{' '}
            <span className="text-electric-yellow">Engineered For Impact.</span>
          </h1>
          <p className="text-base sm:text-xl text-soft-ivory/80 leading-relaxed font-normal">
            From focused neighbourhood promotions to citywide multi-vehicle fleets, ADRYD offers
            flexible out-of-home advertising formats tailored to your business scale and launch goals.
          </p>
        </div>

        {/* 4 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {solutionsList.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.slug}
                className="p-8 rounded-2xl bg-carbon-card border border-graphite-border hover:border-electric-yellow/50 transition-all duration-300 flex flex-col justify-between shadow-2xl group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-graphite-border">
                    <div className="w-12 h-12 rounded-xl bg-carbon-card-hover border border-graphite-border flex items-center justify-center text-electric-yellow group-hover:bg-electric-yellow group-hover:text-carbon-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-tech text-electric-yellow uppercase tracking-widest">
                      Hyderabad Pilot
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white mb-2">
                    {sol.name}
                  </h3>
                  <div className="text-xs font-tech text-electric-yellow/90 uppercase mb-3 font-semibold">
                    {sol.headline}
                  </div>
                  <p className="text-sm text-muted-grey leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {sol.specs.map((s, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-graphite/40 border border-graphite-border text-xs text-soft-ivory/90 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-yellow shrink-0" />
                        <span className="line-clamp-1">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-graphite-border">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold text-white group-hover:text-electric-yellow transition-colors"
                  >
                    <span>{sol.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/book-campaign?package=${sol.slug}`}
                    className="px-4 py-2 rounded-lg bg-electric-yellow text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
                  >
                    Book Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison: ADRYD vs Traditional Billboards */}
        <div className="bg-carbon-card border border-graphite-border rounded-2xl p-8 sm:p-12 mb-20 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-tech font-bold uppercase tracking-widest text-electric-yellow mb-2">
              Performance Comparison
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase">
              Why Brands Choose Mobile EV Media Over Static Hoardings
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-graphite-border text-xs font-tech uppercase text-muted-grey">
                  <th className="py-4 px-4">Feature Dimension</th>
                  <th className="py-4 px-4 text-electric-yellow font-bold bg-carbon-card-hover border-x border-t border-graphite-border rounded-t-lg">
                    ADRYD Electric Mobility
                  </th>
                  <th className="py-4 px-4 text-muted-grey">Static Hoardings / Billboards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite-border text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-4 font-heading font-semibold text-white">Visual Perspective</td>
                  <td className="py-4 px-4 text-electric-yellow font-medium bg-carbon-card-hover/40 border-x border-graphite-border flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Eye-level pedestrian &amp; commuter field of view
                  </td>
                  <td className="py-4 px-4 text-muted-grey">High elevated angle easily missed</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-heading font-semibold text-white">Geographic Flexibility</td>
                  <td className="py-4 px-4 text-electric-yellow font-medium bg-carbon-card-hover/40 border-x border-graphite-border flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Flexible routes across multiple PIN codes
                  </td>
                  <td className="py-4 px-4 text-muted-grey">Locked to one static location</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-heading font-semibold text-white">Campaign Duration</td>
                  <td className="py-4 px-4 text-electric-yellow font-medium bg-carbon-card-hover/40 border-x border-graphite-border flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Flexible 3-day, 7-day, or monthly runs
                  </td>
                  <td className="py-4 px-4 text-muted-grey">Rigid monthly contracts with high lock-ins</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-heading font-semibold text-white">Environmental Footprint</td>
                  <td className="py-4 px-4 text-electric-yellow font-medium bg-carbon-card-hover/40 border-x border-graphite-border flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    100% Zero-Emission Electric Scooters
                  </td>
                  <td className="py-4 px-4 text-muted-grey">Heavy lighting energy &amp; non-recyclable flex</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-heading font-semibold text-white">Execution Proof</td>
                  <td className="py-4 px-4 text-electric-yellow font-medium bg-carbon-card-hover/40 border-x border-graphite-border flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Photo proofs + planned GPS telemetry summaries
                  </td>
                  <td className="py-4 px-4 text-muted-grey">No verified proof of impressions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#17191F] via-[#24212C] to-[#17191F] border border-graphite-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-1">
              Need Help Selecting The Right Campaign?
            </h3>
            <p className="text-xs sm:text-sm text-soft-ivory/80">
              Our Hyderabad campaign directors assist with traffic corridor mapping and quotation
              modeling.
            </p>
          </div>
          <Link
            href="/book-campaign"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Request Custom Quotation
          </Link>
        </div>
      </div>
    </div>
  );
}
