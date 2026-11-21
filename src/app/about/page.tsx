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
  { num: '01', title: 'Brand Promotion', desc: 'Eye-level mobile advertising across prime Hyderabad commercial corridors.', bg: 'bg-[#EAF9FD]', border: 'border-[#D5EFF7]', color: 'text-[#00A8C8]' },
  { num: '02', title: 'Product Showcasing', desc: 'Illuminated showcase display compartments letting customers view products up close.', bg: 'bg-[#F0ECFF]', border: 'border-[#E4DCFF]', color: 'text-[#7856FF]' },
  { num: '03', title: 'QR Commerce', desc: 'Scan-and-buy catalogues connecting curiosity with instant purchases.', bg: 'bg-[#EAF9FD]', border: 'border-[#D5EFF7]', color: 'text-[#00A8C8]' },
  { num: '04', title: 'Pre-Order Demand', desc: 'Capture advance orders and customer interest before major retail drops.', bg: 'bg-[#F0ECFF]', border: 'border-[#E4DCFF]', color: 'text-[#7856FF]' },
  { num: '05', title: 'Hyperlocal Delivery', desc: 'Fast local fulfilment and sample replenishment on electric vehicles.', bg: 'bg-[#EAF9FD]', border: 'border-[#D5EFF7]', color: 'text-[#00A8C8]' },
  { num: '06', title: 'Viral Social Content', desc: 'Street-to-screen reels and social amplification of real-world interactions.', bg: 'bg-[#F0ECFF]', border: 'border-[#E4DCFF]', color: 'text-[#7856FF]' },
  { num: '07', title: 'Verified Insights', desc: 'Planned route metrics, corridor impression logs and engagement reporting.', bg: 'bg-[#F6FAFC]', border: 'border-[#DFEAF0]', color: 'text-[#123C83]' },
];

const safetyPrinciples = [
  {
    title: 'Approved Vehicle Branding',
    desc: 'All wrap materials and display boxes preserve rider visibility, vehicle balance and road safety regulations.',
    icon: CheckCircle2,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#00A8C8]',
  },
  {
    title: 'Rider Safety & Eligibility',
    desc: 'Promotional riders undergo licence verification, vehicle fitness checks and road safety orientation.',
    icon: UserCheck,
    bg: 'bg-[#F0ECFF]',
    color: 'text-[#7856FF]',
  },
  {
    title: 'Secure Product Handling',
    desc: 'Weather-sealed, impact-resistant showcase enclosures with mechanical locks protect displayed items.',
    icon: Lock,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#123C83]',
  },
  {
    title: 'Venue & Corridor Permissions',
    desc: 'Showcase stops and sampling sessions are coordinated in approved commercial hubs and tech parks.',
    icon: MapPin,
    bg: 'bg-[#EAF9FD]',
    color: 'text-[#00A8C8]',
  },
  {
    title: 'Verified Brand Standards',
    desc: 'Partner brands undergo standard verification to ensure genuine products and customer satisfaction.',
    icon: FileCheck,
    bg: 'bg-[#F0ECFF]',
    color: 'text-[#7856FF]',
  },
  {
    title: 'Responsible Data Practices',
    desc: 'Customer enquiry portals and QR interactions respect privacy with zero third-party data reselling.',
    icon: ShieldCheck,
    bg: 'bg-[#F6FAFC]',
    color: 'text-[#123C83]',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Vision</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            YOUR BRAND.{' '}
            <br />
            <span className="text-[#00A8C8]">OUR MOVING MARKETPLACE.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            ADRYD connects brands and local customers through electric mobility, creative promotions and real-world product experiences across Hyderabad.
          </p>
        </div>

        {/* Image & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,168,200,0.06)] border border-[#DCECF2]">
            <Image
              src="/images/adryd-fleet-hyderabad.jpg"
              alt="ADRYD Fleet"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl bg-[#F6FAFC] p-8 border border-[#DCECF2] space-y-4">
              <h2 className="font-heading font-bold text-2xl text-[#172B3A]">
                Transforming Everyday Transit into Commerce
              </h2>
              <p className="text-sm sm:text-base text-[#637786] leading-relaxed font-normal">
                Traditional static billboards are easily ignored. ADRYD turns zero-emission electric vehicles into moving storefronts and promotional units that meet people where they shop, work and socialize.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-campaign"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A8C8] text-white text-xs font-bold shadow-sm hover:bg-[#0093AF] transition-colors"
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
            <h2 className="font-heading font-black text-3xl text-[#172B3A] uppercase">
              Seven Platform Capabilities
            </h2>
            <p className="text-sm text-[#637786]">
              A complete moving promotional and fulfilment network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sevenCapabilities.map((cap) => (
              <div
                key={cap.num}
                className={`rounded-3xl ${cap.bg} p-6 border ${cap.border} card-hover-lift space-y-2`}
              >
                <div className={`text-xs font-bold ${cap.color}`}>
                  Capability {cap.num}
                </div>
                <h3 className="font-heading font-bold text-lg text-[#172B3A]">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#637786] leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Compliance Grid */}
        <div id="safety-trust" className="mb-20 scroll-mt-24">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="font-heading font-black text-3xl text-[#172B3A] uppercase">
              Safety, Compliance &amp; Trust
            </h2>
            <p className="text-sm text-[#637786]">
              Prioritizing road safety, verified operations and responsible branding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyPrinciples.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white p-6 border border-[#DCECF2] shadow-sm card-hover-lift space-y-3"
                >
                  <div className={`w-11 h-11 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center font-bold`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#172B3A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#637786] leading-relaxed font-normal">
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
