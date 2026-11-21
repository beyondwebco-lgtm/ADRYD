'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface TiltCardProps {
  service: {
    id: string;
    title: string;
    tagline: string;
    icon: React.ElementType;
    bg: string;
    border: string;
    iconBg: string;
    iconColor: string;
    badgeColor: string;
  };
  idx: number;
}

function TiltServiceCard({ service, idx }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
            isHovered ? 1.02 : 1
          }, ${isHovered ? 1.02 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
        }}
        className={`relative h-full rounded-3xl ${service.bg} border ${service.border} p-8 flex flex-col justify-between transition-shadow duration-300 ${
          isHovered
            ? 'shadow-[0_20px_40px_rgba(120,86,255,0.12)]'
            : 'shadow-[0_4px_16px_rgba(0,168,200,0.03)]'
        }`}
      >
        <div>
          {/* Elevated Icon Badge */}
          <div
            style={{
              transform: isHovered ? 'translateZ(24px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out',
            }}
            className={`w-14 h-14 rounded-2xl ${service.iconBg} ${service.iconColor} shadow-sm flex items-center justify-center mb-6`}
          >
            <Icon className="w-7 h-7" />
          </div>

          {/* Service Title */}
          <h3
            style={{
              transform: isHovered ? 'translateZ(16px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out',
            }}
            className="font-heading font-black text-2xl sm:text-3xl text-[#172B3A] uppercase tracking-tight mb-2"
          >
            {service.title}
          </h3>

          {/* Service Tagline */}
          <p
            style={{
              transform: isHovered ? 'translateZ(12px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out',
            }}
            className="text-sm sm:text-base text-[#637786] font-normal leading-relaxed mb-6"
          >
            {service.tagline}
          </p>
        </div>

        {/* Card Footer Link */}
        <div
          style={{
            transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease-out',
          }}
          className="pt-4 border-t border-[#DFEAF0]"
        >
          <Link
            href="/services"
            className={`inline-flex items-center gap-1.5 text-xs font-bold ${service.badgeColor} hover:opacity-80 transition-opacity`}
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  // Alternating Blue and Violet Cards per Design System
  const services = [
    {
      id: 'street-advertising',
      title: 'Street Advertising',
      tagline: 'High-visibility illuminated EV panels delivering unmissable eye-level impressions.',
      icon: Megaphone,
      bg: 'bg-white',
      border: 'border-[#DFEAF0]',
      iconBg: 'bg-[#EAF9FD]',
      iconColor: 'text-[#00A8C8]',
      badgeColor: 'text-[#00A8C8]',
    },
    {
      id: 'product-showcase',
      title: 'Product Showcase',
      tagline: 'Transparent mobile pods enabling physical product discovery directly in urban corridors.',
      icon: ShoppingBag,
      bg: 'bg-white',
      border: 'border-[#E4DCFF]',
      iconBg: 'bg-[#F0ECFF]',
      iconColor: 'text-[#7856FF]',
      badgeColor: 'text-[#7856FF]',
    },
    {
      id: 'scan-and-buy',
      title: 'Scan & Buy Commerce',
      tagline: 'Integrated instant QR codes driving zero-friction mobile checkouts and pre-orders.',
      icon: QrCode,
      bg: 'bg-white',
      border: 'border-[#DFEAF0]',
      iconBg: 'bg-[#EAF9FD]',
      iconColor: 'text-[#00A8C8]',
      badgeColor: 'text-[#00A8C8]',
    },
    {
      id: 'sample-handout',
      title: 'Sample Handouts',
      tagline: 'Direct-to-consumer sample distribution outside premier cafes, campuses and corporate hubs.',
      icon: PackageCheck,
      bg: 'bg-white',
      border: 'border-[#E4DCFF]',
      iconBg: 'bg-[#F0ECFF]',
      iconColor: 'text-[#7856FF]',
      badgeColor: 'text-[#7856FF]',
    },
    {
      id: 'hyperlocal-delivery',
      title: 'Hyperlocal Delivery',
      tagline: 'Fast on-demand order dispatch within active 5 km campaign corridors during pilot hours.',
      icon: Truck,
      bg: 'bg-white',
      border: 'border-[#DFEAF0]',
      iconBg: 'bg-[#EAF9FD]',
      iconColor: 'text-[#00A8C8]',
      badgeColor: 'text-[#00A8C8]',
    },
    {
      id: 'social-buzz',
      title: 'Social & Viral Buzz',
      tagline: 'Eye-catching fleet convoys designed for high-engagement Instagram reels and street UGC.',
      icon: Video,
      bg: 'bg-white',
      border: 'border-[#E4DCFF]',
      iconBg: 'bg-[#F0ECFF]',
      iconColor: 'text-[#7856FF]',
      badgeColor: 'text-[#7856FF]',
    },
    {
      id: 'route-analytics',
      title: 'Route Analytics',
      tagline: 'Comprehensive visual campaign summaries, corridor heatmaps and verified pilot proof-of-play.',
      icon: BarChart3,
      bg: 'bg-white',
      border: 'border-[#DFEAF0]',
      iconBg: 'bg-[#EAF9FD]',
      iconColor: 'text-[#00A8C8]',
      badgeColor: 'text-[#00A8C8]',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative border-t border-[#DFEAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Seven Moving Solutions</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
              ONE PLATFORM.{' '}
              <span className="text-[#00A8C8]">MORE</span>{' '}
              <span className="text-[#7856FF]">POSSIBILITIES.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#637786] font-normal">
              A comprehensive quad-mobility system combining advertising, display, commerce and local delivery.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7856FF] hover:text-[#6440FF] transition-colors shrink-0"
          >
            <span>View Full Services Breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid with Alternating Palapitta Blue & Vibrant Violet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <TiltServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
