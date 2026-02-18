import type { PreviousWork } from "../types"

export const previousKitchen: PreviousWork = {
    id: "kitchen-remodel-ballard",
    title: "Kitchen Remodel - Ballard",
    body: "In Ballard's West Woodland neighborhood, we opened up the kitchen layout and installed custom cabinetry, a large quartz island, and upgraded lighting. The result blends modern function with the home's original character.",
    imgSrc: "/images/previous/kitchen-remodel-ballard.jpg",
    link: "/previous-work/kitchen-remodel-ballard",
    tags: ["kitchen", "remodel", "ballard", "west-woodland", "seattle"],
    blurb:
        "Ballard kitchen remodel with quartz island, custom cabinets, and an open layout built for entertaining.",
    meta: {
        title: "Ballard Kitchen Remodel | Seattle General Contractor",
        description:
            "Ballard kitchen remodel featuring custom cabinetry, quartz countertops, upgraded lighting, and open-concept design.",
        canonical: "/previous-work/kitchen-remodel-ballard",
        ogTitle: "Ballard Kitchen Remodel",
        ogImage: "/images/previous/kitchen-remodel-ballard.jpg",
    },
    hero: {
        eyebrow: "Previous Work • Kitchen Remodel",
        headline: "Ballard Kitchen Remodel",
        subheadline:
            "An open-concept kitchen designed for gathering, cooking, and everyday living.",
        imageAlt: "Ballard kitchen remodel with quartz island and custom cabinets",
        bullets: [
            "Large quartz waterfall island",
            "Custom soft-close cabinetry",
            "Upgraded LED lighting plan",
            "Improved traffic flow and layout",
        ],
        ctaPrimary: { label: "Request an Estimate", href: "/contact" },
        ctaSecondary: { label: "See Kitchen Projects", href: "/previous-work" },
    },

    testimonials: [
        {
            name: "Emily T.",
            neighborhood: "Ballard",
            projectType: "Kitchen Remodel",
            rating: 5,
            quote:
                "The island has become the center of our home. The craftsmanship is top-tier.",
        },
        {
            name: "Michael P.",
            neighborhood: "West Woodland",
            projectType: "Kitchen Remodel",
            rating: 5,
            quote:
                "They helped us make smart design choices and stayed on schedule throughout.",
        },
    ],

    schema: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "Ballard Kitchen Remodel",
        description:
            "Kitchen remodel in Ballard featuring custom cabinetry, quartz countertops, and an open-concept layout.",
        url: "/previous-work/kitchen-remodel-ballard",
        image: ["/images/previous/kitchen-remodel-ballard.jpg"],
        about: ["Kitchen Remodel", "Seattle Remodeling", "General Contracting"],
        areaServed: {
            "@type": "City",
            name: "Seattle",
            address: { "@type": "PostalAddress", addressRegion: "WA" },
        },
        review: [
            {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Emily T." },
                reviewBody:
                    "The island has become the center of our home. The craftsmanship is top-tier.",
            },
            {
                "@type": "Review",
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Michael P." },
                reviewBody:
                    "They helped us make smart design choices and stayed on schedule throughout.",
            },
        ],
    },
}