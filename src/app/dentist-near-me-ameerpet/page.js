
import Link from "next/link";

export const metadata = {
  title: "Dentist Near Me in Hyderabad | Ameerpet & Yousufguda",
  description:
    "Looking for a dentist near you in Ameerpet or Yousufguda, Hyderabad? Visit Dr. Bhuvan’s Dental Laser & Implant Centre for dental implants, gum care, laser dentistry and general dental care.",
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dentist-near-me-ameerpet",
  },
};

const services = [
  {
    title: "Dental Implants",
    description:
      "Consultation and treatment planning for patients considering tooth replacement.",
    href: "/dental-implants-ameerpet",
  },
  {
    title: "Teeth Cleaning",
    description:
      "Professional cleaning and assessment to help maintain healthy teeth and gums.",
    href: "/teeth-cleaning-ameerpet",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Assessment and treatment planning for teeth affected by pulp infection or damage.",
    href: "/root-canal-treatment-yousufguda",
  },
  {
    title: "Gum Care & Periodontics",
    description:
      "Evaluation of bleeding gums, gum disease, recession and periodontal concerns.",
    href: "/",
  },
];

const faqs = [
  {
    q: "Where is Dr. Bhuvan’s Dental Laser & Implant Centre?",
    a: "Our clinic is at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet–Yousufguda, Hyderabad, Telangana 500073.",
  },
  {
    q: "What dental treatments are available?",
    a: "Our clinic provides dental consultations, teeth cleaning, root canal treatment, dental implants, gum care, laser dentistry and other dental treatments based on individual needs.",
  },
  {
    q: "How can I book a dental appointment?",
    a: "Call or WhatsApp our clinic to enquire about available appointment times and the treatment you need.",
  },
  {
    q: "How do I choose a dentist near me?",
    a: "Consider the dentist’s qualifications, experience relevant to your treatment, hygiene practices, clear explanations, location and follow-up care.",
  },
];

export default function DentistNearMePage() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Dr+Bhuvans+Dental+Laser+and+Implant+Centre+Hyderabad&query_place_id=ChIJhUqhWgCRyzsRv1O-F_mXxE8";

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-orange-50 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-wide text-orange-700">
            Dental Care in Ameerpet & Yousufguda
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Looking for a Dentist Near You in Ameerpet, Hyderabad?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Welcome to Dr. Bhuvan’s Dental Laser & Implant Centre.
            Led by Dr. Bhuvanesh Yanamala, BDS, MDS (Periodontics),
            our clinic offers dental consultations, gum care, dental
            implants, laser dentistry and other dental treatments
            tailored to individual needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918074528763"
              className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
            >
              Book on WhatsApp
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-orange-600 px-6 py-3 font-semibold text-orange-700 hover:bg-orange-100"
            >
              Get Directions
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar,
            Ameerpet–Yousufguda, Hyderabad – 500073
          </p>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Dental Treatments Near Ameerpet & Yousufguda
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Whether you need a routine dental check-up or advice about a
            specific dental problem, our team can assess your needs and
            explain suitable treatment options.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-orange-100 p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-block font-semibold text-orange-700 hover:underline"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Consider Our Dental Clinic?
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold">Periodontal Expertise</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Care guided by a dentist with an MDS in Periodontics.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold">Implant & Laser Dentistry</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Consultation for implant treatment and appropriate
                laser-assisted dental procedures.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold">Clear Treatment Explanations</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Understand your dental condition and discuss suitable
                treatment options before proceeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="border-b border-slate-200 pb-5"
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-600 px-5 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Need a Dental Consultation in Hyderabad?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-orange-50">
            Contact Dr. Bhuvan’s Dental Laser & Implant Centre to enquire
            about appointments and available treatments.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:+918074528763"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-orange-700"
            >
              Call 80745 28763
            </a>
            <a
              href="https://wa.me/918074528763"
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
