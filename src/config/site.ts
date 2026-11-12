export interface CampaignPackage {
  id: string;
  name: string;
  riders: number;
  durationHours: number;
  durationLabel: string;
  indicativePrice: number;
  tagline: string;
  badge: string;
  description: string;
  idealFor: string;
  features: string[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  tagline: string;
  indicativeMonthlyFee: number | null; // null for custom
  displayFee: string;
  badge: string;
  description: string;
  highlights: string[];
}

export interface ServiceVertical {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  ctaLabel: string;
  isFutureCapability?: boolean;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  isPilotPriority: boolean;
}

export interface PilotLocation {
  id: string;
  name: string;
  zoneType: string;
  targetAudience: string;
  relevantCategories: string;
  keySpots: string[];
  coordinates: { x: number; y: number }; // simulated visual placement percentage
}

export const SITE_CONFIG = {
  name: 'ADRYD',
  platformName: 'ADRYD UPGRADE',
  legalName: 'ADRYD Mobility Technologies',
  tagline: 'YOUR BRAND. YOUR PRODUCTS. OUR MOVING MARKETPLACE.',
  extendedBrandLine: 'RIDE • PROMOTE • SHOWCASE • SELL • PRE-ORDER • DELIVER • GROW',
  description:
    'Electric Mobility-Powered Mobile Advertising, Product Showcase, Commerce, Pre-Orders and Hyperlocal Delivery Platform.',
  url: 'https://adryd.com',

  // Central configuration for pricing display approval (BRD Section 10 & 11)
  // When false: shows "REQUEST QUOTE" and indicative inquiry triggers without direct price tags.
  // When true: shows indicative prices explicitly labeled as "Indicative — subject to confirmation".
  approvedForPublicDisplay: false,

  launchMarket: {
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    statusLabel: 'Proposed Hyderabad pilot locations — subject to feasibility and permissions.',
  },

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'enquiries@adryd.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 40 6824 5500',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
    address: 'Knowledge City, HITEC City, Hyderabad, Telangana 500081',
  },

  whatsappMessages: {
    campaign:
      "Hello ADRYD, I would like to explore a mobile promotion and product showcase campaign in Hyderabad. Please share route details.",
    services:
      "Hello ADRYD, I want to learn more about the 7 ADRYD services (Promote, Showcase, Sell, Pre-Order, Deliver, Viral, Insights).",
    rider:
      "Hello ADRYD, I am interested in joining as an electric vehicle promotional partner rider in Hyderabad.",
    fleet:
      "Hello ADRYD, I operate an EV fleet in Hyderabad and would like to explore fleet partner opportunities with ADRYD.",
    general:
      "Hello ADRYD, I would like to explore your moving marketplace platform.",
  },

  // 7 Service Verticals (BRD Section 7)
  services: [
    {
      id: 'promote',
      slug: 'adryd-promote',
      number: '01',
      name: 'ADRYD Promote',
      tagline: 'Vehicle & Rider Branding',
      shortDesc:
        'Vehicle, rider and approved apparel branding through planned mobile advertising campaigns.',
      longDesc:
        'Put your brand story at eye level across Hyderabad with high-recall electric scooter branding, uniformed promotional riders, and planned arterial corridor routes.',
      highlights: [
        'EV side, front and rear panel branding',
        'Approved rider apparel branding',
        'Targeted local commercial corridor promotions',
        'Single and fleet coordinated campaigns',
        'Planned campaign routes and timed stops',
      ],
      ctaLabel: 'EXPLORE PROMOTION',
    },
    {
      id: 'showcase',
      slug: 'adryd-showcase',
      number: '02',
      name: 'ADRYD Showcase',
      tagline: 'Mobile Product Discovery',
      shortDesc:
        'Bring product samples and displays closer to potential customers.',
      longDesc:
        'Transform electric vehicles into mobile demonstration units with illuminated, secure display cases. Let customers touch, inspect, and experience your products in person.',
      highlights: [
        'Secure illuminated product display concepts',
        'On-ground product demonstrations',
        'Sampling activations at approved stops',
        'Live product discovery at high-density hubs',
        'Approved location-based showcase sessions',
      ],
      ctaLabel: 'EXPLORE SHOWCASE',
    },
    {
      id: 'sell',
      slug: 'adryd-sell',
      number: '03',
      name: 'ADRYD Sell',
      tagline: 'Frictionless QR Commerce',
      shortDesc:
        'Connect mobile product experiences to sales opportunities.',
      longDesc:
        'Bridge physical interest with immediate buying intent. On-scooter contactless QR codes link directly to your digital catalogue, product page, or purchase assistance channel.',
      highlights: [
        'Immediate product enquiry capture',
        'QR-linked digital product catalogues',
        'Limited-stock mobile selling concepts',
        'Customer purchase assistance via trained riders',
        'Brand-specific launch offers & discount vouchers',
      ],
      ctaLabel: 'EXPLORE MOBILE SELLING',
    },
    {
      id: 'pre-order',
      slug: 'adryd-pre-order',
      number: '04',
      name: 'ADRYD Pre-Order',
      tagline: 'Demand Generation Before Fulfilment',
      shortDesc:
        'Help businesses collect demand before fulfilment.',
      longDesc:
        'Validate new product batches, aggregate group orders, and collect confirmed pre-bookings from corporate offices, gated communities, and college hostels.',
      highlights: [
        'Individual customer pre-order registrations',
        'Customised product requests & batch bookings',
        'Group orders for tech teams & residential societies',
        'Bulk order enquiries for festivals & corporate gifting',
        'Scheduled batch fulfilment coordination concepts',
      ],
      ctaLabel: 'EXPLORE PRE-ORDERS',
    },
    {
      id: 'deliver',
      slug: 'adryd-deliver',
      number: '05',
      name: 'ADRYD Deliver',
      tagline: 'Hyperlocal Product Fulfilment',
      shortDesc:
        'Explore hyperlocal delivery and product fulfilment services.',
      longDesc:
        'Pair promotional movement with last-mile fulfillment. Fulfil customer orders collected during activations or coordinate fast deliveries within the campaign zone.',
      highlights: [
        'Local customer order drop-offs',
        'Scheduled same-day & next-day deliveries',
        'Local retail store stock replenishment',
        'Real-time delivery route coordination',
        'Hyperlocal promotional fulfilment concepts',
      ],
      ctaLabel: 'EXPLORE DELIVERY',
    },
    {
      id: 'viral',
      slug: 'adryd-viral',
      number: '06',
      name: 'ADRYD Viral',
      tagline: 'Street-to-Screen Amplification',
      shortDesc:
        'Extend physical brand activations through digital content.',
      longDesc:
        'Multiply on-street impact across social platforms. Our studio shoots cinematic reels, street-intercept videos, and product spotlights to turn physical buzz into digital reach.',
      highlights: [
        'Cinematic Reels, Shorts & TikTok formats',
        'Product demonstrations & unboxing captures',
        'Professional campaign photography',
        'High-impact social media creatives',
        'Referral campaign concepts & QR contests',
        'Compelling multi-channel brand storytelling',
      ],
      ctaLabel: 'EXPLORE DIGITAL PROMOTION',
    },
    {
      id: 'insights',
      slug: 'adryd-insights',
      number: '07',
      name: 'ADRYD Insights',
      tagline: 'Proposed Campaign Reporting',
      shortDesc:
        'Introduce the proposed reporting capabilities of the ADRYD platform.',
      longDesc:
        'Planned platform telemetry designed to give brand owners transparent verification—from GPS route confirmation to QR scans, customer enquiries, and campaign summaries.',
      highlights: [
        'Consolidated campaign execution reports',
        'GPS route evidence & corridor logs',
        'QR scan engagement & interaction metrics',
        'Customer enquiry tracking & category interest',
        'Pre-order and lead generation summaries',
        'Comprehensive post-campaign performance reviews',
      ],
      ctaLabel: 'EXPLORE INSIGHTS',
      isFutureCapability: true,
    },
  ] as ServiceVertical[],

  // 8 Product Categories (BRD Section 9)
  productCategories: [
    {
      id: 'fashion',
      title: 'Fashion & Textiles',
      subtitle: 'Handlooms, boutique casuals & ethnic wear',
      description:
        'Pochampally sarees, linen clothing, kurtas, dhotis, boutique wear and woollens presented at eye level.',
      examples: ['Pochampally Sarees', 'Pure Linen Shirts', 'Designer Kurtas', 'Handloom Dhotis', 'Woollen Knitwear'],
      isPilotPriority: true,
    },
    {
      id: 'bakery',
      title: 'Bakery & Homemade Foods',
      subtitle: 'Artisanal cakes, hampers & confections',
      description:
        'Cakes, artisanal cookies, handcrafted chocolates, savory snacks and curated pre-order gift hampers.',
      examples: ['Custom Birthday Cakes', 'Artisan Cookies', 'Handmade Chocolates', 'Festival Hampers', 'Gourmet Snacks'],
      isPilotPriority: true,
    },
    {
      id: 'food-agri',
      title: 'Food & Agriculture',
      subtitle: 'Organic farm-fresh produce & pantry staples',
      description:
        'Farm-fresh dairy, organic cold-pressed oils, premium dry fruits, raw honey, spices and seasonal staples.',
      examples: ['Farm-Fresh Dairy', 'Cold-Pressed Oils', 'Raw Forest Honey', 'Organic Spices', 'Premium Dry Fruits'],
      isPilotPriority: true,
    },
    {
      id: 'handmade',
      title: 'Handmade & Home Décor',
      subtitle: 'Artisan handicrafts & bespoke gifting',
      description:
        'Handicrafts, crochet crafts, wooden toys, scented soy candles, customized gifts and sustainable home décor.',
      examples: ['Crochet Creations', 'Kondapalli Wooden Toys', 'Scented Candles', 'Bespoke Gifts', 'Ceramic Tableware'],
      isPilotPriority: true,
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Personal Care',
      subtitle: 'Natural skincare, fragrances & wellness',
      description:
        'Ayurvedic skincare, artisan cold-process soaps, botanical hair oils, natural perfumes and wellness goods.',
      examples: ['Natural Skincare', 'Handmade Herbal Soaps', 'Cold-Pressed Hair Oils', 'Artisan Perfumes', 'Wellness Teas'],
      isPilotPriority: true,
    },
    {
      id: 'tech-edu',
      title: 'Technology & Education',
      subtitle: 'Smart accessories & learning kits',
      description:
        'Mobile accessories, curated books, design stationery, STEM educational kits and interactive learning toys.',
      examples: ['Mobile Accessories', 'Curated Books & Journals', 'STEM Science Kits', 'Interactive Toys', 'Smart Gadgets'],
      isPilotPriority: false,
    },
    {
      id: 'home-garden',
      title: 'Home & Garden',
      subtitle: 'Indoor plants, botanical kits & green living',
      description:
        'Air-purifying plants, home nursery starter kits, fresh cut flowers, kitchen accessories and eco-friendly home goods.',
      examples: ['Indoor Plants', 'Nursery Starter Kits', 'Fresh Flower Bouquets', 'Eco Kitchenware', 'Biodegradable Planters'],
      isPilotPriority: false,
    },
    {
      id: 'startups',
      title: 'Startups & Local Entrepreneurs',
      subtitle: 'D2C launches & new retail concepts',
      description:
        'Home-grown businesses, direct-to-consumer digital brands, new retail store launches and emerging local entrepreneurs.',
      examples: ['D2C Brand Launches', 'Home Bakers & Chefs', 'Apparel Innovators', 'Local Retail Openings', 'Sustainable Goods'],
      isPilotPriority: false,
    },
  ] as ProductCategory[],

  // 5 Illustrative Campaign Packages (BRD Section 10)
  campaignPackages: [
    {
      id: 'starter',
      name: 'Starter',
      riders: 1,
      durationHours: 3,
      durationLabel: '3 Hours',
      indicativePrice: 1499,
      tagline: 'Local Neighborhood Visibility',
      badge: 'Single Rider',
      description:
        'Single branded electric vehicle operating within a focused local radius or neighborhood shopping hub.',
      idealFor: 'Local cafés, boutiques, neighborhood clinics, and introductory brand validation.',
      features: [
        '1 Branded Electric Vehicle & Rider',
        '3 Hours targeted local operation',
        'Focused neighborhood corridor routes',
        'Basic photographic campaign proof',
        'Direct QR code catalogue integration',
      ],
    },
    {
      id: 'local-reach',
      name: 'Local Reach',
      riders: 2,
      durationHours: 4,
      durationLabel: '4 Hours',
      indicativePrice: 3499,
      tagline: 'Dual-Rider Tandem Recall',
      badge: 'High Recall',
      description:
        'Two coordinated electric vehicles operating in tandem along major arterial commercial routes.',
      idealFor: 'Store openings, weekend discount blasts, restaurant launches, and quick-service retail.',
      features: [
        '2 Coordinated Electric Vehicles & Riders',
        '4 Hours synchronous route deployment',
        'Double visual impression frequency on street',
        'Peak traffic corridor targeting',
        'Pre & post-campaign photographic logs',
      ],
    },
    {
      id: 'community',
      name: 'Community',
      riders: 5,
      durationHours: 5,
      durationLabel: '5 Hours',
      indicativePrice: 8999,
      tagline: 'Multi-Zone Commercial Saturation',
      badge: 'Multi-Rider Cluster',
      description:
        'Coordinated cluster of 5 branded electric vehicles saturating major commercial districts and tech parks.',
      idealFor: 'D2C brand launches, regional promotions, product sampling, and weekend festive events.',
      features: [
        '5 Coordinated Electric Vehicles & Riders',
        '5 Hours comprehensive district coverage',
        'Scheduled stationary showcase stops',
        'Trained rider product assistance',
        'QR enquiry and sampling lead capture',
      ],
    },
    {
      id: 'city-activation',
      name: 'City Activation',
      riders: 10,
      durationHours: 6,
      durationLabel: '6 Hours',
      indicativePrice: 17999,
      tagline: 'High-Impact Metro Blitz',
      badge: 'Citywide Fleet',
      description:
        'Full 10-scooter synchronized fleet deploying across major urban intersections, IT corridors, and high-streets.',
      idealFor: 'Enterprise brands, movie releases, real estate pre-launches, and festive blitz campaigns.',
      features: [
        '10 Synchronized Electric Vehicles & Riders',
        '6 Hours intensive citywide coverage',
        'Multi-zone simultaneous presence',
        'Dedicated on-ground campaign coordinator',
        'Detailed execution summary & route reports',
      ],
    },
    {
      id: 'bulk-activation',
      name: 'Bulk Activation',
      riders: 20,
      durationHours: 8,
      durationLabel: 'Custom Route',
      indicativePrice: 34999,
      tagline: 'Mega Fleet & Custom Architecture',
      badge: '20+ Riders • Custom',
      description:
        'Extensive fleet deployment with customized routing, showcase structures, and multi-day scheduling.',
      idealFor: 'Large consumer brands, advertising agencies, major exhibitions, and seasonal roadshows.',
      features: [
        '20+ Electric Vehicles & Custom Fleet Scale',
        'Custom route scheduling & multi-day plans',
        'Bespoke vehicle modifications & showcase boxes',
        'Dedicated senior operations account lead',
        'Full creative content capture & social reels',
      ],
    },
  ] as CampaignPackage[],

  // 4 Monthly Subscription Plans (BRD Section 11)
  subscriptionPlans: [
    {
      id: 'sub-starter',
      name: 'Starter',
      tagline: 'Consistent Monthly Presence',
      indicativeMonthlyFee: 9999,
      displayFee: '₹9,999 / mo',
      badge: 'Single Zone',
      description:
        'Ideal for growing neighborhood businesses requiring predictable monthly street visibility in one zone.',
      highlights: [
        'Allocated monthly rider hours',
        'Single focused commercial zone',
        'Scheduled recurring weekly activations',
        'Basic campaign reporting concept',
        'Standard vehicle branding setup',
      ],
    },
    {
      id: 'sub-growth',
      name: 'Growth',
      tagline: 'Multi-Session Acceleration',
      indicativeMonthlyFee: 24999,
      displayFee: '₹24,999 / mo',
      badge: 'Most Popular',
      description:
        'For brands seeking sustained weekly visibility, QR customer engagement, and active lead collection.',
      highlights: [
        'Expanded monthly rider hours & multiple sessions',
        'Two complementary commercial zones',
        'QR catalogue reporting & enquiry metrics',
        'Bi-weekly route adjustments for optimal footfall',
        'Priority rider allocation during peak windows',
      ],
    },
    {
      id: 'sub-premium',
      name: 'Premium',
      tagline: 'Multi-Location Market Dominance',
      indicativeMonthlyFee: 49999,
      displayFee: '₹49,999 / mo',
      badge: 'High Impact',
      description:
        'Designed for established brands commanding high-recall presence across multiple key metro corridors.',
      highlights: [
        'Extensive multi-location fleet hours',
        'Coverage across 4 major commercial hubs',
        'Illuminated product showcase support',
        'Enhanced reporting concepts & engagement logs',
        'Priority scheduling & dedicated account specialist',
      ],
    },
    {
      id: 'sub-enterprise',
      name: 'Enterprise',
      tagline: 'Tailored Fleet & Bespoke Deployment',
      indicativeMonthlyFee: null,
      displayFee: 'Custom Quotation',
      badge: 'Custom Fleet',
      description:
        'Custom multi-vehicle architecture, dedicated route planning, and full creative production for large enterprises.',
      highlights: [
        'Bulk fleet sizing tailored to brand requirements',
        'Full citywide multi-corridor orchestration',
        'Dedicated campaign operations & logistics manager',
        'Integrated creative studio & viral content package',
        'Custom telemetry & executive reporting summaries',
      ],
    },
  ] as SubscriptionPlan[],

  // 5 Proposed Hyderabad Pilot Locations (BRD Section 13)
  pilotLocations: [
    {
      id: 'hitec-city',
      name: 'HITEC City',
      zoneType: 'IT & Commercial Core',
      targetAudience: 'Tech employees, multinational corporate offices, young professionals, high-income commuters.',
      relevantCategories: 'Lifestyle products, tech accessories, gourmet snacks, artisanal coffee, premium gifting.',
      keySpots: ['Cyber Towers Junction', 'Mindspace Circle', 'Knowledge City', 'Inorbit Mall Corridor'],
      coordinates: { x: 38, y: 46 },
    },
    {
      id: 'madhapur',
      name: 'Madhapur',
      zoneType: 'Tech & Lifestyle Hub',
      targetAudience: 'IT offices, PG hostels, students, thriving food high-streets, fashion-conscious shoppers.',
      relevantCategories: 'Fashion & apparel, street food, personal care, beauty, casual dining, lifestyle hampers.',
      keySpots: ['100 Feet Road', 'Ayyappa Society Hub', 'Kavuri Hills Corridor', 'Durgam Cheruvu Link Road'],
      coordinates: { x: 44, y: 52 },
    },
    {
      id: 'kukatpally',
      name: 'Kukatpally',
      zoneType: 'Dense Residential & Retail High-Street',
      targetAudience: 'Families, residential gated communities, active retail shoppers, university students.',
      relevantCategories: 'Clothing & handlooms, home bakery, packaged foods, kitchenware, nursery plants.',
      keySpots: ['KPHB Main Road', 'JNTU Junction', 'Forum Sujana Mall High-Street', 'Y-Junction'],
      coordinates: { x: 32, y: 28 },
    },
    {
      id: 'kompally',
      name: 'Kompally',
      zoneType: 'Upscale Suburban Communities',
      targetAudience: 'Gated villa communities, affluent residential families, eco-conscious consumers.',
      relevantCategories: 'Organic farm produce, home décor, handcrafted items, nursery kits, bespoke gifts.',
      keySpots: ['Medchal Highway Corridor', 'Suchitra Circle', 'Dulapally Cross', 'Gundlapochampally Link'],
      coordinates: { x: 58, y: 18 },
    },
    {
      id: 'gachibowli',
      name: 'Gachibowli',
      zoneType: 'Financial District & Corporate Corridor',
      targetAudience: 'Financial analysts, global tech executives, gated community residents, fitness enthusiasts.',
      relevantCategories: 'Premium lifestyle goods, group pre-orders, corporate gifting, organic foods, health drinks.',
      keySpots: ['ORR Junction', 'Financial District High-Street', 'Wipro Circle', 'DLF Cybercity Lane'],
      coordinates: { x: 26, y: 62 },
    },
  ] as PilotLocation[],

  // Updated Navigation Structure (BRD Section 4)
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Our Services',
      href: '/services',
      hasDropdown: true,
      children: [
        {
          label: '01 — ADRYD Promote',
          href: '/services#adryd-promote',
          description: 'EV & rider apparel branding on planned routes',
        },
        {
          label: '02 — ADRYD Showcase',
          href: '/services#adryd-showcase',
          description: 'Secure illuminated product display & sample stops',
        },
        {
          label: '03 — ADRYD Sell',
          href: '/services#adryd-sell',
          description: 'QR-enabled catalogues & purchase assistance',
        },
        {
          label: '04 — ADRYD Pre-Order',
          href: '/services#adryd-pre-order',
          description: 'Demand generation, bulk bookings & group orders',
        },
        {
          label: '05 — ADRYD Deliver',
          href: '/services#adryd-deliver',
          description: 'Hyperlocal last-mile delivery & store replenishment',
        },
        {
          label: '06 — ADRYD Viral',
          href: '/services#adryd-viral',
          description: 'Street-to-screen reels, photography & social reach',
        },
        {
          label: '07 — ADRYD Insights',
          href: '/services#adryd-insights',
          description: 'Proposed platform telemetry & campaign summaries',
          isFuture: true,
        },
      ],
    },
    { label: 'ADRYD Upgrade', href: '/adryd-upgrade', badge: 'V3.0' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Campaign Plans', href: '/campaign-plans' },
    { label: 'Become a Partner', href: '/become-a-rider' },
    { label: 'Contact', href: '/contact' },
  ],

  // Footer Links (BRD Section 19)
  footerLinks: {
    services: [
      { label: 'ADRYD Promote', href: '/services#adryd-promote' },
      { label: 'ADRYD Showcase', href: '/services#adryd-showcase' },
      { label: 'ADRYD Sell', href: '/services#adryd-sell' },
      { label: 'ADRYD Pre-Order', href: '/services#adryd-pre-order' },
      { label: 'ADRYD Deliver', href: '/services#adryd-deliver' },
      { label: 'ADRYD Viral', href: '/services#adryd-viral' },
      { label: 'ADRYD Insights (Future)', href: '/services#adryd-insights' },
    ],
    platform: [
      { label: 'ADRYD Upgrade V3.0', href: '/adryd-upgrade' },
      { label: 'Campaign Packages', href: '/campaign-plans#packages' },
      { label: 'Monthly Plans', href: '/campaign-plans#subscriptions' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Technology Roadmap', href: '/technology' },
      { label: 'Product Categories', href: '/#categories' },
    ],
    company: [
      { label: 'About ADRYD', href: '/about' },
      { label: 'Become a Rider Partner', href: '/become-a-rider' },
      { label: 'Fleet Partnership', href: '/become-a-rider#fleet-partnership' },
      { label: 'Hyderabad Pilot Areas', href: '/#pilot-locations' },
      { label: 'Safety & Compliance', href: '/about#safety-trust' },
      { label: 'Contact Team', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
  },
};
