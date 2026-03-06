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
  name: "",
  description: "",
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
    service: {
      name: "Kitchen Remodeling",
      serviceType: "Kitchen Remodel",
      areaServed: ["Greater Seattle / King County"],
      subServices: [
        {
          name: "Cabinetry & layout",
          description:
            "Space planning, custom cabinets, workflow improvements.",
        },
        {
          name: "Tile & surfaces",
          description: "Backsplashes, counters, durable finishes.",
        },
      ],
    },
  },

  index: {
    card: {
      eyebrow: "Interior • Seattle",
      title: "Kitchen Remodeling",
      href: "/services/kitchen-remodeling-seattle",
      description:
        "A kitchen that works better, looks better, and lasts longer.",
      image: {
        src: "/images/services/kitchen/renton-kitchen-1.jpg",
        alt: "Kitchen remodel",
      },
    },
  },

  show: {
    eyebrow: "Kitchen Remodeling",
    header: "Kitchen remodeling, managed end-to-end",
    subheader: "Design, permitting, build — one accountable team.",
    description:
      "We handle planning, selection, and the build so you can enjoy the process and love the result.",
    galleryImages: [
      { src: "/images/kitchen/after.jpg", alt: "Kitchen after" },
      { src: "/images/kitchen/after.jpg", alt: "Kitchen after" },
      { src: "/images/kitchen/after.jpg", alt: "Kitchen after" },
      { src: "/images/kitchen/after.jpg", alt: "Kitchen after" },
      { src: "/images/kitchen/after.jpg", alt: "Kitchen after" },
      { src: "/images/kitchen/after.jpg", alt: "Kitchen after" },
      { src: "/images/kitchen/after.jpg", alt: "Kitchen after" },
    ],
    featuredTestimonial: {
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
    ],
    subServices: {
      eyebrow: "What we do",
      heading: "Kitchen remodeling services",
      byline: "Scope it right, then build it right.",
      primaryCta: { label: "Get a quote", href: "/contact" },
      secondaryCta: { label: "See portfolio", href: "/portfolio" },
      services: [
        {
          name: "Layout & planning",
          description: "Better workflow, better storage.",
          icon: "Layout",
        },
        {
          name: "Cabinet installation",
          description: "Precise install and trim.",
          icon: "Cabinet",
        },
        {
          name: "Layout & planning",
          description: "Better workflow, better storage.",
          icon: "Layout",
        },
        {
          name: "Cabinet installation",
          description: "Precise install and trim.",
          icon: "Cabinet",
        },
        {
          name: "Layout & planning",
          description: "Better workflow, better storage.",
          icon: "Layout",
        },
        {
          name: "Cabinet installation",
          description: "Precise install and trim.",
          icon: "Cabinet",
        },
        {
          name: "Layout & planning",
          description: "Better workflow, better storage.",
          icon: "Layout",
        },
        {
          name: "Cabinet installation",
          description: "Precise install and trim.",
          icon: "Cabinet",
        },
      ],
    },
    relatedPortfolio: {
      eyebrow: "Recent work",
      heading: "Kitchen projects",
      cards: [
        {
          imageSrc: "/images/portfolio/ballard.jpg",
          eyebrow: "Ballard",
          title: "Ballard Kitchen Refresh",
          description: "Bright, modern, durable.",
        },
        {
          imageSrc: "/images/portfolio/ballard.jpg",
          eyebrow: "Ballard",
          title: "Ballard Kitchen Refresh",
          description: "Bright, modern, durable.",
        },
        {
          imageSrc: "/images/portfolio/ballard.jpg",
          eyebrow: "Ballard",
          title: "Ballard Kitchen Refresh",
          description: "Bright, modern, durable.",
        },
        {
          imageSrc: "/images/portfolio/ballard.jpg",
          eyebrow: "Ballard",
          title: "Ballard Kitchen Refresh",
          description: "Bright, modern, durable.",
        },
        {
          imageSrc: "/images/portfolio/ballard.jpg",
          eyebrow: "Ballard",
          title: "Ballard Kitchen Refresh",
          description: "Bright, modern, durable.",
        },
      ],
    },
  },

  related: [{ id: "portfolio_ballard_kitchen", type: "portfolio" }],
};

export const ballardKitchen: PortfolioEntity = {
  id: "ballard-kitchen-refresh",
  type: "portfolio",
  path: "/portfolio/ballard-kitchen-refresh",
  name: "Ballard Kitchen Refresh",
  description:
    "A Ballard kitchen refresh: improved layout, updated finishes, and a cleaner modern look.",
  seo: {
    title: "Ballard Kitchen Refresh | Saddle and Spur Construction",
    description:
      "A Ballard kitchen refresh: improved layout, updated finishes, and a cleaner modern look.",
    keywords: ["ballard kitchen remodel", "seattle kitchen contractor"],
    ogImage: {
      src: "/images/og/ballard-kitchen.jpg",
      alt: "Ballard kitchen",
    },
    images: [
      {
        src: "/images/portfolio/ballard-kitchen/after.jpg",
        alt: "Kitchen after",
      },
    ],
    datePublished: "2025-11-10",
    project: {
      name: "Ballard Kitchen Refresh",
      serviceName: "Kitchen Remodeling",
      servicePath: "/services/kitchen-remodeling-seattle",
      location: { neighborhood: "Ballard", city: "Seattle" },
      completionDate: "2025-11-10",
      duration: "6 weeks",

      servicesPerformed: [
        {
          name: "Cabinet installation",
          description: "New cabinets with clean reveals.",
          icon: "",
        },
        {
          name: "Tile backsplash",
          description: "Durable, easy-clean tile.",
          icon: "",
        },
      ],
      materials: ["Quartz", "Porcelain tile", "Maple cabinetry"],
      problem: "Outdated layout with poor storage and lighting.",
      solution:
        "Reworked layout, better storage, brighter surfaces, upgraded lighting.",
      results: [
        "More counter space",
        "Better workflow",
        "Brighter overall feel",
      ],
      testimonial: {
        neighborhood: "",
        quote: "The schedule was clear and the work is beautiful.",
        author: "Morgan K.",
        rating: 5,
      },
    },
  },

  index: {
    card: {
      eyebrow: "Ballard • Seattle",
      title: "Ballard Kitchen Refresh",
      description: "Brighter, cleaner, more storage.",
      href: "/portfolio/ballard-kitchen-refresh",
      image: {
        src: "/images/cards/ballard-kitchen.jpg",
        alt: "Ballard kitchen after",
      },
    },
  },

  show: {
    hero: {
      image: { src: "", alt: "" },
      eyebrow: "Services • Interior • Kitchen Remodel",
      headline: "Ballard Kitchen Refresh",
      byline: "Layout improvements, modern finishes, and better lighting.",
      primaryCta: { label: "Start your project", href: "/contact" },
      secondaryCta: {
        label: "Kitchen remodeling",
        href: "/services/kitchen-remodeling-seattle",
      },
    },
    overview: {
      locationLabel: "Ballard, Seattle",
      timelineLabel: "6 weeks",
      completedLabel: "Completed Nov 2025",
      scopeLabel: "Kitchen refresh",
      noteHtml: "<p>We focused on workflow, storage, and durable surfaces.</p>",
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
      homeownerWanted: "A cleaner, brighter kitchen with better storage.",
      plan: "Update layout, replace cabinets, refresh surfaces and lighting.",
      buildSteps: [
        "Demo",
        "Rough-in",
        "Cabinets",
        "Surfaces",
        "Tile",
        "Finish",
      ],
      results: ["More counter space", "Improved storage", "Modern look"],
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
        {
          src: "/images/portfolio/ballard-kitchen/after.jpg",
          alt: "After",
        },
        {
          src: "/images/portfolio/ballard-kitchen/after.jpg",
          alt: "After",
        },
        {
          src: "/images/portfolio/ballard-kitchen/after.jpg",
          alt: "After",
        },
        {
          src: "/images/portfolio/ballard-kitchen/after.jpg",
          alt: "After",
        },
        {
          src: "/images/portfolio/ballard-kitchen/after.jpg",
          alt: "After",
        },
        {
          src: "/images/portfolio/ballard-kitchen/after.jpg",
          alt: "After",
        },
        {
          src: "/images/portfolio/ballard-kitchen/after.jpg",
          alt: "After",
        },
        {
          src: "/images/portfolio/ballard-kitchen/after.jpg",
          alt: "After",
        },
      ],
    },
    testimonial: {
      neighborhood: "",
      quote: "The schedule was clear and the work is beautiful.",
      author: "Morgan K.",
      rating: 5,
    },
    faqs: [
      {
        question: "Can you remodel without moving out?",
        answer: "Often yes—depending on scope and access.",
      },
    ],
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
  },

  related: [{ id: "service_kitchen_remodel", type: "service" }],
};
