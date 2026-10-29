
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Composite Gap Closure in Hyderabad | Dental Bonding",
  description:
    "Explore composite bonding for front teeth gap closure in Hyderabad. Learn about suitability, procedure, benefits and aftercare at Dr. Bhuvan's Dental Laser & Implant Centre.",
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/composite-gap-closure-hyderabad",
  },
  openGraph: {
    title: "Composite Gap Closure in Hyderabad | Dental Bonding",
    description:
      "Learn about tooth-coloured composite bonding for suitable gaps between teeth at Dr. Bhuvan's Dental Laser & Implant Centre, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com/composite-gap-closure-hyderabad",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
    locale: "en_IN",
  },
};

const benefits = [
  "Tooth-coloured material selected to blend with your smile",
  "Can be suitable for selected small gaps between teeth",
  "Often completed without laboratory-made restorations",
  "May be repairable if the composite chips or wears",
];

export default function CompositeGapClosurePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* PREMIUM HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-white to-amber-50" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
              <Sparkles size={16} />
              Cosmetic Dental Bonding
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Composite Gap Closure
              <span className="mt-2 block text-orange-600">
                For a More Confident Smile
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Notice a gap between your front teeth? Tooth-coloured
              composite bonding may help improve the appearance of
              suitable spaces by carefully adding and shaping dental
              resin to complement your natural teeth.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              At Dr. Bhuvan’s Dental Laser &amp; Implant Centre in
              Hyderabad, treatment options are discussed after assessing
              your teeth, gums, bite and smile goals.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-4 font-bold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-orange-700"
              >
                <Phone size={18} />
                Call to Enquire
              </a>

              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-800 transition hover:border-orange-300 hover:text-orange-700"
              >
                Book an Appointment
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-orange-600" />
                Individual treatment planning
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-orange-600" />
                Natural-looking shade selection
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-200/60 to-amber-100/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-orange-900/10 sm:p-4">
              <div className="flex min-h-[340px] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-orange-50 via-white to-amber-50 p-7 sm:min-h-[440px] sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-sm">
                  <Sparkles size={28} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
                    Smile Enhancement
                  </p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                    Small details.
                    <span className="block text-orange-600">
                      Thoughtful treatment.
                    </span>
                  </h2>
                  <p className="mt-4 max-w-sm leading-7 text-slate-600">
                    The goal is to improve tooth proportions while
                    respecting your natural smile and bite.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/90 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <ShieldCheck size={23} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      Assessment comes first
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      Not every gap is best treated with composite.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              Illustrative design panel. Add an authentic, consented
              clinical photo here when available.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL RELEVANCE */}
      <section className="border-y border-slate-100 bg-white px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 shrink-0 text-orange-600" size={21} />
            <div>
              <p className="font-bold text-slate-900">
                Dr. Bhuvan’s Dental Laser &amp; Implant Centre
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Ganapathi Complex, Navodaya Colony Road,
                Sri Krishna Nagar, Ameerpet–Yousufguda,
                Hyderabad, Telangana 500073.
              </p>
            </div>
          </div>

          <Link
            href="/dentist-in-yousufguda"
            className="shrink-0 font-semibold text-orange-700 hover:text-orange-800"
          >
            Explore Our Clinic →
          </Link>
        </div>
      </section>

      {/* TREATMENT BENEFITS */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Understand Your Options
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Could Composite Bonding Help Close Your Teeth Gap?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Composite bonding uses a tooth-coloured resin that can be
              shaped and polished to improve the appearance of selected
              gaps and tooth edges. It may be an option when the space,
              tooth proportions and bite are suitable.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The best approach depends on why the gap is present.
              An examination helps determine whether composite bonding,
              orthodontic treatment or another option is more appropriate.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50/60 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Potential benefits of composite bonding
            </h3>

            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-orange-600"
                  />
                  <span className="leading-7 text-slate-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-orange-200 pt-5 text-sm leading-6 text-slate-600">
              Results, treatment time and durability vary according to
              the clinical situation, material, bite and maintenance.
            </p>
          </div>
        </div>
      </section>

      
{/* COMPOSITE GAP CLOSURE ILLUSTRATION */}
<section className="bg-white px-5 py-14 sm:px-8 sm:py-18">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
        Smile Design Gallery
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        Understanding Composite Gap Closure
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Explore an illustrative visual explaining how composite bonding
        may improve the appearance of selected gaps between teeth.
        Actual treatment results vary by patient.
      </p>
    </div>

    <figure className="mt-8 overflow-hidden rounded-2xl border border-orange-100 bg-orange-50/40 p-2 shadow-lg sm:p-4">
      <img
        src="/images/composite-gap-closure-illustration.webp"
        alt="Illustration showing examples of tooth gap closure with composite bonding"
        className="h-auto w-full rounded-xl"
        width="1536"
        height="1024"
        loading="lazy"
        decoding="async"
      />

      <figcaption className="px-3 py-4 text-center text-sm leading-6 text-slate-500">
        Illustrative examples only — not actual patient photographs
        or a guarantee of treatment outcomes.
      </figcaption>
    </figure>
  </div>
</section>
{/* END COMPOSITE GAP CLOSURE ILLUSTRATION */}

      
      {/* CHUNK 2 — PROCEDURE & TREATMENT COMPARISON */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Your Treatment Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              How Is Composite Bonding Used to Close a Teeth Gap?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Composite gap closure is planned around the size of the
              space, tooth shape, gum health, bite and desired appearance.
              The exact steps vary from patient to patient.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Clinical Assessment",
                description:
                  "The dentist examines the gap, tooth proportions, gum health and bite to identify suitable treatment options.",
              },
              {
                number: "02",
                title: "Shade Selection",
                description:
                  "A suitable composite shade is selected to complement the surrounding teeth and the intended result.",
              },
              {
                number: "03",
                title: "Bonding & Shaping",
                description:
                  "Where appropriate, composite resin is carefully bonded, added and shaped to improve the appearance of the space.",
              },
              {
                number: "04",
                title: "Polishing & Bite Check",
                description:
                  "The restoration is polished and checked for contour, comfort and contact with opposing teeth.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-lg font-extrabold text-orange-700">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO MAY BE SUITABLE */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Is It Right for You?
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Who May Benefit from Composite Teeth Gap Closure?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Composite bonding may be considered for selected patients
              who have small spaces between front teeth, minor shape
              differences or small chips that can be improved with
              tooth-coloured restorative material.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              However, the cause of the gap matters. If teeth have moved
              because of gum disease, the gums should be assessed and
              periodontal health addressed before cosmetic treatment
              is planned.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50/60 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Assessment is especially important when:
            </h3>

            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              {[
                "The gap has recently appeared or is getting larger.",
                "There is bleeding, swelling, gum recession or tooth mobility.",
                "The teeth overlap or the bite places excessive force on the front teeth.",
                "The space is large or closing it with composite may make the teeth look too wide.",
                "You have a habit of biting hard objects or grinding your teeth.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Compare Your Options
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Composite Bonding vs Veneers vs Braces
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              These treatments solve different problems. The right choice
              depends on tooth position, gap size, enamel condition, bite
              and your long-term oral health goals.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-4 font-bold">Treatment</th>
                  <th className="p-4 font-bold">Main approach</th>
                  <th className="p-4 font-bold">Important consideration</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 text-slate-300">
                <tr>
                  <td className="p-4 font-semibold text-white">
                    Composite bonding
                  </td>
                  <td className="p-4">
                    Adds tooth-coloured resin to alter tooth shape and close
                    selected spaces.
                  </td>
                  <td className="p-4">
                    May chip or stain and can make teeth look wider if the
                    space is unsuitable.
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold text-white">
                    Porcelain veneers
                  </td>
                  <td className="p-4">
                    Thin restorations bonded to the front surface of teeth
                    in suitable cases.
                  </td>
                  <td className="p-4">
                    Often involves irreversible tooth preparation and needs
                    careful case selection.
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold text-white">
                    Braces or clear aligners
                  </td>
                  <td className="p-4">
                    Move teeth to improve their position and spacing.
                  </td>
                  <td className="p-4">
                    Requires an orthodontic assessment and a retention plan
                    after treatment.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            No single treatment is best for everyone. A dental examination
            helps determine which option is appropriate for your situation.
          </p>

          <div className="mt-8">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Enquire About Your Smile
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>


      {/* CHUNK 3 — LONGEVITY & AFTERCARE */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Long-Term Smile Care
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              How Long Does Composite Bonding Last?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Composite bonding can provide an attractive result, but it
              is not permanent. Its lifespan varies according to the
              material, the size and position of the restoration, biting
              forces, oral hygiene and personal habits. Regular dental
              reviews help identify wear, staining or damage early.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Protect Your Restoration
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Avoid biting fingernails, pens, ice or other hard objects
                with bonded front teeth. These habits can increase the
                risk of chipping.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Maintain Oral Hygiene
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Brush twice daily with fluoride toothpaste, clean between
                your teeth and attend professional reviews as advised.
                Composite can stain over time.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Attend Follow-Up Visits
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Your dentist can assess the restoration, gum health,
                bite and polishing needs. Report any sharp edge,
                looseness or discomfort.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COST FACTORS */}
      <section className="bg-orange-50/70 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
              Treatment Planning
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              What Determines the Cost of Composite Gap Closure?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The cost of composite bonding depends on your individual
              treatment plan. A small gap requiring limited additions may
              differ from a case involving several teeth or more complex
              reshaping.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              An examination helps establish whether composite bonding is
              suitable and whether additional treatment is needed before
              cosmetic work can begin.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Factors that can affect your treatment plan
            </h3>

            <ul className="mt-5 space-y-4">
              {[
                "Number of teeth involved",
                "Width and position of the gap",
                "Amount of shaping and polishing required",
                "Bite, tooth proportions and gum health",
                "Whether other dental or orthodontic treatment is needed",
              ].map((factor) => (
                <li key={factor} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-orange-600"
                  />
                  <span className="leading-7 text-slate-700">
                    {factor}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+918074528763"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-4 font-bold text-white transition hover:bg-orange-700 sm:w-auto"
            >
              <Phone size={18} />
              Enquire About Treatment
            </a>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section
        id="composite-gap-faqs"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Patient FAQs
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Common Questions About Composite Gap Closure
          </h2>

          <div className="mt-8 divide-y divide-slate-200">
            {[
              {
                question:
                  "Can composite bonding close a gap between front teeth?",
                answer:
                  "Yes, composite bonding can close selected gaps by adding tooth-coloured resin. Suitability depends on the gap size, tooth proportions, bite and gum health.",
              },
              {
                question:
                  "Is composite bonding better than braces for a gap?",
                answer:
                  "They serve different purposes. Bonding changes tooth shape, while braces or aligners move teeth. An assessment helps determine which approach is more appropriate.",
              },
              {
                question:
                  "Can composite bonding look natural?",
                answer:
                  "Careful shade selection, shaping and polishing can help the material blend with surrounding teeth. The result depends on the starting tooth colour, case complexity and clinical technique.",
              },
              {
                question:
                  "Can composite bonding chip or stain?",
                answer:
                  "Yes. Composite may chip, wear or stain over time. Avoiding hard biting habits, maintaining oral hygiene and attending reviews can help protect the restoration.",
              },
              {
                question:
                  "Does a gap that is getting larger need assessment?",
                answer:
                  "Yes. A changing gap can be associated with tooth movement or periodontal problems, among other causes. Arrange a dental assessment before choosing cosmetic treatment.",
              },
              {
                question:
                  "Can I visit from Banjara Hills for composite bonding?",
                answer:
                  "Patients travelling from Banjara Hills can contact our clinic to enquire about an appointment. Our clinic is located at Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, in the Ameerpet–Yousufguda area of Hyderabad.",
              },
            ].map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {faq.question}
                  <span className="shrink-0 text-xl text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
            <h3 className="text-xl font-bold sm:text-2xl">
              Ready to explore your smile options?
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Contact Dr. Bhuvan’s Dental Laser &amp; Implant Centre to
              enquire about an assessment for composite gap closure.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                <Phone size={18} />
                Call the Clinic
              </a>

              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHUNK 4 — RELATED TREATMENTS & LOCAL SEO */}
      <section className="border-t border-slate-100 bg-slate-50 px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Explore More Dental Care
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Explore Cosmetic Dentistry and Other Dental Treatments
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              If you are comparing ways to improve your smile, explore
              our related dental services. The most appropriate treatment
              depends on your teeth, gums, bite and individual goals.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cosmetic Dentistry",
                description:
                  "Explore options for improving the appearance of your smile.",
                href: "/cosmetic-dentistry-yousufguda",
              },
              {
                title: "Teeth Cleaning",
                description:
                  "Learn about professional plaque and calculus removal.",
                href: "/teeth-cleaning-yousufguda",
              },
              {
                title: "Gum Treatment",
                description:
                  "Understand assessment and care for gum health concerns.",
                href: "/gum-treatment-yousufguda",
              },
              {
                title: "Dental Implants",
                description:
                  "Explore tooth replacement options for missing teeth.",
                href: "/dental-implants-yousufguda",
              },
              {
                title: "Dentist in Ameerpet",
                description:
                  "Learn about our clinic and dental services in Ameerpet.",
                href: "/dentist-in-ameerpet",
              },
              {
                title: "Dentist in Yousufguda",
                description:
                  "Find clinic information and dental care options nearby.",
                href: "/dentist-in-yousufguda",
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-orange-700">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700">
                  Explore Service
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL LOCATION & CONTACT */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 to-orange-700 p-7 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-100">
                Dr. Bhuvan’s Dental Laser &amp; Implant Centre
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Enquire About Composite Gap Closure in Hyderabad
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-orange-50">
                Looking for a dental clinic near Banjara Hills or in the
                Ameerpet–Yousufguda area? Contact our team to enquire about
                an appointment and discuss suitable options for your smile.
              </p>

              <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-orange-50">
                <MapPin size={19} className="mt-0.5 shrink-0" />
                Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar,
                Ameerpet–Yousufguda, Hyderabad, Telangana 500073.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-orange-700 transition hover:bg-orange-50"
              >
                <Phone size={18} />
                Call the Clinic
              </a>

              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      
{/* CHUNK 5 — PATIENT REVIEWS */}
<section className="bg-orange-50/60 px-5 py-16 sm:px-8 sm:py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
        Patient Feedback
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        Patient Experiences at Dr. Bhuvan’s Dental Clinic
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Read feedback shared by patients about their dental treatment
        and experience at our clinic.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {[
        {
          name: "Gouthami Ragula",
          treatment: "Teeth Gap Filling",
          date: "17 Dec 2024",
          review:
            "I visited Dr. Bhuvan's Dental clinic for teeth gap filling. Dr. Bhuvan's was very knowledgeable and he made me feel comfortable throughout the entire process.",
        },
        {
          name: "Sruthi T",
          treatment: "Composite Filling & Teeth Cleaning",
          date: "Recent Google review",
          review:
            "I had my teeth cleaning and composite filling done at this clinic, and it was a very good experience. The doctor was very patient, gentle, and took utmost care throughout the treatment.",
        },
        {
          name: "Goda Venkataratnam",
          treatment: "Dental Care Experience",
          date: "9 May 2025",
          review:
            "The doctor makes the entire procedure look so simple and stress free. Highly recommended for people looking for professional and gentle dental care.",
        },
      ].map((item) => (
        <article
          key={item.name}
          className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-lg tracking-wider text-amber-500">
              ★★★★★
            </span>
            <span className="text-xs font-medium text-slate-500">
              Google Review
            </span>
          </div>

          <p className="mt-5 flex-1 text-sm leading-7 text-slate-700">
            “{item.review}”
          </p>

          <div className="mt-6 border-t border-slate-100 pt-4">
            <p className="font-bold text-slate-900">{item.name}</p>
            <p className="mt-1 text-sm text-orange-700">
              {item.treatment}
            </p>
            <p className="mt-2 text-xs text-slate-500">{item.date}</p>
          </div>
        </article>
      ))}
    </div>

    <p className="mt-6 text-center text-xs leading-5 text-slate-500">
      Reviews are excerpts from patient feedback shown in Google.
      Individual experiences and treatment outcomes vary.
    </p>
  </div>
</section>
{/* END CHUNK 5 */}


    </main>
  );
}
