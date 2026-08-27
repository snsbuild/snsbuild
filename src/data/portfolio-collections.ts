import type {
  PortfolioCollectionPage,
  PortfolioEntity,
  PortfolioIndexCard,
} from "../types/entity-types";
import { outdoorLiving, eastlakeDeck } from "./outdoor/outdoor-living";
import { deckBuilding } from "./outdoor/decks";
import { shedBuilding, magnoliaShedStudio } from "./outdoor/sheds";

const toCard = (p: PortfolioEntity): PortfolioIndexCard => ({
  eyebrow: p.breadcrumb,
  title: p.name,
  href: p.path,
  description: p.description,
  image: p.seo.ogImage,
});

export const deckPortfolio: PortfolioCollectionPage = {
  kind: "collection",
  type: "portfolio",
  slug: "decks-seattle",
  path: "/portfolio/decks-seattle",
  name: "Deck Portfolio",
  eyebrow: "Portfolio",
  breadcrumb: "Portfolio • Decks",

  seo: {
    title: "Seattle Deck Portfolio | Recent Deck Projects | Saddle and Spur",
    description:
      "Browse recent deck projects across Seattle and King County — composite and cedar decks, multi-level builds, covered decks, and cable railing installations.",
    keywords: [
      "seattle deck portfolio",
      "deck projects seattle",
      "composite deck photos seattle",
      "covered deck seattle",
      "deck builder gallery seattle",
    ],
    ogImage: {
      src: "/images/portfolio/decks/ogImage.jpg",
      alt: "Covered deck with a cedar pergola and built-in outdoor kitchen in Seattle",
    },
    images: [],
  },

  content: {
    headline: "Decks we've built around Seattle",
    byline:
      "Composite and cedar, single-level and stacked, open and covered — real projects with the details that made them work.",
    primaryCta: { label: "Get a deck estimate", href: "/deck-builder-seattle" },
  },

  intro: [
    "Every deck on this page was built for a specific Seattle lot: a slope that needed stepping, a view that shouldn't be blocked by a railing, a back door that was three feet above grade. The photos show the finished surface, but what actually determines whether a deck is still solid in twenty years is underneath it — footing depth, ledger flashing, joist protection, and hardware that doesn't corrode.",
    "If something here looks close to what you have in mind, the case studies go into what the homeowner wanted, what we found once we opened things up, and how long it took.",
  ],

  stats: [
    { label: "Typical single-level build", value: "2–3 wks" },
    { label: "Covered / multi-level build", value: "4–6 wks" },
    { label: "Composite warranty range", value: "25–50 yr" },
    { label: "Permits handled in-house", value: "Always" },
  ],

  projects: [eastlakeDeck],

  gallery: {
    heading: "Deck details",
    byline:
      "Composite surfaces, cedar structures, cable railing, covered roofs, and outdoor kitchens.",
    images: [
      {
        src: "/images/portfolio/decks/gallery-1.jpg",
        alt: "Wide composite deck with lounge seating under Pacific Northwest evergreens",
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
        src: "/images/portfolio/decks/gallery-4.jpg",
        alt: "Cedar pergola over a paver patio with stone columns",
      },
      {
        src: "/images/portfolio/decks/gallery-5.jpg",
        alt: "Built-in stone outdoor kitchen with a stainless grill beside a deck",
      },
      {
        src: "/images/portfolio/decks/gallery-6.jpg",
        alt: "Composite deck with dining table and black metal railing",
      },
    ],
  },

  relatedServices: [deckBuilding, outdoorLiving, shedBuilding],

  faqs: [
    {
      question: "Can I visit one of these decks before I commit?",
      answer:
        "In many cases, yes. Several of our past clients are happy to have prospective homeowners walk their deck, and we can usually arrange that in the neighborhood closest to you. If a visit isn't possible we'll bring detailed photos of the framing stage, which tells you far more about build quality than a finished surface does.",
    },
    {
      question: "How much does a deck like these cost?",
      answer:
        "The finished surface is rarely the biggest cost driver — height above grade, footing depth, stair count, and railing choice usually matter more. Rather than quote a number that won't match your lot, we walk the site and break the estimate out line by line so you can see exactly which decisions move the price.",
    },
    {
      question: "Do you only build decks, or the whole outdoor space?",
      answer:
        "Both. Plenty of these projects included a pergola, a patio, a fire feature, or an outdoor kitchen designed at the same time as the deck rather than added later. Planning them together is what keeps the gas line, drainage, and framing from fighting each other.",
    },
  ],

  closing: {
    heading: "Ready to talk about your deck?",
    body: "Send us the shape of your yard and what you want to do out there. We'll walk the site, confirm the permit path, and put together a line-item estimate.",
    primaryCta: { label: "Request an estimate", href: "/estimate" },
    secondaryCta: {
      label: "Deck building services",
      href: "/services/deck-building-seattle",
    },
  },

  cards: [],
};

export const shedPortfolio: PortfolioCollectionPage = {
  kind: "collection",
  type: "portfolio",
  slug: "sheds-seattle",
  path: "/portfolio/sheds-seattle",
  name: "Shed Portfolio",
  eyebrow: "Portfolio",
  breadcrumb: "Portfolio • Sheds",

  seo: {
    title: "Seattle Shed Portfolio | Custom Sheds & Backyard Offices | Saddle and Spur",
    description:
      "Recent shed and backyard structure projects in Seattle and King County — storage sheds, garden buildings, workshops, and insulated backyard offices built on real foundations.",
    keywords: [
      "seattle shed portfolio",
      "custom shed photos seattle",
      "backyard office seattle",
      "shed builder gallery seattle",
      "backyard studio seattle",
    ],
    ogImage: {
      src: "/images/portfolio/sheds/gallery-2.jpg",
      alt: "Insulated backyard studio with cedar siding and a window wall in Seattle",
    },
    images: [],
  },

  content: {
    headline: "Sheds and backyard structures we've built",
    byline:
      "Storage, garden buildings, workshops, and insulated offices — sited to the setbacks and built on foundations that hold.",
    primaryCta: { label: "Get a shed estimate", href: "/shed-builder-seattle" },
  },

  intro: [
    "A shed is a small building, and small buildings fail for the same reasons big ones do: no real foundation, a roof with no overhang, and no flashing where the roof meets the wall. Most of the sheds we're called out to replace were fine for six or seven years and then went bad quickly. The ones on this page were built to a different standard.",
    "Sizing matters as much as construction here. Seattle generally exempts detached accessory structures under about 200 square feet from a construction permit, so we design right up against that line where it makes sense — and tell you plainly when what you actually want is a DADU instead.",
  ],

  stats: [
    { label: "Storage / garden shed build", value: "1–2 wks" },
    { label: "Insulated office build", value: "3–5 wks" },
    { label: "Typical permit exemption", value: "<200 sq ft" },
    { label: "Setbacks verified first", value: "Every job" },
  ],

  projects: [magnoliaShedStudio],

  gallery: {
    heading: "Shed details",
    byline:
      "Cedar siding, real roof assemblies, pier foundations, and finished interiors.",
    images: [
      {
        src: "/images/portfolio/sheds/gallery-1.jpg",
        alt: "Cedar-shingled backyard shed with a gable roof",
      },
      {
        src: "/images/portfolio/sheds/gallery-3.jpg",
        alt: "Cedar shingle siding and roof detail on a backyard shed",
      },
      {
        src: "/images/portfolio/sheds/gallery-4.jpg",
        alt: "Cedar backyard structure with a privacy screen and covered seating",
      },
    ],
  },

  relatedServices: [shedBuilding, deckBuilding, outdoorLiving],

  faqs: [
    {
      question: "Will my shed need a permit?",
      answer:
        "Often not for the structure. Seattle generally exempts small detached accessory buildings under roughly 200 square feet with no plumbing from a construction permit — but zoning still applies, meaning setbacks, rear-yard coverage, and lot coverage. Running power out to it needs its own electrical permit. We confirm the current rules with SDCI for your address before we draw anything.",
    },
    {
      question: "Can a shed work as a home office year-round?",
      answer:
        "Yes, if it's built for it. That means an insulated floor, walls, and roof, a vented roof assembly, permitted power, and a heat source — usually a ductless mini-split. An uninsulated shed with an extension cord run to it is a summer room, and everyone who tries that ends up back inside by November.",
    },
    {
      question: "Should I build a shed or a DADU?",
      answer:
        "If you want to sleep, cook, or rent it out, you need a DADU — a detached accessory dwelling unit with its own permit path, kitchen, and bathroom. If you want storage, a workshop, or a place to work that isn't a legal residence, a shed is dramatically simpler and cheaper. We build both and we'll tell you which one your actual goal requires.",
    },
  ],

  closing: {
    heading: "Thinking about a shed or backyard office?",
    body: "Tell us what's going inside and roughly where you'd put it. We'll check your setbacks, recommend a foundation, and price it out.",
    primaryCta: { label: "Request an estimate", href: "/estimate" },
    secondaryCta: {
      label: "Shed building services",
      href: "/services/shed-building-seattle",
    },
  },

  cards: [],
};

deckPortfolio.cards = deckPortfolio.projects.map(toCard);
deckPortfolio.seo.images = deckPortfolio.gallery.images;

shedPortfolio.cards = shedPortfolio.projects.map(toCard);
shedPortfolio.seo.images = shedPortfolio.gallery.images;

export const portfolioCollections: PortfolioCollectionPage[] = [
  deckPortfolio,
  shedPortfolio,
];
