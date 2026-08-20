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
    "Teeth Cleaning & Scaling in Yousufguda, Hyderabad | Tartar Removal",
  description:
    "Professional teeth cleaning and scaling in Yousufguda, Hyderabad for plaque, tartar, stains and gum health. Get professional dental cleaning and polishing at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "teeth cleaning in Yousufguda",
    "teeth cleaning Yousufguda",
    "teeth scaling Yousufguda",
    "dental cleaning Yousufguda",
    "tartar removal Yousufguda",
    "teeth polishing Yousufguda",
    "professional teeth cleaning Yousufguda",
    "dental scaling near Yousufguda",
    "teeth cleaning near Yousufguda",
    "plaque removal Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/teeth-cleaning-yousufguda`,
  },
};

export default function TeethCleaningYousufguda() {
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
              Preventive Dental Care
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

              Teeth Cleaning & Scaling in

              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Professional teeth cleaning helps remove plaque, calculus
              and surface stains that regular brushing may not completely
              remove.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, teeth and
              gums are evaluated before recommending appropriate cleaning,
              scaling or other preventive dental care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-400"
              >
                Book Teeth Cleaning
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
              <span>✓ Plaque Removal</span>
              <span>✓ Tartar Removal</span>
              <span>✓ Gum Health Assessment</span>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-100 text-6xl">
                  🪥
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Professional Dental Cleaning
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-900">
                  Cleaner Teeth. Healthier Gums.
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Professional cleaning can help remove deposits that are
                  difficult to eliminate with routine brushing alone.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">✨</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Surface Stains
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">🦷</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Tartar Removal
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
              Teeth Cleaning
            </li>

          </ol>

        </div>

      </nav>


      {/* ================= INTRO ================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Understanding Professional Cleaning
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Why Do You Need Professional Teeth Cleaning?
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Plaque is a sticky bacterial film that forms on teeth. If it is
            not adequately removed, it can harden into calculus or tartar,
            which cannot be removed effectively with ordinary brushing.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Professional cleaning helps remove these deposits and allows
            your dentist to assess the health of your teeth and gums.
          </p>

        </div>

      </section>


      {/* ================= WHAT IS REMOVED ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              What Does Cleaning Remove?
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              More Than Just Surface Stains
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Professional cleaning can address different types of deposits
              and help maintain healthier teeth and gums.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "🦠",
                "Plaque",
                "Helps remove plaque buildup that may remain even with regular brushing."
              ],
              [
                "🪨",
                "Tartar / Calculus",
                "Hardened deposits require professional instruments for effective removal."
              ],
              [
                "☕",
                "Surface Stains",
                "Certain foods, beverages and habits can cause stains on the outer tooth surface."
              ],
              [
                "🩸",
                "Gumline Deposits",
                "Cleaning around the gumline helps remove deposits that can contribute to gum inflammation."
              ],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
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


      {/* ================= SIGNS ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                When You May Need Cleaning
              </span>

              <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
                Signs It May Be Time for a Dental Cleaning
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A dental visit may be useful if you notice visible deposits,
                gum bleeding, persistent bad breath or other changes in your
                oral health.
              </p>

              <div className="mt-9 space-y-5">

                {[
                  "Yellow or brown deposits around the teeth.",
                  "Visible tartar or calculus buildup.",
                  "Bleeding while brushing or flossing.",
                  "Persistent bad breath or unpleasant taste.",
                  "Swollen or tender gums.",
                  "Teeth that feel rough around the gumline.",
                  "Stains that do not improve with routine brushing.",
                  "It has been a long time since your last dental cleaning.",
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
                  Prevention Is Better Than Waiting for Pain
                </h3>

                <p className="mt-5 leading-8 text-orange-50">
                  Regular dental check-ups and professional cleaning, when
                  recommended, can help maintain oral hygiene and allow
                  dental problems to be identified earlier.
                </p>

                <Link
                  href="/#appointment"
                  className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  Book a Dental Cleaning
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SCALING VS POLISHING ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Scaling & Polishing
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              What Happens During Professional Teeth Cleaning?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              The exact approach depends on the amount and location of
              deposits and the condition of your teeth and gums.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <span className="text-sm font-black tracking-widest text-orange-500">
                01
              </span>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Dental Assessment
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                Your teeth and gums are assessed to understand your oral
                hygiene status and identify areas that need attention.
              </p>

            </div>


            <div className="rounded-3xl border-2 border-orange-300 bg-white p-8 shadow-xl">

              <span className="text-sm font-black tracking-widest text-orange-500">
                02
              </span>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Scaling
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                Professional instruments are used to remove plaque and
                hardened calculus deposits from the teeth.
              </p>

            </div>


            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <span className="text-sm font-black tracking-widest text-orange-500">
                03
              </span>

              <h3 className="mt-4 text-2xl font-black text-gray-900">
                Polishing
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                Polishing may be performed to help remove certain surface
                stains and leave the tooth surfaces smoother.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Benefits of Professional Cleaning
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Why Regular Dental Cleaning Matters
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Professional cleaning is an important part of preventive oral
              care, especially when plaque and calculus tend to accumulate.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "🦷",
                "Supports Gum Health",
                "Removing plaque and calculus can help reduce factors associated with gum inflammation."
              ],
              [
                "✨",
                "Cleaner Teeth",
                "Professional cleaning can help remove certain deposits and surface stains."
              ],
              [
                "😮‍💨",
                "Fresh Breath",
                "Reducing plaque and calculus buildup may help address oral factors contributing to bad breath."
              ],
              [
                "🔍",
                "Early Detection",
                "Regular dental visits allow your dentist to identify possible dental problems before they become more complicated."
              ],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className="rounded-3xl border border-orange-100 bg-orange-50 p-8 text-center shadow-lg"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
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


      {/* ================= GUM CONNECTION ================= */}

      <section className="bg-[#0b1220] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                When Cleaning Is Not Enough
              </span>

              <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                What If You Have Bleeding or Inflamed Gums?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Routine professional cleaning may not be sufficient when
                there is established gum disease or deeper periodontal
                involvement. A detailed gum evaluation may be required.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7">

              <div className="space-y-4">

                {[
                  "Bleeding gums",
                  "Persistent gum swelling",
                  "Gum recession",
                  "Persistent bad breath",
                  "Loose teeth",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >

                    <CheckCircle className="h-5 w-5 shrink-0 text-orange-400" />

                    <span className="font-semibold text-slate-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <Link
                href="/gum-treatment-yousufguda"
                className="mt-7 inline-flex items-center gap-2 font-bold text-orange-400 transition hover:text-orange-300"
              >
                Explore Gum Treatment
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BAD BREATH LINK ================= */}

      <section className="bg-orange-50 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
            Persistent Bad Breath?
          </span>

          <h2 className="mt-6 text-3xl font-black text-gray-900 md:text-4xl">
            Professional Cleaning Can Be Part of Bad Breath Care
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            If plaque, calculus or gum problems are contributing to mouth
            odour, professional dental care may help address these oral
            factors.
          </p>

          <Link
            href="/bad-breath-treatment-yousufguda"
            className="mt-7 inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
          >
            Learn More About Bad Breath Treatment
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </section>


      {/* ================= LOCAL CLINIC ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] bg-[#0b1220] shadow-2xl">

            <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-2 lg:p-12">

              <div>

                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  Local Dental Care
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Teeth Cleaning & Scaling Near
                  <span className="block text-orange-400">
                    Yousufguda
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
                  professional teeth cleaning, scaling, polishing and
                  preventive dental care for patients from Yousufguda and
                  nearby areas of Hyderabad.
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
                  Book Teeth Cleaning
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Teeth Cleaning & Scaling in Yousufguda
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              [
                "What is professional teeth cleaning?",
                "Professional teeth cleaning is a dental procedure used to remove plaque, calculus or tartar and certain surface stains from the teeth. Your dentist can also assess the condition of your teeth and gums during the visit."
              ],
              [
                "What is the difference between scaling and polishing?",
                "Scaling focuses on removing plaque and hardened calculus deposits. Polishing may be performed to help remove certain surface stains and smooth the tooth surfaces."
              ],
              [
                "Does teeth cleaning remove yellow teeth?",
                "Professional cleaning can remove certain external stains and deposits. However, the appearance of teeth can have different causes, and professional cleaning does not whiten the natural internal colour of teeth."
              ],
              [
                "Can teeth cleaning help bleeding gums?",
                "If plaque and calculus are contributing to gum inflammation, professional cleaning may be part of gum care. Persistent bleeding gums should be evaluated to determine whether there is underlying gum disease."
              ],
              [
                "How often should I get teeth cleaning?",
                "The appropriate frequency varies between individuals. Your dentist can recommend a cleaning schedule based on your oral hygiene, plaque and calculus buildup, gum health and other risk factors."
              ],
              [
                "Where can I get teeth cleaning in Yousufguda?",
                "Professional teeth cleaning and scaling are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073."
              ],
            ].map(([question, answer]) => (

              <details
                key={question}
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-white open:shadow-lg"
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
            Due for a Professional Dental Cleaning?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Get your teeth and gums evaluated and understand whether
            professional cleaning, scaling or further dental care is
            appropriate for you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/#appointment"
              className="rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
            >
              🪥 Book Teeth Cleaning
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
                name: "What is professional teeth cleaning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Professional teeth cleaning is a dental procedure used to remove plaque, calculus or tartar and certain surface stains from the teeth. Your dentist can also assess the condition of your teeth and gums during the visit.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between scaling and polishing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Scaling focuses on removing plaque and hardened calculus deposits. Polishing may be performed to help remove certain surface stains and smooth the tooth surfaces.",
                },
              },
              {
                "@type": "Question",
                name: "Does teeth cleaning remove yellow teeth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Professional cleaning can remove certain external stains and deposits. However, the appearance of teeth can have different causes, and professional cleaning does not whiten the natural internal colour of teeth.",
                },
              },
              {
                "@type": "Question",
                name: "Can teeth cleaning help bleeding gums?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "If plaque and calculus are contributing to gum inflammation, professional cleaning may be part of gum care. Persistent bleeding gums should be evaluated to determine whether there is underlying gum disease.",
                },
              },
              {
                "@type": "Question",
                name: "How often should I get teeth cleaning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "The appropriate frequency varies between individuals. Your dentist can recommend a cleaning schedule based on your oral hygiene, plaque and calculus buildup, gum health and other risk factors.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get teeth cleaning in Yousufguda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Professional teeth cleaning and scaling are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}