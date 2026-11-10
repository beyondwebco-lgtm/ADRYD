import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dual Rider Advertising Campaign | ADRYD Hyderabad',
  description:
    'Two-vehicle coordinated electric scooter advertising in Hyderabad. High-recall tandem corridor sweeps for store openings, food apps, and seasonal sales.',
};

export default function DualRiderPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            Coordinated Recall Format
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            Dual Rider Campaign
          </h1>
          <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
            Two branded electric scooters moving in synchronized formation or covering complementary
            high-density corridors. Delivers 2x the street frequency and instant visual curiosity.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Fleet Composition</div>
            <div className="font-heading font-black text-2xl text-white">2 EVs + 2 Riders</div>
            <p className="text-xs text-muted-grey mt-2">
              Tandem pairing along primary avenues or split coverage across neighbouring sectors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Impact Multiplier</div>
            <div className="font-heading font-black text-2xl text-white">2x Recall Rate</div>
            <p className="text-xs text-muted-grey mt-2">
              Consecutive impressions create strong psychological brand authority among commuters.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Target Corridors</div>
            <div className="font-heading font-black text-2xl text-white">Twin Zones</div>
            <p className="text-xs text-muted-grey mt-2">
              e.g. HITEC City + Madhapur or Jubilee Hills + Banjara Hills road networks.
            </p>
          </div>
        </div>

        {/* Strategy Breakdown */}
        <div className="bg-carbon-card border border-graphite-border rounded-2xl p-8 mb-12 space-y-6">
          <h3 className="font-heading font-bold text-2xl text-white">
            Dual Deployment Strategies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-graphite/40 border border-graphite-border">
              <h4 className="font-heading font-bold text-lg text-electric-yellow mb-2">
                1. Tandem Street Convoy
              </h4>
              <p className="text-xs text-muted-grey leading-relaxed">
                Both riders cruise within visual range of one another along major arterial roads.
                When pedestrians see one branded scooter followed immediately by another, brand recall
                spikes dramatically.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-graphite/40 border border-graphite-border">
              <h4 className="font-heading font-bold text-lg text-electric-yellow mb-2">
                2. Pinch-Point Corridor Sweep
              </h4>
              <p className="text-xs text-muted-grey leading-relaxed">
                One rider covers inbound office commute traffic while the second covers outbound
                residential lanes during morning and evening rush hours.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Launch a Dual Rider Campaign in Hyderabad
            </h4>
            <p className="text-xs text-soft-ivory/80 mt-1">
              Popular for 7-day store openings and flash promotional discounts.
            </p>
          </div>
          <Link
            href="/book-campaign?package=dual-rider"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Enquire Dual Rider
          </Link>
        </div>
      </div>
    </div>
  );
}
