import type { PreviousWork } from "../types";
import { previousWorks } from "../data/previous-work";

export function getAllTags(items: PreviousWork[]) {
  const set = new Set<string>();
  for (const item of items) for (const t of item.tags) set.add(t);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function filterByTag(items: PreviousWork[], tag?: string | null) {
  if (!tag) return items;
  const normalized = tag.trim().toLowerCase();
  return items.filter((p) => p.tags.map((t) => t.toLowerCase()).includes(normalized));
}