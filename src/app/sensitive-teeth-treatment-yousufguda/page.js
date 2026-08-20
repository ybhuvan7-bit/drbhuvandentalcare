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
    "Sensitive Teeth Treatment in Yousufguda, Hyderabad | Tooth Sensitivity",
  description:
    "Sensitive teeth treatment in Yousufguda, Hyderabad for sensitivity to cold, hot, sweet foods and drinks. Find the cause of tooth sensitivity and get personalised dental care at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "sensitive teeth treatment in Yousufguda",
    "sensitive teeth treatment Yousufguda",
    "tooth sensitivity treatment Yousufguda",
    "sensitive teeth dentist Yousufguda",
    "tooth sensitivity to cold Yousufguda",
    "tooth sensitivity to hot Yousufguda",
    "sensitive tooth treatment near Yousufguda",
    "tooth sensitivity dentist Yousufguda",
    "laser treatment for sensitive teeth Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/sensitive-teeth-treatment-yousufguda`,
  },
};

export default function SensitiveTeethTreatmentYousufguda() {
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
              Tooth Sensitivity Care
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

              Sensitive Teeth Treatment in

              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Do you feel a sharp sensation when drinking something cold,
              having hot food or eating something sweet? Tooth sensitivity
              can have several possible causes.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, your teeth
              and gums are evaluated to identify the possible cause of
              sensitivity and plan appropriate treatment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-400"
              >
                Get Your Teeth Evaluated
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
              <span>✓ Sensitivity Evaluation</span>
              <span>✓ Cause Assessment</span>
              <span>✓ Personalised Treatment</span>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-100 text-6xl">
                  🥶
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Tooth Sensitivity Evaluation
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-900">
                  Why Do Your Teeth Hurt With Cold or Hot?
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Sensitivity may be associated with exposed dentine,
                  gum recession, enamel wear, decay or other dental
                  conditions.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">❄️</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Cold Sensitivity
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">🔥</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Hot Sensitivity
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
              Sensitive Teeth Treatment
            </li>

          </ol>

        </div>

      </nav>


      {/* ================= INTRO ================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Understanding Tooth Sensitivity
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            What Is Tooth Sensitivity?
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Tooth sensitivity is a sharp or uncomfortable sensation that
            may occur when teeth are exposed to cold, hot, sweet or other
            triggers.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Occasional sensitivity may have a simple cause, but persistent,
            severe or newly developed sensitivity should be evaluated to
            determine whether there is an underlying dental problem.
          </p>

        </div>

      </section>


      {/* ================= SYMPTOMS ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Common Symptoms
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              What Does Tooth Sensitivity Feel Like?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Sensitivity can present differently depending on the cause
              and condition of the tooth.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "❄️",
                "Sensitivity to Cold",
                "A sharp sensation when drinking cold water, eating ice cream or having other cold foods and drinks."
              ],
              [
                "🔥",
                "Sensitivity to Hot",
                "Discomfort triggered by hot food or beverages may require evaluation if it persists."
              ],
              [
                "🍬",
                "Sensitivity to Sweet Foods",
                "Sweet foods can sometimes trigger sensitivity, particularly when the tooth surface or underlying tissues are affected."
              ],
              [
                "🪥",
                "Sensitivity While Brushing",
                "Discomfort during brushing can sometimes be associated with exposed tooth surfaces or gum recession."
              ],
              [
                "🥶",
                "Sudden Sharp Pain",
                "A brief, sharp sensation may occur when a sensitive tooth is exposed to a trigger."
              ],
              [
                "⚠️",
                "Persistent Sensitivity",
                "Sensitivity that continues, worsens or occurs without an obvious trigger should be professionally evaluated."
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


      {/* ================= CAUSES ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Possible Causes
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Common Causes of Sensitive Teeth
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Tooth sensitivity can occur for different reasons. Finding
              the cause is an important part of treatment planning.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "🦷",
                "Gum Recession",
                "When gum tissue recedes, parts of the tooth surface that are normally protected may become exposed."
              ],
              [
                "✨",
                "Enamel Wear",
                "Loss or wear of protective enamel can make teeth more sensitive to external triggers."
              ],
              [
                "🪥",
                "Aggressive Brushing",
                "Excessive brushing pressure or an unsuitable brushing technique may contribute to tooth surface and gum problems."
              ],
              [
                "🕳️",
                "Dental Decay",
                "Tooth decay can sometimes produce sensitivity, especially when the affected area becomes deeper."
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


      {/* ================= WHEN TO SEE DENTIST ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
                Don&apos;t Ignore Persistent Sensitivity
              </span>

              <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
                When Should You See a Dentist?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                If sensitivity is persistent, severe, worsening or affecting
                your daily eating and drinking habits, a dental evaluation
                can help identify the underlying cause.
              </p>

              <div className="mt-9 space-y-5">

                {[
                  "Sensitivity is becoming more frequent.",
                  "Pain is severe or lasts longer than expected.",
                  "Sensitivity occurs without an obvious trigger.",
                  "You notice gum recession or exposed tooth surfaces.",
                  "There is visible decay, a broken tooth or another dental problem.",
                  "Sensitivity is accompanied by toothache, swelling or pain while biting.",
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
                  Don&apos;t Simply Ignore Tooth Sensitivity
                </h3>

                <p className="mt-5 leading-8 text-orange-50">
                  Sensitivity can sometimes be managed with simple measures,
                  but persistent symptoms may indicate an underlying dental
                  condition that needs attention.
                </p>

                <Link
                  href="/#appointment"
                  className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  Get Your Teeth Checked
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TREATMENT ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Treatment Options
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              How Is Tooth Sensitivity Treated?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Treatment depends on the reason for sensitivity and the
              condition of your teeth and gums.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Identify the Cause",
                "A dental examination helps determine whether sensitivity is associated with gum recession, enamel wear, decay or another condition."
              ],
              [
                "02",
                "Desensitisation",
                "Depending on the cause, your dentist may recommend suitable measures to reduce sensitivity."
              ],
              [
                "03",
                "Treat the Underlying Problem",
                "If decay, gum problems or another dental condition is responsible, appropriate treatment may be required."
              ],
              [
                "04",
                "Prevent Further Sensitivity",
                "Your dentist can guide you regarding brushing technique, oral hygiene and other preventive measures."
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg"
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


          {/* INTERNAL LINK */}

          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">

            <Link
              href="/tooth-pain-treatment-yousufguda"
              className="inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
            >
              Learn More About Tooth Pain Treatment
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


      {/* ================= DAILY CARE ================= */}

      <section className="bg-[#0b1220] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                Everyday Prevention
              </span>

              <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                Simple Habits That Can Help Protect Your Teeth
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Good oral hygiene and appropriate brushing habits are
                important for maintaining healthy teeth and gums.
              </p>

            </div>


            <div className="space-y-4">

              {[
                "Use a gentle brushing technique rather than excessive pressure.",
                "Maintain regular brushing and interdental cleaning.",
                "Avoid frequently exposing teeth to highly acidic foods and drinks.",
                "Follow your dentist's advice if you already have tooth sensitivity.",
                "Attend regular dental check-ups when recommended.",
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
                  Sensitive Teeth Dentist Near
                  <span className="block text-orange-400">
                    Yousufguda
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
                  evaluation and treatment planning for patients experiencing
                  tooth sensitivity in Yousufguda and nearby areas of
                  Hyderabad.
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
              Sensitive Teeth Treatment in Yousufguda
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              [
                "What causes sensitive teeth?",
                "Tooth sensitivity can have several possible causes, including gum recession, enamel wear, exposed tooth surfaces, dental decay and other dental conditions. A dental examination can help identify the likely cause."
              ],
              [
                "Why are my teeth sensitive to cold?",
                "Cold sensitivity can occur when sensitive areas of the tooth are exposed or when the tooth has an underlying dental condition. Persistent or severe cold sensitivity should be evaluated."
              ],
              [
                "Can sensitive teeth be treated?",
                "Yes. Treatment depends on the underlying cause. Your dentist may recommend desensitisation measures, preventive care or treatment of an underlying dental or gum condition."
              ],
              [
                "Can gum recession cause tooth sensitivity?",
                "Yes. Gum recession can expose areas of the tooth that are normally protected, which may make them more sensitive to temperature and other triggers."
              ],
              [
                "When should I see a dentist for sensitive teeth?",
                "You should consider a dental evaluation when sensitivity is persistent, worsening, severe, occurs without an obvious trigger or is associated with toothache, swelling or pain while biting."
              ],
              [
                "Where can I get sensitive teeth treatment in Yousufguda?",
                "Sensitive teeth evaluation and appropriate dental care are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073."
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
            Tired of Sensitive Teeth?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Find out what may be causing your tooth sensitivity and
            understand the treatment options suitable for you.
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
                name: "What causes sensitive teeth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Tooth sensitivity can have several possible causes, including gum recession, enamel wear, exposed tooth surfaces, dental decay and other dental conditions. A dental examination can help identify the likely cause.",
                },
              },
              {
                "@type": "Question",
                name: "Why are my teeth sensitive to cold?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Cold sensitivity can occur when sensitive areas of the tooth are exposed or when the tooth has an underlying dental condition. Persistent or severe cold sensitivity should be evaluated.",
                },
              },
              {
                "@type": "Question",
                name: "Can sensitive teeth be treated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Treatment depends on the underlying cause. Your dentist may recommend desensitisation measures, preventive care or treatment of an underlying dental or gum condition.",
                },
              },
              {
                "@type": "Question",
                name: "Can gum recession cause tooth sensitivity?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Gum recession can expose areas of the tooth that are normally protected, which may make them more sensitive to temperature and other triggers.",
                },
              },
              {
                "@type": "Question",
                name: "When should I see a dentist for sensitive teeth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "You should consider a dental evaluation when sensitivity is persistent, worsening, severe, occurs without an obvious trigger or is associated with toothache, swelling or pain while biting.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get sensitive teeth treatment in Yousufguda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Sensitive teeth evaluation and appropriate dental care are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}