export interface Opportunity {
  id: string;
  number: string;
  action: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  activities: string[];
  earningModel: string;
  exampleScenario: string;
  eligibility: string;
  color: string;
}

export interface CareerLevel {
  level: number;
  badge: string;
  title: string;
  experience: string;
  monthlyTarget: string;
  color: string;
  perks: string[];
  description: string;
}

export interface SpecialProgramme {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
  whoItIsFor: string;
}

export interface SkillCareerPath {
  skillLearned: string;
  riderActivity: string;
  futureCareerRole: string;
  industry: string;
}

export interface OnboardingStep {
  step: number;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
}

export const RIDERPRENEUR_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'brand-promotion',
    number: '01',
    action: 'PROMOTE',
    title: 'Brand Promotion & Street Visibility',
    iconName: 'Megaphone',
    tagline: 'Turn urban transit into an illuminated high-recall brand showpiece',
    description: 'Transform your daily commute into a high-visibility marketing asset. Fitted with backlit LED display boxes and bespoke aerodynamic livery, your electric vehicle becomes a moving billboard through top high-street avenues and tech corridors.',
    activities: [
      'High-street commercial corridor transit runs',
      'Illuminated prime intersection visibility stops',
      'Synchronized morning and evening peak-hour commutes',
      'Strategic curb-side storefront positioning'
    ],
    earningModel: 'Per-kilometer corridor rate (₹12 - ₹20/km) + hourly brand activation stipend + prime peak-hour bonuses.',
    exampleScenario: 'Cruising 4 hours across Jubilee Hills Road No. 36 & Hitec City corridors earning steady daily brand display retainers.',
    eligibility: 'All verified ADRYD riders with compliant electric vehicle and official uniform kit.',
    color: '#0A9BE0'
  },
  {
    id: 'direct-sales',
    number: '02',
    action: 'SELL',
    title: 'Direct Sales & Product Sampling',
    iconName: 'ShoppingBag',
    tagline: 'Facilitate on-ground product trials and direct consumer sales',
    description: 'Engage curious consumers with product tastings, packaged product samples, and direct sales transactions during planned dwell periods at major business parks and entertainment hubs.',
    activities: [
      'Targeted physical product sample handovers',
      'On-the-spot mobile checkout and instant digital sales',
      'Rapid product value explanation and feature demos',
      'Digital feedback and consumer sentiment capture via the app'
    ],
    earningModel: 'Direct sales commission (8% - 18% per SKU sold) + per-sample handover bounty + daily completion allowance.',
    exampleScenario: 'Handing out 180 energy drink samples in Mindspace IT corridor with ₹12 per verified sample handover + instant 15% sales margin.',
    eligibility: 'Level 2 (Bronze) and above with certified hygiene and product pitch training.',
    color: '#B4F000'
  },
  {
    id: 'social-media',
    number: '03',
    action: 'CREATE',
    title: 'Social Media Creation & Street Spotlight',
    iconName: 'Video',
    tagline: 'Document authentic on-street energy and product reactions',
    description: 'Produce authentic, dynamic short-form video reels and street reaction shorts featuring partner brands in vibrant real-world Indian urban environments.',
    activities: [
      '15–30 second POV electric ride shorts and high-angle reels',
      'Commuter street reaction interviews and blind taste tests',
      'Visual vehicle unboxing and campaign setup teasers',
      'Daily story check-ins tagging brand handles and hashtags'
    ],
    earningModel: 'Per approved reel payout (₹500 - ₹2,500) + viral performance tier bonuses on organic views.',
    exampleScenario: 'A 25-second street reaction video shot at Inorbit Mall generating 35,000 views and triggering a ₹1,800 creator bounty.',
    eligibility: 'Open to all riders with a modern smartphone camera who complete the ADRYD Creator Masterclass.',
    color: '#0A9BE0'
  },
  {
    id: 'pre-orders',
    number: '04',
    action: 'PRE-ORDER',
    title: 'Instant QR Pre-Orders & Digital Booking',
    iconName: 'Smartphone',
    tagline: 'Capture immediate demand with vehicle-mounted dynamic QR codes',
    description: 'Empower tech-savvy commuters and interested pedestrians to scan your vehicle display QR code on the spot to secure new product drops, early-bird subscriptions, or event tickets.',
    activities: [
      'Displaying high-contrast dynamic QR banners',
      'Explaining exclusive launch offers and promo perks',
      'Guiding first-time shoppers through mobile booking screens',
      'Logging confirmed customer intent directly in the rider portal'
    ],
    earningModel: 'Fixed lead generation fee (₹60 - ₹220 per confirmed booking) + trailing conversion incentives.',
    exampleScenario: 'Capturing 11 pre-orders for a newly launched artisanal cold brew during an evening corporate park stop in Financial District.',
    eligibility: 'All active riders assigned to official pre-order partner campaigns.',
    color: '#B4F000'
  },
  {
    id: 'affiliate-marketing',
    number: '05',
    action: 'REFER',
    title: 'Lifetime Digital Affiliate Codes',
    iconName: 'Sparkles',
    tagline: 'Build recurring customer attribution tied to your permanent ID',
    description: 'Distribute your customized Rider Affiliate Code (`AFF-XXXXX`) via vehicle graphics, smartcards, and digital links to earn recurring commissions on all consumer orders.',
    activities: [
      'Distributing waterproof NFC smartcards and flyer vouchers',
      'Vehicle-mounted permanent promotional discount stickers',
      'Digital link sharing across WhatsApp community groups',
      'Targeted referral distribution during residential deliveries'
    ],
    earningModel: 'Recurring 5% - 15% revenue share on all customer checkouts using your code for 60-90 trailing days.',
    exampleScenario: '140 regular neighborhood commuters buying monthly organic farm basket subscriptions through your code generating steady monthly dividends.',
    eligibility: 'All registered riders upon completing their first 10 verified campaign hours.',
    color: '#0A9BE0'
  },
  {
    id: 'photo-video',
    number: '06',
    action: 'CAPTURE',
    title: 'Campaign Photography & Proof of Performance',
    iconName: 'Camera',
    tagline: 'Deliver verified high-resolution brand telemetry and media assets',
    description: 'Capture crisp, geo-tagged fleet photography, storefront alignment shots, and genuine consumer engagement moments to feed client real-time verification dashboards.',
    activities: [
      'Geo-tagged fleet convoy lineup and cornering photography',
      'High-angle city landmark convoy photos (e.g., Cable Bridge)',
      'Close-up high-resolution shots of active flyer distributions',
      'Real-time digital check-ins verifying corridor compliance'
    ],
    earningModel: 'Per-bundle media verification bounty (₹150 - ₹450 per verified media bundle) credited directly to wallet.',
    exampleScenario: 'Submitting 6 sunset photos of a 6-bike convoy at Durgam Cheruvu bridge for immediate client sign-off and instant credit.',
    eligibility: 'Riders equipped with verified high-resolution mobile camera.',
    color: '#B4F000'
  },
  {
    id: 'viral-marketing',
    number: '07',
    action: 'GO VIRAL',
    title: 'Flash Convoys & High-Impact Stunts',
    iconName: 'Flame',
    tagline: 'Execute coordinated fleet blitzes that stop city traffic in its tracks',
    description: 'Participate in synchronized 6-to-12 vehicle electric convoys moving in tight formation through high-density urban centres, creating unforgettable brand spectacles.',
    activities: [
      'Precision synchronized multi-vehicle corridor sweeps',
      'Coordinated sound and underglow light activations at dusk',
      'Themed costumed or bespoke liveried brand motorcades',
      'High-profile VIP launch escorts and event grand entrances'
    ],
    earningModel: 'Surge convoy hourly rate (1.5x - 2.5x standard corridor pay) + flash mobilization completion bonus.',
    exampleScenario: 'Leading an 8-scooter convoy for a pan-India sneaker launch across Banjara Hills Road No. 1 with live photographer escort.',
    eligibility: 'Level 3 (Silver) and above with verified convoy safety certifications.',
    color: '#0A9BE0'
  },
  {
    id: 'entrepreneur-collabs',
    number: '08',
    action: 'COLLABORATE',
    title: 'Startup Founder & Brand Partnerships',
    iconName: 'Briefcase',
    tagline: 'Work shoulder-to-shoulder with visionary startup founders',
    description: 'Collaborate directly with emerging D2C brand founders, regional artisans, and innovative product designers to test product-market fit on live city streets.',
    activities: [
      'Direct strategy and briefing sessions with brand founders',
      'Aggregating structured consumer feedback and objections',
      'Rapid A/B testing of different packaging and pitch angles',
      'Representing the brand at entrepreneur mixers and pop-ups'
    ],
    earningModel: 'Dedicated weekly brand retainer + performance milestone bonuses + exclusive merchandise perks.',
    exampleScenario: 'Assisting a sustainable D2C skincare founder for 3 weeks testing consumer adoption across 3 Hyderabad IT hubs.',
    eligibility: 'Level 4 (Gold) and above riders with proven communication and professionalism ratings.',
    color: '#B4F000'
  },
  {
    id: 'partner-assisted',
    number: '09',
    action: 'TEAM UP',
    title: 'Fleet Co-Pilots & Sampling Assistants',
    iconName: 'Users',
    tagline: 'Multiply your throughput with a coordinated two-person deployment',
    description: 'Team up with a dedicated sampling specialist or peer brand promoter, allowing you to focus on safe maneuvering and parking while your partner manages high-volume customer interactions.',
    activities: [
      'Two-person rapid sampling blitzes at transit junctions',
      'High-volume festival, concert, and college crowd coverage',
      'Simultaneous flyer distribution and instant barcode checkouts',
      'Seamless queue and crowd engagement management'
    ],
    earningModel: 'Dual-operator combined team stipend + pooled commissions split transparently via the Rider App.',
    exampleScenario: 'Staffing a mobile beverage hydration station outside Gachibowli Stadium during weekend sporting events.',
    eligibility: 'All certified riders opting into dual-operator high-density activations.',
    color: '#0A9BE0'
  },
  {
    id: 'location-based',
    number: '10',
    action: 'EXPLORE',
    title: 'Hyperlocal Micro-Hubs & Docked Showcases',
    iconName: 'Compass',
    tagline: 'Anchor your vehicle as an interactive street-level pop-up boutique',
    description: 'Park your illuminated EV in pre-approved high-density commercial plazas, corporate tech parks, and weekend farmers markets as a futuristic mobile retail kiosk.',
    activities: [
      'Illuminated static vehicle docking in designated brand bays',
      'Interactive hands-on product demonstrations and unboxings',
      'Answering consumer inquiries and sharing digital lookbooks',
      'Operating digital customer registration tablets'
    ],
    earningModel: 'Fixed static activation rate + visitor check-in bounties + product sales commissions.',
    exampleScenario: 'Setting up a 3-hour illuminated showcase at DLF Cybercity during peak Friday lunch hours.',
    eligibility: 'Level 2 (Bronze) and above with official ADRYD promotional display stand kit.',
    color: '#B4F000'
  },
  {
    id: 'community-referrals',
    number: '11',
    action: 'CONNECT',
    title: 'Rider Network Growth & Mentorship',
    iconName: 'Share2',
    tagline: 'Mentor the next generation of Riderpreneurs and earn sustained overrides',
    description: 'Introduce fellow gig workers, delivery riders, and electric scooter owners to the ADRYD Riderpreneur ecosystem. Guide them through their first campaigns and earn sustained mentorship bonuses.',
    activities: [
      'Sharing custom peer onboarding links with delivery riders',
      'Conducting new rider route walk-throughs and kit checks',
      'Mentoring junior riders through their Level 1–3 milestones',
      'Organizing regional hub meetups and safety workshops'
    ],
    earningModel: 'Direct referral bonus (₹1,000 per verified active rider) + 2% peer milestone override bonus for 90 days.',
    exampleScenario: 'Mentoring 4 fellow gig riders from your local hub into active brand promoters, receiving ₹4,000 upfront + monthly peer coaching overrides.',
    eligibility: 'Open to all riders once they achieve Level 2 (Bronze).',
    color: '#0A9BE0'
  }
];

export const CAREER_GROWTH_LADDER: CareerLevel[] = [
  {
    level: 1,
    badge: 'Starter',
    title: 'Fleet Initiate',
    experience: '0 - 30 Days',
    monthlyTarget: '15 Active Hours',
    color: '#94A3B8',
    description: 'Welcome to the ADRYD ecosystem. Complete your onboarding, master basic route safety, and initiate your first single-corridor brand promotion runs.',
    perks: [
      'Official ADRYD Rider Uniform & Cap kit',
      'Access to standard single-corridor campaign dispatches',
      'Personal Rider ID and digital wallet integration',
      'Real-time GPS ride logging and hourly stipend'
    ]
  },
  {
    level: 2,
    badge: 'Bronze',
    title: 'Brand Specialist',
    experience: '1 - 3 Months',
    monthlyTarget: '40 Active Hours',
    color: '#CD7F32',
    description: 'Unlock direct product sampling, instant QR pre-order bookings, and receive your personal Lifetime Digital Affiliate code.',
    perks: [
      'Eligibility for on-ground sampling campaigns',
      'Direct sales commission access (8-12%)',
      'Issuance of personal lifetime affiliate code (`AFF-XXXXX`)',
      'Docked micro-hub activation eligibility'
    ]
  },
  {
    level: 3,
    badge: 'Silver',
    title: 'Corridor Ambassador',
    experience: '3 - 6 Months',
    monthlyTarget: '75 Active Hours',
    color: '#E2E8F0',
    description: 'Qualified for synchronized flash convoys, premium night activations, and priority dispatch across high-demand commercial corridors.',
    perks: [
      'Multi-vehicle flash convoy eligibility (1.5x pay)',
      'Priority booking for weekend commercial hubs',
      'Higher direct sales commission tier (up to 15%)',
      'Access to ADRYD Creator Masterclass & video bounties'
    ]
  },
  {
    level: 4,
    badge: 'Gold',
    title: 'Senior Brand Partner',
    experience: '6 - 12 Months',
    monthlyTarget: '100 Active Hours',
    color: '#F4DE26',
    description: 'Collaborate directly with emerging D2C brand founders. Receive upgraded aerodynamic vehicle livery and smartphone stabilizer gear.',
    perks: [
      'Direct startup founder collaboration eligibility',
      'Smartphone gimbal & creator equipment stipend',
      'Dedicated multi-week brand retainers',
      'Peer referral mentorship override eligibility'
    ]
  },
  {
    level: 5,
    badge: 'Platinum',
    title: 'Fleet Marshall',
    experience: '12 - 18 Months',
    monthlyTarget: '120 Active Hours',
    color: '#0A9BE0',
    description: 'Lead local fleet convoys as road captain, oversee corridor safety compliance, and represent ADRYD at major regional trade exhibitions.',
    perks: [
      'Convoy Lead Captain surcharge (+25% hourly)',
      'High-profile corporate & festival activation priority',
      'Smartwatch health & telemetry bonus',
      'Quarterly performance apparel & accessory pack'
    ]
  },
  {
    level: 6,
    badge: 'Diamond',
    title: 'Master Promoter',
    experience: '18 - 24 Months',
    monthlyTarget: '140 Active Hours',
    color: '#38BDF8',
    description: 'Achieve elite status with continuous 4.9+ customer ratings. Unlock multi-city brand activation tours and enterprise retainers.',
    perks: [
      'Enterprise retainer assignments (guaranteed monthly base)',
      'Cross-city campaign tour invitations',
      'Comprehensive family health insurance coverage stipend',
      'Dedicated marketing manager support'
    ]
  },
  {
    level: 7,
    badge: 'Elite',
    title: 'Regional Captain',
    experience: '2 - 3 Years',
    monthlyTarget: '160 Active Hours',
    color: '#B4F000',
    description: 'Lead city-wide activation corridors, train new incoming batch cohorts, and qualify for sponsored domestic brand vacation experiences.',
    perks: [
      'Sponsored domestic brand vacation experience qualification',
      'City corridor leadership stipend',
      'Permanent 18% top-tier sales commission',
      'Advisory seat on Rider Safety & Welfare Board'
    ]
  },
  {
    level: 8,
    badge: 'Premium',
    title: 'Executive Ambassador',
    experience: '3 - 4 Years',
    monthlyTarget: 'Top 5% Performer',
    color: '#A855F7',
    description: 'Exclusive face of premier luxury and tech automotive campaigns. Co-design new activation routes and mentor regional team captains.',
    perks: [
      'Exclusive luxury & EV launch campaign priority',
      'Bespoke custom leather brand jacket & premium smart helmet',
      'Sponsored international brand showcase delegate eligibility',
      'Monthly executive performance stipend'
    ]
  },
  {
    level: 9,
    badge: 'Legend',
    title: 'Founding Veteran',
    experience: '4+ Years',
    monthlyTarget: 'Top 1% Lifetime',
    color: '#EC4899',
    description: 'An iconic pillar of the ADRYD movement. Receive lifetime revenue sharing from mentored cohorts and permanent brand ambassador tenure.',
    perks: [
      'Lifetime trailing network royalty pool share',
      'Fully sponsored annual all-inclusive vacation package',
      'Brand Executive advisory board participation',
      'Permanent recognition in the ADRYD Hall of Fame'
    ]
  },
  {
    level: 10,
    badge: 'Antique',
    title: 'Honorary Lifetime Fellow',
    experience: 'Lifetime Achievement',
    monthlyTarget: 'Honorary Mentor',
    color: '#F59E0B',
    description: 'The highest civilian distinction in the ADRYD ecosystem. Honorary lifetime status with advisory equity rights and legacy recognition.',
    perks: [
      'Honorary lifetime equity grant pool',
      'Permanent VIP pass to all national ADRYD & partner brand galas',
      'Gold-plated commemorative fleet plaque & trophy',
      'Named mentorship endowment for junior riders'
    ]
  }
];

export const SPECIAL_PROGRAMMES: SpecialProgramme[] = [
  {
    id: 'brand-ambassador',
    title: 'Brand Ambassador Programme',
    tagline: 'Exclusive long-term representation for visionary anchor brands',
    description: 'Select riders are paired with high-growth consumer brands for 3 to 12-month dedicated retainers. Ride exclusively with bespoke brand wrapping, custom team wear, and guaranteed baseline earnings.',
    iconName: 'Award',
    highlights: [
      'Guaranteed monthly base retainers + performance incentives',
      'Fully wrapped premium electric vehicle aesthetics',
      'Direct collaboration with brand marketing directors',
      'Exclusive launch event presence across premier venues'
    ],
    whoItIsFor: 'Level 4+ riders with impeccable punctuality, verified 4.9+ ratings, and polished customer interaction.'
  },
  {
    id: 'entrepreneur-collab',
    title: 'Entrepreneur Collaboration Hub',
    tagline: 'Connecting ground-level riders directly with startup founders',
    description: 'Bridge the gap between visionary D2C founders and real city streets. Provide grassroots market intelligence, real customer friction points, and instant product feedback directly to startup executives.',
    iconName: 'Briefcase',
    highlights: [
      'Bi-weekly advisory roundtables with startup founders',
      'Grassroots consumer sentiment and product testing briefs',
      'Special equity and profit-share incentives from select startups',
      'Direct line of communication with brand product managers'
    ],
    whoItIsFor: 'Curious, entrepreneurial riders who love testing new products and giving constructive market insights.'
  },
  {
    id: 'content-creator',
    title: 'Content Creator Accelerator',
    tagline: 'Transforming everyday riders into celebrated city influencers',
    description: 'We supply high-performing creative riders with smartphone gimbals, wireless lapel microphones, and professional video editing coaching to capture viral street moments for top brands.',
    iconName: 'Camera',
    highlights: [
      'Sponsored smartphone stabilizer and wireless microphone kit',
      'Weekly storytelling, framing, and viral pacing masterclasses',
      'Direct brand sponsorship bounties (₹500 - ₹2,500/video)',
      'Cross-promotion across ADRYD official social media channels'
    ],
    whoItIsFor: 'Riders passionate about photography, video editing, storytelling, and street-level social media.'
  },
  {
    id: 'rider-leadership',
    title: 'Rider Leadership & Welfare Council',
    tagline: 'Democratic peer representation shaping safety and policy',
    description: 'Elected rider leaders who represent their peers in route planning, safety equipment reviews, fair compensation audits, and community disputes. True bottom-up leadership.',
    iconName: 'ShieldCheck',
    highlights: [
      'Monthly leadership stipends and council allowances',
      'Direct monthly governance meetings with ADRYD founders',
      'Authority to approve new safety protocols and uniform designs',
      'Peer mentorship leadership across regional city hubs'
    ],
    whoItIsFor: 'Respected, seasoned riders with strong community ties, ethical integrity, and leadership instincts.'
  },
  {
    id: 'sponsored-travel',
    title: 'Brand Promotion Vacation Programme',
    tagline: 'Earn fully sponsored domestic & coastal holiday getaways',
    description: 'Top-tier campaign champions who consistently exceed performance benchmarks qualify for fully sponsored group travel experiences — blending scenic coastal rides with leisure and recognition.',
    iconName: 'Compass',
    highlights: [
      'All-expenses-paid 3-day getaways (Goa, Coorg, Pondicherry)',
      'Premium resort accommodations and team celebration dinners',
      'Scenic celebratory electric vehicle coastal motorcades',
      'Annual Grand Champion awards ceremony'
    ],
    whoItIsFor: 'Top 5% riders across annual campaign hours, safety audits, and customer feedback scores.'
  },
  {
    id: 'independent-affiliate',
    title: 'Independent Affiliate Business',
    tagline: 'Build and manage your own micro-fleet of promotional riders',
    description: 'Graduate from a solo rider to a micro-fleet entrepreneur. Recruit, train, and dispatch your own squad of 5 to 15 riders under your ADRYD agency umbrella and earn overrides.',
    iconName: 'TrendingUp',
    highlights: [
      'Sub-agency dashboard with fleet-wide telemetry and earnings',
      'Bulk vehicle leasing discounts via partner financiers',
      'Direct multi-corridor campaign dispatch rights',
      'Passive agency override commissions on all squad hours'
    ],
    whoItIsFor: 'Ambitious Level 6+ riders aiming to build a full-time sustainable logistics and advertising agency.'
  }
];

export const SKILL_CAREER_PATHWAYS: SkillCareerPath[] = [
  {
    skillLearned: 'On-Ground Brand Pitching',
    riderActivity: 'Direct consumer sampling & value propositions',
    futureCareerRole: 'Field Sales Executive / Account Representative',
    industry: 'FMCG & Consumer Tech'
  },
  {
    skillLearned: 'Street Video Capture & Editing',
    riderActivity: 'Short-form reel creation & street reactions',
    futureCareerRole: 'Social Media Producer / Content Strategist',
    industry: 'Digital Marketing Agencies'
  },
  {
    skillLearned: 'Dynamic Route Optimization',
    riderActivity: 'Peak traffic GPS corridor navigation',
    futureCareerRole: 'Fleet Dispatcher / Logistics Coordinator',
    industry: 'EV Fleet & Last-Mile Logistics'
  },
  {
    skillLearned: 'Customer Sentiment Reporting',
    riderActivity: 'Digital feedback logging & app surveys',
    futureCareerRole: 'Market Research Associate / Consumer Insights',
    industry: 'Consumer Research & Analytics'
  },
  {
    skillLearned: 'Team Convoy Synchronization',
    riderActivity: 'Leading multi-vehicle safety motorcades',
    futureCareerRole: 'Event Operations Lead / Logistics Supervisor',
    industry: 'Event Management & Brand Experiential'
  },
  {
    skillLearned: 'Affiliate Marketing & Funnel Tracking',
    riderActivity: 'QR code distribution & conversion optimization',
    futureCareerRole: 'Performance Marketing Specialist',
    industry: 'E-Commerce & D2C Growth'
  }
];

export const ONBOARDING_JOURNEY: OnboardingStep[] = [
  {
    step: 1,
    title: 'Apply in 2 Minutes',
    subtitle: 'Digital Application',
    duration: '2 Mins',
    description: 'Complete our simple online registration form with basic details, vehicle preference (own EV or rental), and preferred city corridors.'
  },
  {
    step: 2,
    title: 'Document Verification',
    subtitle: 'KYC & License',
    duration: '24 Hours',
    description: 'Upload your Aadhaar ID, valid Driving License, and vehicle registration papers (for own vehicles) through our secure onboarding desk.'
  },
  {
    step: 3,
    title: 'Vehicle Match or Inspection',
    subtitle: 'Fleet Certification',
    duration: 'Same Day',
    description: 'Bring your personal electric scooter for our standard 15-minute mounting check, or choose a low-deposit rental electric scooter from our fleet partners.'
  },
  {
    step: 4,
    title: 'Brand Kit Allocation',
    subtitle: 'Uniform & Accessories',
    duration: 'At Hub',
    description: 'Receive your official ADRYD branded gear: aerodynamic jacket, safety-certified helmet, weatherproof display bag, and smart ID card.'
  },
  {
    step: 5,
    title: 'App Setup & Lifetime ID',
    subtitle: 'Digital Activation',
    duration: 'Instant',
    description: 'Download the ADRYD Rider App, activate your unique Lifetime ID (`ADRYD-RXXXXX`), and link your bank account or UPI wallet for daily payouts.'
  },
  {
    step: 6,
    title: 'Etiquette & Safety Briefing',
    subtitle: 'Masterclass Onboarding',
    duration: '45 Mins',
    description: 'Watch our interactive digital module covering corridor etiquette, professional customer interaction, sampling hygiene, and defensive EV riding.'
  },
  {
    step: 7,
    title: 'Pilot Test Run',
    subtitle: 'Supervised Trial',
    duration: '1 Hour',
    description: 'Join a friendly senior rider marshall for a 60-minute corridor test run to verify GPS logging, photo submissions, and display illumination.'
  },
  {
    step: 8,
    title: 'First Paid Campaign Dispatch',
    subtitle: 'Start Earning',
    duration: 'Day 2',
    description: 'Accept your first official campaign booking, complete the corridor route, and see your initial earnings credited directly to your in-app wallet.'
  },
  {
    step: 9,
    title: 'Unlock Levels & Affiliate Perks',
    subtitle: 'Career Elevation',
    duration: 'Ongoing',
    description: 'Accumulate hours, earn high ratings, climb from Starter to Antique, and unlock direct founder collabs, vacations, and leadership bonuses.'
  }
];
