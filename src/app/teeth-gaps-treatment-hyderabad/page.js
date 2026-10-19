
import Link from "next/link";

export const metadata = {
  title: "Teeth Gap Treatment in Hyderabad | Dr. Bhuvan",
  description:
    "Looking for teeth gap closure in Hyderabad? Explore cosmetic bonding, veneers and orthodontic options at Dr. Bhuvan's Dental Laser & Implant Centre, Ameerpet.",
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/teeth-gaps-treatment-hyderabad",
  },
  openGraph: {
    title: "Teeth Gap Treatment in Hyderabad | Dr. Bhuvan",
    description:
      "Learn about teeth gap closure options, including composite bonding, veneers and orthodontic treatment in Ameerpet, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com/teeth-gaps-treatment-hyderabad",
    type: "website",
  },
};

const clinicName = "Dr. Bhuvan's Dental Laser & Implant Centre";
const phone = "+918074528763";
const phoneDisplay = "80745 28763";
const address =
  "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073";

const faqs = [
  {
    question: "How can I close gaps between my teeth?",
    answer:
      "Depending on the cause and size of the gap, treatment may include composite bonding, veneers or orthodontic treatment. A dental examination helps determine the most suitable option.",
  },
  {
    question: "Can teeth gaps be closed without braces?",
    answer:
      "Some small gaps may be suitable for composite bonding or veneers. However, orthodontic treatment may be more appropriate when tooth position, bite or multiple gaps need correction.",
  },
  {
    question: "Is composite bonding suitable for front teeth gaps?",
    answer:
      "Composite bonding may be suitable for selected small gaps in front teeth. Tooth shape, enamel condition, bite and gum health should be assessed before treatment.",
  },
  {
    question: "Are teeth gaps always a problem?",
    answer:
      "Not necessarily. Some gaps are natural and do not require treatment. A new or increasing gap, especially with loose teeth or bleeding gums, should be examined by a dentist.",
  },
  {
    question: "How much does teeth gap treatment cost in Hyderabad?",
    answer:
      "The cost depends on the number of teeth involved, the cause of the gap and the treatment selected. A clinical examination is needed for an individual estimate.",
  },
  {
    question: "Where can I consult for teeth gap treatment in Ameerpet?",
    answer:
      "You can contact Dr. Bhuvan's Dental Laser & Implant Centre in Ameerpet, Hyderabad, to enquire about an appointment and suitable treatment options.",
  },
];

const treatments = [
  {
    number: "01",
    title: "Composite Bonding",
    description:
      "Tooth-coloured composite resin may be added to selected teeth to improve their shape and close certain small gaps. It is often a conservative option when clinically suitable.",
    suitable: "Selected small gaps and minor tooth-shape discrepancies",
  },
  {
    number: "02",
    title: "Porcelain or Ceramic Veneers",
    description:
      "Custom-made veneers may improve the appearance of selected front teeth. Suitability depends on enamel, tooth position, bite and the amount of tooth preparation required.",
    suitable: "Selected cosmetic cases requiring changes to tooth shape or appearance",
  },
  {
    number: "03",
    title: "Orthodontic Treatment",
    description:
      "Braces or clear aligners can move teeth into a planned position. Orthodontic assessment is important when there are multiple gaps, spacing concerns or bite problems.",
    suitable: "Multiple gaps, tooth-position concerns or bite correction",
  },
  {
    number: "04",
    title: "Treatment of the Underlying Cause",
    description:
      "When spacing is associated with gum disease, tooth movement or other dental conditions, the underlying problem should be evaluated and managed before cosmetic closure is considered.",
    suitable: "New or increasing gaps, gum problems or tooth mobility",
  },
];

export default function TeethGapsTreatmentPage() {
  const dentistJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicName,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500073",
      addressCountry: "IN",
    },
    url: "https://www.drbhuvandentalcare.com/teeth-gaps-treatment-hyderabad",
    medicalSpecialty: "Dentistry",
  };

  const faqJsonLd = {
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

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dentistJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
              Cosmetic Dentistry · Ameerpet, Hyderabad
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Teeth Gap Treatment in{" "}
              <span className="text-orange-600">Hyderabad</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Exploring ways to close gaps between your teeth? Discover
              suitable options for a more balanced smile, from composite
              bonding to veneers and orthodontic treatment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent("Hello, I would like to enquire about teeth gap treatment.")}`}
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-4 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700"
              >
                Enquire on WhatsApp
              </a>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 transition hover:border-orange-400 hover:text-orange-700"
              >
                Call {phoneDisplay}
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Personalised treatment recommendations after a dental
              examination. The right option depends on your individual needs.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/60 sm:p-9">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                ✨
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
                Your smile, your treatment plan
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                Find the right approach to teeth gap closure
              </h2>
              <div className="mt-7 space-y-4">
                {[
                  "Assessment of teeth, gums and bite",
                  "Discussion of suitable treatment options",
                  "Personalised plan based on clinical findings",
                  "Clear explanation of expected outcomes and limitations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                      ✓
                    </span>
                    <p className="leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">
                  Dr. Bhuvanesh Yanamala
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  BDS, MDS (Periodontics)
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {clinicName}
                </p>
              </div>
            </div>
            <div className="absolute -right-3 -top-3 -z-10 h-28 w-28 rounded-full bg-orange-200/60 blur-2xl" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8">
          <div className="text-center">
            <p className="font-bold text-slate-900">Individual Assessment</p>
            <p className="mt-1 text-sm text-slate-500">
              Every smile is different
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold text-slate-900">Multiple Options</p>
            <p className="mt-1 text-sm text-slate-500">
              Choose based on clinical suitability
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold text-slate-900">Ameerpet, Hyderabad</p>
            <p className="mt-1 text-sm text-slate-500">
              Convenient local consultation
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
            Understand the cause
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What Causes Gaps Between Teeth?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A gap between teeth is commonly called a diastema. It may be
            natural, or it may develop due to changes in tooth position or
            oral health. Understanding the cause helps guide treatment.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Natural Tooth Spacing",
              text: "A difference between tooth size and jaw size can leave spaces between teeth.",
            },
            {
              title: "Gum Disease",
              text: "Loss of supporting tissues can cause teeth to move or develop new spaces.",
            },
            {
              title: "Tooth Position",
              text: "Teeth may be tilted, rotated or positioned in a way that creates visible gaps.",
            },
            {
              title: "Missing or Small Teeth",
              text: "A missing tooth or a tooth that is smaller than expected may contribute to spacing.",
            },
            {
              title: "Habits and Oral Forces",
              text: "Certain habits or forces on the front teeth may contribute to spacing in some people.",
            },
            {
              title: "Frenum or Other Factors",
              text: "The tissue attachment between the upper front teeth may contribute in selected cases.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-orange-500" />
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="font-bold text-amber-950">
            Important: a newly developing gap needs assessment
          </p>
          <p className="mt-2 leading-7 text-amber-900">
            If a gap is becoming wider, or you notice loose teeth, gum
            bleeding or swelling, seek a dental assessment before considering
            cosmetic gap closure. Treating the underlying cause is important.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Treatment options
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Which Teeth Gap Closure Treatment Is Right for You?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              There is no single treatment that suits everyone. The choice
              depends on the gap, tooth shape, bite, gum health, appearance
              goals and long-term stability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {treatments.map((treatment) => (
              <article
                key={treatment.number}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 font-extrabold text-orange-700">
                    {treatment.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {treatment.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {treatment.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                    May be considered for
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {treatment.suitable}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              What about a frenectomy?
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              A frenectomy is not routinely required for every gap between
              the upper front teeth. It may be considered in selected cases
              after examination, and its timing should be planned alongside
              any orthodontic treatment when indicated.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Your consultation
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What Happens During Your Dental Visit?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Your dentist will assess the spacing and check the health of
              your teeth and gums before discussing suitable options.
            </p>

            <div className="mt-7 space-y-5">
              {[
                {
                  title: "1. Examination",
                  text: "Review of tooth spacing, gum condition, bite and relevant dental history.",
                },
                {
                  title: "2. Identify the cause",
                  text: "Assessment of whether the gap is natural or related to tooth position or another dental condition.",
                },
                {
                  title: "3. Discuss the options",
                  text: "Explanation of suitable approaches, limitations, maintenance and estimated cost.",
                },
                {
                  title: "4. Plan treatment",
                  text: "Treatment is planned according to your clinical findings and preferences.",
                },
              ].map((step) => (
                <div key={step.title} className="flex gap-4">
                  <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange-500" />
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-600 to-orange-700 p-8 text-white shadow-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-100">
              Start with an assessment
            </p>
            <h3 className="mt-4 text-3xl font-extrabold leading-tight">
              Thinking about closing the gap in your smile?
            </h3>
            <p className="mt-5 leading-7 text-orange-50">
              Contact our clinic to enquire about a consultation for teeth
              gap treatment in Ameerpet, Hyderabad.
            </p>
            <a
              href={`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent("Hello, I would like to book a consultation for teeth gap treatment.")}`}
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 font-bold text-orange-700 transition hover:bg-orange-50 sm:w-auto"
            >
              Enquire for an Appointment
            </a>
            <p className="mt-5 text-sm text-orange-100">
              Call: {phoneDisplay}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-orange-50/70">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Teeth Gap Treatment FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <summary className="cursor-pointer list-none pr-7 font-bold leading-7 text-slate-900 marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="text-xl text-orange-600 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Visit our clinic
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Teeth Gap Treatment in Ameerpet, Hyderabad
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              At {clinicName}, you can enquire about an assessment for
              spacing between teeth and discuss the treatment options
              appropriate for your dental condition.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 p-6">
              <p className="font-bold text-slate-900">{clinicName}</p>
              <p className="mt-2 leading-7 text-slate-600">{address}</p>
              <p className="mt-4 text-slate-600">
                <span className="font-semibold text-slate-900">Doctor:</span>{" "}
                Dr. Bhuvanesh Yanamala, BDS, MDS (Periodontics)
              </p>
              <p className="mt-2 text-slate-600">
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                {phoneDisplay}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700"
                >
                  Call the Clinic
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Dr+Bhuvan%27s+Dental+Laser+%26+Implant+Centre%2C+Ganapathi+Complex%2C+Hyderabad&destination_place_id=ChIJhUqhWgCRyzsRv1O-F_mXxE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-orange-400 hover:text-orange-700"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
            <h3 className="text-2xl font-extrabold">
              Explore More Dental Treatments
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Learn more about other dental concerns and treatments offered
              at our clinic.
            </p>

            <div className="mt-7 space-y-3">
              <Link
                href="/dentist-in-ameerpet"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
              >
                <span>Dental Clinic in Ameerpet</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link
                href="/teeth-cleaning-ameerpet"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
              >
                <span>Teeth Cleaning in Ameerpet</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link
                href="/gum-disease-treatment-ameerpet"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
              >
                <span>Gum Disease Treatment</span>
                <span className="text-orange-400">→</span>
              </Link>
              <Link
                href="/braces-treatment-srinagar-colony"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
              >
                <span>Braces Treatment</span>
                <span className="text-orange-400">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-slate-900">{clinicName}</p>
            <p className="mt-1 text-sm text-slate-500">
              Ameerpet · Yousufguda · Hyderabad
            </p>
          </div>
          <a
            href={`tel:${phone}`}
            className="font-bold text-orange-700 hover:text-orange-800"
          >
            Call {phoneDisplay}
          </a>
        </div>
        <div className="border-t border-slate-100 px-5 py-4 text-center text-xs leading-5 text-slate-500">
          Dental information on this page is for general educational
          purposes and does not replace an individual clinical examination.
        </div>
      </footer>
    </main>
  );
}
