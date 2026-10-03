import type { LandingPage } from "../../types/entity-types";
import { deckBuilderLanding } from "./deck-builder";
import { shedBuilderLanding } from "./shed-builder";
import { kitchenRemodelLanding } from "./kitchen-remodel";
import { bathroomRemodelLanding } from "./bathroom-remodel";
import { flooringLanding } from "./flooring";
import { windowsDoorsLanding } from "./windows-doors";
import { customBuiltInsLanding } from "./custom-built-ins";

export {
  deckBuilderLanding,
  shedBuilderLanding,
  kitchenRemodelLanding,
  bathroomRemodelLanding,
  flooringLanding,
  windowsDoorsLanding,
  customBuiltInsLanding,
};

export const landingPages: LandingPage[] = [
  deckBuilderLanding,
  shedBuilderLanding,
  kitchenRemodelLanding,
  bathroomRemodelLanding,
  flooringLanding,
  windowsDoorsLanding,
  customBuiltInsLanding,
];

/** Landing pages that should appear in the sitemap. */
export const indexableLandingPages = () =>
  landingPages.filter((p) => !(p.robots ?? "").includes("noindex"));
