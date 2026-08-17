import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle,
  Phone,
  Star,
} from "lucide-react";

export const metadata = {
  title:
    "Root Canal Treatment in Yousufguda, Hyderabad | Dr. Bhuvan",
  description:
    "Professional root canal treatment in Yousufguda, Hyderabad at Dr. Bhuvan's Dental Laser & Implant Centre. Treatment for infected or damaged teeth with personalized dental care.",
};

export default function RootCanalTreatmentYousufgudaPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">

        {/* Background Effects */}

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">

          {/* LEFT */}

<div className="max-w-2xl">

  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur sm:text-sm">
    <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
    Root Canal & Restorative Dental Care
  </div>

  <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
    Root Canal Treatment in
    <span className="mt-1 block text-white">
      Yousufguda, Hyderabad
    </span>
  </h1>

  <p className="mt-7 max-w-xl text-base leading-7 text-orange-50 sm:text-lg sm:leading-8">
    Get professional evaluation and treatment for painful, infected or
    damaged teeth with personalized dental care at
    <span className="font-bold text-white">
      {" "}Dr. Bhuvan&apos;s Dental Laser & Implant Centre.
    </span>
  </p>

  {/* TRUST POINTS */}

  <div className="mt-7 space-y-3">

    <div className="flex items-start gap-3 text-sm font-medium text-orange-50 sm:text-base">
      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" />
      <span>Professional dental evaluation & diagnosis</span>
    </div>

    <div className="flex items-start gap-3 text-sm font-medium text-orange-50 sm:text-base">
      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" />
      <span>Modern root canal treatment techniques</span>
    </div>

    <div className="flex items-start gap-3 text-sm font-medium text-orange-50 sm:text-base">
      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" />
      <span>Personalized care focused on your comfort</span>
    </div>

  </div>

  {/* CTA BUTTONS */}

  <div className="mt-9 flex flex-col gap-3 sm:flex-row">

    <a
      href="/#appointment"
      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50 sm:px-8 sm:text-base"
    >
      📅 Book Appointment
    </a>

    <a
      href="tel:+918074528763"
      className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-orange-600 sm:px-8 sm:text-base"
    >
      📞 Call Now
    </a>

  </div>

</div>
          {/* RIGHT — DOCTOR IMAGE */}

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10 overflow-hidden rounded-3xl bg-white/10 p-4 shadow-2xl backdrop-blur">

              <Image
                src="/doctor.webp"
                alt="Dr Bhuvanesh Yanamala - Dentist in Yousufguda Hyderabad"
                width={650}
                height={850}
                priority
                className="mx-auto max-h-[620px] w-full rounded-2xl object-cover object-top"
              />

            </div>

          </div>

        </div>

      </section>

{/* ================= SIGNS YOU MAY NEED ROOT CANAL ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
        Know The Warning Signs
      </span>

      <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight text-gray-900 md:text-5xl">
  When Do You Need Root Canal Treatment?
</h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
  Persistent tooth pain or sensitivity should not be ignored. These
  symptoms can have different causes, so a dental examination is
  important to determine the right treatment.
</p>

    </div>

    {/* SYMPTOM CARDS */}

    <div className="mt-14 grid gap-6 sm:gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">

      {/* CARD 1 */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🦷
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6 sm:text-2xl">
          Severe Toothache
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          Persistent or intense tooth pain, especially when chewing or
          biting, may indicate a problem that needs dental evaluation.
        </p>

      </div>

      {/* CARD 2 */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🧊
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6 sm:text-2xl">
          Hot & Cold Sensitivity
        </h3>

       <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          Sensitivity to hot or cold foods that lingers after the stimulus
          is removed may require professional assessment.
        </p>

      </div>

      {/* CARD 3 */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          😣
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6 sm:text-2xl">
          Pain While Biting
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          Pain when biting or chewing can have several causes and should
          be examined to identify the source.
        </p>

      </div>

      {/* CARD 4 */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🕳️
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6 sm:text-2xl">
          Deep Tooth Decay
        </h3>

       <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          Extensive tooth decay can affect the inner pulp of a tooth and
          may require root canal treatment depending on the diagnosis.
        </p>

      </div>

      {/* CARD 5 */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🔴
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6 sm:text-2xl">
          Swelling Near the Tooth
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          Swelling around a tooth or gum may indicate an infection and
          needs prompt dental evaluation.
        </p>

      </div>

      {/* CARD 6 */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🦷
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6 sm:text-2xl">
          Darkened or Discoloured Tooth
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          A tooth that becomes noticeably darker or changes colour may
          need examination to determine the underlying cause.
        </p>

      </div>

    </div>

   {/* IMPORTANT NOTE */}

<div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-orange-200 bg-orange-50 p-6 shadow-sm sm:mt-14 sm:p-7 md:p-9">

  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-black text-white shadow-md">
      !
    </div>

    <div>

      <h3 className="text-xl font-black leading-tight text-gray-900 sm:text-2xl">
        Not every toothache needs a root canal
      </h3>

      <p className="mt-3 text-base leading-7 text-gray-600 sm:leading-8">
        Tooth pain and sensitivity can have many possible causes.
        A clinical examination and appropriate dental investigations
        help determine whether root canal treatment or another
        treatment is appropriate.
      </p>

    </div>

  </div>

</div>
  </div>

</section>
{/* ================= WHAT IS ROOT CANAL TREATMENT ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

  <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
    Understanding RCT
  </span>

  <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
    What Is Root Canal Treatment?
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
    Root canal treatment is a dental procedure used to treat a tooth
    when the soft tissue inside the tooth, known as the pulp, becomes
    inflamed or infected.
  </p>

</div>

    {/* MAIN CONTENT */}

    <div className="mt-14 grid items-center gap-10 sm:gap-12 lg:mt-16 lg:grid-cols-2">

      {/* LEFT - VISUAL */}

      <div className="relative">

        <div className="absolute -inset-4 rounded-[3rem] bg-orange-200/50 blur-2xl"></div>

        <div className="relative rounded-[2.5rem] bg-white p-6 shadow-2xl sm:p-8 md:p-10">

          <div className="text-center">

           <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-orange-100 text-6xl sm:h-32 sm:w-32 sm:text-7xl">
  🦷
</div>

            <h3 className="mt-8 text-2xl font-black text-gray-900">
              Save the Natural Tooth
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
  When a tooth is restorable, root canal treatment can help treat the
  infected or inflamed pulp while allowing the natural tooth to remain
  in place.
</p>

          </div>

         {/* SIMPLE FLOW */}

<div className="mt-9 flex items-center justify-center gap-2 sm:mt-10 sm:gap-3">

  <div className="min-w-0 flex-1 rounded-2xl bg-orange-50 px-3 py-4 text-center sm:px-5">
    <div className="text-2xl sm:text-3xl">🦷</div>
    <p className="mt-2 text-xs font-bold text-gray-800 sm:text-sm">
      Tooth
    </p>
  </div>

  <div className="shrink-0 text-lg font-bold text-orange-500 sm:text-2xl">
    →
  </div>

  <div className="min-w-0 flex-1 rounded-2xl bg-orange-50 px-3 py-4 text-center sm:px-5">
    <div className="text-2xl sm:text-3xl">🧹</div>
    <p className="mt-2 text-xs font-bold text-gray-800 sm:text-sm">
      Clean
    </p>
  </div>

  <div className="shrink-0 text-lg font-bold text-orange-500 sm:text-2xl">
    →
  </div>

  <div className="min-w-0 flex-1 rounded-2xl bg-orange-50 px-3 py-4 text-center sm:px-5">
    <div className="text-2xl sm:text-3xl">🔒</div>
    <p className="mt-2 text-xs font-bold text-gray-800 sm:text-sm">
      Seal
    </p>
  </div>

</div>
        </div>

      </div>

      {/* RIGHT - EXPLANATION */}

      <div>

        <h3 className="text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-4xl">
          What happens inside the tooth?
        </h3>

       <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-9">
          A tooth contains an inner space that houses the pulp, which
          contains nerves and blood vessels. Deep decay, cracks, trauma or
          other problems can sometimes affect this tissue.
        </p>

        <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-9">
          During root canal treatment, the affected pulp is carefully
          removed, the root canal system is cleaned and shaped, and the
          space is then filled and sealed.
        </p>

        {/* POINTS */}

        <div className="mt-9 space-y-6 sm:mt-10">

          <div className="flex items-start gap-4">

           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm">
              1
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Treat the affected pulp
              </h4>

              <p className="mt-1 text-base leading-7 text-gray-600">
                The inflamed or infected pulp is removed from the tooth.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm">
              2
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Clean and shape the canals
              </h4>

             <p className="mt-1 text-base leading-7 text-gray-600">
                The internal canal space is cleaned and prepared for filling.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm">
              3
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Fill and seal
              </h4>

              <p className="mt-1 text-base leading-7 text-gray-600">
                The cleaned canal space is filled and sealed to help prevent
                further contamination.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm">
              4
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Restore the tooth
              </h4>

              <p className="mt-1 text-base leading-7 text-gray-600">
                Depending on the tooth and its remaining structure, a
                suitable restoration or crown may be recommended.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

    {/* BOTTOM TRUST NOTE */}

    <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-white p-6 text-center shadow-lg sm:mt-16 sm:p-7">

  <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        <span className="font-bold text-orange-600">
          The goal of root canal treatment is to treat the affected tooth
          while preserving it whenever the tooth is suitable for restoration.
        </span>
      </p>

    </div>

  </div>

</section>
{/* ================= ROOT CANAL TREATMENT PROCEDURE ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

  <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
    Treatment Process
  </span>

  <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
    Root Canal Treatment Procedure
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
    Your treatment plan depends on the condition of the tooth. A typical
    root canal treatment involves evaluation, cleaning of the canal
    system and restoration of the tooth.
  </p>

</div>

    {/* TIMELINE */}

    <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">

      {/* CENTER LINE - DESKTOP */}

      <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-orange-100 md:block"></div>

      <div className="space-y-10 sm:space-y-12">

        {/* STEP 1 */}

        <div className="relative grid items-center gap-5 sm:gap-7 md:grid-cols-2 md:gap-8">

          <div className="text-left md:pr-16 md:text-right">

           <span className="text-xs font-black uppercase tracking-widest text-orange-500 sm:text-sm">
              Step 01
            </span>

            <h3 className="mt-2 text-xl font-black leading-tight text-gray-900 sm:text-2xl">
              Examination & X-Ray
            </h3>

            <p className="mt-3 text-base leading-7 text-gray-600 sm:leading-8">
              The tooth is examined and appropriate dental imaging may be
              used to understand the condition of the tooth and surrounding
              structures.
            </p>

          </div>

          <div className="relative md:pl-16">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl shadow-xl md:absolute md:-left-10 md:top-1/2 md:-translate-y-1/2">
              🔎
            </div>

            <div className="mt-4 rounded-3xl bg-orange-50 p-6 shadow-lg md:hidden">
              <p className="leading-7 text-gray-600">
                Detailed evaluation helps determine whether root canal
                treatment is appropriate.
              </p>
            </div>

          </div>

        </div>

        {/* STEP 2 */}

        <div className="relative grid items-center gap-5 sm:gap-7 md:grid-cols-2 md:gap-8">

          <div className="order-2 md:order-1 md:pr-16">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl shadow-xl md:absolute md:-right-10 md:top-1/2 md:-translate-y-1/2">
              💉
            </div>

          </div>

          <div className="order-1 md:order-2 md:pl-16">

            <span className="text-xs font-black uppercase tracking-widest text-orange-500 sm:text-sm">
              Step 02
            </span>

            <h3 className="mt-2 text-xl font-black leading-tight text-gray-900 sm:text-2xl">
              Local Anaesthesia
            </h3>

            <p className="mt-3 text-base leading-7 text-gray-600 sm:leading-8">
              Local anaesthesia is used to numb the treatment area and help
              keep the procedure comfortable.
            </p>

          </div>

        </div>

        {/* STEP 3 */}

        <div className="relative grid items-center gap-5 sm:gap-7 md:grid-cols-2 md:gap-8">

          <div className="md:pr-16 md:text-right">

            <span className="text-xs font-black uppercase tracking-widest text-orange-500 sm:text-sm">
              Step 03
            </span>

            <h3 className="mt-2 text-xl font-black leading-tight text-gray-900 sm:text-2xl">
              Access & Pulp Treatment
            </h3>

            <p className="mt-3 text-base leading-7 text-gray-600 sm:leading-8">
              An access opening is made to reach the internal pulp space,
              and the affected pulp tissue is carefully removed.
            </p>

          </div>

          <div className="relative md:pl-16">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl shadow-xl md:absolute md:-left-10 md:top-1/2 md:-translate-y-1/2">
              🦷
            </div>

          </div>

        </div>

        {/* STEP 4 */}

        <div className="relative grid items-center gap-5 sm:gap-7 md:grid-cols-2 md:gap-8">

          <div className="order-2 md:order-1 md:pr-16">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl shadow-xl md:absolute md:-right-10 md:top-1/2 md:-translate-y-1/2">
              🧹
            </div>

          </div>

          <div className="order-1 md:order-2 md:pl-16">

           <span className="text-xs font-black uppercase tracking-widest text-orange-500 sm:text-sm">
              Step 04
            </span>

           <h3 className="mt-2 text-xl font-black leading-tight text-gray-900 sm:text-2xl">
              Cleaning & Shaping
            </h3>

            <p className="mt-3 text-base leading-7 text-gray-600 sm:leading-8">
              The root canal system is cleaned, disinfected and shaped to
              prepare it for filling and sealing.
            </p>

          </div>

        </div>

        {/* STEP 5 */}

        <div className="relative grid items-center gap-5 sm:gap-7 md:grid-cols-2 md:gap-8">

          <div className="md:pr-16 md:text-right">

            <span className="text-xs font-black uppercase tracking-widest text-orange-500 sm:text-sm">
              Step 05
            </span>

            <h3 className="mt-2 text-xl font-black leading-tight text-gray-900 sm:text-2xl">
              Filling & Sealing
            </h3>

            <p className="mt-3 text-base leading-7 text-gray-600 sm:leading-8">
              After cleaning and preparation, the canal space is filled and
              sealed to help prevent further contamination.
            </p>

          </div>

          <div className="relative md:pl-16">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl shadow-xl md:absolute md:-left-10 md:top-1/2 md:-translate-y-1/2">
              🔒
            </div>

          </div>

        </div>

        {/* STEP 6 */}

        <div className="relative grid items-center gap-5 sm:gap-7 md:grid-cols-2 md:gap-8">

          <div className="order-2 md:order-1 md:pr-16">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl shadow-xl md:absolute md:-right-10 md:top-1/2 md:-translate-y-1/2">
              👑
            </div>

          </div>

          <div className="order-1 md:order-2 md:pl-16">

            <span className="text-xs font-black uppercase tracking-widest text-orange-500 sm:text-sm">
              Step 06
            </span>

            <h3 className="mt-2 text-xl font-black leading-tight text-gray-900 sm:text-2xl">
              Final Restoration
            </h3>

            <p className="mt-3 text-base leading-7 text-gray-600 sm:leading-8">
              Depending on the amount of remaining tooth structure and the
              tooth involved, a suitable restoration or crown may be
              recommended to protect and restore function.
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* BOTTOM NOTE */}

    <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-orange-50 p-6 text-center shadow-sm sm:mt-16 sm:p-7 md:p-9">

  <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        <span className="font-bold text-orange-600">
          Treatment steps can vary from patient to patient.
        </span>{" "}
        Your dentist will explain the appropriate procedure after examining
        the tooth and understanding its condition.
      </p>

    </div>

  </div>

</section>
{/* ================= ROOT CANAL VS EXTRACTION ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

   <div className="mx-auto max-w-4xl text-center">

  <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
    Save Your Natural Tooth
  </span>

  <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
    Root Canal Treatment vs Tooth Extraction
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
    When a tooth is severely damaged or infected, different treatment
    options may be considered. If the tooth is restorable, preserving
    the natural tooth may be an option.
  </p>

</div>

    {/* COMPARISON */}

    <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:gap-8 lg:mt-16 lg:grid-cols-2">

      {/* ROOT CANAL */}

      <div className="relative overflow-hidden rounded-3xl border-2 border-orange-400 bg-white p-6 shadow-xl sm:p-8 md:p-10">

        <div className="absolute right-4 top-3 text-6xl font-black text-orange-100 sm:right-5 sm:top-4 sm:text-7xl">
          01
        </div>

        <div className="relative">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
            🦷
          </div>

          <h3 className="mt-5 text-2xl font-black leading-tight text-gray-900 sm:mt-6 sm:text-3xl">
            Root Canal Treatment
          </h3>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
            Root canal treatment is considered when the tooth can be
            predictably restored and the affected pulp needs treatment.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
              <span className="text-base leading-7 text-gray-700">
                Helps preserve the natural tooth
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
             <span className="text-base leading-7 text-gray-700">
                Treats affected or infected pulp
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
             <span className="text-base leading-7 text-gray-700">
                Maintains the tooth in the mouth
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
              <span className="text-base leading-7 text-gray-700">
                May be followed by a suitable restoration or crown
              </span>
            </div>

          </div>

        </div>

      </div>

     {/* EXTRACTION */}

<div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 md:p-10">

  {/* BACKGROUND NUMBER */}

  <div className="absolute right-4 top-3 text-6xl font-black text-gray-100 sm:right-5 sm:top-4 sm:text-7xl">
    02
  </div>

  <div className="relative">

    {/* ICON */}

    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-700 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
      🦷
    </div>

    {/* HEADING */}

    <h3 className="mt-5 text-2xl font-black leading-tight text-gray-900 sm:mt-6 sm:text-3xl">
      Tooth Extraction
    </h3>

    {/* DESCRIPTION */}

    <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
      Extraction may be recommended when a tooth cannot be predictably
      restored or when saving it is not considered a suitable option.
    </p>

    {/* BENEFITS / POINTS */}

    <div className="mt-7 space-y-4 sm:mt-8">

      {/* POINT 1 */}

      <div className="flex items-start gap-3">

        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-gray-500" />

        <span className="text-base leading-7 text-gray-700">
          Removes a tooth that cannot be adequately restored
        </span>

      </div>

      {/* POINT 2 */}

      <div className="flex items-start gap-3">

        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-gray-500" />

        <span className="text-base leading-7 text-gray-700">
          May be necessary for certain severely damaged teeth
        </span>

      </div>

      {/* POINT 3 */}

      <div className="flex items-start gap-3">

        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-gray-500" />

        <span className="text-base leading-7 text-gray-700">
          Tooth replacement can be considered afterward
        </span>

      </div>

      {/* POINT 4 */}

      <div className="flex items-start gap-3">

        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-gray-500" />

        <span className="text-base leading-7 text-gray-700">
          Replacement options may include an implant, bridge or denture
        </span>

      </div>

    </div>

  </div>

</div>
    </div>

    {/* KEY MESSAGE */}

    <div className="mx-auto mt-14 max-w-5xl rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700 p-8 text-center text-white shadow-2xl md:p-10">

      <div className="text-5xl">
        🧡
      </div>

      <h3 className="mt-5 text-2xl font-black md:text-3xl">
        Whenever Possible, Preserve the Natural Tooth
      </h3>

      <p className="mx-auto mt-4 max-w-3xl leading-8 text-orange-50">
        If your tooth is suitable for restoration, root canal treatment may
        help retain your natural tooth. The appropriate option depends on
        the tooth&apos;s condition and your dentist&apos;s clinical assessment.
      </p>

    </div>

  </div>

</section>
{/* ================= IS ROOT CANAL PAINFUL ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
        Common Concern
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
        Is Root Canal Treatment Painful?
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
        One of the most common questions patients ask before a root canal
        is whether the treatment will be painful. The experience can vary
        depending on the condition of the tooth, but modern techniques and
        local anaesthesia help make treatment more comfortable.
      </p>

    </div>

    {/* THREE STAGES */}

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      {/* BEFORE */}

      <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          😣
        </div>

        <h3 className="mt-6 text-center text-2xl font-black text-gray-900">
          Before Treatment
        </h3>

        <p className="mt-4 text-center leading-8 text-gray-600">
          Pain from an inflamed or infected tooth can sometimes be significant.
          This pain is caused by the underlying dental problem, not by the
          root canal procedure itself.
        </p>

      </div>

      {/* DURING */}

      <div className="rounded-3xl border-2 border-orange-400 bg-white p-8 shadow-xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          💉
        </div>

        <h3 className="mt-6 text-center text-2xl font-black text-gray-900">
          During Treatment
        </h3>

        <p className="mt-4 text-center leading-8 text-gray-600">
          Local anaesthesia is used to numb the treatment area. Your dentist
          will also monitor your comfort throughout the procedure.
        </p>

      </div>

      {/* AFTER */}

      <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          😊
        </div>

        <h3 className="mt-6 text-center text-2xl font-black text-gray-900">
          After Treatment
        </h3>

        <p className="mt-4 text-center leading-8 text-gray-600">
          Some patients may experience temporary tenderness or sensitivity
          after treatment. Your dentist can provide appropriate aftercare
          instructions based on your individual situation.
        </p>

      </div>

    </div>

    {/* MYTH / FACT */}

<div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl shadow-2xl sm:mt-16">

  <div className="grid md:grid-cols-2">

    {/* MYTH */}

    <div className="bg-gray-900 p-7 text-white sm:p-8 md:p-10">

      <span className="text-xs font-bold uppercase tracking-widest text-orange-400 sm:text-sm">
        Common Myth
      </span>

      <h3 className="mt-4 text-2xl font-black leading-tight sm:mt-5 sm:text-3xl">
        “Root canal treatment is extremely painful.”
      </h3>

      <p className="mt-4 text-base leading-7 text-gray-300 sm:mt-5 sm:leading-8">
        Fear of pain often makes people postpone dental treatment.
        Delaying treatment, however, may allow an underlying dental
        problem to progress.
      </p>

    </div>

    {/* FACT */}

    <div className="bg-orange-500 p-7 text-white sm:p-8 md:p-10">

      <span className="text-xs font-bold uppercase tracking-widest text-orange-100 sm:text-sm">
        The Reality
      </span>

      <h3 className="mt-4 text-2xl font-black leading-tight sm:mt-5 sm:text-3xl">
        Modern RCT focuses on patient comfort.
      </h3>

      <p className="mt-4 text-base leading-7 text-orange-50 sm:mt-5 sm:leading-8">
        Local anaesthesia and modern dental techniques are used to help
        make the procedure comfortable. Your dentist can also discuss
        your concerns before treatment begins.
      </p>

    </div>

  </div>

</div>

    {/* CTA */}

    <div className="mt-12 text-center sm:mt-14">

     <p className="text-base font-semibold text-gray-700 sm:text-lg">
  Worried about tooth pain or root canal treatment?
</p>

      <Link
  href="/#appointment"
  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600 sm:w-auto"
>
  🦷 Get Your Tooth Evaluated
</Link>

    </div>

  </div>

</section>
{/* ================= BENEFITS OF ROOT CANAL TREATMENT ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

<div className="mx-auto max-w-4xl text-center">

  <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
    Benefits of Root Canal Treatment
  </span>

  <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
    Why Consider Root Canal Treatment?
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
    When a tooth is suitable for root canal treatment, treating the
    affected pulp can help preserve the natural tooth and restore
    comfortable function.
  </p>

</div>

    {/* BENEFITS */}

    <div className="mt-14 grid gap-6 sm:gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
      {/* BENEFIT 1 */}

      <div className="rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
          🦷
        </div>

       <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6">
          Preserve Your Natural Tooth
        </h3>

       <p className="mt-4 text-base leading-7 text-gray-600">
  If a tooth can be predictably restored, preserving the natural tooth
  may help avoid extraction and the need for tooth replacement.
</p>

      </div>

      {/* BENEFIT 2 */}

      <div className="rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

       <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
          ❤️
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6">
          Treat the Infection
        </h3>

       <p className="mt-4 text-base leading-7 text-gray-600">
          Root canal treatment addresses affected pulp tissue and helps
          manage infection within the tooth.
        </p>

      </div>

      {/* BENEFIT 3 */}

      <div className="rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
          😁
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6">
          Restore Function
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600">
          After appropriate restoration, the treated tooth can continue to
          contribute to normal chewing and oral function.
        </p>

      </div>

      {/* BENEFIT 4 */}

     <div className="rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">

       <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
          🛡️
        </div>

        <h3 className="mt-5 text-xl font-black leading-tight text-gray-900 sm:mt-6">
          Avoid Unnecessary Extraction
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600">
          If a tooth can be predictably restored, preserving it may avoid the
          need for extraction and subsequent tooth replacement.
        </p>

      </div>

    </div>

    {/* ================= WHY CHOOSE DR BHUVAN ================= */}

    <div className="mt-16 grid items-center gap-10 sm:mt-20 sm:gap-12 lg:grid-cols-2">

      {/* LEFT */}

      <div>

        <span className="rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600 shadow-sm">
          Why Choose Dr. Bhuvan?
        </span>

       <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
          Personalized Dental Care in Yousufguda
        </h2>

        <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-9">
  At Dr. Bhuvan’s Dental Laser & Implant Centre, treatment is planned
  after understanding your symptoms, examining the tooth and assessing
  your individual dental needs.
</p>

        <div className="mt-9 space-y-6 sm:mt-10">

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm">
  ✓
</div>

            <div>
              <h3 className="text-base font-black leading-tight text-gray-900 sm:text-lg">
                Comprehensive Dental Evaluation
              </h3>

              <p className="mt-1.5 text-base leading-7 text-gray-600">
                Your symptoms and tooth condition are assessed before deciding
                on the appropriate treatment.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm">
  ✓
</div>

            <div>
             <h3 className="text-base font-black leading-tight text-gray-900 sm:text-lg">
                Modern Dental Technology
              </h3>

              <p className="mt-1.5 text-base leading-7 text-gray-600">
                Modern dental equipment and techniques are used as appropriate
                for your treatment needs.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm">
  ✓
</div>

            <div>
              <h3 className="text-base font-black leading-tight text-gray-900 sm:text-lg">
                Patient-Focused Treatment
              </h3>

              <p className="mt-1.5 text-base leading-7 text-gray-600">
                Your concerns and comfort are considered throughout the
                treatment process.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm">
  ✓
</div>

            <div>
             <h3 className="text-base font-black leading-tight text-gray-900 sm:text-lg">
  Complete Treatment Planning
</h3>

              <p className="mt-1.5 text-base leading-7 text-gray-600">
  Your treatment plan can consider both the immediate dental problem and
  your overall oral health needs.
</p>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT VISUAL */}

      <div className="relative">

        <div className="absolute -inset-5 rounded-[3rem] bg-orange-200/60 blur-2xl"></div>

       <div className="relative rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-orange-700 p-7 text-center text-white shadow-2xl sm:p-10">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-6xl backdrop-blur sm:h-28 sm:w-28 sm:text-7xl">
  🦷
</div>

         <h3 className="mt-7 text-2xl font-black leading-tight sm:mt-8 sm:text-3xl">
  Your Natural Tooth Matters
</h3>

         <p className="mt-4 text-base leading-7 text-orange-50 sm:mt-5 sm:leading-8">
  If you are experiencing persistent tooth pain, sensitivity or swelling,
  don&apos;t delay an evaluation. Early assessment can help determine the
  appropriate treatment option.
</p>

         <Link
  href="/#appointment"
  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50 sm:mt-8 sm:w-auto sm:px-8"
>
  🦷 Get Your Tooth Evaluated
</Link>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= COST, VISITS & CROWN ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

   {/* HEADER */}

<div className="mx-auto max-w-4xl text-center">

  <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
    Treatment Information
  </span>

  <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
    Root Canal Treatment Cost & Treatment Details
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
    The cost and number of appointments for root canal treatment can vary
    depending on the tooth, complexity of the case and the restoration
    required afterward.
  </p>

</div>
    {/* THREE CARDS */}

    <div className="mt-14 grid gap-6 sm:gap-8 md:mt-16 md:grid-cols-3">

      {/* COST */}

      <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 sm:p-8 shadow-lg">

       <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
          💰
        </div>

       <h3 className="mt-5 text-2xl font-black leading-tight text-gray-900 sm:mt-6">
          How Much Does RCT Cost?
        </h3>

       <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          Root canal treatment charges depend on the tooth involved, the
          complexity of the root canal system and the restoration needed
          after treatment.
        </p>

        <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">

          <p className="text-xs font-bold uppercase tracking-wider text-orange-600 sm:text-sm">
  Important
</p>

          <p className="mt-2 text-base leading-7 text-gray-600">
  A clinical examination is recommended before confirming the
  appropriate treatment and cost.
</p>

        </div>

      </div>

      {/* VISITS */}

      <div className="rounded-3xl border border-orange-100 bg-whitep-6 sm:p-8 shadow-lg">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
          📅
        </div>

        <h3 className="mt-5 text-2xl font-black leading-tight text-gray-900 sm:mt-6">
          How Many Visits?
        </h3>

       <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          The number of visits can vary depending on the condition of the
          tooth, infection, anatomy and complexity of treatment.
        </p>

        <div className="mt-7 space-y-4">

          <div className="flex items-center gap-3">
            <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
            <span className="text-base leading-7 text-gray-700">
              Simple cases may require fewer visits
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-orange-500" />
           <span className="text-base leading-7 text-gray-700">
              Complex or infected cases may need additional appointments
            </span>
          </div>

        </div>

      </div>

      {/* CROWN */}

      <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 sm:p-8 shadow-lg">

       <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
          👑
        </div>

        <h3 className="mt-5 text-2xl font-black leading-tight text-gray-900 sm:mt-6">
          Do You Need a Crown?
        </h3>

        <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
          A tooth that has undergone root canal treatment may require a
          suitable final restoration or crown depending on the tooth and
          how much healthy tooth structure remains.
        </p>

       <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">

          <p className="text-base font-semibold leading-7 text-gray-700">
  Your dentist will assess the remaining tooth structure and recommend
  the appropriate restoration.
</p>

        </div>

      </div>

    </div>

    {/* COST CTA */}

    <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700 p-7 text-white shadow-2xl sm:mt-16 sm:p-8 md:p-10">

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

        <div>

          <h3 className="text-2xl font-black leading-tight sm:text-3xl">
  Have a painful or damaged tooth?
</h3>

         <p className="mt-3 max-w-2xl text-base leading-7 text-orange-50">
  Get your tooth examined and understand whether root canal treatment
  or another dental treatment is appropriate for you.
</p>

        </div>

       <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

         <a
  href="tel:+918074528763"
  className="rounded-full bg-white px-7 py-3.5 text-center font-bold text-orange-600 transition hover:bg-orange-50"
>
  📞 Call Now
</a>

          <WhatsAppButton
  className="rounded-full border-2 border-white px-7 py-3.5 text-center font-bold text-white transition hover:bg-white hover:text-orange-600"
>
  💬 WhatsApp Us
</WhatsAppButton>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= ROOT CANAL FAQ ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-5xl px-6">

    {/* HEADER */}

   <div className="mx-auto max-w-3xl text-center">

  <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
    Frequently Asked Questions
  </span>

  <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
    Root Canal Treatment FAQs
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
    Answers to common questions about root canal treatment in Yousufguda,
    including pain, treatment time, crowns, cost and tooth preservation.
  </p>

</div>
    {/* FAQ LIST */}

    <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5">

      {/* FAQ 1 */}

      <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-md transition-all duration-300 open:border-orange-300 open:shadow-lg sm:p-6">

        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black leading-7 text-gray-900 sm:gap-5 sm:text-lg">

          Is root canal treatment painful?

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-medium text-orange-600 transition-all duration-300 group-open:bg-orange-500 group-open:text-white group-open:rotate-45">
            +
          </span>

        </summary>

        <p className="mt-4 border-t border-gray-100 pt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:pt-5 sm:leading-8">
          Local anaesthesia is used to numb the treatment area and help make
          the procedure comfortable. Some patients may experience temporary
          tenderness or sensitivity after treatment.
        </p>

      </details>

      {/* FAQ 2 */}

      <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-md transition-all duration-300 open:border-orange-300 open:shadow-lg sm:p-6">

        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black leading-7 text-gray-900 sm:gap-5 sm:text-lg">

          How long does a root canal treatment take?

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-medium text-orange-600 transition-all duration-300 group-open:bg-orange-500 group-open:text-white group-open:rotate-45">
            +
          </span>

        </summary>

        <p className="mt-4 border-t border-gray-100 pt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:pt-5 sm:leading-8">
          Treatment time depends on the tooth, its anatomy, the presence of
          infection and the complexity of the case. Some cases can be
          completed in fewer appointments, while more complex cases may
          require additional visits.
        </p>

      </details>

      {/* FAQ 3 */}

      <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-md transition-all duration-300 open:border-orange-300 open:shadow-lg sm:p-6">

        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black leading-7 text-gray-900 sm:gap-5 sm:text-lg">

          Can a badly infected tooth be saved?

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-medium text-orange-600 transition-all duration-300 group-open:bg-orange-500 group-open:text-white group-open:rotate-45">
            +
          </span>

        </summary>

        <p className="mt-4 border-t border-gray-100 pt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:pt-5 sm:leading-8">
          In some cases, an infected tooth can be treated with root canal
          treatment if the tooth is suitable for restoration. The prognosis
          depends on the condition of the tooth and surrounding structures.
        </p>

      </details>

      {/* FAQ 4 */}

      <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-md transition-all duration-300 open:border-orange-300 open:shadow-lg sm:p-6">

        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black leading-7 text-gray-900 sm:gap-5 sm:text-lg">

          Do I need a crown after root canal treatment?

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-medium text-orange-600 transition-all duration-300 group-open:bg-orange-500 group-open:text-white group-open:rotate-45">
            +
          </span>

        </summary>

        <p className="mt-4 border-t border-gray-100 pt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:pt-5 sm:leading-8">
          A crown or another suitable restoration may be recommended
          depending on the tooth involved and the amount of remaining
          tooth structure. Your dentist will assess the tooth before
          recommending the final restoration.
        </p>

      </details>

      {/* FAQ 5 */}

      <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-md transition-all duration-300 open:border-orange-300 open:shadow-lg sm:p-6">

        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black leading-7 text-gray-900 sm:gap-5 sm:text-lg">

          What happens if I delay root canal treatment?

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-medium text-orange-600 transition-all duration-300 group-open:bg-orange-500 group-open:text-white group-open:rotate-45">
            +
          </span>

        </summary>

        <p className="mt-4 border-t border-gray-100 pt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:pt-5 sm:leading-8">
          If an affected tooth is left untreated, the underlying problem may
          progress and can potentially affect surrounding tissues. The tooth
          may also become more difficult to restore. If you have persistent
          pain, swelling or sensitivity, a dental evaluation is advisable.
        </p>

      </details>

      {/* FAQ 6 */}

      <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-md transition-all duration-300 open:border-orange-300 open:shadow-lg sm:p-6">

        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black leading-7 text-gray-900 sm:gap-5 sm:text-lg">

          Is root canal better than tooth extraction?

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-medium text-orange-600 transition-all duration-300 group-open:bg-orange-500 group-open:text-white group-open:rotate-45">
            +
          </span>

        </summary>

        <p className="mt-4 border-t border-gray-100 pt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:pt-5 sm:leading-8">
          When a tooth is restorable, preserving the natural tooth with root
          canal treatment may be an option. Extraction may be recommended when
          the tooth cannot be predictably restored. Your dentist can discuss
          the appropriate option after examination.
        </p>

      </details>

      {/* FAQ 7 */}

      <details className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-md transition-all duration-300 open:border-orange-300 open:shadow-lg sm:p-6">

        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black leading-7 text-gray-900 sm:gap-5 sm:text-lg">

          How much does root canal treatment cost in Yousufguda?

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-medium text-orange-600 transition-all duration-300 group-open:bg-orange-500 group-open:text-white group-open:rotate-45">
            +
          </span>

        </summary>

        <p className="mt-4 border-t border-gray-100 pt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:pt-5 sm:leading-8">
          The cost depends on the tooth being treated, the complexity of the
          root canal and the final restoration required. A clinical
          examination is recommended before confirming the treatment and
          cost.
        </p>

      </details>

    </div>

    {/* FAQ BOTTOM CTA */}

    <div className="mt-12 rounded-3xl bg-white p-6 text-center shadow-xl sm:mt-14 sm:p-8 md:p-10">

  <h3 className="text-2xl font-black leading-tight text-gray-900 sm:text-3xl">
    Experiencing persistent tooth pain?
  </h3>

  <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
    Don&apos;t ignore ongoing pain, sensitivity or swelling. Get your
    tooth evaluated and understand the treatment options available.
  </p>

  <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a
  href="tel:+918074528763"
  className="rounded-full bg-orange-500 px-8 py-3.5 text-center font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-orange-600"
>
  📞 Call Now
</a>

        <WhatsAppButton
          className="rounded-full border-2 border-orange-500 px-8 py-4 font-bold text-orange-600 transition hover:bg-orange-50"
        >
          💬 WhatsApp Us
        </WhatsAppButton>

      </div>

    </div>

  </div>

</section>
{/* ================= FINAL CTA & CONTACT ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-24 text-white">

  {/* BACKGROUND EFFECTS */}

  <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl"></div>

  <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-yellow-300/10 blur-3xl"></div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-widest backdrop-blur">
        Root Canal Treatment in Yousufguda
      </span>

      <h2 className="mt-7 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
        Don&apos;t Let Tooth Pain
        <span className="block text-orange-100">
          Hold You Back
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-50 md:text-xl">
        If you are experiencing persistent tooth pain, sensitivity,
        swelling or a damaged tooth, get it evaluated and understand
        the treatment options available.
      </p>

    </div>

    {/* CTA BUTTONS */}

    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

      <a
        href="/#appointment"
        className="inline-flex items-center justify-center rounded-full bg-white px-9 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
      >
        📅 Book Appointment
      </a>

      <WhatsAppButton
        className="inline-flex items-center justify-center rounded-full border-2 border-white px-9 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-orange-600"
      >
        💬 WhatsApp Us
      </WhatsAppButton>

      <a
        href="tel:+918074528763"
        className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-9 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-orange-600"
      >
        📞 Call Now
      </a>

    </div>

    {/* CONTACT INFORMATION */}

    <div className="mt-16 grid gap-6 md:grid-cols-3">

      {/* LOCATION */}

      <div className="rounded-3xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur">

        <div className="text-4xl">
          📍
        </div>

        <h3 className="mt-4 text-xl font-bold">
          Our Location
        </h3>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvan%27s+Dental+Laser+%26+Implant+Centre+Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-sm leading-7 text-orange-50 hover:underline"
        >
          Ganapathi Complex, Navodaya Colony Road,
          <br />
          Sri Krishna Nagar, Yousufguda,
          <br />
          Hyderabad – 500073
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvan%27s+Dental+Laser+%26+Implant+Centre+Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 font-bold text-orange-600 transition hover:bg-orange-50"
        >
          📍 Get Directions
        </a>

      </div>

      {/* CLINIC TIMINGS */}

      <div className="rounded-3xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur">

        <div className="text-4xl">
          🕐
        </div>

        <h3 className="mt-4 text-xl font-bold">
          Clinic Timings
        </h3>

        <p className="mt-3 text-sm leading-7 text-orange-50">
          Monday – Saturday
          <br />
          10:00 AM – 2:00 PM
          <br />
          4:00 PM – 9:00 PM
          <br />
          <br />
          Sunday
          <br />
          10:00 AM – 2:00 PM
        </p>

      </div>

      {/* CONTACT */}

      <div className="rounded-3xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur">

        <div className="text-4xl">
          📞
        </div>

        <h3 className="mt-4 text-xl font-bold">
          Contact Us
        </h3>

        <a
          href="tel:+918074528763"
          className="mt-3 block font-bold text-white hover:underline"
        >
          +91 80745 28763
        </a>

        <p className="mt-2 text-sm text-orange-50">
          One-to-One Dental Care
        </p>

        <WhatsAppButton
          className="mt-3 inline-block font-semibold text-white hover:underline"
        >
          💬 WhatsApp Us
        </WhatsAppButton>

      </div>

    </div>

    {/* BOTTOM TRUST MESSAGE */}

    <div className="mx-auto mt-14 max-w-4xl text-center">

      <p className="text-sm leading-7 text-orange-100 md:text-base">
        Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
        comprehensive dental care for patients in Yousufguda,
        Ameerpet and nearby areas of Hyderabad.
      </p>

    </div>

  </div>

</section>
    </main>
  );
}