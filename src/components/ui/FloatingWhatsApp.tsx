'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const num = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');

  if (!num) return null;

  const url = `https://wa.me/${num}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessages.campaign
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 group">
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#041220]/90 backdrop-blur-md border border-[#0A9BE0]/30 text-white px-4 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-xs font-semibold animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#B4F000] animate-ping" />
          <span>Chat with ADRYD Campaign Team</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-[#94A3B8] hover:text-white ml-1 transition-colors"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#B4F000] hover:bg-[#c4fc19] text-[#000000] shadow-[0_8px_25px_rgba(180,240,0,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#B4F000]/30"
        aria-label="Chat on WhatsApp"
        title="Chat with ADRYD on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#B4F000] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 text-[#000000] fill-[#000000]/20" />
      </a>
    </div>
  );
}
