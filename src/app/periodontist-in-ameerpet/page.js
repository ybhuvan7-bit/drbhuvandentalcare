import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Phone,
  Star,
} from "lucide-react";

export const metadata = {
  title:
    "Periodontist in Ameerpet, Hyderabad | Gum Specialist | Dr. Bhuvan",
  description:
    "Looking for a periodontist in Ameerpet, Hyderabad? Dr. Bhuvanesh Yanamala, MDS Periodontics, provides gum disease treatment, laser periodontal therapy, gum recession treatment and dental implant care.",
  keywords: [
    "Periodontist in Ameerpet",
    "Periodontist Ameerpet Hyderabad",
    "Gum Specialist Ameerpet",
    "Gum Disease Treatment Ameerpet",
    "Periodontist Hyderabad",
    "Gum Treatment Hyderabad",
    "Laser Gum Treatment Hyderabad",
    "Dental Implants Ameerpet",
    "Dr Bhuvanesh Periodontist",
  ],
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/periodontist-in-ameerpet",
  },
  openGraph: {
    title:
      "Periodontist in Ameerpet, Hyderabad | Dr. Bhuvan",
    description:
      "Specialized periodontal and gum care by Dr. Bhuvanesh Yanamala, MDS Periodontics, in Ameerpet, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com/periodontist-in-ameerpet",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
  },
};

const treatments = [
  "Gum disease treatment",
  "Bleeding gums treatment",
  "Gum recession treatment",
  "Laser periodontal therapy",
  "Professional teeth cleaning",
  "Bone loss management",
  "Gum grafting & root coverage",
  "Dental implant treatment",
];

const faqs = [
  {
    question: "What does a periodontist treat?",
    answer:
      "A periodontist specializes in the prevention, diagnosis and treatment of conditions affecting the gums and supporting structures around teeth, including periodontal disease and gum recession.",
  },
  {
    question: "When should I see a periodontist?",
    answer:
      "Persistent gum bleeding, swollen gums, gum recession, loose teeth, bad breath associated with gum disease or signs of bone loss may require a periodontal evaluation.",
  },
  {
    question: "Can gum disease be treated with laser dentistry?",
    answer:
      "Laser-assisted periodontal treatment may be appropriate for selected patients depending on the condition and clinical findings. Treatment is planned after a professional evaluation.",
  },
  {
    question: "Does a periodontist also place dental implants?",
    answer:
      "Periodontists receive specialized training in the gums and supporting bone around teeth and implants. Implant treatment may be planned based on the patient's bone, gum and overall oral condition.",
  },
];
const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://www.drbhuvandentalcare.com/#dentist",
  name: "Dr. Bhuvan's Dental Laser & Implant Centre",
  url: "https://www.drbhuvandentalcare.com/periodontist-in-ameerpet",
  telephone: "+918074528763",
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
  medicalSpecialty: "Periodontics",
  employee: {
    "@type": "Person",
    name: "Dr. Bhuvanesh Yanamala",
    jobTitle: "Periodontist & Implantologist",
    knowsAbout: [
      "Periodontics",
      "Gum Disease Treatment",
      "Dental Implants",
      "Laser Dentistry",
    ],
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
      name: "Periodontist in Ameerpet",
      item:
        "https://www.drbhuvandentalcare.com/periodontist-in-ameerpet",
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
export default function periodontistinameerpetPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-800">
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
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              <Star className="h-4 w-4 fill-current" />
              MDS Periodontics • Implantology • Laser Dentistry
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Periodontist in Ameerpet, Hyderabad
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Specialized care for healthy gums, supporting bone and confident
              smiles by Dr. Bhuvanesh Yanamala, MDS Periodontics.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-orange-600 shadow-lg transition hover:bg-orange-50"
              >
                <CalendarDays className="h-5 w-5" />
                Book Consultation
              </Link>

              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call 8074528763
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl backdrop-blur">
              <Image
                src="/doctor.webp"
                alt="Dr. Bhuvanesh Yanamala, MDS Periodontist in Ameerpet"
                width={700}
                height={800}
                className="h-[420px] w-full rounded-2xl object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="font-semibold uppercase tracking-wider text-orange-600">
              Specialized Gum Care
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Healthy gums are the foundation of a healthy smile
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Gum problems can progress gradually and may not always cause
              significant pain in the early stages. A periodontal evaluation
              helps identify gum inflammation, periodontal disease, recession
              and supporting bone problems at an appropriate stage.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, periodontal
              care is planned around your individual gum, tooth and bone
              condition.
            </p>
          </div>

          <div className="rounded-3xl bg-orange-50 p-8">
            <h3 className="text-2xl font-bold text-zinc-900">
              Common signs that need attention
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Bleeding while brushing or flossing",
                "Red, swollen or tender gums",
                "Persistent bad breath",
                "Gum recession or longer-looking teeth",
                "Loose or shifting teeth",
                "Food getting trapped around the gums",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                  <span className="text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* DOCTOR */}
      <section className="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <Image
              src="/doctor.webp"
              alt="Dr. Bhuvanesh Yanamala MDS Periodontics"
              width={700}
              height={800}
              className="h-[500px] w-full object-cover object-top"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-wider text-orange-600">
              Meet Your Periodontist
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
              Dr. Bhuvanesh Yanamala
            </h2>

            <p className="mt-2 text-lg font-semibold text-orange-600">
              BDS, MDS – Periodontics
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              With specialized postgraduate training in Periodontics,
              Dr. Bhuvanesh focuses on gum health, periodontal treatment,
              implant-related care and modern minimally invasive dental
              procedures.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Periodontal care",
                "Dental implants",
                "Laser dentistry",
                "Gum recession management",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-200 bg-white p-4 font-medium text-zinc-700"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TREATMENTS */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-wider text-orange-600">
            Periodontal Services
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Gum & periodontal treatments
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Treatment depends on the severity and cause of the periodontal
            condition. Your gums and supporting structures are evaluated before
            recommending a treatment plan.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => (
            <div
              key={treatment}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CheckCircle className="h-6 w-6 text-orange-600" />
              <h3 className="mt-4 font-bold text-zinc-900">
                {treatment}
              </h3>
            </div>
          ))}
        </div>

      </section>

      {/* WHY PERIODONTIST */}
      <section className="bg-orange-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-wider text-orange-600">
              Why See a Periodontist?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
              Specialized care for the tissues supporting your teeth
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Periodontics focuses on the diagnosis and management of diseases
              affecting the gums and supporting structures around teeth.
              Specialized evaluation can be particularly useful when gum
              disease, recession, bone loss or implant-related concerns are
              present.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Gum Disease",
                text: "Assessment and treatment planning for periodontal disease and gum inflammation.",
              },
              {
                title: "Gum Recession",
                text: "Evaluation of exposed roots and appropriate treatment options for selected cases.",
              },
              {
                title: "Supporting Bone",
                text: "Assessment of bone and periodontal support around natural teeth and implants.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-zinc-900">
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

      {/* LASER */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl bg-zinc-900 p-8 text-white sm:p-12">

          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-wider text-orange-400">
              Modern Periodontal Care
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Laser-assisted periodontal treatment
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Laser technology can be used as part of periodontal treatment in
              selected clinical situations. Whether laser treatment is
              appropriate depends on the diagnosis and individual clinical
              findings.
            </p>

            <Link
              href="/laser-dentistry-yousufguda"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-400"
            >
              Explore Laser Dentistry
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* IMPLANTS */}
      <section className="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">

          <div>
            <p className="font-semibold uppercase tracking-wider text-orange-600">
              Periodontics & Implantology
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
              Healthy gums and bone matter for dental implants
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Successful implant treatment depends on several factors,
              including the condition of the gums and supporting bone.
              Periodontal evaluation can therefore be an important part of
              implant planning for appropriate patients.
            </p>

            <Link
              href="/dental-implants-ameerpet"
              className="mt-7 inline-flex items-center gap-2 font-bold text-orange-600"
            >
              Explore Dental Implants
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-zinc-900">
              Gum care can help protect your smile
            </h3>

            <p className="mt-4 leading-7 text-zinc-600">
              Regular professional evaluation, good oral hygiene and
              appropriate periodontal treatment can help maintain the health
              of the tissues supporting your teeth.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Periodontal evaluation",
                "Personalized treatment planning",
                "Maintenance and follow-up",
                "Implant-related periodontal care",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-orange-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Periodontist in Ameerpet – FAQs
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
      </section>

      {/* LOCATION */}
      <section className="bg-orange-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-8">

          <h2 className="text-3xl font-bold text-zinc-900">
            Periodontal care in Ameerpet, Hyderabad
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            Conveniently located near Ameerpet and Yousufguda for patients
            looking for specialized gum, periodontal and implant-related care.
          </p>

          <p className="mt-5 font-semibold text-zinc-800">
            Dr. Bhuvan&apos;s Dental Laser & Implant Centre
          </p>

          <p className="mt-1 text-zinc-600">
            Ganapati Complex, Navodaya Colony, Yousufguda, Ameerpet,
            Hyderabad
          </p>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Concerned about your gums?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Get a professional periodontal evaluation and understand the
            treatment options suitable for your oral health.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-orange-600 shadow-lg"
            >
              <CalendarDays className="h-5 w-5" />
              Book Appointment
            </Link>

            <a
              href="tel:+918074528763"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-bold"
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