'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Utensils, Sparkles, Heart, Compass, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

const ProductShowcaseCanvas = dynamic(
  () => import('@/components/3d/ProductShowcaseCanvas'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[360px] sm:h-[420px] rounded-3xl bg-[#F6FAFC] flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#00A8C8] border-t-transparent animate-spin" />
        <span className="text-xs font-semibold text-[#637786]">Loading 3D Product Showcase...</span>
      </div>
    ),
  }
);

export default function ProductCategoriesSection() {
  const [activeTab, setActiveTab] = useState<'beauty' | 'fashion' | 'food' | 'handmade' | 'lifestyle' | 'local'>('beauty');

  const categories = [
    {
      id: 'beauty' as const,
      name: 'Beauty & Cosmetics',
      headline: 'Skincare & fragrance discovery on the move.',
      desc: 'Let shoppers sample luxury perfumes, serums, and organic cosmetics directly on street corners and boutique hubs.',
      icon: Heart,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      color: 'text-[#00A8C8]',
      features: ['Live spray and sample counters', 'Scan-to-order QR packaging', 'Boutique beauty corridor routes'],
    },
    {
      id: 'fashion' as const,
      name: 'Fashion & Apparel',
      headline: 'Streetwear & designer labels in high-footfall corridors.',
      desc: 'Showcase seasonal drops, footwear, and accessory capsule collections directly outside cafes, campuses, and cultural districts.',
      icon: Shirt,
      bg: 'bg-white',
      border: 'border-[#DCECF2]',
      color: 'text-[#1756C1]',
      features: ['High-contrast illuminated garment displays', 'Instant mobile checkout links', 'Influencer photo-op activations'],
    },
    {
      id: 'food' as const,
      name: 'Food & Beverages',
      headline: 'Gourmet snacks, cold brews & artisanal treats.',
      desc: 'Deploy moving taste-testing pods that bring seasonal refreshments and artisanal treats directly to offices and parks.',
      icon: Utensils,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      color: 'text-[#00A8C8]',
      features: ['Food-safe display compartments', 'Hyperlocal pre-order delivery', 'Peak-hour lunch corridor scheduling'],
    },
    {
      id: 'handmade' as const,
      name: 'Handmade Products',
      headline: 'Artisan pottery, crafts & independent creators.',
      desc: 'Give local craftspeople and independent makers prime visibility across premier Hyderabad neighborhoods without mall rent.',
      icon: Sparkles,
      bg: 'bg-[#F6FAFC]',
      border: 'border-[#DCECF2]',
      color: 'text-[#123C83]',
      features: ['Curated spotlight showcases', 'Direct maker bio & story links', 'Weekend market synchronizations'],
    },
    {
      id: 'lifestyle' as const,
      name: 'Lifestyle & Tech',
      headline: 'Wearables, wellness gear & smart accessories.',
      desc: 'Introduce consumers to smart home devices, audio gear, and athletic equipment through live demonstrations.',
      icon: Compass,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      color: 'text-[#58C9EF]',
      features: ['Interactive hands-on demo cases', 'Instant pre-order reservation forms', 'Corporate tech park deployments'],
    },
    {
      id: 'local' as const,
      name: 'Local Businesses',
      headline: 'Neighborhood cafes, studios & boutique storefronts.',
      desc: 'Drive footfall and delivery orders directly to your brick-and-mortar store by advertising across your immediate 5 km radius.',
      icon: Store,
      bg: 'bg-white',
      border: 'border-[#DCECF2]',
      color: 'text-[#00A8C8]',
      features: ['Geo-fenced neighborhood circuits', 'Store direction QR pins', 'Exclusive local customer promo codes'],
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="categories" className="py-20 lg:py-28 bg-white relative border-t border-[#DCECF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D Product Showcase</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
              MADE FOR EVERY BRAND.
            </h2>
            <p className="text-base sm:text-lg text-[#637786] font-normal">
              Whether you make artisanal treats or run an apparel label, showcase your physical products in real-world motion.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8C8] hover:text-[#0093AF] transition-colors shrink-0"
          >
            <span>Explore All Sectors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#00A8C8] text-white shadow-md scale-105'
                    : 'bg-[#F6FAFC] text-[#637786] hover:bg-[#EAF9FD] hover:text-[#00A8C8] border border-[#DCECF2]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Showcase Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F6FAFC] rounded-3xl p-6 sm:p-10 border border-[#DCECF2] mb-12 shadow-sm">
          {/* Left Column: 3D Product Canvas */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-[#DCECF2] shadow-sm overflow-hidden">
              <ProductShowcaseCanvas activeCategory={activeTab} />
              
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#DCECF2] text-[10px] font-semibold text-[#637786] pointer-events-none shadow-sm">
                Interactive 3D Stage • Drag to rotate
              </div>
            </div>
          </div>

          {/* Right Column: Category Overview & Perks */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${currentCategory.bg} ${currentCategory.color} border ${currentCategory.border}`}>
                  <currentCategory.icon className="w-3.5 h-3.5" />
                  <span>{currentCategory.name}</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#172B3A] uppercase tracking-tight">
                  {currentCategory.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#637786] leading-relaxed font-normal">
                  {currentCategory.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  {currentCategory.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#172B3A] font-medium">
                      <CheckCircle2 className={`w-4 h-4 ${currentCategory.color} shrink-0`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/book-campaign"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A8C8] hover:bg-[#0093AF] text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Book a {currentCategory.name} Campaign</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
