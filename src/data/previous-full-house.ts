import type { PreviousWork } from "../types";

export const previousFullHouse: PreviousWork = {
    id: "full-home-remodel-green-lake",
    title: "Full Home Remodel - Green Lake",
    body: "This Green Lake home underwent a complete interior renovation including structural layout updates, new flooring, system upgrades, and a full kitchen transformation.",
    imgSrc: "/images/previous/full-home-remodel-green-lake.jpg",
    link: "/previous-work/full-home-remodel-green-lake",

    tags: ["full-home", "remodel", "green-lake", "north-seattle", "seattle"],

    blurb:
      "Green Lake full home remodel with open-concept design, upgraded systems, and cohesive modern finishes.",

    meta: {
      title: "Green Lake Full Home Remodel | Seattle Contractor",
      description:
        "Complete Green Lake home renovation with new layout, updated systems, and modern finishes throughout.",
      canonical: "/previous-work/full-home-remodel-green-lake",
      ogTitle: "Green Lake Full Home Remodel",
      ogImage: "/images/previous/full-home-remodel-green-lake.jpg",
    },

    hero: {
      eyebrow: "Previous Work • Full Remodel",
      headline: "Green Lake Full Home Renovation",
      subheadline:
        "A full interior transformation bringing light, flow, and modern comfort to a classic Seattle home.",
      imageAlt: "Green Lake full home remodel with open concept living space",
      bullets: [
        "Open-concept living redesign",
        "New electrical, plumbing, HVAC",
        "Consistent modern finishes",
        "Increased natural light",
      ],
      ctaPrimary: { label: "Request an Estimate", href: "/contact" },
      ctaSecondary: { label: "Explore Full Remodels", href: "/previous-work" },
    },

    testimonials: [
      {
        name: "Lauren B.",
        neighborhood: "Green Lake",
        projectType: "Full Home Remodel",
        rating: 5,
        quote:
          "It feels like a brand-new house. The layout change was life-changing.",
      },
      {
        name: "Chris D.",
        neighborhood: "North Seattle",
        projectType: "Full Home Remodel",
        rating: 5,
        quote:
          "They managed everything smoothly from permits to final finishes.",
      },
    ],

    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Green Lake Full Home Remodel",
      description:
        "Full home remodel near Green Lake including layout updates, system upgrades, and cohesive modern finishes.",
      url: "/previous-work/full-home-remodel-green-lake",
      image: ["/images/previous/full-home-remodel-green-lake.jpg"],
      about: ["Full Home Remodel", "Seattle Remodeling", "General Contracting"],
      areaServed: {
        "@type": "City",
        name: "Seattle",
        address: { "@type": "PostalAddress", addressRegion: "WA" },
      },
      review: [
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Lauren B." },
          reviewBody:
            "It feels like a brand-new house. The layout change was life-changing.",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Chris D." },
          reviewBody:
            "They managed everything smoothly from permits to final finishes.",
        },
      ],
    },
  }