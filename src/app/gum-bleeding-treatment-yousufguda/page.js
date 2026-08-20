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
    "Gum Bleeding Treatment in Yousufguda, Hyderabad | Bleeding Gums Dentist",
  description:
    "Gum bleeding treatment in Yousufguda, Hyderabad for bleeding, swollen or inflamed gums. Find the possible cause and get professional gum evaluation at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "gum bleeding treatment in Yousufguda",
    "bleeding gums treatment Yousufguda",
    "bleeding gums dentist Yousufguda",
    "gum bleeding treatment near Yousufguda",
    "bleeding gums while brushing Yousufguda",
    "gum disease treatment Yousufguda",
    "swollen gums treatment Yousufguda",
    "gum specialist Yousufguda",
    "periodontal treatment Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/gum-bleeding-treatment-yousufguda`,
  },
};

export default function GumBleedingTreatmentYousufguda() {
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
              Gum Health & Periodontal Care
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

              Gum Bleeding Treatment in

              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Do your gums bleed while brushing, flossing or eating? Gum
              bleeding can have different causes and should not simply be
              ignored when it keeps happening.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, your teeth
              and gums are examined to identify possible causes and plan
              appropriate periodontal care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-400"
              >
                Get Your Gums Checked
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
              <span>✓ Periodontal Assessment</span>
              <span>✓ Personalised Gum Care</span>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-100 text-6xl">
                  🩸
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Gum Bleeding Evaluation
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-900">
                  Healthy Gums Shouldn&apos;t Be Ignored
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Repeated gum bleeding may be associated with plaque,
                  calculus, gum inflammation or other oral conditions.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">🦷</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Gum Health
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">🔍</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Early Evaluation
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
              Gum Bleeding Treatment
            </li>

          </ol>

        </div>

      </nav>


      {/* ================= INTRO ================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Understanding Gum Bleeding
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Why Do Gums Bleed?
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Gum bleeding can occur for different reasons. One common cause is
            inflammation associated with plaque buildup around the teeth.
            However, repeated bleeding may also occur with more advanced gum
            problems or other oral conditions.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Instead of simply stopping brushing because your gums bleed, it
            is better to have the cause assessed by a dental professional.
          </p>

        </div>

      </section>


      {/* ================= COMMON CAUSES ================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Possible Causes
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Common Causes of Bleeding Gums
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Identifying the underlying cause is an important part of
              deciding the appropriate gum treatment.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "🦠",
                "Plaque Buildup",
                "Plaque accumulating around the teeth and gumline can contribute to gum inflammation and bleeding."
              ],
              [
                "🪨",
                "Calculus / Tartar",
                "Hardened deposits can remain around the teeth and may contribute to persistent gum irritation."
              ],
              [
                "🩸",
                "Gingivitis",
                "Inflamed gums may appear red, swollen or tender and can bleed during brushing or flossing."
              ],
              [
                "🦷",
                "Periodontitis",
                "More advanced periodontal disease can affect the tissues supporting the teeth and requires professional assessment."
              ],
              [
                "🪥",
                "Brushing Technique",
                "Excessive brushing pressure or an unsuitable technique may irritate the gums."
              ],
              [
                "⚠️",
                "Other Factors",
                "Certain medicines, systemic conditions and other factors may also influence gum bleeding and should be considered when appropriate."
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
                Don&apos;t Ignore Repeated Bleeding
              </span>

              <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
                When Should You See a Dentist?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Occasional bleeding may have a simple explanation, but
                repeated bleeding deserves professional evaluation,
                especially when it occurs along with other gum symptoms.
              </p>

              <div className="mt-9 space-y-5">

                {[
                  "Your gums bleed frequently while brushing or flossing.",
                  "Your gums look red, swollen or tender.",
                  "You notice persistent bad breath or an unpleasant taste.",
                  "There is visible plaque or tartar around your teeth.",
                  "Your gums appear to be receding.",
                  "You experience discomfort while chewing.",
                  "Your teeth feel loose or have changed position.",
                  "Gum bleeding continues despite improving oral hygiene.",
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
                  Healthy Gums Start With Early Attention
                </h3>

                <p className="mt-5 leading-8 text-orange-50">
                  Early evaluation can help determine whether the bleeding
                  is related to plaque and gum inflammation or whether a more
                  detailed periodontal assessment is required.
                </p>

                <Link
                  href="/#appointment"
                  className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  Get Your Gums Checked
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

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Gum Treatment Approach
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              How Is Gum Bleeding Treated?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Treatment depends on the cause and severity of the gum
              condition. Your dentist can recommend the appropriate approach
              after examination.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Gum Evaluation",
                "Your gums, teeth and gumline are examined to understand the possible cause of bleeding."
              ],
              [
                "02",
                "Professional Cleaning",
                "Scaling may be recommended when plaque and calculus buildup is contributing to gum inflammation."
              ],
              [
                "03",
                "Periodontal Treatment",
                "If deeper gum disease is present, appropriate periodontal treatment may be required."
              ],
              [
                "04",
                "Maintenance & Prevention",
                "You can receive personalised guidance for brushing, interdental cleaning and ongoing gum care."
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


      {/* ================= SCALING VS GUM DISEASE ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Understanding Treatment
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Is Scaling Enough for Bleeding Gums?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Not every case of gum bleeding is the same. The required
              treatment depends on the health of the gums and supporting
              tissues.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div className="rounded-[2rem] border border-orange-100 bg-orange-50 p-8 shadow-lg">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🪥
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                When Professional Cleaning May Help
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                When plaque and calculus buildup are contributing to gum
                inflammation, professional cleaning can be an important part
                of treatment and prevention.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Plaque buildup",
                  "Calculus deposits",
                  "Mild gum inflammation",
                  "Surface deposits around the gumline",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>

                ))}

              </div>

            </div>


            <div className="rounded-[2rem] bg-[#0b1220] p-8 text-white shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg">
                🩺
              </div>

              <h3 className="mt-6 text-2xl font-black">
                When a Periodontal Evaluation May Be Needed
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Persistent bleeding, gum recession, periodontal pockets,
                tooth mobility or other signs may require a more detailed
                assessment and treatment plan.
              </p>

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


      {/* ================= HOME CARE ================= */}

      <section className="bg-[#0b1220] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                Everyday Gum Care
              </span>

              <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                What Can You Do to Protect Your Gums?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Good daily oral hygiene is an important part of maintaining
                healthy gums. Your dentist can also recommend a personalised
                home-care routine based on your gum condition.
              </p>

            </div>


            <div className="space-y-4">

              {[
                "Brush your teeth gently and thoroughly.",
                "Clean between your teeth regularly as advised.",
                "Do not stop brushing simply because your gums bleed.",
                "Avoid excessive brushing pressure.",
                "Attend professional dental cleaning when recommended.",
                "Do not ignore persistent gum bleeding or swelling.",
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


      {/* ================= RELATED TREATMENTS ================= */}

      <section className="bg-orange-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Related Dental Care
            </span>

            <h2 className="mt-6 text-3xl font-black text-gray-900 md:text-4xl">
              Explore Related Gum & Dental Treatments
            </h2>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <Link
              href="/gum-treatment-yousufguda"
              className="group rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-4xl">
                🩺
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Gum Treatment
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Comprehensive care for gum inflammation, recession and
                periodontal concerns.
              </p>

              <div className="mt-5 font-bold text-orange-600">
                Explore Gum Care →
              </div>

            </Link>


            <Link
              href="/teeth-cleaning-yousufguda"
              className="group rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-4xl">
                🪥
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Teeth Cleaning & Scaling
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Professional cleaning to remove plaque, calculus and
                certain surface stains.
              </p>

              <div className="mt-5 font-bold text-orange-600">
                Explore Teeth Cleaning →
              </div>

            </Link>


            <Link
              href="/bad-breath-treatment-yousufguda"
              className="group rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-4xl">
                😮‍💨
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Bad Breath Treatment
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Evaluation of possible oral causes of persistent mouth
                odour and appropriate dental care.
              </p>

              <div className="mt-5 font-bold text-orange-600">
                Explore Bad Breath Care →
              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* ================= LOCAL CLINIC ================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] bg-[#0b1220] shadow-2xl">

            <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-2 lg:p-12">

              <div>

                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  Local Periodontal Care
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Bleeding Gums Treatment Near
                  <span className="block text-orange-400">
                    Yousufguda
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
                  gum evaluation, professional cleaning and periodontal care
                  for patients from Yousufguda and nearby areas of Hyderabad.
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
                  Book a Gum Consultation
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
              Gum Bleeding Treatment in Yousufguda
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              [
                "Why do my gums bleed when I brush?",
                "Gum bleeding can have several causes. Plaque buildup and gum inflammation are common possibilities, but persistent bleeding should be evaluated to identify the underlying cause."
              ],
              [
                "Is bleeding gums always a sign of gum disease?",
                "Not necessarily. Gum bleeding can occur for different reasons, including plaque-related inflammation, brushing technique and other factors. A dental examination is the best way to determine the cause."
              ],
              [
                "Should I stop brushing if my gums bleed?",
                "You generally should not stop maintaining oral hygiene simply because your gums bleed. However, avoid excessive brushing pressure and seek professional advice if bleeding persists."
              ],
              [
                "Can scaling stop bleeding gums?",
                "When plaque and calculus are contributing to gum inflammation, professional cleaning may be an important part of treatment. The appropriate treatment depends on the condition of the gums."
              ],
              [
                "When does gum bleeding require periodontal treatment?",
                "Persistent bleeding accompanied by gum recession, periodontal pockets, tooth mobility or other signs may require a detailed periodontal evaluation and appropriate treatment."
              ],
              [
                "Where can I get gum bleeding treatment in Yousufguda?",
                "Gum evaluation and appropriate periodontal care are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073."
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
            Do Your Gums Bleed Frequently?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Get your gums examined and understand whether professional
            cleaning, gum treatment or further periodontal care is
            appropriate for you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/#appointment"
              className="rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
            >
              🩺 Book a Gum Consultation
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
                name: "Why do my gums bleed when I brush?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Gum bleeding can have several causes. Plaque buildup and gum inflammation are common possibilities, but persistent bleeding should be evaluated to identify the underlying cause.",
                },
              },
              {
                "@type": "Question",
                name: "Is bleeding gums always a sign of gum disease?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Not necessarily. Gum bleeding can occur for different reasons, including plaque-related inflammation, brushing technique and other factors. A dental examination is the best way to determine the cause.",
                },
              },
              {
                "@type": "Question",
                name: "Should I stop brushing if my gums bleed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "You generally should not stop maintaining oral hygiene simply because your gums bleed. However, avoid excessive brushing pressure and seek professional advice if bleeding persists.",
                },
              },
              {
                "@type": "Question",
                name: "Can scaling stop bleeding gums?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "When plaque and calculus are contributing to gum inflammation, professional cleaning may be an important part of treatment. The appropriate treatment depends on the condition of the gums.",
                },
              },
              {
                "@type": "Question",
                name: "When does gum bleeding require periodontal treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Persistent bleeding accompanied by gum recession, periodontal pockets, tooth mobility or other signs may require a detailed periodontal evaluation and appropriate treatment.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get gum bleeding treatment in Yousufguda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Gum evaluation and appropriate periodontal care are available at Dr. Bhuvan's Dental Laser & Implant Centre, located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}