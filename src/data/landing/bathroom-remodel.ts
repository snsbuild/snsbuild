import type { LandingPage } from "../../types/entity-types";
import { phoneDisplay } from "../../siteConfig";
import { capitolHillBathroom } from "../interior/bathroom-remodel";

export const bathroomRemodelLanding: LandingPage = {
  kind: "landing",
  slug: "bathroom-remodel-seattle",
  path: "/bathroom-remodel-seattle",

  // Set to "noindex, follow" to keep this page exclusive to paid traffic.
  robots: "index, follow",

  seo: {
    title:
      "Free Bathroom Remodel Estimate in Seattle | Bathroom Remodel Quotes | Saddle and Spur",
    description: `Licensed Seattle bathroom remodeler. Walk-in showers, tub-to-shower conversions, tile, vanities, and heated floors. Free on-site estimate, permits handled, line-item pricing. Call ${phoneDisplay}.`,
    // Deliberately estimate/quote intent — the service page owns the
    // "bathroom remodeling seattle" head term.
    keywords: [
      "free bathroom remodel estimate seattle",
      "bathroom remodel quote seattle",
      "bathroom remodel cost seattle",
      "tub to shower conversion cost seattle",
      "bathroom remodeler near me",
      "walk-in shower estimate king county",
    ],
    ogImage: {
      src: "/images/services/bathroom/ogImage.jpg",
      alt: "Remodeled Seattle primary bathroom with curbless walk-in shower, large-format tile, and custom double vanity",
    },
    images: [],
  },

  service: {
    name: "Bathroom Remodeling",
    serviceType: "Bathroom Remodel",
    areaServed: ["Greater Seattle / King County"],
    servicePath: "/services/bathroom-remodeling-seattle",
  },

  hero: {
    eyebrow: "Seattle & King County bathroom remodeler",
    headline: "Heated floors and a better shower — before the cold sets in",
    subhead:
      "Walk-in showers, tub-to-shower conversions, custom tile, vanities, and heated floors across Greater Seattle. We do the waterproofing ourselves, handle the permits, and price every line so you know what you're paying for.",
    bullets: [
      "Free on-site estimate — we check the plumbing rough-in before we quote",
      "Waterproofing done in-house, never subbed out",
      "Radiant heated floors timed into the tile scope",
      "Tub-to-shower and curbless conversions sized to your space",
      "Most remodels finish in 3–6 weeks",
    ],
    image: {
      src: "/images/services/bathroom/gallery-1.jpg",
      alt: "Curbless walk-in shower with large-format porcelain tile and frameless glass enclosure",
    },
    formHeading: "Get your free bathroom estimate",
    formByline:
      "Tell us a bit about the bathroom and we'll get back to you to schedule a walkthrough — usually within one business day.",
    formName: "bathroom-lead",
    submitLabel: "Request my free estimate",
    projectTypes: [
      "Full bathroom remodel",
      "Tub-to-shower conversion",
      "Curbless walk-in shower",
      "Primary bath with new layout",
      "Vanity, fixtures, and lighting update",
      "Add heated floors",
      "Not sure yet — need guidance",
    ],
  },

  trustBadges: [
    "WA licensed & insured",
    "In-house waterproofing",
    "Written line-item estimates",
  ],

  stats: [
    { label: "Typical bathroom remodel", value: "3–6 wks" },
    { label: "Waterproofing subbed out", value: "Never" },
    { label: "Point of contact, start to finish", value: "1" },
    { label: "Cost for the estimate", value: "$0" },
  ],

  valueProps: [
    {
      title: "Waterproofing is the job",
      description:
        "Tile is what you see; the membrane behind it is what keeps water out of your framing. We do that step ourselves because it's the one mistake you can't fix without tearing the tile back out.",
      icon: "fa-solid fa-droplet-slash",
    },
    {
      title: "Heated floors, done seamlessly",
      description:
        "Electric radiant mats go in as part of the tile scope, not as an afterthought, so there are no seams in the finish floor. We set up the thermostat with you before handoff — worth it every January morning.",
      icon: "fa-solid fa-temperature-half",
    },
    {
      title: "Get the shower you actually want",
      description:
        "Pulling an unused tub is one of the most common requests we get. We look at the existing drain and supply locations first and show you what's realistic — including curbless — before anything is demolished.",
      icon: "fa-solid fa-shower",
    },
    {
      title: "Ventilation that handles Seattle damp",
      description:
        "A properly sized, properly ducted exhaust fan is what keeps mold off the ceiling through a wet winter. We spec it with the lighting plan so the room stays dry and looks good doing it.",
      icon: "fa-solid fa-fan",
    },
    {
      title: "Permits are our problem, not yours",
      description:
        "Moving plumbing, changing walls, or adding circuits usually needs a permit. We pull it, schedule inspections, and build the timing into the plan so an inspection never becomes a surprise delay.",
      icon: "fa-solid fa-file-signature",
    },
    {
      title: "A number that holds",
      description:
        "Our estimates are detailed and line-item, not vague ranges. Once the scope and finishes are agreed, we hold to it. Change orders happen when you ask for something new — not when we find something we should have priced.",
      icon: "fa-solid fa-magnifying-glass-dollar",
    },
  ],

  gallery: {
    eyebrow: "Recent work",
    heading: "Bathrooms we've built around Seattle",
    byline:
      "Curbless showers, large-format and handmade tile, double vanities, soaking tubs, and heated floors.",
    images: [
      {
        src: "/images/portfolio/bathroom/gallery-1.jpg",
        alt: "Curbless walk-in shower with large-format porcelain tile walls, recessed niche, and frameless glass enclosure",
      },
      {
        src: "/images/services/bathroom/gallery-2.jpg",
        alt: "Custom double vanity with quartz countertop, undermount sinks, and brushed nickel fixtures",
      },
      {
        src: "/images/services/bathroom/gallery-3.jpg",
        alt: "Freestanding soaking tub centered under a window with wall-mount filler faucet and tile surround",
      },
      {
        src: "/images/portfolio/bathroom/gallery-3.jpg",
        alt: "Wide view of remodeled Capitol Hill bathroom showing heated tile floor, double vanity, and open shower entry",
      },
      {
        src: "/images/services/bathroom/gallery-4.jpg",
        alt: "Close-up of handmade ceramic wall tile with contrasting grout and recessed niche in a Seattle bathroom remodel",
      },
      {
        src: "/images/portfolio/bathroom/gallery-4.jpg",
        alt: "Detail of large-format porcelain floor tile with heated mat and transition to shower in a Seattle primary bathroom",
      },
    ],
    cta: {
      label: "See the Capitol Hill bathroom project",
      href: "/portfolio/capitol-hill-bathroom-remodel",
    },
  },

  testimonial: capitolHillBathroom.testimonial,

  faqs: [
    {
      question: "Is the estimate really free?",
      answer:
        "Yes. We come out, measure, check the plumbing rough-in and the condition of the floor and walls, talk through layout and finishes, and send you a written line-item estimate at no charge and with no obligation.",
    },
    {
      question: "How long does a bathroom remodel take?",
      answer:
        "Most bathroom remodels take 3–6 weeks depending on scope and tile lead times. We help you make selections before demo so the clock doesn't start until materials are ready.",
    },
    {
      question: "Can you convert my tub into a walk-in shower?",
      answer:
        "Yes — it's one of our most common requests. We check whether the existing drain and supply lines can be reused and show you what's possible, including a curbless entry, before any demolition begins.",
    },
    {
      question: "Full remodel or cosmetic update — which do I need?",
      answer:
        "A cosmetic update swaps fixtures, the vanity, lighting, and paint while leaving tile and plumbing in place. A full remodel goes back to studs for new waterproofing, plumbing, and tile. If there's soft subfloor or failing grout in the shower, we'll tell you — new finishes over a leak just hide the problem.",
    },
    {
      question: "Do I have to move out?",
      answer:
        "Usually not, especially if there's a second bathroom in the house. We contain the work area and keep the rest of the home clean. If it's your only bathroom, we'll talk through the schedule and options up front.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "Greater Seattle and King County — Ballard, Fremont, Queen Anne, Magnolia, Capitol Hill, West Seattle, Columbia City and the rest of the city, plus Bellevue, Kirkland, Redmond, Renton, Shoreline, Edmonds and surrounding areas.",
    },
  ],

  crossLinks: {
    heading: "Want more detail before you call?",
    byline:
      "The service page covers tile, fixtures, and layout changes in depth, and the portfolio shows a finished remodel start to finish.",
    links: [
      {
        label: "Bathroom remodeling services",
        href: "/services/bathroom-remodeling-seattle",
        description:
          "Showers, tile, vanities, lighting, heated floors, and layout changes.",
      },
      {
        label: "Capitol Hill bathroom remodel",
        href: "/portfolio/capitol-hill-bathroom-remodel",
        description:
          "An unused tub replaced with a curbless shower, heated floors, and a double vanity.",
      },
      {
        label: "Kitchen remodeling",
        href: "/services/kitchen-remodeling-seattle",
        description:
          "Layout, cabinetry, counters, and finishes under one team.",
      },
      {
        label: "Whole-home remodeling",
        href: "/services/whole-home-remodeling-seattle",
        description:
          "Multiple baths, a kitchen, and flooring on one schedule.",
      },
    ],
  },

  closing: {
    heading: "Let's talk about your bathroom",
    body: "Send us the basics and we'll come take a look. You'll get a written, line-item estimate — no pressure and no obligation.",
    primaryCta: { label: "Request a free estimate", href: "#lead-form" },
    secondaryCta: {
      label: "Or read about our bathroom remodeling services",
      href: "/services/bathroom-remodeling-seattle",
    },
  },
};

bathroomRemodelLanding.seo.images = bathroomRemodelLanding.gallery.images;
