import { PolicyDocument } from './types';

export const termsData: PolicyDocument = {
  id: 'terms',
  title: 'Terms and Conditions',
  pageTitle: 'ADRYD Terms and Conditions',
  slug: 'terms',
  href: '/terms',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Core platform rules, eligibility standards, campaign booking parameters, intellectual property rights, and user responsibilities governing access to the ADRYD website, registration systems, and commercial networks.',
  sections: [
    {
      id: 'introduction',
      number: '2.1',
      title: 'Introduction',
      content: [
        'Welcome to ADRYD.',
        'ADRYD is an electric mobility-enabled promotional and marketing platform designed to connect businesses, entrepreneurs, riders, fleet partners and promotional professionals through brand awareness campaigns, product showcasing, sales promotion, pre-order generation, digital marketing and related services.',
        'These Terms and Conditions govern access to and use of the ADRYD website, registration facilities, campaign enquiry services and other available platform features.',
        'By accessing or using the website, users agree to the applicable Terms and Conditions. Where additional service-specific agreements are required, users must review and accept those agreements separately.',
      ],
    },
    {
      id: 'definitions',
      number: '2.2',
      title: 'Definitions',
      content: ['For the purposes of these Terms, the following definitions apply:'],
      bullets: [
        'ADRYD: The legal entity responsible for operating the ADRYD platform.',
        'Platform: The ADRYD website, digital portals, and its associated services and applications.',
        'User: Any individual or legal entity accessing or using the platform.',
        'Rider: An individual registered or applying to participate in eligible promotional mobility activities.',
        'Riderpreneur: A participant in ADRYD\'s proposed rider career development, skill building, and promotional opportunity programme.',
        'Entrepreneur: A business, startup, or individual offering products or services for promotion through ADRYD.',
        'Brand Partner: An organisation or corporate entity engaging ADRYD for approved promotional and marketing activations.',
        'Fleet Partner: An approved vehicle owner, rental provider, or commercial fleet operator collaborating with ADRYD.',
        'Campaign: An agreed promotional, advertising, sales, product showcasing, or engagement activity.',
        'Affiliate: An eligible participant authorised to promote products through approved tracking identifiers and digital links.',
      ],
    },
    {
      id: 'eligibility',
      number: '2.3',
      title: 'Eligibility',
      content: [
        'Users registering for commercial participation, rider onboarding, or campaign booking must satisfy the following conditions:',
      ],
      bullets: [
        'Be at least 18 years of age.',
        'Have full legal capacity to enter into legally binding commercial agreements.',
        'Provide truthful, complete, and accurate registration information.',
        'Possess relevant municipal permissions, licences, and verification documents where required.',
        'Comply with applicable Indian laws, local commercial rules, and programme requirements.',
      ],
      subsections: [
        {
          id: 'rider-eligibility',
          title: 'Rider Operational Eligibility',
          content: [
            'Riders must satisfy applicable vehicle roadworthiness, valid driving licence (where required for specific vehicle classes), personal identity verification, and road safety requirements before undertaking any commercial assignments.',
          ],
        },
      ],
    },
    {
      id: 'nature-of-platform',
      number: '2.4',
      title: 'Nature of the Platform',
      content: [
        'ADRYD aims to facilitate connections between businesses seeking targeted on-ground exposure and promotional partners providing sustainable mobility services.',
        'Depending on operational availability and individual agreements, services may include:',
      ],
      bullets: [
        'Electric vehicle-based dynamic and static advertising.',
        'Hyperlocal brand promotion and brand storytelling.',
        'Illuminated product showcasing boxes and mobile retail displays.',
        'Interactive product demonstrations and sampling runs.',
        'Direct street-level sales promotion and QR commerce.',
        'Pre-order generation and customer interest capture.',
        'Digital affiliate marketing and multi-channel attribution.',
        'Social media promotion, videography, and photography.',
        'Hyperlocal promotional delivery coordination.',
        'Entrepreneur collaborations and product drops.',
        'Real-time campaign reporting and telemetry analytics.',
      ],
      subsections: [
        {
          id: 'development-status',
          title: 'Development Stage & Pilot Notice',
          content: [
            'Certain services and features described on this website may be in the planning phase, under active development, or available only during selected pilot cohorts in Hyderabad.',
            'The presence of a feature description on the website does not constitute an immediate commercial guarantee of its immediate availability in all locations.',
          ],
        },
      ],
    },
    {
      id: 'registration',
      number: '2.5',
      title: 'Account Registration',
      content: [
        'Users must provide authentic and verifiable information during any registration or booking inquiry.',
        'Users are responsible for maintaining confidentiality of credentials, promptly updating outdated contact information, immediately reporting any unauthorised access, and using their account solely for legitimate, authorised promotional activities.',
        'ADRYD may request additional identity or vehicle documentation before approving participation.',
        'Submitting an inquiry or registration form does not automatically guarantee platform acceptance, employment, campaign allocation, or vehicle allocation.',
      ],
    },
    {
      id: 'campaign-booking',
      number: '2.6',
      title: 'Campaign Booking',
      content: [
        'Campaign bookings and inquiries are subject to operational factors including:',
      ],
      bullets: [
        'Availability of eligible electric vehicles and trained riders.',
        'Approved arterial corridors and municipal campaign locations.',
        'Required permissions and compliance with local guidelines.',
        'Product safety, suitability, and brand alignment.',
        'Target campaign duration and scheduling windows.',
        'Operational feasibility and mutually agreed commercial terms.',
      ],
      subsections: [
        {
          id: 'booking-confirmation',
          title: 'Confirmation Standards',
          content: [
            'A website inquiry or automated form submission does not constitute a confirmed commercial booking.',
            'A campaign becomes confirmed only when scope, schedule, pricing, material specifications, and payment conditions have been mutually agreed upon and a formal written confirmation or service agreement has been executed.',
          ],
        },
      ],
    },
    {
      id: 'payments',
      number: '2.7',
      title: 'Payments and Commercial Terms',
      content: [
        'Campaign fees, commissions, fleet rental charges, and other commercial terms will be communicated transparently through written quotations, formal invoices, or service agreements.',
        'Website package descriptions are indicative and intended for initial campaign scoping.',
        'Applicable GST, municipal taxes, and operational charges will be explicitly disclosed prior to final booking confirmation.',
        'Commission eligibility for affiliates and riders depends on verified genuine transactions and adherence to applicable affiliate policies.',
        'ADRYD does not represent hypothetical earnings figures as guaranteed income. All earnings illustrations are purely educational and contingent on actual verified performance.',
      ],
    },
    {
      id: 'user-responsibilities',
      number: '2.8',
      title: 'User Responsibilities',
      content: ['Users, riders, and partners must strictly refrain from the following prohibited practices:'],
      bullets: [
        'Submitting fraudulent, counterfeit, or misleading information.',
        'Promoting unlawful, hazardous, counterfeit, or unlicensed products.',
        'Misrepresenting ADRYD or its affiliated brand partners.',
        'Engaging in harassment, discrimination, or abusive conduct toward the public or fellow partners.',
        'Manipulating, fabricating, or artificially inflating campaign metrics, impressions, or telemetry records.',
        'Generating fraudulent, robotic, or self-referred inquiries, sales, or clicks.',
        'Collecting, copying, or misusing customer contact information.',
        'Uploading unlawful, defamatory, or infringing media content.',
        'Attempting unauthorised access, reverse engineering, or cyber interference with platform systems.',
      ],
    },
    {
      id: 'intellectual-property',
      number: '2.9',
      title: 'Intellectual Property',
      content: [
        'The ADRYD brand name, logo, proprietary graphics, website source code, visual identity, and original platform content are protected under applicable Indian and international intellectual property laws.',
        'Users may not reproduce, modify, distribute, or commercially exploit protected materials without prior written consent from ADRYD.',
        'Entrepreneurs and brand partners retain full ownership of their respective trademarks, trade names, and promotional assets.',
        'By providing campaign collateral, partners grant ADRYD a limited, revocable, non-exclusive licence solely for the purpose of executing the agreed promotional activities.',
      ],
    },
    {
      id: 'third-party-services',
      number: '2.10',
      title: 'Third-Party Services',
      content: [
        'ADRYD may integrate or interface with third-party providers including cloud hosting infrastructure, secure payment gateways, vehicle leasing operators, mapping services, messaging platforms, and social networks.',
        'Third-party services are governed by their respective operational terms and privacy disclosures.',
        'ADRYD\'s responsibilities concerning external services remain subject to applicable law and executed contractual terms.',
      ],
    },
    {
      id: 'availability',
      number: '2.11',
      title: 'Platform Availability',
      content: [
        'ADRYD endeavours to maintain continuous, secure, and reliable website and application availability.',
        'However, access may be intermittently interrupted by scheduled maintenance, infrastructure upgrades, technical glitches, telecommunication outages, or circumstances beyond reasonable control.',
        'ADRYD does not guarantee error-free or uninterrupted platform availability.',
      ],
    },
    {
      id: 'suspension',
      number: '2.12',
      title: 'Suspension and Termination',
      content: [
        'ADRYD reserves the right to suspend or terminate platform access or campaign participation where reasonably necessary due to verified fraud, safety violations, material contractual breach, illegal conduct, or failure to maintain required documentation.',
        'Where circumstances permit, affected users will receive written notice and an opportunity to request a review through the designated grievance mechanism.',
        'Termination does not extinguish lawfully earned payouts, accrued liabilities, or statutory remedies.',
      ],
    },
    {
      id: 'liability',
      number: '2.13',
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by applicable Indian law, ADRYD and its directors, officers, and employees shall not be liable for indirect, incidental, or consequential losses arising outside its direct reasonable control.',
        'Nothing in these Terms excludes or limits statutory liabilities that cannot lawfully be disclaimed, including consumer protections under the Consumer Protection Act, 2019, or liability arising from proven fraud or wilful misconduct.',
      ],
    },
    {
      id: 'force-majeure',
      number: '2.14',
      title: 'Force Majeure',
      content: [
        'Campaign executions and promotional operations may be affected by extreme weather, floods, local governance directives, public safety curfews, road blockages, grid outages, or other events of force majeure.',
        'In such circumstances, parties shall promptly communicate and work cooperatively to reschedule the campaign, offer alternative corridors, or issue appropriate adjustments under the applicable service agreement.',
      ],
    },
    {
      id: 'governing-law',
      number: '2.15',
      title: 'Governing Law and Dispute Resolution',
      content: [
        'These Terms are governed by and construed in accordance with the laws of India.',
        'Parties agree to first attempt resolution of any dispute amicably through ADRYD\'s internal grievance mechanism.',
        'Unresolved commercial disputes shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana.',
        'Mandatory consumer protection rights and statutory complaint pathways remain fully preserved.',
      ],
    },
    {
      id: 'updates',
      number: '2.16',
      title: 'Changes to These Terms',
      content: [
        'ADRYD may periodically update these Terms to reflect service expansions, regulatory developments, or operational enhancements.',
        'Material changes will be notified via prominent notice on the platform or direct communication where appropriate.',
        'All updated documents will display their active version number and effective date.',
      ],
    },
  ],
};
