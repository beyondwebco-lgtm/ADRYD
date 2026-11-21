'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, ShoppingBag, MapPin, Sparkles } from 'lucide-react';

export default function ConceptSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#EAF9FD] relative overflow-hidden border-t border-[#DFEAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0ECFF] text-[#7856FF] text-xs font-bold uppercase tracking-wider border border-[#E4DCFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ADRYD Concept</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
            MORE THAN ADVERTISING.
          </h2>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed max-w-2xl mx-auto font-normal">
            ADRYD transforms everyday urban transit into live product discovery, sampling and direct customer engagement.
          </p>
        </div>

        {/* 3 Balanced Blue & Violet Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          
          {/* Card 1: High-Street Presence (Palapitta Blue) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 border border-[#DFEAF0] shadow-[0_10px_30px_rgba(0,168,200,0.04)] card-hover-lift space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EAF9FD] text-[#00A8C8] flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#172B3A]">
              High-Street Presence
            </h3>
            <p className="text-sm text-[#637786] leading-relaxed">
              Eye-level mobile branding navigating premier retail zones, IT corridors and commercial high-streets.
            </p>
          </motion.div>

          {/* Card 2: Physical Product Experience (Vibrant Violet) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white p-8 border border-[#E4DCFF] shadow-[0_10px_30px_rgba(120,86,255,0.05)] card-hover-lift space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F0ECFF] text-[#7856FF] flex items-center justify-center font-bold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#172B3A]">
              Real Product Experience
            </h3>
            <p className="text-sm text-[#637786] leading-relaxed">
              Transparent showcase compartments let shoppers view actual products, scan QR codes and place orders.
            </p>
          </motion.div>

          {/* Card 3: Hyperlocal Corridor Engagement (Royal Blue) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-white p-8 border border-[#DFEAF0] shadow-[0_10px_30px_rgba(23,86,193,0.04)] card-hover-lift space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EAF9FD] text-[#1756C1] flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#172B3A]">
              Hyperlocal Engagement
            </h3>
            <p className="text-sm text-[#637786] leading-relaxed">
              Precision corridor routing across Jubilee Hills, HITEC City, Gachibowli, Banjara Hills and Madhapur.
            </p>
          </motion.div>

        </div>

        {/* Real Fleet Photography Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-[#DFEAF0] shadow-xl aspect-[16/7] max-h-[380px] w-full"
        >
          <Image
            src="/images/adryd-fleet-hyderabad.jpg"
            alt="ADRYD Electric Mobility Fleet in Hyderabad"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
            <div className="text-left text-white max-w-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#58C9EF] mb-1">
                Hyderabad Pilot Deployment
              </div>
              <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed">
                Zero-emission electric two-wheelers configured for high-visibility moving advertising and transparent product showcases.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
