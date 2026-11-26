import { PolicyDocument } from './types';

export const privacyData: PolicyDocument = {
  id: 'privacy',
  title: 'Privacy Policy',
  pageTitle: 'ADRYD Privacy Policy',
  slug: 'privacy',
  href: '/privacy',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Comprehensive explanation of how ADRYD collects, processes, stores, discloses, and safeguards personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable Indian data protection standards.',
  sections: [
    {
      id: 'introduction',
      number: '3.1',
      title: 'Introduction',
      content: [
        'ADRYD respects the privacy and confidentiality of individuals who visit our website, submit campaign inquiries, apply as riders, partner as entrepreneurs, or engage with our services.',
        'This Privacy Policy outlines how personal and commercial data is collected, used, stored, transferred, and protected by ADRYD Mobility Technologies.',
        'We process personal data in strict compliance with applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023 (DPDPA), the Information Technology Act, 2000, and related rules as they enter into force.',
      ],
    },
    {
      id: 'information-collected',
      number: '3.2',
      title: 'Information We Collect',
      content: [
        'The categories of information collected depend upon the specific nature of your interaction with the ADRYD platform:',
      ],
      subsections: [
        {
          id: 'personal-info',
          title: 'General Contact & Inquirer Information',
          content: [
            'Full name, business email address, active mobile telephone number, city or geographic zone, communication preferences, and specific details voluntarily submitted in contact or enquiry forms.',
          ],
        },
        {
          id: 'rider-info',
          title: 'Rider Registration Information',
          content: [
            'Where necessary for approved onboarding into commercial campaigns: verified government identity details (such as Aadhaar or PAN where lawfully mandated), proof of age (18+ requirement), driving licence details, vehicle registration certificate (RC), proof of vehicle insurance, profile photograph, emergency contact details, and vehicle ownership or lease documentation.',
            'Important safeguard: Formal document collection takes place only when secure onboarding infrastructure is active; unnecessary document hoarding is strictly prohibited.',
          ],
        },
        {
          id: 'entrepreneur-info',
          title: 'Entrepreneur and Brand Information',
          content: [
            'Entity or business name, designated contact person, official communication coordinates, product descriptions, promotional collateral, campaign geographic targets, and GST/PAN credentials for tax invoicing purposes.',
          ],
        },
        {
          id: 'campaign-telemetry',
          title: 'Campaign Performance and Telemetry Information',
          content: [
            'Corridor route completion logs, scheduled active hours, flyer distribution counters, verified product demo numbers, and customer enquiry counts.',
          ],
        },
        {
          id: 'technical-logs',
          title: 'Technical Diagnostic Logs',
          content: [
            'Internet Protocol (IP) address, browser client software, device architecture, operating system, timestamped session metrics, and security diagnostic logs collected for fraud prevention and infrastructure stability.',
          ],
        },
        {
          id: 'financial-records',
          title: 'Financial & Transaction Records',
          content: [
            'Bank account details for approved commission and campaign rider payouts, payment receipt tokens, GST-compliant invoice records, and verified transaction IDs. Card numbers or sensitive payment passwords are never stored on ADRYD servers and are handled exclusively by PCI-DSS compliant payment gateways.',
          ],
        },
      ],
    },
    {
      id: 'location-information',
      number: '3.3',
      title: 'Location Information and Telemetry',
      content: [
        'Certain campaign operational features require route tracking for specific, legitimate, and disclosed purposes:',
      ],
      bullets: [
        'Verifying rider presence along designated commercial advertising corridors.',
        'Documenting completed promotional campaign hours.',
        'Ensuring road safety and dispatching assistance during breakdowns or emergencies.',
        'Generating aggregated, non-personally identifiable campaign heatmaps for brand clients.',
      ],
      subsections: [
        {
          id: 'tracking-limits',
          title: 'Strict Operational Boundaries',
          content: [
            'Location telemetry is activated solely during scheduled, active campaign hours.',
            'Continuous tracking outside scheduled commercial campaigns is strictly prohibited.',
            'Riders receive clear disclosures regarding when tracking is active, the duration of tracking, and its exact operational scope.',
          ],
        },
      ],
    },
    {
      id: 'purpose-of-processing',
      number: '3.4',
      title: 'How We Use Information',
      content: [
        'Personal and commercial data is processed exclusively for explicit, legitimate business purposes:',
      ],
      bullets: [
        'Responding promptly to campaign inquiries and partnership submissions.',
        'Evaluating eligibility and onboarding riders and commercial partners.',
        'Coordinating route scheduling, vehicle readiness, and apparel distribution.',
        'Administering verified earnings, commission disbursements, and statutory tax deductions.',
        'Delivering aggregated campaign verification analytics to brand sponsors.',
        'Enhancing website reliability, user interface accessibility, and network security.',
        'Investigating security anomalies, fraud, and unauthorised platform manipulation.',
        'Complying with statutory reporting requirements under applicable Indian laws.',
      ],
    },
    {
      id: 'consent-framework',
      number: '3.5',
      title: 'Consent and Lawful Processing',
      content: [
        'Where consent serves as the primary lawful basis for processing, ADRYD presents clear, unbundled notices detailing what is collected, why it is needed, and how consent may be managed.',
        'Consent is obtained through affirmative, voluntary action (such as an unchecked checkbox).',
        'Users may withdraw consent at any time by contacting our Privacy Desk. Withdrawal takes effect prospectively and does not invalidate prior lawful processing.',
      ],
    },
    {
      id: 'data-sharing',
      number: '3.6',
      title: 'Information Sharing and Disclosures',
      content: [
        'Personal information is shared strictly on a need-to-know basis with trusted operational partners:',
      ],
      bullets: [
        'Approved brand partners receive aggregated campaign analytics and verified delivery metrics.',
        'Fleet and vehicle rental partners receive verified registration tokens necessary for vehicle dispatch.',
        'Cloud hosting and database infrastructure providers operating under strict confidentiality agreements.',
        'Authorised payment aggregators and banking partners for processing approved disbursements.',
        'Legal, compliance, and accounting advisors assisting with statutory governance.',
        'Law enforcement or government regulatory authorities where mandated by lawful court orders.',
      ],
      subsections: [
        {
          id: 'no-sale',
          title: 'No Data Brokerage',
          content: [
            'ADRYD does not sell, rent, or trade individual customer contact records or rider profiles to third-party data brokers or predatory marketing networks.',
          ],
        },
      ],
    },
    {
      id: 'hosting-infrastructure',
      number: '3.7',
      title: 'Cloud Infrastructure and Storage Location',
      content: [
        'ADRYD leverages globally distributed, high-security infrastructure (including Cloudflare Pages, edge networks, and verified Indian data center nodes) to host web assets and manage platform data.',
        'Where data transfers occur, we implement contractual clauses and security safeguards aligned with Indian cross-border transfer regulations.',
      ],
    },
    {
      id: 'retention',
      number: '3.8',
      title: 'Data Retention Schedule',
      content: [
        'Personal data is retained only for the duration necessary to fulfill the specific operational purposes for which it was gathered, or as mandated by statutory accounting, tax, and dispute resolution guidelines.',
        'Inquiry records: Retained for up to 24 months to support campaign planning follow-ups.',
        'Rider and Partner contractual records: Retained for the active duration of engagement plus 7 years to comply with statutory commercial and tax requirements.',
        'Technical diagnostic logs: Retained for 90 to 180 days before automated deletion.',
        'Upon expiry of retention mandates, data is securely erased or rendered permanently anonymised.',
      ],
    },
    {
      id: 'data-security',
      number: '3.9',
      title: 'Data Security Measures',
      content: [
        'ADRYD implements robust technical and organisational security safeguards including:',
      ],
      bullets: [
        'End-to-end TLS 1.3 encryption across all public web and API endpoints.',
        'Role-based access controls (RBAC) restricting document access to authorized personnel.',
        'Strict least-privilege principles and multi-factor authentication for administrative tools.',
        'Automated vulnerability scanning, rate limiting, and web application firewall protection.',
        'Secure tokenization of payment records via compliant third-party gateways.',
      ],
    },
    {
      id: 'user-rights',
      number: '3.10',
      title: 'Your Privacy Rights (Under DPDP Act)',
      content: [
        'In accordance with applicable data protection legislation, data principals hold the following rights:',
      ],
      bullets: [
        'Right to Access: Request a summary of personal data being processed and third-party disclosures.',
        'Right to Correction: Request correction of outdated, incomplete, or inaccurate records.',
        'Right to Erasure: Request deletion of personal data when the original processing purpose is complete.',
        'Right to Grievance Redressal: File a privacy grievance with our designated Grievance Officer.',
        'Right to Nominate: Nominate an individual to exercise privacy rights in the event of death or incapacity.',
      ],
    },
    {
      id: 'marketing-choices',
      number: '3.11',
      title: 'Marketing Communications',
      content: [
        'Promotional announcements, campaign insights, and newsletters are dispatched only to users who have given separate affirmative consent.',
        'Recipients may unsubscribe anytime using the direct link provided in messages or by emailing privacy@adryd.com.',
        'Transactional notifications directly related to active campaigns or security advisories will continue.',
      ],
    },
    {
      id: 'children',
      number: '3.12',
      title: 'Children\'s Privacy',
      content: [
        'The ADRYD platform and commercial Riderpreneur opportunities are strictly intended for individuals aged 18 years and older.',
        'We do not knowingly solicit or collect personal information from minors. If inadvertent submission is detected, such data is promptly deleted.',
      ],
    },
    {
      id: 'photography-media',
      number: '3.13',
      title: 'Photography and Videography in Public Campaigns',
      content: [
        'During street-level brand activations, riders or media teams may capture promotional photography and reels for campaign verification and social showcases.',
        'Teams are instructed to respect public privacy, avoid capturing sensitive private activities, and secure explicit release consent where individuals are prominently featured.',
      ],
    },
    {
      id: 'breach-protocol',
      number: '3.14',
      title: 'Personal Data Breach Protocol',
      content: [
        'In the event of a verified security incident affecting personal data, ADRYD will take immediate containment measures, evaluate severity, and notify affected individuals and the Data Protection Board of India in accordance with statutory guidelines.',
      ],
    },
    {
      id: 'grievance-contact',
      number: '3.15',
      title: 'Privacy Desk & Grievance Contact',
      content: [
        'For privacy inquiries, rights requests, data corrections, or grievances, please contact our designated officer:',
        'Grievance & Data Protection Officer',
        'ADRYD Mobility Technologies',
        'Knowledge City, HITEC City, Hyderabad, Telangana 500081, India',
        'Email: privacy@adryd.com / grievance@adryd.com',
        'Formal acknowledgements are issued within 48 hours; substantive responses are provided within statutory timelines.',
      ],
    },
  ],
};
