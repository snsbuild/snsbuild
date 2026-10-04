export const phoneDisplay = "(206) 334-3825";
export const phoneHref = "+12063343825";
export const email = "contact@sns.build";
export const license = "SADDLSC757BW"

/**
 * Business hours — shown on the estimate form and /contact, and published in
 * the LocalBusiness schema. Keep in sync with the Google Business Profile.
 */
export const hours = {
  display: "Monday–Friday, 9am–5pm",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "09:00",
  closes: "17:00",
};

export const googleAdsId = "AW-18410415934";

/**
 * Conversion labels from Google Ads › Goals › Conversions › Tag setup.
 * Paste the label that follows the slash in `AW-XXXXXXXX/LABEL`.
 * Leave a value empty and that conversion simply never fires — no errors.
 */
export const adsConversionLabels = {
  leadForm: "",
  phoneCall: "",
};


/**
 * Public profiles for the business (Google Business Profile, Yelp, Houzz, BBB…).
 * These become `sameAs` on the LocalBusiness schema, which helps Google tie the
 * site to those listings. Add full URLs as profiles go live.
 */
export const businessProfiles: string[] = [
  // Google Business Profile (the cid= form is Google's stable listing URL)
  "https://www.google.com/maps?cid=4401870428113340639",
];
