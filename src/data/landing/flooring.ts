import type { LandingPage } from "../../types/entity-types";
import { phoneDisplay } from "../../siteConfig";
import { queenAnneFlooring } from "../interior/flooring";

export const flooringLanding: LandingPage = {
  kind: "landing",
  slug: "flooring-installer-seattle",
  path: "/flooring-installer-seattle/",

  // Set to "noindex, follow" to keep this page exclusive to paid traffic.
  robots: "index, follow",

  seo: {
    title: "Free Flooring Estimate in Seattle | Saddle & Spur",
    description: `Free flooring estimate in Seattle. On-site visit, subfloor check, and line-item pricing for hardwood, LVP, and tile from one crew. Call ${phoneDisplay}.`,
    // Deliberately estimate/quote intent — the service page owns the
    // "flooring installation seattle" head term.
    keywords: [
      "free flooring estimate seattle",
      "flooring installation quote seattle",
      "hardwood floor installation cost seattle",
      "lvp installation cost seattle",
      "flooring installer near me",
      "replace carpet with hardwood seattle",
    ],
    ogImage: {
      src: "/images/services/flooring/gallery-4.jpg",
      alt: "Empty white room with honey-toned wide-plank oak floor and garden-view windows",
    },
    images: [],
  },

  service: {
    name: "Flooring Installation",
    serviceType: "Flooring Installation",
    areaServed: ["Greater Seattle / King County"],
    servicePath: "/services/flooring-installation-seattle/",
  },

  hero: {
    eyebrow: "Free flooring estimate in Seattle",
    headline: "New floors in days — laid on a subfloor we've actually checked",
    subhead:
      "Hardwood, LVP, and tile across Greater Seattle. We pull the old floor, fix what's underneath, install, and site-finish — one crew, one schedule, and a written line-item estimate before any material is ordered.",
    bullets: [
      "Free on-site estimate — we look under the carpet before we quote",
      "Demo, disposal, and subfloor prep included in every scope",
      "Most whole-home installs finish in 3–7 days",
      "Site-finished hardwood — choose your exact stain and sheen",
      "Waterproof LVP for kitchens, baths, and basements",
    ],
    image: {
      src: "/images/services/flooring/gallery-1.jpg",
      alt: "Worker in gloves kneeling to lay oak floor planks in a room under renovation",
    },
    formHeading: "Get your free flooring estimate",
    formByline:
      "Leave your name and how to reach you. We'll call to hear about the project and schedule a walkthrough — usually within one business day.",
    formName: "flooring-lead",
    submitLabel: "Request my free estimate",
  },

  trustBadges: [
    "WA licensed & insured",
    "Demo & disposal included",
    "Written line-item estimates",
  ],

  stats: [
    { label: "Typical whole-home install", value: "3–7 days" },
    { label: "Hardwood acclimation", value: "3–5 days" },
    { label: "Demo & disposal", value: "Included" },
    { label: "Cost for the estimate", value: "$0" },
  ],

  valueProps: [
    {
      title: "The subfloor decides the floor",
      description:
        "Soft spots, squeaks, and dips all telegraph straight through a new floor. We pull the old material, inspect and level the subfloor, and fix what we find before anything goes down — not after you notice it.",
      icon: "fa-solid fa-hammer",
    },
    {
      title: "The right material for each room",
      description:
        "Site-finished hardwood for living areas, waterproof LVP where water and dogs happen, porcelain tile where it has to take a beating. We'll price the options side by side and tell you honestly where each one belongs.",
      icon: "fa-solid fa-scale-balanced",
    },
    {
      title: "Acclimation built into the schedule",
      description:
        "Hardwood needs a few days to adjust to your home's temperature and humidity — especially once the heat is running for the season. We plan for it so it never becomes a delay or a gap in the finished floor.",
      icon: "fa-solid fa-calendar-check",
    },
    {
      title: "Transitions that look intentional",
      description:
        "Thresholds, stair nosings, and the joins between rooms and materials are where cheap installs give themselves away. We plan them up front so the finished floor reads as one piece.",
      icon: "fa-solid fa-ruler-combined",
    },
    {
      title: "One crew, start to finish",
      description:
        "The same crew handles demo, prep, install, and finishing. No hand-offs between a demo company, an installer, and a refinisher — and no one to blame but us if something isn't right.",
      icon: "fa-solid fa-user-check",
    },
    {
      title: "A number that holds",
      description:
        "Our estimates are detailed and line-item, not a per-square-foot guess. If we find subfloor damage during the walkthrough, it's in the estimate — not a surprise on install day.",
      icon: "fa-solid fa-magnifying-glass-dollar",
    },
  ],

  gallery: {
    eyebrow: "Recent work",
    heading: "Floors we've installed around Seattle",
    byline:
      "Site-finished white oak, waterproof LVP, tile entries, and stair work.",
    images: [
      {
        src: "/images/portfolio/flooring/gallery-1.jpg",
        alt: "Small kitchenette with white cabinets and dark countertop on oak-look floor leading to a hallway",
      },
      {
        src: "/images/services/flooring/gallery-2.jpg",
        alt: "Open great room with gray-brown plank flooring, white kitchen island, and stacked-stone fireplace",
      },
      {
        src: "/images/portfolio/flooring/gallery-2.jpg",
        alt: "Long empty room with glossy oak-look floor, pale gray walls, and a single window",
      },
      {
        src: "/images/services/flooring/gallery-3.jpg",
        alt: "Long living room with dark reddish wide-plank wood floor, white walls, and potted ferns",
      },
      {
        src: "/images/portfolio/flooring/gallery-3.jpg",
        alt: "Small empty room with oak-look floor and gold-framed mirrored sliding closet doors",
      },
      {
        src: "/images/services/flooring/gallery-4.jpg",
        alt: "Empty white room with honey-toned wide-plank oak floor and garden-view windows",
      },
    ],
    cta: {
      label: "See the Queen Anne flooring project",
      href: "/portfolio/queen-anne-hardwood-floors/",
    },
  },

  testimonial: queenAnneFlooring.testimonial,

  faqs: [
    {
      question: "Is the estimate really free?",
      answer:
        "Yes. We come out, measure, look at what's under the current flooring where we can, talk through materials, and send you a written line-item estimate at no charge and with no obligation.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most whole-home flooring projects run 3–7 days on site depending on square footage and material. Hardwood needs 3–5 days to acclimate before install, which we schedule ahead so it doesn't add to your time on site.",
    },
    {
      question: "What affects the cost of new flooring?",
      answer:
        "Material and square footage set the baseline; the subfloor decides the rest. Leveling, squeak repair, or replacing water-damaged sheathing adds labor, and so do stairs, transitions between rooms, and glued-down flooring that has to come up. Demo and disposal are part of our flooring scopes, so the line-item estimate covers the whole job, not just the boards.",
    },
    {
      question: "Hardwood, LVP, or tile: how do they compare on price?",
      answer:
        "LVP is usually the least expensive to buy and to install. Tile and site-finished hardwood cost more, mostly in labor: tile needs careful substrate prep and setting, and hardwood needs acclimation, sanding, and finishing on site. Ask us to price more than one material for the same rooms and the estimate will show them side by side.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "Greater Seattle and King County — Ballard, Fremont, Queen Anne, Magnolia, Capitol Hill, West Seattle, Columbia City and the rest of the city, plus Bellevue, Kirkland, Redmond, Renton, Shoreline, Edmonds and surrounding areas.",
    },
  ],

  crossLinks: {
    heading: "Want more detail before you call?",
    byline:
      "The service page covers each material and our prep process in depth, and the portfolio shows a finished whole-house install.",
    links: [
      {
        label: "Flooring installation services",
        href: "/services/flooring-installation-seattle/",
        description:
          "Hardwood, LVP, tile, and subfloor prep — how we scope each one.",
      },
      {
        label: "Queen Anne hardwood floors",
        href: "/portfolio/queen-anne-hardwood-floors/",
        description:
          "Carpet out, white oak in, and the whole house site-finished in five days.",
      },
      {
        label: "Kitchen remodeling",
        href: "/services/kitchen-remodeling-seattle/",
        description: "Pair new floors with a kitchen remodel on one schedule.",
      },
      {
        label: "Whole-home remodeling",
        href: "/services/whole-home-remodeling-seattle/",
        description:
          "Flooring, kitchen, and baths coordinated as one project.",
      },
    ],
  },

  closing: {
    heading: "Let's talk about your floors",
    body: "Tell us which rooms and what's down now. We'll come take a look and send a written, line-item estimate — no pressure and no obligation.",
    primaryCta: { label: "Request a free estimate", href: "#lead-form" },
    secondaryCta: {
      label: "Or read about our flooring services",
      href: "/services/flooring-installation-seattle/",
    },
  },
};

flooringLanding.seo.images = flooringLanding.gallery.images;
