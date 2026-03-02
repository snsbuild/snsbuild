// src/data/portfolio.ts
import type { PortfolioPageInput } from "../../utils/seo";

export type ServicePerformedItem = {
  name: string;
  description: string;
  icon: string;
};

export type PortfolioMarkup = {
  id: string,
  title: string;
  link: string;
  name: string;
  neighborhood: string;
  projectType: string;
  hero: {
    kicker: string; // e.g. "Bathroom Remodeling • Ballard, Seattle, WA"
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };

  overview: {
    locationLabel: string;   // "Ballard, Seattle, WA"
    timelineLabel: string;   // "~3 weeks"
    completedLabel?: string; // "Nov 2025"
    scopeLabel?: string;     // "Full remodel (shower, tile, ventilation, fixtures)"
    noteHtml?: string;       // optional small inline note with links
  };

  highlights: string[];

  story: {
    homeownerWanted: string;
    plan: string;
    buildSteps: string[]; // short bullets
    results: string[];    // short bullets
  };

  servicesPerformed: {
    intro?: string;
    items: ServicePerformedItem[];
  };

  gallery: {
    intro?: string;
    images: Array<{ src: string; alt: string; caption?: string; width?: number; height?: number }>;
  };

  testimonial: {
    rating: number; // 1-5
    quote: string;
    author: string;
  };

  faqs: Array<{ question: string; answer: string }>;

  cta: {
    heading: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };

  related: Array<{
    title: string;
    description: string;
    href: string;
  }>;
};

export type PortfolioEntry = PortfolioPageInput & {
  id: string;
};

export const portfolio: PortfolioEntry[] = [
  {
    id: "ballard-bathroom-remodel",
    pageType: "portfolio",
    path: "/portfolio/ballard-bathroom-remodel",
    title: "Ballard Bathroom Remodel | Saddle and Spur Construction",
    description:
      "A Ballard, Seattle bathroom remodel featuring a curbless shower, updated plumbing, improved ventilation, and custom tile finishes.",
    keywords: [
      "bathroom remodeling seattle",
      "ballard bathroom remodel",
      "seattle bathroom contractor",
      "curbless shower seattle",
      "tile shower remodel seattle",
    ],
    datePublished: "2025-11-10",
    ogType: "article",
    ogImage: { src: "/images/services/bathroom/bellevue-bath-2.jpg", alt: "Finished Ballard bathroom remodel" },
    images: [
      { src: "/images/services/bathroom/bellevue-bath-2.jpg", alt: "After photo", width: 1200, height: 630 },
      { src: "/images/portfolio/ballard/shower.jpg", alt: "Curbless tile shower with mosaic floor" },
      { src: "/images/portfolio/ballard/vanity.jpg", alt: "Vanity and upgraded lighting" },
    ],

    project: {
      name: "Ballard Bathroom Remodel",
      serviceName: "Bathroom Remodeling",
      servicePath: "/services/bathroom-remodeling-seattle",
      location: { neighborhood: "Ballard", city: "Seattle" },
      completionDate: "2025-11",
      duration: "3 weeks",
      servicesPerformed: [
        {
          name: "Demolition & haul away",
          description:
            "Careful removal of existing fixtures, tile, and finishes with debris hauled away and the space prepared for construction.",
          icon: "fa-solid fa-sledgehammer",
        },
        {
          name: "Plumbing rough-in",
          description:
            "Updated valves, shower supply lines, and drain connections to support the new layout and fixtures.",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          name: "Electrical & lighting",
          description:
            "Installed new vanity lighting, updated wiring, and added GFCI-protected outlets for safety and convenience.",
          icon: "fa-solid fa-bolt",
        },
        {
          name: "Waterproofing",
          description:
            "Complete shower waterproofing system installed prior to tile work to ensure long-term moisture protection.",
          icon: "fa-solid fa-droplet",
        },
        {
          name: "Tile installation",
          description:
            "Installed large-format wall tile with a mosaic shower floor for durability, drainage, and a clean modern finish.",
          icon: "fa-solid fa-border-all",
        },
        {
          name: "Ventilation upgrade",
          description:
            "Installed a new exhaust fan to improve airflow, reduce humidity, and help prevent future moisture issues.",
          icon: "fa-solid fa-wind",
        },
        {
          name: "Vanity & fixture installation",
          description:
            "Installed new vanity, sink, faucet, toilet, and bathroom accessories with precise alignment and secure connections.",
          icon: "fa-solid fa-screwdriver-wrench",
        },
        {
          name: "Paint & finish carpentry",
          description:
            "Completed final painting, trim installation, and detail work to deliver a clean, polished finished space.",
          icon: "fa-solid fa-paint-roller",
        },
      ],
      materials: ["Waterproofing membrane", "Large-format porcelain tile", "Mosaic floor tile"],
      problem:
        "The existing bath had water damage behind the shower and poor ventilation leading to recurring mold.",
      solution:
        "We rebuilt the shower with a modern waterproofing system, improved ventilation, and updated plumbing/fixtures.",
      results: [
        "Moisture control improved with upgraded vent fan",
        "Curbless shower for easier access",
        "Modern finishes and brighter lighting",
      ],
      reviews: [
        { authorName: "Seattle Homeowner", rating: 5, quote: "Super organized, clean work, and the tile looks amazing." },
      ],
    },

    faqs: [
      {
        question: "Did you need permits for this bathroom remodel in Seattle?",
        answer:
          "For this project, we reviewed scope and pulled permits as required for plumbing/electrical changes. Requirements vary by scope and location.",
      },
      { question: "How long did this remodel take?", answer: "This bathroom remodel took about 3 weeks." },
      {
        question: "What waterproofing did you use behind the tile?",
        answer:
          "We used a modern shower waterproofing system with a full waterproof layer before tile installation to reduce risk of leaks.",
      },
    ],
  },
];


export const markup: PortfolioMarkup[] = [
  {
    id: "ballard-bathroom-remodel",
    title: "Bathroom Remodeling",
    link: "portfolio/ballard-bathroom-remodel",
    name: "",
    neighborhood: "",
    projectType: "Bathroom Remodeling",
    hero: {
      kicker: "Bathroom Remodeling • Ballard, Seattle, WA",
      primaryCta: { label: "Get a Bathroom Remodel Quote", href: "/contact" },
      secondaryCta: { label: "Bathroom Remodeling Seattle", href: "/services/bathroom-remodeling-seattle" },
    },
    overview: {
      locationLabel: "Ballard, Seattle, WA",
      timelineLabel: "~3 weeks",
      completedLabel: "Nov 2025",
      scopeLabel: "Full remodel (shower, tile, ventilation, fixtures)",
      noteHtml:
        'Looking for <strong>bathroom remodeling in Seattle</strong>? See our <a href="/services/bathroom-remodeling-seattle">Bathroom Remodeling Seattle</a> service page.',
    },
    highlights: [
      "Curbless shower for easier access",
      "Modern waterproofing system behind tile",
      "Vent fan upgrade for moisture control",
      "Updated plumbing, lighting, and fixtures",
    ],
    story: {
      homeownerWanted:
        "The existing bath had water damage behind the shower and poor ventilation leading to recurring mold. The goal was a cleaner, brighter space with a reliable shower system and better moisture control.",
      plan: "We rebuilt the shower with a modern waterproofing system, improved ventilation, and updated plumbing and fixtures—then finished with durable tile and brighter lighting.",
      buildSteps: [
        "Demolition & haul away",
        "Plumbing rough-in (valve, shower line, drain as needed)",
        "Electrical & lighting (vanity light, GFCI)",
        "Waterproofing (full shower system before tile)",
        "Tile installation (large-format walls, mosaic floor)",
        "Ventilation upgrade (new vent fan)",
        "Vanity & fixture installation",
        "Paint & finish carpentry",
      ],
      results: [
        "Moisture control improved with upgraded vent fan",
        "Curbless shower for easier access",
        "Modern finishes and brighter lighting",
      ],
    },
    servicesPerformed: {
      intro:
        'This remodel showcases the kind of work we do on our <a href="/services/bathroom-remodeling-seattle" class="underline">bathroom remodeling in Seattle</a> projects:',
      items: [
        {
          name: "Demolition & haul away",
          description:
            "Careful removal of existing fixtures, tile, and finishes with debris hauled away and the space prepared for construction.",
          icon: "fa-solid fa-hammer",
        },
        {
          name: "Plumbing rough-in",
          description:
            "Updated valves, shower supply lines, and drain connections to support the new layout and fixtures.",
          icon: "fa-solid fa-faucet-drip",
        },
        {
          name: "Electrical & lighting",
          description:
            "Installed new vanity lighting, updated wiring, and added GFCI-protected outlets for safety and convenience.",
          icon: "fa-solid fa-bolt",
        },
        {
          name: "Waterproofing",
          description:
            "Complete shower waterproofing system installed prior to tile work to ensure long-term moisture protection.",
          icon: "fa-solid fa-droplet",
        },
        {
          name: "Tile installation",
          description:
            "Installed large-format wall tile with a mosaic shower floor for durability, drainage, and a clean modern finish.",
          icon: "fa-solid fa-border-all",
        },
        {
          name: "Ventilation upgrade",
          description:
            "Installed a new exhaust fan to improve airflow, reduce humidity, and help prevent future moisture issues.",
          icon: "fa-solid fa-wind",
        },
        {
          name: "Vanity & fixture installation",
          description:
            "Installed new vanity, sink, faucet, toilet, and bathroom accessories with precise alignment and secure connections.",
          icon: "fa-solid fa-screwdriver-wrench",
        },
        {
          name: "Paint & finish carpentry",
          description:
            "Completed final painting, trim installation, and detail work to deliver a clean, polished finished space.",
          icon: "fa-solid fa-paint-roller",
        },
      ],
    },
    gallery: {
      intro: "A few photos from the finished bathroom. Add before and in-progress images if you have them.",
      images: [
        { src: "/images/services/bathroom/bellevue-bath-2.jpg", alt: "After photo of the completed bathroom remodel", caption: "After: finished space", width: 1200, height: 630 },
        { src: "/images/portfolio/ballard/shower.jpg", alt: "Curbless tile shower with mosaic floor", caption: "Curbless shower + tile finish" },
        { src: "/images/portfolio/ballard/vanity.jpg", alt: "Vanity and upgraded lighting", caption: "Vanity + lighting upgrade" },
      ],
    },
    testimonial: {
      rating: 5,
      quote: "The entire bathroom remodel was smooth from start to finish. The team kept everything clean, communicated clearly, and the tile work turned out beautifully — it completely transformed the space.",
      author: "Seattle Homeowner",
    },
    faqs: [
      {
        question: "Did you need permits for this bathroom remodel in Seattle?",
        answer:
          "For this project, we reviewed scope and pulled permits as required for plumbing/electrical changes. Requirements vary by scope and location.",
      },
      { question: "How long did this remodel take?", answer: "This bathroom remodel took about 3 weeks." },
      {
        question: "What waterproofing did you use behind the tile?",
        answer:
          "We used a modern shower waterproofing system with a full waterproof layer before tile installation to reduce risk of leaks.",
      },
    ],
    cta: {
      heading: "Ready to remodel your bathroom in Seattle?",
      body: "Tell us your scope and timeline. We’ll follow up with next steps and an estimate plan. Serving Seattle + King County.",
      primaryCta: { label: "Request an estimate", href: "/contact" },
      secondaryCta: { label: "Bathroom Remodeling Seattle", href: "/services/bathroom-remodeling-seattle" },
    },
    related: [
      { title: "Queen Anne Bathroom Refresh", description: "Tile + fixtures update with improved ventilation.", href: "/portfolio/queen-anne-bathroom-refresh" },
      { title: "Capitol Hill Shower Remodel", description: "New waterproofing, tile, and plumbing updates.", href: "/portfolio/capitol-hill-shower-remodel" },
    ],
  }
]