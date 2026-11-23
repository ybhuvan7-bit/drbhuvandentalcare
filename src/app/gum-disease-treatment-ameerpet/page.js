import Image from "next/image";
import Link from "next/link";

const phone = "+918074528763";
const whatsappMessage =
  "Hello Dr. Bhuvan's Dental, I would like to request a consultation for gum problems. Please let me know the available appointment timings.";
const whatsappLink = `https://wa.me/918074528763?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata = {
  title: "Gum Disease Treatment in Ameerpet, Hyderabad | Dr. Bhuvan",
  description:
    "Looking for gum disease treatment in Ameerpet, Hyderabad? Consult Dr. Bhuvanesh, MDS Periodontics, for assessment of bleeding gums, swelling, bad breath and periodontal concerns.",
  alternates: {
    canonical: "https://www.drbhuvandentalcare.com/gum-disease-treatment-ameerpet",
  },
  openGraph: {
    title: "Gum Disease Treatment in Ameerpet, Hyderabad | Dr. Bhuvan",
    description:
      "Understand bleeding gums, gum swelling and periodontal disease. Request a gum health consultation at Dr. Bhuvan's Dental Laser & Implant Centre.",
    url: "https://www.drbhuvandentalcare.com/gum-disease-treatment-ameerpet",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
    images: [
      {
        url: "https://www.drbhuvandentalcare.com/doctor.webp",
        width: 1200,
        height: 1200,
        alt: "Dr. Bhuvanesh Yanamala, Periodontist in Ameerpet, Hyderabad",
      },
    ],
  },
};

const faqs = [
  {
    q: "Why do my gums bleed while brushing?",
    a: "Bleeding during brushing can be a sign of gum inflammation, often associated with plaque accumulation. It should not be ignored. A dental examination can help identify the cause and the care you may need.",
  },
  {
    q: "Can gum disease be treated?",
    a: "Gum disease can often be managed with professional periodontal care and consistent home oral hygiene. The appropriate approach depends on the type and severity of the condition.",
  },
  {
    q: "Is professional cleaning enough to treat gum disease?",
    a: "A professional cleaning may be sufficient for some cases of gum inflammation. If periodontal pockets or deeper deposits are present, further non-surgical or other periodontal treatment may be recommended after assessment.",
  },
  {
    q: "Does gum disease cause bad breath?",
    a: "Persistent bad breath can have several causes, including gum disease. A clinical examination can help determine whether the gums are contributing to the problem.",
  },
  {
    q: "Is laser treatment used for gum problems?",
    a: "Laser-assisted procedures may be considered in selected cases as part of periodontal or soft-tissue care. A laser is not suitable or necessary for every gum condition; treatment is planned according to clinical findings.",
  },
  {
    q: "When should I see a periodontist?",
    a: "Consider a periodontal consultation if you have recurring gum bleeding, swelling, tenderness, gum recession, persistent bad breath, loose teeth or a history of gum disease.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.drbhuvandentalcare.com/" },
    { "@type": "ListItem", position: 2, name: "Dental Clinic in Ameerpet", item: "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet" },
    { "@type": "ListItem", position: 3, name: "Gum Disease Treatment in Ameerpet", item: "https://www.drbhuvandentalcare.com/gum-disease-treatment-ameerpet" },
  ],
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#a85a2a]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-medium tracking-[-.025em] text-[#241d18] sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-sm leading-8 text-[#746b63] sm:text-base">{description}</p> : null}
    </div>
  );
}

function WhatsAppButton({ children = "Request a gum health consultation" }) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#b85d2b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(184,93,43,.2)] transition hover:-translate-y-0.5 hover:bg-[#98471f]"
    >
      {children} <span aria-hidden="true" className="ml-2">↗</span>
    </a>
  );
}

export default function GumDiseaseTreatmentAmeerpetPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f3] text-[#27221e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative isolate bg-[radial-gradient(ellipse_at_80%_12%,rgba(220,165,119,.22),transparent_36%),linear-gradient(135deg,#fffaf5,#fbf8f3_58%,#f5e9dc)]">
        <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-7 sm:px-8 lg:pb-24">
          <nav aria-label="Breadcrumb" className="text-xs text-[#81766d]">
            <Link href="/" className="hover:text-[#a85a2a]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/dental-clinic-ameerpet" className="hover:text-[#a85a2a]">Dental Clinic in Ameerpet</Link>
            <span className="mx-2">/</span>
            <span aria-current="page">Gum Disease Treatment</span>
          </nav>

          <div className="grid items-center gap-12 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pt-16">
            <div>
              <span className="inline-flex rounded-full border border-[#e7d5c3] bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#92502e]">
                Periodontal care · Ameerpet · Hyderabad
              </span>
              <h1 className="mt-6 max-w-2xl font-serif text-[2.65rem] font-medium leading-[1.06] tracking-[-.04em] text-[#241d18] sm:text-6xl">
                Healthy gums are the foundation of a healthy smile.
                <span className="mt-2 block text-[#b85d2b]">Give your gums the care they need.</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-8 text-[#70675f] sm:text-base">
                Bleeding gums, swelling, persistent bad breath or gum recession can be signs that your gums need attention. At Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre, Ameerpet, we assess your gum health and explain suitable periodontal care options.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton />
                <a href={`tel:${phone}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#ded3c7] bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#382d25] transition hover:border-[#c98b63] hover:text-[#a85a2a]">
                  Call 80745 28763
                </a>
              </div>
              <p className="mt-5 text-xs leading-6 text-[#897e74]">Consultation and treatment recommendations are based on individual clinical findings.</p>
            </div>

            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-5 rounded-[2.8rem] bg-[#d9a77f]/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-[#e7d9cb] bg-[#fffdf9] p-3 shadow-[0_28px_75px_rgba(65,44,27,.16)]">
                <div className="relative aspect-[4/4.35] overflow-hidden rounded-[1.5rem] bg-[#f1e7dc]">
                  <Image src="/doctor.webp" alt="Dr. Bhuvanesh Yanamala, MDS Periodontics, at his dental clinic in Ameerpet, Hyderabad" fill priority className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 42vw" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur">
                  <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#a85a2a]">Your gum care consultation</p>
                  <p className="mt-1 font-semibold text-[#241d18]">Dr. Bhuvanesh Yanamala</p>
                  <p className="mt-1 text-xs text-[#776b61]">BDS, MDS (Periodontics) · Periodontist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Know the signs"
          title="Are your gums trying to tell you something?"
          description="Gum problems may begin quietly. Paying attention to early changes can help you seek an assessment before the condition progresses."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["01", "Bleeding while brushing", "Gums that bleed during brushing or flossing may be inflamed and need evaluation."],
            ["02", "Redness or swelling", "Tender, puffy or reddish gums can be associated with gum inflammation."],
            ["03", "Persistent bad breath", "Ongoing bad breath may be related to plaque, gum problems or other oral health causes."],
            ["04", "Gum recession", "If teeth appear longer or roots become exposed, gum recession may be present."],
            ["05", "Sensitivity near the gumline", "Exposed root surfaces or other dental conditions can contribute to sensitivity."],
            ["06", "Loose or shifting teeth", "Tooth mobility can have different causes and needs prompt dental assessment."],
          ].map(([n, title, body]) => (
            <article key={n} className="rounded-[1.45rem] border border-[#e9ded2] bg-[#fffdf9] p-6 shadow-[0_12px_32px_rgba(58,40,25,.045)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(58,40,25,.09)]">
              <p className="text-xs font-semibold tracking-[.2em] text-[#b85d2b]">{n}</p>
              <h3 className="mt-4 text-lg font-semibold text-[#2a211b]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#756b62]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Explanation */}
      <section className="bg-[#f1ebe3] py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-[1.8rem] border-[7px] border-[#fffdf9] shadow-[0_24px_60px_rgba(57,39,24,.13)]">
            <div className="relative aspect-[5/4]">
              <Image src="/clinic/clinic2.webp" alt="Dental treatment room at Dr. Bhuvan's Dental Laser & Implant Centre, Ameerpet" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#a85a2a]">Understanding gum disease</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-[-.025em] text-[#241d18] sm:text-4xl">What is the difference between gingivitis and periodontitis?</h2>
            <p className="mt-5 text-sm leading-8 text-[#70675f]">
              Gingivitis is inflammation of the gums. It can cause redness, swelling and bleeding. When gum disease advances and affects the supporting tissues around the teeth, it is called periodontitis.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#70675f]">
              The right care depends on the findings during your examination, including gum condition, periodontal pocket measurements, deposits and other relevant factors. Not every patient needs the same treatment.
            </p>
            <div className="mt-7 rounded-2xl border border-[#e4d6c8] bg-[#fffaf4] p-5">
              <p className="font-semibold text-[#34281f]">A useful reminder</p>
              <p className="mt-2 text-sm leading-7 text-[#756b62]">Gum bleeding is common, but it is not something to simply accept as normal. Arrange an assessment if it keeps happening.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment options */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Personalised periodontal care"
          title="Gum treatment depends on what your gums need"
          description="After examining your gums, your dentist can explain which of the following approaches may be appropriate for your condition."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            ["01", "Professional scaling", "Removal of plaque and calculus from tooth surfaces as part of professional cleaning and gum care."],
            ["02", "Deep cleaning / root surface debridement", "For selected patients with periodontal pockets, deeper cleaning may be recommended to remove deposits from below the gumline."],
            ["03", "Periodontal maintenance", "Ongoing review and professional maintenance may help patients manage a history of gum disease and monitor gum health."],
            ["04", "Further periodontal procedures", "If deeper or more advanced problems are identified, additional non-surgical or surgical options may be discussed based on the clinical findings."],
            ["05", "Laser-assisted gum procedures", "Laser may be considered as an adjunct or for selected soft-tissue procedures. It is not required for every gum condition."],
            ["06", "Home-care guidance", "Personalised brushing, interdental cleaning and maintenance advice are important parts of long-term gum care."],
          ].map(([n, title, body]) => (
            <article key={n} className="flex gap-5 rounded-[1.5rem] border border-[#e9ded2] bg-[#fffdf9] p-6 shadow-[0_12px_32px_rgba(58,40,25,.045)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5e8dc] text-xs font-semibold text-[#a85a2a]">{n}</span>
              <div>
                <h3 className="text-lg font-semibold text-[#2a211b]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#756b62]">{body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-[#8a7e73]">Treatment choice, expected outcomes and maintenance intervals vary by patient. Your dentist will discuss the benefits, limitations and alternatives relevant to your case.</p>
      </section>

      {/* Process */}
      <section className="bg-[linear-gradient(135deg,#f8eee4,#fffaf5_55%,#f3e6d9)] py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <SectionHeading eyebrow="Your consultation" title="A clear, step-by-step approach to gum health" description="We begin by understanding your concern, examining your gums and discussing the findings with you." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Listen and understand", "We discuss your symptoms, oral hygiene routine, medical and dental history, and any previous gum treatment."],
              ["02", "Examine your gum health", "Your gums and supporting tissues are assessed. Periodontal measurements or further investigations may be advised when appropriate."],
              ["03", "Discuss a care plan", "We explain the findings and suitable options, including home care, professional treatment and follow-up."],
            ].map(([n, title, body]) => (
              <article key={n} className="rounded-[1.5rem] border border-[#eadbcb] bg-white/85 p-7 shadow-[0_12px_30px_rgba(58,40,25,.05)]">
                <p className="text-xs font-semibold tracking-[.2em] text-[#b85d2b]">{n}</p>
                <h3 className="mt-5 text-xl font-semibold text-[#2a211b]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#756b62]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:py-24">
        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.8rem] border-[7px] border-[#fffdf9] shadow-[0_24px_60px_rgba(57,39,24,.14)]">
          <div className="relative aspect-[4/4.4]">
            <Image src="/doctor.webp" alt="Dr. Bhuvanesh Yanamala, BDS, MDS Periodontics" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 32vw" />
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#a85a2a]">Meet your periodontist</p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-[#241d18] sm:text-4xl">Dr. Bhuvanesh Yanamala</h2>
          <p className="mt-3 text-sm font-semibold text-[#a85a2a]">BDS, MDS (Periodontics) · Periodontist &amp; Implantologist</p>
          <p className="mt-5 text-sm leading-8 text-[#70675f]">
            Dr. Bhuvanesh focuses on gum health, periodontal care and dental implant treatment. A periodontal consultation helps identify the condition of your gums and understand the treatment and maintenance options that may be suitable for you.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#70675f]">
            The aim is to explain the findings clearly, answer your questions and help you make an informed decision about your oral health.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#e5d5c5] bg-white px-4 py-2 text-xs font-medium text-[#6e5b4c]">Periodontal care</span>
            <span className="rounded-full border border-[#e5d5c5] bg-white px-4 py-2 text-xs font-medium text-[#6e5b4c]">Implant dentistry</span>
            <span className="rounded-full border border-[#e5d5c5] bg-white px-4 py-2 text-xs font-medium text-[#6e5b4c]">Laser dentistry</span>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#f1ebe3] py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#a85a2a]">Visit our clinic</p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[#241d18] sm:text-4xl">Gum care consultation in Ameerpet, Hyderabad</h2>
            <p className="mt-5 text-sm leading-8 text-[#70675f]">Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre is located at Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Hyderabad.</p>
            <div className="mt-6 rounded-[1.5rem] border border-[#e5d8ca] bg-[#fffdf9] p-6 shadow-sm">
              <p className="font-semibold text-[#2a211b]">Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre</p>
              <address className="mt-3 not-italic text-sm leading-7 text-[#756b62]">Ganapati Complex, Navodaya Colony Road,<br />Sri Krishna Nagar, Ameerpet,<br />Hyderabad, Telangana 500073, India</address>
              <p className="mt-3 text-sm text-[#756b62]"><strong>Phone:</strong> <a className="text-[#a85a2a]" href={`tel:${phone}`}>80745 28763</a></p>
              <p className="mt-2 text-sm leading-6 text-[#756b62]"><strong>Hours:</strong> Mon–Sat, 10 AM–2 PM and 4 PM–9 PM; Sunday, 10 AM–2 PM.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvan%27s+Dental+Laser+%26+Implant+Centre+Ameerpet+Hyderabad" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-[#b85d2b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#98471f]">Get directions ↗</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.8rem] border-[7px] border-[#fffdf9] bg-white p-1 shadow-[0_24px_60px_rgba(57,39,24,.13)]">
            <iframe title="Map to Dr. Bhuvan's Dental Laser & Implant Centre in Ameerpet, Hyderabad" src="https://www.google.com/maps?q=Dr%20Bhuvan%27s%20Dental%20Laser%20%26%20Implant%20Centre%2C%20Ameerpet%2C%20Hyderabad&output=embed" width="100%" height="390" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading eyebrow="Patient questions" title="Frequently asked questions about gum disease" description="Helpful information to prepare for your periodontal consultation." />
        <div className="mt-10 space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl border border-[#e8ddd0] bg-[#fffdf9] p-5 shadow-[0_8px_22px_rgba(50,36,23,.04)] open:border-[#d9b99d] open:bg-[#fffaf4]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#30261f]">{q}<span className="text-xl font-normal text-[#b85d2b] transition group-open:rotate-45">+</span></summary>
              <p className="mt-4 pr-5 text-sm leading-7 text-[#756b62]">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[radial-gradient(ellipse_at_88%_0%,rgba(190,126,76,.18),transparent_36%),linear-gradient(135deg,#211a17,#100d0c_72%)] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#e8bd91]">Take the next step</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl">Don&apos;t ignore bleeding gums.</h2>
            <p className="mt-4 text-sm leading-8 text-[#d2c7bd]">Request a gum health consultation at Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre, Ameerpet. Our team can help coordinate a suitable visit.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton>WhatsApp for an appointment</WhatsAppButton>
            <a href={`tel:${phone}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Call the clinic</a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-2 sm:hidden">
        <a href={`tel:${phone}`} className="flex flex-1 items-center justify-center rounded-xl border border-[#e5d8ca] bg-white px-3 py-3 text-sm font-semibold text-[#30261f] shadow-lg">Call clinic</a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center rounded-xl bg-[#b85d2b] px-3 py-3 text-sm font-semibold text-white shadow-lg">WhatsApp</a>
      </div>
    </main>
  );
}
