import { PolicyDocument } from './types';

export const cookieData: PolicyDocument = {
  id: 'cookie-policy',
  title: 'Cookie Policy',
  pageTitle: 'ADRYD Cookie Policy',
  slug: 'cookie-policy',
  href: '/cookie-policy',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Information regarding our use of cookies, local storage, session markers, and similar technologies to ensure platform functionality, remember user preferences, and maintain website security.',
  sections: [
    {
      id: 'what-are-cookies',
      number: '4.1',
      title: 'What Are Cookies?',
      content: [
        'Cookies and similar technologies (such as local web storage and session tokens) are small files stored on or accessed from your browser or device when you interact with the ADRYD website.',
        'They facilitate navigation, preserve user preferences, maintain session security, and provide diagnostic performance data.',
      ],
    },
    {
      id: 'types-of-technologies',
      number: '4.2',
      title: 'Categories of Technologies Used',
      content: [
        'The ADRYD website categorizes browser technologies into four clear functional types:',
      ],
      subsections: [
        {
          id: 'essential',
          title: '1. Strictly Essential Technologies',
          content: [
            'These technologies are indispensable for core website operations, form submissions, cryptographic security, load balancing, and accessibility. They cannot be deactivated without fundamentally breaking website navigation.',
            'Examples include CSRF tokens, Cloudflare DDoS defense markers (__cf_bm), and cookie preference state keys.',
          ],
        },
        {
          id: 'preferences',
          title: '2. Preference & Customization Technologies',
          content: [
            'Used to remember user-selected configurations, such as interface theme settings, dismissed alert banners, or regional viewing defaults.',
          ],
        },
        {
          id: 'analytics',
          title: '3. Diagnostic & Analytics Technologies',
          content: [
            'Aggregated metrics used to assess page load speeds, Core Web Vitals, navigation drop-off rates, and browser compatibility across mobile and desktop devices.',
            'These insights help optimize site performance without profiling individuals for commercial resale.',
          ],
        },
        {
          id: 'marketing',
          title: '4. Marketing & Attribution Technologies',
          content: [
            'Where implemented for authorized promotional tracking: technologies that measure campaign conversion efficacy, link affiliate referrals, and verify inbound partner traffic.',
          ],
        },
      ],
    },
    {
      id: 'cookie-management',
      number: '4.3',
      title: 'Managing Your Cookie Preferences',
      content: [
        'You have full control over non-essential technologies on our website.',
        'When visiting our website, you are presented with our Cookie Preferences control allowing you to Accept All, Reject Optional, or Customize granular categories.',
        'You can revisit or update your choices at any time by clicking the "Cookie Preferences" link located in our footer.',
        'Additionally, all major web browsers allow you to modify cookie handling in settings. Note that disabling essential cookies may degrade site performance.',
      ],
    },
    {
      id: 'third-party-technologies',
      number: '4.4',
      title: 'Third-Party Services and Analytics',
      content: [
        'We do not load invasive advertising trackers or surreptitious third-party surveillance scripts.',
        'Third-party cloud infrastructure (such as Cloudflare Pages) may set operational security cookies required to prevent denial-of-service attacks and ensure secure socket layer delivery.',
      ],
    },
    {
      id: 'consent-standards',
      number: '4.5',
      title: 'Consent and Transparency Commitments',
      content: [
        'In alignment with global privacy best practices and Indian data protection directives, non-essential tracking technologies do not execute until you provide explicit affirmative consent.',
        'We do not employ deceptive dark patterns, forced consents, or inaccessible preference interfaces.',
      ],
    },
  ],
};
