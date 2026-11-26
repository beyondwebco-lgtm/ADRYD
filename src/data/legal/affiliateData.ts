import { PolicyDocument } from './types';

export const affiliateData: PolicyDocument = {
  id: 'affiliate-policy',
  title: 'Affiliate and Commission Policy',
  pageTitle: 'ADRYD Affiliate and Commission Policy',
  slug: 'affiliate-policy',
  href: '/affiliate-policy',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Rules governing affiliate identifiers, QR code attribution mechanics, commission eligibility standards, payout schedules, tax compliance, and prohibited promotional practices across the ADRYD network.',
  sections: [
    {
      id: 'programme-overview',
      number: '8.1',
      title: 'Affiliate Programme Overview',
      content: [
        'The ADRYD Affiliate and Commission Ecosystem enables verified Riderpreneurs, brand promoters, and digital creators to earn performance commissions by promoting participating brand products through approved tracking links, dynamic QR display codes, and unique referral identifiers.',
        'Participation is subject to platform onboarding, identity verification, and adherence to transparent marketing standards.',
      ],
    },
    {
      id: 'affiliate-identity',
      number: '8.2',
      title: 'Unique Affiliate Identifier & Lifetime ID Concept',
      content: [
        'Eligible participants receive a unique digital Affiliate ID linked to their verified profile.',
        'The term "Lifetime Affiliate ID" refers to the participant\'s continuous, persistent identifier within the ADRYD database while their account remains in good standing.',
        'Important Clarification: A Lifetime Affiliate ID does not guarantee perpetual passive income, static commission rates, or guaranteed product availability. Commission earnings are strictly contingent upon active, verified, qualifying consumer sales.',
      ],
    },
    {
      id: 'eligible-transactions',
      number: '8.3',
      title: 'Eligible & Qualifying Transactions',
      content: [
        'A transaction qualifies for commission credit when all following conditions are satisfied:',
      ],
      bullets: [
        'The order is initiated via an approved affiliate link, scanned vehicle QR code, or verified promoter promo code.',
        'Full customer payment is received, cleared, and authenticated through the authorized payment processor.',
        'The purchase involves genuine, non-self-referred end-consumer demand.',
        'The order passes the merchant\'s statutory return and cancellation window without being returned, refunded, or chargebacked.',
        'No deceptive, robotic, or spam marketing methods were employed in generating the conversion.',
      ],
    },
    {
      id: 'attribution-mechanics',
      number: '8.4',
      title: 'Attribution Rules & Tracking Mechanics',
      content: [
        'Standard Attribution Window: Unless specifically configured otherwise for a specific brand campaign, cookies or session attribution tokens operate on a default 30-day window.',
        'Last-Touch Attribution: Where a customer encounters multiple promotional touchpoints, commission is attributed to the last verified promotional code or scan utilized during checkout.',
        'Offline QR Scans: Vehicle and showcase display QR codes direct buyers to dedicated mobile landing pages that automatically embed the rider\'s unique promoter token.',
      ],
    },
    {
      id: 'commission-statuses',
      number: '8.5',
      title: 'Commission Ledger & Status Definitions',
      content: [
        'Rider and promoter dashboards categorize commissions into five distinct states:',
      ],
      bullets: [
        'Pending: Conversion recorded; awaiting merchant fulfillment and return-window clearance.',
        'Approved: Order confirmed and passed return window; scheduled for monthly payout cycle.',
        'Paid: Commission successfully disbursed to the participant\'s verified bank account.',
        'Disputed: Attribution under manual operational review due to conflicting claims or verification requests.',
        'Reversed: Order was cancelled, returned, refunded, or identified as fraudulent.',
      ],
    },
    {
      id: 'payout-conditions',
      number: '8.6',
      title: 'Payout Schedules & Tax Withholding (TDS)',
      content: [
        'Payout Cadence: Approved commissions are reconciled and disbursed on a monthly cycle (typically by the 10th of each following calendar month).',
        'Minimum Payout Threshold: The minimum cumulative approved balance required for automated payout disbursement is ₹500. Balances below this threshold roll over into the next cycle.',
        'Tax Compliance (TDS): Tax Deducted at Source (TDS) under Section 194H of the Indian Income Tax Act (or other applicable statutory provisions) will be deducted from commission disbursements where mandated by law.',
      ],
    },
    {
      id: 'prohibited-practices',
      number: '8.7',
      title: 'Prohibited Practices & Fraud Prevention',
      content: [
        'Participants are strictly barred from the following manipulative tactics:',
      ],
      bullets: [
        'Self-Purchases: Using one\'s own affiliate code to purchase goods for personal use to claim discounts or commissions.',
        'Cookie Stuffing & Forced Clicks: Using pop-unders, hidden iframes, or automated scripts to trigger attribution.',
        'Deceptive Marketing: Making false claims regarding product benefits, unauthorized discounts, or fabricated endorsements.',
        'Spam Messaging: Sending unsolicited bulk SMS, WhatsApp messages, or email blasts.',
        'Brand Bidding: Bidding on registered ADRYD or client brand trademarks on search engine advertising networks without written authorization.',
      ],
    },
    {
      id: 'referral-structure',
      number: '8.8',
      title: 'Referral Incentives & Multi-Tier Clarity',
      content: [
        'ADRYD may offer one-time referral bounties when an existing rider successfully introduces an eligible new electric vehicle rider who completes onboarding and required campaign hours.',
        'Anti-Pyramid Commitment: ADRYD operates strictly as a performance-driven mobility marketing network. Income is derived entirely from verified campaign service delivery and authentic product sales. ADRYD does not operate multi-level marketing (MLM), pyramid schemes, or recruitment-fee models.',
      ],
    },
    {
      id: 'affiliate-disclosure',
      number: '8.9',
      title: 'Mandatory Commercial Disclosure',
      content: [
        'In compliance with advertising standards and consumer protection guidelines, affiliates must visibly disclose that they may earn a commission from purchases made via their shared links or QR codes.',
      ],
    },
    {
      id: 'disputes',
      number: '8.10',
      title: 'Commission Reconciliation & Disputes',
      content: [
        'In the event of an attribution dispute or uncredited commission, affiliates may raise a reconciliation ticket via grievance@adryd.com within 30 days of the transaction, providing purchase invoice or scan proof for review.',
      ],
    },
  ],
};
