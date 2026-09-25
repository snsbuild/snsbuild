import type { LandingPage } from "../../types/entity-types";
import { phoneDisplay } from "../../siteConfig";
import { queenAnneFlooring } from "../interior/flooring";

export const flooringLanding: LandingPage = {
  kind: "landing",
  slug: "flooring-installer-seattle",
  path: "/flooring-installer-seattle",

  // Set to "noindex, follow" to keep this page exclusive to paid traffic.
  robots: "index, follow",

  seo: {
    title:
      "Free Flooring Estimate in Seattle | Flooring Installation Quotes | Saddle and Spur",
    description: `Licensed Seattle flooring installer. Hardwood, LVP, and tile — demo, subfloor prep, install, and site-finishing by one crew. Free on-site estimate, line-item pricing. Call ${phoneDisplay}.`,
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
      src: "/images/services/flooring/ogImage.jpg",
      alt: "Flooring installation in Seattle",
    },
    images: [],
  },

  service: {
    name: "Flooring Installation",
    serviceType: "Flooring Installation",
    areaServed: ["Greater Seattle / King County"],
    servicePath: "/services/flooring-installation-seattle",
  },

  hero: {
    eyebrow: "Seattle & King County flooring installer",
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
      alt: "White oak hardwood",
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
        alt: "Site-finished white oak hardwood floors in a Queen Anne craftsman",
      },
      {
        src: "/images/services/flooring/gallery-2.jpg",
        alt: "LVP kitchen floor",
      },
      {
        src: "/images/portfolio/flooring/gallery-2.jpg",
        alt: "New hardwood floors through the main level of a Queen Anne home",
      },
      {
        src: "/images/services/flooring/gallery-3.jpg",
        alt: "Tile entryway",
      },
      {
        src: "/images/portfolio/flooring/gallery-3.jpg",
        alt: "White oak hardwood installed in place of old carpet in Queen Anne",
      },
      {
        src: "/images/services/flooring/gallery-4.jpg",
        alt: "Staircase refinish",
      },
    ],
    cta: {
      label: "See the Queen Anne flooring project",
      href: "/portfolio/queen-anne-hardwood-floors",
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
      question: "Do you remove the old flooring?",
      answer:
        "Yes — demo and disposal are included in our flooring scopes, including carpet, tack strip, staples, and glued-down material.",
    },
    {
      question: "What's the best flooring for Seattle's wet climate?",
      answer:
        "LVP is the most moisture-resistant option and works well in kitchens, bathrooms, and basements. For main living areas where you want real wood, site-finished hardwood holds up well with reasonable moisture control. Tile is the right call for entries and mudrooms that see wet boots all winter.",
    },
    {
      question: "Can you match our existing hardwood?",
      answer:
        "We do our best to source a matching species and stain, and site-finishing gives us more control over the final color. We'll be upfront if an exact match isn't achievable and talk through options like running new flooring to a natural break.",
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
        href: "/services/flooring-installation-seattle",
        description:
          "Hardwood, LVP, tile, and subfloor prep — how we scope each one.",
      },
      {
        label: "Queen Anne hardwood floors",
        href: "/portfolio/queen-anne-hardwood-floors",
        description:
          "Carpet out, white oak in, and the whole house site-finished in five days.",
      },
      {
        label: "Kitchen remodeling",
        href: "/services/kitchen-remodeling-seattle",
        description: "Pair new floors with a kitchen remodel on one schedule.",
      },
      {
        label: "Whole-home remodeling",
        href: "/services/whole-home-remodeling-seattle",
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
      href: "/services/flooring-installation-seattle",
    },
  },
};

flooringLanding.seo.images = flooringLanding.gallery.images;
