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
        {children}
      </body>
    </html>
  );
}