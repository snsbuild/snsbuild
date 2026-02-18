export const interiorPages = [
    {
        id: "kitchen-remodeling",
        cluster: "interior",
        relatedServiceIds: ["bathroom-remodeling", "whole-home-remodeling", "flooring-installation"],

        slug: "/services/kitchen-remodeling-seattle",

        seo: {
            title: "Kitchen Remodeling Contractor in Seattle, WA | Saddle and Spur Construction",
            description:
                "Custom kitchen remodeling in Seattle and across King County—layout improvements, cabinetry, countertops, lighting, and high-quality finishes managed start to finish.",
            keywords: [
                "kitchen remodeling contractor seattle",
                "kitchen remodel seattle",
                "kitchen renovation king county",
                "custom cabinets seattle",
                "countertop installation seattle",
            ],
        },

        ogImage: { src: "/images/og/kitchen-remodeling-seattle.jpg", alt: "Modern kitchen remodel in Seattle" },

        hero: {
            eyebrow: "KITCHEN REMODELING • SEATTLE & KING COUNTY",
            headline: "Modern Designs, Expert Craftsmanship",
            subheadline:
                "Kitchens built for daily life—better flow, smarter storage, and finishes that stay beautiful.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Kitchen Projects", href: "/portfolio?service=kitchen-remodeling" },
        },

        index: {
            imgSrc: "/images/kitchen/ravenna-kitchen-1.jpg",
            imgAlt: "",
            cta: "view",
            headline: "Kitchen Remodeling",
            subheadline:
                "Kitchens built for daily life—better flow, smarter storage, and finishes that stay beautiful.",
        },

        service: {
            name: "Kitchen Remodeling",
            serviceType: "Kitchen Remodeling Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Custom kitchen remodels", description: "Thoughtfully designed kitchens with premium materials and precise installation." },
            { name: "Open-concept layout reconfigurations", description: "Structural modifications that create brighter, more connected living spaces." },
            { name: "Custom cabinetry & millwork", description: "Built-to-fit cabinets and detailed trim work crafted for style and durability." },
            { name: "High-end countertop installation", description: "Quartz, stone, and solid surface countertops installed with seamless precision." },
            { name: "Designer lighting integration", description: "Layered lighting plans that enhance both functionality and ambiance." },
            { name: "Premium appliance installation", description: "Professional installation of built-in and energy-efficient appliances." },
            { name: "Feature walls & custom finishes", description: "Statement details that add texture, depth, and personality to your home." },
            { name: "Quality control & finishing details", description: "Meticulous final inspections to ensure every detail meets our standards." },
        ],

        faqs: [
            { question: "Do you handle permits for kitchen remodels in Seattle?", answer: "Yes—we coordinate required permits and inspections throughout Seattle and King County." },
            { question: "Can you remove walls for an open-concept kitchen?", answer: "Often, yes. We evaluate structure, coordinate engineering if needed, and complete the work safely and to code." },
            { question: "How long does a kitchen remodel take?", answer: "Timelines vary by scope and material lead times. We provide a clear schedule before construction begins." },
        ],
    },

    {
        id: "bathroom-remodeling",
        cluster: "interior",
        relatedServiceIds: ["kitchen-remodeling", "whole-home-remodeling", "flooring-installation"],

        slug: "/services/bathroom-remodeling-seattle",

        seo: {
            title: "Bathroom Remodeling Contractor in Seattle, WA | Saddle and Spur Construction",
            description:
                "Bathroom remodels in Seattle and across King County—custom showers, tile, layout upgrades, ventilation, and code-compliant waterproofing done right.",
            keywords: [
                "bathroom remodeling contractor seattle",
                "bathroom remodel seattle",
                "bathroom renovation king county",
                "walk-in shower remodel seattle",
                "tile shower installation seattle",
            ],
        },

        ogImage: { src: "/images/og/bathroom-remodeling-seattle.jpg", alt: "Spa-like bathroom remodel in Seattle" },

        hero: {
            eyebrow: "BATHROOM REMODELING • SEATTLE & KING COUNTY",
            headline: "Luxury Bathrooms, Functional Design",
            subheadline: "Better layouts, cleaner finishes, and comfort upgrades that last.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Bathroom Projects", href: "/portfolio?service=bathroom-remodeling" },
        },

        service: {
            name: "Bathroom Remodeling",
            serviceType: "Bathroom Remodeling Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Full bathroom remodels", description: "Complete tear-outs and rebuilds that update layout, finishes, and functionality." },
            { name: "Small bathroom renovations", description: "Smart upgrades that make compact bathrooms feel more open and efficient." },
            { name: "Condo and apartment bathrooms", description: "Remodels coordinated with HOA rules, access requirements, and approved work hours." },
            { name: "Shower remodels & walk-in showers", description: "Custom showers with modern tile, clean lines, and proper waterproofing." },
            { name: "Tub replacements & conversions", description: "Replace worn tubs or convert to showers to improve usability." },
            { name: "Tile flooring & shower surrounds", description: "Durable tile installed to hold up to daily use and moisture." },
            { name: "Vanities, lighting, and ventilation upgrades", description: "Comfort and performance improvements for visibility and moisture control." },
            { name: "Waterproofing and code-compliant installations", description: "Built to current codes with proven waterproofing behind the finishes." },
        ],

        faqs: [
            { question: "Do you improve ventilation and waterproofing?", answer: "Yes—those are core parts of a long-lasting bathroom remodel." },
            { question: "Can you convert a tub into a walk-in shower?", answer: "Absolutely. We design conversions for comfort, accessibility, and reliable waterproofing." },
            { question: "How long does a bathroom remodel take?", answer: "Scope varies, but we provide a clear timeline and keep the project moving with organized scheduling." },
        ],
    },

    {
        id: "whole-home-remodeling",
        cluster: "interior",
        relatedServiceIds: ["kitchen-remodeling", "bathroom-remodeling", "home-additions"],

        slug: "/services/whole-home-remodeling-seattle",

        seo: {
            title: "Whole Home Remodeling in Seattle, WA | Saddle and Spur Construction",
            description:
                "Complete home transformations across Seattle and King County—layout redesign, system upgrades, finishes, and project management for a cohesive result.",
            keywords: [
                "whole home remodeling seattle",
                "home renovation seattle",
                "remodel contractor king county",
                "open concept renovation seattle",
                "general contractor seattle remodel",
            ],
        },

        ogImage: { src: "/images/og/whole-home-remodeling-seattle.jpg", alt: "Whole home remodel in Seattle" },

        hero: {
            eyebrow: "WHOLE HOME REMODELING • SEATTLE & KING COUNTY",
            headline: "Complete Home Transformations",
            subheadline: "Reimagine your home with cohesive design, smart upgrades, and quality craftsmanship.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Renovation Projects", href: "/portfolio?service=whole-home-remodeling" },
        },

        service: {
            name: "Whole Home Remodeling",
            serviceType: "Whole Home Remodeling Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Whole-home renovations", description: "Comprehensive remodels that modernize and unify every space." },
            { name: "Interior layout redesign", description: "Reconfiguring rooms to improve flow, light, and usability." },
            { name: "Structural modifications", description: "Beam installations and wall removals completed safely and professionally." },
            { name: "Electrical & plumbing upgrades", description: "Updated systems built to meet current codes and performance standards." },
            { name: "Custom staircases & railings", description: "Architectural features crafted for style and safety." },
            { name: "Interior finishes & trim", description: "Polished details that elevate the entire home." },
            { name: "Energy-efficiency improvements", description: "Upgrades that improve comfort and reduce utility costs." },
            { name: "Permit coordination & inspections", description: "We manage compliance steps to keep your project moving." },
        ],

        faqs: [
            { question: "Can you remodel the home in phases?", answer: "Yes—if needed, we can plan a phased approach to fit your timeline and living situation." },
            { question: "Do you handle design and selections?", answer: "We can guide layouts, materials, and selections to align style, performance, and budget." },
            { question: "Will a whole-home remodel require permits?", answer: "Often, yes. We coordinate permitting and inspections as required in Seattle and King County." },
        ],
    },

    {
        id: "flooring-installation",
        cluster: "interior",
        relatedServiceIds: ["kitchen-remodeling", "bathroom-remodeling", "whole-home-remodeling"],

        slug: "/services/flooring-installation-seattle",

        seo: {
            title: "Flooring Installation in Seattle, WA | Saddle and Spur Construction",
            description:
                "Durable flooring installation across Seattle and King County—hardwood, LVP, tile, and prep work including leveling and subfloor repair.",
            keywords: [
                "flooring installation seattle",
                "hardwood flooring seattle",
                "lvp flooring seattle",
                "tile floor installation seattle",
                "subfloor repair seattle",
            ],
        },

        ogImage: { src: "/images/og/flooring-installation-seattle.jpg", alt: "New flooring installation in Seattle home" },

        hero: {
            eyebrow: "FLOORING • SEATTLE & KING COUNTY",
            headline: "Durable, Beautiful Flooring Installation",
            subheadline: "The right floor, installed correctly—prep, fit, and finish that lasts.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Flooring Projects", href: "/portfolio?service=flooring-installation" },
        },

        service: {
            name: "Flooring Installation",
            serviceType: "Flooring Installation Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Hardwood flooring", description: "Classic wood floors installed and finished with precision." },
            { name: "Luxury vinyl plank (LVP)", description: "Water-resistant, durable flooring for busy households." },
            { name: "Tile flooring", description: "Professionally installed ceramic and porcelain tile." },
            { name: "Laminate flooring", description: "Affordable, stylish flooring with long-lasting performance." },
            { name: "Subfloor repair & leveling", description: "Prep work for a smooth, stable, long-lasting finish." },
            { name: "Floor refinishing", description: "Restore the beauty of existing hardwood surfaces." },
            { name: "Baseboards & trim installation", description: "Clean finishing details that complete the look." },
            { name: "Moisture barriers", description: "Protection systems that extend floor lifespan." },
        ],

        faqs: [
            { question: "Do you handle subfloor repairs and leveling?", answer: "Yes—prep work is critical to a great-looking floor and is part of our process when needed." },
            { question: "What flooring is best for kitchens and baths?", answer: "It depends on budget and style; tile and quality LVP are popular for moisture-prone areas." },
            { question: "Can you match existing flooring?", answer: "We’ll do our best to match or recommend a cohesive alternative for a seamless look." },
        ],
    },

    {
        id: "windows-doors",
        cluster: "interior",
        relatedServiceIds: ["whole-home-remodeling", "flooring-installation", "structural-upgrades"],

        slug: "/services/windows-doors-seattle",

        seo: {
            title: "Window Replacement & Custom Doors in Seattle, WA | Saddle and Spur Construction",
            description:
                "Energy-efficient window replacement and custom doors in Seattle and King County—professional installation, weatherproofing, and clean trim finishes.",
            keywords: [
                "window replacement seattle",
                "custom doors seattle",
                "energy efficient windows king county",
                "patio door installation seattle",
                "entry door replacement seattle",
            ],
        },

        ogImage: { src: "/images/og/windows-doors-seattle.jpg", alt: "Energy-efficient windows installed in Seattle home" },

        hero: {
            eyebrow: "WINDOWS & DOORS • SEATTLE & KING COUNTY",
            headline: "Energy-Efficient Windows & Custom Doors",
            subheadline: "Better comfort, better efficiency, and clean installs that seal tight.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Project Examples", href: "/portfolio?service=windows-doors" },
        },

        service: {
            name: "Windows & Doors",
            serviceType: "Window & Door Installation Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Window replacements", description: "Modern, energy-efficient windows installed for improved comfort." },
            { name: "Custom entry doors", description: "Secure, stylish doors tailored to your home." },
            { name: "Sliding patio doors", description: "Smooth systems that enhance natural light and access." },
            { name: "French doors", description: "Elegant door solutions for indoor-outdoor transitions." },
            { name: "Trim & casing installation", description: "Detailed finishing work for a polished look." },
            { name: "Weatherproofing & sealing", description: "Install methods that prevent drafts and water intrusion." },
            { name: "Impact-resistant options", description: "Durable glass options for added protection and security." },
            { name: "Hardware & lock upgrades", description: "Improved security and smooth operation." },
        ],

        faqs: [
            { question: "Do new windows really improve energy efficiency?", answer: "Yes—properly installed windows can reduce drafts and improve comfort, especially with modern glazing." },
            { question: "Can you replace doors and match trim details?", answer: "Yes—we finish installs with clean trim work for a cohesive look." },
            { question: "Do you handle weatherproofing?", answer: "Absolutely—tight sealing and proper flashing are essential parts of our installs." },
        ],
    },

]

export const expansionPages = [
    {
        id: "adu-construction",
        cluster: "expansion",
        relatedServiceIds: ["home-additions", "garage-conversions", "structural-upgrades"],

        slug: "/services/adu-construction-seattle",

        seo: {
            title: "ADU Builder in Seattle, WA | Saddle and Spur Construction",
            description:
                "Accessory dwelling units (ADUs) built in Seattle and across King County—planning, permits, construction, and high-quality finishes for rental or family living.",
            keywords: [
                "adu builder seattle",
                "accessory dwelling unit king county",
                "adu contractor seattle",
                "garage adu conversion seattle",
                "backyard cottage seattle",
            ],
        },

        ogImage: { src: "/images/og/adu-construction-seattle.jpg", alt: "Seattle ADU construction project" },

        hero: {
            eyebrow: "ADU BUILDERS • SEATTLE & KING COUNTY",
            headline: "Accessory Dwelling Units Built Right",
            subheadline: "Smart layouts, quality builds, and reliable project management—start to finish.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View ADU Projects", href: "/portfolio?service=adu-construction" },
        },

        service: {
            name: "ADU Construction",
            serviceType: "ADU Builder",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Detached ADU construction", description: "Standalone units designed for privacy and comfort." },
            { name: "Garage-to-ADU conversions", description: "Transform garages into fully functional living spaces." },
            { name: "Junior ADUs (JADUs)", description: "Compact secondary units integrated within the primary home." },
            { name: "Kitchen & bath build-outs", description: "Complete utility build-outs for independent living." },
            { name: "Utility connections & upgrades", description: "Safe integration of water, sewer, and electrical systems." },
            { name: "Permit & zoning coordination", description: "Guidance through approvals for Seattle and King County." },
            { name: "Energy-efficient design", description: "Layouts and materials that reduce long-term operating costs." },
            { name: "Rental-ready finishes", description: "Durable, attractive finishes suited for tenants or guests." },
        ],

        faqs: [
            { question: "Do you help with permitting for ADUs in Seattle?", answer: "Yes—we coordinate permitting and inspections as required." },
            { question: "Can you convert a garage into an ADU?", answer: "Often, yes. We assess the structure and code requirements to determine feasibility." },
            { question: "Are ADUs good for rental income?", answer: "Many owners build ADUs for long-term rental, guests, or multi-generational living." },
        ],
    },

    {
        id: "home-additions",
        cluster: "expansion",
        relatedServiceIds: ["adu-construction", "structural-upgrades", "whole-home-remodeling"],

        slug: "/services/home-additions-king-county",

        seo: {
            title: "Home Additions in Seattle & King County | Saddle and Spur Construction",
            description:
                "Seamless home additions built across Seattle and King County—room additions, primary suites, second stories, and structural planning done right.",
            keywords: [
                "home additions seattle",
                "room addition king county",
                "second story addition seattle",
                "primary suite addition seattle",
                "home expansion contractor",
            ],
        },

        ogImage: { src: "/images/og/home-additions-king-county.jpg", alt: "Seamless home addition in King County" },

        hero: {
            eyebrow: "HOME ADDITIONS • SEATTLE & KING COUNTY",
            headline: "Expand Your Home with Seamless Additions",
            subheadline: "More space, better flow, and a finish that matches your home—inside and out.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Addition Projects", href: "/portfolio?service=home-additions" },
        },

        service: {
            name: "Home Additions",
            serviceType: "Home Addition Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Room additions", description: "New bedrooms, offices, or living spaces integrated into your existing layout." },
            { name: "Second-story additions", description: "Vertical expansions that maximize lot space." },
            { name: "Kitchen expansions", description: "Extended layouts that create more room to cook and gather." },
            { name: "Primary suite additions", description: "Spacious suites designed for comfort and functionality." },
            { name: "Foundation extensions", description: "Solid groundwork for long-lasting stability." },
            { name: "Roofline & exterior matching", description: "Seamless blending of new construction with existing architecture." },
            { name: "Engineering coordination", description: "Safe planning for loads and structural changes." },
            { name: "Permits & inspections", description: "Full coordination to keep your project compliant." },
        ],

        faqs: [
            { question: "Can you match my home’s existing exterior?", answer: "Yes—we plan materials and details so the addition feels original to the home." },
            { question: "Do additions require permits?", answer: "Yes—most additions do. We manage the permitting and inspection process." },
            { question: "Can we live in the home during the addition?", answer: "Often, yes. We plan staging and communicate milestones to reduce disruption." },
        ],
    },

    {
        id: "garage-conversions",
        cluster: "expansion",
        relatedServiceIds: ["adu-construction", "home-additions", "unused-space-conversions"],

        slug: "/services/garage-conversions-seattle",

        seo: {
            title: "Garage Conversions in Seattle, WA | Saddle and Spur Construction",
            description:
                "Garage conversions in Seattle and across King County—transform garages into livable space, studios, offices, or rental-ready units with permits handled.",
            keywords: [
                "garage conversion seattle",
                "convert garage to living space seattle",
                "garage remodel king county",
                "garage to studio seattle",
                "garage adu conversion",
            ],
        },

        ogImage: { src: "/images/og/garage-conversions-seattle.jpg", alt: "Garage conversion project in Seattle" },

        hero: {
            eyebrow: "GARAGE CONVERSIONS • SEATTLE & KING COUNTY",
            headline: "Garage Conversions & Custom Builds",
            subheadline: "Turn underused garages into comfortable, code-compliant living space.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Conversion Projects", href: "/portfolio?service=garage-conversions" },
        },

        service: {
            name: "Garage Conversions",
            serviceType: "Garage Conversion Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Garage-to-living space conversions", description: "Transform garages into comfortable livable areas." },
            { name: "Home offices", description: "Quiet workspaces designed for productivity." },
            { name: "Studios & creative spaces", description: "Dedicated rooms with insulation and lighting upgrades." },
            { name: "Guest suites", description: "Private accommodations for visitors or family." },
            { name: "Insulation & drywall finishing", description: "Full interior build-outs for comfort and durability." },
            { name: "Electrical upgrades", description: "Power improvements to support new use cases." },
            { name: "Flooring & finishes", description: "Durable finishes that match the rest of your home." },
            { name: "Permit & code compliance", description: "We manage permitting and ensure compliant conversions." },
        ],

        faqs: [
            { question: "Do garage conversions require permits in Seattle?", answer: "Yes—most do. We coordinate permits and inspections as needed." },
            { question: "Can a garage conversion become a rental unit?", answer: "Sometimes. It depends on zoning, setbacks, and requirements—we can help evaluate options." },
            { question: "Will the converted space be comfortable year-round?", answer: "Yes—proper insulation, heating, and finishes make it livable in every season." },
        ],
    },

    {
        id: "unused-space-conversions",
        cluster: "expansion",
        relatedServiceIds: ["garage-conversions", "whole-home-remodeling", "home-additions"],

        slug: "/services/basement-attic-conversions-seattle",

        seo: {
            title: "Basement & Attic Conversions in Seattle, WA | Saddle and Spur Construction",
            description:
                "Transform unused space into livable areas across Seattle and King County—basement finishing, attic conversions, offices, media rooms, and guest suites.",
            keywords: [
                "basement finishing seattle",
                "attic conversion seattle",
                "convert basement to living space",
                "media room contractor seattle",
                "home office build seattle",
            ],
        },

        ogImage: { src: "/images/og/basement-attic-conversions-seattle.jpg", alt: "Finished basement living space in Seattle" },

        hero: {
            eyebrow: "SPACE CONVERSIONS • SEATTLE & KING COUNTY",
            headline: "Transform Unused Space into Livable Areas",
            subheadline: "Make room for what you need—work, guests, fitness, or entertainment.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Conversion Projects", href: "/portfolio?service=unused-space-conversions" },
        },

        service: {
            name: "Basement & Attic Conversions",
            serviceType: "Basement & Attic Conversion Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Basement finishing", description: "Convert unfinished basements into comfortable living space." },
            { name: "Attic conversions", description: "Maximize upper-level space with insulation and structural upgrades." },
            { name: "Home offices", description: "Quiet, functional workspaces built for productivity." },
            { name: "Home gyms", description: "Durable layouts tailored to fitness needs." },
            { name: "Media rooms", description: "Comfort-focused designs for immersive entertainment." },
            { name: "Guest suites", description: "Private, welcoming accommodations for visitors." },
            { name: "Insulation & moisture control", description: "Protection that ensures comfort and durability." },
            { name: "Egress solutions", description: "Code-conscious access and natural light improvements." },
        ],

        faqs: [
            { question: "Can you finish a basement that has moisture issues?", answer: "Yes—we evaluate moisture sources and include appropriate mitigation and moisture control." },
            { question: "Do basement or attic conversions need permits?", answer: "Often, yes—especially when changing use, adding plumbing, or modifying structure." },
            { question: "Can you add egress for safety?", answer: "Yes—we can plan code-compliant egress solutions when required." },
        ],
    },

    {
        id: "roofing-structural",
        cluster: "expansion",
        relatedServiceIds: ["structural-upgrades", "home-additions", "whole-home-remodeling"],

        slug: "/services/roofing-structural-upgrades-seattle",

        seo: {
            title: "Roofing & Structural Upgrades in Seattle, WA | Saddle and Spur Construction",
            description:
                "Reliable roofing and structural upgrades across Seattle and King County—repairs, reinforcements, ventilation, drainage, and code-compliant structural improvements.",
            keywords: [
                "roofing contractor seattle",
                "roof repair seattle",
                "structural upgrades seattle",
                "roof ventilation seattle",
                "framing repair king county",
            ],
        },

        ogImage: { src: "/images/og/roofing-structural-upgrades-seattle.jpg", alt: "Roofing and structural upgrades in Seattle" },

        hero: {
            eyebrow: "ROOFING & STRUCTURE • SEATTLE & KING COUNTY",
            headline: "Reliable Roofing & Structural Upgrades",
            subheadline: "Protect your home with repairs and upgrades done correctly and built to last.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Project Examples", href: "/portfolio?service=roofing-structural" },
        },

        service: {
            name: "Roofing & Structural Upgrades",
            serviceType: "Roofing & Structural Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Roof replacements", description: "Complete tear-offs and installations built to last." },
            { name: "Roof repairs", description: "Targeted fixes that prevent leaks and extend roof life." },
            { name: "Sheathing & framing repairs", description: "Restore structural integrity after damage or wear." },
            { name: "Structural reinforcement", description: "Reinforcements for remodels and load-bearing changes." },
            { name: "Roof ventilation improvements", description: "Balanced airflow to protect roofing materials." },
            { name: "Gutters & drainage", description: "Water management solutions that protect foundations." },
            { name: "Skylight installation", description: "Natural light solutions integrated into your roof system." },
            { name: "Inspection & preventative maintenance", description: "Catch issues early and avoid bigger repairs later." },
        ],

        faqs: [
            { question: "Can you repair a roof leak quickly?", answer: "Often, yes. We assess the source and recommend the most durable fix." },
            { question: "Do you handle structural reinforcements for remodels?", answer: "Yes—we coordinate safe structural upgrades to support layout changes." },
            { question: "Will ventilation improvements extend roof life?", answer: "Proper ventilation can help reduce moisture and heat buildup that contribute to wear." },
        ],
    },

    {
        id: "structural-upgrades",
        cluster: "expansion",
        relatedServiceIds: ["home-additions", "roofing-structural", "whole-home-remodeling"],

        slug: "/services/structural-upgrades-seattle",

        seo: {
            title: "Structural Upgrades in Seattle, WA | Saddle and Spur Construction",
            description:
                "Structural upgrades across Seattle and King County—beam installs, framing repairs, reinforcements, and code-compliant modifications for renovations and additions.",
            keywords: [
                "structural upgrades seattle",
                "install beam seattle",
                "load bearing wall removal seattle",
                "framing repair king county",
                "structural contractor seattle",
            ],
        },

        ogImage: { src: "/images/og/structural-upgrades-seattle.jpg", alt: "Structural beam installation in Seattle remodel" },

        hero: {
            eyebrow: "STRUCTURAL WORK • SEATTLE & KING COUNTY",
            headline: "Reliable Roofing & Structural Upgrades",
            subheadline: "Safe, code-conscious structural work to support remodels, additions, and conversions.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Project Examples", href: "/portfolio?service=structural-upgrades" },
        },

        service: {
            name: "Structural Upgrades",
            serviceType: "Structural Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Beam installation", description: "Support open layouts and load-bearing changes with properly installed beams." },
            { name: "Load-bearing wall modifications", description: "Safe removals and reinforcements to improve layout and flow." },
            { name: "Framing repairs", description: "Restore integrity after wear, damage, or previous issues." },
            { name: "Foundation-related framing work", description: "Coordinate structural ties between framing and foundation conditions." },
            { name: "Seismic improvements", description: "Reinforcement options designed to improve resilience." },
            { name: "Engineering coordination", description: "We coordinate plans and documentation when required." },
            { name: "Permit support", description: "We help keep projects compliant with local requirements." },
            { name: "Structural inspections & planning", description: "Early evaluation to prevent surprises during the build." },
        ],

        faqs: [
            { question: "Can you remove a load-bearing wall?", answer: "Often, yes—with proper engineering and beam installation where required." },
            { question: "Do structural upgrades require permits?", answer: "Frequently. We coordinate permits and inspections as needed." },
            { question: "Do you coordinate with engineers?", answer: "Yes—we work with engineering when plans or calculations are required." },
        ],
    },
]

export const outdoorPages = [
    {
        id: "outdoor-living",
        cluster: "outdoor",
        relatedServiceIds: ["home-additions", "whole-home-remodeling", "windows-doors"],

        slug: "/services/outdoor-living-spaces-seattle",

        seo: {
            title: "Outdoor Living Spaces in Seattle, WA | Saddle and Spur Construction",
            description:
                "Beautiful outdoor living spaces across Seattle and King County—decks, patios, pergolas, outdoor kitchens, and lighting built for year-round enjoyment.",
            keywords: [
                "outdoor living spaces seattle",
                "deck builder seattle",
                "patio contractor seattle",
                "pergola builder seattle",
                "outdoor kitchen seattle",
            ],
        },

        ogImage: { src: "/images/og/outdoor-living-spaces-seattle.jpg", alt: "Outdoor deck and patio in Seattle" },

        hero: {
            eyebrow: "OUTDOOR LIVING • SEATTLE & KING COUNTY",
            headline: "Beautiful Outdoor Living Spaces",
            subheadline: "Extend your living space outdoors with durable builds and clean finishes.",
            primaryCta: { label: "Request an Estimate", href: "/contact" },
            secondaryCta: { label: "View Outdoor Projects", href: "/portfolio?service=outdoor-living" },
        },

        service: {
            name: "Outdoor Living Spaces",
            serviceType: "Outdoor Living Contractor",
            areaServed: ["Seattle, WA", "King County, WA", "Greater Seattle"],
        },

        subServices: [
            { name: "Custom deck construction", description: "Durable wood and composite decks built for entertaining and relaxation." },
            { name: "Patios & hardscaping", description: "Stone and paver installations designed for beauty and longevity." },
            { name: "Outdoor kitchens", description: "Cooking spaces that extend your living area outdoors." },
            { name: "Pergolas & shade structures", description: "Architectural shade solutions for comfort and visual appeal." },
            { name: "Fire pits & fireplaces", description: "Warm gathering spaces for year-round enjoyment." },
            { name: "Outdoor lighting systems", description: "Lighting that enhances safety and ambiance." },
            { name: "Sliding & folding door coordination", description: "Indoor-outdoor transitions that open the home to the yard." },
            { name: "Weather-resistant finishes", description: "Materials and details chosen to hold up in the Pacific Northwest." },
        ],

        faqs: [
            { question: "What materials work best for decks in Seattle weather?", answer: "Composite and properly sealed wood are popular options—chosen based on budget, style, and maintenance preferences." },
            { question: "Can you build an outdoor kitchen?", answer: "Yes—we plan layout, utility needs, and durable finishes suited for outdoor use." },
            { question: "Do outdoor projects require permits?", answer: "Sometimes. We’ll confirm requirements and coordinate permits when needed." },
        ],
    },
]

export const servicePages = [
    ...interiorPages,
    ...expansionPages,
    ...outdoorPages
];
