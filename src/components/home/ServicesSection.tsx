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
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
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
      transition={{ duration: 0.5, delay: idx * 0.07 }}
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
            ? 'shadow-[0_20px_40px_rgba(0,168,200,0.14)]'
            : 'shadow-[0_4px_16px_rgba(0,168,200,0.03)]'
        }`}
      >
        <div>
          {/* 3D Elevated Icon Badge */}
          <div
            style={{
              transform: isHovered ? 'translateZ(26px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out',
            }}
            className={`w-14 h-14 rounded-2xl ${service.iconBg} ${service.iconColor} shadow-sm flex items-center justify-center mb-6`}
          >
            <Icon className="w-7 h-7" />
          </div>

          {/* Service Title */}
          <h3
            style={{
              transform: isHovered ? 'translateZ(18px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out',
            }}
            className="font-heading font-black text-2xl sm:text-3xl text-[#172B3A] uppercase tracking-tight mb-2"
          >
            {service.title}
          </h3>

          {/* Single-sentence tagline per prompt */}
          <p
            style={{
              transform: isHovered ? 'translateZ(12px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out',
            }}
            className="text-sm sm:text-base text-[#637786] leading-relaxed font-normal"
          >
            {service.tagline}
          </p>
        </div>

        {/* Action Link */}
        <div
          style={{
            transform: isHovered ? 'translateZ(14px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease-out',
          }}
          className="pt-6 mt-4 border-t border-[#DCECF2]"
        >
          <Link
            href={`/services#adryd-${service.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8C8] hover:text-[#0093AF] transition-colors"
          >
            <span>Explore {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  // 7 services with alternating Palapitta backgrounds per specification
  const services = [
    {
      id: 'promote',
      title: 'Promote',
      tagline: 'Take brands onto the streets.',
      icon: Megaphone,
      bg: 'bg-white',
      border: 'border-[#DCECF2]',
      iconBg: 'bg-[#EAF9FD]',
      iconColor: 'text-[#00A8C8]',
    },
    {
      id: 'showcase',
      title: 'Showcase',
      tagline: 'Bring products closer to customers.',
      icon: ShoppingBag,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      iconBg: 'bg-white',
      iconColor: 'text-[#1756C1]',
    },
    {
      id: 'sell',
      title: 'Sell',
      tagline: 'Create opportunities to purchase.',
      icon: QrCode,
      bg: 'bg-white',
      border: 'border-[#DCECF2]',
      iconBg: 'bg-[#EAF9FD]',
      iconColor: 'text-[#00A8C8]',
    },
    {
      id: 'preorder',
      title: 'Pre-Order',
      tagline: 'Capture customer interest.',
      icon: PackageCheck,
      bg: 'bg-[#F6FAFC]',
      border: 'border-[#DCECF2]',
      iconBg: 'bg-white',
      iconColor: 'text-[#58C9EF]',
    },
    {
      id: 'deliver',
      title: 'Deliver',
      tagline: 'Support local fulfilment.',
      icon: Truck,
      bg: 'bg-white',
      border: 'border-[#DCECF2]',
      iconBg: 'bg-[#EAF9FD]',
      iconColor: 'text-[#1756C1]',
    },
    {
      id: 'viral',
      title: 'Viral',
      tagline: 'Extend reach through social content.',
      icon: Video,
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
      iconBg: 'bg-white',
      iconColor: 'text-[#00A8C8]',
    },
    {
      id: 'insights',
      title: 'Insights',
      tagline: 'Explore future reporting capabilities.',
      icon: BarChart3,
      bg: 'bg-white',
      border: 'border-[#DCECF2]',
      iconBg: 'bg-[#EAF9FD]',
      iconColor: 'text-[#123C83]',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Seven Verticals</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
              ONE PLATFORM.{' '}
              <span className="text-[#00A8C8]">MORE POSSIBILITIES.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#637786] font-normal">
              From street-level advertising to product testing and digital amplification.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8C8] hover:text-[#0093AF] transition-colors shrink-0"
          >
            <span>Explore All 7 Verticals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 7 Interactive 3D Tilt Cards Grid + 8th Custom Activation Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <TiltServiceCard key={service.id} service={service} idx={idx} />
          ))}

          {/* 8th CTA Showcase Card in Deep Royal Blue */}
          <div className="rounded-3xl bg-[#123C83] text-white p-8 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#58C9EF] text-xs font-bold uppercase tracking-wider">
                Custom Activation
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
                Design Your Mix
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed font-normal">
                Combine mobile transit, physical sample showcasing, and viral social coverage for your brand.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/book-campaign"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#00A8C8] hover:bg-[#0093AF] text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Plan Your Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
