export interface LegalPolicyMeta {
  id: string;
  title: string;
  slug: string;
  href: string;
  category: 'General' | 'Operations' | 'Partnerships' | 'Governance';
  shortDescription: string;
  lastUpdated: string;
  version: string;
}

export const LEGAL_CONFIG = {
  // Legal Entity Details (Pending final formal incorporation certificate validation)
  entityName: 'ADRYD Mobility Technologies',
  brandName: 'ADRYD',
  platformName: 'ADRYD Platform & Riderpreneur Network',
  
  // Official Addresses
  registeredOffice: 'Knowledge City, HITEC City, Hyderabad, Telangana 500081, India',
  correspondenceAddress: 'Knowledge City, HITEC City, Hyderabad, Telangana 500081, India',
  
  // Official Communication Channels
  supportEmail: 'support@adryd.com',
  enquiriesEmail: 'enquiries@adryd.com',
  privacyEmail: 'privacy@adryd.com',
  grievanceEmail: 'grievance@adryd.com',
  legalEmail: 'legal@adryd.com',
  phone: '+91 40 6824 5500',
  
  // Grievance Officer (Under Information Technology Act, 2000 & Digital Personal Data Protection Act, 2023)
  grievanceOfficer: {
    title: 'Grievance & Data Protection Officer',
    organization: 'ADRYD Mobility Technologies',
    address: 'Knowledge City, HITEC City, Hyderabad, Telangana 500081, India',
    email: 'grievance@adryd.com',
    responseTime: '30 business days (acknowledgement within 48 hours)',
  },

  // Document & Framework Versioning
  effectiveDate: 'November 26, 2026',
  frameworkVersion: 'v1.0 (Comprehensive Legal & Operational Policies Draft)',
  governingLaw: 'Applicable laws of India; Jurisdiction of competent courts in Hyderabad, Telangana',
  
  // Publication Status Notice
  legalDisclaimerNotice:
    'ADRYD is an early-stage electric mobility and brand activation platform operating pilot initiatives in Hyderabad, Telangana. Proposed commercial features, career progression levels, affiliate commissions, and tech systems are subject to operational readiness, verified eligibility, and signed commercial agreements.',
  
  // Master Directory of the 10 Policies
  policies: [
    {
      id: 'terms',
      title: 'Terms and Conditions',
      slug: 'terms',
      href: '/terms',
      category: 'General',
      shortDescription: 'Core platform rules, eligibility, intellectual property, and user responsibilities.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      slug: 'privacy',
      href: '/privacy',
      category: 'General',
      shortDescription: 'Collection, use, protection, and rights concerning personal and campaign data.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'cookie-policy',
      title: 'Cookie Policy',
      slug: 'cookie-policy',
      href: '/cookie-policy',
      category: 'General',
      shortDescription: 'Use of essential cookies, preferences, and tracking management.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'refund-policy',
      title: 'Cancellation and Refund Policy',
      slug: 'refund-policy',
      href: '/refund-policy',
      category: 'Operations',
      shortDescription: 'Terms governing booking cancellation, mobilised expenses, and refunds.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'rider-terms',
      title: 'Riderpreneur Terms',
      slug: 'rider-terms',
      href: '/rider-terms',
      category: 'Partnerships',
      shortDescription: 'Rider engagement, vehicle options, safety conduct, and career progression rules.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'partner-terms',
      title: 'Entrepreneur and Brand Partner Terms',
      slug: 'partner-terms',
      href: '/partner-terms',
      category: 'Partnerships',
      shortDescription: 'Merchant obligations, campaign materials, product safety, and fleet rules.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'affiliate-policy',
      title: 'Affiliate and Commission Policy',
      slug: 'affiliate-policy',
      href: '/affiliate-policy',
      category: 'Operations',
      shortDescription: 'Attribution mechanics, tracking IDs, eligible sales, and prohibited tactics.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'rewards-policy',
      title: 'Rewards and Career Progression Policy',
      slug: 'rewards-policy',
      href: '/rewards-policy',
      category: 'Operations',
      shortDescription: '10-level ladder, merit criteria, recognition awards, and travel rules.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'safety-guidelines',
      title: 'Safety and Community Guidelines',
      slug: 'safety-guidelines',
      href: '/safety-guidelines',
      category: 'Governance',
      shortDescription: 'Road safety, display specifications, public space etiquette, and reporting.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      slug: 'disclaimer',
      href: '/disclaimer',
      category: 'General',
      shortDescription: 'No guaranteed income, illustrative calculator notice, and concept disclosures.',
      lastUpdated: 'November 26, 2026',
      version: '1.0',
    },
  ] as LegalPolicyMeta[],
};
