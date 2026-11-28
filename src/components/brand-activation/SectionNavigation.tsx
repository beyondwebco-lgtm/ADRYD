'use client';

import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'advantage', label: 'Overview' },
  { id: 'opportunities', label: '12 Vectors' },
  { id: 'engines', label: '3 Engines' },
  { id: 'divisions', label: '5 Divisions' },
  { id: 'fashion', label: 'Fashion Connect' },
  { id: 'journey', label: 'Customer Journey' },
  { id: 'affiliate', label: 'Affiliate Network' },
  { id: 'mobile-media', label: 'Moving Media' },
  { id: 'footfall', label: 'Footfall' },
  { id: 'pre-orders', label: 'Pre-Orders' },
  { id: 'travel', label: 'Travel Collabs' },
  { id: 'national', label: 'National Reach' },
  { id: 'packages', label: 'Packages' },
  { id: 'revenue', label: 'Revenue Split' },
  { id: 'roi-calculator', label: 'ROI Calculator' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'enquire', label: 'Get Started' },
];

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState('advantage');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[64px] sm:top-[72px] z-30 w-full bg-[#000000]/90 backdrop-blur-xl border-y border-[#0A9BE0]/20 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollTo(sec.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#B4F000] text-black shadow-[0_2px_10px_rgba(180,240,0,0.35)]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/10'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
