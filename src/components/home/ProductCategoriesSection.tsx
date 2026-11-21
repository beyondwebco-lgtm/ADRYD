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
      color: 'text-[#C4B5FD]',
      border: 'border-[#7856FF]/35 hover:border-[#C4B5FD]',
      halo: 'shadow-[0_0_35px_rgba(120,86,255,0.25)]',
      cardBg: 'bg-[#7856FF]/15 hover:bg-[#7856FF]/25',
      image: '/images/posters/ikat-vastra.jpg',
    },
    {
      id: 'food',
      name: 'Food & Bakery',
      tagline: 'Artisanal Sweets, Snacks & Treats',
      color: 'text-[#FACC15]',
      border: 'border-[#FACC15]/35 hover:border-[#FACC15]',
      halo: 'shadow-[0_0_35px_rgba(250,204,21,0.25)]',
      cardBg: 'bg-[#FACC15]/15 hover:bg-[#FACC15]/25',
      image: '/images/v4/geometric-primitives-stack.jpg',
    },
    {
      id: 'beauty',
      name: 'Beauty & Wellness',
      tagline: 'Skincare, Fragrances & Cosmetics',
      color: 'text-[#F472B6]',
      border: 'border-[#EC4899]/35 hover:border-[#F472B6]',
      halo: 'shadow-[0_0_35px_rgba(236,72,153,0.25)]',
      cardBg: 'bg-[#EC4899]/15 hover:bg-[#EC4899]/25',
      image: '/images/v4/cosmetics-shopping-bag.jpg',
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle & Living',
      tagline: 'Home Accents, Décor & Wearables',
      color: 'text-[#38BDF8]',
      border: 'border-[#0284C7]/35 hover:border-[#38BDF8]',
      halo: 'shadow-[0_0_35px_rgba(56,189,248,0.25)]',
      cardBg: 'bg-[#0284C7]/15 hover:bg-[#0284C7]/25',
      image: '/images/v4/abstract-geometric-world.jpg',
    },
    {
      id: 'technology',
      name: 'Technology',
      tagline: 'Gadgets, Apps & Modern Hardware',
      color: 'text-[#2DD4BF]',
      border: 'border-[#0D9488]/35 hover:border-[#2DD4BF]',
      halo: 'shadow-[0_0_35px_rgba(45,212,191,0.25)]',
      cardBg: 'bg-[#0D9488]/15 hover:bg-[#0D9488]/25',
      image: '/images/v4/connected-network-mesh.jpg',
    },
    {
      id: 'local',
      name: 'Local Brands',
      tagline: 'Cafés, Boutiques & Neighborhood Hubs',
      color: 'text-[#E879F9]',
      border: 'border-[#D946EF]/35 hover:border-[#E879F9]',
      halo: 'shadow-[0_0_35px_rgba(217,70,239,0.25)]',
      cardBg: 'bg-[#D946EF]/15 hover:bg-[#D946EF]/25',
      image: '/images/v4/ribbon-flow-minimal.jpg',
    },
  ];

  return (
    <section id="categories" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Pink, Lavender, Yellow & Mint Aura */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#EC4899]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#FACC15]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#2DD4BF]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F472B6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>WHO CAN GROW</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            <span className="bg-gradient-to-r from-[#F472B6] via-[#FACC15] to-[#2DD4BF] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(236,72,153,0.4)]">
              BIG IDEAS. EVERY CATEGORY.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
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
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/50">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
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

                  <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 group-hover:shadow transition-all shrink-0 ml-4">
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
