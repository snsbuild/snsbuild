import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";

export const kitchenRemodel: ServiceEntity = {
  id: "kitchen-remodeling-seattle",
  type: "service",
  path: "/services/kitchen-remodeling-seattle",
  homePageFeatured: true,
  category: ServiceCategory.Interior,
  name: "Kitchen Remodeling",
  description:
    "Full-scope kitchen remodels for Seattle homes — layout, cabinetry, surfaces, and finishes handled by one accountable team. We manage every trade so you get a cohesive result without the coordination headache.",

  service: {
    serviceType: "Kitchen Remodel",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Layout & space planning",
        description:
          "Workflow analysis, traffic flow, and cabinet placement before demo begins.",
      },
      {
        name: "Cabinetry & storage",
        description:
          "Custom and semi-custom cabinet installation with interior organization solutions.",
      },
      {
        name: "Countertops & backsplash tile",
        description:
          "Quartz, quartzite, butcher block, and porcelain tile templated and installed.",
      },
      {
        name: "Appliance & lighting installation",
        description:
          "Appliance cutout prep, installation, under-cabinet lighting, and recessed layout.",
      },
      {
        name: "Plumbing fixtures",
        description:
          "Sink, faucet, and disposal installation coordinated with countertop scope.",
      },
      {
        name: "Flooring",
        description:
          "Hardwood, LVP, and tile flooring installed to match the full kitchen finish package.",
      },
    ],
  },

  seo: {
    title: "Kitchen Remodeling in Seattle | Saddle and Spur Construction",
    description:
      "Design-forward kitchen remodels built for Seattle homes. Transparent timelines, clear pricing, and high-quality finishes.",
    keywords: [
      "kitchen remodeling seattle",
      "kitchen renovation seattle",
      "general contractor seattle",
    ],
    ogImage: {
      src: "/images/services/kitchen/ogImage.jpg",
      alt: "Remodeled open-plan kitchen with large island and white cabinetry in Seattle",
    },
    images: [],
    datePublished: "2026-01-10",
  },

  breadcrumb: "Interior • Seattle",

  header: "Kitchen remodeling, managed end-to-end",
  subheader: "Design, permitting, build — one accountable team.",
  galleryImages: [
    {
      src: "/images/services/kitchen/gallery-1.jpg",
      alt: "Warm open-plan kitchen with dark stained wood cabinets, white quartz island, and globe pendant lights",
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
      src: "/images/services/kitchen/gallery-4.jpg",
      alt: "Light-filled kitchen with sage green island, white perimeter cabinets, marble tile backsplash, and French doors",
    },
    {
      src: "/images/services/kitchen/gallery-5.jpg",
      alt: "White shaker kitchen with professional dual-fuel range, stainless hood, subway tile backsplash, and dark granite island",
    },
  ],
  featuredTestimonial: {} as Testimonial,
  faqs: [
    {
      question: "How long does a kitchen remodel take?",
      answer:
        "Most kitchen remodels take 6-10 weeks from demo to punch list. Custom cabinetry and special-order tile can add lead time, so we build that into the schedule upfront.",
    },
    {
      question: "What does a kitchen remodel typically cost in Seattle?",
      answer:
        "Mid-range kitchen remodels in Seattle typically run $60K-$120K depending on size, cabinet selection, and appliance budget. We provide detailed line-item estimates so you know exactly where your budget is going.",
    },
    {
      question: "Do kitchen remodels require permits?",
      answer:
        "If you're moving walls, adding circuits, or relocating plumbing, yes — permits are required. We handle all permitting and inspections as part of our scope.",
    },
    {
      question: "Can I stay in my home during the remodel?",
      answer:
        "Most clients stay in the home during a kitchen remodel. We keep the mess contained and maintain a usable path to other rooms. We'll set expectations clearly at the start.",
    },
    {
      question: "How do we handle cabinet and finish selections?",
      answer:
        "We walk you through selections early in the process — before demo starts — so lead times don't hold up the build. We work with your choices or can recommend suppliers we trust.",
    },
  ],
  subServices: {
    eyebrow: "What we do",
    heading: "Kitchen remodeling services",
    byline: "Scope it right, then build it right.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "See portfolio", href: "/portfolio" },
    services: [
      {
        title: "Layout & planning",
        description:
          "We map the full workflow — traffic flow, storage zones, and appliance placement — before a single wall comes down. A well-planned layout is what separates a kitchen that looks good from one that actually works.",
        icon: "fa-solid fa-pencil-ruler",
      },
      {
        title: "Cabinetry & storage",
        description:
          "Custom and semi-custom cabinets installed with tight reveals, level runs, and purpose-built interior organization. We design for the way you actually use your kitchen so the counters stay clear.",
        icon: "fa-solid fa-box-open",
      },
      {
        title: "Countertops & backsplash",
        description:
          "Quartz, quartzite, butcher block, and porcelain tile — we help you choose surfaces that hold up and look sharp together. Backsplash is templated after counters are set so the grout lines always land right.",
        icon: "fa-solid fa-border-all",
      },
      {
        title: "Appliances & lighting",
        description:
          "Appliance specification, cutout prep, and installation are coordinated with your cabinet and counter scope from day one. Under-cabinet lighting, recessed layout, and pendant placement are planned early so the finished kitchen feels intentional — not tacked on.",
        icon: "fa-solid fa-lightbulb",
      },
      {
        title: "Plumbing fixtures",
        description:
          "Sink, faucet, and disposal selection and installation handled as part of the countertop scope — not as a last-minute add-on. We coordinate with your countertop template so cutouts and supply lines are right the first time.",
        icon: "fa-solid fa-faucet",
      },
      {
        title: "Flooring",
        description:
          "Hardwood, LVP, and tile flooring installed to carry the design intent of the full kitchen package. We handle transitions, thresholds, and subfloor prep so the finish floor lays flat and wears well.",
        icon: "fa-solid fa-layer-group",
      },
    ],
  },
  relatedPortfolio: {} as PortfolioEntity,
};

export const ballardKitchen: PortfolioEntity = {
  id: "ballard-kitchen-refresh",
  type: "portfolio",
  path: "/portfolio/ballard-kitchen-refresh",
  name: "Ballard Kitchen Refresh",
  description:
    "A full kitchen overhaul in Ballard — new layout, white shaker cabinetry with brass hardware, white quartz countertops, a large island, and a custom butler's pantry. The result is an open, light-filled space that connects directly to the living area.",
  breadcrumb: "Portfolio • Interior • Kitchen Remodel",
  seo: {
    title: "Ballard Kitchen Remodel | Saddle and Spur Construction",
    description:
      "Full kitchen remodel in Ballard, Seattle — new layout, white shaker cabinets, white quartz island, herringbone tile backsplash, and custom butler's pantry. Completed in 6 weeks.",
    keywords: [
      "ballard kitchen remodel",
      "seattle kitchen contractor",
      "seattle kitchen remodel",
      "open plan kitchen seattle",
    ],
    ogImage: {
      src: "/images/portfolio/kitchen/ogImage.jpg",
      alt: "Remodeled open-plan Ballard kitchen with large white quartz island, gold bar stools, and vaulted ceiling",
    },
    images: [],
    datePublished: "2025-11-10",
  },

  project: {
    serviceName: "Kitchen Remodeling",
    location: { neighborhood: "Ballard", city: "Seattle" },
    completionDate: "2025-11-10",
    duration: "6 weeks",
    materials: [
      "white quartz",
      "White shaker cabinetry",
      "Herringbone subway tile",
      "LVP flooring",
      "Brass hardware",
    ],
    problem:
      "The original kitchen was closed off from the living area, had minimal counter space, poor lighting, and no dedicated pantry storage. The homeowners wanted a space that could handle real cooking while still feeling open and connected to the rest of the home.",
    solution:
      "We opened the wall between the kitchen and living room, built a 10-foot white quartz island with seating for five, and added a full butler's pantry with glass-front cabinets and open shelving. A herringbone tile backsplash behind the range anchors the cooking zone, and three brass pendant lights define the island without closing off the ceiling.",
    results: [
      "10-foot island with seating for five",
      "Fully open connection to living and dining",
      "Dedicated butler's pantry with coffee station",
      "Herringbone tile feature wall behind range",
      "Under-cabinet lighting throughout",
      "Doubled usable counter space",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/kitchen/ogImage.jpg",
      alt: "Remodeled open-plan Ballard kitchen with large white quartz island, gold bar stools, and vaulted ceiling",
    },
    eyebrow: "Services • Interior • Kitchen Remodel",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: {
      label: "Kitchen remodeling",
      href: "/services/kitchen-remodeling-seattle",
    },
  },

  overview: {
    locationLabel: "Ballard, Seattle",
    timelineLabel: "6 weeks",
    completedLabel: "November 2025",
    scopeLabel: "Full kitchen remodel",
    noteHtml:
      "Opened wall to living room, added 10-ft island, butler's pantry, herringbone tile backsplash, and full appliance package with brass fixtures throughout.",
  },

  highlights: [
    "Wall removed to open kitchen to living area",
    "10-foot white quartz island with seating for five",
    "White shaker cabinetry with brass pulls throughout",
    "Herringbone subway tile backsplash behind range",
    "Custom butler's pantry with glass-front cabinets",
    "Under-cabinet lighting on all perimeter runs",
    "Three brass pendant lights over island",
    "Full appliance package with panel-ready refrigerator",
    "Farmhouse sink with brass bridge faucet",
    "LVP flooring carried through to dining area",
  ],

  story: {
    homeownerWanted:
      "The homeowners wanted a kitchen that could handle entertaining — a big island for gathering, clear sight lines to the living room, and enough storage that the counters stayed clear. The existing closed-off layout made the house feel much smaller than it was.",
    plan: "We started by removing the wall separating the kitchen from the living area, which required a structural beam and new drywall on both sides. From there, we designed the cabinet layout around a large central island and added a dedicated butler's pantry in an underused alcove off the main kitchen. Selections — cabinetry, tile, countertop, and hardware — were locked in before demo so the build could run without delays.",
    buildSteps: [
      "Structural wall removal and beam installation",
      "Rough electrical and plumbing relocation",
      "Subfloor prep and LVP flooring installation",
      "White shaker cabinet installation — perimeter and island",
      "Butler's pantry framing and cabinet installation",
      "white quartz countertop template and installation",
      "Herringbone subway tile backsplash installation",
      "Under-cabinet lighting and recessed light layout",
      "Appliance installation and trim-out",
      "Farmhouse sink, faucet, and hardware installation",
      "Paint, punch list, and final walkthrough",
    ],
    results: [
      "10-foot island with seating for five and full quartz waterfall edge",
      "Open sight lines from kitchen to living and dining",
      "Dedicated butler's pantry handling all pantry and coffee storage",
      "Herringbone tile feature wall anchoring the cooking zone",
      "Under-cabinet lighting on all perimeter cabinet runs",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Layout & structural work",
        description:
          "Removed load-bearing wall between kitchen and living room, installed flush beam, and redesigned the full cabinet layout around the new open floor plan.",
        icon: "fa-solid fa-drafting-compass",
      },
      {
        name: "Cabinetry & butler's pantry",
        description:
          "White shaker cabinets with brass hardware throughout the kitchen and a custom butler's pantry with glass-front uppers, open shelving, and dedicated coffee station.",
        icon: "fa-solid fa-box-open",
      },
      {
        name: "Countertops & backsplash",
        description:
          "white quartz countertops with waterfall island edge, and herringbone subway tile backsplash installed across the full cooking zone.",
        icon: "fa-solid fa-border-all",
      },
      {
        name: "Appliances & lighting",
        description:
          "Full appliance package including panel-ready refrigerator, double wall oven, and range. Brass pendant lighting over the island and under-cabinet LED strips on all perimeter runs.",
        icon: "fa-solid fa-lightbulb",
      },
      {
        name: "Plumbing fixtures",
        description:
          "Farmhouse apron-front sink with brass bridge faucet installed in coordination with countertop templating.",
        icon: "fa-solid fa-faucet",
      },
      {
        name: "Flooring",
        description:
          "LVP flooring installed through the kitchen and carried into the dining area for a seamless transition across the newly opened space.",
        icon: "fa-solid fa-layer-group",
      },
    ],
  },

  gallery: {
    intro: "Photos from the completed Ballard kitchen remodel.",
    images: [
      {
        src: "/images/portfolio/kitchen/gallery-1.jpg",
        alt: "View from dining area of large white quartz island with brass pendant lights and open-plan living behind",
      },
      {
        src: "/images/portfolio/kitchen/gallery-2.jpg",
        alt: "Cooking zone with white shaker cabinets, farmhouse sink, brass faucet, subway tile backsplash, and double wall oven",
      },
      {
        src: "/images/portfolio/kitchen/gallery-3.jpg",
        alt: "White panel-ready French door refrigerator with bronze handles flanked by tall shaker cabinetry with brass pulls",
      },
      {
        src: "/images/portfolio/kitchen/gallery-4.jpg",
        alt: "Wide angle of open-plan kitchen and living area showing full island, vaulted ceiling, and sectional sofa beyond",
      },
      {
        src: "/images/portfolio/kitchen/gallery-5.jpg",
        alt: "Custom butler's pantry with glass-front upper cabinets, open floating shelves, and white quartz countertop",
      },
      {
        src: "/images/portfolio/kitchen/gallery-6.jpg",
        alt: "Island with white quartz waterfall edge, five upholstered bar stools with brass legs, and full kitchen view",
      },
      {
        src: "/images/portfolio/kitchen/gallery-7.jpg",
        alt: "Range zone with herringbone subway tile backsplash, under-cabinet lighting, stainless hood, and white double oven",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/kitchen/testimonial.jpg",
      alt: "Completed Ballard kitchen range zone with herringbone tile backsplash and under-cabinet lighting",
    },
    neighborhood: "Ballard",
    quote:
      "We'd been putting off the kitchen remodel for years because it felt like too much to coordinate. Marco walked us through the full layout plan before any work started, explained every trade in sequence, and kept us updated throughout the build. It came in on budget and looks exactly like we hoped.",
    author: "Jamie R.",
    rating: 5,
  },

  cta: {
    heading: "Ready to plan your remodel?",
    body: "Tell us about your goals and we'll propose a clear scope and timeline.",
    primaryCta: { label: "Request an estimate", href: "/contact" },
    secondaryCta: { label: "View services", href: "/services" },
  },

  related: [kitchenRemodel],
};

kitchenRemodel.relatedPortfolio = ballardKitchen;
kitchenRemodel.featuredTestimonial = ballardKitchen.testimonial;

ballardKitchen.seo.images = ballardKitchen.gallery.images;
kitchenRemodel.seo.images = kitchenRemodel.galleryImages;
