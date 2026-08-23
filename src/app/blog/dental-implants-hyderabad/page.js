import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const BASE_URL = "https://www.drbhuvandentalcare.com";

export const metadata = {
  title:
    "Dental Implants in Hyderabad: Cost, Types, Procedure & Recovery | Dr. Bhuvan's Dental",

  description:
    "Learn about dental implants in Hyderabad, including implant types, procedure, recovery, cost factors, suitability and how dental implants compare with bridges and dentures.",

  keywords: [
    "dental implants Hyderabad",
    "dental implant cost Hyderabad",
    "dental implant dentist Hyderabad",
    "dental implants Yousufguda",
    "dental implants Ameerpet",
    "dental implants near Yousufguda",
    "dental implants near Ameerpet",
    "single tooth implant Hyderabad",
    "full mouth dental implants Hyderabad",
    "dental implant procedure Hyderabad",
    "dental implant recovery",
    "dental implants Srinagar Colony",
  ],

  alternates: {
    canonical: `${BASE_URL}/blog/dental-implants-hyderabad`,
  },

  openGraph: {
    title:
      "Dental Implants in Hyderabad: Cost, Types, Procedure & Recovery",

    description:
      "A practical guide to dental implants, including types, treatment stages, recovery, cost factors and who may benefit from implant treatment.",

    url: `${BASE_URL}/blog/dental-implants-hyderabad`,

    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",

    type: "article",

    locale: "en_IN",

    images: [
      {
        url: `${BASE_URL}/doctor.webp`,
        width: 1200,
        height: 630,
        alt:
          "Dental implant treatment in Hyderabad - Dr. Bhuvan's Dental Laser & Implant Centre",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dental Implants in Hyderabad: Cost, Types, Procedure & Recovery",

    description:
      "Understand dental implants, treatment stages, recovery and cost factors before choosing implant treatment in Hyderabad.",

    images: [`${BASE_URL}/doctor.webp`],
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
    question: "What are dental implants?",

    answer:
      "Dental implants are artificial tooth roots that are surgically placed in the jawbone and can support a dental crown, bridge or other implant-supported restoration. Suitability depends on your oral health, bone condition and individual treatment requirements.",
  },

  {
    question: "Who may need a dental implant?",

    answer:
      "Dental implants may be considered for people who have lost one or more teeth and want a fixed tooth-replacement option. A clinical evaluation is necessary to determine whether implants are appropriate for a particular patient.",
  },

  {
    question: "Are dental implants painful?",

    answer:
      "The implant placement procedure is performed with appropriate local anaesthesia. Some patients may experience temporary discomfort, swelling or sensitivity during recovery. Your dentist will provide individual post-operative instructions.",
  },

  {
    question: "How long does a dental implant take?",

    answer:
      "The overall treatment timeline varies. It may involve consultation and planning, implant placement, a healing period and placement of the final restoration. Bone grafting or other procedures may affect the overall timeline.",
  },

  {
    question: "How much do dental implants cost in Hyderabad?",

    answer:
      "Dental implant cost varies according to the number of implants, implant system, clinical complexity, bone condition, need for additional procedures and type of final restoration. A personalised treatment plan is required for an accurate estimate.",
  },

  {
    question: "Can I get a dental implant immediately after tooth removal?",

    answer:
      "In selected cases, an implant may be placed immediately after tooth extraction. However, immediate implant placement is not suitable for every patient and depends on factors such as the condition of the extraction site, bone and surrounding tissues.",
  },

  {
    question: "Are dental implants better than dentures?",

    answer:
      "Dental implants and dentures are different tooth-replacement options. Implants can provide a fixed foundation for restorations, while dentures are removable. The most appropriate option depends on your oral health, number of missing teeth, bone condition, preferences and treatment goals.",
  },

  {
    question: "Can people with gum disease get dental implants?",

    answer:
      "Active gum disease should generally be evaluated and managed before implant treatment. Healthy gums and appropriate oral hygiene are important for the long-term health of implant-supported restorations.",
  },
];

const implantTypes = [
  {
    number: "01",
    title: "Single Tooth Implant",
    text:
      "A single implant can be used to replace one missing tooth without relying on neighbouring teeth for support.",
  },

  {
    number: "02",
    title: "Multiple Dental Implants",
    text:
      "When several teeth are missing, multiple implants may be used to support individual restorations or an implant-supported bridge, depending on the case.",
  },

  {
    number: "03",
    title: "Full Mouth Implant Rehabilitation",
    text:
      "For patients with extensive tooth loss, multiple implants can be planned to support a comprehensive fixed or removable implant-supported restoration.",
  },
];

const treatmentSteps = [
  {
    number: "01",
    title: "Consultation & Diagnosis",
    text:
      "Your teeth, gums, bite, bone condition and overall oral health are assessed before treatment planning.",
  },

  {
    number: "02",
    title: "Digital Treatment Planning",
    text:
      "Appropriate imaging and digital planning can help evaluate implant position, available bone and the planned restoration.",
  },

  {
    number: "03",
    title: "Implant Placement",
    text:
      "The dental implant is placed into the planned position using appropriate surgical protocols and anaesthesia.",
  },

  {
    number: "04",
    title: "Healing & Integration",
    text:
      "The implant requires a healing period during which the surrounding bone can integrate with the implant surface.",
  },

  {
    number: "05",
    title: "Final Restoration",
    text:
      "Once the implant and surrounding tissues are ready, the planned crown, bridge or other restoration can be placed.",
  },
];

export default function DentalImplantsHyderabadBlog() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Article",

        "@id": `${BASE_URL}/blog/dental-implants-hyderabad#article`,

        headline:
          "Dental Implants in Hyderabad: Cost, Types, Procedure & Recovery",

        description:
          "A patient-friendly guide to dental implants, including implant types, treatment stages, recovery and cost factors.",

        image: `${BASE_URL}/doctor.webp`,

        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${BASE_URL}/blog/dental-implants-hyderabad`,
        },

        author: {
          "@type": "Person",
          name: "Dr. Bhuvanesh Yanamala",
        },

        publisher: {
          "@type": "Organization",

          name:
            "Dr. Bhuvan's Dental Laser & Implant Centre",

          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/doctor.webp`,
          },
        },

        articleSection: "Dental Implants",

        keywords:
          "Dental implants Hyderabad, dental implant cost Hyderabad, dental implants Yousufguda, dental implants Ameerpet",
      },

      {
        "@type": "BreadcrumbList",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },

          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: `${BASE_URL}/articles`,
          },

          {
            "@type": "ListItem",
            position: 3,
            name: "Dental Implants in Hyderabad",
            item: `${BASE_URL}/blog/dental-implants-hyderabad`,
          },
        ],
      },

      {
        "@type": "FAQPage",

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
    <>
      {/* =====================================================
          SCHEMA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="overflow-hidden bg-white text-slate-950">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111f] text-white">

          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

          <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-400/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-40">

            {/* Breadcrumb */}

            <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400">

              <Link
                href="/"
                className="transition hover:text-orange-400"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href="/articles"
                className="transition hover:text-orange-400"
              >
                Articles
              </Link>

              <span>/</span>

              <span className="text-orange-400">
                Dental Implants
              </span>

            </div>

            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">

              {/* LEFT */}

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-orange-300">
                  <Sparkles size={13} />
                  Dental Implant Guide
                </div>

                <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">

                  Dental Implants in Hyderabad:
                  <span className="block text-orange-500">
                    Cost, Types, Procedure & Recovery
                  </span>

                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Missing one or more teeth? Learn how dental implants work,
                  who may benefit from them, what the treatment involves and
                  which factors influence implant treatment cost.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400">

                  <span className="inline-flex items-center gap-2">
                    <Clock3
                      size={15}
                      className="text-orange-400"
                    />
                    10 min read
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck
                      size={15}
                      className="text-orange-400"
                    />
                    Patient-friendly guide
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <MapPin
                      size={15}
                      className="text-orange-400"
                    />
                    Hyderabad
                  </span>

                </div>

              </div>

              {/* PREMIUM HERO CARD */}

              <div className="relative">

                <div className="absolute -inset-6 rounded-[3rem] bg-orange-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl">

                  <div className="rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-slate-900 to-slate-950 p-8">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-500/20">
                      <Stethoscope size={28} />
                    </div>

                    <p className="mt-8 text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
                      Implant Dentistry
                    </p>

                    <h2 className="mt-3 text-3xl font-black">
                      Replace missing teeth with a
                      <span className="block text-orange-400">
                        planned, personalised solution.
                      </span>
                    </h2>

                    <div className="mt-8 space-y-3">

                      {[
                        "Single tooth replacement",
                        "Multiple missing teeth",
                        "Full mouth implant solutions",
                        "Digital treatment planning",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"
                        >
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-orange-400"
                          />

                          <span className="text-sm font-bold text-slate-300">
                            {item}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            ARTICLE
        ====================================================== */}

        <article className="mx-auto max-w-4xl px-6 py-20 lg:py-28">

          {/* INTRO */}

          <div className="text-lg leading-9 text-slate-700">

            <p>
              Losing a tooth can affect more than just appearance. A missing
              tooth can influence chewing, speech, bite and the way neighbouring
              teeth function.
            </p>

            <p className="mt-6">
              <strong>Dental implants</strong> are one option for replacing
              missing teeth. They provide a foundation for a dental crown,
              bridge or implant-supported restoration.
            </p>

            <p className="mt-6">
              If you are considering{" "}
              <strong>dental implants in Hyderabad</strong>, understanding
              the treatment process, possible benefits, limitations, recovery
              and cost factors can help you have a more informed discussion
              with your dentist.
            </p>

          </div>

          {/* QUICK ANSWER */}

          <div className="my-12 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 sm:p-9">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                <Sparkles size={20} />
              </div>

              <div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                  Quick Answer
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  Dental implants are artificial tooth roots placed in the
                  jawbone to support replacement teeth. They can be considered
                  for selected patients with one or more missing teeth, but
                  suitability depends on factors such as bone condition,
                  gum health, overall health and the planned restoration.
                </p>

              </div>

            </div>

          </div>

          {/* =====================================================
              WHAT ARE IMPLANTS
          ====================================================== */}

          <section>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              What Are Dental Implants?
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              A dental implant is an artificial tooth root that is placed
              into the jawbone. Once the implant has healed appropriately,
              it can support a replacement tooth or other implant-supported
              restoration.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Unlike a removable denture, an implant-supported tooth is
              designed to provide a fixed foundation. The final restoration
              may be a crown, bridge or another type of prosthetic solution
              depending on the number of missing teeth and treatment plan.
            </p>

          </section>

          {/* =====================================================
              WHO NEEDS
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Who May Need a Dental Implant?
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Dental implants may be considered when one or more teeth have
              been lost and a fixed tooth-replacement option is desired.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Single missing tooth",
                "Multiple missing teeth",
                "Extensive tooth loss",
                "Difficulty using removable dentures",
                "Need for a fixed replacement option",
                "Selected cases requiring implant-supported rehabilitation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-orange-500"
                  />

                  <span className="text-sm font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </section>

          {/* =====================================================
              TYPES
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Types of Dental Implant Treatment
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              The implant solution depends on how many teeth are missing,
              the condition of the surrounding tissues and the final
              restoration planned.
            </p>

            <div className="mt-8 space-y-4">

              {implantTypes.map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >

                  <div className="flex gap-5">

                    <span className="text-2xl font-black text-orange-500">
                      {item.number}
                    </span>

                    <div>

                      <h3 className="text-xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* =====================================================
              PROCEDURE
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Dental Implant Procedure: Step by Step
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Implant treatment is usually planned in stages. The exact
              sequence can vary depending on the patient and whether
              additional procedures are required.
            </p>

            <div className="mt-8 space-y-4">

              {treatmentSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-6"
                >

                  <div className="flex gap-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-sm font-black text-white">
                      {step.number}
                    </div>

                    <div>

                      <h3 className="text-xl font-black">
                        {step.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {step.text}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* =====================================================
              DIGITAL PLANNING
          ====================================================== */}

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white sm:p-9">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
              <Stethoscope size={23} />
            </div>

            <h2 className="mt-6 text-3xl font-black">
              Why Treatment Planning Matters
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Implant dentistry is not simply about placing an implant.
              The implant position, available bone, gum condition, bite and
              final restoration all need to be considered together.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Appropriate clinical examination and imaging can help your
              dentist evaluate the site and plan treatment according to
              your individual anatomy and restorative requirements.
            </p>

          </section>

          {/* =====================================================
              RECOVERY
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Dental Implant Recovery
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Recovery varies from patient to patient. After implant
              placement, some temporary swelling, tenderness or discomfort
              may occur.
            </p>

            <div className="mt-8 space-y-3">

              {[
                "Follow your dentist's post-operative instructions",
                "Maintain appropriate oral hygiene",
                "Take prescribed medications as directed",
                "Avoid disturbing the surgical area during early healing",
                "Attend recommended follow-up appointments",
                "Report unusual or persistent symptoms to your dentist",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-base leading-7 text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-orange-500"
                  />

                  {item}
                </div>
              ))}

            </div>

          </section>

          {/* =====================================================
              COST
          ====================================================== */}

          <section className="mt-16 rounded-[2rem] border border-orange-100 bg-orange-50 p-7 sm:p-9">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              How Much Do Dental Implants Cost in Hyderabad?
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Dental implant cost can vary considerably from one patient to
              another. There is no single price that accurately represents
              every implant case.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Factors that may influence treatment cost include:
            </p>

            <ul className="mt-6 space-y-3">

              {[
                "Number of missing teeth",
                "Type and number of implants",
                "Implant system selected",
                "Bone availability and quality",
                "Need for bone grafting or sinus-related procedures",
                "Complexity of surgery",
                "Type of final crown or restoration",
                "Additional dental treatment required",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2
                    size={17}
                    className="text-orange-500"
                  />

                  {item}
                </li>
              ))}

            </ul>

            <p className="mt-6 text-lg leading-9 text-slate-700">
              A proper consultation and treatment plan are necessary before
              an accurate estimate can be provided.
            </p>

          </section>

          {/* =====================================================
              PAIN
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Are Dental Implants Painful?
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Implant placement is performed using appropriate local
              anaesthesia. During the procedure, the treatment area is
              numbed to help maintain patient comfort.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              After the procedure, temporary discomfort, swelling or
              sensitivity can occur as the tissues heal. Your dentist will
              provide specific post-operative instructions based on your
              procedure.
            </p>

          </section>

          {/* =====================================================
              COMPARISON
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Dental Implants vs Bridges vs Dentures
            </h2>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[650px] text-left">

                  <thead className="bg-slate-950 text-white">

                    <tr>
                      <th className="px-5 py-4 text-sm font-black">
                        Feature
                      </th>

                      <th className="px-5 py-4 text-sm font-black">
                        Implants
                      </th>

                      <th className="px-5 py-4 text-sm font-black">
                        Bridges
                      </th>

                      <th className="px-5 py-4 text-sm font-black">
                        Dentures
                      </th>
                    </tr>

                  </thead>

                  <tbody className="divide-y divide-slate-100">

                    {[
                      [
                        "Fixed option",
                        "Yes",
                        "Yes",
                        "Usually removable",
                      ],
                      [
                        "Uses dental implants",
                        "Yes",
                        "Usually no",
                        "Not necessarily",
                      ],
                      [
                        "Removable",
                        "No",
                        "No",
                        "Usually yes",
                      ],
                      [
                        "Treatment planning",
                        "Detailed",
                        "Detailed",
                        "Individualised",
                      ],
                      [
                        "Suitability",
                        "Depends on case",
                        "Depends on case",
                        "Depends on case",
                      ],
                    ].map(([feature, implants, bridges, dentures]) => (
                      <tr key={feature}>

                        <td className="px-5 py-4 text-sm font-bold text-slate-900">
                          {feature}
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-600">
                          {implants}
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-600">
                          {bridges}
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-600">
                          {dentures}
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              The best tooth-replacement option depends on your oral health,
              number of missing teeth, bone condition, preferences, budget
              and long-term treatment goals.
            </p>

          </section>

          {/* =====================================================
              INTERNAL LINK - IMPLANT PAGE
          ====================================================== */}

          <div className="my-14 rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white sm:p-9">

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
              Explore Our Implant Treatment
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Looking for Dental Implants in Yousufguda?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Explore our dedicated dental implant treatment page for more
              information about implant care at Dr. Bhuvan&apos;s Dental
              Laser & Implant Centre.
            </p>

            <Link
              href="/dental-implants-yousufguda"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white transition hover:bg-orange-400"
            >
              Explore Dental Implants
              <ArrowRight size={16} />
            </Link>

          </div>

          {/* =====================================================
              YOUSUFGUDA / AMEERPET
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Dental Implants in Yousufguda & Ameerpet
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              If you are searching for{" "}
              <strong>dental implants in Yousufguda</strong>,
              dental implants in Ameerpet or an implant dentist near
              Srinagar Colony, Dr. Bhuvan&apos;s Dental Laser & Implant Centre
              is located at Ganapati Complex, Navodaya Colony Road,
              Yousufguda, Hyderabad.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">

              {[
                "Yousufguda",
                "Ameerpet",
                "Srinagar Colony",
                "Navodaya Colony",
                "Yellareddyguda",
                "Sri Krishna Nagar",
                "Madhura Nagar",
                "Kamalapuri Colony",
                "Rehmat Nagar",
                "Borabanda",
                "SR Nagar",
                "Punjagutta",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold text-slate-600"
                >
                  {area}
                </span>
              ))}

            </div>

          </section>

          {/* =====================================================
              GUM HEALTH INTERNAL LINK
          ====================================================== */}

          <div className="mt-12 rounded-3xl border border-slate-100 bg-slate-50 p-7">

            <h3 className="text-2xl font-black">
              Have Gum Disease or Bleeding Gums?
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Healthy gums and good oral hygiene are important considerations
              before and after implant treatment. If you have bleeding gums,
              gum swelling or other periodontal concerns, discuss them with
              your dentist.
            </p>

            <Link
              href="/gum-treatment-yousufguda"
              className="mt-5 inline-flex items-center gap-2 font-black text-orange-600"
            >
              Explore Gum Treatment
              <ArrowRight size={16} />
            </Link>

          </div>

          {/* =====================================================
              WHY CHOOSE US
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Why Choose Dr. Bhuvan&apos;s Dental Laser & Implant Centre?
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Implant treatment involves more than placing an implant.
              Careful diagnosis, treatment planning, surgical execution,
              gum health and the final restoration all contribute to the
              overall treatment journey.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "MDS Periodontics",
                "Implantology-focused dental care",
                "Laser dentistry",
                "Digital treatment planning",
                "One-to-one patient care",
                "Comprehensive periodontal evaluation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <ShieldCheck
                    size={20}
                    className="text-orange-500"
                  />

                  <span className="font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </section>

          {/* =====================================================
              FAQ
          ====================================================== */}

          <section className="mt-16">

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Frequently Asked Questions About Dental Implants
            </h2>

            <div className="mt-8 space-y-3">

              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  open={index === 0}
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black text-slate-900">

                    <span>

                      <span className="mr-3 text-xs text-orange-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {faq.question}

                    </span>

                    <ChevronDown
                      size={18}
                      className="shrink-0 text-orange-500 transition group-open:rotate-180"
                    />

                  </summary>

                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>

                </details>
              ))}

            </div>

          </section>

          {/* =====================================================
              FINAL CTA
          ====================================================== */}

          <section className="mt-16 overflow-hidden rounded-[2.5rem] bg-orange-500 p-8 text-white shadow-2xl sm:p-10">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>

                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-100">
                  Considering Dental Implants?
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Take the First Step Towards Replacing Missing Teeth
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-orange-50">
                  Book a consultation to understand your treatment options
                  and whether dental implants are suitable for your individual
                  dental needs.
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="tel:+918074528763"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-orange-600 transition hover:bg-orange-50"
                >
                  <Phone size={16} />
                  Call Clinic
                </a>

                <a
                  href="https://wa.me/918074528763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/20"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

              </div>

            </div>

          </section>

        </article>

      </main>
    </>
  );
}