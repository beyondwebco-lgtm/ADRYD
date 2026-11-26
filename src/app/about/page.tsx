import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Sparkles,
  Lock,
  UserCheck,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ADRYD | The Moving Marketplace',
  description:
    'Learn about ADRYD: an electric mobility-powered mobile advertising, product showcase, commerce and hyperlocal delivery platform.',
};

const sevenCapabilities = [
  { num: '01', title: 'Brand Promotion', desc: 'Eye-level mobile advertising across prime Hyderabad commercial corridors.', bg: 'bg-[#092D19]/80', border: 'border-[#B4F000]/30', color: 'text-[#B4F000]' },
  { num: '02', title: 'Product Showcasing', desc: 'Illuminated showcase display compartments letting customers view products up close.', bg: 'bg-[#005522]/60', border: 'border-[#65B32E]/30', color: 'text-[#65B32E]' },
  { num: '03', title: 'QR Commerce', desc: 'Scan-and-buy catalogues connecting curiosity with instant purchases.', bg: 'bg-[#092D19]/80', border: 'border-[#F4DE26]/30', color: 'text-[#F4DE26]' },
  { num: '04', title: 'Pre-Order Demand', desc: 'Capture advance orders and customer interest before major retail drops.', bg: 'bg-[#005522]/60', border: 'border-[#B4F000]/30', color: 'text-[#B4F000]' },
  { num: '05', title: 'Hyperlocal Delivery', desc: 'Fast local fulfilment and sample replenishment on electric vehicles.', bg: 'bg-[#092D19]/80', border: 'border-[#65B32E]/30', color: 'text-[#65B32E]' },
  { num: '06', title: 'Viral Social Content', desc: 'Street-to-screen reels and social amplification of real-world interactions.', bg: 'bg-[#005522]/60', border: 'border-[#F4DE26]/30', color: 'text-[#F4DE26]' },
  { num: '07', title: 'Verified Insights', desc: 'Planned route metrics, corridor impression logs and engagement reporting.', bg: 'bg-[#092D19]/80', border: 'border-[#E4EBE5]/30', color: 'text-[#E4EBE5]' },
];

const safetyPrinciples = [
  {
    title: 'Approved Vehicle Branding',
    desc: 'All wrap materials and display boxes preserve rider visibility, vehicle balance and road safety regulations.',
    icon: CheckCircle2,
    bg: 'bg-[#B4F000]/15',
    color: 'text-[#B4F000]',
  },
  {
    title: 'Rider Safety & Eligibility',
    desc: 'Promotional riders undergo licence verification, vehicle fitness checks and road safety orientation.',
    icon: UserCheck,
    bg: 'bg-[#65B32E]/15',
    color: 'text-[#65B32E]',
  },
  {
    title: 'Secure Product Handling',
    desc: 'Weather-sealed, impact-resistant showcase enclosures with mechanical locks protect displayed items.',
    icon: Lock,
    bg: 'bg-[#F4DE26]/15',
    color: 'text-[#F4DE26]',
  },
  {
    title: 'Venue & Corridor Permissions',
    desc: 'Showcase stops and sampling sessions are coordinated in approved commercial hubs and tech parks.',
    icon: MapPin,
    bg: 'bg-[#B4F000]/15',
    color: 'text-[#B4F000]',
  },
  {
    title: 'Verified Brand Standards',
    desc: 'Partner brands undergo standard verification to ensure genuine products and customer satisfaction.',
    icon: FileCheck,
    bg: 'bg-[#65B32E]/15',
    color: 'text-[#65B32E]',
  },
  {
    title: 'Responsible Data Practices',
    desc: 'Customer enquiry portals and QR interactions respect privacy with zero third-party data reselling.',
    icon: ShieldCheck,
    bg: 'bg-[#E4EBE5]/15',
    color: 'text-[#E4EBE5]',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 rounded-full bg-[#005522]/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Vision</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            YOUR BRAND.{' '}
            <br />
            <span className="text-[#B4F000] text-glow-lime">OUR MOVING MARKETPLACE.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E4EBE5] leading-relaxed font-normal">
            ADRYD connects brands and local customers through electric mobility, creative promotions and real-world product experiences across Hyderabad.
          </p>
        </div>

        {/* Image & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-[#B4F000]/25">
            <Image
              src="/images/adryd-fleet-hyderabad.jpg"
              alt="ADRYD Fleet"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl bg-[#092D19]/75 backdrop-blur-xl p-8 border border-[#B4F000]/25 space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <h2 className="font-heading font-bold text-2xl text-white">
                Transforming Everyday Transit into Commerce
              </h2>
              <p className="text-sm sm:text-base text-[#E4EBE5] leading-relaxed font-normal">
                Traditional static billboards are easily ignored. ADRYD turns zero-emission electric vehicles into moving storefronts and promotional units that meet people where they shop, work and socialize.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-campaign"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B4F000] text-[#092D19] text-xs font-black shadow-[0_4px_20px_rgba(180,240,0,0.3)] hover:bg-[#c3fc18] transition-colors"
                >
                  <span>Launch a Campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Capabilities Section */}
        <div className="mb-24">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="font-heading font-black text-3xl text-white uppercase">
              Seven Platform Capabilities
            </h2>
            <p className="text-sm text-[#E4EBE5]">
              A complete moving promotional and fulfilment network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sevenCapabilities.map((cap) => (
              <div
                key={cap.num}
                className={`rounded-3xl ${cap.bg} backdrop-blur-xl p-6 border ${cap.border} card-hover-lift space-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)]`}
              >
                <div className={`text-xs font-bold ${cap.color}`}>
                  Capability {cap.num}
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E4EBE5] leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Compliance Grid */}
        <div id="safety-trust" className="mb-20 scroll-mt-24">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="font-heading font-black text-3xl text-white uppercase">
              Safety, Compliance &amp; Trust
            </h2>
            <p className="text-sm text-[#E4EBE5]">
              Prioritizing road safety, verified operations and responsible branding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyPrinciples.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#092D19]/70 backdrop-blur-xl p-6 border border-[#B4F000]/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] card-hover-lift space-y-3"
                >
                  <div className={`w-11 h-11 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center font-bold`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E4EBE5] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}