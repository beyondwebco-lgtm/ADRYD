import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  QrCode,
  ShoppingBag,
  TrendingUp,
  PackageCheck,
  Video,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export default function AdrydUpgradeSection() {
  const concepts = [
    {
      title: 'Handcrafted Apparel & Knitwear',
      concept: 'Fashion & Artisan Goods',
      description:
        'Display tactile woolen wear, crochet bags, or designer garments in illuminated, weather-protected mobile glass showcases directly in front of IT parks and residential hubs.',
      tags: ['Tactile Experience', 'Live Display', 'Instant Pre-Order'],
      image: '/images/posters/crochet-nest.jpg',
    },
    {
      title: 'Handloom Sarees & Silk Heritage',
      concept: 'High-Value Textiles',
      description:
        'Bring authentic handloom collections to prominent shopping streets, festive community centers, and women’s hostels with illuminated display cases and instant QR booking.',
      tags: ['Ethnic Wear', 'High-Street Stops', 'Bulk Gifting'],
      image: '/images/posters/ikat-vastra.jpg',
    },
    {
      title: 'Premium Linen & Everyday Casuals',
      concept: 'Direct-to-Consumer Brands',
      description:
        'Launch new seasonal clothing collections with mobile store presence, offering 50% launch pre-order QR incentives and generating real-world social media buzz.',
      tags: ['Launch Blitz', 'QR Scan Pre-Orders', 'Social Hype'],
      image: '/images/posters/linen-nest.jpg',
    },
  ];

  return (
    <section className="py-24 bg-carbon-black text-soft-ivory relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-burgundy/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-electric-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow & Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-electric-yellow" />
              Next-Gen Mobile Commerce Feature
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-[1.05]">
              Turn Every Ride Into A{' '}
              <span className="text-electric-yellow">Mobile Brand Experience.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-soft-ivory/80 leading-relaxed font-normal">
              Introducing <strong className="text-white">ADRYD Upgrade</strong>—our proposed
              next-generation mobile commerce layer. Go beyond brand visibility: showcase physical
              products, capture on-the-spot QR pre-orders, and generate organic social content across
              the city.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/adryd-upgrade"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider shadow-xl transition-all"
            >
              <span>Explore ADRYD Upgrade</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Feature Hero: Large Image + Feature Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Mobile Showcase Photography (6 cols) */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-graphite-border shadow-2xl group">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/adryd-mobile-showcase.jpg"
                alt="ADRYD Upgrade Mobile Showcase Concept"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-carbon-black/85 backdrop-blur-md border border-white/10">
              <div className="text-[10px] font-tech font-bold text-electric-yellow uppercase tracking-widest mb-1">
                Concept Prototype Demonstration
              </div>
              <h4 className="font-heading font-bold text-lg text-white">
                Illuminated Mobile Showcase Integration
              </h4>
              <p className="text-xs text-muted-grey mt-1">
                Custom clear acrylic enclosure with interior warm LED lighting and contactless QR
                code discovery badge mounted securely on electric two-wheelers.
              </p>
            </div>
          </div>

          {/* Right: 4 Capabilities Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-carbon-card border border-graphite-border hover:border-electric-yellow/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow mb-3">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-white mb-1.5">
                On-The-Spot Discovery
              </h4>
              <p className="text-xs text-muted-grey leading-relaxed">
                Customers can view, inspect, and experience genuine product textures up close at
                scheduled stops near offices and cafés.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-carbon-card border border-graphite-border hover:border-electric-yellow/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow mb-3">
                <QrCode className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-white mb-1.5">
                Instant QR Pre-Orders
              </h4>
              <p className="text-xs text-muted-grey leading-relaxed">
                Shoppers scan high-contrast glowing QR badges directly on the vehicle to unlock launch
                discounts and place online pre-orders.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-carbon-card border border-graphite-border hover:border-electric-yellow/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow mb-3">
                <PackageCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-white mb-1.5">
                Bulk Order Lead Gen
              </h4>
              <p className="text-xs text-muted-grey leading-relaxed">
                Connect directly with institutions, women&apos;s PG hostels, corporate communities,
                and societies for corporate gifting and group orders.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-carbon-card border border-graphite-border hover:border-electric-yellow/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow mb-3">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-white mb-1.5">
                Viral Social Street Clips
              </h4>
              <p className="text-xs text-muted-grey leading-relaxed">
                A moving illuminated storefront naturally turns heads, creating organic opportunities
                for customer reels, TikToks, and influencer shares.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Concept Cards */}
        <div className="mb-12">
          <div className="text-xs font-tech font-bold uppercase tracking-widest text-electric-yellow mb-6">
            Illustrative Industry Concepts
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {concepts.map((item, idx) => (
              <div
                key={idx}
                className="bg-carbon-card border border-graphite-border rounded-xl p-6 flex flex-col justify-between hover:border-electric-yellow/40 transition-all group"
              >
                <div>
                  <div className="text-[11px] font-tech text-electric-yellow uppercase tracking-wider mb-1">
                    {item.concept}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-grey leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-graphite-border">
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-tech px-2 py-0.5 rounded bg-graphite text-soft-ivory/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="p-4 rounded-xl bg-graphite/40 border border-graphite-border flex items-start gap-3 text-xs text-muted-grey">
          <ShieldAlert className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
          <p>
            <strong className="text-soft-ivory">Compliance &amp; Conceptual Context:</strong> The
            ADRYD Upgrade concepts and brand scenarios illustrated above represent strategic promotional
            architecture. Commercial campaigns comply with local safety guidelines, merchandise
            restrictions, and transport authority approvals.
          </p>
        </div>
      </div>
    </section>
  );
}
