import type {
  CollectionPage,
  Entity,
  LandingPage,
  MarketingPage,
} from "../types/entity-types";
import { buildSeo, safeJsonLdString } from "./seo-builder";
import { toSeoPage, type SeoOptions } from "./seo-normalize";

export function buildSeoFrom(
  input: Entity | CollectionPage<any> | LandingPage | MarketingPage,
  options: SeoOptions = {},
) {
  const page = toSeoPage(input, options);
  return buildSeo(page);
}

export { safeJsonLdString };
export type { SeoOptions };
