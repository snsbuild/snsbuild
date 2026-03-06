import type { FAQ, ImageRef } from "./content-types";

export type SeoMeta = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogType: "website" | "article";
  ogImage: ImageRef;
  images?: ImageRef[];
  datePublished?: string;
  dateModified?: string;
};

export type ServiceShowSeoPage = {
  kind: "service-show";
  meta: SeoMeta;
  service: {
    name: string;
    serviceType?: string;
    areaServed?: string[];
    subServices?: Array<{ name: string; description?: string }>;
  };
  faqs?: FAQ[];
};

export type PortfolioShowSeoPage = {
  kind: "portfolio-show";
  meta: SeoMeta;
  project: {
    name: string;
    serviceName: string;
    servicePath?: string;
    location: { neighborhood: string; city?: string };
    completionDate: string;
    duration: string;

    servicesPerformed: Array<{ name: string; description?: string }>;
    materials: string[];
    problem: string;
    solution: string;
    results: string[];

    testimonial?: { quote: string; author: string; rating?: number };
  };
  faqs?: FAQ[];
};

export type CollectionSeoPage = {
  kind: "collection";
  meta: SeoMeta;
  collection: {
    name: "Services" | "Portfolio";
    itemUrls?: string[];
  };
};

export type MarketingSeoPage = {
  kind: "marketing";
  meta: SeoMeta;
  faqs?: FAQ[];
};

export type SeoPage =
  | ServiceShowSeoPage
  | PortfolioShowSeoPage
  | CollectionSeoPage
  | MarketingSeoPage;
