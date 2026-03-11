import type { CTA, FAQ, ImageRef, Testimonial } from "./content-types";

export type EntityType = "service" | "portfolio";

export type RelatedEntityRef = { id: string; type: EntityType };

export type EntitySeoBase = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: ImageRef;
  images?: ImageRef[];
  datePublished?: string;
  dateModified?: string;
};

export type EntityIndexPage<TCard> = {
  card: TCard;
};

export type ServiceIndexCard = {
  eyebrow: string;
  title: string;
  href: string;
  description: string;
  image: ImageRef;
};

export type ServicePayload = {
  serviceType: string;
  areaServed: string[];
  subServices: Array<{ name: string; description?: string }>;
};

export type ServicePerformedItem = {
  name: string;
  description: string;
  icon: string;
};

export type ProjectPayload = {
  serviceName: string;
  location: { neighborhood: string; city: string };
  completionDate: string;
  duration: string;
  materials: string[];
  problem: string;
  solution: string;
  results: string[];
};

export type PortfolioIndexCard = {
  eyebrow: string;
  href: string;
  title: string;
  description: string;
  image: ImageRef;
};

export type EntityBase<TType extends EntityType> = {
  id: string;
  type: TType;
  path: string;
  name: string;
  description: string;
  breadcrumb: string;
  seo: EntitySeoBase;
};

export enum ServiceCategory {
  Interior = "Interior",
  Expansion = "Expansion",
  Outdoor = "Outdoor Living",
  Structural = "Structural",
}

export type ServiceEntity = EntityBase<"service"> & {
  category: ServiceCategory;
  homePageFeatured: boolean;
  service: ServicePayload;
  header: string;
  subheader: string;
  galleryImages: ImageRef[];
  featuredTestimonial: Testimonial;
  faqs: FAQ[];
  subServices: {
    eyebrow: string;
    heading: string;
    byline: string;
    primaryCta: CTA;
    secondaryCta: CTA;
    services: Array<{ title: string; description: string; icon: string }>;
  };
  relatedPortfolio: PortfolioEntity;
};

export type PortfolioEntity = EntityBase<"portfolio"> & {
  project: ProjectPayload;
  hero: {
    image?: ImageRef;
    eyebrow: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
  };
  overview: {
    locationLabel: string;
    timelineLabel: string;
    completedLabel: string;
    scopeLabel: string;
    noteHtml: string;
  };
  highlights: string[];
  story: {
    homeownerWanted: string;
    plan: string;
    buildSteps: string[];
    results: string[];
  };
  servicesPerformed: {
    intro: string;
    items: ServicePerformedItem[];
  };
  gallery: {
    intro: string;
    images: ImageRef[];
  };
  testimonial: Testimonial;
  faqs?: FAQ[];
  cta: {
    heading: string;
    body: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  related: ServiceEntity[];
};

export type Entity = ServiceEntity | PortfolioEntity;

export type CollectionType = "services" | "portfolio";

export type CollectionPage<TCard> = {
  kind: "collection";
  type: CollectionType;
  path: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: ImageRef;
    images: ImageRef[];
  };
  content: {
    headline: string;
    byline: string;
    primaryCta: CTA;
  };
  cards: TCard[];
};

export type MarketingPage = {
  kind: "marketing";
  path: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: ImageRef;
    images: ImageRef[];
  };
  faqs: FAQ[];
};
