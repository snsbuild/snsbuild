// src/seo/seo-builder.ts
import type {
  FAQ,
  ImageRef,
  OpenGraph,
  SeoResult,
} from "../types/content-types";
import type { SeoPage } from "../types/seo-types";

const SITE = "https://sns.build";
const BUSINESS_NAME = "Saddle and Spur Construction";
const SERVICE_AREA = "Greater Seattle / King County";
const DEFAULT_REGION = "WA";

/** ---------- utilities ---------- */
const absUrl = (pathOrUrl: string) =>
  pathOrUrl.startsWith("http") ? pathOrUrl : `${SITE}${pathOrUrl}`;
const toImageUrls = (images?: ImageRef[]) =>
  images?.length ? images.map((i) => absUrl(i.src)) : undefined;

const stripUndefinedDeep = (obj: any): any => {
  if (Array.isArray(obj))
    return obj.map(stripUndefinedDeep).filter((v) => v !== undefined);
  if (obj && typeof obj === "object") {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(obj)) {
      const cleaned = stripUndefinedDeep(v);
      if (cleaned !== undefined) out[k] = cleaned;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return obj === undefined ? undefined : obj;
};

/** ---------- base nodes ---------- */
const buildLocalBusinessNode = () => ({
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE}#business`,
  name: BUSINESS_NAME,
  url: SITE,
  areaServed: SERVICE_AREA,
});

const buildWebSiteNode = () => ({
  "@type": "WebSite",
  "@id": `${SITE}#website`,
  name: BUSINESS_NAME,
  url: SITE,
});

const buildWebPageNode = (
  canonical: string,
  title: string,
  description: string,
  primaryImage?: string,
) => ({
  "@type": "WebPage",
  "@id": `${canonical}#webpage`,
  url: canonical,
  name: title,
  description,
  isPartOf: { "@id": `${SITE}#website` },
  primaryImageOfPage: primaryImage
    ? { "@type": "ImageObject", url: primaryImage }
    : undefined,
});

const buildBreadcrumbsNode = (
  canonical: string,
  items: Array<{ name: string; item: string }>,
) => ({
  "@type": "BreadcrumbList",
  "@id": `${canonical}#breadcrumbs`,
  itemListElement: items.map((x, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: x.name,
    item: x.item,
  })),
});

const buildFaqNode = (canonical: string, faqs?: FAQ[]) => {
  if (!faqs?.length) return undefined;
  return {
    "@type": "FAQPage",
    "@id": `${canonical}#faqs`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
};

/** ---------- graph builders ---------- */
function buildServiceShowGraph(
  page: Extract<SeoPage, { kind: "service-show" }>,
  canonical: string,
  primaryImage?: string,
) {
  const meta = page.meta;

  const serviceNode = {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: page.service.name,
    serviceType: page.service.serviceType ?? page.service.name,
    description: meta.description,
    areaServed: page.service.areaServed ?? [SERVICE_AREA],
    provider: { "@id": `${SITE}#business` },
    hasOfferCatalog: page.service.subServices?.length
      ? {
          "@type": "OfferCatalog",
          name: `${page.service.name} Services`,
          itemListElement: page.service.subServices.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
            },
          })),
        }
      : undefined,
  };

  const webPageNode = {
    ...buildWebPageNode(canonical, meta.title, meta.description, primaryImage),
    about: { "@id": `${canonical}#service` },
  };

  const breadcrumbsNode = buildBreadcrumbsNode(canonical, [
    { name: "Home", item: SITE },
    { name: "Services", item: `${SITE}/services` },
    { name: page.service.name, item: canonical },
  ]);

  return [
    webPageNode,
    serviceNode,
    breadcrumbsNode,
    buildFaqNode(canonical, page.faqs),
  ];
}

function buildPortfolioShowGraph(
  page: Extract<SeoPage, { kind: "portfolio-show" }>,
  canonical: string,
  primaryImage?: string,
) {
  const meta = page.meta;
  const images = toImageUrls(meta.images);

  const city = page.project.location?.city ?? "Seattle";
  const neighborhood = page.project.location?.neighborhood;

  const placeNode =
    neighborhood || city
      ? {
          "@type": "Place",
          "@id": `${canonical}#place`,
          name: neighborhood
            ? `${neighborhood}, ${city}, ${DEFAULT_REGION}`
            : `${city}, ${DEFAULT_REGION}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: city,
            addressRegion: DEFAULT_REGION,
            addressCountry: "US",
          },
        }
      : undefined;

  const serviceCanonical = page.project.servicePath
    ? absUrl(page.project.servicePath)
    : undefined;

  const serviceNode = {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: page.project.serviceName,
    serviceType: page.project.serviceName,
    areaServed: [SERVICE_AREA],
    provider: { "@id": `${SITE}#business` },
    subjectOf: serviceCanonical
      ? { "@id": `${serviceCanonical}#webpage` }
      : undefined,
  };

  const webPageNode = {
    ...buildWebPageNode(canonical, meta.title, meta.description, primaryImage),
    about: { "@id": `${canonical}#service` },
    mainEntity: { "@id": `${canonical}#work` },
  };

  const workDescription =
    page.project.problem && page.project.solution
      ? `${page.project.problem} ${page.project.solution}`
      : meta.description;

  const workNode = {
    "@type": "CreativeWork",
    "@id": `${canonical}#work`,
    name: page.project.name,
    description: workDescription,
    keywords: meta.keywords?.join(", "),
    image: images,
    material: page.project.materials?.length
      ? page.project.materials.join(", ")
      : undefined,
    dateCreated: page.project.completionDate ?? meta.datePublished,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified ?? meta.datePublished,
    creator: { "@id": `${SITE}#business` },
    provider: { "@id": `${SITE}#business` },
    about: { "@id": `${canonical}#service` },
    locationCreated: placeNode ? { "@id": `${canonical}#place` } : undefined,
    ...(page.project.testimonial
      ? {
          review: {
            "@type": "Review",
            "@id": `${canonical}#review`,
            reviewBody: page.project.testimonial.quote,
            ...(page.project.testimonial.rating
              ? {
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: page.project.testimonial.rating,
                    bestRating: 5,
                  },
                }
              : {}),
            author: {
              "@type": "Person",
              name: page.project.testimonial.author,
            },
          },
        }
      : {}),
  };

  const servicesPerformedNode = page.project.servicesPerformed?.length
    ? {
        "@type": "ItemList",
        "@id": `${canonical}#services-performed`,
        name: "Services performed",
        itemListElement: page.project.servicesPerformed.map((s, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: s.name,
          item: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            provider: { "@id": `${SITE}#business` },
          },
        })),
      }
    : undefined;

  const breadcrumbsNode = buildBreadcrumbsNode(canonical, [
    { name: "Home", item: SITE },
    { name: "Portfolio", item: `${SITE}/portfolio` },
    { name: meta.title, item: canonical },
  ]);

  return [
    webPageNode,
    placeNode,
    serviceNode,
    workNode,
    servicesPerformedNode,
    breadcrumbsNode,
    buildFaqNode(canonical, page.faqs),
  ];
}

function buildCollectionGraph(
  page: Extract<SeoPage, { kind: "collection" }>,
  canonical: string,
  primaryImage?: string,
) {
  const meta = page.meta;

  const webPageNode = buildWebPageNode(
    canonical,
    meta.title,
    meta.description,
    primaryImage,
  );

  const breadcrumbsNode =
    page.collection.name === "Services"
      ? buildBreadcrumbsNode(canonical, [
          { name: "Home", item: SITE },
          { name: "Services", item: canonical },
        ])
      : buildBreadcrumbsNode(canonical, [
          { name: "Home", item: SITE },
          { name: "Portfolio", item: canonical },
        ]);

  const itemListNode = page.collection.itemUrls?.length
    ? {
        "@type": "ItemList",
        "@id": `${canonical}#items`,
        name: page.collection.name,
        itemListElement: page.collection.itemUrls.map((url, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: absUrl(url),
        })),
      }
    : undefined;

  return [webPageNode, breadcrumbsNode, itemListNode];
}

function buildMarketingGraph(
  page: Extract<SeoPage, { kind: "marketing" }>,
  canonical: string,
  primaryImage?: string,
) {
  const meta = page.meta;
  const webPageNode = buildWebPageNode(
    canonical,
    meta.title,
    meta.description,
    primaryImage,
  );
  const breadcrumbsNode = buildBreadcrumbsNode(canonical, [
    { name: "Home", item: SITE },
    { name: meta.title, item: canonical },
  ]);
  return [webPageNode, breadcrumbsNode, buildFaqNode(canonical, page.faqs)];
}

/** ---------- main entry ---------- */
export function buildSeo(page: SeoPage): SeoResult {
  const canonical = absUrl(page.meta.path);
  const primaryOgImage = absUrl(page.meta.ogImage.src);

  const openGraph: OpenGraph = {
    title: page.meta.title,
    description: page.meta.description,
    url: canonical,
    type: page.meta.ogType,
    image: primaryOgImage,
  };

  const baseGraph: any[] = [buildWebSiteNode(), buildLocalBusinessNode()];

  const nodes =
    page.kind === "service-show"
      ? buildServiceShowGraph(page, canonical, primaryOgImage)
      : page.kind === "portfolio-show"
        ? buildPortfolioShowGraph(page, canonical, primaryOgImage)
        : page.kind === "collection"
          ? buildCollectionGraph(page, canonical, primaryOgImage)
          : buildMarketingGraph(page, canonical, primaryOgImage);

  const jsonLd = stripUndefinedDeep({
    "@context": "https://schema.org",
    "@graph": [...baseGraph, ...nodes],
  }) as Record<string, any>;

  return { canonical, openGraph, jsonLd };
}

export function safeJsonLdString(jsonLd: Record<string, any>) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}
