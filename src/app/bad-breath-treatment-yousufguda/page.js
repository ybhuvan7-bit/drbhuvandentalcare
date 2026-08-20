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
    "Bad Breath Treatment in Yousufguda, Hyderabad | Halitosis Treatment",
  description:
    "Bad breath treatment in Yousufguda, Hyderabad for persistent mouth odour and halitosis. Find possible dental causes and get a professional oral evaluation at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "bad breath treatment in Yousufguda",
    "bad breath treatment Yousufguda",
    "bad breath dentist Yousufguda",
    "mouth smell treatment Yousufguda",
    "halitosis treatment Yousufguda",
    "chronic bad breath treatment",
    "mouth odour treatment Yousufguda",
    "bad breath treatment near Yousufguda",
    "dentist for bad breath Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/bad-breath-treatment-yousufguda`,
  },
};

export default function BadBreathTreatmentYousufguda() {
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
              Fresh Breath & Oral Health
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

              Bad Breath Treatment in

              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Persistent bad breath can sometimes be related to oral health
              problems. Gum disease, plaque, calculus, cavities and other
              dental conditions may contribute to mouth odour.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, your oral
              health is evaluated to identify possible causes and plan
              appropriate care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-400"
              >
                Get Your Oral Health Checked
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
              <span>✓ Oral Evaluation</span>
              <span>✓ Gum Assessment</span>
              <span>✓ Professional Cleaning</span>
            </div>

          </div>


          {/* RIGHT */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-100 text-6xl">
                  😮‍💨
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Halitosis Evaluation
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-900">
                  Find the Cause of Persistent Bad Breath
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Treating the underlying cause is more useful than simply
                  masking mouth odour with mints or mouth fresheners.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">🦷</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Oral Health
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">✨</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Fresh Breath
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
              Bad Breath Treatment
            </li>

          </ol>

        </div>

      </nav>


      {/* ================= INTRO ================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Understanding Bad Breath
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Why Does Bad Breath Happen?
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Bad breath, also known as halitosis, can have several possible
            causes. In many patients, oral factors such as plaque, calculus,
            gum problems, cavities or poor oral hygiene can contribute.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            If bad breath continues despite regular brushing, it is worth
            identifying the underlying cause rather than simply masking the
            smell.
          </p>

        </div>

      </section>


      {/* ================= COMMON CAUSES ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Common Causes
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Common Dental Causes of Bad Breath
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Several oral conditions can contribute to persistent mouth
              odour.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "🦷",
                "Plaque & Calculus",
                "Buildup of plaque and hardened calculus can contribute to bacterial activity and unpleasant mouth odour."
              ],
              [
                "🩸",
                "Gum Disease",
                "Gum inflammation and periodontal problems can be associated with persistent bad breath."
              ],
              [
                "🪥",
                "Poor Oral Hygiene",
                "Inadequate cleaning of the teeth, tongue and spaces between teeth can allow odour-causing bacteria to accumulate."
              ],
              [
                "🦷",
                "Dental Cavities",
                "Untreated decay and food accumulation around damaged teeth can sometimes contribute to bad breath."
              ],
              [
                "👅",
                "Tongue Coating",
                "Bacteria and debris can accumulate on the tongue and may contribute to mouth odour."
              ],
              [
                "💧",
                "Dry Mouth",
                "Reduced saliva flow can contribute to changes in the mouth that may worsen bad breath."
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


      {/* ================= WHEN TO SEE DENTIST ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                When To Get Checked
              </span>

              <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
                When Should You See a Dentist for Bad Breath?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Occasional mouth odour can happen for many reasons. But if
                bad breath is persistent or keeps returning, a professional
                dental evaluation can help identify possible oral causes.
              </p>

              <div className="mt-9 space-y-5">

                {[
                  "Bad breath continues despite regular brushing.",
                  "You notice bleeding or swollen gums.",
                  "There is visible plaque or calculus buildup.",
                  "You have persistent bad taste in your mouth.",
                  "You have tooth decay or damaged teeth.",
                  "Bad breath keeps returning after temporary remedies.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >

                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                    <p className="leading-7 text-gray-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            <div className="relative">

              <div className="absolute -inset-5 rounded-[3rem] bg-orange-200/50 blur-3xl" />

              <div className="relative rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-orange-700 p-10 text-white shadow-2xl">

                <ShieldCheck className="h-14 w-14" />

                <h3 className="mt-7 text-3xl font-black">
                  Find the Cause — Don&apos;t Just Mask It
                </h3>

                <p className="mt-5 leading-8 text-orange-50">
                  Mouth fresheners and mints may temporarily mask bad breath,
                  but persistent odour may require identification and
                  management of its underlying cause.
                </p>

                <Link
                  href="/#appointment"
                  className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  Get Your Oral Health Checked
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TREATMENT ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Treatment Approach
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              How Is Bad Breath Treated?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Treatment depends on what is causing the mouth odour. Your
              dentist can evaluate your oral health and recommend appropriate
              care.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Oral Examination",
                "Your teeth, gums and oral tissues are evaluated to identify possible dental causes."
              ],
              [
                "02",
                "Professional Cleaning",
                "Scaling and professional cleaning may be recommended when plaque or calculus buildup is present."
              ],
              [
                "03",
                "Gum Treatment",
                "If gum disease is contributing to bad breath, appropriate periodontal care may be required."
              ],
              [
                "04",
                "Treat Dental Problems",
                "Cavities, damaged teeth and other oral conditions may need appropriate treatment."
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


          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">

            <Link
              href="/teeth-cleaning-ameerpet"
              className="inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
            >
              Learn More About Professional Teeth Cleaning
              <ArrowRight className="h-4 w-4" />
            </Link>

            <span className="hidden text-gray-300 sm:block">
              |
            </span>

            <Link
              href="/gum-treatment-yousufguda"
              className="inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
            >
              Learn More About Gum Treatment
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= HOME CARE ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-[2rem] bg-[#0b1220] p-8 shadow-2xl md:p-12">

            <div className="grid gap-10 lg:grid-cols-2">

              <div>

                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  Everyday Care
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  What Can You Do to Maintain Fresh Breath?
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Good daily oral hygiene is an important part of maintaining
                  oral health and reducing factors that can contribute to
                  mouth odour.
                </p>

              </div>


              <div className="space-y-4">

                {[
                  "Brush your teeth regularly using an appropriate technique.",
                  "Clean between your teeth as recommended by your dentist.",
                  "Clean your tongue gently and regularly.",
                  "Stay adequately hydrated.",
                  "Do not ignore persistent gum bleeding or swelling.",
                  "Maintain regular dental check-ups and professional cleaning when advised.",
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
                  Local Dental Care
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Bad Breath Treatment Near
                  <span className="block text-orange-400">
                    Yousufguda
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
                  oral evaluation, professional cleaning and gum care for
                  patients from Yousufguda and nearby areas of Hyderabad.
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
              Bad Breath Treatment in Yousufguda
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              [
                "What causes persistent bad breath?",
                "Bad breath can have several causes. Oral factors can include plaque, calculus, gum problems, cavities, tongue coating and dry mouth. Persistent symptoms may require professional evaluation."
              ],
              [
                "Can gum disease cause bad breath?",
                "Yes. Gum inflammation and periodontal problems can be associated with persistent bad breath. Treating the underlying gum condition may help address the oral cause."
              ],
              [
                "Can professional teeth cleaning help with bad breath?",
                "Professional cleaning may help when plaque and calculus buildup are contributing to mouth odour. Your dentist can determine whether cleaning is appropriate after examining your teeth and gums."
              ],
              [
                "Why does bad breath keep coming back?",
                "Recurring bad breath may indicate that an underlying cause has not been identified or managed. Dental problems, gum disease, oral hygiene factors and other conditions can contribute."
              ],
              [
                "Is mouthwash enough to treat bad breath?",
                "Mouthwash may temporarily reduce mouth odour, but persistent bad breath may require identifying and managing the underlying cause rather than simply masking the smell."
              ],
              [
                "Where can I get bad breath treatment in Yousufguda?",
                "Bad breath evaluation and appropriate dental care are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073."
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
            Tired of Persistent Bad Breath?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Find out whether an oral health problem may be contributing to
            your bad breath and understand the appropriate care.
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
                name: "What causes persistent bad breath?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Bad breath can have several causes. Oral factors can include plaque, calculus, gum problems, cavities, tongue coating and dry mouth. Persistent symptoms may require professional evaluation.",
                },
              },
              {
                "@type": "Question",
                name: "Can gum disease cause bad breath?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Gum inflammation and periodontal problems can be associated with persistent bad breath. Treating the underlying gum condition may help address the oral cause.",
                },
              },
              {
                "@type": "Question",
                name: "Can professional teeth cleaning help with bad breath?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Professional cleaning may help when plaque and calculus buildup are contributing to mouth odour. Your dentist can determine whether cleaning is appropriate after examining your teeth and gums.",
                },
              },
              {
                "@type": "Question",
                name: "Why does bad breath keep coming back?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Recurring bad breath may indicate that an underlying cause has not been identified or managed. Dental problems, gum disease, oral hygiene factors and other conditions can contribute.",
                },
              },
              {
                "@type": "Question",
                name: "Is mouthwash enough to treat bad breath?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Mouthwash may temporarily reduce mouth odour, but persistent bad breath may require identifying and managing the underlying cause rather than simply masking the smell.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get bad breath treatment in Yousufguda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Bad breath evaluation and appropriate dental care are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}