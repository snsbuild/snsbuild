import type {
  Entity,
  ServiceEntity,
  PortfolioEntity,
  CollectionPage,
  LandingPage,
  MarketingPage,
} from "../types/entity-types";

import type {
  ServiceShowSeoPage,
  PortfolioShowSeoPage,
  CollectionSeoPage,
  LandingSeoPage,
  MarketingSeoPage,
  SeoPage,
} from "../types/seo-types";
import type { FAQ } from "../types/content-types";

export type SeoOptions = {
  /** Absolute paths of the items a collection page lists. */
  itemPaths?: string[];
  /** Overrides the default breadcrumb trail on a collection page. */
  breadcrumbs?: Array<{ name: string; item: string }>;
  /** Adds FAQPage markup to a collection page. */
  faqs?: FAQ[];
  /** Overrides the collection name used in schema. */
  collectionName?: string;
};

export function entityToSeoPage(
  entity: Entity,
): ServiceShowSeoPage | PortfolioShowSeoPage {
  if (entity.type === "service") {
    const s = entity as ServiceEntity;

    const baseMeta = {
      path: s.path,
      title: s.seo.title,
      description: s.seo.description,
      keywords: s.seo.keywords,
      ogType: "website" as const,
      ogImage: s.seo.ogImage,
      images: s.seo.images,
      datePublished: s.seo.datePublished,
      dateModified: s.seo.dateModified,
    };

    return {
      kind: "service-show",
      meta: baseMeta,
      service: { ...s.service, name: s.name },
      faqs: s.faqs,
    };
  }

  const p = entity as PortfolioEntity;

  const baseMeta = {
    path: p.path,
    title: p.seo.title,
    description: p.seo.description,
    keywords: p.seo.keywords,
    ogType: "article" as const,
    ogImage: p.seo.ogImage,
    images: p.seo.images,
    datePublished: p.seo.datePublished,
    dateModified: p.seo.dateModified,
  };

  return {
    kind: "portfolio-show",
    meta: baseMeta,
    project: {
      name: p.name,
      servicePath: p.related?.find((r) => r.path?.startsWith("/services/"))?.path,
      ...p.project,
      servicesPerformed: p.servicesPerformed.items.map((x) => ({
        name: x.name,
        description: x.description,
      })),
      testimonial: {
        quote: p.testimonial.quote,
        author: p.testimonial.author,
        rating: p.testimonial.rating,
      },
    },
    faqs: p.faqs,
  };
}

export function collectionToSeoPage(
  collection: CollectionPage<any>,
  options: SeoOptions = {},
): CollectionSeoPage {
  const name =
    options.collectionName ??
    (collection.type === "services" ? "Services" : "Portfolio");

  return {
    kind: "collection",
    meta: {
      path: collection.path,
      title: collection.seo.title,
      description: collection.seo.description,
      keywords: collection.seo.keywords,
      ogType: "website",
      ogImage: collection.seo.ogImage,
      images: collection.seo.images,
    },
    collection: {
      name,
      itemUrls: options.itemPaths,
      breadcrumbs: options.breadcrumbs,
    },
    faqs: options.faqs,
  };
}

export function landingToSeoPage(landing: LandingPage): LandingSeoPage {
  return {
    kind: "landing",
    meta: {
      path: landing.path,
      title: landing.seo.title,
      description: landing.seo.description,
      keywords: landing.seo.keywords,
      ogType: "website",
      ogImage: landing.seo.ogImage,
      images: landing.seo.images,
    },
    service: {
      name: landing.service.name,
      serviceType: landing.service.serviceType,
      areaServed: landing.service.areaServed,
      servicePath: landing.service.servicePath,
    },
    faqs: landing.faqs,
  };
}

export function marketingToSeoPage(marketing: MarketingPage): MarketingSeoPage {
  return {
    kind: "marketing",
    meta: {
      path: marketing.path,
      title: marketing.seo.title,
      description: marketing.seo.description,
      keywords: marketing.seo.keywords,
      ogType: "website",
      ogImage: marketing.seo.ogImage,
      images: marketing.seo.images,
    },
    faqs: marketing.faqs,
  };
}

export function toSeoPage(
  input: Entity | CollectionPage<any> | LandingPage | MarketingPage,
  options: SeoOptions = {},
): SeoPage {
  if ((input as any).kind === "collection")
    return collectionToSeoPage(input as CollectionPage<any>, options);

  if ((input as any).kind === "landing")
    return landingToSeoPage(input as LandingPage);

  if ((input as any).type === "service" || (input as any).type === "portfolio")
    return entityToSeoPage(input as Entity);

  return marketingToSeoPage(input as MarketingPage);
}
