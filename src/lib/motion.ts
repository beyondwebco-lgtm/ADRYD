/**
 * ADRYD Global Premium Motion System
 * 
 * Centralized motion tokens, easings, durations, and Framer Motion variants
 * engineered for high-performance, fluid 60fps animations.
 * 
 * Palette & Physics Alignment:
 * - Black: #000000 (Foundation)
 * - Electric Blue: #0A9BE0 (Atmospheric Glow & State)
 * - Chartreuse: #B4F000 (Action, Energy & Focus)
 */

export const motionTokens = {
  duration: {
    micro: 0.18,
    fast: 0.25,
    normal: 0.4,
    slow: 0.65,
    reveal: 0.8,
  },
  ease: {
    // Cubic bezier curves
    premium: [0.22, 1, 0.36, 1] as const, // Smooth deceleration with silky settle
    smooth: [0.4, 0, 0.2, 1] as const,    // Standard Material/Apple smooth curve
    exit: [0.4, 0, 1, 1] as const,        // Quick acceleration out
    gentle: [0.25, 0.1, 0.25, 1] as const,
  },
  spring: {
    modal: {
      type: 'spring' as const,
      stiffness: 280,
      damping: 28,
      mass: 0.85,
    },
    snappy: {
      type: 'spring' as const,
      stiffness: 350,
      damping: 30,
      mass: 0.8,
    },
    gentle: {
      type: 'spring' as const,
      stiffness: 180,
      damping: 24,
      mass: 1,
    },
  },
} as const;

/* =========================================================================
   REUSABLE FRAMER MOTION VARIANTS
   ========================================================================= */

/**
 * Backdrop overlay fade (Fixed blur + animated opacity for max GPU performance)
 */
export const modalBackdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: motionTokens.ease.smooth,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.22,
      ease: motionTokens.ease.exit,
    },
  },
};

/**
 * Desktop Campaign Details Modal opening & closing
 * Initial: scale 0.96, translateY 18px, opacity 0
 * Animate: scale 1, translateY 0, opacity 1 (450ms, premium ease-out)
 * Exit: scale 0.98, translateY 8px, opacity 0 (240ms, smooth exit)
 */
export const modalCardVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 18,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: motionTokens.ease.premium,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 8,
    transition: {
      duration: 0.24,
      ease: motionTokens.ease.exit,
    },
  },
};

/**
 * Mobile Sheet / Modal Presentation
 */
export const mobileModalVariants = {
  initial: {
    opacity: 0,
    y: 28,
    scale: 0.97,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.38,
      ease: motionTokens.ease.premium,
    },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.98,
    transition: {
      duration: 0.22,
      ease: motionTokens.ease.exit,
    },
  },
};

/**
 * Section Content Reveal (Once in viewport)
 */
export const sectionFadeUp = {
  initial: {
    opacity: 0,
    y: 22,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.reveal,
      ease: motionTokens.ease.premium,
    },
  },
};

/**
 * Interactive Button Hover & Press Feedback
 */
export const buttonTapMotion = {
  whileHover: {
    scale: 1.015,
    transition: { duration: motionTokens.duration.micro, ease: motionTokens.ease.smooth },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: motionTokens.ease.smooth },
  },
};

/**
 * Card Hover Elevation
 */
export const cardHoverMotion = {
  whileHover: {
    y: -4,
    transition: { duration: motionTokens.duration.fast, ease: motionTokens.ease.premium },
  },
};

/**
 * Accordion Expand/Collapse
 */
export const accordionVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: 0.32,
        ease: motionTokens.ease.premium,
      },
      opacity: {
        duration: 0.24,
        delay: 0.04,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.26,
        ease: motionTokens.ease.exit,
      },
      opacity: {
        duration: 0.18,
      },
    },
  },
};

/**
 * Dropdown Menu Scale & Fade
 * Opening: Opacity 0->1, Y -8->0, Scale 0.98->1, Duration 300ms (280-320ms)
 * Closing: Opacity 1->0, Y 0->-6, Scale 1->0.98, Duration 220ms (200-240ms)
 * Easing: cubic-bezier(0.22, 1, 0.36, 1)
 */
export const dropdownVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: -8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -6,
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
