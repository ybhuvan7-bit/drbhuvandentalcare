import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

const BASE_URL = "https://www.drbhuvandentalcare.com";

export const metadata = {
  title:
    "Wisdom Tooth Treatment in Yousufguda, Hyderabad | Wisdom Tooth Pain",
  description:
    "Wisdom tooth treatment in Yousufguda, Hyderabad for wisdom tooth pain, swelling, impacted wisdom teeth and difficulty chewing. Get your wisdom tooth evaluated at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "wisdom tooth treatment in Yousufguda",
    "wisdom tooth pain Yousufguda",
    "wisdom tooth removal Yousufguda",
    "wisdom teeth removal Yousufguda",
    "wisdom tooth dentist Yousufguda",
    "impacted wisdom tooth Yousufguda",
    "wisdom tooth swelling treatment Yousufguda",
    "wisdom tooth pain treatment Yousufguda",
    "wisdom tooth removal near Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/wisdom-tooth-treatment-yousufguda`,
  },
};

export default function WisdomToothTreatmentYousufguda() {
  return (
    <main className="overflow-hidden bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#0b1220]">

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:py-28">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              Wisdom Tooth Care
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

              Wisdom Tooth Treatment in

              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Wisdom teeth can sometimes cause pain, swelling, difficulty
              opening the mouth or discomfort while chewing, particularly
              when there is limited space for the tooth to erupt.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, wisdom
              teeth are evaluated to understand their position and determine
              the appropriate treatment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-400"
              >
                Get Your Wisdom Tooth Evaluated
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call +91 80745 28763
              </a>

            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-xs text-slate-400">
              <span>✓ Wisdom Tooth Evaluation</span>
              <span>✓ Impacted Tooth Assessment</span>
              <span>✓ Treatment Planning</span>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-100 text-6xl">
                  🦷
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Wisdom Tooth Evaluation
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-900">
                  Not Every Wisdom Tooth Needs Removal
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  The position, eruption pattern, available space and
                  condition of the wisdom tooth are considered before
                  recommending treatment.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">😣</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Pain
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">🩻</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Evaluation
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BREADCRUMB ================= */}

      <nav
        aria-label="Breadcrumb"
        className="border-b border-gray-100 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-4">

          <ol className="flex flex-wrap items-center gap-2 text-sm">

            <li>
              <Link
                href="/"
                className="font-medium text-gray-500 hover:text-orange-600"
              >
                Home
              </Link>
            </li>

            <li className="text-gray-300">/</li>

            <li>
              <Link
                href="/dental-treatments-yousufguda"
                className="font-medium text-gray-500 hover:text-orange-600"
              >
                Dental Treatments
              </Link>
            </li>

            <li className="text-gray-300">/</li>

            <li className="font-bold text-orange-600">
              Wisdom Tooth Treatment
            </li>

          </ol>

        </div>

      </nav>


      {/* ================= INTRO ================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Understanding Wisdom Teeth
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Why Can Wisdom Teeth Cause Problems?
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Wisdom teeth are the last molars at the back of the mouth.
            Depending on the available space and their position, they may
            erupt normally or become partially or completely impacted.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            A wisdom tooth that is causing pain, swelling, repeated
            inflammation or difficulty maintaining oral hygiene may require
            professional evaluation.
          </p>

        </div>

      </section>


      {/* ================= WARNING SIGNS ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Common Symptoms
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Signs Your Wisdom Tooth May Need Evaluation
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Persistent or recurring symptoms around the back teeth should
              be assessed by a dentist.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "😣",
                "Wisdom Tooth Pain",
                "Pain at the back of the mouth can occur when a wisdom tooth is erupting or affected by another dental problem."
              ],
              [
                "🔴",
                "Swelling",
                "Swelling around the back tooth or gum may require professional assessment."
              ],
              [
                "😬",
                "Difficulty Opening the Mouth",
                "Discomfort or difficulty opening the mouth can sometimes accompany problems around an affected wisdom tooth."
              ],
              [
                "🍽️",
                "Pain While Chewing",
                "Difficulty or pain while chewing near the back teeth should be evaluated if it persists."
              ],
              [
                "😮‍💨",
                "Bad Taste or Breath",
                "Persistent unpleasant taste or bad breath around a wisdom tooth may be associated with local oral problems."
              ],
              [
                "🦷",
                "Partially Erupted Tooth",
                "A partially erupted wisdom tooth can be difficult to clean and may require monitoring or treatment."
              ],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg">
                  {icon}
                </div>

                <h3 className="mt-6 text-xl font-black text-gray-900">
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


      {/* ================= IMPACTED ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Impacted Wisdom Teeth
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              What Is an Impacted Wisdom Tooth?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A wisdom tooth is considered impacted when it does not erupt
              normally into the mouth because of its position or lack of
              adequate space.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Impacted wisdom teeth can have different orientations and may
              be partially or completely covered by gum or bone. Dental
              imaging may be recommended to assess their position.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Position of the wisdom tooth",
                "Available space in the jaw",
                "Relationship with neighbouring teeth",
                "Condition of surrounding gums",
                "Presence of pain, swelling or infection",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                  <span className="leading-7 text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-orange-200/50 blur-3xl" />

            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-orange-700 p-10 text-white shadow-2xl">

              <ShieldCheck className="h-14 w-14" />

              <h3 className="mt-7 text-3xl font-black">
                Evaluation Comes First
              </h3>

              <p className="mt-5 leading-8 text-orange-50">
                Wisdom tooth removal is not automatically required for every
                patient. Your dentist will assess the tooth and surrounding
                structures before recommending whether monitoring,
                treatment or removal is appropriate.
              </p>

              <Link
                href="/#appointment"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
              >
                Get Your Wisdom Tooth Checked
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TREATMENT OPTIONS ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Treatment Options
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              How Are Wisdom Tooth Problems Treated?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Treatment depends on the position of the tooth, symptoms,
              surrounding structures and overall clinical condition.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <span className="text-sm font-black tracking-widest text-orange-500">
                01
              </span>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Monitoring
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                If a wisdom tooth is not causing problems and is suitable
                for observation, your dentist may recommend monitoring it
                during regular dental visits.
              </p>

            </div>


            <div className="rounded-3xl border-2 border-orange-300 bg-white p-8 shadow-xl">

              <span className="text-sm font-black tracking-widest text-orange-500">
                02
              </span>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Manage the Dental Problem
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                Depending on the condition, treatment may be directed at
                inflammation, infection, decay or other problems affecting
                the wisdom tooth and surrounding tissues.
              </p>

            </div>


            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <span className="text-sm font-black tracking-widest text-orange-500">
                03
              </span>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Wisdom Tooth Removal
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                Removal may be considered when a wisdom tooth is causing
                significant or recurring problems or when its position makes
                appropriate management necessary.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= AFTERCARE ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-[2rem] bg-[#0b1220] p-8 shadow-2xl md:p-12">

            <div className="grid gap-10 lg:grid-cols-2">

              <div>

                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  After Treatment
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Follow Your Dentist&apos;s Aftercare Instructions
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  If wisdom tooth treatment or removal is performed, your
                  dentist will provide specific instructions based on the
                  procedure and your individual situation.
                </p>

              </div>


              <div className="space-y-4">

                {[
                  "Follow the instructions provided after treatment.",
                  "Keep the treatment area clean as advised.",
                  "Take prescribed medication only as directed.",
                  "Avoid disturbing the healing area.",
                  "Contact your dentist if you develop concerning symptoms.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
                  >

                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-400" />

                    <span className="leading-7 text-slate-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LOCAL CLINIC ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] bg-[#0b1220] shadow-2xl">

            <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-2 lg:p-12">

              <div>

                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  Local Wisdom Tooth Care
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Wisdom Tooth Dentist Near
                  <span className="block text-orange-400">
                    Yousufguda
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
                  dental evaluation and wisdom tooth care for patients from
                  Yousufguda and nearby areas of Hyderabad.
                </p>

                <div className="mt-7 flex items-start gap-4">

                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-orange-400" />

                  <p className="leading-7 text-slate-300">
                    Ganapathi Complex, Navodaya Colony Road,
                    Sri Krishna Nagar, Ameerpet, Yousufguda,
                    Hyderabad, Telangana 500073
                  </p>

                </div>

              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur">

                <div className="flex items-start gap-4">

                  <Phone className="mt-1 h-6 w-6 text-orange-400" />

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Contact
                    </p>

                    <a
                      href="tel:+918074528763"
                      className="mt-1 block text-xl font-black text-white hover:text-orange-300"
                    >
                      +91 80745 28763
                    </a>

                  </div>

                </div>


                <div className="my-6 h-px bg-white/10" />


                <div className="flex items-start gap-4">

                  <Clock className="mt-1 h-6 w-6 text-orange-400" />

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Working Hours
                    </p>

                    <p className="mt-2 font-bold text-white">
                      Monday – Saturday
                    </p>

                    <p className="mt-1 leading-7 text-slate-300">
                      10:00 AM – 2:00 PM
                      <br />
                      4:00 PM – 9:00 PM
                    </p>

                  </div>

                </div>


                <Link
                  href="/#appointment"
                  className="mt-7 flex w-full items-center justify-center rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-400"
                >
                  Book an Appointment
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Wisdom Tooth Treatment in Yousufguda
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              [
                "What are the symptoms of a problematic wisdom tooth?",
                "Symptoms may include pain at the back of the mouth, swelling, gum tenderness, difficulty opening the mouth, discomfort while chewing, bad taste or persistent bad breath around the wisdom tooth."
              ],
              [
                "Does every wisdom tooth need to be removed?",
                "No. Some wisdom teeth may be monitored if they are not causing problems and are suitable for observation. The decision depends on the tooth position, symptoms and overall dental condition."
              ],
              [
                "What is an impacted wisdom tooth?",
                "An impacted wisdom tooth does not erupt normally because of its position or lack of adequate space. It may be partially or completely covered by gum or bone."
              ],
              [
                "Do I need an X-ray for wisdom tooth treatment?",
                "Dental imaging may be recommended to understand the position of a wisdom tooth and its relationship with surrounding structures. Your dentist will decide what imaging is appropriate."
              ],
              [
                "Can wisdom tooth pain go away on its own?",
                "Symptoms can sometimes temporarily improve, but recurring or persistent wisdom tooth pain should be evaluated to identify the underlying cause."
              ],
              [
                "Where can I get wisdom tooth treatment in Yousufguda?",
                "Wisdom tooth evaluation and treatment are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073."
              ],
            ].map(([question, answer]) => (

              <details
                key={question}
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-orange-50/60 open:bg-white open:shadow-lg"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-bold text-gray-900">

                  <span>
                    {question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl text-white transition group-open:rotate-45">
                    +
                  </span>

                </summary>

                <div className="border-t border-orange-100 px-6 pb-6 pt-5">

                  <p className="leading-8 text-gray-600">
                    {answer}
                  </p>

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-20 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-black md:text-5xl">
            Having Wisdom Tooth Pain?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Get your wisdom tooth evaluated and understand whether
            monitoring, treatment or removal is appropriate for you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/#appointment"
              className="rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
            >
              🦷 Book an Appointment
            </Link>

            <a
              href="tel:+918074528763"
              className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
            >
              📞 Call Now
            </a>

          </div>

        </div>

      </section>


      {/* ================= FAQ SCHEMA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the symptoms of a problematic wisdom tooth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Symptoms may include pain at the back of the mouth, swelling, gum tenderness, difficulty opening the mouth, discomfort while chewing, bad taste or persistent bad breath around the wisdom tooth.",
                },
              },
              {
                "@type": "Question",
                name: "Does every wisdom tooth need to be removed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No. Some wisdom teeth may be monitored if they are not causing problems and are suitable for observation. The decision depends on the tooth position, symptoms and overall dental condition.",
                },
              },
              {
                "@type": "Question",
                name: "What is an impacted wisdom tooth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "An impacted wisdom tooth does not erupt normally because of its position or lack of adequate space. It may be partially or completely covered by gum or bone.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need an X-ray for wisdom tooth treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Dental imaging may be recommended to understand the position of a wisdom tooth and its relationship with surrounding structures. Your dentist will decide what imaging is appropriate.",
                },
              },
              {
                "@type": "Question",
                name: "Can wisdom tooth pain go away on its own?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Symptoms can sometimes temporarily improve, but recurring or persistent wisdom tooth pain should be evaluated to identify the underlying cause.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get wisdom tooth treatment in Yousufguda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Wisdom tooth evaluation and treatment are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}