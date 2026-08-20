const BASE_URL = "https://www.drbhuvandentalcare.com";

export default function sitemap() {
  const pages = [
    "",

    // Main Treatment Hub
    "/dental-treatments-yousufguda",

    // Articles
    "/articles",

    // Dentist Pages
    "/dentist-in-ameerpet",
    "/dentist-in-navodaya-colony",
    "/dentist-in-sri-krishna-nagar",
    "/tamil-speaking-dentist-hyderabad",

    // Dental Implant Pages
    "/dental-implants-ameerpet",
    "/dental-implants-yousufguda",
    "/dental-implants-sr-nagar",
    "/dental-implants-madhura-nagar",
    "/dental-implants-punjagutta",
    "/dental-implants-srinagar-colony",

    // Teeth Cleaning Pages
    "/teeth-cleaning-ameerpet",
    "/teeth-cleaning-yousufguda",

    // Root Canal
    "/root-canal-treatment-yousufguda",

    // Gum Treatment
    "/gum-treatment-yousufguda",

    // Search Intent Pages
    "/tooth-pain-treatment-yousufguda",
    "/wisdom-tooth-treatment-yousufguda",
    "/bad-breath-treatment-yousufguda",
    "/sensitive-teeth-treatment-yousufguda",
    "/gum-bleeding-treatment-yousufguda",
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1.0 : 0.9,
  }));
}