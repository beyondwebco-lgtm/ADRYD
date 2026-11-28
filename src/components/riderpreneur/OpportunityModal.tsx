'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  DollarSign,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  Megaphone,
  ShoppingBag,
  Video,
  Smartphone,
  Sparkles,
  Camera,
  Flame,
  Users,
  Compass,
  Share2,
} from 'lucide-react';
import { Opportunity } from '@/data/riderpreneurData';
import { modalBackdropVariants, modalCardVariants } from '@/lib/motion';

interface OpportunityModalProps {
  opportunity: Opportunity | null;
  onClose: () => void;
  onApply: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Megaphone,
  ShoppingBag,
  Video,
  Smartphone,
  Sparkles,
  Camera,
  Flame,
  Briefcase,
  Users,
  Compass,
  Share2,
};

export default function OpportunityModal({ opportunity, onClose, onApply }: OpportunityModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!opportunity) return;

    if (typeof document !== 'undefined') {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('adryd-modal-state', { detail: { isOpen: true } })
      );
    }

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    const timer = setTimeout(() => {
      modalRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);

      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;

      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('adryd-modal-state', { detail: { isOpen: false } })
        );
      }

      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [opportunity, onClose]);

  const IconComponent = opportunity ? ICON_MAP[opportunity.iconName] || Sparkles : Sparkles;

  return (
    <AnimatePresence>
      {opportunity && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto overscroll-none"
        >
          {/* Backdrop */}
          <motion.div
            key="opportunity-modal-backdrop"
            variants={modalBackdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            ref={modalRef}
            key={`opp-modal-${opportunity.id}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="opp-modal-title"
            tabIndex={-1}
            variants={modalCardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-3xl bg-[#030d17] border-2 border-[#0A9BE0]/40 shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden z-10 my-8 outline-none"
          >
            {/* Top Header Glow Bar */}
            <div
              className="h-2 w-full"
              style={{
                background: `linear-gradient(90deg, #0A9BE0, ${opportunity.color}, #0A9BE0)`,
              }}
            />

            <div className="p-6 sm:p-8 space-y-6 max-h-[85dvh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
              {/* Header Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${opportunity.color}15`,
                      borderColor: `${opportunity.color}40`,
                      color: opportunity.color,
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Category {opportunity.number}
                      </span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider"
                        style={{
                          backgroundColor: `${opportunity.color}20`,
                          color: opportunity.color,
                          border: `1px solid ${opportunity.color}40`,
                        }}
                      >
                        {opportunity.action}
                      </span>
                    </div>
                    <h3 id="opp-modal-title" className="text-xl sm:text-2xl font-black text-white mt-1">
                      {opportunity.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {opportunity.description}
              </p>

              {/* Specific Activities */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A9BE0] flex items-center gap-1.5">
                  <span>What You Will Do (Activities)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {opportunity.activities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compensation & Real Example */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#001426] border border-[#0A9BE0]/30 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#B4F000] uppercase tracking-wider">
                    <DollarSign className="w-4 h-4" />
                    <span>Earning Mechanism</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {opportunity.earningModel}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#041019] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                    <Briefcase className="w-4 h-4 text-[#0A9BE0]" />
                    <span>Real-World Scenario</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {opportunity.exampleScenario}
                  </p>
                </div>
              </div>

              {/* Eligibility */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#B4F000] shrink-0" />
                <div>
                  <strong className="text-white">Eligibility: </strong>
                  <span>{opportunity.eligibility}</span>
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Close Window
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onApply();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] text-xs font-black shadow-[0_4px_15px_rgba(180,240,0,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  <span>Apply for this Opportunity</span>
                  <ArrowRight className="w-4 h-4 text-[#000000]" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
