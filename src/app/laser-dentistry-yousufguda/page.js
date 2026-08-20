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
    "Laser Dentistry in Yousufguda, Hyderabad | Laser Dentist | Dr. Bhuvan",
  description:
    "Advanced laser dentistry in Yousufguda, Hyderabad for gum treatment, frenectomy, crown lengthening and selected soft-tissue procedures. Consult Dr. Bhuvan, MDS Periodontics.",
  keywords: [
    "laser dentistry in Yousufguda",
    "laser dentist in Yousufguda",
    "laser dental treatment Yousufguda",
    "laser dentistry Hyderabad",
    "laser gum treatment Yousufguda",
    "laser dental clinic near Yousufguda",
    "laser gum surgery Yousufguda",
    "laser dentistry Ameerpet",
    "laser periodontal treatment Yousufguda",
  ],
  alternates: {
    canonical: `${BASE_URL}/laser-dentistry-yousufguda`,
  },
  openGraph: {
    title: "Laser Dentistry in Yousufguda, Hyderabad",
    description:
      "Advanced laser dentistry and soft-tissue dental procedures in Yousufguda, Hyderabad at Dr. Bhuvan's Dental Laser & Implant Centre.",
    url: `${BASE_URL}/laser-dentistry-yousufguda`,
    type: "website",
  },
};

const faqs = [
  {
    question: "What is laser dentistry?",
    answer:
      "Laser dentistry uses focused light energy for selected dental procedures, particularly certain soft-tissue treatments. The suitability of laser treatment depends on the procedure and the patient's individual dental condition.",
  },
  {
    question: "What laser dental treatments are available in Yousufguda?",
    answer:
      "Laser dentistry may be used for selected procedures such as gum treatments, frenectomy, crown lengthening and other appropriate soft-tissue procedures. Your dentist will determine whether laser treatment is suitable for your condition.",
  },
  {
    question: "Is laser dentistry painful?",
    answer:
      "Patient comfort varies depending on the procedure and individual sensitivity. Laser treatment can offer advantages in suitable soft-tissue procedures, but the experience and need for anaesthesia depend on the specific treatment.",
  },
  {
    question: "Does laser dentistry reduce bleeding?",
    answer:
      "For suitable soft-tissue procedures, laser technology may help with blood-vessel coagulation and can reduce bleeding compared with some conventional techniques. Results depend on the procedure and individual factors.",
  },
  {
    question: "Is laser dentistry better than conventional dental treatment?",
    answer:
      "Laser dentistry is not automatically better for every dental procedure. It is an additional technology that may offer advantages for selected treatments. The appropriate technique depends on the patient's diagnosis and treatment requirements.",
  },
  {
    question: "Where can I get laser dentistry in Yousufguda?",
    answer:
      "Laser dental care is available at Dr. Bhuvan's Dental Laser & Implant Centre at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
  },
];

export default function LaserDentistryYousufguda() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#09111f]">

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-24 lg:grid-cols-2 lg:py-28">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              <Sparkles className="h-4 w-4" />
              Advanced Dental Technology
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">

              Laser Dentistry in

              <span className="block text-orange-400">
                Yousufguda, Hyderabad
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Experience modern laser dentistry for selected gum and
              soft-tissue procedures with a focus on precision, patient
              comfort and personalised dental care.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
              laser-assisted dental care based on your individual treatment
              requirements and clinical condition.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-2xl"
              >
                Book Laser Consultation
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
              <span>✓ Laser Gum Care</span>
              <span>✓ Soft-Tissue Procedures</span>
              <span>✓ Personalised Treatment</span>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -inset-8 rounded-[3rem] bg-orange-500/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <div className="rounded-[2rem] bg-white p-7 md:p-9">

                <div className="flex items-center justify-between">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-5xl">
                    ⚡
                  </div>

                  <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-orange-600">
                    Laser Dentistry
                  </span>

                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                  Precision • Comfort • Modern Care
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900">
                  Modern Laser-Assisted Dental Care
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Advanced technology for selected gum and soft-tissue
                  procedures where laser treatment is clinically appropriate.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">🎯</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Precision
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4">
                    <p className="text-2xl">✨</p>
                    <p className="mt-2 text-sm font-bold text-gray-800">
                      Modern Care
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
              Laser Dentistry
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
            Understanding Laser Dentistry
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
            What Is Laser Dentistry?
          </h2>

          <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
            Laser dentistry uses concentrated light energy for selected
            dental procedures. It is particularly useful in certain
            soft-tissue and gum treatments where precise tissue management
            is required.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Laser treatment is not required for every dental procedure.
            After examining your teeth and gums, the dentist can determine
            whether laser-assisted treatment is appropriate for your
            specific condition.
          </p>

        </div>

      </section>


      {/* =========================================================
          TREATMENTS
      ========================================================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Laser Applications
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Laser Dental Treatments We Provide
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Laser technology can be used for selected procedures depending
              on your diagnosis and treatment requirements.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: "🩺",
                title: "Laser Gum Treatment",
                text:
                  "Laser-assisted care may be used for selected gum and periodontal procedures where precise soft-tissue management is required.",
              },
              {
                icon: "👅",
                title: "Frenectomy",
                text:
                  "Laser-assisted frenectomy can be considered for selected patients when an unusually tight or restrictive frenum requires treatment.",
              },
              {
                icon: "🦷",
                title: "Crown Lengthening",
                text:
                  "Laser technology may be used in suitable soft-tissue crown-lengthening procedures to reshape the gumline as part of a planned dental treatment.",
              },
              {
                icon: "✨",
                title: "Soft-Tissue Procedures",
                text:
                  "Selected soft-tissue dental procedures can benefit from the precision and tissue-management capabilities of laser technology.",
              },
              {
                icon: "🔬",
                title: "Periodontal Applications",
                text:
                  "Laser-assisted periodontal care may be considered as part of a comprehensive treatment plan for suitable gum conditions.",
              },
              {
                icon: "🎯",
                title: "Precision-Focused Care",
                text:
                  "Where clinically appropriate, laser technology can support precise treatment while helping the dentist manage soft tissues effectively.",
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
          BENEFITS
      ========================================================= */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                Why Laser Technology?
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                Potential Advantages of Laser Dentistry
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                For suitable procedures, laser technology may provide
                advantages in tissue management. The benefits depend on the
                treatment being performed and individual patient factors.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                [
                  "🎯",
                  "Precision",
                  "Focused energy can help the dentist manage selected soft tissues precisely."
                ],
                [
                  "🩸",
                  "Bleeding Control",
                  "Certain laser procedures may help with coagulation and bleeding control."
                ],
                [
                  "✨",
                  "Patient Comfort",
                  "Some suitable laser procedures may provide a comfortable treatment experience."
                ],
                [
                  "⚡",
                  "Efficient Treatment",
                  "Laser technology can support efficient management of selected procedures."
                ],
                [
                  "🧼",
                  "Clean Treatment Field",
                  "Laser-assisted soft-tissue procedures can help with tissue management during treatment."
                ],
                [
                  "🌿",
                  "Healing Considerations",
                  "Some patients may experience favourable soft-tissue healing after suitable laser procedures."
                ],
              ].map(([icon, title, text]) => (

                <div
                  key={title}
                  className="rounded-3xl border border-orange-100 bg-orange-50 p-6"
                >

                  <div className="text-3xl">
                    {icon}
                  </div>

                  <h3 className="mt-4 text-lg font-black text-gray-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHEN LASER MAY BE RECOMMENDED
      ========================================================= */}

      <section className="bg-[#09111f] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="rounded-full bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                Treatment Planning
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                When May Laser Dentistry Be Recommended?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Laser treatment is selected based on the clinical situation.
                It may be considered when precise soft-tissue management is
                beneficial for the planned procedure.
              </p>

            </div>


            <div className="space-y-4">

              {[
                "Selected gum and periodontal procedures",
                "Certain frenectomy procedures",
                "Suitable crown-lengthening procedures",
                "Selected soft-tissue dental treatments",
                "Cases where precise tissue management is beneficial",
                "Patients who may benefit from a minimally invasive approach",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                >

                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-400" />

                  <p className="leading-7 text-slate-200">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          LASER VS CONVENTIONAL
      ========================================================= */}

      <section className="bg-orange-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              Making the Right Choice
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Laser Dentistry vs Conventional Treatment
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Laser technology is an additional treatment option rather than
              a replacement for every conventional dental procedure.
            </p>

          </div>


          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[2rem] bg-white p-8 shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white">
                ⚡
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Where Laser May Offer Advantages
              </h3>

              <div className="mt-6 space-y-4">

                {[
                  "Selected soft-tissue procedures",
                  "Precise tissue management",
                  "Potential bleeding control",
                  "Modern technology-assisted care",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>

                ))}

              </div>

            </div>


            <div className="rounded-[2rem] bg-[#09111f] p-8 text-white shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl">
                🦷
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Why Diagnosis Still Comes First
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Not every dental condition requires a laser. The dentist
                should first understand the diagnosis, treatment goals and
                individual factors before selecting the most appropriate
                technique.
              </p>

              <div className="mt-6 rounded-2xl bg-white/5 p-5">
                <p className="font-bold text-orange-300">
                  The right technology is the one that is appropriate for
                  the right clinical situation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY DR BHUVAN
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
              Modern technology combined with periodontal expertise and
              personalised treatment planning.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "🩺",
                "Periodontal Expertise",
                "Treatment planning with a strong focus on gum and periodontal health."
              ],
              [
                "⚡",
                "Laser Dentistry",
                "Modern laser technology for selected dental and soft-tissue procedures."
              ],
              [
                "🎯",
                "Personalised Planning",
                "Treatment recommendations are based on your clinical condition and goals."
              ],
              [
                "🔬",
                "Modern Technology",
                "A technology-focused approach to contemporary dental care."
              ],
              [
                "🤝",
                "Patient-Focused Care",
                "Clear communication and a treatment approach designed around individual needs."
              ],
              [
                "🦷",
                "Comprehensive Dentistry",
                "Access to implants, gum care and other dental treatments under one roof."
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
                  Local Laser Dentistry
                </span>

                <h2 className="mt-6 text-3xl font-black text-white md:text-4xl">
                  Laser Dentistry Near
                  <span className="block text-orange-400">
                    Yousufguda & Ameerpet
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Patients from Yousufguda and nearby neighbourhoods can
                  access modern laser-assisted dental care at Dr. Bhuvan&apos;s
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

  {/* GUM TREATMENT */}
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
      Comprehensive gum and periodontal care for inflammation,
      recession and other gum concerns.
    </p>

    <div className="mt-5 flex items-center gap-2 font-bold text-orange-600">
      Explore Gum Care
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </div>
  </Link>


  {/* GUM BLEEDING */}
  <Link
    href="/gum-bleeding-treatment-yousufguda"
    className="group rounded-3xl border border-orange-100 bg-orange-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="text-4xl">
      🩸
    </div>

    <h3 className="mt-5 text-xl font-black text-gray-900">
      Gum Bleeding Treatment
    </h3>

    <p className="mt-3 leading-7 text-gray-600">
      Evaluation for persistent bleeding, swollen gums and other
      periodontal symptoms.
    </p>

    <div className="mt-5 flex items-center gap-2 font-bold text-orange-600">
      Explore Gum Care
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </div>
  </Link>


  {/* TEETH CLEANING */}
  <Link
    href="/teeth-cleaning-ameerpet"
    className="group rounded-3xl border border-orange-100 bg-orange-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="text-4xl">
      🪥
    </div>

    <h3 className="mt-5 text-xl font-black text-gray-900">
      Teeth Cleaning
    </h3>

    <p className="mt-3 leading-7 text-gray-600">
      Professional scaling and polishing to help remove plaque,
      tartar and surface stains.
    </p>

    <div className="mt-5 flex items-center gap-2 font-bold text-orange-600">
      Explore Teeth Cleaning
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
              Laser Dentistry in Yousufguda
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Common questions about laser-assisted dental treatment.
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
            ⚡
          </div>

          <h2 className="mt-6 text-3xl font-black md:text-5xl">
            Looking for Laser Dentistry in Yousufguda?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Schedule a consultation to understand whether laser-assisted
            dental treatment is appropriate for your teeth and gums.
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
                name: "Laser Dentistry",
                item: `${BASE_URL}/laser-dentistry-yousufguda`,
              },
            ],
          }),
        }}
      />

    </main>
  );
}