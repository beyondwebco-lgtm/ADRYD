import { PolicyDocument } from './types';

export const rewardsData: PolicyDocument = {
  id: 'rewards-policy',
  title: 'Rewards and Career Progression Policy',
  pageTitle: 'ADRYD Rewards and Career Progression Policy',
  slug: 'rewards-policy',
  href: '/rewards-policy',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Framework outlining ADRYD\'s 10-tier professional rider progression, performance evaluation criteria, milestone recognition perks, sponsored travel programmes, and transparency conditions.',
  sections: [
    {
      id: 'purpose',
      number: '9.1',
      title: 'Purpose & Philosophy',
      content: [
        'ADRYD believes in dignifying and professionalizing the gig mobility workforce. Our Rewards and Career Progression Policy establishes a merit-based roadmap allowing electric vehicle riders to evolve from basic delivery couriers into skilled brand promoters, team captains, and entrepreneurial partners.',
        'The programme recognizes dedication, highway safety, campaign punctuality, sales conversion excellence, and customer respect.',
      ],
    },
    {
      id: 'progression-levels',
      number: '9.2',
      title: 'The 10 Career Progression Levels',
      content: [
        'Riders advance through 10 structured milestone levels based on cumulative experience and evaluated performance:',
      ],
      bullets: [
        '1. Starter: Initial onboarding tier; completion of orientation, vehicle safety checks, and first campaign hours.',
        '2. Bronze: Verified completion of 50+ active corridor hours and positive merchant feedback.',
        '3. Silver: Demonstrated competency in product showcasing and QR customer engagement (150+ hours).',
        '4. Gold: Consistent campaign delivery, verified product conversions, and flawless attendance (300+ hours).',
        '5. Platinum: Senior promotional rider capable of leading dual-rider campaigns and training cohorts (600+ hours).',
        '6. Diamond: Elite brand ambassador tier eligible for high-profile multi-corridor brand blitzes (1,000+ hours).',
        '7. Elite: Proven leadership in corridor coordination, high conversion metrics, and content creation (1,500+ hours).',
        '8. Premium: Master promoter collaborating directly on new brand launches and entrepreneur testbeds (2,200+ hours).',
        '9. Legend: Top-tier community icon mentoring regional fleets, eligible for sponsored national activations (3,000+ hours).',
        '10. Antique: Highest honorary designation honoring exceptional sustained loyalty, zero safety infractions, and community leadership.',
      ],
    },
    {
      id: 'evaluation-criteria',
      number: '9.3',
      title: 'Performance Assessment Factors',
      content: [
        'Level advancement and reward eligibility are audited through measurable, fair criteria:',
      ],
      bullets: [
        'Active Campaign Hours: Verified via corridor telemetry and campaign check-ins.',
        'Punctuality & Reliability: Timely reporting for scheduled brand convoys.',
        'Customer & Brand Ratings: Qualitative feedback from brand clients and pedestrians.',
        'Road Safety Record: Zero accidents, zero rash driving violations, and strict helmet compliance.',
        'Skill Development: Completion of ADRYD Rider Academy modules (communication, sales, product handling).',
        'Ethical Conduct: Strict adherence to customer privacy and honest brand representation.',
      ],
    },
    {
      id: 'recognition-perks',
      number: '9.4',
      title: 'Recognition Awards & Tangible Rewards',
      content: [
        'Upon achieving verified milestone levels, eligible riders may receive sponsored recognition items including:',
      ],
      bullets: [
        'Premium branded riding gear (high-visibility all-weather jackets, ISI-certified smart helmets).',
        'Specialized aerodynamic delivery backpacks and weather-sealed smartphone mounts.',
        'Mobile phone accessories, portable power banks, and maintenance toolkits.',
        'Milestone trophies, certificates of commercial marketing accomplishment, and digital badges.',
        'First-access priority invitations for premium, higher-stipend corporate brand campaigns.',
      ],
    },
    {
      id: 'sponsored-travel',
      number: '9.5',
      title: 'Sponsored Promotional Travel Programme',
      content: [
        'Top-performing Riderpreneurs in advanced tiers may be selected to represent ADRYD and sponsor brands during outstation brand tours, national EV exhibitions, and international promotional retreats.',
        'Programme Scope: Travel coverage typically includes economy round-trip transit, approved hotel lodging, daily meal allowances, and campaign assignment stipends.',
        'Eligibility & Notice: Sponsored travel is subject to verified commercial brand sponsorship, visa clearances (for international delegations), clean safety records, and executed travel agreements. Achievement of a career tier does not create an unconditional legal right to travel.',
      ],
    },
    {
      id: 'reward-conditions',
      number: '9.6',
      title: 'Reward Conditions & Program Rules',
      content: [
        'Rewards and travel incentives are non-transferable and may not be exchanged for cash equivalent unless explicitly structured as a cash bonus.',
        'Recipients are responsible for any personal tax liabilities that may arise in accordance with Indian tax regulations.',
        'ADRYD reserves the right to withhold awards in instances of ongoing disciplinary reviews, active fraud investigations, or safety violations.',
      ],
    },
    {
      id: 'program-modifications',
      number: '9.7',
      title: 'Programme Evolution & Notice',
      content: [
        'ADRYD may periodically adapt milestone thresholds, reward items, and travel destinations based on operational budgets, brand sponsorship partnerships, and regional growth.',
        'Modifications will not retroactively invalidate awards or tiers legitimately earned under prior published terms.',
      ],
    },
  ],
};
