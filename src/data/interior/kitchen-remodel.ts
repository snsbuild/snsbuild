import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const kitchenRemodel: ServiceEntity = {
  id: "kitchen-remodeling-seattle",
  type: "service",
  path: "/services/kitchen-remodeling-seattle",
  homePageFeatured: true,
  category: ServiceCategory.Interior,
  name: "Kitchen Remodeling",
  description:
    "We handle planning, selection, and the build so you can enjoy the process and love the result.",

  service: {
    name: "Kitchen Remodeling",
    serviceType: "Kitchen Remodel",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Cabinetry & layout",
        description: "Space planning, custom cabinets, workflow improvements.",
      },
      {
        name: "Tile & surfaces",
        description: "Backsplashes, counters, durable finishes.",
      },
    ],
  },

  seo: {
    title: "Kitchen Remodeling in Seattle | Saddle and Spur Construction",
    description:
      "Design-forward kitchen remodels built for Seattle homes. Transparent timelines, clear pricing, and high-quality finishes.",
    keywords: [
      "kitchen remodeling seattle",
      "kitchen renovation seattle",
      "general contractor seattle",
    ],
    ogImage: {
      src: "/images/og/kitchen.jpg",
      alt: "Kitchen remodel in Seattle",
    },
    images: [{ src: "/images/kitchen/after.jpg", alt: "Kitchen after" }],
    datePublished: "2026-01-10",
  },

  breadcrumb: "Interior • Seattle",

  header: "Kitchen remodeling, managed end-to-end",
  subheader: "Design, permitting, build — one accountable team.",
  galleryImages: [
    {
      src: "/images/services/kitchen/bainbridge-kitchen-1.jpg",
      alt: "Bainbridge",
    },
    {
      src: "/images/services/kitchen/mercer-kitchen-1.jpg",
      alt: "Mercer",
    },
    {
      src: "/images/services/kitchen/bellevue-kitchen-1.jpg",
      alt: "Bellevue",
    },
    {
      src: "/images/services/kitchen/magnolia-kitchen-1.jpg",
      alt: "Magnolia",
    },
    {
      src: "/images/services/kitchen/bainbridge-kitchen-2.jpg",
      alt: "Bainbridge",
    },
    {
      src: "/images/services/kitchen/renton-kitchen-1.jpg",
      alt: "Renton",
    },
  ],
  featuredTestimonial: {
    image: { src: "/images/kitchen/after.jpg", alt: "Kitchen after" },
    neighborhood: "Ballard",
    quote: "Clear plan, great craftsmanship.",
    author: "Jamie R.",
    rating: 5,
  },
  faqs: [
    {
      question: "How long does a kitchen remodel take?",
      answer: "Most projects take 6-10 weeks depending on scope.",
    },
    {
      question: "How long does a kitchen remodel take?",
      answer: "Most projects take 6-10 weeks depending on scope.",
    },
    {
      question: "How long does a kitchen remodel take?",
      answer: "Most projects take 6-10 weeks depending on scope.",
    },
    {
      question: "How long does a kitchen remodel take?",
      answer: "Most projects take 6-10 weeks depending on scope.",
    },
    {
      question: "How long does a kitchen remodel take?",
      answer: "Most projects take 6-10 weeks depending on scope.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Kitchen remodeling services",
    byline: "Scope it right, then build it right.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Layout & planning",
        description:
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart's content.",
        icon: "Layout",
      },
      {
        title: "Cabinet installation",
        description:
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart's content.",
        icon: "Cabinet",
      },
      {
        title: "Layout & planning",
        description:
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart's content.",
        icon: "Layout",
      },
      {
        title: "Cabinet installation",
        description:
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart's content.",
        icon: "Cabinet",
      },
      {
        title: "Layout & planning",
        description:
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart's content.",
        icon: "Layout",
      },
      {
        title: "Cabinet installation",
        description:
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart's content.",
        icon: "Cabinet",
      },
      {
        title: "Layout & planning",
        description:
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart's content.",
        icon: "Layout",
      },
      {
        title: "Cabinet installation",
        description:
          "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart's content.",
        icon: "Cabinet",
      },
    ],
  },
  relatedPortfolio: {
    eyebrow: "Recent work",
    heading: "Kitchen projects",
    cards: [
      {
        imageSrc: "/images/services/kitchen/renton-kitchen-1.jpg",
        eyebrow: "Ballard",
        title: "Ballard Kitchen Refresh",
        description: "Bright, modern, durable.",
      },
      {
        imageSrc: "/images/services/kitchen/mercer-kitchen-1.jpg",
        eyebrow: "Ballard",
        title: "Ballard Kitchen Refresh",
        description: "Bright, modern, durable.",
      },
      {
        imageSrc: "/images/services/kitchen/bellevue-kitchen-1.jpg",
        eyebrow: "Ballard",
        title: "Ballard Kitchen Refresh",
        description: "Bright, modern, durable.",
      },
      {
        imageSrc: "/images/services/kitchen/magnolia-kitchen-1.jpg",
        eyebrow: "Ballard",
        title: "Ballard Kitchen Refresh",
        description: "Bright, modern, durable.",
      },
      {
        imageSrc: "/images/services/kitchen/renton-kitchen-1.jpg",
        eyebrow: "Ballard",
        title: "Ballard Kitchen Refresh",
        description: "Bright, modern, durable.",
      },
    ],
  },
};

export const ballardKitchen: PortfolioEntity = {
  id: "ballard-kitchen-refresh",
  type: "portfolio",
  path: "/portfolio/ballard-kitchen-refresh",
  name: "Ballard Kitchen Refresh",
  description:
    "A Ballard kitchen refresh: improved layout, updated finishes, and a cleaner modern look.",
  breadcrumb: "Portfolio • Interior • Kitchen Remodel",
  seo: {
    title: "Ballard Kitchen Refresh | Saddle and Spur Construction",
    description:
      "A Ballard kitchen refresh: improved layout, updated finishes, and a cleaner modern look.",
    keywords: [
      "ballard kitchen remodel",
      "seattle kitchen contractor",
      "seattle kitchen remodel",
    ],
    ogImage: {
      src: "/images/og/ballard-kitchen.jpg",
      alt: "Ballard kitchen",
    },
    images: [
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
    ],
    datePublished: "2025-11-10",
  },

  project: {
    serviceName: "Kitchen Remodeling",
    location: { neighborhood: "Ballard", city: "Seattle" },
    completionDate: "2025-11-10",
    duration: "6 weeks",
    materials: ["Quartz", "Porcelain tile", "Maple cabinetry"],
    problem: "Outdated layout with poor storage and lighting.",
    solution:
      "Reworked layout, better storage, brighter surfaces, upgraded lighting.",
    results: ["More counter space", "Better workflow", "Brighter overall feel"],
    testimonial: {
      neighborhood: "",
      quote: "The schedule was clear and the work is beautiful.",
      author: "Morgan K.",
      rating: 5,
    },
  },

  hero: {
    eyebrow: "Services • Interior • Kitchen Remodel",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Kitchen remodeling",
      href: "/services/kitchen-remodeling-seattle",
    },
  },

  overview: {
    locationLabel: "Ballard, Seattle",
    timelineLabel: "6 weeks",
    completedLabel: "November 2025",
    scopeLabel: "Kitchen remodel",
    noteHtml:
      "Reworked layout, better storage, brighter surfaces, and upgraded lighting.",
  },

  highlights: [
    "Better workflow",
    "More storage",
    "Brighter surfaces",
    "Better faster stronger",
    "More stuff to put stuff",
    "Better workflow",
    "More storage",
    "Brighter surfaces",
    "Better faster stronger",
    "More stuff to put stuff",
    "More stuff to put stuff",
    "Better workflow",
    "More storage",
    "Brighter surfaces",
  ],

  story: {
    homeownerWanted: "Outdated layout with poor storage and lighting.",
    plan: "Reworked layout, better storage, brighter surfaces, upgraded lighting.",
    buildSteps: [
      "Demolition and prep",
      "Cabinet installation",
      "Tile backsplash",
      "Countertop installation",
      "Lighting and fixtures",
    ],
    results: ["More counter space", "Better workflow", "Brighter overall feel"],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Cabinet installation",
        description: "Clean reveals and alignment.",
        icon: "Cabinet",
      },
      {
        name: "Tile backsplash",
        description: "Durable, easy-clean tile.",
        icon: "Tile",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
      { src: "/images/portfolio/ballard-kitchen/after.jpg", alt: "After" },
    ],
  },

  testimonial: {
    neighborhood: "",
    quote: "The schedule was clear and the work is beautiful.",
    author: "Morgan K.",
    rating: 5,
  },

  cta: {
    heading: "Ready to plan your remodel?",
    body: "Tell us about your goals and we'll propose a clear scope and timeline.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [
    {
      title: "Kitchen remodeling",
      description: "See our kitchen service page.",
      href: "/services/kitchen-remodeling-seattle",
    },
  ],
};
