import type { Testimonial } from "../../types/content-types";
import {
  type ServiceEntity,
  type PortfolioEntity,
  ServiceCategory,
} from "../../types/entity-types";
import { outdoorLiving } from "./outdoor-living";

export const shedBuilding: ServiceEntity = {
  id: "shed-building-seattle",
  type: "service",
  path: "/services/shed-building-seattle",
  homePageFeatured: false,
  category: ServiceCategory.Outdoor,
  name: "Sheds & Backyard Structures",
  description:
    "Custom sheds, garden buildings, and backyard offices built on real foundations in Seattle and King County — sized, sited, and detailed to keep what's inside dry.",
  breadcrumb: "Sheds • Seattle",

  service: {
    serviceType: "Shed Construction",
    areaServed: ["Greater Seattle / King County"],
    subServices: [
      {
        name: "Custom storage sheds",
        description:
          "Site-built storage sheds sized to the yard and the setbacks, not to a kit.",
      },
      {
        name: "Garden sheds and potting sheds",
        description:
          "Windowed garden buildings with bench space, ventilation, and daylight.",
      },
      {
        name: "Backyard offices and studios",
        description:
          "Insulated, wired, finished detached rooms for working, making, or practicing.",
      },
      {
        name: "Workshops and bike storage",
        description:
          "Secure, powered outbuildings with wide doors and a real work surface.",
      },
      {
        name: "Shed foundations and pads",
        description:
          "Gravel pads, concrete piers, and slabs sized for the structure and the soil.",
      },
      {
        name: "Shed repair, re-roof, and re-side",
        description:
          "Rot repair, new roofing, siding, and doors for existing outbuildings worth saving.",
      },
    ],
  },

  seo: {
    title: "Shed Builders in Seattle | Custom Sheds & Backyard Offices | Saddle and Spur",
    description:
      "Licensed Seattle shed builders. Custom storage sheds, garden sheds, workshops, and insulated backyard offices — built on proper foundations and sited to meet Seattle setback rules.",
    keywords: [
      "shed builders seattle",
      "custom sheds seattle",
      "shed building seattle",
      "backyard office seattle",
      "garden shed seattle",
      "storage shed builder seattle",
      "backyard studio seattle",
      "shed contractor king county",
    ],
    ogImage: {
      src: "/images/services/sheds/ogImage.jpg",
      alt: "Cedar-shingled backyard shed with a gable roof in a Seattle yard",
    },
    images: [],
    datePublished: "2026-08-26",
  },

  header: "Sheds that outlast the kit from the big-box lot",
  subheader:
    "Site-built, properly founded, and detailed for eight months of rain a year.",

  galleryImages: [
    {
      src: "/images/services/sheds/gallery-1.jpg",
      alt: "Cedar-shingled backyard shed with a gable roof behind a Seattle deck",
    },
    {
      src: "/images/services/sheds/gallery-2.jpg",
      alt: "Detached backyard structure with cedar siding and large windows",
    },
    {
      src: "/images/services/sheds/gallery-3.jpg",
      alt: "Backyard shed and deck in a Pacific Northwest yard",
    },
    {
      src: "/images/services/sheds/gallery-4.jpg",
      alt: "Cedar shingle siding and roof detail on a backyard shed",
    },
  ],

  featuredTestimonial: {} as Testimonial,

  faqs: [
    {
      question: "Do I need a permit to build a shed in Seattle?",
      answer:
        "Often not for the structure itself. Seattle generally exempts small detached accessory buildings from a construction permit when they're under roughly 200 square feet, low enough to meet the height limit, and have no plumbing. Exempt does not mean unregulated, though — the shed still has to satisfy zoning: setbacks from property lines, rear-yard coverage, and total lot coverage. Power to the shed needs its own electrical permit. We confirm the current rules with SDCI for your address before we design anything.",
    },
    {
      question: "What's the difference between a shed and a DADU?",
      answer:
        "A shed is an accessory structure for storage or hobby use. A DADU — a detached accessory dwelling unit, sometimes called a backyard cottage — is a legal residence with a kitchen, a bathroom, and its own permit path, and it can be rented. If you want a place to sleep, cook, or rent out, you want a DADU, not a shed. We build both, and we'll tell you plainly which one your goal actually requires.",
    },
    {
      question: "Can a backyard office have heat, power, and internet?",
      answer:
        "Yes, and most of the ones we build do. We insulate the floor, walls, and roof, run a permitted electrical circuit from the house, add a mini-split or wall heater, and pull data or set up a mesh point. That's the difference between a room you use in January and a room you use in July. Adding plumbing changes the permit path significantly — worth discussing early.",
    },
    {
      question: "What kind of foundation does a shed need?",
      answer:
        "It depends on the size, the soil, and what's going inside. A compacted gravel pad with pressure-treated skids is plenty for a light garden shed. Concrete piers work well on sloped or soft lots. A slab makes sense for a workshop with heavy equipment. What never works here is setting a building directly on dirt or a few patio pavers — that's the single most common reason the sheds we're asked to replace rotted out.",
    },
    {
      question: "How long does a custom shed take to build?",
      answer:
        "A straightforward storage or garden shed is typically 1–2 weeks on site once the pad is ready. An insulated, wired, and finished backyard office generally runs 3–5 weeks. If the design needs a permit or an electrical permit, add review time before the start date — we schedule around it rather than around it surprising you.",
    },
    {
      question: "Why not just buy a prefab shed kit?",
      answer:
        "For pure low-cost storage, a kit can be the right call and we'll say so. The trade-offs show up over time: thin sheathing, stapled roofing, no real foundation, and no flashing where the roof meets the walls. In this climate that combination usually means visible rot in well under a decade. A site-built shed costs more up front, gets a proper foundation and roof detail, and can actually match your house.",
    },
    {
      question: "What materials hold up best for a Seattle shed?",
      answer:
        "The roof matters more than anything else — a real roofing assembly with proper underlayment, drip edge, and enough overhang to keep water off the walls. From there: pressure-treated framing anywhere near grade, cedar or fiber-cement siding, and galvanized or stainless fasteners. Ventilation is the quiet one people skip, and it's what keeps a closed-up shed from growing mold on everything stored inside.",
    },
    {
      question: "Can you match the shed to my house?",
      answer:
        "Yes, and we recommend it. Matching the roof pitch, siding profile, trim details, and paint color makes the shed read as part of the property instead of an object parked in the yard. It's a small design decision that has an outsized effect on how the finished yard looks — and on resale.",
    },
  ],

  subServices: {
    eyebrow: "Shed services",
    heading: "What we build",
    byline: "Storage, garden, workshop, and office.",
    primaryCta: { label: "Get a shed estimate", href: "/shed-builder-seattle" },
    secondaryCta: { label: "See our shed portfolio", href: "/portfolio/sheds-seattle" },
    services: [
      {
        title: "Custom storage sheds",
        description:
          "Site-built sheds sized to your yard and your setbacks rather than to whatever a kit happens to come in. Real framing, a proper roof assembly with overhangs, and a door wide enough for the mower and the wheelbarrow to actually get through it.",
        icon: "fa-solid fa-warehouse",
      },
      {
        title: "Garden & potting sheds",
        description:
          "Windowed garden buildings with daylight, bench space, hooks and shelving where you need them, and cross-ventilation so tools and bulbs don't sit in damp air all winter. Dutch doors and glazed gable ends are popular here for good reason.",
        icon: "fa-solid fa-seedling",
      },
      {
        title: "Backyard offices & studios",
        description:
          "Insulated, wired, drywalled, and heated detached rooms for working from home, recording, or making things. We run permitted power from the house and size a mini-split so the room is comfortable in February, not just in August.",
        icon: "fa-solid fa-laptop-house",
      },
      {
        title: "Workshops & bike storage",
        description:
          "Secure outbuildings with wide or double doors, a real work surface, dedicated circuits and outlets where the tools are, and solid hardware. We plan the door swing and the approach path so getting equipment in and out isn't a wrestling match.",
        icon: "fa-solid fa-hammer",
      },
      {
        title: "Foundations & site prep",
        description:
          "Gravel pads, concrete piers, and slabs sized for the structure, the soil, and the slope. This is the part that decides whether a shed is standing straight and dry in twenty years, and it's the part almost every failed shed we replace got wrong.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        title: "Shed repair & re-roof",
        description:
          "Not every outbuilding needs replacing. We repair rot at the base, re-frame sagging roofs, install new roofing and flashing, re-side, and re-hang doors that haven't closed properly in years — and we'll tell you honestly when a rebuild is the better spend.",
        icon: "fa-solid fa-screwdriver-wrench",
      },
    ],
  },

  relatedPortfolio: {} as PortfolioEntity,
};

export const magnoliaShedStudio: PortfolioEntity = {
  id: "magnolia-shed-studio",
  type: "portfolio",
  path: "/portfolio/magnolia-shed-studio",
  name: "Magnolia Backyard Shed Studio",
  description:
    "A 190-square-foot insulated backyard studio in Magnolia with cedar siding, a full-height window wall, and permitted power — a working office that stays under Seattle's shed exemption.",
  breadcrumb: "Portfolio • Sheds • Backyard Studio",

  seo: {
    title: "Magnolia Backyard Shed Studio | Saddle and Spur Construction",
    description:
      "A 190 sq ft insulated backyard shed studio in Magnolia, Seattle — cedar siding, pier foundation, mini-split heat, and permitted power, built under the 200 sq ft exemption.",
    keywords: [
      "magnolia backyard office",
      "seattle shed studio",
      "backyard office seattle",
      "custom shed seattle",
      "insulated shed seattle",
    ],
    ogImage: {
      src: "/images/portfolio/sheds/ogImage.jpg",
      alt: "Magnolia backyard shed studio with cedar siding",
    },
    images: [],
    datePublished: "2026-05-30",
  },

  project: {
    serviceName: "Sheds & Backyard Structures",
    location: { neighborhood: "Magnolia", city: "Seattle" },
    completionDate: "2026-05-30",
    duration: "4 weeks",
    materials: [
      "Cedar bevel siding",
      "Concrete pier foundation",
      "Standing seam metal roof",
      "Mineral wool insulation",
      "Ductless mini-split",
      "Fir plywood interior",
    ],
    problem:
      "Two people working from home in a three-bedroom house, sharing a dining table as a desk, with a leaning prefab shed rotting into the back fence.",
    solution:
      "Removed the failing prefab shed and built a 190-square-foot insulated studio on concrete piers — under the 200 sq ft threshold so no construction permit was required — with permitted power, a mini-split, and a window wall facing the garden.",
    results: [
      "A quiet, heated office fifty feet from the back door",
      "Stayed under Seattle's 200 sq ft shed exemption",
      "Storage wall retained for yard tools and bikes",
    ],
  },

  hero: {
    image: {
      src: "/images/portfolio/sheds/gallery-2.jpg",
      alt: "Magnolia backyard shed studio with cedar siding and large windows",
    },
    eyebrow: "Sheds • Backyard Studio",
    primaryCta: { label: "Start your project", href: "/estimate" },
    secondaryCta: {
      label: "Shed building",
      href: "/services/shed-building-seattle",
    },
  },

  overview: {
    locationLabel: "Magnolia, Seattle",
    timelineLabel: "4 weeks",
    completedLabel: "May 2026",
    scopeLabel: "190 sq ft insulated studio",
    noteHtml:
      "Cedar siding, pier foundation, standing seam roof, mini-split heat, and permitted power.",
  },

  highlights: [
    "190 sq ft — under Seattle's shed exemption",
    "Concrete pier foundation on a sloped lot",
    "Insulated floor, walls, and roof",
    "Ductless mini-split for year-round use",
    "Permitted electrical from the main panel",
    "Cedar siding matched to the house trim",
    "Built-in storage wall for yard tools",
    "Completed in 4 weeks",
  ],

  story: {
    homeownerWanted:
      "A real place to work that wasn't the dining room — quiet, warm in winter, and without giving up the yard storage the old shed was supposed to provide.",
    plan: "Demo the rotting prefab shed, set concrete piers to clear the slope, frame a 190 sq ft structure to stay under the permit threshold, insulate it properly, run permitted power, and give one wall back to storage.",
    buildSteps: [
      "Prefab shed demolition and haul-off",
      "Layout, setback verification, and pier excavation",
      "Concrete piers and pressure-treated floor frame",
      "Framing, sheathing, and standing seam metal roof",
      "Cedar siding, trim, and window wall installation",
      "Permitted electrical rough-in and mini-split",
      "Insulation, interior fir plywood, and storage wall",
    ],
    results: [
      "Two work-from-home setups without losing a bedroom",
      "Comfortable through a full Seattle winter",
      "No construction permit required for the structure",
    ],
  },

  servicesPerformed: {
    intro: "Scope highlights:",
    items: [
      {
        name: "Pier foundation",
        description:
          "Concrete piers sized for the soil and set to level a sloped back corner.",
        icon: "fa-solid fa-trowel-bricks",
      },
      {
        name: "Insulated shell",
        description:
          "Mineral wool in the floor, walls, and roof with a vented roof assembly.",
        icon: "fa-solid fa-layer-group",
      },
      {
        name: "Permitted electrical",
        description:
          "Dedicated circuit from the main panel, outlets, lighting, and data.",
        icon: "fa-solid fa-bolt",
      },
      {
        name: "Cedar siding & metal roof",
        description:
          "Bevel cedar siding and a standing seam roof matched to the main house.",
        icon: "fa-solid fa-house-chimney",
      },
    ],
  },

  gallery: {
    intro: "",
    images: [
      {
        src: "/images/portfolio/sheds/gallery-2.jpg",
        alt: "Backyard studio exterior with cedar siding and window wall",
      },
      {
        src: "/images/portfolio/sheds/gallery-1.jpg",
        alt: "Cedar-shingled shed in the Magnolia back yard",
      },
      {
        src: "/images/portfolio/sheds/gallery-3.jpg",
        alt: "Shed roofline and siding detail",
      },
      {
        src: "/images/portfolio/sheds/gallery-4.jpg",
        alt: "Cedar structure with privacy screen in the rear yard",
      },
    ],
  },

  testimonial: {
    image: {
      src: "/images/portfolio/sheds/gallery-1.jpg",
      alt: "Magnolia backyard shed studio",
    },
    neighborhood: "Magnolia",
    quote:
      "We'd priced out a prefab kit and a full DADU and neither one was right — one was junk and the other was a mortgage. Marco walked the yard, measured the setbacks, and showed us we could get a real insulated office at 190 square feet without a construction permit. Four weeks later I have a heated room with a window wall and my dining table back. It's the best money we've spent on this house.",
    author: "Dana R.",
    rating: 5,
  },

  cta: {
    heading: "Want a backyard shed or office?",
    body: "Tell us what you need to store — or escape to — and we'll design something that fits your lot and your setbacks.",
    primaryCta: { label: "Request an estimate", href: "/estimate" },
    secondaryCta: { label: "Shed building services", href: "/services/shed-building-seattle" },
  },

  related: [shedBuilding, outdoorLiving],
};

shedBuilding.relatedPortfolio = magnoliaShedStudio;
shedBuilding.featuredTestimonial = magnoliaShedStudio.testimonial;

magnoliaShedStudio.seo.images = magnoliaShedStudio.gallery.images;
shedBuilding.seo.images = shedBuilding.galleryImages;
