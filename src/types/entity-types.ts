import type { CTA, FAQ, ImageRef, Testimonial } from "./content-types";

export type EntityType = "service" | "portfolio";

export type RelatedEntityRef = { id: string; type: EntityType };

export type EntitySeoBase = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: ImageRef;
  images: ImageRef[];
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

export type ServiceShowContent = {
  eyebrow: string;
  header: string;
  subheader: string;
  description: string;
  galleryImages: ImageRef[];
  featuredTestimonial: Testimonial;
  faqs: FAQ[];
  subServices: {
    eyebrow: string;
    heading: string;
    byline: string;
    primaryCta: CTA;
    secondaryCta: CTA;
    services: Array<{ name: string; description: string; icon: string }>;
  };
  relatedPortfolio: {
    eyebrow: string;
    heading: string;
    cards: Array<{
      imageSrc: string;
      eyebrow: string;
      title: string;
      description: string;
      imageClass?: string;
    }>;
  };
};

export type ServiceSeoPayload = {
  service: {
    name: string;
    serviceType: string;
    areaServed: string[];
    subServices: Array<{ name: string; description?: string }>;
  };
};

export type ServicePerformedItem = {
  name: string;
  description: string;
  icon: string;
};

export type PortfolioIndexCard = {
  eyebrow: string;
  href: string;
  title: string;
  description: string;
  image: ImageRef;
};

export type PortfolioShowContent = {
  hero: {
    image: ImageRef;
    eyebrow: string;
    headline: string;
    byline: string;
    primaryCta: CTA;
    secondaryCta: CTA;
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
    items: Array<{ name: string; description: string; icon: string }>;
  };
  gallery: {
    intro: string;
    images: ImageRef[];
  };
  testimonial: Testimonial;
  faqs: FAQ[];
  cta: {
    heading: string;
    body: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  related: Array<{ title: string; description: string; href: string }>;
};

export type PortfolioSeoPayload = {
  project: {
    name: string;
    serviceName: string;
    servicePath: string;
    location: { neighborhood: string; city: string };
    completionDate: string;
    duration: string;
    servicesPerformed: ServicePerformedItem[];
    materials: string[];
    problem: string;
    solution: string;
    results: string[];
    testimonial: Testimonial;
  };
};

export type EntityBase<TType extends EntityType, TSeoPayload, TCard, TShow> = {
  id: string;
  type: TType;
  path: string;
  name: string;
  description: string;
  seo: EntitySeoBase & TSeoPayload;
  index: EntityIndexPage<TCard>;
  show: TShow;
  related: RelatedEntityRef[];
};

export enum ServiceCategory {
  Interior = "Interior",
  Expansion = "Expansion",
  Outdoor = "Outdoor Living",
}

export type ServiceEntity = EntityBase<
  "service",
  ServiceSeoPayload,
  ServiceIndexCard,
  ServiceShowContent
> & {
  category: ServiceCategory;
  homePageFeatured: boolean;
};

export type PortfolioEntity = EntityBase<
  "portfolio",
  PortfolioSeoPayload,
  PortfolioIndexCard,
  PortfolioShowContent
>;

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
