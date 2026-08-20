import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const BASE_URL = "https://www.drbhuvandentalcare.com";

export const metadata = {
  title:
    "Cosmetic Dentistry in Yousufguda, Hyderabad | Cosmetic Dentist | Dr. Bhuvan",
  description:
    "Cosmetic dentistry in Yousufguda, Hyderabad for teeth whitening, veneers, smile makeovers and tooth-coloured restorations. Personalised cosmetic dental care by Dr. Bhuvan, MDS Periodontics.",
  keywords: [
    "cosmetic dentistry in Yousufguda",
    "cosmetic dentist in Yousufguda",
    "cosmetic dental treatment Yousufguda",
    "cosmetic dentist Ameerpet",
    "smile makeover Yousufguda",
    "teeth whitening Yousufguda",
    "dental veneers Yousufguda",
    "cosmetic dental clinic near Yousufguda",
    "smile design Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/cosmetic-dentistry-yousufguda`,
  },
  openGraph: {
    title: "Cosmetic Dentistry in Yousufguda, Hyderabad",
    description:
      "Personalised cosmetic dental care including teeth whitening, veneers, smile makeovers and tooth-coloured restorations in Yousufguda, Hyderabad.",
    url: `${BASE_URL}/cosmetic-dentistry-yousufguda`,
    type: "website",
  },
};

const faqs = [
  {
    question: "What is cosmetic dentistry?",
    answer:
      "Cosmetic dentistry focuses on improving the appearance of teeth and the overall smile. Depending on the patient's needs, treatment may include teeth whitening, veneers, tooth-coloured restorations and other smile-enhancing procedures.",
  },
  {
    question: "What cosmetic dental treatments are available in Yousufguda?",
    answer:
      "Depending on the individual case, cosmetic dental treatment may include teeth whitening, dental veneers, smile makeover planning, tooth-coloured restorations and other appropriate cosmetic procedures.",
  },
  {
    question: "Can I get a smile makeover in Yousufguda?",
    answer:
      "Yes. A smile makeover can be planned based on your teeth, gums, facial proportions, existing restorations and personal expectations. The final treatment plan depends on your individual dental examination.",
  },
  {
    question: "Is teeth whitening suitable for everyone?",
    answer:
      "Teeth whitening is not suitable in exactly the same way for every patient. A dental examination can help identify the cause of tooth discolouration and determine whether whitening is appropriate.",
  },
  {
    question: "What are dental veneers?",
    answer:
      "Dental veneers are thin restorations designed to improve the appearance of selected teeth. They may be considered for concerns such as certain changes in tooth shape, colour or appearance after an appropriate dental assessment.",
  },
  {
    question: "How much does cosmetic dentistry cost in Yousufguda?",
    answer:
      "Cosmetic dental treatment costs vary depending on the procedure, number of teeth involved, materials selected and individual treatment requirements. A consultation is needed to provide a personalised treatment plan and estimate.",
  },
];

export default function CosmeticDentistryYousufguda() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#09111f]">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-24 lg:grid-cols-2 lg:py-28">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              <Sparkles className="h-4 w-4" />
              Smile & Cosmetic Dentistry
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">

              Cosmetic Dentistry in

              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Enhance the appearance of your smile with personalised
              cosmetic dental care designed around your teeth, facial
              features and individual smile goals.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              From teeth whitening and veneers to smile makeover planning
              and tooth-coloured restorations, every treatment begins with
              understanding your specific dental needs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-2xl"
              >
                Book Smile Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call +91 80745 28763
              </a>

            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-400">
              <span>✓ Smile Makeover</span>
              <span>✓ Teeth Whitening</span>
              <span>✓ Personalised Planning</span>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-8 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex items-center justify-between">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-5xl">
                    ✨
                  </div>

                  <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-orange-600">
                    Cosmetic Dentistry
                  </span>

                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Smile • Balance • Confidence
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900">
                  Personalised Smile Enhancement
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Thoughtful cosmetic treatment planning focused on
                  natural-looking and harmonious smile results.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">😁</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Smile Design
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">✨</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Cosmetic Care
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BREADCRUMB
      ========================================================= */}

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
                Dental Treatments in Yousufguda
              </Link>
            </li>

            <li className="text-gray-300">/</li>

            <li className="font-bold text-orange-600">
              Cosmetic Dentistry
            </li>

          </ol>

        </div>
      </nav>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="bg-white px-6 py-20 md:py-24">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Understanding Cosmetic Dentistry
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
            What Is Cosmetic Dentistry?
          </h2>

          <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
            Cosmetic dentistry focuses on improving the appearance of the
            smile while considering the health, function and overall
            harmony of the teeth and gums.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Depending on your concerns, cosmetic treatment may involve
            whitening, veneers, tooth-coloured restorations or a
            personalised smile makeover plan.
          </p>

        </div>

      </section>


      {/* =========================================================
          COSMETIC TREATMENTS
      ========================================================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Our Cosmetic Services
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Cosmetic Dental Treatments in
              <span className="block text-orange-600">
                Yousufguda
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Cosmetic treatment is planned according to your smile,
              dental condition and personal expectations.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: "✨",
                title: "Teeth Whitening",
                text:
                  "Professional whitening may help improve certain types of tooth discolouration and brighten the appearance of your smile.",
              },
              {
                icon: "🦷",
                title: "Dental Veneers",
                text:
                  "Veneers may be considered for selected teeth to improve aspects of their colour, shape or overall appearance.",
              },
              {
                icon: "😁",
                title: "Smile Makeover",
                text:
                  "A personalised smile makeover combines appropriate cosmetic treatments to create a balanced treatment plan for your smile.",
              },
              {
                icon: "🎨",
                title: "Smile Design",
                text:
                  "Smile design considers tooth proportions, gum appearance and overall facial harmony while planning cosmetic treatment.",
              },
              {
                icon: "🪥",
                title: "Tooth-Coloured Restorations",
                text:
                  "Tooth-coloured restorative options can help improve the appearance of teeth affected by certain cavities, fractures or old restorations.",
              },
              {
                icon: "💎",
                title: "Cosmetic Treatment Planning",
                text:
                  "A detailed assessment helps identify suitable cosmetic options and create a treatment plan based on your individual goals.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group rounded-[2rem] border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-2xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHO CAN BENEFIT
      ========================================================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                Is Cosmetic Dentistry Right for You?
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                Smile Concerns We Can Evaluate
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                If you are unhappy with certain aspects of your smile,
                a dental evaluation can help identify the available
                treatment options.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Stained or discoloured teeth",
                "Uneven-looking teeth",
                "Certain gaps between teeth",
                "Chipped or worn teeth",
                "Old visible restorations",
                "Unbalanced tooth appearance",
                "Concerns about tooth shape",
                "Desire for a brighter smile",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50 p-5"
                >

                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                  <span className="font-semibold leading-7 text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SMILE MAKEOVER
      ========================================================= */}

      <section className="bg-[#09111f] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="rounded-full bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                Personalised Smile Planning
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                A Smile Makeover Starts With a Plan
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Cosmetic dentistry should not be about changing every
                tooth. The right treatment focuses on understanding your
                smile and selecting only the procedures that are
                appropriate for your needs.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Your dentist may assess tooth colour, shape, alignment,
                gum appearance, existing restorations and overall smile
                proportions before recommending treatment.
              </p>

            </div>


            <div className="space-y-4">

              {[
                [
                  "01",
                  "Understand Your Concern",
                  "Discuss what you would like to improve about your smile."
                ],
                [
                  "02",
                  "Assess Your Dental Health",
                  "Evaluate teeth, gums and existing dental conditions."
                ],
                [
                  "03",
                  "Discuss Treatment Options",
                  "Explore suitable cosmetic procedures for your case."
                ],
                [
                  "04",
                  "Create a Personalised Plan",
                  "Choose a treatment approach based on your needs and goals."
                ],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="flex gap-5 rounded-3xl border border-white/10 bg-white/[0.05] p-6"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 font-black text-white">
                    {number}
                  </div>

                  <div>

                    <h3 className="font-black text-white">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          NATURAL LOOKING RESULTS
      ========================================================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Treatment Philosophy
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Cosmetic Dentistry With a Natural Approach
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A beautiful smile should also look natural and work
              comfortably with your existing teeth and facial features.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              [
                "🎯",
                "Proportion",
                "Treatment planning considers tooth proportions and the overall appearance of your smile."
              ],
              [
                "🌿",
                "Natural Appearance",
                "The goal is to create an appearance that complements your individual features."
              ],
              [
                "🦷",
                "Dental Health",
                "Cosmetic treatment should be planned alongside appropriate dental and gum health considerations."
              ],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className="rounded-[2rem] bg-white p-8 shadow-lg"
              >

                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="mt-6 text-2xl font-black text-gray-900">
                  {title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Why Choose Dr. Bhuvan&apos;s Dental Laser & Implant Centre?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Personalised treatment planning supported by modern dental
              technology and comprehensive dental care.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "😁",
                "Smile-Focused Planning",
                "Cosmetic treatment is planned around your individual smile concerns and expectations."
              ],
              [
                "🩺",
                "Periodontal Expertise",
                "Healthy gums are an important part of a balanced and attractive smile."
              ],
              [
                "🎯",
                "Personalised Care",
                "Treatment recommendations are based on your individual dental condition."
              ],
              [
                "🔬",
                "Modern Technology",
                "Contemporary dental technology supports diagnosis and treatment planning."
              ],
              [
                "🤝",
                "Patient-Centred Approach",
                "Clear communication helps you understand your options before treatment."
              ],
              [
                "🦷",
                "Comprehensive Dentistry",
                "Cosmetic care can be planned alongside other dental and periodontal treatments when required."
              ],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className="rounded-3xl border border-orange-100 bg-orange-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="text-3xl">
                  {icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
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


      {/* =========================================================
          LOCAL SEO
      ========================================================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2.5rem] bg-[#09111f] p-8 shadow-2xl md:p-12">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <span className="rounded-full bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                  Local Cosmetic Dentistry
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Cosmetic Dentist Near
                  <span className="block text-orange-400">
                    Yousufguda & Ameerpet
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Patients from Yousufguda and nearby neighbourhoods can
                  access personalised cosmetic dental care at Dr. Bhuvan&apos;s
                  Dental Laser & Implant Centre.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  {[
                    "Yousufguda",
                    "Navodaya Colony",
                    "Sri Krishna Nagar",
                    "Ameerpet",
                    "Madhura Nagar",
                    "Yellareddyguda",
                    "Srinagar Colony",
                    "SR Nagar",
                    "Vengal Rao Nagar",
                    "Jubilee Hills",
                    "Banjara Hills",
                    "Borabanda",
                    "Rehamath Nagar",
                  ].map((area) => (

                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300"
                    >
                      {area}
                    </span>

                  ))}

                </div>

              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7">

                <div className="flex items-start gap-4">

                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-orange-400" />

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Clinic Location
                    </p>

                    <p className="mt-2 leading-7 text-slate-200">
                      Ganapathi Complex, Navodaya Colony Road,
                      Sri Krishna Nagar, Ameerpet, Yousufguda,
                      Hyderabad, Telangana 500073
                    </p>

                  </div>

                </div>


                <div className="my-6 h-px bg-white/10" />


                <div className="flex items-start gap-4">

                  <Clock className="mt-1 h-6 w-6 shrink-0 text-orange-400" />

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


                <a
                  href="tel:+918074528763"
                  className="mt-7 flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-400"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call +91 80745 28763
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RELATED TREATMENTS
      ========================================================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Related Dental Care
            </span>

            <h2 className="mt-6 text-3xl font-black text-gray-900 md:text-4xl">
              Explore Related Dental Treatments
            </h2>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* LASER */}

            <Link
              href="/laser-dentistry-yousufguda"
              className="group rounded-3xl border border-orange-100 bg-orange-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-4xl">
                ⚡
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Laser Dentistry
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Modern laser-assisted care for selected gum and soft-tissue
                dental procedures.
              </p>

              <div className="mt-5 flex items-center gap-2 font-bold text-orange-600">
                Explore Laser Dentistry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>

            </Link>


            {/* GUM */}

            <Link
              href="/gum-treatment-yousufguda"
              className="group rounded-3xl border border-orange-100 bg-orange-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-4xl">
                🩺
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Gum Treatment
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Comprehensive periodontal care for bleeding, inflammation,
                recession and other gum concerns.
              </p>

              <div className="mt-5 flex items-center gap-2 font-bold text-orange-600">
                Explore Gum Care
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>

            </Link>


            {/* DENTAL IMPLANTS */}

            <Link
              href="/dental-implants-yousufguda"
              className="group rounded-3xl border border-orange-100 bg-orange-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-4xl">
                🦷
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Dental Implants
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Implant solutions for replacing missing teeth and restoring
                function and confidence.
              </p>

              <div className="mt-5 flex items-center gap-2 font-bold text-orange-600">
                Explore Dental Implants
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>

            </Link>


            {/* ALL TREATMENTS */}

            <Link
              href="/dental-treatments-yousufguda"
              className="group rounded-3xl border border-orange-100 bg-orange-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-4xl">
                🦷
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                All Dental Treatments
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Explore comprehensive dental treatments available in
                Yousufguda and nearby areas.
              </p>

              <div className="mt-5 flex items-center gap-2 font-bold text-orange-600">
                Explore All Treatments
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
              Cosmetic Dentistry in Yousufguda
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Common questions about cosmetic dental treatment and smile
              enhancement.
            </p>

          </div>


          <div className="mt-12 space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-white open:shadow-lg"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-bold text-gray-900">

                  <span>
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl text-white transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>

                </summary>

                <div className="border-t border-orange-100 px-6 pb-6 pt-5">

                  <p className="leading-8 text-gray-600">
                    {faq.answer}
                  </p>

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-20 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl">
            ✨
          </div>

          <h2 className="mt-6 text-3xl font-black md:text-5xl">
            Looking for Cosmetic Dentistry in Yousufguda?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Book a consultation to discuss your smile concerns and explore
            cosmetic dental treatment options suitable for you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/#appointment"
              className="rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
            >
              Book Appointment
            </Link>

            <a
              href="tel:+918074528763"
              className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />


      {/* =========================================================
          SERVICE SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cosmetic Dentistry in Yousufguda",
            serviceType: "Cosmetic Dentistry",
            description:
              "Personalised cosmetic dental care including teeth whitening, dental veneers, smile makeover planning and tooth-coloured restorations.",
            url: `${BASE_URL}/cosmetic-dentistry-yousufguda`,
            provider: {
              "@type": "Dentist",
              name: "Dr. Bhuvan's Dental Laser & Implant Centre",
              url: BASE_URL,
              telephone: "+918074528763",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500073",
                addressCountry: "IN",
              },
            },
            areaServed: [
              {
                "@type": "Place",
                name: "Yousufguda",
              },
              {
                "@type": "Place",
                name: "Ameerpet",
              },
              {
                "@type": "Place",
                name: "Srinagar Colony",
              },
              {
                "@type": "Place",
                name: "Madhura Nagar",
              },
            ],
          }),
        }}
      />


      {/* =========================================================
          BREADCRUMB SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${BASE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Dental Treatments in Yousufguda",
                item: `${BASE_URL}/dental-treatments-yousufguda`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Cosmetic Dentistry",
                item: `${BASE_URL}/cosmetic-dentistry-yousufguda`,
              },
            ],
          }),
        }}
      />

    </main>
  );
}