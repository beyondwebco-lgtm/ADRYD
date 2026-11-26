import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shirt,
  Utensils,
  Sparkles,
  Heart,
  Compass,
  Store,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Categories | ADRYD The Moving Marketplace',
  description:
    'Explore how ADRYD empowers Fashion, Food, Handmade Crafts, Beauty, D2C Startups and Local Businesses with mobile advertising and product showcases in Hyderabad.',
};

const industries = [
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    tagline: 'Designer Sarees, Casuals & Handloom Collections',
    desc: 'Showcase fabric textures, embroidery details and festive collections directly in high-footfall shopping areas.',
    icon: Shirt,
    bg: 'bg-[#092D19]/80',
    border: 'border-[#B4F000]/30',
    color: 'text-[#B4F000]',
  },
  {
    id: 'food',
    name: 'Food & Bakery',
    tagline: 'Artisanal Chocolates, Snacks & Specialty Foods',
    desc: 'Deploy temperature-protected sample units with instant QR ordering for sweet treats and gourmet foods.',
    icon: Utensils,
    bg: 'bg-[#005522]/60',
    border: 'border-[#65B32E]/30',
    color: 'text-[#65B32E]',
  },
  {
    id: 'handmade',
    name: 'Handmade Crafts',
    tagline: 'Artisan Goods, Candles & Home Accents',
    desc: 'Connect independent makers with urban consumers through tactile showcases in front of cafes and lifestyle parks.',
    icon: Sparkles,
    bg: 'bg-[#092D19]/80',
    border: 'border-[#F4DE26]/30',
    color: 'text-[#F4DE26]',
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    tagline: 'Skincare, Fragrances & Personal Care',
    desc: 'Distribute tester samples, promote pre-orders and demonstrate premium beauty products at eye level.',
    icon: Heart,
    bg: 'bg-[#005522]/60',
    border: 'border-[#B4F000]/30',
    color: 'text-[#B4F000]',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Electronics',
    tagline: 'Gadgets, Accessories & Home Living',
    desc: 'Drive curiosity for consumer tech, wearables and daily innovations with illuminated vehicle enclosures.',
    icon: Compass,
    bg: 'bg-[#092D19]/80',
    border: 'border-[#65B32E]/30',
    color: 'text-[#65B32E]',
  },
  {
    id: 'local',
    name: 'Local Businesses & Cafés',
    tagline: 'Neighborhood Outlets & Dining Hubs',
    desc: 'Create immediate neighborhood buzz for new store openings, weekend specials and seasonal discounts.',
    icon: Store,
    bg: 'bg-[#005522]/60',
    border: 'border-[#F4DE26]/30',
    color: 'text-[#F4DE26]',
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen text-white pt-28 pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#B4F000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 rounded-full bg-[#005522]/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Sectors</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-tight">
            Made for every{' '}
            <br />
            <span className="text-[#B4F000] text-glow-lime">kind of brand.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#E4EBE5] leading-relaxed font-normal">
            Whether you craft boutique sarees, bake artisanal treats, or operate a neighborhood retail store, take your products to the streets.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className={`rounded-3xl ${ind.bg} backdrop-blur-xl border ${ind.border} p-8 card-hover-lift flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.35)]`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-[#061C12]/80 border border-[#B4F000]/30 shadow-sm flex items-center justify-center ${ind.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl text-white">
                      {ind.name}
                    </h2>
                    <p className={`text-xs font-bold mt-1 ${ind.color}`}>
                      {ind.tagline}
                    </p>
                    <p className="text-sm text-[#E4EBE5] leading-relaxed mt-2.5">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/book-campaign?category=${ind.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#B4F000] transition-colors"
                  >
                    <span>Plan a Campaign for {ind.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-[#092D19]/75 backdrop-blur-xl border border-[#B4F000]/25 p-8 lg:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
            Have a Unique Product Format?
          </h3>
          <p className="text-sm text-[#E4EBE5] max-w-xl mx-auto">
            Our engineering and creative team designs custom illuminated enclosures and sampling mounts for virtually any merchandise.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#092D19] font-black text-xs shadow-[0_4px_20px_rgba(180,240,0,0.35)] transition-all"
            >
              <span>Discuss Custom Display</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}