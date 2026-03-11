import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const garageConversions: ServiceEntity = {
  id: "garage-conversions-seattle",
  type: "service",
  path: "/services/garage-conversions-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Expansion,
  name: "Garage Conversions",
  description:
    "Turn underused garage space into a home office, gym, studio, or ADU — permitted and finished to match your home.",
  breadcrumb: "Expansion • Seattle",

  service: {
    serviceType: "Garage Conversion",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Garage-to-ADU conversion",
        description:
          "Convert a garage into a permitted accessory dwelling unit.",
      },
      {
        name: "Garage-to-living-space",
        description: "Home office, studio, gym, or bonus room conversions.",
      },
      {
        name: "Above-garage additions",
        description: "Add living space above an existing garage structure.",
      },
    ],
  },

  seo: {
    title: "Garage Conversions Seattle | Saddle and Spur Construction",
    description:
      "Garage conversions in Seattle — turn underused garage space into a home office, ADU, studio, or gym. Permitted and built to match your home.",
    keywords: [
      "garage conversion seattle",
      "garage to ADU seattle",
      "garage to living space seattle",
      "convert garage seattle",
    ],
    ogImage: {
      src: "/images/services/garage-conversion/ogImage.jpg",
      alt: "Exterior",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "Garage conversions that add real living space",
  subheader: "Office, studio, ADU, or gym — permitted and finished right.",
  galleryImages: [
    {
      src: "/images/services/garage-conversion/gallery-1.jpg",
      alt: "Converted garage exterior",
    },
    {
      src: "/images/services/garage-conversion/gallery-2.jpg",
      alt: "Home office interior",
    },
    {
      src: "/images/services/garage-conversion/gallery-3.jpg",
      alt: "Garage ADU kitchen",
    },
    {
      src: "/images/services/garage-conversion/gallery-4.jpg",
      alt: "Studio space",
    },
  ],
  featuredTestimonial: {} as Testimonial,
  faqs: [
    {
      question: "Do garage conversions require permits in Seattle?",
      answer:
        "Yes — any conversion to habitable space requires permits. We manage the permitting process as part of our scope.",
    },
    {
      question: "Can a garage be converted to an ADU?",
      answer:
        "Yes, if it meets Seattle's ADU requirements. We'll assess your garage and lot during planning.",
    },
    {
      question: "Will I lose parking?",
      answer:
        "That depends on your lot and Seattle parking requirements. We'll walk through the options with you.",
    },
    {
      question: "What does a garage conversion typically cost?",
      answer:
        "A basic garage-to-office or gym conversion typically runs $40K–$80K depending on insulation, HVAC, electrical, and finishes. A full garage-to-ADU conversion is more involved and typically runs $100K–$200K+ depending on plumbing and kitchen scope.",
    },
    {
      question: "How do you insulate and heat a converted garage?",
      answer:
        "We use spray foam insulation for the tightest thermal envelope, and a mini-split heat pump for efficient year-round heating and cooling. This combination is what makes a converted garage genuinely comfortable in Seattle winters.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Garage conversion services",
    byline: "More useful space from what you already have.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Garage-to-ADU",
        description:
          "Convert your garage into a permitted, rentable accessory dwelling unit with a full kitchen, bath, and independent utilities. A garage ADU is often the most cost-effective path to adding rental income in Seattle because the shell structure is already there.",
        icon: "fa-solid fa-house",
      },
      {
        title: "Home office",
        description:
          "A quiet, properly insulated, well-lit workspace separated from the main home by a door and a few feet of air. We design garage offices to be video-call-ready — good natural light, proper electrical, and fiber conduit as standard.",
        icon: "fa-solid fa-laptop",
      },
      {
        title: "Studio or gym",
        description:
          "Creative, fitness, and flex spaces designed for how you actually use them. We pay attention to acoustics, flooring, natural light, and HVAC when converting for these uses — details that matter more in a gym or studio than in a basic office.",
        icon: "fa-solid fa-dumbbell",
      },
      {
        title: "Insulation & HVAC",
        description:
          "Spray foam insulation and a mini-split heat pump for year-round comfort in the converted space. Garage walls typically have no insulation — getting the thermal envelope right is the most important single investment in making a converted garage feel like a real room.",
        icon: "fa-solid fa-wind",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const columbiaGarageOffice: PortfolioEntity = {
  id: "columbia-city-garage-office",
  type: "portfolio",
  path: "/portfolio/columbia-city-garage-office",
  name: "Columbia City Garage Office",
  description:
    "A Columbia City single-car garage converted into a home office — insulated, heated, wired for fiber, and finished to match the main house.",
  breadcrumb: "Portfolio • Expansion • Garage Conversion",

  seo: {
    title: "Columbia City Garage Office | Saddle and Spur Construction",
    description:
      "A Columbia City single-car garage converted into a home office — insulated, heated, wired for fiber, and finished to match the main house.",
    keywords: [
      "columbia city garage conversion",
      "seattle garage office",
      "garage to home office seattle",
    ],
    ogImage: {
      src: "/images/portfolio/garage-conversion/ogImage.jpg",
      alt: "Exterior",
    },
    images: [],
    datePublished: "2025-06-01",
  },

  project: {
    serviceName: "Garage Conversions",
    location: { neighborhood: "Columbia City", city: "Seattle" },
    completionDate: "2025-06-01",
    duration: "6 weeks",
    materials: [
      "Spray foam insulation",
      "LVP flooring",
      "Mini-split HVAC",
      "Fiber optic conduit",
      "Shiplap accent wall",
    ],
    problem:
      "A rarely-used single-car garage with no insulation, no heat, and poor lighting — wasted space while the homeowner worked from a dining room table.",
    solution:
      "Insulated walls and ceiling, installed mini-split HVAC, added natural light with new windows, ran fiber conduit, and finished to a clean modern standard.",
    results: [
      "Dedicated home office",
      "Comfortable year-round",
      "Fiber-connected",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/garage-conversion/ogImage.jpg",
      alt: "Exterior",
    },
    eyebrow: "Expansion • Garage Conversion",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Garage conversions",
      href: "/services/garage-conversions-seattle",
    },
  },

  overview: {
    locationLabel: "Columbia City, Seattle",
    timelineLabel: "6 weeks",
    completedLabel: "June 2025",
    scopeLabel: "Garage-to-office conversion",
    noteHtml:
      "Full conversion with insulation, HVAC, fiber, and custom finishes.",
  },

  highlights: [
    "Full spray foam insulation",
    "Mini-split heating and cooling",
    "New casement windows",
    "LVP flooring",
    "Fiber optic conduit",
    "Shiplap accent wall",
    "Completed in 6 weeks",
  ],

  story: {
    homeownerWanted:
      "A proper workspace — insulated, heated, and separate from the house.",
    plan: "Convert the single-car garage: spray foam the envelope, add HVAC, install new windows for light, run fiber, and finish with clean modern details.",
    buildSteps: [
      "Demo and rough-in",
      "Spray foam insulation",
      "Electrical and fiber conduit",
      "Mini-split installation",
      "Drywall and LVP flooring",
      "Windows, trim, and paint",
    ],
    results: [
      "Comfortable year-round workspace",
      "Professional finish",
      "Completed on schedule",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Insulation",
        description:
          "Spray foam walls and ceiling for a tight thermal envelope.",
        icon: "fa-solid fa-temperature-half",
      },
      {
        name: "HVAC",
        description: "Mini-split for year-round heating and cooling.",
        icon: "fa-solid fa-wind",
      },
      {
        name: "Electrical",
        description: "Upgraded panel, outlets, and fiber conduit.",
        icon: "fa-solid fa-bolt",
      },
      {
        name: "Finishes",
        description:
          "LVP flooring, shiplap accent wall, and clean trim throughout.",
        icon: "fa-solid fa-paint-roller",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/garage-conversion/gallery-1.jpg",
        alt: "Office after",
      },
      {
        src: "/images/portfolio/garage-conversion/gallery-2.jpg",
        alt: "Desk wall",
      },
      {
        src: "/images/portfolio/garage-conversion/gallery-3.jpg",
        alt: "New windows",
      },
      {
        src: "/images/portfolio/garage-conversion/gallery-4.jpg",
        alt: "Exterior",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/garage-conversion/testimonial.jpg",
      alt: "Exterior",
    },
    neighborhood: "Columbia City",
    quote:
      "I'd been working from the dining room table for two years with everyone walking through and finally decided to do something about our unused single-car garage. Marco laid out exactly what we'd get — spray foam, mini-split, fiber conduit, new windows — and came in on budget and on time. It's now the best room in the house.",
    author: "Riley S.",
    rating: 5,
  },

  cta: {
    heading: "Have a garage you're not really using?",
    body: "Tell us what you'd like it to become and we'll scope it out.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [garageConversions],
};

garageConversions.relatedPortfolio = columbiaGarageOffice;
garageConversions.featuredTestimonial = columbiaGarageOffice.testimonial;

columbiaGarageOffice.seo.images = columbiaGarageOffice.gallery.images;
garageConversions.seo.images = garageConversions.galleryImages;
