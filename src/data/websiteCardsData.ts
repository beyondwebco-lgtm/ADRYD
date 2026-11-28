export interface DetailCardBadge {
  label: string;
  value: string;
  isPrimary?: boolean;
}

export interface DetailCardItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt?: string;
  badges?: DetailCardBadge[];
  highlight?: string;
  description: string;
  featuresTitle?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  note?: string;
}

// ============================================================================
// 1. SERVICES (7 CAPABILITIES)
// ============================================================================
export const SERVICES_CARD_DETAILS: Record<string, DetailCardItem> = {
  promote: {
    id: 'promote',
    category: 'ADRYD SERVICE CAPABILITY',
    title: 'ADRYD Promote',
    tagline: 'High-Impact Street Visibility & Fleet Livery',
    image: '/images/campaigns/service-adryd-promote.jpg',
    imageAlt: 'ADRYD Promote - Branded EV Fleet Advertising',
    badges: [
      { label: 'Fleet Scale', value: '1 to 10+ Branded EVs', isPrimary: true },
      { label: 'Active Exposure', value: '8–10 Peak Hours / Day' },
    ],
    highlight: 'Continuous moving brand recall across Hyderabad’s premier commercial corridors.',
    description:
      'Transform two-wheeler fleets into moving brand landmarks. Uniformed riders, custom automotive-grade vehicle wrapping, and synchronized corridor routes deliver eye-level impressions where billboards cannot reach.',
    featuresTitle: 'Included in Promote Service',
    features: [
      'Full custom waterproof vinyl EV body wrapping',
      'Uniformed brand ambassador riders & branded helmets',
      'Targeted high-density commercial corridor saturation',
      'Morning & evening peak traffic coordinated schedules',
      'Real-time GPS route logging & photo verification',
      'Zero tailpipe emissions with pure EV technology',
    ],
    ctaText: 'Enquire for Promote Campaign',
    ctaHref: '/book-campaign?service=promote',
    note: 'Customizable corridor scheduling • Dedicated ops coordination',
  },
  showcase: {
    id: 'showcase',
    category: 'ADRYD SERVICE CAPABILITY',
    title: 'ADRYD Showcase',
    tagline: 'Illuminated Product Display & Tactical Sampling',
    image: '/images/campaigns/service-adryd-showcase.jpg',
    imageAlt: 'ADRYD Showcase - Transparent Illuminated Product Compartments',
    badges: [
      { label: 'Display Unit', value: '3-Sided Illuminated Glass', isPrimary: true },
      { label: 'Sample Reach', value: '100–500 Samples / Day' },
    ],
    highlight: 'Put real products directly in front of shoppers, commuters, and campus crowds.',
    description:
      'Bring physical merchandise directly to consumers. High-CRI LED internal illumination and weather-sealed transparent enclosures let shoppers, students, and tech park workers examine products at eye level.',
    featuresTitle: 'Included in Showcase Service',
    features: [
      '3-sided anti-glare tempered display enclosure',
      'High-CRI LED internal illumination for nighttime visibility',
      'Ergonomic product sampling trays & demo kits',
      'Interactive rider product pitch & demonstration training',
      'Secure, lockable weatherproof transit compartments',
      'Curated high-footfall stationary stops at cafes & tech parks',
    ],
    ctaText: 'Enquire for Showcase Campaign',
    ctaHref: '/book-campaign?service=showcase',
    note: 'Sanitized demonstration units • Professional sampling leads',
  },
  sell: {
    id: 'sell',
    category: 'ADRYD SERVICE CAPABILITY',
    title: 'ADRYD Sell',
    tagline: 'Scan-and-Buy Mobile QR Commerce',
    image: '/images/campaigns/service-adryd-sell.jpg',
    imageAlt: 'ADRYD Sell - Mobile QR Commerce & On-Street Checkout',
    badges: [
      { label: 'Payment Gateway', value: 'UPI / QR / Instant Cards', isPrimary: true },
      { label: 'Checkout Time', value: '< 20 Seconds Mobile Pay' },
    ],
    highlight: 'Bridge on-street curiosity with instant digital commerce and conversion attribution.',
    description:
      'Turn pedestrian interest into immediate transactions. Each scooter and rider uniform features prominent high-contrast QR codes directing interested buyers to dedicated instant checkout landing pages.',
    featuresTitle: 'Included in Sell Service',
    features: [
      'Prominent high-contrast dynamic QR codes on vehicle & box',
      'Mobile-optimized lightweight instant checkout pages',
      'Exclusive campaign-specific promotional codes & flash deals',
      'Digital payment integration (UPI, cards, NetBanking)',
      'Real-time scan tracking & conversion attribution analytics',
      'Rider sales enablement & product guidance',
    ],
    ctaText: 'Enquire for Sell Campaign',
    ctaHref: '/book-campaign?service=sell',
    note: 'Direct conversion tracking • Real-time scan telemetry',
  },
  preorder: {
    id: 'preorder',
    category: 'ADRYD SERVICE CAPABILITY',
    title: 'ADRYD Pre-Order',
    tagline: 'Early Demand Capture & Product Drop Validation',
    image: '/images/campaigns/service-adryd-preorder.jpg',
    imageAlt: 'ADRYD Pre-Order - Product Launch Demand Validation',
    badges: [
      { label: 'Campaign Mode', value: 'Pre-Launch / Limited Drops', isPrimary: true },
      { label: 'Consumer Insights', value: 'Tactile Feedback Surveys' },
    ],
    highlight: 'Validate market appetite and secure advance bookings before wide retail rollout.',
    description:
      'Capture advance orders and validate product demand in prime target neighborhoods. Ideal for direct-to-consumer launches, artisanal batches, and innovative hardware releases.',
    featuresTitle: 'Included in Pre-Order Service',
    features: [
      'Exclusive advance reservation discount incentives',
      'VIP customer contact capture & WhatsApp notification sync',
      'On-street live product tactile feedback surveys',
      'Group pre-orders for university campuses & IT tech parks',
      'Early-bird delivery priority guarantees',
      'Corridor comparison analytics for retail launch planning',
    ],
    ctaText: 'Enquire for Pre-Order Campaign',
    ctaHref: '/book-campaign?service=preorder',
    note: 'Ideal for D2C product drops • Pre-launch interest analytics',
  },
  deliver: {
    id: 'deliver',
    category: 'ADRYD SERVICE CAPABILITY',
    title: 'ADRYD Deliver',
    tagline: 'Zero-Emission Hyperlocal Promotional Fulfilment',
    image: '/images/campaigns/service-adryd-deliver.jpg',
    imageAlt: 'ADRYD Deliver - Same-Day Hyperlocal Brand Fulfilment',
    badges: [
      { label: 'Speed', value: 'Same-Day Neighborhood Drop', isPrimary: true },
      { label: 'Cargo Gear', value: 'Reinforced Insulated Pods' },
    ],
    highlight: 'Connect street visibility with fast neighborhood delivery and retail replenishment.',
    description:
      'Our riders don’t just promote—they can distribute sample packs, deliver flash-sale purchases, and replenish local partner stores along their active routes.',
    featuresTitle: 'Included in Deliver Service',
    features: [
      'Fast same-day promotional drop-offs & flash deliveries',
      'Boutique retail inventory micro-replenishment',
      'Curated sample pack doorstep deliveries to subscribers',
      'GPS tracked delivery route corridors',
      'Cold-chain / insulated bag options for food & wellness',
      'Clean zero-emission electric scooter transit',
    ],
    ctaText: 'Enquire for Deliver Campaign',
    ctaHref: '/book-campaign?service=deliver',
    note: 'Scheduled delivery runs • Zero tailpipe emissions',
  },
  viral: {
    id: 'viral',
    category: 'ADRYD SERVICE CAPABILITY',
    title: 'ADRYD Viral',
    tagline: 'Street-to-Screen Social Media Production',
    image: '/images/campaigns/service-adryd-viral.jpg',
    imageAlt: 'ADRYD Viral - High-Energy Street Social Content',
    badges: [
      { label: 'Content Format', value: '9:16 Vertical Reels / B-Roll', isPrimary: true },
      { label: 'Turnaround', value: '48-Hour Edited Delivery' },
    ],
    highlight: 'Transform physical street buzz into organic digital reach and engagement.',
    description:
      'Turn physical street activations into digital social momentum. Our dedicated content crew captures raw consumer reactions, convoy tracking shots, and unboxing moments engineered for viral social reach.',
    featuresTitle: 'Included in Viral Service',
    features: [
      'Authentic street interaction video shoots & vox-pop interviews',
      'High-energy vertical reels formatted for Instagram & YouTube Shorts',
      'Drone cinematography & convoy tracking footage',
      'Micro-influencer & local creator collaborations',
      'Fast-turnaround edit delivery with licensed audio hooks',
      'Branded animated motion graphics and overlay titles',
    ],
    ctaText: 'Enquire for Viral Campaign',
    ctaHref: '/book-campaign?service=viral',
    note: 'Includes creator release forms • Multi-platform cutdowns',
  },
  insights: {
    id: 'insights',
    category: 'ADRYD SERVICE CAPABILITY (PLANNED)',
    title: 'ADRYD Insights',
    tagline: 'Intelligent Corridor Analytics & Exposure Telemetry',
    image: '/images/campaigns/service-adryd-insights.jpg',
    imageAlt: 'ADRYD Insights - Planned Exposure Telemetry Dashboard',
    badges: [
      { label: 'Telemetry', value: 'GPS Corridor Mapping', isPrimary: true },
      { label: 'Metrics', value: 'Estimated Impressions & QR Logs' },
    ],
    highlight: 'Data-driven visibility into your outdoor campaign’s active street performance.',
    description:
      'Gain deep visibility into your outdoor campaign’s operational performance. Planned intelligence systems provide corridor saturation logs, active street hours verification, and engagement scan heatmaps.',
    featuresTitle: 'Included in Insights Platform',
    features: [
      'Corridor transit and dwell time logging',
      'Daily active fleet operational hour verification',
      'QR scan engagement timestamps & location tracking',
      'Comprehensive post-campaign impact executive summary',
      'Estimated eye-level audience impression calculations',
      'Corridor comparison analytics for future campaign planning',
    ],
    ctaText: 'Enquire for Insights Pilot',
    ctaHref: '/book-campaign?service=insights',
    note: 'Currently in scheduled pilot testing • Custom enterprise logs',
  },
};

// ============================================================================
// 2. PRODUCT CATEGORIES & INDUSTRIES (6 SECTORS)
// ============================================================================
export const CATEGORY_CARD_DETAILS: Record<string, DetailCardItem> = {
  fashion: {
    id: 'fashion',
    category: 'INDUSTRY ACTIVATION BLUEPRINT',
    title: 'Fashion & Apparel',
    tagline: 'Designer Sarees, Casuals & Festive Drops',
    image: '/images/posters/ikat-vastra.jpg',
    imageAlt: 'Fashion & Apparel - Handloom Sarees and Designer Wear',
    badges: [
      { label: 'Display Format', value: 'Fabric Swatches & Busts', isPrimary: true },
      { label: 'Key Catchments', value: 'Jubilee Hills, Madhapur, Malls' },
    ],
    highlight: 'Showcase fabric drape, weave texture, and embroidery details directly in fashion corridors.',
    description:
      'Fashion requires touch, texture, and visual movement. ADRYD mobile displays showcase fabric textures, intricate zari embroidery, and rich weaves right in front of premium shopping avenues, boutique markets, and high-footfall cafes.',
    featuresTitle: 'Category Activation Features',
    features: [
      'Weather-sealed, dust-free illuminated display casing',
      'Curated fabric swatches & tactile touch booklets',
      'Instant scan-to-cart QR code for festive collections',
      'High-recall convoy presence during wedding & shopping seasons',
      'Direct navigation to boutique flagship showrooms',
      'Eco-friendly sustainable brand positioning on electric scooters',
    ],
    ctaText: 'Plan Fashion Campaign',
    ctaHref: '/book-campaign?category=fashion',
    note: 'Tailored for boutique handlooms, pret lines & D2C apparel brands',
  },
  food: {
    id: 'food',
    category: 'INDUSTRY ACTIVATION BLUEPRINT',
    title: 'Food & Bakery',
    tagline: 'Artisanal Sweets, Snacks, Beverages & Treats',
    image: '/images/posters/category-food-bakery.jpg',
    imageAlt: 'Food & Bakery - Artisanal Sweets and Bakery Treats',
    badges: [
      { label: 'Storage Unit', value: 'Food-Grade Insulated Boxes', isPrimary: true },
      { label: 'Timing', value: 'Lunch & Evening Peak Shifts' },
    ],
    highlight: 'Deploy temperature-protected sample units with instant QR ordering for gourmet foods.',
    description:
      'Smell and taste drive appetite. Deploy food-grade temperature-insulated sampling compartments with hygienic rider kits to let pedestrians taste your chocolates, cookies, baked snacks, and packaged gourmet foods.',
    featuresTitle: 'Category Activation Features',
    features: [
      'Sanitized, food-grade sealed sample distribution containers',
      'Hygiene-certified riders with branded apparel & protective gloves',
      'Instant QR ordering for same-day delivery or takeaway orders',
      'Schedules timed for office lunch hours & evening transit',
      'Corporate tech park & university campus sampling activations',
      'Pre-order capture for party boxes, gifting & holiday hampers',
    ],
    ctaText: 'Plan Food & Beverage Campaign',
    ctaHref: '/book-campaign?category=food',
    note: 'Compliant with food safety protocols • Fast neighborhood replenishment',
  },
  beauty: {
    id: 'beauty',
    category: 'INDUSTRY ACTIVATION BLUEPRINT',
    title: 'Beauty & Wellness',
    tagline: 'Skincare, Fragrances, Haircare & Cosmetics',
    image: '/images/posters/category-beauty-wellness.jpg',
    imageAlt: 'Beauty & Wellness - Skincare and Organic Cosmetics',
    badges: [
      { label: 'Engagement', value: 'Tester Kits & Scent Strips', isPrimary: true },
      { label: 'Conversion', value: 'Exclusive Mobile Vouchers' },
    ],
    highlight: 'Allow potential buyers to spray fragrances, test serums, and examine formulations at eye level.',
    description:
      'Beauty products demand personal trial. Enable potential customers to smell premium fragrances, try organic skincare formulations, and discover your cosmetic shades under pristine LED lighting in prime residential and lifestyle clusters.',
    featuresTitle: 'Category Activation Features',
    features: [
      'Illuminated vanity-style product showcase enclosure',
      'Sanitary disposable fragrance strips & sample sachets',
      'Pre-order capture for limited seasonal skincare bundles',
      'Corridor presence near high-end salons, gyms, and lifestyle hubs',
      'Influencer video shoot integration capturing live reactions',
      'Direct QR codes for trial discount offers and subscription plans',
    ],
    ctaText: 'Plan Beauty & Wellness Campaign',
    ctaHref: '/book-campaign?category=beauty',
    note: 'Hygienic tester kits • High aesthetic visual display',
  },
  lifestyle: {
    id: 'lifestyle',
    category: 'INDUSTRY ACTIVATION BLUEPRINT',
    title: 'Lifestyle & Living',
    tagline: 'Home Accents, Décor, Aromatics & Wearables',
    image: '/images/posters/category-lifestyle-living.jpg',
    imageAlt: 'Lifestyle & Living - Home Décor and Artisan Accents',
    badges: [
      { label: 'Display Shelving', value: 'Multi-Tier Showcase Unit', isPrimary: true },
      { label: 'Audience Focus', value: 'Modern Urban Homeowners' },
    ],
    highlight: 'Showcase curated design accents, ceramic art, and home fragrances where people live and shop.',
    description:
      'Home décor and lifestyle items shine when placed in front of urban apartments and lifestyle centers. Display candle scents, artisanal pottery, and home accents at eye level where consumers can appreciate the craftsmanship.',
    featuresTitle: 'Category Activation Features',
    features: [
      'Multi-tier display shelving inside illuminated glass enclosures',
      'Aromatic and sensory product sampling integration',
      'Weekend apartment society & flea market targeted corridors',
      'QR catalogue browsing with doorstep delivery options',
      'Custom brand story flyers highlighting craftsmanship',
      'Interactive rider presentations explaining material origin',
    ],
    ctaText: 'Plan Lifestyle Campaign',
    ctaHref: '/book-campaign?category=lifestyle',
    note: 'Ideal for independent makers, ceramic studios & boutique lifestyle brands',
  },
  technology: {
    id: 'technology',
    category: 'INDUSTRY ACTIVATION BLUEPRINT',
    title: 'Technology & Gadgets',
    tagline: 'Smart Wearables, Audio Gear, Accessories & Apps',
    image: '/images/posters/category-technology.jpg',
    imageAlt: 'Technology & Hardware - Smart Gadgets and Accessories',
    badges: [
      { label: 'Target Corridor', value: 'Cyberabad IT Hubs & Colleges', isPrimary: true },
      { label: 'Format', value: 'Hands-On Tech Demo Units' },
    ],
    highlight: 'Put new smartwatches, headphones, chargers, and mobile apps directly into tech workers’ hands.',
    description:
      'Demo new headphones, smartwatches, power banks, and smartphone accessories right outside Hyderabad’s largest tech parks and engineering campuses during peak commute hours.',
    featuresTitle: 'Category Activation Features',
    features: [
      'Futuristic electric blue back-lit display module',
      'Interactive audio demo listening stations and hands-on checks',
      'App download QR codes with instant sign-up bonuses',
      'Saturation schedules for HITEC City, Gachibowli, and Financial District',
      'Synchronized convoys delivering massive modern tech aesthetic',
      'Direct website attribution tracking for digital hardware sales',
    ],
    ctaText: 'Plan Tech Activation',
    ctaHref: '/book-campaign?category=technology',
    note: 'Maximum resonance across IT professionals & tech early adopters',
  },
  local: {
    id: 'local',
    category: 'INDUSTRY ACTIVATION BLUEPRINT',
    title: 'Local Brands & Retailers',
    tagline: 'Cafés, Boutiques, Gyms & Neighborhood Hubs',
    image: '/images/posters/category-local-brands.jpg',
    imageAlt: 'Local Brands - Cafés, Boutiques, and Neighborhood Stores',
    badges: [
      { label: 'Coverage Radius', value: '3–5 km Neighborhood Circle', isPrimary: true },
      { label: 'Goal', value: 'Immediate Walk-In Footfall' },
    ],
    highlight: 'Generate immediate neighborhood buzz for new openings, weekend specials, and local menus.',
    description:
      'Opening a new cafe, boutique, or fitness studio? ADRYD circles your immediate 3–5 km neighborhood with high-energy presence, flyer distribution, and voucher cards to flood your doors with foot traffic.',
    featuresTitle: 'Category Activation Features',
    features: [
      '360-degree local neighborhood catchment saturation',
      'Exclusive first-time customer voucher card distribution',
      'Grand opening convoy blitzes timed to launch weekends',
      'Directions & Google Maps QR code navigation for quick visits',
      'Cost-effective starter packages designed for SMB budgets',
      'Daily morning and evening arterial street presence',
    ],
    ctaText: 'Plan Local Brand Campaign',
    ctaHref: '/book-campaign?category=local',
    note: 'Perfect for new storefront openings, pop-up events & local promotions',
  },
};

// ============================================================================
// 3. SOLUTIONS / CAMPAIGN FORMATS (4 MODELS)
// ============================================================================
export const SOLUTIONS_CARD_DETAILS: Record<string, DetailCardItem> = {
  'single-rider': {
    id: 'single-rider',
    category: 'ADRYD CAMPAIGN FORMAT',
    title: 'Single Rider Campaign',
    tagline: 'Hyper-Local Street Visibility for Neighborhood Brands',
    image: '/images/adryd-rider-partner.jpg',
    imageAlt: 'Single Rider Campaign - Dedicated EV Brand Ambassador',
    badges: [
      { label: 'Fleet Setup', value: '1 Electric Scooter & Rider', isPrimary: true },
      { label: 'Duration Scope', value: '3 to 30 Days' },
    ],
    highlight: 'Focused single-neighborhood promotional campaigns delivering surgical street visibility.',
    description:
      'Deploy a dedicated branded electric scooter covering targeted local retail corridors and residential catchments. Ideal for local business pilots, product sampling runs, and single-store promotions.',
    featuresTitle: 'Format Scope & Inclusions',
    features: [
      '1 Custom branded electric scooter with side & rear panels',
      'Dedicated single corridor route schedule',
      'Uniformed brand ambassador rider with flyer handouts',
      'Daily activity & operational milestone log',
      'Ideal for local cafe launches & neighborhood pilot tests',
      'Budget-conscious activation with zero fuel surcharges',
    ],
    ctaText: 'Enquire Single Rider Format',
    ctaHref: '/book-campaign?format=single-rider',
    secondaryCtaText: 'View Format Details Page',
    secondaryCtaHref: '/solutions/single-rider',
    note: 'Entry-level agility • Flexible corridor deployment',
  },
  'dual-rider': {
    id: 'dual-rider',
    category: 'ADRYD CAMPAIGN FORMAT',
    title: 'Dual Rider Campaign',
    tagline: 'Synchronized Twin-Rider High-Recall Deployments',
    image: '/images/posters/crochet-nest.jpg',
    imageAlt: 'Dual Rider Campaign - Synchronized Twin EVs',
    badges: [
      { label: 'Fleet Setup', value: '2 Electric Scooters & Riders', isPrimary: true },
      { label: 'Corridor Routing', value: 'Tandem Corridor Sweeps' },
    ],
    highlight: 'Two branded electric two-wheelers moving in tandem across twin commercial zones.',
    description:
      'Double the street frequency and visibility. Twin riders travel together along designated corridors, creating an undeniable convoy effect that commands attention from both pedestrians and vehicle drivers.',
    featuresTitle: 'Format Scope & Inclusions',
    features: [
      '2 Custom branded electric scooters moving in synchronized formation',
      'Twin corridor coverage with dual-cluster saturation',
      '2 Uniformed riders with sampling and flyer capabilities',
      'Illuminated display back-boxes on both vehicles',
      'Significantly higher recall and brand perception',
      'Real-time photo verification and daily transit logs',
    ],
    ctaText: 'Enquire Dual Rider Format',
    ctaHref: '/book-campaign?format=dual-rider',
    secondaryCtaText: 'View Format Details Page',
    secondaryCtaHref: '/solutions/dual-rider',
    note: 'Multiplied street frequency • Ideal for brand launches',
  },
  'fleet-advertising': {
    id: 'fleet-advertising',
    category: 'ADRYD CAMPAIGN FORMAT',
    title: 'Multi-Rider Fleet Advertising',
    tagline: 'Citywide Synchronized Blitz for Enterprises & Retailers',
    image: '/images/adryd-fleet-hyderabad.jpg',
    imageAlt: 'Multi-Rider Fleet Advertising - Coordinated EV Convoys',
    badges: [
      { label: 'Fleet Size', value: '4 to 10+ Branded EVs', isPrimary: true },
      { label: 'Management', value: 'Dedicated Operations Lead' },
    ],
    highlight: 'Blanket Hyderabad’s premier commercial corridors with synchronized multi-rider convoys.',
    description:
      'Deploy a coordinated fleet of 4 to 10+ branded vehicles blanketing Hyderabad’s prime tech hubs, high streets, and entertainment zones. Creates citywide talking points and high-energy brand dominance.',
    featuresTitle: 'Format Scope & Inclusions',
    features: [
      'Coordinated multi-vehicle synchronized convoys',
      'Multi-corridor simultaneous coverage across Hyderabad',
      'Dedicated operations captain & real-time route supervision',
      'Full media, photo, and 4K reel social coverage',
      'Integrated live showcase, flyer distribution, and QR commerce',
      'Custom post-campaign executive analytics reporting',
    ],
    ctaText: 'Enquire Fleet Advertising',
    ctaHref: '/book-campaign?format=fleet-advertising',
    secondaryCtaText: 'View Format Details Page',
    secondaryCtaHref: '/solutions/fleet-advertising',
    note: 'Enterprise tier • Comprehensive route management',
  },
  'location-targeting': {
    id: 'location-targeting',
    category: 'ADRYD CAMPAIGN FORMAT',
    title: 'Location & Corridor Targeting',
    tagline: 'Surgical Geographic Targeting by Prime Corridors',
    image: '/images/campaigns/package-city-activation.jpg',
    imageAlt: 'Location & Corridor Targeting - Surgical Urban Routes',
    badges: [
      { label: 'Corridor Zones', value: 'IT, Retail & Metro Hubs', isPrimary: true },
      { label: 'Mapping', value: 'PIN-Code Cluster Precision' },
    ],
    highlight: 'Concentrate marketing budget directly onto the highest-value streets in Hyderabad.',
    description:
      'Focus your campaign on surgical commercial zones: HITEC City, Gachibowli, Madhapur, Jubilee Hills, Banjara Hills, and Kukatpally. Match your audience demographics with precise arterial road schedules.',
    featuresTitle: 'Format Scope & Inclusions',
    features: [
      'Commercial zone selection matched to brand target profile',
      'PIN-code cluster mapping with maximum footfall calibration',
      'Arterial road timing synced with morning & evening rush hours',
      'Event, exhibition, and shopping festival targeted schedules',
      'Metro station drop-off & transit interchange saturation',
      'Comparative corridor performance intelligence',
    ],
    ctaText: 'Enquire Location Targeting',
    ctaHref: '/book-campaign?format=location-targeting',
    secondaryCtaText: 'View Format Details Page',
    secondaryCtaHref: '/solutions/location-targeting',
    note: 'Geographic optimization • Eliminates wasted outdoor spend',
  },
};

// ============================================================================
// 4. HOW IT WORKS STEPS (3 PHASES)
// ============================================================================
export const HOW_IT_WORKS_CARD_DETAILS: Record<string, DetailCardItem> = {
  plan: {
    id: 'plan',
    category: 'CAMPAIGN LIFECYCLE • STAGE 01',
    title: 'Phase 01: PLAN',
    tagline: 'Choose Campaign Goal & Corridor Strategy',
    image: '/images/adryd-mobile-showcase.jpg',
    imageAlt: 'Phase 01 PLAN - Campaign Corridor Strategy',
    badges: [
      { label: 'Turnaround', value: '24–48 Hours Planning', isPrimary: true },
      { label: 'Output', value: 'Custom Route Blueprint' },
    ],
    highlight: 'Define target commercial corridors, vehicle numbers, duration, and product showcase needs.',
    description:
      'Every successful campaign starts with clarity. Collaborate with our campaign planning team to select targeted corridors, fleet sizes, branding specifications, and product sampling requirements tailored to your budget.',
    featuresTitle: 'Stage 01 Milestones',
    features: [
      'Corridor footfall analysis and demographic alignment',
      'Package selection: 1 to 10+ electric vehicles & duration scope',
      'Creative asset review and vehicle livery mockup generation',
      'Sampling inventory & showcase specification finalization',
      'Dedicated operations lead assignment and calendar scheduling',
    ],
    ctaText: 'Start Your Campaign Plan',
    ctaHref: '/book-campaign',
    note: 'Fast 24h brief response • Complimentary corridor mapping',
  },
  move: {
    id: 'move',
    category: 'CAMPAIGN LIFECYCLE • STAGE 02',
    title: 'Phase 02: MOVE',
    tagline: 'Activate Network & Deploy Moving Convoys',
    image: '/images/adryd-fleet-hyderabad.jpg',
    imageAlt: 'Phase 02 MOVE - Active Electric Fleet in Transit',
    badges: [
      { label: 'Mobility Tech', value: 'Pure EV Electric Fleet', isPrimary: true },
      { label: 'Schedules', value: 'Peak Commute Saturation' },
    ],
    highlight: 'Tandem electric fleets take to premier high-footfall street corridors with eye-level product visibility.',
    description:
      'Your campaign comes to life on the streets. Trained brand ambassador riders navigate prime commercial corridors in coordinated formations, creating unmissable eye-level awareness throughout peak transit windows.',
    featuresTitle: 'Stage 02 Milestones',
    features: [
      'Automotive-grade vinyl installation and quality inspection',
      'Rider brand briefing and product knowledge alignment',
      'Synchronized morning and evening corridor deployments',
      'Active GPS telemetry and daily route attendance logs',
      'Professional convoy pacing designed for maximum pedestrian legibility',
    ],
    ctaText: 'Explore Active Fleet Routes',
    ctaHref: '/campaign-plans',
    note: 'Zero tailpipe emissions • Professional rider ambassadors',
  },
  connect: {
    id: 'connect',
    category: 'CAMPAIGN LIFECYCLE • STAGE 03',
    title: 'Phase 03: CONNECT',
    tagline: 'Engage Audiences & Capture Conversions',
    image: '/images/campaigns/service-adryd-showcase.jpg',
    imageAlt: 'Phase 03 CONNECT - Direct Consumer Engagement & Sampling',
    badges: [
      { label: 'Direct Conversion', value: 'QR Mobile Commerce', isPrimary: true },
      { label: 'Reporting', value: 'Visual Verification Summary' },
    ],
    highlight: 'Illuminated live showcases, scan-and-buy QR commerce, and direct neighborhood sampling.',
    description:
      'Transform street visibility into tangible commercial results. Potential customers interact with illuminated showcase boxes, scan QR codes for direct purchases, receive sample packs, and share viral street moments.',
    featuresTitle: 'Stage 03 Milestones',
    features: [
      'Illuminated display compartments showcasing actual merchandise',
      'Hygienic sampling and tester strip distribution at high-traffic hubs',
      'Instant mobile QR checkout connecting street interest with revenue',
      'Street reaction video capture for digital reel amplification',
      'Comprehensive post-campaign photo proofs and analytics delivery',
    ],
    ctaText: 'Book an Engagement Campaign',
    ctaHref: '/book-campaign',
    note: 'Measurable ROI • Real consumer conversations',
  },
};

// Aliases for numeric steps and stakeholder journeys
HOW_IT_WORKS_CARD_DETAILS['01'] = HOW_IT_WORKS_CARD_DETAILS.plan;
HOW_IT_WORKS_CARD_DETAILS['02'] = HOW_IT_WORKS_CARD_DETAILS.move;
HOW_IT_WORKS_CARD_DETAILS['03'] = HOW_IT_WORKS_CARD_DETAILS.connect;
HOW_IT_WORKS_CARD_DETAILS['brand_owner'] = {
  id: 'brand_owner',
  category: 'ECOSYSTEM JOURNEY',
  title: 'Brand Owner Journey',
  tagline: 'From Briefing to Eye-Level Street Presence',
  image: '/images/adryd-fleet-hyderabad.jpg',
  imageAlt: 'Brand Owner Campaign Deployment',
  badges: [
    { label: 'Role', value: 'Brands, Retailers & Makers', isPrimary: true },
    { label: 'Tracking', value: 'Live Route Logs & Reports' },
  ],
  highlight: 'Engage shoppers directly in their daily environments with maximum visual impact.',
  description:
    'From initial briefing to active street deployment, track your mobile presence and engage shoppers directly in their daily environments. Experience seamless campaign setup, corridor selection, and verified visual delivery.',
  featuresTitle: 'Brand Journey Highlights',
  features: [
    'Custom corridor and demographic matching in Hyderabad',
    'Full vehicle branding production & showcase preparation',
    'Dedicated operations manager overseeing fleet runs',
    'Real-time photo verification and daily deployment reports',
    'Direct QR conversion data and consumer engagement summaries',
  ],
  ctaText: 'Book a Brand Campaign',
  ctaHref: '/book-campaign',
  note: 'Dedicated operations support • Verified corridor runs',
};
HOW_IT_WORKS_CARD_DETAILS['customer'] = {
  id: 'customer',
  category: 'ECOSYSTEM JOURNEY',
  title: 'Customer Experience',
  tagline: 'Discover, Experience & Purchase in Motion',
  image: '/images/campaigns/service-adryd-showcase.jpg',
  imageAlt: 'Customer Encountering ADRYD Mobile Showcase',
  badges: [
    { label: 'Audience', value: 'Pedestrians & Commuters', isPrimary: true },
    { label: 'Interaction', value: 'QR Mobile Ordering' },
  ],
  highlight: 'Encounter eye-level brand vehicles in prime commercial hubs and order on the spot.',
  description:
    'Pedestrians and shoppers meet products where they are: enjoying coffee, commuting, or strolling through shopping districts. Clear QR tags and friendly brand ambassadors make exploring and buying effortless.',
  featuresTitle: 'Audience Touchpoints',
  features: [
    'Illuminated display cases for tactile product examination',
    'Instant mobile scanning with zero app download needed',
    'Curated sampling trays and tester experiences',
    'Special street promotional discounts and pre-order drops',
    'Engaging street conversations with uniformed brand ambassadors',
  ],
  ctaText: 'Explore Service Verticals',
  ctaHref: '/services',
  note: 'Frictionless street engagement • Safe & eco-friendly',
};
HOW_IT_WORKS_CARD_DETAILS['rider_partner'] = {
  id: 'rider_partner',
  category: 'ECOSYSTEM JOURNEY',
  title: 'Rider Partner Experience',
  tagline: 'Ride, Promote, Earn & Advance Professionally',
  image: '/images/adryd-rider-partner.jpg',
  imageAlt: 'ADRYD Rider Partner Community',
  badges: [
    { label: 'Partner Tier', value: 'EV Riders & Fleet Partners', isPrimary: true },
    { label: 'Earnings', value: 'Direct Weekly Payouts' },
  ],
  highlight: 'Monetize daily rides on approved electric scooters with zero commissions deducted.',
  description:
    'Join a respectful, tech-enabled mobility community. Ride clean electric two-wheelers, wear high-grade safety uniforms, receive professional training, and build sustainable career pathways into marketing and operations.',
  featuresTitle: 'Partner Highlights',
  features: [
    'Scheduled shifts with predictable earnings and zero commissions',
    'Comprehensive safety kit, apparel, and helmet provided',
    'Navigation guidance and route captain support on every shift',
    'Access to Riderpreneur career levels and incentive programs',
    'Option to join with own EV or via partner-leased vehicles',
  ],
  ctaText: 'Join as a Rider Partner',
  ctaHref: '/become-a-rider',
  secondaryCtaText: 'Riderpreneur Program',
  secondaryCtaHref: '/riderpreneur',
  note: 'Zero commission deductions • Weekly bank payouts',
};

// ============================================================================
// 5. RIDER PARTNERSHIP OPTIONS (3 PATHWAYS)
// ============================================================================
export const RIDER_PARTNER_CARD_DETAILS: Record<string, DetailCardItem> = {
  own_ev: {
    id: 'own_ev',
    category: 'ADRYD MOBILITY NETWORK',
    title: 'Rider With Own EV',
    tagline: 'Monetize Your Electric Scooter on Scheduled Routes',
    image: '/images/adryd-rider-partner.jpg',
    imageAlt: 'Rider Partner With Own Electric Scooter',
    badges: [
      { label: 'Eligibility', value: 'Own Electric Two-Wheeler', isPrimary: true },
      { label: 'Payout Schedule', value: 'Weekly Direct Bank Transfer' },
    ],
    highlight: 'Earn competitive payouts riding scheduled commercial showcase corridors in Hyderabad.',
    description:
      'Have an electric scooter? Join ADRYD as a registered mobility partner. Enjoy scheduled morning or evening shifts, premium brand apparel, and predictable weekly earnings while promoting top local and national brands.',
    featuresTitle: 'Partner Benefits & Inclusions',
    features: [
      'Guaranteed scheduled route assignments during high-recall hours',
      'Free premium rider apparel, official jacket & branded helmet',
      'Vehicle branding compensation + performance bonuses',
      'Transparent weekly direct deposit payouts',
      'Flexible shift schedules compatible with delivery work or college',
      'Priority upgrade pathway to Senior Route Captain & Team Lead',
    ],
    ctaText: 'Register With My EV',
    ctaHref: '/become-a-rider?type=own_ev_rider',
    secondaryCtaText: 'Explore Riderpreneur Program',
    secondaryCtaHref: '/riderpreneur',
    note: 'Valid driving license & EV registration required',
  },
  without_ev: {
    id: 'without_ev',
    category: 'ADRYD MOBILITY NETWORK',
    title: 'Rider Without EV',
    tagline: 'Partner-Arranged Electric Vehicles & Complete Gear',
    image: '/images/adryd-riderpreneur-kit.jpg',
    imageAlt: 'Complete Rider Kit - Uniforms, Gear, and EV Access',
    badges: [
      { label: 'Vehicle Access', value: 'Partner Fleet EV Provided', isPrimary: true },
      { label: 'Support', value: 'Battery Swapping & Maintenance' },
    ],
    highlight: 'Access top electric scooters with battery swapping and professional training.',
    description:
      'Want to ride but don’t own an electric scooter? ADRYD connects motivated riders with partner fleet arrangements, battery swapping infrastructure, and comprehensive on-road training so you can start earning immediately.',
    featuresTitle: 'Partner Benefits & Inclusions',
    features: [
      'Access to fully serviced commercial electric two-wheelers',
      'Integrated battery swapping network access across Hyderabad',
      'Complete safety kit: branded helmet, jacket & cargo bag',
      'Hands-on customer interaction and road safety training',
      'Performance incentives and affiliate QR sales commissions',
      'Career progression through 10 Riderpreneur advancement levels',
    ],
    ctaText: 'Apply as a Rider',
    ctaHref: '/become-a-rider?type=without_ev_rider',
    secondaryCtaText: 'Explore Riderpreneur Program',
    secondaryCtaHref: '/riderpreneur',
    note: 'Valid two-wheeler driving license required',
  },
  fleet_partner: {
    id: 'fleet_partner',
    category: 'ADRYD MOBILITY NETWORK',
    title: 'Commercial Fleet Partner',
    tagline: 'Monetize Fleet Capacity During Scheduled Campaign Windows',
    image: '/images/adryd-fleet-hyderabad.jpg',
    imageAlt: 'Commercial Fleet Partners - Multi-Vehicle Mobilization',
    badges: [
      { label: 'Scale', value: '5 to 50+ Two-Wheeler Fleets', isPrimary: true },
      { label: 'Contract Type', value: 'Guaranteed Monthly Retention' },
    ],
    highlight: 'Earn structured retainer revenue by deploying commercial vehicles on brand routes.',
    description:
      'Fleet owners, logistics operators, and rental agencies: monetize idle two-wheeler capacity. Deploy your fleet on structured ADRYD promotional campaigns with guaranteed block hours and consistent monthly contracts.',
    featuresTitle: 'Fleet Partner Benefits',
    features: [
      'Structured multi-vehicle campaign contracts with guaranteed hours',
      'Professional vinyl wrapping installation and removal support',
      'Centralized dispatch coordination and operations monitoring',
      'Consistent monthly billing and prompt institutional settlements',
      'Maximize utilization outside peak delivery hours',
      'Long-term multi-month enterprise campaign opportunities',
    ],
    ctaText: 'Submit Fleet Enquiry',
    ctaHref: '/become-a-rider?type=fleet_partner',
    note: 'Custom corporate terms • Minimum fleet size 5 vehicles',
  },
};

// Aliases for rider partnership query params
RIDER_PARTNER_CARD_DETAILS['own_ev_rider'] = RIDER_PARTNER_CARD_DETAILS.own_ev;
RIDER_PARTNER_CARD_DETAILS['without_ev_rider'] = RIDER_PARTNER_CARD_DETAILS.without_ev;

// ============================================================================
// 6. CREATIVE SERVICES (4 STUDIO PACKAGES)
// ============================================================================
export const CREATIVE_CARD_DETAILS: Record<string, DetailCardItem> = {
  reels: {
    id: 'reels',
    category: 'ADRYD VIRAL & STUDIO',
    title: 'Street Interaction Reels',
    tagline: 'Short-Form Vertical Video Designed for Instagram & Shorts',
    image: '/images/campaigns/service-adryd-viral.jpg',
    imageAlt: 'Street Interaction Reels - Authentic Consumer Reactions',
    badges: [
      { label: 'Format', value: '9:16 Vertical HD Video', isPrimary: true },
      { label: 'Output', value: '3 to 5 Polished Reels / Day' },
    ],
    highlight: 'Capture authentic pedestrian reactions, unboxings, and live product trials on camera.',
    description:
      'Bridge physical street curiosity with viral digital viewership. Our roving video crew films genuine consumer reactions, taste tests, unboxings, and sampling moments edited with trending local music and punchy hooks.',
    featuresTitle: 'Creative Inclusions',
    features: [
      'Professional cameraman and mobile audio setup on active routes',
      'Authentic consumer vox-pop interviews and taste/touch trials',
      'Dynamic 9:16 vertical video editing with licensed trending audio',
      'Branded motion graphics, caption subtitles, and logo bugs',
      'Fast 48-hour delivery ready for Instagram Reels and YouTube Shorts',
    ],
    ctaText: 'Enquire for Reels Package',
    ctaHref: '/book-campaign?service=viral',
    note: 'Includes creator release forms • Social media ready',
  },
  wrap: {
    id: 'wrap',
    category: 'ADRYD VIRAL & STUDIO',
    title: 'Vehicle Wrap Design',
    tagline: 'Automotive Livery Engineered for High Distance Legibility',
    image: '/images/campaigns/package-bulk-activation.jpg',
    imageAlt: 'Vehicle Wrap Design - High Contrast Livery Graphics',
    badges: [
      { label: 'Material', value: 'Cast Waterproof Vinyl', isPrimary: true },
      { label: 'Design', value: '3D Template Calibration' },
    ],
    highlight: 'High-contrast automotive livery layouts engineered specifically for moving two-wheelers.',
    description:
      'Designing for moving vehicles requires specialized visual architecture. We design high-contrast, bold typography, and strategic logo placements calibrated for maximum visibility from 50+ meters away in dense city traffic.',
    featuresTitle: 'Creative Inclusions',
    features: [
      'Precision 3D vehicle template layout & proofing',
      'High-contrast color calibration matching brand identity',
      'Integrated dynamic QR code placement for effortless scanning',
      'Side pod, front cowl, and rear illuminated box graphic integration',
      'Premium automotive-grade print supervision & installation QC',
    ],
    ctaText: 'Enquire for Wrap Design',
    ctaHref: '/book-campaign?service=creative',
    note: 'Weatherproof UV laminate • Clean residue-free removal',
  },
  cinematics: {
    id: 'cinematics',
    category: 'ADRYD VIRAL & STUDIO',
    title: 'Campaign Cinematics & B-Roll',
    tagline: 'High-Resolution Drone Footage & Moving Convoy Tracking Shots',
    image: '/images/campaigns/package-city-activation.jpg',
    imageAlt: 'Campaign Cinematics - High-Res Convoy B-Roll',
    badges: [
      { label: 'Resolution', value: '4K Ultra-HD 60fps', isPrimary: true },
      { label: 'Angles', value: 'Drone Aerials & Tracking Gimbal' },
    ],
    highlight: 'Cinematic convoy footage capturing your fleet moving through Hyderabad landmarks.',
    description:
      'Produce breathtaking commercial-grade showcase videos of your mobile fleet. We capture sweeping drone aerials and low-angle gimbal tracking shots through Charminar, Durgam Cheruvu cable bridge, and Financial District.',
    featuresTitle: 'Creative Inclusions',
    features: [
      'Licensed 4K drone cinematography across iconic landmarks',
      'Vehicle-to-vehicle gimbal tracking shots and convoy sweeps',
      'Full master B-roll library provided for brand PR & investor decks',
      'Color graded cinematic film aesthetic matching brand tones',
      'Full commercial usage rights without recurring royalties',
    ],
    ctaText: 'Enquire for Cinematics Package',
    ctaHref: '/book-campaign?service=creative',
    note: 'High-production quality • Perfect for investor & launch decks',
  },
  social: {
    id: 'social',
    category: 'ADRYD VIRAL & STUDIO',
    title: 'Social Amplification Packages',
    tagline: 'Packaged Multi-Channel Content Assets & Creator Collabs',
    image: '/images/campaigns/retainer-commercial-dominance.jpg',
    imageAlt: 'Social Amplification - Cross-Platform Video Assets',
    badges: [
      { label: 'Channels', value: 'Instagram, YouTube, LinkedIn', isPrimary: true },
      { label: 'Collabs', value: 'Local Hyderabad Micro-Creators' },
    ],
    highlight: 'Comprehensive content bundles engineered to amplify your physical outdoor campaign online.',
    description:
      'Maximize the digital impact of your outdoor investment. We bundle vertical reels, still photography, creator collaborations, and PR imagery into a cohesive digital campaign rollout for maximum social reach.',
    featuresTitle: 'Creative Inclusions',
    features: [
      'Multi-format asset suite: 9:16 reels, 1:1 square stills, 16:9 landscape',
      'Collaborations with local Hyderabad lifestyle and foodie creators',
      'Pre-scripted narrative hooks highlighting product benefits',
      'Optimized hashtag clusters and geo-targeted caption copy',
      'Comprehensive digital reach attribution report post-campaign',
    ],
    ctaText: 'Enquire for Amplification Bundle',
    ctaHref: '/book-campaign?service=creative',
    note: 'Complete social package • Turnkey creative execution',
  },
};
