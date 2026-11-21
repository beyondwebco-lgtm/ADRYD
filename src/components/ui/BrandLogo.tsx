import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  theme?: 'light' | 'dark';
}

export default function BrandLogo({
  className = '',
  size = 'md',
  showTagline = true,
  theme = 'light',
}: BrandLogoProps) {
  // Height sizing
  const dimensions = {
    sm: { height: 30, logoH: 'h-7', textScale: 'text-xl' },
    md: { height: 38, logoH: 'h-8 sm:h-9', textScale: 'text-2xl' },
    lg: { height: 46, logoH: 'h-10 sm:h-11', textScale: 'text-3xl' },
  }[size];

  const isLight = theme === 'light';
  const adColor = isLight ? '#172B3A' : '#FFFFFF';
  const rydColor = isLight ? '#00A8C8' : '#58C9EF';
  const taglineColor = isLight ? '#637786' : '#FFFFFF';
  const dartStart = isLight ? '#00A8C8' : '#58C9EF';
  const dartEnd = isLight ? '#1756C1' : '#00A8C8';

  return (
    <div className={`flex items-center select-none group/logo ${className}`}>
      {/* Precision Vector SVG Logo matching official ADRYD brand guidelines */}
      <svg
        viewBox="0 0 290 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto max-w-[180px] xs:max-w-none ${dimensions.logoH} transition-all duration-300 group-hover/logo:scale-[1.02]`}
      >
        <defs>
          <linearGradient id={`brandDartGrad-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={dartStart} />
            <stop offset="100%" stopColor={dartEnd} />
          </linearGradient>
        </defs>

        {/* Aerodynamic Speed Dart Symbol */}
        <g transform="translate(4, 2)">
          {/* Top Wing Blade */}
          <path
            d="M 12 3 L 52 22 L 28 23 L 2 12 Z"
            fill={`url(#brandDartGrad-${theme})`}
          />
          {/* Center Direct Speed Arrow */}
          <path
            d="M 0 25 L 62 25 L 44 35 L 8 35 Z"
            fill={rydColor}
          />
          {/* Bottom Wing Blade */}
          <path
            d="M 5 47 L 48 36 L 26 34 L 14 54 Z"
            fill={`url(#brandDartGrad-${theme})`}
          />
        </g>

        {/* Wordmark Typography */}
        <g transform="translate(74, 5)">
          {/* "AD" in Pure Charcoal on light, White on dark */}
          <text
            x="0"
            y="32"
            fontFamily="'Space Grotesk', system-ui, -apple-system, sans-serif"
            fontSize="34"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="-0.035em"
            fill={adColor}
          >
            AD
          </text>

          {/* "RYD" in Coral Accent on light, Neon Lime on dark */}
          <text
            x="51"
            y="32"
            fontFamily="'Space Grotesk', system-ui, -apple-system, sans-serif"
            fontSize="34"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="-0.035em"
            fill={rydColor}
          >
            RYD
          </text>

          {/* Registered Trademark ® */}
          <g transform="translate(131, 10)">
            <circle cx="4" cy="4" r="3.6" stroke={rydColor} strokeWidth="0.8" fill="none" opacity="0.9" />
            <text
              x="4"
              y="5.8"
              fontFamily="'Inter', sans-serif"
              fontSize="4"
              fontWeight="800"
              fill={rydColor}
              textAnchor="middle"
            >
              R
            </text>
          </g>

          {/* Brand Tagline */}
          {showTagline && (
            <text
              x="1"
              y="45"
              fontFamily="'Inter', -apple-system, sans-serif"
              fontSize="8.5"
              fontWeight="700"
              fontStyle="italic"
              letterSpacing="0.14em"
              fill={taglineColor}
              opacity={isLight ? "0.8" : "0.95"}
            >
              Ride. Promote. Sell. Grow.
            </text>
          )}
        </g>
      </svg>
    </div>
  );
}
