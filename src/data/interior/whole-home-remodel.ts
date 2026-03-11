import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";
import { kitchenRemodel } from "./kitchen-remodel";
import { bathroomRemodel } from "./bathroom-remodel";
import { flooringInstallation } from "./flooring";

export const wholeHomeRemodel: ServiceEntity = {
  id: "whole-home-remodeling-seattle",
  type: "service",
  path: "/services/whole-home-remodeling-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Interior,
  name: "Whole Home Remodeling",
  description:
    "Full-home renovations coordinated under one contract — kitchen, baths, living spaces, and more.",
  breadcrumb: "Interior • Seattle",

  service: {
    serviceType: "Whole Home Remodel",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Kitchen & bathrooms",
        description: "Core wet-area remodels as part of a whole-home scope.",
      },
      {
        name: "Open-concept conversions",
        description: "Wall removal, structural work, and layout improvements.",
      },
    ],
  },

  seo: {
    title: "Whole Home Remodeling Seattle | Saddle and Spur Construction",
    description:
      "Comprehensive whole-home remodels in Seattle. One team, one contract, one clear plan from demo through final punch list.",
    keywords: [
      "whole home remodel seattle",
      "full home renovation seattle",
      "general contractor seattle",
    ],
    ogImage: {
      src: "/images/services/whole-home/ogImage.jpg",
      alt: "Whole home remodel in Seattle",
    },
    images: [
      {
        src: "/images/services/whole-home/after.jpg",
        alt: "Whole home after remodel",
      },
    ],
    datePublished: "2026-01-10",
  },

  header: "Whole home remodeling, one team",
  subheader: "Every room, every trade, one accountable contractor.",
  galleryImages: [
    {
      src: "/images/services/whole-home/gallery-1.jpg",
      alt: "Open kitchen and living",
    },
    { src: "/images/services/whole-home/gallery-2.jpg", alt: "Primary bath" },
    { src: "/images/services/whole-home/gallery-3.jpg", alt: "Living room" },
    { src: "/images/services/whole-home/gallery-4.jpg", alt: "Entry hall" },
  ],
  featuredTestimonial: {
    image: {
      src: "/images/services/whole-home/after.jpg",
      alt: "Whole home after",
    },
    neighborhood: "Fremont",
    quote:
      "We had a kitchen, two bathrooms, and flooring all needing work at the same time and were nervous about coordinating multiple contractors. Luke handled every trade under one schedule — and when sequencing shifted mid-project, they sorted it out without ever making it our problem. Having one team manage everything made a genuinely overwhelming project feel completely under control.",
    author: "Dana L.",
    rating: 5,
  },
  faqs: [
    {
      question: "Can we live in the home during a whole-home remodel?",
      answer:
        "It depends on the scope. We'll give you an honest assessment during planning — sometimes phasing allows you to stay, sometimes it's better not to.",
    },
    {
      question: "How do you sequence a whole-home remodel?",
      answer:
        "We work from the outside in: structure and rough-in first, then finishes room by room to minimize disruption.",
    },
    {
      question: "How long does a whole home remodel take?",
      answer:
        "Typical projects run 3–6 months depending on scope, finishes, and permit timelines.",
    },
    {
      question: "Do you manage all the trades or use subcontractors?",
      answer:
        "We manage all trades under one contract — our own crew plus vetted subcontractors for specialty work like HVAC and electrical. You have one point of contact for everything.",
    },
    {
      question: "What's the biggest cause of whole-home remodel cost overruns?",
      answer:
        "Hidden conditions discovered after demo — old plumbing, undersized electrical panels, rot, or asbestos in older homes. We do a thorough pre-demo assessment and build contingency into every whole-home budget.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Whole home remodeling services",
    byline: "One team. Every room.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Kitchen & dining",
        description:
          "Full kitchen remodels as part of a coordinated whole-home scope — layout, cabinetry, countertops, and appliances sequenced with the rest of the build. Doing the kitchen as part of a larger project saves mobilization time and keeps the disruption consolidated.",
        icon: "fa-solid fa-utensils",
      },
      {
        title: "Bathrooms",
        description:
          "Primary, guest, and powder room remodels handled under one contract and one schedule. We sequence the bathrooms around each other so you're never without a working bathroom during the project.",
        icon: "fa-solid fa-shower",
      },
      {
        title: "Open-concept conversions",
        description:
          "Wall removal, engineered beam installation, and structural work to open up the closed layouts common in older Seattle homes. We assess load paths before demo, engineer the beam, and handle the permit — no guesswork.",
        icon: "fa-solid fa-house-chimney",
      },
      {
        title: "Flooring throughout",
        description:
          "Consistent flooring specified and installed across all spaces as part of the whole-home scope. Installing flooring across the whole home at once produces cleaner transitions and a more cohesive result than room-by-room work.",
        icon: "fa-solid fa-border-all",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const fremontWholeHome: PortfolioEntity = {
  id: "fremont-whole-home-remodel",
  type: "portfolio",
  path: "/portfolio/fremont-whole-home-remodel",
  name: "Fremont Whole Home Remodel",
  description:
    "A 1960s Fremont home transformed: open layout, new kitchen, two updated bathrooms, and new flooring throughout.",
  breadcrumb: "Portfolio • Interior • Whole Home Remodel",

  seo: {
    title: "Fremont Whole Home Remodel | Saddle and Spur Construction",
    description:
      "A 1960s Fremont home transformed: open layout, new kitchen, two updated bathrooms, and new flooring throughout.",
    keywords: [
      "fremont home remodel",
      "seattle whole home renovation",
      "open concept remodel seattle",
    ],
    ogImage: {
      src: "/images/portfolio/whole-home/ogImage.jpg",
      alt: "Fremont whole home remodel",
    },
    images: [],
    datePublished: "2025-09-01",
  },

  project: {
    serviceName: "Whole Home Remodeling",
    location: { neighborhood: "Fremont", city: "Seattle" },
    completionDate: "2025-09-01",
    duration: "4 months",
    materials: [
      "White oak hardwood",
      "Quartz counters",
      "Porcelain tile",
      "Shaker cabinetry",
    ],
    problem:
      "Choppy 1960s layout with a closed-off kitchen, two dated bathrooms, and worn carpet throughout.",
    solution:
      "Removed the wall between kitchen and living, opened the floor plan, updated both bathrooms, and installed white oak floors throughout.",
    results: [
      "Open, connected living spaces",
      "Modern kitchen and baths",
      "Consistent flooring throughout",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/whole-home/ogImage.jpg",
      alt: "Fremont whole home after remodel",
    },
    eyebrow: "Interior • Whole Home Remodel",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Whole home remodeling",
      href: "/services/whole-home-remodeling-seattle",
    },
  },

  overview: {
    locationLabel: "Fremont, Seattle",
    timelineLabel: "4 months",
    completedLabel: "September 2025",
    scopeLabel: "Whole home remodel",
    noteHtml:
      "Open layout, kitchen, two bathrooms, and white oak flooring throughout.",
  },

  highlights: [
    "Open kitchen / living layout",
    "New white oak floors throughout",
    "Two updated bathrooms",
    "New kitchen with island",
    "Consistent finishes across all spaces",
    "Completed on schedule",
  ],

  story: {
    homeownerWanted:
      "A home that felt open, modern, and cohesive — without moving to a new house.",
    plan: "Remove the kitchen wall, update both bathrooms, replace all flooring, and tie the finishes together throughout.",
    buildSteps: [
      "Structural assessment and wall removal",
      "Kitchen rough-in and cabinetry",
      "Both bathroom tile and fixtures",
      "White oak hardwood throughout",
      "Paint and trim throughout",
    ],
    results: [
      "Open, connected floor plan",
      "Modern kitchen and baths",
      "Cohesive finishes home-wide",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Wall removal & beam",
        description: "Structural work to open the kitchen to the living area.",
        icon: "fa-solid fa-hammer",
      },
      {
        name: "Kitchen remodel",
        description:
          "Full kitchen with island, shaker cabinets, and quartz counters.",
        icon: "fa-solid fa-utensils",
      },
      {
        name: "Two bathrooms",
        description:
          "Primary and guest bath updated with new tile and fixtures.",
        icon: "fa-solid fa-shower",
      },
      {
        name: "Hardwood flooring",
        description: "White oak throughout main and upper levels.",
        icon: "fa-solid fa-border-all",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/whole-home/gallery-1.jpg",
        alt: "Open kitchen and living",
      },
      {
        src: "/images/portfolio/whole-home/gallery-2.jpg",
        alt: "Primary bath",
      },
      { src: "/images/portfolio/whole-home/gallery-3.jpg", alt: "Living room" },
      { src: "/images/portfolio/whole-home/gallery-4.jpg", alt: "Entry hall" },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/whole-home/testimonial.jpg",
      alt: "Open kitchen and living",
    },
    neighborhood: "Fremont",
    quote:
      "We had a kitchen, two bathrooms, and flooring all needing work at the same time and were nervous about coordinating multiple contractors. Luke handled every trade under one schedule — and when sequencing shifted mid-project, they sorted it out without ever making it our problem. Having one team manage everything made a genuinely overwhelming project feel completely under control.",
    author: "Dana L.",
    rating: 5,
  },

  cta: {
    heading: "Ready to transform your home?",
    body: "Tell us about your goals and we'll put together a clear scope and timeline.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [
    wholeHomeRemodel,
    kitchenRemodel,
    bathroomRemodel,
    flooringInstallation,
  ],
};

wholeHomeRemodel.relatedPortfolio = fremontWholeHome;
kitchenRemodel.featuredTestimonial = fremontWholeHome.testimonial;

fremontWholeHome.seo.images = fremontWholeHome.gallery.images;
wholeHomeRemodel.seo.images = wholeHomeRemodel.galleryImages;
