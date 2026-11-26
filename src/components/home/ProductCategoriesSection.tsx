'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function ProductCategoriesSection() {
  const categories = [
    {
      id: 'fashion',
      name: 'Fashion & Apparel',
      tagline: 'Designer Sarees, Casuals & Drops',
      color: 'text-[#B4F000]',
      border: 'border-[#B4F000]/35 hover:border-[#B4F000]',
      halo: 'shadow-[0_0_35px_rgba(180,240,0,0.25)]',
      cardBg: 'bg-[#041220]/70 hover:bg-[#041220]/90',
      image: '/images/posters/ikat-vastra.jpg',
    },
    {
      id: 'food',
      name: 'Food & Bakery',
      tagline: 'Artisanal Sweets, Snacks & Treats',
      color: 'text-[#0A9BE0]',
      border: 'border-[#0A9BE0]/35 hover:border-[#0A9BE0]',
      halo: 'shadow-[0_0_35px_rgba(10,155,224,0.25)]',
      cardBg: 'bg-[#051C33]/60 hover:bg-[#051C33]/85',
      image: '/images/posters/category-food-bakery.jpg',
    },
    {
      id: 'beauty',
      name: 'Beauty & Wellness',
      tagline: 'Skincare, Fragrances & Cosmetics',
      color: 'text-[#B4F000]',
      border: 'border-[#B4F000]/35 hover:border-[#B4F000]',
      halo: 'shadow-[0_0_35px_rgba(180,240,0,0.25)]',
      cardBg: 'bg-[#041220]/70 hover:bg-[#041220]/90',
      image: '/images/posters/category-beauty-wellness.jpg',
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle & Living',
      tagline: 'Home Accents, Décor & Wearables',
      color: 'text-[#0A9BE0]',
      border: 'border-[#0A9BE0]/35 hover:border-[#0A9BE0]',
      halo: 'shadow-[0_0_35px_rgba(10,155,224,0.25)]',
      cardBg: 'bg-[#051C33]/60 hover:bg-[#051C33]/85',
      image: '/images/posters/category-lifestyle-living.jpg',
    },
    {
      id: 'technology',
      name: 'Technology',
      tagline: 'Gadgets, Apps & Modern Hardware',
      color: 'text-[#B4F000]',
      border: 'border-[#B4F000]/35 hover:border-[#B4F000]',
      halo: 'shadow-[0_0_35px_rgba(180,240,0,0.25)]',
      cardBg: 'bg-[#041220]/70 hover:bg-[#041220]/90',
      image: '/images/posters/category-technology.jpg',
    },
    {
      id: 'local',
      name: 'Local Brands',
      tagline: 'Cafés, Boutiques & Neighborhood Hubs',
      color: 'text-[#0A9BE0]',
      border: 'border-[#0A9BE0]/35 hover:border-[#0A9BE0]',
      halo: 'shadow-[0_0_35px_rgba(10,155,224,0.25)]',
      cardBg: 'bg-[#051C33]/60 hover:bg-[#051C33]/85',
      image: '/images/posters/category-local-brands.jpg',
    },
  ];

  return (
    <section id="categories" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Electric Blue & Chartreuse Aura */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0A9BE0]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#B4F000]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#041220]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#041220]/80 backdrop-blur-md border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>WHO CAN GROW</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            <span className="bg-gradient-to-r from-[#0A9BE0] via-[#E2E8F0] to-[#B4F000] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(10,155,224,0.4)]">
              BIG IDEAS. EVERY CATEGORY.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto font-normal">
            Showcase actual merchandise at eye level where urban consumers live, shop and commute.
          </p>
        </div>

        {/* 6 Editorial Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href={`/book-campaign?category=${cat.id}`}
                className={`group block h-full rounded-3xl ${cat.cardBg} backdrop-blur-2xl border ${cat.border} ${cat.halo} overflow-hidden card-hover-lift transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#000000]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                {/* Content Footer */}
                <div className="p-6 sm:p-7 flex items-center justify-between border-t border-white/10">
                  <div>
                    <h3 className="font-heading font-black text-2xl text-white">
                      {cat.name}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-wider mt-1.5 ${cat.color}`}>
                      {cat.tagline}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#B4F000] group-hover:text-[#000000] group-hover:shadow transition-all shrink-0 ml-4">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
