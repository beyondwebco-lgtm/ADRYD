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
        <div className="hidden sm:flex items-center gap-2 bg-[#101010]/95 backdrop-blur-md border border-[#222222] text-[#FFFFFF] px-3.5 py-2 rounded-xl shadow-2xl text-xs font-medium animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#03F2FF] animate-ping" />
          <span>Chat with ADRYD Campaign Team</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-[#888888] hover:text-[#FFFFFF] ml-1 transition-colors"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#E7FF39] hover:bg-[#D4FF00] text-[#000000] shadow-[0_0_20px_rgba(231,255,57,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#E7FF39]/30"
        aria-label="Chat on WhatsApp"
        title="Chat with ADRYD on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#E7FF39] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 text-[#000000] fill-[#000000]/20" />
      </a>
    </div>
  );
}
