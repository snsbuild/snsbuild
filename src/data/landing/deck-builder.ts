import type { LandingPage } from "../../types/entity-types";
import { phoneDisplay } from "../../siteConfig";
import { eastlakeDeck } from "../outdoor/outdoor-living";

export const deckBuilderLanding: LandingPage = {
  kind: "landing",
  slug: "deck-builder-seattle",
  path: "/deck-builder-seattle",

  // Set to "noindex, follow" to keep this page exclusive to paid traffic.
  robots: "index, follow",

  seo: {
    title: "Free Deck Estimate in Seattle | Deck Builder Quotes | Saddle and Spur",
    description: `Licensed Seattle deck builder. Composite, cedar, multi-level, and covered decks. Free on-site estimate, permits handled, line-item pricing. Call ${phoneDisplay}.`,
    // Deliberately estimate/quote intent — the service page owns the
    // "deck builder seattle" head term.
    keywords: [
      "free deck estimate seattle",
      "deck quote seattle",
      "deck cost seattle",
      "how much does a deck cost seattle",
      "deck builder near me",
      "deck estimate king county",
    ],
    ogImage: {
      src: "/images/services/decks/ogImage.jpg",
      alt: "Composite deck with black metal railing built in Seattle",
    },
    images: [],
  },

  service: {
    name: "Deck Building",
    serviceType: "Deck Building",
    areaServed: ["Greater Seattle / King County"],
    servicePath: "/services/deck-building-seattle",
  },

  hero: {
    eyebrow: "Seattle & King County deck builder",
    headline:
      "A deck built for Seattle rain — with a real estimate, not a ballpark",
    subhead:
      "We design and build composite, cedar, multi-level, and covered decks across Greater Seattle. Licensed, insured, permits handled, and priced line by line so you can see exactly what you're paying for.",
    bullets: [
      "Free on-site estimate — we walk the yard before we quote a number",
      "Line-item pricing, so you can see what each decision costs",
      "Permits and inspections handled as part of our scope",
      "Engineered footings, flashed ledgers, corrosion-resistant hardware",
      "Composite, cedar, and hardwood — priced side by side",
    ],
    image: {
      src: "/images/services/decks/gallery-1.jpg",
      alt: "Composite deck with black metal railing and outdoor dining set in Seattle",
    },
    formHeading: "Get your free deck estimate",
    formByline:
      "Tell us a bit about the project and we'll get back to you to schedule a site visit — usually within one business day.",
    formName: "deck-lead",
    submitLabel: "Request my free estimate",
    projectTypes: [
      "New deck — ground level",
      "New deck — raised or multi-level",
      "Deck replacement or rebuild",
      "Deck resurfacing (keep the frame)",
      "Covered deck or deck roof",
      "Deck + outdoor kitchen or fire feature",
      "Railing replacement only",
      "Not sure yet — need guidance",
    ],
  },

  trustBadges: [
    "WA licensed & insured",
    "Permits handled in-house",
    "Written line-item estimates",
  ],

  stats: [
    { label: "Single-level deck build", value: "2–3 wks" },
    { label: "Covered or multi-level", value: "4–6 wks" },
    { label: "Composite warranty range", value: "25–50 yr" },
    { label: "Cost for the estimate", value: "$0" },
  ],

  valueProps: [
    {
      title: "The frame is the deck",
      description:
        "Anyone can screw down decking. What decides whether a deck is solid in twenty years is footing depth, joist protection, ledger flashing, and hardware that doesn't corrode in wet Pacific Northwest air. That's where we spend the effort you can't see from the yard.",
      icon: "fa-solid fa-ruler-combined",
    },
    {
      title: "Permits are our problem, not yours",
      description:
        "Seattle generally requires a permit once a deck clears 30 inches above grade or attaches to the house. We confirm the current requirement with SDCI for your address, pull the permit, and schedule the inspections as part of the job.",
      icon: "fa-solid fa-file-signature",
    },
    {
      title: "Composite or cedar, priced side by side",
      description:
        "We won't push you toward whichever material has the better margin. You'll see both options with real numbers, including what each one actually costs to maintain here over ten years, and then you choose.",
      icon: "fa-solid fa-scale-balanced",
    },
    {
      title: "Built for eight wet months",
      description:
        "Proper slope for runoff, gapping that lets water through instead of pooling, stainless or hot-dip galvanized fasteners, and covered sections where they make sense. Seattle decks fail from water, so we design against water first.",
      icon: "fa-solid fa-cloud-rain",
    },
    {
      title: "One crew, one point of contact",
      description:
        "You'll deal with the same person from the first site visit through the final walkthrough. We work in occupied homes constantly and keep the site organized, safe, and cleaned up at the end of each day.",
      icon: "fa-solid fa-user-check",
    },
    {
      title: "A number that holds",
      description:
        "Our estimates are detailed and line-item, not vague ranges. Once the scope is agreed and materials are picked, we hold to it. Change orders happen when you ask for something new — not when we find something we should have priced.",
      icon: "fa-solid fa-magnifying-glass-dollar",
    },
  ],

  gallery: {
    eyebrow: "Recent work",
    heading: "Decks we've built around Seattle",
    byline:
      "Composite and cedar surfaces, cable railing, covered structures, and built-in outdoor kitchens.",
    images: [
      {
        src: "/images/portfolio/decks/gallery-1.jpg",
        alt: "Wide composite deck with lounge seating under Pacific Northwest evergreens",
      },
      {
        src: "/images/services/decks/gallery-2.jpg",
        alt: "Cedar deck with pergola and privacy screen in a King County backyard",
      },
      {
        src: "/images/services/decks/gallery-3.jpg",
        alt: "Covered deck with cedar pergola and built-in outdoor kitchen",
      },
      {
        src: "/images/portfolio/decks/gallery-2.jpg",
        alt: "Composite deck with black metal railing and outdoor sofa",
      },
      {
        src: "/images/portfolio/decks/gallery-3.jpg",
        alt: "Covered deck with a translucent pergola roof in a city courtyard",
      },
      {
        src: "/images/portfolio/decks/gallery-5.jpg",
        alt: "Built-in stone outdoor kitchen with a stainless grill beside a deck",
      },
    ],
    cta: {
      label: "See the full deck portfolio",
      href: "/portfolio/decks-seattle",
    },
  },

  testimonial: eastlakeDeck.testimonial,

  faqs: [
    {
      question: "Is the estimate really free?",
      answer:
        "Yes. We come out, measure, look at the grade and the ledger conditions, talk through materials, and send you a written line-item estimate at no charge and with no obligation.",
    },
    {
      question: "How soon can you start?",
      answer:
        "We typically schedule a site visit within a few days of your request and get the written estimate back within about a week. Start dates depend on the current schedule and whether the deck needs a permit — we'll give you a real date rather than a hopeful one.",
    },
    {
      question: "Do I need a permit for my deck?",
      answer:
        "Usually if it's more than 30 inches above grade, attached to the house, or serving a required exit. Low freestanding platforms are often exempt. We confirm the current rule with SDCI for your specific address and handle the permit if one is needed.",
    },
    {
      question: "Composite or cedar for a Seattle deck?",
      answer:
        "We recommend capped composite for most homeowners here — it doesn't split, cup, or need annual sealing, which matters in a climate with eight wet months. Cedar costs less up front and looks beautiful, but needs a regular cleaning and sealing cycle. We price both so you can compare.",
    },
    {
      question: "Can you rebuild or repair my existing deck?",
      answer:
        "Yes, and we'll tell you honestly which one you need. We pull a few boards and check the joists, ledger, and footings first. Sound structure means resurfacing is great value. A leaking ledger or soft framing means new decking would just hide the real problem.",
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
      "The service page covers materials and permits in depth, and the portfolio shows finished work with timelines and cost drivers.",
    links: [
      {
        label: "Deck building services",
        href: "/services/deck-building-seattle",
        description:
          "Materials, railings, covered decks, repairs, and how we scope each one.",
      },
      {
        label: "Deck portfolio",
        href: "/portfolio/decks-seattle",
        description: "Finished projects with photos, timelines, and details.",
      },
      {
        label: "Eastlake covered deck",
        href: "/portfolio/eastlake-covered-deck",
        description:
          "A two-level composite deck with a covered room and cable railing.",
      },
      {
        label: "Outdoor living",
        href: "/services/outdoor-seattle",
        description:
          "Patios, pergolas, outdoor kitchens, and covered outdoor rooms.",
      },
    ],
  },

  closing: {
    heading: "Let's talk about your deck",
    body: "Send us the basics and we'll come walk the yard. You'll get a written, line-item estimate — no pressure and no obligation.",
    primaryCta: { label: "Request a free estimate", href: "#lead-form" },
    secondaryCta: {
      label: "Or read about our deck building services",
      href: "/services/deck-building-seattle",
    },
  },
};

deckBuilderLanding.seo.images = deckBuilderLanding.gallery.images;
