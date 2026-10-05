import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const flooringInstallation: ServiceEntity = {
  id: "flooring-installation-seattle",
  type: "service",
  path: "/services/flooring-installation-seattle/",
  homePageFeatured: false,
  category: ServiceCategory.Interior,
  name: "Flooring Installation",
  description:
    "Hardwood, LVP, tile, and carpet installation for Seattle homes — sourced, installed, and finished by one crew.",
  breadcrumb: "Interior • Seattle",

  service: {
    serviceType: "Flooring Installation",
    areaServed: ["Greater Seattle / King County"],
  },

  seo: {
    title: "Flooring Installation Seattle | Saddle & Spur Construction",
    description:
      "Professional flooring installation in Seattle. Hardwood, LVP, tile, and more — sourced, installed, and finished by one accountable crew.",
    keywords: [
      "flooring installation seattle",
      "hardwood floors seattle",
      "LVP flooring seattle",
      "tile flooring seattle",
    ],
    ogImage: {
      src: "/images/services/flooring/gallery-4.jpg",
      alt: "Empty white room with honey-toned wide-plank oak floor and garden-view windows",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "Flooring installation, start to finish",
  subheader: "Selection, removal, installation, and finishing — one team.",
  galleryImages: [
    {
      src: "/images/services/flooring/gallery-1.jpg",
      alt: "Worker in gloves kneeling to lay oak floor planks in a room under renovation",
    },
    {
      src: "/images/services/flooring/gallery-2.jpg",
      alt: "Open great room with gray-brown plank flooring, white kitchen island, and stacked-stone fireplace",
    },
    { src: "/images/services/flooring/gallery-3.jpg", alt: "Long living room with dark reddish wide-plank wood floor, white walls, and potted ferns" },
    {
      src: "/images/services/flooring/gallery-4.jpg",
      alt: "Empty white room with honey-toned wide-plank oak floor and garden-view windows",
    },
  ],
  featuredTestimonial: {
    image: {
      src: "/images/portfolio/flooring/testimonial.jpg",
      alt: "Empty room with light oak-look floor, arched doorway, panelled wall, and picture window",
    },
    neighborhood: "Queen Anne",
    quote:
      "I called a few flooring contractors and most just wanted to talk product without looking at what was under the carpet. Luke actually walked the subfloor with me, found a soft spot near the bathroom, and took care of it before any material went down. They pulled carpet, prepped, installed, and site-finished the whole house in five days — the floors look incredible.",
    author: "Casey M.",
    rating: 5,
  },
  faqs: [
    {
      question: "How long does flooring installation take?",
      answer:
        "Most whole-home flooring projects run 3–7 days depending on square footage and material.",
    },
    {
      question: "Do you remove existing flooring?",
      answer: "Yes — demo and disposal are included in our flooring scopes.",
    },
    {
      question: "Can you match existing hardwood?",
      answer:
        "We do our best to source matching species and stain. We'll be upfront if an exact match isn't achievable.",
    },
    {
      question: "What's the best flooring option for Seattle's wet climate?",
      answer:
        "LVP (luxury vinyl plank) is the most moisture-resistant option and works well in kitchens, bathrooms, and basements. For main living areas where you want the look and feel of wood, site-finished hardwood holds up well with proper moisture control.",
    },
    {
      question: "Do you need to acclimate hardwood before installation?",
      answer:
        "Yes — hardwood needs 3–5 days to acclimate to your home's temperature and humidity before installation. We factor this into the schedule so it doesn't delay your project.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Flooring installation services",
    byline: "The right material, installed right.",
    primaryCta: { label: "Get a flooring estimate", href: "/flooring-installer-seattle/" },
    secondaryCta: { label: "See portfolio", href: "/portfolio/" },
    services: [
      {
        title: "Hardwood & engineered wood",
        description:
          "Site-finished white oak, red oak, and engineered hardwood installed nail-down or glue-down depending on the subfloor. Site-finishing lets you choose your exact stain and sheen on-site rather than being limited to pre-finished options.",
        icon: "fa-solid fa-tree",
      },
      {
        title: "LVP & laminate",
        description:
          "Waterproof luxury vinyl plank for kitchens, bathrooms, basements, and high-traffic areas. LVP floats over existing subfloor in most cases, which speeds installation and works well over in-floor radiant heat.",
        icon: "fa-solid fa-layer-group",
      },
      {
        title: "Tile",
        description:
          "Porcelain and ceramic tile for bathrooms, kitchens, mudrooms, and entryways, installed over a properly prepared substrate. We do the substrate work ourselves — schluter strip, decoupling mat, or CBU — depending on what the application requires.",
        icon: "fa-solid fa-border-all",
      },
      {
        title: "Demo & subfloor prep",
        description:
          "Full removal of existing flooring including carpet, tack strips, staples, and glued-down material. We inspect and level the subfloor before anything goes down, because the quality of the finished floor depends entirely on what's underneath.",
        icon: "fa-solid fa-hammer",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const queenAnneFlooring: PortfolioEntity = {
  id: "queen-anne-hardwood-floors",
  type: "portfolio",
  path: "/portfolio/queen-anne-hardwood-floors/",
  name: "Queen Anne Hardwood Floors",
  description:
    "Full main and upper level flooring replacement in a Queen Anne craftsman — old carpet removed, white oak hardwood installed and site-finished.",
  breadcrumb: "Portfolio • Interior • Flooring",

  seo: {
    title: "Queen Anne Hardwood Floors | Saddle & Spur Construction",
    description:
      "Full main and upper level flooring replacement in a Queen Anne craftsman — old carpet removed, white oak hardwood installed and site-finished.",
    keywords: [
      "queen anne flooring",
      "seattle hardwood floors",
      "white oak floors seattle",
    ],
    ogImage: {
      src: "/images/portfolio/flooring/ogImage.jpg",
      alt: "Oak-look floor running past a white arched entry alcove toward two interior doors",
    },
    images: [],
    datePublished: "2025-10-01",
  },

  project: {
    serviceName: "Flooring Installation",
    location: { neighborhood: "Queen Anne", city: "Seattle" },
    completionDate: "2025-10-01",
    duration: "5 days",
    materials: ["White oak hardwood", "Hardwood stain", "Polyurethane finish"],
    problem:
      "Original carpet throughout main and upper levels — worn, stained, and trapping allergens.",
    solution:
      "Removed all carpet, prepped subfloors, and installed site-finished white oak hardwood throughout both levels.",
    results: [
      "Clean, consistent hardwood throughout",
      "Healthier indoor air quality",
      "Significant home value increase",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/flooring/ogImage.jpg",
      alt: "Oak-look floor running past a white arched entry alcove toward two interior doors",
    },
    eyebrow: "Interior • Flooring",
    primaryCta: { label: "Start your project", href: "/estimate/" },
    secondaryCta: {
      label: "Flooring installation",
      href: "/services/flooring-installation-seattle/",
    },
  },

  overview: {
    locationLabel: "Queen Anne, Seattle",
    timelineLabel: "5 days",
    completedLabel: "October 2025",
    scopeLabel: "Full flooring replacement",
    noteHtml:
      "White oak hardwood, site-finished, throughout main and upper levels.",
  },

  highlights: [
    "Old carpet removed and disposed",
    "Subfloor leveled and prepped",
    "White oak hardwood installed",
    "Site-finished with custom stain",
    "Consistent finish across both levels",
    "Completed in 5 days",
  ],

  story: {
    homeownerWanted:
      "A clean, durable floor that matched the craftsman character of the home.",
    plan: "Remove all carpet, prep subfloors, install and site-finish white oak hardwood throughout.",
    buildSteps: [
      "Carpet and tack strip removal",
      "Subfloor inspection and leveling",
      "White oak installation — main level",
      "White oak installation — upper level",
      "Sanding, staining, and three coats of finish",
    ],
    results: [
      "Beautiful, consistent hardwood",
      "Craftsman-appropriate character",
      "Completed on time",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Carpet removal",
        description: "Full removal including tack strips and staples.",
        icon: "fa-solid fa-trash",
      },
      {
        name: "Hardwood installation",
        description: "White oak nail-down installation on both levels.",
        icon: "fa-solid fa-tree",
      },
      {
        name: "Site finishing",
        description: "Sand, custom stain, and three coats of polyurethane.",
        icon: "fa-solid fa-paint-roller",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/flooring/gallery-1.jpg",
        alt: "Small kitchenette with white cabinets and dark countertop on oak-look floor leading to a hallway",
      },
      {
        src: "/images/portfolio/flooring/gallery-2.jpg",
        alt: "Long empty room with glossy oak-look floor, pale gray walls, and a single window",
      },
      {
        src: "/images/portfolio/flooring/gallery-3.jpg",
        alt: "Small empty room with oak-look floor and gold-framed mirrored sliding closet doors",
      },
      {
        src: "/images/portfolio/flooring/gallery-4.jpg",
        alt: "Sunlit empty room with oak-look floor, gray panelled walls, and open doorway to a hall",
      },
      {
        src: "/images/portfolio/flooring/gallery-5.jpg",
        alt: "Small powder room with wall-hung sink, toilet, ornate mirror, and warm oak plank floor",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/flooring/testimonial.jpg",
      alt: "Empty room with light oak-look floor, arched doorway, panelled wall, and picture window",
    },
    neighborhood: "Queen Anne",
    quote:
      "I called a few flooring contractors and most just wanted to talk product without looking at what was under the carpet. Luke actually walked the subfloor with me, found a soft spot near the bathroom, and took care of it before any material went down. They pulled carpet, prepped, installed, and site-finished the whole house in five days — the floors look incredible.",
    author: "Casey M.",
    rating: 5,
  },

  cta: {
    heading: "Ready for new floors?",
    body: "Tell us what you're working with and we'll put together a clear scope and timeline.",
    primaryCta: { label: "Request an estimate", href: "/estimate/" },
    secondaryCta: { label: "View services", href: "/services/" },
  },

  related: [flooringInstallation],
};

flooringInstallation.relatedPortfolio = queenAnneFlooring;
flooringInstallation.featuredTestimonial = queenAnneFlooring.testimonial;

queenAnneFlooring.seo.images = queenAnneFlooring.gallery.images;
flooringInstallation.seo.images = flooringInstallation.galleryImages;
