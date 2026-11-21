import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shirt,
  Utensils,
  Sparkles,
  Heart,
  Compass,
  Store,
  Layers,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
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
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#D5EFF7]',
    color: 'text-[#00A8C8]',
  },
  {
    id: 'food',
    name: 'Food & Bakery',
    tagline: 'Artisanal Chocolates, Snacks & Specialty Foods',
    desc: 'Deploy temperature-protected sample units with instant QR ordering for sweet treats and gourmet foods.',
    icon: Utensils,
    bg: 'bg-[#F0ECFF]',
    border: 'border-[#E4DCFF]',
    color: 'text-[#7856FF]',
  },
  {
    id: 'handmade',
    name: 'Handmade Crafts',
    tagline: 'Artisan Goods, Candles & Home Accents',
    desc: 'Connect independent makers with urban consumers through tactile showcases in front of cafes and lifestyle parks.',
    icon: Sparkles,
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#D5EFF7]',
    color: 'text-[#00A8C8]',
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    tagline: 'Skincare, Fragrances & Personal Care',
    desc: 'Distribute tester samples, promote pre-orders and demonstrate premium beauty products at eye level.',
    icon: Heart,
    bg: 'bg-[#F0ECFF]',
    border: 'border-[#E4DCFF]',
    color: 'text-[#7856FF]',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Electronics',
    tagline: 'Gadgets, Accessories & Home Living',
    desc: 'Drive curiosity for consumer tech, wearables and daily innovations with illuminated vehicle enclosures.',
    icon: Compass,
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#D5EFF7]',
    color: 'text-[#00A8C8]',
  },
  {
    id: 'local',
    name: 'Local Businesses & Cafés',
    tagline: 'Neighborhood Outlets & Dining Hubs',
    desc: 'Create immediate neighborhood buzz for new store openings, weekend specials and seasonal discounts.',
    icon: Store,
    bg: 'bg-[#F0ECFF]',
    border: 'border-[#E4DCFF]',
    color: 'text-[#7856FF]',
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Target Sectors
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Made for every{' '}
            <br />
            <span className="text-[#00A8C8]">kind of brand.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
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
                className={`rounded-3xl ${ind.bg} border ${ind.border} p-8 card-hover-lift flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${ind.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl text-[#172B3A]">
                      {ind.name}
                    </h2>
                    <p className={`text-xs font-bold mt-1 ${ind.color}`}>
                      {ind.tagline}
                    </p>
                    <p className="text-sm text-[#637786] leading-relaxed mt-2.5">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/book-campaign?category=${ind.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172B3A] hover:text-[#00A8C8] transition-colors"
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
        <div className="rounded-3xl bg-[#F6FAFC] border border-[#DCECF2] p-8 lg:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#172B3A] uppercase">
            Have a Unique Product Format?
          </h3>
          <p className="text-sm text-[#637786] max-w-xl mx-auto">
            Our engineering and creative team designs custom illuminated enclosures and sampling mounts for virtually any merchandise.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A8C8] hover:bg-[#0091AD] text-white font-bold text-xs shadow-md transition-all"
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
