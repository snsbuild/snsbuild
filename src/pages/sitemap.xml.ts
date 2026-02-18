import type { APIRoute } from "astro";
import { servicePages } from "../data/services";
import { portfolioProjects } from "../data/portfolio-projects";

const SITE = "https://sns.build";

export const GET: APIRoute = () => {
    const staticPages = [
        "/",
        "/about",
        "/contact",
        "/services",
        "/portfolio",
        "/privacy",
        "/terms",
    ];

    const serviceUrls = servicePages.map((s) => s.slug);
    const portfolioUrls = portfolioProjects.map((p) => p.url);

    const allUrls = [...staticPages, ...serviceUrls, ...portfolioUrls];

    const urlsXml = allUrls
        .map(
            (url) => `
    <url>
      <loc>${SITE}${url}</loc>
      <changefreq>monthly</changefreq>
      <priority>${url === "/" ? "1.0" : "0.7"}</priority>
    </url>`
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
