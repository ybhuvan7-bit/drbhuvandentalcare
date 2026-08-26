import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Navigation,
  Clock3,
} from "lucide-react";

export const metadata = {
  title:
    "Dental Clinic in Ganapati Complex, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

  description:
    "Looking for a dental clinic in Ganapati Complex, Hyderabad? Dr. Bhuvan's Dental Laser & Implant Centre offers dental implants, root canal treatment, laser dentistry, gum treatment, teeth cleaning, Invisalign and comprehensive dental care.",

  keywords: [
    "dental clinic in Ganapati Complex",
    "dentist in Ganapati Complex",
    "dental clinic Ganapati Complex Hyderabad",
    "dentist near Ganapati Complex",
    "dental clinic near Ganapati Complex",
    "dentist in Navodaya Colony",
    "dental clinic in Navodaya Colony",
    "dentist in Yousufguda",
    "dental clinic in Yousufguda",
    "dentist near Sri Krishna Nagar",
    "dentist near Srinagar Colony",
    "dentist near Ameerpet",
    "dental implants Ganapati Complex",
    "root canal Ganapati Complex",
    "laser dentistry Ganapati Complex",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dental-clinic-in-ganapati-complex",
  },

  openGraph: {
    title:
      "Dental Clinic in Ganapati Complex, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Comprehensive dental care at Ganapati Complex, Navodaya Colony, Hyderabad including dental implants, root canal treatment, laser dentistry, gum treatment, teeth cleaning and Invisalign.",

    url:
      "https://www.drbhuvandentalcare.com/dental-clinic-in-ganapati-complex",

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
          "Dr. Bhuvan's Dental Laser & Implant Centre at Ganapati Complex, Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dental Clinic in Ganapati Complex, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Dental implants, root canal treatment, laser dentistry, gum care, teeth cleaning and Invisalign at Ganapati Complex, Hyderabad.",

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

const faqs = [
  {
    question: "Where is the dental clinic in Ganapati Complex located?",

    answer:
      "Dr. Bhuvan's Dental Laser & Implant Centre is located at Ganapati Complex, Navodaya Colony Road, in the Yousufguda and Ameerpet area of Hyderabad. The clinic is conveniently located for patients from Navodaya Colony, Sri Krishna Nagar, Yousufguda, Srinagar Colony and nearby areas.",
  },

  {
    question: "What dental treatments are available at Ganapati Complex?",

    answer:
      "The clinic provides comprehensive dental care including dental implants, root canal treatment, laser dentistry, gum and periodontal treatment, teeth cleaning, wisdom tooth treatment, cosmetic dentistry, crowns and bridges, and Invisalign clear aligner treatment.",
  },

  {
    question: "Is the dental clinic near Yousufguda?",

    answer:
      "Yes. The clinic at Ganapati Complex, Navodaya Colony is conveniently located for patients from Yousufguda and surrounding neighbourhoods.",
  },

  {
    question: "Is the clinic convenient for patients from Ameerpet?",

    answer:
      "Yes. Patients from Ameerpet and nearby areas can access the clinic at Ganapati Complex, Navodaya Colony Road for routine, restorative, gum and implant-related dental care.",
  },

  {
    question: "Do you provide dental implants at Ganapati Complex?",

    answer:
      "Yes. Dental implant treatment is available at Dr. Bhuvan's Dental Laser & Implant Centre. Implant treatment is planned according to the patient's missing teeth, gum health, available bone, bite and overall oral condition.",
  },

  {
    question: "Do you provide root canal treatment?",

    answer:
      "Yes. Root canal treatment is available for teeth with appropriate clinical indications. The treatment plan depends on the tooth, canal anatomy, diagnosis and overall oral health.",
  },

  {
    question: "Do you provide Invisalign or clear aligner treatment?",

    answer:
      "Yes. Invisalign and clear aligner treatment is available for suitable patients after an orthodontic assessment and treatment planning.",
  },

  {
    question: "How can I book a dental appointment at Ganapati Complex?",

    answer:
      "You can contact Dr. Bhuvan's Dental Laser & Implant Centre directly on +91 8074528763 to discuss your dental concern and schedule an appointment.",
  },
];

export default function DentalClinicInGanapatiComplexPage() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Dentist",

        "@id":
          "https://www.drbhuvandentalcare.com/dental-clinic-in-ganapati-complex#dentist",

        name: "Dr. Bhuvan's Dental Laser & Implant Centre",

        url:
          "https://www.drbhuvandentalcare.com/dental-clinic-in-ganapati-complex",

        telephone: "+91 8074528763",

        image:
          "https://www.drbhuvandentalcare.com/doctor.webp",

        description:
          "Dental clinic at Ganapati Complex, Navodaya Colony, Hyderabad offering dental implants, root canal treatment, laser dentistry, gum treatment, teeth cleaning, Invisalign and comprehensive dental care.",

        address: {
          "@type": "PostalAddress",

          streetAddress:
            "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar",

          addressLocality: "Yousufguda",

          addressRegion: "Telangana",

          postalCode: "500073",

          addressCountry: "IN",
        },

        areaServed: [
          {
            "@type": "Place",
            name: "Ganapati Complex",
          },
          {
            "@type": "Place",
            name: "Navodaya Colony",
          },
          {
            "@type": "Place",
            name: "Yousufguda",
          },
          {
            "@type": "Place",
            name: "Sri Krishna Nagar",
          },
          {
            "@type": "Place",
            name: "Srinagar Colony",
          },
          {
            "@type": "Place",
            name: "Ameerpet",
          },
        ],

        medicalSpecialty: "Dentistry",

        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Dental Implant Treatment",
          },
          {
            "@type": "MedicalProcedure",
            name: "Root Canal Treatment",
          },
          {
            "@type": "MedicalProcedure",
            name: "Laser Dentistry",
          },
          {
            "@type": "MedicalProcedure",
            name: "Periodontal and Gum Treatment",
          },
          {
            "@type": "MedicalProcedure",
            name: "Teeth Cleaning",
          },
          {
            "@type": "MedicalProcedure",
            name: "Clear Aligner Treatment",
          },
        ],
      },

      {
        "@type": "FAQPage",

        "@id":
          "https://www.drbhuvandentalcare.com/dental-clinic-in-ganapati-complex#faq",

        mainEntity: faqs.map((faq) => ({
          "@type": "Question",

          name: faq.question,

          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-slate-900">

      {/* ================= SCHEMA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-orange-300">
              <MapPin size={15} />
              Ganapati Complex • Hyderabad
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Dental Clinic in
              <span className="block text-orange-400">
                Ganapati Complex
              </span>
              Hyderabad
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Dr. Bhuvan's Dental Laser & Implant Centre provides
              comprehensive dental care at Ganapati Complex, Navodaya Colony,
              serving patients from Yousufguda, Sri Krishna Nagar,
              Srinagar Colony, Ameerpet and nearby areas.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-black text-white transition hover:bg-orange-400"
              >
                <Phone size={18} />
                Call 80745 28763
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">

              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-orange-400" />
                Comprehensive Dental Care
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-orange-400" />
                Implant & Gum Care
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-orange-400" />
                Laser Dentistry
              </span>

            </div>

          </div>

          {/* Doctor Image */}

          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute inset-0 rounded-[3rem] bg-orange-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl">

              <Image
                src="/doctor.webp"
                alt="Dr. Bhuvanesh Yanamala - Dentist at Ganapati Complex, Hyderabad"
                width={900}
                height={900}
                priority
                className="rounded-[2rem] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= LOCATION ================= */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>

              <span className="font-semibold uppercase tracking-[4px] text-orange-600">
                OUR LOCATION
              </span>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Convenient Dental Care at Ganapati Complex
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our clinic is located at Ganapati Complex, Navodaya Colony
                Road, making it a convenient dental care destination for
                patients living and working around Yousufguda, Navodaya
                Colony, Sri Krishna Nagar, Srinagar Colony and Ameerpet.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Ganapati Complex
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Navodaya Colony Road, Sri Krishna Nagar,
                      Hyderabad, Telangana 500073
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Navigation size={20} />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Easy to Reach
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Convenient for patients from Yousufguda,
                      Navodaya Colony, Sri Krishna Nagar,
                      Srinagar Colony and Ameerpet.
                    </p>
                  </div>

                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Dr%20Bhuvan's%20Dental%20Laser%20%26%20Implant%20Centre%20Ganapati%20Complex%20Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
              >
                <Navigation size={17} />
                Get Directions
              </a>

            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[2px] text-orange-600">
                    Dental Care
                  </p>

                  <h3 className="text-xl font-black">
                    One Location. Comprehensive Care.
                  </h3>
                </div>

              </div>

              <div className="mt-8 space-y-4">

                {[
                  "Dental Implants",
                  "Root Canal Treatment",
                  "Laser Dentistry",
                  "Gum & Periodontal Treatment",
                  "Teeth Cleaning",
                  "Invisalign & Clear Aligners",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4"
                  >
                    <CheckCircle
                      size={18}
                      className="shrink-0 text-orange-500"
                    />

                    <span className="font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-[4px] text-orange-600">
              DENTAL SERVICES
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Complete Dental Care at Ganapati Complex
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From preventive dentistry to advanced restorative and
              implant treatment, our clinic provides personalised dental
              care based on your individual needs.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Dental Implants",
                text:
                  "Personalised implant planning for suitable patients with missing teeth.",
                href: "/dental-implants-yousufguda",
              },
              {
                title: "Root Canal Treatment",
                text:
                  "Treatment for teeth with pulpal or periapical disease when clinically indicated.",
                href: "/root-canal-treatment-yousufguda",
              },
              {
                title: "Laser Dentistry",
                text:
                  "Laser-assisted dental procedures selected according to clinical requirements.",
                href: "/laser-dentistry-yousufguda",
              },
              {
                title: "Gum Treatment",
                text:
                  "Evaluation and treatment of gum and periodontal conditions.",
                href: "/gum-treatment-yousufguda",
              },
              {
                title: "Teeth Cleaning",
                text:
                  "Professional cleaning and preventive oral care for healthier gums and teeth.",
                href: "/teeth-cleaning-yousufguda",
              },
             {
  title: "Invisalign & Clear Aligners",
  text:
    "Clear aligner treatment for suitable patients after orthodontic assessment.",
  href: "/invisalign-treatment-yousufguda",
},
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <CheckCircle size={20} />
                </div>

                <h3 className="mt-5 text-xl font-black">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.text}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-bold text-orange-600">
                  Learn More
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* ================= AREAS ================= */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <span className="font-semibold uppercase tracking-[4px] text-orange-600">
              NEARBY AREAS
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Dental Care Near Ganapati Complex
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The clinic is conveniently located for patients from several
              nearby neighbourhoods in central-west Hyderabad.
            </p>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "Navodaya Colony",
              "Yousufguda",
              "Sri Krishna Nagar",
              "Srinagar Colony",
              "Ameerpet",
              "Madhura Nagar",
              "Kamalapuri Colony",
              "SR Nagar",
              "Yellareddyguda",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                {area}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section className="bg-slate-950 py-20 text-white">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-[4px] text-orange-400">
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Personalised Dental Care in Ganapati Complex
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Good dental care begins with accurate diagnosis, appropriate
              treatment planning and clear communication.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Comprehensive dental treatment under one roof",
              "Personalised treatment planning",
              "Focus on gum and periodontal health",
              "Implant-focused dental care",
              "Laser-assisted dental procedures",
              "Preventive and restorative dental care",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7"
              >

                <CheckCircle
                  size={21}
                  className="text-orange-400"
                />

                <p className="mt-4 font-bold leading-7 text-slate-200">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-5xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-semibold uppercase tracking-[4px] text-orange-600">
              COMMON QUESTIONS
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Common questions about finding dental care at Ganapati
              Complex, Navodaya Colony and nearby areas.
            </p>

          </div>

          <div className="mt-12 space-y-4">

            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                open={index === 0}
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">

                  <div className="flex items-start gap-4">

                    <span className="text-xs font-black text-orange-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-black leading-7 text-slate-900">
                      {faq.question}
                    </h3>

                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xl font-bold text-orange-600 transition-transform group-open:rotate-45">
                    +
                  </span>

                </summary>

                <div className="ml-8 mt-5 border-t border-slate-100 pt-5">

                  <p className="leading-7 text-slate-600">
                    {faq.answer}
                  </p>

                </div>

              </details>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white shadow-2xl md:p-12">

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-xs font-black uppercase tracking-[3px] text-orange-100">
                  Visit Our Clinic
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Need a Dentist at Ganapati Complex?
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-orange-50">
                  Contact Dr. Bhuvan's Dental Laser & Implant Centre to
                  discuss your dental concern and schedule a consultation.
                </p>

              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                <a
                  href="tel:+918074528763"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-black text-orange-600 transition hover:bg-orange-50"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-black text-white transition hover:bg-white/10"
                >
                  Book Appointment
                  <CalendarDays size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}