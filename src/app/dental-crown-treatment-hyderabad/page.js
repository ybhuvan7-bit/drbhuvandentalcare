
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Phone,
  MapPin,
  ChevronDown,
  Award,
  HeartPulse,
} from "lucide-react";

export const metadata = {
  title: "Dental Crown Treatment in Hyderabad | Dr. Bhuvan",
  description:
    "Explore dental crown treatments in Hyderabad including Zirconia, E-max, PFM and all-ceramic crowns at Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "Dental Crown Treatment Hyderabad",
    "Zirconia Crown Hyderabad",
    "Emax Crown Ameerpet",
    "Dental Crown Dentist Yousufguda",
    "Best Dental Clinic Ameerpet",
  ],
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dental-crown-treatment-hyderabad",
  },
};

const crownTypes = [
  {
    number: "01",
    name: "Zirconia Crown",
    tag: "Strength & Durability",
    description:
      "A strong ceramic option commonly used for restoring damaged teeth. Suitable for selected front and back teeth depending on clinical requirements.",
    color: "from-orange-100 to-amber-50",
    symbol: "Zr",
  },
  {
    number: "02",
    name: "E-max Crown",
    tag: "Natural Aesthetics",
    description:
      "A lithium disilicate ceramic restoration known for its lifelike appearance. Often considered for aesthetic restorations in suitable cases.",
    color: "from-rose-100 to-orange-50",
    symbol: "Em",
  },
  {
    number: "03",
    name: "PFM Crown",
    tag: "Metal-Ceramic",
    description:
      "Porcelain fused to a metal framework. A traditional crown option that combines a metal substructure with a porcelain outer layer.",
    color: "from-slate-200 to-slate-50",
    symbol: "PFM",
  },
  {
    number: "04",
    name: "All-Ceramic Crown",
    tag: "Metal-Free Option",
    description:
      "A ceramic restoration without a metal framework. The material is selected according to tooth position, bite and aesthetic needs.",
    color: "from-orange-100 to-yellow-50",
    symbol: "AC",
  },
];

const benefits = [
  "Restores damaged or weakened teeth",
  "Improves tooth shape and appearance",
  "Protects selected teeth after root canal treatment",
  "Restores chewing function",
  "Can support selected implant restorations",
  "Customised to your bite and smile",
];

export default function DentalCrownPage() {
  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#242424]">
     
     

     
      
      {/* PREMIUM DENTAL CROWN HERO SECTION */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#171817] text-white sm:min-h-[740px]">

        {/* Background atmosphere */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(224,129,54,0.20),transparent_45%),linear-gradient(120deg,#171817_0%,#24231f_55%,#171817_100%)]" />

        <div className="absolute -right-32 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[100px]" />

        <div className="absolute -bottom-40 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-amber-200/5 blur-[100px]" />

        {/* Decorative background rings */}
        <div className="pointer-events-none absolute right-[-100px] top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

        <div className="pointer-events-none absolute right-[-40px] top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-orange-300/10 lg:block" />

        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[740px] lg:grid-cols-2 lg:gap-2 lg:px-12">

          {/* LEFT CONTENT */}
          <div className="reveal-up relative z-10 max-w-2xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              <Sparkles size={14} />
              Precision • Protection • Aesthetics
            </div>

            <p className="mb-4 text-sm font-medium tracking-[0.18em] text-white/60">
              ADVANCED RESTORATIVE DENTISTRY
            </p>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Restore Your Smile.
              <span className="mt-2 block bg-gradient-to-r from-orange-200 via-amber-100 to-orange-400 bg-clip-text text-transparent">
                Rediscover Confidence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Discover customised dental crown solutions designed to restore
              damaged teeth, improve function and enhance the appearance of
              your smile.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20know%20about%20dental%20crown%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e9853e] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition hover:-translate-y-1 hover:bg-[#f2944d]"
              >
                Book a Consultation
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#crown-types"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-orange-300 hover:bg-white/5"
              >
                Explore Crown Types
                <ChevronDown size={17} />
              </a>

            </div>

            {/* TRUST HIGHLIGHTS */}
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">

              <div>
                <ShieldCheck className="mb-2 text-orange-300" size={22} />
                <p className="text-sm font-semibold">Personalised Care</p>
                <p className="mt-1 text-xs text-white/45">Case-based planning</p>
              </div>

              <div>
                <Sparkles className="mb-2 text-orange-300" size={22} />
                <p className="text-sm font-semibold">Aesthetic Focus</p>
                <p className="mt-1 text-xs text-white/45">Smile-conscious design</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <HeartPulse className="mb-2 text-orange-300" size={22} />
                <p className="text-sm font-semibold">Restorative Care</p>
                <p className="mt-1 text-xs text-white/45">Function and protection</p>
              </div>

            </div>
          </div>

          {/* RIGHT PREMIUM 3D CROWN VISUAL */}
          <div className="hero-crown-stage relative mx-auto flex h-[390px] w-full max-w-[620px] items-center justify-center sm:h-[520px] lg:translate-x-5">

            {/* Golden spotlight */}
            <div className="hero-crown-spotlight absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/25 blur-[90px] sm:h-[420px] sm:w-[420px]" />

            {/* Secondary warm glow */}
            <div className="hero-crown-glow absolute left-1/2 top-[58%] h-40 w-72 -translate-x-1/2 rounded-full bg-amber-300/20 blur-[65px] sm:h-52 sm:w-96" />

            {/* Decorative orbit */}
            <div className="hero-crown-orbit absolute left-1/2 top-[53%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/20 sm:h-[390px] sm:w-[390px]" />

            {/* Inner ring */}
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[320px] sm:w-[320px]" />

            {/* NEW REALISTIC HERO CROWN IMAGE */}
            <div className="hero-crown-float relative z-10 w-[115%] max-w-[620px] sm:w-[120%]">

              <Image
                src="/images/crowns/hero-crown.png"
                alt="Premium 3D ceramic dental crown illustration"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 620px"
                className="hero-crown-image h-auto w-full object-contain"
              />

            </div>

            {/* Floor reflection */}
            <div className="hero-crown-floor absolute bottom-[7%] left-1/2 z-0 h-8 w-[65%] -translate-x-1/2 rounded-full bg-orange-300/30 blur-2xl" />

            {/* Floating information card */}
            <div className="absolute bottom-1 left-0 z-20 rounded-2xl border border-white/15 bg-[#24231f]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:bottom-7 sm:px-5 sm:py-4">

              <p className="text-[9px] uppercase tracking-[0.2em] text-orange-200 sm:text-[10px]">
                Restorative Dentistry
              </p>

              <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                Designed around your smile
              </p>

            </div>

            {/* Precision badge */}
            <div className="absolute right-0 top-5 z-20 rounded-2xl border border-white/15 bg-[#24231f]/90 px-3 py-3 shadow-xl backdrop-blur-xl sm:right-2 sm:top-12 sm:px-4">

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-300" />
                <p className="text-[10px] font-medium text-white sm:text-xs">
                  Precision Care
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom separator */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />

      </section>



      {/* INTRO STRIP */}
      <section className="border-b border-[#eee8df] bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
              Dr. Bhuvan’s Dental Laser & Implant Centre
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Dental Crown Consultation in Ameerpet – Yousufguda, Hyderabad
            </p>
          </div>
          <a
            href="tel:+918074528763"
            className="inline-flex items-center gap-2 rounded-full border border-[#e9ded3] px-5 py-3 text-sm font-semibold text-[#292929] transition hover:border-orange-400 hover:text-orange-600"
          >
            <Phone size={16} />
            +91 80745 28763
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#faf9f6] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
              Why Dental Crowns?
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              More than a cover.
              <span className="block text-[#d87936]">A restoration for your tooth.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              A dental crown is a custom-made restoration that covers the
              visible portion of a tooth. Your dentist may recommend one when
              a tooth needs additional protection, strength or aesthetic
              improvement.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-[#eee7df] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#df843e]" size={20} />
                <p className="text-sm leading-6 text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* PREMIUM CROWN TYPES SECTION */}
      <section
        id="crown-types"
        className="relative isolate overflow-hidden bg-[#faf9f6] px-5 py-20 sm:px-8 lg:py-28"
      >

        {/* BACKGROUND ATMOSPHERE */}
        <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-orange-100/50 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-amber-100/50 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div className="mx-auto max-w-2xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <Sparkles size={13} className="text-[#d87936]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d87936]">
                Explore Your Options
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#222320] sm:text-4xl lg:text-5xl">
              Choose the Right Crown
              <span className="block text-[#d87936]">
                for Your Smile
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
              Different crown materials offer different properties.
              The suitable option depends on your tooth, bite,
              aesthetic expectations and clinical assessment.
            </p>

          </div>

          {/* CROWN CARDS */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {crownTypes.map((crown) => {

              const crownImage =
                crown.number === "01"
                  ? "/images/crowns/zirconia-crown.webp"
                  : crown.number === "02"
                  ? "/images/crowns/emax-crown.webp"
                  : crown.number === "03"
                  ? "/images/crowns/pfm-crown.webp"
                  : "/images/crowns/all-ceramic-crown.webp";

              return (

                <article
                  key={crown.number}
                  className="premium-crown-card group relative flex flex-col overflow-hidden rounded-[28px] border border-[#eee5da] bg-white shadow-[0_8px_30px_rgba(50,40,20,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_25px_60px_rgba(90,60,30,0.12)]"
                >

                  {/* WIDE CINEMATIC IMAGE PANEL */}
                  <div
                    className={`relative h-[220px] w-full overflow-hidden bg-gradient-to-br ${crown.color} sm:h-[235px]`}
                  >

                    {/* Soft background illumination */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.65),transparent_70%)]" />

                    {/* Wide golden glow */}
                    <div className="premium-crown-glow absolute left-1/2 top-1/2 h-36 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/40 blur-[65px]" />

                    {/* Subtle decorative border */}
                    <div className="pointer-events-none absolute inset-4 rounded-2xl border border-white/40" />

                    {/* Crown number */}
                    <div className="absolute left-6 top-6 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/75 text-xs font-bold text-[#292929] shadow-sm backdrop-blur-md">
                      {crown.number}
                    </div>

                    {/* Crown image - wide presentation */}
                    <div className="premium-crown-float absolute inset-0 z-10 flex items-center justify-center p-3 sm:p-4">

                      <Image
                        src={crownImage}
                        alt={`${crown.name} dental crown illustration`}
                        width={700}
                        height={500}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                        className="premium-crown-image h-full w-full object-contain"
                        loading="lazy"
                      />

                    </div>

                    {/* Bottom image label */}
                    <div className="absolute bottom-5 right-5 z-20 rounded-full border border-white/70 bg-white/65 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#494038] shadow-sm backdrop-blur-md">
                      Crown Series
                    </div>

                  </div>

                  {/* CARD CONTENT */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">

                    {/* Material category */}
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d87936]">
                      {crown.tag}
                    </p>

                    {/* Crown title */}
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#242424]">
                      {crown.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 min-h-[112px] text-sm leading-7 text-gray-600">
                      {crown.description}
                    </p>

                    {/* Divider */}
                    <div className="my-5 h-px w-full bg-gradient-to-r from-orange-200 via-[#eee7df] to-transparent" />

                    {/* CTA */}
                    <a
                      href={`https://wa.me/918074528763?text=${encodeURIComponent(
                        `Hello, I would like to know about ${crown.name} treatment.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-between gap-2 text-sm font-bold text-[#d87936] transition-all duration-300 hover:text-[#a95420]"
                    >
                      <span>Ask about this crown</span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-100">
                        <ArrowRight size={17} />
                      </span>
                    </a>

                  </div>

                </article>

              );
            })}

          </div>

          {/* CLINICAL DISCLAIMER */}
          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-[#eee7df] bg-white/80 p-5">

            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#d87936]"
            />

            <p className="text-xs leading-6 text-gray-500">
              Crown material selection is individualised. Not every
              material is suitable for every tooth or bite condition.
              Your dentist will explain the available options after
              clinical examination.
            </p>

          </div>

        </div>
      </section>



      {/* INDIVIDUAL CROWN MATERIAL SHOWCASE */}
      <section className="bg-[#171817] px-5 py-24 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
              Material Matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Every Crown Has a Purpose.
              <span className="mt-2 block text-orange-300">
                Every Smile Is Different.
              </span>
            </h2>
            <p className="mt-5 leading-8 text-white/55">
              Explore the characteristics of different dental crown
              materials and understand how your dentist selects a suitable
              restoration.
            </p>
          </div>

          
<div className="space-y-8">
  {/* ZIRCONIA */}
  <article className="group relative grid overflow-hidden rounded-[32px] border border-white/10 bg-[#222320] lg:grid-cols-2">
    <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-400/10 blur-[90px]" />

    {/* PREMIUM CIRCULAR CROWN IMAGE */}
    <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#33312b] to-[#171817] p-8 sm:p-10">
      <div className="absolute h-72 w-72 rounded-full border border-orange-100/10" />
      <div className="absolute h-56 w-56 rounded-full border border-orange-100/15" />

      <div className="crown-glow absolute h-48 w-48 rounded-full bg-orange-200/25 blur-3xl" />

      <div className="crown-float relative z-10 flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-full border border-orange-100/40 bg-white/10 p-3 shadow-[0_15px_50px_rgba(233,133,62,0.18)] backdrop-blur-sm sm:h-[250px] sm:w-[250px]">
        <Image
          src="/images/crowns/zirconia-crown.webp"
          alt="Zirconia dental crown"
          width={500}
          height={500}
          sizes="250px"
          className="premium-crown-image h-full w-full rounded-full object-contain"
          loading="lazy"
        />
      </div>

      <span className="absolute bottom-6 left-7 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
        Material 01 / Zirconia
      </span>

      <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-orange-200/80 backdrop-blur-md">
        Crown Collection
      </span>
    </div>

    {/* CONTENT */}
    <div className="relative flex flex-col justify-center p-8 sm:p-12">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
        Strength & Performance
      </span>

      <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
        Zirconia Crown
      </h3>

      <p className="mt-5 leading-8 text-white/60">
        Zirconia is a high-strength ceramic material used in
        restorative dentistry. It can be considered for teeth
        requiring substantial functional support, subject to
        clinical assessment.
      </p>

      <div className="mt-7 grid grid-cols-2 gap-4">
        {[
          "High-strength ceramic",
          "Metal-free option",
          "Multiple design options",
          "Suitable for selected cases",
        ].map((item) => (
          <div key={item} className="flex gap-2 text-sm text-white/75">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-orange-300"
            />
            {item}
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/918074528763?text=I%20want%20to%20know%20about%20Zirconia%20crowns."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-orange-300 transition hover:gap-5"
      >
        Enquire About Zirconia <ArrowRight size={17} />
      </a>
    </div>
  </article>



           

{/* E-MAX CROWN */}
<article className="group relative grid overflow-hidden rounded-[32px] border border-white/10 bg-[#222320] lg:grid-cols-2">
  <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange-400/10 blur-[90px]" />

  <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#37332e] to-[#171817] p-8 sm:p-10">
    <div className="absolute h-72 w-72 rounded-full border border-orange-100/10" />
    <div className="absolute h-56 w-56 rounded-full border border-orange-100/15" />
    <div className="crown-glow absolute h-48 w-48 rounded-full bg-orange-200/25 blur-3xl" />

    <div className="crown-float relative z-10 flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-full border border-orange-100/40 bg-white/10 p-3 shadow-[0_15px_50px_rgba(233,133,62,0.18)] backdrop-blur-sm sm:h-[250px] sm:w-[250px]">
      <Image
        src="/images/crowns/emax-crown.webp"
        alt="E-max dental crown"
        width={500}
        height={500}
        sizes="250px"
        className="premium-crown-image h-full w-full rounded-full object-contain"
        loading="lazy"
      />
    </div>

    <span className="absolute bottom-6 left-7 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
      Material 02 / E-max
    </span>

    <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-orange-200/80 backdrop-blur-md">
      Aesthetic Collection
    </span>
  </div>

  <div className="relative flex flex-col justify-center p-8 sm:p-12">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
      Natural Beauty & Translucency
    </span>

    <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
      E-max Crown
    </h3>

    <p className="mt-5 leading-8 text-white/60">
      E-max crowns are made from lithium disilicate glass-ceramic.
      Their translucency and natural-looking appearance make them
      an aesthetic option for selected restorative cases.
    </p>

    <div className="mt-7 grid grid-cols-2 gap-4">
      {[
        "Excellent translucency",
        "Natural-looking appearance",
        "Metal-free ceramic",
        "Ideal for selected aesthetic cases",
      ].map((item) => (
        <div key={item} className="flex gap-2 text-sm text-white/75">
          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-300" />
          {item}
        </div>
      ))}
    </div>

    <a
      href="https://wa.me/918074528763?text=I%20want%20to%20know%20about%20E-max%20crowns."
      target="_blank"
      rel="noopener noreferrer"
      className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-orange-300 transition hover:gap-5"
    >
      Enquire About E-max <ArrowRight size={17} />
    </a>
  </div>
</article>



           
{/* PFM CROWN */}
<article className="group relative grid overflow-hidden rounded-[32px] border border-white/10 bg-[#222320] lg:grid-cols-2">
  <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-400/10 blur-[90px]" />

  <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#33312b] to-[#171817] p-8 sm:p-10">
    <div className="absolute h-72 w-72 rounded-full border border-orange-100/10" />
    <div className="absolute h-56 w-56 rounded-full border border-orange-100/15" />
    <div className="crown-glow absolute h-48 w-48 rounded-full bg-orange-200/25 blur-3xl" />

    <div className="crown-float relative z-10 flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-full border border-orange-100/40 bg-white/10 p-3 shadow-[0_15px_50px_rgba(233,133,62,0.18)] backdrop-blur-sm sm:h-[250px] sm:w-[250px]">
      <Image
        src="/images/crowns/pfm-crown.webp"
        alt="Porcelain fused to metal dental crown"
        width={500}
        height={500}
        sizes="250px"
        className="premium-crown-image h-full w-full rounded-full object-contain"
        loading="lazy"
      />
    </div>

    <span className="absolute bottom-6 left-7 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
      Material 03 / PFM
    </span>

    <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-orange-200/80 backdrop-blur-md">
      Classic Collection
    </span>
  </div>

  <div className="relative flex flex-col justify-center p-8 sm:p-12">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
      Traditional Strength & Function
    </span>

    <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
      PFM Crown
    </h3>

    <p className="mt-5 leading-8 text-white/60">
      Porcelain-fused-to-metal crowns combine a metal substructure
      with an outer porcelain layer. They offer a traditional
      restorative option for selected teeth.
    </p>

    <div className="mt-7 grid grid-cols-2 gap-4">
      {[
        "Metal-supported structure",
        "Porcelain outer layer",
        "Established restorative option",
        "Suitable for selected cases",
      ].map((item) => (
        <div key={item} className="flex gap-2 text-sm text-white/75">
          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-300" />
          {item}
        </div>
      ))}
    </div>

    <a
      href="https://wa.me/918074528763?text=I%20want%20to%20know%20about%20PFM%20crowns."
      target="_blank"
      rel="noopener noreferrer"
      className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-orange-300 transition hover:gap-5"
    >
      Enquire About PFM <ArrowRight size={17} />
    </a>
  </div>
</article>


           
{/* ALL-CERAMIC CROWN */}
<article className="group relative grid overflow-hidden rounded-[32px] border border-white/10 bg-[#222320] lg:grid-cols-2">
  <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange-400/10 blur-[90px]" />

  <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#37332e] to-[#171817] p-8 sm:p-10">
    <div className="absolute h-72 w-72 rounded-full border border-orange-100/10" />
    <div className="absolute h-56 w-56 rounded-full border border-orange-100/15" />
    <div className="crown-glow absolute h-48 w-48 rounded-full bg-orange-200/25 blur-3xl" />

    <div className="crown-float relative z-10 flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-full border border-orange-100/40 bg-white/10 p-3 shadow-[0_15px_50px_rgba(233,133,62,0.18)] backdrop-blur-sm sm:h-[250px] sm:w-[250px]">
      <Image
        src="/images/crowns/all-ceramic-crown.webp"
        alt="All-ceramic dental crown"
        width={500}
        height={500}
        sizes="250px"
        className="premium-crown-image h-full w-full rounded-full object-contain"
        loading="lazy"
      />
    </div>

    <span className="absolute bottom-6 left-7 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
      Material 04 / All-Ceramic
    </span>

    <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-orange-200/80 backdrop-blur-md">
      Smile Collection
    </span>
  </div>

  <div className="relative flex flex-col justify-center p-8 sm:p-12">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
      Natural Appearance & Harmony
    </span>

    <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
      All-Ceramic Crown
    </h3>

    <p className="mt-5 leading-8 text-white/60">
      All-ceramic crowns are metal-free restorations designed to
      restore tooth form, function and appearance. Material selection
      depends on the tooth location, bite and clinical requirements.
    </p>

    <div className="mt-7 grid grid-cols-2 gap-4">
      {[
        "Metal-free restoration",
        "Natural tooth-like appearance",
        "Different ceramic options",
        "Individualised treatment planning",
      ].map((item) => (
        <div key={item} className="flex gap-2 text-sm text-white/75">
          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-300" />
          {item}
        </div>
      ))}
    </div>

    <a
      href="https://wa.me/918074528763?text=I%20want%20to%20know%20about%20all-ceramic%20crowns."
      target="_blank"
      rel="noopener noreferrer"
      className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-orange-300 transition hover:gap-5"
    >
      Enquire About All-Ceramic <ArrowRight size={17} />
    </a>
  </div>
</article>

          </div>
        </div>
      </section>

     
      {/* PREMIUM CROWN COMPARISON */}
      <section className="relative overflow-hidden bg-[#faf9f6] px-5 py-20 sm:px-8 lg:py-24">

        {/* Subtle background accents */}
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-orange-100/50 blur-[100px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-amber-100/40 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
              Understand the Differences
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#222320] sm:text-4xl">
              Dental Crown Comparison
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              A simple overview of commonly used crown materials.
              Actual performance depends on the specific material,
              design, preparation and individual clinical conditions.
            </p>

          </div>

          {/* COMPARISON TABLE */}
          <div className="mt-12 overflow-hidden rounded-[28px] border border-[#eee7df] bg-white shadow-[0_15px_50px_rgba(50,40,20,0.06)]">

            {/* Mobile scroll hint */}
            <div className="flex items-center justify-between border-b border-[#eee7df] bg-[#fffaf5] px-5 py-3 sm:hidden">
              <span className="text-xs font-semibold text-gray-600">
                Compare crown materials
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#d87936]">
                Swipe →
              </span>
            </div>

            <div className="overflow-x-auto overscroll-x-contain">

              <table className="w-full min-w-[700px] border-collapse text-left text-sm">

                <thead>
                  <tr className="bg-[#222320] text-white">

                    <th className="sticky left-0 z-10 min-w-[155px] bg-[#222320] px-5 py-6 font-semibold sm:px-6">
                      Feature
                    </th>

                    <th className="min-w-[135px] px-5 py-6 font-semibold sm:px-6">
                      <span className="block">Zirconia</span>
                      <span className="mt-1 block text-[10px] font-medium text-orange-200">
                        Ceramic
                      </span>
                    </th>

                    <th className="min-w-[135px] px-5 py-6 font-semibold sm:px-6">
                      <span className="block">E-max</span>
                      <span className="mt-1 block text-[10px] font-medium text-orange-200">
                        Lithium Disilicate
                      </span>
                    </th>

                    <th className="min-w-[135px] px-5 py-6 font-semibold sm:px-6">
                      <span className="block">PFM</span>
                      <span className="mt-1 block text-[10px] font-medium text-orange-200">
                        Metal Ceramic
                      </span>
                    </th>

                    <th className="min-w-[135px] px-5 py-6 font-semibold sm:px-6">
                      <span className="block">All-Ceramic</span>
                      <span className="mt-1 block text-[10px] font-medium text-orange-200">
                        Metal-Free
                      </span>
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-[#eee7df] text-gray-700">

                  <tr className="transition hover:bg-orange-50/40">

                    <td className="sticky left-0 z-10 bg-white px-5 py-6 font-semibold text-[#292929] sm:px-6">
                      Material
                    </td>

                    <td className="px-5 py-6 sm:px-6">
                      Zirconia ceramic
                    </td>

                    <td className="px-5 py-6 sm:px-6">
                      Lithium disilicate
                    </td>

                    <td className="px-5 py-6 sm:px-6">
                      Metal + porcelain
                    </td>

                    <td className="px-5 py-6 sm:px-6">
                      Ceramic systems
                    </td>

                  </tr>

                  <tr className="bg-[#faf9f6] transition hover:bg-orange-50/50">

                    <td className="sticky left-0 z-10 bg-[#faf9f6] px-5 py-6 font-semibold text-[#292929] sm:px-6">
                      Metal framework
                    </td>

                    <td className="px-5 py-6">
                      No
                    </td>

                    <td className="px-5 py-6">
                      No
                    </td>

                    <td className="px-5 py-6">
                      Yes
                    </td>

                    <td className="px-5 py-6">
                      No
                    </td>

                  </tr>

                  <tr className="transition hover:bg-orange-50/40">

                    <td className="sticky left-0 z-10 bg-white px-5 py-6 font-semibold text-[#292929] sm:px-6">
                      Aesthetic potential
                    </td>

                    <td className="px-5 py-6">
                      Material-dependent
                    </td>

                    <td className="px-5 py-6">
                      High translucency
                    </td>

                    <td className="px-5 py-6">
                      Porcelain appearance
                    </td>

                    <td className="px-5 py-6">
                      Material-dependent
                    </td>

                  </tr>

                  <tr className="bg-[#faf9f6] transition hover:bg-orange-50/50">

                    <td className="sticky left-0 z-10 bg-[#faf9f6] px-5 py-6 font-semibold text-[#292929] sm:px-6">
                      Selection
                    </td>

                    <td className="px-5 py-6">
                      Case-based
                    </td>

                    <td className="px-5 py-6">
                      Case-based
                    </td>

                    <td className="px-5 py-6">
                      Case-based
                    </td>

                    <td className="px-5 py-6">
                      Case-based
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>
          </div>

          {/* MOBILE SCROLL INDICATOR */}
          <p className="mt-3 text-center text-[11px] text-gray-400 sm:hidden">
            Swipe horizontally to compare all crown materials
          </p>

          {/* DISCLAIMER */}
          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-[#eee7df] bg-white p-5">

            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#d87936]"
            />

            <p className="text-xs leading-6 text-gray-500">
              This comparison is educational and not a substitute for
              a clinical recommendation. Your dentist will help determine
              the appropriate material based on your tooth, bite and
              individual clinical requirements.
            </p>

          </div>

          {/* CONSULTATION CTA */}
          <div className="mt-10 text-center">

            <a
              href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20help%20choosing%20the%20right%20dental%20crown."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#222320] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#34352f]"
            >
              Find the Right Crown for You

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />

            </a>

          </div>

        </div>
      </section>


      
      {/* MEET YOUR DENTIST & CLINIC */}
      <section className="relative overflow-hidden bg-[#171817] px-5 py-24 text-white sm:px-8 lg:py-28">

        {/* Background atmosphere */}
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[110px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-200/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
              Personalised Dental Care
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Meet Your Dentist.
              <span className="mt-2 block text-orange-300">
                Know Your Care.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Every smile has different needs. Our approach focuses on
              careful diagnosis, individualised treatment planning and
              patient comfort at every stage.
            </p>
          </div>

          {/* Main profile layout */}
          <div className="grid items-stretch gap-8 lg:grid-cols-2">

            {/* Dentist profile */}
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05]">

              {/* Dentist photograph */}
              <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#34312a] to-[#20211f]">

                <div className="absolute h-64 w-64 rounded-full bg-orange-300/15 blur-[80px]" />

                <Image
                  src="/images/clinic/dr-bhuvanesh.webp"
                  alt="Dr. Bhuvanesh, Periodontist and Implantologist"
                  width={700}
                  height={800}
                  sizes="(max-width: 1024px) 90vw, 550px"
                  className="relative z-10 h-[340px] w-full object-cover object-top"
                  loading="lazy"
                />

                <div className="absolute bottom-5 left-5 z-20 rounded-xl border border-white/20 bg-[#171817]/80 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-orange-200">
                    Your Dentist
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    Dr. Bhuvanesh
                  </p>
                </div>

              </div>

              {/* Profile details */}
              <div className="p-7 sm:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                  Periodontist & Implantologist
                </p>

                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Dr. Bhuvanesh
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Dedicated to periodontal care, dental implant
                  treatment, laser dentistry and restorative
                  dental solutions.
                </p>

                <div className="mt-7 space-y-4">

                  {[
                    "BDS – Bachelor of Dental Surgery",
                    "MDS – Periodontics",
                    "Associate Fellowship in Laser Dentistry – World Clinical Laser Institute",
                    "Soft Tissue Masterclass – Tufts University",
                  ].map((qualification) => (
                    <div
                      key={qualification}
                      className="flex items-start gap-3 text-sm leading-6 text-white/75"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-orange-300"
                      />
                      {qualification}
                    </div>
                  ))}

                </div>

                <a
                  href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Bhuvanesh."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e9853e] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#f2944d]"
                >
                  Consult Dr. Bhuvanesh
                  <ArrowRight size={17} />
                </a>

              </div>
            </div>

            {/* Clinic profile */}
            <div className="flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05]">

              {/* Clinic photograph */}
              <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-[#34312a] to-[#20211f]">

                <Image
                  src="/images/clinic/clinic-interior.webp"
                  alt="Interior of Dr. Bhuvan's Dental Laser and Implant Centre"
                  width={1000}
                  height={700}
                  sizes="(max-width: 1024px) 90vw, 550px"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
                    Welcome to Our Clinic
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                    A Space Designed Around Your Smile
                  </h3>
                </div>

              </div>

              {/* Clinic details */}
              <div className="flex flex-1 flex-col p-7 sm:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                  Dr. Bhuvan's Dental Laser & Implant Centre
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Thoughtful Care. Personal Attention.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  We believe good dentistry begins with listening.
                  Our clinic focuses on individual consultations,
                  clear treatment explanations and care planned
                  around each patient's dental needs.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">

                  {[
                    ["01", "One-to-One Care"],
                    ["02", "Laser Dentistry"],
                    ["03", "Implant Dentistry"],
                    ["04", "Restorative Care"],
                  ].map(([number, title]) => (
                    <div
                      key={number}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <span className="text-xs font-bold text-orange-300">
                        {number}
                      </span>

                      <p className="mt-2 text-sm font-semibold text-white/85">
                        {title}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="mt-auto pt-8">

                  <div className="flex items-start gap-3 text-sm leading-7 text-white/60">
                    <MapPin
                      size={19}
                      className="mt-1 shrink-0 text-orange-300"
                    />

                    <span>
                      Ganapathi Complex, Navodaya Colony Road,
                      Sri Krishna Nagar, Ameerpet–Yousufguda,
                      Hyderabad – 500073.
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                    <a
                      href="tel:+918074528763"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-semibold transition hover:border-orange-300 hover:bg-white/5"
                    >
                      <Phone size={16} />
                      Call Clinic
                    </a>

                    <a
                      href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20visit%20your%20clinic."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#e9853e] px-5 py-3.5 text-sm font-bold transition hover:bg-[#f2944d]"
                    >
                      WhatsApp Us
                      <ArrowRight size={16} />
                    </a>

                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Closing message */}
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-sm leading-7 text-white/50">
              At Dr. Bhuvan's Dental Laser & Implant Centre,
              every treatment plan begins with understanding your needs.
            </p>
          </div>

        </div>
      </section>


      {/* WHEN DO YOU NEED A CROWN */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
              Clinical Indications
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              When Might You Need a Dental Crown?
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              A crown may be recommended when a tooth needs more protection
              or structural restoration than a conventional filling can
              provide.
            </p>

            <div className="mt-8 space-y-5">
              {[
                ["Severely damaged teeth", "When a tooth has lost substantial structure due to decay or fracture."],
                ["After root canal treatment", "For selected teeth that require cuspal protection and additional restoration."],
                ["Large existing fillings", "When remaining tooth structure needs a protective full-coverage restoration."],
                ["Dental implant restoration", "Crowns can be used as the visible prosthetic component of selected implant cases."],
                ["Aesthetic rehabilitation", "To restore selected teeth with compromised shape, colour or structure."],
              ].map(([title, description]) => (
                <div key={title} className="flex gap-4 border-b border-[#eee7df] pb-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#d87936]">
                    <CheckCircle2 size={19}/>
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-[#222320] p-8 text-white sm:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400/15 blur-[80px]" />
            <div className="relative">
              <div className="crown-float mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-orange-200/20 bg-gradient-to-br from-orange-100/20 to-transparent">
                <Award size={76} strokeWidth={1} className="text-orange-200"/>
              </div>
              <h3 className="mt-10 text-center text-2xl font-semibold">
                The Right Crown Starts with the Right Diagnosis
              </h3>
              <p className="mt-5 text-center leading-8 text-white/60">
                Tooth vitality, remaining tooth structure, periodontal
                health, occlusion, parafunctional habits and aesthetic
                requirements all matter during treatment planning.
              </p>
              <a
                href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20a%20dental%20crown%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[#e9853e] px-6 py-4 text-sm font-bold transition hover:bg-[#f2944d]"
              >
                Discuss Your Case <ArrowRight size={17}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT JOURNEY */}
      <section className="bg-[#f4f0e9] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
              Your Treatment Journey
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              From Consultation to Your New Crown
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Each stage is planned around your dental condition and
              restorative requirements.
            </p>
          </div>

          <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Consultation", "Clinical examination, diagnosis and discussion of suitable treatment options."],
              ["02", "Tooth Preparation", "If indicated, the tooth is carefully prepared for the planned restoration."],
              ["03", "Impression & Fabrication", "A digital scan or conventional impression is used to create the custom crown."],
              ["04", "Crown Placement", "The restoration is checked for fit, contacts, bite and aesthetics before cementation or fixation."],
            ].map(([number, title, description]) => (
              <div key={number} className="relative rounded-3xl border border-[#e8dfd4] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
                <span className="text-5xl font-light tracking-tight text-orange-200">
                  {number}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-9 text-center text-xs leading-6 text-gray-500">
            The number of visits and treatment sequence vary according to
            the clinical situation, laboratory workflow and restoration type.
          </p>
        </div>
      </section>


      {/* CROWN LONGEVITY */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
              Long-Term Smile Care
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              How Long Does a Dental Crown Last?
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Dental crowns can last many years, but their lifespan varies
              depending on the material, bite forces, oral hygiene,
              remaining tooth structure and regular dental care.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              There is no guaranteed lifespan for any crown. Regular
              check-ups help identify wear, damage or problems with the
              supporting tooth and gums.
            </p>

            <div className="mt-9 space-y-5">
              {[
                ["Brush twice daily", "Use a soft-bristled toothbrush and fluoride toothpaste."],
                ["Clean between teeth", "Use floss or interdental cleaning aids around the crown."],
                ["Avoid excessive forces", "Do not use your teeth to open packages or bite hard objects."],
                ["Attend dental reviews", "Have the crown, bite and surrounding gums checked regularly."],
              ].map(([title, description]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#d87936]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-[#1e201e] p-8 text-white sm:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400/15 blur-[90px]" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                Protect Your Restoration
              </p>
              <h3 className="mt-5 text-3xl font-semibold">
                Small Habits. Long-Term Care.
              </h3>
              <p className="mt-5 leading-8 text-white/60">
                A well-maintained crown needs healthy supporting gums,
                good plaque control and a balanced bite. Your natural
                tooth beneath the crown can still develop decay, so
                daily cleaning remains essential.
              </p>
              <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-6">
                <ShieldCheck className="mb-4 text-orange-300" size={32} />
                <p className="font-semibold">Don't ignore these warning signs</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                  <li>• Persistent pain or sensitivity</li>
                  <li>• Crown movement or looseness</li>
                  <li>• Food getting trapped around the crown</li>
                  <li>• Gum swelling or bleeding</li>
                  <li>• A change in your bite</li>
                </ul>
              </div>
              <p className="mt-6 text-sm text-white/50">
                Contact your dentist if you notice any of these changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="bg-[#faf9f6] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
              After Your Crown Placement
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Caring for Your New Dental Crown
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Follow your dentist's instructions after treatment.
              These simple habits can help maintain your restoration.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Maintain Oral Hygiene",
                text: "Brush twice daily and clean around the crown margins carefully.",
                icon: "✦",
              },
              {
                number: "02",
                title: "Choose Food Carefully",
                text: "Follow your dentist's advice about eating after cementation. Avoid very hard foods if advised.",
                icon: "◈",
              },
              {
                number: "03",
                title: "Avoid Bad Habits",
                text: "Avoid nail biting, chewing ice and using teeth to open objects.",
                icon: "◇",
              },
              {
                number: "04",
                title: "Manage Teeth Grinding",
                text: "Discuss bruxism with your dentist. A protective night guard may be recommended.",
                icon: "⌁",
              },
              {
                number: "05",
                title: "Watch Your Gums",
                text: "Keep the gumline clean and report persistent inflammation or bleeding.",
                icon: "♡",
              },
              {
                number: "06",
                title: "Regular Dental Reviews",
                text: "Attend periodic check-ups to assess the crown, bite and supporting tooth.",
                icon: "＋",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-[#eee7df] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#d87936]">
                    {item.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-[#d87936] transition group-hover:rotate-12">
                    {item.icon}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CROWN COST */}
      <section className="relative overflow-hidden bg-[#20211f] px-5 py-24 text-white sm:px-8">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              Treatment Planning
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              What Determines the Cost of a Dental Crown?
            </h2>
            <p className="mt-6 leading-8 text-white/60">
              Dental crown costs vary depending on the material selected,
              tooth condition, laboratory process and additional treatment
              requirements. An examination is needed to provide an
              appropriate treatment estimate.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Type and quality of crown material",
                "Location and condition of the tooth",
                "Extent of tooth preparation required",
                "Need for additional procedures",
                "Laboratory fabrication and customisation",
                "Complexity of bite and aesthetic requirements",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-white/75">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-orange-300" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl sm:p-10">
            <Sparkles className="text-orange-300" size={34} />
            <h3 className="mt-6 text-2xl font-semibold">
              Get a Personalised Treatment Estimate
            </h3>
            <p className="mt-4 leading-7 text-white/60">
              Not sure whether you need a Zirconia, E-max or another type
              of crown? Let's first understand your dental condition and
              treatment requirements.
            </p>
            <a
              href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20know%20the%20cost%20of%20dental%20crown%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[#e9853e] px-6 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-[#f2944d]"
            >
              Ask for Treatment Details <ArrowRight size={18} />
            </a>
            <p className="mt-5 text-center text-xs text-white/40">
              Treatment recommendations and estimates follow clinical evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Dental Crown Questions Answered
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Helpful information for patients considering dental crown
              treatment in Hyderabad.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {[
              [
                "What is a dental crown?",
                "A dental crown is a custom-made restoration that covers the visible part of a tooth to restore its shape, strength, function and appearance."
              ],
              [
                "Which is better: Zirconia or E-max crown?",
                "Neither is universally better. Zirconia offers different strength and translucency options, while lithium disilicate E-max is known for its aesthetic properties. The choice depends on the tooth, bite and clinical requirements."
              ],
              [
                "Is dental crown treatment painful?",
                "Tooth preparation is generally performed under local anaesthesia. Some temporary sensitivity or gum tenderness can occur after treatment. Your dentist will explain what to expect."
              ],
              [
                "How many visits are required for a dental crown?",
                "The number of visits depends on the tooth condition, type of restoration, laboratory workflow and whether additional procedures are needed."
              ],
              [
                "Can a crown be placed after root canal treatment?",
                "Yes. A crown may be recommended for selected root canal-treated teeth, particularly when additional cuspal protection is needed."
              ],
              [
                "Can a dental crown look like a natural tooth?",
                "Modern ceramic materials and customised shade selection can help achieve a natural-looking restoration. The final appearance depends on the material, clinical situation and laboratory work."
              ],
              [
                "Can a dental crown be placed on an implant?",
                "Yes. A crown can form the visible prosthetic part of a dental implant restoration. The design and material are selected according to the implant system and clinical requirements."
              ],
              [
                "Where can I get dental crown treatment in Ameerpet or Yousufguda?",
                "You can consult Dr. Bhuvan's Dental Laser & Implant Centre for dental crown assessment and restorative treatment planning in the Ameerpet–Yousufguda area of Hyderabad."
              ],
            ].map(([question, answer], index) => (
              <details
                key={question}
                className="group rounded-2xl border border-[#eee7df] bg-[#faf9f6] p-5 transition open:bg-white open:shadow-md sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">
                  <span className="flex items-start gap-3">
                    <span className="text-sm font-bold text-[#d87936]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#d87936] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 border-t border-[#eee7df] pt-5 text-sm leading-7 text-gray-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-[#faf9f6] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-[#eee7df] bg-white p-8 shadow-sm sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d87936]">
                Your Local Dental Care
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Dental Crown Treatment in Ameerpet & Yousufguda, Hyderabad
              </h2>
              <p className="mt-5 leading-8 text-gray-600">
                Dr. Bhuvan's Dental Laser & Implant Centre provides
                consultation for dental crowns, restorative dentistry
                and implant-related crown restorations. Patients from
                Ameerpet, Yousufguda, Sri Krishna Nagar and nearby
                Hyderabad localities can contact the clinic for an
                appointment.
              </p>
              <div className="mt-7 flex items-start gap-3 text-sm leading-7 text-gray-600">
                <MapPin className="mt-1 shrink-0 text-[#d87936]" size={20} />
                <span>
                  Ganapathi Complex, Navodaya Colony Road,
                  Sri Krishna Nagar, Ameerpet–Yousufguda,
                  Hyderabad, Telangana – 500073.
                </span>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3">
              <a
                href="tel:+918074528763"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#222320] px-7 py-4 text-sm font-bold text-white transition hover:bg-black"
              >
                <Phone size={17} /> Call Clinic
              </a>
              <a
                href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20crown%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e9853e] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#f2944d]"
              >
                WhatsApp Us <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      
{/* CLINIC LOCATION SECTION */}
<section className="relative overflow-hidden bg-[#f8f5ef] px-5 py-20 text-[#222320] sm:px-8 lg:py-24">

  <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-[100px]" />
  <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-100/40 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* SECTION HEADING */}
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d87936]">
        Find Us in Hyderabad
      </span>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Visit Our Dental Clinic
      </h2>

      <p className="mt-4 leading-7 text-[#66645f]">
        Looking for dental crown treatment in Ameerpet or Yousufguda?
        Visit our clinic for personalised dental consultation and
        treatment planning.
      </p>
    </div>

    {/* LOCATION CARD */}
    <div className="grid overflow-hidden rounded-[30px] border border-[#e8e1d7] bg-white shadow-[0_20px_60px_rgba(40,30,15,0.08)] lg:grid-cols-2">

      {/* GOOGLE MAP */}
      <div className="relative min-h-[340px] bg-[#eae6df] sm:min-h-[420px]">
        <iframe
          title="Dr. Bhuvan's Dental Laser and Implant Centre location in Yousufguda Hyderabad"
          src="https://www.google.com/maps?q=Dr.%20Bhuvan%27s%20Dental%20Laser%20%26%20Implant%20Centre%2C%20Ganapathi%20Complex%2C%20Navodaya%20Colony%2C%20Yousufguda%2C%20Hyderabad&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "340px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* CLINIC DETAILS */}
      <div className="flex flex-col justify-center p-8 sm:p-12">

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d87936]">
          <span className="h-2 w-2 rounded-full bg-[#d87936]" />
          Our Clinic
        </span>

        <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">
          Dr. Bhuvan’s Dental Laser & Implant Centre
        </h3>

        <p className="mt-5 flex items-start gap-3 text-sm leading-7 text-[#66645f]">
          <MapPin className="mt-1 shrink-0 text-[#d87936]" size={20} />
          <span>
            Ganapathi Complex, Navodaya Colony Road,
            Sri Krishna Nagar, Ameerpet–Yousufguda,
            Hyderabad, Telangana – 500073.
          </span>
        </p>

        <a
          href="tel:+918074528763"
          className="mt-5 flex items-center gap-3 text-sm font-medium text-[#44433f] transition hover:text-[#d87936]"
        >
          <Phone className="text-[#d87936]" size={19} />
          +91 80745 28763
        </a>

        <div className="my-7 h-px bg-[#eee8df]" />

        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d87936]">
          Our Dental Services
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#55534e]">
          {[
            "Dental Crowns",
            "Dental Implants",
            "Laser Dentistry",
            "Gum Care",
            "Root Canal Treatment",
            "Cosmetic Dentistry",
          ].map((service) => (
            <div key={service} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d87936]" />
              {service}
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">

          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvan%27s+Dental+Laser+and+Implant+Centre+Ganapathi+Complex+Yousufguda+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#222320] px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#d87936]"
          >
            <MapPin size={16} />
            Get Directions
            <ArrowRight size={15} />
          </a>

          <a
            href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#e7d7c6] bg-[#fffaf4] px-6 py-3.5 text-xs font-bold text-[#a95e2c] transition hover:bg-orange-50"
          >
            Book Appointment
          </a>

        </div>
      </div>
    </div>

    {/* LOCAL SEO TEXT */}
    <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#89857d]">
      Visit Dr. Bhuvan’s Dental Laser & Implant Centre for dental crown
      consultation in Ameerpet, Yousufguda and nearby areas of Hyderabad.
      Treatment recommendations are based on individual clinical assessment.
    </p>

  </div>
</section>


      {/* PREMIUM FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#171817] px-5 py-24 text-center text-white sm:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(222,128,57,0.18),transparent_55%)]" />
        <div className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-orange-400/10 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-amber-200/10 blur-[100px]" />

        <div className="mx-auto max-w-3xl">
          <div className="crown-float mx-auto mb-9 flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-200/20 bg-orange-200/10 text-4xl text-orange-200">
            ✦
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
            Begin Your Smile Restoration Journey
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
            A Stronger Restoration.
            <span className="mt-2 block text-orange-300">
              A More Confident Smile.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/60">
            Take the first step towards restoring your tooth.
            Schedule a dental crown consultation with Dr. Bhuvan.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20crown%20consultation%20with%20Dr.%20Bhuvan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#e9853e] px-8 py-4 text-sm font-bold shadow-lg shadow-orange-900/30 transition hover:-translate-y-1 hover:bg-[#f2944d]"
            >
              Book Your Consultation <ArrowRight size={18} />
            </a>
            <a
              href="tel:+918074528763"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold transition hover:border-orange-300 hover:bg-white/5"
            >
              <Phone size={17} /> Call Now
            </a>
          </div>

          <p className="mt-12 text-xs tracking-wide text-white/35">
            Dr. Bhuvan's Dental Laser & Implant Centre
            <span className="mx-2">•</span>
            Ameerpet – Yousufguda, Hyderabad
          </p>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="bg-[#1d1d1b] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              Your Smile Deserves a Plan
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Not sure which crown is right for you?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
              Book a consultation to understand your treatment options.
            </p>
          </div>
          <a
            href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20crown%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#e9853e] px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-[#f2944d]"
          >
            Book Appointment <ArrowRight size={18} />
          </a>
        </div>
      </section>
      
      {/* MOBILE STICKY BOOKING BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#eee7df] bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">

          <a
            href="tel:+918074528763"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e9853e] bg-white px-4 py-3.5 text-sm font-bold text-[#c96f30] transition active:scale-95"
          >
            <Phone size={17} />
            Call Clinic
          </a>

          <a
            href="https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20crown%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e9853e] px-4 py-3.5 text-sm font-bold text-white transition active:scale-95"
          >
            WhatsApp
            <ArrowRight size={17} />
          </a>

        </div>
      </div>

    </main>
  );
}
