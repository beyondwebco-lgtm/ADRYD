import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Camera,
  Film,
  Sparkles,
  Palette,
  Share2,
  Brush,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Creative Services & Content Studio | ADRYD Mobility Media',
  description:
    'Full-service creative production for mobile advertising: vehicle branding adaptations, on-ground product photography, cinematic video reels, and social media content in Hyderabad.',
};

const STUDIO_SERVICES = [
  {
    title: 'Vehicle Branding & Vinyl Adaptation',
    icon: Palette,
    summary: 'Transform your digital 2D brand assets into high-impact, curved automotive vehicle wraps and panel decals.',
    deliverables: [
      'Side body wrap artwork with curved bleed margins',
      'Front apron brand crest and logo treatment',
      'Illuminated rear showcase box vinyl decals',
      'Print-ready vector CMYK production files',
    ],
  },
  {
    title: 'On-Ground Product & Street Photography',
    icon: Camera,
    summary: 'Commercial photography showcasing your physical merchandise mounted inside our illuminated mobile storefronts.',
    deliverables: [
      'High-resolution edited product shots in natural light',
      'Street-level action shots against modern architecture',
      'Close-up detail shots of textures, fabrics & tags',
      'Full commercial usage rights for digital marketing',
    ],
  },
  {
    title: 'Cinematic Promotional Videos & B-Roll',
    icon: Film,
    summary: 'High-production 4K video documenting your branded electric fleet cruising through premier Hyderabad commercial corridors.',
    deliverables: [
      '60-90 second cinematic brand hero film',
      'Drone aerial transit b-roll along iconic landmarks',
      'Founder / artisan soundbites and store arrival scenes',
      'Color graded in modern cinematic automotive tones',
    ],
  },
  {
    title: 'Instagram Reels & Short-Form Content',
    icon: Share2,
    summary: 'High-energy 9:16 vertical edits tailored to capture consumer attention on Instagram Reels, Shorts, and TikTok.',
    deliverables: [
      '3 to 5 vertical video cuts (15-30 seconds each)',
      'Trending audio sync and dynamic motion text overlays',
      'Behind-the-scenes rider preparation clips',
      'Call-to-action cards driving viewers to your bio link',
    ],
  },
];

export default function CreativeServicesPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Creative &amp; Digital Marketing Studio
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            Every Campaign Deserves Great Creative
          </h1>
          <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
            A mobile advertising campaign is only as effective as the clarity and punch of its
            artwork. Our in-house studio bridges street-level visual physics with digital viral reach.
          </p>
        </div>

        {/* 4 Core Studios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {STUDIO_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-carbon-card border border-graphite-border hover:border-electric-yellow/40 transition-all flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-grey leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  <div className="space-y-2 p-4 rounded-xl bg-graphite/40 border border-graphite-border text-xs mb-6">
                    <span className="text-[10px] font-tech text-electric-yellow uppercase block mb-1">
                      Included Deliverables:
                    </span>
                    {item.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-soft-ivory/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-graphite-border">
                  <Link
                    href={`/book-campaign?package=custom-package&service=${encodeURIComponent(
                      item.title
                    )}`}
                    className="inline-flex items-center justify-between w-full text-xs font-heading font-bold text-electric-yellow hover:underline"
                  >
                    <span>Add {item.title} to Campaign</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BRD Scope Policy */}
        <div className="p-6 rounded-2xl bg-graphite/30 border border-graphite-border mb-16 text-xs text-muted-grey leading-relaxed">
          <strong className="text-white block mb-1">Service &amp; Revision Policies:</strong>
          In accordance with our project operating agreements, digital services can be booked
          independently or bundled alongside EV campaigns. Standard deliverables include up to two
          revisions, documented usage rights, and structured delivery timelines agreed upon prior to
          production.
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Discuss Your Creative Strategy
            </h4>
            <p className="text-xs text-soft-ivory/80 mt-1">
              Talk to our creative director about custom vehicle adaptations and photoshoot dates.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Schedule Creative Call
          </Link>
        </div>
      </div>
    </div>
  );
}
