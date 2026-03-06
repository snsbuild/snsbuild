import type {
  CollectionPage,
  Entity,
  MarketingPage,
} from "../types/entity-types";
import { buildSeo, safeJsonLdString } from "./seo-builder";
import { toSeoPage } from "./seo-normalize";

export function buildSeoFrom(
  input: Entity | CollectionPage<any> | MarketingPage,
) {
  const page = toSeoPage(input);
  return buildSeo(page);
}

export { safeJsonLdString };
