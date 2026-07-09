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
  title: "Dr. Bhuvan's Dental Laser & Implant Centre",
  description:
    "Best Dental Clinic in Ameerpet, Hyderabad. Dental Implants, Laser Dentistry, Root Canal Treatment, Cosmetic Dentistry, Teeth Cleaning and Smile Makeover.",

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
        {children}
      </body>
    </html>
  );
}