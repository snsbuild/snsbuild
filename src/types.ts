
export interface OpenGraph {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article" | "profile" | string;
}

export interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  openGraph: OpenGraph;
  jsonLd?: Record<string, any>;
}

export interface Testimonial {
  name: string;
  neighborhood: string;
  projectType: string;
  rating: number;
  quote: string;
}

export interface PreviousWork {
  id: string;
  title: string;
  body: string;
  imgSrc: string;
  link: string;
  tags: string[];
  blurb: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogImage: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    imageAlt: string;
    bullets: string[];
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  testimonials: Testimonial[];
  schema: Record<string, any>;
}
