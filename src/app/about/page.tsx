import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  Target,
  Leaf,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Users,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ADRYD | The Electric Mobility Mobile Advertising Platform',
  description:
    'Discover the vision behind ADRYD. We connect advertisers with verified electric scooter riders to deliver measurable, location-targeted urban brand presence in Hyderabad.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-burgundy/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-electric-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" />
            Our Vision &amp; Platform Architecture
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-6">
            Sublet Space? No.{' '}
            <span className="text-electric-yellow">Move Brands Through The City.</span>
          </h1>
          <p className="text-base sm:text-xl text-soft-ivory/80 leading-relaxed font-normal">
            ADRYD was founded on a simple insight: traditional outdoor billboards are static,
            prohibitively expensive, and difficult to verify. Meanwhile, thousands of electric
            vehicles travel daily along prime commercial routes. ADRYD turns that daily transit into
            a dynamic, measurable brand channel.
          </p>
        </div>

        {/* Cinematic Grid: Image + Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-graphite-border shadow-2xl">
              <Image
                src="/images/adryd-fleet-hyderabad.jpg"
                alt="ADRYD Electric Mobility Fleet in Hyderabad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-carbon-black/85 backdrop-blur-md border border-white/10">
                <div className="text-xs font-tech font-bold text-electric-yellow uppercase">
                  Launch Market • Hyderabad
                </div>
                <div className="font-heading font-bold text-sm text-white mt-0.5">
                  HITEC City, Madhapur, Gachibowli, &amp; Jubilee Hills Corridors
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase leading-tight">
              An Asset-Light Managed Marketplace
            </h2>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              Rather than maintaining capital-heavy private fleets, ADRYD partners with vetted
              electric vehicle owners and riders across Hyderabad. We manage end-to-end campaign
              scheduling, vehicle-compliant branding installation, and execution accountability.
            </p>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              This approach gives advertisers flexible, on-demand promotional power—from a single
              neighbourhood scooter to a multi-rider fleet—while empowering local EV riders with
              supplemental earnings.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-graphite-border">
              <div>
                <div className="font-heading font-black text-3xl text-electric-yellow">100%</div>
                <div className="text-xs text-muted-grey mt-1">Zero-Emission EV Transit</div>
              </div>
              <div>
                <div className="font-heading font-black text-3xl text-white">Pilot</div>
                <div className="text-xs text-muted-grey mt-1">Controlled Urban Validation</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Operating Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-tech font-bold uppercase tracking-widest text-electric-yellow mb-2">
              Guiding Principles
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
              How We Create Enduring Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-carbon-card border border-graphite-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Hyper-Local Relevance
              </h3>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                We don&apos;t blast impressions into the void. Campaigns are focused along the exact
                corridors, PIN codes, and business zones where your target customers live and commute.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-carbon-card border border-graphite-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Clean Electric Mobility
              </h3>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                Outdoor marketing should not add smog to city streets. By leveraging 100% electric
                two-wheelers, your brand associates with clean, forward-thinking sustainability.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-carbon-card border border-graphite-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Compliance &amp; Safety First
              </h3>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                All branding formats strictly follow vehicle safety norms, non-distracting visual
                standards, and local municipal transport guidelines. Rider safety is paramount.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-10 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
              Ready to collaborate with ADRYD?
            </h3>
            <p className="text-sm text-soft-ivory/80 mt-1 max-w-xl">
              We welcome forward-thinking retail brands, agencies, and EV owners to participate in
              our Hyderabad pilot launch.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/book-campaign"
              className="px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
            >
              Launch Campaign
            </Link>
            <Link
              href="/become-a-rider"
              className="px-6 py-3 rounded-xl bg-graphite hover:bg-graphite-light text-white font-heading font-semibold text-xs border border-graphite-border"
            >
              Join as Rider
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
