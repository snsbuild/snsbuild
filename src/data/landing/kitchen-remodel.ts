import type { LandingPage } from "../../types/entity-types";
import { phoneDisplay } from "../../siteConfig";
import { ballardKitchen } from "../interior/kitchen-remodel";

export const kitchenRemodelLanding: LandingPage = {
  kind: "landing",
  slug: "kitchen-remodel-seattle",
  path: "/kitchen-remodel-seattle",

  // Set to "noindex, follow" to keep this page exclusive to paid traffic.
  robots: "index, follow",

  seo: {
    title:
      "Free Kitchen Remodel Estimate in Seattle | Kitchen Remodel Quotes | Saddle and Spur",
    description: `Licensed Seattle kitchen remodeler. Layout, cabinets, counters, tile, lighting, and flooring under one team. Free on-site estimate, permits handled, line-item pricing. Call ${phoneDisplay}.`,
    // Deliberately estimate/quote intent — the service page owns the
    // "kitchen remodeling seattle" head term.
    keywords: [
      "free kitchen remodel estimate seattle",
      "kitchen remodel quote seattle",
      "kitchen remodel cost seattle",
      "how much does a kitchen remodel cost seattle",
      "kitchen remodeler near me",
      "kitchen renovation estimate king county",
    ],
    ogImage: {
      src: "/images/services/kitchen/ogImage.jpg",
      alt: "Remodeled open-plan kitchen with large island and white cabinetry in Seattle",
    },
    images: [],
  },

  service: {
    name: "Kitchen Remodeling",
    serviceType: "Kitchen Remodel",
    areaServed: ["Greater Seattle / King County"],
    servicePath: "/services/kitchen-remodeling-seattle",
  },

  hero: {
    eyebrow: "Seattle & King County kitchen remodeler",
    headline: "A kitchen remodel that runs right through the rainy season",
    subhead:
      "Interior work doesn't wait on the weather. We handle layout, cabinetry, counters, tile, lighting, plumbing, and flooring as one team, with a written line-item estimate before anything comes out of the wall.",
    bullets: [
      "Free on-site estimate — we measure and look at what's behind the walls first",
      "Line-item pricing, so you can see what each finish choice costs",
      "Selections locked in before demo, so lead times don't stall the build",
      "Permits and inspections handled when walls, circuits, or plumbing move",
      "Stay in your home — we keep the work zone contained",
    ],
    image: {
      src: "/images/services/kitchen/gallery-1.jpg",
      alt: "Warm open-plan kitchen with dark stained wood cabinets, white quartz island, and globe pendant lights",
    },
    formHeading: "Get your free kitchen estimate",
    formByline:
      "Tell us a bit about the kitchen and we'll get back to you to schedule a walkthrough — usually within one business day.",
    formName: "kitchen-lead",
    submitLabel: "Request my free estimate",
    projectTypes: [
      "Full kitchen remodel — new layout",
      "Full kitchen remodel — keep the layout",
      "Cabinets and countertops",
      "Countertops and backsplash only",
      "Open up a wall to the living area",
      "Kitchen + flooring through the main floor",
      "Not sure yet — need guidance",
    ],
  },

  trustBadges: [
    "WA licensed & insured",
    "Permits handled in-house",
    "Written line-item estimates",
  ],

  stats: [
    { label: "Typical build, demo to punch list", value: "6–10 wks" },
    { label: "Mid-range Seattle kitchen", value: "$60–120K" },
    { label: "Point of contact, start to finish", value: "1" },
    { label: "Cost for the estimate", value: "$0" },
  ],

  valueProps: [
    {
      title: "Layout before looks",
      description:
        "We map traffic flow, storage zones, and appliance placement before a single wall comes down. A good plan is what separates a kitchen that photographs well from one that actually works on a Tuesday night.",
      icon: "fa-solid fa-pencil-ruler",
    },
    {
      title: "Selections first, demo second",
      description:
        "Cabinets, counters, tile, and appliances are chosen and ordered before we start tearing out. Custom cabinetry and special-order tile have real lead times, and we build them into the schedule instead of discovering them mid-project.",
      icon: "fa-solid fa-list-check",
    },
    {
      title: "Every trade on one schedule",
      description:
        "Framing, electrical, plumbing, cabinets, counters, tile, and flooring are sequenced by one team. You don't referee subcontractors or figure out who's responsible when the countertop template doesn't match the sink.",
      icon: "fa-solid fa-people-group",
    },
    {
      title: "Permits are our problem, not yours",
      description:
        "Moving a wall, adding circuits, or relocating plumbing usually means a permit. We pull it, schedule the inspections, and fold the timing into the plan so an inspection never becomes a surprise delay.",
      icon: "fa-solid fa-file-signature",
    },
    {
      title: "You can still live at home",
      description:
        "Most clients stay put during a kitchen remodel. We contain the dust, keep a clean path through the house, and help you set up a temporary kitchen so the weeks of construction are an inconvenience, not an ordeal.",
      icon: "fa-solid fa-house-user",
    },
    {
      title: "A number that holds",
      description:
        "Our estimates are detailed and line-item, not vague ranges. Once the scope and finishes are agreed, we hold to it. Change orders happen when you ask for something new — not when we find something we should have priced.",
      icon: "fa-solid fa-magnifying-glass-dollar",
    },
  ],

  gallery: {
    eyebrow: "Recent work",
    heading: "Kitchens we've built around Seattle",
    byline:
      "New layouts, custom cabinetry, quartz and butcher block surfaces, handmade tile, and lighting planned from the start.",
    images: [
      {
        src: "/images/portfolio/kitchen/gallery-1.jpg",
        alt: "View from dining area of large white quartz island with brass pendant lights and open-plan living behind",
      },
      {
        src: "/images/services/kitchen/gallery-2.jpg",
        alt: "Farmhouse kitchen with sage gray shaker cabinets, butcher block island, and exposed wood ceiling beams",
      },
      {
        src: "/images/services/kitchen/gallery-3.jpg",
        alt: "Modern kitchen with charcoal upper cabinets, walnut island base, white quartz countertop, and handmade ceramic tile backsplash",
      },
      {
        src: "/images/portfolio/kitchen/gallery-5.jpg",
        alt: "Custom butler's pantry with glass-front upper cabinets, open floating shelves, and white quartz countertop",
      },
      {
        src: "/images/services/kitchen/gallery-4.jpg",
        alt: "Light-filled kitchen with sage green island, white perimeter cabinets, marble tile backsplash, and French doors",
      },
      {
        src: "/images/portfolio/kitchen/gallery-7.jpg",
        alt: "Range zone with herringbone subway tile backsplash, under-cabinet lighting, stainless hood, and white double oven",
      },
    ],
    cta: {
      label: "See the Ballard kitchen project",
      href: "/portfolio/ballard-kitchen-refresh",
    },
  },

  testimonial: ballardKitchen.testimonial,

  faqs: [
    {
      question: "Is the estimate really free?",
      answer:
        "Yes. We come out, measure, look at the existing plumbing, electrical, and walls, talk through layout and finishes, and send you a written line-item estimate at no charge and with no obligation.",
    },
    {
      question: "What does a kitchen remodel cost in Seattle?",
      answer:
        "Mid-range kitchen remodels here typically run $60K–$120K depending on size, whether the layout changes, cabinet grade, and appliance budget. A countertop-and-backsplash refresh is far less. The line-item estimate shows exactly where the money goes so you can adjust before committing.",
    },
    {
      question: "How long will we be without a kitchen?",
      answer:
        "Most remodels run 6–10 weeks from demo to punch list. Because selections are made and ordered before demo, that clock doesn't start until the materials are ready — so the time without a working kitchen is as short as we can make it.",
    },
    {
      question: "Is winter a good time to remodel a kitchen?",
      answer:
        "It's one of the better times. Interior work isn't weather-dependent, and planning through the fall means selections, permits, and cabinet orders can be in motion while the rain does its thing outside. Reach out early so design and lead times aren't the thing holding up your start date.",
    },
    {
      question: "Do kitchen remodels require permits?",
      answer:
        "If you're moving walls, adding circuits, or relocating plumbing, yes. A like-for-like cabinet and counter swap often doesn't. We confirm what your project needs, pull the permits, and manage inspections as part of our scope.",
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
      "The service page covers each part of a kitchen remodel in depth, and the portfolio shows finished work with timelines.",
    links: [
      {
        label: "Kitchen remodeling services",
        href: "/services/kitchen-remodeling-seattle",
        description:
          "Layout, cabinetry, surfaces, lighting, plumbing, and flooring — how we scope each one.",
      },
      {
        label: "Ballard kitchen refresh",
        href: "/portfolio/ballard-kitchen-refresh",
        description:
          "A new layout, white shaker cabinetry, a large island, and a custom butler's pantry.",
      },
      {
        label: "Whole-home remodeling",
        href: "/services/whole-home-remodeling-seattle",
        description:
          "Kitchen, baths, and flooring together under one schedule.",
      },
      {
        label: "Flooring installation",
        href: "/services/flooring-installation-seattle",
        description:
          "Carry new hardwood, LVP, or tile through the rest of the main floor.",
      },
    ],
  },

  closing: {
    heading: "Let's talk about your kitchen",
    body: "Send us the basics and we'll come take a look. You'll get a written, line-item estimate — no pressure and no obligation.",
    primaryCta: { label: "Request a free estimate", href: "#lead-form" },
    secondaryCta: {
      label: "Or read about our kitchen remodeling services",
      href: "/services/kitchen-remodeling-seattle",
    },
  },
};

kitchenRemodelLanding.seo.images = kitchenRemodelLanding.gallery.images;
