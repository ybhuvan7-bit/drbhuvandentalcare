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
  metadataBase: new URL("https://www.drbhuvandentalcare.com"),

  title: {
    default: "Dr. Bhuvan's Dental Laser & Implant Centre",
    template: "%s | Dr. Bhuvan's Dental",
  },

  description:
    "Best Dental Clinic in Ameerpet, Hyderabad. Advanced Dental Implants, Laser Dentistry, Root Canal Treatment, Cosmetic Dentistry, Teeth Cleaning, Smile Makeover and Gum Care by Dr. Bhuvanesh Yanamala (MDS Periodontics).",

  keywords: [
    "Dentist in Ameerpet",
    "Best Dentist in Hyderabad",
    "Dental Clinic Ameerpet",
    "Dental Implants Hyderabad",
    "Laser Dentistry Hyderabad",
    "Root Canal Treatment",
    "Cosmetic Dentistry",
    "Teeth Cleaning",
    "Smile Makeover",
    "Periodontist Hyderabad",
    "Dr Bhuvan Dental",
    "Dentist in Jubilee Hills",
    "Dentist in Banjara Hills",
    "Dentist in Madhapur",
  ],

  authors: [
    {
      name: "Dr. Bhuvanesh Yanamala",
    },
  ],

  creator: "Dr. Bhuvanesh Yanamala",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Dr. Bhuvan's Dental Laser & Implant Centre",
    description:
      "Best Dental Clinic in Ameerpet, Hyderabad. Advanced Dental Implants, Laser Dentistry, Cosmetic Dentistry & Gum Care.",
    url: "https://www.drbhuvandentalcare.com",
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
      "Best Dental Clinic in Ameerpet, Hyderabad. Dental Implants, Laser Dentistry & Cosmetic Dentistry.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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

        {/* Dentist Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "@id": "https://www.drbhuvandentalcare.com/#dentist",

              name: "Dr. Bhuvan's Dental Laser & Implant Centre",
              url: "https://www.drbhuvandentalcare.com",

              image:
                "https://www.drbhuvandentalcare.com/og-image.jpg",

              telephone: "+91-8074528763",
              email: "ybhuvan7@gmail.com",

              founder: "Dr. Bhuvanesh Yanamala",

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

              hasMap:
                "https://maps.app.goo.gl/MUrP8JPS9NwZpG2z9",

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
                longitude: "78.448",
              },

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

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much do dental implants cost in Hyderabad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The cost depends on the implant system used and the patient's clinical condition. Visit Dr. Bhuvan's Dental Laser & Implant Centre for a personalized consultation."
                  }
                },
                {
                  "@type": "Question",
                  name: "Is laser dentistry painful?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Laser dentistry is minimally invasive and generally causes less pain, less bleeding and faster healing."
                  }
                },
                {
                  "@type": "Question",
                  name: "How often should I get my teeth cleaned?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most patients should undergo professional teeth cleaning every six months."
                  }
                },
                {
                  "@type": "Question",
                  name: "Do you provide emergency dental treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We provide emergency dental treatment for tooth pain, swelling, trauma and other urgent dental problems."
                  }
                }
              ]
            }),
          }}
        />

        {/* Review Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Bhuvan's Dental Laser & Implant Centre",
              url: "https://www.drbhuvandentalcare.com",

              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "118",
                bestRating: "5",
                worstRating: "1"
              }
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.drbhuvandentalcare.com"
                }
              ]
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}