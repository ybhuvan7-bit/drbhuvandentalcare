import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
  Languages,
  Star,
} from "lucide-react";

export const metadata = {
  title: "Tamil-Speaking Dentist in Hyderabad | Dr. Bhuvan's Dental Clinic",

  description:
    "Looking for a Tamil-speaking dentist in Hyderabad? Get personalized dental care, gum treatment, dental implants, laser dentistry and more at Dr. Bhuvan's Dental Laser & Implant Centre.",

  keywords: [
    "Tamil speaking dentist in Hyderabad",
    "Tamil dentist in Hyderabad",
    "Tamil speaking dentist Ameerpet",
    "Tamil speaking dentist Yousufguda",
    "Tamil speaking dentist near me",
    "Tamil dental clinic Hyderabad",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/tamil-speaking-dentist-hyderabad",
  },

  openGraph: {
    title: "Tamil-Speaking Dentist in Hyderabad | Dr. Bhuvan's Dental Clinic",

    description:
      "Comfortable dental care for Tamil-speaking patients in Hyderabad with personalized treatment and clear communication.",

    url: "https://www.drbhuvandentalcare.com/tamil-speaking-dentist-hyderabad",

    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function TamilSpeakingDentistHyderabad() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">

        {/* Background Effects */}

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Languages className="h-4 w-4" />
              Tamil-Speaking Dental Care
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              Tamil-Speaking Dentist in
              <span className="block text-white">
                Hyderabad
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-orange-50 md:text-xl">
              Comfortable communication can make dental care easier.
              Discuss your dental concerns, diagnosis and treatment options
              comfortably with our Tamil-speaking dental team at
              Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre.
            </p>

            {/* HIGHLIGHTS */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <CheckCircle className="h-5 w-5 shrink-0 text-yellow-300" />
                <span className="text-sm font-semibold">
                  Comfortable communication in Tamil
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <CheckCircle className="h-5 w-5 shrink-0 text-yellow-300" />
                <span className="text-sm font-semibold">
                  Personalized dental care
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <CheckCircle className="h-5 w-5 shrink-0 text-yellow-300" />
                <span className="text-sm font-semibold">
                  Periodontal &amp; Implant Care
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <CheckCircle className="h-5 w-5 shrink-0 text-yellow-300" />
                <span className="text-sm font-semibold">
                  Modern dental treatments
                </span>
              </div>

            </div>

            {/* CTA BUTTONS */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
              >
                🦷 Book an Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

            </div>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-white/10 blur-2xl"></div>

            <div className="relative rounded-[2.5rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-10">

              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white/15 text-6xl shadow-xl backdrop-blur">
                🦷
              </div>

              <div className="mt-8 text-center">

                <div className="flex items-center justify-center gap-1 text-yellow-300">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>

                <p className="mt-3 text-sm font-semibold text-orange-50">
                  Personalized dental care in Hyderabad
                </p>

                <h2 className="mt-6 text-2xl font-black md:text-3xl">
                  Your Comfort Matters
                </h2>

                <p className="mt-4 leading-8 text-orange-50">
                  Clear communication helps patients understand their
                  dental condition, treatment choices and after-care.
                </p>

              </div>

              {/* LANGUAGE CARD */}

              <div className="mt-8 rounded-3xl bg-white p-6 text-center shadow-xl">

                <div className="text-3xl">
                  🗣️
                </div>

                <h3 className="mt-3 text-lg font-black text-gray-900">
                  Tamil-Friendly Dental Consultation
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Talk about your dental concerns in a language you are
                  comfortable with and receive clear guidance about your
                  treatment options.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= DENTAL CARE THAT SPEAKS YOUR LANGUAGE ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* HEADER */}

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
              Comfortable Dental Care
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
              Dental Care That Speaks Your Language
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              When you can communicate comfortably with your dental team,
              it becomes easier to discuss your concerns, understand your
              diagnosis and make informed decisions about your treatment.
            </p>

          </div>

          {/* CONTENT CARDS */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}

            <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🗣️
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Comfortable Communication
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Discuss your dental concerns, symptoms and treatment
                expectations more comfortably when you can communicate
                in Tamil.
              </p>

            </div>

            {/* CARD 2 */}

            <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                💡
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Understand Your Treatment
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Clear communication can help you better understand your
                dental condition, available treatment options and the
                recommended next steps.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                ❤️
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Feel More Confident
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Being able to communicate in a familiar language can help
                make dental consultations feel more comfortable and
                reassuring.
              </p>

            </div>

          </div>

          {/* TAMIL LANGUAGE HIGHLIGHT */}

          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700 p-8 text-white shadow-2xl md:p-10">

            <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/15 text-4xl backdrop-blur">
                🇮🇳
              </div>

              <div>

                <p className="text-sm font-bold uppercase tracking-widest text-orange-100">
                  Tamil-Friendly Consultation
                </p>

                <h3 className="mt-3 text-2xl font-black md:text-3xl">
                  உங்கள் பல் ஆரோக்கியம் பற்றி தமிழில் பேசலாம்
                </h3>

                <p className="mt-4 leading-8 text-orange-50">
                  உங்கள் பல் பிரச்சனைகள், சிகிச்சை விருப்பங்கள் மற்றும்
                  சந்தேகங்களை தமிழில் எளிதாகப் பகிர்ந்து கொள்ளலாம்.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= MEET DR. RAMALAKSHMI BHUVANESH  ================= */}

      <section className="bg-orange-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT CONTENT */}

            <div>

              <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
                Meet Your Dentist
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                Meet Dr. Ramalakshmi Bhuvanesh 
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Dr. Ramalakshmi Bhuvanesh is a Periodontist and Implantologist
                providing personalized dental care in Hyderabad. She can
                communicate with Tamil-speaking patients, making it easier
                to discuss dental concerns, treatment options and expectations.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                From gum care and dental implants to preventive and restorative
                dentistry, treatment is planned after understanding each
                patient&apos;s individual dental needs.
              </p>

              {/* AREAS OF EXPERTISE */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">

                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Periodontal Care
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Comprehensive care for gums and supporting tissues.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">

                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Dental Implants
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Personalized implant planning and treatment.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">

                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Laser Dentistry
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Modern laser-assisted dental procedures when appropriate.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">

                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Patient-Focused Care
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Treatment explained clearly with attention to patient
                      concerns and comfort.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT - DOCTOR CARD */}

            <div className="relative">

              <div className="absolute -inset-5 rounded-[3rem] bg-orange-200/60 blur-2xl"></div>

              <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl md:p-10">

               {/* DOCTOR IMAGE */}

<div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-orange-100">
  <Image
    src="/wife-doctor.webp"
    alt="Dr. Ramalakshmi Bhuvanesh - Dentist"
    fill
    priority
    className="object-cover object-top"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>

                {/* DOCTOR DETAILS */}

                <div className="mt-7 text-center">

                  <h3 className="text-2xl font-black text-gray-900">
                    Dr. Ramalakshmi Bhuvanesh
                  </h3>

                  <p className="mt-2 font-semibold text-orange-600">
                    Periodontist &amp; Implantologist
                  </p>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600">
                    Personalized dental care with clear communication and
                    treatment planning based on your individual needs.
                  </p>

                  {/* LANGUAGES */}

                  <div className="mt-6 flex flex-wrap justify-center gap-3">

                    <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-gray-700">
                      Tamil
                    </span>

                    <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-gray-700">
                      Telugu
                    </span>

                    <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-gray-700">
                      English
                    </span>

                    <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-gray-700">
                      Marathi
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= DENTAL TREATMENTS ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* HEADER */}

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
              Comprehensive Dental Care
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Dental Treatments for Your Oral Health
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              From preventive care and gum treatment to dental implants and
              restorative dentistry, our team provides personalized treatment
              based on your dental needs.
            </p>

          </div>

          {/* TREATMENT CARDS */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* DENTAL IMPLANTS */}

            <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🦷
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Dental Implants
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Replace missing teeth with personalized dental implant
                treatment planned according to your oral health and
                individual needs.
              </p>

              <Link
                href="/dental-implants-ameerpet"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Dental Implants
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* ROOT CANAL */}

            <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🛡️
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Root Canal Treatment
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Treatment for teeth affected by deep decay, inflammation or
                infection, with the aim of preserving the natural tooth when
                it is suitable for restoration.
              </p>

              <Link
                href="/root-canal-treatment-yousufguda"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Root Canal Treatment
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* TEETH CLEANING */}

            <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🪥
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Teeth Cleaning &amp; Scaling
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Professional cleaning and polishing can help remove plaque,
                tartar and surface stains while supporting healthy teeth and
                gums.
              </p>

              <Link
                href="/teeth-cleaning-ameerpet"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Teeth Cleaning
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* GUM TREATMENT */}

            <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                ❤️
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Gum Treatment
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Comprehensive periodontal care for gum bleeding, gum
                inflammation and other conditions affecting the supporting
                tissues of the teeth.
              </p>

              <Link
                href="/dentist-in-ameerpet"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Gum Care
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* LASER DENTISTRY */}

            <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                ✨
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Laser Dentistry
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Laser-assisted dental procedures may be used for selected
                soft-tissue and periodontal treatments based on the clinical
                condition.
              </p>

              <Link
                href="/dentist-in-ameerpet"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Laser Dentistry
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* COSMETIC DENTISTRY */}

            <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                😁
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Cosmetic Dentistry
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Explore cosmetic dental options designed to improve the
                appearance of your smile while considering your overall oral
                health.
              </p>

              <Link
                href="/dentist-in-ameerpet"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Cosmetic Dentistry
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          {/* BOTTOM NOTE */}

          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-orange-50 p-7 text-center md:p-9">

            <p className="text-base leading-8 text-gray-600 md:text-lg">
              <span className="font-bold text-orange-600">
                Every treatment begins with an appropriate dental evaluation.
              </span>{" "}
              Your dentist will recommend treatment based on your oral health,
              symptoms and individual needs.
            </p>

          </div>

        </div>

      </section>
            {/* ================= LOCATION & PATIENT COMFORT ================= */}

      <section className="bg-orange-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT - LOCATION */}

            <div className="relative">

              <div className="absolute -inset-5 rounded-[3rem] bg-orange-200/50 blur-2xl"></div>

              <div className="relative rounded-[2.5rem] bg-white p-8 shadow-2xl md:p-10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                  📍
                </div>

                <span className="mt-7 inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                  Convenient Hyderabad Location
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-gray-900 md:text-4xl">
                  Dental Care Near Ameerpet &amp; Yousufguda
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre is located
                  in the Navodaya Colony–Sri Krishna Nagar area of Hyderabad,
                  making it convenient for patients from Ameerpet, Yousufguda
                  and nearby localities.
                </p>

                {/* ADDRESS */}

                <div className="mt-8 rounded-2xl bg-orange-50 p-5">

                  <h3 className="font-bold text-gray-900">
                    Our Clinic
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Ganapathi Complex, Navodaya Colony Road,
                    Sri Krishna Nagar, Ameerpet,
                    Hyderabad, Telangana – 500073
                  </p>

                </div>

                {/* CTA */}

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="tel:+918074528763"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
                  >
                    📞 Call the Clinic
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvan%27s+Dental+Laser+%26+Implant+Centre+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-500 px-6 py-3 font-bold text-orange-600 transition hover:bg-orange-500 hover:text-white"
                  >
                    📍 Get Directions
                  </a>

                </div>

              </div>

            </div>

            {/* RIGHT - COMFORT */}

            <div>

              <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
                Patient-Centered Care
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                Feel Comfortable From Consultation to Treatment
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Choosing a dentist is not only about the treatment itself.
                Being able to communicate your concerns clearly and understand
                the recommended care can make your dental experience more
                comfortable.
              </p>

              <div className="mt-10 space-y-5">

                {/* POINT 1 */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Clear Communication
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Discuss your symptoms, concerns and expectations in a
                      language you are comfortable with.
                    </p>
                  </div>

                </div>

                {/* POINT 2 */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Treatment Explained Clearly
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Understand your dental condition, treatment options and
                      expected next steps before proceeding.
                    </p>
                  </div>

                </div>

                {/* POINT 3 */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Personalized Treatment Planning
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Treatment recommendations are based on your oral health,
                      clinical findings and individual needs.
                    </p>
                  </div>

                </div>

                {/* POINT 4 */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      One-to-One Dental Care
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Our approach focuses on giving patients time to discuss
                      their concerns and understand their treatment.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= TAMIL DENTIST FAQ ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6">

          {/* HEADER */}

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Tamil-Speaking Dentist in Hyderabad – FAQs
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              Here are some common questions about Tamil-speaking dental
              consultations and dental care at our Hyderabad clinic.
            </p>

          </div>

          {/* FAQ LIST */}

          <div className="mt-14 space-y-5">

            {/* FAQ 1 */}

            <details className="group rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-7">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-gray-900">
                <span>
                  Is a Tamil-speaking dentist available in Hyderabad?
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                Yes. Tamil-speaking patients can communicate their dental
                concerns and discuss treatment options comfortably with
                Dr. Ramalakshmi at Dr. Bhuvan&apos;s Dental Laser &amp;
                Implant Centre.
              </p>

            </details>

            {/* FAQ 2 */}

            <details className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-7">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-gray-900">
                <span>
                  Can I discuss my dental problem in Tamil?
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                Yes. You can discuss your dental symptoms, concerns and
                treatment expectations in Tamil, making communication more
                comfortable during your consultation.
              </p>

            </details>

            {/* FAQ 3 */}

            <details className="group rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-7">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-gray-900">
                <span>
                  What dental treatments are available?
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                Dental care includes preventive, restorative, periodontal,
                implant and cosmetic treatments. Treatment is recommended
                after an appropriate dental examination and assessment of
                your individual needs.
              </p>

            </details>

            {/* FAQ 4 */}

            <details className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-7">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-gray-900">
                <span>
                  Where is the dental clinic located?
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre is located
                in the Navodaya Colony–Sri Krishna Nagar area of Hyderabad,
                with convenient access for patients from Ameerpet, Yousufguda
                and nearby areas.
              </p>

            </details>

            {/* FAQ 5 */}

            <details className="group rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-7">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-gray-900">
                <span>
                  Can I book an appointment with the Tamil-speaking dentist?
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                Yes. You can contact the clinic to enquire about an
                appointment and discuss your dental concerns before visiting.
              </p>

            </details>

            {/* FAQ 6 */}

            <details className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-7">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-gray-900">
                <span>
                  Is Tamil-speaking dental care available for families?
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                Tamil-speaking patients can enquire about dental care for
                themselves or family members. The appropriate treatment will
                depend on the patient&apos;s age, dental condition and clinical
                requirements.
              </p>

            </details>

          </div>

          {/* TAMIL CTA */}

          <div className="mt-14 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700 p-8 text-center text-white shadow-2xl md:p-10">

            <div className="mx-auto max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-widest text-orange-100">
                Tamil-Friendly Dental Consultation
              </p>

              <h3 className="mt-4 text-2xl font-black md:text-3xl">
                உங்கள் பல் பிரச்சனையை தமிழில் பேசலாம்
              </h3>

              <p className="mt-4 leading-8 text-orange-50">
                Have a dental concern? Contact our clinic to discuss your
                symptoms and understand the next steps for your dental care.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href="tel:+918074528763"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-bold text-orange-600 transition hover:bg-orange-50"
                >
                  📞 Call Now
                </a>

                <Link
                  href="/#appointment"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-orange-600"
                >
                  🦷 Book Appointment
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= FINAL CTA & NEARBY AREAS ================= */}

      <section className="bg-orange-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* MAIN CTA */}

          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-8 text-white shadow-2xl md:p-12">

            {/* BACKGROUND EFFECTS */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-4xl text-center">

              <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-100 backdrop-blur sm:text-sm">
                Your Dental Health Matters
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
                Looking for a Tamil-Speaking Dentist in Hyderabad?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-orange-50 sm:text-lg">
                Get personalized dental care with comfortable communication.
                Discuss your dental concerns, understand your treatment
                options and take the next step towards better oral health.
              </p>

              {/* CTA BUTTONS */}

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  href="/#appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  🦷 Book an Appointment
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href="tel:+918074528763"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>

              </div>

            </div>

          </div>

          {/* NEARBY AREAS */}

          <div className="mx-auto mt-16 max-w-5xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
              Serving Nearby Areas
            </span>

            <h2 className="mt-6 text-3xl font-black text-gray-900 md:text-4xl">
              Conveniently Located for Patients Across Hyderabad
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              Our clinic is located in the Navodaya Colony–Sri Krishna Nagar
              area, with convenient access for patients from Ameerpet,
              Yousufguda and surrounding localities.
            </p>

            {/* AREA LINKS */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <Link
                href="/dentist-in-ameerpet"
                className="rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600"
              >
                Dentist in Ameerpet
              </Link>

              <Link
                href="/dentist-in-navodaya-colony"
                className="rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600"
              >
                Dentist in Navodaya Colony
              </Link>

              <Link
                href="/dentist-in-sri-krishna-nagar"
                className="rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600"
              >
                Dentist in Sri Krishna Nagar
              </Link>

              <Link
                href="/dental-implants-yousufguda"
                className="rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600"
              >
                Dental Implants in Yousufguda
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}