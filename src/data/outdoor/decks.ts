import {
  type ServiceEntity,
  ServiceCategory,
} from "../../types/entity-types";
import { eastlakeDeck } from "./outdoor-living";

export const deckBuilding: ServiceEntity = {
  id: "deck-building-seattle",
  type: "service",
  path: "/services/deck-building-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Outdoor,
  name: "Deck Building",
  description:
    "Custom deck design and construction across Seattle and King County — composite, cedar, and multi-level decks built on engineered footings, permitted, and detailed to survive Pacific Northwest rain.",
  breadcrumb: "Deck Building • Seattle",

  service: {
    serviceType: "Deck Building",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Composite deck construction",
        description:
          "Trex, TimberTech, and similar capped composite decking installed over a properly engineered frame.",
      },
      {
        name: "Cedar and hardwood decks",
        description:
          "Western red cedar and tropical hardwood decking for a natural look.",
      },
      {
        name: "Multi-level and elevated decks",
        description:
          "Stepped and raised decks for sloped Seattle lots, with stairs and code-compliant guardrails.",
      },
      {
        name: "Deck replacement and repair",
        description:
          "Tear-out and rebuild of failing decks, plus reframing, joist repair, and resurfacing.",
      },
      {
        name: "Railings",
        description:
          "Steel cable, metal picket, glass panel, and wood railing systems.",
      },
      {
        name: "Covered decks",
        description:
          "Roofed decks and deck-mounted pergolas for year-round use in the rain.",
      },
    ],
  },

  seo: {
    title: "Deck Builders in Seattle | Custom Deck Construction | Saddle and Spur",
    description:
      "Licensed Seattle deck builders. Composite, cedar, multi-level, and covered decks designed for Pacific Northwest weather — permits, engineered footings, and clear estimates included.",
    keywords: [
      "deck builders seattle",
      "deck building seattle",
      "deck contractor seattle",
      "composite deck seattle",
      "cedar deck seattle",
      "deck replacement seattle",
      "multi level deck seattle",
      "covered deck seattle",
      "king county deck builder",
    ],
    ogImage: {
      src: "/images/services/decks/ogImage.jpg",
      alt: "Composite deck with black metal railing built by Saddle and Spur Construction in Seattle",
    },
    images: [],
    datePublished: "2026-08-26",
  },

  header: "Decks built for Seattle rain, not a catalog photo",
  subheader:
    "Composite, cedar, and multi-level decks — engineered underneath, detailed on top.",

  galleryImages: [
    {
      src: "/images/services/decks/gallery-1.jpg",
      alt: "Composite deck with black metal railing and outdoor dining set in Seattle",
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
      src: "/images/services/decks/gallery-4.jpg",
      alt: "Wide composite deck with lounge seating under Pacific Northwest evergreens",
    },
  ],

  featuredTestimonial: eastlakeDeck.testimonial,

  faqs: [
    {
      question: "Do I need a permit to build a deck in Seattle?",
      answer:
        "Usually, yes. Seattle generally requires a construction permit once a deck is more than 30 inches above grade, is attached to the house, or serves as a required exit. Low, freestanding ground-level platforms are often exempt. Rules change and every lot is different, so we confirm the current requirement with SDCI for your specific address and handle the permit as part of our scope.",
    },
    {
      question: "Composite or cedar — which is better for Seattle?",
      answer:
        "For most Seattle homeowners we recommend capped composite. It doesn't split, cup, or need annual sealing, which matters a lot in a climate with eight wet months. Cedar is beautiful and costs less up front, but it needs cleaning and re-sealing on a regular cycle to stay looking good here. We'll price both so you can compare the real numbers side by side.",
    },
    {
      question: "What determines the cost of a deck?",
      answer:
        "Size and decking material are the obvious ones, but the biggest swings usually come from height and site conditions: how far the footings have to go down, whether the lot is sloped, how many stairs and landings are required, and what railing system you choose. A covered roof structure, lighting, or a gas line for a fire feature also move the number. We break all of it out line by line in the estimate.",
    },
    {
      question: "Can you replace just the decking and keep the existing frame?",
      answer:
        "Sometimes. We pull a few boards and inspect the joists, ledger, and footings first. If the structure is sound and the joist spacing suits the new material, resurfacing is a great value. If the ledger flashing has been leaking or the framing is soft, replacing only the surface just hides the real problem — we'll show you what we find and let you decide.",
    },
    {
      question: "How long does deck construction take?",
      answer:
        "A single-level deck is typically 2–3 weeks of on-site work. Multi-level decks, covered structures, or decks with an outdoor kitchen generally run 4–6 weeks. Permit review adds lead time before we start, and we build that into the schedule up front rather than surprising you with it later.",
    },
    {
      question: "Can you build a deck in the winter in Seattle?",
      answer:
        "Yes. Framing and composite decking install fine in cool, wet weather — we work year-round. The parts that genuinely prefer dry weather are concrete work and any staining or sealing of natural wood, so we schedule those around the forecast. Winter builds also tend to have shorter permit and material lead times.",
    },
    {
      question: "How long should a deck last here?",
      answer:
        "The surface and the structure age differently. Capped composite decking commonly carries a 25–50 year manufacturer warranty. What actually decides a deck's lifespan in this climate is what's underneath: properly sized footings below frost depth, pressure-treated framing, stainless or hot-dip galvanized hardware, and correctly flashed ledger connections. That's where we spend the extra effort.",
    },
    {
      question: "Do you build covered decks and deck roofs?",
      answer:
        "Yes — that's one of the most requested things we do in Seattle, for obvious reasons. We build roofed decks, deck-mounted pergolas, and polycarbonate or solid-roof covers, and we design the pitch and drainage so water actually leaves the structure instead of pooling on it. Roofed structures typically require a permit.",
    },
  ],

  subServices: {
    eyebrow: "Deck services",
    heading: "What we build",
    byline: "Composite, cedar, covered, and rebuilt.",
    primaryCta: { label: "Get a deck estimate", href: "/deck-builder-seattle" },
    secondaryCta: { label: "See our deck portfolio", href: "/portfolio/decks-seattle" },
    services: [
      {
        title: "Composite decks",
        description:
          "Capped composite decking from Trex, TimberTech, and similar lines — no splitting, no annual sealing, and color that holds up through Seattle winters. We install over pressure-treated framing with hot-dip galvanized or stainless hardware, because the frame is what determines whether a deck lasts ten years or thirty.",
        icon: "fa-solid fa-border-all",
      },
      {
        title: "Cedar & hardwood decks",
        description:
          "Western red cedar and tropical hardwoods for homeowners who want real wood. We select and lay boards for grain and crown, pre-drill hardwood, and set a maintenance schedule with you so the finish is protected before the wet season instead of after it.",
        icon: "fa-solid fa-tree",
      },
      {
        title: "Multi-level & elevated decks",
        description:
          "Seattle lots slope, and a single flat rectangle rarely uses them well. We design stepped and elevated decks with code-compliant stairs, landings, and guardrails, and engineer the post and footing layout for the actual grade rather than forcing the yard to fit the deck.",
        icon: "fa-solid fa-stairs",
      },
      {
        title: "Deck replacement & repair",
        description:
          "Most of the failing decks we see went bad at the ledger, the footings, or the flashing — not the boards. We inspect the structure first, tell you honestly whether it can be resurfaced or needs to come out, and rebuild it correctly if it does.",
        icon: "fa-solid fa-screwdriver-wrench",
      },
      {
        title: "Railings",
        description:
          "Steel cable, powder-coated metal picket, glass panel, and traditional wood railings. On lots with a view, cable and glass are worth the premium — they meet code without putting a fence between you and the reason you built the deck in the first place.",
        icon: "fa-solid fa-grip-lines",
      },
      {
        title: "Covered decks & pergolas",
        description:
          "Roofed decks, deck-mounted pergolas, and translucent covers that turn a three-month deck into a year-round room. We design the roof pitch, gutters, and drainage first, then the finishes — a cover that dumps water on the stairs is worse than no cover.",
        icon: "fa-solid fa-umbrella",
      },
    ],
  },

  relatedPortfolio: eastlakeDeck,
};

deckBuilding.seo.images = deckBuilding.galleryImages;

// Cross-link: the Eastlake deck case study points back at deck building
// and the broader outdoor living service.
if (!eastlakeDeck.related.some((r) => r.id === deckBuilding.id)) {
  eastlakeDeck.related = [deckBuilding, ...eastlakeDeck.related];
}
