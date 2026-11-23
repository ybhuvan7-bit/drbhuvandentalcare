import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "./AppointmentForm";

export const metadata = {
  title: "Dental Clinic in Ameerpet, Hyderabad | Dr. Bhuvan's Dental",
  description:
    "Looking for a dentist in Ameerpet, Hyderabad? Visit Dr. Bhuvan's Dental Laser & Implant Centre for dental implants, gum care, laser dentistry, teeth cleaning and more. Call or request an appointment.",
  alternates: {
    canonical: "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet",
  },
  openGraph: {
    title: "Dental Clinic in Ameerpet, Hyderabad | Dr. Bhuvan's Dental",
    description:
      "Personalised dental care in Ameerpet, Hyderabad. Explore dental implants, gum treatment, laser dentistry and comprehensive dental care.",
    url: "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    type: "website",
    images: [{
      url: "https://www.drbhuvandentalcare.com/clinic/clinic3.webp",
      width: 1200,
      height: 900,
      alt: "Dr. Bhuvan's Dental Laser & Implant Centre in Ameerpet",
    }],
  },
};

const phone = "+918074528763";
const waLink = "https://wa.me/918074528763?text=" + encodeURIComponent(
  "Hello Dr. Bhuvan's Dental, I would like to request a dental appointment."
);

const services = [
  ["🦷", "Dental Implants", "Tooth-replacement options for suitable patients after clinical assessment.", "/dental-implants-ameerpet"],
  ["🌿", "Gum & Periodontal Care", "Assessment and care for bleeding gums, gum swelling and periodontal concerns.", "/gum-disease-treatment-ameerpet"],
  ["✨", "Teeth Cleaning", "Professional removal of plaque and calculus with personalised oral hygiene advice.", "/teeth-cleaning-ameerpet"],
  ["💎", "Laser Dentistry", "Laser-assisted procedures may be considered for selected gum and soft-tissue treatments.", "/laser-dentistry-yousufguda"],
  ["🩺", "Root Canal Treatment", "Care options for teeth affected by deep decay, infection or injury.", "/root-canal-treatment-ameerpet"],
  ["😊", "Smile & Cosmetic Care", "Discuss options to improve the appearance of your teeth and smile.", "/smile-makeover-ameerpet"],
];

const faqs = [
  ["Where is the clinic located?", "Dr. Bhuvan's Dental Laser & Implant Centre is at Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Hyderabad, Telangana 500073."],
  ["What dental treatments are available?", "Treatment options include dental implants, gum and periodontal care, teeth cleaning, root canal treatment, cosmetic dentistry and selected laser-assisted procedures. Suitability is decided after a clinical evaluation."],
  ["Do you provide dental implant treatment?", "Dental implant treatment is available for suitable patients. The dentist will assess oral health, bone support and individual treatment requirements before recommending a plan."],
  ["Can I visit for bleeding gums or bad breath?", "Yes. Bleeding gums, gum swelling, persistent bad breath and other periodontal concerns can be assessed during a dental consultation."],
  ["How do I request an appointment?", "Call 80745 28763 or use the appointment request form on this page. The clinic team will contact you to coordinate your visit."],
  ["What are the clinic timings?", "Monday to Saturday: 10 AM–2 PM and 4 PM–9 PM. Sunday: 10 AM–2 PM. Please call to confirm availability before visiting."],
];

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://www.drbhuvandentalcare.com/#dentist",
  name: "Dr. Bhuvan's Dental Laser & Implant Centre",
  url: "https://www.drbhuvandentalcare.com/",
  telephone: phone,
  image: "https://www.drbhuvandentalcare.com/clinic/clinic3.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ganapati Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500073",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.434462985123986,
    longitude: 78.433557202177,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "14:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "16:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.drbhuvandentalcare.com/" },
    { "@type": "ListItem", position: 2, name: "Dental Clinic in Ameerpet", item: "https://www.drbhuvandentalcare.com/dental-clinic-ameerpet" },
  ],
};

function Heading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#a85a2a]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-medium tracking-[-.025em] text-[#241d18] sm:text-[2.8rem]">{title}</h2>
      {text && <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-lg">{text}</p>}
    </div>
  );
}

export default function DentalClinicAmeerpetPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f3] text-[#27221e] selection:bg-orange-100 selection:text-orange-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_78%_18%,rgba(247,156,91,.23),transparent_34%),radial-gradient(ellipse_at_8%_88%,rgba(255,224,199,.45),transparent_32%),linear-gradient(135deg,#fffaf5_0%,#fff_52%,#fff3e9_100%)]">
        <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-7 sm:px-8 lg:pb-28 lg:pt-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-orange-700">Home</Link><span className="mx-2">/</span><span aria-current="page">Dental Clinic in Ameerpet</span>
          </nav>
          <div className="grid items-center gap-14 pt-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:pt-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/80 px-4 py-2.5 text-[11px] font-bold tracking-[.18em] text-orange-800 shadow-sm backdrop-blur">AMEERPET · YOUSUFGUDA · HYDERABAD</span>
              <h1 className="mt-7 max-w-2xl text-[2.65rem] font-serif font-medium leading-[1.02] tracking-[-.04em] text-[#211a16] sm:text-6xl lg:text-[4.45rem]">
                Thoughtful dental care.<span className="mt-2 block text-orange-700">Confident, healthy smiles.</span>
              </h1>
              <p className="mt-7 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-lg sm:leading-9">
                Looking for a dental clinic in Ameerpet, Hyderabad? At Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre, we take time to understand your concerns and discuss care options suited to your dental needs.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#appointment" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#e85b16] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(232,91,22,.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#cf4d10] hover:shadow-[0_16px_34px_rgba(232,91,22,.3)]">Request an Appointment →</a>
                <a href={`tel:${phone}`} className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#ded8d1] bg-white/80 px-8 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-orange-300 hover:bg-white hover:text-orange-700">Call 80745 28763</a>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                <span><b className="text-amber-500">★★★★★</b> <strong className="text-slate-900">4.9 Google rating</strong></span>
                <span><strong className="text-slate-900">139</strong> Google reviews</span>
                <span>BDS · MDS (Periodontics) · Implantology</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">Rating and review count should be kept in sync with the live Google Business Profile.</p>
            </div>
            <div className="relative mx-auto w-full max-w-[570px] lg:translate-y-2">
              <div className="absolute -inset-6 rounded-[3rem] bg-[linear-gradient(135deg,rgba(240,138,72,.30),rgba(255,226,205,.10))] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-[#eadfd2] bg-[#fffdf9] p-3 shadow-[0_34px_90px_rgba(69,47,29,.18)]">
                <div className="relative aspect-[4/4.35] overflow-hidden rounded-[1.7rem] bg-[#f4eadf]">
                  <Image src="/doctor.webp" alt="Dr. Bhuvanesh Yanamala, Periodontist and Implantologist in Ameerpet, Hyderabad" fill priority className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 48vw" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_12px_35px_rgba(31,24,18,.16)] backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Your dentist</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">Dr. Bhuvanesh Yanamala</p>
                  <p className="text-sm text-slate-600">Periodontist &amp; Implantologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#eee6dd] bg-white/90 shadow-[0_10px_35px_rgba(50,36,23,.035)]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-x-6 gap-y-5 px-5 py-7 sm:px-8 md:grid-cols-4 md:py-8">
          {["Personalised treatment discussions", "Comprehensive dental care", "Modern clinical technology", "Convenient Ameerpet location"].map((t, i) => (
            <div key={t} className="flex gap-3"><span className="text-xs font-bold text-orange-600">0{i + 1}</span><p className="text-sm font-semibold text-slate-800">{t}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-20 lg:py-28">
        <div className="relative overflow-hidden rounded-[2.15rem] border-[7px] border-[#fffdf9] bg-[#f4eadf] shadow-[0_28px_70px_rgba(55,39,25,.15)]"><div className="relative aspect-[5/4]"><Image src="/clinic/clinic1.webp" alt="Reception at Dr. Bhuvan's Dental Laser & Implant Centre" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-orange-700">A considered approach to dental care</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">Understand the problem. Explore the options. Plan your care.</h2>
          <p className="mt-6 leading-8 text-slate-600">Tooth pain, sensitivity, bleeding gums, missing teeth or changes in your smile can affect everyday comfort. A proper dental assessment helps identify what may be happening and which treatment options are appropriate.</p>
          <p className="mt-4 leading-8 text-slate-600">Our approach begins with listening to your concerns, examining your oral health and explaining the next steps in clear language. Recommended treatment depends on your clinical findings and individual needs.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex font-semibold text-orange-700">Ask our team a question →</a>
        </div>
      </section>

      <section className="bg-[#f3eee7] py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <Heading eyebrow="Dental services" title="Care options for different dental needs" text="Explore our treatment areas and learn what may be relevant to your dental concern. A consultation helps determine the right approach." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([icon, title, description, href], i) => (
              <Link href={href} key={title} className="group rounded-[1.65rem] border border-[#e8ddd0] bg-[#fffefa] p-7 shadow-[0_12px_32px_rgba(55,39,25,.055)] transition duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_22px_45px_rgba(56,38,23,.10)]">
                <div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">{icon}</span><span className="text-xs font-semibold tracking-widest text-slate-300">0{i + 1}</span></div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950 group-hover:text-orange-700">{title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{description}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-orange-700">Explore treatment →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-20 lg:py-28">
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2.15rem] border-[7px] border-[#fffdf9] bg-[#f4eadf] shadow-[0_30px_75px_rgba(55,39,25,.17)]"><div className="relative aspect-[4/4.5]"><Image src="/doctor.webp" alt="Dr. Bhuvanesh Yanamala" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 38vw" /></div></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-orange-700">Meet your dentist</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Dr. Bhuvanesh Yanamala</h2>
          <p className="mt-2 font-medium text-orange-700">BDS, MDS (Periodontics) · Periodontist &amp; Implantologist</p>
          <p className="mt-6 leading-8 text-slate-600">Dr. Bhuvanesh focuses on periodontal health, dental implants and comprehensive dental care. His clinical approach emphasises understanding the patient&apos;s concern, evaluating the condition and discussing suitable treatment options.</p>
          <p className="mt-4 leading-8 text-slate-600">A consultation is an opportunity to understand your condition, ask questions and make an informed decision about your dental care.</p>
          <div className="mt-7 flex flex-wrap gap-3">{["Periodontics", "Dental implants", "Laser dentistry"].map((x) => <span key={x} className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium">{x}</span>)}</div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#f8eee4,#fffaf5_52%,#f5e7d9)] py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <Heading eyebrow="Inside our clinic" title="A welcoming space for your dental visit" text="Take a look at the clinic environment and facilities at Dr. Bhuvan's Dental Laser & Implant Centre." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[["/clinic/clinic1.webp", "Clinic reception"], ["/clinic/clinic2.webp", "Dental treatment room"], ["/clinic/clinic4.webp", "Consultation space"], ["/clinic/clinic7.webp", "Sterilisation equipment"]].map(([src, alt]) => (
              <div key={src} className="overflow-hidden rounded-[1.55rem] border border-[#eadfd2] bg-[#fffdf9] p-2.5 shadow-[0_18px_42px_rgba(61,42,26,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(61,42,26,.14)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-orange-50"><Image src={src} alt={`${alt} at Dr. Bhuvan's Dental Laser & Implant Centre`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" /></div>
                <p className="px-2 py-3 text-sm font-medium text-slate-700">{alt}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-orange-100 bg-white/80 p-5 text-center"><p className="font-semibold text-slate-900">Clinical hygiene matters.</p><p className="mt-2 text-sm leading-7 text-slate-600">Sterilisation equipment and an organised clinical workflow form part of our approach to responsible dental care.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-28">
        <Heading eyebrow="Your visit" title="What to expect at your first consultation" text="We aim to make the process clear, with time to discuss your concerns and understand the available options." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[["01", "Tell us what concerns you", "Share your symptoms, dental history and what you would like help with."], ["02", "Clinical assessment", "Your teeth and gums are examined. Additional investigations may be advised when needed."], ["03", "Discuss your options", "We explain the findings and discuss suitable next steps, including benefits, limitations and costs where applicable."]].map(([n, title, body]) => (
            <div key={n} className="rounded-[1.5rem] border border-[#e9dfd4] bg-[#fffefa] p-7 shadow-[0_12px_30px_rgba(55,39,25,.045)]"><p className="text-sm font-bold tracking-widest text-orange-600">{n}</p><h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3eee7] py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-orange-700">Find our clinic</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Dental clinic in Ameerpet, Hyderabad</h2>
            <p className="mt-5 leading-8 text-slate-600">Conveniently located for patients from Ameerpet, Yousufguda, Navodaya Colony, Sri Krishna Nagar, Yellareddyguda and nearby Hyderabad neighbourhoods.</p>
            <div className="mt-7 rounded-[1.65rem] border border-[#e8ddd0] bg-[#fffefa] p-7 shadow-[0_18px_44px_rgba(50,36,23,.075)]">
              <p className="font-semibold text-slate-950">Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre</p>
              <address className="mt-3 not-italic text-sm leading-7 text-slate-600">Ganapati Complex, Navodaya Colony Road,<br />Sri Krishna Nagar, Ameerpet,<br />Hyderabad, Telangana 500073, India</address>
              <p className="mt-4 text-sm"><strong>Phone:</strong> <a className="text-orange-700" href={`tel:${phone}`}>80745 28763</a></p>
              <p className="mt-2 text-sm leading-6 text-slate-600"><strong>Hours:</strong> Mon–Sat, 10 AM–2 PM and 4 PM–9 PM; Sunday, 10 AM–2 PM.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvan%27s+Dental+Laser+%26+Implant+Centre+Ameerpet+Hyderabad" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700">Get directions</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border-[7px] border-[#fffdf9] bg-[#fffdf9] p-1.5 shadow-[0_30px_72px_rgba(50,36,23,.15)]">
            <iframe title="Map showing Dr. Bhuvan's Dental Laser & Implant Centre in Ameerpet, Hyderabad" src="https://www.google.com/maps?q=Dr%20Bhuvan%27s%20Dental%20Laser%20%26%20Implant%20Centre%2C%20Ameerpet%2C%20Hyderabad&output=embed" width="100%" height="430" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-28">
        <Heading eyebrow="Helpful information" title="Frequently asked questions" text="A few things patients commonly want to know before contacting the clinic." />
        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer]) => <details key={question} className="group rounded-[1.35rem] border border-[#e8ddd0] bg-[#fffefa] p-5 shadow-[0_8px_24px_rgba(50,36,23,.045)] transition hover:border-orange-200 open:border-orange-200 open:bg-orange-50/40"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">{question}<span className="text-xl font-normal text-orange-700 transition group-open:rotate-45">+</span></summary><p className="mt-4 pr-6 text-sm leading-7 text-slate-600">{answer}</p></details>)}
        </div>
      </section>

      <section id="appointment" className="scroll-mt-8 bg-[radial-gradient(ellipse_at_88%_0%,rgba(190,126,76,.20),transparent_36%),linear-gradient(135deg,#211a17,#100d0c_72%)] px-5 py-24 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e8bd91]">Take the next step</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Let&apos;s talk about your dental health.</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">Tell us how we can help. Send an appointment request and our clinic team will coordinate with you. Submitting this form is a request, not a confirmed appointment.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href={`tel:${phone}`} className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10">Call 80745 28763</a><a href={waLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700">WhatsApp the clinic</a></div>
          </div>
          <AppointmentForm />
        </div>
      </section>

      <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-2 sm:hidden">
        <a href={`tel:${phone}`} className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-900 shadow-lg">Call clinic</a>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center rounded-xl bg-green-600 px-3 py-3 text-sm font-semibold text-white shadow-lg">WhatsApp</a>
      </div>
    </main>
  );
}
