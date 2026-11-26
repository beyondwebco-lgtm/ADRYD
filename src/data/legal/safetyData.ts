import { PolicyDocument } from './types';

export const safetyData: PolicyDocument = {
  id: 'safety-guidelines',
  title: 'Safety and Community Guidelines',
  pageTitle: 'ADRYD Safety and Community Guidelines',
  slug: 'safety-guidelines',
  href: '/safety-guidelines',
  version: '1.0',
  effectiveDate: 'November 26, 2026',
  leadSummary:
    'Mandatory road safety rules, promotional display engineering specifications, public space permissions, harassment prevention, and accident reporting protocols for all ADRYD mobile campaigns.',
  sections: [
    {
      id: 'road-safety',
      number: '10.1',
      title: 'Road Safety & Traffic Compliance',
      content: [
        'Safety is the non-negotiable bedrock of every ADRYD campaign. As ambassadors of electric mobility, riders must demonstrate exemplary road discipline:',
      ],
      bullets: [
        'Mandatory Protective Gear: Riders must wear a properly fastened, ISI/DOT-certified helmet and closed-toe footwear whenever operating a vehicle.',
        'Licencing & Documentation: Riders must hold and carry a valid driving licence (where applicable for the vehicle class) and digital vehicle registration certificate.',
        'Strict Traffic Law Adherence: Obey all traffic signals, speed regulations, lane markings, and pedestrian crossings.',
        'Zero Distraction Policy: Using handheld mobile phones, wearing noise-canceling headphones, or capturing video while actively riding is strictly prohibited.',
        'Zero Tolerance for Impairment: Operating any vehicle under the influence of alcohol, drugs, or impairing medication will result in immediate permanent deactivation and legal reporting.',
      ],
    },
    {
      id: 'display-safety',
      number: '10.2',
      title: 'Promotional Display Engineering & Rigging Standards',
      content: [
        'All mobile showcase boxes, vehicle wraps, and rear promotional fixtures must adhere to rigorous structural and road-safety engineering standards:',
      ],
      bullets: [
        'Unobstructed Vision: Mounts must not restrict the rider\'s rear-view mirror sightlines or peripheral vision.',
        'Unimpeded Controls: Displays must never interfere with handlebar steering, braking mechanisms, or foot controls.',
        'Unobscured Safety Lights: Vehicle headlamps, indicators, brake lights, and high-visibility registration number plates must remain 100% visible.',
        'Weight and Balance Limits: Showcase boxes must not exceed approved gross vehicle weight ratings or alter the scooter\'s center of gravity.',
        'Electrical Safety: Showcase illumination wiring must utilize automotive-grade insulated harnessing, independent fuses, and low-voltage DC LEDs that do not compromise the scooter\'s main traction battery.',
      ],
    },
    {
      id: 'public-permissions',
      number: '10.3',
      title: 'Public Space Etiquette & Municipal Permissions',
      content: [
        'Promotional activations, flyer hand-outs, and stationary sampling must only occur where appropriate municipal or private permissions exist:',
      ],
      bullets: [
        'Corridor Boundaries: Adhere to approved commercial zones and arterial routes specified in the campaign brief.',
        'Private Premises: Activations in tech parks, shopping malls, metro station plazas, or residential gated communities require prior administrative clearance.',
        'Pedestrian Right of Way: Showcase scooters must never obstruct pedestrian walkways, emergency exits, hospital gates, or fire hydrants.',
      ],
    },
    {
      id: 'product-safety',
      number: '10.4',
      title: 'Product Handling & Consumer Safety',
      content: [
        'When conducting product demonstrations or sampling runs, riders and brand promoters must observe strict hygiene standards:',
        'Packaged Foods & Beverages: Must remain sealed, unexpired, and handled in accordance with FSSAI sanitary norms.',
        'Cosmetics & Personal Care: Sampling testers must be hygienic, properly labelled, and accompanied by relevant ingredient declarations.',
        'Fragile Items: Glass containers and electronic test units must be safely cushioned within shock-absorbent display compartments.',
      ],
    },
    {
      id: 'community-behaviour',
      number: '10.5',
      title: 'Respectful Behaviour & Anti-Harassment',
      content: [
        'ADRYD enforces a zero-tolerance policy against all forms of harassment, discrimination, and aggressive behavior:',
      ],
      bullets: [
        'Treat all members of the public, customers, fellow riders, and business clients with utmost courtesy and respect.',
        'Strictly avoid aggressive, persistent, or intimidating sales pitches.',
        'Zero tolerance for sexual harassment, suggestive comments, stalking, or inappropriate personal remarks.',
        'Discrimination based on religion, gender, caste, race, disability, or language is strictly prohibited.',
      ],
    },
    {
      id: 'photography-guidelines',
      number: '10.6',
      title: 'Photography & Public Engagement Protocol',
      content: [
        'When capturing promotional photography or reels for campaign documentation:',
        'Respect personal privacy; do not photograph private residences or individuals who explicitly request not to be recorded.',
        'Exercise heightened caution in public spaces to ensure children are not photographed without verifiable parental consent.',
      ],
    },
    {
      id: 'incident-reporting',
      number: '10.7',
      title: 'Accident & Emergency Incident Reporting',
      content: [
        'In the event of an accident, road breakdown, or public altercation:',
        '1. Priority Emergency Care: Ensure personal safety, move to a secure area, and immediately dial 108 (Ambulance) or 100/112 (Police) if medical or emergency assistance is needed.',
        '2. Report to ADRYD Operations: Contact the ADRYD Emergency Helpline within 60 minutes of the incident.',
        '3. Fact Preservation: Take safe photographs of any vehicle damage and note the date, time, and location coordinates.',
      ],
    },
    {
      id: 'refusal-unsafe-work',
      number: '10.8',
      title: 'Right to Refuse Unsafe Assignments',
      content: [
        'Riders retain the fundamental right to decline or suspend any assignment that presents immediate danger to personal safety, such as extreme flash floods, violent civil disturbances, or structurally hazardous vehicle modifications.',
        'No disciplinary retribution will be taken against riders who act in good faith to protect human life and road safety.',
      ],
    },
    {
      id: 'environmental-care',
      number: '10.9',
      title: 'Environmental Stewardship',
      content: [
        'Riders are expected to uphold the ecological mission of ADRYD by eliminating unnecessary packaging waste, avoiding public littering of flyers, and adhering to responsible EV battery charging and recycling practices.',
      ],
    },
  ],
};
