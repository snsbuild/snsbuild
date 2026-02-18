import type { PreviousWork } from "../types";

export const previousBathroom: PreviousWork = {
    id: "bathroom-remodel-seattle-center",
    title: "Bathroom Remodel - Seattle Center",
    body: "In a charming home near Seattle Center, we transformed a dated bathroom into a modern spa-like retreat. This project included custom tile work, a walk-in shower with frameless glass, heated floors, and streamlined storage — all designed to maximize comfort and light in a compact urban home.",
    imgSrc: "/images/previous/bathroom-remodel-seattle-center.jpg",
    link: "/previous-work/bathroom-remodel-seattle-center",
    // filtering
    tags: ["bathroom", "remodel", "seattle-center", "lower-queen-anne", "seattle"],
    blurb:
        "Seattle Center bathroom remodel with custom tile, heated floors, and a walk-in shower—built for comfort and daily luxury.",
    meta: {
        title: "Seattle Center Bathroom Remodel | Seattle General Contractor",
        description:
            "Bathroom remodel near Seattle Center featuring heated floors, custom tile, and a frameless walk-in shower. Quality craftsmanship by a Seattle general contractor.",
        canonical: "/previous-work/bathroom-remodel-seattle-center",
        ogTitle: "Seattle Center Bathroom Remodel",
        ogImage: "/images/previous/bathroom-remodel-seattle-center.jpg",
    },
    hero: {
        eyebrow: "Previous Work • Bathroom Remodel",
        headline: "Seattle Center Bathroom Remodel",
        subheadline:
            "A dated bathroom reimagined into a bright, spa-like retreat with premium finishes and smart design.",
        imageAlt:
            "Modern bathroom remodel in Seattle Center with walk-in shower and custom tile",
        bullets: [
            "Custom tile shower with frameless glass",
            "Heated tile flooring for year-round comfort",
            "Improved layout and built-in storage",
            "Upgraded plumbing and lighting fixtures",
        ],
        ctaPrimary: { label: "Request an Estimate", href: "/contact" },
        ctaSecondary: { label: "View More Projects", href: "/previous-work" },
    },

    testimonials: [
        {
            name: "Sarah M.",
            neighborhood: "Lower Queen Anne",
            projectType: "Bathroom Remodel",
            rating: 5,
            quote:
                "The bathroom feels like a high-end spa. The heated floors and tile work are absolutely beautiful.",
        },
        {
            name: "David R.",
            neighborhood: "Seattle Center",
            projectType: "Bathroom Remodel",
            rating: 5,
            quote:
                "Professional, clean, and incredibly detailed. We couldn't be happier with the result.",
        },
    ],

    // JSON-LD schema (Project + embedded reviews)
    schema: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "Seattle Center Bathroom Remodel",
        description:
            "Bathroom remodel near Seattle Center featuring heated floors, custom tile, and a frameless walk-in shower.",
        url: "/previous-work/bathroom-remodel-seattle-center",
        image: ["/images/previous/bathroom-remodel-seattle-center.jpg"],
        about: ["Bathroom Remodel", "Seattle Remodeling", "General Contracting"],
        areaServed: {
            "@type": "City",
            name: "Seattle",
            address: { "@type": "PostalAddress", addressRegion: "WA" },
        },
        review: [
            {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Sarah M." },
                reviewBody:
                    "The bathroom feels like a high-end spa. The heated floors and tile work are absolutely beautiful.",
            },
            {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "David R." },
                reviewBody:
                    "Professional, clean, and incredibly detailed. We couldn't be happier with the result.",
            },
        ],
    },
}