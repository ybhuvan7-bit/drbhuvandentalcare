const BASE_URL = "https://www.drbhuvandentalcare.com";

export default function sitemap() {
  const pages = [
    "",

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

    // Root Canal Pages
    "/root-canal-treatment-yousufguda",
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1.0 : 0.9,
  }));
}