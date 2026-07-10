import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Dr. Bhuvan's Dental Laser & Implant Centre",
    template: "%s | Dr. Bhuvan's Dental",
  },

  description:
    "Best Dental Clinic in Ameerpet, Hyderabad. Advanced Dental Implants, Laser Dentistry, Root Canal Treatment, Cosmetic Dentistry, Teeth Cleaning and Gum Care by Dr. Bhuvanesh Yanamala (MDS Periodontics).",

  keywords: [
    "Dentist in Ameerpet",
    "Best Dentist in Hyderabad",
    "Dental Implants Hyderabad",
    "Laser Dentistry",
    "Root Canal Treatment",
    "Cosmetic Dentistry",
    "Teeth Cleaning",
    "Dental Clinic Ameerpet",
    "Periodontist Hyderabad",
    "Dr Bhuvan Dental",
  ],
metadataBase: new URL("https://drbhuvandentalcare.com"),

openGraph: {
  title: "Dr. Bhuvan's Dental Laser & Implant Centre",
  description:
    "Best Dental Clinic in Ameerpet, Hyderabad. Dental Implants, Laser Dentistry & Cosmetic Dentistry.",
  url: "https://drbhuvandentalcare.com",
  siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Dr. Bhuvan's Dental Laser & Implant Centre",
    },
  ],
  locale: "en_IN",
  type: "website",
},

twitter: {
  card: "summary_large_image",
  title: "Dr. Bhuvan's Dental Laser & Implant Centre",
  description:
    "Best Dental Clinic in Ameerpet, Hyderabad.",
  images: ["/og-image.jpg"],
},
  authors: [{ name: "Dr. Bhuvanesh Yanamala" }],

  creator: "Dr. Bhuvanesh Yanamala",

  metadataBase: new URL("https://www.drbhuvandentalcare.com"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Dr. Bhuvan's Dental Laser & Implant Centre",
    description:
      "Advanced Dental Implants, Laser Dentistry, Root Canal & Cosmetic Dentistry in Ameerpet, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com",
    siteName: "Dr. Bhuvan's Dental",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "Ko0cMgfj1sO9bXk8DVzOzeeQv3M3ytRZOJfi6OENsec",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      priceRange: "₹₹",

currenciesAccepted: "INR",

paymentAccepted: [
  "Cash",
  "Credit Card",
  "Debit Card",
  "UPI",
  "Google Pay",
  "PhonePe"
],

founder: "Dr. Bhuvanesh Yanamala",

hasMap: "https://maps.app.goo.gl/MUrP8JPS9NwZpG2z9",

areaServed: [
  "Ameerpet",
  "Yousufguda",
  "SR Nagar",
  "Punjagutta",
  "Begumpet",
  "Jubilee Hills",
  "Banjara Hills",
  "Madhapur",
  "Somajiguda",
  "Kukatpally",
  "Hitech City",
  "Kondapur",
  "Gachibowli",
  "Hyderabad"
],
      "@id": "https://drbhuvandentalcare.com/#dentist",
      name: "Dr. Bhuvan's Dental Laser & Implant Centre",
      url: "https://drbhuvandentalcare.com",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUcat2vLf2Gukh-9znASmsePGlEPp5lihuSNojXDqMANg6v8ZU=w1257",
      telephone: "+91-8074528763",
      email: "ybhuvan7@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500073",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "17.437",
        longitude: "78.448"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "10:00",
          closes: "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "16:00",
          closes: "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "14:00"
        }
      ],
      sameAs: [
        "https://maps.app.goo.gl/MUrP8JPS9NwZpG2z9"
      ]
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do dental implants cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of dental implants depends on the implant system used and the patient's clinical condition. Visit Dr. Bhuvan's Dental Laser & Implant Centre for a personalized consultation and treatment plan."
          }
        },
        {
          "@type": "Question",
          "name": "Is laser dentistry painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laser dentistry is minimally invasive and generally causes less pain, less bleeding and faster healing compared to conventional dental procedures."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I get my teeth cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most patients benefit from professional teeth cleaning every six months. Patients with gum disease may require more frequent cleanings."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide emergency dental treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide emergency dental treatment for severe tooth pain, swelling, dental trauma, broken teeth and other urgent dental problems."
          }
        }
      ]
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dr. Bhuvan's Dental Laser & Implant Centre",
      "url": "https://drbhuvandentalcare.com",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "118",
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
  }}
/>

        {children}
      </body>
    </html>
  );
}