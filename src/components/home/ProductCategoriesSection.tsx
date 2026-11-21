'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Utensils, Sparkles, Heart, Compass, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

const ProductShowcaseCanvas = dynamic(
  () => import('@/components/3d/ProductShowcaseCanvas'),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function ProductCategoriesSection() {
  const [activeTab, setActiveTab] = useState<'beauty' | 'fashion' | 'food' | 'handmade' | 'lifestyle' | 'local'>('beauty');

  const categories = [
    {
      id: 'beauty' as const,
      name: 'Beauty & Cosmetics',
      headline: 'Skincare, wellness & fragrance discovery on the move.',
      desc: 'Let shoppers sample luxury perfumes, serums, and organic cosmetics directly on street corners and boutique hubs.',
      icon: Heart,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      color: 'text-[#00A8C8]',
      badgeBg: 'bg-[#EAF9FD]',
      features: ['Live spray and sample counters', 'Scan-to-order QR packaging', 'Boutique beauty corridor routes'],
      image: '/images/3d/product-bag.jpg',
    },
    {
      id: 'fashion' as const,
      name: 'Fashion & Apparel',
      headline: 'Streetwear & designer labels in high-footfall corridors.',
      desc: 'Showcase seasonal drops, footwear, and accessory capsule collections directly outside cafes, campuses, and cultural districts.',
      icon: Shirt,
      bg: 'bg-[#F0ECFF]',
      border: 'border-[#E4DCFF]',
      color: 'text-[#7856FF]',
      badgeBg: 'bg-[#F0ECFF]',
      features: ['Illuminated garment display pods', 'Instant mobile checkout links', 'Influencer photo-op activations'],
      image: '/images/posters/ikat-vastra.jpg',
    },
    {
      id: 'food' as const,
      name: 'Food & Beverages',
      headline: 'Gourmet snacks, cold brews & artisanal treats.',
      desc: 'Deploy moving taste-testing pods that bring seasonal refreshments and artisanal treats directly to corporate parks and public spaces.',
      icon: Utensils,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      color: 'text-[#00A8C8]',
      badgeBg: 'bg-[#EAF9FD]',
      features: ['Food-safe display compartments', 'Hyperlocal pre-order delivery', 'Peak-hour lunch corridor scheduling'],
      image: '/images/3d/physics-blocks.jpg',
    },
    {
      id: 'handmade' as const,
      name: 'Handmade Products',
      headline: 'Artisan pottery, crafts & independent creators.',
      desc: 'Give local craftspeople and independent makers prime visibility across premier Hyderabad neighborhoods without mall rent.',
      icon: Sparkles,
      bg: 'bg-[#F0ECFF]',
      border: 'border-[#E4DCFF]',
      color: 'text-[#7856FF]',
      badgeBg: 'bg-[#F0ECFF]',
      features: ['Curated spotlight showcases', 'Direct maker bio & story links', 'Weekend market synchronizations'],
      image: '/images/posters/crochet-nest.jpg',
    },
    {
      id: 'lifestyle' as const,
      name: 'Lifestyle & Tech',
      headline: 'Wearables, wellness gear & smart accessories.',
      desc: 'Introduce consumers to smart home devices, audio gear, and athletic equipment through live demonstrations.',
      icon: Compass,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      color: 'text-[#00A8C8]',
      badgeBg: 'bg-[#EAF9FD]',
      features: ['Interactive hands-on demo cases', 'Instant pre-order reservation forms', 'Corporate tech park deployments'],
      image: '/images/3d/palapitta-glass-ref.jpg',
    },
    {
      id: 'local' as const,
      name: 'Local Businesses',
      headline: 'Neighborhood cafes, studios & boutique storefronts.',
      desc: 'Drive footfall and delivery orders directly to your brick-and-mortar store by advertising across your immediate 5 km radius.',
      icon: Store,
      bg: 'bg-[#F0ECFF]',
      border: 'border-[#E4DCFF]',
      color: 'text-[#7856FF]',
      badgeBg: 'bg-[#F0ECFF]',
      features: ['Geo-fenced neighborhood circuits', 'Store direction QR pins', 'Exclusive local customer promo codes'],
      image: '/images/posters/linen-nest.jpg',
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="categories" className="py-20 lg:py-28 bg-white relative border-t border-[#DFEAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Hyperlocal Segments</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
              MADE FOR <span className="text-[#00A8C8]">EVERY</span> <span className="text-[#7856FF]">BRAND.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#637786] font-normal">
              Whether you are an emerging artisan, a D2C favorite, or an established enterprise, ADRYD connects you to customers in motion.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8C8] hover:text-[#0093AF] transition-colors shrink-0"
          >
            <span>Explore All 8 Industry Playbooks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? cat.id === 'fashion' || cat.id === 'handmade' || cat.id === 'local'
                      ? 'bg-[#7856FF] text-white shadow-[0_6px_20px_rgba(120,86,255,0.25)]'
                      : 'bg-[#00A8C8] text-white shadow-[0_6px_20px_rgba(0,168,200,0.25)]'
                    : 'bg-[#F7FAFC] text-[#637786] hover:bg-[#F0ECFF] hover:text-[#172B3A] border border-[#DFEAF0]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Card with 3D Viewport & Imagery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className={`rounded-3xl ${currentCategory.bg} border ${currentCategory.border} p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
          >
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className={`text-xs font-bold uppercase tracking-wider ${currentCategory.color}`}>
                  Industry Solution
                </span>
                <h3 className="font-heading font-black text-3xl sm:text-4xl text-[#172B3A]">
                  {currentCategory.headline}
                </h3>
                <p className="text-base text-[#637786] leading-relaxed font-normal">
                  {currentCategory.desc}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                {currentCategory.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#172B3A] font-semibold">
                    <CheckCircle2 className={`w-5 h-5 ${currentCategory.color} shrink-0`} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/book-campaign"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-xs font-bold transition-all shadow-md ${
                    activeTab === 'fashion' || activeTab === 'handmade' || activeTab === 'local'
                      ? 'bg-[#7856FF] hover:bg-[#6440FF]'
                      : 'bg-[#00A8C8] hover:bg-[#0093AF]'
                  }`}
                >
                  <span>Build Campaign for {currentCategory.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: 3D Product Canvas & Verified Image Preview */}
            <div className="lg:col-span-6 relative aspect-square max-h-[420px] rounded-3xl bg-white border border-[#DFEAF0] p-4 flex items-center justify-center overflow-hidden shadow-inner">
              {/* Static Preview Image */}
              <div className="absolute inset-0 flex items-center justify-center p-8 z-0">
                <Image
                  src={currentCategory.image}
                  alt={currentCategory.name}
                  width={400}
                  height={400}
                  className="w-auto h-auto max-w-[85%] max-h-[85%] object-contain rounded-2xl drop-shadow-md"
                />
              </div>

              {/* 3D Canvas Interactive Layer */}
              <div className="w-full h-full relative z-10">
                <ProductShowcaseCanvas activeCategory={activeTab} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
