export interface CampaignPackage {
  id: string;
  name: string;
  riders: string;
  duration: string;
  coverage: string;
  desc: string;
  features: string[];
  badge: string;
  badgeStyle: string;
  border: string;
  cardBg: string;
  glow: string;
  color: string;
  accentColor: string;
  featured?: boolean;
  image: string;
  tagline: string;
}

export const CAMPAIGN_PACKAGES: CampaignPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    riders: '1 Rider',
    duration: '3 Days / 1 Corridor',
    coverage: 'Dedicated Single Corridor',
    tagline: 'Focused Local Corridor Pilot',
    badge: 'Pilot Tier',
    badgeStyle: 'bg-white/10 text-white border-white/20',
    desc: 'Perfect for local business pilots, product sampling runs or single-neighborhood promotions.',
    features: [
      '1 Branded Electric Vehicle (EV)',
      'Dedicated Single Corridor Routing',
      'Handout & Flyer Distribution Support',
      'Basic Activity & Location Run Log',
      'Trained Uniformed Brand Rider',
      'Custom QR Code Campaign Signage'
    ],
    border: 'border-white/20 hover:border-[#B4F000]',
    cardBg: 'bg-[#041220]/75 hover:bg-[#041220]/90',
    glow: 'shadow-[0_0_25px_rgba(0,0,0,0.5)]',
    color: 'text-[#E2E8F0]',
    accentColor: '#E2E8F0',
    image: '/images/campaigns/package-starter.jpg',
  },
  {
    id: 'local-reach',
    name: 'Local Reach',
    riders: '2–3 Riders',
    duration: '1 Week / Multi-Area',
    coverage: 'Dual Corridors / Retail Saturation',
    tagline: 'Neighborhood Commercial Saturation',
    badge: 'Local Buzz',
    badgeStyle: 'bg-[#0A9BE0]/20 text-[#0A9BE0] border-[#0A9BE0]/30',
    desc: 'Cross-corridor tandem presence built for store openings, weekend buzz and neighborhood commercial saturation.',
    features: [
      '2–3 Branded Electric Vehicles (EVs)',
      'Cross-Corridor Street Routes',
      'Illuminated Product Showcasing Back-Box',
      'QR Code Scan & Traffic Reports',
      'Trained Brand Ambassadors / Riders',
      'Hyperlocal Route Planning & Heatmaps'
    ],
    border: 'border-[#0A9BE0]/40 hover:border-[#B4F000]',
    cardBg: 'bg-[#051C33]/65 hover:bg-[#051C33]/85',
    glow: 'shadow-[0_0_25px_rgba(10,155,224,0.25)]',
    color: 'text-[#0A9BE0]',
    accentColor: '#0A9BE0',
    image: '/images/campaigns/package-local-reach.jpg',
  },
  {
    id: 'community',
    name: 'Community',
    riders: '4–5 Riders',
    duration: '2 Weeks / Prime Hubs',
    coverage: 'IT Corridors, Universities & High Streets',
    tagline: 'High-Impact Multi-Corridor Saturation',
    badge: '★ Most Popular',
    badgeStyle: 'bg-[#B4F000] text-[#000000] font-black border-[#B4F000]',
    desc: 'High-frequency street presence across premier IT corridors, university zones and prime shopping avenues.',
    features: [
      '4–5 Branded Electric Vehicles (EVs)',
      'Dual-Cluster Corridor Routing',
      'QR Ordering & Pre-Orders Integration',
      'Visual Verification & Daily Run Reports',
      'Illuminated Display Back-Boxes',
      'Dedicated Route Captain & Support'
    ],
    border: 'border-[#B4F000] ring-2 ring-[#B4F000]/40',
    cardBg: 'bg-[#041B33]/85 hover:bg-[#041B33]/95',
    glow: 'shadow-[0_0_40px_rgba(180,240,0,0.35)]',
    color: 'text-[#B4F000]',
    accentColor: '#B4F000',
    featured: true,
    image: '/images/campaigns/package-community.jpg',
  },
  {
    id: 'city-activation',
    name: 'City Activation',
    riders: '6–10 Riders',
    duration: '1 Month Strategic',
    coverage: 'Citywide High-Street Commercial Hubs',
    tagline: 'Sustained Citywide Brand Recall',
    badge: 'Strategic Metro',
    badgeStyle: 'bg-[#0A9BE0]/20 text-[#0A9BE0] border-[#0A9BE0]/30',
    desc: 'Sustained citywide brand recall across Hyderabad’s top high-street commercial hubs and key metro corridors.',
    features: [
      '6–10 Branded Electric Vehicles (EVs)',
      'Citywide Coordinated Convoys & Routes',
      'Full Showcase & Delivery Sync Integration',
      'Dedicated Campaign Operations Lead',
      'High-Street Storefront Synchronization',
      'Comprehensive Telemetry & Run Logs'
    ],
    border: 'border-[#0A9BE0]/40 hover:border-[#0A9BE0]',
    cardBg: 'bg-[#051C33]/65 hover:bg-[#051C33]/85',
    glow: 'shadow-[0_0_25px_rgba(10,155,224,0.25)]',
    color: 'text-[#0A9BE0]',
    accentColor: '#0A9BE0',
    image: '/images/campaigns/package-city-activation.jpg',
  },
  {
    id: 'bulk-activation',
    name: 'Bulk Activation',
    riders: '10+ Riders',
    duration: 'Custom Scope / Enterprise',
    coverage: 'Massive Multi-Corridor Convoys',
    tagline: 'Large-Scale Fleet Mobilization',
    badge: 'Enterprise Fleet',
    badgeStyle: 'bg-[#B4F000]/20 text-[#B4F000] border-[#B4F000]/30',
    desc: 'Large-scale fleet mobilizations, major brand launches, festival sponsorships and bespoke PR activations.',
    features: [
      '10+ Custom Branded Electric Fleet',
      'Multi-Corridor Synchronized Convoys',
      'Full Media & Reel Coverage Support',
      'Custom Reporting Analytics & Real-Time GPS',
      'Bespoke Showcase Fabrication Options',
      'Enterprise SLA & Dedicated Operations Lead'
    ],
    border: 'border-[#0A9BE0]/30 hover:border-[#B4F000]',
    cardBg: 'bg-[#041220]/75 hover:bg-[#041220]/90',
    glow: 'shadow-[0_0_25px_rgba(0,0,0,0.5)]',
    color: 'text-[#B4F000]',
    accentColor: '#B4F000',
    image: '/images/campaigns/package-bulk-activation.jpg',
  },
];
