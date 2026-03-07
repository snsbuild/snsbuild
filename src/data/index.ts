import type {
  CollectionPage,
  PortfolioEntity,
  PortfolioIndexCard,
  ServiceCategory,
  ServiceEntity,
  ServiceIndexCard,
} from "../types/entity-types";
import { ballardKitchen, kitchenRemodel } from "./interior/kitchen-remodel";

export const services = [kitchenRemodel];

export const portfolio = [ballardKitchen];

const portfolioIndexCards = portfolio.map((p) => toPortfolioIndexCards(p));

function toPortfolioIndexCards(p: PortfolioEntity): PortfolioIndexCard {
  return {
    eyebrow: p.breadcrumb,
    title: p.name,
    href: p.path,
    description: p.description,
    image: p.seo.ogImage,
  };
}

const serviceIndexCards = services.map((s) => toServiceIndexCard(s));

function toServiceIndexCard(s: ServiceEntity): ServiceIndexCard {
  return {
    eyebrow: s.breadcrumb,
    title: s.name,
    href: s.path,
    description: s.description,
    image: s.seo.ogImage,
  };
}

export const filterByCategory = (category: ServiceCategory) => {
  return services
    .filter((s) => s.category == category)
    .map((s) => toServiceIndexCard(s));
};

export const homePageFeaturedServices = () => {
  return services
    .filter((s) => s.homePageFeatured)
    .map((s) => toServiceIndexCard(s));
};

export const servicesIndex: CollectionPage<any> = {
  kind: "collection",
  type: "services",
  path: "/services",
  seo: {
    images: [],
    title: "Remodeling Services in Seattle | Saddle and Spur Construction",
    description:
      "Explore our remodeling services in Seattle and King County. Kitchens, bathrooms, additions, and more.",
    ogImage: { src: "/images/og/services.jpg", alt: "Services" },
    keywords: ["general contractor seattle", "remodeling services seattle"],
  },
  content: {
    headline: "Services",
    byline: "End-to-end remodeling for Seattle homes.",
    primaryCta: { label: "Get a quote", href: "/contact" },
  },
  cards: serviceIndexCards,
};

export const portfolioIndex: CollectionPage<any> = {
  kind: "collection",
  type: "portfolio",
  path: "/portfolio",
  seo: {
    images: [],
    title: "Seattle Remodeling Portfolio | Saddle and Spur Construction",
    description:
      "See our recent remodeling projects across Seattle and King County.",
    ogImage: { src: "/images/og/portfolio.jpg", alt: "Portfolio" },
    keywords: ["seattle remodeling portfolio", "contractor portfolio seattle"],
  },
  content: {
    headline: "Portfolio",
    byline: "Recent kitchens, baths, and whole-home projects.",
    primaryCta: { label: "Start your project", href: "/contact" },
  },
  cards: portfolioIndexCards,
};
