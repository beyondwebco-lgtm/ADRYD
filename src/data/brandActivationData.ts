import {
  Sparkles,
  Users,
  Eye,
  QrCode,
  ShoppingBag,
  TrendingUp,
  Share2,
  MapPin,
  Truck,
  Tv,
  Compass,
  Briefcase,
  Layers,
  Award,
  Calendar,
  Building,
  ShieldCheck,
  Check,
  Zap,
  Globe,
  Radio,
  FileText,
  DollarSign,
  BarChart3,
  Percent,
} from 'lucide-react';

// =========================================================================
// 1. TWELVE MAJOR PROMOTION OPPORTUNITIES
// =========================================================================
export interface PromotionOpportunity {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDesc: string;
  iconName: string;
  badge: string;
  color: string;
  details: {
    whatItDoes: string;
    howItWorks: string[];
    entrepreneurBenefits: string[];
    useCases: string[];
    recommendedCampaign: string;
  };
}

export const PROMOTION_OPPORTUNITIES: PromotionOpportunity[] = [
  {
    id: 'brand-visibility',
    number: '01',
    title: 'Brand Visibility',
    tagline: 'Moving High-Impact Street Presence',
    shortDesc: 'Electric riders and promoters wearing your custom branded apparel and operating illuminated display carriers across high-density urban corridors.',
    iconName: 'Eye',
    badge: 'Brand Awareness',
    color: '#0A9BE0',
    details: {
      whatItDoes: 'Transforms high-frequency transit corridors into an active, moving canvas for your brand identity, product graphics, and key messages.',
      howItWorks: [
        'Fleet of electric two-wheelers fitted with aerodynamic backlit brand panels.',
        'Riders wearing tailored brand jackets, helmets, and vehicle wraps.',
        'Precision route pacing through high-density IT parks, commercial high streets, and student avenues.',
      ],
      entrepreneurBenefits: [
        'Eliminates fixed hoarding blind spots with dynamic, eye-level street presence.',
        'Guarantees 10,000+ daily visual impressions per vehicle cluster.',
        'Establishes immediate neighborhood and commercial corridor brand recognition.',
      ],
      useCases: ['New retail store openings', 'Fashion collection launches', 'Seasonal product promotions', 'Brand awareness blitzes'],
      recommendedCampaign: '3-Day or 7-Day Growth Plan',
    },
  },
  {
    id: 'human-advertising',
    number: '02',
    title: 'Human Advertising',
    tagline: 'Trained Brand Ambassadors',
    shortDesc: 'Articulate, professional promoters who wear your products, explain your value proposition, and directly interact with prospective customers.',
    iconName: 'Users',
    badge: 'Active Engagement',
    color: '#B4F000',
    details: {
      whatItDoes: 'Replaces passive billboards with real, personable human ambassadors who talk to people, answer questions, and demonstrate product features.',
      howItWorks: [
        'Promoters trained on your brand story, fabric/product specifications, and pricing.',
        'Active deployment at pedestrian hubs, tech campus plazas, and shopping plazas.',
        'Direct distribution of samples, lookbooks, and digital catalogue access points.',
      ],
      entrepreneurBenefits: [
        'Human connection creates 4x higher trust than static print advertisements.',
        'Immediate feedback capture on customer pricing perception and preferences.',
        'High conversion from casual curiosity to qualified purchase intent.',
      ],
      useCases: ['D2C apparel brands', 'Specialty lifestyle accessories', 'Artisan collections', 'Consumer electronics'],
      recommendedCampaign: 'Fashion Brand Growth (3-Day)',
    },
  },
  {
    id: 'qr-promotion',
    number: '03',
    title: 'QR-Enabled Promotion',
    tagline: 'Frictionless Street-to-Digital Discovery',
    shortDesc: 'Instant smartphone scanning linking customers to interactive product catalogues, exclusive event discounts, and personalized shopping carts.',
    iconName: 'QrCode',
    badge: 'Digital Attribution',
    color: '#0A9BE0',
    details: {
      whatItDoes: 'Bridges physical street presence with instant mobile commerce through high-contrast QR codes displayed on vehicles, apparel, and lookbooks.',
      howItWorks: [
        'Every vehicle display box and promoter lanyard carries dynamic high-resolution QR codes.',
        'Scanning instantly opens a responsive digital lookbook without app installation.',
        'Customers can bookmark SKUs, view sizing guides, and purchase directly on their mobile device.',
      ],
      entrepreneurBenefits: [
        'Complete scan-to-checkout analytics tracked in real time.',
        'Zero friction for prospective buyers—no memorizing web addresses or searching manually.',
        'Immediate attribution of every lead to the specific campaign corridor and promoter.',
      ],
      useCases: ['Online boutique promotions', 'Limited-edition drops', 'App downloads & mobile ordering', 'Event ticket registrations'],
      recommendedCampaign: 'All Campaign Packages',
    },
  },
  {
    id: 'direct-sales',
    number: '04',
    title: 'Live Direct Sales',
    tagline: 'On-Ground Immediate Transactions',
    shortDesc: 'Equipped mobile promoters facilitate live product demonstrations, handle instantaneous UPI payments, and hand over ready-to-buy inventory.',
    iconName: 'ShoppingBag',
    badge: 'Revenue Generation',
    color: '#B4F000',
    details: {
      whatItDoes: 'Turns promotional corridors into live retail points of sale where customers can see, touch, try, and immediately purchase selected products.',
      howItWorks: [
        'Promoters carry secure mobile inventory boxes or sample swatch packs.',
        'Digital payment processing via dynamic UPI QR codes and soundbox confirmation.',
        'Instant digital receipts sent via WhatsApp or SMS with warranty and returns details.',
      ],
      entrepreneurBenefits: [
        'Immediate cashflow generation during the campaign period to offset marketing spend.',
        'Validates real consumer willingness-to-pay on the ground.',
        'Eliminates delivery delays for high-demand impulse lifestyle items.',
      ],
      useCases: ['Packaged gourmet foods', 'Fashion accessories & eyewear', 'Cosmetics & fragrances', 'Tech gadgets & wearables'],
      recommendedCampaign: '7-Day Market Expansion',
    },
  },
  {
    id: 'pre-orders',
    number: '05',
    title: 'Pre-Orders & Validation',
    tagline: 'Sell Before You Scale',
    shortDesc: 'Demonstrate prototype collections and samples to collect confirmed pre-orders and advance customer deposits before committing to bulk manufacturing.',
    iconName: 'TrendingUp',
    badge: 'Demand Validation',
    color: '#0A9BE0',
    details: {
      whatItDoes: 'Enables fashion designers and makers to test market appetite for new styles, cuts, and colors before committing significant working capital to production.',
      howItWorks: [
        'Promoters showcase exclusive sample garments or lookbooks.',
        'Interested customers place advance pre-orders with a nominal deposit (e.g., ₹300).',
        'Customer orders are aggregated and delivered once production completes.',
      ],
      entrepreneurBenefits: [
        'Zero dead-stock risk—produce only what has already been validated and partially paid for.',
        'Advance customer deposits fund production without high-interest loans.',
        'Provides definitive market data on most popular sizes, colors, and price thresholds.',
      ],
      useCases: ['Emerging fashion labels', 'Handloom & artisanal collections', 'New consumer hardware', 'Seasonal festival catalogues'],
      recommendedCampaign: 'Fashion Brand Growth (3-Day)',
    },
  },
  {
    id: 'social-media',
    number: '06',
    title: 'Social & Viral Media',
    tagline: 'From Streets to Screens',
    shortDesc: 'Professional videographers capture real street engagement, reactions, and promoter styling into viral Instagram Reels, Shorts, and authentic testimonials.',
    iconName: 'Share2',
    badge: 'Content Multiplication',
    color: '#B4F000',
    details: {
      whatItDoes: 'Transforms on-ground physical activations into cinematic short-form video content that extends campaign reach far beyond the physical route.',
      howItWorks: [
        'Dedicated creative crew films promoter styling, street interviews, and customer interactions.',
        'Rapid editing into high-retention 9:16 vertical Reels and YouTube Shorts.',
        'Distributed across brand channels, promoter profiles, and regional creator networks.',
      ],
      entrepreneurBenefits: [
        'Generates 15–30 ready-to-publish social media video assets per campaign.',
        'Authentic user-generated-style content outperforms traditional staged studio ads.',
        'Drives digital retargeting and nationwide social amplification.',
      ],
      useCases: ['Lifestyle brands', 'Gen-Z and millennial fashion', 'Viral product unveilings', 'Influencer co-branding'],
      recommendedCampaign: 'All Fashion Packages',
    },
  },
  {
    id: 'affiliate-marketing',
    number: '07',
    title: 'Affiliate Network',
    tagline: 'Riders as Ongoing Sales Partners',
    shortDesc: 'Promoters receive unique affiliate attribution IDs, continuing to promote your catalogue to personal networks and earning commissions on repeat purchases.',
    iconName: 'Percent',
    badge: 'Long-Term Sales',
    color: '#0A9BE0',
    details: {
      whatItDoes: 'Converts campaign promoters into long-term commissioned sales advocates who keep driving sales long after the physical roadshow concludes.',
      howItWorks: [
        'Every promoter is assigned a permanent, trackable referral link and affiliate discount code.',
        'Customers who discover your brand through a promoter are linked to their affiliate ID for 12 months.',
        'Commissions automatically credited on verified, delivered, non-returned orders.',
      ],
      entrepreneurBenefits: [
        'Expands your sales force without fixed salaried overhead.',
        'Incentivizes promoters to champion your brand across WhatsApp status and personal social feeds.',
        'Predictable, performance-based marketing expense tied strictly to confirmed revenue.',
      ],
      useCases: ['Direct-to-consumer apparel', 'Health & wellness supplements', 'Beauty & skincare', 'Specialty footwear'],
      recommendedCampaign: 'Ongoing Retainer / 7-Day',
    },
  },
  {
    id: 'footfall-campaigns',
    number: '08',
    title: 'Footfall Campaigns',
    tagline: 'Precision Urban Congregation Saturation',
    shortDesc: 'Timed, geo-targeted activations at shopping plazas, business parks, college festivals, and cultural events where your target buyers naturally gather.',
    iconName: 'MapPin',
    badge: 'Hyperlocal Reach',
    color: '#B4F000',
    details: {
      whatItDoes: 'Concentrates multiple promoter teams and illuminated vehicles simultaneously at pre-mapped commercial hotspots during peak pedestrian hours.',
      howItWorks: [
        'Activations scheduled during lunch rushes, evening high-street shopping, and weekend cultural gatherings.',
        'Stationary showcase clusters paired with mobile corridor sweepers.',
        'Permitted access points at tech park entrances, metro stations, and college fests.',
      ],
      entrepreneurBenefits: [
        'Dominates the sensory environment of target demographics at the right time and place.',
        'High conversion velocity from exposure to physical touch to purchase.',
        'Maximizes footfall spillover into nearby physical retail stores or pop-up booths.',
      ],
      useCases: ['College festival sponsorships', 'Office corridor lunch-hour promotions', 'Weekend mall perimeters', 'Exhibition venue approaches'],
      recommendedCampaign: 'Instant (1-Day) or 3-Day Growth',
    },
  },
  {
    id: 'mobile-advertising',
    number: '09',
    title: 'Mobile Advertising',
    tagline: 'Moving Billboards on Electric Fleets',
    shortDesc: 'Custom-engineered aerodynamic fleet display boxes illuminated from within, cruising commercial corridors with unmissable side and rear branding.',
    iconName: 'Truck',
    badge: 'Zero Emissions',
    color: '#0A9BE0',
    details: {
      whatItDoes: 'Replaces stationary billboards with an eye-level, zero-emission mobile media fleet that navigates through city streets where traditional hoardings cannot go.',
      howItWorks: [
        'Custom modular backlit display boxes fitted to the rear of electric delivery scooters.',
        'High-grade translucent vinyl graphics with high-lumen, flicker-free LED illumination.',
        'GPS-tracked corridor routing ensuring verified run times and corridor saturation.',
      ],
      entrepreneurBenefits: [
        'Reaches narrow urban commercial streets and tech park gates where trucks cannot enter.',
        '100% green, eco-friendly electric mobility aligns with conscious consumer values.',
        'Continuous visibility from early morning commutes to vibrant late-night corridor dining.',
      ],
      useCases: ['Brand awareness campaigns', 'Retail outlet directionals', 'Product launch announcements', 'App installation promotions'],
      recommendedCampaign: 'All General & Fashion Packages',
    },
  },
  {
    id: 'led-advertising',
    number: '10',
    title: 'Mobile LED Media',
    tagline: 'Moving High-Definition Digital Showcase',
    shortDesc: 'Electric mobility units equipped with ultra-bright outdoor LED display screens running high-resolution collection videos, dynamic offers, and live QR codes.',
    iconName: 'Tv',
    badge: 'Dynamic Video',
    color: '#B4F000',
    details: {
      whatItDoes: 'Brings high-definition motion video, animated lookbooks, and time-sensitive discount flashes directly to street corners and plazas.',
      howItWorks: [
        'Outdoor-rated P3/P4 LED panels mounted on custom electric showcase utility vehicles.',
        'Remote cloud content management capable of updating promotional videos on the fly.',
        'Integrated audio systems for permitted plaza product presentations.',
      ],
      entrepreneurBenefits: [
        'Dynamic video catches 5x more pedestrian attention than static posters.',
        'Allows morning, afternoon, and evening promotional content to rotate automatically.',
        'Premium high-tech perception elevates brand stature in competitive markets.',
      ],
      useCases: ['Premium fashion collection debuts', 'Motion graphic product demos', 'Event schedule broadcasts', 'Live stream relays'],
      recommendedCampaign: 'Optional Premium Media Add-on',
    },
  },
  {
    id: 'national-campaigns',
    number: '11',
    title: 'National Expansion',
    tagline: 'Multi-City Coordinated Rollouts',
    shortDesc: 'Simultaneous, synchronized brand activations across 10 major Indian commercial hubs managed through a single centralized operational command.',
    iconName: 'Globe',
    badge: 'Pan-India Reach',
    color: '#0A9BE0',
    details: {
      whatItDoes: 'Empowers ambitious regional brands to launch in major metropolitan centers simultaneously with local promoter teams and route coverage.',
      howItWorks: [
        'Phased deployment across Hyderabad, Bengaluru, Chennai, Mumbai, Pune, Delhi NCR, Kolkata, Ahmedabad, Kochi, and Jaipur.',
        'Centralized campaign coordination with standardized brand guidelines and training.',
        'Unified dashboard tracking leads, scans, and revenue across every target city.',
      ],
      entrepreneurBenefits: [
        'Rapid national brand footprint without establishing physical branch offices.',
        'Benchmark customer reception and pricing elasticity across different regions.',
        'Unified reporting and single-point billing for multi-city initiatives.',
      ],
      useCases: ['National brand rollouts', 'D2C pan-India scaling', 'Franchise partner acquisition', 'Investor demo roadshows'],
      recommendedCampaign: 'National Multi-City Custom Plan',
    },
  },
  {
    id: 'travel-collaboration',
    number: '12',
    title: 'Travel & Tourism Collabs',
    tagline: 'Lifestyle Experiences in Motion',
    shortDesc: 'Innovative three-party brand collaborations pairing fashion entrepreneurs, curated tourism organizers, and ADRYD promoters on scenic outings.',
    iconName: 'Compass',
    badge: 'Experiential Commerce',
    color: '#B4F000',
    details: {
      whatItDoes: 'Embeds your clothing, accessories, or food products into real-world weekend trips, adventure tours, and resort getaways where travelers experience the brand in context.',
      howItWorks: [
        'Tourists book curated travel experiences; promoters wear and showcase sponsor apparel throughout the trip.',
        'Scenic destination photo and video shoots generated for brand marketing.',
        'Tourists and travelers scan QR codes to purchase items worn during the trip with exclusive trip discounts.',
      ],
      entrepreneurBenefits: [
        'Showcases products in aspirational, real-world lifestyle settings (hills, beaches, heritage spots).',
        'Direct sponsorship co-funds travel logistics, creating mutually profitable economics.',
        'Captures authentic, unscripted content with real traveler enthusiasm and scenic backdrops.',
      ],
      useCases: ['Resort wear & holiday fashion', 'Outdoor travel gear & backpacks', 'Travel snacks & functional beverages', 'Action cameras & travel tech'],
      recommendedCampaign: '3-Day Travel Collaboration',
    },
  },
];

// =========================================================================
// 2. THREE CORE BUSINESS ENGINES
// =========================================================================
export interface BusinessEngine {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  icon: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
}

export const BUSINESS_ENGINES: BusinessEngine[] = [
  {
    id: 'mobility-marketing',
    number: '01',
    title: 'Mobility Marketing Engine',
    tagline: 'Street-Level Transit Domination',
    description: 'Electric mobility fleets, illuminated display boxes, LED screen vehicles, and geo-targeted transit corridor saturation delivering unavoidable real-world brand visibility.',
    accentColor: '#0A9BE0',
    icon: 'Truck',
    capabilities: [
      'Backlit aerodynamic display carriers with high-lumen night illumination',
      'P3 outdoor LED video vehicles for dynamic motion content & countdowns',
      'Precision geo-mapped corridor sweeps through prime commercial districts',
      'Zero tailpipe emissions supporting clean, sustainable brand perception',
    ],
    metrics: [
      { label: 'Corridor Reach', value: '10K+ Views/Day' },
      { label: 'Visual Format', value: 'Backlit & LED' },
      { label: 'Fleet Type', value: '100% Electric' },
    ],
  },
  {
    id: 'human-sales',
    number: '02',
    title: 'Human Sales & Affiliate Engine',
    tagline: 'Conversational Commerce & Attribution',
    description: 'Trained brand ambassadors, direct product demonstrations, QR catalogue discovery, pre-order deposits, and a 12-month performance-based affiliate attribution system.',
    accentColor: '#B4F000',
    icon: 'Users',
    capabilities: [
      'Promoters wearing and actively demonstrating your exact apparel and products',
      'Frictionless QR checkout linking directly to your digital product catalogue',
      'Unique promoter affiliate codes tracking repeat customer purchases for 12 months',
      'Pre-order deposit collection enabling demand validation before manufacturing',
    ],
    metrics: [
      { label: 'Attribution Window', value: '12 Months' },
      { label: 'Conversion Lift', value: '4x vs Print' },
      { label: 'Payment Method', value: 'Instant UPI' },
    ],
  },
  {
    id: 'experience-collaboration',
    number: '03',
    title: 'Experience & Collaboration Engine',
    tagline: 'Lifestyle Integration & Cross-Pollination',
    description: 'Experiential tourism partnerships, curated weekend getaways, lifestyle content creation, and cross-industry entrepreneur collaborations connecting fashion, food, and travel.',
    accentColor: '#0A9BE0',
    icon: 'Compass',
    capabilities: [
      '3-Party ecosystem: Fashion sponsors + Tourism operators + ADRYD promoters',
      'Scenic destination photography & viral short-form video production',
      'Contextual product discovery in aspirational vacation and lifestyle settings',
      'Cross-brand promotional bundling reducing customer acquisition cost for all partners',
    ],
    metrics: [
      { label: 'Trip Formats', value: '1 to 7 Days' },
      { label: 'Content Output', value: '30+ Assets/Trip' },
      { label: 'Partnership Model', value: 'Co-Sponsored' },
    ],
  },
];

// =========================================================================
// 3. FIVE COMMERCIAL DIVISIONS
// =========================================================================
export interface CommercialDivision {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  keyOfferings: string[];
  targetIndustries: string[];
  color: string;
}

export const COMMERCIAL_DIVISIONS: CommercialDivision[] = [
  {
    id: 'fashion-connect',
    name: 'ADRYD Fashion Connect',
    badge: 'Apparel & Wearables',
    tagline: 'Your Clothing Worn by Street Promoters',
    description: 'Empowers fashion designers, clothing manufacturers, and boutique owners to turn street promoters into live models who wear, display, and sell their apparel during everyday urban activations.',
    keyOfferings: [
      'Live apparel wear by trained brand promoters during peak traffic hours',
      'Unique QR lanyards linking directly to collection catalogue and size guide',
      'Instant digital pre-orders and direct retail checkout on location',
      'Cinematic street-style Reels and lookbook content creation',
    ],
    targetIndustries: ["Men's & Women's Wear", 'Ethnic & Handloom Fashion', 'Streetwear & Athleisure', 'Footwear & Accessories'],
    color: '#B4F000',
  },
  {
    id: 'live-sales',
    name: 'ADRYD Live Sales',
    badge: 'On-Ground Commerce',
    tagline: 'Direct Demonstrations & Instant Cashflow',
    description: 'Brings retail products directly to where customers congregate—commercial plazas, corporate corridors, and events—with live demonstrations, instant UPI payments, and inventory handovers.',
    keyOfferings: [
      'Mobile product sampling and tactile demonstrations',
      'Instant UPI payment soundbox verification and digital receipts',
      'Rapid demand testing for new SKUs before bulk store stocking',
      'Real-time customer feedback on pricing and design preferences',
    ],
    targetIndustries: ['D2C Packaged Goods', 'Beauty & Cosmetics', 'Consumer Tech Accessories', 'Gourmet Artisanal Foods'],
    color: '#0A9BE0',
  },
  {
    id: 'affiliate-network',
    name: 'ADRYD Affiliate Network',
    badge: 'Performance Sales',
    tagline: 'Promoters as Long-Term Commission Partners',
    description: 'Transforms short-term campaign brand promoters into permanent commission-based sales partners through personalized affiliate QR codes, referral URLs, and 12-month customer lifetime attribution.',
    keyOfferings: [
      'Unique promoter identification IDs (e.g., ADRYD-F101)',
      '12-Month repeat-purchase tracking attribution on verified completed orders',
      'Transparent commission settlement engine with automated weekly payouts',
      'WhatsApp catalogue broadcast assets optimized for promoter sharing',
    ],
    targetIndustries: ['Lifestyle E-Commerce', 'Subscription Boxes', 'Personal Care & Wellness', 'Specialty Health Foods'],
    color: '#B4F000',
  },
  {
    id: 'mobile-media',
    name: 'ADRYD Mobile Media',
    badge: 'Transit Advertising',
    tagline: 'Illuminated Fleet Billboards & LED Vehicles',
    description: 'High-visibility urban advertising media utilizing custom-fabricated aerodynamic display carriers on electric two-wheelers and high-definition mobile LED display vehicles.',
    keyOfferings: [
      'High-lumen illuminated fleet boxes visible from 100+ meters day and night',
      'Ultra-bright outdoor P3 LED screen vehicles for animated video ads',
      'GPS-verified corridor coverage reports and heatmaps',
      '100% green electric fleet contributing to corporate sustainability metrics',
    ],
    targetIndustries: ['Real Estate & Construction', 'Fintech & Banking Apps', 'Entertainment & Events', 'Education & EdTech'],
    color: '#0A9BE0',
  },
  {
    id: 'travel-experiences',
    name: 'ADRYD Travel Experiences',
    badge: 'Experiential Tourism',
    tagline: 'Brand Sponsorship on Destination Getaways',
    description: 'Curates three-party collaborations between fashion sponsors, travel operators, and brand promoters on weekend getaways, nature retreats, and cultural tours for aspirational brand integration.',
    keyOfferings: [
      'Travelers and promoters wearing sponsor clothing throughout scenic itineraries',
      'Destination lifestyle photoshoots in picturesque natural settings',
      'Special trip-exclusive QR discount codes for fellow travelers and followers',
      'Co-funded travel logistics creating profitable economics for tour operators',
    ],
    targetIndustries: ['Travel & Tour Operators', 'Resorts & Homestays', 'Adventure & Outdoor Gear', 'Swimwear & Resort Collections'],
    color: '#B4F000',
  },
];

// =========================================================================
// 4. FASHION CONNECT CATEGORIES & 10-STEP SEQUENCE
// =========================================================================
export const FASHION_CATEGORIES = [
  "Men's Casual & Formal",
  "Women's Ethnic & Western",
  'Handloom & Heritage Textiles',
  'Streetwear & Athleisure',
  'Kidswear & Family Collections',
  'Footwear & Sneakers',
  'Accessories, Bags & Eyewear',
  'Sustainable & Organic Fashion',
  'Designer Boutique Capsules',
  'Festive & Wedding Ensembles',
];

export const FASHION_WORKFLOW_STEPS = [
  { step: '01', title: 'Supply Curated Apparel', desc: 'Entrepreneur provides selected clothing samples and sizes for the campaign.' },
  { step: '02', title: 'Promoter Allocation', desc: 'ADRYD matches apparel with professional promoters fitted to your target demographic.' },
  { step: '03', title: 'Active Street Styling', desc: 'Promoters wear and style the clothing during approved urban activations.' },
  { step: '04', title: 'Assign Unique ID', desc: 'Each promoter is issued a unique promoter code (e.g., ADRYD-F101) and QR badge.' },
  { step: '05', title: 'Customer Discovery', desc: 'Pedestrians and commuters encounter the clothing in active, real-world motion.' },
  { step: '06', title: 'Frictionless Scan', desc: 'Interested customers scan the promoter’s QR code using any smartphone camera.' },
  { step: '07', title: 'Browse Digital Lookbook', desc: 'Mobile-first lookbook opens instantly with sizing charts, specs, and price options.' },
  { step: '08', title: 'Order or Pre-Order', desc: 'Customer completes purchase or reserves items with a small advance deposit.' },
  { step: '09', title: 'Attribution Tracking', desc: 'Order is automatically attributed to the promoter ID for commission verification.' },
  { step: '10', title: 'Analytics & Settlement', desc: 'Entrepreneur receives real-time campaign reporting and settled net revenues.' },
];

// =========================================================================
// 5. AFFILIATE PERFORMANCE DATA TABLE
// =========================================================================
export interface AffiliatePerformanceRow {
  promoterId: string;
  name: string;
  orders: number;
  avgOrderValue: number;
  salesValue: number;
  commission: number;
}

export const ILLUSTRATIVE_AFFILIATE_DATA: AffiliatePerformanceRow[] = [
  { promoterId: 'ADRYD-F101', name: 'Vikram Sharma', orders: 15, avgOrderValue: 2000, salesValue: 30000, commission: 1800 },
  { promoterId: 'ADRYD-F102', name: 'Pooja Reddy', orders: 20, avgOrderValue: 2000, salesValue: 40000, commission: 2400 },
  { promoterId: 'ADRYD-F103', name: 'Karthik Rao', orders: 10, avgOrderValue: 2000, salesValue: 20000, commission: 1200 },
  { promoterId: 'ADRYD-F104', name: 'Ananya Varma', orders: 25, avgOrderValue: 2000, salesValue: 50000, commission: 3000 },
];

// =========================================================================
// 6. FOOTFALL CONVERSION FUNNEL METRICS
// =========================================================================
export const FOOTFALL_LOCATIONS = [
  { name: 'Commercial High Streets', desc: 'Jubilee Hills, Indiranagar, Linking Road style pedestrian shopping corridors' },
  { name: 'IT & Cyber Parks', desc: 'HITEC City, Whitefield, DLF Cyber City corporate campus approaches' },
  { name: 'Commercial Complexes', desc: 'Central business towers and multi-floor shopping arcades' },
  { name: 'College Festivals & Campuses', desc: 'University zones, fest gates, and student entertainment avenues' },
  { name: 'Exhibition & Convention Centers', desc: 'Trade show perimeters, consumer fairs, and expo approaches' },
  { name: 'Shopping Mall Perimeters', desc: 'High-density weekend mall approach roads and drop-off hubs' },
  { name: 'Residential Hubs', desc: 'Gated community market avenues and neighborhood club corridors' },
  { name: 'Tourist & Cultural Sites', desc: 'Heritage monuments, lakefront promenades, and cultural streets' },
  { name: 'Weekend Flea Markets', desc: 'Sunday bazaars, artisanal markets, and pop-up retail squares' },
  { name: 'Transit Concourse Gates', desc: 'Metro interchange stations and bus rapid transit departure plazas' },
];

export const FUNNEL_METRICS = [
  { stage: 'Corridor Exposure', count: 10000, pct: '100%', label: 'Total pedestrians seeing brand fleet & promoters', color: '#0A9BE0' },
  { stage: 'Customer Interactions', count: 1000, pct: '10%', label: 'People pausing, greeting promoters or inquiring', color: '#74D7FF' },
  { stage: 'QR Lookbook Scans', count: 400, pct: '40% of interactions', label: 'Shoppers scanning QR code to view catalogue', color: '#B4F000' },
  { stage: 'Qualified Enquiries', count: 200, pct: '50% of scans', label: 'Customers checking specific sizing, colors or offers', color: '#D4FF4D' },
  { stage: 'Completed Orders', count: 60, pct: '30% of enquiries', label: 'Purchases completed via direct buy or pre-order', color: '#FFFFFF' },
];

// =========================================================================
// 7. NATIONAL EXPANSION CITIES (10 CITIES / 140 PROMOTERS)
// =========================================================================
export interface ExpansionCity {
  id: string;
  name: string;
  state: string;
  promoters: number;
  phase: number;
  focus: string;
  corridors: string;
  x: number; // SVG map coordinates %
  y: number;
}

export const EXPANSION_CITIES: ExpansionCity[] = [
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', promoters: 20, phase: 1, focus: 'IT Corridors, Jubilee Hills, Gachibowli, Banjara Hills', corridors: 'HITEC City, Madhapur, Financial District, Inorbit Mall Area', x: 48, y: 62 },
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', promoters: 15, phase: 1, focus: 'Tech Parks, Indiranagar, Koramangala, Whitefield', corridors: '100 Feet Road, Outer Ring Road, MG Road, Brigade Road', x: 44, y: 74 },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', promoters: 15, phase: 2, focus: 'OMR Tech Corridor, Anna Nagar, T. Nagar Retail', corridors: 'Pondy Bazaar, Khader Nawaz Khan Road, Phoenix Marketcity Area', x: 53, y: 77 },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', promoters: 20, phase: 2, focus: 'Bandra Linking Road, BKC, Lower Parel, Andheri West', corridors: 'Bandra Hill Road, Lokhandwala Complex, Colaba Causeway', x: 30, y: 56 },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', promoters: 10, phase: 2, focus: 'Koregaon Park, Hinjewadi IT Park, FC Road, Kalyani Nagar', corridors: 'North Main Road, Balewadi High Street, Phoenix Mall Viman Nagar', x: 33, y: 60 },
  { id: 'delhi-ncr', name: 'Delhi NCR', state: 'Delhi / Haryana', promoters: 20, phase: 3, focus: 'Cyber Hub Gurgaon, Connaught Place, South Ex, Noida Sec 18', corridors: 'Khan Market, Galleria Gurgaon, Saket District Centre, Sector 29', x: 38, y: 30 },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', promoters: 10, phase: 3, focus: 'Park Street, Salt Lake Sector V, New Town, Gariahat', corridors: 'Camac Street, South City Mall Corridor, Mani Square', x: 73, y: 46 },
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', promoters: 10, phase: 3, focus: 'SG Highway, Sindhu Bhavan Road, CG Road, Bodakdev', corridors: 'Prahlad Nagar, Vastrapur Lake Avenue, Iscon Cross Road', x: 26, y: 45 },
  { id: 'kochi', name: 'Kochi', state: 'Kerala', promoters: 10, phase: 2, focus: 'MG Road, Panampilly Nagar, Kakkanad InfoPark, Lulu Corridor', corridors: 'Marine Drive, Edappally Junction, Fort Kochi Heritage Promenade', x: 42, y: 86 },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', promoters: 10, phase: 3, focus: 'MI Road, C-Scheme, Malviya Nagar, Tonk Road, Raja Park', corridors: 'Panch Batti, Gaurav Tower Corridor, Vaishali Nagar', x: 34, y: 36 },
];

export const EXPANSION_PHASES = [
  { phase: 1, title: 'Phase 1: Pilot & Hub Validation', cities: 'Hyderabad & Bengaluru', timeline: 'Active / Q1', promoters: '35 Promoters', desc: 'Validates dual-city execution, corridor routing algorithms, and promoter conversion benchmarks.' },
  { phase: 2, title: 'Phase 2: Southern & Western Expansion', cities: 'Chennai, Mumbai, Pune, Kochi', timeline: 'Q2 Rollout', promoters: '55 Promoters', desc: 'Broadens network across key maritime commerce centers and high-disposable-income metro corridors.' },
  { phase: 3, title: 'Phase 3: Northern & Eastern Expansion', cities: 'Delhi NCR, Kolkata, Ahmedabad, Jaipur', timeline: 'Q3 Rollout', promoters: '50 Promoters', desc: 'Achieves nationwide synchronized launch capability for national enterprise brands and pan-India campaigns.' },
  { phase: 4, title: 'Phase 4: Customer Retention & Repeat Network', cities: 'All 10 Metro Hubs', timeline: 'Q4 & Ongoing', promoters: '140+ Promoters', desc: 'Automates 12-month affiliate attribution, repeat order cycles, and cross-brand collaboration ecosystem.' },
];

// =========================================================================
// 8. THREE FASHION CAMPAIGN PACKAGES
// =========================================================================
export interface FashionPackage {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  promoters: string;
  riders: string;
  locations: string;
  reels: string;
  desc: string;
  planningPrice: string;
  badge: string;
  isPopular?: boolean;
  features: string[];
}

export const FASHION_CAMPAIGN_PACKAGES: FashionPackage[] = [
  {
    id: 'fashion-instant',
    name: 'Instant Fashion Promotion',
    tagline: '1-Day Quick Flash Activation',
    duration: '1 Day',
    promoters: '5 Trained Promoters',
    riders: '5 Branded Electric EVs',
    locations: '2–3 Commercial Corridors',
    reels: '5 Viral Reels & Lookbook',
    planningPrice: '₹9,000',
    badge: 'Fast Test Drive',
    desc: 'Rapid street launch designed to introduce new fashion collections, test product appeal, and drive quick footfall with live models wearing your designs.',
    features: [
      '5 Promoters wearing your supplied apparel',
      '5 Branded electric scooters with illuminated display boxes',
      '2–3 High-traffic pedestrian corridors targeted',
      'Dynamic QR lanyards linking to digital product lookbook',
      'Direct on-ground order taking & cashflow generation',
      '5 Short-form social media video assets captured',
      'Detailed end-of-day scan and inquiry report',
    ],
  },
  {
    id: 'fashion-growth',
    name: 'Fashion Brand Growth',
    tagline: '3-Day Multi-Corridor Saturation',
    duration: '3 Days',
    promoters: '10 Trained Promoters',
    riders: '10 Branded Electric EVs',
    locations: '5–8 High-Density Hubs',
    reels: '15 Viral Reels & Interviews',
    planningPrice: '₹30,000',
    badge: 'Most Popular',
    isPopular: true,
    desc: 'Comprehensive multi-day campaign providing consistent corridor presence, customer trials, pre-order deposit collection, and robust digital content generation.',
    features: [
      '10 Promoters actively modeling your collections across multiple shifts',
      '10 Branded electric scooters creating high-impact visual fleet presence',
      '5–8 Prime commercial zones (IT hubs, high streets, shopping complexes)',
      'Pre-order deposit collection workflow (collect ₹300 deposits on the spot)',
      '12-Month promoter affiliate tracking integration',
      '15 Cinematic Reels, customer interview clips & street-style photos',
      'Dedicated route captain & real-time GPS telemetry reports',
      'Mid-campaign corridor optimization based on Day 1 scan velocity',
    ],
  },
  {
    id: 'fashion-expansion',
    name: 'Fashion Market Expansion',
    tagline: '7-Day Dominant City-Wide Roadshow',
    duration: '7 Days',
    promoters: '20 Trained Promoters',
    riders: '15 Branded Electric EVs',
    locations: '10–15 Urban Corridors',
    reels: '30 Professional Reels & Ads',
    planningPrice: '₹65,000',
    badge: 'Full Market Blitz',
    desc: 'Dominant week-long roadshow designed for serious retail market entry, wholesale partner acquisition, and maximum customer conversion across an entire metro area.',
    features: [
      '20 Promoters delivering complete morning, afternoon, and evening corridor sweeps',
      '15 Branded electric scooters commanding eye-level transit attention',
      '10–15 Comprehensive corridors covering tech corridors, colleges, and prime retail',
      'Direct on-ground inventory sales support + sample distribution',
      'Wholesale & boutique retailer lead capture workflow',
      '30 Viral Reels, street testimonials & promotional photo gallery',
      'Multi-promoter affiliate attribution dashboard setup',
      'Comprehensive market demand report with sizing, color & pricing insights',
    ],
  },
];

// =========================================================================
// 9. TRADITIONAL MARKETING COMPARISON MATRIX (12 DIMENSIONS)
// =========================================================================
export interface ComparisonMatrixRow {
  dimension: string;
  traditional: string;
  adryd: string;
  isAdrydAdvantage: boolean;
}

export const MARKETING_COMPARISON_MATRIX: ComparisonMatrixRow[] = [
  { dimension: 'Brand Visibility', traditional: 'Static billboard or magazine page seen passively', adryd: 'Moving illuminated fleet at eye level throughout pedestrian corridors', isAdrydAdvantage: true },
  { dimension: 'Human Interaction', traditional: 'Zero personal contact or explanation', adryd: 'Trained brand ambassadors wearing apparel, answering questions & styling', isAdrydAdvantage: true },
  { dimension: 'Product Demonstrations', traditional: 'Confined to physical store interior', adryd: 'Touch, feel, and try fabric in active real-world daylight environments', isAdrydAdvantage: true },
  { dimension: 'Customer Approach', traditional: 'Waits for customer to walk into shop', adryd: 'Proactively approaches target crowds at lunch hours & evening high streets', isAdrydAdvantage: true },
  { dimension: 'QR Attribution', traditional: 'Generic URL rarely typed on mobile', adryd: 'Personal promoter QR codes linking directly to mobile lookbook & carts', isAdrydAdvantage: true },
  { dimension: 'Affiliate Sales', traditional: 'Disconnected from physical ad spend', adryd: 'Promoters earn commissions on repeat purchases for 12 months', isAdrydAdvantage: true },
  { dimension: 'Pre-Orders & Deposits', traditional: 'Requires full inventory manufactured upfront', adryd: 'Collects pre-orders & deposits on the street to validate demand first', isAdrydAdvantage: true },
  { dimension: 'Social Media Synergy', traditional: 'Separate expensive studio photoshoot budget', adryd: '15–30 street Reels captured during live activation at zero extra fee', isAdrydAdvantage: true },
  { dimension: 'Multi-City Scalability', traditional: 'Heavy fixed costs to open physical stores per city', adryd: 'Deploy 10 to 20 promoters in any metro within 48 hours notice', isAdrydAdvantage: true },
  { dimension: 'Travel & Tourism Collabs', traditional: 'Rare, complex, non-integrated sponsorships', adryd: 'Turnkey co-sponsorships with weekend tour groups & resort outings', isAdrydAdvantage: true },
  { dimension: 'Live On-Ground Selling', traditional: 'Impossible from a billboard or TV ad', adryd: 'Instant UPI payments & product handovers directly on the street', isAdrydAdvantage: true },
  { dimension: 'Campaign Reporting', traditional: 'Vague estimates of passing vehicle impressions', adryd: 'Precise GPS logs, scan counts, lead tallies & confirmed sales data', isAdrydAdvantage: true },
];

// =========================================================================
// 10. SHOWROOM VS ADRYD INVESTMENT BREAKDOWN
// =========================================================================
export const SHOWROOM_INVESTMENT = {
  traditional: {
    title: 'Traditional Retail Showroom (Setup + Month 1)',
    total: 413000,
    items: [
      { name: 'Commercial Security Deposit (3–6 Months)', cost: 150000 },
      { name: 'Month 1 Prime High-Street Rent', cost: 50000 },
      { name: 'Interior Racks, Lighting & Display Fitout', cost: 120000 },
      { name: 'Sales Staff Salaries (2 Store Personnel)', cost: 40000 },
      { name: 'Commercial Electricity, AC & Maintenance', cost: 18000 },
      { name: 'Initial Print Flyers, Signage & Local Ads', cost: 35000 },
    ],
  },
  adryd: {
    title: 'ADRYD Campaign-Based Market Validation',
    total: 109000,
    items: [
      { name: '3-Day Multi-Corridor Saturation Campaign (10 Promoters + 10 EVs)', cost: 30000 },
      { name: 'Mobile Product Lookbook & Interactive QR Setup', cost: 15000 },
      { name: 'Curated Promoter Wardrobe Samples (10 Complete Outfits)', cost: 24000 },
      { name: 'Inventory Logistics, Mobile Display Racks & Packaging', cost: 20000 },
      { name: 'Hyperlocal Social Media Reels & Paid Boost Ad Spend', cost: 20000 },
    ],
  },
};

// =========================================================================
// 11. 15 ADDITIONAL BUSINESS OPPORTUNITIES
// =========================================================================
export interface AdditionalOpportunity {
  id: string;
  title: string;
  category: string;
  whatItMeans: string;
  howAdrydSupports: string;
  businessBenefit: string;
}

export const ADDITIONAL_OPPORTUNITIES: AdditionalOpportunity[] = [
  { id: 'fashion-launch', title: 'Fashion Launch Events', category: 'Events', whatItMeans: 'Unveiling new seasonal drops with simultaneous on-street modeling.', howAdrydSupports: 'Coordinated fleet flash mobs converging at city plazas at scheduled hours.', businessBenefit: 'Creates viral street curiosity and immediate press coverage.' },
  { id: 'boutique-collab', title: 'Boutique Collaborations', category: 'Retail', whatItMeans: 'Local boutique shops co-branding with regional designers.', howAdrydSupports: 'Routing promoter fleets past competing retail zones directing buyers to the boutique.', businessBenefit: 'Drives footfall from competitor retail zones to partner boutiques.' },
  { id: 'corporate-uniforms', title: 'Corporate Workwear Showcase', category: 'B2B', whatItMeans: 'Presenting corporate shirts, blazer lines, and safety gear to office hubs.', howAdrydSupports: 'Promoters wearing crisp executive wear stationed at tech park gates during lunch.', businessBenefit: 'Generates high-ticket corporate bulk order leads from HR and procurement teams.' },
  { id: 'college-campaigns', title: 'College Fest Brand Activations', category: 'Youth', whatItMeans: 'Engaging Gen-Z youth with trendy college streetwear and accessories.', howAdrydSupports: 'Sponsoring campus festival entrances with music, styling booths & QR discounts.', businessBenefit: 'Builds loyal early-adopter youth followings and viral Instagram traction.' },
  { id: 'festival-promotions', title: 'Festival & Holiday Blitzes', category: 'Seasonal', whatItMeans: 'Capitalizing on Diwali, Eid, Christmas, and New Year shopping surges.', howAdrydSupports: 'Illuminated evening fleets targeting bustling holiday bazaars and sweet shops.', businessBenefit: 'Maximizes sales velocity during the highest retail spend weeks of the year.' },
  { id: 'wedding-collections', title: 'Wedding & Festive Ensembles', category: 'Luxury', whatItMeans: 'Showcasing intricate bridal wear, sherwanis, and wedding ethnic attire.', howAdrydSupports: 'Promoters modeling ornate garments in historic shopping quarters and banquet lanes.', businessBenefit: 'Reaches families actively planning weddings with high-budget requirements.' },
  { id: 'fashion-exhibitions', title: 'Fashion Expo Satellite Campaigns', category: 'Expos', whatItMeans: 'Capturing expo visitors outside ticketed convention centers.', howAdrydSupports: 'Promoters positioned along exhibition approach roads engaging attendees.', businessBenefit: 'Gains exhibition-level visibility at 1/5th the cost of an indoor exhibition booth.' },
  { id: 'customer-referrals', title: 'Customer Referral Amplification', category: 'Retention', whatItMeans: 'Encouraging happy customers to share promoter codes with friends.', howAdrydSupports: 'Automated discount incentives sent via WhatsApp upon verified order delivery.', businessBenefit: 'Reduces customer acquisition cost through organic word-of-mouth loops.' },
  { id: 'online-store-integration', title: 'D2C Online Store Integration', category: 'E-Commerce', whatItMeans: 'Linking street sales seamlessly into Shopify or WooCommerce backends.', howAdrydSupports: 'Direct API webhook routing orders into your existing fulfillment system.', businessBenefit: 'Zero workflow disruption for existing e-commerce operations.' },
  { id: 'subscription-fashion', title: 'Subscription Wardrobe Drops', category: 'Recurring', whatItMeans: 'Introducing monthly apparel or accessory curation boxes.', howAdrydSupports: 'Promoters demonstrating unboxing experiences and collecting monthly signups.', businessBenefit: 'Establishes predictable recurring monthly revenue (MRR) for the brand.' },
  { id: 'retailer-acquisition', title: 'Wholesale Retailer Signups', category: 'B2B', whatItMeans: 'Attracting multi-brand retail shop owners to stock your brand.', howAdrydSupports: 'Distributing wholesale sample kits to apparel shop owners along commercial streets.', businessBenefit: 'Expands offline wholesale distribution footprint rapidly.' },
  { id: 'wholesale-enquiries', title: 'Bulk Uniform & Merch Orders', category: 'B2B', whatItMeans: 'Targeting restaurants, gyms, and hotels needing branded uniforms.', howAdrydSupports: 'Promoters handing physical fabric swatch cards to business managers.', businessBenefit: 'Secures high-volume recurrent contracts with corporate clients.' },
  { id: 'product-sampling', title: 'Tactile Fabric & Perfume Sampling', category: 'Sampling', whatItMeans: 'Allowing customers to test fragrance mists or fabric softness.', howAdrydSupports: 'Promoters carrying mist atomizers and fabric test swatches.', businessBenefit: 'Removes sensory doubt, converting sensory engagement into instant checkout.' },
  { id: 'customer-feedback', title: 'Live Sizing & Price Surveys', category: 'Research', whatItMeans: 'Gathering feedback on fit, sleeve length, fabric feel, and price perception.', howAdrydSupports: 'Promoters recording structured 30-second customer survey responses via tablet.', businessBenefit: 'Prevents expensive production mistakes before seasonal manufacturing.' },
  { id: 'cross-brand-partnerships', title: 'Cross-Brand Collaborative Bundling', category: 'Ecosystem', whatItMeans: 'Co-promoting complementary fashion, footwear, eyewear, and travel snacks.', howAdrydSupports: 'Promoters styled in head-to-toe collaborative brand looks on joint routes.', businessBenefit: 'Splits campaign expenses across 4 brands, slashing marketing costs by 75%.' },
];

// =========================================================================
// 12. 10-STEP ENTREPRENEUR REGISTRATION JOURNEY
// =========================================================================
export const ENTREPRENEUR_JOURNEY_STEPS = [
  { step: '01', title: 'Register Business Profile', desc: 'Submit basic business details, product category, and target commercial cities.' },
  { step: '02', title: 'Product & Brand Review', desc: 'ADRYD team evaluates samples, lookbook links, and target audience alignment.' },
  { step: '03', title: 'Select Campaign Model', desc: 'Choose between 1-Day Flash, 3-Day Growth, 7-Day Blitz, or Custom Multi-City plan.' },
  { step: '04', title: 'Corridor Route Planning', desc: 'Precision route mapping matching your buyer demographics across high-traffic zones.' },
  { step: '05', title: 'Promoter Training & Styling', desc: 'Promoters fitted with your apparel, trained on brand USPs, and assigned QR codes.' },
  { step: '06', title: 'Street-Level Activation', desc: 'Fleet cruises designated corridors; promoters engage pedestrians and take orders.' },
  { step: '07', title: 'Live Telemetry & Sales Tracking', desc: 'Real-time dashboard updates tracking scans, inquiries, orders, and GPS routes.' },
  { step: '08', title: 'Direct Settlements', desc: 'Eligible revenue and sales receipts settled directly into your commercial bank account.' },
  { step: '09', title: 'Performance & Demand Report', desc: 'Comprehensive post-campaign report detailing reach, customer feedback, and top SKUs.' },
  { step: '10', title: 'National Network Expansion', desc: 'Scale proven campaign formats across Bengaluru, Mumbai, Delhi, and 10 metro hubs.' },
];

// =========================================================================
// 13. FUTURE TECHNOLOGY ECOSYSTEM MODULES (12 MODULES)
// =========================================================================
export const FUTURE_ECOSYSTEM_MODULES = [
  { name: 'Entrepreneur Command Center', status: 'Proposed', desc: 'Unified portal for booking campaigns, uploading lookbooks, and tracking live street sales.' },
  { name: 'Promoter Mobile App', status: 'Proposed', desc: 'Assigned routes, digital lookbook presentations, soundbox payments, and commission logs.' },
  { name: 'Rider Partner Companion', status: 'Proposed', desc: 'Corridor navigation, backlit display battery monitors, and route pacing guidance.' },
  { name: '12-Month Affiliate Attribution Engine', status: 'Proposed', desc: 'Automated referral cookie and promoter ID linking with automated multi-tier splits.' },
  { name: 'Smart Campaign Corridor Planner', status: 'Proposed', desc: 'AI-assisted routing algorithms targeting maximum pedestrian density per hour.' },
  { name: 'Dynamic QR Lookbook Generator', status: 'Proposed', desc: 'Instant mobile-first lookbooks generated with sizing guides and UPI payment links.' },
  { name: 'On-Ground Order & Pre-Order Registry', status: 'Proposed', desc: 'Instant deposit tracking, inventory reservations, and digital receipt delivery.' },
  { name: 'Social Content Ingestion & UGC Hub', status: 'Proposed', desc: 'Automated aggregation and tagging of street Reels, customer testimonials, and photos.' },
  { name: 'Mobile LED Screen Cloud Scheduler', status: 'Proposed', desc: 'Remote over-the-air video asset scheduling across moving vehicle LED displays.' },
  { name: 'Experiential Travel Booking Hub', status: 'Proposed', desc: 'Co-sponsorship coordination matching fashion labels with weekend tourism departures.' },
  { name: 'Settlement & Automated Payouts', status: 'Proposed', desc: 'Tax-compliant automated revenue distribution for entrepreneurs, promoters, and fleet.' },
  { name: 'Predictive Merchandising Analytics', status: 'Proposed', desc: 'Machine-learning insights identifying top-converting SKUs, sizing gaps, and pricing elasticity.' },
];
