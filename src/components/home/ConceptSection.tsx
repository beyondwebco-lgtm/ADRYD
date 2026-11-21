'use client';

import { motion } from 'framer-motion';
import { Eye, ShoppingBag, MapPin, Sparkles } from 'lucide-react';

export default function ConceptSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F6FAFC] relative overflow-hidden border-t border-[#DCECF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimal & Punchy */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Concept</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
            More than advertising.
          </h2>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed max-w-2xl mx-auto font-normal">
            ADRYD transforms everyday journeys into opportunities for brands to connect with customers.
          </p>
        </div>

        {/* 3 Palapitta Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: High-Street Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 border border-[#DCECF2] shadow-[0_10px_30px_rgba(0,168,200,0.03)] card-hover-lift space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EAF9FD] text-[#00A8C8] flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#172B3A]">
              High-Street Presence
            </h3>
            <p className="text-sm text-[#637786] leading-relaxed">
              Eye-level mobile branding moving through prime Hyderabad commercial corridors, IT hubs and retail zones.
            </p>
          </motion.div>

          {/* Card 2: Real Product Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white p-8 border border-[#DCECF2] shadow-[0_10px_30px_rgba(0,168,200,0.03)] card-hover-lift space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EAF9FD] text-[#1756C1] flex items-center justify-center font-bold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#172B3A]">
              Real Product Experience
            </h3>
            <p className="text-sm text-[#637786] leading-relaxed">
              Transparent showcase pods let people see physical products, scan instant QR codes and place pre-orders.
            </p>
          </motion.div>

          {/* Card 3: Hyperlocal Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-white p-8 border border-[#DCECF2] shadow-[0_10px_30px_rgba(0,168,200,0.03)] card-hover-lift space-y-4 text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EAF9FD] text-[#58C9EF] flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#172B3A]">
              Hyperlocal Engagement
            </h3>
            <p className="text-sm text-[#637786] leading-relaxed">
              Precision corridor routing across Jubilee Hills, Hitec City, Gachibowli, Banjara Hills and Kondapur.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
