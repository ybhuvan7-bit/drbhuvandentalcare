import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title:
    "Laser Gum Treatment in Hyderabad | Laser Periodontal Therapy | Dr. Bhuvan",

  description:
    "Laser gum treatment in Hyderabad by Dr. Bhuvanesh Yanamala, MDS Periodontics. Laser-assisted periodontal care for selected gum disease, bleeding gums and periodontal conditions.",

  keywords: [
    "Laser Gum Treatment in Hyderabad",
    "Laser Gum Treatment Hyderabad",
    "Laser Periodontal Treatment Hyderabad",
    "Laser Gum Disease Treatment Hyderabad",
    "Laser Treatment for Bleeding Gums",
    "Laser Treatment for Gum Infection",
    "Laser Dentistry Hyderabad",
    "Gum Specialist Hyderabad",
    "Periodontist Hyderabad",
    "Gum Treatment Hyderabad",
    "Laser Periodontal Therapy",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/laser-gum-treatment-hyderabad",
  },

  openGraph: {
    title:
      "Laser Gum Treatment in Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Laser-assisted periodontal care by Dr. Bhuvanesh Yanamala, MDS Periodontics, in Hyderabad.",

    url:
      "https://www.drbhuvandentalcare.com/laser-gum-treatment-hyderabad",

    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.drbhuvandentalcare.com/doctor.webp",
        width: 1200,
        height: 630,
        alt:
          "Dr. Bhuvanesh Yanamala - Laser Gum Treatment in Hyderabad",
      },
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

const gumProblems = [
  "Bleeding gums",
  "Red or swollen gums",
  "Persistent bad breath associated with gum disease",
  "Gum recession",
  "Deep periodontal pockets",
  "Loose or shifting teeth",
  "Periodontal infection",
  "Supporting bone loss",
];

const treatmentSteps = [
  {
    number: "01",
    title: "Periodontal Evaluation",
    text:
      "Your gums, teeth and supporting tissues are examined to understand the cause and severity of the condition.",
  },
  {
    number: "02",
    title: "Diagnosis & Planning",
    text:
      "A personalised periodontal treatment plan is prepared according to your clinical findings.",
  },
  {
    number: "03",
    title: "Laser-Assisted Treatment",
    text:
      "Where clinically appropriate, laser technology may be incorporated into your periodontal treatment.",
  },
  {
    number: "04",
    title: "Follow-Up & Maintenance",
    text:
      "Follow-up helps assess healing and maintain periodontal health over time.",
  },
];

const faqs = [
  {
    question: "What is laser gum treatment?",
    answer:
      "Laser gum treatment refers to the use of dental laser technology as part of periodontal care in selected clinical situations. Suitability depends on the diagnosis and individual periodontal condition.",
  },
  {
    question: "Can laser treatment cure gum disease?",
    answer:
      "Laser treatment may be used as part of periodontal therapy for selected patients. The appropriate treatment depends on the type and severity of the gum condition and requires professional evaluation.",
  },
  {
    question: "Can laser treatment help bleeding gums?",
    answer:
      "Bleeding gums can have several causes, including gum inflammation and periodontal disease. Laser-assisted periodontal treatment may be considered in selected cases after identifying the underlying cause.",
  },
  {
    question: "Is laser gum treatment suitable for everyone?",
    answer:
      "No. Treatment suitability depends on the patient's gum condition, periodontal findings, supporting bone and overall oral health.",
  },
  {
    question: "Who performs the treatment?",
    answer:
      "Periodontal treatment is planned by Dr. Bhuvanesh Yanamala, BDS, MDS – Periodontics, with a focus on gum health, periodontal care and implant-related treatment.",
  },
];

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",

  name: "Dr. Bhuvan's Dental Laser & Implant Centre",

  url:
    "https://www.drbhuvandentalcare.com/laser-gum-treatment-hyderabad",

  telephone: "+918074528763",

  medicalSpecialty: "Periodontics",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Ganapati Complex, Navodaya Colony",
    addressLocality: "Yousufguda, Ameerpet",
    addressRegion: "Telangana",
    postalCode: "500073",
    addressCountry: "IN",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Hyderabad",
    },
    {
      "@type": "Place",
      name: "Ameerpet",
    },
    {
      "@type": "Place",
      name: "Yousufguda",
    },
  ],

  employee: {
    "@type": "Person",
    name: "Dr. Bhuvanesh Yanamala",
    jobTitle: "Periodontist & Implantologist",
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
      name: "Laser Gum Treatment in Hyderabad",
      item:
        "https://www.drbhuvandentalcare.com/laser-gum-treatment-hyderabad",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: faqs.map((faq) => ({
    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LaserGumTreatmentHyderabadPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-800">

      {/* SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dentistSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 text-white">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">

              <Sparkles className="h-4 w-4" />

              Laser Dentistry • Periodontics • Gum Care

            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

              Laser Gum Treatment

              <span className="block text-orange-100">
                in Hyderabad
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">

              Laser-assisted periodontal care for selected gum conditions,
              planned by Dr. Bhuvanesh Yanamala, MDS Periodontics, in
              Hyderabad.

            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-orange-600 shadow-lg hover:bg-orange-50"
              >
                <CalendarDays className="h-5 w-5" />
                Book Consultation
              </Link>

              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-4 font-bold text-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call 8074528763
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl">

              <Image
                src="/doctor.webp"
                alt="Dr. Bhuvanesh Yanamala, Periodontist in Hyderabad"
                width={700}
                height={800}
                className="h-[430px] w-full rounded-2xl object-cover object-top"
                priority
              />

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-wider text-orange-600">
              Advanced Gum Care
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">

              Laser-assisted periodontal care in Hyderabad

            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">

              Gum disease can affect the tissues and bone supporting your
              teeth. Common warning signs include bleeding gums, swelling,
              persistent bad breath and gum recession.

            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-600">

              Laser technology may be incorporated into periodontal treatment
              for selected patients after a detailed clinical evaluation.

            </p>

          </div>

          <div className="rounded-3xl bg-orange-50 p-8">

            <h3 className="text-2xl font-bold text-zinc-900">
              Gum problems that may need attention
            </h3>

            <div className="mt-6 space-y-4">

              {gumProblems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3"
                >

                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />

                  <span className="text-zinc-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* WHY LASER */}

      <section className="bg-zinc-50">

        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-semibold uppercase tracking-wider text-orange-600">
              Personalised Treatment
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">

              Why consider laser-assisted periodontal care?

            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">

              Laser technology can be incorporated into periodontal treatment
              when clinically appropriate. Treatment always begins with
              diagnosis and periodontal evaluation.

            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Targeted Care",
                text:
                  "Laser technology may be incorporated into periodontal treatment in selected clinical situations.",
              },
              {
                title: "Minimally Invasive Approach",
                text:
                  "Depending on the diagnosis, laser-assisted procedures may support a minimally invasive treatment approach.",
              },
              {
                title: "Personalised Planning",
                text:
                  "Your treatment plan is based on your individual gum, tooth and periodontal condition.",
              },
              {
                title: "Periodontist-Led Care",
                text:
                  "Your periodontal condition is evaluated before laser treatment is recommended.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-lg"
              >

                <ShieldCheck className="h-7 w-7 text-orange-600" />

                <h3 className="mt-5 text-xl font-bold text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-wider text-orange-600">
            Treatment Process
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">

            How laser gum treatment is planned

          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {treatmentSteps.map((step) => (

            <div
              key={step.number}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm"
            >

              <div className="flex gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-extrabold text-orange-600">
                  {step.number}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-zinc-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-600">
                    {step.text}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PERIODONTIST */}

      <section className="bg-zinc-900 text-white">

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-white/10 p-3">

            <Image
              src="/doctor.webp"
              alt="Dr. Bhuvanesh Yanamala, MDS Periodontist"
              width={700}
              height={800}
              className="h-[500px] w-full rounded-2xl object-cover object-top"
            />

          </div>

          <div>

            <p className="font-semibold uppercase tracking-wider text-orange-400">
              Meet Your Periodontist
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Dr. Bhuvanesh Yanamala
            </h2>

            <p className="mt-2 text-lg font-semibold text-orange-400">
              BDS, MDS – Periodontics
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-300">

              Dr. Bhuvanesh focuses on periodontal care, gum health,
              implant-related treatment and modern dental procedures.

            </p>

            <Link
              href="/periodontist-in-ameerpet"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white hover:bg-orange-400"
            >

              Meet Our Periodontist

              <ArrowRight className="h-5 w-5" />

            </Link>

          </div>

        </div>

      </section>

      {/* RELATED PAGES */}

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-wider text-orange-600">
            Complete Gum Care
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Explore related periodontal treatments
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <Link
            href="/gum-disease-treatment-ameerpet"
            className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg"
          >

            <h3 className="text-xl font-bold text-zinc-900">
              Gum Disease Treatment
            </h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Treatment options for gum inflammation and periodontal disease.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </span>

          </Link>

          <Link
            href="/gum-bleeding-treatment-yousufguda"
            className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg"
          >

            <h3 className="text-xl font-bold text-zinc-900">
              Bleeding Gums Treatment
            </h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Understand possible causes of bleeding gums and periodontal
              treatment options.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </span>

          </Link>

          <Link
            href="/laser-dentistry-yousufguda"
            className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg"
          >

            <h3 className="text-xl font-bold text-zinc-900">
              Laser Dentistry
            </h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Explore laser dentistry services at Dr. Bhuvan's Dental Laser
              & Implant Centre.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600">
              Explore
              <ArrowRight className="h-4 w-4" />
            </span>

          </Link>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-zinc-50">

        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-wider text-orange-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
              Laser Gum Treatment in Hyderabad – FAQs
            </h2>

          </div>

          <div className="mt-10 space-y-5">

            {faqs.map((faq) => (

              <div
                key={faq.question}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >

                <h3 className="text-lg font-bold text-zinc-900">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
{/* LOCATION */}

<section className="bg-orange-50">

  <div className="mx-auto max-w-6xl px-6 py-16 text-center">

    <p className="font-semibold uppercase tracking-wider text-orange-600">
      Convenient Location
    </p>

    <h2 className="mt-3 text-3xl font-bold text-zinc-900">
      Laser Gum Treatment in Hyderabad
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-600">

      Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre is conveniently
      located for patients from Ameerpet, Yousufguda and nearby areas
      including SR Nagar, Madhura Nagar, Borabanda, Srinagar Colony,
      Banjara Hills and Jubilee Hills.

    </p>

    <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">

      {[
        "Ameerpet",
        "Yousufguda",
        "SR Nagar",
        "Madhura Nagar",
        "Borabanda",
        "Srinagar Colony",
        "Banjara Hills",
        "Jubilee Hills",
      ].map((area) => (

        <span
          key={area}
          className="rounded-full border border-orange-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm"
        >
          {area}
        </span>

      ))}

    </div>

    <p className="mt-8 font-semibold text-zinc-800">
      Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre
    </p>

    <p className="mt-1 text-zinc-600">
      Ganapati Complex, Navodaya Colony, Yousufguda, Ameerpet,
      Hyderabad – 500073
    </p>

  </div>

</section>

      {/* FINAL CTA */}

      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Concerned about bleeding or unhealthy gums?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">

            Book a periodontal evaluation to understand the cause of your
            gum problem and whether laser-assisted treatment is appropriate
            for you.

          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-orange-600 shadow-lg hover:bg-orange-50"
            >

              <CalendarDays className="h-5 w-5" />

              Book Appointment

            </Link>

            <a
              href="tel:+918074528763"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-bold hover:bg-white/10"
            >

              <Phone className="h-5 w-5" />

              8074528763

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}