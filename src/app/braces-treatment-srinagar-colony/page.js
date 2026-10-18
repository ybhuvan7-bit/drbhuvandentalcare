import Link from "next/link";

const BASE_URL = "https://www.drbhuvandentalcare.com";
const PAGE_URL = `${BASE_URL}/braces-treatment-srinagar-colony`;
const CLINIC_NAME = "Dr. Bhuvan's Dental Laser & Implant Centre";
const DOCTOR_NAME = "Dr. Bhuvanesh Yanamala";
const PHONE = "+918074528763";
const ADDRESS =
  "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Dr+Bhuvans+Dental+Laser+Implant+Centre+Ganapati+Complex+Navodaya+Colony+Road+Hyderabad+500073";

export const metadata = {
  title: "Braces Treatment Near Srinagar Colony, Hyderabad",
  description:
    "Explore braces treatment options near Srinagar Colony, Ameerpet and Yousufguda, Hyderabad. Contact Dr. Bhuvan's Dental Laser & Implant Centre to enquire about an orthodontic consultation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Braces Treatment Near Srinagar Colony, Hyderabad",
    description:
      "Learn about metal braces, ceramic braces and clear aligners near Ameerpet and Yousufguda, Hyderabad.",
    url: PAGE_URL,
    siteName: CLINIC_NAME,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const concerns = [
  {
    title: "Crooked Teeth",
    description:
      "An orthodontic assessment can help determine suitable options for crooked or rotated teeth.",
  },
  {
    title: "Crowded Teeth",
    description:
      "Overlapping teeth can make cleaning more difficult. An assessment helps identify possible treatment options.",
  },
  {
    title: "Gaps Between Teeth",
    description:
      "Some spaces between teeth may be reduced with orthodontic treatment, depending on the cause.",
  },
  {
    title: "Bite Problems",
    description:
      "An orthodontist can assess overbite, underbite, crossbite and other bite concerns.",
  },
];

const treatments = [
  {
    title: "Metal Braces",
    description:
      "Fixed metal brackets and wires gradually move teeth into planned positions.",
  },
  {
    title: "Ceramic Braces",
    description:
      "Tooth-coloured brackets may be less noticeable than conventional metal brackets.",
  },
  {
    title: "Clear Aligners",
    description:
      "Transparent removable trays may be suitable for selected teeth alignment problems.",
  },
];

const faqs = [
  {
    question: "Who may need braces treatment?",
    answer:
      "People with crooked, crowded or spaced teeth and certain bite concerns may benefit from an orthodontic assessment.",
  },
  {
    question: "What types of braces are available?",
    answer:
      "Options may include metal braces, ceramic braces and clear aligners. Suitability depends on an individual clinical assessment.",
  },
  {
    question: "How long does braces treatment take?",
    answer:
      "Treatment duration varies with case complexity and the planned tooth movements. An orthodontist can provide an individual estimate.",
  },
  {
    question: "Are braces painful?",
    answer:
      "Some temporary tenderness or pressure can occur after braces are fitted or adjusted. Contact your treating professional if pain is severe or persistent.",
  },
  {
    question: "Are clear aligners suitable for everyone?",
    answer:
      "No. Clear aligners are suitable for selected cases. An orthodontic assessment is needed to determine suitability.",
  },
  {
    question: "Where can I enquire about braces near Srinagar Colony?",
    answer:
      "Contact Dr. Bhuvan's Dental Laser & Implant Centre at Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073, to enquire about orthodontic consultation availability.",
  },
];

const careTips = [
  "Brush carefully twice daily using fluoride toothpaste.",
  "Clean around brackets and wires if you have fixed braces.",
  "Clean between your teeth every day.",
  "Limit frequent sugary snacks and drinks.",
  "Attend scheduled review appointments.",
  "Contact your dental professional if a bracket or wire breaks.",
];

export default function BracesTreatmentSrinagarColonyPage() {
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
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#080D20] text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 md:py-16 lg:px-10">
          <div className="mb-10 flex items-start gap-4 border-b border-white/10 pb-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-black">
              B
            </div>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wider text-orange-400 sm:text-base">
                {CLINIC_NAME}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                📍 Ameerpet · Yousufguda · Hyderabad, Telangana 500073
              </p>
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-300">
                Orthodontic Treatment Enquiries
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Braces Treatment Near
                <span className="mt-2 block text-orange-400">
                  Srinagar Colony, Hyderabad
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                Exploring options for crooked teeth, crowding, gaps or bite
                concerns? Learn about braces and teeth alignment options.
                Contact our clinic to enquire about an orthodontic consultation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#appointment"
                  className="rounded-full bg-orange-500 px-7 py-4 text-center font-bold text-white transition hover:bg-orange-400"
                >
                  Enquire About Treatment →
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
                >
                  Call 080745 28763
                </a>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                Please confirm orthodontic consultation availability with
                the clinic.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-3xl">
                😁
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-orange-400">
                Your Smile. Your Treatment.
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-snug">
                Understand Your Teeth Alignment Options
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                The right approach depends on your teeth, bite, gum health
                and treatment goals. A professional assessment helps you
                understand suitable options for your individual case.
              </p>
              <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-200">✓ Braces treatment options</p>
                <p className="text-sm text-slate-200">✓ Oral hygiene guidance</p>
                <p className="text-sm text-slate-200">✓ Clinic contact and directions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-orange-100 bg-orange-50">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:px-8 md:grid-cols-3">
          <div>
            <p className="font-bold">📍 Our Location</p>
            <p className="mt-1 text-sm text-slate-600">Ameerpet, Hyderabad</p>
          </div>
          <div>
            <p className="font-bold">🦷 Dental Care</p>
            <p className="mt-1 text-sm text-slate-600">Individual assessment</p>
          </div>
          <div>
            <p className="font-bold">☎ Contact the Clinic</p>
            <a href={`tel:${PHONE}`} className="mt-1 inline-block text-sm text-orange-700">
              080745 28763
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
            Understanding Braces
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            What Is Braces Treatment?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Braces are orthodontic appliances designed to move teeth gradually
            into planned positions. Depending on the case, treatment may help
            address crooked teeth, crowding, spacing and certain bite concerns.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            An assessment helps evaluate tooth alignment, bite, gum health and
            treatment goals before suitable options are discussed.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF7F0] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Common Dental Concerns
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              When Should You Consider Braces?
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              An orthodontic assessment can help you understand treatment
              options for the following concerns.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {concerns.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-black tracking-widest text-orange-600">
                  0{index + 1}
                </p>
                <div className="mt-4 h-1 w-12 rounded-full bg-orange-500" />
                <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Treatment Options
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Types of Braces and Teeth Alignment Treatment
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Different appliances suit different cases. An orthodontic
              professional can explain the advantages, limitations and
              expected treatment process.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {treatments.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 font-black text-orange-600">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-6 inline-block font-bold text-orange-600"
                >
                  Enquire by phone →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
            <section className="bg-[#080D20] px-5 py-16 text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
              Your Treatment Journey
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              What Happens During an Orthodontic Consultation?
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              A consultation helps establish your oral health needs and
              identify suitable next steps.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Initial Discussion",
                description:
                  "Discuss your concerns, dental history and smile goals.",
              },
              {
                title: "Dental Assessment",
                description:
                  "Assess tooth alignment, bite, gum health and oral health.",
              },
              {
                title: "Treatment Planning",
                description:
                  "Discuss suitable appliances and expected treatment duration.",
              },
              {
                title: "Follow-up Visits",
                description:
                  "Attend reviews and follow your treating professional's advice.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
              >
                <p className="font-black text-orange-400">
                  STEP 0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Everyday Oral Care
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Caring for Your Teeth During Braces Treatment
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Good oral hygiene is especially important during orthodontic
              treatment. Keeping teeth and gums clean helps support oral
              health throughout the process.
            </p>
            <div className="mt-7 rounded-2xl border border-orange-100 bg-orange-50 p-5">
              <p className="font-bold">Need advice about your dental health?</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Contact our clinic to discuss your concerns and enquire about
                an appropriate dental consultation.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="mt-4 inline-block font-bold text-orange-700 underline underline-offset-4"
              >
                Call 080745 28763
              </a>
            </div>
          </div>

          <ul className="space-y-3">
            {careTips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 rounded-xl border border-slate-100 p-4 shadow-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-700">
                  ✓
                </span>
                <span className="leading-7 text-slate-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#FFF7F0] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Visit Our Clinic
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Dental Care Near Srinagar Colony, Hyderabad
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Find our clinic in the Ameerpet and Yousufguda area. Contact
              us to enquire about orthodontic consultation availability.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-950/5">
            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-[#080D20] p-7 text-white sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-black">
                  B
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-orange-400">
                  Your Dental Care Destination
                </p>
                <h3 className="mt-3 text-2xl font-black leading-snug sm:text-3xl">
                  {CLINIC_NAME}
                </h3>
                <div className="mt-5 h-1 w-16 rounded-full bg-orange-500" />
                <p className="mt-5 leading-7 text-slate-300">
                  Dental and implant care in Hyderabad. Contact the clinic
                  to confirm appointment availability and the services you need.
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-7 inline-flex rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-400"
                >
                  Call the Clinic
                </a>
              </div>

              <div className="p-7 sm:p-10">
                <div className="space-y-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl">
                      📍
                    </span>
                    <div>
                      <h4 className="font-extrabold">Full Clinic Address</h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        {ADDRESS}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl">
                      ☎
                    </span>
                    <div>
                      <h4 className="font-extrabold">Phone & Enquiries</h4>
                      <a
                        href={`tel:${PHONE}`}
                        className="mt-2 inline-block font-bold text-orange-700 underline underline-offset-4"
                      >
                        080745 28763
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl">
                      👨‍⚕️
                    </span>
                    <div>
                      <h4 className="font-extrabold">Doctor</h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        {DOCTOR_NAME}
                        <br />
                        BDS, MDS (Periodontics)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-7 sm:flex-row">
                  <Link
                    href="/#appointment"
                    className="rounded-full bg-orange-600 px-6 py-3 text-center font-bold text-white hover:bg-orange-700"
                  >
                    Enquire About Appointment
                  </Link>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-orange-200 px-6 py-3 text-center font-bold text-orange-700 hover:bg-orange-50"
                  >
                    Get Directions ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Helpful Information
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Frequently Asked Questions About Braces
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition open:border-orange-200 open:shadow-sm sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold leading-7 text-slate-900">
                  <span>
                    <span className="mr-3 text-sm font-black text-orange-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-xl text-orange-600">
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-9 leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
            <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Explore More
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              More Dental Care Information
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Dental Clinic in Ameerpet",
                description: "Explore dental care services in Ameerpet.",
                href: "/dentist-in-ameerpet",
              },
              {
                title: "Teeth Cleaning in Ameerpet",
                description: "Learn about professional teeth cleaning.",
                href: "/teeth-cleaning-ameerpet",
              },
              {
                title: "Laser Gum Treatment",
                description: "Explore laser-assisted gum care options.",
                href: "/laser-gum-treatment-hyderabad",
              },
            ].map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <h3 className="text-lg font-extrabold group-hover:text-orange-700">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {page.description}
                </p>
                <span className="mt-5 inline-flex font-bold text-orange-600">
                  Explore Page →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 px-5 py-16 text-center text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-orange-100">
            {CLINIC_NAME}
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Ready to Explore Your Braces Options?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50">
            Contact our clinic in Ameerpet, Hyderabad, to enquire about
            orthodontic consultation availability and the next steps for
            your dental care.
          </p>
          <p className="mt-4 font-semibold text-white">
            Srinagar Colony · Ameerpet · Yousufguda · Hyderabad
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#appointment"
              className="rounded-full bg-white px-8 py-4 font-extrabold text-orange-700 hover:bg-orange-50"
            >
              Enquire About Appointment
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="rounded-full border-2 border-white/80 px-8 py-4 font-extrabold text-white hover:bg-white/10"
            >
              Call 080745 28763
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#080D20] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg font-black">{CLINIC_NAME}</p>
            <p className="mt-2 text-sm text-orange-300">
              {DOCTOR_NAME} · BDS, MDS (Periodontics)
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Dental care and implant services in Ameerpet and Yousufguda,
              Hyderabad.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Visit or Contact Us</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {ADDRESS}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
              <a
                href={`tel:${PHONE}`}
                className="text-orange-300 hover:text-orange-200"
              >
                Call 080745 28763
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-orange-200"
              >
                Google Maps Directions ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs leading-6 text-slate-400">
          <p>
            © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
          </p>
          <p className="mt-1">
            This page provides general information and does not replace an
            individual dental or orthodontic assessment.
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  );
}