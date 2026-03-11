import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const structuralUpgrades: ServiceEntity = {
  id: "structural-upgrades-seattle",
  type: "service",
  path: "/services/structural-upgrades-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Structural,
  name: "Structural Upgrades",
  description:
    "Foundation repairs, seismic retrofits, beam replacements, and structural improvements that protect Seattle homes for decades.",
  breadcrumb: "Structural • Seattle",

  service: {
    serviceType: "Structural Upgrade",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Seismic retrofits",
        description:
          "Cripple wall bracing and anchor bolting for earthquake resilience.",
      },
      {
        name: "Foundation repair",
        description:
          "Crack repair, underpinning, and waterproofing for failing foundations.",
      },
      {
        name: "Beam & post replacement",
        description:
          "Structural timber replacements and load path corrections.",
      },
    ],
  },

  seo: {
    title: "Structural Upgrades Seattle | Saddle and Spur Construction",
    description:
      "Foundation repairs, seismic retrofits, and structural improvements for Seattle homes. Engineered, permitted, and built to protect your home.",
    keywords: [
      "seismic retrofit seattle",
      "foundation repair seattle",
      "structural repair seattle",
      "earthquake retrofit seattle",
    ],
    ogImage: {
      src: "/images/services/structural/ogImage.jpg",
      alt: "Structural upgrades in Seattle",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "Structural upgrades that protect your home",
  subheader: "Foundation, seismic, and structural — engineered to last.",
  galleryImages: [
    {
      src: "/images/services/structural/gallery-1.jpg",
      alt: "Cripple wall bracing",
    },
    {
      src: "/images/services/structural/gallery-2.jpg",
      alt: "Foundation repair",
    },
    {
      src: "/images/services/structural/gallery-3.jpg",
      alt: "Anchor bolting",
    },
    {
      src: "/images/services/structural/gallery-4.jpg",
      alt: "Beam replacement",
    },
  ],
  featuredTestimonial: {
    image: {
      src: "/images/portfolio/structural/gallery-2.jpg",
      alt: "Anchor bolting",
    },
    neighborhood: "Capitol Hill",
    quote:
      "Our 1920s house had a cripple wall we'd been ignoring for years and I finally called to get an honest assessment. Marco walked the crawlspace with me, found a foundation crack we didn't even know existed, and laid out a plan that covered both issues within our budget. They got the retrofit and the crack repair done in three weeks and the house genuinely feels safer now.",
    author: "Drew H.",
    rating: 5,
  },
  faqs: [
    {
      question: "Does my Seattle home need a seismic retrofit?",
      answer:
        "If your home was built before 1980 and has a cripple wall (short stud wall between foundation and first floor), a seismic retrofit is strongly recommended. We offer honest assessments.",
    },
    {
      question: "How do I know if my foundation needs repair?",
      answer:
        "Common signs include cracks in the foundation wall, water intrusion, sticking doors or windows, and uneven floors. We'll assess and give you an honest picture.",
    },
    {
      question: "Are structural upgrades permitted?",
      answer:
        "Yes — structural work requires permits. We manage permitting and engineering as part of every structural project.",
    },
    {
      question:
        "What is a cripple wall and why does it matter for earthquakes?",
      answer:
        "A cripple wall is the short wood-framed wall that sits between the foundation and the first floor of older homes. In an earthquake, unbraced cripple walls can rack and collapse — which is what causes many older Seattle homes to slide off their foundations. Plywood bracing and anchor bolting significantly reduce this risk.",
    },
    {
      question: "How much does a seismic retrofit typically cost?",
      answer:
        "A standard cripple wall retrofit for a Seattle home typically runs $8K-$20K depending on the size of the crawlspace and how many walls need bracing. If foundation repairs are also needed, we scope those separately. We provide detailed estimates after a crawlspace assessment.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Structural upgrade services",
    byline: "Protect what's underneath.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Seismic retrofits",
        description:
          "Cripple wall plywood bracing and anchor bolting per engineer drawings to meet current earthquake standards for older Seattle homes. We do our own crawlspace assessment before any engineering — we won't scope work we haven't seen.",
        icon: "fa-solid fa-shield-halved",
      },
      {
        title: "Foundation repair",
        description:
          "Crack injection, underpinning, waterproofing, and interior drainage corrections for failing or compromised foundations. Foundation work is often scarier-looking than it is — we give honest assessments and scope only what actually needs to be done.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        title: "Beam & post work",
        description:
          "Structural member replacements, new load paths, sagging floor corrections, and post and pier work in crawlspaces. Undersized or failed beams and posts are common in older Seattle homes — we fix the root cause rather than patching around it.",
        icon: "fa-solid fa-ruler-combined",
      },
      {
        title: "Engineering & permits",
        description:
          "Structural engineering, permit management, and City of Seattle inspection coordination included in every structural project scope. Structural work without permits is a liability when you sell — we don't do it, and we'll tell you if another contractor suggests otherwise.",
        icon: "fa-solid fa-file-contract",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const capitolHillSeismic: PortfolioEntity = {
  id: "capitol-hill-seismic-retrofit",
  type: "portfolio",
  path: "/portfolio/capitol-hill-seismic-retrofit",
  name: "Capitol Hill Seismic Retrofit",
  description:
    "A full seismic retrofit on a 1920s Capitol Hill home — cripple wall plywood bracing, anchor bolting, and a previously undetected foundation crack repaired.",
  breadcrumb: "Portfolio • Structural • Seismic Retrofit",

  seo: {
    title: "Capitol Hill Seismic Retrofit | Saddle and Spur Construction",
    description:
      "Full seismic retrofit on a 1920s Capitol Hill home — cripple wall bracing, anchor bolting, and foundation crack repair. Permitted and engineered.",
    keywords: [
      "capitol hill seismic retrofit",
      "seattle earthquake retrofit",
      "seismic retrofit seattle",
    ],
    ogImage: {
      src: "/images/portfolio/structural/ogImage.jpg",
      alt: "Capitol Hill seismic retrofit",
    },
    images: [],
    datePublished: "2025-04-01",
  },

  project: {
    serviceName: "Structural Upgrades",
    location: { neighborhood: "Capitol Hill", city: "Seattle" },
    completionDate: "2025-04-01",
    duration: "3 weeks",
    materials: [
      "Structural plywood",
      "Simpson Strong-Tie hardware",
      "Anchor bolts",
      "Epoxy injection",
      "Treated lumber",
    ],
    problem:
      "A 1920s Capitol Hill home with an unbraced cripple wall — at significant risk in a seismic event. A foundation crack discovered during assessment added to the scope.",
    solution:
      "Installed cripple wall plywood bracing and anchor bolting per engineer specs. Repaired the foundation crack with epoxy injection and improved interior drainage.",
    results: [
      "Seismically upgraded home",
      "Foundation crack repaired",
      "Permitted and passed engineering inspection",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/structural/ogImage.jpg",
      alt: "Capitol Hill seismic retrofit completed",
    },
    eyebrow: "Structural • Seismic Retrofit",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Structural upgrades",
      href: "/services/structural-upgrades-seattle",
    },
  },

  overview: {
    locationLabel: "Capitol Hill, Seattle",
    timelineLabel: "3 weeks",
    completedLabel: "April 2025",
    scopeLabel: "Seismic retrofit + foundation repair",
    noteHtml:
      "Cripple wall bracing, anchor bolting, and foundation crack repair.",
  },

  highlights: [
    "Full cripple wall plywood bracing",
    "Anchor bolting per engineer specs",
    "Foundation crack epoxy repair",
    "Improved interior drainage",
    "Permitted and engineered",
    "Passed City of Seattle inspection",
    "Completed in 3 weeks",
  ],

  story: {
    homeownerWanted:
      "Peace of mind that their 100-year-old home would survive a major earthquake.",
    plan: "Engineer a full cripple wall retrofit, install per specs, and address the foundation crack discovered during the crawlspace assessment.",
    buildSteps: [
      "Crawlspace assessment and engineering",
      "Permit submission and approval",
      "Cripple wall plywood installation",
      "Anchor bolt installation",
      "Foundation crack epoxy injection",
      "Final inspection",
    ],
    results: [
      "Seismically upgraded structure",
      "Foundation crack sealed",
      "Passed all inspections",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Cripple wall bracing",
        description:
          "Structural plywood installed per engineer drawings on all cripple walls.",
        icon: "fa-solid fa-shield-halved",
      },
      {
        name: "Anchor bolting",
        description: "Mudsill anchor bolts installed at specified spacing.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        name: "Foundation repair",
        description: "Crack epoxy injection and improved interior drainage.",
        icon: "fa-solid fa-ruler-combined",
      },
      {
        name: "Permit management",
        description:
          "Structural engineering, permit, and City of Seattle inspection.",
        icon: "fa-solid fa-file-contract",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/structural/gallery-1.jpg",
        alt: "Cripple wall bracing",
      },
      {
        src: "/images/portfolio/structural/gallery-2.jpg",
        alt: "Anchor bolting",
      },
      {
        src: "/images/portfolio/structural/gallery-3.jpg",
        alt: "Foundation repair",
      },
      {
        src: "/images/portfolio/structural/gallery-4.jpg",
        alt: "Crawlspace after",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/structural/gallery-3.jpg",
      alt: "Anchor bolting",
    },
    neighborhood: "Capitol Hill",
    quote:
      "Our 1920s house had a cripple wall we'd been ignoring for years and I finally called to get an honest assessment. Marco walked the crawlspace with me, found a foundation crack we didn't even know existed, and laid out a plan that covered both issues within our budget. They got the retrofit and the crack repair done in three weeks and the house genuinely feels safer now.",
    author: "Drew H.",
    rating: 5,
  },

  cta: {
    heading: "Concerned about your home's structural health?",
    body: "We give honest assessments — no scare tactics, just facts and options.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [structuralUpgrades],
};

structuralUpgrades.relatedPortfolio = capitolHillSeismic;
capitolHillSeismic.seo.images = capitolHillSeismic.gallery.images;
structuralUpgrades.seo.images = structuralUpgrades.galleryImages;
