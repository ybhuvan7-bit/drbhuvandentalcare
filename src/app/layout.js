
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
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
    default: "Dental Clinic in Ameerpet, Hyderabad | Dr. Bhuvan's Dental",
    template: "%s | Dr. Bhuvan's Dental",
  },

  description:
    "Looking for a dentist in Ameerpet, Hyderabad? Dr. Bhuvan's Dental Laser & Implant Centre offers dental implants, laser dentistry, gum treatment, root canal treatment and cosmetic dentistry near Yousufguda.",

  keywords: [
    "Dental Clinic in Ameerpet",
    "Dentist in Ameerpet Hyderabad",
    "Dental Clinic in Yousufguda",
    "Best Dentist in Ameerpet",
    "Dental Implants Hyderabad",
    "Laser Dentistry Hyderabad",
    "Periodontist in Hyderabad",
    "Gum Treatment Hyderabad",
    "Root Canal Treatment Ameerpet",
    "Cosmetic Dentist Hyderabad",
    "Teeth Cleaning Hyderabad",
    "Dr Bhuvan Dental",
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
    title: "Dental Clinic in Ameerpet, Hyderabad | Dr. Bhuvan's Dental",
    description:
      "Dental implants, laser dentistry, gum care and cosmetic dentistry at Dr. Bhuvan's Dental Laser & Implant Centre, Ameerpet, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Bhuvan's Dental Laser & Implant Centre, Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic in Ameerpet, Hyderabad | Dr. Bhuvan's Dental",
    description:
      "Dental implants, laser dentistry, gum treatment and cosmetic dentistry in Ameerpet, Hyderabad.",
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
      <head>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18310496002"
          strategy="beforeInteractive"
        />

        <Script id="google-ads-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18310496002');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        {/* Global Navbar */}
        <Navbar />

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
                "PhonePe",
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
                latitude: 17.434462985123986,
                longitude: 78.433557202177,
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
                "Hyderabad",
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

              sameAs: [
                "https://maps.app.goo.gl/MUrP8JPS9NwZpG2z9",
              ],
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
                    text: "The cost depends on the implant system used and the patient's clinical condition. Visit Dr. Bhuvan's Dental Laser & Implant Centre for a personalized consultation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is laser dentistry painful?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Laser dentistry is minimally invasive and generally causes less pain, less bleeding and faster healing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How often should I get my teeth cleaned?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most patients should undergo professional teeth cleaning every six months.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide emergency dental treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We provide emergency dental treatment for tooth pain, swelling, trauma and other urgent dental problems.",
                  },
                },
              ],
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
                  item: "https://www.drbhuvandentalcare.com",
                },
              ],
            }),
          }}
        />

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Image Gallery Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              name: "Dr. Bhuvan's Dental Clinic Gallery",
              description:
                "Modern dental clinic interiors and facilities at Dr. Bhuvan's Dental Laser & Implant Centre, Ameerpet, Hyderabad.",
              url: "https://www.drbhuvandentalcare.com/#clinic-gallery",
              image: [
                "https://www.drbhuvandentalcare.com/clinic/clinic1.webp",
                "https://www.drbhuvandentalcare.com/clinic/clinic2.webp",
                "https://www.drbhuvandentalcare.com/clinic/clinic3.webp",
                "https://www.drbhuvandentalcare.com/clinic/clinic4.webp",
                "https://www.drbhuvandentalcare.com/clinic/clinic5.webp",
                "https://www.drbhuvandentalcare.com/clinic/clinic6.webp",
                "https://www.drbhuvandentalcare.com/clinic/clinic7.webp",
                "https://www.drbhuvandentalcare.com/clinic/clinic8.webp",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
