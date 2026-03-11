import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const windowsDoors: ServiceEntity = {
  id: "windows-doors-seattle",
  type: "service",
  path: "/services/windows-doors-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Interior,
  name: "Windows & Doors",
  description:
    "Window and door replacement for Seattle homes — better efficiency, better looks, and a weather-tight installation.",
  breadcrumb: "Interior • Seattle",

  service: {
    serviceType: "Window & Door Replacement",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Window replacement",
        description: "Energy-efficient windows with proper flashing and trim.",
      },
      {
        name: "Exterior door replacement",
        description:
          "Entry, patio, and French doors installed plumb and sealed.",
      },
      {
        name: "Interior door replacement",
        description: "Pre-hung interior doors, hardware, and trim.",
      },
    ],
  },

  seo: {
    title: "Windows & Doors Seattle | Saddle and Spur Construction",
    description:
      "Window and door replacement in Seattle. Energy-efficient installs, proper flashing, and clean trim work — done right the first time.",
    keywords: [
      "window replacement seattle",
      "door replacement seattle",
      "energy efficient windows seattle",
      "exterior door installation seattle",
    ],
    ogImage: {
      src: "/images/services/doors-windows/ogImage.jpg",
      alt: "Window and door replacement in Seattle",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  header: "Windows & doors, installed properly",
  subheader:
    "Energy-efficient products, weather-tight installation, clean trim work.",
  galleryImages: [
    {
      src: "/images/services/doors-windows/gallery-1.jpg",
      alt: "New entry door",
    },
    {
      src: "/images/services/doors-windows/gallery-2.jpg",
      alt: "Casement windows",
    },
    {
      src: "/images/services/doors-windows/gallery-3.jpg",
      alt: "French patio doors",
    },
    {
      src: "/images/services/doors-windows/gallery-4.jpg",
      alt: "Interior door trim",
    },
    {
      src: "/images/services/doors-windows/gallery-5.jpg",
      alt: "Interior door trim",
    },
  ],
  featuredTestimonial: {} as Testimonial,
  faqs: [
    {
      question: "How long does window replacement take?",
      answer:
        "Most window replacement projects take 1–3 days depending on the number of units.",
    },
    {
      question: "Do you handle the permitting for window and door work?",
      answer:
        "Permit requirements vary. We'll let you know upfront what's required for your project.",
    },
    {
      question: "What window brands do you install?",
      answer:
        "We work with a range of manufacturers and can help you select the right product for your budget and climate goals.",
    },
    {
      question:
        "What's the difference between retrofit and full-frame window replacement?",
      answer:
        "Retrofit replacement inserts a new window into the existing frame — faster and less invasive. Full-frame replacement removes everything down to the rough opening, which lets us inspect and repair framing, add proper flashing, and address any water damage found underneath.",
    },
    {
      question: "How do I know if my windows need replacing or just repairing?",
      answer:
        "If you're seeing fogging between panes (seal failure), significant drafts, rot in the frame, or difficult operation, replacement is usually more cost-effective than repair. We'll give you an honest assessment when we look at them.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Window & door services",
    byline: "Better efficiency, better curb appeal.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Window replacement",
        description:
          "Energy-efficient double and triple-pane windows installed with full flashing, foam-and-tape seal, and clean interior trim. We inspect the rough opening at every window — if there's rot or water damage behind the existing frame, we address it before the new window goes in.",
        icon: "fa-solid fa-window-maximize",
      },
      {
        title: "Exterior doors",
        description:
          "Entry, patio, and French doors installed plumb, level, and sealed against Seattle weather. Proper weatherstripping, threshold adjustment, and flashing are what separate a tight door from one that leaks after the first winter storm.",
        icon: "fa-solid fa-door-open",
      },
      {
        title: "Interior doors",
        description:
          "Pre-hung interior doors, pocket doors, and barn doors with matching hardware and trim. We hang doors to swing and close properly — shimmed level with consistent reveals — not just fit in the opening.",
        icon: "fa-solid fa-door-closed",
      },
      {
        title: "Trim & casing",
        description:
          "Interior and exterior casing on all openings, matched to existing profiles where possible. Clean casing is what makes a window replacement or door install look finished — we treat it as part of the scope, not an add-on.",
        icon: "fa-solid fa-border-none",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const wallingfordWindowsDoors: PortfolioEntity = {
  id: "wallingford-windows-doors",
  type: "portfolio",
  path: "/portfolio/wallingford-windows-doors",
  name: "Wallingford Window & Door Refresh",
  description:
    "Full window replacement and new entry door on a 1940s Wallingford home — improved efficiency, updated look, and a weather-tight installation.",
  breadcrumb: "Portfolio • Interior • Windows & Doors",

  seo: {
    title: "Wallingford Window & Door Refresh | Saddle and Spur Construction",
    description:
      "Full window replacement and new entry door on a 1940s Wallingford home — improved efficiency, updated look, and a weather-tight installation.",
    keywords: [
      "wallingford window replacement",
      "seattle window contractor",
      "door replacement seattle",
    ],
    ogImage: {
      src: "/images/portfolio/doors-windows/ogImage.jpg",
      alt: "After",
    },
    images: [],
    datePublished: "2025-09-15",
  },

  project: {
    serviceName: "Windows & Doors",
    location: { neighborhood: "Wallingford", city: "Seattle" },
    completionDate: "2025-09-15",
    duration: "3 days",
    materials: [
      "Fiberglass windows",
      "Steel entry door",
      "Exterior casing",
      "Low-expansion foam",
    ],
    problem:
      "Original single-pane windows and a drafty entry door on a 1940s home — high heating bills and street noise.",
    solution:
      "Replaced all windows with energy-efficient double-pane units and installed a new insulated steel entry door with proper flashing throughout.",
    results: [
      "Noticeably lower heating bills",
      "Significant reduction in street noise",
      "Updated curb appeal",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/doors-windows/ogImage.jpg",
      alt: "Wallingford windows after replacement",
    },
    eyebrow: "Interior • Windows & Doors",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Windows & Doors",
      href: "/services/windows-doors-seattle",
    },
  },

  overview: {
    locationLabel: "Wallingford, Seattle",
    timelineLabel: "3 days",
    completedLabel: "September 2025",
    scopeLabel: "Window & door replacement",
    noteHtml:
      "14 windows replaced and new entry door installed with full exterior flashing.",
  },

  highlights: [
    "14 windows replaced",
    "New insulated entry door",
    "Full exterior flashing",
    "Clean interior trim throughout",
    "Lower heating bills",
    "Completed in 3 days",
  ],

  story: {
    homeownerWanted:
      "Lower energy bills and a home that felt tight and quiet against Seattle winters.",
    plan: "Replace all windows with double-pane units, install a new entry door, and flash everything properly.",
    buildSteps: [
      "Window and door removal",
      "Rough opening inspection and repair",
      "Window installation with full flashing",
      "New entry door installation",
      "Interior and exterior casing",
    ],
    results: [
      "Energy-efficient home envelope",
      "Updated curb appeal",
      "Completed on schedule",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Window replacement",
        description: "14 double-pane fiberglass windows with full flashing.",
        icon: "fa-solid fa-window-maximize",
      },
      {
        name: "Entry door",
        description: "Insulated steel entry door with new hardware and casing.",
        icon: "fa-solid fa-door-open",
      },
      {
        name: "Trim & casing",
        description: "Interior and exterior casing on all openings.",
        icon: "fa-solid fa-border-none",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      { src: "/images/portfolio/doors-windows/gallery-1.jpg", alt: "After" },
      { src: "/images/portfolio/doors-windows/gallery-2.jpg", alt: "After" },
      { src: "/images/portfolio/doors-windows/ogImage.jpg", alt: "After" },
      { src: "/images/portfolio/doors-windows/gallery-3.jpg", alt: "After" },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/doors-windows/gallery-2.jpg",
      alt: "After",
    },
    neighborhood: "Wallingford",
    quote:
      "Our 1940s house had original single-pane windows that rattled every time a truck went by and made winters miserable. Marco's crew replaced all 14 windows and the entry door in three days, and the flashing and trim work was done cleanly the first time. Our heating bills dropped noticeably the first month and the house looks so much better from the street.",
    author: "Sam T.",
    rating: 5,
  },

  cta: {
    heading: "Ready for new windows or doors?",
    body: "Tell us what you're replacing and we'll put together a clear scope and cost.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [windowsDoors],
};

windowsDoors.relatedPortfolio = wallingfordWindowsDoors;
windowsDoors.featuredTestimonial = wallingfordWindowsDoors.testimonial;

wallingfordWindowsDoors.seo.images = wallingfordWindowsDoors.gallery.images;
windowsDoors.seo.images = windowsDoors.galleryImages;
