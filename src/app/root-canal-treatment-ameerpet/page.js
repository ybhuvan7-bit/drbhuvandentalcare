import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, CheckCircle, MapPin } from "lucide-react";

export const metadata = {
  title:
    "Root Canal Treatment in Ameerpet, Hyderabad | Dr. Bhuvan's Dental",
  description:
    "Looking for root canal treatment in Ameerpet, Hyderabad? Dr. Bhuvan's Dental Laser & Implant Centre provides personalized RCT care for tooth pain, deep decay, infection and damaged teeth.",
  keywords: [
    "root canal treatment in Ameerpet",
    "root canal treatment Ameerpet",
    "RCT in Ameerpet",
    "root canal dentist in Ameerpet",
    "root canal specialist Ameerpet",
    "tooth pain treatment Ameerpet",
    "root canal treatment near Yousufguda",
  ],
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/root-canal-treatment-ameerpet",
  },
  openGraph: {
    title:
      "Root Canal Treatment in Ameerpet, Hyderabad | Dr. Bhuvan's Dental",
    description:
      "Personalized root canal treatment for infected, painful or damaged teeth in Ameerpet, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com/root-canal-treatment-ameerpet",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.drbhuvandentalcare.com/doctor.webp",
        width: 1200,
        height: 630,
        alt: "Root Canal Treatment in Ameerpet - Dr. Bhuvan's Dental",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is root canal treatment painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Root canal treatment is performed under local anaesthesia. The aim is to control the infection and relieve the pain caused by an inflamed or infected tooth.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if I need a root canal?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Severe toothache, prolonged sensitivity to hot or cold, pain while biting, swelling, deep decay or damage to a tooth may indicate the need for root canal treatment. A clinical examination and dental X-ray are used to determine the appropriate treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Can every infected tooth be saved with root canal treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Not every tooth can be saved. The decision depends on the amount of remaining tooth structure, the condition of the supporting tissues and whether the tooth is restorable after examination.",
      },
    },
    {
      "@type": "Question",
      name: "Will I need a crown after root canal treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A crown or other final restoration may be recommended depending on the tooth, the amount of tooth structure remaining and its functional requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a root canal consultation in Ameerpet?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You can contact Dr. Bhuvan's Dental Laser & Implant Centre by phone or WhatsApp to schedule a dental consultation in Ameerpet, Hyderabad.",
      },
    },
  ],
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://www.drbhuvandentalcare.com/#dentist",
  name: "Dr. Bhuvan's Dental Laser & Implant Centre",
  url: "https://www.drbhuvandentalcare.com/root-canal-treatment-ameerpet",
  telephone: "+918074528763",
  image: "https://www.drbhuvandentalcare.com/doctor.webp",
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
      name: "Root Canal Treatment in Ameerpet",
      item:
        "https://www.drbhuvandentalcare.com/root-canal-treatment-ameerpet",
    },
  ],
};

export default function RootCanalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

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

      <main className="bg-white text-gray-900">

        {/* ================= BREADCRUMB ================= */}

        <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-gray-500"
          >
            <Link
              href="/"
              className="transition hover:text-orange-600"
            >
              Home
            </Link>

            <span className="mx-2 text-gray-300">/</span>

            <span className="font-medium text-gray-700">
              Root Canal Treatment in Ameerpet
            </span>
          </nav>
        </div>

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">

            {/* HERO TEXT */}

            <div>
              <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-orange-600 shadow-lg">
                🦷 Advanced Dental Care
              </span>

              <h1 className="mt-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Root Canal Treatment
                <br />
                in Ameerpet,
                <br />
                Hyderabad
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-orange-50 lg:text-xl">
                Get professional care for tooth pain, deep decay, infection
                and damaged teeth. Our approach focuses on saving natural
                teeth whenever they can be predictably restored.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Diagnosis and personalized treatment planning",
                  "Modern root canal techniques",
                  "Comfort-focused dental care",
                  "Tooth preservation whenever appropriate",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:+918074528763"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>

                <Link
                  href="#appointment"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div className="relative">
              <div className="relative mx-auto max-w-lg overflow-hidden rounded-[32px] border-8 border-white bg-white shadow-2xl">
                <Image
                  src="/doctor.webp"
                  alt="Dr. Bhuvanesh Yanamala - Dentist in Ameerpet, Hyderabad"
                  width={700}
                  height={700}
                  priority
                  className="h-auto w-full object-cover"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">
                  <p className="font-bold text-gray-900">
                    Dr. Bhuvanesh Yanamala
                  </p>
                  <p className="text-sm font-semibold text-orange-600">
                    MDS • Periodontist & Implantologist
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= INTRO ================= */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[4px] text-orange-600">
              SAVE YOUR NATURAL TOOTH
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              When a painful tooth may still be worth saving
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Root canal treatment is used to treat a tooth when the soft
              tissue inside it becomes inflamed or infected. Removing the
              affected tissue, cleaning the root canal system and sealing the
              tooth can help preserve the natural tooth when it is restorable.
            </p>
          </div>
        </section>

        {/* ================= WARNING SIGNS ================= */}

        <section className="bg-orange-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">
              <p className="font-semibold uppercase tracking-[4px] text-orange-600">
                WARNING SIGNS
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Do you need a root canal evaluation?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
                These symptoms do not automatically mean you need an RCT,
                but they are reasons to have the tooth professionally examined.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {[
                ["🦷", "Severe Toothache", "Persistent or intense tooth pain that does not settle."],
                ["❄️", "Hot or Cold Sensitivity", "Sensitivity that lingers after the stimulus is removed."],
                ["🥴", "Pain While Biting", "Discomfort when chewing or putting pressure on a tooth."],
                ["🔴", "Swelling", "Swelling around the tooth or nearby gum tissues."],
                ["🕳️", "Deep Dental Decay", "Extensive decay that may have reached the inner part of the tooth."],
                ["💥", "Damaged Tooth", "A cracked, fractured or severely damaged tooth may require evaluation."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="text-4xl">{icon}</div>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{text}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= TREATMENT PROCESS ================= */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">

            <div className="text-center">
              <p className="font-semibold uppercase tracking-[4px] text-orange-600">
                OUR APPROACH
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Root Canal Treatment Process
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
                Treatment is planned according to the condition of the tooth
                and the findings from your clinical examination.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[
                ["01", "Examination & Diagnosis", "The tooth is examined and dental imaging may be recommended when needed."],
                ["02", "Local Anaesthesia", "The area is carefully numbed to support a comfortable procedure."],
                ["03", "Cleaning the Canal", "Inflamed or infected tissue is removed and the canal system is cleaned."],
                ["04", "Shaping & Disinfection", "The canal is prepared and disinfected using appropriate techniques."],
                ["05", "Sealing the Tooth", "The cleaned canal is filled and sealed to help prevent reinfection."],
                ["06", "Final Restoration", "A suitable restoration or crown may be recommended to protect the tooth."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-3xl border border-orange-100 bg-orange-50 p-7"
                >
                  <span className="text-3xl font-black text-orange-500">
                    {number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= MODERN TECHNOLOGY ================= */}

        <section className="bg-orange-50 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">

            <div>
              <p className="font-semibold uppercase tracking-[4px] text-orange-600">
                MODERN DENTISTRY
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Technology-supported root canal care
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Accurate diagnosis and careful treatment planning are important
                when managing an infected or damaged tooth. Depending on the
                case, modern dental imaging, contemporary endodontic techniques
                and appropriate magnification may be used.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Digital dental imaging",
                  "Modern rotary endodontic techniques",
                  "Careful canal cleaning and disinfection",
                  "Laser-assisted applications when clinically appropriate",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/clinic/clinic2.webp"
                  alt="Modern dental treatment environment at Dr Bhuvan's Dental Laser & Implant Centre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= SAVE VS EXTRACTION ================= */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">

            <div className="text-center">
              <p className="font-semibold uppercase tracking-[4px] text-orange-600">
                PRESERVE WHEN POSSIBLE
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Root Canal Treatment vs Tooth Extraction
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-7 text-gray-600">
                When a tooth can be predictably restored, preserving the
                natural tooth may be preferable to extraction. The right
                choice depends on the individual tooth and clinical findings.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
                <h3 className="text-2xl font-bold text-orange-700">
                  When saving the tooth may be considered
                </h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "The tooth has enough healthy structure to be restored.",
                    "The supporting tissues are suitable for treatment.",
                    "The infection can be managed with root canal treatment.",
                    "The tooth has a reasonable long-term restorative outlook.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-gray-700">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                <h3 className="text-2xl font-bold">
                  When extraction may be required
                </h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "The tooth cannot be predictably restored.",
                    "There is insufficient remaining tooth structure.",
                    "Severe damage makes restoration unsuitable.",
                    "The overall clinical prognosis is poor.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-gray-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ================= AFTER RCT ================= */}

        <section className="bg-orange-50 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[4px] text-orange-600">
              AFTER ROOT CANAL TREATMENT
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Protecting your treated tooth
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
              A root canal removes infection from inside the tooth, but the
              tooth may still need a suitable final restoration. Depending on
              the tooth and remaining structure, a filling, onlay or crown may
              be recommended to restore function and protect it from further
              damage.
            </p>

          </div>
        </section>

        {/* ================= RELATED SERVICES ================= */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">
              <p className="font-semibold uppercase tracking-[4px] text-orange-600">
                EXPLORE MORE
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Complete Dental Care in Ameerpet
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <Link
                href="/dental-clinic-ameerpet"
                className="rounded-3xl bg-orange-50 p-7 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">
                  Dental Clinic in Ameerpet
                </h3>
                <p className="mt-3 text-gray-600">
                  Explore comprehensive dental care.
                </p>
                <span className="mt-5 inline-block font-semibold text-orange-600">
                  Learn More →
                </span>
              </Link>

              <Link
                href="/dentist-in-ameerpet"
                className="rounded-3xl bg-orange-50 p-7 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">
                  Dentist in Ameerpet
                </h3>
                <p className="mt-3 text-gray-600">
                  Meet Dr. Bhuvanesh Yanamala.
                </p>
                <span className="mt-5 inline-block font-semibold text-orange-600">
                  Meet Your Dentist →
                </span>
              </Link>

              <Link
                href="/dental-implants-ameerpet"
                className="rounded-3xl bg-orange-50 p-7 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">
                  Dental Implants
                </h3>
                <p className="mt-3 text-gray-600">
                  Options for replacing missing teeth.
                </p>
                <span className="mt-5 inline-block font-semibold text-orange-600">
                  Learn More →
                </span>
              </Link>

              <Link
                href="/teeth-cleaning-ameerpet"
                className="rounded-3xl bg-orange-50 p-7 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">
                  Teeth Cleaning
                </h3>
                <p className="mt-3 text-gray-600">
                  Professional scaling and oral hygiene care.
                </p>
                <span className="mt-5 inline-block font-semibold text-orange-600">
                  Learn More →
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">

            <div className="text-center">
              <p className="font-semibold uppercase tracking-[4px] text-orange-600">
                FREQUENTLY ASKED QUESTIONS
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Root Canal Treatment FAQs
              </h2>
            </div>

            <div className="mt-12 space-y-5">

              {[
                [
                  "Is root canal treatment painful?",
                  "Root canal treatment is performed under local anaesthesia. The aim is to control the infection and relieve the pain caused by an inflamed or infected tooth.",
                ],
                [
                  "How do I know if I need a root canal?",
                  "Severe toothache, prolonged hot or cold sensitivity, pain while biting, swelling, deep decay or tooth damage may require an evaluation. A clinical examination and dental imaging help determine the appropriate treatment.",
                ],
                [
                  "Can every infected tooth be saved?",
                  "Not every tooth can be saved. The decision depends on the remaining tooth structure, supporting tissues and whether the tooth is restorable.",
                ],
                [
                  "Will I need a crown after root canal treatment?",
                  "A crown or another suitable restoration may be recommended depending on the tooth, remaining structure and functional requirements.",
                ],
                [
                  "How can I book an RCT consultation in Ameerpet?",
                  "You can call the clinic or contact us through WhatsApp to schedule a dental consultation in Ameerpet, Hyderabad.",
                ],
              ].map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-3xl border border-orange-100 bg-orange-50 p-6"
                >
                  <summary className="cursor-pointer text-lg font-bold text-gray-900">
                    {question}
                  </summary>

                  <p className="mt-4 leading-7 text-gray-600">
                    {answer}
                  </p>
                </details>
              ))}

            </div>
          </div>
        </section>

        {/* ================= LOCATION ================= */}

        <section className="bg-orange-50 py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">

            <MapPin className="mx-auto h-10 w-10 text-orange-600" />

            <p className="mt-4 font-semibold uppercase tracking-[4px] text-orange-600">
              ROOT CANAL CARE NEAR YOU
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Root Canal Treatment in Ameerpet, Hyderabad
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              Our clinic is located at Ganapati Complex, Navodaya Colony Road,
              Sri Krishna Nagar, Ameerpet, Hyderabad. We also serve patients
              from Yousufguda, SR Nagar, Madhura Nagar, Srinagar Colony and
              nearby areas.
            </p>

            <a
              href="https://maps.app.goo.gl/Fiow6zV9W17xnxR47"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-orange-600 px-8 py-4 font-bold text-white transition hover:bg-orange-700 hover:shadow-xl"
            >
              📍 Get Directions
            </a>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section
          id="appointment"
          className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 py-24"
        >
          <div className="mx-auto max-w-5xl px-6 text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-white">
              NEED DENTAL CARE?
            </span>

            <h2 className="mt-7 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Don't Ignore Persistent Tooth Pain
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
              Early evaluation can help determine whether an infected or
              damaged tooth can be treated and preserved.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <a
                href="tel:+918074528763"
                className="rounded-full bg-white px-9 py-4 font-bold text-orange-600 shadow-xl transition hover:scale-105"
              >
                📞 Call Now
              </a>

              <a
                href="https://maps.app.goo.gl/Fiow6zV9W17xnxR47"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-9 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
              >
                📍 Get Directions
              </a>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}