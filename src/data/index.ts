import type {
  CollectionPage,
  PortfolioEntity,
  PortfolioIndexCard,
  ServiceCategory,
  ServiceEntity,
  ServiceIndexCard,
} from "../types/entity-types";
import { ballardKitchen, kitchenRemodel } from "./interior/kitchen-remodel";
import {
  bathroomRemodel,
  capitolHillBathroom,
} from "./interior/bathroom-remodel";
import {
  wholeHomeRemodel,
  fremontWholeHome,
} from "./interior/whole-home-remodel";
import { flooringInstallation, queenAnneFlooring } from "./interior/flooring";
import {
  windowsDoors,
  wallingfordWindowsDoors,
} from "./interior/windows-doors";
import { aduConstruction, phinneyRidgeAdu } from "./expansion/adu-construction";
import { homeAdditions, ravennaAddition } from "./expansion/home-additions";
import {
  garageConversions,
  columbiaGarageOffice,
} from "./expansion/garage-conversions";
import {
  unusedSpaceConversions,
  greenwoodBasement,
} from "./expansion/unused-space-conversions";
import { outdoorLiving, eastlakeDeck } from "./outdoor/outdoor-living";
import {
  roofingStructural,
  madisonParkRoof,
} from "./structural/roofing-structural";
import {
  structuralUpgrades,
  capitolHillSeismic,
} from "./structural/structural-upgrades";

export const services: ServiceEntity[] = [
  kitchenRemodel,
  bathroomRemodel,
  wholeHomeRemodel,
  flooringInstallation,
  windowsDoors,
  aduConstruction,
  homeAdditions,
  garageConversions,
  unusedSpaceConversions,
  outdoorLiving,
  roofingStructural,
  structuralUpgrades,
];

export const portfolio: PortfolioEntity[] = [
  ballardKitchen,
  capitolHillBathroom,
  fremontWholeHome,
  queenAnneFlooring,
  wallingfordWindowsDoors,
  phinneyRidgeAdu,
  ravennaAddition,
  columbiaGarageOffice,
  greenwoodBasement,
  eastlakeDeck,
  madisonParkRoof,
  capitolHillSeismic,
];

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
    homePageFeatured: s.homePageFeatured,
    neighborhood: s.featuredTestimonial.neighborhood,
    featuredPortfolioHref: s.relatedPortfolio.path,
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
    ogImage: { src: "/images/services/kitchen/ogImage.jpg", alt: "Services" },
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
    byline: "Recent kitchens, baths, whole-home projects, ADUs, and more.",
    primaryCta: { label: "Start your project", href: "/contact" },
  },
  cards: portfolioIndexCards,
};
