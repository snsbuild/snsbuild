import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";
import { ballardKitchen } from "./kitchen-remodel";

// TODO(built-ins): the gallery photos are stand-ins borrowed from the kitchen
// folders until real built-in photos land in /images/services/built-ins/.
export const customBuiltIns: ServiceEntity = {
  id: "custom-built-ins-seattle",
  type: "service",
  path: "/services/custom-built-ins-seattle/",
  homePageFeatured: false,
  category: ServiceCategory.Interior,
  name: "Custom Built-Ins & Carpentry",
  description:
    "Built-in cabinetry, bookshelves, window seats, mudroom lockers, pantries, and trim work for Seattle homes — measured to your walls, built to fit, and installed by one accountable team.",
  breadcrumb: "Interior • Seattle",

  service: {
    serviceType: "Custom Built-Ins & Finish Carpentry",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Built-in cabinetry & bookshelves",
        description:
          "Floor-to-ceiling shelving, media walls, and cabinetry built to the room.",
      },
      {
        name: "Window seats & mudroom benches",
        description:
          "Seating with storage underneath, lockers, and drop zones by the door.",
      },
      {
        name: "Pantries & closets",
        description:
          "Walk-in pantries, reach-in closet systems, and under-stair storage.",
      },
      {
        name: "Trim & millwork",
        description:
          "Wainscoting, board and batten, coffered ceilings, and period-matched trim.",
      },
    ],
  },

  seo: {
    title:
      "Custom Built-Ins & Cabinetry Seattle | Saddle & Spur",
    description:
      "Custom built-in cabinets, bookshelves, window seats, mudroom benches, and finish carpentry in Seattle. Measured to your space, installed by one crew.",
    keywords: [
      "custom built-ins seattle",
      "built in cabinets seattle",
      "built in bookshelves seattle",
      "finish carpentry seattle",
      "custom cabinetry seattle",
      "mudroom built-ins seattle",
    ],
    ogImage: {
      src: "/images/portfolio/kitchen/gallery-5.jpg",
      alt: "Custom built-in cabinetry with glass-front uppers and open floating shelves",
    },
    images: [],
    datePublished: "2026-10-03",
  },

  header: "Built-ins made for your walls, not a catalog",
  subheader:
    "Measured, designed, and installed to fit the room — down to the last scribe.",
  galleryImages: [
    {
      src: "/images/portfolio/kitchen/gallery-5.jpg",
      alt: "Custom built-in with glass-front upper cabinets, open floating shelves, and quartz counter",
    },
    {
      src: "/images/portfolio/kitchen/gallery-3.jpg",
      alt: "Floor-to-ceiling shaker cabinetry with brass pulls built around a panel-ready refrigerator",
    },
    {
      src: "/images/services/kitchen/gallery-3.jpg",
      alt: "Charcoal upper cabinets and a walnut base built in along a full wall",
    },
    {
      src: "/images/services/kitchen/gallery-2.jpg",
      alt: "Sage gray shaker cabinetry with a butcher block work surface",
    },
  ],
  featuredTestimonial: ballardKitchen.testimonial,
  faqs: [
    {
      question: "What counts as a built-in?",
      answer:
        "Anything made to fit a specific spot in your home and attached to it — bookshelves flanking a fireplace, a window seat with drawers, mudroom lockers, a media wall, a pantry, or a closet system. Unlike furniture, it's scribed to your walls and floors so it looks like it was always there.",
    },
    {
      question: "Are custom built-ins worth it over ready-made furniture?",
      answer:
        "In older Seattle homes especially, walls are rarely square and alcoves are odd sizes. Ready-made pieces leave gaps and wasted space. A built-in uses every inch, can run floor to ceiling, and adds lasting value because it stays with the house.",
    },
    {
      question: "Can you match the trim and style of an older home?",
      answer:
        "Yes. We look at your existing casing, baseboard, and door styles and match profiles and finishes so new work blends in — whether that's a Craftsman bungalow or a mid-century rambler.",
    },
    {
      question: "Can built-ins be added during a larger remodel?",
      answer:
        "That's often the best time. Planning built-ins alongside a kitchen, basement, or whole-home remodel means outlets, lighting, and framing are placed for them from the start instead of worked around later.",
    },
    {
      question: "Do built-ins need a permit?",
      answer:
        "Usually not on their own. If the project adds circuits, moves a wall, or recesses into framing, it may — we'll tell you up front and handle it if it does.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Custom built-in & carpentry services",
    byline: "Storage and character that fit the house you have.",
    primaryCta: { label: "Get a built-ins estimate", href: "/custom-built-ins-seattle/" },
    secondaryCta: { label: "See portfolio", href: "/portfolio/" },
    services: [
      {
        title: "Built-in cabinetry & bookshelves",
        description:
          "Bookshelves flanking a fireplace, floor-to-ceiling library walls, media centers, and home office built-ins. We scribe to uneven walls and floors so the finished piece looks original to the house.",
        icon: "fa-solid fa-book-open",
      },
      {
        title: "Window seats & mudroom benches",
        description:
          "Window seats with drawers or lift-up storage, entry benches, cubbies, and lockers with hooks. A dedicated drop zone keeps coats, shoes, and backpacks off the floor during Seattle's wet months.",
        icon: "fa-solid fa-couch",
      },
      {
        title: "Pantries, closets & hidden storage",
        description:
          "Walk-in and reach-in pantries, closet systems, and under-stair or knee-wall storage that turns dead space into something useful.",
        icon: "fa-solid fa-door-closed",
      },
      {
        title: "Trim & millwork",
        description:
          "Wainscoting, board and batten, coffered and beamed ceilings, and replacement casing and baseboard matched to your home's original profiles.",
        icon: "fa-solid fa-ruler-combined",
      },
    ],
  },
  // TODO(built-ins): point at the real built-ins project once it's written up.
  relatedPortfolio: ballardKitchen,
};

customBuiltIns.seo.images = customBuiltIns.galleryImages;

// STAND-IN PROJECT, not registered in src/data/index.ts so it doesn't build.
// Illustrative copy and borrowed kitchen photos so the page layout can be
// reviewed. Replace every field with the real built-ins job
// before this ships — especially the testimonial, which is shown to visitors
// as a client quote.
export const seattleBuiltIns: PortfolioEntity = {
  id: "seattle-craftsman-built-ins",
  type: "portfolio",
  path: "/portfolio/seattle-craftsman-built-ins/",
  name: "Craftsman Built-Ins & Mudroom",
  description:
    "Fireplace bookshelves, a window seat with drawers, and a mudroom bench with lockers for a Seattle Craftsman — scribed to century-old walls and trimmed to match the original casing.",
  breadcrumb: "Portfolio • Interior • Custom Built-Ins",
  seo: {
    title: "Craftsman Built-Ins in Seattle | Saddle & Spur Construction",
    description:
      "Custom fireplace bookshelves, a storage window seat, and a mudroom bench with lockers in a Seattle Craftsman, matched to the home's original trim.",
    keywords: [
      "craftsman built-ins seattle",
      "built in bookshelves seattle",
      "mudroom bench seattle",
      "window seat built in seattle",
    ],
    ogImage: {
      src: "/images/portfolio/kitchen/gallery-5.jpg",
      alt: "Custom built-in with glass-front upper cabinets and open shelving",
    },
    images: [],
    datePublished: "2026-10-03",
  },

  project: {
    serviceName: "Custom Built-Ins & Carpentry",
    location: { neighborhood: "Seattle", city: "Seattle" },
    completionDate: "2026-09-15",
    duration: "4 weeks",
    materials: [
      "Paint-grade maple",
      "Solid fir face frames",
      "Soft-close drawer slides",
      "Unlacquered brass hardware",
      "Matched Craftsman casing",
    ],
    problem:
      "The living room had two empty alcoves beside the fireplace, the front window wasted a deep sill, and the entry had nowhere to put wet coats and shoes. The walls and floors were far from square, so off-the-shelf pieces left gaps everywhere.",
    solution:
      "We built floor-to-ceiling bookshelves into both fireplace alcoves, a window seat with two deep drawers under the front window, and a bench with four lockers and hooks at the entry. Everything was scribed to the walls and finished with casing that matches the original trim.",
    results: [
      "Two alcoves turned into floor-to-ceiling shelving",
      "Window seat with drawer storage underneath",
      "Entry drop zone with four lockers and a bench",
      "Trim matched to the original casing",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/kitchen/gallery-5.jpg",
      alt: "Custom built-in with glass-front upper cabinets and open shelving",
    },
    eyebrow: "Services • Interior • Custom Built-Ins",
    primaryCta: { label: "Start your project", href: "/contact/" },
    secondaryCta: {
      label: "Custom built-ins",
      href: "/services/custom-built-ins-seattle/",
    },
  },

  overview: {
    locationLabel: "Seattle",
    timelineLabel: "4 weeks",
    completedLabel: "September 2026",
    scopeLabel: "Built-ins & mudroom",
    noteHtml:
      "Fireplace bookshelves, a storage window seat, and an entry bench with lockers, all scribed to the walls and trimmed to match the original casing.",
  },

  highlights: [
    "Floor-to-ceiling bookshelves in both fireplace alcoves",
    "Adjustable shelves with a fixed center shelf for stiffness",
    "Window seat with two full-extension drawers",
    "Entry bench with four lockers, hooks, and a boot tray",
    "Scribed to out-of-square plaster walls and sloped floors",
    "Casing and crown matched to the original Craftsman trim",
    "Outlet and puck lighting built into the shelving",
    "Painted to match the existing trim color",
  ],

  story: {
    homeownerWanted:
      "The homeowners wanted storage that looked like it had always been part of the house — somewhere for books, a reading spot by the front window, and an entry that could handle a rainy-season's worth of coats and boots.",
    plan: "We measured every wall, noted where the plaster bowed and the floor sloped, and drew each piece to fit. Trim profiles were matched to the existing casing, and the shelving outlet and lighting were planned before anything was built so the wiring could go in cleanly.",
    buildSteps: [
      "Site measure and shop drawings",
      "Electrical rough-in for shelf lighting and outlet",
      "Cabinet boxes and face frames built",
      "Install and scribe to walls and floor",
      "Window seat drawers and entry lockers fitted",
      "Matching casing and crown installed",
      "Fill, sand, prime, and paint",
      "Hardware, lighting, and final walkthrough",
    ],
    results: [
      "Fireplace wall now reads as one original built-in",
      "Window seat doubles as storage for blankets and games",
      "Entry drop zone keeps wet gear out of the living room",
      "No visible gaps against walls or floor",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Fireplace bookshelves",
        description:
          "Floor-to-ceiling shelving in both alcoves with lower cabinets, adjustable shelves, and integrated lighting.",
        icon: "fa-solid fa-book-open",
      },
      {
        name: "Window seat",
        description:
          "Upholstery-ready seat with two full-extension drawers built into the front window bay.",
        icon: "fa-solid fa-couch",
      },
      {
        name: "Mudroom bench & lockers",
        description:
          "Bench with four lockers, coat hooks, and a boot tray at the front entry.",
        icon: "fa-solid fa-door-closed",
      },
      {
        name: "Trim & finish",
        description:
          "Casing and crown matched to the original Craftsman trim, then filled, primed, and painted on-site.",
        icon: "fa-solid fa-ruler-combined",
      },
    ],
  },

  gallery: {
    intro: "Photos from the completed built-ins project.",
    images: [
      {
        src: "/images/portfolio/kitchen/gallery-3.jpg",
        alt: "Floor-to-ceiling shaker cabinetry with brass pulls",
      },
      {
        src: "/images/portfolio/kitchen/gallery-2.jpg",
        alt: "White shaker cabinetry wall with built-in appliances",
      },
      {
        src: "/images/services/kitchen/gallery-3.jpg",
        alt: "Charcoal upper cabinets over a walnut base",
      },
      {
        src: "/images/services/kitchen/gallery-2.jpg",
        alt: "Sage gray shaker cabinetry",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/kitchen/gallery-5.jpg",
      alt: "Custom built-in with glass-front upper cabinets and open shelving",
    },
    neighborhood: "Seattle",
    quote:
      "[Placeholder — replace with the homeowner's real quote before publishing.]",
    author: "Homeowner name",
    rating: 0,
  },

  cta: {
    heading: "Have a wall that needs a built-in?",
    body: "Tell us about the space and we'll come measure it.",
    primaryCta: { label: "Request an estimate", href: "/contact/" },
    secondaryCta: { label: "View services", href: "/services/" },
  },

  related: [customBuiltIns],
};

seattleBuiltIns.seo.images = seattleBuiltIns.gallery.images;
