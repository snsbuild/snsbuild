import type { APIRoute } from "astro";
import { portfolio, services } from "../data";
import { portfolioCollections } from "../data/portfolio-collections";
import { indexableLandingPages } from "../data/landing";

const SITE = "https://sns.build";

type Entry = { url: string; priority: string; changefreq: string };

export const GET: APIRoute = () => {
  const staticPages: Entry[] = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/services", priority: "0.9", changefreq: "monthly" },
    { url: "/portfolio", priority: "0.9", changefreq: "monthly" },
    { url: "/estimate", priority: "0.9", changefreq: "monthly" },
    { url: "/about", priority: "0.6", changefreq: "monthly" },
    { url: "/contact", priority: "0.7", changefreq: "monthly" },
    { url: "/shop", priority: "0.5", changefreq: "monthly" },
    { url: "/privacy", priority: "0.2", changefreq: "yearly" },
  ];

  const serviceUrls: Entry[] = services.map((s) => ({
    url: s.path,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const collectionUrls: Entry[] = portfolioCollections.map((c) => ({
    url: c.path,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const portfolioUrls: Entry[] = portfolio.map((p) => ({
    url: p.path,
    priority: "0.7",
    changefreq: "monthly",
  }));

  // Paid landing pages are listed only while they're set to be indexed.
  const landingUrls: Entry[] = indexableLandingPages().map((p) => ({
    url: p.path,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const allEntries = [
    ...staticPages,
    ...serviceUrls,
    ...collectionUrls,
    ...portfolioUrls,
    ...landingUrls,
  ];

  const urlsXml = allEntries
    .map(
      (entry) => `
    <url>
      <loc>${SITE}${entry.url}</loc>
      <changefreq>${entry.changefreq}</changefreq>
      <priority>${entry.priority}</priority>
    </url>`,
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlsXml}
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
