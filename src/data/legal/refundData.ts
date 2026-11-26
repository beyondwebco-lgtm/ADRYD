import { PolicyDocument } from './types';

export const refundData: PolicyDocument = {
  id: 'refund-policy',
  title: 'Cancellation and Refund Policy',
  pageTitle: 'ADRYD Cancellation and Refund Policy',
  slug: 'refund-policy',
  href: '/refund-policy',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Clear guidelines regarding campaign booking confirmations, customer-initiated cancellation timelines, production and mobilization cost deductions, ADRYD-initiated reschedulings, and refund processing procedures.',
  sections: [
    {
      id: 'booking-confirmation',
      number: '5.1',
      title: 'Campaign Booking & Confirmation',
      content: [
        'Campaign bookings become commercially binding only upon execution of a formal campaign agreement, mutual acceptance of the scope quotation, and fulfillment of agreed initial advance payment terms.',
        'Submitting a website enquiry, using our pricing calculator, or exchanging exploratory communications does not establish a payment obligation or guarantee vehicle allocation.',
      ],
    },
    {
      id: 'customer-cancellation',
      number: '5.2',
      title: 'Customer-Initiated Cancellation Framework',
      content: [
        'Brand partners or business clients wishing to cancel or reschedule a confirmed promotional campaign must submit a written cancellation notice through their designated account manager or via support@adryd.com.',
        'Refund eligibility is determined strictly on the basis of notice timing, operational expenses already incurred, custom production completed, and terms specified in the executed campaign contract.',
      ],
    },
    {
      id: 'pre-commencement-cancellation',
      number: '5.3',
      title: 'Cancellation Prior to Campaign Commencement',
      content: [
        'Where written cancellation is received before active on-ground deployment, refunds are computed after deducting verified, non-recoverable mobilization expenses:',
      ],
      bullets: [
        'Custom vinyl printing, vehicle wraps, and bespoke brand fabrication already manufactured.',
        'Custom rider apparel and uniform embroidery produced specifically for the campaign.',
        'Third-party corridor permits, municipal permissions, and venue access fees paid.',
        'Direct rider onboarding, briefing, and mobilization retainers disbursed for the reserved calendar slot.',
      ],
      subsections: [
        {
          id: 'schedule-tiers',
          title: 'Standard Notice Tiers (Subject to Specific Agreement)',
          content: [
            '15 or more days before campaign start: Full refund of campaign fees less verified custom fabrication costs.',
            '7 to 14 days before campaign start: 50% refund of campaign fee less verified production expenses.',
            'Fewer than 7 days before campaign start: Campaign fees are non-refundable due to reserved fleet schedules, unless rescheduled by mutual written agreement.',
          ],
        },
      ],
    },
    {
      id: 'post-commencement-cancellation',
      number: '5.4',
      title: 'Cancellation After Campaign Commencement',
      content: [
        'Once electric vehicles and promotional riders have commenced corridor operations, cancellations will be reconciled based on pro-rata days completed, verified collateral distribution, and remaining contractual obligations.',
        'Unconsumed balance fees may be credited toward future campaign slots or refunded as mutually agreed under the specific contract.',
      ],
    },
    {
      id: 'adryd-cancellation',
      number: '5.5',
      title: 'ADRYD-Initiated Cancellation or Rescheduling',
      content: [
        'If ADRYD is unable to deliver a confirmed campaign due to fleet stockouts, operational constraints, or municipal corridor closures, clients will be immediately offered:',
      ],
      bullets: [
        'Immediate rescheduling to alternative approved calendar dates or high-footfall corridors at no additional cost.',
        'An agreed alternative campaign format with comparable or superior audience reach.',
        'A full 100% refund of all fees paid for undelivered services.',
      ],
    },
    {
      id: 'refund-processing',
      number: '5.6',
      title: 'Refund Processing & Timelines',
      content: [
        'Approved refunds are processed through the original banking method, NEFT/RTGS, or verified payment gateway.',
        'Following formal mutual sign-off on cancellation and expense reconciliation, refunds are initiated within 7 to 10 business days.',
        'ADRYD does not impose arbitrary handling fees or undisclosed penalty surcharges.',
      ],
    },
    {
      id: 'vehicle-rental',
      number: '5.7',
      title: 'Vehicle Rental & Fleet Partner Deposits',
      content: [
        'For riders utilizing rental vehicles provided through third-party leasing or commercial fleet partners, security deposits, weekly rental charges, and vehicle return conditions are governed by the respective fleet partner lease agreements.',
        'Vehicle return inspections and deposit refund timelines are settled directly in accordance with the executed vehicle lease contract.',
      ],
    },
    {
      id: 'affiliate-commission-reversal',
      number: '5.8',
      title: 'Affiliate & Commission Adjustments',
      content: [
        'Where promotional commissions have been conditionally credited for customer orders that are subsequently cancelled, refunded, rejected for fraud, or returned during statutory return windows, corresponding commission amounts will be reconciled and adjusted in accordance with our Affiliate and Commission Policy.',
      ],
    },
  ],
};
