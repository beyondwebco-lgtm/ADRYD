export const SITE_CONFIG = {
  name: 'ADRYD',
  legalName: 'ADRYD Mobility Technologies',
  tagline: 'Ride. Promote. Sell. Grow.',
  description:
    'Electric mobility-powered mobile advertising and on-the-go brand growth platform in Hyderabad, Telangana.',
  url: 'https://adryd.com',
  launchMarket: {
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    flagshipZones: [
      'HITEC City',
      'Madhapur',
      'Gachibowli',
      'Jubilee Hills',
      'Banjara Hills',
      'Kondapur',
      'Kukatpally',
      'Begumpet',
      'Secunderabad',
      'Financial District',
    ],
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'enquiries@adryd.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 40 6824 5500',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
    address: 'ADRYD Mobility Hub, Knowledge City, HITEC City, Hyderabad, Telangana 500081',
  },
  whatsappMessages: {
    campaign:
      "Hello ADRYD, I'm interested in launching a mobile advertising campaign in Hyderabad. Please share more details.",
    rider:
      "Hello ADRYD, I'm interested in joining as an EV advertising partner rider.",
    general:
      "Hello ADRYD, I would like to learn more about your electric vehicle mobile advertising services.",
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        {
          label: 'Mobile EV Advertising',
          href: '/solutions',
          description: 'Overview of our mobility-powered out-of-home advertising',
        },
        {
          label: 'Single Rider Campaign',
          href: '/solutions/single-rider',
          description: 'Hyper-local brand visibility for neighbourhood businesses',
        },
        {
          label: 'Dual Rider Campaign',
          href: '/solutions/dual-rider',
          description: 'Two-scooter coordinated high-recall local promotions',
        },
        {
          label: 'Multi-Rider Fleet',
          href: '/solutions/fleet-advertising',
          description: 'Citywide simultaneous deployment for large brand impact',
        },
        {
          label: 'Location-Based Targeting',
          href: '/solutions/location-targeting',
          description: 'Zone, corridor, and PIN-code targeted route execution',
        },
        {
          label: 'Creative Services',
          href: '/creative-services',
          description: 'Promotional photography, video reels, and brand artwork',
        },
      ],
    },
    { label: 'ADRYD Upgrade', href: '/adryd-upgrade', badge: 'Next-Gen' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Industries', href: '/industries' },
    { label: 'Technology', href: '/technology' },
    { label: 'Become a Rider', href: '/become-a-rider' },
  ],
  footerSolutions: [
    { label: 'Single Rider Campaigns', href: '/solutions/single-rider' },
    { label: 'Dual Rider Campaigns', href: '/solutions/dual-rider' },
    { label: 'Fleet Advertising', href: '/solutions/fleet-advertising' },
    { label: 'Location Targeting', href: '/solutions/location-targeting' },
    { label: 'ADRYD Upgrade (Commerce)', href: '/adryd-upgrade' },
    { label: 'Creative & Digital Services', href: '/creative-services' },
  ],
  footerCompany: [
    { label: 'About ADRYD', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Industries We Serve', href: '/industries' },
    { label: 'Platform Technology', href: '/technology' },
    { label: 'Become an EV Rider', href: '/become-a-rider' },
    { label: 'Contact Team', href: '/contact' },
  ],
  footerLegal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
};
