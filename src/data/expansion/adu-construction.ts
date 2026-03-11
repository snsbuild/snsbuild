import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const aduConstruction: ServiceEntity = {
  id: "adu-construction-seattle",
  type: "service",
  path: "/services/adu-construction-seattle",
  homePageFeatured: true,
  category: ServiceCategory.Expansion,
  name: "ADU Construction",
  description:
    "Accessory dwelling units built from permit to punch list — detached, attached, and DADU options for Seattle lots.",
  breadcrumb: "Expansion • Seattle",

  service: {
    serviceType: "ADU Construction",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Detached ADUs",
        description: "Standalone backyard cottages and carriage houses.",
      },
      {
        name: "Attached ADUs",
        description:
          "Ground-floor or above-garage units connected to the primary home.",
      },
      {
        name: "DADUs",
        description:
          "Detached accessory dwelling units built to Seattle DADU code.",
      },
    ],
  },

  seo: {
    title: "ADU Construction Seattle | Saddle and Spur Construction",
    description:
      "ADU construction in Seattle from permit to punch list. Detached, attached, and DADU options — one team managing the full build.",
    keywords: [
      "ADU construction seattle",
      "backyard cottage seattle",
      "DADU seattle",
      "accessory dwelling unit seattle",
    ],
    ogImage: {
      src: "/images/services/adu/ogImage.jpg",
      alt: "ADU construction in Seattle",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "ADU construction, permit to punch list",
  subheader: "One team. One contract. Your new backyard home.",
  galleryImages: [
    { src: "/images/services/adu/gallery-1.jpg", alt: "Detached ADU exterior" },
    { src: "/images/services/adu/gallery-2.jpg", alt: "ADU interior kitchen" },
    { src: "/images/services/adu/gallery-3.jpg", alt: "ADU bathroom" },
    { src: "/images/services/adu/gallery-4.jpg", alt: "Backyard cottage" },
  ],
  featuredTestimonial: {} as Testimonial,
  faqs: [
    {
      question: "How long does ADU construction take?",
      answer:
        "Most detached ADU projects take 4-8 months from permit submission to final inspection, depending on size and complexity.",
    },
    {
      question: "Do you handle the ADU permits?",
      answer:
        "Yes — permit management is part of our scope. We know Seattle ADU permitting well.",
    },
    {
      question: "What does an ADU typically cost?",
      answer:
        "Detached ADUs in Seattle typically range from $250K-$450K+ depending on size, finishes, and site conditions. We provide detailed estimates after a site visit.",
    },
    {
      question: "Can I rent out my ADU?",
      answer:
        "Yes. Seattle allows ADU rentals and we can build to rental-ready standards.",
    },
    {
      question: "What's the difference between an ADU and a DADU?",
      answer:
        "An ADU (accessory dwelling unit) is a general term that includes both attached and detached units. A DADU (detached accessory dwelling unit) is specifically a standalone structure separate from the primary home — a backyard cottage or carriage house. Seattle has specific permitting rules for each.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "ADU construction services",
    byline: "From permit to keys.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Detached ADUs",
        description:
          "Standalone backyard cottages, carriage houses, and garden suites designed and built as complete living spaces. We handle everything from foundation and framing through kitchen, bath, HVAC, and final inspection under one contract.",
        icon: "fa-solid fa-house",
      },
      {
        title: "Attached ADUs",
        description:
          "Ground-floor or above-garage units connected to the primary home through shared wall construction. Attached ADUs often allow for plumbing and electrical sharing with the main house, which can reduce overall project cost compared to a fully detached unit.",
        icon: "fa-solid fa-building",
      },
      {
        title: "Permit management",
        description:
          "Full Seattle ADU permitting including land use review, building, mechanical, electrical, and plumbing permits. ADU permitting involves multiple city departments — we've done this enough to know the sequence and avoid the common delays.",
        icon: "fa-solid fa-file-contract",
      },
      {
        title: "Site work & utilities",
        description:
          "Foundation, drainage, utility connections, and lot grading for the new structure. Proper site prep is what prevents drainage issues after the ADU is built — we don't skip steps on the work that gets buried.",
        icon: "fa-solid fa-trowel-bricks",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const phinneyRidgeAdu: PortfolioEntity = {
  id: "phinney-ridge-adu",
  type: "portfolio",
  path: "/portfolio/phinney-ridge-adu",
  name: "Phinney Ridge Backyard ADU",
  description:
    "A 400 sq ft detached ADU in Phinney Ridge — full kitchen, full bath, sleeping loft, and a covered deck, permitted and built by one team.",
  breadcrumb: "Portfolio • Expansion • ADU",

  seo: {
    title: "Phinney Ridge Backyard ADU | Saddle and Spur Construction",
    description:
      "A 400 sq ft detached ADU in Phinney Ridge — full kitchen, full bath, sleeping loft, and covered deck, permitted and built by one team.",
    keywords: [
      "phinney ridge ADU",
      "seattle backyard cottage",
      "DADU seattle",
      "ADU construction seattle",
    ],
    ogImage: {
      src: "/images/portfolio/adu/ogImage.jpg",
      alt: "Phinney Ridge ADU",
    },
    images: [],
    datePublished: "2025-08-01",
  },

  project: {
    serviceName: "ADU Construction",
    location: { neighborhood: "Phinney Ridge", city: "Seattle" },
    completionDate: "2025-08-01",
    duration: "6 months",
    materials: [
      "Fiber cement siding",
      "Metal roofing",
      "Quartz counters",
      "LVP flooring",
      "Mini-split HVAC",
    ],
    problem:
      "Underutilized backyard on a Phinney Ridge lot — homeowners wanted rental income and a space for family guests.",
    solution:
      "Designed and built a 400 sq ft detached ADU with a sleeping loft, full kitchen, full bath, and covered deck — managed permitting through the City of Seattle.",
    results: [
      "Rental-ready ADU",
      "Significant property value increase",
      "Flexible space for family or rental",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/adu/ogImage.jpg",
      alt: "ADU construction in Seattle",
    },
    eyebrow: "Expansion • ADU Construction",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "ADU construction",
      href: "/services/adu-construction-seattle",
    },
  },

  overview: {
    locationLabel: "Phinney Ridge, Seattle",
    timelineLabel: "6 months",
    completedLabel: "August 2025",
    scopeLabel: "Detached ADU",
    noteHtml:
      "400 sq ft with sleeping loft, full kitchen, full bath, and covered deck.",
  },

  highlights: [
    "400 sq ft detached ADU",
    "Sleeping loft",
    "Full kitchen with quartz counters",
    "Full bathroom with tile shower",
    "Covered deck",
    "Mini-split HVAC",
    "Full permit management",
    "Rental-ready on completion",
  ],

  story: {
    homeownerWanted:
      "A rental-ready ADU that could also host family — well-designed, not just functional.",
    plan: "Design a 400 sq ft DADU with a loft for sleeping, full kitchen, bath, and outdoor deck. Manage the Seattle permitting process start to finish.",
    buildSteps: [
      "Site survey and permit package",
      "City of Seattle permit approval",
      "Foundation and framing",
      "Mechanical, electrical, plumbing rough-in",
      "Insulation and sheathing",
      "Siding, roofing, windows",
      "Interior finishes and fixtures",
      "Final inspection and punch list",
    ],
    results: [
      "Rental-ready ADU",
      "Passed final inspection first attempt",
      "Completed on schedule",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Permit management",
        description:
          "Full Seattle ADU permitting from land use through final inspection.",
        icon: "fa-solid fa-file-contract",
      },
      {
        name: "Foundation & framing",
        description: "Concrete slab foundation and stick-frame construction.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        name: "Kitchen & bath",
        description:
          "Full kitchen with quartz counters and tile bath with walk-in shower.",
        icon: "fa-solid fa-utensils",
      },
      {
        name: "HVAC",
        description: "Mini-split for heating and cooling.",
        icon: "fa-solid fa-wind",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      { src: "/images/portfolio/adu/gallery-1.jpg", alt: "ADU exterior" },
      { src: "/images/portfolio/adu/gallery-2.jpg", alt: "Kitchen" },
      { src: "/images/portfolio/adu/gallery-3.jpg", alt: "Bathroom" },
      { src: "/images/portfolio/adu/gallery-4.jpg", alt: "Sleeping loft" },
    ],
  },

  testimonial: {
    neighborhood: "Phinney Ridge",
    image: { src: "/images/portfolio/adu/gallery-2.jpg", alt: "Sleeping loft" },
    quote:
      "I'd heard ADU permitting in Seattle was a nightmare and honestly almost didn't move forward. Marco walked me through the land use, building, and inspection process at the start and managed every step himself — I never had to follow up on anything. The build came in on schedule, passed final inspection the first attempt, and it rented out the first week we listed it.",
    author: "Jordan P.",
    rating: 5,
  },

  cta: {
    heading: "Ready to build your ADU?",
    body: "Tell us about your lot and goals — we'll walk you through what's possible and what it costs.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [aduConstruction],
};

aduConstruction.relatedPortfolio = phinneyRidgeAdu;
aduConstruction.featuredTestimonial = phinneyRidgeAdu.testimonial;

phinneyRidgeAdu.seo.images = phinneyRidgeAdu.gallery.images;
aduConstruction.seo.images = aduConstruction.galleryImages;
