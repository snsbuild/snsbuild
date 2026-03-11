import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const unusedSpaceConversions: ServiceEntity = {
  id: "space-conversion-conversions-seattle",
  type: "service",
  path: "/services/space-conversion-conversions-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Expansion,
  name: "Unused Space Conversions",
  description:
    "Attics, basements, and underutilized rooms transformed into livable, functional space — permitted and finished properly.",
  breadcrumb: "Expansion • Seattle",

  service: {
    serviceType: "Unused Space Conversion",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Attic conversions",
        description: "Dormers, finishing, and access for attic living space.",
      },
      {
        name: "Basement finishing",
        description:
          "Unfinished basements converted to bonus rooms, offices, or suites.",
      },
      {
        name: "Crawl space encapsulation",
        description: "Moisture control and conditioning for underfloor space.",
      },
    ],
  },

  seo: {
    title: "Unused Space Conversions Seattle | Saddle and Spur Construction",
    description:
      "Attic, basement, and underutilized room conversions in Seattle. Turn unused square footage into livable space — permitted and finished right.",
    keywords: [
      "basement finishing seattle",
      "attic conversion seattle",
      "unused space renovation seattle",
      "bonus room seattle",
    ],
    ogImage: {
      src: "/images/services/space-conversion/ogImage.jpg",
      alt: "Unused space conversion in Seattle",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "Turn unused square footage into living space",
  subheader: "Attics, basements, and storage rooms — finished properly.",
  galleryImages: [
    {
      src: "/images/services/space-conversion/gallery-1.jpg",
      alt: "Finished basement",
    },
    {
      src: "/images/services/space-conversion/gallery-2.jpg",
      alt: "Attic conversion",
    },
    {
      src: "/images/services/space-conversion/gallery-3.jpg",
      alt: "Basement bedroom",
    },
    {
      src: "/images/services/space-conversion/gallery-4.jpg",
      alt: "Basement living area",
    },
  ],
  featuredTestimonial: {
    image: {
      src: "/images/services/space-conversion/after.jpg",
      alt: "Finished basement",
    },
    neighborhood: "Greenwood",
    quote:
      "We'd been using our basement as overflow storage for years and just couldn't see past it. Luke walked through it with us, pointed out what was possible with the ceiling height and egress options, and laid out a clear scope with no surprises. We went from concrete floor and exposed joists to a family room, bedroom, and full bath in six weeks.",
    author: "Morgan W.",
    rating: 5,
  },
  faqs: [
    {
      question: "Do basement finishing projects require permits?",
      answer:
        "Most do — any new bedroom requires egress, and electrical and plumbing work requires permits. We manage this for you.",
    },
    {
      question: "Is Seattle's soil/water table a problem for basements?",
      answer:
        "It can be. We assess moisture, drainage, and existing waterproofing before finalizing scope.",
    },
    {
      question: "How long does basement finishing take?",
      answer:
        "Most basement finishing projects take 4–8 weeks depending on size and scope.",
    },
    {
      question: "Can I add a bathroom to my basement?",
      answer:
        "Yes — a basement bathroom requires a sewage ejector pump if the drain is below the main sewer line, which is common in Seattle homes. We assess this during planning and include it in the scope if needed.",
    },
    {
      question: "What ceiling height do I need for a livable basement?",
      answer:
        "Seattle code requires a minimum of 7 feet of clear ceiling height for habitable space. If your basement is close to that threshold, we'll measure carefully and can sometimes gain height by lowering the slab or reframing around ductwork.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Unused space conversion services",
    byline: "More home from what you already own.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Basement finishing",
        description:
          "Unfinished basements converted to family rooms, bedrooms, offices, or media rooms with proper framing, insulation, and egress. We start every basement project with a moisture assessment — no finishing work goes in over a floor or wall that hasn't been evaluated and addressed.",
        icon: "fa-solid fa-stairs",
      },
      {
        title: "Attic conversions",
        description:
          "Dormer additions and attic finishing for bedrooms, offices, or flex space with proper structural support and insulation. Attic conversions require careful attention to roof structure, insulation placement, and egress — we don't skip the engineering step.",
        icon: "fa-solid fa-house-chimney",
      },
      {
        title: "Egress & safety",
        description:
          "Code-compliant egress windows for below-grade bedrooms, along with proper fire separation and smoke/CO detection. Without a legal egress window, a basement bedroom can't be listed as a bedroom on an appraisal or rental listing — we include egress in every basement bedroom scope.",
        icon: "fa-solid fa-door-open",
      },
      {
        title: "Moisture control",
        description:
          "Foundation waterproofing, interior drainage, and vapor barriers installed before any finishing work begins. Skipping moisture control under a finished basement is the most common reason we're called in to redo someone else's work — we won't put finishes over a wet foundation.",
        icon: "fa-solid fa-droplet-slash",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const greenwoodBasement: PortfolioEntity = {
  id: "greenwood-basement-finish",
  type: "portfolio",
  path: "/portfolio/greenwood-basement-finish",
  name: "Greenwood Basement Finish",
  description:
    "A Greenwood basement converted from unfinished storage to a family room, bedroom, and full bathroom — permitted, waterproofed, and finished throughout.",
  breadcrumb: "Portfolio • Expansion • Space Conversion",

  seo: {
    title: "Greenwood Basement Finish | Saddle and Spur Construction",
    description:
      "A Greenwood basement converted from unfinished storage to a family room, bedroom, and full bathroom — permitted, waterproofed, and finished throughout.",
    keywords: [
      "greenwood basement finishing",
      "seattle basement conversion",
      "finished basement seattle",
    ],
    ogImage: {
      src: "/images/portfolio/space-conversion/ogImage.jpg",
      alt: "Greenwood finished basement",
    },
    images: [],
    datePublished: "2025-05-01",
  },

  project: {
    serviceName: "Unused Space Conversions",
    location: { neighborhood: "Greenwood", city: "Seattle" },
    completionDate: "2025-05-01",
    duration: "6 weeks",
    materials: [
      "Moisture-resistant drywall",
      "LVP flooring",
      "Tile",
      "Egress window",
      "Spray foam insulation",
    ],
    problem:
      "Full unfinished basement used entirely for storage — 900 sq ft of unused space below a growing family's home.",
    solution:
      "Waterproofed the foundation, installed egress window for the bedroom, framed and insulated, and finished to an open family room, bedroom, and full bath.",
    results: [
      "900 sq ft of new living space",
      "Permitted bedroom with egress",
      "Family room and full bath",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/space-conversion/ogImage.jpg",
      alt: "Greenwood finished basement",
    },
    eyebrow: "Expansion • Space Conversion",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Unused space conversions",
      href: "/services/space-conversion-conversions-seattle",
    },
  },

  overview: {
    locationLabel: "Greenwood, Seattle",
    timelineLabel: "6 weeks",
    completedLabel: "May 2025",
    scopeLabel: "Basement finish",
    noteHtml: "900 sq ft converted to family room, bedroom, and full bath.",
  },

  highlights: [
    "900 sq ft finished",
    "Open family room",
    "Permitted bedroom with egress",
    "Full tile bathroom",
    "Spray foam insulation",
    "LVP flooring throughout",
    "Completed in 6 weeks",
  ],

  story: {
    homeownerWanted:
      "More living space for a growing family without moving out of Greenwood.",
    plan: "Waterproof the basement, add egress for a legal bedroom, and finish the space as a family room, bedroom, and full bath.",
    buildSteps: [
      "Moisture and drainage assessment",
      "Framing and egress window installation",
      "Electrical and plumbing rough-in",
      "Insulation and drywall",
      "LVP flooring and tile bath",
      "Trim, paint, and fixtures",
    ],
    results: [
      "900 sq ft of livable space",
      "Legal bedroom",
      "Passed all inspections",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Moisture control",
        description:
          "Foundation waterproofing and vapor barrier before any finishing.",
        icon: "fa-solid fa-droplet-slash",
      },
      {
        name: "Egress window",
        description: "Code-compliant egress for the below-grade bedroom.",
        icon: "fa-solid fa-door-open",
      },
      {
        name: "Framing & insulation",
        description: "Full stud walls with spray foam insulation throughout.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        name: "Tile bath",
        description: "Full bathroom with tile shower and vanity.",
        icon: "fa-solid fa-shower",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/space-conversion/gallery-1.jpg",
        alt: "Family room",
      },
      {
        src: "/images/portfolio/space-conversion/gallery-2.jpg",
        alt: "Family room",
      },
      {
        src: "/images/portfolio/space-conversion/gallery-3.jpg",
        alt: "Family room",
      },
      {
        src: "/images/portfolio/space-conversion/gallery-4.jpg",
        alt: "Family room",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/space-conversion/testimonial.jpg",
      alt: "Family room",
    },
    neighborhood: "Greenwood",
    quote:
      "We'd been using our basement as overflow storage for years and just couldn't see past it. Luke walked through it with us, pointed out what was possible with the ceiling height and egress options, and laid out a clear scope with no surprises. We went from concrete floor and exposed joists to a family room, bedroom, and full bath in six weeks.",
    author: "Morgan W.",
    rating: 5,
  },

  cta: {
    heading: "Have unused space in your home?",
    body: "Tell us what's down there and what you'd like it to become.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [unusedSpaceConversions],
};

unusedSpaceConversions.relatedPortfolio = greenwoodBasement;
unusedSpaceConversions.featuredTestimonial = greenwoodBasement.testimonial;

greenwoodBasement.seo.images = greenwoodBasement.gallery.images;
unusedSpaceConversions.seo.images = unusedSpaceConversions.galleryImages;
