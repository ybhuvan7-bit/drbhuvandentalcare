const BASE_URL = "https://www.drbhuvandentalcare.com";

export default function sitemap() {
  const pages = [
    // ================= HOME =================
    "",

    // ================= ARTICLES =================
    "/articles",

    // ================= DENTIST / LOCATION PAGES =================
    "/dentist-in-ameerpet",
    "/dentist-in-navodaya-colony",
    "/dentist-in-sri-krishna-nagar",
    "/dentist-in-yousufguda",
    "/tamil-speaking-dentist-hyderabad",

    // ================= DENTAL IMPLANT PAGES =================
    "/dental-implants-ameerpet",
    "/dental-implants-madhura-nagar",
    "/dental-implants-punjagutta",
    "/dental-implants-sr-nagar",
    "/dental-implants-srinagar-colony",
    "/dental-implants-yousufguda",

    // ================= DENTAL TREATMENTS - YOUSUFGUDA =================
    "/dental-treatments-yousufguda",

    // ================= GUM / PERIODONTAL =================
    "/gum-bleeding-treatment-yousufguda",
    "/gum-disease-treatment-ameerpet",
    "/gum-treatment-yousufguda",

    // ================= LASER DENTISTRY =================
    "/laser-dentistry-yousufguda",

    // ================= ROOT CANAL =================
    "/root-canal-treatment-ameerpet",
    "/root-canal-treatment-yousufguda",

    // ================= TEETH CLEANING =================
    "/teeth-cleaning-ameerpet",
    "/teeth-cleaning-yousufguda",

    // ================= TOOTH / WISDOM TOOTH =================
    "/tooth-pain-treatment-yousufguda",
    "/wisdom-tooth-treatment-yousufguda",

    // ================= OTHER TREATMENTS =================
    "/bad-breath-treatment-yousufguda",
    "/sensitive-teeth-treatment-yousufguda",

    // ================= COSMETIC DENTISTRY =================
    "/cosmetic-dentistry-yousufguda",
    "/smile-makeover-ameerpet",
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1.0 : 0.9,
  }));
}