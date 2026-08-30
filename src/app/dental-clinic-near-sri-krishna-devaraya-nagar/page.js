import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
export default function Page() {
  return (
    <>
{/* ================= HERO ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-20 text-white md:py-28">

  {/* Background Effects */}

  <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6">

    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* LEFT */}

      <div>

        <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur sm:text-sm">
          Dental Care Near You
        </span>

        <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Dental Clinic Near
          <span className="block">
            Sri Krishna Devaraya Nagar
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
          Looking for a trusted dental clinic near Sri Krishna Devaraya
          Nagar? Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
          comprehensive dental care for tooth pain, gum problems, teeth
          cleaning, root canal treatment, dental implants and other dental
          needs.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/#appointment"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
          >
            🦷 Book Appointment
            <ArrowRight className="h-5 w-5" />
          </Link>

          <a
            href="tel:+918074528763"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
          >
            📞 Call Now
          </a>

        </div>

        <div className="mt-7 flex flex-wrap gap-4 text-sm text-orange-50">

          <span>✓ Experienced Dental Care</span>
          <span>✓ Modern Dental Technology</span>
          <span>✓ Patient-Focused Treatment</span>

        </div>

      </div>

      {/* RIGHT */}

      <div className="relative">

        <div className="absolute -inset-4 rounded-[3rem] bg-white/10 blur-2xl" />

        <div className="relative rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-10">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-5xl">
            🦷
          </div>

          <h2 className="mt-7 text-center text-2xl font-black md:text-3xl">
            Comprehensive Dental Care
          </h2>

          <p className="mt-4 text-center leading-7 text-orange-50">
            Personalized dental treatment based on your symptoms,
            examination and individual oral health needs.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">

            <div className="rounded-2xl bg-white/10 p-4 text-center">
              <span className="text-2xl">🦷</span>
              <p className="mt-2 text-sm font-semibold">
                Root Canal
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center">
              <span className="text-2xl">🪥</span>
              <p className="mt-2 text-sm font-semibold">
                Teeth Cleaning
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center">
              <span className="text-2xl">🛡️</span>
              <p className="mt-2 text-sm font-semibold">
                Dental Implants
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center">
              <span className="text-2xl">😁</span>
              <p className="mt-2 text-sm font-semibold">
                Cosmetic Care
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= DENTAL SERVICES ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
        Comprehensive Dental Care
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
        Dental Services Near
        <span className="block">
          Sri Krishna Devaraya Nagar
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        From preventive dental care to restorative and implant treatments,
        our clinic provides personalized dental services based on your
        individual oral health needs.
      </p>

    </div>

    {/* SERVICES */}

    <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

      {/* ROOT CANAL */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg">
          🦷
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Root Canal Treatment
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Treatment for teeth affected by deep decay, pulp inflammation or
          infection, with the goal of preserving the natural tooth when
          it can be restored.
        </p>

        <Link
          href="/root-canal-treatment-yousufguda"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>

      </div>

      {/* TEETH CLEANING */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg">
          🪥
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Teeth Cleaning & Scaling
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Professional cleaning, scaling and polishing to help remove
          plaque, tartar and surface stains and support better oral hygiene.
        </p>

        <Link
          href="/teeth-cleaning-ameerpet"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>

      </div>

      {/* DENTAL IMPLANTS */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg">
          🛡️
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Dental Implants
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Dental implant treatment may be considered for replacing missing
          teeth and restoring chewing function and appearance.
        </p>

        <Link
          href="/dental-implants-ameerpet"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>

      </div>

      {/* GUM CARE */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg">
          ❤️
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Gum Care & Treatment
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Evaluation and treatment for gum-related concerns such as
          bleeding gums, swelling, tenderness and other periodontal
          problems.
        </p>

        <Link
          href="/#appointment"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Consult Our Dentist
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>

      </div>

      {/* COSMETIC DENTISTRY */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg">
          ✨
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Cosmetic Dentistry
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Cosmetic dental options can help improve the appearance of teeth
          and create a more confident smile based on individual needs.
        </p>

        <Link
          href="/#appointment"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Explore Treatment
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>

      </div>

      {/* TOOTH EXTRACTION */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-lg">
          🦷
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Tooth Extraction
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Tooth extraction may be recommended when a tooth cannot be
          predictably restored or when removal is necessary for your oral
          health.
        </p>

        <Link
          href="/#appointment"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Consult Our Dentist
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>

      </div>

    </div>

    {/* NOTE */}

    <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-orange-100 bg-orange-50 p-6 text-center">

      <p className="text-sm leading-7 text-gray-600 sm:text-base">
        <span className="font-bold text-orange-600">
          Not sure which treatment you need?
        </span>{" "}
        A dental examination can help identify the cause of your concern
        and determine the most appropriate treatment option.
      </p>

    </div>

  </div>

</section>
{/* ================= WHY CHOOSE DR BHUVAN ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* LEFT CONTENT */}

      <div>

        <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
          Why Choose Dr. Bhuvan?
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
          Personalized Dental Care Near
          <span className="block">
            Sri Krishna Devaraya Nagar
          </span>
        </h2>

        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
          At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, treatment is
          planned after understanding your symptoms, examining your teeth
          and considering your individual oral health needs.
        </p>

        {/* FEATURES */}

        <div className="mt-10 space-y-6">

          {/* FEATURE 1 */}

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
              ✓
            </div>

            <div>

              <h3 className="text-lg font-bold text-gray-900">
                Comprehensive Dental Evaluation
              </h3>

              <p className="mt-1 leading-7 text-gray-600">
                Your symptoms, dental condition and treatment requirements
                are assessed before recommending an appropriate treatment.
              </p>

            </div>

          </div>

          {/* FEATURE 2 */}

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
              ✓
            </div>

            <div>

              <h3 className="text-lg font-bold text-gray-900">
                Modern Dental Technology
              </h3>

              <p className="mt-1 leading-7 text-gray-600">
                Modern dental equipment and techniques are used where
                appropriate to support accurate diagnosis and treatment.
              </p>

            </div>

          </div>

          {/* FEATURE 3 */}

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
              ✓
            </div>

            <div>

              <h3 className="text-lg font-bold text-gray-900">
                Patient-Focused Treatment
              </h3>

              <p className="mt-1 leading-7 text-gray-600">
                Your concerns, comfort and treatment expectations are
                considered throughout the dental care process.
              </p>

            </div>

          </div>

          {/* FEATURE 4 */}

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
              ✓
            </div>

            <div>

              <h3 className="text-lg font-bold text-gray-900">
                Comprehensive Dental Care
              </h3>

              <p className="mt-1 leading-7 text-gray-600">
                From preventive and restorative dentistry to dental implants
                and gum care, your overall oral health can be considered
                while planning treatment.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT VISUAL */}

      <div className="relative">

        <div className="absolute -inset-5 rounded-[3rem] bg-orange-200/60 blur-2xl" />

        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-orange-700 p-8 text-white shadow-2xl md:p-10">

          {/* ICON */}

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-6xl backdrop-blur">
            🦷
          </div>

          <h3 className="mt-7 text-center text-3xl font-black">
            Your Oral Health Matters
          </h3>

          <p className="mt-4 text-center leading-8 text-orange-50">
            Whether you need a routine dental check-up, treatment for tooth
            pain or a solution for missing teeth, an individual evaluation
            can help determine the right approach.
          </p>

          {/* TRUST STATS */}

          <div className="mt-8 grid grid-cols-2 gap-3">

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">

              <div className="text-2xl font-black">
                4.9★
              </div>

              <p className="mt-1 text-xs text-orange-100">
                Google Rating
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">

              <div className="text-2xl font-black">
                131+
              </div>

              <p className="mt-1 text-xs text-orange-100">
                Patient Reviews
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">

              <div className="text-2xl font-black">
                Modern
              </div>

              <p className="mt-1 text-xs text-orange-100">
                Dental Technology
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">

              <div className="text-2xl font-black">
                Care
              </div>

              <p className="mt-1 text-xs text-orange-100">
                Patient Focused
              </p>

            </div>

          </div>

          {/* CTA */}

          <div className="mt-8 text-center">

            <Link
              href="/#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= DENTAL PROBLEMS ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
        Common Dental Concerns
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
        Dental Problems We Can Help With
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        From tooth pain and sensitivity to gum problems and missing teeth,
        dental symptoms can have different causes. A professional
        examination can help identify the cause and guide the appropriate
        treatment.
      </p>

    </div>

    {/* PROBLEM CARDS */}

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* TOOTH PAIN */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          😣
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Tooth Pain
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Persistent or severe tooth pain may be associated with tooth decay,
          infection, cracks or problems affecting the pulp. Dental evaluation
          can help determine the underlying cause.
        </p>

        <Link
          href="/#appointment"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-1 hover:text-orange-700"
        >
          Get Your Tooth Evaluated
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* WISDOM TOOTH */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🦷
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Wisdom Tooth Pain
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Pain, swelling or discomfort around a wisdom tooth can occur due to
          impaction, inflammation, infection or lack of space. An examination
          can help determine the appropriate treatment.
        </p>

        <Link
          href="/#appointment"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-1 hover:text-orange-700"
        >
          Consult Our Dentist
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* BAD BREATH */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          😮‍💨
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Bad Breath
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Persistent bad breath may sometimes be related to oral hygiene,
          gum problems, tongue coating or other dental conditions. Finding
          the cause is important for appropriate care.
        </p>

        <Link
          href="/#appointment"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-1 hover:text-orange-700"
        >
          Discuss Your Concern
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* SENSITIVE TEETH */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🧊
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Sensitive Teeth
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Sensitivity to hot, cold, sweet or acidic foods can have several
          causes. A dental examination can help identify the reason for
          sensitivity and guide treatment.
        </p>

        <Link
          href="/#appointment"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-1 hover:text-orange-700"
        >
          Get a Dental Assessment
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* BLEEDING GUMS */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🩸
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Bleeding Gums
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Bleeding while brushing or flossing can sometimes indicate gum
          inflammation or other periodontal concerns and should be evaluated
          if it persists.
        </p>

        <Link
          href="/#appointment"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-1 hover:text-orange-700"
        >
          Check Your Gum Health
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* MISSING TEETH */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          ✨
        </div>

        <h3 className="mt-6 text-2xl font-black text-gray-900">
          Missing Teeth
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Missing teeth can affect chewing, appearance and oral function.
          Dental implants and other tooth replacement options may be
          considered depending on your individual condition.
        </p>

        <Link
          href="/dental-implants-ameerpet"
          className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-1 hover:text-orange-700"
        >
          Explore Dental Implants
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

    </div>

    {/* BOTTOM NOTE */}

    <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-orange-50 p-7 text-center md:p-9">

      <p className="text-base leading-8 text-gray-600 md:text-lg">
        <span className="font-bold text-orange-600">
          Don&apos;t ignore persistent dental symptoms.
        </span>{" "}
        Early evaluation can help identify the cause of a dental problem
        and determine whether treatment is needed.
      </p>

    </div>

  </div>

</section>
{/* ================= LOCATION & ACCESSIBILITY ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
        Convenient Location
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
        Convenient Dental Care Near
        <span className="block">
          Sri Krishna Devaraya Nagar
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        Dr. Bhuvan&apos;s Dental Laser & Implant Centre is located in
        Sri Krishna Nagar, Ameerpet, providing convenient access to patients
        looking for dental care from Sri Krishna Devaraya Nagar and nearby
        areas of Hyderabad.
      </p>

    </div>

    {/* LOCATION CONTENT */}

    <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">

      {/* CLINIC LOCATION */}

      <div className="rounded-[2rem] bg-white p-8 shadow-xl sm:p-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          📍
        </div>

        <h3 className="mt-7 text-2xl font-black text-gray-900">
          Our Clinic Location
        </h3>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          Visit Dr. Bhuvan&apos;s Dental Laser & Implant Centre at:
        </p>

        <div className="mt-6 rounded-2xl bg-orange-50 p-6">

          <p className="font-semibold leading-8 text-gray-800">
            Ganapathi Complex, Navodaya Colony Road,
            <br />
            Sri Krishna Nagar, Ameerpet,
            <br />
            Hyderabad, Telangana – 500073
          </p>

        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <a
            href="tel:+918074528763"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
          >
            📞 Call Clinic
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr%20Bhuvan%27s%20Dental%20Laser%20%26%20Implant%20Centre%20Ameerpet%20Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-500 px-7 py-4 font-bold text-orange-600 transition hover:bg-orange-50"
          >
            📍 Get Directions
          </a>

        </div>

      </div>

      {/* NEARBY AREAS */}

      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-8 text-white shadow-xl sm:p-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">
          🗺️
        </div>

        <h3 className="mt-7 text-2xl font-black">
          Serving Patients From Nearby Areas
        </h3>

        <p className="mt-4 leading-8 text-orange-50">
          If you are searching for a dental clinic near Sri Krishna Devaraya
          Nagar, our Ameerpet location may be a convenient option. Patients
          also visit us from surrounding localities for different dental
          treatment needs.
        </p>

        {/* LOCALITY GRID */}

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <p className="text-sm font-semibold">
              Sri Krishna Devaraya Nagar
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <p className="text-sm font-semibold">
              Yellareddyguda
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <p className="text-sm font-semibold">
              Ameerpet
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <p className="text-sm font-semibold">
              Yousufguda
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <p className="text-sm font-semibold">
              Srinagar Colony
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <p className="text-sm font-semibold">
              Navodaya Colony
            </p>
          </div>

        </div>

        {/* LOCATION NOTE */}

        <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">

          <p className="text-sm leading-7 text-orange-50">

            <span className="font-bold text-white">
              Looking for dental care nearby?
            </span>{" "}
            Contact the clinic to discuss your dental concern and enquire
            about an appointment.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= PATIENT TRUST & REVIEWS ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
        Patient Trust
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
        Trusted Dental Care Near
        <span className="block">
          Sri Krishna Devaraya Nagar
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        We understand that choosing a dentist is an important decision.
        Our approach focuses on personalized treatment, patient comfort
        and appropriate dental care based on individual needs.
      </p>

    </div>

    {/* MAIN TRUST CARD */}

    <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white shadow-2xl">

      <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-12">

        {/* RATING */}

        <div className="text-center md:text-left">

          <div className="flex justify-center gap-1 md:justify-start">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-7 w-7 fill-yellow-300 text-yellow-300"
              />
            ))}

          </div>

          <div className="mt-5 text-5xl font-black">
            4.9
          </div>

          <p className="mt-2 text-lg font-semibold text-orange-50">
            Google Rating
          </p>

          <p className="mt-2 text-sm text-orange-100">
            Based on 131 patient reviews
          </p>

        </div>

        {/* TRUST MESSAGE */}

        <div>

          <h3 className="text-2xl font-black md:text-3xl">
            Care That Puts Patients First
          </h3>

          <p className="mt-5 leading-8 text-orange-50">
            Every patient has different dental needs. We focus on careful
            evaluation, clear treatment planning and a comfortable dental
            experience while considering the individual condition of each
            patient.
          </p>

          {/* TRUST POINTS */}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">

              <CheckCircle className="h-5 w-5 shrink-0" />

              <span className="text-sm font-semibold">
                Personalized treatment
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">

              <CheckCircle className="h-5 w-5 shrink-0" />

              <span className="text-sm font-semibold">
                Patient-focused care
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">

              <CheckCircle className="h-5 w-5 shrink-0" />

              <span className="text-sm font-semibold">
                Modern dental techniques
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">

              <CheckCircle className="h-5 w-5 shrink-0" />

              <span className="text-sm font-semibold">
                Comprehensive dental care
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* GOOGLE REVIEWS CTA */}

    <div className="mt-10 text-center">

      <p className="text-base text-gray-600">
        Want to know more about our patients&apos; experiences?
      </p>

      <a
        href="https://www.google.com/search?q=Dr+Bhuvan%27s+Dental+Laser+%26+Implant+Centre+Ameerpet+Hyderabad"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-orange-500 px-7 py-3 font-bold text-orange-600 transition hover:bg-orange-50"
      >
        ⭐ View Google Reviews
        <ArrowRight className="h-4 w-4" />
      </a>

    </div>

  </div>

</section>
{/* ================= FAQ ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
        Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
        Dental Clinic Near Sri Krishna Devaraya Nagar – FAQs
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        Find answers to some common questions about dental care,
        treatments and visiting our clinic near Sri Krishna Devaraya Nagar.
      </p>

    </div>

    {/* FAQ GRID */}

    <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">

      {/* FAQ 1 */}

      <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

        <h3 className="text-xl font-black text-gray-900">
          Is there a dental clinic near Sri Krishna Devaraya Nagar?
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Yes. Dr. Bhuvan&apos;s Dental Laser & Implant Centre is located in
          Sri Krishna Nagar, Ameerpet, and provides dental care for patients
          from Sri Krishna Devaraya Nagar and surrounding areas.
        </p>

      </div>

      {/* FAQ 2 */}

      <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

        <h3 className="text-xl font-black text-gray-900">
          Where is Dr. Bhuvan&apos;s Dental Clinic located?
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          The clinic is located at Ganapathi Complex, Navodaya Colony Road,
          Sri Krishna Nagar, Ameerpet, Hyderabad, Telangana – 500073.
        </p>

      </div>

      {/* FAQ 3 */}

      <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

        <h3 className="text-xl font-black text-gray-900">
          What dental treatments are available at the clinic?
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Dental services include root canal treatment, teeth cleaning and
          scaling, dental implants, gum care, cosmetic dentistry and other
          treatments based on individual dental needs.
        </p>

      </div>

      {/* FAQ 4 */}

      <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

        <h3 className="text-xl font-black text-gray-900">
          Can I visit the dentist for tooth pain?
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Yes. Tooth pain can have different causes, including decay,
          infection, cracks or problems affecting the pulp. A dental
          examination can help identify the cause and determine the
          appropriate treatment.
        </p>

      </div>

      {/* FAQ 5 */}

      <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

        <h3 className="text-xl font-black text-gray-900">
          Do you provide root canal treatment?
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Yes. Root canal treatment may be recommended when the pulp inside
          a tooth is affected or infected and the tooth is considered
          suitable for restoration.
        </p>

        <Link
          href="/root-canal-treatment-yousufguda"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Learn About Root Canal Treatment
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* FAQ 6 */}

      <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

        <h3 className="text-xl font-black text-gray-900">
          Do you provide teeth cleaning and scaling?
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Yes. Professional teeth cleaning, scaling and polishing are
          available to help remove plaque, tartar and surface stains and
          support better oral hygiene.
        </p>

        <Link
          href="/teeth-cleaning-ameerpet"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Learn About Teeth Cleaning
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* FAQ 7 */}

      <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

        <h3 className="text-xl font-black text-gray-900">
          Do you provide dental implants?
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Dental implants may be considered for replacing missing teeth.
          Your dentist can assess your oral health, bone condition and
          individual requirements before recommending a suitable option.
        </p>

        <Link
          href="/dental-implants-ameerpet"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Learn About Dental Implants
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* FAQ 8 */}

      <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

        <h3 className="text-xl font-black text-gray-900">
          How can I book a dental appointment?
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          You can contact the clinic by phone or use the appointment option
          on the website to enquire about your preferred date and time.
        </p>

        <a
          href="tel:+918074528763"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
        >
          📞 Call +91 80745 28763
          <ArrowRight className="h-4 w-4" />
        </a>

      </div>

    </div>

    {/* BOTTOM NOTE */}

    <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-white p-7 text-center shadow-sm md:p-9">

      <p className="text-base leading-8 text-gray-600 md:text-lg">
        <span className="font-bold text-orange-600">
          Still have questions about your dental concern?
        </span>{" "}
        Contact our clinic to discuss your symptoms and understand which
        dental evaluation or treatment may be appropriate for you.
      </p>

    </div>

  </div>

</section>
{/* ================= FINAL CTA ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-24 text-white">

  {/* BACKGROUND EFFECTS */}

  <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

  <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* MAIN CTA */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur sm:text-sm">
        Your Smile Matters
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
        Looking for a Dentist Near
        <span className="block">
          Sri Krishna Devaraya Nagar?
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-orange-50 sm:text-lg">
        If you are experiencing tooth pain, sensitivity, gum problems,
        missing teeth or any other dental concern, schedule an evaluation
        to understand the appropriate treatment for your needs.
      </p>

      {/* CTA BUTTONS */}

      <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

        <Link
          href="/#appointment"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
        >
          🦷 Book an Appointment
          <ArrowRight className="h-5 w-5" />
        </Link>

        <a
          href="tel:+918074528763"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
        >
          📞 +91 80745 28763
        </a>

      </div>

    </div>

    {/* CONTACT CARDS */}

    <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">

      {/* LOCATION */}

      <div className="rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-md">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">
          📍
        </div>

        <h3 className="mt-5 text-xl font-black">
          Visit Our Clinic
        </h3>

        <p className="mt-3 text-sm leading-7 text-orange-50">
          Ganapathi Complex, Navodaya Colony Road,
          <br />
          Sri Krishna Nagar, Ameerpet,
          <br />
          Hyderabad – 500073
        </p>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Dr%20Bhuvan%27s%20Dental%20Laser%20%26%20Implant%20Centre%20Ameerpet%20Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-orange-600 transition hover:bg-orange-50"
        >
          📍 Get Directions
        </a>

      </div>

      {/* CALL */}

      <div className="rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-md">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">
          📞
        </div>

        <h3 className="mt-5 text-xl font-black">
          Call Us
        </h3>

        <a
          href="tel:+918074528763"
          className="mt-3 block font-bold text-white hover:underline"
        >
          +91 80745 28763
        </a>

        <p className="mt-2 text-sm text-orange-50">
          Speak with our clinic team
        </p>

      </div>

      {/* WHATSAPP */}

      <div className="rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-md">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">
          💬
        </div>

        <h3 className="mt-5 text-xl font-black">
          WhatsApp Us
        </h3>

        <p className="mt-3 text-sm leading-7 text-orange-50">
          Have a question or want to enquire about an appointment?
          Message our clinic.
        </p>

        <a
          href="https://wa.me/918074528763"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-full bg-white px-6 py-3 font-bold text-orange-600 transition hover:bg-orange-50"
        >
          💬 Message Us
        </a>

      </div>

    </div>

    {/* FINAL LOCATION LINE */}

    <div className="mx-auto mt-12 max-w-3xl text-center">

      <p className="text-sm leading-7 text-orange-100 sm:text-base">
        <span className="font-bold text-white">
          Dr. Bhuvan&apos;s Dental Laser & Implant Centre
        </span>{" "}
        — comprehensive dental care near Sri Krishna Devaraya Nagar,
        Yellareddyguda and Ameerpet, Hyderabad.
      </p>

        </div>

  </div>

</section>
</>
  );
}