
import Link from "next/link";

const SITE_URL = "https://www.drbhuvandentalcare.com";

const clinic = {
  name: "Dr. Bhuvan's Dental Laser & Implant Centre",
  phone: "+918074528763",
  address:
    "Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Dr%20Bhuvans%20Dental%20Laser%20%26%20Implant%20Centre%2C%20Ganapathi%20Complex%2C%20Navodaya%20Colony%20Road%2C%20Sri%20Krishna%20Nagar%2C%20Ameerpet%2C%20Hyderabad%20500073",
};

const whatsapp = (message) =>
  `https://wa.me/918074528763?text=${encodeURIComponent(message)}`;

const treatments = [
  {
    number: "01",
    title: "Single Tooth Dental Implant",
    description:
      "An option for replacing an individual missing tooth with an implant-supported crown, when clinically suitable.",
  },
  {
    number: "02",
    title: "Multiple Dental Implants",
    description:
      "Implant-supported restorations may help replace multiple missing teeth, depending on bone and restorative requirements.",
  },
  {
    number: "03",
    title: "Full Mouth Dental Implants",
    description:
      "Comprehensive treatment planning for patients who have lost most or all of their teeth.",
  },
  {
    number: "04",
    title: "Guided Implant Surgery",
    description:
      "Digital planning and surgical guidance may be used when indicated for an implant procedure.",
  },
  {
    number: "05",
    title: "Bone Grafting",
    description:
      "Bone augmentation may be considered when the available jawbone needs additional support for implant treatment.",
  },
  {
    number: "06",
    title: "Sinus Lift Procedure",
    description:
      "A procedure that may be recommended in selected upper-jaw cases with limited bone height.",
  },
];

const faqs = [
  {
    question: "Who is a dental implant specialist?",
    answer:
      "A dental professional with appropriate training and experience in implant dentistry evaluates missing teeth, bone and gum health, treatment planning and implant-supported restorations. Ask your treating dentist about their qualifications and experience.",
  },
  {
    question: "Where can I consult a dental implant specialist in Hyderabad?",
    answer:
      "You can enquire about dental implant consultation at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony, Yousufguda, Ameerpet, Hyderabad.",
  },
  {
    question: "Am I suitable for dental implant treatment?",
    answer:
      "Suitability depends on bone volume, gum health, oral hygiene, medical history, bite and other clinical factors. An examination and appropriate imaging help determine your options.",
  },
  {
    question: "How long does dental implant treatment take?",
    answer:
      "The timeline varies according to healing, bone quality, implant stability and whether additional procedures are needed. Your dentist can explain your expected treatment stages after assessment.",
  },
  {
    question: "Is dental implant surgery painful?",
    answer:
      "Implant placement is generally performed under local anaesthesia. Some swelling or discomfort can occur afterwards. Your dentist will provide appropriate post-operative instructions.",
  },
  {
    question: "What is the cost of dental implants in Hyderabad?",
    answer:
      "The estimate depends on the number and type of implants, restoration, bone condition, diagnostic requirements and additional procedures. A personalised estimate requires clinical assessment.",
  },
  {
    question: "Can dental implants be placed when bone is insufficient?",
    answer:
      "Some patients may be candidates for bone augmentation or sinus lift procedures. The decision depends on clinical and radiographic evaluation.",
  },
  {
    question: "How do I maintain dental implants?",
    answer:
      "Regular professional reviews, careful brushing, interdental cleaning and management of gum inflammation are important for maintaining implant health.",
  },
];

export const metadata = {
  title:
    "Dental Implant Specialist in Hyderabad | Dr. Bhuvan",
  description:
    "Looking for a dental implant specialist in Hyderabad? Consult Dr. Bhuvan, MDS Periodontics, at Dr. Bhuvan's Dental Laser & Implant Centre, Yousufguda.",
  alternates: {
    canonical: `${SITE_URL}/dental-implant-specialist-hyderabad`,
  },
  openGraph: {
    title: "Dental Implant Specialist in Hyderabad | Dr. Bhuvan",
    description:
      "Explore dental implant treatment options and book a consultation at our Yousufguda and Ameerpet clinic in Hyderabad.",
    url: `${SITE_URL}/dental-implant-specialist-hyderabad`,
    siteName: clinic.name,
    type: "website",
  },
};

export default function DentalImplantSpecialistPage() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    url: SITE_URL,
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500073",
      addressCountry: "IN",
    },
    areaServed: [
      "Hyderabad",
      "Ameerpet",
      "Yousufguda",
      "Navodaya Colony",
      "Sri Krishna Nagar",
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

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dentistSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700">
              Dental Implant Consultation · Hyderabad
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
              Dental Implant Specialist in{" "}
              <span className="text-orange-600">Hyderabad</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Exploring options for missing teeth? Consult Dr. Bhuvan,
              MDS Periodontics, at Dr. Bhuvan's Dental Laser & Implant
              Centre in Yousufguda, Ameerpet, Hyderabad.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp(
                  "Hello, I would like to book a dental implant consultation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-orange-600 px-6 py-4 font-bold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700"
              >
                Book Consultation →
              </a>

              <a
                href="tel:+918074528763"
                className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 hover:border-orange-500"
              >
                Call Clinic
              </a>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Ganapathi Complex, Navodaya Colony, Yousufguda,
              Ameerpet, Hyderabad.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-2xl shadow-orange-900/10 md:p-8">
              <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 p-8">
                <div className="mx-auto flex aspect-square max-w-xs items-center justify-center rounded-full border-[14px] border-white bg-white shadow-xl">
                  <div className="text-center">
                    <span className="text-7xl">🦷</span>
                    <p className="mt-3 text-sm font-black tracking-wider text-orange-700">
                      YOUR SMILE MATTERS
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-6">
                <h2 className="text-xl font-extrabold text-slate-900">
                  Individualised Implant Treatment Planning
                </h2>
                <p className="mt-2 leading-7 text-slate-600">
                  Clinical assessment, treatment options and
                  follow-up care based on your dental needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
          Implant dentistry
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
          Looking for an Implantologist in Hyderabad?
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Missing teeth can affect chewing, speech and confidence.
            Dental implants are one option for replacing missing teeth
            with implant-supported restorations.
          </p>

          <p>
            At Dr. Bhuvan's Dental Laser & Implant Centre, patients
            from Hyderabad can discuss tooth replacement options,
            including single tooth implants, multiple implants and
            full-mouth rehabilitation planning.
          </p>

          <p>
            Every treatment plan starts with a clinical examination
            of the teeth, gums, jawbone, bite and relevant medical
            history. Implant treatment is not identical for every
            patient.
          </p>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="bg-slate-50 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Treatment options
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
            Dental Implant Treatments and Procedures
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Different implant procedures may be considered depending
            on the number of missing teeth, available bone, gum health
            and restorative requirements.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 font-black text-orange-700">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDURE */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
          The treatment journey
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
          How Does Dental Implant Treatment Work?
        </h2>

        <div className="mt-10 grid gap-7 md:grid-cols-4">
          {[
            ["01", "Consultation", "Examination of teeth, gums, bite and medical history."],
            ["02", "Planning", "Appropriate imaging and individualised treatment planning."],
            ["03", "Implant placement", "Implant surgery under appropriate local anaesthesia, when indicated."],
            ["04", "Final restoration", "An appropriate crown or prosthesis after the required healing."],
          ].map(([number, title, description]) => (
            <div key={number} className="border-l-4 border-orange-500 pl-5">
              <span className="text-3xl font-black text-orange-600">
                {number}
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-9 rounded-xl bg-orange-50 p-5 text-sm leading-7 text-slate-600">
          Treatment duration and healing vary between patients.
          Immediate implant placement or loading is not suitable
          in every clinical situation.
        </p>
      </section>


{/* IMPLANT CASE GALLERY */}
<section className="bg-orange-50 px-5 py-16 md:py-20">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
      Clinical gallery
    </p>

    <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
      Dental Implant Treatment Cases
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-slate-600">
      Explore selected dental implant treatment cases from our clinic.
      Individual treatment outcomes vary.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {[
        {
          title: "Implant Case 01",
          before: "/implant-cases/case1-before.webp",
          after: "/implant-cases/case1-after.webp",
        },
        {
          title: "Implant Case 02",
          before: "/implant-cases/case2-before.webp",
          after: "/implant-cases/case2-after.webp",
        },
      ].map((item) => (
        <article
          key={item.title}
          className="rounded-2xl bg-white p-5 shadow-sm"
        >
          <h3 className="mb-4 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <img
                src={item.before}
                alt={`${item.title} before dental implant treatment`}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <p className="mt-2 text-center text-sm font-bold">
                Before
              </p>
            </div>

            <div>
              <img
                src={item.after}
                alt={`${item.title} after dental implant treatment`}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <p className="mt-2 text-center text-sm font-bold">
                After
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      {/* DOCTOR */}
      <section className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Meet your dentist
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Dr. Bhuvanesh Yanamala
            </h2>

            <p className="mt-3 text-lg font-semibold text-orange-300">
              MDS · Periodontics
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Dr. Bhuvanesh is a periodontist and implantologist
              associated with Dr. Bhuvan's Dental Laser & Implant
              Centre, Hyderabad. His clinical interests include
              periodontal care, implant dentistry and soft tissue
              management.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Patients can enquire about implant consultations and
              discuss suitable treatment options based on their
              individual clinical requirements.
            </p>

            <a
              href={whatsapp("Hello Doctor, I would like to consult about dental implants.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-orange-600 px-6 py-4 font-bold text-white hover:bg-orange-700"
            >
              Request an Appointment →
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">
              Our approach to implant care
            </h3>

            <div className="mt-7 space-y-5">
              {[
                ["Clinical assessment", "Evaluation of oral and periodontal health."],
                ["Treatment planning", "Discussing appropriate options and limitations."],
                ["Patient education", "Explaining each stage of the procedure."],
                ["Maintenance", "Long-term oral hygiene and implant follow-up."],
              ].map(([title, description]) => (
                <div key={title} className="flex gap-4">
                  <span className="text-2xl text-orange-300">✦</span>
                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
          Cost and consultation
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
          Dental Implant Cost in Hyderabad
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          The cost of dental implants in Hyderabad depends on
          individual treatment requirements. There is no single
          price that applies to every patient.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            "Number of implants required",
            "Implant system selected",
            "Type of crown or prosthesis",
            "Available bone volume",
            "Bone grafting or sinus lift requirements",
            "Diagnostic and restorative procedures",
          ].map((item) => (
            <div key={item} className="rounded-xl bg-orange-50 p-4 text-slate-700">
              <span className="mr-2 font-black text-orange-600">✓</span>
              {item}
            </div>
          ))}
        </div>

        <a
          href={whatsapp("Hello, I would like to enquire about dental implant treatment cost and consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-orange-600 px-6 py-4 font-bold text-white hover:bg-orange-700"
        >
          Enquire About Treatment Cost
        </a>
      </section>

      {/* FAQ */}
      <section className="bg-orange-50 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Patient information
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
            Dental Implant FAQs
          </h2>

          <div className="mt-9 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-orange-100 bg-white p-5"
              >
                <summary className="cursor-pointer list-none font-bold text-slate-900">
                  {faq.question}
                  <span className="float-right text-xl text-orange-600 group-open:rotate-45">
                    +
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

      {/* LOCAL SEO */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <h2 className="text-3xl font-extrabold text-slate-950">
          Dental Implant Consultation Near Ameerpet and Yousufguda
        </h2>

        <p className="mt-5 max-w-4xl leading-8 text-slate-600">
          Dr. Bhuvan's Dental Laser & Implant Centre is located
          at Ganapathi Complex, Navodaya Colony, near Ameerpet
          and Yousufguda in Hyderabad. Patients from Sri Krishna
          Nagar and surrounding neighbourhoods can contact the
          clinic to enquire about dental implant consultations.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {[
            "Hyderabad",
            "Ameerpet",
            "Yousufguda",
            "Navodaya Colony",
            "Sri Krishna Nagar",
          ].map((area) => (
            <span
              key={area}
              className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-800"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            title="Dr. Bhuvan's Dental Laser & Implant Centre map"
            src="https://www.google.com/maps?q=Dr+Bhuvan's+Dental+Laser+%26+Implant+Centre+Hyderabad&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          {clinic.address}
        </p>

        <a
          href={clinic.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-bold text-orange-700 underline"
        >
          Open Google Maps Directions →
        </a>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-100">
            Book your consultation
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Take the First Step Towards Replacing Missing Teeth
          </h2>

          <p className="mt-5 leading-8 text-orange-50">
            Contact Dr. Bhuvan's Dental Laser & Implant Centre
            to discuss dental implant treatment options in Hyderabad.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsapp("Hello, I would like to book a dental implant consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-7 py-4 font-extrabold text-orange-700 hover:bg-orange-50"
            >
              WhatsApp Appointment
            </a>

            <a
              href="tel:+918074528763"
              className="rounded-xl border border-white/70 px-7 py-4 font-extrabold text-white hover:bg-white/10"
            >
              Call +91 80745 28763
            </a>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-5 py-5 text-sm text-slate-500"
      >
        <Link href="/" className="hover:text-orange-600">
          Home
        </Link>
        {" / "}
        <span className="text-slate-800">
          Dental Implant Specialist Hyderabad
        </span>
      </nav>

      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-5px_20px_rgba(0,0,0,0.08)] md:hidden">
        <a
          href="tel:+918074528763"
          className="rounded-xl bg-slate-900 px-3 py-3 text-center text-sm font-bold text-white"
        >
          Call Clinic
        </a>
        <a
          href={whatsapp("Hello, I would like to book a dental implant consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-orange-600 px-3 py-3 text-center text-sm font-bold text-white"
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}
