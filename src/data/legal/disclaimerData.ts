import { PolicyDocument } from './types';

export const disclaimerData: PolicyDocument = {
  id: 'disclaimer',
  title: 'Disclaimer',
  pageTitle: 'ADRYD Disclaimer',
  slug: 'disclaimer',
  href: '/disclaimer',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Comprehensive disclosures regarding business concept demonstrations, absence of guaranteed income or sales returns, hypothetical calculation tools, development-stage features, and illustrative promotional media.',
  sections: [
    {
      id: 'general-information',
      number: '11.1',
      title: 'General Information & Concept Notice',
      content: [
        'The information published on the ADRYD website is provided to communicate our commercial vision, sustainable electric mobility model, promotional service capabilities, and proposed career development programmes.',
        'ADRYD is actively operating pilot initiatives across commercial corridors in Hyderabad, Telangana. Certain features, technological dashboards, and national expansion programmes described on this website represent planned developments subject to phased deployment and operational readiness.',
      ],
    },
    {
      id: 'no-guaranteed-earnings',
      number: '11.2',
      title: 'No Guaranteed Income or Returns',
      content: [
        'ADRYD does not guarantee, promise, or imply any fixed monthly earnings, minimum salary, specific sales quotas, affiliate commission returns, or investment yields to any rider, affiliate, or commercial partner.',
        'Actual earnings depend entirely on individual factors, including: verified campaign hours completed, active merchant commission rates, consumer product demand, seasonal market factors, vehicle operational expenses, and executed commercial agreements.',
      ],
    },
    {
      id: 'illustrative-calculators',
      number: '11.3',
      title: 'Illustrative Earnings Calculators & Models',
      content: [
        'Any interactive earnings calculators, hypothetical monthly income projections, tier benchmarks, or career progression models featured on the website are designed exclusively for educational and illustrative purposes.',
        'Illustrative numbers do not constitute formal employment offers, binding wage commitments, or financial guarantees. Riders must not treat projections as expected or minimum earnings.',
      ],
    },
    {
      id: 'technology-features',
      number: '11.4',
      title: 'Proposed Technology Features in Development',
      content: [
        'Visualizations and descriptions of upcoming digital capabilities—including rider mobile apps, telemetry heatmaps, automated affiliate attribution engines, instant payout wallets, and merchant inventory dashboards—depict the architectural roadmap of the ADRYD platform.',
        'Their presence on the website does not imply that every feature is immediately operational in all pilot regions.',
      ],
    },
    {
      id: 'illustrative-media',
      number: '11.5',
      title: 'Illustrative Promotional Visuals',
      content: [
        'Certain campaign posters, vehicle mockups, 3D renderings, and apparel graphics displayed across the website are digital representations designed to showcase potential branding executions.',
        'Such media is illustrative and does not represent completed historical campaigns for depicted third-party brand logos unless expressly identified as a verified client case study.',
      ],
    },
    {
      id: 'campaign-performance',
      number: '11.6',
      title: 'Campaign Performance & Marketing Outcomes',
      content: [
        'While ADRYD ensures high-fidelity mobile branding, scheduled corridor operations, and professional rider deployment, on-ground consumer response is influenced by external factors such as product appeal, pricing, weather, and general economic climate.',
        'ADRYD does not warrant specific sales conversion numbers, viral media reach, or immediate revenue uplifts unless explicitly agreed under a custom verified performance contract.',
      ],
    },
    {
      id: 'third-party-products',
      number: '11.7',
      title: 'Third-Party Products & Merchant Responsibility',
      content: [
        'Products, descriptions, nutritional claims, and warranties showcased through ADRYD electric vehicles are the exclusive responsibility of the participating merchant or manufacturer.',
        'ADRYD acts solely as an independent promotional and mobility platform and does not manufacture or warrant third-party consumer products.',
      ],
    },
    {
      id: 'programme-availability',
      number: '11.8',
      title: 'Programme Availability & Statutory Rights',
      content: [
        'Campaign packages, fleet rental opportunities, reward perks, and sponsored travel opportunities are subject to geographical corridor availability, commercial feasibility, and regulatory permissions.',
        'Nothing contained within this Disclaimer excludes or limits any consumer protection rights or statutory obligations under Indian law that cannot lawfully be disclaimed.',
      ],
    },
  ],
};
