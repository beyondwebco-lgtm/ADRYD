import { PolicyDocument } from './types';

export const partnerTermsData: PolicyDocument = {
  id: 'partner-terms',
  title: 'Entrepreneur and Brand Partner Terms',
  pageTitle: 'ADRYD Entrepreneur and Brand Partner Terms',
  slug: 'partner-terms',
  href: '/partner-terms',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Commercial terms governing brand sponsors, local businesses, direct-to-consumer entrepreneurs, and fleet operators collaborating with ADRYD for mobile advertising, product showcasing, and retail activations.',
  sections: [
    {
      id: 'business-participation',
      number: '7.1',
      title: 'Business Participation & Verification',
      content: [
        'ADRYD provides an electric mobility marketing and product distribution network connecting enterprises, retail brands, and innovative entrepreneurs directly with urban audiences.',
        'Participation as a Brand Partner or Entrepreneur is subject to business verification, product safety suitability, and mutual execution of a formal commercial campaign agreement.',
      ],
    },
    {
      id: 'product-eligibility',
      number: '7.2',
      title: 'Product Eligibility & Compliance Standards',
      content: [
        'Entrepreneurs and brands showcasing products through ADRYD mobile displays, QR ordering, or sampling blitzes must guarantee that all goods and services:',
      ],
      bullets: [
        'Are fully lawful, genuine, and approved for commercial sale under applicable Indian laws.',
        'Comply with applicable statutory standards (FSSAI for food and beverages, CDSCO for cosmetics, BIS/ISI for electrical goods).',
        'Carry truthful packaging, MRP labelling, expiry details, and manufacturer declarations.',
        'Do not infringe upon any third-party patents, copyrights, trademarks, or proprietary rights.',
        'Do not encompass banned substances, tobacco, narcotics, hazardous chemicals, or restricted adult goods.',
      ],
    },
    {
      id: 'product-information',
      number: '7.3',
      title: 'Accuracy of Product Information',
      content: [
        'Brand partners bear exclusive legal responsibility for the veracity of product specifications, pricing, warranty coverage, ingredients, and customer usage instructions supplied to ADRYD.',
        'Riders and brand ambassadors will be briefed using only partner-provided factual collateral; partners must not instruct riders to make unsupported health, performance, or financial claims.',
      ],
    },
    {
      id: 'campaign-materials',
      number: '7.4',
      title: 'Campaign Media Collateral & Licencing',
      content: [
        'Brand partners must own or possess valid commercial licences for all trademarks, logos, audio tracks, promotional videos, and graphics delivered for vehicle wraps or digital showcases.',
        'Partners grant ADRYD a limited, royalty-free licence to display such assets along agreed corridors during the campaign term and feature campaign photos in business case studies.',
      ],
    },
    {
      id: 'campaign-deliverables',
      number: '7.5',
      title: 'Campaign Scope & Performance Expectations',
      content: [
        'Each campaign agreement will delineate: fleet size (single rider, 3-rider cluster, or 10+ convoy), scheduled operational hours, targeted commercial corridors, display specifications, and reporting cadence.',
        'Performance Notice: ADRYD guarantees execution of scheduled hours, corridor presence, and verified rider attendance. ADRYD does not guarantee specific sales volumes, minimum conversion figures, or viral social media metrics unless explicitly agreed under a customized performance tier.',
      ],
    },
    {
      id: 'sales-fulfilment',
      number: '7.6',
      title: 'Direct Sales, Pre-Orders & Seller of Record',
      content: [
        'Where ADRYD facilitates on-ground QR purchases, instant sampling, or pre-orders, the campaign agreement establishes legal responsibilities:',
      ],
      bullets: [
        'The participating brand or entrepreneur remains the primary Seller of Record for all consumer purchases.',
        'The merchant is solely responsible for product warranty, return processing, defect rectification, and customer service.',
        'ADRYD acts solely as the promotional showcase and promotional mobility facilitator.',
      ],
    },
    {
      id: 'commission-terms',
      number: '7.7',
      title: 'Commission Structures & Settlement Terms',
      content: [
        'Where promotional arrangements include sales commission or pre-order bounties, commission percentages, attribution criteria, return settlement windows, and reconciliation timelines will be explicitly codified in the contract.',
      ],
    },
    {
      id: 'fleet-partners',
      number: '7.8',
      title: 'Commercial Fleet & Vehicle Rental Partners',
      content: [
        'Fleet owners providing electric scooters for ADRYD campaigns must ensure vehicles maintain continuous commercial fitness certificates, valid road insurance, factory battery safety integrity, and regular maintenance records.',
        'Vehicle lease contracts with riders must be clear, transparent, and compliant with motor vehicle leasing regulations.',
      ],
    },
    {
      id: 'prohibited-campaigns',
      number: '7.9',
      title: 'Prohibited Campaigns & Right of Rejection',
      content: [
        'ADRYD reserves the unconditional right to reject, halt, or dismantle any campaign that features deceptive claims, violates public decency, generates safety hazards, or contravenes municipal advertising restrictions.',
      ],
    },
  ],
};
