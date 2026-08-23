import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle, Phone, Star } from "lucide-react";

export const metadata = {
  title:
    "Dental Implants in Punjagutta, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

  description:
    "Looking for dental implants in Punjagutta, Hyderabad? Dr. Bhuvan's Dental Laser & Implant Centre provides personalized dental implant treatment, implant planning, gum care and advanced restorative dentistry.",

  keywords: [
    "dental implants in Punjagutta",
    "dental implantologist in Punjagutta",
    "best dental implantologist in Punjagutta",
    "dental implants cost in Punjagutta",
    "dental implant treatment Punjagutta",
    "dental clinic in Punjagutta",
    "best dental clinic in Punjagutta",
    "best dentist in Punjagutta",
    "dentist in Punjagutta",
    "dental implants Hyderabad",
    "dental implantologist Hyderabad",
    "dental implants near Punjagutta",
    "dental implants near Ameerpet",
    "dental implants near Yousufguda",
    "dental implants near Srinagar Colony",
  ],

  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dental-implants-punjagutta",
  },

  openGraph: {
    title:
      "Dental Implants in Punjagutta, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Advanced dental implant treatment in Punjagutta, Hyderabad with personalized implant planning and comprehensive gum and restorative care.",

    url:
      "https://www.drbhuvandentalcare.com/dental-implants-punjagutta",

    siteName:
      "Dr. Bhuvan's Dental Laser & Implant Centre",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url:
          "https://www.drbhuvandentalcare.com/doctor.webp",

        width: 1200,
        height: 630,

        alt:
          "Dental Implants in Punjagutta - Dr. Bhuvan's Dental Laser & Implant Centre",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dental Implants in Punjagutta, Hyderabad | Dr. Bhuvan's Dental Laser & Implant Centre",

    description:
      "Dental implant treatment in Punjagutta, Hyderabad with personalized planning and comprehensive dental care.",

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

export default function DentalImplantsPage() {
 const faqs = [
  {
    question: "How much do dental implants cost in Punjagutta?",
    answer:
      "Dental implant cost in Punjagutta varies according to the number of implants, implant system, bone condition, gum health, additional procedures and the type of final restoration required. A personalised consultation is needed for an accurate treatment estimate.",
  },

  {
    question: "Who is a good dental implantologist in Punjagutta?",
    answer:
      "Choosing an implantologist should be based on appropriate clinical qualifications, implant experience, treatment planning, gum health assessment and the ability to provide personalised care. Dr. Bhuvan's Dental Laser & Implant Centre provides implant-focused dental care in the Punjagutta and Ameerpet area.",
  },

  {
    question: "Are dental implants painful?",
    answer:
      "Dental implant placement is performed using appropriate local anaesthesia. Temporary discomfort, swelling or sensitivity may occur after the procedure as the tissues heal. Your dentist will provide specific post-operative instructions.",
  },

  {
    question: "How long does dental implant treatment take?",
    answer:
      "The overall treatment timeline varies from patient to patient. It may include consultation and planning, implant placement, a healing period and placement of the final restoration. Bone grafting or other procedures may extend the treatment timeline.",
  },

  {
    question: "Can I get a dental implant after losing a tooth?",
    answer:
      "Dental implants may be considered after tooth loss, provided the clinical conditions are suitable. Your dentist will evaluate the gums, available bone, bite and overall oral health before recommending implant treatment.",
  },

  {
    question: "Can patients with gum disease get dental implants?",
    answer:
      "Patients with gum disease require appropriate evaluation and management before implant treatment. Healthy gums and good oral hygiene are important considerations for the long-term health of implant-supported restorations.",
  },

  {
    question: "Can a dental implant replace one missing tooth?",
    answer:
      "Yes. A single dental implant can be used to support a replacement crown in selected patients with one missing tooth. The surrounding teeth, bone, gums and bite need to be evaluated before treatment.",
  },

  {
    question: "Are dental implants better than dentures?",
    answer:
      "Dental implants and dentures are different tooth-replacement options. Implants provide a fixed foundation for suitable restorations, while dentures are generally removable. The appropriate option depends on your oral health, bone condition, number of missing teeth and treatment goals.",
  },
];
  const schema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Dentist",

      "@id":
        "https://www.drbhuvandentalcare.com/dental-implants-punjagutta#dentist",

      name: "Dr. Bhuvan's Dental Laser & Implant Centre",

      url:
        "https://www.drbhuvandentalcare.com/dental-implants-punjagutta",

      telephone: "+91 8074528763",

      image:
        "https://www.drbhuvandentalcare.com/doctor.webp",

      description:
        "Dental implant treatment in Punjagutta, Hyderabad with personalized implant planning, gum care and comprehensive restorative dentistry.",

      address: {
        "@type": "PostalAddress",

        streetAddress:
          "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar",

        addressLocality: "Ameerpet",

        addressRegion: "Telangana",

        postalCode: "500073",

        addressCountry: "IN",
      },

      areaServed: [
        {
          "@type": "Place",
          name: "Punjagutta",
        },
        {
          "@type": "Place",
          name: "Ameerpet",
        },
        {
          "@type": "Place",
          name: "Yousufguda",
        },
        {
          "@type": "Place",
          name: "Srinagar Colony",
        },
        {
          "@type": "Place",
          name: "Navodaya Colony",
        },
      ],

      medicalSpecialty: "Dentistry",

      availableService: {
        "@type": "MedicalProcedure",

        name: "Dental Implant Treatment",

        bodyLocation: "Teeth",

        procedureType: "Surgical",
      },
    },

    {
      "@type": "FAQPage",

      "@id":
        "https://www.drbhuvandentalcare.com/dental-implants-punjagutta#faq",

      mainEntity: faqs.map((faq) => ({
        "@type": "Question",

        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="bg-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 text-white">

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl"></div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">

              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              Premium Implant Dentistry

            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight lg:text-6xl">

              Dental Implants in
              <span className="block text-orange-300">
                Punjagutta, Hyderabad
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">

              Replace missing teeth with advanced dental implants that look,
              feel and function like natural teeth. Enjoy confident eating,
              speaking and smiling with long-lasting implant solutions by
              <strong> Dr. Bhuvanesh Yanamala (MDS Periodontics & Implantology).</strong>

            </p>

            {/* Highlights */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">

                <CheckCircle className="h-6 w-6 text-green-400" />

                <span>Natural Looking Replacement Teeth</span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle className="h-6 w-6 text-green-400" />

                <span>Advanced Digital Implant Planning</span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle className="h-6 w-6 text-green-400" />

                <span>Comfortable & Personalized Treatment</span>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/#appointment"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                <CalendarDays className="h-5 w-5" />
                Book Consultation
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

            <Image
              src="/implant.webp"
              alt="Dental Implants in Punjagutta Hyderabad"
              width={700}
              height={700}
              priority
              className="relative z-10 mx-auto rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* ================= DENTAL IMPLANTOLOGIST IN PUNJAGUTTA ================= */}

<section className="bg-slate-50 py-20">
  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-600">
        IMPLANT DENTISTRY
      </span>

      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        Dental Implantologist in Punjagutta, Hyderabad
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        If you are looking for a dental implantologist in Punjagutta,
        implant treatment should begin with careful diagnosis, treatment
        planning and evaluation of your gums, teeth, bite and available bone.
      </p>

    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">

      {[
        {
          title: "Personalised Implant Planning",
          text:
            "Every implant case is different. Treatment is planned according to the number of missing teeth, bone condition, gum health and the final restoration required.",
        },
        {
          title: "Single & Multiple Tooth Implants",
          text:
            "Implant-supported solutions can be considered for replacing a single missing tooth or multiple missing teeth depending on the individual case.",
        },
        {
          title: "Comprehensive Gum Evaluation",
          text:
            "Healthy gums are an important part of implant care. Existing gum disease or periodontal concerns should be assessed and managed appropriately.",
        },
        {
          title: "Digital Treatment Planning",
          text:
            "Appropriate imaging and digital planning can help evaluate implant position, available bone and the planned restorative outcome.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
        >

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <CheckCircle size={21} />
            </div>

            <div>

              <h3 className="text-xl font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>

            </div>

          </div>

        </div>
      ))}

    </div>

    <div className="mt-10 rounded-3xl border border-orange-200 bg-orange-50 p-7">

      <p className="text-lg leading-8 text-slate-700">
        Searching for the{" "}
        <strong>best dental implantologist in Punjagutta</strong> should not
        be based only on price or online rankings. The right treatment
        depends on your individual dental condition, implant requirements,
        gum health and long-term restorative goals.
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        A consultation can help determine whether dental implants are
        appropriate for you and which treatment approach best matches your
        needs.
      </p>

    </div>

  </div>
</section>
  
{/* WHY CHOOSE DENTAL IMPLANTS */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
        Why Dental Implants?
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">
        The Gold Standard for Replacing Missing Teeth
      </h2>

      <p className="mt-8 text-xl leading-9 text-gray-600">

        Dental implants are designed to replace missing teeth permanently.
        Unlike removable dentures or traditional bridges, implants are fixed
        into the jawbone, providing exceptional stability, comfort and a
        natural appearance.

      </p>

    </div>

  </div>

</section>

{/* BENEFITS */}

<section className="bg-gray-50 py-20">

<div className="mx-auto max-w-7xl px-6">

<div className="mb-14 text-center">

<h2 className="text-4xl font-black text-gray-900">
Benefits of Dental Implants
</h2>

<p className="mt-4 text-lg text-gray-600">
Discover why millions of people choose dental implants every year.
</p>

</div>

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

<div className="text-5xl">😁</div>

<h3 className="mt-6 text-2xl font-bold">
Natural Appearance
</h3>

<p className="mt-4 leading-8 text-gray-600">
Implants are designed to closely resemble natural teeth in shape, color and function, providing a seamless smile.
</p>

</div>

<div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

<div className="text-5xl">🍎</div>

<h3 className="mt-6 text-2xl font-bold">
Eat Your Favourite Foods
</h3>

<p className="mt-4 leading-8 text-gray-600">
Enjoy eating comfortably without worrying about loose dentures or difficulty chewing hard foods.
</p>

</div>

<div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

<div className="text-5xl">🦴</div>

<h3 className="mt-6 text-2xl font-bold">
Helps Preserve Jaw Bone
</h3>

<p className="mt-4 leading-8 text-gray-600">
Dental implants stimulate the jawbone and help reduce bone loss that naturally occurs after tooth loss.
</p>

</div>

<div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

<div className="text-5xl">🛡️</div>

<h3 className="mt-6 text-2xl font-bold">
Long-lasting Solution
</h3>

<p className="mt-4 leading-8 text-gray-600">
With proper care and regular maintenance, dental implants can last for many years.
</p>

</div>

<div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

<div className="text-5xl">💬</div>

<h3 className="mt-6 text-2xl font-bold">
Clear Speech
</h3>

<p className="mt-4 leading-8 text-gray-600">
Unlike loose dentures, implants remain securely fixed, helping improve speech and pronunciation.
</p>

</div>

<div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

<div className="text-5xl">✨</div>

<h3 className="mt-6 text-2xl font-bold">
Improved Confidence
</h3>

<p className="mt-4 leading-8 text-gray-600">
Smile confidently knowing your replacement teeth look and feel like natural teeth.
</p>

</div>

</div>

</div>

</section>

{/* WHO IS A CANDIDATE */}

<section className="py-24 bg-white">

<div className="mx-auto max-w-7xl px-6">

<div className="grid items-center gap-16 lg:grid-cols-2">

<div>

<Image
src="/implant.webp"
alt="Who needs dental implants"
width={700}
height={700}
className="rounded-3xl shadow-2xl"
/>

</div>

<div>

<span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
Ideal Candidates
</span>

<h2 className="mt-6 text-5xl font-black text-gray-900">
Who Can Benefit from Dental Implants?
</h2>

<p className="mt-8 text-lg leading-9 text-gray-600">

Dental implants are an excellent option for adults who have lost one or more teeth due to decay, gum disease, trauma, or other reasons. A healthy jawbone and good oral hygiene are important factors for successful implant treatment.

</p>

<ul className="mt-8 space-y-4 text-lg text-gray-700">

<li>✅ Missing one or multiple teeth</li>

<li>✅ Difficulty chewing due to missing teeth</li>

<li>✅ Loose dentures</li>

<li>✅ Good general health</li>

<li>✅ Looking for a long-term tooth replacement</li>

</ul>

</div>

</div>

</div>

</section>
{/* =======================================
IMPLANT PROCEDURE
======================================= */}

<section className="bg-gradient-to-br from-slate-50 to-white py-24">

<div className="mx-auto max-w-7xl px-6">

<div className="mx-auto max-w-3xl text-center">

<span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
Treatment Process
</span>

<h2 className="mt-6 text-5xl font-black text-gray-900">
Dental Implant Procedure
</h2>

<p className="mt-8 text-xl leading-9 text-gray-600">

Dental implant treatment is carefully planned to ensure long-term success.
Every patient receives a personalized treatment plan based on clinical
examination, digital imaging and bone quality.

</p>

</div>

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

<div className="rounded-3xl bg-white p-8 shadow-xl">

<div className="mb-5 text-5xl">1️⃣</div>

<h3 className="text-2xl font-bold">
Consultation
</h3>

<p className="mt-4 leading-8 text-gray-600">

Clinical examination, digital X-rays and CBCT scan when required.

</p>

</div>

<div className="rounded-3xl bg-white p-8 shadow-xl">

<div className="mb-5 text-5xl">2️⃣</div>

<h3 className="text-2xl font-bold">
Implant Placement
</h3>

<p className="mt-4 leading-8 text-gray-600">

The titanium implant is placed into the jawbone under local anesthesia.

</p>

</div>

<div className="rounded-3xl bg-white p-8 shadow-xl">

<div className="mb-5 text-5xl">3️⃣</div>

<h3 className="text-2xl font-bold">
Healing Phase
</h3>

<p className="mt-4 leading-8 text-gray-600">

The implant naturally integrates with the jawbone through osseointegration.

</p>

</div>

<div className="rounded-3xl bg-white p-8 shadow-xl">

<div className="mb-5 text-5xl">4️⃣</div>

<h3 className="text-2xl font-bold">
Final Crown
</h3>

<p className="mt-4 leading-8 text-gray-600">

A custom-made crown is attached to restore appearance and chewing function.

</p>

</div>

</div>

</div>

</section>

{/* =======================================
TYPES OF IMPLANTS
======================================= */}

<section className="py-24 bg-white">

<div className="mx-auto max-w-7xl px-6">

<div className="text-center">

<h2 className="text-5xl font-black text-gray-900">
Types of Dental Implants
</h2>

<p className="mt-6 text-xl text-gray-600">

Every smile is different. We recommend the most appropriate implant solution
based on your oral condition.

</p>

</div>

<div className="mt-16 grid gap-8 lg:grid-cols-3">

<div className="group rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-3 hover:shadow-2xl">

<h3 className="text-2xl font-bold">
🦷 Single Tooth Implant
</h3>

<p className="mt-5 leading-8 text-gray-600">

Ideal for replacing one missing tooth without affecting adjacent healthy teeth.

</p>

</div>

<div className="group rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-3 hover:shadow-2xl">

<h3 className="text-2xl font-bold">
😁 Multiple Implants
</h3>

<p className="mt-5 leading-8 text-gray-600">

Suitable for patients missing several teeth while preserving natural bone.

</p>

</div>

<div className="group rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-3 hover:shadow-2xl">

<h3 className="text-2xl font-bold">
✨ Full Mouth Rehabilitation
</h3>

<p className="mt-5 leading-8 text-gray-600">

Advanced implant-supported solutions for replacing an entire arch of teeth.

</p>

</div>

</div>

</div>

</section>

{/* ================= BEST DENTAL CLINIC IN PUNJAGUTTA ================= */}

<section className="relative overflow-hidden bg-slate-950 py-20 text-white">
  <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />
  <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

  <div className="relative mx-auto max-w-6xl px-6">

    {/* Heading */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-400">
        WHY PATIENTS CHOOSE US
      </span>

      <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        Looking for the Best Dental Clinic in Punjagutta?
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Choosing a dental clinic is about more than location or price.
        Comprehensive diagnosis, appropriate treatment planning,
        clinical experience and personalised patient care all matter
        when choosing dental treatment.
      </p>

    </div>

    {/* Trust Cards */}

    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "MDS Periodontics",
          text:
            "Our clinical approach includes a strong focus on gum health and periodontal care, which are important considerations in implant dentistry.",
        },
        {
          title: "Implant-Focused Care",
          text:
            "Treatment planning considers the missing tooth, surrounding tissues, available bone, bite and the final restoration.",
        },
        {
          title: "Personalised Treatment",
          text:
            "Every patient has different dental requirements. Treatment recommendations are made according to individual clinical needs.",
        },
        {
          title: "Modern Dental Technology",
          text:
            "Digital planning and appropriate diagnostic technology can help improve treatment assessment and planning when clinically indicated.",
        },
        {
          title: "One-to-One Patient Care",
          text:
            "We focus on personalised consultations and clear communication so patients understand their treatment options.",
        },
        {
          title: "Comprehensive Dentistry",
          text:
            "From preventive and gum care to implants and restorative dentistry, treatment is planned with your overall oral health in mind.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.08]"
        >

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
            <CheckCircle size={21} />
          </div>

          <h3 className="mt-5 text-xl font-black">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            {item.text}
          </p>

        </div>
      ))}

    </div>

    {/* Location Trust Bar */}

    <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
            Conveniently Located
          </p>

          <h3 className="mt-2 text-2xl font-black">
            Dental Care Near Punjagutta & Central Hyderabad
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-slate-400">
            Our clinic is located at Ganapati Complex, Navodaya Colony Road,
            with convenient access for patients from Punjagutta, Ameerpet,
            Yousufguda, Srinagar Colony and nearby areas.
          </p>

        </div>

        <Link
          href="/dentist-in-ameerpet"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-black text-white transition hover:bg-orange-400"
        >
          Explore Our Clinic
          <ArrowRight size={17} />
        </Link>

      </div>

    </div>

  </div>
</section>
{/* ================= DENTAL IMPLANT COST ================= */}

<section className="bg-white py-20">
  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-600">
        COST & TREATMENT PLANNING
      </span>

      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        Dental Implant Cost in Punjagutta, Hyderabad
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        One of the most common questions patients ask is about the cost of
        dental implants in Punjagutta. The total treatment cost can vary
        significantly because every implant case is different.
      </p>

    </div>

    {/* Cost Factors */}

    <div className="mt-12 grid gap-5 sm:grid-cols-2">

      {[
        {
          title: "Number of Missing Teeth",
          text:
            "Replacing one tooth is different from replacing several missing teeth or planning a full-mouth implant rehabilitation.",
        },
        {
          title: "Implant System",
          text:
            "The implant system selected for your treatment can influence the overall treatment cost.",
        },
        {
          title: "Bone Condition",
          text:
            "Available bone volume and quality are evaluated during treatment planning. Additional procedures may sometimes be required.",
        },
        {
          title: "Gum Health",
          text:
            "Existing gum disease or periodontal problems may need appropriate treatment before implant placement.",
        },
        {
          title: "Additional Procedures",
          text:
            "Some patients may require procedures such as bone grafting or other site-specific treatments before or along with implant therapy.",
        },
        {
          title: "Final Tooth Restoration",
          text:
            "The type of crown, bridge or implant-supported restoration planned is another factor that can influence the overall cost.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
        >

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <CheckCircle size={19} />
            </div>

            <div>

              <h3 className="text-lg font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {item.text}
              </p>

            </div>

          </div>

        </div>
      ))}

    </div>

    {/* Important Note */}

    <div className="mt-10 rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-8 shadow-sm">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
          <Star size={21} fill="currentColor" />
        </div>

        <div>

          <h3 className="text-xl font-black text-slate-900">
            Why We Don't Give a One-Size-Fits-All Implant Price
          </h3>

          <p className="mt-3 leading-8 text-slate-600">
            A dental implant treatment plan should be based on your individual
            clinical requirements rather than a fixed online price. The number
            of implants, bone condition, gum health, implant system and final
            restoration can all affect the treatment plan.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            During a consultation, your dental condition can be evaluated and
            the appropriate implant treatment options and estimated cost can
            be discussed with you.
          </p>

        </div>

      </div>

    </div>

    {/* CTA */}

    <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-slate-950 p-8 text-center text-white md:flex-row md:text-left">

      <div>

        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
          Personalised Implant Consultation
        </p>

        <h3 className="mt-2 text-2xl font-black">
          Want to know what your implant treatment may involve?
        </h3>

        <p className="mt-2 max-w-2xl leading-7 text-slate-400">
          Book a consultation to understand your treatment options,
          requirements and estimated treatment cost.
        </p>

      </div>

      <a
        href="tel:+918074528763"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-black text-white transition hover:bg-orange-400"
      >
        <Phone size={17} />
        Call 80745 28763
      </a>

    </div>

  </div>
</section>

{/* ================= FREQUENTLY ASKED QUESTIONS ================= */}

<section className="bg-slate-50 py-20">
  <div className="mx-auto max-w-5xl px-6">

    <div className="mx-auto max-w-3xl text-center">

      <span className="font-semibold uppercase tracking-[4px] text-orange-600">
        COMMON QUESTIONS
      </span>

      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        Frequently Asked Questions About Dental Implants
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Here are some common questions patients ask about dental implants,
        treatment planning, recovery and implant costs in Punjagutta.
      </p>

    </div>

    <div className="mx-auto mt-12 max-w-4xl space-y-4">

      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-md"
          open={index === 0}
        >

          <summary className="flex cursor-pointer list-none items-center justify-between gap-6">

            <div className="flex items-start gap-4">

              <span className="mt-0.5 text-xs font-black text-orange-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-base font-black leading-7 text-slate-900 sm:text-lg">
                {faq.question}
              </h3>

            </div>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-transform duration-300 group-open:rotate-45">
              <span className="text-xl leading-none">
                +
              </span>
            </span>

          </summary>

          <div className="ml-8 mt-5 border-t border-slate-100 pt-5">

            <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              {faq.answer}
            </p>

          </div>

        </details>
      ))}

    </div>

  </div>
</section>

{/* =======================================
CALL TO ACTION
======================================= */}

<section className="bg-gradient-to-r from-orange-500 to-orange-600 py-24 text-white">

<div className="mx-auto max-w-5xl px-6 text-center">

<h2 className="text-5xl font-black">

Restore Your Smile with Dental Implants

</h2>

<p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-orange-100">

Missing teeth can affect your confidence, chewing ability and
overall oral health. Book a consultation today and discover the
most suitable implant solution for your smile.

</p>

<div className="mt-12 flex flex-wrap justify-center gap-6">

<a
href="/#appointment"
className="rounded-full bg-white px-10 py-5 text-lg font-bold text-orange-600 transition hover:scale-105"
>

📅 Book Consultation

</a>

<a
href="tel:+918074528763"
className="rounded-full border-2 border-white px-10 py-5 text-lg font-bold transition hover:bg-white hover:text-orange-600"
>

📞 Call 8074528763

</a>

</div>

</div>

</section>
{/* =======================================
BEFORE & AFTER
======================================= */}

<section className="bg-white py-24">

<div className="mx-auto max-w-7xl px-6">

<div className="text-center">

<span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">

Smile Transformation

</span>

<h2 className="mt-6 text-5xl font-black text-gray-900">

Before & After Treatment

</h2>

<p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">

Every patient is unique. Our goal is to restore function, aesthetics and
confidence through personalized dental implant treatment.

</p>

</div>

<div className="mt-16 grid gap-8 md:grid-cols-3">

<div className="overflow-hidden rounded-3xl shadow-xl">

<Image
src="/before-after1.webp"
alt="Dental Implant Before and After"
width={500}
height={500}
className="w-full object-cover transition duration-500 hover:scale-105"
/>

</div>

<div className="overflow-hidden rounded-3xl shadow-xl">

<Image
src="/before-after2.webp"
alt="Smile Rehabilitation"
width={500}
height={500}
className="w-full object-cover transition duration-500 hover:scale-105"
/>

</div>

<div className="overflow-hidden rounded-3xl shadow-xl">

<Image
src="/before-after3.webp"
alt="Implant Treatment Results"
width={500}
height={500}
className="w-full object-cover transition duration-500 hover:scale-105"
/>

</div>

</div>

</div>

</section>

{/* =======================================
WHY PATIENTS TRUST US
======================================= */}

<section className="bg-slate-50 py-24">

<div className="mx-auto max-w-7xl px-6">

<div className="text-center">

<h2 className="text-5xl font-black text-gray-900">

Why Patients Choose Us

</h2>

<p className="mt-5 text-xl text-gray-600">

Delivering modern dentistry with precision, compassion and personalized care.

</p>

</div>

<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

<div className="rounded-3xl bg-white p-8 text-center shadow-lg">

<div className="text-5xl">👨‍⚕️</div>

<h3 className="mt-6 text-xl font-bold">

MDS Specialist

</h3>

<p className="mt-4 text-gray-600">

Specialized training in Periodontics and Implantology.

</p>

</div>

<div className="rounded-3xl bg-white p-8 text-center shadow-lg">

<div className="text-5xl">🦷</div>

<h3 className="mt-6 text-xl font-bold">

Advanced Implant Solutions

</h3>

<p className="mt-4 text-gray-600">

Evidence-based treatment planning for predictable outcomes.

</p>

</div>

<div className="rounded-3xl bg-white p-8 text-center shadow-lg">

<div className="text-5xl">⚡</div>

<h3 className="mt-6 text-xl font-bold">

Modern Technology

</h3>

<p className="mt-4 text-gray-600">

Digital diagnosis and minimally invasive treatment approaches.

</p>

</div>

<div className="rounded-3xl bg-white p-8 text-center shadow-lg">

<div className="text-5xl">❤️</div>

<h3 className="mt-6 text-xl font-bold">

Personalized Care

</h3>

<p className="mt-4 text-gray-600">

Every treatment plan is customized for your individual needs.

</p>

</div>

</div>

</div>

</section>

{/* =======================================
RELATED TREATMENTS
======================================= */}

<section className="bg-white py-24">

<div className="mx-auto max-w-6xl px-6">

<div className="text-center">

<h2 className="text-5xl font-black">

Related Dental Treatments

</h2>

<p className="mt-5 text-xl text-gray-600">

Explore more dental treatments available at our clinic.

</p>

</div>

<div className="mt-16 grid gap-8 md:grid-cols-3">

<Link
href="/gum-disease-treatment-Punjagutta"
className="rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
>

<h3 className="text-2xl font-bold">

Gum Disease Treatment

</h3>

<p className="mt-4 text-gray-600 leading-8">

Healthy gums are the foundation for successful implant treatment.

</p>

</Link>

<Link
href="/root-canal-treatment-Punjagutta"
className="rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
>

<h3 className="text-2xl font-bold">

Root Canal Treatment

</h3>

<p className="mt-4 text-gray-600 leading-8">

Save infected teeth using advanced painless techniques.

</p>

</Link>

<Link
href="/laser-dentistry-Punjagutta"
className="rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
>

<h3 className="text-2xl font-bold">

Laser Dentistry

</h3>

<p className="mt-4 text-gray-600 leading-8">

Modern laser procedures with faster healing and improved comfort.

</p>

</Link>

</div>

</div>

</section>
{/* =======================================
NEARBY AREAS WE SERVE
======================================= */}

<section className="bg-orange-50 py-20">

  <div className="mx-auto max-w-6xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
        Nearby Locations
      </span>

      <h2 className="mt-6 text-4xl font-black text-gray-900">
        Dental Implant Services Near Punjagutta
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
        Our clinic is conveniently located for patients from <strong>Punjagutta, Hyderabad</strong> and nearby areas including Ameerpet, Yousufguda, SR Nagar and Madhura Nagar. Punjagutta is centrally connected to these neighbourhoods, making it easy for patients to visit our clinic for advanced dental implant treatment.
      </p>

    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      <Link
        href="/dental-implants-ameerpet"
        className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
      >
        <h3 className="font-bold text-orange-600">
          Dental Implants in Ameerpet
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Premium dental implant treatment near Ameerpet.
        </p>

        <span className="mt-4 inline-block font-semibold text-orange-600 transition group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>

      <Link
        href="/dental-implants-yousufguda"
        className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
      >
        <h3 className="font-bold text-orange-600">
          Dental Implants in Yousufguda
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Advanced implant dentistry for Yousufguda patients.
        </p>

        <span className="mt-4 inline-block font-semibold text-orange-600 transition group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>

      <Link
        href="/dental-implants-sr-nagar"
        className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
      >
        <h3 className="font-bold text-orange-600">
          Dental Implants in SR Nagar
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Personalized implant care near SR Nagar.
        </p>

        <span className="mt-4 inline-block font-semibold text-orange-600 transition group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>

      <Link
        href="/dental-implants-madhura-nagar"
        className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
      >
        <h3 className="font-bold text-orange-600">
          Dental Implants in Madhura Nagar
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Modern dental implant solutions for Madhura Nagar.
        </p>

        <span className="mt-4 inline-block font-semibold text-orange-600 transition group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>

    </div>

  </div>

</section>
   </main>
    </>
  );
}