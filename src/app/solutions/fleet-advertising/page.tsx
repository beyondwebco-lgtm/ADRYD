import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, CheckCircle2, ArrowRight, Zap, Layers, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Rider Fleet Advertising | ADRYD Hyderabad',
  description:
    'Coordinated multi-vehicle electric scooter fleets across Hyderabad. Citywide dominance for enterprise product launches, fintech apps, and FMCG brands.',
};

export default function FleetAdvertisingPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-yellow/10 border border-electric-yellow/30 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Enterprise Fleet Media
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            Multi-Rider Fleet
          </h1>
          <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
            Deploy an unmistakable coordinated presence of 4 to 10+ branded electric vehicles.
            Saturate Hyderabad’s tech hubs, commercial avenues, and high-traffic metro hubs
            simultaneously for undeniable street buzz.
          </p>
        </div>

        {/* Fleet Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Fleet Capacity</div>
            <div className="font-heading font-black text-2xl text-white">4 to 10+ EVs</div>
            <p className="text-xs text-muted-grey mt-2">
              Scalable multi-vehicle deployment customized to your city campaign scope.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Multi-Zone Coverage</div>
            <div className="font-heading font-black text-2xl text-white">Citywide Grid</div>
            <p className="text-xs text-muted-grey mt-2">
              Simultaneous presence across HITEC City, Jubilee Hills, Gachibowli, and Secunderabad.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Operations Lead</div>
            <div className="font-heading font-black text-2xl text-white">Dedicated Lead</div>
            <p className="text-xs text-muted-grey mt-2">
              Dedicated field manager coordinating route execution, vehicle readiness, and daily reporting.
            </p>
          </div>
        </div>

        {/* Enterprise Advantages */}
        <div className="bg-carbon-card border border-graphite-border rounded-2xl p-8 mb-12 space-y-6">
          <h3 className="font-heading font-bold text-2xl text-white">
            Enterprise Fleet Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-muted-grey">
            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-1.5">
              <strong className="text-white text-sm block">Synchronized Rush-Hour Surges</strong>
              <p>
                Coordinate entire fleet presence outside major tech parks like Mindspace and Knowledge
                City during peak employee ingress and egress hours.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-1.5">
              <strong className="text-white text-sm block">Branded Apparel &amp; Accessories</strong>
              <p>
                Riders wear approved ADRYD-certified branded jackets, caps, and helmets to complement
                vehicle body branding for unified visual impact.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-1.5">
              <strong className="text-white text-sm block">Custom Fleet PR Events</strong>
              <p>
                Organize authorized flag-off convoys for high-profile product announcements and social
                media coverage.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border space-y-1.5">
              <strong className="text-white text-sm block">Consolidated Media Audit</strong>
              <p>
                Receive unified executive campaign summaries with installation photos and route log
                rollups for marketing leadership and agency review.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#17191F] via-[#24212C] to-[#17191F] border border-graphite-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Plan an Enterprise Fleet Campaign
            </h4>
            <p className="text-xs text-soft-ivory/80 mt-1">
              Discuss multi-vehicle allocations, dates, and custom showcase integrations.
            </p>
          </div>
          <Link
            href="/book-campaign?package=multi-rider-fleet"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Enquire Fleet Package
          </Link>
        </div>
      </div>
    </div>
  );
}
