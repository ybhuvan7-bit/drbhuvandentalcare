import Link from "next/link";
import Image from "next/image";

import {
  MapPin,
  Phone,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Award,
  HeartHandshake,
  Sparkles,
  Navigation,
  Stethoscope,
  BadgeCheck,
  Zap,
  Smile,
  Activity,
  ScanLine,
  CircleCheck,
} from "lucide-react";

import GoogleReviews from "../components/GoogleReviews";


/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata = {
  title:
    "Dentist in Yousufguda, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

  description:
    "Looking for a dentist in Yousufguda, Hyderabad? Dr. Bhuvan's Dental Laser & Implant Centre offers dental implants, gum treatment, laser dentistry, root canal treatment, teeth cleaning and comprehensive dental care.",

  keywords: [
    "dentist in Yousufguda",
    "dentist near Yousufguda",
    "dental clinic in Yousufguda",
    "dentist Yousufguda Hyderabad",
    "dental treatments Yousufguda",
    "dental implants Yousufguda",
    "gum treatment Yousufguda",
    "laser dentistry Yousufguda",
    "root canal treatment Yousufguda",
    "teeth cleaning Yousufguda",
    "dentist near Srinagar Colony",
    "dentist near Ameerpet",
    "dentist near Navodaya Colony",
    "dentist near Yellareddyguda",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dentist-in-yousufguda",
  },

  openGraph: {
    title:
      "Dentist in Yousufguda, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Comprehensive dental care in Yousufguda, Hyderabad including dental implants, gum treatment, laser dentistry, root canal treatment and preventive dental care.",

    url:
      "https://www.drbhuvandentalcare.com/dentist-in-yousufguda",

    siteName:
      "Dr. Bhuvan's Dental Laser & Implant Centre",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url:
          "https://www.drbhuvandentalcare.com/doctor.webp",

        width: 1200,
        height: 630,

        alt:
          "Dr. Bhuvanesh Yanamala - Dentist in Yousufguda, Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dentist in Yousufguda, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Dental implants, gum care, laser dentistry, root canal treatment and comprehensive dental care in Yousufguda, Hyderabad.",

    images: [
      "https://www.drbhuvandentalcare.com/doctor.webp",
    ],
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
};


/* =========================================================
   PAGE
========================================================= */

export default function DentistInYousufgudaPage() {


  /* =======================================================
     LOCAL SEO SCHEMA
  ======================================================= */

 /* =======================================================
   LOCAL BUSINESS + DENTIST + BREADCRUMB SCHEMA
======================================================= */

const schema = {
  "@context": "https://schema.org",

  "@graph": [

    /* =====================================================
       DENTAL CLINIC
    ===================================================== */

    {
      "@type": "Dentist",

      "@id":
        "https://www.drbhuvandentalcare.com/#dentist",

      name:
        "Dr. Bhuvan's Dental Laser & Implant Centre",

      url:
        "https://www.drbhuvandentalcare.com/",

      telephone:
        "+91 8074528763",

      image:
        "https://www.drbhuvandentalcare.com/doctor.webp",

      description:
        "Dr. Bhuvan's Dental Laser & Implant Centre provides dental implants, periodontal and gum treatment, laser dentistry, root canal treatment, teeth cleaning and comprehensive dental care in Yousufguda, Hyderabad.",

      medicalSpecialty:
        "Dentistry",

      address: {
        "@type": "PostalAddress",

        streetAddress:
          "Ganapati Complex, Navodaya Colony",

        addressLocality:
          "Yousufguda",

        addressRegion:
          "Telangana",

        addressCountry:
          "IN",
      },

      areaServed: [
  {
    "@type": "Place",
    name: "Yousufguda",
  },
  {
    "@type": "Place",
    name: "Srinagar Colony",
  },
  {
    "@type": "Place",
    name: "Ameerpet",
  },
  {
    "@type": "Place",
    name: "Navodaya Colony",
  },
  {
    "@type": "Place",
    name: "Yellareddyguda",
  },
  {
    "@type": "Place",
    name: "Madhura Nagar",
  },
  {
    "@type": "Place",
    name: "Kamalapuri Colony",
  },
  {
    "@type": "Place",
    name: "Sri Krishna Nagar",
  },
  {
    "@type": "Place",
    name: "Rehamath Nagar",
  },
  {
    "@type": "Place",
    name: "Borabanda",
  },
  {
    "@type": "Place",
    name: "SR Nagar",
  },
  {
    "@type": "Place",
    name: "Vengal Rao Nagar",
  },
  {
    "@type": "Place",
    name: "Jubilee Hills",
  },
  {
    "@type": "Place",
    name: "Banjara Hills",
  },
],

      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Dental Implants",
        },

        {
          "@type": "MedicalProcedure",
          name: "Gum Treatment",
        },

        {
          "@type": "MedicalProcedure",
          name: "Laser Dentistry",
        },

        {
          "@type": "MedicalProcedure",
          name: "Root Canal Treatment",
        },

        {
          "@type": "MedicalProcedure",
          name: "Teeth Cleaning",
        },

        {
          "@type": "MedicalProcedure",
          name: "Wisdom Tooth Treatment",
        },

        {
          "@type": "MedicalProcedure",
          name: "Cosmetic Dentistry",
        },
      ],
    },


    /* =====================================================
       DOCTOR
    ===================================================== */

    {
      "@type": "Person",

      "@id":
        "https://www.drbhuvandentalcare.com/#dr-bhuvanesh",

      name:
        "Dr. Bhuvanesh Yanamala",

      jobTitle:
        "Periodontist & Implantologist",

      description:
        "Dr. Bhuvanesh Yanamala is an MDS Periodontics specialist providing periodontal care, dental implants, laser dentistry and comprehensive dental treatment in Hyderabad.",

      image:
        "https://www.drbhuvandentalcare.com/doctor.webp",

      worksFor: {
        "@id":
          "https://www.drbhuvandentalcare.com/#dentist",
      },
    },


    /* =====================================================
       BREADCRUMB
    ===================================================== */

    {
      "@type":
        "BreadcrumbList",

      "@id":
        "https://www.drbhuvandentalcare.com/dentist-in-yousufguda#breadcrumb",

      itemListElement: [

        {
          "@type":
            "ListItem",

          position: 1,

          name:
            "Home",

          item:
            "https://www.drbhuvandentalcare.com/",
        },

        {
          "@type":
            "ListItem",

          position: 2,

          name:
            "Dentist in Yousufguda",

          item:
            "https://www.drbhuvandentalcare.com/dentist-in-yousufguda",
        },

      ],
    },

  ],
};


  /* =======================================================
     SERVICES
  ======================================================= */

  const services = [
    {
      title: "Dental Implants",

      href: "/dental-implants-yousufguda",

      icon: "🦷",

      description:
        "Advanced dental implant solutions for replacing missing teeth with natural-looking and functional results.",
    },

    {
      title: "Laser Dentistry",

      href: "/laser-dentistry-yousufguda",

      icon: "⚡",

      description:
        "Modern laser-assisted dental care for selected gum and soft-tissue procedures with a minimally invasive approach.",
    },

    {
      title: "Gum Treatment",

      href: "/gum-treatment-yousufguda",

      icon: "🩺",

      description:
        "Professional periodontal care for bleeding gums, gum disease, gum recession and other gum-related concerns.",
    },

    {
      title: "Root Canal Treatment",

      href: "/root-canal-treatment-yousufguda",

      icon: "🛡️",

      description:
        "Treatment for infected or damaged teeth designed to relieve pain and preserve the natural tooth whenever possible.",
    },

    {
      title: "Cosmetic Dentistry",

      href: "/cosmetic-dentistry-yousufguda",

      icon: "✨",

      description:
        "Personalized cosmetic dental treatments designed to improve the appearance and confidence of your smile.",
    },

    {
      title: "Teeth Cleaning",

      href: "/teeth-cleaning-yousufguda",

      icon: "🪥",

      description:
        "Professional scaling, polishing and preventive dental care to remove plaque, calculus and stains.",
    },

    {
      title: "Tooth Pain Treatment",

      href: "/tooth-pain-treatment-yousufguda",

      icon: "😣",

      description:
        "Evaluation and treatment to identify the underlying cause of persistent or recurring tooth pain.",
    },

    {
      title: "Wisdom Tooth Treatment",

      href: "/wisdom-tooth-treatment-yousufguda",

      icon: "🦷",

      description:
        "Evaluation and treatment for painful, impacted or problematic wisdom teeth.",
    },
  ];
    /* =======================================================
     NEARBY AREAS
  ======================================================= */

  const nearbyAreas = [
    "Yousufguda",
    "Srinagar Colony",
    "Ameerpet",
    "Navodaya Colony",
    "Yellareddyguda",
    "Madhura Nagar",
    "Kamalapuri Colony",
    "Sri Krishna Nagar",
    "Rehamath Nagar",
    "Borabanda",
    "SR Nagar",
    "Vengal Rao Nagar",
    "Jubilee Hills",
    "Banjara Hills",
  ];


  /* =======================================================
     PAGE JSX
  ======================================================= */

  return (
    <>

      {/* ===================================================
          STRUCTURED DATA
      =================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,106,0,0.22),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(255,106,0,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">

            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-300 backdrop-blur">
                <MapPin size={16} />
                DENTAL CLINIC IN YOUSUFGUDA
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Dentist in
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">
                  Yousufguda,
                </span>
                Hyderabad
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Advanced dental care for patients looking for a trusted
                <strong className="text-white">
                  {" "}
                  dentist near Yousufguda
                </strong>
                , Ameerpet and surrounding Hyderabad areas.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                Dr. Bhuvan's Dental Laser & Implant Centre combines
                periodontal expertise, dental implants, laser dentistry,
                gum care, root canal treatment and cosmetic dentistry with
                personalized treatment planning.
              </p>

              {/* CTA */}

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 font-extrabold text-white shadow-[0_15px_40px_rgba(249,115,22,0.28)] transition hover:-translate-y-1 hover:bg-orange-400"
                >
                  <Calendar size={19} />
                  Book Appointment
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="tel:+918074528763"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <Phone size={19} />
                  Call Now
                </a>
              </div>

              {/* TRUST */}

              <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <CircleCheck size={17} className="text-orange-400" />
                  Personalized Care
                </span>

                <span className="flex items-center gap-2">
                  <CircleCheck size={17} className="text-orange-400" />
                  Modern Dentistry
                </span>

                <span className="flex items-center gap-2">
                  <CircleCheck size={17} className="text-orange-400" />
                  Periodontal Expertise
                </span>
              </div>
            </div>

           {/* ================= RIGHT PREMIUM DOCTOR CARD ================= */}

<div className="relative">

  {/* Orange premium glow */}
  <div className="absolute -inset-8 rounded-[3rem] bg-orange-500/20 blur-3xl" />

  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">

    <div className="overflow-hidden rounded-[2rem] bg-[#07111f]">

      {/* TOP BAR */}

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.28em] text-orange-400">
            Dr. Bhuvan's
          </p>

          <p className="mt-1 text-sm font-bold text-white">
            Dental Laser & Implant Centre
          </p>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-2 text-xs font-black text-orange-300">
          <Star size={13} fill="currentColor" />
          4.9
        </div>

      </div>


      {/* DOCTOR IMAGE */}

      <div className="relative min-h-[390px] overflow-hidden">

        {/* Image */}

        <Image
          src="/doctor.webp"
          alt="Dr. Bhuvanesh Yanamala - Dentist in Yousufguda, Hyderabad"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-top"
        />

        {/* Dark cinematic overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/10 to-transparent" />

        {/* Subtle orange glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,115,0,0.18),transparent_35%)]" />


        {/* DOCTOR INFO */}

        <div className="absolute bottom-0 left-0 right-0 p-5">

          <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">

            <div className="flex items-end justify-between gap-4">

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-orange-400">
                  Dental Specialist
                </p>

                <h2 className="mt-1 text-xl font-black text-white">
                  Dr. Bhuvanesh Yanamala
                </h2>

                <p className="mt-1 text-xs font-medium text-slate-300">
                  MDS Periodontics • Implantology • Laser Dentistry
                </p>

              </div>

              <div className="hidden shrink-0 rounded-xl bg-orange-500 px-3 py-2 text-center shadow-lg shadow-orange-500/20 sm:block">

                <p className="text-sm font-black text-white">
                  4.9 ★
                </p>

                <p className="text-[9px] font-semibold text-orange-50">
                  Google Rating
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* PREMIUM STATS */}

      <div className="grid grid-cols-3 gap-2 p-3">

        {[
          ["4.9★", "Google Rating"],
          ["Implants", "Advanced Care"],
          ["Laser", "Modern Dentistry"],
        ].map(([value, label]) => (

          <div
            key={label}
            className="group rounded-2xl border border-white/5 bg-white/[0.045] px-3 py-4 text-center transition duration-300 hover:border-orange-400/20 hover:bg-orange-500/10"
          >

            <p className="text-sm font-black text-orange-400">
              {value}
            </p>

            <p className="mt-1 text-[9px] font-semibold text-slate-400">
              {label}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>

</div>

</div>

          {/* HERO BOTTOM STATS */}

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Star,
                title: "4.9 Google Rating",
                text: "Trusted by patients",
              },
              {
                icon: Award,
                title: "MDS Periodontics",
                text: "Specialized expertise",
              },
              {
                icon: Zap,
                title: "Laser Dentistry",
                text: "Modern treatment options",
              },
              {
                icon: HeartHandshake,
                title: "Patient Focused",
                text: "Personalized care",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
                >
                  <Icon size={22} className="text-orange-400" />

                  <p className="mt-4 font-bold text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
            Your Local Dental Care Partner
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Looking for a Dentist Near Yousufguda?
          </h2>

          <div className="mx-auto mt-7 max-w-4xl space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Finding the right dental clinic is about more than location.
              You need careful diagnosis, clear communication and a treatment
              plan suited to your oral health.
            </p>

            <p>
              At{" "}
              <strong className="text-slate-900">
                Dr. Bhuvan's Dental Laser & Implant Centre
              </strong>
              , patients from Yousufguda, Ameerpet, Srinagar Colony,
              Navodaya Colony, Yellareddyguda and nearby areas can access
              comprehensive dental care in one location.
            </p>

            <p>
              Our approach combines preventive care with advanced treatments
              including dental implants, periodontal care, laser dentistry,
              root canal treatment and cosmetic dentistry.
            </p>
          </div>
        </div>
      </section>

      {/* =======================================================
    CONTEXTUAL DENTAL CARE
======================================================= */}

<section className="relative overflow-hidden bg-white py-16 lg:py-20">

  <div className="mx-auto max-w-5xl px-6">

    <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-orange-50/40 to-white p-7 shadow-sm sm:p-10">

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">
            Complete Dental Care
          </span>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Dental Care Designed
            <span className="block text-orange-500">
              Around Your Needs
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            From preventive care to advanced procedures, Dr. Bhuvan's
            Dental Laser & Implant Centre provides comprehensive dental
            treatment for patients from Yousufguda and surrounding areas.
          </p>

        </div>


        {/* RIGHT */}

        <div className="text-sm leading-8 text-slate-600">

          <p>
            Patients looking for{" "}
            <Link
              href="/dental-implants-yousufguda"
              className="font-bold text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              dental implants in Yousufguda
            </Link>{" "}
            can explore our implant treatment options for replacing
            missing teeth.
          </p>

          <p className="mt-3">
            For bleeding gums, gum inflammation or periodontal concerns,
            learn more about our{" "}
            <Link
              href="/gum-treatment-yousufguda"
              className="font-bold text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              gum treatment in Yousufguda
            </Link>.
          </p>

          <p className="mt-3">
            We also provide{" "}
            <Link
              href="/laser-dentistry-yousufguda"
              className="font-bold text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              laser dentistry
            </Link>{" "}
            for selected gum and soft-tissue procedures.
          </p>

          <p className="mt-3">
            If you have a painful or infected tooth, our{" "}
            <Link
              href="/root-canal-treatment-yousufguda"
              className="font-bold text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              root canal treatment
            </Link>{" "}
            page explains the treatment in more detail.
          </p>

          <p className="mt-3">
            For preventive oral care, you can also learn about{" "}
            <Link
              href="/teeth-cleaning-yousufguda"
              className="font-bold text-orange-600 underline decoration-orange-200 underline-offset-4 hover:text-orange-700"
            >
              professional teeth cleaning
            </Link>{" "}
            and maintenance.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ================= SERVICES ================= */}

      <section className="relative overflow-hidden bg-[#fff8f1] py-24">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600 shadow-sm">
              Our Dental Services
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Comprehensive Dental Treatments
              <span className="block text-orange-500">
                in Yousufguda
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From preventive dentistry to advanced implant and periodontal
              care, explore treatment options designed around your needs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative overflow-hidden rounded-[1.8rem] border p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  index < 3
                    ? "border-slate-800 bg-[#0b1422] text-white"
                    : "border-orange-100 bg-white text-slate-950"
                }`}
              >
                <div
                  className={`absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition group-hover:scale-125 ${
                    index < 3
                      ? "bg-orange-500/20"
                      : "bg-orange-100"
                  }`}
                />

                <div className="relative">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg ${
                      index < 3
                        ? "bg-orange-500"
                        : "bg-orange-50"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`mt-7 text-xl font-black ${
                      index < 3
                        ? "text-white"
                        : "text-slate-950"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      index < 3
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}
                  >
                    {service.text}
                  </p>

                  <div
                    className={`mt-7 flex items-center gap-2 text-sm font-black ${
                      index < 3
                        ? "text-orange-400"
                        : "text-orange-600"
                    }`}
                  >
                    Explore Treatment
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/dental-treatments-yousufguda"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-black text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore All Dental Treatments
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

     {/* ================= WHY CHOOSE DR. BHUVAN ================= */}

<section className="relative overflow-hidden bg-white py-24 lg:py-28">

  {/* Premium background glow */}

  <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl" />

  <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />


  <div className="relative mx-auto max-w-7xl px-6">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
        <BadgeCheck size={14} />
        Why Choose Us
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        Why Choose
        <span className="block text-orange-500">
          Dr. Bhuvan's Dental Laser & Implant Centre?
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        Personalized dental care backed by periodontal expertise,
        advanced technology and a treatment approach focused on your
        individual oral health needs.
      </p>

    </div>


    {/* ================= SPECIALIST IDENTITY ================= */}

    <div className="mx-auto mt-14 max-w-5xl">

      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#07111f] p-7 shadow-[0_25px_80px_rgba(15,23,42,0.12)] sm:p-9">

        {/* Glow */}

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />


        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <Stethoscope size={23} />
              </div>

              <div>

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-orange-400">
                  Specialist Care
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  Dr. Bhuvanesh Yanamala
                </p>

              </div>

            </div>


            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              With an MDS in Periodontics and a focused interest in
              implantology and laser dentistry, treatment is planned around
              proper diagnosis, periodontal health and long-term oral
              function.
            </p>

          </div>


          {/* RIGHT BADGES */}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-center">
              <p className="text-lg font-black text-orange-400">
                MDS
              </p>

              <p className="mt-1 text-[10px] font-semibold text-slate-400">
                Periodontics
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-center">
              <p className="text-lg font-black text-orange-400">
                Implant
              </p>

              <p className="mt-1 text-[10px] font-semibold text-slate-400">
                Dentistry
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-center">
              <p className="text-lg font-black text-orange-400">
                Laser
              </p>

              <p className="mt-1 text-[10px] font-semibold text-slate-400">
                Dentistry
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-center">
              <p className="text-lg font-black text-orange-400">
                Care
              </p>

              <p className="mt-1 text-[10px] font-semibold text-slate-400">
                Patient Focused
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ================= ADVANTAGES ================= */}

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          icon: Activity,
          number: "01",
          title: "Periodontal Expertise",
          text: "Specialized focus on gum health, periodontal disease, gum recession and the tissues supporting your teeth.",
        },
        {
          icon: Sparkles,
          number: "02",
          title: "Advanced Implant Dentistry",
          text: "Implant treatment planned according to individual clinical findings, available bone and long-term restorative needs.",
        },
        {
          icon: Zap,
          number: "03",
          title: "Laser Dentistry",
          text: "Modern laser-assisted options for selected periodontal and soft-tissue procedures when clinically appropriate.",
        },
        {
          icon: ShieldCheck,
          number: "04",
          title: "Comprehensive Gum Care",
          text: "Evaluation and treatment for bleeding gums, inflammation, periodontal problems, recession and maintenance needs.",
        },
        {
          icon: HeartHandshake,
          number: "05",
          title: "Personalized Treatment Planning",
          text: "Every treatment plan begins with clinical evaluation and is tailored to the patient's specific dental needs.",
        },
        {
          icon: CircleCheck,
          number: "06",
          title: "One-to-One Patient Care",
          text: "Clear communication, focused appointments and a comfortable approach throughout your treatment journey.",
        },
      ].map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.number}
            className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_25px_60px_rgba(249,115,22,0.12)]"
          >

            {/* Hover glow */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-100/70 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />


            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <span className="text-xs font-black tracking-[0.2em] text-slate-300">
                  {item.number}
                </span>

              </div>


              <h3 className="mt-6 text-xl font-black text-slate-950">
                {item.title}
              </h3>


              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>


              <div className="mt-6 flex items-center gap-2 text-sm font-black text-orange-600">

                <span>
                  Patient-focused care
                </span>

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>


    {/* ================= TRUST LINE ================= */}

    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-sm font-bold text-slate-500">

      <span className="flex items-center gap-2">
        <CheckCircle
          size={17}
          className="text-orange-500"
        />
        Evidence-based treatment
      </span>

      <span className="flex items-center gap-2">
        <CheckCircle
          size={17}
          className="text-orange-500"
        />
        Modern dental technology
      </span>

      <span className="flex items-center gap-2">
        <CheckCircle
          size={17}
          className="text-orange-500"
        />
        Personalized treatment plans
      </span>

    </div>

  </div>

</section>
      {/* ================= AREAS ================= */}

      <section className="bg-[#07111f] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-300">
            Conveniently Located
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Dental Clinic Near
            <span className="text-orange-400"> Yousufguda</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Our clinic serves patients from Yousufguda and nearby residential
            and commercial areas across this part of Hyderabad.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300"
              >
                <MapPin size={14} className="text-orange-400" />
                {area}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 text-left backdrop-blur-xl sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                  Clinic Location
                </p>

                <h3 className="mt-2 text-xl font-black">
                  Ganapati Complex, Navodaya Colony Road
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Sri Krishna Nagar, Ameerpet, Yousufguda,
                  Hyderabad, Telangana 500073
                </p>
              </div>

              <a
                href="tel:+918074528763"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-400"
              >
                <Phone size={17} />
                +91 80745 28763
              </a>
            </div>
          </div>
        </div>
      </section>

{/* =======================================================
    RELATED DENTAL TREATMENTS
======================================================= */}

<section className="relative overflow-hidden bg-white py-20 lg:py-24">

  <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-6xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600">
        Related Dental Care
      </span>

      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        Explore Dental Treatments
        <span className="block text-orange-500">
          Available in Yousufguda
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
        Explore our detailed treatment pages to learn more about
        specific dental, gum and implant procedures available at
        Dr. Bhuvan's Dental Laser & Implant Centre.
      </p>

    </div>


    {/* TREATMENT LINKS */}

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Dental Implants in Yousufguda",
          href: "/dental-implants-yousufguda",
          text:
            "Learn about implant options for replacing missing teeth and restoring function.",
          icon: "🦷",
        },

        {
          title: "Gum Treatment in Yousufguda",
          href: "/gum-treatment-yousufguda",
          text:
            "Explore treatment options for gum disease, inflammation, recession and periodontal concerns.",
          icon: "🩺",
        },

        {
          title: "Gum Bleeding Treatment",
          href: "/gum-bleeding-treatment-yousufguda",
          text:
            "Find out why gums may bleed and when professional periodontal evaluation is recommended.",
          icon: "🩸",
        },

        {
          title: "Laser Dentistry in Yousufguda",
          href: "/laser-dentistry-yousufguda",
          text:
            "Discover selected laser-assisted procedures for gum and soft-tissue dental care.",
          icon: "⚡",
        },

        {
          title: "Root Canal Treatment",
          href: "/root-canal-treatment-yousufguda",
          text:
            "Learn about treatment for infected or damaged teeth and preserving natural teeth.",
          icon: "🛡️",
        },

        {
          title: "Teeth Cleaning in Yousufguda",
          href: "/teeth-cleaning-yousufguda",
          text:
            "Professional scaling and polishing to help maintain healthy teeth and gums.",
          icon: "🪥",
        },

        {
          title: "Tooth Pain Treatment",
          href: "/tooth-pain-treatment-yousufguda",
          text:
            "Understand common causes of persistent tooth pain and when to seek evaluation.",
          icon: "😣",
        },

        {
          title: "Wisdom Tooth Treatment",
          href: "/wisdom-tooth-treatment-yousufguda",
          text:
            "Evaluation and treatment for painful, impacted or problematic wisdom teeth.",
          icon: "🦷",
        },

        {
          title: "Cosmetic Dentistry",
          href: "/cosmetic-dentistry-yousufguda",
          text:
            "Explore personalized options for improving smile appearance and confidence.",
          icon: "✨",
        },

      ].map((item) => (

        <Link
          key={item.href}
          href={item.href}
          className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5"
        >

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-105">
              {item.icon}
            </div>

            <div className="min-w-0">

              <h3 className="text-sm font-black leading-5 text-slate-900 transition-colors group-hover:text-orange-600">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {item.text}
              </p>

              <div className="mt-3 flex items-center gap-1.5 text-xs font-black text-orange-600">

                Explore Treatment

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>

{/* =======================================================
    NEARBY DENTAL CARE
======================================================= */}

<section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24">

  {/* Background glow */}
  <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-6xl px-6">

    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
        Nearby Dental Care
      </span>

      <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
        Looking for a Dentist
        <span className="block text-orange-400">
          Near Yousufguda?
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
        Our clinic in Navodaya Colony, Yousufguda is conveniently
        accessible from several nearby residential and commercial
        areas of central-west Hyderabad.
      </p>

    </div>


    {/* Location Links */}

    <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">

      {[
        {
          name: "Dentist in Ameerpet",
          href: "/dentist-in-ameerpet",
        },

        {
          name: "Dentist in Srinagar Colony",
          href: "/dentist-in-srinagar-colony",
        },

        {
          name: "Dentist in Navodaya Colony",
          href: "/dentist-in-navodaya-colony",
        },

        {
          name: "Dentist in Sri Krishna Nagar",
          href: "/dentist-in-sri-krishna-nagar",
        },

        {
          name: "Dental Care in Yousufguda",
          href: "/dentist-in-yousufguda",
        },

        {
          name: "Dental Care Near Ameerpet",
          href: "/dentist-in-ameerpet",
        },

      ].map((location) => (

        <Link
          key={`${location.name}-${location.href}`}
          href={location.href}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300"
        >

          <MapPin
            size={14}
            className="text-orange-400 transition-transform duration-300 group-hover:scale-110"
          />

          {location.name}

          <ArrowRight
            size={13}
            className="opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
          />

        </Link>

      ))}

    </div>


    {/* Location card */}

    <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
            <MapPin size={22} />
          </div>

          <div>

            <p className="text-xs font-black uppercase tracking-[0.15em] text-orange-400">
              Clinic Location
            </p>

            <h3 className="mt-2 text-base font-black text-white">
              Ganapati Complex, Navodaya Colony, Yousufguda
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Hyderabad, Telangana
            </p>

          </div>

        </div>


        <div className="flex shrink-0 flex-wrap gap-3">

          <a
            href="tel:+918074528763"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-xs font-black text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400"
          >
            <Phone size={15} />
            Call Clinic
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvan's+Dental+Laser+%26+Implant+Centre+Yousufguda+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-black text-white transition-all hover:border-orange-400/40 hover:bg-white/10"
          >
            <Navigation size={15} />
            Get Directions
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
     {/* ================= GOOGLE REVIEWS ================= */}

<section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">

  {/* Premium background glow */}

  <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-100/60 blur-3xl" />

  <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />


  <div className="relative mx-auto max-w-6xl px-6">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-2xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600 shadow-sm">
        <Star size={13} fill="currentColor" />
        Patient Experience
      </span>

      <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
        What Our Patients
        <span className="text-orange-500"> Say</span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
        Trusted by patients for personalized dental care, periodontal
        expertise, implant dentistry and modern treatment options in
        Yousufguda and nearby areas.
      </p>

    </div>


    {/* ================= MAIN REVIEW CARD ================= */}

    <div className="mx-auto mt-14 max-w-5xl">

      <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)]">

        {/* Orange top accent */}

        <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-500" />


        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= RATING SIDE ================= */}

          <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#07111f] px-8 py-12 text-center sm:px-12">

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />


            <div className="relative">

              {/* Google-style icon */}

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl">

                <span className="text-3xl font-black text-blue-500">
                  G
                </span>

              </div>


              <p className="mt-6 text-sm font-bold text-slate-300">
                Google Rating
              </p>


              <div className="mt-2 flex items-center justify-center gap-2">

                <span className="text-5xl font-black tracking-tight text-white">
                  4.9
                </span>

                <span className="text-xl font-black text-orange-400">
                  ★
                </span>

              </div>


              {/* Stars */}

              <div className="mt-3 flex justify-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                    className="text-orange-400"
                  />

                ))}

              </div>


              <p className="mt-3 text-xs font-semibold text-slate-400">
                130+ Google Reviews
              </p>


              <div className="mx-auto mt-7 h-px w-24 bg-white/10" />


              <p className="mt-6 max-w-xs text-xs leading-6 text-slate-400">
                Patient feedback helps us continue improving every aspect
                of the dental experience.
              </p>

            </div>

          </div>


          {/* ================= TRUST SIDE ================= */}

          <div className="flex flex-col justify-center px-8 py-12 sm:px-12">

            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
              Trusted Dental Care
            </p>


            <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
              A dental experience built around
              <span className="text-orange-500">
                {" "}trust, comfort & care.
              </span>
            </h3>


            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              From routine dental care to implants, gum treatment and
              laser-assisted procedures, every treatment begins with
              proper evaluation and personalized planning.
            </p>


            {/* Trust points */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Personalized treatment planning",
                "Periodontal & gum care expertise",
                "Advanced implant dentistry",
                "Modern laser dentistry",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50"
                >

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <CheckCircle size={15} />
                  </div>

                  <span className="text-xs font-bold leading-5 text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>


            {/* CTA */}

            <div className="mt-9 flex flex-wrap items-center gap-4">

              <a
                href="/reviews"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
              >
                <Star size={16} fill="currentColor" />
                View Google Reviews
                <ArrowRight size={16} />
              </a>


              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">

                <ShieldCheck
                  size={17}
                  className="text-orange-500"
                />

                Patient-focused care

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ================= BOTTOM TRUST STRIP ================= */}

    <div className="mt-8 grid gap-3 sm:grid-cols-3">

      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
        <p className="text-sm font-black text-slate-900">
          4.9 ★
        </p>
        <p className="mt-1 text-[11px] font-semibold text-slate-500">
          Google Rating
        </p>
      </div>


      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
        <p className="text-sm font-black text-slate-900">
          130+
        </p>
        <p className="mt-1 text-[11px] font-semibold text-slate-500">
          Google Reviews
        </p>
      </div>


      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
        <p className="text-sm font-black text-slate-900">
          Yousufguda
        </p>
        <p className="mt-1 text-[11px] font-semibold text-slate-500">
          Hyderabad Dental Care
        </p>
      </div>

    </div>

  </div>

</section>

     {/* ================= SEO FAQ ================= */}

<section className="relative overflow-hidden bg-white py-24 lg:py-28">

  {/* Background glow */}

  <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

  <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />


  <div className="relative mx-auto max-w-5xl px-6">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
        Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
        Dental Care Questions
        <span className="block text-orange-500">
          Patients Often Ask
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        Find answers to common questions about dental treatment,
        implants, gum care and laser dentistry at Dr. Bhuvan's Dental
        Laser & Implant Centre in Yousufguda, Hyderabad.
      </p>

    </div>


    {/* ================= FAQ LIST ================= */}

    <div className="mx-auto mt-14 max-w-4xl space-y-4">

      {[
        {
          question:
            "Where is Dr. Bhuvan's Dental Laser & Implant Centre located?",
          answer:
            "Dr. Bhuvan's Dental Laser & Implant Centre is located at Ganapati Complex, Navodaya Colony, Yousufguda, Hyderabad. The clinic is conveniently accessible for patients from Yousufguda, Srinagar Colony, Ameerpet, Yellareddyguda, Madhura Nagar, Kamalapuri Colony, Sri Krishna Nagar, Rehamath Nagar and nearby areas.",
        },

        {
          question:
            "Do you provide dental implants in Yousufguda?",
          answer:
            "Yes. We provide dental implant consultation and treatment planning for missing teeth, including single-tooth, multiple-tooth and suitable full-mouth implant cases. Implant treatment is planned after clinical evaluation and appropriate diagnostic assessment.",
        },

        {
          question:
            "Do you provide gum treatment in Yousufguda?",
          answer:
            "Yes. Gum care includes evaluation and treatment for bleeding gums, gum inflammation, periodontal disease, gum recession, loose teeth and other gum-related concerns. Treatment is planned according to the patient's periodontal condition.",
        },

        {
          question:
            "What laser dentistry treatments are available?",
          answer:
            "Laser-assisted dentistry may be used for selected gum and soft-tissue procedures, depending on the clinical requirement. The treatment options are discussed after examination and diagnosis.",
        },

        {
          question:
            "Do you provide root canal treatment in Yousufguda?",
          answer:
            "Yes. Root canal treatment is provided for teeth affected by infection or significant damage. The dentist evaluates the tooth and recommends the appropriate treatment to help preserve the natural tooth whenever possible.",
        },

        {
          question:
            "Do you provide wisdom tooth treatment?",
          answer:
            "Yes. Wisdom teeth can be evaluated when they cause pain, swelling, difficulty opening the mouth, food trapping or other problems. Treatment depends on the position and condition of the tooth.",
        },

        {
          question:
            "Is teeth cleaning and scaling available at the clinic?",
          answer:
            "Yes. Professional teeth cleaning, scaling and polishing can help remove plaque and calculus and support good oral and gum health. The recommended frequency depends on individual oral health needs.",
        },

        {
          question:
            "How can I book a dental appointment in Yousufguda?",
          answer:
            "You can contact Dr. Bhuvan's Dental Laser & Implant Centre by phone or WhatsApp to request an appointment. The clinic follows a personalized appointment-based approach for dental consultations and treatments.",
        },

      ].map((faq, index) => (

        <details
          key={faq.question}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5"
        >

          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 sm:px-7 sm:py-6">

            <div className="flex items-start gap-4">

              {/* Number */}

              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[10px] font-black text-orange-600 transition-colors duration-300 group-open:bg-orange-500 group-open:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>


              <h3 className="text-sm font-black leading-6 text-slate-900 sm:text-base">
                {faq.question}
              </h3>

            </div>


            {/* Plus icon */}

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-lg font-medium text-orange-500 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-500 group-open:text-white">
              +
            </span>

          </summary>


          {/* Answer */}

          <div className="border-t border-slate-100 px-6 pb-6 pt-5 sm:px-7">

            <div className="pl-11">

              <p className="text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>

            </div>

          </div>

        </details>

      ))}

    </div>


    {/* ================= BOTTOM TRUST MESSAGE ================= */}

    <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-orange-100 bg-orange-50/60 px-6 py-5 text-center">

      <p className="text-sm font-semibold leading-7 text-slate-700">
        Not sure which dental treatment you need?
        <span className="font-black text-orange-600">
          {" "}A clinical evaluation can help determine the right treatment
          for your dental and gum health.
        </span>
      </p>

    </div>

  </div>

</section>

      {/* ================= FINAL CTA ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-24 text-white">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Smile size={32} />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
            Looking for a Dentist in Yousufguda?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Schedule a consultation with Dr. Bhuvan's Dental Laser &
            Implant Centre for personalized dental care in Yousufguda,
            Ameerpet and nearby Hyderabad areas.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-black text-orange-600 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <Calendar size={19} />
              Book Appointment
            </Link>

            <a
              href="tel:+918074528763"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/70 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-orange-600"
            >
              <Phone size={19} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}