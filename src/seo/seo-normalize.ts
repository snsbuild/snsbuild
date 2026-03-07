import type {
  Entity,
  ServiceEntity,
  PortfolioEntity,
  CollectionPage,
  MarketingPage,
} from "../types/entity-types";

import type {
  ServiceShowSeoPage,
  PortfolioShowSeoPage,
  CollectionSeoPage,
  MarketingSeoPage,
  SeoPage,
} from "../types/seo-types";

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
      service: s.service,
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
      ...p.project,
      servicesPerformed: p.servicesPerformed.items.map((x) => ({
        name: x.name,
        description: x.description,
      })),
      testimonial: p.project.testimonial
        ? {
            quote: p.project.testimonial.quote,
            author: p.project.testimonial.author,
            rating: p.project.testimonial.rating,
          }
        : undefined,
    },
    faqs: p.faqs,
  };
}

export function collectionToSeoPage(
  collection: CollectionPage<any>,
  itemPaths?: string[],
): CollectionSeoPage {
  const name = collection.type === "services" ? "Services" : "Portfolio";
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
      itemUrls: itemPaths,
    },
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
  input: Entity | CollectionPage<any> | MarketingPage,
): SeoPage {
  if ((input as any).kind === "collection")
    return collectionToSeoPage(input as CollectionPage<any>);

  if ((input as any).type === "service" || (input as any).type === "portfolio")
    return entityToSeoPage(input as Entity);

  return marketingToSeoPage(input as MarketingPage);
}
