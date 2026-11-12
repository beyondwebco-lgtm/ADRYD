import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  QrCode,
  ShoppingBag,
  PackageCheck,
  Video,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Truck,
  Eye,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADRYD Upgrade | Next-Gen Mobile Commerce & Product Discovery',
  description:
    'Discover ADRYD Upgrade: turning electric vehicle transit into moving product showcases, contactless QR pre-orders, and hyperlocal fulfillment across Hyderabad.',
};

const sixSteps = [
  {
    num: '01',
    title: 'Brand Promotion',
    subtitle: 'Corridor Visibility',
    desc: 'High-recall electric scooter wrapping and branded rider apparel move along planned commercial arterial routes across Hyderabad.',
    icon: Eye,
  },
  {
    num: '02',
    title: 'Product Showcase',
    subtitle: 'Live Tactile Display',
    desc: 'Weather-sealed, illuminated acrylic display enclosures securely mounted on electric vehicles bring genuine products directly to where customers congregate.',
    icon: Sparkles,
  },
  {
    num: '03',
    title: 'QR Product Discovery',
    subtitle: 'Digital Gateway',
    desc: 'Commuters scan high-contrast glowing QR codes mounted on the vehicle, instantly launching mobile-optimized brand catalogues and discount vouchers.',
    icon: QrCode,
  },
  {
    num: '04',
    title: 'Customer Enquiry or Order',
    subtitle: 'Purchase Assistance',
    desc: 'Trained promotional riders assist curious shoppers with product questions, lead submissions, or instant online order placement.',
    icon: ShoppingBag,
  },
  {
    num: '05',
    title: 'Pre-Order & Group Demand',
    subtitle: 'Batch Pre-Bookings',
    desc: 'Scheduled stationary stops at IT parks, gated communities, and student hostels aggregate bulk pre-orders and corporate gifting leads.',
    icon: PackageCheck,
  },
  {
    num: '06',
    title: 'Local Fulfilment',
    subtitle: 'Hyperlocal Deliveries',
    desc: 'Promotional mobility coordinates with local batch fulfillment, direct customer handoffs, or local retail store replenishment.',
    icon: Truck,
  },
];

const sampleConcepts = [
  {
    title: 'Handcrafted Woollen & Crochet Wear',
    archetype: 'Artisan & Apparel Concept',
    heroTag: 'CrochetNest Demonstration',
    tagline: 'Sweaters, Cardigans, Crochet Bags & Home Décor',
    desc: 'Artisanal makers frequently face prohibitive shopping mall retail rents. ADRYD Upgrade enables direct physical exposure outside women’s hostels, universities, and tech parks during winter and festive gifting seasons.',
    features: [
      'Live tactile product experience: shoppers can touch and feel the weave quality',
      'Illuminated display case protects delicate handcrafted textiles from dust and weather',
      'Instant QR scan to pre-order or purchase online with promotional launch codes',
      'Captures high-value bulk gifting inquiries from student hostels and corporate teams',
    ],
    poster: '/images/posters/crochet-nest.jpg',
  },
  {
    title: 'Authentic Handloom Sarees & Silk Heritage',
    archetype: 'Ethnic Heritage Concept',
    heroTag: 'IkatVastra Demonstration',
    tagline: 'Pochampally Pattu, Pure Silk & Festive Weaves',
    desc: 'Bring exquisite GI-tagged silk weaves directly into upscale shopping high-streets, wedding community centers, and corporate corridors, bridging heritage craftsmanship with mobile discovery.',
    features: [
      'Vibrant fabric colors highlighted by 360° warm interior showcase LED lighting',
      'High footfall eye-level visibility at prime Hyderabad shopping intersections',
      'Contactless QR code for wedding registries, customized weaves & pre-bookings',
      'Organic social shares as commuters photograph and film the illuminated moving showcase',
    ],
    poster: '/images/posters/ikat-vastra.jpg',
  },
  {
    title: 'Pure Linen & Menswear Collections',
    archetype: 'Direct-to-Consumer Concept',
    heroTag: 'LinenNest Demonstration',
    tagline: 'Pure Linen Shirts, Pants & Summer Casuals',
    desc: 'D2C fashion labels can execute launch blitz campaigns across business districts, offering 50% launch discount vouchers via glowing on-vehicle QR codes.',
    features: [
      'Cost-effective alternative to multi-lakh static outdoor billboard hoardings',
      'High conversion from physical product inspection to digital e-commerce cart',
      'Targeted arrival at commercial IT parks during peak lunch-hour footfall windows',
      'Captures qualified lead registrations and bulk corporate uniform inquiries',
    ],
    poster: '/images/posters/linen-nest.jpg',
  },
];

export default function AdrydUpgradePage() {
  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#24212C]/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E7FF39]" />
            CONNECTED MOBILE COMMERCE
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-[0.98] mb-6">
            FROM BRAND VISIBILITY{' '}
            <br />
            TO PRODUCT DISCOVERY{' '}
            <br />
            <span className="text-[#E7FF39]">TO COMMERCE.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#A5A8B3] leading-relaxed font-normal">
            ADRYD Upgrade explores a connected mobile commerce model where electric vehicles become brand
            touchpoints, product showcases and gateways to local shopping experiences.
          </p>
        </div>

        {/* Feature Hero: Large Image + 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#353740] shadow-2xl">
              <Image
                src="/images/adryd-mobile-showcase.jpg"
                alt="ADRYD Upgrade Mobile Showcase Detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0C0D12]/90 backdrop-blur-md border border-[#353740]">
                <div className="text-[10px] font-tech font-bold text-[#E7FF39] uppercase tracking-widest">
                  Engineering Prototype
                </div>
                <div className="font-heading font-bold text-base text-white mt-0.5">
                  Secure Acrylic Enclosure with Contactless QR Integration
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-[#17191F] border border-[#353740] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] shrink-0 mt-0.5">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  Tactile Live Product Experience
                </h4>
                <p className="text-xs text-[#A5A8B3] leading-relaxed">
                  Consumers can touch, examine fabric weave, and verify craftsmanship during scheduled
                  stationary brand stops at tech corridors and residential hubs.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#17191F] border border-[#353740] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] shrink-0 mt-0.5">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  Frictionless QR Pre-Orders
                </h4>
                <p className="text-xs text-[#A5A8B3] leading-relaxed">
                  Illuminated on-scooter QR codes drive immediate mobile traffic directly to your
                  exclusive launch discount catalogue or digital storefront.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#17191F] border border-[#353740] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] shrink-0 mt-0.5">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  High-Value Bulk Order Demand
                </h4>
                <p className="text-xs text-[#A5A8B3] leading-relaxed">
                  Station outside major tech campuses, women’s hostels, and residential communities
                  to capture bulk uniform orders, corporate gifting, and group pre-bookings.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#17191F] border border-[#353740] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] shrink-0 mt-0.5">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  Organic Social Street Visibility
                </h4>
                <p className="text-xs text-[#A5A8B3] leading-relaxed">
                  A roving illuminated showcase naturally draws smartphones. Commuters shoot video
                  reels and stories, creating organic word-of-mouth visibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Visual Steps Section */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-tech font-bold uppercase tracking-widest text-[#E7FF39] mb-2">
              The 6-Step Operating Model
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
              How ADRYD Upgrade Connects Movement to Commerce
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-3xl bg-[#17191F] border border-[#353740] flex flex-col justify-between hover:border-[#E7FF39]/60 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-black text-3xl text-[#E7FF39]">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39]">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-xs font-tech text-[#A5A8B3] uppercase mb-1">
                      {step.subtitle}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#A5A8B3] leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#353740] text-[11px] font-tech text-[#E7FF39] uppercase">
                    Stage {step.num} of 06
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Showcase Archetypes Detailed Breakdown (Clearly Labeled as Concepts) */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-tech font-bold uppercase tracking-widest text-[#E7FF39] mb-2">
              Strategic Case Blueprints
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
              Sample Campaign Concepts (Illustrative Only)
            </h2>
          </div>

          <div className="space-y-12">
            {sampleConcepts.map((sc, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#17191F] border border-[#353740] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-tech font-bold text-[#E7FF39] bg-[#E7FF39]/15 px-2.5 py-1 rounded border border-[#E7FF39]/30 uppercase">
                      {sc.archetype}
                    </span>
                    <span className="text-xs text-[#A5A8B3]">• {sc.heroTag}</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    {sc.title}
                  </h3>

                  <div className="text-xs font-tech text-[#E7FF39] uppercase font-semibold">
                    {sc.tagline}
                  </div>

                  <p className="text-sm text-[#A5A8B3] leading-relaxed">
                    {sc.desc}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs text-[#F2F3F5]">
                    {sc.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href={`/book-campaign?objective=${encodeURIComponent(sc.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.3)]"
                    >
                      <span>Plan a Similar Showcase Campaign</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[3/4] max-h-[380px] w-full rounded-2xl overflow-hidden border border-[#353740] shadow-xl group">
                    <Image
                      src={sc.poster}
                      alt={sc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-center text-[10px] font-tech text-white bg-[#0C0D12]/90 backdrop-blur-sm py-1.5 px-2 rounded-lg border border-[#353740]">
                      Sample Campaign Blueprint — Conceptual Reference
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-5 rounded-2xl bg-[#17191F] border border-[#353740] flex items-start gap-3.5 text-xs text-[#A5A8B3] mb-12">
          <ShieldCheck className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Merchandise &amp; Retail Regulations:</strong> All product
            displays comply with safe vehicle weight thresholds, secure structural acrylic locks, and
            non-hazardous goods policies. Physical transactions, sampling, and on-ground stops follow
            municipal transport and commercial vending regulations.
          </p>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#17191F] border border-[#353740] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="font-heading font-black text-2xl text-white uppercase">
              Ready to Upgrade Your Street Presence?
            </h4>
            <p className="text-xs sm:text-sm text-[#A5A8B3] mt-1 max-w-xl">
              Discuss custom showcase fabrication, scheduled Hyderabad corridor stops, and QR pre-order setup.
            </p>
          </div>
          <Link
            href="/book-campaign?package=custom-package"
            className="shrink-0 px-8 py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] transition-all"
          >
            Enquire ADRYD Upgrade
          </Link>
        </div>
      </div>
    </div>
  );
}
