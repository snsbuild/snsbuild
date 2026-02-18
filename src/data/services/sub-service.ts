const servicesWithSubServices = [
    {
        service: "Modern Designs, Expert Craftsmanship",
        subServices: [
            { subService: "Custom kitchen remodels", description: "Thoughtfully designed kitchens with premium materials and precise installation." },
            { subService: "Open-concept layout reconfigurations", description: "Structural modifications that create brighter, more connected living spaces." },
            { subService: "Custom cabinetry & millwork", description: "Built-to-fit cabinets and detailed trim work crafted for style and durability." },
            { subService: "High-end countertops installation", description: "Quartz, stone, and solid surface countertops installed with seamless precision." },
            { subService: "Designer lighting integration", description: "Layered lighting plans that enhance both functionality and ambiance." },
            { subService: "Premium appliance installation", description: "Professional installation of built-in and energy-efficient appliances." },
            { subService: "Feature walls & custom finishes", description: "Statement details that add texture, depth, and personality to your home." },
            { subService: "Quality control & finishing details", description: "Meticulous final inspections to ensure every detail meets our standards." }
        ]
    },
    {
        service: "Luxury Bathrooms, Functional Design",
        subServices: [
            { subService: "Spa-style bathroom remodels", description: "High-end finishes and layouts designed for relaxation and comfort." },
            { subService: "Custom walk-in showers", description: "Frameless glass, premium tile, and built-in niches for a sleek look." },
            { subService: "Freestanding tub installations", description: "Elegant soaking tubs that become the centerpiece of the space." },
            { subService: "Heated flooring systems", description: "Radiant heat flooring for added comfort and energy efficiency." },
            { subService: "Double vanity installations", description: "Functional designs that maximize storage and personal space." },
            { subService: "Luxury tile & stonework", description: "Precision-installed tile patterns and natural stone finishes." },
            { subService: "Smart bathroom features", description: "Integrated lighting, mirrors, and water-saving fixtures." },
            { subService: "Accessibility upgrades", description: "Barrier-free designs and safety features without sacrificing style." }
        ]
    },
    {
        service: "Complete Home Transformations",
        subServices: [
            { subService: "Whole-home renovations", description: "Comprehensive remodels that modernize and unify every space." },
            { subService: "Interior layout redesign", description: "Reconfiguring rooms to improve flow and functionality." },
            { subService: "Structural modifications", description: "Beam installations and wall removals completed safely and professionally." },
            { subService: "Electrical & plumbing upgrades", description: "Updated systems built to meet current codes and performance standards." },
            { subService: "Custom staircases & railings", description: "Architectural features crafted for style and safety." },
            { subService: "Interior & exterior painting", description: "Professional finishes that refresh and protect your home." },
            { subService: "Energy-efficiency improvements", description: "Upgrades that reduce utility costs and increase comfort." },
            { subService: "Permit management & inspections", description: "Full coordination to keep your project compliant and on schedule." }
        ]
    },
    {
        service: "Beautiful Outdoor Living Spaces",
        subServices: [
            { subService: "Custom deck construction", description: "Durable wood and composite decks built for entertaining and relaxation." },
            { subService: "Patios & hardscaping", description: "Stone and paver installations designed for beauty and longevity." },
            { subService: "Outdoor kitchens", description: "Fully equipped cooking spaces that extend your living area outdoors." },
            { subService: "Pergolas & shade structures", description: "Architectural features that provide comfort and visual appeal." },
            { subService: "Fire pits & fireplaces", description: "Warm, inviting gathering spaces for year-round enjoyment." },
            { subService: "Outdoor lighting systems", description: "Strategic lighting that enhances safety and ambiance." },
            { subService: "Sliding & folding glass doors", description: "Seamless indoor-outdoor transitions with modern door systems." },
            { subService: "Landscape coordination", description: "Collaborative planning to complement your new outdoor build." }
        ]
    },
    {
        service: "Accessory Dwelling Units Built Right",
        subServices: [
            { subService: "Detached ADU construction", description: "Standalone living units designed for privacy and comfort." },
            { subService: "Garage-to-ADU conversions", description: "Transforming existing garages into fully functional living spaces." },
            { subService: "Junior ADUs (JADUs)", description: "Compact secondary units integrated within your primary residence." },
            { subService: "Full kitchen & bath installation", description: "Complete utility build-outs for independent living." },
            { subService: "Utility connections & upgrades", description: "Safe integration of water, sewer, and electrical systems." },
            { subService: "Permit & zoning coordination", description: "Guidance through local regulations and approval processes." },
            { subService: "Energy-efficient design", description: "Smart layouts and materials that reduce long-term operating costs." },
            { subService: "Rental-ready finishes", description: "Durable, attractive materials suited for tenants or guests." }
        ]
    },
    {
        service: "Expand Your Home with Seamless Additions",
        subServices: [
            { subService: "Room additions", description: "New bedrooms, offices, or living spaces integrated into your existing layout." },
            { subService: "Second-story additions", description: "Vertical expansions that maximize lot space." },
            { subService: "Kitchen expansions", description: "Extended layouts that create more room to cook and gather." },
            { subService: "Primary suite additions", description: "Spacious bedroom and bathroom suites designed for comfort." },
            { subService: "Foundation extensions", description: "Structurally sound groundwork for lasting stability." },
            { subService: "Roofline & exterior matching", description: "Seamless blending of new construction with existing architecture." },
            { subService: "Structural engineering coordination", description: "Safe load calculations and reinforcement planning." },
            { subService: "City permits & inspections", description: "Full project management to maintain compliance." }
        ]
    },
    {
        service: "Transform Unused Space into Livable Areas",
        subServices: [
            { subService: "Basement finishing", description: "Convert unfinished basements into comfortable living spaces." },
            { subService: "Attic conversions", description: "Maximize upper-level space with insulation and structural upgrades." },
            { subService: "Home offices", description: "Quiet, functional workspaces built for productivity." },
            { subService: "Home gyms", description: "Durable flooring and layouts tailored to fitness needs." },
            { subService: "Media rooms", description: "Sound-conscious designs for immersive entertainment." },
            { subService: "Guest suites", description: "Private, welcoming accommodations for visitors." },
            { subService: "Insulation & moisture control", description: "Proper protection to ensure comfort and durability." },
            { subService: "Egress window installation", description: "Safe, code-compliant access and natural light solutions." }
        ]
    },
    {
        service: "Durable, Beautiful Flooring Installation",
        subServices: [
            { subService: "Hardwood flooring", description: "Classic wood floors installed and finished with precision." },
            { subService: "Luxury vinyl plank (LVP)", description: "Water-resistant, durable flooring for busy households." },
            { subService: "Tile flooring", description: "Professionally installed ceramic and porcelain tile." },
            { subService: "Laminate flooring", description: "Affordable, stylish flooring with long-lasting performance." },
            { subService: "Subfloor repair & leveling", description: "Proper preparation for a smooth, stable finish." },
            { subService: "Floor refinishing", description: "Restore the beauty of existing hardwood surfaces." },
            { subService: "Baseboards & trim installation", description: "Clean finishing details that complete the look." },
            { subService: "Moisture barrier installation", description: "Protection systems that extend floor lifespan." }
        ]
    },
    {
        service: "Energy-Efficient Windows & Custom Doors",
        subServices: [
            { subService: "Window replacements", description: "Modern, energy-efficient windows installed for improved comfort." },
            { subService: "Custom entry doors", description: "Secure, stylish front doors tailored to your home." },
            { subService: "Sliding patio doors", description: "Smooth-glide systems that enhance natural light and access." },
            { subService: "French doors", description: "Elegant door solutions for indoor and outdoor transitions." },
            { subService: "Impact-resistant windows", description: "Durable glass options for added protection and security." },
            { subService: "Energy-efficient upgrades", description: "Improved insulation to reduce heating and cooling costs." },
            { subService: "Trim & casing installation", description: "Detailed finishing work for a polished appearance." },
            { subService: "Weatherproofing & sealing", description: "Proper installation techniques to prevent drafts and leaks." }
        ]
    },
    {
        service: "Reliable Roofing & Structural Upgrades",
        subServices: [
            { subService: "Roof replacements", description: "Complete tear-offs and installations built to last." },
            { subService: "Roof repairs", description: "Targeted fixes that prevent leaks and extend roof life." },
            { subService: "Structural beam installation", description: "Reinforcements for open layouts and load-bearing changes." },
            { subService: "Sheathing & framing repairs", description: "Restoring structural integrity after damage or wear." },
            { subService: "Skylight installation", description: "Natural light solutions integrated into your roof system." },
            { subService: "Gutter & drainage systems", description: "Water management solutions that protect your foundation." },
            { subService: "Seismic retrofitting", description: "Upgrades designed to improve earthquake resistance." },
            { subService: "Roof ventilation improvements", description: "Balanced airflow systems to protect roofing materials." }
        ]
    },
    {
        service: "Garage Conversions & Custom Builds",
        subServices: [
            { subService: "Garage-to-living space conversions", description: "Transform underused garages into comfortable living areas." },
            { subService: "Workshop builds", description: "Custom spaces designed for hobbies or professional use." },
            { subService: "Home studio construction", description: "Creative spaces with proper insulation and lighting." },
            { subService: "In-law suites", description: "Independent living spaces built within existing structures." },
            { subService: "Custom storage solutions", description: "Built-in cabinetry and organization systems." },
            { subService: "Electrical panel upgrades", description: "Power capacity improvements to support new uses." },
            { subService: "Insulation & drywall finishing", description: "Complete interior build-outs for comfort and durability." },
            { subService: "Permit & code compliance management", description: "Ensuring all conversions meet local building requirements." }
        ]
    }
];
