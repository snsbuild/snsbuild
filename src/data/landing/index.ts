import type { LandingPage } from "../../types/entity-types";
import { deckBuilderLanding } from "./deck-builder";
import { shedBuilderLanding } from "./shed-builder";

export { deckBuilderLanding, shedBuilderLanding };

export const landingPages: LandingPage[] = [
  deckBuilderLanding,
  shedBuilderLanding,
];

/** Landing pages that should appear in the sitemap. */
export const indexableLandingPages = () =>
  landingPages.filter((p) => !(p.robots ?? "").includes("noindex"));
