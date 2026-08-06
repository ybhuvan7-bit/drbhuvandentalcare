import SeoSchema from "@/components/SeoSchema";
import {
  dentistSchema,
  breadcrumbSchema,
  faqSchema,
  servicesSchema,
  organizationSchema,
} from "./schema";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Phone,
  CheckCircle,
  Star,
} from "lucide-react";

export const metadata = {
  title:
    "Best Dentist in Ameerpet, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

  description:
    "Looking for the best dentist in Ameerpet, Hyderabad? Dr. Bhuvan's Dental Laser & Implant Centre offers dental implants, laser dentistry, root canal treatment, teeth cleaning, gum disease treatment, smile makeovers and complete family dental care.",

  keywords: [
    "Best Dentist in Ameerpet",
    "Dental Clinic in Ameerpet",
    "Dentist in Hyderabad",
    "Dental Implants Ameerpet",
    "Laser Dentistry Hyderabad",
    "Root Canal Treatment Ameerpet",
    "Teeth Cleaning Ameerpet",
    "Gum Disease Treatment Hyderabad",
    "Cosmetic Dentist Hyderabad",
    "Dr Bhuvan Dentist",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dentist-in-ameerpet",
  },

  openGraph: {
    title:
      "Best Dentist in Ameerpet | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Advanced dental implants, laser dentistry, root canal treatment and complete dental care in Ameerpet, Hyderabad.",

    url:
      "https://www.drbhuvandentalcare.com/dentist-in-ameerpet",

    siteName:
      "Dr. Bhuvan's Dental Laser & Implant Centre",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/doctor.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Bhuvan's Dental Laser & Implant Centre",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Dentist in Ameerpet | Dr. Bhuvan",

    description:
      "Dental Implants • Laser Dentistry • Root Canal • Teeth Cleaning",

    images: ["/doctor.webp"],
  },
};

export default function DentistAmeerpetPage() {
  return (
  <>
  <SeoSchema data={dentistSchema} />

  <SeoSchema data={breadcrumbSchema} />

  <SeoSchema data={faqSchema} />

  <SeoSchema data={servicesSchema} />

  <SeoSchema data={organizationSchema} />

  <main className="bg-white">
             
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">

        {/* Background Blur */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-bold text-orange-600 shadow-lg">

              ⭐ Trusted Dental Clinic in Hyderabad

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

            Best Dentist
<br />
in Ameerpet,
<br />
Hyderabad

            </h1>

           <p className="mt-8 max-w-2xl text-lg leading-9 text-orange-50 lg:text-xl">
  Looking for the best dentist in Ameerpet? Dr. Bhuvan's Dental
  Laser & Implant Centre offers dental implants, laser dentistry,
  root canal treatment, teeth cleaning, gum disease treatment,
  smile makeovers, and complete family dental care with advanced
  technology and a personalized approach.
</p>

            {/* FEATURES */}

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3 text-white">

                <CheckCircle className="h-6 w-6 text-green-400" />

                Modern Digital Dentistry

              </div>

              <div className="flex items-center gap-3 text-white">

                <CheckCircle className="h-6 w-6 text-green-400" />

                Comfortable & Painless Treatment

              </div>

              <div className="flex items-center gap-3 text-white">

                <CheckCircle className="h-6 w-6 text-green-400" />

                Experienced MDS Periodontist

              </div>

              <div className="flex items-center gap-3 text-white">

                <CheckCircle className="h-6 w-6 text-green-400" />

                Personalized One-to-One Dental Care

              </div>

            </div>

            {/* BUTTONS */}

           <div className="mt-12 flex flex-wrap gap-5">

  <a
    href="tel:+918074528763"
    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-5 text-lg font-bold text-orange-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <Phone className="mr-2 h-5 w-5" />
    Call Now
  </a>

  <Link
    href="#appointment"
    className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-5 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-orange-600"
  >
    <Calendar className="mr-2 h-5 w-5" />
    Book Appointment
  </Link>

</div>

            {/* HERO STATS */}

           <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">

  <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
    <h3 className="text-4xl font-black text-white">
      5000+
    </h3>
    <p className="mt-2 text-sm font-medium text-orange-100">
      Happy Patients
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
    <h3 className="text-4xl font-black text-white">
      4.9★
    </h3>
    <p className="mt-2 text-sm font-medium text-orange-100">
      Google Rating
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
    <h3 className="text-4xl font-black text-white">
      1000+
    </h3>
    <p className="mt-2 text-sm font-medium text-orange-100">
      Laser Procedures
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
    <h3 className="text-4xl font-black text-white">
      Modern
    </h3>
    <p className="mt-2 text-sm font-medium text-orange-100">
      Dental Care
    </p>
  </div>

</div>
          </div>

          {/* RIGHT */}

          

           <div className="relative flex justify-center lg:justify-end">

  <div className="relative overflow-hidden rounded-[36px] border-8 border-white bg-white shadow-[0_35px_100px_rgba(0,0,0,0.28)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_45px_120px_rgba(0,0,0,0.32)]">

    <Image
      src="/doctor.webp"
      alt="Dr. Bhuvanesh Yanamala - Best Dentist in Ameerpet"
      width={700}
      height={700}
      priority
      className="h-full w-full object-cover"
    />

    {/* Floating Card */}

    <div className="absolute bottom-6 right-6 max-w-xs rounded-3xl border border-orange-100 bg-white/95 p-5 backdrop-blur-md shadow-2xl">

      <p className="text-lg font-bold text-gray-900">
        Dr. Bhuvanesh Yanamala
      </p>

      <p className="mt-1 text-sm font-semibold text-orange-600">
        MDS | Periodontist & Implantologist
      </p>

      <div className="mt-3 flex items-center gap-2">
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

        <span className="font-semibold text-gray-700">
          4.9 Google Rating
        </span>
      </div>

    </div>

  </div>

</div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="font-semibold uppercase tracking-[4px] text-orange-600">

            COMPLETE DENTAL CARE

          </span>

          <h2 className="mt-4 text-5xl font-black text-gray-900">

            Healthy Smiles Begin Here

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-600">

            Dr. Bhuvan's Dental Laser & Implant Centre is one of the trusted
            dental clinics near Ameerpet, providing comprehensive dental
            treatments under one roof. Whether you need preventive care,
            cosmetic dentistry, dental implants, laser gum treatment, or
            smile enhancement, our focus is on delivering comfortable,
            personalized and high-quality dental care.

          </p>

        </div>

      </section>
{/* ================= OUR DENTAL SERVICES ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-600">
        OUR SERVICES
      </span>

      <h2 className="mt-4 text-5xl font-black text-gray-900">
        Complete Dental Care Under One Roof
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
        We provide comprehensive dental treatments using modern technology,
        advanced laser dentistry and personalized care to help you achieve
        a healthy and confident smile.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Dental Implants */}

      <Link
        href="/dental-implants-ameerpet"
        className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
      >
        <div className="text-5xl">🦷</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Dental Implants
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Replace missing teeth with natural-looking dental implants for a
          permanent and confident smile.
        </p>

        <span className="mt-6 inline-flex font-semibold text-orange-600 group-hover:translate-x-2 transition">
          Learn More →
        </span>
      </Link>

      {/* Root Canal */}

      <Link
        href="/root-canal-treatment"
        className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
      >
        <div className="text-5xl">🩺</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Root Canal Treatment
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Save infected teeth with painless root canal treatment performed
          using modern techniques.
        </p>

        <span className="mt-6 inline-flex font-semibold text-orange-600 group-hover:translate-x-2 transition">
          Learn More →
        </span>
      </Link>

      {/* Gum Disease */}

      <Link
        href="/gum-disease-treatment-ameerpet"
        className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
      >
        <div className="text-5xl">😁</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Gum Disease Treatment
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Advanced periodontal treatment for bleeding gums, gum recession,
          bad breath and loose teeth.
        </p>

        <span className="mt-6 inline-flex font-semibold text-orange-600 group-hover:translate-x-2 transition">
          Learn More →
        </span>
      </Link>

      {/* Laser Dentistry */}

      <Link
        href="/laser-dentistry"
        className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
      >
        <div className="text-5xl">⚡</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Laser Dentistry
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Experience minimally invasive laser dental treatments with less
          pain, less bleeding and faster healing.
        </p>

        <span className="mt-6 inline-flex font-semibold text-orange-600 group-hover:translate-x-2 transition">
          Learn More →
        </span>
      </Link>

      {/* Teeth Cleaning */}

      <Link
        href="/teeth-cleaning"
        className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
      >
        <div className="text-5xl">✨</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Teeth Cleaning
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Professional scaling and polishing to remove plaque, tartar and
          stains while improving oral health.
        </p>

        <span className="mt-6 inline-flex font-semibold text-orange-600 group-hover:translate-x-2 transition">
          Learn More →
        </span>
      </Link>

      {/* Smile Makeover */}

      <Link
        href="/smile-makeover"
        className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 group-hover:translate-x-2 hover:-translate-y-3 hover:shadow-2xl"
      >
        <div className="text-5xl">😁</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Smile Makeover
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Transform your smile with veneers, teeth whitening and cosmetic
          dental treatments.
        </p>

        <span className="mt-6 inline-flex font-semibold text-orange-600 group-hover:translate-x-2 transition">
          Learn More →
        </span>
      </Link>

    </div>

  </div>

</section>
{/* ================= WHY CHOOSE DR. BHUVAN ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-600">
        WHY CHOOSE US
      </span>

      <h2 className="mt-4 text-5xl font-black text-gray-900">
        Why Patients Choose Dr. Bhuvan
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
        We combine advanced technology, evidence-based dentistry and
        personalized care to provide comfortable, predictable and
        long-lasting dental treatments for every patient.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Card 1 */}

      <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">🎓</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          MDS Periodontist & Implantologist
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Specialized training in Periodontics & Implantology with expertise
          in managing complex gum and implant cases.
        </p>

      </div>

      {/* Card 2 */}

      <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">⚡</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Fellowship in Laser Dentistry
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Advanced training in laser dentistry for minimally invasive
          treatments with improved comfort and faster healing.
        </p>

      </div>

      {/* Card 3 */}

      <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">🦷</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Advanced Implant Dentistry
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Expertise in conventional, immediate and advanced dental implant
          procedures for replacing missing teeth.
        </p>

      </div>

      {/* Card 4 */}

      <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">💻</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Digital Dental Technology
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Modern diagnosis using digital radiography and CBCT for precise
          treatment planning.
        </p>

      </div>

      {/* Card 5 */}

      <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">🤝</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Personalized One-to-One Care
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Every patient receives individualized attention, clear treatment
          planning and compassionate dental care.
        </p>

      </div>

      {/* Card 6 */}

      <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">📚</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Continuous Learning & Research
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Regular participation in advanced workshops, implant training,
          conferences and clinical research to provide up-to-date treatment.
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= MEET DR. BHUVAN ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* LEFT IMAGE */}

      <div className="relative flex justify-center">

        <div className="absolute h-80 w-80 rounded-full bg-orange-100 blur-3xl"></div>

       <div className="group relative overflow-hidden rounded-[36px] border-8 border-white bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.22)]">

         <Image
  src="/doctor.webp"
  alt="Dr. Bhuvanesh Yanamala"
  width={650}
  height={750}
  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
        </div>

      </div>

      {/* RIGHT CONTENT */}

      <div>

        <span className="font-semibold uppercase tracking-[4px] text-orange-600">

          MEET YOUR DENTIST

        </span>

        <h2 className="mt-4 text-5xl font-black text-gray-900">

          Dr. Bhuvanesh Yanamala

        </h2>

        <p className="mt-3 text-2xl font-semibold text-orange-600">

          MDS • Periodontist & Implantologist

        </p>

        <p className="mt-8 text-lg leading-9 text-gray-600">

          Dr. Bhuvanesh Yanamala is dedicated to delivering advanced,
          evidence-based and patient-focused dental care. His clinical
          expertise includes dental implants, periodontal therapy,
          laser dentistry and comprehensive gum care with an emphasis
          on precision, comfort and long-term oral health.

        </p>

        {/* Highlights */}

        <div className="mt-10 grid gap-4">

          <div className="flex items-center gap-3">

            <span className="text-2xl">🎓</span>

            <span className="font-medium">
              BDS & MDS in Periodontics & Implantology
            </span>

          </div>

          <div className="flex items-center gap-3">

            <span className="text-2xl">⚡</span>

            <span className="font-medium">
              Associate Fellowship in Laser Dentistry
            </span>

          </div>

          <div className="flex items-center gap-3">

            <span className="text-2xl">🌍</span>

            <span className="font-medium">
              Soft Tissue Masterclass – TUFTS University
            </span>

          </div>

          <div className="flex items-center gap-3">

            <span className="text-2xl">🦷</span>

            <span className="font-medium">
              Advanced Dental Implant & Gum Specialist
            </span>

          </div>

          <div className="flex items-center gap-3">

            <span className="text-2xl">🤝</span>

            <span className="font-medium">
              Personalized One-to-One Dental Care
            </span>

          </div>

        </div>

        {/* Experience Cards */}

        <div className="mt-12 grid grid-cols-3 gap-5">

          <div className="rounded-2xl bg-orange-50 p-5 text-center">

            <h3 className="text-3xl font-black text-orange-600">

              5000+

            </h3>

            <p className="mt-2 text-sm text-gray-600">

              Happy Patients

            </p>

          </div>

          <div className="rounded-2xl bg-orange-50 p-5 text-center">

            <h3 className="text-3xl font-black text-orange-600">

              4.9★

            </h3>

            <p className="mt-2 text-sm text-gray-600">

              Google Rating

            </p>

          </div>

          <div className="rounded-2xl bg-orange-50 p-5 text-center">

            <h3 className="text-3xl font-black text-orange-600">

              MDS

            </h3>

            <p className="mt-2 text-sm text-gray-600">

              Specialist Care

            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-12 flex flex-wrap gap-5">

          <Link
            href="#appointment"
            className="rounded-full bg-orange-600 px-8 py-4 font-bold text-white transition hover:bg-orange-700 hover:shadow-xl"
          >

            Book Appointment

          </Link>

          <a
            href="tel:+918074528763"
            className="rounded-full border-2 border-orange-600 px-8 py-4 font-bold text-orange-600 transition hover:bg-orange-600 hover:text-white"
          >

            Call Now

          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= GOOGLE REVIEWS ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-600">
        GOOGLE REVIEWS
      </span>

      <h2 className="mt-4 text-5xl font-black text-gray-900">
        Trusted by Our Patients
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
        Every smile tells a story. Here's what our patients have shared about
        their experience at Dr. Bhuvan's Dental Laser & Implant Centre.
      </p>

    </div>

    {/* Rating */}

    <div className="mt-12 text-center">

      <div className="text-5xl text-yellow-400">
        ★★★★★
      </div>

      <h3 className="mt-4 text-5xl font-black text-gray-900">
        4.9 Google Rating
      </h3>

      <p className="mt-3 text-lg text-gray-600">
        Thank you for the trust and wonderful feedback from our patients.
      </p>

    </div>

    {/* Reviews */}

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      <div className="rounded-3xl bg-white p-8 shadow-lg">

        <div className="text-2xl text-yellow-400">
          ★★★★★
        </div>

        <p className="mt-5 leading-8 text-gray-600">
          "I had my wisdom tooth removed here, and the entire process was
          amazingly smooth. The doctor was friendly, reassuring and made the
          experience comfortable. Highly recommend this clinic."
        </p>

        <h4 className="mt-6 font-bold text-gray-900">
          Raja M
        </h4>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">

        <div className="text-2xl text-yellow-400">
          ★★★★★
        </div>

        <p className="mt-5 leading-8 text-gray-600">
          "Visited for my implant cap issue which was resolved efficiently.
          Dr. Bhuvan is soft spoken, courteous and the clinic has modern
          equipment with excellent hygiene."
        </p>

        <h4 className="mt-6 font-bold text-gray-900">
          Kirti Nanal
        </h4>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">

        <div className="text-2xl text-yellow-400">
          ★★★★★
        </div>

        <p className="mt-5 leading-8 text-gray-600">
          "Highly recommended. The clinic was neat and clean. Dr. Bhuvan
          explained every treatment procedure clearly and I was very
          satisfied with the treatment."
        </p>

        <h4 className="mt-6 font-bold text-gray-900">
          Surya Reddy
        </h4>

      </div>

    </div>

    {/* CTA */}

    <div className="mt-16 text-center">

      <a
        href="https://g.page/r/Cb9Tvhf5l8RPEBM/review"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full bg-orange-600 px-8 py-4 font-bold text-white transition hover:bg-orange-700 hover:shadow-xl"
      >
        ⭐ Read More Google Reviews
      </a>

    </div>

  </div>

</section>
{/* ================= FAQ ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-600">
        FREQUENTLY ASKED QUESTIONS
      </span>

      <h2 className="mt-4 text-5xl font-black text-gray-900">
        Frequently Asked Questions About Our Dental Clinic
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
        Find answers to some of the most common questions about our dental
        treatments, technology and patient care.
      </p>

    </div>

    <div className="mt-16 space-y-6">

      {/* FAQ 1 */}

      <details className="group rounded-3xl border border-orange-100 bg-orange-50 p-8">

        <summary className="cursor-pointer text-xl font-bold text-gray-900">
          Why should I choose Dr. Bhuvan's Dental Laser & Implant Centre in Ameerpet?
        </summary>

        <p className="mt-5 leading-8 text-gray-600">
          Our clinic combines advanced technology, evidence-based dentistry,
          personalized one-to-one care and comprehensive treatment planning.
          Led by an experienced MDS Periodontist & Implantologist, we are
          committed to providing comfortable, ethical and high-quality dental
          care for every patient.
        </p>

      </details>

      {/* FAQ 2 */}

      <details className="group rounded-3xl border border-orange-100 bg-orange-50 p-8">

        <summary className="cursor-pointer text-xl font-bold text-gray-900">
          What dental treatments do you offer?
        </summary>

        <p className="mt-5 leading-8 text-gray-600">
          We provide dental implants, laser dentistry, root canal treatment,
          teeth cleaning, gum disease treatment, wisdom tooth removal,
          cosmetic dentistry, smile makeovers and preventive dental care for
          patients of all age groups.
        </p>

      </details>

      {/* FAQ 3 */}

      <details className="group rounded-3xl border border-orange-100 bg-orange-50 p-8">

        <summary className="cursor-pointer text-xl font-bold text-gray-900">
          Do you provide painless dental treatment?
        </summary>

        <p className="mt-5 leading-8 text-gray-600">
          Patient comfort is our priority. We use modern techniques and,
          where appropriate, laser dentistry to help make many procedures
          more comfortable while supporting a smoother recovery.
        </p>

      </details>

      {/* FAQ 4 */}

      <details className="group rounded-3xl border border-orange-100 bg-orange-50 p-8">

        <summary className="cursor-pointer text-xl font-bold text-gray-900">
          How can I book an appointment?
        </summary>

        <p className="mt-5 leading-8 text-gray-600">
          You can schedule an appointment by calling our clinic, using the
          appointment form on our website or visiting our clinic directly in
          Ameerpet, Hyderabad.
        </p>

      </details>

      {/* FAQ 5 */}

      <details className="group rounded-3xl border border-orange-100 bg-orange-50 p-8">

        <summary className="cursor-pointer text-xl font-bold text-gray-900">
          Which areas do you serve?
        </summary>

        <p className="mt-5 leading-8 text-gray-600">
          We proudly serve patients from Ameerpet, Yousufguda, SR Nagar,
          Madhura Nagar, Punjagutta, Srinagar Colony and other nearby areas
          across Hyderabad.
        </p>

      </details>

    </div>

  </div>

</section>
{/* ================= FINAL CTA ================= */}

<section
  id="appointment"
  className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 py-24"
>

  <div className="mx-auto max-w-6xl px-6 text-center">

    <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-white">

      BOOK YOUR APPOINTMENT TODAY

    </span>

    <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

      Your Healthy Smile Starts Here

    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-orange-100">

      Whether you need a routine dental check-up, dental implants,
      laser dentistry, gum treatment or smile enhancement,
      we are here to provide comfortable, personalized and
      evidence-based dental care.

    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-6">

      {/* CALL */}

      <a
        href="tel:+918074528763"
        className="rounded-full bg-white px-10 py-4 text-lg font-bold text-orange-600 transition hover:scale-105 hover:shadow-2xl"
      >
        📞 Call Now
      </a>

      {/* DIRECTIONS */}

      <a
  href="https://maps.app.goo.gl/Fiow6zV9W17xnxR47"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center rounded-full border-2 border-white px-10 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-orange-600"
>
  📍 Get Directions
</a>

    </div>

  </div>

</section>

{/* ================= NEARBY AREAS ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-600">
        NEARBY AREAS WE SERVE
      </span>

      <h2 className="mt-4 text-5xl font-black text-gray-900">
        Serving Patients Across Hyderabad
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
        Our clinic is conveniently located in Ameerpet and proudly serves
        patients from nearby areas across Hyderabad.
      </p>

    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <Link
        href="/dental-implants-yousufguda"
        className="rounded-2xl border border-orange-100 bg-orange-50 p-6 transition hover:-translate-y-2 hover:shadow-xl"
      >
        <h3 className="text-xl font-bold text-gray-900">
          Yousufguda
        </h3>

        <p className="mt-2 font-semibold text-orange-600">
          Dental Implants →
        </p>
      </Link>

      <Link
        href="/dental-implants-sr-nagar"
        className="rounded-2xl border border-orange-100 bg-orange-50 p-6 transition hover:-translate-y-2 hover:shadow-xl"
      >
        <h3 className="text-xl font-bold text-gray-900">
          SR Nagar
        </h3>

        <p className="mt-2 font-semibold text-orange-600">
          Dental Implants →
        </p>
      </Link>

      <Link
        href="/dental-implants-madhura-nagar"
        className="rounded-2xl border border-orange-100 bg-orange-50 p-6 transition hover:-translate-y-2 hover:shadow-xl"
      >
        <h3 className="text-xl font-bold text-gray-900">
          Madhura Nagar
        </h3>

        <p className="mt-2 font-semibold text-orange-600">
          Dental Implants →
        </p>
      </Link>

      <Link
        href="/dental-implants-punjagutta"
        className="rounded-2xl border border-orange-100 bg-orange-50 p-6 transition hover:-translate-y-2 hover:shadow-xl"
      >
        <h3 className="text-xl font-bold text-gray-900">
          Punjagutta
        </h3>

        <p className="mt-2 font-semibold text-orange-600">
          Dental Implants →
        </p>
      </Link>

      <Link
        href="/dental-implants-srinagar-colony"
        className="rounded-2xl border border-orange-100 bg-orange-50 p-6 transition hover:-translate-y-2 hover:shadow-xl"
      >
        <h3 className="text-xl font-bold text-gray-900">
          Srinagar Colony
        </h3>

        <p className="mt-2 font-semibold text-orange-600">
          Dental Implants →
        </p>
      </Link>

      <a
        href="https://maps.app.goo.gl/Fiow6zV9W17xnxR47"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl border-2 border-dashed border-orange-300 bg-white p-6 text-center transition hover:-translate-y-2 hover:bg-orange-50 hover:shadow-xl"
      >
        <h3 className="text-xl font-bold text-gray-900">
          📍 Visit Our Clinic
        </h3>

        <p className="mt-2 font-semibold text-orange-600">
          Get Directions →
        </p>
      </a>

    </div>

  </div>

</section>
    </main>
      </>
  );
}