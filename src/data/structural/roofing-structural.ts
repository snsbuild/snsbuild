import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const roofingStructural: ServiceEntity = {
  id: "roofing-structural-seattle",
  type: "service",
  path: "/services/roofing-structural-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Structural,
  name: "Roofing & Structural",
  description:
    "Roof replacement, structural repairs, and seismic upgrades for Seattle homes — engineered, permitted, and built to last.",
  breadcrumb: "Structural • Seattle",

  service: {
    serviceType: "Roofing & Structural Repair",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Roof replacement",
        description:
          "Full tear-off and replacement with architectural shingles or metal roofing.",
      },
      {
        name: "Structural repairs",
        description:
          "Beam and post replacement, sagging floor correction, rot repair.",
      },
      {
        name: "Seismic upgrades",
        description:
          "Cripple wall bracing and anchor bolting for earthquake preparedness.",
      },
    ],
  },

  seo: {
    title: "Roofing & Structural Seattle | Saddle and Spur Construction",
    description:
      "Roofing and structural work in Seattle — roof replacement, structural repairs, and seismic upgrades. Engineered and permitted.",
    keywords: [
      "roof replacement seattle",
      "structural repair seattle",
      "seismic upgrade seattle",
      "roofing contractor seattle",
    ],
    ogImage: {
      src: "/images/services/whole-home/ogImage.jpg",
      alt: "Roofing and structural work in Seattle",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "Roofing and structural work done right",
  subheader: "Engineered, permitted, and built to outlast Seattle winters.",
  galleryImages: [
    {
      src: "/images/services/roofing/gallery-1.jpg",
      alt: "New roof installation",
    },
    {
      src: "/images/services/roofing/gallery-3.jpg",
      alt: "Structural beam repair",
    },
    {
      src: "/images/services/roofing/gallery-2.jpg",
      alt: "Metal roofing",
    },
    {
      src: "/images/services/roofing/gallery-4.jpg",
      alt: "Seismic cripple wall",
    },
  ],
  featuredTestimonial: {} as Testimonial,
  faqs: [
    {
      question: "How do I know if I need a new roof?",
      answer:
        "If your roof is over 20–25 years old, has missing or curling shingles, or shows signs of interior water intrusion, it's time for an inspection. We offer honest assessments.",
    },
    {
      question:
        "Do you handle rot and structural damage discovered during roofing?",
      answer:
        "Yes — we frequently find rot during roofing and handle it in scope. We'll document what we find and get your approval before proceeding.",
    },
    {
      question: "What roofing materials do you use?",
      answer:
        "We install architectural asphalt shingles, metal roofing, and standing seam metal. We'll help you choose what's right for your home and budget.",
    },
    {
      question: "How long does a roof replacement take?",
      answer:
        "Most full roof replacements take 2–5 days for the roof work itself. If we find structural rot at tear-off, add a few days for repairs. We schedule everything sequentially so the house is never left exposed overnight.",
    },
    {
      question: "Does homeowner's insurance cover roof replacement?",
      answer:
        "Insurance typically covers storm or hail damage but not wear-and-tear replacement. We can document what we find at inspection and tear-off to support a claim if damage was caused by a covered event — but we give honest assessments regardless.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Roofing & structural services",
    byline: "Start from the top.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Roof replacement",
        description:
          "Full tear-off and replacement with architectural shingles or metal, properly flashed and ventilated for the Pacific Northwest. We strip everything down to the deck, inspect the sheathing and rafters, and address any rot or damage before the new system goes on.",
        icon: "fa-solid fa-house-chimney",
      },
      {
        title: "Structural repairs",
        description:
          "Beam replacements, sagging floor corrections, post and pier work, and rot remediation on older Seattle homes. When we find structural issues during roofing or remodel work, we document it, show you photos, and get your approval before proceeding.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        title: "Seismic upgrades",
        description:
          "Cripple wall plywood bracing and anchor bolting to bring older Seattle homes up to modern earthquake standards. We work from engineer-stamped drawings and manage the permit and City of Seattle inspection process from start to finish.",
        icon: "fa-solid fa-shield-halved",
      },
      {
        title: "Skylights & roof penetrations",
        description:
          "Properly flashed skylight installation and repair, along with chimney flashing, vent boot replacement, and other roof penetration work. Roof leaks almost always start at penetrations and transitions — we do this work carefully and back it up.",
        icon: "fa-solid fa-sun",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const madisonParkRoof: PortfolioEntity = {
  id: "madison-park-roof-repair",
  type: "portfolio",
  path: "/portfolio/madison-park-roof-repair",
  name: "Madison Park Roof & Rot Repair",
  description:
    "A Madison Park home with a 30-year-old roof — full tear-off, structural rot remediation discovered at tear-off, and new architectural shingles throughout.",
  breadcrumb: "Portfolio • Structural • Roofing",

  seo: {
    title: "Madison Park Roof & Rot Repair | Saddle and Spur Construction",
    description:
      "Full roof replacement on a Madison Park home with structural rot remediation discovered at tear-off. No surprises — documented and approved before proceeding.",
    keywords: [
      "madison park roofing",
      "seattle roof replacement",
      "structural rot repair seattle",
    ],
    ogImage: {
      src: "/images/portfolio/roofing/ogImage.jpg",
      alt: "Madison Park roof replacement",
    },
    images: [],
    datePublished: "2025-09-01",
  },

  project: {
    serviceName: "Roofing & Structural",
    location: { neighborhood: "Madison Park", city: "Seattle" },
    completionDate: "2025-09-01",
    duration: "2 weeks",
    materials: [
      "Architectural asphalt shingles",
      "Ice and water shield",
      "Synthetic underlayment",
      "Ridge vent",
      "Treated lumber",
    ],
    problem:
      "A 30-year-old roof on a Madison Park home — failing shingles, compromised flashing, and two areas of structural rot discovered at tear-off.",
    solution:
      "Full tear-off, rot remediation in two rafter sections and the fascia, new ice and water shield, synthetic underlayment, and architectural shingles throughout.",
    results: [
      "Weather-tight new roof",
      "Structural rot fully remediated",
      "Manufacturer warranty on materials",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/roofing/ogImage.jpg",
      alt: "Madison Park roof replacement",
    },
    eyebrow: "Structural • Roofing",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Roofing & structural",
      href: "/services/roofing-structural-seattle",
    },
  },

  overview: {
    locationLabel: "Madison Park, Seattle",
    timelineLabel: "2 weeks",
    completedLabel: "September 2025",
    scopeLabel: "Full roof replacement + rot repair",
    noteHtml:
      "Full tear-off, structural rot remediation, and new architectural shingles.",
  },

  highlights: [
    "Full tear-off and disposal",
    "Structural rot identified and repaired",
    "Ice and water shield throughout",
    "Synthetic underlayment",
    "Architectural asphalt shingles",
    "New ridge vent system",
    "Manufacturer warranty",
    "Completed in 2 weeks",
  ],

  story: {
    homeownerWanted:
      "A reliable roof they didn't have to think about for another 30 years.",
    plan: "Full tear-off, document any structural issues at tear-off, remediate before re-roofing, and install a properly ventilated, warranted roof system.",
    buildSteps: [
      "Full tear-off and inspection",
      "Structural rot documentation and homeowner approval",
      "Rafter and fascia rot remediation",
      "Ice and water shield",
      "Synthetic underlayment",
      "Architectural shingle installation",
      "Ridge vent and flashing",
    ],
    results: [
      "30-year warranted roof system",
      "Rot fully remediated",
      "Completed on schedule",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Full tear-off",
        description: "Complete removal and disposal of old roofing material.",
        icon: "fa-solid fa-trash",
      },
      {
        name: "Rot remediation",
        description:
          "Two rafter sections and fascia replaced with treated lumber.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        name: "Roof system",
        description:
          "Ice and water shield, synthetic underlayment, and architectural shingles.",
        icon: "fa-solid fa-house-chimney",
      },
      {
        name: "Ventilation",
        description: "New continuous ridge vent for proper attic ventilation.",
        icon: "fa-solid fa-wind",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/roofing/gallery-1.jpg",
        alt: "Madison Park roof replacement",
      },
      {
        src: "/images/portfolio/roofing/gallery-2.jpg",
        alt: "Madison Park roof replacement",
      },
      {
        src: "/images/portfolio/roofing/ogImage.jpg",
        alt: "Madison Park roof replacement",
      },
      {
        src: "/images/portfolio/roofing/gallery-3.jpg",
        alt: "Madison Park roof replacement",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/roofing/gallery-2.jpg",
      alt: "Madison Park roof replacement",
    },
    neighborhood: "Madison Park",
    quote:
      "We knew the roof was due but didn't realize there was rot in two rafter sections until Marco's crew did the tear-off. They documented everything with photos, got our sign-off before doing a single repair, and handled the rot and the full re-roof in the same two-week window. Thirty years of worry-free roof — and no surprise bills at the end.",
    author: "Kim R.",
    rating: 5,
  },

  cta: {
    heading: "Roof concerns or need an inspection?",
    body: "We give honest assessments and clear scopes — no scare tactics.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [roofingStructural],
};

roofingStructural.relatedPortfolio = madisonParkRoof;
roofingStructural.featuredTestimonial = madisonParkRoof.testimonial;

madisonParkRoof.seo.images = madisonParkRoof.gallery.images;
roofingStructural.seo.images = roofingStructural.galleryImages;
