import type { LandingPage } from "../../types/entity-types";
import { phoneDisplay } from "../../siteConfig";
import { wallingfordWindowsDoors } from "../interior/windows-doors";

export const windowsDoorsLanding: LandingPage = {
  kind: "landing",
  slug: "window-replacement-seattle",
  path: "/window-replacement-seattle",

  // Set to "noindex, follow" to keep this page exclusive to paid traffic.
  robots: "index, follow",

  seo: {
    title:
      "Free Window Replacement Estimate in Seattle | Window & Door Quotes | Saddle and Spur",
    description: `Licensed Seattle window and door installer. Energy-efficient replacement windows and entry, patio, and French doors, flashed and sealed properly. Free on-site estimate. Call ${phoneDisplay}.`,
    // Deliberately estimate/quote intent — the service page owns the
    // "window replacement seattle" head term.
    keywords: [
      "free window replacement estimate seattle",
      "window replacement quote seattle",
      "window replacement cost seattle",
      "drafty windows seattle",
      "entry door replacement quote seattle",
      "window installer near me",
    ],
    ogImage: {
      src: "/images/services/doors-windows/ogImage.jpg",
      alt: "Window and door replacement in Seattle",
    },
    images: [],
  },

  service: {
    name: "Windows & Doors",
    serviceType: "Window & Door Replacement",
    areaServed: ["Greater Seattle / King County"],
    servicePath: "/services/windows-doors-seattle",
  },

  hero: {
    eyebrow: "Seattle & King County window & door installer",
    headline: "Stop heating the outdoors — replace drafty windows before winter",
    subhead:
      "Energy-efficient replacement windows and entry, patio, and French doors across Greater Seattle — flashed, sealed, and trimmed properly, with every rough opening checked for rot before the new unit goes in.",
    bullets: [
      "Free on-site estimate — we check every opening, not just count them",
      "Retrofit or full-frame, recommended honestly for each window",
      "Proper flashing and foam-and-tape air sealing on every unit",
      "Most window projects finish in 1–3 days on site",
      "Clean interior and exterior trim included in the scope",
    ],
    image: {
      src: "/images/services/doors-windows/gallery-2.jpg",
      alt: "Casement windows",
    },
    formHeading: "Get your free window & door estimate",
    formByline:
      "Tell us roughly how many windows or doors and what's bothering you about them. We'll get back to you to schedule a visit — usually within one business day.",
    formName: "windows-lead",
    submitLabel: "Request my free estimate",
    projectTypes: [
      "Replace several windows",
      "Replace all windows in the house",
      "Fogged or failed double-pane glass",
      "New entry door",
      "Patio, sliding, or French door",
      "Windows + doors together",
      "Not sure yet — need guidance",
    ],
  },

  trustBadges: [
    "WA licensed & insured",
    "Every opening inspected",
    "Written line-item estimates",
  ],

  stats: [
    { label: "Typical window project", value: "1–3 days" },
    { label: "Openings checked for rot", value: "Every one" },
    { label: "Trim & casing", value: "Included" },
    { label: "Cost for the estimate", value: "$0" },
  ],

  valueProps: [
    {
      title: "Install matters as much as the window",
      description:
        "A high-end window installed without proper flashing and air sealing leaks air and water like a cheap one. Every unit we set gets flashed and foam-and-tape sealed so you get the efficiency you paid for.",
      icon: "fa-solid fa-window-maximize",
    },
    {
      title: "We look behind the old frame",
      description:
        "Older Seattle homes often hide rot or water damage around the original windows. We inspect the rough opening at every window and deal with what we find before the new unit goes in — not cover it with fresh trim.",
      icon: "fa-solid fa-magnifying-glass",
    },
    {
      title: "Retrofit or full-frame, honestly",
      description:
        "Retrofit is faster and less invasive when the existing frame is sound. Full-frame lets us rebuild flashing and repair framing when it isn't. We recommend window by window instead of selling you the bigger job everywhere.",
      icon: "fa-solid fa-scale-balanced",
    },
    {
      title: "Doors that close tight in a storm",
      description:
        "Entry, patio, and French doors are hung plumb and level with the threshold, weatherstripping, and flashing adjusted properly. That's the difference between a tight door and one that whistles and leaks after the first winter storm.",
      icon: "fa-solid fa-door-open",
    },
    {
      title: "Trim that looks finished",
      description:
        "Interior and exterior casing is part of the scope, matched to your existing profiles where possible. Clean trim is what makes a replacement look like it was always meant to be there.",
      icon: "fa-solid fa-border-none",
    },
    {
      title: "A number that holds",
      description:
        "Our estimates are detailed and line-item, per opening. Once the scope and products are agreed, we hold to it. Change orders happen when you ask for something new — not when we find something we should have priced.",
      icon: "fa-solid fa-magnifying-glass-dollar",
    },
  ],

  gallery: {
    eyebrow: "Recent work",
    heading: "Windows and doors we've installed",
    byline:
      "Replacement windows, entry doors, French patio doors, and the trim work that finishes them.",
    images: [
      {
        src: "/images/portfolio/doors-windows/gallery-1.jpg",
        alt: "Replacement windows on a 1940s Wallingford home",
      },
      {
        src: "/images/services/doors-windows/gallery-1.jpg",
        alt: "New entry door",
      },
      {
        src: "/images/services/doors-windows/gallery-3.jpg",
        alt: "French patio doors",
      },
      {
        src: "/images/portfolio/doors-windows/gallery-2.jpg",
        alt: "New windows and entry door on a Wallingford home",
      },
      {
        src: "/images/services/doors-windows/gallery-4.jpg",
        alt: "Interior door trim",
      },
      {
        src: "/images/portfolio/doors-windows/gallery-3.jpg",
        alt: "Finished window trim on a Wallingford window replacement",
      },
    ],
    cta: {
      label: "See the Wallingford window project",
      href: "/portfolio/wallingford-windows-doors",
    },
  },

  testimonial: wallingfordWindowsDoors.testimonial,

  faqs: [
    {
      question: "Is the estimate really free?",
      answer:
        "Yes. We come out, look at each window and door, check for rot and failed seals, talk through product options, and send you a written line-item estimate at no charge and with no obligation.",
    },
    {
      question: "Can you replace windows in the fall or winter?",
      answer:
        "Yes. Window replacement happens opening by opening, and most projects are on site for just 1–3 days, so it doesn't need a long dry stretch. Getting it done before the coldest months means you feel the difference on this winter's heating bills rather than next year's.",
    },
    {
      question: "Do my windows need replacing or just repairing?",
      answer:
        "Fogging between panes (a failed seal), noticeable drafts, rot in the frame, or windows that are hard to open or lock usually mean replacement is more cost-effective than repair. If a repair is the better answer, we'll tell you.",
    },
    {
      question: "What's the difference between retrofit and full-frame?",
      answer:
        "Retrofit inserts a new window into the existing frame — faster and less invasive. Full-frame removes everything down to the rough opening so we can inspect and repair framing, add proper flashing, and fix water damage underneath.",
    },
    {
      question: "Do I need a permit?",
      answer:
        "It depends on the scope — for example, whether openings change size. We'll tell you up front what your project requires and handle any permit that's needed.",
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
      "The service page covers windows, doors, and trim in depth, and the portfolio shows a finished whole-house replacement.",
    links: [
      {
        label: "Window & door services",
        href: "/services/windows-doors-seattle",
        description:
          "Window replacement, exterior and interior doors, trim, and casing.",
      },
      {
        label: "Wallingford window & door refresh",
        href: "/portfolio/wallingford-windows-doors",
        description:
          "Fourteen original single-pane windows and the entry door replaced in three days.",
      },
      {
        label: "Roofing & structural",
        href: "/services/roofing-structural-seattle",
        description: "Keep the rest of the envelope tight through the rainy season.",
      },
      {
        label: "Whole-home remodeling",
        href: "/services/whole-home-remodeling-seattle",
        description:
          "Windows alongside a kitchen, baths, and flooring on one schedule.",
      },
    ],
  },

  closing: {
    heading: "Let's talk about your windows and doors",
    body: "Tell us what's drafty, fogged, or sticking. We'll come look at every opening and send a written, line-item estimate — no pressure and no obligation.",
    primaryCta: { label: "Request a free estimate", href: "#lead-form" },
    secondaryCta: {
      label: "Or read about our window & door services",
      href: "/services/windows-doors-seattle",
    },
  },
};

windowsDoorsLanding.seo.images = windowsDoorsLanding.gallery.images;
