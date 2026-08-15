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
    "Teeth Cleaning & Scaling in Ameerpet, Hyderabad | Dr. Bhuvan",
  description:
    "Professional teeth cleaning and dental scaling in Ameerpet, Hyderabad by Dr. Bhuvanesh Yanamala, MDS Periodontist. Remove plaque, tartar and stains and maintain healthy gums.",
};

export default function TeethCleaningAmeerpetPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">

        {/* Background Blur */}
       <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

<div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Professional Teeth Cleaning & Gum Care
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight lg:text-6xl">
              Teeth Cleaning & Scaling in
              <span className="block text-white">
  Ameerpet, Hyderabad
</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">
              Remove plaque, tartar and surface stains with professional
              dental cleaning and scaling. Maintain healthier gums, fresher
              breath and a cleaner smile with personalized care by
              <strong>
                {" "}Dr. Bhuvanesh Yanamala, MDS Periodontist.
              </strong>
            </p>

            {/* Highlights */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Professional Plaque & Tartar Removal</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Ultrasonic Scaling & Professional Polishing</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Personalized Gum Health Assessment</span>
              </div>

            </div>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/#appointment"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-orange-600 transition hover:bg-orange-50"
              >
                <CalendarDays className="h-5 w-5" />
                Book Cleaning Appointment
              </Link>

              <a
                href="tel:+918074528763"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-700"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10 overflow-hidden rounded-3xl bg-white/10 p-4 shadow-2xl backdrop-blur">

              <Image
                src="/doctor.webp"
                alt="Dr Bhuvanesh Yanamala - Periodontist in Ameerpet Hyderabad"
                width={650}
                height={850}
                priority
                className="mx-auto max-h-[620px] w-full rounded-2xl object-cover object-top"
              />

            </div>

          </div>

        </div>

      </section>
      {/* ================= WHY PROFESSIONAL CLEANING ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
        Professional Dental Cleaning
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
        Why Do You Need Professional Teeth Cleaning?
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-600 md:text-xl">
        Daily brushing and flossing are essential for maintaining oral health,
        but hardened tartar cannot be completely removed with a toothbrush at
        home. Professional teeth cleaning helps remove plaque, tartar and
        certain surface stains from areas that are difficult to clean.
      </p>

    </div>

    {/* THREE HIGHLIGHTS */}

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      {/* CARD 1 */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg">
          🦷
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Remove Tartar
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Hardened tartar can build up around your teeth and gum line.
          Professional scaling helps remove these deposits safely.
        </p>

      </div>

      {/* CARD 2 */}

      <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg">
          🩸
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Support Healthy Gums
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Plaque and tartar around the gum line can contribute to gum
          inflammation. Regular professional cleaning supports better gum care.
        </p>

      </div>

      {/* CARD 3 */}

      <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg">
          ✨
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Cleaner Smile
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Professional cleaning and polishing can help remove certain
          external stains and leave your teeth feeling smoother and cleaner.
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= SIGNS YOU MAY NEED SCALING ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-14 text-center">

      <span className="rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600 shadow-sm">
        Signs You May Need Scaling
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
        Check Your Teeth & Gums
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
        If you notice any of these signs, it may be time for a professional
        dental cleaning and gum health evaluation.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* CARD 1 */}

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">🟡</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Yellow or Brown Deposits
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Visible yellow or brown deposits around the teeth, especially near
          the gum line, may indicate tartar build-up.
        </p>

      </div>

      {/* CARD 2 */}

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">🩸</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Bleeding Gums
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Gums that bleed while brushing or flossing should not be ignored
          and may require a professional gum evaluation.
        </p>

      </div>

      {/* CARD 3 */}

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">😮‍💨</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Persistent Bad Breath
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Persistent mouth odour can sometimes be associated with plaque,
          tartar or gum problems and deserves an oral health check.
        </p>

      </div>

      {/* CARD 4 */}

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">🦷</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Rough Tooth Surfaces
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          If your teeth feel rough or gritty even after brushing, hardened
          deposits may have formed on the tooth surfaces.
        </p>

      </div>

      {/* CARD 5 */}

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">🔴</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Red or Swollen Gums
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Red, swollen or tender gums can be signs of gum inflammation and
          should be professionally evaluated.
        </p>

      </div>

      {/* CARD 6 */}

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-5xl">✨</div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Visible Surface Stains
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Tea, coffee and other external stains may accumulate on the teeth.
          Professional cleaning and polishing can help reduce certain stains.
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= TEETH CLEANING PROCESS ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* SECTION HEADER */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
        Our Cleaning Process
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
        What Happens During Teeth Cleaning?
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Our professional teeth cleaning process is designed to remove
        plaque and tartar while keeping your teeth and gums comfortable.
      </p>

    </div>

    {/* PROCESS */}

    <div className="relative mt-20">

      {/* CONNECTING LINE - DESKTOP */}

      <div className="absolute left-[16%] right-[16%] top-10 hidden h-1 bg-orange-100 lg:block"></div>

      <div className="grid gap-12 md:grid-cols-3">

        {/* STEP 1 */}

        <div className="relative text-center">

          <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white shadow-xl ring-8 ring-orange-50">
            01
          </div>

          <div className="mt-8 rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
              🦷
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Dental Examination
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              We assess your teeth and gums to identify plaque, tartar,
              stains and signs of gum inflammation before cleaning.
            </p>

          </div>

        </div>

        {/* STEP 2 */}

        <div className="relative text-center">

          <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white shadow-xl ring-8 ring-orange-50">
            02
          </div>

          <div className="mt-8 rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
              ✨
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Ultrasonic Scaling
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Hardened tartar and plaque deposits are carefully removed
              from the tooth surfaces and around the gum line.
            </p>

          </div>

        </div>

        {/* STEP 3 */}

        <div className="relative text-center">

          <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white shadow-xl ring-8 ring-orange-50">
            03
          </div>

          <div className="mt-8 rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
              🪥
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Polishing & Aftercare
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Teeth are polished to help remove certain surface stains,
              followed by personalized advice for maintaining oral hygiene.
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* BOTTOM NOTE */}

    <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-orange-200 bg-orange-50 p-6 text-center">

      <p className="text-base leading-7 text-gray-700 md:text-lg">
        <span className="font-bold text-orange-600">
          Not every patient needs the same type of cleaning.
        </span>{" "}
        Your dentist will assess your teeth and gums and recommend the
        appropriate treatment based on your oral health.
      </p>

    </div>

  </div>

</section>
{/* ================= WHY CHOOSE US ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600 shadow-sm">
        Why Choose Us
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
        Trusted Teeth Cleaning in Ameerpet
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        At Dr. Bhuvan’s Dental Laser & Implant Centre, we focus on
        personalized dental care with special attention to your teeth,
        gums and overall oral health.
      </p>

    </div>

    {/* FEATURES */}

    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* FEATURE 1 */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🩺
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          MDS Periodontist
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Your gum health and dental cleaning are evaluated with a
          periodontics-focused approach.
        </p>

      </div>

      {/* FEATURE 2 */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          🔬
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Laser Dentistry
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Laser dentistry is available as part of our comprehensive
          approach to dental and gum care.
        </p>

      </div>

      {/* FEATURE 3 */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          👨‍⚕️
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Personalized Care
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Every patient receives an individualized assessment and
          treatment plan based on their oral health needs.
        </p>

      </div>

      {/* FEATURE 4 */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
          📍
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Conveniently in Ameerpet
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Conveniently located in Ameerpet, Hyderabad for routine
          dental cleaning and gum care.
        </p>

      </div>

    </div>

    {/* TRUST BANNER */}

    <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700 p-8 text-white shadow-2xl md:p-10">

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

        <div>

          <h3 className="text-2xl font-black md:text-3xl">
            Looking for professional teeth cleaning in Ameerpet?
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-orange-50">
            Get your teeth and gums professionally assessed and
            understand the right cleaning approach for your oral health.
          </p>

        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

          <a
            href="https://wa.me/918074528763"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3 text-center font-bold text-orange-600 transition hover:bg-orange-50"
          >
            💬 WhatsApp Us
          </a>

          <a
            href="tel:+918074528763"
            className="rounded-full border-2 border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-orange-600"
          >
            📞 Call Now
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= CLEANING VS SCALING VS POLISHING ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
        Know The Difference
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
        Teeth Cleaning vs Scaling vs Polishing
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
        These terms are often used together, but each describes a different
        part of professional dental cleaning. Here&apos;s a simple way to
        understand them.
      </p>

    </div>

    {/* COMPARISON CARDS */}

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      {/* TEETH CLEANING */}

      <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="absolute right-5 top-4 text-7xl font-black text-orange-100">
          01
        </div>

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
            🦷
          </div>

          <h3 className="mt-6 text-2xl font-black text-gray-900">
            Teeth Cleaning
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Professional teeth cleaning is the overall procedure used to
            remove plaque, tartar and certain surface stains from your teeth.
          </p>

          <div className="mt-6 border-t border-orange-200 pt-5">

            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Main Goal
            </p>

            <p className="mt-2 font-semibold text-gray-800">
              Maintain cleaner teeth and healthier gums
            </p>

          </div>

        </div>

      </div>

      {/* SCALING */}

      <div className="relative overflow-hidden rounded-3xl border-2 border-orange-400 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="absolute right-5 top-4 text-7xl font-black text-orange-100">
          02
        </div>

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
            ✨
          </div>

          <h3 className="mt-6 text-2xl font-black text-gray-900">
            Dental Scaling
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Scaling focuses on removing hardened plaque and tartar deposits
            from tooth surfaces and around the gum line using professional
            dental instruments.
          </p>

          <div className="mt-6 border-t border-orange-200 pt-5">

            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Main Goal
            </p>

            <p className="mt-2 font-semibold text-gray-800">
              Remove plaque and hardened tartar deposits
            </p>

          </div>

        </div>

      </div>

      {/* POLISHING */}

      <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="absolute right-5 top-4 text-7xl font-black text-orange-100">
          03
        </div>

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
            💎
          </div>

          <h3 className="mt-6 text-2xl font-black text-gray-900">
            Teeth Polishing
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Polishing helps smooth the tooth surfaces and can reduce certain
            external stains remaining after professional scaling.
          </p>

          <div className="mt-6 border-t border-orange-200 pt-5">

            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Main Goal
            </p>

            <p className="mt-2 font-semibold text-gray-800">
              Smooth tooth surfaces and improve cleanliness
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* IMPORTANT INFO */}

    <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-orange-50 p-7 md:p-9">

      <div className="flex flex-col gap-5 sm:flex-row">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl text-white">
          ✓
        </div>

        <div>

          <h3 className="text-xl font-bold text-gray-900">
            Which one do you need?
          </h3>

          <p className="mt-2 leading-8 text-gray-600">
            The type of cleaning you need depends on the amount of plaque
            and tartar present and the condition of your gums. We assess your
            oral health first and recommend the appropriate cleaning approach.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= FAQ ================= */}

<section className="bg-orange-50 py-24">

  <div className="mx-auto max-w-5xl px-6">

    {/* HEADER */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600 shadow-sm">
        Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
        Teeth Cleaning & Scaling FAQs
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Have questions about professional teeth cleaning or dental scaling?
        Here are answers to some common questions patients ask.
      </p>

    </div>

    {/* FAQ LIST */}

    <div className="mt-14 space-y-5">

      {/* FAQ 1 */}

      <details className="group rounded-2xl bg-white p-6 shadow-md">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-gray-900">
          Is teeth scaling painful?

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 border-t border-gray-100 pt-5 leading-8 text-gray-600">
          Professional scaling is generally well tolerated. Some patients
          may experience temporary sensitivity, particularly when there is
          significant tartar build-up or gum inflammation. Your dentist can
          adjust the procedure according to your comfort.
        </p>
      </details>

      {/* FAQ 2 */}

      <details className="group rounded-2xl bg-white p-6 shadow-md">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-gray-900">
          Does scaling damage the enamel?

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 border-t border-gray-100 pt-5 leading-8 text-gray-600">
          Professional dental scaling is designed to remove plaque and
          hardened tartar from the tooth surfaces. It does not involve
          intentionally removing healthy tooth enamel.
        </p>
      </details>

      {/* FAQ 3 */}

      <details className="group rounded-2xl bg-white p-6 shadow-md">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-gray-900">
          How often should I get my teeth professionally cleaned?

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 border-t border-gray-100 pt-5 leading-8 text-gray-600">
          The ideal frequency depends on your oral health, plaque and tartar
          build-up, gum condition and individual risk factors. Your dentist
          can recommend a cleaning schedule suited to your needs.
        </p>
      </details>

      {/* FAQ 4 */}

      <details className="group rounded-2xl bg-white p-6 shadow-md">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-gray-900">
          Can scaling create gaps between my teeth?

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 border-t border-gray-100 pt-5 leading-8 text-gray-600">
          Scaling does not create new spaces between healthy teeth. When
          heavy tartar deposits are removed, spaces that were previously
          hidden by tartar or inflamed gums may become more noticeable.
        </p>
      </details>

      {/* FAQ 5 */}

      <details className="group rounded-2xl bg-white p-6 shadow-md">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-gray-900">
          Can teeth cleaning remove yellow stains?

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 border-t border-gray-100 pt-5 leading-8 text-gray-600">
          Professional cleaning and polishing can help remove certain
          external stains caused by tea, coffee and similar factors.
          However, not all types of tooth discoloration are surface stains.
        </p>
      </details>

      {/* FAQ 6 */}

      <details className="group rounded-2xl bg-white p-6 shadow-md">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-gray-900">
          How much does teeth cleaning cost in Ameerpet?

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 border-t border-gray-100 pt-5 leading-8 text-gray-600">
          The cost can vary depending on the amount of tartar, gum condition
          and the type of cleaning required. We recommend an examination
          before confirming the appropriate treatment and cost.
        </p>
      </details>

    </div>

  </div>

</section>
{/* ================= FINAL CTA ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-24 text-white">

  {/* Background Effects */}

  <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

  <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"></div>

  <div className="relative mx-auto max-w-6xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-widest backdrop-blur">
        Professional Dental Cleaning in Ameerpet
      </span>

      <h2 className="mt-7 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
        Ready for a Cleaner,
        <span className="block text-orange-100">
          Healthier Smile?
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-orange-50 md:text-xl">
        If you have tartar, bleeding gums, bad breath or visible deposits,
        schedule a professional teeth cleaning and gum evaluation at
        Dr. Bhuvan’s Dental Laser & Implant Centre in Ameerpet, Hyderabad.
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
        className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-9 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-orange-600"
      >
        📞 Call Now
      </a>

    </div>

    {/* CLINIC INFO */}

    <div className="mt-16 grid gap-6 md:grid-cols-3">

     {/* LOCATION */}

<div className="rounded-3xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur">

  <div className="text-4xl">📍</div>

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
    Sri Krishna Nagar, Ameerpet,
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

      {/* TIMINGS */}

      <div className="rounded-3xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur">

        <div className="text-4xl">🕐</div>

        <h3 className="mt-4 text-xl font-bold">
          Clinic Timings
        </h3>

        <p className="mt-3 text-sm leading-7 text-orange-50">
          Monday – Saturday
          <br />
          10:00 AM – 2:00 PM
          <br />
          4:00 PM – 9:00 PM
          <br /><br />
          Sunday
          <br />
          10:00 AM – 2:00 PM
        </p>

      </div>

     {/* CONTACT */}

<div className="rounded-3xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur">

  <div className="text-4xl">📞</div>

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

  </div>

</section>


    </main>
  );

}