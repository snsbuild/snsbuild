Goal

Create a small, conversion-focused marketing site for a licensed Saddle & Spur Construction targeting small–medium residential projects. Site must be fast, mobile-first, and optimized for phone calls + estimate requests.

Tech
 • Framework: Astro
 • Styling: Tailwind
 • Forms: Netlify Forms
 • Analytics: add GA4 (placeholder ID)

⸻

Sitemap & Routes

Primary Navigation
 • / Home
 • /services Services Overview
 • /services/kitchen-remodeling-seattle
 • /services/bathroom-remodeling-seattle
 • /services/condo-remodeling-seattle
 • /services/small-home-remodels-seattle
 • /services/decks-exterior-seattle
 • /portfolio Portfolio
 • /about About
 • /contact Request Estimate

Footer Links
 • Repeat primary nav
 • Add: Privacy Policy (simple placeholder page optional: /privacy)

⸻

Astro File Structure (recommended)

src/
  layouts/
    BaseLayout.astro
  components/
    Header.astro
    Footer.astro
    CTA.astro
    ServiceCard.astro
    ProjectGallery.astro
    TestimonialStrip.astro
    FAQ.astro (optional)
  pages/
    index.astro
    services/
      index.astro
      kitchen-remodeling-seattle.astro
      bathroom-remodeling-seattle.astro
      condo-remodeling-seattle.astro
      small-home-remodels-seattle.astro
      decks-exterior-seattle.astro
    previous-work.astro
    about.astro
    contact.astro
    privacy.astro (optional)
  content/
    projects/ (optional content collections)
    testimonials/ (optional)
public/
  images/
    projects/
    icons/

⸻

Sitewide Requirements

Branding & UI
 • Clean, modern, “premium residential” (Seattle audience)
 • Mobile-first; big tap targets
 • Sticky header optional

Global CTA
 • Phone number visible in header on all pages (click-to-call on mobile)
 • Primary buttons: “Request Estimate” and “Call Now”
 • Secondary CTA on each page bottom: same buttons

Trust Signals (sitewide)
 • Display: “Licensed & Insured”
 • Display WA contractor license # (provided by owner)
 • Social proof: review stars/testimonials where available
 • Service area: Seattle + nearby neighborhoods (Ballard, Queen Anne, Capitol Hill, Green Lake, West Seattle, Beacon Hill, Shoreline)

SEO / Meta
 • Unique title + meta description per page
 • OpenGraph tags (title, description, image)
 • Canonical URLs
 • Sitemap.xml + robots.txt
 • Schema:
 • LocalBusiness/Contractor on homepage
 • Service schema on service pages (simple)

Performance
 • Lighthouse-friendly (optimize images, lazy-load galleries)
 • Use responsive images

⸻

Page-by-Page Content Outline

1) Home (/)

Purpose: convert general visitors + route to service pages
Sections:
 • Hero: “Saddle & Spur Construction for Kitchens, Baths, Condos & Small Remodels”
 • Primary CTA buttons (Call / Request Estimate)
 • Services grid (links to service pages)
 • Proof strip: license, insured, years, review snippet
 • Featured projects (3–6 images)
 • “How it works” (3 steps)
 • Neighborhoods served
 • Final CTA

⸻

1) Services Overview (/services)

Purpose: directory + quick routing
Sections:
 • Short intro
 • Service cards linking to each service page
 • Final CTA

⸻

1) Service Pages (/services/...)

Create 5 pages listed in sitemap. Each follows the same structure.

Service Page Template Sections:
 • Hero: “[Service] in Seattle” + 1–2 sentence value prop
 • CTAs: Call / Request Estimate
 • “Is this a fit?” bullets (what you do / don’t do)
 • Typical project range + minimum project size line (owner provides)
 • Gallery / featured projects relevant to service
 • Process (Consult → Estimate → Build → Walkthrough)
 • FAQs (optional but good for condo page: HOAs, permits, scheduling)
 • Testimonials (2–3)
 • Neighborhoods served
 • Final CTA

Page-specific notes:
 • Condo Remodeling: call out HOA coordination, permits, working hours, noise rules, elevator protection.
 • Decks/Exterior: call out weather timing, materials, railings, waterproofing as applicable.

⸻

1) Previous Work (/portfolio)

Purpose: visual proof
Requirements:
 • Gallery with project cards (before/after if available)
 • Each card: title, neighborhood, short scope line
 • Optional: filter by type (Kitchen/Bath/Condo/Deck)

⸻

1) About (/about)

Purpose: trust
Sections:
 • Owner/company story (short)
 • Values (communication, schedule, cleanliness)
 • License/insurance block
 • Team photo or owner photo (strongly recommended)
 • Final CTA

⸻

1) Contact (/contact)

Purpose: conversion
Form Fields (keep short):
 • Name
 • Phone
 • Email
 • Address / neighborhood (optional)
 • Project type (dropdown)
 • Short description
 • Budget range (optional but recommended to qualify)
 • Timeline (optional)
 • Upload photos (optional)

Also include:
 • Click-to-call
 • Service area reminder
 • Confirmation message after submit

⸻

Copy Rules
 • Don’t keyword-stuff
 • Use Seattle neighborhood references naturally
 • Keep paragraphs short, skimmable
 • Focus on proof + clarity

⸻

Internal Linking Rules
 • Home → each service page
 • Services overview → each service page
 • Each service page → Contact
 • Previous Work → relevant service pages
 • Footer everywhere

⸻

Deliverables

 1. Implement all pages in Astro per sitemap
 2. Reusable components for Header/Footer/CTA/ServiceCard/Gallery
 3. Basic SEO meta + schema
 4. Contact form wired and tested
 5. Mobile QA (iPhone/Android widths)
 6. Provide a simple README: how to run/build/deploy

⸻

Acceptance Criteria (Definition of Done)
 • Navigation matches sitemap and all links work
 • Phone and “Request Estimate” CTAs appear on every page
 • Each service page is unique, not boilerplate-only
 • Loads fast; images optimized; responsive layout
 • Contact form submissions received successfully
 • Titles/descriptions set per page
