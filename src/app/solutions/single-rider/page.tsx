import type { Metadata } from 'next';
import Link from 'next/link';
import { Bike, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Single Rider Advertising Campaign | ADRYD Hyderabad',
  description:
    'Dedicated single electric scooter advertising in Hyderabad. Hyper-local brand presence for retail stores, clinics, cafes, and neighbourhood services.',
};

export default function SingleRiderPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Bike className="w-3.5 h-3.5" />
            Hyper-Local Mobility Format
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            Single Rider Campaign
          </h1>
          <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
            One dedicated electric scooter and rider operating within a defined neighbourhood
            corridor. Ideal for local businesses seeking high frequency, high-recall street exposure
            without enterprise budgets.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Fleet Scale</div>
            <div className="font-heading font-black text-2xl text-white">1 EV + 1 Rider</div>
            <p className="text-xs text-muted-grey mt-2">
              Dedicated vehicle operating in your chosen 3-5 km neighbourhood commercial radius.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Branding Inventory</div>
            <div className="font-heading font-black text-2xl text-white">Side &amp; Rear Panels</div>
            <p className="text-xs text-muted-grey mt-2">
              High-visibility weather-resistant vehicle body decals and branded promotional bag/box.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon-card border border-graphite-border">
            <div className="text-xs font-tech uppercase text-electric-yellow mb-1">Flexible Packages</div>
            <div className="font-heading font-black text-2xl text-white">3 to 30 Days</div>
            <p className="text-xs text-muted-grey mt-2">
              Hourly, daily, or distance-based booking models to suit your promotion timeline.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-carbon-card border border-graphite-border rounded-2xl p-8 mb-12 space-y-6">
          <h3 className="font-heading font-bold text-2xl text-white">
            Why Single Rider Works for Local Brands
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block">Neighbourhood Saturation</strong>
                <span className="text-xs text-muted-grey">
                  Repeated daily sweeps past target residential apartments, metro stations, and local markets.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block">Accessible Entry Point</strong>
                <span className="text-xs text-muted-grey">
                  Perfect for testing outdoor advertising before scaling to multi-vehicle fleets.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block">Eye-Level Visibility</strong>
                <span className="text-xs text-muted-grey">
                  Commuters and pedestrians at traffic signals engage directly with your brand message.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block">Photographic Verification</strong>
                <span className="text-xs text-muted-grey">
                  Receive pre-launch installation photos and scheduled execution logs.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Launch a Single Rider Campaign in Hyderabad
            </h4>
            <p className="text-xs text-soft-ivory/80 mt-1">
              Share your target area and dates to receive a tailored quotation within 24 hours.
            </p>
          </div>
          <Link
            href="/book-campaign?package=single-rider"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Enquire Single Rider
          </Link>
        </div>
      </div>
    </div>
  );
}
