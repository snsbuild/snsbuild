import type { PreviousWork } from "../types";

export const previousExterior: PreviousWork = {
  id: "deck-construction-fremont",
  title: "Deck Construction / Replacement - Fremont",
  body: "We replaced an aging hillside deck in Fremont with a multi-level composite deck featuring built-in seating and integrated lighting.",
  imgSrc: "/images/previous/deck-construction-fremont.jpg",
  link: "/previous-work/deck-construction-fremont",

  tags: ["deck", "outdoor", "construction", "fremont", "wallingford", "seattle"],

  blurb:
    "Fremont deck rebuild with composite decking, built-in seating, and lighting built for Seattle weather.",

  meta: {
    title: "Fremont Deck Replacement | Seattle Deck Builder",
    description:
      "Multi-level composite deck replacement in Fremont with built-in seating and integrated lighting.",
    canonical: "/previous-work/deck-construction-fremont",
    ogTitle: "Fremont Deck Replacement",
    ogImage: "/images/previous/deck-construction-fremont.jpg",
  },

  hero: {
    eyebrow: "Previous Work • Deck Construction",
    headline: "Fremont Multi-Level Deck Build",
    subheadline:
      "Durable, low-maintenance outdoor living built to handle Seattle's seasons.",
    imageAlt: "Fremont composite deck with built-in seating and lighting",
    bullets: [
      "Weather-resistant composite decking",
      "Built-in bench seating",
      "Integrated LED stair lighting",
      "Reinforced structural framing",
    ],
    ctaPrimary: { label: "Request an Estimate", href: "/contact" },
    ctaSecondary: { label: "View Outdoor Projects", href: "/previous-work" },
  },

  testimonials: [
    {
      name: "Jason K.",
      neighborhood: "Fremont",
      projectType: "Deck Construction",
      rating: 5,
      quote:
        "The deck feels incredibly solid and looks amazing at night with the lighting.",
    },
    {
      name: "Amanda S.",
      neighborhood: "Wallingford",
      projectType: "Deck Construction",
      rating: 5,
      quote:
        "They recommended materials that will last for years with minimal maintenance.",
    },
    {
      name: "Megan L.",
      neighborhood: "Fremont",
      projectType: "Deck Construction",
      rating: 5,
      quote:
        "Rock-solid build quality and a clean finish. The team was respectful of our home and left the site spotless every day.",
    },
    {
      name: "Eric H.",
      neighborhood: "Phinney Ridge",
      projectType: "Deck Construction",
      rating: 5,
      quote:
        "Clear communication, thoughtful recommendations, and excellent craftsmanship. The new stairs and railings feel incredibly secure.",
    },
    {
      name: "Natalie C.",
      neighborhood: "Wallingford",
      projectType: "Deck Construction",
      rating: 5,
      quote:
        "They nailed the details—everything lines up perfectly, and the lighting makes the whole space feel inviting year-round.",
    },
  ],

  schema: {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Fremont Deck Construction / Replacement",
    description:
      "Multi-level composite deck replacement in Fremont with built-in seating and integrated lighting.",
    url: "/previous-work/deck-construction-fremont",
    image: ["/images/previous/deck-construction-fremont.jpg"],
    about: ["Deck Construction", "Outdoor Living", "Seattle Remodeling"],
    areaServed: {
      "@type": "City",
      name: "Seattle",
      address: { "@type": "PostalAddress", addressRegion: "WA" },
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Jason K." },
        reviewBody:
          "The deck feels incredibly solid and looks amazing at night with the lighting.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Amanda S." },
        reviewBody:
          "They recommended materials that will last for years with minimal maintenance.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Megan L." },
        reviewBody:
          "Rock-solid build quality and a clean finish. The team was respectful of our home and left the site spotless every day.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Eric H." },
        reviewBody:
          "Clear communication, thoughtful recommendations, and excellent craftsmanship. The new stairs and railings feel incredibly secure.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Natalie C." },
        reviewBody:
          "They nailed the details—everything lines up perfectly, and the lighting makes the whole space feel inviting year-round.",
      },
    ],
  },
}