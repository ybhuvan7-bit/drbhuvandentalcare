import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  IceCream,
  Phone,
  ShieldCheck,
  AlertCircle,
  Scissors,
} from "lucide-react";

export const metadata = {
  title:
    "Post-Operative Instructions After Tooth Extraction | Dr. Bhuvan's Dental",

  description:
    "Post-operative instructions after tooth extraction and oral surgery from Dr. Bhuvan's Dental Laser & Implant Centre, Yousufguda, Hyderabad.",

  keywords: [
    "post operative instructions tooth extraction",
    "tooth extraction aftercare",
    "after tooth extraction instructions",
    "oral surgery post operative instructions",
    "tooth removal aftercare Hyderabad",
    "Dr Bhuvan dental post operative instructions",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/post-operative-instructions",
  },

  openGraph: {
    title:
      "Post-Operative Instructions After Tooth Extraction | Dr. Bhuvan's Dental",
    description:
      "Important aftercare instructions following tooth extraction and oral surgery.",
    url:
      "https://www.drbhuvandentalcare.com/post-operative-instructions",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
    locale: "en_IN",
  },
};

const firstDay = [
  "After your treatment, keep the cotton firmly in place by biting on it for 30–60 minutes.",
  "After removing the cotton, you may have normal ice cream.",
  "Apply an ice pack intermittently during the first 1–2 hours. Keep it on for only 5–10 minutes at a time and take breaks. Do not keep the ice pack continuously on the area.",
  "Do not spit, rinse your mouth forcefully or smoke for at least 24 hours.",
  "Avoid carbonated drinks and alcoholic beverages for at least 24 hours.",
  "It is important not to disturb the blood clot formed at the surgical site, as it helps prevent excessive bleeding.",
  "Take soft foods. Avoid very hot and spicy foods.",
];

const dayTwoSymptoms = [
  "Mild pain",
  "Swelling",
  "Blue or dark patches under the skin",
  "Difficulty opening or closing the mouth",
  "Pain around the jaw or ear",
  "Sore throat",
];

const oralHygiene = [
  "Brush your teeth gently and carefully.",
  "You may gently rinse with warm water containing a small amount of salt.",
  "Do not spit the rinsing water forcefully. Bend your mouth downward and allow the water to flow out naturally.",
  "The corners of your lips may become dry or cracked. Use a moisturiser when needed.",
];

const bleedingSteps = [
  "Place 1–2 folded pieces of cotton/gauze over the surgical area.",
  "Apply firm pressure for 30–60 minutes.",
  "Keep your head slightly elevated.",
  "If the bleeding does not reduce, contact the clinic.",
];

export default function PostOperativeInstructionsPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 text-center lg:pb-24 lg:pt-40">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <ShieldCheck size={30} />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-orange-100">
            Patient Care Guide
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Post-Operative Instructions
            <span className="block text-orange-100">
              After Tooth Extraction & Oral Surgery
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-50">
            Follow these instructions carefully after your dental procedure to
            support comfortable recovery and protect the treated area.
          </p>

        </div>
      </section>

      {/* IMPORTANT */}
      <section className="bg-[#fff8f1] py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
                <AlertCircle size={21} />
              </div>

              <div>
                <h2 className="text-xl font-black">
                  Important
                </h2>

                <p className="mt-2 leading-7 text-slate-600">
                  Follow the instructions provided by your treating dentist
                  and take medicines only as prescribed. If you experience
                  unusual symptoms, have concerns, or develop problems after
                  surgery, contact our clinic promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST DAY */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
              <Clock3 size={23} />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
                Day 1
              </p>
              <h2 className="mt-1 text-3xl font-black sm:text-4xl">
                First 24 Hours
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4">
            {firstDay.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-orange-500"
                  size={21}
                />

                <p className="leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DAY TWO */}
      <section className="bg-[#fff8f1] py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">

          <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
            Day 2
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            What You May Experience
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Some symptoms may occur on the second day and can be normal to a
            certain extent. Give your body adequate rest and avoid strenuous
            activity.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {dayTwoSymptoms.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-orange-100 bg-white p-5 font-bold text-slate-700 shadow-sm"
              >
                <CheckCircle2
                  className="mr-3 inline-block text-orange-500"
                  size={19}
                />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
            <p className="leading-7 text-slate-300">
              Avoid heavy lifting, spitting, alcohol and smoking during this
              period.
            </p>
          </div>

        </div>
      </section>

      {/* ORAL HYGIENE */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">

          <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
            Oral Hygiene
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Keep Your Mouth Clean — Gently
          </h2>

          <div className="mt-10 grid gap-4">
            {oralHygiene.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-orange-100 bg-orange-50/50 p-5"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-orange-500"
                  size={21}
                />

                <p className="leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PAIN + SWELLING */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">

          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-2xl font-black">
              Pain or Discomfort
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              If you experience pain or discomfort, take the pain-relieving
              medicines prescribed by your doctor only according to the
              prescribed dosage.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-3">
              <IceCream className="text-orange-500" size={23} />

              <h2 className="text-2xl font-black">
                Swelling
              </h2>
            </div>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Apply an ice pack during the first 24 hours.</li>
              <li>• Apply it for about 10 minutes at a time and take a break.</li>
              <li>• Swelling generally reduces within 72 hours.</li>
              <li>• If there is no change in the swelling, contact the clinic.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* BLEEDING */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">

          <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
            If Bleeding Occurs
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Managing Bleeding
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            A small amount of bleeding during the first 12–24 hours can be
            normal.
          </p>

          <div className="mt-8 rounded-[2rem] bg-[#fff8f1] p-7">
            <h3 className="text-xl font-black">
              If bleeding is more than expected:
            </h3>

            <div className="mt-6 space-y-4">
              {bleedingSteps.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <p className="pt-1 leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SUTURES */}
      <section className="bg-slate-900 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
            <Scissors size={23} />
          </div>

          <h2 className="mt-6 text-3xl font-black sm:text-4xl">
            If You Have Sutures
          </h2>

          <div className="mt-7 space-y-4 text-slate-300">
            <p className="leading-8">
              If you have sutures, do not touch, pull or play with them using
              your fingers.
            </p>

            <p className="leading-8">
              Generally, you may need to return to the clinic after 7–10 days
              for suture removal.
            </p>
          </div>

        </div>
      </section>

      {/* MEDICINES */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">

          <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
            Medicines
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Take Medicines as Prescribed
          </h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 leading-8 text-slate-700">
              If your doctor has prescribed antibiotics, complete the prescribed
              course even if your symptoms improve.
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 leading-8 text-slate-700">
              If pain-relieving medicines have been prescribed, use them only
              as directed by your doctor.
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-black sm:text-4xl">
            Need Help After Your Procedure?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50">
            If you notice unusual symptoms, have any concerns or experience
            problems after surgery, please contact our clinic.
          </p>

          <a
            href="tel:+918074528763"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-black text-orange-600 shadow-xl transition hover:-translate-y-1"
          >
            <Phone size={18} />
            Call 80745 28763
          </a>

          <p className="mt-7 text-sm font-bold text-orange-100">
            Dr. Bhuvan&apos;s Dental Laser & Implant Centre
          </p>

          <p className="mt-1 text-sm text-orange-100">
            Ganapati Complex, Navodaya Colony Road, Yousufguda, Hyderabad
          </p>

        </div>
      </section>

      {/* BACK */}
      <div className="bg-white py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700"
        >
          <ArrowLeft size={17} />
          Back to Dr. Bhuvan&apos;s Dental
        </Link>
      </div>

    </main>
  );
}