export interface PolicySection {
  id: string;
  number?: string;
  title: string;
  content: string[]; // List of paragraphs
  bullets?: string[]; // Optional bullet points
  subsections?: {
    id: string;
    title: string;
    content: string[];
    bullets?: string[];
  }[];
}

export interface PolicyDocument {
  id: string;
  title: string;
  pageTitle: string;
  slug: string;
  href: string;
  version: string;
  effectiveDate: string;
  leadSummary: string;
  sections: PolicySection[];
}
