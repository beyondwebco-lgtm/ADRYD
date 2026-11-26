import { PolicyDocument } from './types';

export const riderTermsData: PolicyDocument = {
  id: 'rider-terms',
  title: 'Riderpreneur Terms',
  pageTitle: 'ADRYD Riderpreneur Terms and Conditions',
  slug: 'rider-terms',
  href: '/rider-terms',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Comprehensive operational terms governing participation in the ADRYD Riderpreneur Program, dual vehicle registration paths, verification requirements, independent partner status, road safety, and career progression.',
  sections: [
    {
      id: 'programme-overview',
      number: '6.1',
      title: 'Programme Overview',
      content: [
        'The ADRYD Riderpreneur Programme is a professional mobility and marketing ecosystem designed to empower electric vehicle riders to transform everyday urban travel into multi-stream income opportunities.',
        'Riders develop skills in street-level brand promotion, dynamic product showcasing, direct sales, QR commerce, digital affiliate marketing, and local entrepreneur collaboration.',
        'Participation is subject to qualification, operational readiness, corridor availability, and signed individual agreements.',
      ],
    },
    {
      id: 'registration-options',
      number: '6.2',
      title: 'Dual Vehicle Registration Paths',
      content: [
        'Eligible candidates may apply to join through two primary pathways:',
      ],
      subsections: [
        {
          id: 'own-vehicle',
          title: 'Path A: Own Electric Vehicle Registration',
          content: [
            'Riders who own a verified electric two-wheeler may register their vehicle for approved branding, showcasing boxes, and promotional runs.',
            'The vehicle must meet ADRYD roadworthiness, battery safety, and aesthetic standards.',
          ],
        },
        {
          id: 'rental-vehicle',
          title: 'Path B: Fleet Rental Partner Registration',
          content: [
            'Riders who do not own an electric scooter may explore rental options through ADRYD\'s approved commercial fleet partners, subject to fleet inventory and credit verification.',
            'Rental vehicle allocation is not guaranteed and remains contingent upon partner availability.',
          ],
        },
      ],
    },
    {
      id: 'verification-requirements',
      number: '6.3',
      title: 'Verification Requirements',
      content: [
        'Prior to assignment allocation, applicants must successfully complete verification, including:',
      ],
      bullets: [
        'Proof of age establishing minimum age of 18 years.',
        'Government-issued identity verification (Aadhaar, PAN, or equivalent).',
        'Valid driving licence appropriate for the vehicle class (where required under motor vehicle laws).',
        'Vehicle Registration Certificate (RC) and valid Third-Party Vehicle Insurance.',
        'Proof of address and active mobile telephone coordinates.',
        'Clear police background check or character declaration where required for sensitive campaigns.',
      ],
    },
    {
      id: 'nature-of-engagement',
      number: '6.4',
      title: 'Nature of Engagement & Legal Status',
      content: [
        'Registration with ADRYD establishes an independent partner relationship for promotional mobility assignments.',
        'Registration does not constitute a contract of permanent employment, guarantee full-time work, or establish a master-servant relationship.',
        'Nothing in these terms diminishes or excludes any statutory worker protections, social security entitlements, or welfare benefits that may lawfully apply under Indian gig worker regulations.',
      ],
    },
    {
      id: 'campaign-participation',
      number: '6.5',
      title: 'Campaign Participation & Opportunities',
      content: [
        'Approved Riderpreneurs may receive opportunities across 11 promotional verticals:',
        'Brand Promotion (mobile advertising & corridor visibility), Product Showcasing (illuminated rear display boxes), Direct Sales (street sampling & on-ground conversions), Social Media & Content Creation, Pre-Order Generation, Affiliate QR Marketing, Videography & Photography, Viral Street Stunts, Local Entrepreneur Collaborations, Dual-Rider Assisted Campaigns, and Location-Specific Blitzes.',
        'Campaign allocation is based on rider rating, reliability history, corridor familiarity, and campaign requirements.',
      ],
    },
    {
      id: 'earnings-structure',
      number: '6.6',
      title: 'Earnings Structure & Payment Clarity',
      content: [
        'Earnings may comprise daily campaign activation stipends, verified product sales commissions, affiliate pre-order bonuses, content creator bounties, and performance incentives.',
        'Prior to accepting each campaign run, riders receive full transparency regarding work scope, active hours, route, compensation rates, and disbursement schedules.',
        'Important notice: No fixed monthly income or minimum salary is guaranteed. Platform earning calculators and career ladder benchmarks represent illustrative projections based on consistent high performance.',
      ],
    },
    {
      id: 'vehicle-responsibilities',
      number: '6.7',
      title: 'Vehicle Care, Battery Safety & Maintenance',
      content: [
        'Own Vehicle Riders: Responsible for vehicle maintenance, periodic battery health inspections, tyre safety, and active insurance renewals.',
        'Rental Fleet Riders: Must adhere strictly to the terms of the applicable fleet partner lease, maintain daily charging discipline, report mechanical anomalies immediately, and exercise reasonable care against damage.',
      ],
    },
    {
      id: 'professional-conduct',
      number: '6.8',
      title: 'Professional Conduct & Brand Representation',
      content: [
        'Riders must represent client brands with dignity, courtesy, and high professional standards:',
      ],
      bullets: [
        'Wear approved, clean ADRYD uniforms, branded jackets, and DOT/ISI-certified helmets during campaigns.',
        'Communicate accurate, verified product information without making exaggerated or misleading claims.',
        'Respect public pedestrians, shopkeepers, and traffic wardens at all times.',
        'Strictly follow road safety guidelines, speed limits, and designated corridor parking zones.',
        'Safeguard customer privacy and never copy, distribute, or misuse consumer phone numbers.',
      ],
    },
    {
      id: 'partner-assisted',
      number: '6.10',
      title: 'Partner-Assisted Dual Rider Campaigns',
      content: [
        'Certain intensive product sampling or flyer distribution campaigns may utilize a two-person team (primary rider plus promotional assistant).',
        'Both participants must satisfy platform verification, safety protocols, and age requirements. Compensation and commission splits must be agreed upon in advance.',
      ],
    },
    {
      id: 'career-ladder',
      number: '6.11',
      title: '10-Tier Career Progression Framework',
      content: [
        'ADRYD proposes a 10-level merit-based career ladder: Starter, Bronze, Silver, Gold, Platinum, Diamond, Elite, Premium, Legend, and Antique.',
        'Progression is awarded based on verified active hours, campaign completion reliability, customer satisfaction ratings, training module completion, and clean safety records.',
        'Progression tiers do not constitute contractual promotions or guarantee higher fixed remuneration.',
      ],
    },
    {
      id: 'suspension-grievances',
      number: '6.12',
      title: 'Account Suspension & Review Process',
      content: [
        'Rider accounts may be temporarily suspended or permanently deactivated for severe infractions, including rash driving, unprovoked altercations, verified fraud or commission gaming, theft, or deliberate damage to partner displays.',
        'Riders maintain the right to appeal any suspension by submitting a written review request to grievance@adryd.com. Legitimate earned balances will be audited and disbursed in accordance with law.',
      ],
    },
  ],
};
