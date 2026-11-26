export * from './types';
export * from './termsData';
export * from './privacyData';
export * from './cookieData';
export * from './refundData';
export * from './riderTermsData';
export * from './partnerTermsData';
export * from './affiliateData';
export * from './rewardsData';
export * from './safetyData';
export * from './disclaimerData';

import { PolicyDocument } from './types';
import { termsData } from './termsData';
import { privacyData } from './privacyData';
import { cookieData } from './cookieData';
import { refundData } from './refundData';
import { riderTermsData } from './riderTermsData';
import { partnerTermsData } from './partnerTermsData';
import { affiliateData } from './affiliateData';
import { rewardsData } from './rewardsData';
import { safetyData } from './safetyData';
import { disclaimerData } from './disclaimerData';

export const ALL_POLICIES: Record<string, PolicyDocument> = {
  terms: termsData,
  privacy: privacyData,
  'cookie-policy': cookieData,
  'refund-policy': refundData,
  'rider-terms': riderTermsData,
  'partner-terms': partnerTermsData,
  'affiliate-policy': affiliateData,
  'rewards-policy': rewardsData,
  'safety-guidelines': safetyData,
  disclaimer: disclaimerData,
};
