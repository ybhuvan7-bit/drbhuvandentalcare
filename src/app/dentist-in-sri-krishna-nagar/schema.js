export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],

  "@id": "https://www.drbhuvandentalcare.com/#dentist",

  name: "Dr. Bhuvan's Dental Laser & Implant Centre",

  image: "https://www.drbhuvandentalcare.com/doctor.webp",

  url: "https://www.drbhuvandentalcare.com",

  telephone: "+91-8074528763",

  logo: "https://www.drbhuvandentalcare.com/logo.png",

  priceRange: "₹₹",

  founder: {
    "@type": "Person",
    name: "Dr. Bhuvanesh Yanamala",
  },

  sameAs: [
    "https://maps.app.goo.gl/Fiow6zV9W17xnxR47",
  ],

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar",
    addressLocality: "Ameerpet",
    addressRegion: "Telangana",
    postalCode: "500073",
    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.43419236482376,
    longitude: 78.43360152034505,
  },

  hasMap:
    "https://maps.app.goo.gl/Fiow6zV9W17xnxR47",

  areaServed: [
    "Sri Krishna Nagar",
    "Navodaya Colony",
    "Ameerpet",
    "Yousufguda",
    "SR Nagar",
    "Madhura Nagar",
    "Punjagutta",
    "Srinagar Colony",
    "Banjara Hills",
    "Jubilee Hills",
    "Shaikpet",
    "Hyderabad",
  ],

  medicalSpecialty: [
    "Periodontics",
    "Dental Implants",
    "Laser Dentistry",
    "Cosmetic Dentistry",
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "14:00",
    },

    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "16:00",
      closes: "21:00",
    },

    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],

  paymentAccepted: [
    "Cash",
    "Credit Card",
    "Debit Card",
    "UPI",
  ],

  currenciesAccepted: "INR",

  availableLanguage: [
    "English",
    "Telugu",
    "Hindi",
    "Tamil",
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "130",
    bestRating: "5",
    worstRating: "1",
  },
};


export const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.drbhuvandentalcare.com",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "Dentist in Sri Krishna Nagar",
      item:
        "https://www.drbhuvandentalcare.com/dentist-in-sri-krishna-nagar",
    },
  ],
};


export const servicesSchema = {
  "@context": "https://schema.org",

  "@type": "OfferCatalog",

  name: "Dental Services",

  itemListElement: [
    {
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",
        name: "Dental Implants",
        serviceType: "Dental Implant Treatment",
      },
    },

    {
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",
        name: "Laser Dentistry",
        serviceType: "Laser Dental Treatment",
      },
    },

    {
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",
        name: "Root Canal Treatment",
        serviceType: "Endodontic Treatment",
      },
    },

    {
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",
        name: "Teeth Cleaning",
        serviceType: "Professional Dental Cleaning",
      },
    },

    {
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",
        name: "Gum Disease Treatment",
        serviceType: "Periodontal Treatment",
      },
    },

    {
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",
        name: "Smile Makeover",
        serviceType: "Cosmetic Dentistry",
      },
    },
  ],
};


export const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id":
    "https://www.drbhuvandentalcare.com/#organization",

  name: "Dr. Bhuvan's Dental Laser & Implant Centre",

  url: "https://www.drbhuvandentalcare.com",

  logo: "https://www.drbhuvandentalcare.com/logo.png",

  image: "https://www.drbhuvandentalcare.com/doctor.webp",

  telephone: "+91-8074528763",

  email: "drbhuvandentalcare@gmail.com",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar",
    addressLocality: "Ameerpet",
    addressRegion: "Telangana",
    postalCode: "500073",
    addressCountry: "IN",
  },

  sameAs: [
    "https://maps.app.goo.gl/Fiow6zV9W17xnxR47",
  ],
};


export const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "Who is the best dentist in Sri Krishna Nagar?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Dr. Bhuvan's Dental Laser & Implant Centre provides comprehensive dental care including dental implants, laser dentistry, gum treatment, root canal treatment, teeth cleaning and cosmetic dentistry using modern technology and personalized care.",
      },
    },

    {
      "@type": "Question",

      name: "Do you provide dental implants?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. We provide single tooth implants, multiple implants and full mouth dental implant solutions with personalized treatment planning.",
      },
    },

    {
      "@type": "Question",

      name: "Is laser dentistry painless?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Laser dentistry is minimally invasive for many procedures and may reduce bleeding, swelling and recovery time depending on the treatment.",
      },
    },

    {
      "@type": "Question",

      name: "Do I need an appointment before visiting?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "We recommend booking an appointment in advance so we can provide dedicated consultation time and minimize waiting.",
      },
    },

    {
      "@type": "Question",

      name: "Where is your clinic located?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Dr. Bhuvan's Dental Laser & Implant Centre is located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Hyderabad and welcomes patients from Sri Krishna Nagar, Navodaya Colony, Ameerpet and nearby areas.",
      },
    },
  ],
};