import type { LandingPage } from "../../types/entity-types";
import { deckBuilderLanding } from "./deck-builder";
import { shedBuilderLanding } from "./shed-builder";
import { kitchenRemodelLanding } from "./kitchen-remodel";
import { bathroomRemodelLanding } from "./bathroom-remodel";
import { flooringLanding } from "./flooring";
import { windowsDoorsLanding } from "./windows-doors";

export {
  deckBuilderLanding,
  shedBuilderLanding,
  kitchenRemodelLanding,
  bathroomRemodelLanding,
  flooringLanding,
  windowsDoorsLanding,
};

export const landingPages: LandingPage[] = [
  deckBuilderLanding,
  shedBuilderLanding,
  kitchenRemodelLanding,
  bathroomRemodelLanding,
  flooringLanding,
  windowsDoorsLanding,
];

/** Landing pages that should appear in the sitemap. */
export const indexableLandingPages = () =>
  landingPages.filter((p) => !(p.robots ?? "").includes("noindex"));
