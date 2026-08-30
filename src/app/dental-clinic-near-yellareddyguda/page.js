import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

export const metadata = {
  title:
    "Dental Clinic Near Yellareddyguda | Dr. Bhuvan's Dental Laser & Implant Centre",
  description:
    "Looking for a dental clinic near Yellareddyguda? Dr. Bhuvan's Dental Laser & Implant Centre provides root canal treatment, dental implants, teeth cleaning, gum care and comprehensive dental care near Yellareddyguda and Ameerpet, Hyderabad.",
  keywords: [
    "dental clinic near yellareddyguda",
    "dentist near yellareddyguda",
    "dental clinic yellareddyguda",
    "dentist yellareddyguda",
    "dental clinic near yellareddyguda hyderabad",
    "dentist near yellareddyguda hyderabad",
  ],
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dental-clinic-near-yellareddyguda",
  },
  openGraph: {
    title:
      "Dental Clinic Near Yellareddyguda | Dr. Bhuvan's Dental Laser & Implant Centre",
    description:
      "Comprehensive dental care near Yellareddyguda and Ameerpet, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com/dental-clinic-near-yellareddyguda",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
  },
};

export default function DentalClinicNearYellareddyguda() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                <MapPin className="h-4 w-4" />
                Near Yellareddyguda & Ameerpet
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Dental Clinic Near
                <span className="block text-white">
                  Yellareddyguda
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
                Looking for a reliable dental clinic near Yellareddyguda?
                Dr. Bhuvan&apos;s Dental Laser & Implant Centre provides
                comprehensive dental care near Yellareddyguda and Ameerpet,
                Hyderabad.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/#appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  Book an Appointment
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href="tel:+918074528763"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-orange-600"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>

              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-orange-50">

                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                  <span>
                    Trusted by our patients
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>
                    Comprehensive Dental Care
                  </span>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -inset-5 rounded-[3rem] bg-white/10 blur-2xl" />

              <div className="relative rounded-[2.5rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md sm:p-10">

                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white/15 text-6xl backdrop-blur">
                  🦷
                </div>

                <h2 className="mt-7 text-center text-2xl font-black sm:text-3xl">
                  Complete Dental Care
                </h2>

                <p className="mt-4 text-center leading-8 text-orange-50">
                  From preventive care to restorative, gum and implant
                  dentistry, our team can help you understand the right
                  treatment for your dental needs.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl">🦷</div>
                    <p className="mt-2 text-sm font-semibold">
                      Root Canal
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl">✨</div>
                    <p className="mt-2 text-sm font-semibold">
                      Dental Implants
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl">🪥</div>
                    <p className="mt-2 text-sm font-semibold">
                      Teeth Cleaning
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl">🛡️</div>
                    <p className="mt-2 text-sm font-semibold">
                      Gum Care
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
              Dental Services Near Yellareddyguda
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Whether you need relief from tooth pain, routine teeth cleaning,
              root canal treatment, dental implants or gum care, our clinic
              provides a range of dental treatments near Yellareddyguda and
              Ameerpet, Hyderabad.
            </p>

          </div>

          {/* SERVICE CARDS */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* ROOT CANAL */}

            <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🦷
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Root Canal Treatment
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Treatment for teeth affected by deep decay, pulp infection,
                persistent pain or other problems affecting the inside of
                the tooth.
              </p>

              <Link
                href="/root-canal-treatment-yousufguda"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* TEETH CLEANING */}

            <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🪥
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Teeth Cleaning & Scaling
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Professional teeth cleaning, scaling and polishing can help
                remove plaque, tartar and surface stains while supporting
                better oral hygiene.
              </p>

              <Link
                href="/teeth-cleaning-ameerpet"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* DENTAL IMPLANTS */}

            <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                ✨
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Dental Implants
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Dental implants may be considered for replacing missing teeth
                and restoring chewing function, appearance and oral
                confidence.
              </p>

              <Link
                href="/dental-implants-ameerpet"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* GUM TREATMENT */}

            <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🛡️
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Gum & Laser Treatment
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Dental evaluation and gum care for problems such as bleeding
                gums, gum inflammation and other periodontal concerns.
              </p>

              <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Gum Care
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* COSMETIC DENTISTRY */}

            <div className="group rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                😁
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Cosmetic Dentistry
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Cosmetic dental options can help improve the appearance of
                teeth and create a more confident, natural-looking smile.
              </p>

              <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Cosmetic Care
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* WISDOM TOOTH */}

            <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                🦷
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                Wisdom Tooth Care
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Evaluation and treatment planning for wisdom tooth pain,
                swelling, impaction and other problems affecting the last
                molars.
              </p>

              <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          {/* BOTTOM NOTE */}

          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-orange-50 p-7 text-center md:p-9">

            <p className="text-base leading-8 text-gray-600 md:text-lg">
              <span className="font-bold text-orange-600">
                Looking for a dental clinic near Yellareddyguda?
              </span>{" "}
              Our clinic is conveniently located in Sri Krishna Nagar,
              Ameerpet, and provides comprehensive dental care for patients
              from Yellareddyguda and nearby areas.
            </p>

          </div>

        </div>

      </section>
            {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-orange-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT CONTENT */}

            <div>

              <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm sm:text-sm">
                Why Choose Us
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                Personalized Dental Care Near Yellareddyguda
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, every
                treatment begins with understanding your dental concerns,
                examining your oral health and discussing the appropriate
                treatment options with you.
              </p>

              <div className="mt-10 space-y-6">

                {/* POINT 1 */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Comprehensive Dental Evaluation
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Your symptoms, oral health and tooth condition are
                      assessed before deciding on the appropriate treatment.
                    </p>
                  </div>

                </div>

                {/* POINT 2 */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Modern Dental Techniques
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Modern dental technology and treatment techniques are
                      used where appropriate for your individual dental needs.
                    </p>
                  </div>

                </div>

                {/* POINT 3 */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Patient-Focused Care
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Your concerns, comfort and treatment preferences are
                      considered throughout your dental care journey.
                    </p>
                  </div>

                </div>

                {/* POINT 4 */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-md">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Multiple Dental Treatments
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      From preventive and restorative dentistry to gum care,
                      root canal treatment and dental implants, different
                      dental needs can be addressed at one clinic.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT VISUAL */}

            <div className="relative">

              <div className="absolute -inset-5 rounded-[3rem] bg-orange-200/60 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-8 text-white shadow-2xl sm:p-10">

                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl" />

                <div className="relative">

                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white/15 text-7xl backdrop-blur">
                    🦷
                  </div>

                  <h3 className="mt-8 text-center text-3xl font-black">
                    Your Smile Deserves Care
                  </h3>

                  <p className="mt-5 text-center leading-8 text-orange-50">
                    Whether you are experiencing tooth pain, sensitivity,
                    gum problems or missing teeth, an appropriate dental
                    evaluation can help identify the right treatment for you.
                  </p>

                  {/* TRUST POINTS */}

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <div className="text-2xl">🩺</div>
                      <p className="mt-2 text-sm font-bold">
                        Personalized Evaluation
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <div className="text-2xl">🦷</div>
                      <p className="mt-2 text-sm font-bold">
                        Comprehensive Care
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <div className="text-2xl">✨</div>
                      <p className="mt-2 text-sm font-bold">
                        Modern Techniques
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <div className="text-2xl">❤️</div>
                      <p className="mt-2 text-sm font-bold">
                        Patient-Focused Care
                      </p>
                    </div>

                  </div>

                  {/* CTA */}

                  <div className="mt-8 text-center">

                    <Link
                      href="/#appointment"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-xl transition hover:-translate-y-1 hover:bg-orange-50"
                    >
                      Book an Appointment
                      <ArrowRight className="h-5 w-5" />
                    </Link>

                  </div>

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
              Dental problems can range from occasional sensitivity to
              persistent pain or gum concerns. A dental examination can help
              identify the cause and determine the appropriate treatment.
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
                Persistent or severe tooth pain can have several possible
                causes, including decay, infection, cracks or problems
                affecting the tooth pulp.
              </p>

              <div className="mt-7">
                <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                  Dental Evaluation Available
                </span>
              </div>

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
                Pain, swelling or discomfort around a wisdom tooth may occur
                due to impaction, inflammation, infection or limited space.
                Evaluation can help determine the appropriate treatment.
              </p>

              <div className="mt-7">
                <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                  Evaluation & Treatment Planning
                </span>
              </div>

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
                Persistent bad breath can sometimes be associated with oral
                hygiene problems, gum disease, tongue coating or other dental
                conditions and may require professional evaluation.
              </p>

              <div className="mt-7">
                <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                  Oral Health Evaluation
                </span>
              </div>

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
                Sensitivity to hot, cold, sweet or acidic foods can have
                different causes. A dental examination can help identify the
                underlying reason and guide treatment.
              </p>

              <div className="mt-7">
                <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                  Dental Assessment Available
                </span>
              </div>

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
                Bleeding while brushing or flossing can sometimes indicate
                gum inflammation or other periodontal concerns and should not
                be routinely ignored.
              </p>

              <div className="mt-7">
                <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                  Gum Health Assessment
                </span>
              </div>

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
                Missing teeth can affect chewing, appearance and overall oral
                function. Different replacement options may be considered
                depending on your dental condition.
              </p>

              <Link
                href="/dental-implants-ameerpet"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all duration-300 group-hover:translate-x-2 hover:text-orange-700"
              >
                Explore Dental Implants
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          {/* IMPORTANT NOTE */}

          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-orange-50 p-7 text-center md:p-9">

            <p className="text-base leading-8 text-gray-600 md:text-lg">
              <span className="font-bold text-orange-600">
                Dental symptoms can have different causes.
              </span>{" "}
              A professional examination is important before deciding which
              treatment is appropriate for your individual situation.
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
              Convenient Dental Care Near Yellareddyguda
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Our dental clinic is located in Sri Krishna Nagar, Ameerpet,
              making it a convenient option for patients visiting from
              Yellareddyguda and nearby parts of Hyderabad.
            </p>

          </div>

          {/* LOCATION CONTENT */}

          <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">

            {/* ADDRESS CARD */}

            <div className="rounded-[2rem] bg-white p-8 shadow-xl sm:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white shadow-lg">
                📍
              </div>

              <h3 className="mt-7 text-2xl font-black text-gray-900">
                Our Clinic Location
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Dr. Bhuvan&apos;s Dental Laser & Implant Centre is located at:
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
                Patients looking for dental care near Yellareddyguda can
                conveniently reach our clinic in the Ameerpet area. We also
                provide dental care for patients from several nearby
                localities.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                  <p className="font-semibold">Yellareddyguda</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                  <p className="font-semibold">Ameerpet</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                  <p className="font-semibold">Yousufguda</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                  <p className="font-semibold">Srinagar Colony</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                  <p className="font-semibold">SR Nagar</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                  <p className="font-semibold">Navodaya Colony</p>
                </div>

              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">

                <p className="text-sm leading-7 text-orange-50">
                  <span className="font-bold text-white">
                    Looking for a dentist near Yellareddyguda?
                  </span>{" "}
                  Contact our clinic to discuss your dental concern and
                  schedule an appointment.
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
              Trusted Dental Care Near Yellareddyguda
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Choosing a dentist is about more than treatment. It is also
              about feeling comfortable, understood and confident in your
              dental care.
            </p>

          </div>

          {/* TRUST CARD */}

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
                  Every Smile Matters
                </h3>

                <p className="mt-5 leading-8 text-orange-50">
                  We are grateful to every patient who has trusted us with
                  their dental care. Our focus is on understanding individual
                  dental needs and providing appropriate treatment with
                  attention to comfort and long-term oral health.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-semibold">
                      Patient-focused care
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-semibold">
                      Comprehensive dentistry
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
                      Personalized treatment
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* REVIEW CTA */}

          <div className="mt-10 text-center">

            <p className="text-base text-gray-600">
              See what our patients have to say about their experience.
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
              Dental Clinic Near Yellareddyguda – FAQs
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Here are answers to some common questions patients may have
              when looking for dental care near Yellareddyguda and Ameerpet.
            </p>

          </div>

          {/* FAQ GRID */}

          <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">

            {/* FAQ 1 */}

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

              <h3 className="text-xl font-black text-gray-900">
                Is there a dental clinic near Yellareddyguda?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Yes. Dr. Bhuvan&apos;s Dental Laser & Implant Centre is located
                in Sri Krishna Nagar, Ameerpet, and provides comprehensive
                dental care for patients from Yellareddyguda and nearby areas.
              </p>

            </div>

            {/* FAQ 2 */}

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

              <h3 className="text-xl font-black text-gray-900">
                How far is the clinic from Yellareddyguda?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                The clinic is located in the Ameerpet area near Sri Krishna
                Nagar. Travel time can vary depending on your starting point
                and traffic conditions, so patients can use Google Maps for
                the most accurate route.
              </p>

            </div>

            {/* FAQ 3 */}

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

              <h3 className="text-xl font-black text-gray-900">
                What dental treatments are available?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Dental care includes root canal treatment, teeth cleaning and
                scaling, dental implants, gum care, cosmetic dentistry and
                other treatments based on individual dental needs.
              </p>

            </div>

            {/* FAQ 4 */}

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

              <h3 className="text-xl font-black text-gray-900">
                Do you treat tooth pain?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Yes. Tooth pain can have several causes, including tooth
                decay, infection, cracks or problems affecting the pulp. A
                dental examination can help identify the cause and determine
                the appropriate treatment.
              </p>

            </div>

            {/* FAQ 5 */}

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

              <h3 className="text-xl font-black text-gray-900">
                Do you provide root canal treatment?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Yes. Root canal treatment is provided when a tooth has an
                affected or infected pulp and the tooth is considered
                suitable for restoration.
              </p>

              <Link
                href="/root-canal-treatment-yousufguda"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
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
                Professional teeth cleaning, scaling and polishing are
                available to help remove plaque, tartar and surface stains
                and support better oral hygiene.
              </p>

              <Link
                href="/teeth-cleaning-ameerpet"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
              >
                Learn About Teeth Cleaning
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* FAQ 7 */}

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

              <h3 className="text-xl font-black text-gray-900">
                How can I book a dental appointment?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                You can contact the clinic directly by phone or use the
                appointment option on the website to enquire about your
                preferred date and time.
              </p>

            </div>

            {/* FAQ 8 */}

            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-lg">

              <h3 className="text-xl font-black text-gray-900">
                Where is Dr. Bhuvan&apos;s Dental Clinic located?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                The clinic is located at Ganapathi Complex, Navodaya Colony
                Road, Sri Krishna Nagar, Ameerpet, Hyderabad, Telangana –
                500073.
              </p>

            </div>

          </div>

          {/* FAQ NOTE */}

          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-orange-200 bg-white p-7 text-center shadow-sm md:p-9">

            <p className="leading-8 text-gray-600 md:text-lg">
              <span className="font-bold text-orange-600">
                Still have questions about your dental concern?
              </span>{" "}
              Contact our clinic and discuss your symptoms with our dental
              team before deciding on a treatment.
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
              Looking for a Dentist Near Yellareddyguda?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-orange-50 sm:text-lg">
              If you have tooth pain, sensitivity, gum problems, missing
              teeth or any other dental concern, schedule an evaluation to
              understand the appropriate treatment for your needs.
            </p>

            {/* BUTTONS */}

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
                <Phone className="h-5 w-5" />
                +91 80745 28763
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
                Message Us
              </a>

            </div>

          </div>

          {/* FINAL TRUST LINE */}

          <div className="mx-auto mt-12 max-w-3xl text-center">

            <p className="text-sm leading-7 text-orange-100 sm:text-base">
              <span className="font-bold text-white">
                Dr. Bhuvan&apos;s Dental Laser & Implant Centre
              </span>{" "}
              — comprehensive dental care near Yellareddyguda and Ameerpet,
              Hyderabad.
            </p>

          </div>

        </div>

      </section>
          </main>
  );
}