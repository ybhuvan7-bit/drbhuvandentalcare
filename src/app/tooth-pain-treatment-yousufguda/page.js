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
    "Tooth Pain Treatment in Yousufguda, Hyderabad | Toothache Dentist",
  description:
    "Tooth pain treatment in Yousufguda, Hyderabad for toothache, sensitivity, pain while biting, swelling and other dental problems. Get your tooth evaluated at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "tooth pain treatment in Yousufguda",
    "tooth pain treatment Yousufguda",
    "toothache treatment Yousufguda",
    "severe toothache treatment Yousufguda",
    "tooth pain dentist Yousufguda",
    "tooth pain while biting Yousufguda",
    "sensitive teeth treatment Yousufguda",
    "tooth pain treatment near Yousufguda",
    "dentist for tooth pain Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/tooth-pain-treatment-yousufguda`,
  },
};

export default function ToothPainTreatmentYousufguda() {
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
              Dental Pain Care
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

              Tooth Pain Treatment in

              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tooth pain can have many different causes. Persistent
              toothache, sensitivity, pain while biting or swelling should
              not be ignored.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, your tooth
              is evaluated to understand the cause of pain and determine
              the appropriate treatment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-400"
              >
                Get Your Tooth Evaluated
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
              <span>✓ Toothache Evaluation</span>
              <span>✓ Sensitivity Assessment</span>
              <span>✓ Treatment Planning</span>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-100 text-6xl">
                  😣
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Tooth Pain Evaluation
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-900">
                  Find the Cause of Your Tooth Pain
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Tooth pain may be related to decay, sensitivity, cracks,
                  gum problems, pulp inflammation or other dental conditions.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">🦷</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Toothache
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">❄️</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Sensitivity
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
              Tooth Pain Treatment
            </li>

          </ol>

        </div>

      </nav>


      {/* ================= INTRO ================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Understanding Tooth Pain
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Why Does Your Tooth Hurt?
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Tooth pain is a symptom rather than a diagnosis. The cause can
            range from dental decay and sensitivity to cracks, gum problems
            or inflammation of the pulp inside the tooth.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Because different dental problems can produce similar symptoms,
            an examination is important before deciding whether you need a
            filling, root canal treatment, gum treatment, extraction or
            another form of dental care.
          </p>

        </div>

      </section>


      {/* ================= TYPES OF PAIN ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Common Symptoms
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              What Type of Tooth Pain Are You Experiencing?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              The nature of your symptoms can provide useful information,
              but only a dental examination can determine the actual cause.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "😣",
                "Severe Toothache",
                "Persistent or intense pain may require prompt dental evaluation to identify the underlying cause."
              ],
              [
                "❄️",
                "Hot & Cold Sensitivity",
                "Sensitivity that persists after the hot or cold stimulus is removed should be evaluated."
              ],
              [
                "😬",
                "Pain While Biting",
                "Pain during chewing or biting can have several possible dental causes and should be examined."
              ],
              [
                "🌙",
                "Night-Time Tooth Pain",
                "Tooth pain that becomes noticeable at night may require evaluation, especially when it is persistent."
              ],
              [
                "🦷",
                "Pain With Swelling",
                "Swelling around a painful tooth can indicate a dental problem that needs professional assessment."
              ],
              [
                "⚡",
                "Sudden Tooth Pain",
                "Sudden or unexplained dental pain should be evaluated rather than relying only on pain relief."
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


      {/* ================= POSSIBLE CAUSES ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Possible Causes
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Common Causes of Tooth Pain
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Tooth pain can originate from different structures of the
              tooth and surrounding tissues.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "🦷",
                "Dental Decay",
                "Deep or progressing decay can irritate the inner structures of a tooth and cause pain."
              ],
              [
                "🧊",
                "Tooth Sensitivity",
                "Exposed dentine or other dental conditions can cause sensitivity to hot, cold or sweet foods."
              ],
              [
                "💥",
                "Cracked Tooth",
                "A crack in a tooth can sometimes cause pain while biting or sensitivity."
              ],
              [
                "🩸",
                "Gum Problems",
                "Gum inflammation or other periodontal problems can sometimes contribute to dental discomfort."
              ],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-lg"
              >

                <div className="text-5xl">
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


      {/* ================= TREATMENT ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Treatment Depends on the Cause
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              How Is Tooth Pain Treated?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              There is no single treatment for tooth pain. The appropriate
              treatment depends on what is causing the symptoms and the
              condition of the tooth.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Dental Filling",
                "A filling may be considered when pain is associated with a restorable tooth affected by decay."
              ],
              [
                "02",
                "Root Canal Treatment",
                "When the pulp inside a suitable tooth is inflamed or infected, root canal treatment may be recommended."
              ],
              [
                "03",
                "Gum Treatment",
                "When symptoms are associated with gum disease or periodontal problems, appropriate gum care may be required."
              ],
              [
                "04",
                "Other Treatment",
                "Depending on the condition, other restorative, surgical or replacement options may be considered."
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >

                <span className="text-sm font-black tracking-widest text-orange-500">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {text}
                </p>

              </div>

            ))}

          </div>


          {/* ROOT CANAL INTERNAL LINK */}

          <div className="mt-10 text-center">

            <Link
              href="/root-canal-treatment-yousufguda"
              className="inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
            >
              Learn More About Root Canal Treatment in Yousufguda
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= WHEN TO VISIT ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-[2rem] bg-[#0b1220] p-8 shadow-2xl md:p-12">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>

                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  Don&apos;t Ignore Persistent Pain
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  When Should You See a Dentist?
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Consider a dental evaluation if your tooth pain is
                  persistent, worsening, recurring or accompanied by other
                  symptoms.
                </p>

              </div>


              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  "Persistent toothache",
                  "Pain while biting",
                  "Prolonged sensitivity",
                  "Swelling around the tooth",
                  "Pain that keeps returning",
                  "Broken or damaged tooth",
                  "Pain with fever or feeling unwell",
                  "Difficulty chewing",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >

                    <CheckCircle className="h-5 w-5 shrink-0 text-orange-400" />

                    <span className="text-sm font-semibold text-slate-200">
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
                  Local Dental Care
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Tooth Pain Dentist Near
                  <span className="block text-orange-400">
                    Yousufguda
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
                  dental evaluation and treatment for patients from
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
                  Get Your Tooth Evaluated
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
              Tooth Pain Treatment in Yousufguda
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              [
                "What causes tooth pain?",
                "Tooth pain can have several causes, including dental decay, tooth sensitivity, cracks, gum problems and inflammation or infection affecting the pulp. An examination is needed to identify the actual cause."
              ],
              [
                "Should I see a dentist for persistent tooth pain?",
                "Yes. Persistent, worsening or recurring tooth pain should be evaluated by a dentist. Early assessment can help identify the cause and determine the appropriate treatment."
              ],
              [
                "Does tooth pain always mean I need a root canal?",
                "No. Tooth pain can have many causes and does not automatically mean that root canal treatment is required. A dental examination and appropriate investigations help determine the suitable treatment."
              ],
              [
                "Can tooth sensitivity cause pain?",
                "Yes. Tooth sensitivity can cause discomfort with hot, cold, sweet or other stimuli. Persistent or severe sensitivity should be evaluated to identify the underlying cause."
              ],
              [
                "Can a painful tooth be saved?",
                "In some cases, a painful tooth can be treated and preserved if it is suitable for restoration. The appropriate treatment depends on the cause of pain and the condition of the tooth."
              ],
              [
                "Where can I get tooth pain treatment in Yousufguda?",
                "Tooth pain evaluation and dental treatment are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073."
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
            Don&apos;t Ignore Persistent Tooth Pain
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Find out what may be causing your tooth pain and understand
            the treatment options suitable for your tooth.
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
                name: "What causes tooth pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Tooth pain can have several causes, including dental decay, tooth sensitivity, cracks, gum problems and inflammation or infection affecting the pulp. An examination is needed to identify the actual cause.",
                },
              },
              {
                "@type": "Question",
                name: "Should I see a dentist for persistent tooth pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Persistent, worsening or recurring tooth pain should be evaluated by a dentist. Early assessment can help identify the cause and determine the appropriate treatment.",
                },
              },
              {
                "@type": "Question",
                name: "Does tooth pain always mean I need a root canal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No. Tooth pain can have many causes and does not automatically mean that root canal treatment is required. A dental examination and appropriate investigations help determine the suitable treatment.",
                },
              },
              {
                "@type": "Question",
                name: "Can tooth sensitivity cause pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Tooth sensitivity can cause discomfort with hot, cold, sweet or other stimuli. Persistent or severe sensitivity should be evaluated to identify the underlying cause.",
                },
              },
              {
                "@type": "Question",
                name: "Can a painful tooth be saved?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "In some cases, a painful tooth can be treated and preserved if it is suitable for restoration. The appropriate treatment depends on the cause of pain and the condition of the tooth.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get tooth pain treatment in Yousufguda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Tooth pain evaluation and dental treatment are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}