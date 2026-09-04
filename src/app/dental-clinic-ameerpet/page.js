import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dental Clinic in Ameerpet, Hyderabad | Dr Bhuvan's Dental",
  description:
    "Dr Bhuvan's Dental Laser & Implant Centre is a dental clinic in Ameerpet, Hyderabad offering dental implants, root canal treatment, teeth cleaning, gum treatment and personalized dental care.",
  alternates: {
    canonical: "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet",
  },
  openGraph: {
    title: "Dental Clinic in Ameerpet, Hyderabad | Dr Bhuvan's Dental",
    description:
      "Personalized dental care in Ameerpet, Hyderabad by Dr. Bhuvanesh Yanamala.",
    url: "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet",
    type: "website",
    images: [
      {
        url: "https://www.drbhuvandentalcare.com/clinic/clinic3.webp",
        width: 1200,
        height: 900,
        alt: "Dr Bhuvan's Dental Laser & Implant Centre in Ameerpet",
      },
    ],
  },
};

export default function DentalClinicAmeerpetPage() {
    const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What dental treatments are available in Ameerpet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treatment options may include teeth cleaning, gum treatment, root canal treatment, dental implants, restorative dentistry, smile makeover and selected laser-assisted procedures.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide dental implants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dental implant treatment can be considered for suitable patients with missing teeth after a clinical evaluation and treatment planning.",
      },
    },
    {
      "@type": "Question",
      name: "Can I visit for bleeding gums or gum problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Bleeding gums, gum swelling, bad breath and other periodontal concerns can be evaluated during a dental consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide teeth cleaning in Ameerpet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional teeth cleaning is available for patients who need plaque, calculus and surface-stain removal as part of their oral hygiene care.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a dental appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact the clinic directly by phone or send a message through WhatsApp to request an appointment.",
      },
    },
  ],
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id":
    "https://www.drbhuvandentalcare.com/#dentist",
  name: "Dr Bhuvan's Dental Laser & Implant Centre",
  url: "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet",
  telephone: "+918074528763",
  image:
    "https://www.drbhuvandentalcare.com/clinic/clinic3.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500073",
    addressCountry: "IN",
  },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.drbhuvandentalcare.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Dental Clinic in Ameerpet",
      item:
        "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet",
    },
  ],
};
  return (
    <main className="min-h-screen bg-white text-slate-800">

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(localBusinessSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
  <nav
    aria-label="Breadcrumb"
    className="text-sm text-slate-500"
  >
    <Link
      href="/"
      className="transition hover:text-orange-600"
    >
      Home
    </Link>

    <span className="mx-2 text-slate-300">/</span>

    <span className="font-medium text-slate-700">
      Dental Clinic in Ameerpet
    </span>
  </nav>
</div>
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

         <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">

            {/* Location badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-700 shadow-sm">
              📍 Ameerpet, Hyderabad
            </div>

            {/* H1 */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Dental Clinic in Ameerpet,
              <span className="block text-orange-600">
                Hyderabad
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Comprehensive dental care focused on healthy gums, strong teeth
              and confident smiles — with modern treatment options and
              personalized care by Dr. Bhuvanesh Yanamala.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="https://wa.me/918074528763?text=Hello%20Dr%20Bhuvan%27s%20Dental%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-xl"
              >
                Book an Appointment
              </a>

              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center rounded-xl border border-orange-200 bg-white px-7 py-4 text-base font-semibold text-orange-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50"
              >
                Call 80745 28763
              </a>

            </div>

            {/* Trust cards */}
            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <div className="text-2xl">🦷</div>

                <p className="mt-2 font-semibold text-slate-900">
                  Comprehensive Care
                </p>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  From preventive care to advanced treatments
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <div className="text-2xl">✨</div>

                <p className="mt-2 font-semibold text-slate-900">
                  Modern Dentistry
                </p>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Laser-assisted and contemporary treatment options
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <div className="text-2xl">👨‍⚕️</div>

                <p className="mt-2 font-semibold text-slate-900">
                  Personalized Care
                </p>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Treatment planned around your dental needs
                </p>
              </div>

            </div>

          </div>
         <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-white p-2 shadow-2xl shadow-orange-900/10">
  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
    <Image
  src="/clinic/clinic1.webp"
  alt="Comfortable reception area at Dr Bhuvan's Dental Laser & Implant Centre"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 55vw"
/>
  </div>
</div>
        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Dental Care in Ameerpet
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Your dental health deserves more than just temporary relief
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Dental problems can start small — sensitivity, bleeding gums,
              plaque buildup, a chipped tooth or occasional pain — and become
              more complicated when ignored.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              At Dr Bhuvan&apos;s Dental Laser &amp; Implant Centre, we focus on
              understanding the underlying dental problem and planning care
              accordingly. Whether you need routine teeth cleaning, gum
              treatment, restorative dentistry, dental implants or cosmetic
              dental care, our approach is centered around long-term oral
              health.
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/918074528763?text=Hello%20Dr%20Bhuvan%27s%20Dental%2C%20I%20would%20like%20to%20know%20more%20about%20dental%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-orange-600 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-700"
              >
                Talk to Our Dental Team →
              </a>
            </div>

          </div>


          {/* Why choose us */}
          <div className="rounded-3xl border border-orange-100 bg-orange-50/50 p-7 shadow-sm sm:p-9">

            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Why Patients Choose Us
            </p>

            <div className="mt-6 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Diagnosis before treatment
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Your treatment plan is based on your dental condition and
                    individual needs.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Focus on gum and tooth health
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Healthy gums and supporting tissues are an important part
                    of long-term dental health.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Modern treatment options
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Treatment options may include laser-assisted procedures,
                    implants and restorative or cosmetic dentistry.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Personalized dental care
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Every patient&apos;s dental concerns are different, so care
                    is planned accordingly.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Our Dental Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Complete dental care in Ameerpet
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore treatment options available for common dental concerns,
              gum problems, missing teeth and smile-related needs.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Dental Implants */}
            <Link
              href="/dental-implants-ameerpet"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                🦷
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-orange-600">
                Dental Implants
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Implant-based tooth replacement options for patients with
                missing teeth.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-orange-600">
                Explore Dental Implants →
              </span>
            </Link>


            {/* Root Canal */}
            <Link
              href="/root-canal-treatment-yousufguda"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                🩺
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-orange-600">
                Root Canal Treatment
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Treatment for infected or damaged tooth pulp with the goal of
                preserving the natural tooth whenever possible.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-orange-600">
                Learn About Root Canal Treatment →
              </span>
            </Link>


            {/* Teeth Cleaning */}
            <Link
              href="/teeth-cleaning-ameerpet"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                ✨
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-orange-600">
                Teeth Cleaning
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Professional cleaning to help manage plaque, calculus,
                surface stains and gum-related concerns.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-orange-600">
                Explore Teeth Cleaning →
              </span>
            </Link>


            {/* Gum Treatment */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                🌿
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Gum Treatment
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Evaluation and treatment for bleeding gums, gum infection,
                periodontal problems and supporting tissue concerns.
              </p>

            </div>


            {/* Smile Makeover */}
            <Link
              href="/smile-makeover-ameerpet"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                😊
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-orange-600">
                Smile Makeover
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Personalized cosmetic dental planning to improve the appearance
                of your smile.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-orange-600">
                Explore Smile Makeover →
              </span>

            </Link>


            {/* Laser Dentistry */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                💎
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Laser Dentistry
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Laser-assisted dental procedures may be considered for selected
                gum and soft-tissue treatments.
              </p>

            </div>

          </div>
        </div>
      </section>

        {/* =========================================================
          MEET DR BHUVANESH
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-orange-50 shadow-lg">
            <div className="relative aspect-[4/3]">
              <Image
  src="/doctor.webp"
  alt="Dr. Bhuvanesh Yanamala, Periodontist and Implantologist in Ameerpet, Hyderabad"
  fill
  className="object-cover object-top"
  sizes="(max-width: 1024px) 100vw, 45vw"
/>
            </div>
          </div>

          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Meet Your Dentist
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Personalized dental care by Dr. Bhuvanesh Yanamala
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Dr. Bhuvanesh Yanamala, BDS, MDS (Periodontics), is a
              Periodontist and Implantologist providing comprehensive dental
              care with a focus on gum health, tooth preservation and
              long-term oral health.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              At Dr Bhuvan&apos;s Dental Laser &amp; Implant Centre, treatment
              is planned after understanding the patient&apos;s concerns,
              clinical condition and individual dental needs.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <p className="font-semibold text-slate-900">
                  BDS, MDS (Periodontics)
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Periodontist &amp; Implantologist
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <p className="font-semibold text-slate-900">
                  Comprehensive Care
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Preventive, restorative, gum and implant care
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* =========================================================
          OUR CLINIC
      ========================================================= */}
      <section className="bg-orange-50/40">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Our Clinic
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A comfortable and modern dental clinic in Ameerpet
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our clinic environment is designed to provide a clean,
              comfortable and professional setting for dental consultations
              and treatments.
            </p>

          </div>


          {/* Clinic photos */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {/* Reception */}
            <div className="group overflow-hidden rounded-3xl bg-white shadow-sm">

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/clinic/clinic1.webp"
                  alt="Reception area at Dr Bhuvan's Dental Laser & Implant Centre"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Welcoming Reception
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A welcoming reception and waiting area for patients visiting
                  our dental clinic in Ameerpet.
                </p>
              </div>

            </div>


            {/* Treatment room */}
            <div className="group overflow-hidden rounded-3xl bg-white shadow-sm">

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/clinic/clinic2.webp"
                  alt="Dental treatment room at Dr Bhuvan's Dental Laser & Implant Centre"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Modern Treatment Environment
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A dedicated clinical environment equipped for routine and
                  advanced dental procedures.
                </p>
              </div>

            </div>


            {/* Consultation */}
            <div className="group overflow-hidden rounded-3xl bg-white shadow-sm">

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/clinic/clinic4.webp"
                  alt="Consultation area at Dr Bhuvan's Dental Laser & Implant Centre"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Private Consultation Space
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A dedicated space for discussing dental concerns and
                  planning personalized treatment.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          STERILIZATION & SAFETY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 shadow-lg">
            <div className="relative aspect-[4/3]">
              <Image
                src="/clinic/clinic7.webp"
                alt="Sterilization equipment at Dr Bhuvan's Dental Laser & Implant Centre"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>


          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Cleanliness &amp; Safety
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Attention to sterilization and clinical hygiene
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Maintaining proper infection-control practices is an essential
              part of responsible dental care. Our clinic includes dedicated
              sterilization equipment as part of our clinical setup.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-5">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-orange-600 shadow-sm">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Dedicated sterilization setup
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Sterilization equipment is maintained as part of our
                    clinical workflow.
                  </p>
                </div>

              </div>


              <div className="flex gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-5">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-orange-600 shadow-sm">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Clean clinical environment
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    A clean and organized treatment environment helps create a
                    comfortable experience for patients.
                  </p>
                </div>

              </div>


              <div className="flex gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-5">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-orange-600 shadow-sm">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Patient-focused care
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    We aim to make every dental visit professional,
                    comfortable and focused on your individual needs.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
            {/* =========================================================
          DENTAL PROBLEMS
      ========================================================= */}
      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Dental Problems We Help With
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Care for common dental concerns
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Whether you are dealing with tooth pain, bleeding gums, missing
              teeth or concerns about your smile, a dental evaluation can help
              identify the right treatment approach.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "🦷",
                title: "Tooth Pain",
                text: "Pain, sensitivity or discomfort that may need professional evaluation.",
              },
              {
                icon: "🌿",
                title: "Bleeding Gums",
                text: "Bleeding, swollen or tender gums can be signs of gum problems.",
              },
              {
                icon: "✨",
                title: "Plaque & Calculus",
                text: "Professional cleaning can help manage hardened deposits and stains.",
              },
              {
                icon: "😁",
                title: "Smile Concerns",
                text: "Discuss options for improving the appearance of your smile.",
              },
              {
                icon: "🩺",
                title: "Damaged Teeth",
                text: "Broken, weakened or infected teeth may require restorative care.",
              },
              {
                icon: "🦷",
                title: "Missing Teeth",
                text: "Explore tooth replacement options including dental implants.",
              },
              {
                icon: "🌱",
                title: "Gum Disease",
                text: "Periodontal evaluation and treatment for gum and supporting tissues.",
              },
              {
                icon: "💎",
                title: "Cosmetic Concerns",
                text: "Personalized options for improving dental appearance and confidence.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

{/* =========================================================
    COMFORTABLE EXPERIENCE
========================================================= */}
<section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

  <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

    {/* TEXT */}
    <div>

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
        Patient Experience
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        A comfortable dental experience from consultation to care
      </h2>

      <p className="mt-5 leading-7 text-slate-600">
        Visiting a dentist can feel stressful, especially when you are
        experiencing pain or have been postponing treatment. We aim to
        make the process clear and comfortable, starting with a
        consultation and dental evaluation.
      </p>

      <div className="mt-7 space-y-4">

        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
            01
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Understand your concern
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Discuss your symptoms, concerns and dental history.
            </p>
          </div>
        </div>


        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
            02
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Evaluate your oral health
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Your teeth and gums are assessed to understand the problem.
            </p>
          </div>
        </div>


        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
            03
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Discuss treatment options
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Treatment options are explained according to your dental
              needs.
            </p>
          </div>
        </div>

      </div>

    </div>


    {/* IMAGE */}
    <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-orange-50 shadow-lg">

      <div className="relative aspect-[4/3] w-full">

        <Image
          src="/clinic/clinic5.webp"
          alt="Comfortable waiting area at Dr Bhuvan's Dental Laser & Implant Centre"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />

      </div>

    </div>

  </div>

</section>
       {/* =========================================================
          LOCAL AMEERPET SECTION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Conveniently Located
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Dental care for patients in and around Ameerpet
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our clinic is located in the Ameerpet area of Hyderabad, making
              it convenient for patients from nearby neighbourhoods to access
              routine and advanced dental care.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Patients visiting from Yousufguda, Sri Krishna Nagar, Navodaya
              Colony, Yellareddyguda and surrounding areas can reach the clinic
              for consultations and dental treatments.
            </p>

          </div>


          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                📍
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Dr Bhuvan&apos;s Dental Laser &amp; Implant Centre
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Ganapati Complex, Navodaya Colony Road,
                  Sri Krishna Nagar, Ameerpet,
                  Hyderabad, Telangana 500073.
                </p>

                <a
                  href="tel:+918074528763"
                  className="mt-5 inline-block font-semibold text-orange-600 hover:text-orange-700"
                >
                  80745 28763 →
                </a>

                {/* Get Directions */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvan's+Dental+Laser+%26+Implant+Centre+Ameerpet+Hyderabad"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 block font-semibold text-orange-600 hover:text-orange-700"
  >
    Get Directions →
  </a>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-orange-50/40">

        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Dental clinic in Ameerpet — FAQs
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Here are some common questions patients ask before visiting our
              dental clinic.
            </p>

          </div>


          <div className="mt-10 space-y-4">

            <details className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                What dental treatments are available in Ameerpet?
                <span className="float-right text-orange-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Treatment options may include teeth cleaning, gum treatment,
                root canal treatment, dental implants, restorative dentistry,
                smile makeover and selected laser-assisted procedures.
              </p>
            </details>


            <details className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                Do you provide dental implants?
                <span className="float-right text-orange-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. Dental implant treatment can be considered for suitable
                patients with missing teeth after a clinical evaluation and
                treatment planning.
              </p>
            </details>


            <details className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                Can I visit for bleeding gums or gum problems?
                <span className="float-right text-orange-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. Bleeding gums, gum swelling, bad breath and other
                periodontal concerns can be evaluated during a dental
                consultation.
              </p>
            </details>


            <details className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                Do you provide teeth cleaning in Ameerpet?
                <span className="float-right text-orange-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Professional teeth cleaning is available for patients who need
                plaque, calculus and surface-stain removal as part of their
                oral hygiene care.
              </p>
            </details>


            <details className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                How can I book a dental appointment?
                <span className="float-right text-orange-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                You can contact the clinic directly by phone or send a message
                through WhatsApp to request an appointment.
              </p>
            </details>

          </div>

        </div>
      </section>
      {/* =========================================================
    FINAL CTA
========================================================= */}
<section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24">

  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 to-orange-700 px-7 py-14 text-center shadow-xl shadow-orange-600/20 sm:px-12">

    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

    <div className="relative">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
        Book Your Consultation
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        Looking for a dental clinic in Ameerpet?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-orange-50">
        Take the first step towards better oral health. Book a consultation
        with Dr. Bhuvanesh Yanamala and discuss your dental concerns.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

        <a
          href="https://wa.me/918074528763?text=Hello%20Dr%20Bhuvan%27s%20Dental%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-white px-7 py-4 font-semibold text-orange-700 shadow-sm transition hover:bg-orange-50"
        >
          Book on WhatsApp
        </a>

        <a
          href="tel:+918074528763"
          className="rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
        >
          Call 80745 28763
        </a>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}