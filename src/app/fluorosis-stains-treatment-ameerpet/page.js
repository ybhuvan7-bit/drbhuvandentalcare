
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://www.drbhuvandentalcare.com";
const PAGE_URL = `${SITE_URL}/fluorosis-stains-treatment-ameerpet`;
const PHONE = "+918074528763";
const WHATSAPP =
  "https://wa.me/918074528763?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20for%20fluorosis%20stains%20treatment.";

export const metadata = {
  title:
    "Fluorosis Stains Treatment in Ameerpet, Hyderabad | Dr. Bhuvan",
  description:
    "Learn about white patches, brown fluorosis stains and cosmetic treatment options in Ameerpet, Srinagar Colony, Yousufguda and Banjara Hills, Hyderabad.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Fluorosis Stains Treatment in Hyderabad",
    description:
      "Understand dental fluorosis, treatment options and cosmetic dental care at Dr. Bhuvan’s Dental Laser & Implant Centre, Ameerpet, Hyderabad.",
    url: PAGE_URL,
    type: "website",
  },
};

const treatments = [
  {
    number: "01",
    title: "Professional Teeth Whitening",
    suitable:
      "Selected cases where overall tooth shade is a concern",
    description:
      "Professional whitening uses dental bleaching agents to lighten natural tooth colour. It may improve the overall shade in selected patients, but it does not remove the underlying enamel changes caused by fluorosis.",
    note:
      "White patches can remain visible or become more noticeable after whitening. A dentist should assess your teeth before recommending it.",
  },
  {
    number: "02",
    title: "Enamel Microabrasion",
    suitable: "Selected superficial enamel discoloration",
    description:
      "Microabrasion removes a very thin superficial layer of enamel using a controlled technique. It may improve certain superficial white or brown marks when the enamel condition is suitable.",
    note:
      "It is not appropriate for every stain, and unnecessary removal of enamel should be avoided.",
  },
  {
    number: "03",
    title: "Resin Infiltration",
    suitable: "Selected white enamel opacity lesions",
    description:
      "A specialised low-viscosity resin penetrates selected porous enamel lesions and can reduce the visual contrast between a white spot and the surrounding enamel.",
    note:
      "The result depends on lesion depth, appearance and case selection. It does not guarantee complete disappearance of every fluorosis mark.",
  },
  {
    number: "04",
    title: "Composite Bonding",
    suitable: "Selected visible defects requiring masking",
    description:
      "Tooth-coloured composite material can cover or mask certain discoloured areas. It may be useful when a more targeted cosmetic correction is needed.",
    note:
      "Composite can stain, wear or chip over time and may need polishing, repair or replacement.",
  },
  {
    number: "05",
    title: "Dental Veneers",
    suitable: "Selected moderate or severe cosmetic concerns",
    description:
      "Veneers are thin restorations bonded to the front surface of teeth. They may help improve colour, shape and appearance when more conservative treatments are unlikely to meet the patient's goals.",
    note:
      "Some tooth preparation may be necessary. Veneers require careful planning and long-term maintenance.",
  },
  {
    number: "06",
    title: "Treatment Combinations",
    suitable: "Cases requiring an individualised approach",
    description:
      "In selected cases, the dentist may consider a combination of conservative and restorative techniques to improve the appearance of fluorosis-affected teeth.",
    note:
      "The sequence and choice of treatment depend on the clinical findings, enamel condition and patient's expectations.",
  },
];

const comparison = [
  {
    treatment: "Whitening",
    goal: "Lighten overall natural tooth shade",
    consideration: "White patches may remain more visible",
  },
  {
    treatment: "Microabrasion",
    goal: "Improve selected superficial enamel marks",
    consideration: "Removes a small amount of surface enamel",
  },
  {
    treatment: "Resin infiltration",
    goal: "Reduce contrast in selected white spots",
    consideration: "Not suitable for every lesion or stain",
  },
  {
    treatment: "Composite bonding",
    goal: "Mask selected discoloured areas",
    consideration: "May need maintenance or repair",
  },
  {
    treatment: "Veneers",
    goal: "Improve colour and appearance of selected teeth",
    consideration: "More involved and potentially irreversible",
  },
];

const faqs = [
  {
    question: "What is dental fluorosis?",
    answer:
      "Dental fluorosis is a change in enamel development caused by excessive fluoride exposure while teeth are forming. Depending on severity, it may appear as faint white lines, cloudy patches, mottled enamel, brown discoloration or surface pitting.",
  },
  {
    question: "What causes fluorosis stains on teeth?",
    answer:
      "Fluorosis develops when too much fluoride is ingested during tooth development. The relevant exposure period is when the affected teeth are forming, rather than ordinary fluoride toothpaste use after the teeth have developed.",
  },
  {
    question: "Can fluorosis stains be removed completely?",
    answer:
      "Some cases can be improved significantly, but complete removal cannot be guaranteed. The result depends on the depth and severity of the enamel changes and the treatment selected.",
  },
  {
    question: "Can teeth whitening cure dental fluorosis?",
    answer:
      "No. Whitening changes the shade of natural teeth but does not reverse fluorosis-related enamel changes. In some cases, white patches can become more noticeable after whitening.",
  },
  {
    question: "What is the best treatment for white fluorosis spots?",
    answer:
      "There is no single best option for everyone. Resin infiltration, microabrasion, whitening or selected restorative treatments may be considered depending on the appearance, depth and diagnosis of the lesions.",
  },
  {
    question: "Are brown fluorosis stains treatable?",
    answer:
      "Brown discoloration may be improved with selected cosmetic procedures, depending on its depth and cause. A dentist should first distinguish fluorosis from other causes of staining or enamel defects.",
  },
  {
    question: "Is fluorosis treatment painful?",
    answer:
      "Many conservative cosmetic procedures involve little discomfort, although temporary sensitivity can occur. The experience depends on the procedure, enamel condition and individual sensitivity.",
  },
  {
    question: "How many appointments are required?",
    answer:
      "The number of appointments depends on the diagnosis and selected treatment. Some procedures may be completed in one visit, while other treatments require planning, multiple visits or follow-up appointments.",
  },
  {
    question: "How much does fluorosis stains treatment cost?",
    answer:
      "The cost depends on the number of affected teeth, severity, procedure selected and clinical requirements. A consultation is needed before an appropriate treatment plan and estimate can be provided.",
  },
  {
    question: "Can fluorosis stains return after treatment?",
    answer:
      "The original developmental enamel changes do not simply recur in already formed teeth. However, new surface stains can develop, and cosmetic restorations may need maintenance or replacement over time.",
  },
  {
    question: "Is fluorosis the same as tooth decay?",
    answer:
      "No. Fluorosis is a developmental change in enamel. Tooth decay is caused by acids produced by bacteria acting on the teeth. However, other enamel defects and early decay can resemble white spots, so correct diagnosis matters.",
  },
  {
    question: "Do you accept patients from Srinagar Colony, Yousufguda and Banjara Hills?",
    answer:
      "Dr. Bhuvan’s Dental Laser & Implant Centre is located in the Ameerpet area of Hyderabad. Patients from nearby areas, including Srinagar Colony, Yousufguda and Banjara Hills, can contact the clinic to enquire about appointments.",
  },
];

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

function BookingButtons() {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-4 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700"
      >
        Book on WhatsApp
      </a>
      <a
        href={`tel:${PHONE}`}
        className="inline-flex items-center justify-center rounded-xl border border-orange-200 bg-white px-6 py-4 font-bold text-orange-700 transition hover:bg-orange-50"
      >
        Call the Clinic
      </a>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="font-bold uppercase tracking-widest text-orange-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}

export default function FluorosisStainsTreatmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-orange-700">
              Cosmetic Dentistry · Hyderabad
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Fluorosis Stains Treatment in Ameerpet, Hyderabad
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              White patches, yellowish areas or brown marks on your
              teeth can affect the way you feel about your smile.
              Understanding the cause is the first step towards choosing
              a suitable cosmetic treatment.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              At Dr. Bhuvan’s Dental Laser & Implant Centre, you can
              enquire about dental fluorosis assessment and available
              cosmetic treatment options in Ameerpet, Hyderabad.
            </p>

            <BookingButtons />

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Conveniently located for patients enquiring from
              Ameerpet, Srinagar Colony, Yousufguda and Banjara Hills.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-xl shadow-orange-100/60 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
              ✨
            </div>
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              What would you like to improve?
            </h2>
            <div className="mt-6 space-y-4">
              {[
                "White patches or chalky marks",
                "Yellow or brown enamel discoloration",
                "Uneven or mottled tooth appearance",
                "Smile appearance and colour",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 font-bold text-orange-600">✓</span>
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-2xl bg-orange-50 p-5">
              <p className="font-semibold text-slate-900">
                Every smile is different.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A dental examination helps identify the cause of the
                marks and determine which treatments are appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* QUICK NAVIGATION */}
      <nav
        aria-label="On this page"
        className="border-y border-slate-100 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-5 py-5 text-sm font-semibold sm:px-8">
          {[
            ["Understanding fluorosis", "#understanding"],
            ["Symptoms", "#symptoms"],
            ["Treatment options", "#treatments"],
            ["Treatment comparison", "#comparison"],
            ["Aftercare", "#aftercare"],
            ["FAQs", "#faqs"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-slate-600 transition hover:text-orange-700"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* INTRODUCTION */}
      <section
        id="understanding"
        className="scroll-mt-6 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <SectionHeading
          eyebrow="Understand the condition"
          title="What Is Dental Fluorosis?"
          description="Dental fluorosis is a change in the appearance of enamel that occurs when excessive fluoride exposure affects teeth while they are developing. Its appearance varies from subtle white lines to more pronounced discoloration and, in severe cases, surface pitting."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              Enamel is the hard outer layer that protects a tooth.
              During tooth development, excess fluoride can affect how
              this enamel forms. The resulting changes may become
              visible when the teeth erupt.
            </p>
            <p>
              Some people have faint marks that are visible only in
              certain lighting. Others may have more noticeable white
              patches or brown discoloration. The extent of the changes
              differs from person to person.
            </p>
            <p>
              Dental fluorosis is a developmental condition. It is not
              the same as ordinary staining from tea, coffee or tobacco,
              and it is not the same as tooth decay.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-7 sm:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              Why correct diagnosis matters
            </h3>
            <p className="mt-4 leading-7 text-slate-700">
              White or brown areas can also occur because of other enamel
              conditions, early tooth decay, trauma or external staining.
              Similar-looking marks may need very different treatments.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Your dentist will assess the tooth surface, distribution
              of the marks, dental history and other clinical findings
              before recommending a cosmetic procedure.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section id="symptoms" className="scroll-mt-6 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Signs to look for"
            title="What Do Fluorosis Stains Look Like?"
            description="Dental fluorosis can affect the appearance of teeth in different ways. The colour, extent and surface characteristics help the dentist assess the condition."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "White lines and patches",
                text: "Faint white lines, cloudy areas or chalky spots may appear on the enamel. Some are subtle, while others stand out against the surrounding tooth.",
              },
              {
                title: "Yellow or brown discoloration",
                text: "More noticeable cases can include yellowish or brown areas. Their depth and cause need to be assessed before selecting a treatment.",
              },
              {
                title: "Mottled or pitted enamel",
                text: "Severe fluorosis may involve irregular enamel or small pits. These cases may need more detailed restorative treatment planning.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-4 h-1.5 w-14 rounded-full bg-orange-500" />
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-bold text-slate-900">
              Are all white spots caused by fluorosis?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              No. White spots can have several causes. A professional
              assessment is important, especially if a spot is new,
              changing, rough, sensitive or located near the gumline.
              Do not begin aggressive whitening or abrasive home
              treatments without identifying the cause.
            </p>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Causes and prevention"
          title="Why Does Dental Fluorosis Develop?"
          description="Fluorosis develops during the period when the affected teeth are forming. Understanding fluoride exposure can help families make informed decisions about children's oral care."
        />

        <div className="mt-8 space-y-5 leading-8 text-slate-600">
          <p>
            Fluoride helps protect teeth against tooth decay when used
            appropriately. However, excessive ingestion during enamel
            development can lead to fluorosis. Possible sources include
            drinking water with high fluoride concentrations and
            swallowing more fluoride-containing dental products than
            recommended for a child's age.
          </p>
          <p>
            The risk depends on the amount, duration and timing of
            exposure. Not everyone exposed to fluoride develops
            fluorosis, and the appearance of the enamel can vary.
          </p>
          <p>
            Once the affected teeth have formed, the existing
            fluorosis-related enamel changes cannot simply be reversed
            by changing toothpaste. Cosmetic treatment may improve their
            appearance, but it does not undo the original developmental
            change.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              For parents
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Supervise young children during brushing and use an
              age-appropriate amount of fluoride toothpaste as
              recommended by a dental professional. Avoid unnecessary
              fluoride supplements unless advised.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              For adults
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              If you already have fluorosis stains, focus on obtaining
              the correct diagnosis and discussing suitable cosmetic
              options rather than trying abrasive or unverified home
              remedies.
            </p>
          </div>
        </div>
      </section>

      
import Image from "next/image";

<section className="mx-auto max-w-6xl px-5 py-12">
  <h2 className="text-3xl font-bold text-slate-900 text-center">
    Fluorosis Stains: Before and After
  </h2>

  <p className="mt-3 text-center leading-7 text-slate-600">
    Cosmetic treatment may improve the appearance of selected
    fluorosis stains. Results vary depending on enamel condition
    and the treatment performed.
  </p>

  <figure className="mt-8 overflow-hidden rounded-2xl border border-orange-100 shadow-lg">
    <Image
  src="/images/Fluorosis%20Stains_%20Before%20and%20After.webp"
  alt="Illustrative comparison of fluorosis stains before and after cosmetic dental treatment"
  width={1536}
  height={1024}
  className="h-auto w-full"
  sizes="(max-width: 768px) 100vw, 1152px"
/>
    <figcaption className="bg-orange-50 px-4 py-3 text-center text-sm text-slate-600">
      Illustrative image only. Actual treatment results vary.
    </figcaption>
  </figure>
</section>


      {/* TREATMENTS */}
      <section
        id="treatments"
        className="scroll-mt-6 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Cosmetic dental care"
            title="Fluorosis Stains Treatment Options"
            description="The right treatment depends on the depth of the marks, enamel condition, number of affected teeth and your smile goals. The most conservative suitable option is generally considered first."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-orange-300 hover:shadow-md"
              >
                <p className="text-sm font-extrabold tracking-widest text-orange-600">
                  OPTION {item.number}
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-orange-800">
                  {item.suitable}
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm leading-6 text-slate-600">
                    <strong className="text-slate-900">Important: </strong>
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-orange-200 bg-orange-50 p-7 sm:p-9">
            <h3 className="text-2xl font-bold text-slate-900">
              Which treatment is best for your teeth?
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              A treatment suitable for faint white marks may not be
              appropriate for deep brown discoloration or pitted enamel.
              The dentist will assess your teeth and discuss the
              advantages, limitations, possible sensitivity, maintenance
              requirements and expected cosmetic improvement before
              treatment.
            </p>
            <BookingButtons />
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section
        id="comparison"
        className="scroll-mt-6 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <SectionHeading
          eyebrow="Compare your options"
          title="Fluorosis Treatment: What Is the Difference?"
          description="This overview explains the general purpose of each approach. It is not a substitute for a clinical diagnosis or a personalised recommendation."
        />

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[650px] border-collapse text-left text-sm">
            <thead className="bg-orange-50">
              <tr>
                <th className="p-4 font-bold text-slate-900">Treatment</th>
                <th className="p-4 font-bold text-slate-900">
                  Main purpose
                </th>
                <th className="p-4 font-bold text-slate-900">
                  Important consideration
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item) => (
                <tr
                  key={item.treatment}
                  className="border-t border-slate-200 align-top"
                >
                  <td className="p-4 font-semibold text-slate-900">
                    {item.treatment}
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    {item.goal}
                  </td>
                  <td className="p-4 leading-6 text-slate-600">
                    {item.consideration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CONSULTATION PROCESS */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Your visit"
            title="What Happens During a Fluorosis Consultation?"
            description="The aim of the initial consultation is to understand the cause of the discolouration and identify appropriate treatment choices."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discuss your concerns",
                text: "Explain when you noticed the marks, what bothers you most and what you would like to improve.",
              },
              {
                number: "02",
                title: "Examine the teeth",
                text: "The dentist assesses the distribution, colour, surface and severity of the enamel changes.",
              },
              {
                number: "03",
                title: "Review treatment options",
                text: "Discuss suitable conservative or restorative approaches, their limitations and expected results.",
              },
              {
                number: "04",
                title: "Plan your care",
                text: "Agree on a treatment plan, estimated costs, appointments and maintenance needs before proceeding.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-extrabold tracking-widest text-orange-600">
                  STEP {item.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section
        id="aftercare"
        className="scroll-mt-6 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <SectionHeading
          eyebrow="Protect your smile"
          title="Aftercare Following Fluorosis Stains Treatment"
          description="Good oral hygiene and regular dental reviews help maintain oral health after cosmetic treatment. Specific instructions depend on the procedure performed."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Maintain daily oral hygiene",
              text: "Brush twice daily with fluoride toothpaste appropriate for your age and clean between your teeth regularly.",
            },
            {
              title: "Follow procedure-specific advice",
              text: "Follow the dentist's instructions about sensitivity, eating, drinking and oral care after your particular treatment.",
            },
            {
              title: "Avoid abrasive home remedies",
              text: "Do not use charcoal powders, lemon juice, acids or aggressive scrubbing to try to remove enamel marks. These can damage teeth.",
            },
            {
              title: "Attend follow-up visits",
              text: "Review appointments help monitor sensitivity, gum health, restorations and the appearance of your teeth.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-700">
                ✓
              </span>
              <div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-orange-300">
              Local dental care
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Fluorosis Stains Treatment Near Ameerpet, Hyderabad
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Dr. Bhuvan’s Dental Laser & Implant Centre is located in
             Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana – 500073. Patients enquiring about
              dental fluorosis and cosmetic treatment can contact the
              clinic to discuss an appointment.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              If you live in Ameerpet, Srinagar Colony, Yousufguda or
              Banjara Hills, you can enquire about available consultation
              timings and suitable treatment options.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-7 sm:p-9">
            <h3 className="text-2xl font-bold">
              Dr. Bhuvan’s Dental Laser & Implant Centre
            </h3>
            <div className="mt-6 space-y-4 leading-7 text-slate-300">
              <p>
                <strong className="text-white">Location:</strong>{" "}
                Ganapathi Complex, Navodaya Colony Road, Sri Krishna Nagar, Ameerpet, Yousufguda, Hyderabad, Telangana – 500073.
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                +91 80745 28763
              </p>
              <p>
                <strong className="text-white">Care:</strong>{" "}
                Dental assessment and cosmetic treatment enquiries
              </p>
            </div>
            <BookingButtons />
          </div>
        </div>
      </section>

      {/* RELATED PAGE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-3xl border border-orange-100 bg-orange-50 p-7 sm:p-9">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore More About Dental Care
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Good oral hygiene is important whether or not you choose
            cosmetic treatment. Learn more about professional teeth
            cleaning and maintaining healthy teeth and gums.
          </p>
          <Link
            href="/teeth-cleaning-ameerpet"
            className="mt-5 inline-flex rounded-xl border border-orange-200 bg-white px-5 py-3 font-bold text-orange-700 transition hover:bg-orange-100"
          >
            Learn About Teeth Cleaning
          </Link>
        </div>
      </section>

      {/* CLINIC LOCATION & GOOGLE MAPS */}
<section className="bg-white py-16 sm:py-20">
  <div className="mx-auto max-w-7xl px-5 sm:px-8">

    <div className="mb-10 text-center">
      <p className="font-bold uppercase tracking-widest text-orange-600">
        Visit Our Dental Clinic
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
        Visit Dr. Bhuvan’s Dental Laser & Implant Centre
      </h2>

      <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
        Looking for fluorosis stains treatment near Ameerpet,
        Srinagar Colony, Yousufguda or Banjara Hills?

        Visit our dental clinic in Hyderabad for a consultation
        and personalised treatment planning.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* GOOGLE MAP */}
      <div className="overflow-hidden rounded-3xl border border-orange-100 shadow-lg">
        <iframe
          title="Dr. Bhuvan's Dental Laser & Implant Centre Location"
          src="https://www.google.com/maps?q=Dr.%20Bhuvan%27s%20Dental%20Laser%20%26%20Implant%20Centre%2C%20Ganapathi%20Complex%2C%20Navodaya%20Colony%20Road%2C%20Hyderabad&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* CLINIC INFORMATION */}
      <div className="flex flex-col justify-center rounded-3xl bg-orange-50 p-7 sm:p-10">

        <h3 className="text-2xl font-bold text-slate-900">
          Dr. Bhuvan’s Dental Laser & Implant Centre
        </h3>

        <p className="mt-5 leading-8 text-slate-700">
          <strong>Address:</strong>
          <br />
          Ganapathi Complex,
          <br />
          Navodaya Colony Road,
          <br />
          Sri Krishna Nagar,
          <br />
          Ameerpet, Yousufguda,
          <br />
          Hyderabad, Telangana – 500073.
        </p>

        <p className="mt-5 text-slate-700">
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+918074528763"
            className="font-semibold text-orange-700"
          >
            +91 80745 28763
          </a>
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr.%20Bhuvan%27s%20Dental%20Laser%20%26%20Implant%20Centre%20Ganapathi%20Complex%20Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-orange-600 px-6 py-4 text-center font-bold text-white transition hover:bg-orange-700"
          >
            📍 Get Directions
          </a>

          <a
            href="https://wa.me/918074528763"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-orange-300 bg-white px-6 py-4 text-center font-bold text-orange-700 transition hover:bg-orange-100"
          >
            Book Appointment
          </a>

        </div>

      </div>

    </div>
  </div>
</section>

      {/* FAQS */}
      <section
        id="faqs"
        className="scroll-mt-6 bg-orange-50/60 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-orange-600">
              Patient information
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions About Fluorosis Stains
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Find answers to common questions about dental fluorosis,
              cosmetic treatment choices and aftercare.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold leading-7 text-slate-900">
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-xl text-orange-600 transition group-open:rotate-45">
                    +
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

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-white p-7 sm:p-12">
          <p className="font-bold uppercase tracking-widest text-orange-600">
            Your smile, your plan
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Ready to Understand Your Fluorosis Stains?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Begin with a dental assessment to understand the cause of
            your tooth discolouration and discuss the cosmetic options
            that may be appropriate for you.
          </p>
          <div className="flex justify-center">
            <BookingButtons />
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Individual results vary. A clinical examination is required
            before treatment can be recommended.
          </p>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-orange-700"
          >
            Dr. Bhuvan’s Dental Laser & Implant Centre
          </Link>
          {" "}· Ameerpet, Hyderabad
        </p>
      </section>

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
