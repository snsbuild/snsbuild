

export const interiorCategory = {
    category: "Interior Services",
    cta: "Take a look at a kitchen in Greenwood we remodeled",
    ctaHref: "/",
    services: [
        {
            ctaHref: "/services/kitchen-remodeling-seattle",
            core: true,
            imgSrc: "/images/kitchen/ravenna-kitchen-1.jpg",
            imgAlt: "Modern kitchen remodel in Seattle",
            headline: "Kitchen Remodeling",
            subheadline:
                "Seattle kitchen remodels with better flow, smart storage, and beautiful finishes—managed start to finish.",
        },
        {
            core: true,
            imgSrc: "/images/bathroom/w-seattle-bath-1.jpg",
            imgAlt: "Spa-like bathroom remodel with tile shower",
            headline: "Bathroom Remodeling",
            subheadline:
                "Comfort-first bathroom remodels with custom tile, clean lighting, and code-compliant waterproofing.",
        },
        {
            core: true,
            imgSrc: "/images/kitchen/ravenna-kitchen-2.jpg",
            imgAlt: "Whole home renovation in Seattle",
            headline: "Whole Home Remodeling",
            subheadline:
                "Cohesive, full-home renovations across Seattle & King County—layout upgrades, systems, and finish work.",
        },
        {
            core: false,
            imgSrc: "/images/flooring/flooring-1.jpg",
            imgAlt: "Hardwood flooring installation",
            headline: "Flooring Installation",
            subheadline:
                "Hardwood, tile, and LVP installed the right way—proper prep, clean transitions, and lasting durability.",
        },
        {
            core: false,
            imgSrc: "/images/windows/windows-1.jpg",
            imgAlt: "Energy-efficient window replacement",
            headline: "Windows & Doors",
            subheadline:
                "Energy-efficient windows and custom doors with tight weatherproofing and crisp trim details.",
        },
    ],
};

export const expansionCategory = {
    category: "Expansion Services",
    cta: "Explore an ADU project we built in Seattle",
    ctaHref: "/",
    services: [
        {
            core: true,
            imgSrc: "/images/aud/aud1-4.jpg",
            imgAlt: "Seattle ADU export construction project",
            headline: "ADU export Construction",
            subheadline:
                "Seattle ADU builder for backyard cottages and conversions—smart layouts, permits, and rental-ready finishes.",
        },
        {
            core: false,
            imgSrc: "/images/additions/addition-1.jpg",
            imgAlt: "Home addition matched to existing exterior",
            headline: "Home Additions",
            subheadline:
                "Seamless room and second-story additions that match your home—inside and out—throughout King County.",
        },
        {
            core: false,
            imgSrc: "/images/garage/garage-conversion-1.jpg",
            imgAlt: "Garage conversion into finished living space",
            headline: "Garage Conversions",
            subheadline:
                "Turn unused garages into comfortable living space—home offices, studios, guest suites, and more.",
        },
        {
            core: false,
            imgSrc: "/images/basement/basement-1.jpg",
            imgAlt: "Finished basement living area",
            headline: "Basement & Attic Conversions",
            subheadline:
                "Convert basements and attics into livable space with insulation, moisture control, and code-smart egress.",
        },
        {
            core: false,
            imgSrc: "/images/roofing/roof-1.jpg",
            imgAlt: "Roofing and structural upgrades",
            headline: "Roofing & Structural Upgrades",
            subheadline:
                "Protect your home with durable roofing, ventilation, and structural repairs—built to last in Seattle weather.",
        },
        {
            core: false,
            imgSrc: "/images/structural/beam-install-1.jpg",
            imgAlt: "Beam installation for open-concept layout",
            headline: "Structural Upgrades",
            subheadline:
                "Beam installs and load-bearing changes done safely and to code—with engineering coordination when needed.",
        },
    ],
};

export const outdoorCategory = {
    category: "Outdoor Services",
    cta: "See an outdoor living space we built for year-round use",
    ctaHref: "/",
    services: [
        {
            core: true,
            imgSrc: "/images/outdoor/fremont-deck-1.jpg",
            imgAlt: "Custom deck and patio in Seattle",
            headline: "Custom Deck Construction",
            subheadline:
                "Custom decks, patios, pergolas, and outdoor kitchens—designed for the Pacific Northwest and built to endure.",
        },
        {
            core: true,
            imgSrc: "/images/outdoor/fremont-deck-1.jpg",
            imgAlt: "Custom deck and patio in Seattle",
            headline: "Custom Pergola Construction or Pre-Built Pergola Installation",
            subheadline:
                "Custom decks, patios, pergolas, and outdoor kitchens—designed for the Pacific Northwest and built to endure.",
        },
        {
            core: true,
            imgSrc: "/images/outdoor/fremont-deck-1.jpg",
            imgAlt: "Custom deck and patio in Seattle",
            headline: "Outdoor Living Spaces",
            subheadline:
                "Custom decks, patios, pergolas, and outdoor kitchens—designed for the Pacific Northwest and built to endure.",
        },
    ],
};

export const serviceCategories = [
    outdoorCategory,
    interiorCategory,
    expansionCategory
]

export const getCoreServices = () => {
    return serviceCategories.flatMap((category) => {
        return category.services.filter((service) => service.core
        )
    })
}