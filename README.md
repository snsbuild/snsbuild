# Read Me

## Home

## Free Estimate

`/estimate`

## Services (Index)

`/services`

- Bathroom Remodeling
- Condo Remodeling
- Deck / Exterior
- Kitchen Remodeling
- Full House Remodel

This page will just be a way to get to the specific service pages.

- Hero with section cards
- Process
- Promise
- CTA

### Show (individual service)

`/services/:name`

- Feature with Testimonial
- Gallery
- Specific Services (Sub-Service Highlights) We Offer
- CTA (Light Blue)
- Featured Story (Previous work summary)
- Previous work gallery, this is a collection of different
- Process
- Promise
- CTA (Dark Blue)

So the feature with testimonial + Gallery will be the shared images from the in depth portfolio example. The bento grid will be the shallow examples of work done.

```js
const subServices = [
{
  subService: "Full bathroom remodels"
  description: "Complete tear-outs and rebuilds that update layout, finishes, and functionality from top to bottom."
},
{
  subService: "Small bathroom renovations",
  description: "Smart upgrades designed to make compact bathrooms feel more open, efficient, and comfortable."
},
{
  subService: "Condo and apartment bathrooms",
  description: "Bathroom remodels coordinated with HOA rules, building access, and approved work hours."
},
{
  subService: "Shower remodels & walk-in showers",
  description: "Custom showers built with proper waterproofing, modern tile, and clean, accessible designs."
},
{
  subService: "Tub replacements & conversions",
  description: "Replace worn tubs or convert to showers to improve usability and modernize the space."
},
{
  subService: "Tile flooring & shower surrounds",
  description: "Durable, professionally installed tile that looks great and stands up to daily use."
},
{
  subService: "Vanities, lighting, and ventilation upgrades",
  description: "Updated fixtures and airflow improvements that enhance comfort, visibility, and moisture control."
},
{
  subService: "Waterproofing and code-compliant installations",
  description: "Every bathroom is built to meet current codes with proper waterproofing behind the finishes."
}
]
```

We have 11 services offered on the services page- we are going to need 11 previous work pages.

```js
const coreServices = [
    {
        title: "Modern Designs, Expert Craftsmanship",
        linkText: "Kitchen Remodeling",
        href: "/services/kitchen-remodeling-seattle",
        imgSrc: "public/images/kitchen/ballard-kitchen-1.jpg",
        imgAlt: "Modern kitchen remodel in Seattle with white cabinets and quartz countertops",
    },
    {
        title: "Luxury Bathrooms, Functional Design",
        linkText: "Bathroom Remodeling",
        href: "/services/bathroom-remodeling-seattle",
        imgSrc: "public/images/bathroom/ravenna-bath-2.jpg",
        imgAlt: "Contemporary bathroom remodel in Seattle with walk-in shower and custom tile",
    },
    {
        title: "Complete Home Transformations",
        linkText: "Full Home Remodeling",
        href: "/services/full-home-remodeling-seattle",
        imgSrc: "public/images/full-home/queen-anne-remodel-1.jpg",
        imgAlt: "Open concept full house remodel in Seattle",
    },
    {
        title: "Beautiful Outdoor Living Spaces",
        linkText: "Decks & Exterior",
        href: "/services/deck-builder-seattle",
        imgSrc: "public/images/backyard/sammamish-deck-2.jpg",
        imgAlt: "Custom composite deck installation in Seattle backyard",
    },
    {
        title: "Accessory Dwelling Units Built Right",
        linkText: "ADU Construction",
        href: "/services/adu-builder-seattle",
        imgSrc: "public/images/adu/fremont-adu-1.jpg",
        imgAlt: "Detached backyard ADU in Seattle with modern modern design",
    },
];

const addOnServices = [
    {
        title: "Expand Your Home with Seamless Additions",
        linkText: "Home Additions",
        href: "/services/home-additions-seattle",
        imgSrc: "public/images/additions/greenlake-addition-1.jpg",
        imgAlt: "Second story home addition in Seattle residential neighborhood",
    },
    {
        title: "Transform Unused Space into Livable Areas",
        linkText: "Basement Remodeling",
        href: "/services/basement-remodeling-seattle",
        imgSrc: "public/images/basement/capitol-hill-basement-1.jpg",
        imgAlt: "Finished basement remodel in Seattle with family room and lighting",
    },
    {
        title: "Durable, Beautiful Flooring Installation",
        linkText: "Flooring Installation",
        href: "/services/flooring-installation-seattle",
        imgSrc: "public/images/flooring/hardwood-install-1.jpg",
        imgAlt: "Hardwood flooring installation in Seattle home interior",
    },
    {
        title: "Energy-Efficient Windows & Custom Doors",
        linkText: "Windows & Doors",
        href: "/services/window-door-replacement-seattle",
        imgSrc: "public/images/exterior/window-replacement-1.jpg",
        imgAlt: "Energy-efficient window replacement in Seattle home",
    },
    {
        title: "Reliable Roofing & Structural Upgrades",
        linkText: "Roofing Services",
        href: "/services/roofing-contractor-seattle",
        imgSrc: "public/images/roofing/seattle-roof-replacement-1.jpg",
        imgAlt: "Residential roof replacement in Seattle neighborhood",
    },
    {
        title: "Garage Conversions & Custom Builds",
        linkText: "Garage Remodeling",
        href: "/services/garage-conversion-seattle",
        imgSrc: "public/images/garage/garage-conversion-1.jpg",
        imgAlt: "Garage conversion into living space in Seattle",
    },
];
```

5 shallow examples, and 1 in-depth example per service page.

In depth example:

- The testimonial should either be one person, or two people with the same last name indicating a partner/spouse.
- gallery should be at least 5 photos
- story should be a good length description

```js
{
eyebrow: "PREVIOUS WORK • BATHROOM REMODEL",
headline: "Seattle Center Bathroom Remodel",
subheadline: "A dated bathroom reimagined into a bright, spa-like retreat with premium finishes and smart design.",
highlights: [
"Custom tile shower with frameless glass",
"Heated tile flooring for year-round comfort",
"Improved layout and built-in storage",
"Upgraded plumbing and lighting fixtures",
],
tags: ["plumbing", "lighting", "storage", "tile", "shower", "bathroom", "remodel"],
story: "In a charming home near Seattle Center, we transformed a dated bathroom into a modern spa-like retreat. This project included custom tile work, a walk-in shower with frameless glass, heated floors, and streamlined storage — all designed to maximize comfort and light in a compact urban home.",
gallery: [
  {
    imgSrc: "/images/bathroom-remodel/seattle-center-1.jpg", imgAlt: "some text"
  },
  {
    imgSrc: "/images/bathroom-remodel/seattle-center-1.jpg", imgAlt: "some text"
  },
  {
    imgSrc: "/images/bathroom-remodel/seattle-center-1.jpg", imgAlt: "some text"
  },
  {
    imgSrc: "/images/bathroom-remodel/seattle-center-1.jpg", imgAlt: "some text"
  },
  {
    imgSrc: "/images/bathroom-remodel/seattle-center-1.jpg", imgAlt: "some text"
  },
    {
    imgSrc: "/images/bathroom-remodel/seattle-center-1.jpg", imgAlt: "some text"
  },
]
testimonials: [
{
        name: "Lauren B.",
        neighborhood: "Green Lake",
        projectType: "Bathroom Remodel",
        rating: 5,
        quote:
          "It feels like a brand-new house. The layout change was life-changing.",
      },
      {
        name: "Chris B.",
        neighborhood: "Seattle Center",
        projectType: "Bathroom Remodel",
        rating: 5,
        quote:
          "They managed everything smoothly from permits to final finishes.",
      },
],
url: "/portfolio/bathroom-remodel-green-lake"
}
```

Shallow example:

```js
{
subject: "Green Lake primary bathroom remodel",
title: "From dated and worn to clean and modern",
description: "The original bathroom showed signs of water damage and aging materials. We rebuilt the space with proper waterproofing, new tile, and updated fixtures for a long-lasting, low-maintenance finish.", 
imgSrc: "/images/bathroom/greenlake-remodel.jpg",
imgAlt: "tiled floors with modern glass shower"
testimonial: {
        name: "Lauren B.",
        neighborhood: "Green Lake",
        projectType: "Bathroom Remodel",
        rating: 5,
        quote:
          "It feels like a brand-new house. The layout change was life-changing.",
      }
}

```

## Portfolio (Index)

This is going to mirror our `services` page- each portfolio is an in-depth example.

`/portfolio`

- Tags
- Card Gallery for different highlighted stories
- CTA (Light Blue)
- Card Gallery for different highlighted stories
- CTA (Dark Blue)

### Show (individual stories)

`/portfolio/:id`

- Summary
- CTA (Light Blue)
- Gallery
- Project Highlights
- Story
- Testimonial
- Tags
- CTA (Dark Blue)

### Previous Work Tags

`skip for now`
What do we really want with the tags?

The Tags should be service specific, if we want to add more stories it would make sense, but for MVP just having the previous work highlight the specific service.

## About

Need full work
