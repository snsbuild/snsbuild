const SITE = "https://sns.build";
const BUSINESS_NAME = "Saddle and Spur Construction";
const SERVICE_AREA = "Greater Seattle / King County";

export type ImageRef = {
  src: string; // absolute or site-relative
  alt?: string;
  width?: number;
  height?: number;
};

export type OpenGraph = {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  image?: string; // absolute
};

export type SeoResult = {
  canonical: string;
  openGraph: OpenGraph;
  jsonLd: Record<string, any>;
};

export type BaseSeoInput = {
  // Route
  path: string; // e.g. "/services/bathroom-remodeling-seattle"
  // Meta
  title: string; // document title
  description: string;
  // Social
  ogType?: OpenGraph["type"];
  ogImage?: ImageRef;
  // Optional structured content
  images?: ImageRef[];
  keywords?: string[];
  // Publishing (for article-like pages)
  datePublished?: string; // YYYY-MM-DD
  dateModified?: string;  // YYYY-MM-DD
};

export type ServicePageInput = BaseSeoInput & {
  pageType: "service";
  service: {
    name: string;
    serviceType?: string;
    areaServed?: string[]; // defaults to SERVICE_AREA
    subServices?: Array<{ name: string; description?: string }>;
  };
  faqs?: Array<{ question: string; answer: string }>;
};

export type PortfolioPageInput = BaseSeoInput & {
  pageType: "portfolio";
  project: {
    name: string; // can be same as title
    serviceName?: string; // e.g. "Bathroom Remodeling"
    location?: { neighborhood?: string; city?: string; region?: string };
    reviews?: Array<{ authorName: string; rating: number; quote: string }>;
  };
};

export type BlogPageInput = BaseSeoInput & {
  pageType: "blog";
  post: {
    headline: string; // usually same as title
    authorName?: string; // defaults to business
    section?: string; // category
  };
  faqs?: Array<{ question: string; answer: string }>;
};

export type MarketingPageInput = BaseSeoInput & {
  pageType: "marketing";
  // generic page; optionally add faqs
  faqs?: Array<{ question: string; answer: string }>;
};

export type SeoInput = ServicePageInput | PortfolioPageInput | BlogPageInput | MarketingPageInput;

/** ---------- Utilities ---------- */

const absUrl = (pathOrUrl: string) => (pathOrUrl.startsWith("http") ? pathOrUrl : `${SITE}${pathOrUrl}`);

const pickOgImage = (input: SeoInput): string | undefined => {
  // precedence: input.ogImage -> first of input.images -> undefined
  const img = input.ogImage?.src ?? input.images?.[0]?.src;
  return img ? absUrl(img) : undefined;
};

const toImageUrls = (images?: ImageRef[]) => (images?.length ? images.map((i) => absUrl(i.src)) : undefined);

const stripUndefinedDeep = (obj: any): any => {
  if (Array.isArray(obj)) return obj.map(stripUndefinedDeep).filter((v) => v !== undefined);
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

const buildLocalBusinessNode = () => ({
  "@type": "LocalBusiness",
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

const buildWebPageNode = (canonical: string, input: SeoInput, primaryImage?: string) => ({
  "@type": "WebPage",
  "@id": `${canonical}#webpage`,
  url: canonical,
  name: input.title,
  description: input.description,
  isPartOf: { "@id": `${SITE}#website` },
  primaryImageOfPage: primaryImage ? { "@type": "ImageObject", url: primaryImage } : undefined,
});

/** ---------- Builders per page type ---------- */

function buildServiceGraph(canonical: string, input: ServicePageInput, primaryImage?: string) {
  const hasFaq = (input.faqs?.length ?? 0) > 0;

  const serviceNode = {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: input.service.name,
    serviceType: input.service.serviceType ?? input.service.name,
    description: input.description,
    areaServed: input.service.areaServed ?? [SERVICE_AREA],
    provider: { "@id": `${SITE}#business` },
    hasOfferCatalog: input.service.subServices?.length
      ? {
        "@type": "OfferCatalog",
        name: `${input.service.name} Services`,
        itemListElement: input.service.subServices.map((s) => ({
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

  const faqNode = hasFaq
    ? {
      "@type": "FAQPage",
      "@id": `${canonical}#faqs`,
      mainEntity: input.faqs!.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    }
    : undefined;

  const breadcrumbsNode = {
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
      { "@type": "ListItem", position: 3, name: input.service.name, item: canonical },
    ],
  };

  const webPageNode = {
    ...buildWebPageNode(canonical, input, primaryImage),
    about: { "@id": `${canonical}#service` },
  };

  return [webPageNode, serviceNode, breadcrumbsNode, faqNode];
}

function buildPortfolioGraph(canonical: string, input: PortfolioPageInput, primaryImage?: string) {
  const images = toImageUrls(input.images);

  const articleNode = {
    "@type": "Article",
    "@id": `${canonical}#article`,
    mainEntityOfPage: { "@id": `${canonical}#webpage` },
    headline: input.title,
    description: input.description,
    image: images,
    keywords: input.keywords?.join(", "),
    author: { "@id": `${SITE}#business` },
    publisher: { "@id": `${SITE}#business` },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
  };

  // Reviews (pragmatic container)
  const reviews = input.project.reviews ?? [];
  const reviewNode =
    reviews.length > 0
      ? {
        "@type": "Product",
        "@id": `${canonical}#work`,
        name: `${input.project.serviceName ?? "Project"} Work`,
        brand: { "@id": `${SITE}#business` },
        review: reviews.map((r, idx) => ({
          "@type": "Review",
          "@id": `${canonical}#review-${idx + 1}`,
          reviewBody: r.quote,
          reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
          author: { "@type": "Person", name: r.authorName },
        })),
      }
      : undefined;

  const breadcrumbsNode = {
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE}/portfolio` },
      { "@type": "ListItem", position: 3, name: input.title, item: canonical },
    ],
  };

  const webPageNode = {
    ...buildWebPageNode(canonical, input, primaryImage),
    mainEntity: { "@id": `${canonical}#article` },
  };

  return [webPageNode, articleNode, breadcrumbsNode, reviewNode];
}

function buildBlogGraph(canonical: string, input: BlogPageInput, primaryImage?: string) {
  const images = toImageUrls(input.images);
  const hasFaq = (input.faqs?.length ?? 0) > 0;

  const blogPostingNode = {
    "@type": "BlogPosting",
    "@id": `${canonical}#post`,
    mainEntityOfPage: { "@id": `${canonical}#webpage` },
    headline: input.post.headline ?? input.title,
    description: input.description,
    image: images,
    keywords: input.keywords?.join(", "),
    author: input.post.authorName
      ? { "@type": "Person", name: input.post.authorName }
      : { "@id": `${SITE}#business` },
    publisher: { "@id": `${SITE}#business` },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    articleSection: input.post.section,
  };

  const faqNode = hasFaq
    ? {
      "@type": "FAQPage",
      "@id": `${canonical}#faqs`,
      mainEntity: input.faqs!.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    }
    : undefined;

  const breadcrumbsNode = {
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: input.title, item: canonical },
    ],
  };

  const webPageNode = {
    ...buildWebPageNode(canonical, input, primaryImage),
    mainEntity: { "@id": `${canonical}#post` },
  };

  return [webPageNode, blogPostingNode, breadcrumbsNode, faqNode];
}

function buildMarketingGraph(canonical: string, input: MarketingPageInput, primaryImage?: string) {
  const hasFaq = (input.faqs?.length ?? 0) > 0;

  const breadcrumbsNode = {
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: input.title, item: canonical },
    ],
  };

  const faqNode = hasFaq
    ? {
      "@type": "FAQPage",
      "@id": `${canonical}#faqs`,
      mainEntity: input.faqs!.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    }
    : undefined;

  const webPageNode = buildWebPageNode(canonical, input, primaryImage);

  return [webPageNode, breadcrumbsNode, faqNode];
}

/** ---------- Main entry ---------- */

export function buildSeo(input: SeoInput): SeoResult {
  const canonical = absUrl(input.path);
  const primaryOgImage = pickOgImage(input);

  const openGraph: OpenGraph = {
    title: input.title,
    description: input.description,
    url: canonical,
    type: input.ogType ?? (input.pageType === "portfolio" || input.pageType === "blog" ? "article" : "website"),
    image: primaryOgImage,
  };

  // Shared root nodes
  const baseGraph: any[] = [buildWebSiteNode(), buildLocalBusinessNode()];

  // Type-specific graph nodes
  const graphNodes =
    input.pageType === "service"
      ? buildServiceGraph(canonical, input, primaryOgImage)
      : input.pageType === "portfolio"
        ? buildPortfolioGraph(canonical, input, primaryOgImage)
        : input.pageType === "blog"
          ? buildBlogGraph(canonical, input, primaryOgImage)
          : buildMarketingGraph(canonical, input, primaryOgImage);

  const jsonLd = stripUndefinedDeep({
    "@context": "https://schema.org",
    "@graph": [...baseGraph, ...graphNodes],
  }) as Record<string, any>;

  return { canonical, openGraph, jsonLd };
}



export function safeJsonLdString(jsonLd: Record<string, any>) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}



export function buildNotFoundSeo(path: string) {
  return buildSeo({
    pageType: "marketing",
    path,
    title: "Page Not Found | Saddle and Spur Construction",
    description:
      "We couldn't find that page. Explore our remodeling services and recent projects in Seattle and King County.",
    ogType: "website",
    ogImage: { src: "/images/og/404.jpg", alt: "Saddle and Spur Construction" },
  });
}
