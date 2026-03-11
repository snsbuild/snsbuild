import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const bathroomRemodel: ServiceEntity = {
  id: "bathroom-remodeling-seattle",
  type: "service",
  path: "/services/bathroom-remodeling-seattle",
  homePageFeatured: true,
  category: ServiceCategory.Interior,
  name: "Bathroom Remodeling",
  description:
    "Full bathroom remodels from layout redesign to finish selection — managed start to finish. We handle every trade so the tile, plumbing, and lighting all come together as one cohesive result.",
  breadcrumb: "Interior • Seattle",

  service: {
    serviceType: "Bathroom Remodel",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Tile & waterproofing",
        description:
          "Shower, floor, and wall tile installed over a properly waterproofed substrate. We do waterproofing ourselves — not subbed out — because it's the step you can't fix after the tile is on.",
      },
      {
        name: "Fixtures & vanities",
        description:
          "Tub, shower, toilet, vanity, and lighting selection and installation coordinated as a complete package. We help you choose a set that works together so the finished bathroom looks intentional, not assembled piecemeal.",
      },
      {
        name: "Shower & tub conversion",
        description:
          "Tub-to-shower conversions and full curbless walk-in shower installations sized to the space. We assess the existing plumbing rough-in and show you what's possible before any demolition begins.",
      },
      {
        name: "Lighting & ventilation",
        description:
          "Recessed lighting, vanity bar lighting, and properly sized exhaust fans specified and installed as part of the remodel scope. Good bathroom lighting changes how the whole room feels — we treat it as a design decision, not a checkbox.",
      },
      {
        name: "Layout reconfiguration",
        description:
          "Full bathroom layout redesigns including plumbing relocation, wall moves, and niche additions. A better floor plan is often what makes a small bathroom feel spacious rather than just updated.",
      },
      {
        name: "Heated floors",
        description:
          "Electric radiant floor mat installation timed into the tile scope so there are no seams in the finish floor. We spec the thermostat and walk you through programming before the project closes out.",
      },
    ],
  },

  seo: {
    title: "Bathroom Remodeling in Seattle | Saddle and Spur Construction",
    description:
      "Design-forward bathroom remodels built for Seattle homes. Curbless showers, custom tile, and high-quality fixtures.",
    keywords: [
      "bathroom remodeling seattle",
      "bathroom renovation seattle",
      "general contractor seattle",
    ],
    ogImage: {
      src: "/images/services/bathroom/ogImage.jpg",
      alt: "Remodeled Seattle primary bathroom with curbless walk-in shower, large-format tile, and custom double vanity",
    },
    datePublished: "2026-01-10",
  },

  header: "Bathroom remodeling, done right the first time",
  subheader: "Tile, fixtures, layout — one team, zero guesswork.",
  galleryImages: [
    {
      src: "/images/services/bathroom/gallery-1.jpg",
      alt: "Curbless walk-in shower with large-format porcelain tile and frameless glass enclosure",
    },
    {
      src: "/images/services/bathroom/gallery-2.jpg",
      alt: "Custom double vanity with quartz countertop, undermount sinks, and brushed nickel fixtures",
    },
    {
      src: "/images/services/bathroom/gallery-3.jpg",
      alt: "Freestanding soaking tub centered under a window with wall-mount filler faucet and tile surround",
    },
    {
      src: "/images/services/bathroom/gallery-4.jpg",
      alt: "Close-up of handmade ceramic wall tile with contrasting grout and recessed niche in a Seattle bathroom remodel",
    },
  ],
  featuredTestimonial: {} as Testimonial,
  faqs: [
    {
      question: "How long does a bathroom remodel take?",
      answer:
        "Most bathroom remodels take 3-6 weeks depending on scope and tile lead times.",
    },
    {
      question: "Do you handle permits?",
      answer: "Yes, we pull all required permits and manage inspections.",
    },
    {
      question: "Can I keep my existing layout?",
      answer:
        "Absolutely. We can work within the existing footprint or reconfigure it if that serves you better.",
    },
    {
      question:
        "What's the difference between a full remodel and a cosmetic update?",
      answer:
        "A cosmetic update swaps fixtures, vanity, and paint while leaving the plumbing and tile in place. A full remodel goes back to studs — waterproofing, new plumbing rough-in, new tile. We'll recommend the right scope after seeing the space.",
    },
    {
      question: "Can you convert a tub/shower combo into a walk-in shower?",
      answer:
        "Yes — this is one of our most common bathroom requests. We'll assess whether the existing plumbing rough-in can be reused and show you what's possible with the space you have.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Bathroom remodeling services",
    byline: "Scope it right, then build it right.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Shower & tub installs",
        description:
          "Curbless walk-in showers, soaking tubs, and full-surround tile installed over a properly waterproofed substrate. We do the waterproofing ourselves — it's not subbed out — because it's the step you can't fix after the tile is on.",
        icon: "fa-solid fa-shower",
      },
      {
        title: "Tile work",
        description:
          "Floor, wall, and accent tile selected and installed in-house from layout through grouting. We work with large-format tile, patterned floor tile, and custom mosaic accents depending on what the space calls for.",
        icon: "fa-solid fa-border-all",
      },
      {
        title: "Vanity & fixtures",
        description:
          "Custom and semi-custom vanities with coordinated faucets, hardware, and mirror selections. We help you pick a set that works together so the finished bathroom looks intentional, not assembled piecemeal.",
        icon: "fa-solid fa-sink",
      },
      {
        title: "Lighting & ventilation",
        description:
          "Recessed lighting, vanity bar lighting, and exhaust fans spec'd and installed as part of the scope. Good bathroom lighting changes how the whole room feels — we treat it as a design decision, not a checkbox.",
        icon: "fa-solid fa-lightbulb",
      },
      {
        title: "Heated floors",
        description:
          "Electric radiant floor mats installed under tile for year-round comfort without adding bulk to the floor height. We time the installation into the tile scope so the finish floor is seamless and the thermostat is dialed in before handoff.",
        icon: "fa-solid fa-temperature-half",
      },
      {
        title: "Layout reconfiguration",
        description:
          "Full bathroom layout redesigns including plumbing relocation, wall moves, and niche additions. A better floor plan is often what makes a modest bathroom feel spacious — not just updated.",
        icon: "fa-solid fa-pencil-ruler",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const capitolHillBathroom: PortfolioEntity = {
  id: "capitol-hill-bathroom-remodel",
  type: "portfolio",
  path: "/portfolio/capitol-hill-bathroom-remodel",
  name: "Capitol Hill Bathroom Remodel",
  description:
    "A full primary bathroom remodel in Capitol Hill: curbless shower, heated floors, and a custom double vanity. The unused tub was removed to reclaim floor space and the lighting was redesigned from scratch.",
  breadcrumb: "Portfolio • Interior • Bathroom Remodel",

  seo: {
    title: "Capitol Hill Bathroom Remodel | Saddle and Spur Construction",
    description:
      "A full primary bathroom remodel in Capitol Hill: curbless shower, heated floors, and a custom double vanity.",
    keywords: [
      "capitol hill bathroom remodel",
      "seattle bathroom contractor",
      "curbless shower seattle",
    ],
    ogImage: {
      src: "/images/portfolio/bathroom/ogImage.jpg",
      alt: "Remodeled Capitol Hill primary bathroom with large-format tile, frameless glass shower, and custom double vanity",
    },
    images: [],
    datePublished: "2025-10-15",
  },

  project: {
    serviceName: "Bathroom Remodeling",
    location: { neighborhood: "Capitol Hill", city: "Seattle" },
    completionDate: "2025-10-15",
    duration: "5 weeks",
    materials: [
      "Large-format porcelain tile",
      "Heated floor mat",
      "Quartz vanity top",
      "Frameless glass",
    ],
    problem:
      "Cramped, dated bathroom with a tub the homeowners never used, minimal counter space, and overhead lighting that left the vanity area dim and the shower unwelcoming.",
    solution:
      "Removed the tub to create a generous curbless shower, added a heated floor mat under large-format porcelain tile, and installed a custom double vanity with quartz top and improved lighting throughout.",
    results: [
      "More usable square footage",
      "Heated floors year-round",
      "Better lighting throughout",
      "Custom double vanity with quartz countertop",
      "Frameless glass shower enclosure",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/bathroom/ogImage.jpg",
      alt: "Remodeled Capitol Hill primary bathroom with large-format tile, frameless glass shower, and custom double vanity",
    },
    eyebrow: "Interior • Bathroom Remodel",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Bathroom remodeling",
      href: "/services/bathroom-remodeling-seattle",
    },
  },

  overview: {
    locationLabel: "Capitol Hill, Seattle",
    timelineLabel: "5 weeks",
    completedLabel: "October 2025",
    scopeLabel: "Primary bathroom remodel",
    noteHtml:
      "Removed tub to gain floor space, installed curbless shower with frameless glass, heated tile floors, and a custom double vanity with quartz top and improved lighting throughout.",
  },

  highlights: [
    "Tub removed to expand usable floor space",
    "Curbless shower entry with frameless glass enclosure",
    "Heated tile floors throughout",
    "Custom double vanity with quartz countertop",
    "Large-format porcelain tile on floors and walls",
    "Recessed vanity lighting and improved exhaust ventilation",
  ],

  story: {
    homeownerWanted:
      "More usable space and a shower they'd actually enjoy using every day — the existing tub hadn't been used in years and was taking up a third of the bathroom.",
    plan: "Remove the unused tub, reconfigure the shower footprint as a curbless walk-in with frameless glass, install a heated floor mat before the tile goes down, and replace the builder vanity with a custom double-sink unit that actually fits the space.",
    buildSteps: [
      "Demo and full waterproofing prep",
      "Plumbing rough-in for new shower layout",
      "Heated floor mat installation",
      "Large-format porcelain tile — floors and shower walls",
      "Frameless glass enclosure",
      "Custom vanity installation with quartz top",
      "Fixtures, mirrors, and lighting",
      "Paint, punch list, and final walkthrough",
    ],
    results: [
      "More usable square footage with the tub gone",
      "Heated floors year-round",
      "Clean, modern aesthetic that reads much larger than before",
      "Double vanity with ample counter space",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Tile installation",
        description:
          "Large-format porcelain tile on shower walls and bathroom floors, installed over a fully waterproofed substrate with consistent grout joints throughout.",
        icon: "fa-solid fa-border-all",
      },
      {
        name: "Heated floor system",
        description:
          "Electric radiant mat installed under tile for all-season comfort, timed into the tile scope so the finish floor is seamless and the thermostat is programmed at handoff.",
        icon: "fa-solid fa-temperature-half",
      },
      {
        name: "Frameless glass enclosure",
        description:
          "Custom-measured frameless glass shower enclosure with a curbless entry, templated after tile was set for a precise fit.",
        icon: "fa-solid fa-shower",
      },
      {
        name: "Custom vanity",
        description:
          "Double sink vanity with quartz countertop, undermount sinks, and coordinated hardware and mirrors selected as a complete package.",
        icon: "fa-solid fa-sink",
      },
    ],
  },

  gallery: {
    intro: "Photos from the completed Capitol Hill bathroom remodel.",
    images: [
      {
        src: "/images/portfolio/bathroom/gallery-1.jpg",
        alt: "Curbless walk-in shower with large-format porcelain tile walls, recessed niche, and frameless glass enclosure",
      },
      {
        src: "/images/portfolio/bathroom/gallery-2.jpg",
        alt: "Custom double vanity with quartz countertop, undermount sinks, and wall-mounted mirrors in a Capitol Hill bathroom",
      },
      {
        src: "/images/portfolio/bathroom/gallery-3.jpg",
        alt: "Wide view of remodeled Capitol Hill bathroom showing heated tile floor, double vanity, and open shower entry",
      },
      {
        src: "/images/portfolio/bathroom/gallery-4.jpg",
        alt: "Detail of large-format porcelain floor tile with heated mat and transition to shower in a Seattle primary bathroom",
      },
      {
        src: "/images/portfolio/bathroom/gallery-5.jpg",
        alt: "Shower interior with full-height tile surround, recessed niche, and rainfall showerhead in Capitol Hill remodel",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/bathroom/gallery-5.jpg",
      alt: "Shower interior with full-height tile surround and rainfall showerhead in the completed Capitol Hill bathroom remodel",
    },
    neighborhood: "Capitol Hill",
    quote:
      "We had a cramped bathroom with a tub we hadn't used in years and lighting that made the whole room feel dingy. Marco suggested pulling the tub entirely to get the curbless shower we actually wanted — and we're so glad we listened. The tile work is immaculate and they hit every milestone exactly on schedule.",
    author: "Alex M.",
    rating: 5,
  },

  cta: {
    heading: "Ready to plan your bathroom remodel?",
    body: "Tell us about your space and we'll propose a clear scope and timeline.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [bathroomRemodel],
};

bathroomRemodel.relatedPortfolio = capitolHillBathroom;
bathroomRemodel.featuredTestimonial = capitolHillBathroom.testimonial;

capitolHillBathroom.seo.images = capitolHillBathroom.gallery.images;
bathroomRemodel.seo.images = bathroomRemodel.galleryImages;
