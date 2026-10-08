import Link from "next/link";

export const metadata = {
  title:
    "Teeth Cavities Treatment in Hyderabad | Tooth Decay Treatment | Dr. Bhuvan",

  description:
    "Looking for teeth cavities treatment in Hyderabad? Dr. Bhuvan's Dental Laser & Implant Centre provides cavity treatment, dental fillings and tooth decay care in Ameerpet.",

  keywords: [
    "Teeth Cavities Treatment in Hyderabad",
    "teeth cavities treatment Hyderabad",
    "cavity treatment Hyderabad",
    "tooth decay treatment Hyderabad",
    "dental cavities treatment Hyderabad",
    "dental filling Hyderabad",
    "tooth cavity dentist Hyderabad",
    "cavities treatment Ameerpet",
    "tooth decay treatment Ameerpet",
    "dental filling Ameerpet",
    "dentist for cavities Hyderabad",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/teeth-cavities-treatment-hyderabad",
  },

  openGraph: {
    title:
      "Teeth Cavities Treatment in Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",
    description:
      "Professional cavity and tooth decay treatment in Hyderabad with dental fillings and personalised treatment planning.",
    url:
      "https://www.drbhuvandentalcare.com/teeth-cavities-treatment-hyderabad",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.drbhuvandentalcare.com/doctor.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Bhuvanesh Yanamala - Teeth Cavities Treatment in Hyderabad",
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

const faqs = [
  {
    q: "What causes dental cavities?",
    a: "Dental cavities develop when acids produced by plaque bacteria gradually damage the tooth structure. Frequent sugary foods and drinks, inadequate oral hygiene and other factors can increase the risk of tooth decay.",
  },
  {
    q: "Can a cavity heal on its own?",
    a: "Very early enamel demineralisation may sometimes be managed with professional preventive care and remineralisation. Once a definite cavity or hole has formed, professional dental treatment is usually required.",
  },
  {
    q: "Is dental filling painful?",
    a: "Most dental fillings are performed comfortably. Local anaesthesia may be used when required, depending on the depth of decay and the tooth being treated.",
  },
  {
    q: "How do I know if I need a root canal?",
    a: "A deep cavity that has affected the inner pulp of the tooth may require root canal treatment. Persistent toothache, sensitivity, spontaneous pain or pain while biting can be signs that further evaluation is needed.",
  },
  {
    q: "Can cavities come back after a filling?",
    a: "Yes. A tooth that has been filled can develop decay again around or elsewhere on the tooth. Good oral hygiene, limiting frequent sugar exposure and regular dental examinations can help reduce the risk.",
  },
  {
    q: "How can I prevent cavities?",
    a: "Brush twice daily with fluoride toothpaste, clean between your teeth, limit frequent sugary snacks and drinks, and maintain regular dental check-ups.",
  },
];

export default function TeethCavitiesTreatmentHyderabadPage() {
  return (
    <main className="bg-white text-zinc-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-100">
              Tooth Decay &amp; Cavity Care
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Teeth Cavities
              <span className="block text-orange-100">
                Treatment in Hyderabad
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50 sm:text-xl">
              Early treatment of dental cavities can help protect your natural
              tooth and prevent decay from progressing deeper. Get personalised
              cavity and tooth decay care at Dr. Bhuvan&apos;s Dental Laser &amp;
              Implant Centre.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#appointment"
                className="rounded-full bg-white px-7 py-3.5 text-center font-bold text-orange-600 shadow-lg transition hover:bg-orange-50"
              >
                Book an Appointment
              </Link>

              <a
                href="tel:+918074528763"
                className="rounded-full border border-white/70 px-7 py-3.5 text-center font-bold text-white transition hover:bg-white/10"
              >
                Call +91 80745 28763
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/15 px-4 py-2">
                Dental Fillings
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2">
                Tooth Decay Care
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2">
                Preventive Dentistry
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <img
                src="/doctor.webp"
                alt="Dr. Bhuvanesh Yanamala - Teeth Cavities Treatment in Hyderabad"
                className="h-[420px] w-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-orange-50/60 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
            Dental Cavities
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            What Are Dental Cavities?
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-zinc-600">
            A dental cavity is an area of tooth decay where the hard tissues of
            the tooth have been damaged. Cavities can begin as early
            demineralisation and may progress into a visible hole if not
            addressed.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-zinc-600">
            Detecting decay early can make treatment simpler and may help
            preserve more of your natural tooth structure.
          </p>
        </div>
      </section>

      {/* SIGNS */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
              Warning Signs
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Signs You May Have a Cavity
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Cavities do not always cause symptoms in their early stages.
              Watch for changes such as:
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Tooth sensitivity",
              "Pain while eating",
              "Food getting stuck",
              "White, brown or dark spots",
              "Visible hole in the tooth",
              "Persistent toothache",
              "Bad breath",
              "Pain while biting",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-xl text-orange-600">
                  ✓
                </div>

                <h3 className="font-bold text-zinc-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="bg-zinc-50 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
              Understanding Tooth Decay
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What Causes Tooth Cavities?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
              Cavities are usually the result of multiple factors that allow
              acids from plaque bacteria to damage the tooth over time.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Plaque Build-up",
                text: "Plaque contains bacteria that can produce acids which gradually damage tooth enamel.",
              },
              {
                title: "Frequent Sugar Exposure",
                text: "Frequent sugary foods and drinks can increase the repeated acid attacks on teeth.",
              },
              {
                title: "Poor Oral Hygiene",
                text: "Inadequate brushing and cleaning between teeth can allow plaque to remain on tooth surfaces.",
              },
              {
                title: "Dry Mouth",
                text: "Reduced saliva can decrease the natural protection and cleansing provided to teeth.",
              },
              {
                title: "Acidic Foods & Drinks",
                text: "Frequent exposure to acidic substances can contribute to enamel wear and demineralisation.",
              },
              {
                title: "Irregular Dental Check-ups",
                text: "Small areas of decay can be difficult to notice without a professional dental examination.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-100"
              >
                <div className="mb-5 h-2 w-14 rounded-full bg-orange-500" />

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
                Cavity Treatment
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Cavity Treatment Depends on How Deep the Decay Is
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                The appropriate treatment depends on the location and extent of
                decay, the condition of the tooth and whether the inner pulp
                has been affected.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    title: "Early Demineralisation",
                    text: "Very early enamel changes may be managed with preventive and remineralisation-focused care.",
                  },
                  {
                    title: "Dental Filling",
                    text: "When a cavity has formed, the decayed portion can be removed and the tooth restored with a suitable filling material.",
                  },
                  {
                    title: "Root Canal Treatment",
                    text: "If decay reaches the dental pulp, root canal treatment may be required to treat the infected or inflamed pulp and preserve the tooth.",
                  },
                  {
                    title: "Crown or Advanced Restoration",
                    text: "A heavily damaged tooth may require a stronger restoration depending on the remaining tooth structure.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-1 leading-7 text-zinc-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-white p-8 shadow-xl ring-1 ring-orange-100">
              <div className="rounded-2xl bg-orange-600 p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-100">
                  Important
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Don&apos;t Wait Until the Tooth Hurts
                </h3>

                <p className="mt-4 leading-7 text-orange-50">
                  A cavity may progress without causing significant pain.
                  Regular dental examinations can help identify decay before it
                  becomes more extensive.
                </p>

                <Link
                  href="/#appointment"
                  className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-bold text-orange-600"
                >
                  Book a Dental Check-up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILLING PROCESS */}
      <section className="bg-orange-50 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
            Dental Filling
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            What Happens During a Cavity Filling?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            When a cavity requires a filling, treatment generally involves
            removing the decayed portion and restoring the tooth.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Examination", "The tooth is examined and imaging may be recommended when required."],
              ["02", "Diagnosis", "The extent and depth of decay are assessed."],
              ["03", "Decay Removal", "The affected tooth structure is carefully removed."],
              ["04", "Filling", "The cleaned cavity is restored with an appropriate filling material."],
              ["05", "Finishing", "The restoration is shaped and checked for comfortable function."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl bg-white p-6 text-left shadow-sm"
              >
                <span className="text-sm font-extrabold text-orange-500">
                  {number}
                </span>

                <h3 className="mt-3 font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAN CAVITY HEAL */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-orange-100 bg-white p-8 shadow-lg sm:p-10">
          <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
            Common Question
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Can a Cavity Heal on Its Own?
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Very early enamel demineralisation may sometimes be reversed or
            stabilised with appropriate preventive care and remineralisation.
            However, once a definite cavity or hole has formed, the damaged
            tooth structure generally cannot simply grow back and professional
            treatment is usually needed.
          </p>

          <div className="mt-7 rounded-2xl bg-orange-50 p-6">
            <p className="font-semibold text-zinc-800">
              If you notice a dark spot, sensitivity, food trapping or tooth
              pain, a dental examination can help determine whether treatment
              is needed.
            </p>
          </div>
        </div>
      </section>

      {/* WHY DR BHUVAN */}
      <section className="bg-zinc-950 px-6 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-orange-400">
              Your Dental Care
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Why Choose Dr. Bhuvan&apos;s Dental Clinic?
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Dr. Bhuvanesh Yanamala, MDS Periodontics, provides personalised
              dental care with a focus on diagnosis, prevention and
              conservative treatment whenever appropriate.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "MDS Periodontics",
                "Modern dental clinic",
                "Personalised treatment planning",
                "Digital diagnostic support",
                "One-to-one patient care",
                "Comprehensive dental treatment",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-orange-400">✓</span>
                  <span className="ml-3 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <img
              src="/clinic2.webp"
              alt="Modern dental treatment environment at Dr. Bhuvan's Dental Laser & Implant Centre"
              className="h-[400px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
            Convenient Location
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Cavity Treatment in Hyderabad
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre is conveniently
            located for patients from Ameerpet, Yousufguda and nearby areas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
                className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2.5 font-medium text-orange-700"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            Ganapati Complex, Navodaya Colony Road, Ameerpet, Hyderabad,
            Telangana 500073
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
              FAQs
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions About Cavities
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100"
              >
                <summary className="cursor-pointer list-none pr-8 font-bold text-zinc-900">
                  {faq.q}
                </summary>

                <p className="mt-4 leading-7 text-zinc-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-orange-600">
              Related Dental Care
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore More Dental Treatments
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Link
              href="/root-canal-treatment-ameerpet"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">Root Canal Treatment</h3>
              <p className="mt-2 leading-7 text-zinc-600">
                Learn about treatment options when decay reaches the inner
                part of a tooth.
              </p>
              <span className="mt-4 inline-block font-bold text-orange-600">
                Learn More →
              </span>
            </Link>

            <Link
              href="/teeth-cleaning-ameerpet"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">Teeth Cleaning</h3>
              <p className="mt-2 leading-7 text-zinc-600">
                Professional cleaning can help control plaque and maintain
                healthier teeth and gums.
              </p>
              <span className="mt-4 inline-block font-bold text-orange-600">
                Learn More →
              </span>
            </Link>

            <Link
              href="/dentist-in-ameerpet"
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">Dentist in Ameerpet</h3>
              <p className="mt-2 leading-7 text-zinc-600">
                Schedule a dental consultation for cavities, tooth pain and
                other dental concerns.
              </p>
              <span className="mt-4 inline-block font-bold text-orange-600">
                View Dentist →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-orange-100">
            Don&apos;t Ignore Tooth Decay
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Have a Cavity or Tooth Pain?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
            Get your tooth examined and understand the right treatment before
            a small cavity becomes a bigger dental problem.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#appointment"
              className="rounded-full bg-white px-8 py-3.5 font-bold text-orange-600 shadow-lg"
            >
              Book an Appointment
            </Link>

            <a
              href="tel:+918074528763"
              className="rounded-full border border-white/70 px-8 py-3.5 font-bold text-white"
            >
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-orange-100">
            Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre • Ameerpet,
            Hyderabad
          </p>
        </div>
      </section>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dr. Bhuvan's Dental Laser & Implant Centre",
            url: "https://www.drbhuvandentalcare.com/teeth-cavities-treatment-hyderabad",
            telephone: "+918074528763",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Ganapati Complex, Navodaya Colony Road",
              addressLocality: "Ameerpet",
              addressRegion: "Telangana",
              postalCode: "500073",
              addressCountry: "IN",
            },
            medicalSpecialty: "Dentistry",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Teeth Cavities Treatment in Hyderabad",
                item:
                  "https://www.drbhuvandentalcare.com/teeth-cavities-treatment-hyderabad",
              },
            ],
          }),
        }}
      />
    </main>
  );
}