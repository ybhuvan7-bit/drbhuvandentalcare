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
    "Gum Treatment in Yousufguda, Hyderabad | Gum Disease & Periodontal Care",
  description:
    "Gum treatment in Yousufguda, Hyderabad for bleeding gums, swollen gums, gum infection and periodontal problems. Get a comprehensive gum evaluation at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "gum treatment in Yousufguda",
    "gum disease treatment Yousufguda",
    "gum treatment Yousufguda",
    "bleeding gums treatment Yousufguda",
    "periodontal treatment Yousufguda",
    "gum infection treatment Yousufguda",
    "swollen gums treatment Yousufguda",
    "gum specialist Yousufguda",
    "gum care Yousufguda",
    "gum treatment near Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/gum-treatment-yousufguda`,
  },
};

export default function GumTreatmentYousufguda() {
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
              Gum Care in Yousufguda
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

              Gum Treatment in
              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Healthy gums are an important part of a healthy smile.
              Bleeding gums, swelling, persistent bad breath or gum
              discomfort should not be ignored.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, gum
              conditions are evaluated carefully to understand the cause
              and plan appropriate periodontal care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-400"
              >
                Book Gum Evaluation
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

              <span>✓ Gum Evaluation</span>
              <span>✓ Periodontal Care</span>
              <span>✓ Preventive Gum Care</span>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-100 text-6xl">
                  🦷
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Periodontal Care
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-900">
                  Healthy Gums Matter
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Early evaluation can help identify gum problems and
                  determine the appropriate level of treatment and care.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl font-black text-orange-600">
                      🩸
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Bleeding Gums
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl font-black text-orange-600">
                      🛡️
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Gum Care
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
              Gum Treatment in Yousufguda
            </li>

          </ol>

        </div>

      </nav>


      {/* ================= INTRO ================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Understanding Gum Problems
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Why Is Gum Health Important?
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Gums support and surround the teeth. Changes such as bleeding,
            swelling, redness, tenderness or persistent bad breath can be
            signs that your gums need professional evaluation.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Gum problems can have different causes and levels of severity.
            A dental examination helps determine the condition of your gums
            and the appropriate treatment or preventive care.
          </p>

        </div>

      </section>


      {/* ================= WARNING SIGNS ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Warning Signs
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Signs You May Need Gum Treatment
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              If you notice one or more of these symptoms, consider getting
              your gums examined rather than ignoring the problem.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "🩸",
                "Bleeding Gums",
                "Gums that bleed during brushing or flossing may need professional evaluation."
              ],
              [
                "🔴",
                "Swollen or Red Gums",
                "Changes in gum colour, swelling or tenderness can indicate gum inflammation."
              ],
              [
                "😮‍💨",
                "Persistent Bad Breath",
                "Ongoing bad breath can sometimes be associated with oral or gum problems."
              ],
              [
                "😬",
                "Tender Gums",
                "Gum tenderness or discomfort should be evaluated if it persists."
              ],
              [
                "🦷",
                "Gum Recession",
                "Gums that appear to have moved away from the teeth may require assessment."
              ],
              [
                "⚠️",
                "Loose Teeth",
                "Tooth mobility can have different causes and should be assessed promptly."
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


      {/* ================= TYPES ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Gum Conditions
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Common Gum Problems
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Gum conditions can range from mild inflammation to more
              advanced periodontal problems. The treatment approach depends
              on the individual condition.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg">

              <div className="text-5xl">🩸</div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Gingivitis
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Gingivitis involves inflammation of the gums and may be
                associated with redness, swelling or bleeding.
              </p>

            </div>


            <div className="rounded-3xl border-2 border-orange-300 bg-white p-8 shadow-xl">

              <div className="text-5xl">🦷</div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Periodontitis
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Periodontitis is a more advanced gum condition that can
                affect the tissues supporting the teeth and requires
                professional periodontal assessment.
              </p>

            </div>


            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg">

              <div className="text-5xl">🛡️</div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Gum Recession
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Gum recession can expose more of the tooth surface and may
                be associated with sensitivity or other dental concerns.
              </p>

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
              How Is Gum Disease Treated?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Treatment depends on the severity and cause of the gum
              problem. Your dentist will recommend the appropriate approach
              after examination.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Gum Evaluation",
                "Your gums, teeth and oral condition are examined to identify areas requiring attention."
              ],
              [
                "02",
                "Professional Cleaning",
                "Scaling and professional cleaning may be recommended to remove plaque and calculus."
              ],
              [
                "03",
                "Periodontal Treatment",
                "Additional periodontal treatment may be considered when deeper gum problems are present."
              ],
              [
                "04",
                "Maintenance & Follow-Up",
                "Regular professional reviews and effective home care help maintain gum health."
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

        </div>

      </section>


      {/* ================= HOME CARE ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Everyday Gum Care
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Healthy Gums Start With Daily Care
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional treatment is only one part of maintaining good
              gum health. Consistent oral hygiene and regular dental
              evaluation are also important.
            </p>

            <div className="mt-9 space-y-5">

              {[
                "Brush your teeth regularly using an appropriate technique.",
                "Clean between your teeth as recommended by your dentist.",
                "Do not ignore repeated gum bleeding or swelling.",
                "Maintain regular dental check-ups based on your needs.",
                "Follow the professional cleaning and maintenance plan recommended for you.",
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
                Don&apos;t Ignore Bleeding Gums
              </h3>

              <p className="mt-5 leading-8 text-orange-50">
                Occasional gum bleeding can have different causes, but
                repeated or persistent bleeding deserves professional
                evaluation.
              </p>

              <Link
                href="/#appointment"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
              >
                Get Your Gums Evaluated
              </Link>

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
                  Local Gum Care
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Gum Treatment Near
                  <span className="block text-orange-400">
                    Yousufguda
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
                  periodontal and gum care for patients from Yousufguda
                  and nearby areas of Hyderabad.
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
                  Book Gum Evaluation
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
              Gum Treatment in Yousufguda
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              [
                "What are the common signs of gum disease?",
                "Common signs can include bleeding gums, swelling, redness, tenderness, persistent bad breath, gum recession and changes around the teeth. These symptoms can have different causes and should be professionally evaluated if they persist."
              ],
              [
                "Is bleeding from the gums normal?",
                "Repeated or persistent gum bleeding should not simply be ignored. It can have different causes, including gum inflammation, and a dental evaluation can help identify the reason."
              ],
              [
                "How is gum disease treated?",
                "Treatment depends on the condition and severity. It may involve professional cleaning, improved oral hygiene, periodontal treatment and regular maintenance. Your dentist will recommend the appropriate approach after examination."
              ],
              [
                "Can gum disease affect teeth?",
                "Advanced periodontal problems can affect the tissues supporting the teeth. Early evaluation and appropriate management can help protect periodontal health."
              ],
              [
                "Do I need professional teeth cleaning for gum problems?",
                "Professional cleaning may be recommended depending on the amount of plaque and calculus present and the condition of your gums. Your dentist can advise you after examination."
              ],
              [
                "Where can I get gum treatment in Yousufguda?",
                "Gum and periodontal care is available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073."
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
            Worried About Your Gums?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            If you have bleeding gums, swelling, bad breath or other gum
            concerns, get your gums evaluated and understand the appropriate
            treatment options.
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
                name: "What are the common signs of gum disease?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Common signs can include bleeding gums, swelling, redness, tenderness, persistent bad breath, gum recession and changes around the teeth. These symptoms can have different causes and should be professionally evaluated if they persist.",
                },
              },
              {
                "@type": "Question",
                name: "Is bleeding from the gums normal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Repeated or persistent gum bleeding should not simply be ignored. It can have different causes, including gum inflammation, and a dental evaluation can help identify the reason.",
                },
              },
              {
                "@type": "Question",
                name: "How is gum disease treated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Treatment depends on the condition and severity. It may involve professional cleaning, improved oral hygiene, periodontal treatment and regular maintenance. Your dentist will recommend the appropriate approach after examination.",
                },
              },
              {
                "@type": "Question",
                name: "Can gum disease affect teeth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Advanced periodontal problems can affect the tissues supporting the teeth. Early evaluation and appropriate management can help protect periodontal health.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need professional teeth cleaning for gum problems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Professional cleaning may be recommended depending on the amount of plaque and calculus present and the condition of your gums. Your dentist can advise you after examination.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get gum treatment in Yousufguda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Gum and periodontal care is available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}