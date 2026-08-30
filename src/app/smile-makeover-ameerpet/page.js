import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Heart,
  Smile,
  Star,
} from "lucide-react";
export const metadata = {
  title: "Smile Makeover in Ameerpet, Hyderabad | Dr. Bhuvan's Dental",
  description:
    "Improve the appearance of your smile with personalized smile makeover treatment in Ameerpet, Hyderabad. Explore cosmetic dental options at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "smile makeover in Ameerpet",
    "smile makeover Ameerpet Hyderabad",
    "cosmetic dentist Ameerpet",
    "smile designing Ameerpet",
    "best smile makeover dentist Ameerpet",
  ],
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/smile-makeover-ameerpet",
  },
};

const faqs = [
  {
    question: "What is a smile makeover?",
    answer:
      "A smile makeover is a personalized approach to improving the appearance of your smile. Depending on your needs, treatment may involve one or more cosmetic dental procedures.",
  },
  {
    question: "Who may consider a smile makeover?",
    answer:
      "People who are concerned about the appearance of their teeth, such as tooth shape, colour, spacing, or the overall appearance of their smile, may consider a smile makeover after a dental evaluation.",
  },
  {
    question: "Is every smile makeover the same?",
    answer:
      "No. Every smile is different. Treatment is planned according to your dental condition, aesthetic concerns, expectations, and the procedures that are appropriate for you.",
  },
  {
    question: "How do I know which cosmetic treatment is right for me?",
    answer:
      "A dental examination is the best way to determine suitable treatment options. Your dentist can assess your teeth and gums and discuss the possible approaches with you.",
  },
  {
    question: "Can I combine different cosmetic dental treatments?",
    answer:
      "Depending on your dental needs, more than one procedure may be considered as part of a comprehensive smile makeover plan.",
  },
];

export default function SmileMakeoverPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-orange-400">
              <Sparkles className="h-4 w-4" />
              Smile Makeover
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Smile Makeover in{" "}
              <span className="text-orange-500">
                Ameerpet, Hyderabad
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
              A confident smile starts with understanding what you want to
              improve. Explore personalized cosmetic dental options designed
              around your teeth, facial appearance, and smile goals.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Book a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Call +91 80745 28763
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">
            <span className="font-bold uppercase tracking-widest text-orange-500">
              A Personalized Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              What Is a Smile Makeover?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A smile makeover focuses on improving the appearance of your
              smile through carefully planned cosmetic dental treatment.
              Depending on your individual needs, different procedures may
              be considered to address the colour, shape, alignment, spacing,
              or overall appearance of your teeth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <Smile className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Smile Appearance
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Address concerns related to the appearance of your teeth and
                create a more harmonious smile.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <Heart className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Personalized Planning
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Treatment planning is based on your dental condition,
                expectations, and aesthetic goals.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Dental Evaluation
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                A dental examination helps determine which cosmetic options
                are appropriate for your smile.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* POSSIBLE TREATMENTS */}
      <section className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">
            <span className="font-bold uppercase tracking-widest text-orange-500">
              Cosmetic Dentistry
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Smile Makeover Treatment Options
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Depending on your individual smile and dental condition, your
              treatment plan may involve one or more cosmetic or restorative
              dental procedures.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {[
              "Teeth whitening",
              "Dental veneers",
              "Tooth-coloured restorations",
              "Cosmetic dental bonding",
              "Dental crowns",
              "Treatment for spaces between teeth",
              "Replacement of damaged or missing teeth",
              "Other personalized cosmetic dental procedures",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-orange-500" />

                <span className="font-semibold text-gray-800">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHEN TO CONSIDER */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="font-bold uppercase tracking-widest text-orange-500">
              Is It Right For You?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              When Should You Consider a Smile Makeover?
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              You may consider discussing a smile makeover if you are unhappy
              with the appearance of your smile or have multiple cosmetic
              dental concerns.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Discoloured or stained teeth",
                "Uneven or irregular tooth shape",
                "Visible spaces between teeth",
                "Worn or damaged teeth",
                "Concerns about the overall appearance of your smile",
                "Multiple cosmetic concerns that may benefit from coordinated planning",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                  <p className="font-medium text-gray-700">{item}</p>
                </div>
              ))}

            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">
              <Sparkles className="h-8 w-8" />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              Your Smile Is Unique
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              There is no single treatment that is right for everyone. A
              consultation allows your dentist to understand your concerns,
              evaluate your teeth and gums, and discuss suitable options.
            </p>

            <Link
              href="/#appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold transition hover:bg-orange-600"
            >
              Discuss Your Smile
              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-orange-50 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">
            <span className="font-bold uppercase tracking-widest text-orange-600">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Smile Makeover Consultation Process
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Understand Your Goals",
                text: "We discuss what you would like to improve about your smile and understand your expectations.",
              },
              {
                number: "02",
                title: "Evaluate Your Smile",
                text: "Your teeth and gums are examined to understand your dental condition and suitable treatment possibilities.",
              },
              {
                number: "03",
                title: "Plan Your Treatment",
                text: "A personalized treatment approach is discussed based on your needs and the options appropriate for you.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-white p-8 shadow-md"
              >
                <span className="text-4xl font-extrabold text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <span className="font-bold uppercase tracking-widest text-orange-500">
              Dr. Bhuvan's Dental
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Personalized Dental Care in Ameerpet
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-lg">
              <Star className="mx-auto h-8 w-8 text-orange-500" />
              <h3 className="mt-5 text-xl font-bold">
                Personalized Care
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Treatment discussions are tailored to your individual dental
                needs and smile goals.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-lg">
              <ShieldCheck className="mx-auto h-8 w-8 text-orange-500" />
              <h3 className="mt-5 text-xl font-bold">
                Comprehensive Dentistry
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Cosmetic concerns can be evaluated alongside your overall
                dental health.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-lg">
              <Heart className="mx-auto h-8 w-8 text-orange-500" />
              <h3 className="mt-5 text-xl font-bold">
                Patient-Focused Approach
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                We focus on understanding your concerns before discussing
                suitable treatment options.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Explore Our Dental Services
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/root-canal-treatment-ameerpet"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-bold">
                Root Canal Treatment
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/teeth-cleaning-ameerpet"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-bold">
                Teeth Cleaning
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/dental-clinic-near-yellareddyguda"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-bold">
                Dental Clinic Near Yellareddyguda
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/dental-clinic-near-sri-krishna-devaraya-nagar"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-bold">
                Dental Clinic Near Sri Krishna Devaraya Nagar
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <span className="font-bold uppercase tracking-widest text-orange-500">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Smile Makeover FAQs
            </h2>
          </div>

          <div className="mt-12 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-6 font-bold text-gray-900">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
            <Smile className="h-8 w-8" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Discuss Your Smile?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Schedule a dental consultation in Ameerpet to discuss your smile
            concerns and explore suitable treatment options.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Book Appointment
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="tel:+918074528763"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Call +91 80745 28763
            </Link>

          </div>

          <p className="mt-8 text-sm text-gray-400">
            Dr. Bhuvan's Dental Laser & Implant Centre · Ameerpet, Hyderabad
          </p>

        </div>
      </section>

    </main>
  );
}