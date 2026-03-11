export type FAQ = { question: string; answer: string };

export type Testimonial = {
  image?: ImageRef;
  quote: string;
  author: string;
  neighborhood: string;
  rating: number;
  newsletter?: string;
};

export type ImageRef = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CTA = {
  label: string;
  href: string;
  variant?: string;
};

export type OpenGraph = {
  title: string;
  description: string;
  url: string;
  type: "website" | "article";
  image: string;
};

export type SeoResult = {
  canonical: string;
  openGraph: OpenGraph;
  jsonLd: Record<string, any>;
};
