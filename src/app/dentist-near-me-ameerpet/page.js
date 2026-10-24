
import Link from "next/link";


export const metadata = {
  title:
    "Dentist in Ameerpet, Hyderabad | Dr. Bhuvan's Dental Clinic",
  description:
    "Looking for a dentist in Ameerpet, Hyderabad? Explore dental implants, gum treatment, laser dentistry and teeth cleaning at Dr. Bhuvan's Dental Laser & Implant Centre.",
  alternates: {
    canonical: "https://www.drbhuvandentalcare.com/dentist-in-ameerpet",
  },
  openGraph: {
    title:
      "Dentist in Ameerpet, Hyderabad | Dr. Bhuvan's Dental Clinic",
    description:
      "Explore dental implants, gum care, laser dentistry and preventive dental services at Dr. Bhuvan's Dental Laser & Implant Centre in Ameerpet, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com/dentist-in-ameerpet",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const services = [
  {
    title: "Dental Implants",
    description:
      "Explore tooth-replacement options and personalised implant treatment planning.",
    href: "/dental-implants-ameerpet",
    icon: "🦷",
  },
  {
    title: "Professional Teeth Cleaning",
    description:
      "Professional scaling and oral hygiene guidance to help maintain healthy gums and teeth.",
    href: "/teeth-cleaning-ameerpet",
    icon: "✨",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Assessment of tooth pain, infection and damage, with treatment options explained.",
    href: "/root-canal-treatment-yousufguda",
    icon: "🩺",
  },
  {
    title: "Gum Treatment",
    description:
      "Evaluation and care for bleeding gums, gum disease, recession and periodontal concerns.",
    href: "/gum-treatment-yousufguda",
    icon: "😁",
  },
];

const faqs = [
  {
    q: "Where is Dr. Bhuvan's Dental Laser & Implant Centre?",
    a: "The clinic is located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet–Yousufguda, Hyderabad, Telangana 500073.",
  },
  {
    q: "What treatments can I enquire about?",
    a: "You can enquire about dental consultations, implants, gum treatment, laser dentistry, root canal treatment, teeth cleaning and other suitable dental procedures.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call or WhatsApp the clinic on 80745 28763 to enquire about availability and arrange an appointment.",
  },
  {
    q: "How can I choose a dentist near me?",
    a: "Consider relevant qualifications, experience with your dental concern, hygiene standards, clear explanations, location and follow-up care.",
  },
];

export default function DentistNearMePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-300">
              Dental Care · Ameerpet, Hyderabad
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Looking for a Dentist Near You in{" "}
              <span className="text-orange-400">Ameerpet?</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Dr. Bhuvan's Dental Laser & Implant Centre provides
              personalised dental consultations and treatment options
              for patients from Ameerpet, Yousufguda and nearby areas
              of Hyderabad.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Led by Dr. Bhuvanesh Yanamala, BDS, MDS (Periodontics),
              with clinical interests in periodontal care, dental
              implants and laser dentistry.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918074528763"
                className="rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white transition hover:bg-orange-400"
              >
                Book on WhatsApp
              </a>

              <a
                href="tel:+918074528763"
                className="rounded-xl border border-white/25 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Call 80745 28763
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <span>✓ Personalised consultations</span>
              <span>✓ Gum and implant care</span>
              <span>✓ Treatment options explained</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/doctor.webp"
                alt="Dr. Bhuvanesh Yanamala, MDS Periodontics"
                className="max-h-[520px] w-full object-cover object-top"
              />
            </div>
            <div className="px-4 py-5">
              <h2 className="text-xl font-bold">
                Dr. Bhuvanesh Yanamala
              </h2>
              <p className="mt-1 text-sm text-orange-300">
                MDS · Periodontist & Implantologist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-b border-orange-100 bg-orange-50 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-slate-900">
              Visit Our Dental Clinic
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Ganapathi Complex, Navodaya Colony Road, Sri Krishna
              Nagar, Ameerpet–Yousufguda, Hyderabad – 500073
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvans+Dental+Laser+and+Implant+Centre%2C+Ganapathi+Complex%2C+Navodaya+Colony+Road%2C+Hyderabad+500073"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl border border-orange-600 px-5 py-3 text-center font-bold text-orange-700 transition hover:bg-orange-100"
          >
            Find Clinic on Maps
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Dental Treatments Near Ameerpet & Yousufguda
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Your dental needs are individual. A clinical examination
            helps identify the problem and determine which treatment
            options may be appropriate.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-3xl" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex font-bold text-orange-700 hover:underline"
                >
                  Explore treatment →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#07111f] px-5 py-16 text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">
            Patient-Focused Care
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Choosing the Right Dentist Matters
          </h2>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Periodontal Expertise",
                text: "Care informed by postgraduate training in Periodontics.",
              },
              {
                title: "Treatment Planning",
                text: "Understand your dental condition and discuss appropriate options.",
              },
              {
                title: "Implant & Laser Dentistry",
                text: "Consultation for dental implants and suitable laser-assisted procedures.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
              >
                <h3 className="text-lg font-bold text-orange-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
{/* CHUNK 2 — DOCTOR EXPERTISE & PATIENT CARE */}
<section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
        Personalised Dental Care
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
        Dental Care Guided by Clinical Expertise
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-300">
        Choosing a dentist involves more than finding a clinic nearby.
        Understanding your dental concern, reviewing suitable treatment
        options and knowing what to expect can help you make informed
        decisions about your oral health.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
        <h3 className="text-xl font-bold text-orange-400">
          Periodontal Expertise
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Dr. Bhuvanesh Yanamala holds a BDS and MDS in Periodontics.
          This postgraduate specialty focuses on the gums and supporting
          structures of the teeth. Assessment may be recommended for
          concerns such as bleeding gums, gum inflammation, recession
          and periodontal disease.
        </p>
      </article>

      <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
        <h3 className="text-xl font-bold text-orange-400">
          Dental Implant Treatment Planning
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Replacing missing teeth requires an individual assessment of
          the gums, available bone, bite and overall oral health.
          Implant treatment options are discussed according to clinical
          findings and the patient's needs.
        </p>
      </article>

      <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
        <h3 className="text-xl font-bold text-orange-400">
          Laser Dentistry
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Laser dentistry may be useful for selected dental procedures,
          particularly certain soft-tissue treatments. Suitability
          depends on the condition being treated and the clinical
          assessment; laser treatment is not necessary for every case.
        </p>
      </article>

      <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
        <h3 className="text-xl font-bold text-orange-400">
          Clear Treatment Discussions
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Patients should understand their diagnosis, available
          treatment choices, expected steps, limitations and costs
          before proceeding. Our aim is to help patients make informed
          decisions about their dental care.
        </p>
      </article>
    </div>

    <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-orange-500 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <h3 className="text-xl font-bold sm:text-2xl">
          Have a dental concern you would like assessed?
        </h3>
        <p className="mt-2 text-sm leading-6 text-orange-50">
          Contact the clinic to enquire about an appointment.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="tel:+918074528763"
          className="rounded-xl bg-white px-5 py-3 font-bold text-orange-700 transition hover:bg-orange-50"
        >
          Call the Clinic
        </a>
        <a
          href="/appointment"
          className="rounded-xl border border-white/70 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
        >
          Book Appointment
        </a>
      </div>
    </div>
  </div>
</section>
{/* END CHUNK 2 */}


{/* CHUNK 3 — LOCAL AREA & CLINIC DIRECTIONS */}
<section
  id="clinic-location"
  className="bg-orange-50/60 px-5 py-16 sm:px-8 sm:py-20"
>
  <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
        Find Our Clinic
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        Dental Clinic Serving Ameerpet &amp; Yousufguda, Hyderabad
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-600">
        Dr. Bhuvan’s Dental Laser &amp; Implant Centre is located at
        Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar,
        in the Ameerpet–Yousufguda area of Hyderabad.
      </p>

      <p className="mt-4 text-base leading-8 text-slate-600">
        Patients looking for dental consultations, gum care, dental
        implants, professional teeth cleaning or other dental
        treatments can contact the clinic to enquire about an
        appointment before visiting.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://maps.app.goo.gl/Fiow6zV9W17xnxR47"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700"
        >
          Get Directions
        </a>

        <a
          href="tel:+918074528763"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-orange-500 hover:text-orange-700"
        >
          Call 80745 28763
        </a>
      </div>
    </div>

    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold text-slate-900">
        Areas We Serve
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        Our clinic location may be convenient for patients travelling
        from nearby Hyderabad neighbourhoods, depending on their
        starting point and route.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "Ameerpet",
          "Yousufguda",
          "Sri Krishna Nagar",
          "Navodaya Colony",
          "Srinagar Colony",
          "Madhura Nagar",
          "SR Nagar",
          "Yella Reddy Guda",
        ].map((area) => (
          <span
            key={area}
            className="rounded-full border border-orange-100 bg-orange-50 px-3 py-2 text-sm font-medium text-slate-700"
          >
            {area}
          </span>
        ))}
      </div>

      <div className="mt-7 border-t border-slate-100 pt-5">
        <p className="text-sm font-semibold text-slate-900">
          Clinic address
        </p>
        <address className="mt-2 not-italic text-sm leading-7 text-slate-600">
          Ganapathi Complex, Navodaya Colony Road,
          Sri Krishna Nagar, Ameerpet–Yousufguda,
          Hyderabad, Telangana 500073
        </address>
      </div>
    </div>
  </div>
</section>
{/* END CHUNK 3 */}


     
{/* CHUNK 4 — PATIENT FAQs */}
<section
  id="faqs"
  className="bg-white px-5 py-16 sm:px-8 sm:py-20"
>
  <div className="mx-auto max-w-4xl">
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
      Patient Information
    </p>

    <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
      Frequently Asked Dental Questions
    </h2>

    <p className="mt-4 leading-7 text-slate-600">
      Find answers to common questions before contacting our dental clinic
      in the Ameerpet–Yousufguda area of Hyderabad.
    </p>

    <div className="mt-8 divide-y divide-slate-200">
      <details className="group py-5" open>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
          How do I book a dental appointment?
          <span className="text-xl text-orange-600 group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 leading-7 text-slate-600">
          Call 80745 28763 or use the appointment page to enquire about
          availability. Please confirm your appointment timing with the clinic.
        </p>
      </details>

      <details className="group py-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
          What should I do if my gums bleed while brushing?
          <span className="text-xl text-orange-600 group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 leading-7 text-slate-600">
          Bleeding gums can be associated with plaque-related inflammation
          or other gum conditions. Arrange a dental assessment to identify
          the cause rather than relying on home remedies alone.
        </p>
      </details>

      <details className="group py-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
          Am I suitable for dental implants?
          <span className="text-xl text-orange-600 group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 leading-7 text-slate-600">
          Suitability depends on factors such as bone availability, gum
          health, general health and the proposed restoration. A clinical
          examination and appropriate investigations help determine options.
        </p>
      </details>

      <details className="group py-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
          Is laser dentistry suitable for every dental problem?
          <span className="text-xl text-orange-600 group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 leading-7 text-slate-600">
          No. Lasers are useful for selected procedures, but conventional
          techniques may be more appropriate for other conditions. Your
          dentist can explain the suitable approach after an examination.
        </p>
      </details>

      <details className="group py-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
          Does professional teeth cleaning damage teeth?
          <span className="text-xl text-orange-600 group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 leading-7 text-slate-600">
          Professional scaling, when performed appropriately, removes
          plaque and hardened deposits. Temporary sensitivity can occur
          in some patients. Your dentist can explain what to expect
          based on your oral health.
        </p>
      </details>

      <details className="group py-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
          Where is Dr. Bhuvan’s Dental Laser &amp; Implant Centre?
          <span className="text-xl text-orange-600 group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 leading-7 text-slate-600">
          The clinic is located at Ganapathi Complex, Navodaya Colony Road,
          Sri Krishna Nagar, Ameerpet–Yousufguda, Hyderabad, Telangana 500073.
          Use the clinic’s verified Google Maps link for directions.
        </p>
      </details>
    </div>

    <div className="mt-8 rounded-2xl bg-orange-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <div>
        <h3 className="text-lg font-bold text-slate-900">
          Have another dental question?
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Contact the clinic to enquire about a consultation.
        </p>
      </div>

      <a
        href="tel:+918074528763"
        className="mt-4 inline-flex rounded-xl bg-orange-600 px-5 py-3 font-bold text-white hover:bg-orange-700 sm:mt-0"
      >
        Call the Clinic
      </a>
    </div>
  </div>
</section>
{/* END CHUNK 4 */}


      {/* FINAL CTA */}
      <section className="bg-orange-600 px-5 py-14 text-white sm:px-8 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-black">
              Need a Dental Consultation?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-orange-50">
              Contact our clinic to enquire about available appointments
              and suitable dental treatment options.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="tel:+918074528763"
              className="rounded-xl bg-white px-5 py-3 font-bold text-orange-700"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918074528763"
              className="rounded-xl border border-white px-5 py-3 font-bold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
