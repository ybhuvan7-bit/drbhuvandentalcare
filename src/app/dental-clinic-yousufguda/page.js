
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dental Clinic in Yousufguda, Hyderabad | Dr. Bhuvan",
  description:
    "Looking for a dental clinic near Yousufguda, Hyderabad? Contact Dr. Bhuvan's Dental Laser & Implant Centre in Ameerpet for dental consultations and treatment enquiries.",
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/dental-clinic-yousufguda",
  },
  openGraph: {
    title: "Dental Clinic Near Yousufguda, Hyderabad | Dr. Bhuvan",
    description:
      "Explore dental care options near Yousufguda at Dr. Bhuvan's Dental Laser & Implant Centre, Ameerpet, Hyderabad.",
    url: "https://www.drbhuvandentalcare.com/dental-clinic-yousufguda",
    type: "website",
  },
};

const clinicName = "Dr. Bhuvan's Dental Laser & Implant Centre";
const phone = "+918074528763";
const phoneDisplay = "+91 80745 28763";

const address =
  "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073";

const whatsappUrl =
  "https://wa.me/918074528763?text=" +
  encodeURIComponent(
    "Hello, I would like to enquire about a dental appointment at Dr. Bhuvan's Dental Laser & Implant Centre."
  );

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(address);

const services = [
  {
    title: "General Dental Consultation",
    telugu: "సాధారణ దంత పరీక్ష",
    description:
      "Dental assessment and guidance based on your symptoms and oral health needs.",
  },
  {
    title: "Teeth Cleaning and Gum Care",
    telugu: "పళ్ల శుభ్రత మరియు చిగుళ్ల సంరక్షణ",
    description:
      "Assessment of plaque, tartar, gum bleeding and other gum concerns.",
    href: "/teeth-cleaning-ameerpet",
  },
  {
    title: "Dental Implants",
    telugu: "డెంటల్ ఇంప్లాంట్లు",
    description:
      "Consultation to assess missing teeth and discuss suitable replacement options.",
  },
  {
    title: "Laser Dentistry",
    telugu: "లేజర్ డెంటిస్ట్రీ",
    description:
      "Laser-assisted dental procedures where clinically appropriate.",
    href: "/laser-dentistry-yousufguda",
  },
  {
    title: "Tooth Pain and Cavities",
    telugu: "పంటి నొప్పి మరియు పుచ్చు",
    description:
      "Evaluation of tooth pain, sensitivity and cavities.",
    href: "/tooth-pain-treatment-yousufguda",
  },
  {
    title: "Cosmetic Dental Care",
    telugu: "కాస్మెటిక్ డెంటల్ కేర్",
    description:
      "Discuss suitable options for improving your smile.",
  },
];

const faqs = [
  {
    question: "Where is Dr. Bhuvan's Dental Laser & Implant Centre located?",
    answer:
      "The clinic is located at Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana 500073.",
  },
  {
    question: "Is there a dental clinic near Yousufguda?",
    answer:
      "Dr. Bhuvan's Dental Laser & Implant Centre is located in the Ameerpet and Yousufguda area of Hyderabad. Contact the clinic to confirm directions and appointment availability.",
  },
  {
    question: "What dental treatments can I enquire about?",
    answer:
      "You can enquire about dental consultations, teeth cleaning, gum care, dental implants, laser dentistry, tooth pain and other dental concerns. Treatment suitability depends on clinical examination.",
  },
  {
    question: "Can I enquire about an appointment on WhatsApp?",
    answer:
      "Yes. Use the WhatsApp link on this page to contact the clinic and enquire about appointment availability.",
  },
  {
    question: "Who is the dentist at the clinic?",
    answer:
      "Dr. Bhuvanesh Yanamala holds BDS and MDS qualifications in Periodontics. Contact the clinic to enquire about your specific dental needs.",
  },
  {
    question: "How can I get directions to the clinic?",
    answer:
      "Use the Get Directions button on this page to open Google Maps directions to the clinic address in Ganapati Complex, Ameerpet, Hyderabad.",
  },
];

export default function DentalClinicYousufgudaPage() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicName,
    url: "https://www.drbhuvandentalcare.com/dental-clinic-yousufguda",
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500073",
      addressCountry: "IN",
    },
    medicalSpecialty: "Dentistry",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dentistSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700">
              Dental Care Near Yousufguda
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Dental Clinic in{" "}
              <span className="text-orange-600">Yousufguda</span>, Hyderabad
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Looking for a dental clinic near Yousufguda? Dr. Bhuvan's
              Dental Laser & Implant Centre in Ameerpet provides dental
              consultations and guidance on suitable treatment options
              based on your oral health needs.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              యూసుఫ్‌గూడ దగ్గర దంత వైద్యశాల కోసం చూస్తున్నారా? మీ దంతాలు,
              చిగుళ్ల సమస్యలను పరీక్షించుకుని తగిన చికిత్స గురించి
              తెలుసుకోవడానికి మా క్లినిక్‌ను సంప్రదించండి.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-4 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700"
              >
                Book / Enquire on WhatsApp
              </a>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 transition hover:border-orange-400 hover:text-orange-700"
              >
                Call {phoneDisplay}
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Clinic address: Ganapati Complex, Ameerpet, Hyderabad.
              Please confirm your appointment before visiting.
            </p>
          </div>

          {/* REAL CLINIC PHOTO */}
          <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-100/60">
            <div className="relative h-[280px] sm:h-[360px] lg:h-[420px]">
              <Image
                src="/clinic/clinic1.webp"
                alt="Dr. Bhuvan's Dental Laser and Implant Centre in Ameerpet, Yousufguda, Hyderabad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
                Your Local Dental Care Option
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
                Dental Care Near Yousufguda
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Visit our Ameerpet clinic for a dental consultation and
                personalised treatment guidance.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL INFORMATION */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8">
          <div className="text-center">
            <p className="font-bold text-slate-900">Yousufguda</p>
            <p className="mt-1 text-sm text-slate-500">
              Local dental care information
            </p>
          </div>

          <div className="text-center">
            <p className="font-bold text-slate-900">Ameerpet</p>
            <p className="mt-1 text-sm text-slate-500">
              Clinic location
            </p>
          </div>

          <div className="text-center">
            <p className="font-bold text-slate-900">Appointment Enquiries</p>
            <p className="mt-1 text-sm text-slate-500">
              Call or WhatsApp the clinic
            </p>
          </div>
        </div>
      </section>

      
      {/* WHY CHOOSE OUR CLINIC */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              About Our Clinic
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Dental Care With Clear Guidance and Personalised Planning
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Choosing a dental clinic is about understanding your options,
              asking questions and making an informed decision. At Dr. Bhuvan's
              Dental Laser & Implant Centre, patients can enquire about their
              dental concerns and discuss the next steps after an appropriate
              clinical assessment.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Dr. Bhuvanesh Yanamala holds BDS and MDS qualifications in
              Periodontics. Recommended treatment depends on your oral health,
              clinical findings and individual needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Clinical Assessment",
                text: "Discuss your symptoms and have your teeth and gums assessed.",
              },
              {
                title: "Treatment Guidance",
                text: "Understand appropriate options, limitations and next steps.",
              },
              {
                title: "Preventive Care",
                text: "Get advice on oral hygiene and maintaining dental health.",
              },
              {
                title: "Appointment Enquiry",
                text: "Call or message the clinic to confirm availability before visiting.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="mb-3 h-2 w-10 rounded-full bg-orange-500" />
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
            Dental Services
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Dental Care Options Near Yousufguda
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore common dental concerns and enquire about an assessment
            at our Ameerpet clinic.
          </p>

          <p className="mt-3 leading-7 text-slate-600">
            యూసుఫ్‌గూడ సమీపంలో దంత చికిత్స గురించి తెలుసుకోవడానికి,
            మీ సమస్యకు తగిన పరీక్ష మరియు చికిత్స కోసం అపాయింట్‌మెంట్
            వివరాలను సంప్రదించండి.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 font-extrabold text-orange-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-orange-700">
                {service.telugu}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              {service.href && (
                <Link
                  href={service.href}
                  className="mt-5 inline-flex font-bold text-orange-700 hover:text-orange-800"
                >
                  Learn more <span className="ml-2">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      
      {/* COMMON DENTAL CONCERNS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              When to Seek Dental Advice
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Common Dental Problems We Can Help Assess
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Dental symptoms can have different causes. An examination helps
              identify the likely problem and whether treatment or further
              investigation is needed.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Tooth Pain or Sensitivity",
                text: "Pain or sensitivity may be associated with decay, cracks, gum recession or other causes. A dental assessment helps guide care.",
                href: "/tooth-pain-treatment-yousufguda",
                link: "Explore Tooth Pain Information",
              },
              {
                title: "Bleeding or Swollen Gums",
                text: "Bleeding gums may be related to plaque-induced inflammation or other periodontal conditions. Persistent symptoms should be assessed.",
                href: "/gum-bleeding-treatment-yousufguda",
                link: "Explore Gum Care Information",
              },
              {
                title: "Plaque and Tartar Build-up",
                text: "Professional cleaning may be recommended depending on the amount of deposits and the condition of your gums.",
                href: "/teeth-cleaning-ameerpet",
                link: "Explore Teeth Cleaning",
              },
              {
                title: "Missing Teeth",
                text: "A dental consultation can assess your oral health and discuss suitable replacement options, including implants when appropriate.",
                href: "/dental-clinic-yousufguda",
                link: "Enquire About Treatment",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex font-bold text-orange-700 hover:text-orange-800"
                >
                  {item.link} <span className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* TELUGU INFORMATION */}
      <section className="bg-orange-50/70">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              తెలుగు సమాచారం
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900">
              యూసుఫ్‌గూడ సమీపంలో దంత వైద్యశాల
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              పంటి నొప్పి, చిగుళ్ల నుంచి రక్తం రావడం, పళ్లపై గార,
              పుచ్చు లేదా పళ్లు కోల్పోవడం వంటి సమస్యలు ఉంటే దంత వైద్యుడిని
              సంప్రదించండి. సమస్యకు కారణాన్ని తెలుసుకోవడానికి క్లినికల్
              పరీక్ష అవసరం.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              డా. భువనేష్ యానమాల గారి Dr. Bhuvan's Dental Laser & Implant
              Centre, గణపతి కాంప్లెక్స్, నవోదయ కాలనీ రోడ్, శ్రీ కృష్ణ
              నగర్, అమీర్‌పేట్, యూసుఫ్‌గూడ, హైదరాబాద్ ప్రాంతంలో ఉంది.
              సందర్శించే ముందు ఫోన్ ద్వారా అపాయింట్‌మెంట్ వివరాలను
              నిర్ధారించుకోండి.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-4 font-bold text-white transition hover:bg-orange-700"
              >
                WhatsApp ద్వారా సంప్రదించండి
              </a>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 font-bold text-slate-800 transition hover:border-orange-400"
              >
                ఫోన్ చేయండి
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* WHAT TO EXPECT AT YOUR VISIT */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
            Your First Visit
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What to Expect During Your Dental Visit
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            The steps may vary depending on your symptoms and treatment needs.
            These are common parts of a dental consultation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Discuss Your Concern",
              text: "Explain your symptoms, concerns and relevant dental history.",
            },
            {
              number: "02",
              title: "Dental Examination",
              text: "Your dentist assesses your teeth, gums and other relevant findings.",
            },
            {
              number: "03",
              title: "Understand Options",
              text: "Discuss suitable treatment choices, limitations and expected care.",
            },
            {
              number: "04",
              title: "Plan Next Steps",
              text: "Ask about fees, appointment timing and any further investigations needed.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 font-extrabold text-orange-700">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-5 sm:p-6">
          <p className="font-bold text-slate-900">
            Before Travelling to the Clinic
          </p>
          <p className="mt-2 leading-7 text-slate-700">
            Call or WhatsApp to confirm appointment availability and
            directions. If you have previous dental X-rays or relevant
            treatment records, ask whether you should bring them.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-xl bg-orange-600 px-5 py-3 font-bold text-white hover:bg-orange-700"
          >
            Confirm an Appointment
          </a>
        </div>
      </section>


      {/* DENTAL ASSESSMENT */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Before Treatment
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Start With the Right Dental Assessment
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Dental symptoms can have different causes. An examination
              helps your dentist determine whether you need preventive
              care, gum treatment, restorative treatment or further
              assessment.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              If you have severe facial swelling or difficulty swallowing
              or breathing, seek emergency medical care.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-300">
              Contact the Clinic
            </p>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight">
              Need a Dental Appointment Near Yousufguda?
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Contact our Ameerpet clinic to discuss your concern and
              enquire about appointment availability.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600 sm:w-auto"
            >
              Send an Appointment Enquiry
            </a>

            <p className="mt-5 text-sm text-slate-300">{phoneDisplay}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Dental Clinic in Yousufguda: FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <summary className="cursor-pointer list-none font-bold leading-7 text-slate-900">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-xl text-orange-600">+</span>
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION AND INTERNAL LINKS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Clinic Address
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Visit Dr. Bhuvan's Dental Clinic
            </h2>

            <p className="mt-5 font-bold text-slate-900">{clinicName}</p>
            <p className="mt-3 leading-7 text-slate-600">{address}</p>

            <p className="mt-4 leading-7 text-slate-600">
              Dr. Bhuvanesh Yanamala — BDS, MDS (Periodontics)
            </p>

            <p className="mt-2 text-slate-600">
              Phone: {phoneDisplay}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              
<a
  href="https://www.google.com/maps/dir/?api=1&destination=Dr+Bhuvan%27s+Dental+Laser+%26+Implant+Centre%2C+Ganapathi+Complex%2C+Hyderabad&destination_place_id=ChIJhUqhWgCRyzsRv1O-F_mXxE8"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700"
>
  Get Directions
</a>


              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-800 transition hover:border-orange-400"
              >
                Call Clinic
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-7 sm:p-9">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Explore More Dental Pages
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Find more information about dental care and treatments
              at our clinic.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/dentist-in-ameerpet"
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4 font-semibold transition hover:bg-orange-50"
              >
                Dentist in Ameerpet <span>→</span>
              </Link>

              <Link
                href="/teeth-cleaning-ameerpet"
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4 font-semibold transition hover:bg-orange-50"
              >
                Teeth Cleaning in Ameerpet <span>→</span>
              </Link>

              <Link
                href="/gum-disease-treatment-ameerpet"
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4 font-semibold transition hover:bg-orange-50"
              >
                Gum Disease Treatment <span>→</span>
              </Link>

              <Link
                href="/laser-gum-treatment-hyderabad"
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4 font-semibold transition hover:bg-orange-50"
              >
                Laser Gum Treatment <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-slate-900">{clinicName}</p>
            <p className="mt-1 text-sm text-slate-500">
              Ameerpet · Yousufguda · Hyderabad
            </p>
          </div>

          <a
            href={`tel:${phone}`}
            className="font-bold text-orange-700 hover:text-orange-800"
          >
            Call {phoneDisplay}
          </a>
        </div>

        <div className="border-t border-slate-100 px-5 py-4 text-center text-xs leading-5 text-slate-500">
          Information on this page is for general educational purposes
          and does not replace an individual dental examination.
        </div>
      </footer>
    </main>
  );
}
