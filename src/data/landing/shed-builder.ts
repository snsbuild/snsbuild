import type { LandingPage } from "../../types/entity-types";
import { phoneDisplay } from "../../siteConfig";
import { magnoliaShedStudio } from "../outdoor/sheds";

export const shedBuilderLanding: LandingPage = {
  kind: "landing",
  slug: "shed-builder-seattle",
  path: "/shed-builder-seattle",

  // Set to "noindex, follow" to keep this page exclusive to paid traffic.
  robots: "index, follow",

  seo: {
    title: "Free Shed Estimate in Seattle | Custom Shed Quotes | Saddle and Spur",
    description: `Licensed Seattle shed builder. Custom storage sheds, garden sheds, workshops, and insulated backyard offices on real foundations. Free estimate, setbacks checked. Call ${phoneDisplay}.`,
    // Deliberately estimate/quote intent — the service page owns the
    // "shed builder seattle" head term.
    keywords: [
      "free shed estimate seattle",
      "shed quote seattle",
      "custom shed cost seattle",
      "how much does a shed cost seattle",
      "shed builder near me",
      "backyard office estimate seattle",
    ],
    ogImage: {
      src: "/images/services/sheds/ogImage.jpg",
      alt: "Cedar-shingled backyard shed with a gable roof in a Seattle yard",
    },
    images: [],
  },

  service: {
    name: "Shed Building",
    serviceType: "Shed Construction",
    areaServed: ["Greater Seattle / King County"],
    servicePath: "/services/shed-building-seattle",
  },

  hero: {
    eyebrow: "Seattle & King County shed builder",
    headline: "A shed that's still standing straight in twenty years",
    subhead:
      "Site-built storage sheds, garden buildings, workshops, and insulated backyard offices across Greater Seattle — on real foundations, with real roof details, sized and sited to your setbacks.",
    bullets: [
      "Free on-site estimate — we check your setbacks before we design",
      "Often no construction permit needed under about 200 sq ft",
      "Gravel pad, pier, or slab foundations — not pavers on dirt",
      "Insulated, wired, and heated backyard offices available",
      "Roof, siding, and trim matched to your house",
    ],
    image: {
      src: "/images/services/sheds/gallery-1.jpg",
      alt: "Cedar-shingled backyard shed with a gable roof",
    },
    formHeading: "Get your free shed estimate",
    formByline:
      "Leave your name and how to reach you. We'll call to hear about the project and schedule a site visit — usually within one business day.",
    formName: "shed-lead",
    submitLabel: "Request my free estimate",
  },

  trustBadges: [
    "WA licensed & insured",
    "Setbacks verified with SDCI",
    "Written line-item estimates",
  ],

  stats: [
    { label: "Storage / garden shed", value: "1–2 wks" },
    { label: "Insulated office build", value: "3–5 wks" },
    { label: "Typical permit exemption", value: "<200 sq ft" },
    { label: "Cost for the estimate", value: "$0" },
  ],

  valueProps: [
    {
      title: "A foundation, not a guess",
      description:
        "Gravel pads with pressure-treated skids, concrete piers, or a slab — sized for the structure, the soil, and the slope. Almost every rotted shed we're asked to replace was set straight on dirt or a few patio pavers, and that's the whole story.",
      icon: "fa-solid fa-trowel-bricks",
    },
    {
      title: "Sized to stay permit-exempt",
      description:
        "Seattle generally exempts detached accessory buildings under roughly 200 square feet without plumbing from a construction permit. Zoning still applies, so we verify setbacks and lot coverage for your address first, then design right up against the line where that helps you.",
      icon: "fa-solid fa-ruler-combined",
    },
    {
      title: "A roof that actually sheds water",
      description:
        "Real roofing assembly, proper underlayment, drip edge, and enough overhang to keep rain off the walls. Add ventilation and what's stored inside stays dry instead of growing mold through a Seattle winter.",
      icon: "fa-solid fa-cloud-rain",
    },
    {
      title: "Backyard offices that work in February",
      description:
        "Insulated floor, walls, and roof, permitted power from the house, and a ductless mini-split. An uninsulated shed with an extension cord run to it is a summer room — everyone who tries that is back at the dining table by November.",
      icon: "fa-solid fa-laptop-house",
    },
    {
      title: "It should look like it belongs",
      description:
        "Matching the roof pitch, siding profile, trim, and paint to your house makes the shed read as part of the property rather than an object parked in the yard. Small decision, outsized effect on the finished yard and on resale.",
      icon: "fa-solid fa-house-chimney",
    },
    {
      title: "Straight answers about DADUs",
      description:
        "If you want to sleep, cook, or rent it out, you need a DADU, not a shed — different permit path, different budget. We build both and we'll tell you which one your actual goal requires before you spend anything.",
      icon: "fa-solid fa-comments",
    },
  ],

  gallery: {
    eyebrow: "Recent work",
    heading: "Sheds and backyard structures",
    byline:
      "Cedar siding, real roof assemblies, pier foundations, and finished, heated interiors.",
    images: [
      {
        src: "/images/portfolio/sheds/gallery-1.jpg",
        alt: "Cedar-shingled backyard shed with a gable roof",
      },
      {
        src: "/images/portfolio/sheds/gallery-2.jpg",
        alt: "Detached backyard structure with cedar siding and a window wall",
      },
      {
        src: "/images/portfolio/sheds/gallery-3.jpg",
        alt: "Cedar shingle siding and roof detail on a backyard shed",
      },
      {
        src: "/images/portfolio/sheds/gallery-4.jpg",
        alt: "Cedar backyard structure with a privacy screen and covered seating",
      },
      {
        src: "/images/services/sheds/gallery-3.jpg",
        alt: "Backyard shed and deck in a Pacific Northwest yard",
      },
    ],
    cta: {
      label: "See the full shed portfolio",
      href: "/portfolio/sheds-seattle",
    },
  },

  testimonial: magnoliaShedStudio.testimonial,

  faqs: [
    {
      question: "Is the estimate really free?",
      answer:
        "Yes. We come out, look at the site and the slope, confirm your setbacks, talk through foundation and size options, and send a written line-item estimate at no charge and with no obligation.",
    },
    {
      question: "Will I need a permit?",
      answer:
        "Often not for the structure itself. Seattle generally exempts small detached accessory buildings under roughly 200 square feet with no plumbing from a construction permit. Zoning still applies — setbacks, rear-yard coverage, and lot coverage — and power needs its own electrical permit. We confirm the current rules with SDCI for your address first.",
    },
    {
      question: "Can the shed have power, heat, and internet?",
      answer:
        "Yes. We run a permitted circuit from the main panel, add outlets and lighting, install a mini-split or wall heater, and pull data or set up a mesh point. That's what makes the difference between a summer room and a room you use all year.",
    },
    {
      question: "How long does it take to build?",
      answer:
        "A straightforward storage or garden shed is typically 1–2 weeks on site once the pad is ready. An insulated, wired, and finished backyard office generally runs 3–5 weeks. If an electrical permit is involved we schedule around the review time rather than around it surprising you.",
    },
    {
      question: "Why not just buy a prefab kit?",
      answer:
        "For plain low-cost storage a kit can be the right call, and we'll say so. The trade-offs are thin sheathing, stapled roofing, no real foundation, and no flashing where the roof meets the walls — which in this climate usually means visible rot in well under a decade.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "Greater Seattle and King County — Ballard, Fremont, Greenwood, Magnolia, Queen Anne, Capitol Hill, West Seattle and the rest of the city, plus Bellevue, Kirkland, Redmond, Renton, Shoreline, Edmonds and surrounding areas.",
    },
  ],

  crossLinks: {
    heading: "Want more detail before you call?",
    byline:
      "The service page covers foundations, permits, and backyard offices in depth. The portfolio shows finished work with timelines.",
    links: [
      {
        label: "Shed building services",
        href: "/services/shed-building-seattle",
        description:
          "Storage, garden, workshop, and office builds — plus foundations and repairs.",
      },
      {
        label: "Shed portfolio",
        href: "/portfolio/sheds-seattle",
        description: "Finished sheds and backyard structures with details.",
      },
      {
        label: "Magnolia shed studio",
        href: "/portfolio/magnolia-shed-studio",
        description:
          "A 190 sq ft insulated backyard office built under the permit threshold.",
      },
      {
        label: "ADU construction",
        href: "/services/adu-construction-seattle",
        description:
          "If you need a kitchen, bathroom, or rental, a DADU is the right path.",
      },
    ],
  },

  closing: {
    heading: "Let's talk about your shed",
    body: "Tell us what's going inside and roughly where you'd put it. We'll walk the site, check the setbacks, and price it out in writing.",
    primaryCta: { label: "Request a free estimate", href: "#lead-form" },
    secondaryCta: {
      label: "Or read about our shed building services",
      href: "/services/shed-building-seattle",
    },
  },
};

shedBuilderLanding.seo.images = shedBuilderLanding.gallery.images;
