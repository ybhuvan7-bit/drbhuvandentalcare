const BASE_URL = "https://www.drbhuvandentalcare.com";

export default function sitemap() {
  const pages = [
    "",

    // Articles
    "/articles",

    // Dentist Pages
    "/dentist-in-ameerpet",

    // Dental Implant Pages
    "/dental-implants-ameerpet",
    "/dental-implants-yousufguda",
    "/dental-implants-sr-nagar",
    "/dental-implants-madhura-nagar",
    "/dental-implants-punjagutta",
    "/dental-implants-srinagar-colony",
    "/dentist-in-navodaya-colony",
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1.0 : 0.9,
  }));
}