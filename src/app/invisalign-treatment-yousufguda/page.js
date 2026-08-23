import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Smile,
  Zap,
} from "lucide-react";

export const metadata = {
  title:
    "Invisalign Treatment in Yousufguda, Ameerpet | Clear Aligners Hyderabad",

  description:
    "Looking for Invisalign treatment in Yousufguda or Ameerpet? Dr. Bhuvan's Dental Laser & Implant Centre provides modern clear aligner treatment for straighter, healthier and more confident smiles.",

  keywords: [
    "Invisalign treatment Yousufguda",
    "Invisalign Yousufguda",
    "clear aligners Yousufguda",
    "Invisalign treatment Ameerpet",
    "clear aligners Ameerpet",
    "Invisalign Hyderabad",
    "clear aligner treatment Hyderabad",
    "invisible braces Yousufguda",
    "invisible braces Ameerpet",
    "teeth straightening Yousufguda",
    "clear aligners near Yousufguda",
    "Invisalign near Ameerpet",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/invisalign-treatment-yousufguda",
  },

  openGraph: {
    title:
      "Invisalign Treatment in Yousufguda, Ameerpet | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Modern Invisalign and clear aligner treatment in Yousufguda and Ameerpet for a straighter, more confident smile.",

    url:
      "https://www.drbhuvandentalcare.com/invisalign-treatment-yousufguda",

    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url:
          "https://www.drbhuvandentalcare.com/doctor.webp",
        width: 1200,
        height: 630,
        alt:
          "Dr. Bhuvanesh Yanamala - Invisalign and Clear Aligner Treatment in Yousufguda",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Invisalign Treatment in Yousufguda, Ameerpet | Clear Aligners Hyderabad",

    description:
      "Explore modern clear aligner treatment at Dr. Bhuvan's Dental Laser & Implant Centre in Yousufguda, Hyderabad.",

    images: [
      "https://www.drbhuvandentalcare.com/doctor.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const nearbyAreas = [
  "Yousufguda",
  "Ameerpet",
  "Srinagar Colony",
  "Navodaya Colony",
  "Yellareddyguda",
  "Sri Krishna Nagar",
  "Madhura Nagar",
  "Kamalapuri Colony",
  "Rehmat Nagar",
  "Borabanda",
  "SR Nagar",
  "Punjagutta",
];

const benefits = [
  {
    icon: Smile,
    title: "Nearly Invisible",
    text:
      "Clear aligners are designed to fit discreetly over your teeth, making them a subtle option for smile correction.",
  },
  {
    icon: ShieldCheck,
    title: "Removable Design",
    text:
      "Remove your aligners when eating, drinking or following your normal oral hygiene routine.",
  },
  {
    icon: Sparkles,
    title: "Smile-Focused",
    text:
      "Treatment is planned around your teeth and smile, with a personalised approach rather than a one-size-fits-all solution.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Care",
    text:
      "Your treatment progress is reviewed at appropriate intervals so your aligner plan can be monitored carefully.",
  },
];

const treatmentSteps = [
  {
    number: "01",
    title: "Consultation",
    text:
      "We assess your teeth, bite, smile and overall oral health to understand whether clear aligner treatment is suitable for you.",
  },
  {
    number: "02",
    title: "Digital Treatment Planning",
    text:
      "Your treatment is planned according to your individual dental needs, with the expected tooth movements mapped before treatment begins.",
  },
  {
    number: "03",
    title: "Your Custom Aligners",
    text:
      "Once your treatment plan is finalised, your aligners are provided with instructions for use and care.",
  },
  {
    number: "04",
    title: "Progress Reviews",
    text:
      "Regular reviews help us monitor tooth movement, comfort and treatment progress and make adjustments when required.",
  },
];

const suitableFor = [
  "Crowded teeth",
  "Spacing between teeth",
  "Mild to moderate alignment concerns",
  "Selected bite problems",
  "Adults looking for a discreet orthodontic option",
  "Patients who prefer removable aligners",
];

const faqs = [
  {
    q: "What is Invisalign treatment?",
    a:
      "Invisalign is a clear aligner system used to gradually move teeth into planned positions. Treatment suitability depends on your individual teeth, bite and oral health.",
  },
  {
    q: "Are clear aligners really invisible?",
    a:
      "Clear aligners are designed to be discreet and much less noticeable than conventional metal braces. However, they are not literally invisible.",
  },
  {
    q: "Can adults undergo Invisalign treatment?",
    a:
      "Yes. Adults can be candidates for clear aligner treatment. The important factor is whether the specific dental and bite concerns can be treated predictably with aligners.",
  },
  {
    q: "How long does Invisalign treatment take?",
    a:
      "Treatment duration varies according to the complexity of tooth movement, bite concerns and individual response. Your expected timeline can be discussed after an examination and treatment planning.",
  },
  {
    q: "Can I remove my aligners while eating?",
    a:
      "Removable aligners can generally be taken out for meals and routine oral hygiene. Follow the specific instructions provided for your treatment.",
  },
  {
    q: "Is Invisalign better than braces?",
    a:
      "Neither option is universally better. Clear aligners and braces have different advantages, and the right option depends on your dental condition, treatment goals, lifestyle and clinical requirements.",
  },
  {
    q: "How much does Invisalign treatment cost in Hyderabad?",
    a:
      "The cost depends on the complexity of your case, treatment duration and the aligner plan required. A personalised consultation is the best way to determine the treatment options and cost for your case.",
  },
];

export default function InvisalignTreatmentYousufgudaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id":
          "https://www.drbhuvandentalcare.com/invisalign-treatment-yousufguda#clinic",

        name: "Dr. Bhuvan's Dental Laser & Implant Centre",

        url:
          "https://www.drbhuvandentalcare.com/invisalign-treatment-yousufguda",

        telephone: "+918074528763",

        image:
          "https://www.drbhuvandentalcare.com/doctor.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar",
          addressLocality: "Yousufguda",
          addressRegion: "Telangana",
          postalCode: "500073",
          addressCountry: "IN",
        },

        areaServed: nearbyAreas.map((area) => ({
          "@type": "Place",
          name: area,
        })),

        medicalSpecialty: "Dentistry",
      },

      {
        "@type": "MedicalWebPage",

        "@id":
          "https://www.drbhuvandentalcare.com/invisalign-treatment-yousufguda#page",

        url:
          "https://www.drbhuvandentalcare.com/invisalign-treatment-yousufguda",

        name:
          "Invisalign Treatment in Yousufguda, Ameerpet | Clear Aligners Hyderabad",

        description:
          "Information about Invisalign and clear aligner treatment at Dr. Bhuvan's Dental Laser & Implant Centre in Yousufguda, Hyderabad.",

        about: {
          "@type": "MedicalProcedure",
          name: "Clear Aligner Treatment",
        },

        isPartOf: {
          "@id":
            "https://www.drbhuvandentalcare.com/invisalign-treatment-yousufguda#clinic",
        },
      },

      {
        "@type": "FAQPage",

        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* ================= SCHEMA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="overflow-hidden bg-white text-slate-950">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111f] text-white">

          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

          <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-amber-400/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">

            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">

              {/* LEFT */}

              <div>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-orange-300">
                  <Sparkles size={13} />
                  Premium Clear Aligner Care
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">

                  Invisalign Treatment
                  <span className="block text-orange-500">
                    in Yousufguda
                  </span>

                  <span className="block text-white">
                    & Ameerpet
                  </span>

                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  A discreet, personalised approach to straighter teeth and
                  a more confident smile with modern clear aligner treatment
                  at Dr. Bhuvan&apos;s Dental Laser & Implant Centre.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <Link
                    href="#consultation"
                    className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-400"
                  >
                    Book a Consultation
                    <ArrowRight size={17} />
                  </Link>

                  <a
                    href="tel:+918074528763"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>

                </div>

                {/* Trust */}

                <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">

                  {[
                    ["4.9★", "Google Rating"],
                    ["MDS", "Periodontics"],
                    ["Laser", "Dentistry"],
                    ["Personalised", "Care"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
                    >
                      <p className="text-lg font-black text-orange-400">
                        {value}
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {label}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              {/* RIGHT PREMIUM VISUAL */}

              <div className="relative mx-auto w-full max-w-xl">

                <div className="absolute -inset-8 rounded-[3rem] bg-orange-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-xl">

                  <div className="relative overflow-hidden rounded-[2rem] bg-slate-900">

                    <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-orange-300 backdrop-blur">
                      Smile Transformation
                    </div>

                    <div className="relative h-[470px]">

                      <Image
                        src="/doctor.webp"
                        alt="Dr. Bhuvanesh Yanamala - Dentist in Yousufguda, Hyderabad"
                        fill
                        priority
                        className="object-cover object-center"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-7">

                        <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">

                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">
                            Clear Aligner Care
                          </p>

                          <h2 className="mt-2 text-2xl font-black text-white">
                            A discreet way to work
                            <span className="text-orange-400">
                              {" "}towards your smile goals.
                            </span>
                          </h2>

                          <div className="mt-5 flex flex-wrap gap-2">

                            {[
                              "Removable",
                              "Discreet",
                              "Custom Planned",
                            ].map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-slate-200"
                              >
                                {item}
                              </span>
                            ))}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="bg-white py-20 lg:py-28">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
              Modern Smile Correction
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Straighten Your Teeth
              <span className="block text-orange-500">
                Without Changing Your Lifestyle
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Clear aligner treatment offers a discreet alternative for
              selected alignment and bite concerns. Instead of traditional
              brackets and wires, a series of custom-made clear aligners can
              be used to gradually guide teeth towards their planned positions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">

              {[
                "Discreet appearance",
                "Removable design",
                "Personalised planning",
                "Regular progress monitoring",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2.5 text-sm font-bold text-slate-700"
                >
                  <CheckCircle2
                    size={16}
                    className="text-orange-500"
                  />
                  {item}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <section className="bg-[#fff8f1] py-20 lg:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
                Why Clear Aligners?
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Designed Around
                <span className="text-orange-500">
                  {" "}Your Smile
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A modern orthodontic experience with comfort, discretion
                and personalised treatment planning at the centre of care.
              </p>

            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-xl font-black">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {benefit.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            WHO CAN BENEFIT
        ====================================================== */}

        <section className="bg-white py-20 lg:py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

            <div>

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
                Is It Right For You?
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Clear Aligners Can Help With
                <span className="block text-orange-500">
                  Many Smile Concerns
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Clear aligner treatment may be suitable for a range of
                alignment concerns. The right treatment depends on a detailed
                clinical assessment of your teeth and bite.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {suitableFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                      <Check size={15} />
                    </div>

                    <span className="text-sm font-bold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            <div className="relative">

              <div className="absolute -inset-5 rounded-[3rem] bg-orange-100 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#07111f] p-8 text-white shadow-2xl sm:p-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">
                  <Stethoscope size={26} />
                </div>

                <p className="mt-8 text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
                  Clinical Assessment
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  Your smile deserves
                  <span className="block text-orange-400">
                    a personalised plan.
                  </span>
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  Not every alignment problem requires the same approach.
                  During your consultation, we assess your teeth and bite and
                  discuss whether clear aligner treatment is appropriate for
                  your specific needs.
                </p>

                <Link
                  href="#consultation"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-slate-900 transition hover:bg-orange-50"
                >
                  Check Your Suitability
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="bg-[#07111f] py-20 text-white lg:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
                Your Treatment Journey
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                From First Consultation
                <span className="block text-orange-500">
                  To Your New Smile
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                A structured treatment journey designed to keep you informed
                and comfortable at every stage.
              </p>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {treatmentSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur"
                >

                  <span className="text-5xl font-black text-orange-500/30">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-black">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            DOCTOR / CLINIC
        ====================================================== */}

        <section className="bg-white py-20 lg:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="overflow-hidden rounded-[3rem] border border-slate-100 bg-slate-50 shadow-xl">

              <div className="grid lg:grid-cols-[.8fr_1.2fr]">

                <div className="relative min-h-[420px]">

                  <Image
                    src="/doctor.webp"
                    alt="Dr. Bhuvanesh Yanamala - Dentist and Implantologist in Yousufguda"
                    fill
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7">

                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white backdrop-blur-xl">

                      <p className="font-black">
                        Dr. Bhuvanesh Yanamala
                      </p>

                      <p className="mt-1 text-xs text-slate-300">
                        MDS Periodontics • Implantology • Laser Dentistry
                      </p>

                    </div>

                  </div>

                </div>

                <div className="p-8 sm:p-12 lg:p-16">

                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
                    Personalised Dental Care
                  </span>

                  <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                    Technology Meets
                    <span className="block text-orange-500">
                      Clinical Experience
                    </span>
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    At Dr. Bhuvan&apos;s Dental Laser & Implant Centre, clear
                    aligner treatment is approached as part of comprehensive
                    dental care — with attention to your oral health, bite,
                    smile goals and long-term dental function.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">

                    {[
                      "One-to-one patient care",
                      "Personalised treatment planning",
                      "Modern dental technology",
                      "Comprehensive dental evaluation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
                      >
                        <CheckCircle2
                          size={19}
                          className="text-orange-500"
                        />

                        <span className="text-sm font-bold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            LOCATION / LOCAL SEO
        ====================================================== */}

        <section className="bg-[#07111f] py-20 text-white lg:py-24">

          <div className="mx-auto max-w-6xl px-6 text-center">

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400">
              Clear Aligner Care Near You
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Invisalign & Clear Aligners
              <span className="text-orange-500">
                {" "}Near Yousufguda
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
              Conveniently located at Ganapati Complex, Navodaya Colony Road,
              our clinic provides modern dental care for patients from
              Yousufguda, Ameerpet and nearby Hyderabad neighbourhoods.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-2">

              {nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold text-slate-300"
                >
                  <MapPin className="mr-1 inline-block" size={12} />
                  {area}
                </span>
              ))}

            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left sm:flex-row">

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">
                  Visit Our Clinic
                </p>

                <p className="mt-2 font-black">
                  Ganapati Complex, Navodaya Colony Road
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Yousufguda, Hyderabad, Telangana 500073
                </p>
              </div>

              <a
                href="tel:+918074528763"
                className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-400"
              >
                <Phone size={16} />
                80745 28763
              </a>

            </div>

          </div>

        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="bg-[#fffaf5] py-20 lg:py-28">

          <div className="mx-auto max-w-4xl px-6">

            <div className="text-center">

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
                Frequently Asked Questions
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Clear Aligner Questions,
                <span className="block text-orange-500">
                  Clearly Answered
                </span>
              </h2>

            </div>

            <div className="mt-12 space-y-3">

              {faqs.map((faq, index) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
                  open={index === 0}
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black text-slate-900">
                    <span>
                      <span className="mr-3 text-xs text-orange-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </span>

                    <ChevronDown
                      size={19}
                      className="shrink-0 text-orange-500 transition group-open:rotate-180"
                    />
                  </summary>

                  <p className="mt-4 max-w-3xl border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                    {faq.a}
                  </p>

                </details>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section
          id="consultation"
          className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 py-20 text-white lg:py-24"
        >

          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-black/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Smile size={26} />
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
              Ready to Explore a
              <span className="block">
                Straighter, More Confident Smile?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-orange-50 sm:text-lg">
              Book a consultation at Dr. Bhuvan&apos;s Dental Laser & Implant
              Centre and find out whether clear aligner treatment is suitable
              for your smile.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <a
                href="https://wa.me/918074528763"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-orange-600 shadow-xl transition hover:-translate-y-1"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>

              <a
                href="tel:+918074528763"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone size={17} />
                Call 80745 28763
              </a>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-orange-100">

              <span className="inline-flex items-center gap-1.5">
                <Check size={14} />
                Personalised Care
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Check size={14} />
                Modern Dentistry
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Check size={14} />
                Yousufguda • Ameerpet
              </span>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}