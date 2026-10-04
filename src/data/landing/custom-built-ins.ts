import type { LandingPage } from "../../types/entity-types";
import { phoneDisplay } from "../../siteConfig";
import { ballardKitchen } from "../interior/kitchen-remodel";

// TODO(built-ins): testimonial, gallery, and the project cross-link borrow the
// Ballard kitchen (its butler's pantry) until a real built-ins job is written up.
export const customBuiltInsLanding: LandingPage = {
  kind: "landing",
  slug: "custom-built-ins-seattle",
  path: "/custom-built-ins-seattle/",

  // Set to "noindex, follow" to keep this page exclusive to paid traffic.
  robots: "index, follow",

  seo: {
    title: "Free Custom Built-In Estimate in Seattle | Saddle and Spur",
    description: `Custom built-in cabinets, bookshelves, window seats, and mudroom benches in Seattle. Free on-site estimate, line-item pricing. Call ${phoneDisplay}.`,
    // Deliberately estimate/quote intent — the service page owns the
    // "custom built-ins seattle" head term.
    keywords: [
      "built in cabinets estimate seattle",
      "custom built-ins quote seattle",
      "built in bookshelves cost seattle",
      "how much do custom built-ins cost seattle",
      "finish carpenter near me",
      "mudroom bench built in king county",
    ],
    ogImage: {
      src: "/images/portfolio/kitchen/gallery-5.jpg",
      alt: "Custom built-in cabinetry with glass-front uppers and open floating shelves",
    },
    images: [],
  },

  service: {
    name: "Custom Built-Ins & Carpentry",
    serviceType: "Custom Built-Ins & Finish Carpentry",
    areaServed: ["Greater Seattle / King County"],
    servicePath: "/services/custom-built-ins-seattle/",
  },

  hero: {
    eyebrow: "Seattle & King County built-ins",
    headline: "Built-ins that look like they came with the house",
    subhead:
      "Bookshelves, window seats, mudroom benches, pantries, and media walls measured to your walls and scribed to fit — so the finished piece looks original, not added on.",
    bullets: [
      "Free on-site estimate — we measure the space before we quote it",
      "Line-item pricing, so you can see what each material and finish costs",
      "Scribed to out-of-square walls and floors, common in older Seattle homes",
      "Trim and finish matched to the rest of your house",
      "Outlets, lighting, and framing planned in, not worked around",
    ],
    image: {
      src: "/images/portfolio/kitchen/gallery-5.jpg",
      alt: "Custom built-in with glass-front upper cabinets and open floating shelves",
    },
    formHeading: "Get your free built-ins estimate",
    formByline:
      "Leave your name and how to reach you. We'll call to hear about the project and schedule a visit — usually within one business day.",
    formName: "built-ins-lead",
    submitLabel: "Request my free estimate",
  },

  trustBadges: [
    "WA licensed & insured",
    "Measured on-site",
    "Written line-item estimates",
  ],

  // TODO(built-ins): confirm the timeline range against real jobs.
  stats: [
    { label: "Typical build, measure to install", value: "3–6 wks" },
    { label: "Made to your measurements", value: "100%" },
    { label: "Point of contact, start to finish", value: "1" },
    { label: "Cost for the estimate", value: "$0" },
  ],

  valueProps: [
    {
      title: "Built to the room, not the catalog",
      description:
        "Every piece starts with measurements of your actual space. Alcoves, sloped ceilings, and odd corners become storage instead of dead space a stock cabinet can't reach.",
      icon: "fa-solid fa-ruler-combined",
    },
    {
      title: "Scribed to fit older homes",
      description:
        "Seattle's Craftsman and mid-century homes rarely have square walls or level floors. We scribe face frames and fillers to the house, so there are no gaps hidden behind caulk.",
      icon: "fa-solid fa-house-chimney",
    },
    {
      title: "Matched to what's already there",
      description:
        "We match casing, baseboard, and crown profiles plus paint or stain, so new built-ins read as part of the original house rather than a later addition.",
      icon: "fa-solid fa-swatchbook",
    },
    {
      title: "Power and light planned in",
      description:
        "Outlets inside a media wall, puck lights in shelving, and a charging drawer in the mudroom are planned before install, with the electrical handled by our team.",
      icon: "fa-solid fa-plug",
    },
    {
      title: "Clean install, quick turnaround",
      description:
        "Most of the work happens before we arrive. On-site, we protect floors, contain dust, and clean up daily, so a built-in project disrupts your home for days, not weeks.",
      icon: "fa-solid fa-broom",
    },
    {
      title: "A number that holds",
      description:
        "Our estimates are detailed and line-item, not vague ranges. Once the design and finishes are agreed, we hold to it. Change orders only happen when you ask for something new.",
      icon: "fa-solid fa-magnifying-glass-dollar",
    },
  ],

  gallery: {
    eyebrow: "Recent work",
    heading: "Cabinetry and built-ins around Seattle",
    byline:
      "Pantries, floor-to-ceiling cabinetry, and storage built to fit the room it's in.",
    images: [
      {
        src: "/images/portfolio/kitchen/gallery-5.jpg",
        alt: "Custom butler's pantry with glass-front upper cabinets, open floating shelves, and quartz countertop",
      },
      {
        src: "/images/portfolio/kitchen/gallery-3.jpg",
        alt: "Tall shaker cabinetry with brass pulls built around a panel-ready refrigerator",
      },
      {
        src: "/images/services/kitchen/gallery-3.jpg",
        alt: "Charcoal upper cabinets and walnut base cabinetry along a full wall",
      },
      {
        src: "/images/services/kitchen/gallery-2.jpg",
        alt: "Sage gray shaker cabinetry with a butcher block work surface",
      },
      {
        src: "/images/portfolio/kitchen/gallery-2.jpg",
        alt: "White shaker cabinetry wall with a double wall oven built in",
      },
      {
        src: "/images/services/kitchen/gallery-4.jpg",
        alt: "White perimeter cabinetry and a sage green island in a light-filled room",
      },
    ],
    cta: {
      label: "See the Ballard butler's pantry project",
      href: "/portfolio/ballard-kitchen-refresh/",
    },
  },

  testimonial: ballardKitchen.testimonial,

  faqs: [
    {
      question: "Is the estimate really free?",
      answer:
        "Yes. We come out, measure the space, talk through what you want to store and how it should look, and send a written line-item estimate at no charge and with no obligation.",
    },
    {
      question: "How long does a built-in project take?",
      answer:
        "Most projects run a few weeks from final measurements to install, depending on size and finish. The on-site install itself is usually only a few days.",
    },
    {
      question: "Painted or stained — which should I choose?",
      answer:
        "Painted built-ins are the most common and easiest to match to existing trim. Stained hardwood suits Craftsman interiors and libraries. We'll show you samples and price both on the estimate.",
    },
    {
      question: "Can you add built-ins to a room that's already finished?",
      answer:
        "Yes. Most built-ins go into finished rooms. We protect floors and furniture, keep dust contained, and patch and paint where the new piece meets the wall.",
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
      "The service page covers each kind of built-in in depth, and the portfolio shows finished work.",
    links: [
      {
        label: "Custom built-ins & carpentry",
        href: "/services/custom-built-ins-seattle/",
        description:
          "Bookshelves, window seats, mudroom benches, pantries, and trim — how we scope each one.",
      },
      {
        label: "Ballard kitchen & butler's pantry",
        href: "/portfolio/ballard-kitchen-refresh/",
        description:
          "Custom pantry cabinetry with glass-front uppers and open shelving.",
      },
      {
        label: "Basement & space conversions",
        href: "/services/attic-basement-conversions-seattle/",
        description:
          "Turn an unfinished basement or attic into a room with built-in storage.",
      },
      {
        label: "Whole-home remodeling",
        href: "/services/whole-home-remodeling-seattle/",
        description: "Plan built-ins alongside a larger remodel.",
      },
    ],
  },

  closing: {
    heading: "Let's talk about your built-ins",
    body: "Send us the basics and we'll come measure. You'll get a written, line-item estimate — no pressure and no obligation.",
    primaryCta: { label: "Request a free estimate", href: "#lead-form" },
    secondaryCta: {
      label: "Or read about our built-in services",
      href: "/services/custom-built-ins-seattle/",
    },
  },
};

customBuiltInsLanding.seo.images = customBuiltInsLanding.gallery.images;
