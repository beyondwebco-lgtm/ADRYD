'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'opportunities', label: '11 Opportunities' },
  { id: 'affiliate', label: 'Affiliate ID' },
  { id: 'career', label: 'Career Ladder' },
  { id: 'earnings', label: 'Earnings' },
  { id: 'rewards', label: 'Rewards' },
  { id: 'join-options', label: 'Join' },
];

export default function RiderpreneurStickyNav() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky subnav once scrolled past hero (~500px)
      setIsVisible(window.scrollY > 450);

      // Determine active section
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Riderpreneur Section Navigation" className="fixed top-20 left-0 right-0 z-40 px-4 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-top-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-1.5 sm:p-2 rounded-full bg-[#000000]/85 backdrop-blur-xl border border-[#0A9BE0]/30 shadow-[0_10px_35px_rgba(0,0,0,0.85)] pointer-events-auto">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 px-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#B4F000] text-[#000000] shadow-[0_0_12px_rgba(180,240,0,0.5)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => scrollTo('join-options')}
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0A9BE0] hover:bg-[#20aff5] text-white text-xs font-extrabold shadow-[0_0_15px_rgba(10,155,224,0.4)] transition-all shrink-0 ml-2"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
