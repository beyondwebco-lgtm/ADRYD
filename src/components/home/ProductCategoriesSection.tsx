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
      color: 'text-[#7856FF]',
      border: 'border-[#EDE9FE]',
      bg: 'bg-[#F5F3FF]',
      image: '/images/posters/ikat-vastra.jpg',
    },
    {
      id: 'food',
      name: 'Food & Bakery',
      tagline: 'Artisanal Sweets, Snacks & Treats',
      color: 'text-[#CA8A04]',
      border: 'border-[#FEF08A]',
      bg: 'bg-[#FEFCE8]',
      image: '/images/v4/geometric-primitives-stack.jpg',
    },
    {
      id: 'beauty',
      name: 'Beauty & Wellness',
      tagline: 'Skincare, Fragrances & Cosmetics',
      color: 'text-[#DB2777]',
      border: 'border-[#FCE7F3]',
      bg: 'bg-[#FDF2F8]',
      image: '/images/v4/cosmetics-shopping-bag.jpg',
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle & Living',
      tagline: 'Home Accents, Décor & Wearables',
      color: 'text-[#0284C7]',
      border: 'border-[#E0F2FE]',
      bg: 'bg-[#F0F9FF]',
      image: '/images/v4/abstract-geometric-world.jpg',
    },
    {
      id: 'technology',
      name: 'Technology',
      tagline: 'Gadgets, Apps & Modern Hardware',
      color: 'text-[#0D9488]',
      border: 'border-[#CCFBF1]',
      bg: 'bg-[#F0FDFA]',
      image: '/images/v4/connected-network-mesh.jpg',
    },
    {
      id: 'local',
      name: 'Local Brands',
      tagline: 'Cafés, Boutiques & Neighborhood Hubs',
      color: 'text-[#7856FF]',
      border: 'border-[#EDE9FE]',
      bg: 'bg-[#F5F3FF]',
      image: '/images/v4/ribbon-flow-minimal.jpg',
    },
  ];

  return (
    <section id="categories" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Subtle Ambient Multicolor Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FEF08A]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#FCE7F3]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#142238]">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>WHO CAN GROW</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#142238] tracking-tight uppercase leading-[1.05]">
            BUILT FOR{' '}
            <span className="bg-gradient-to-r from-[#EC4899] via-[#FACC15] to-[#2DD4BF] bg-clip-text text-transparent animate-gradient-slow">
              EVERY BIG IDEA.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
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
                className={`group block h-full rounded-3xl ${cat.bg} border ${cat.border} overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 card-hover-lift flex flex-col justify-between`}
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Footer */}
                <div className="p-6 sm:p-7 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-black text-2xl text-[#142238]">
                      {cat.name}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${cat.color}`}>
                      {cat.tagline}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:bg-white group-hover:shadow transition-all shrink-0 ml-4">
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
