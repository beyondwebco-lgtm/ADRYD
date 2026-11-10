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
  Flame,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADRYD Upgrade | Next-Gen Mobile Commerce & Product Showcasing',
  description:
    'Turn electric scooter transit into live mobile storefronts. ADRYD Upgrade combines physical illuminated product display cases, QR pre-orders, and bulk corporate lead generation across Hyderabad.',
};

const showcases = [
  {
    title: 'Handcrafted Woollen & Crochet Wear',
    archetype: 'Artisan & Apparel Brand Concept',
    heroTag: 'CrochetNest Demonstration',
    tagline: 'Sweaters, Cardigans, Crochet Bags & Home Décor',
    desc: 'Artisanal brands often struggle with high mall retail rents. ADRYD Upgrade enables direct physical exposure outside women’s hostels, universities, and tech parks during winter and festive shopping seasons.',
    features: [
      'Live tactile product experience: touch and feel the weave',
      'Illuminated display case protects delicate handcrafted textiles',
      'Instant QR scan to pre-order or purchase online',
      'Secured bulk gifting inquiries from student hostels and tech teams',
    ],
    poster: '/images/posters/crochet-nest.jpg',
  },
  {
    title: 'Authentic Handloom Sarees & Silk Heritage',
    archetype: 'Ethnic Heritage & Bridal Wear Concept',
    heroTag: 'IkatVastra Demonstration',
    tagline: 'Pochampally Pattu, Pure Silk & Festive Weaves',
    desc: 'Bring exquisite GI-tagged silk weaves directly into upscale shopping high-streets, wedding community centers, and corporate parks, bridging traditional craftsmanship with mobile discovery.',
    features: [
      'Vibrant fabric colors highlighted by 360° warm LED showcase lighting',
      'High footfall visibility at busy shopping intersections',
      'Contactless QR code for wedding registries & pre-bookings',
      'Instant social video shares as commuters film the moving showcase',
    ],
    poster: '/images/posters/ikat-vastra.jpg',
  },
  {
    title: 'Pure Linen & Menswear Collections',
    archetype: 'Direct-to-Consumer Casuals Concept',
    heroTag: 'LinenNest Demonstration',
    tagline: 'Pure Linen Shirts, Pants & Summer Casuals',
    desc: 'D2C fashion labels can execute launch blitz campaigns across business districts, offering 50% launch discount vouchers via glowing on-vehicle QR codes.',
    features: [
      'Smart alternative to multi-crore static hoardings',
      'High conversion from live product inspection to digital cart',
      'Targeted arrival at commercial IT parks during peak lunch hours',
      'Captures qualified lead registrations and bulk uniform inquiries',
    ],
    poster: '/images/posters/linen-nest.jpg',
  },
];

export default function AdrydUpgradePage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-burgundy/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Beyond Static Brand Promotion
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-[0.98] mb-6">
            ADRYD Upgrade:{' '}
            <span className="text-electric-yellow">The Mobile Commerce Engine.</span>
          </h1>
          <p className="text-base sm:text-xl text-soft-ivory/80 leading-relaxed font-normal">
            Why settle for just displaying your logo when you can display your actual product?
            ADRYD Upgrade transforms approved electric scooters into illuminated mobile storefronts,
            combining real-world tactile product discovery, instant QR pre-orders, and organic viral reach.
          </p>
        </div>

        {/* Feature Hero: Large Image + 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-graphite-border shadow-2xl">
              <Image
                src="/images/adryd-mobile-showcase.jpg"
                alt="ADRYD Upgrade Mobile Showcase Detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-carbon-black/90 backdrop-blur-md border border-white/10">
                <div className="text-[10px] font-tech font-bold text-electric-yellow uppercase tracking-widest">
                  Engineering Prototype
                </div>
                <div className="font-heading font-bold text-base text-white mt-0.5">
                  Secure Acrylic Enclosure with Contactless QR Integration
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-xl bg-carbon-card border border-graphite-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow shrink-0 mt-0.5">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  Tactile Live Product Experience
                </h4>
                <p className="text-xs text-muted-grey leading-relaxed">
                  Consumers can touch, examine fabric quality, and verify craftsmanship during
                  scheduled stationary brand stops at tech parks and residential communities.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-carbon-card border border-graphite-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow shrink-0 mt-0.5">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  Frictionless QR Pre-Orders
                </h4>
                <p className="text-xs text-muted-grey leading-relaxed">
                  Illuminated on-scooter QR codes drive immediate mobile traffic directly to your
                  exclusive launch discount page or Shopify/WooCommerce store.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-carbon-card border border-graphite-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow shrink-0 mt-0.5">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  High-Value Bulk Order Lead Generation
                </h4>
                <p className="text-xs text-muted-grey leading-relaxed">
                  Station outside major women&apos;s PG hostels, corporate campuses, and gated
                  societies to capture bulk uniform orders, corporate gifting, and group purchases.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-carbon-card border border-graphite-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow shrink-0 mt-0.5">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  Organic Social Street Visibility
                </h4>
                <p className="text-xs text-muted-grey leading-relaxed">
                  A roving glass showcase naturally draws smartphones. Commuters shoot Instagram
                  stories and reels, creating organic viral multipliers at zero extra media spend.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Showcase Archetypes Detailed Breakdown */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-tech font-bold uppercase tracking-widest text-electric-yellow mb-2">
              Strategic Case Blueprints
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
              How Different Retail Verticals Leverage ADRYD Upgrade
            </h2>
          </div>

          <div className="space-y-12">
            {showcases.map((sc, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-carbon-card border border-graphite-border shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-tech font-bold text-electric-yellow bg-electric-yellow/10 px-2.5 py-1 rounded border border-electric-yellow/20 uppercase">
                      {sc.archetype}
                    </span>
                    <span className="text-xs text-muted-grey">• {sc.heroTag}</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    {sc.title}
                  </h3>

                  <div className="text-xs font-tech text-electric-yellow uppercase font-semibold">
                    {sc.tagline}
                  </div>

                  <p className="text-sm text-muted-grey leading-relaxed">
                    {sc.desc}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs text-soft-ivory/85">
                    {sc.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href={`/book-campaign?package=custom-package&objective=${encodeURIComponent(
                        sc.title
                      )}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Plan a Similar Showcase Campaign</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[3/4] max-h-[380px] w-full rounded-xl overflow-hidden border border-white/10 shadow-xl group">
                    <Image
                      src={sc.poster}
                      alt={sc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-center text-[10px] font-tech text-white/90 bg-carbon-black/80 backdrop-blur-sm py-1.5 px-2 rounded border border-white/10">
                      Promotional Design Archetype Visual Reference
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Flow */}
        <div className="bg-graphite/30 border border-graphite-border rounded-2xl p-8 sm:p-12 mb-16">
          <h3 className="font-heading font-bold text-2xl text-white mb-6 text-center">
            How ADRYD Upgrade Campaigns Are Deployed
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center text-xs">
            <div className="p-4 rounded-xl bg-carbon-card border border-graphite-border space-y-2">
              <span className="font-heading font-black text-xl text-electric-yellow">01</span>
              <strong className="text-white block">Merchandise Review</strong>
              <p className="text-muted-grey text-[11px]">Select items suited for mobile showcase</p>
            </div>
            <div className="p-4 rounded-xl bg-carbon-card border border-graphite-border space-y-2">
              <span className="font-heading font-black text-xl text-electric-yellow">02</span>
              <strong className="text-white block">Custom Box Install</strong>
              <p className="text-muted-grey text-[11px]">Secure illuminated enclosure mounted</p>
            </div>
            <div className="p-4 rounded-xl bg-carbon-card border border-graphite-border space-y-2">
              <span className="font-heading font-black text-xl text-electric-yellow">03</span>
              <strong className="text-white block">Corridor Schedule</strong>
              <p className="text-muted-grey text-[11px]">Timed stops at PGs, tech hubs &amp; markets</p>
            </div>
            <div className="p-4 rounded-xl bg-carbon-card border border-graphite-border space-y-2">
              <span className="font-heading font-black text-xl text-electric-yellow">04</span>
              <strong className="text-white block">QR Discovery</strong>
              <p className="text-muted-grey text-[11px]">On-ground shopper engagement &amp; orders</p>
            </div>
            <div className="p-4 rounded-xl bg-carbon-card border border-graphite-border space-y-2">
              <span className="font-heading font-black text-xl text-electric-yellow">05</span>
              <strong className="text-white block">Conversion Leads</strong>
              <p className="text-muted-grey text-[11px]">Consolidated orders &amp; lead delivery</p>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border flex items-start gap-3 text-xs text-muted-grey mb-12">
          <ShieldCheck className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Merchandise &amp; Retail Regulations:</strong> All product
            displays comply with safe weight thresholds, secure structural locks, and non-hazardous
            goods policies. Physical transactions and on-ground stops follow municipal transport
            vending regulations.
          </p>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Ready to Upgrade Your Street Presence?
            </h4>
            <p className="text-xs text-soft-ivory/80 mt-1">
              Discuss custom showcase fabrication and scheduled Hyderabad corridor routes.
            </p>
          </div>
          <Link
            href="/book-campaign?package=custom-package"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Enquire ADRYD Upgrade
          </Link>
        </div>
      </div>
    </div>
  );
}
