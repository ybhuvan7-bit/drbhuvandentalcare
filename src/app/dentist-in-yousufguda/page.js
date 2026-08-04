import Link from "next/link";
import {
  MapPin,
  Phone,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Award,
  HeartHandshake,
} from "lucide-react";

import GoogleReviews from "../components/GoogleReviews";

export const metadata = {
  title: "Best Dentist in Yousufguda | Dr. Bhuvan's Dental Laser & Implant Centre",
  description:
    "Looking for the best dentist in Yousufguda? Dr. Bhuvan's Dental Laser & Implant Centre provides Dental Implants, Laser Dentistry, Root Canal Treatment, Cosmetic Dentistry, Gum Care, Smile Makeovers and complete family dental care near Yousufguda, Hyderabad.",
  keywords: [
    "Dentist in Yousufguda",
    "Best Dentist in Yousufguda",
    "Dental Clinic in Yousufguda",
    "Dental Implants Yousufguda",
    "Laser Dentistry Yousufguda",
    "Root Canal Treatment Yousufguda",
    "Cosmetic Dentist Hyderabad",
    "Gum Specialist Hyderabad",
  ],
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dentist-in-yousufguda",
  },
};

const services = [
  "Dental Implants",
  "Laser Dentistry",
  "Root Canal Treatment",
  "Teeth Cleaning",
  "Smile Makeover",
  "Wisdom Tooth Removal",
  "Gum Disease Treatment",
  "Children's Dentistry",
];

const nearbyAreas = [
  "Yousufguda",
  "Ameerpet",
  "Srinagar Colony",
  "Madhura Nagar",
  "Krishna Nagar",
  "Begumpet",
  "Punjagutta",
];

export default function DentistInYousufgudaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dr. Bhuvan's Dental Laser & Implant Centre",
    image: "https://www.drbhuvandentalcare.com/logo.png",
    telephone: "+91-8074528763",
    url: "https://www.drbhuvandentalcare.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yousufguda",
      addressRegion: "Hyderabad",
      addressCountry: "IN",
    },
    areaServed: nearbyAreas,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}

      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 pt-28 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm">

                <Award size={18} />

                Trusted Dental Clinic Near Yousufguda

              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-6">

                Best Dentist in

                <span className="text-orange-500">

                  {" "}
                  Yousufguda

                </span>

              </h1>

              <p className="text-gray-600 text-lg mt-8 leading-8">

                Welcome to <strong>Dr. Bhuvan's Dental Laser & Implant Centre</strong>,
                providing advanced dental care for families near
                <strong> Yousufguda, Ameerpet and Srinagar Colony.</strong>

                We specialize in Dental Implants, Laser Dentistry,
                Root Canal Treatment, Cosmetic Dentistry,
                Gum Care and Smile Makeovers using modern technology
                in a comfortable environment.

              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  href="/appointment"
                  className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2"
                >
                  <Calendar size={20} />
                  Book Appointment
                </Link>

                <a
                  href="tel:+918074528763"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-8 py-4 rounded-xl font-bold flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-12">

                <div className="bg-white rounded-xl shadow-md p-5">

                  <div className="flex items-center gap-3">

                    <Star className="text-yellow-500 fill-yellow-500" />

                    <div>

                      <h3 className="font-bold text-lg">

                        4.9 Google Rating

                      </h3>

                      <p className="text-gray-500">

                        120+ Happy Reviews

                      </p>

                    </div>

                  </div>

                </div>

                <div className="bg-white rounded-xl shadow-md p-5">

                  <div className="flex items-center gap-3">

                    <MapPin className="text-orange-500" />

                    <div>

                      <h3 className="font-bold text-lg">

                        Prime Location

                      </h3>

                      <p className="text-gray-500">

                        Near Yousufguda Metro

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8">

              <h2 className="text-3xl font-bold text-gray-900 mb-6">

                Why Patients Choose Us

              </h2>

              <div className="space-y-5">

                {[
                  "Advanced Dental Implants",
                  "Modern Laser Dentistry",
                  "Painless Dental Treatments",
                  "Experienced Periodontist",
                  "Digital Equipment",
                  "Strict Sterilization",
                  "Affordable Treatment Plans",
                  "Personalized Patient Care",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-500" />

                    <span className="text-gray-700 text-lg">

                      {item}

                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* SERVICES */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              Our Services
            </span>

            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              Complete Dental Care Under One Roof
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
              We provide comprehensive dental treatments using modern
              technology to ensure comfortable, predictable and
              long-lasting results.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service) => (

              <div
                key={service}
                className="bg-orange-50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <CheckCircle className="text-orange-500 mb-4" size={30} />

                <h3 className="font-bold text-lg text-gray-900">
                  {service}
                </h3>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* WHY OUR CLINIC */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-orange-500 uppercase font-semibold tracking-widest">
                Why Choose Us
              </span>

              <h2 className="text-4xl font-bold mt-3 text-gray-900">

                Advanced Dentistry with a Personal Touch

              </h2>

              <p className="text-gray-600 mt-6 leading-8">

                Patients from Yousufguda and nearby areas trust
                Dr. Bhuvan's Dental Laser & Implant Centre for
                ethical treatment planning, modern equipment,
                strict sterilization and personalized care.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white rounded-2xl shadow-md p-6">

                <Shield className="text-orange-500 mb-3" size={34} />

                <h3 className="font-bold">

                  Safe & Sterile

                </h3>

                <p className="text-gray-500 mt-2 text-sm">

                  International sterilization protocols.

                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">

                <Clock className="text-orange-500 mb-3" size={34} />

                <h3 className="font-bold">

                  Flexible Appointments

                </h3>

                <p className="text-gray-500 mt-2 text-sm">

                  Convenient appointment scheduling.

                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">

                <Award className="text-orange-500 mb-3" size={34} />

                <h3 className="font-bold">

                  Advanced Technology

                </h3>

                <p className="text-gray-500 mt-2 text-sm">

                  Modern equipment for better outcomes.

                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">

                <HeartHandshake className="text-orange-500 mb-3" size={34} />

                <h3 className="font-bold">

                  Personalized Care

                </h3>

                <p className="text-gray-500 mt-2 text-sm">

                  One-to-one attention for every patient.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* AREAS WE SERVE */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-orange-500 uppercase font-semibold tracking-widest">
              Areas We Serve
            </span>

            <h2 className="text-4xl font-bold mt-3">

              Proudly Serving Nearby Communities

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {nearbyAreas.map((area) => (

              <div
                key={area}
                className="border rounded-2xl p-6 flex items-center gap-3 hover:border-orange-500 hover:shadow-lg transition"
              >

                <MapPin className="text-orange-500" />

                <span className="font-semibold">

                  {area}

                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* GOOGLE REVIEWS */}

      <GoogleReviews />
            {/* FAQ */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="text-orange-500 uppercase font-semibold tracking-widest">
              FAQs
            </span>

            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg">
                Is your clinic near Yousufguda Metro Station?
              </h3>
              <p className="text-gray-600 mt-3">
                Yes. Our clinic is conveniently located near
                Yousufguda Metro Station, making it easily accessible
                for patients from Ameerpet, Srinagar Colony,
                Madhura Nagar and nearby areas.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg">
                Do you provide Dental Implants?
              </h3>
              <p className="text-gray-600 mt-3">
                Yes. We provide single tooth implants,
                multiple implants and full-mouth rehabilitation
                using advanced implant systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg">
                Do you offer Laser Dentistry?
              </h3>
              <p className="text-gray-600 mt-3">
                Yes. We offer advanced laser treatments for
                gum disease, gum contouring and other
                minimally invasive dental procedures.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg">
                How can I book an appointment?
              </h3>
              <p className="text-gray-600 mt-3">
                You can call us directly or book an appointment
                through our website for a convenient visit.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="py-20 bg-orange-500">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Looking for the Best Dentist in Yousufguda?
          </h2>

          <p className="text-orange-100 text-lg mt-6">
            Experience advanced dental care with
            Dr. Bhuvan's Dental Laser & Implant Centre.
            We proudly serve patients from Yousufguda,
            Ameerpet, Srinagar Colony and nearby areas.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              href="/appointment"
              className="bg-white text-orange-500 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Book Appointment
            </Link>

            <a
              href="tel:+918074528763"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-500 transition"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

    </>
  );
}