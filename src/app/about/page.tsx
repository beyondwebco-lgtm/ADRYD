import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Sparkles,
  FileCheck,
  Lock,
  UserCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ADRYD Upgrade | Our Moving Marketplace Vision',
  description:
    'Learn about ADRYD Upgrade: an electric mobility-powered mobile advertising, product showcase, commerce, pre-orders and hyperlocal delivery platform in Hyderabad.',
};

const sevenCapabilities = [
  '01 — Brand Promotion across high-recall commercial corridors',
  '02 — Live Product Showcasing via illuminated mobile display units',
  '03 — Mobile QR Selling and instant purchase assistance',
  '04 — Pre-Order Generation & group bookings for teams and communities',
  '05 — Hyperlocal Delivery & promotional store replenishment',
  '06 — Social Media Amplification through reels, B-roll & storytelling',
  '07 — Verified Campaign Insights and telemetry reporting (Roadmap)',
];

const safetyPrinciples = [
  {
    title: 'Approved Vehicle Branding',
    desc: 'All wrap materials, display boxes, and livery strictly follow motor vehicle regulations, preserving rider visibility, vehicle balance, and road safety.',
    icon: CheckCircle2,
  },
  {
    title: 'Rider Safety & Eligibility',
    desc: 'Promotional riders undergo driving licence verification, vehicle fitness checks, and road etiquette orientation before participating in active corridor runs.',
    icon: UserCheck,
  },
  {
    title: 'Secure Product Handling',
    desc: 'Custom illuminated display enclosures use weather-sealed, impact-resistant acrylic structures with secure mechanical locks.',
    icon: Lock,
  },
  {
    title: 'Venue & Location Permissions',
    desc: 'Stationary showcase stops and sampling sessions are coordinated in approved commercial hubs and private tech park locations.',
    icon: MapPin,
  },
  {
    title: 'Verified Seller Standards',
    desc: 'Promotional brand partners undergo basic business verification to ensure genuine product representations and transparent customer support.',
    icon: FileCheck,
  },
  {
    title: 'Responsible Data Practices',
    desc: 'Customer enquiry portals and QR catalogue interactions adhere to privacy-by-design standards with no third-party data reselling.',
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#B8B8B8] pt-32 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#03F2FF]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101010] border border-[#03F2FF]/30 text-[#03F2FF] text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#03F2FF]" />
            OUR VISION &amp; OPERATING MODEL
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#FFFFFF] uppercase leading-[1.02] mb-6">
            YOUR BRAND.{' '}
            <br />
            YOUR PRODUCTS.{' '}
            <br />
            <span className="text-[#E7FF39]">OUR MOVING MARKETPLACE.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#B8B8B8] leading-relaxed font-normal">
            ADRYD is an electric mobility-powered mobile advertising, product showcase, commerce,
            pre-orders and hyperlocal delivery platform. We connect brands and local customers through
            daily electric vehicle movement across Hyderabad.
          </p>
        </div>

        {/* Cinematic Grid: Image + Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#222222] shadow-2xl">
              <Image
                src="/images/adryd-fleet-hyderabad.jpg"
                alt="ADRYD Electric Mobility Fleet in Hyderabad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#000000]/90 backdrop-blur-md border border-[#222222]">
                <div className="text-xs font-tech font-bold text-[#03F2FF] uppercase">
                  Hyderabad Pilot Launch Market
                </div>
                <div className="font-heading font-bold text-sm text-[#FFFFFF] mt-0.5">
                  HITEC City, Madhapur, Kukatpally, Kompally &amp; Gachibowli
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-tech text-[#03F2FF] uppercase font-bold tracking-wider">
              Beyond Static Billboards
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#FFFFFF] uppercase leading-tight">
              A Moving Marketplace &amp; Promotional Fulfilment Network
            </h2>
            <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed">
              Traditional out-of-home advertising is static, expensive, and distant from immediate commerce.
              ADRYD brings brand messages, physical product discovery, and digital purchasing directly to
              where people live, work, dine, and commute.
            </p>
            <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed">
              By equipping verified electric scooters with high-recall branding, illuminated showcase units,
              and contactless QR codes, ADRYD transforms daily urban mobility into an engaging moving
              marketplace.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#222222]">
              <div>
                <div className="font-heading font-black text-3xl text-[#E7FF39]">100%</div>
                <div className="text-xs text-[#888888] mt-1 font-tech uppercase">Zero-Emission EV Fleet</div>
              </div>
              <div>
                <div className="font-heading font-black text-3xl text-[#FFFFFF]">Pilot</div>
                <div className="text-xs text-[#888888] mt-1 font-tech uppercase">Controlled Urban Validation</div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Capabilities Pillar Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#101010] border border-[#222222] shadow-2xl mb-24">
          <div className="max-w-2xl mb-8">
            <span className="font-tech text-xs text-[#03F2FF] uppercase font-bold">
              Integrated Capabilities
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#FFFFFF] uppercase mt-1">
              What ADRYD Enables Businesses to Explore
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] mt-2 leading-relaxed">
              Seven interconnected pillars uniting physical visibility with digital sales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sevenCapabilities.map((cap, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#000000] border border-[#222222] flex items-center gap-3 text-xs text-[#B8B8B8] font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E7FF39] shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Principles / Safety & Trust */}
        <div id="safety-trust" className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="font-tech text-xs text-[#03F2FF] uppercase font-bold">
              Safety &amp; Compliance Guidelines
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#FFFFFF] uppercase mt-1">
              Built Around Responsible Operations
            </h2>
            <p className="text-xs sm:text-sm text-[#888888] mt-2 leading-relaxed">
              Our operating framework is structured around rider welfare, road compliance, secure
              merchandise handling, and consumer trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyPrinciples.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#101010] border border-[#222222] flex flex-col justify-between hover:border-[#03F2FF]/40 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#222222] flex items-center justify-center text-[#E7FF39] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#FFFFFF] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#888888] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#101010] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-2xl text-[#FFFFFF] uppercase">
              Ready to Explore ADRYD Upgrade?
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] mt-1 max-w-xl">
              Plan your promotional campaign or register your electric vehicle fleet in Hyderabad.
            </p>
          </div>
          <Link
            href="/book-campaign"
            className="shrink-0 px-8 py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#000000] font-heading font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.3)]"
          >
            Launch a Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
