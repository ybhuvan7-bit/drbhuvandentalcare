
import Link from "next/link";
import AppointmentForm from "../components/AppointmentForm";

export const metadata = {
  title: "Contact Dr. Bhuvan's Dental Clinic | Ganapathi Complex, Hyderabad",
  description:
    "Contact Dr. Bhuvan's Dental Laser & Implant Centre, located inside Ganapathi Complex, Navodaya Colony, Hyderabad. Call, WhatsApp or request an appointment.",

  alternates: {
    canonical: "https://www.drbhuvandentalcare.com/contact-us",
  },

  openGraph: {
    title:
      "Contact Dr. Bhuvan's Dental Clinic | Ganapathi Complex, Hyderabad",
    description:
      "Visit Dr. Bhuvan's Dental Laser & Implant Centre inside Ganapathi Complex, Navodaya Colony, Sri Krishna Nagar, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com/contact-us",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
  },
};

const phone = "+918074528763";

const wa =
  "https://wa.me/918074528763?text=" +
  encodeURIComponent(
    "Hello Dr. Bhuvan's Dental Laser & Implant Centre, I would like to enquire about an appointment."
  );

const clinicAddress =
  "Dr. Bhuvan's Dental Laser & Implant Centre, Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Hyderabad, Telangana 500073";

const maps =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(clinicAddress);

const faqs = [
  [
    "Where is the clinic located?",
    "Dr. Bhuvan's Dental Laser & Implant Centre is located inside Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Hyderabad, Telangana 500073, India.",
  ],
  [
    "How can I request an appointment?",
    "Call 80745 28763 or use the appointment request form on this page. Your request opens in WhatsApp for you to review and send. Our team will coordinate a suitable visit time.",
  ],
  [
    "What are the clinic timings?",
    "Monday to Saturday: 10 AM–2 PM and 4 PM–9 PM. Sunday: 10 AM–2 PM. Please call to confirm availability before visiting.",
  ],
  [
    "Which areas do you serve?",
    "Our clinic is located at Ganapathi Complex, Navodaya Colony, Hyderabad. We welcome patients from Sri Krishna Nagar, Yousufguda, Ameerpet, Srinagar Colony, Madhura Nagar, SR Nagar, Banjara Hills, Moti Nagar, Rahmath Nagar, Borabanda, Punjagutta, Balkampet, Sanath Nagar and surrounding localities.",
  ],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[10px] font-bold uppercase tracking-[.32em] text-[#a85a2a]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-serif text-3xl font-medium tracking-[-.025em] text-[#241d18] sm:text-[2.8rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function ContactUsPage() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://www.drbhuvandentalcare.com/#dentist",

    name: "Dr. Bhuvan's Dental Laser & Implant Centre",
    url: "https://www.drbhuvandentalcare.com/",
    telephone: phone,

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500073",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.434462985123986,
      longitude: 78.433557202177,
    },

    areaServed: [
      "Navodaya Colony",
      "Sri Krishna Nagar",
      "Yella Reddy Guda",
      "Yousufguda",
      "Srinagar Colony",
      "Kamalapuri Colony",
      "Ameerpet",
      "Madhura Nagar",
      "SR Nagar",
      "Jawahar Nagar",
      "Balkampet",
      "Punjagutta",
      "Banjara Hills",
      "Moti Nagar",
      "Rahmath Nagar",
      "Borabanda",
      "Sanath Nagar",
      "Erragadda",
      "Hyderabad",
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "16:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <main className="overflow-hidden bg-[#fbf8f3] text-[#27221e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dentistSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_82%_15%,rgba(247,156,91,.22),transparent_34%),linear-gradient(135deg,#fffaf5_0%,#fff_55%,#fff1e5_100%)]">
        <div className="mx-auto max-w-[1240px] px-5 pb-20 pt-8 sm:px-8 lg:pb-24 lg:pt-10">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-orange-700">
              Home
            </Link>

            <span className="mx-2">/</span>

            <span aria-current="page">Contact Us</span>
          </nav>

          <div className="grid items-center gap-12 pt-14 lg:grid-cols-[1fr_.8fr] lg:gap-20 lg:pt-20">
            <div>
              <span className="inline-flex rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-[10px] font-bold tracking-[.2em] text-orange-800 shadow-sm">
                WE ARE HERE TO HELP
              </span>

              <h1 className="mt-7 max-w-2xl font-serif text-[2.8rem] font-medium leading-[1.04] tracking-[-.04em] text-[#211a16] sm:text-6xl lg:text-[4.5rem]">
                Let&apos;s make your
                <span className="mt-2 block text-orange-700">
                  dental visit simple.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-lg sm:leading-9">
                Have a question about your dental health or planning a visit?
                Contact Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre.
                We&apos;ll help you understand the next step and coordinate a
                convenient time to visit.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#e85b16] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(232,91,22,.24)] transition hover:-translate-y-1 hover:bg-[#cf4d10]"
                >
                  WhatsApp the clinic →
                </a>

                <a
                  href={`tel:${phone}`}
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#ded8d1] bg-white/80 px-8 py-4 text-sm font-semibold text-slate-800 shadow-sm hover:border-orange-300 hover:text-orange-700"
                >
                  Call 80745 28763
                </a>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-500">
                An appointment enquiry is not a confirmed booking. Our team
                will contact you to coordinate the visit.
              </p>
            </div>

            {/* CLINIC DETAILS CARD */}
            <div className="relative rounded-[2rem] border border-[#eadfd2] bg-white/90 p-7 shadow-[0_30px_80px_rgba(69,47,29,.12)] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-orange-700">
                VISIT OUR CLINIC
              </p>

              <h2 className="mt-4 font-serif text-3xl text-[#241d18]">
                Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre
              </h2>

              <div className="mt-7 space-y-6">
                <div>
                  <p className="font-semibold text-slate-900">
                    📍 Address
                  </p>

                  <address className="mt-1 text-sm not-italic leading-7 text-slate-600">
                    Ganapathi Complex, Navodaya Colony Road,
                    <br />
                    Sri Krishna Nagar,
                    <br />
                    Hyderabad, Telangana 500073, India
                  </address>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    ☎ Phone
                  </p>

                  <a
                    href={`tel:${phone}`}
                    className="mt-1 inline-block text-sm text-orange-700"
                  >
                    +91 80745 28763
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    ◷ Clinic hours
                  </p>

                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    Monday–Saturday: 10 AM–2 PM, 4 PM–9 PM
                    <br />
                    Sunday: 10 AM–2 PM
                  </p>
                </div>
              </div>

              <a
                href={maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#241d18] px-6 py-4 text-sm font-semibold text-white hover:bg-orange-700"
              >
                Get directions to the clinic →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="REACH OUT"
          title="Choose how you would like to connect"
          description="Whether you prefer a phone call, WhatsApp message or an in-person visit, our team is ready to guide you."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [
              "01",
              "Call the clinic",
              "Speak with our team about appointments and clinic availability.",
              `tel:${phone}`,
              "80745 28763",
            ],
            [
              "02",
              "WhatsApp us",
              "Send your enquiry and our team will coordinate with you.",
              wa,
              "Start a WhatsApp chat",
            ],
            [
              "03",
              "Visit the clinic",
              "Find us inside Ganapathi Complex, Navodaya Colony.",
              maps,
              "Get directions",
            ],
          ].map(([number, title, detail, url, label], index) => (
            <article
              key={number}
              className="rounded-[1.65rem] border border-[#e8ddd0] bg-[#fffefa] p-7 shadow-[0_12px_32px_rgba(55,39,25,.055)] transition hover:-translate-y-1"
            >
              <p className="text-xs font-bold tracking-[.2em] text-orange-600">
                {number}
              </p>

              <h2 className="mt-5 text-xl font-semibold text-slate-950">
                {title}
              </h2>

              <p className="mt-3 min-h-[4.5rem] text-sm leading-7 text-slate-600">
                {detail}
              </p>

              <a
                href={url}
                target={index === 0 ? undefined : "_blank"}
                rel={index === 0 ? undefined : "noopener noreferrer"}
                className="mt-5 inline-flex font-semibold text-orange-700"
              >
                {label} →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* LOCATION AND AREAS WE SERVE */}
      <section className="bg-[#f3eee7] py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-orange-700">
              FIND US IN HYDERABAD
            </p>

            <h2 className="mt-4 font-serif text-3xl font-medium text-[#241d18] sm:text-4xl">
              Your Dental Clinic in Ganapathi Complex, Navodaya Colony
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Located inside Ganapathi Complex on Navodaya Colony Road,
              Sri Krishna Nagar, Hyderabad, our clinic welcomes patients
              from Yousufguda, Ameerpet, Srinagar Colony, Madhura Nagar,
              SR Nagar, Banjara Hills, Moti Nagar, Rahmath Nagar,
              Borabanda, Punjagutta, Balkampet, Sanath Nagar and
              surrounding neighbourhoods.
            </p>

            <a
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#e85b16] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-900/10 hover:bg-[#cf4d10]"
            >
              Open Google Maps →
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border-[7px] border-[#fffdf9] bg-white p-1.5 shadow-[0_30px_72px_rgba(50,36,23,.15)]">
            <iframe
              title="Map to Dr. Bhuvan's Dental Laser & Implant Centre inside Ganapathi Complex, Navodaya Colony, Hyderabad"
              src="https://www.google.com/maps?q=Dr%20Bhuvan%27s%20Dental%20Laser%20%26%20Implant%20Centre%2C%20Ganapathi%20Complex%2C%20Navodaya%20Colony%20Road%2C%20Sri%20Krishna%20Nagar%2C%20Hyderabad&output=embed"
              width="100%"
              height="430"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* APPOINTMENT REQUEST */}
      <section className="bg-[#fbf8f3] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-start gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
          <div className="pt-3">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-orange-700">
              APPOINTMENT REQUEST
            </p>

            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#241d18] sm:text-4xl">
              Tell us how we can help.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Share your contact details and the dental concern you would like
              to discuss. Your request will open in WhatsApp so you can review
              the message and send it directly to our clinic.
            </p>

            <div className="mt-7 rounded-2xl border border-[#eadfd2] bg-white/80 p-5">
              <p className="font-semibold text-slate-900">
                Prefer speaking to our team?
              </p>

              <a
                href={`tel:${phone}`}
                className="mt-2 inline-flex font-semibold text-orange-700"
              >
                Call 80745 28763 →
              </a>
            </div>
          </div>

          <AppointmentForm />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="HELPFUL INFORMATION"
          title="Before you get in touch"
          description="A few quick answers to help plan your visit."
        />

        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-[1.35rem] border border-[#e8ddd0] bg-[#fffefa] p-5 shadow-[0_8px_24px_rgba(50,36,23,.045)] transition hover:border-orange-200 open:border-orange-200 open:bg-orange-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {question}

                <span className="text-xl font-normal text-orange-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 pr-6 text-sm leading-7 text-slate-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[radial-gradient(ellipse_at_88%_0%,rgba(190,126,76,.20),transparent_36%),linear-gradient(135deg,#211a17,#100d0c_72%)] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e8bd91]">
              NEED HELP PLANNING YOUR VISIT?
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              We&apos;re just a call away.
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Contact our clinic team to discuss your enquiry and coordinate an
              appointment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${phone}`}
              className="rounded-xl border border-white/25 px-6 py-4 text-sm font-semibold hover:bg-white/10"
            >
              Call the clinic
            </a>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-6 py-4 text-sm font-semibold text-white hover:bg-green-700"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
