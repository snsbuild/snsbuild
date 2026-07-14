import type { ImageRef } from "../types/content-types";
import type { MarketingPage } from "../types/entity-types";

/**
 * Optional "with installation" variant for a product.
 * This is a SEPARATE purchase from the delivery-only product, so it needs its
 * own Stripe Payment Link whose amount = product price + flat installation fee.
 * (Tip: build that link with two line items — the product + an "Installation"
 * product — so Stripe's checkout shows an itemized breakdown.)
 */
export type InstallationOption = {
  /** Total display price WITH installation, e.g. "$399". Must match the link amount. */
  priceDisplay: string;
  /** Stripe Payment Link for the product-plus-installation bundle. Leave "" for "Coming soon". */
  paymentLink: string;
};

export type ShopProduct = {
  id: string;
  name: string;
  description: string;
  /** Base (delivery-only) display price, e.g. "$249". Must match the Stripe Payment Link amount. */
  priceDisplay: string;
  image: ImageRef;
  /**
   * Stripe Payment Link URL (https://buy.stripe.com/...) for the delivery-only product.
   * Create one per product in the Stripe Dashboard → Payment Links, then paste it here.
   * Leave as "" and the card renders as "Coming soon" (no checkout) until you add it.
   */
  paymentLink: string;
  /**
   * When present, the card shows a "Delivery only / With installation" toggle and
   * the Buy button swaps to this variant's price + Payment Link when selected.
   * Omit for products that aren't installed (e.g. furniture).
   */
  installation?: InstallationOption;
  /** Optional small badge shown on the card, e.g. "Installation available". */
  badge?: string;
};

// Phase 0 catalog: hand-curated products checked out via Stripe-hosted Payment Links.
// No backend, no inventory — edit this list to add/remove products.
// Delivery model: local delivery across Greater Seattle or free pickup, with the
// shipping address collected on Stripe's checkout (configure that on each link).
//
// NOTE: the links below are Stripe TEST-MODE Payment Links (buy.stripe.com/test_...).
// They charge nothing real. Flat installation add-on is $100. When going live,
// swap each paymentLink for its live-mode equivalent and re-add /shop to the nav
// (Header.astro) and sitemap (sitemap.xml.ts) + remove the noindex in shop.astro.
export const shopProducts: ShopProduct[] = [
  {
    id: "golden-gardens-bed",
    name: "Golden Gardens Bed",
    description:
      "Weather-tight cedar raised bed sized for smaller yards and patios — assembled and ready to plant.",
    priceDisplay: "$295",
    image: {
      src: "/images/shop/golden-gardens-bed.webp",
      alt: "Golden Gardens cedar raised bed",
    },
    paymentLink: "https://buy.stripe.com/test_cNi4gzgo62d56z44in7AI00",
    installation: {
      priceDisplay: "$395",
      paymentLink: "https://buy.stripe.com/test_3cI4gz7RA5phaPk3ej7AI03",
    },
    badge: "Installation available",
  },
  {
    id: "sauvie-garden-box",
    name: "Sauvie Garden Box",
    description:
      "Deep cedar garden box with a slatted base for drainage — ideal for herbs, greens, and root vegetables.",
    priceDisplay: "$275",
    image: {
      src: "/images/shop/sauvie-garden-box.webp",
      alt: "Sauvie cedar garden box",
    },
    paymentLink: "https://buy.stripe.com/test_4gM8wP2xg5ph8Hc5mr7AI01",
    installation: {
      priceDisplay: "$375",
      paymentLink: "https://buy.stripe.com/test_8x2eVdb3M1910aGdSX7AI04",
    },
    badge: "Installation available",
  },
  {
    id: "u-district-raised-garden-bed",
    name: "U-District Raised Garden Bed",
    description:
      "Extra-large 4×8 cedar bed built for serious growers, with reinforced corners for years of use.",
    priceDisplay: "$375",
    image: {
      src: "/images/shop/u-district-raised-garden-bed.webp",
      alt: "U-District 4×8 cedar raised garden bed",
    },
    paymentLink: "https://buy.stripe.com/test_bJe9ATfk22d59Lg8yD7AI02",
    installation: {
      priceDisplay: "$475",
      paymentLink: "https://buy.stripe.com/test_4gM5kD6Nw5ph0aGg157AI05",
    },
    badge: "Installation available",
  },
];

export const shopPage: MarketingPage = {
  kind: "marketing",
  path: "/shop",
  seo: {
    title: "Shop | Saddle and Spur Construction",
    description:
      "Shop cedar garden beds, outdoor furniture, and landscape lighting from Saddle and Spur Construction. Local delivery and installation across Greater Seattle.",
    keywords: [
      "raised garden beds seattle",
      "outdoor furniture seattle",
      "landscape lighting seattle",
    ],
    ogImage: {
      src: "/images/shop/golden-gardens-bed.jpg",
      alt: "Shop outdoor goods",
    },
    images: [],
  },
  faqs: [],
};
