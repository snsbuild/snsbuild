import type { APIRoute } from "astro";
// @ts-ignore -- Node built-in; the project doesn't install @types/node.
import { execFileSync } from "node:child_process";
import { portfolio, services } from "../data";
import { portfolioCollections } from "../data/portfolio-collections";
import { indexableLandingPages } from "../data/landing";

const SITE = "https://sns.build";

type Entry = { url: string; priority: string; changefreq: string };

/**
 * <lastmod> comes from git: the date of the last commit that touched the
 * page's own source file (its data module, or its .astro page). Google only
 * trusts lastmod when it tracks real changes, so there is no hand-kept date
 * to go stale, and no "today" stamped on every URL at build time.
 *
 * If git history is missing or shallow (every file would look equally new),
 * lastmod is left out rather than guessed.
 */
const dataModules = import.meta.glob("../data/**/*.ts", { eager: true });

// URL path -> source files that define that page.
const sourcesByPath = new Map<string, string[]>();
const addSource = (path: string, file: string) =>
  sourcesByPath.set(path, [...(sourcesByPath.get(path) ?? []), file]);

for (const [modulePath, mod] of Object.entries(dataModules)) {
  const file = modulePath.replace(/^\.\.\//, "src/");
  for (const value of Object.values(mod as Record<string, unknown>)) {
    const path = (value as { path?: unknown } | null)?.path;
    if (typeof path === "string") addSource(path, file);
  }
}
for (const [path, file] of [
  ["/", "src/pages/index.astro"],
  ["/services/", "src/pages/services/index.astro"],
  ["/portfolio/", "src/pages/portfolio/index.astro"],
  ["/estimate/", "src/pages/estimate.astro"],
  ["/about/", "src/pages/about.astro"],
  ["/contact/", "src/pages/contact.astro"],
  ["/privacy/", "src/pages/privacy.astro"],
]) {
  addSource(path, file);
}

const git = (...args: string[]) =>
  execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();

const gitUsable = (() => {
  try {
    return git("rev-parse", "--is-shallow-repository") === "false";
  } catch {
    return false;
  }
})();

const lastmodFor = (path: string): string | undefined => {
  if (!gitUsable) return undefined;
  const dates = (sourcesByPath.get(path) ?? [])
    .map((file) => {
      try {
        return git("log", "-1", "--format=%cs", "--", file);
      } catch {
        return "";
      }
    })
    .filter(Boolean)
    .sort();
  return dates.at(-1);
};

export const GET: APIRoute = () => {
  const staticPages: Entry[] = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/services/", priority: "0.9", changefreq: "monthly" },
    { url: "/portfolio/", priority: "0.9", changefreq: "monthly" },
    { url: "/estimate/", priority: "0.9", changefreq: "monthly" },
    { url: "/about/", priority: "0.6", changefreq: "monthly" },
    { url: "/contact/", priority: "0.7", changefreq: "monthly" },
    { url: "/privacy/", priority: "0.2", changefreq: "yearly" },
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
    .map((entry) => {
      const lastmod = lastmodFor(entry.url);
      return `
    <url>
      <loc>${SITE}${entry.url}</loc>${
        lastmod
          ? `
      <lastmod>${lastmod}</lastmod>`
          : ""
      }
      <changefreq>${entry.changefreq}</changefreq>
      <priority>${entry.priority}</priority>
    </url>`;
    })
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
