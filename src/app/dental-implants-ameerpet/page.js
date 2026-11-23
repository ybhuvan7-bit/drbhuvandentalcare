import Image from "next/image";
import Link from "next/link";

const phone = "+918074528763";
const message =
  "Hello Dr. Bhuvan's Dental, I would like to enquire about dental implant treatment. Please let me know how I can book a consultation.";
const whatsappLink = `https://wa.me/918074528763?text=${encodeURIComponent(message)}`;

export const metadata = {
  title: "Dental Implants in Ameerpet, Hyderabad | Dr. Bhuvan",
  description:
    "Explore dental implant treatment in Ameerpet, Hyderabad with Dr. Bhuvanesh, MDS Periodontics and Implantologist. Learn about implant assessment, bone grafting, sinus lift, guided implant surgery and implant aftercare.",
  alternates: {
    canonical: "https://www.drbhuvandentalcare.com/dental-implants-ameerpet",
  },
  openGraph: {
    title: "Dental Implants in Ameerpet, Hyderabad | Dr. Bhuvan",
    description:
      "Understand dental implant options, treatment planning, bone grafting, sinus lift and implant maintenance. Request a consultation at Dr. Bhuvan's Dental Laser & Implant Centre.",
    url: "https://www.drbhuvandentalcare.com/dental-implants-ameerpet",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
    images: [
      {
        url: "https://www.drbhuvandentalcare.com/doctor.webp",
        width: 1200,
        height: 1200,
        alt: "Dr. Bhuvanesh Yanamala, Implantologist in Ameerpet, Hyderabad",
      },
    ],
  },
};

const faqs = [
  {
    q: "What is a dental implant?",
    a: "A dental implant is a small fixture placed in the jawbone to support a replacement tooth. After healing and integration with the bone, it can support a crown, bridge or other planned restoration.",
  },
  {
    q: "Am I suitable for dental implant treatment?",
    a: "Suitability depends on your oral and general health, gum condition, available bone, bite and treatment goals. A clinical examination and appropriate imaging help your dentist assess the options.",
  },
  {
    q: "Is bone grafting always required for implants?",
    a: "No. Bone grafting is not required for every implant patient. It may be considered when the available bone volume or shape needs to be improved for the planned treatment.",
  },
  {
    q: "What is a sinus lift?",
    a: "A sinus lift is a procedure that may be considered in selected upper back jaw cases when additional bone height is needed for implant placement. Whether it is appropriate depends on clinical and radiographic assessment.",
  },
  {
    q: "Can an implant be placed immediately after tooth removal?",
    a: "Immediate implant placement may be possible in carefully selected cases. It depends on factors such as the condition of the extraction site, bone, soft tissues, infection status and ability to achieve primary stability.",
  },
  {
    q: "How long does dental implant treatment take?",
    a: "Treatment time varies according to the site, bone condition, need for additional procedures and healing response. Your dentist can explain an estimated timeline after assessment.",
  },
  {
    q: "How do I maintain my dental implants?",
    a: "Implants need daily cleaning and regular professional reviews. Your dental team can demonstrate suitable brushing and interdental cleaning methods and recommend a maintenance schedule.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.drbhuvandentalcare.com/" },
    { "@type": "ListItem", position: 2, name: "Dental Clinic in Ameerpet", item: "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet" },
    { "@type": "ListItem", position: 3, name: "Dental Implants in Ameerpet", item: "https://www.drbhuvandentalcare.com/dental-implants-ameerpet" },
  ],
};

function Heading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#a85a2a]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-medium tracking-[-.025em] text-[#241d18] sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-sm leading-8 text-[#746b63] sm:text-base">{description}</p> : null}
    </div>
  );
}

function WhatsAppButton({ children = "Request an implant consultation" }) {
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#b85d2b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(184,93,43,.2)] transition hover:-translate-y-0.5 hover:bg-[#98471f]">
      {children} <span aria-hidden="true" className="ml-2">↗</span>
    </a>
  );
}

export default function DentalImplantsAmeerpetPage() {
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
            <span aria-current="page">Dental Implants</span>
          </nav>
          <div className="grid items-center gap-12 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pt-16">
            <div>
              <span className="inline-flex rounded-full border border-[#e7d5c3] bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#92502e]">Dental implant care · Ameerpet · Hyderabad</span>
              <h1 className="mt-6 max-w-2xl font-serif text-[2.65rem] font-medium leading-[1.06] tracking-[-.04em] text-[#241d18] sm:text-6xl">
                Replace missing teeth with a plan designed around your smile.
                <span className="mt-2 block text-[#b85d2b]">Explore your dental implant options.</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-8 text-[#70675f] sm:text-base">
                Missing one tooth or several? Dental implants may be one option to restore function and appearance. At Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre in Ameerpet, we assess your gums, bone, bite and treatment goals before discussing a suitable plan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton />
                <a href={`tel:${phone}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#ded3c7] bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#382d25] transition hover:border-[#c98b63] hover:text-[#a85a2a]">Call 80745 28763</a>
              </div>
              <p className="mt-5 text-xs leading-6 text-[#897e74]">Implant suitability, treatment sequence and expected outcomes are individual and can only be assessed clinically.</p>
            </div>
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-5 rounded-[2.8rem] bg-[#d9a77f]/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-[#e7d9cb] bg-[#fffdf9] p-3 shadow-[0_28px_75px_rgba(65,44,27,.16)]">
                <div className="relative aspect-[4/4.35] overflow-hidden rounded-[1.5rem] bg-[#f1e7dc]">
                  <Image src="/doctor.webp" alt="Dr. Bhuvanesh Yanamala, MDS Periodontics and Implantologist in Ameerpet, Hyderabad" fill priority className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 42vw" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur">
                  <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#a85a2a]">Your implant consultation</p>
                  <p className="mt-1 font-semibold text-[#241d18]">Dr. Bhuvanesh Yanamala</p>
                  <p className="mt-1 text-xs text-[#776b61]">BDS, MDS (Periodontics) · Implantologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons / indications */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <Heading eyebrow="Understanding your options" title="When might dental implants be considered?" description="Dental implants may be considered for different patterns of tooth loss. An examination helps determine whether implants or another option is more appropriate." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["01", "A single missing tooth", "An implant-supported crown may be considered to replace an individual missing tooth, depending on the neighbouring teeth and available bone."],
            ["02", "Multiple missing teeth", "Depending on the number and position of missing teeth, implant-supported bridges may be among the options discussed."],
            ["03", "Complete tooth loss", "For selected patients with complete tooth loss, implant-supported full-arch solutions may be evaluated."],
            ["04", "Difficulty with removable dentures", "If a denture feels unstable or difficult to manage, an implant-retained option may be worth discussing."],
            ["05", "Tooth loss after damage or disease", "After the cause of tooth loss and oral health are assessed, replacement options can be planned."],
            ["06", "Long-term replacement planning", "Implant treatment requires planning for the final restoration, cleaning access, bite and ongoing maintenance."],
          ].map(([n, title, body]) => (
            <article key={n} className="rounded-[1.45rem] border border-[#e9ded2] bg-[#fffdf9] p-6 shadow-[0_12px_32px_rgba(58,40,25,.045)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(58,40,25,.09)]">
              <p className="text-xs font-semibold tracking-[.2em] text-[#b85d2b]">{n}</p>
              <h3 className="mt-4 text-lg font-semibold text-[#2a211b]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#756b62]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f1ebe3] py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-[1.8rem] border-[7px] border-[#fffdf9] shadow-[0_24px_60px_rgba(57,39,24,.13)]">
            <div className="relative aspect-[5/4]">
              <Image src="/clinic/clinic2.webp" alt="Clinical treatment room at Dr. Bhuvan's Dental Laser & Implant Centre, Ameerpet" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#a85a2a]">Plan before placement</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-[-.025em] text-[#241d18] sm:text-4xl">A dental implant is more than placing a fixture.</h2>
            <p className="mt-5 text-sm leading-8 text-[#70675f]">Successful implant treatment involves planning the final tooth as well as the implant position. Your gums, bone volume, bite, smile line, cleaning access and overall oral health all matter.</p>
            <p className="mt-4 text-sm leading-8 text-[#70675f]">Depending on your case, assessment may include clinical examination, photographs, dental imaging and digital planning. The treatment sequence is then discussed with you.</p>
            <div className="mt-7 rounded-2xl border border-[#e4d6c8] bg-[#fffaf4] p-5">
              <p className="font-semibold text-[#34281f]">Your treatment should be individualised</p>
              <p className="mt-2 text-sm leading-7 text-[#756b62]">There is no single implant plan that suits everyone. Ask your dentist about the benefits, limitations, alternatives, healing time and maintenance needs for your case.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced procedures */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <Heading eyebrow="Advanced implant planning" title="Additional procedures in selected cases" description="Some patients need preparatory procedures to improve the conditions for implant placement. These are recommended only when indicated by examination and imaging." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            ["01", "Bone grafting", "Bone grafting may be considered when the width or height of the jawbone is insufficient for the planned implant position. The technique and healing period depend on the defect and treatment plan."],
            ["02", "Sinus lift", "In selected upper back jaw cases, a sinus lift may be planned when additional bone height is needed. The decision is based on clinical and radiographic assessment."],
            ["03", "Guided implant surgery", "Digital planning and surgical guides may be used in suitable cases to help transfer the planned implant position to surgery. The need for guidance depends on case complexity."],
            ["04", "Immediate implant placement", "Placing an implant at the time of tooth removal may be possible in carefully selected cases. It is not suitable for every extraction site."],
          ].map(([n, title, body]) => (
            <article key={n} className="flex gap-5 rounded-[1.5rem] border border-[#e9ded2] bg-[#fffdf9] p-6 shadow-[0_12px_32px_rgba(58,40,25,.045)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5e8dc] text-xs font-semibold text-[#a85a2a]">{n}</span>
              <div><h3 className="text-lg font-semibold text-[#2a211b]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#756b62]">{body}</p></div>
            </article>
          ))}
        </div>
      </section>

      {/* Treatment journey */}
      <section className="bg-[linear-gradient(135deg,#f8eee4,#fffaf5_55%,#f3e6d9)] py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Heading eyebrow="Your implant journey" title="From consultation to your new tooth" description="The exact sequence and timing vary. Your dentist will explain the stages that apply to your treatment." />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Consultation", "Discuss your concerns, medical and dental history, expectations and replacement options."],
              ["02", "Assessment & planning", "Evaluate gum health, bone, bite and imaging to plan the implant and final restoration."],
              ["03", "Implant procedure & healing", "If suitable, the implant is placed and allowed to heal according to the planned protocol."],
              ["04", "Final restoration & maintenance", "The planned crown or prosthesis is fitted, followed by regular reviews and home-care guidance."],
            ].map(([n, title, body]) => (
              <article key={n} className="rounded-[1.5rem] border border-[#eadbcb] bg-white/85 p-6 shadow-[0_12px_30px_rgba(58,40,25,.05)]">
                <p className="text-xs font-semibold tracking-[.2em] text-[#b85d2b]">{n}</p>
                <h3 className="mt-5 text-lg font-semibold text-[#2a211b]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#756b62]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Implant maintenance */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
        <Heading eyebrow="Protect your investment" title="Implant care continues after treatment" description="Daily cleaning and regular professional maintenance are important for the long-term health of the tissues around dental implants." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Daily cleaning", "Brush carefully twice daily and clean around the implant restoration using the tools recommended by your dental team."],
            ["Regular reviews", "Attend recommended maintenance visits so the implant, restoration, gums and bite can be monitored."],
            ["Healthy gum support", "Control plaque and address gum inflammation. A history of periodontal disease makes ongoing maintenance especially important."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[1.4rem] border border-[#e9ded2] bg-[#fffdf9] p-6">
              <h3 className="text-lg font-semibold text-[#2a211b]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#756b62]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Doctor */}
      <section className="bg-[#f1ebe3] py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.8rem] border-[7px] border-[#fffdf9] shadow-[0_24px_60px_rgba(57,39,24,.14)]">
            <div className="relative aspect-[4/4.4]"><Image src="/doctor.webp" alt="Dr. Bhuvanesh Yanamala, BDS, MDS Periodontics and Implantologist" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 32vw" /></div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#a85a2a]">Meet your implantologist</p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[#241d18] sm:text-4xl">Dr. Bhuvanesh Yanamala</h2>
            <p className="mt-3 text-sm font-semibold text-[#a85a2a]">BDS, MDS (Periodontics) · Implantologist</p>
            <p className="mt-5 text-sm leading-8 text-[#70675f]">Dr. Bhuvanesh focuses on periodontal care and dental implant treatment. A consultation provides an opportunity to assess your oral health, discuss your treatment goals and understand the options that may be suitable for your case.</p>
            <p className="mt-4 text-sm leading-8 text-[#70675f]">The aim is to explain the findings clearly, plan treatment around your needs and help you make an informed decision.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#e5d5c5] bg-white px-4 py-2 text-xs font-medium text-[#6e5b4c]">Periodontics</span>
              <span className="rounded-full border border-[#e5d5c5] bg-white px-4 py-2 text-xs font-medium text-[#6e5b4c]">Dental implants</span>
              <span className="rounded-full border border-[#e5d5c5] bg-white px-4 py-2 text-xs font-medium text-[#6e5b4c]">Guided surgery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-24">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#a85a2a]">Visit our clinic</p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-[#241d18] sm:text-4xl">Dental implant consultation in Ameerpet, Hyderabad</h2>
          <p className="mt-5 text-sm leading-8 text-[#70675f]">Visit Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre for an implant consultation and individual treatment assessment.</p>
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
      </section>

      {/* FAQs */}
      <section className="bg-[#f7f1e9] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <Heading eyebrow="Patient questions" title="Frequently asked questions about dental implants" description="General information to help you prepare for an implant consultation." />
          <div className="mt-10 space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border border-[#e8ddd0] bg-[#fffdf9] p-5 shadow-[0_8px_22px_rgba(50,36,23,.04)] open:border-[#d9b99d] open:bg-[#fffaf4]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#30261f]">{q}<span className="text-xl font-normal text-[#b85d2b] transition group-open:rotate-45">+</span></summary>
                <p className="mt-4 pr-5 text-sm leading-7 text-[#756b62]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[radial-gradient(ellipse_at_88%_0%,rgba(190,126,76,.18),transparent_36%),linear-gradient(135deg,#211a17,#100d0c_72%)] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#e8bd91]">Take the next step</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl">Thinking about replacing a missing tooth?</h2>
            <p className="mt-4 text-sm leading-8 text-[#d2c7bd]">Request a dental implant consultation at Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre, Ameerpet. We can help coordinate a suitable visit.</p>
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
