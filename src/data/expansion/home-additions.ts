import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const homeAdditions: ServiceEntity = {
  id: "home-additions-seattle",
  type: "service",
  path: "/services/home-additions-seattle/",
  homePageFeatured: false,
  category: ServiceCategory.Expansion,
  name: "Home Additions",
  description:
    "Room additions and second-story expansions that tie seamlessly into your existing home — engineered, permitted, and built to last.",
  breadcrumb: "Expansion • Seattle",

  service: {
    serviceType: "Home Addition",
    areaServed: ["Greater Seattle / King County"],
  },

  seo: {
    title: "Home Additions Seattle | Saddle & Spur Construction",
    description:
      "Home additions in Seattle — room additions, second-story expansions, and bump-outs engineered, permitted, and built to match your home.",
    keywords: [
      "home addition seattle",
      "room addition seattle",
      "second story addition seattle",
      "house expansion seattle",
    ],
    ogImage: {
      src: "/images/services/addition/ogImage.jpg",
      alt: "Cedar-framed screened porch and raised deck with stairs on a tan-sided house",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "Home additions that look like they were always there",
  subheader:
    "Structural, permits, and finishes — one team from design to done.",
  galleryImages: [
    {
      src: "/images/services/addition/gallery-1.jpg",
      alt: "Single-story addition under construction with OSB sheathing and open roof framing on a white house",
    },
    {
      src: "/images/services/addition/gallery-2.jpg",
      alt: "White screened porch with red lattice skirting and wood entry steps on a white-sided house",
    },
    {
      src: "/images/services/addition/gallery-3.jpg",
      alt: "Sunroom with gray-green walls, oak-trimmed windows and French doors, exposed beam, and houseplants",
    },
    {
      src: "/images/services/addition/gallery-4.jpg",
      alt: "Gable end of a cedar-framed screened porch attached to a house",
    },
  ],
  featuredTestimonial: {} as Testimonial,
  faqs: [
    {
      question: "How long does a home addition take?",
      answer:
        "Most room additions take 3-5 months. Second-story additions typically run 5-8 months depending on scope and permitting.",
    },
    {
      question: "Do home additions require permits in Seattle?",
      answer:
        "Yes — all structural additions require permits. We manage the permitting process as part of our scope.",
    },
    {
      question: "Can you match the existing siding and roofing?",
      answer:
        "We work hard to source matching or complementary materials. We'll show you options during the planning phase.",
    },
    {
      question: "What structural work is involved in a home addition?",
      answer:
        "Most additions require new foundation work, engineered beams to tie into the existing structure, and roofline integration. We include structural engineering in our scope and work with the engineer throughout the build.",
    },
    {
      question: "Can you add a second story to a single-story home?",
      answer:
        "Yes — vertical additions are more complex than ground-level room additions because they require reinforcing the existing structure to carry the new load. We assess the existing foundation and framing first and give you an honest picture of what's involved.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Home addition services",
    byline: "More space. Same home.",
    primaryCta: { label: "Get a quote", href: "/estimate/" },
    secondaryCta: { label: "See portfolio", href: "/portfolio/" },
    services: [
      {
        title: "Room additions",
        description:
          "Single-room expansions including family rooms, primary suites, sunrooms, and mudrooms added to your existing footprint. We tie the addition into the existing structure so it reads as part of the original house, not an afterthought bolted on the back.",
        icon: "fa-solid fa-house-chimney-window",
      },
      {
        title: "Second-story additions",
        description:
          "Full or partial second-story expansions on single-story homes, engineered to carry the new load properly. We assess the existing foundation and first-floor framing before committing to scope — if reinforcement is needed, we include it upfront rather than calling it a change order later.",
        icon: "fa-solid fa-layer-group",
      },
      {
        title: "Bump-outs",
        description:
          "Smaller square-footage expansions that give a kitchen, bathroom, or bedroom the space it needs without a full addition. Bump-outs typically use cantilevered or extended framing rather than new foundation, which keeps costs down and timelines shorter.",
        icon: "fa-solid fa-maximize",
      },
      {
        title: "Structural engineering",
        description:
          "Engineered beam and foundation work required to tie the new addition properly into the existing structure. We work with licensed structural engineers and include their work in our contract, so you have one point of accountability for the whole project.",
        icon: "fa-solid fa-drafting-compass",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const ravennaAddition: PortfolioEntity = {
  id: "ravenna-primary-suite-addition",
  type: "portfolio",
  path: "/portfolio/ravenna-primary-suite-addition/",
  name: "Ravenna Primary Suite Addition",
  description:
    "A 600 sq ft primary suite addition on a Ravenna Craftsman — vaulted ceiling, walk-in closet, and private bath, tied seamlessly into the existing roofline.",
  breadcrumb: "Portfolio • Expansion • Home Addition",

  seo: {
    title: "Ravenna Primary Suite Addition | Saddle & Spur Construction",
    description:
      "A 600 sq ft primary suite addition on a Ravenna Craftsman — vaulted ceiling, walk-in closet, and private bath, tied seamlessly into the existing roofline.",
    keywords: [
      "ravenna home addition",
      "seattle primary suite addition",
      "room addition seattle",
    ],
    ogImage: { src: "/images/portfolio/addition/ogImage.jpg", alt: "Gable end of a cedar-framed screened porch attached to a house" },
    images: [],
    datePublished: "2025-07-01",
  },

  project: {
    serviceName: "Home Additions",
    location: { neighborhood: "Ravenna", city: "Seattle" },
    completionDate: "2025-07-01",
    duration: "5 months",
    materials: [
      "Fiber cement siding",
      "Architectural shingles",
      "Engineered lumber",
      "Tile",
      "Hardwood",
    ],
    problem:
      "A 1920s Ravenna Craftsman with only two small bedrooms and a shared bath — no primary suite.",
    solution:
      "Added a 600 sq ft primary suite to the rear of the home with vaulted ceiling, walk-in closet, ensuite bath, and matching Craftsman exterior details.",
    results: [
      "600 sq ft primary suite",
      "Vaulted ceiling and natural light",
      "Seamless exterior match",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/addition/gallery-2.jpg",
      alt: "Porch roof framing in progress over a raised deck, with scaffolding and a yellow ladder",
    },
    eyebrow: "Expansion • Home Addition",
    primaryCta: { label: "Start your project", href: "/estimate/" },
    secondaryCta: {
      label: "Home additions",
      href: "/services/home-additions-seattle/",
    },
  },

  overview: {
    locationLabel: "Ravenna, Seattle",
    timelineLabel: "5 months",
    completedLabel: "July 2025",
    scopeLabel: "Primary suite addition",
    noteHtml:
      "600 sq ft addition with vaulted ceiling, walk-in closet, and ensuite bath.",
  },

  highlights: [
    "600 sq ft primary suite",
    "Vaulted ceiling",
    "Walk-in closet",
    "Ensuite tile bath",
    "Craftsman exterior match",
    "Permitted through City of Seattle",
    "Completed on schedule",
  ],

  story: {
    homeownerWanted: "A proper primary suite without moving to a bigger house.",
    plan: "Add 600 sq ft to the rear of the home — vaulted primary bedroom, walk-in closet, and full bath. Match the existing Craftsman exterior detail.",
    buildSteps: [
      "Structural engineering and permit",
      "Foundation and framing",
      "Roofline integration",
      "Mechanical, electrical, plumbing rough-in",
      "Insulation and drywall",
      "Tile bath and hardwood floors",
      "Trim and exterior match",
    ],
    results: [
      "Seamless addition",
      "Bright vaulted primary suite",
      "Passed final inspection first attempt",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Structural work",
        description:
          "Engineered foundation and framing to support the addition.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        name: "Roofline integration",
        description:
          "New roofline tied into existing to match the Craftsman profile.",
        icon: "fa-solid fa-house-chimney",
      },
      {
        name: "Ensuite bath",
        description: "Full tile bath with walk-in shower and custom vanity.",
        icon: "fa-solid fa-shower",
      },
      {
        name: "Exterior finish",
        description:
          "Fiber cement siding and trim to match existing Craftsman detail.",
        icon: "fa-solid fa-paint-roller",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/addition/gallery-1.jpg",
        alt: "Cedar-framed screened porch and raised deck with stairs on a tan-sided house",
      },
      {
        src: "/images/portfolio/addition/gallery-2.jpg",
        alt: "Porch roof framing in progress over a raised deck, with scaffolding and a yellow ladder",
      },
      {
        src: "/images/portfolio/addition/gallery-3.jpg",
        alt: "Screened porch interior with vaulted tongue-and-groove wood ceiling, ceiling fan, and triangular gable screens",
      },
      {
        src: "/images/portfolio/addition/ogImage.jpg",
        alt: "Gable end of a cedar-framed screened porch attached to a house",
      },
    ],
  },

  testimonial: {
    neighborhood: "Ravenna",
    image: { src: "/images/portfolio/addition/gallery-3.jpg", alt: "Screened porch interior with vaulted tongue-and-groove wood ceiling, ceiling fan, and triangular gable screens" },
    quote:
      "We wanted a primary suite but our house is a 1920s Craftsman and we were worried an addition would just look stuck on. Luke brought in all the right details — matching siding profile, the trim style, the roofline tie-in — and the crew executed it perfectly. You genuinely can't tell the addition was added later, which is exactly what we wanted.",
    author: "Alex B.",
    rating: 5,
  },

  cta: {
    heading: "Ready to add more space?",
    body: "Tell us what you're missing and we'll map out a realistic scope and timeline.",
    primaryCta: { label: "Request an estimate", href: "/estimate/" },
    secondaryCta: { label: "View services", href: "/services/" },
  },

  related: [homeAdditions],
};

homeAdditions.relatedPortfolio = ravennaAddition;
homeAdditions.featuredTestimonial = ravennaAddition.testimonial;

ravennaAddition.seo.images = ravennaAddition.gallery.images;
homeAdditions.seo.images = homeAdditions.galleryImages;
