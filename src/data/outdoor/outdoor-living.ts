import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const outdoorLiving: ServiceEntity = {
  id: "outdoor-seattle",
  type: "service",
  path: "/services/outdoor-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Outdoor,
  name: "Outdoor Living",
  description:
    "Decks, patios, covered outdoor rooms, and pergolas built for Seattle weather — designed to extend your home's living space outside.",
  breadcrumb: "Outdoor Living • Seattle",

  service: {
    serviceType: "Outdoor Living Construction",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Decks & patios",
        description:
          "Composite, hardwood, and concrete surfaces for outdoor living.",
      },
      {
        name: "Covered outdoor rooms",
        description:
          "Pergolas, covered patios, and outdoor rooms for year-round use.",
      },
      {
        name: "Outdoor kitchens",
        description:
          "Built-in grills, counters, and sink areas for outdoor entertaining.",
      },
    ],
  },

  seo: {
    title: "Outdoor Living Seattle | Saddle and Spur Construction",
    description:
      "Decks, patios, covered outdoor rooms, and pergolas in Seattle. Designed for Seattle weather and built to last.",
    keywords: [
      "deck builder seattle",
      "patio contractor seattle",
      "outdoor living seattle",
      "covered patio seattle",
      "pergola seattle",
    ],
    ogImage: {
      src: "/images/services/outdoor/ogImage.jpg",
      alt: "Outdoor living space in Seattle",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "Outdoor living spaces built for Seattle",
  subheader: "Covered, durable, and designed to be used.",
  galleryImages: [
    {
      src: "/images/services/outdoor/gallery-1.jpg",
      alt: "Covered deck with outdoor kitchen",
    },
    {
      src: "/images/services/outdoor/gallery-2.jpg",
      alt: "Concrete patio",
    },
    {
      src: "/images/services/outdoor/gallery-3.jpg",
      alt: "Composite deck",
    },
    {
      src: "/images/services/outdoor/ogImage.jpg",
      alt: "Pergola with string lights",
    },
  ],
  featuredTestimonial: {} as Testimonial,
  faqs: [
    {
      question: "Do decks require permits in Seattle?",
      answer:
        "Decks above 30 inches from grade or attached to the home typically require permits. We handle permitting as part of our scope.",
    },
    {
      question: "What decking materials do you recommend for Seattle?",
      answer:
        "Composite decking is our go-to for Seattle's wet climate — it holds up better than wood over time. We can also do hardwood and concrete depending on your preference.",
    },
    {
      question: "Can you build a covered outdoor room?",
      answer:
        "Yes — covered patios, pergolas, and four-season outdoor rooms are a speciality. Roofed structures may require permits.",
    },
    {
      question: "How long does a deck project take?",
      answer:
        "A straightforward single-level deck typically takes 2–3 weeks. Multi-level decks, covered structures, or projects with outdoor kitchens run 4–6 weeks. Permit timelines vary and we build those into the schedule.",
    },
    {
      question:
        "What's the best way to protect an outdoor structure from Seattle's rain?",
      answer:
        "The two biggest factors are material selection and proper drainage. Composite decking, stainless or powder-coated hardware, proper slope for water runoff, and covered sections where possible all extend the life of any outdoor structure significantly in this climate.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Outdoor living services",
    byline: "Built for the Pacific Northwest.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Composite decks",
        description:
          "Low-maintenance composite decking that holds up to Seattle's wet seasons without the splitting, fading, and annual sealing that wood requires. We build on properly engineered footings with galvanized hardware — the structure underneath is what determines whether a deck lasts 10 years or 30.",
        icon: "fa-solid fa-border-all",
      },
      {
        title: "Covered patios & pergolas",
        description:
          "Covered outdoor spaces designed for year-round use in Seattle's climate, from simple pergolas to fully roofed outdoor rooms with lighting and ceiling fans. We design the roof pitch and drainage to keep the space dry and usable in any weather.",
        icon: "fa-solid fa-umbrella",
      },
      {
        title: "Concrete patios",
        description:
          "Stamped, brushed, and plain concrete poured and finished for low-maintenance outdoor living. Concrete is one of the most durable and cost-effective outdoor surface options and pairs well with a covered structure to create a complete outdoor room.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        title: "Outdoor kitchens",
        description:
          "Built-in grill stations, countertops, and sinks for serious outdoor entertaining. We rough in the gas line, plumbing, and electrical as part of the scope — the outdoor kitchen is planned at the same time as the deck, not added as an afterthought.",
        icon: "fa-solid fa-fire-burner",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const eastlakeDeck: PortfolioEntity = {
  id: "eastlake-covered-deck",
  type: "portfolio",
  path: "/portfolio/eastlake-covered-deck",
  name: "Eastlake Covered Deck",
  description:
    "A two-level composite deck in Eastlake with a covered outdoor room, gas fire pit, and views of Lake Union — designed for year-round Seattle living.",
  breadcrumb: "Portfolio • Outdoor Living • Deck",

  seo: {
    title: "Eastlake Covered Deck | Saddle and Spur Construction",
    description:
      "A two-level composite deck in Eastlake with a covered outdoor room, gas fire pit, and Lake Union views — designed for year-round Seattle living.",
    keywords: [
      "eastlake deck",
      "seattle deck builder",
      "covered deck seattle",
      "composite deck seattle",
    ],
    ogImage: {
      src: "/images/portfolio/outdoor/ogImage.jpg",
      alt: "Eastlake covered deck",
    },
    images: [],
    datePublished: "2025-08-15",
  },

  project: {
    serviceName: "Outdoor Living",
    location: { neighborhood: "Eastlake", city: "Seattle" },
    completionDate: "2025-08-15",
    duration: "5 weeks",
    materials: [
      "Composite decking",
      "Cedar framing",
      "Steel cable railing",
      "Cedar pergola",
      "Gas fire pit",
    ],
    problem:
      "A small, aging wood deck that was unsafe, unusable in rain, and missed the views the lot offered.",
    solution:
      "Demolished the old deck and built a two-level composite deck with a covered outdoor room, cable railing for views, and a gas fire pit area.",
    results: [
      "Year-round outdoor living space",
      "Unobstructed Lake Union views",
      "Low-maintenance composite surface",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/outdoor/gallery-1.jpg",
      alt: "Eastlake covered deck",
    },
    eyebrow: "Outdoor Living • Deck",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Outdoor living",
      href: "/services/outdoor-seattle",
    },
  },

  overview: {
    locationLabel: "Eastlake, Seattle",
    timelineLabel: "5 weeks",
    completedLabel: "August 2025",
    scopeLabel: "Two-level covered deck",
    noteHtml:
      "Composite decking, covered pergola, cable railing, and gas fire pit.",
  },

  highlights: [
    "Two-level composite deck",
    "Covered outdoor room",
    "Steel cable railing — unobstructed views",
    "Gas fire pit",
    "Cedar pergola",
    "Year-round usable space",
    "Completed in 5 weeks",
  ],

  story: {
    homeownerWanted:
      "A deck they could use all year — rain or shine — with the Lake Union views the lot deserved.",
    plan: "Demo the old deck, build two levels of composite with a covered outdoor room on the upper level, cable railing for views, and a gas fire pit on the lower level.",
    buildSteps: [
      "Old deck demolition and disposal",
      "New footings and framing",
      "Lower level decking and fire pit rough-in",
      "Upper level framing and composite",
      "Pergola structure and cable railing",
      "Gas line and fire pit installation",
    ],
    results: [
      "Beautiful year-round outdoor space",
      "Unobstructed views",
      "Passed permit inspection",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Two-level composite deck",
        description:
          "Upper and lower levels in low-maintenance composite decking.",
        icon: "fa-solid fa-border-all",
      },
      {
        name: "Cedar pergola",
        description: "Covered outdoor room on the upper level.",
        icon: "fa-solid fa-umbrella",
      },
      {
        name: "Cable railing",
        description: "Steel cable railing for unobstructed views.",
        icon: "fa-solid fa-minus",
      },
      {
        name: "Gas fire pit",
        description: "Built-in gas fire pit on the lower level.",
        icon: "fa-solid fa-fire-burner",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/outdoor/gallery-1.jpg",
        alt: "Deck overview",
      },
      {
        src: "/images/portfolio/outdoor/gallery-2.jpg",
        alt: "Upper covered level",
      },
      {
        src: "/images/portfolio/outdoor/ogImage.jpg",
        alt: "Gas fire pit",
      },
      {
        src: "/images/portfolio/outdoor/gallery-3.jpg",
        alt: "Cable railing detail",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/outdoor/gallery-3.jpg",
      alt: "Cable railing detail",
    },
    neighborhood: "Eastlake",
    quote:
      "Our backyard was just dead space — a rotting wood deck that wasn't usable in the rain and no real outdoor living to speak of. Marco designed a two-level covered deck with a gas fire pit and cable railing to keep the lake views, and it completely changed how we use the house. We're out there year-round now and it was absolutely worth every penny.",
    author: "Pat L.",
    rating: 5,
  },

  cta: {
    heading: "Ready for an outdoor living space?",
    body: "Tell us about your yard and we'll design something that works for Seattle weather.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [outdoorLiving],
};

outdoorLiving.relatedPortfolio = eastlakeDeck;
outdoorLiving.featuredTestimonial = eastlakeDeck.testimonial;

eastlakeDeck.seo.images = eastlakeDeck.gallery.images;
outdoorLiving.seo.images = outdoorLiving.galleryImages;
