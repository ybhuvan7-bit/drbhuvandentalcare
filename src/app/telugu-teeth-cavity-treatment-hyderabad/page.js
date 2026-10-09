import Link from "next/link";

const faqs = [
  {
    q: "పంటిలో పుచ్చు ఎందుకు వస్తుంది?",
    a: "పళ్లపై పేరుకునే ప్లాక్‌లోని బ్యాక్టీరియా ఉత్పత్తి చేసే ఆమ్లాల వల్ల పంటి ఎనామెల్ దెబ్బతినవచ్చు. తరచుగా తీపి పదార్థాలు తినడం, సరిగ్గా బ్రష్ చేయకపోవడం కూడా పంటి పుచ్చు ప్రమాదాన్ని పెంచుతాయి.",
  },
  {
    q: "పుచ్చిన పంటికి చికిత్స చేయించుకోవాలా?",
    a: "అవును. పంటిలో రంధ్రం ఏర్పడితే సాధారణంగా డెంటల్ చికిత్స అవసరం. ప్రారంభ దశలో పరీక్ష చేయించుకుంటే పంటిని కాపాడుకునే అవకాశం ఉంటుంది.",
  },
  {
    q: "పంటికి ఫిల్లింగ్ చేయించుకోవడం నొప్పిగా ఉంటుందా?",
    a: "చాలా సందర్భాల్లో ఫిల్లింగ్‌ను సౌకర్యవంతంగా చేయవచ్చు. పుచ్చు లోతు, పంటి పరిస్థితిని బట్టి అవసరమైతే స్థానిక మత్తు మందు ఉపయోగిస్తారు.",
  },
  {
    q: "పుచ్చిన పంటికి రూట్ కెనాల్ అవసరమవుతుందా?",
    a: "పుచ్చు పంటి లోపలి పల్ప్ వరకు చేరినప్పుడు రూట్ కెనాల్ అవసరమవచ్చు. పంటి నొప్పి, రాత్రిపూట నొప్పి లేదా ఎక్కువ సున్నితత్వం ఉంటే డెంటిస్ట్‌ను సంప్రదించండి.",
  },
  {
    q: "పంటిలో పుచ్చు రాకుండా ఎలా నివారించాలి?",
    a: "రోజుకు రెండుసార్లు ఫ్లోరైడ్ టూత్‌పేస్ట్‌తో బ్రష్ చేయండి, పళ్ల మధ్య శుభ్రం చేయండి, తరచుగా తీపి పదార్థాలు తీసుకోవడం తగ్గించండి, క్రమం తప్పకుండా డెంటల్ చెకప్ చేయించుకోండి.",
  },
  {
    q: "పంటిపై నల్లటి మచ్చ కనిపిస్తే అది పుచ్చేనా?",
    a: "ప్రతి నల్లటి మచ్చ పంటి పుచ్చు అని చెప్పలేం. డెంటల్ పరీక్ష ద్వారా కారణాన్ని గుర్తించి అవసరమైన చికిత్స నిర్ణయించవచ్చు.",
  },
];

export const metadata = {
  title:
    "హైదరాబాద్‌లో పుచ్చిన పంటికి చికిత్స | Dental Cavity Treatment Telugu",
  description:
    "హైదరాబాద్ అమీర్‌పేట్‌లో పుచ్చిన పంటికి చికిత్స, డెంటల్ ఫిల్లింగ్, పంటి నొప్పి మరియు రూట్ కెనాల్ చికిత్స గురించి తెలుగులో తెలుసుకోండి. Dr. Bhuvan's Dental Laser & Implant Centre.",
  keywords: [
    "హైదరాబాద్‌లో పుచ్చిన పంటికి చికిత్స",
    "పంటి పుచ్చు చికిత్స హైదరాబాద్",
    "పంటి నొప్పి చికిత్స హైదరాబాద్",
    "పంటిలో పురుగు చికిత్స",
    "దంతాల ఫిల్లింగ్ హైదరాబాద్",
    "పంటి పుచ్చు అమీర్‌పేట్",
    "దంత వైద్యుడు హైదరాబాద్",
    "dental cavity treatment Telugu",
    "tooth decay treatment Hyderabad",
    "Telugu dentist Ameerpet",
  ],
  alternates: {
    canonical:
      "https://www.drbhuvandentalcare.com/telugu-teeth-cavity-treatment-hyderabad",
  },
  openGraph: {
    title:
      "హైదరాబాద్‌లో పుచ్చిన పంటికి చికిత్స | Dr. Bhuvan's Dental Clinic",
    description:
      "పుచ్చిన పంటికి చికిత్స, డెంటల్ ఫిల్లింగ్ మరియు పంటి నొప్పి గురించి తెలుగులో తెలుసుకోండి.",
    url:
      "https://www.drbhuvandentalcare.com/telugu-teeth-cavity-treatment-hyderabad",
    siteName: "Dr. Bhuvan's Dental Laser & Implant Centre",
    locale: "te_IN",
    type: "website",
    images: [
      {
        url: "https://www.drbhuvandentalcare.com/doctor.webp",
        width: 1200,
        height: 630,
        alt: "డాక్టర్ భువనేష్ యానమాల - పుచ్చిన పంటికి చికిత్స హైదరాబాద్",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TeluguTeethCavityTreatmentPage() {
  return (
    <main className="bg-white text-zinc-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold tracking-widest text-orange-100">
              మీ దంత ఆరోగ్యం మా బాధ్యత
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              హైదరాబాద్‌లో
              <span className="mt-2 block text-orange-100">
                పుచ్చిన పంటికి చికిత్స
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-orange-50">
              పంటిలో పుచ్చు ఉందా? పంటి నొప్పి లేదా చల్లటి పదార్థాలు
              తిన్నప్పుడు సున్నితత్వం కలుగుతోందా? సరైన సమయంలో చికిత్స
              చేయించుకోవడం ద్వారా మీ సహజమైన పంటిని కాపాడుకునే అవకాశం
              ఉంటుంది.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#appointment"
                className="rounded-full bg-white px-7 py-3.5 text-center font-bold text-orange-600"
              >
                అపాయింట్‌మెంట్ బుక్ చేయండి
              </Link>

              <a
                href="tel:+918074528763"
                className="rounded-full border border-white px-7 py-3.5 text-center font-bold"
              >
                కాల్ చేయండి
              </a>
            </div>

            <p className="mt-5 text-sm text-orange-100">
              పంటి పుచ్చు • డెంటల్ ఫిల్లింగ్ • రూట్ కెనాల్
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl">
            <img
              src="/doctor.webp"
              alt="డాక్టర్ భువనేష్ యానమాల - హైదరాబాద్‌లో దంత వైద్యుడు"
              className="h-[360px] w-full rounded-2xl object-cover sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-orange-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold tracking-widest text-orange-600">
            దంత సమస్యను తెలుసుకుందాం
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            పంటి పుచ్చు అంటే ఏమిటి?
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            పంటిపై పేరుకునే ప్లాక్‌లోని బ్యాక్టీరియా ఉత్పత్తి చేసే ఆమ్లాల
            వల్ల పంటి గట్టి పొర క్రమంగా దెబ్బతినవచ్చు. దీనినే పంటి పుచ్చు
            లేదా Tooth Decay అంటారు. మొదట చిన్న మచ్చలా కనిపించిన సమస్య
            చికిత్స లేకపోతే పంటిలో రంధ్రంగా మారవచ్చు.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-600">
            ప్రారంభ దశలోనే పరీక్ష చేయించుకుంటే అవసరమైన చికిత్సను త్వరగా
            గుర్తించి పంటి ఆరోగ్యాన్ని కాపాడుకోవచ్చు.
          </p>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            పుచ్చిన పంటిలో కనిపించే లక్షణాలు
          </h2>

          <p className="mt-4 text-lg text-zinc-600">
            ఈ లక్షణాల్లో ఏవైనా కనిపిస్తే డెంటల్ చెకప్ చేయించుకోండి.
            ప్రారంభ దశలో కొన్నిసార్లు ఎలాంటి నొప్పి ఉండకపోవచ్చు.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "పంటి నొప్పి",
              "చల్లటి లేదా వేడి పదార్థాలకు సున్నితత్వం",
              "పంటిపై నల్లటి లేదా గోధుమ రంగు మచ్చలు",
              "పంటిలో రంధ్రం కనిపించడం",
              "తినేటప్పుడు నొప్పి",
              "పళ్ల మధ్య ఆహారం ఇరుక్కోవడం",
              "కొరకేటప్పుడు నొప్పి",
              "నోటి దుర్వాసన",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm"
              >
                <span className="text-xl text-orange-600">✓</span>
                <h3 className="mt-3 font-bold leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="bg-zinc-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              పంటిలో పుచ్చు రావడానికి కారణాలు
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
              ఆహారపు అలవాట్లు, నోటి పరిశుభ్రత మరియు ఇతర కారణాలు పంటి
              పుచ్చు ప్రమాదాన్ని పెంచవచ్చు.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "ప్లాక్ పేరుకుపోవడం",
                text: "పళ్లపై పేరుకునే బ్యాక్టీరియా ప్లాక్ ఆమ్లాలను ఉత్పత్తి చేసి ఎనామెల్‌ను దెబ్బతీయవచ్చు.",
              },
              {
                title: "తీపి పదార్థాలు ఎక్కువగా తినడం",
                text: "తరచుగా చక్కెర ఉన్న ఆహారాలు, పానీయాలు తీసుకోవడం వల్ల పళ్లపై ఆమ్ల ప్రభావం పెరుగుతుంది.",
              },
              {
                title: "సరిగ్గా బ్రష్ చేయకపోవడం",
                text: "పళ్లపై, పళ్ల మధ్య మిగిలిపోయిన ప్లాక్ పుచ్చు ఏర్పడటానికి కారణం కావచ్చు.",
              },
              {
                title: "నోరు పొడిబారడం",
                text: "లాలాజలం తగ్గినప్పుడు పళ్లకు లభించే సహజ రక్షణ తగ్గవచ్చు.",
              },
              {
                title: "ఆమ్ల పదార్థాలు తరచుగా తీసుకోవడం",
                text: "కొన్ని ఆమ్ల పదార్థాలు, పానీయాలను తరచుగా తీసుకోవడం ఎనామెల్‌ను ప్రభావితం చేయవచ్చు.",
              },
              {
                title: "డెంటల్ చెకప్ చేయించుకోకపోవడం",
                text: "ప్రారంభ దశలో ఉన్న పుచ్చు మనకు కనిపించకపోవచ్చు. క్రమం తప్పని పరీక్ష ఉపయోగకరంగా ఉంటుంది.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="mb-4 h-2 w-14 rounded-full bg-orange-500" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold tracking-widest text-orange-600">
              చికిత్సా విధానాలు
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              పుచ్చిన పంటికి ఎలాంటి చికిత్స చేస్తారు?
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              పుచ్చు ఎంత లోతుగా ఉంది, పంటి లోపలి భాగం ప్రభావితమైందా,
              పంటిలో ఎంత భాగం మిగిలి ఉందనే విషయాల ఆధారంగా చికిత్స
              నిర్ణయిస్తారు.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "ప్రారంభ దశలో నివారణ",
                  text: "ఎనామెల్‌లో ప్రారంభ ఖనిజ నష్టం ఉన్నప్పుడు తగిన ఫ్లోరైడ్, నోటి పరిశుభ్రత మరియు నివారణ చర్యలు సహాయపడవచ్చు.",
                },
                {
                  title: "డెంటల్ ఫిల్లింగ్",
                  text: "పంటిలో రంధ్రం ఏర్పడితే దెబ్బతిన్న భాగాన్ని తొలగించి తగిన ఫిల్లింగ్ మెటీరియల్‌తో పంటిని పునరుద్ధరిస్తారు.",
                },
                {
                  title: "రూట్ కెనాల్ చికిత్స",
                  text: "పుచ్చు పంటి లోపలి పల్ప్‌ను ప్రభావితం చేసినప్పుడు రూట్ కెనాల్ అవసరమవచ్చు.",
                },
                {
                  title: "క్రౌన్ లేదా ఇతర పునరుద్ధరణ",
                  text: "పంటి ఎక్కువగా దెబ్బతిన్నప్పుడు మిగిలిన పంటి భాగాన్ని బట్టి క్రౌన్ లేదా ఇతర చికిత్స అవసరం కావచ్చు.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-zinc-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="self-center rounded-3xl bg-orange-50 p-5 sm:p-8">
            <div className="rounded-2xl bg-orange-600 p-7 text-white sm:p-8">
              <p className="text-sm font-bold tracking-widest text-orange-100">
                ముఖ్యమైన సూచన
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                నొప్పి వచ్చే వరకు వేచి ఉండకండి
              </h3>

              <p className="mt-4 leading-8 text-orange-50">
                పంటిలో పుచ్చు ఉన్నా మొదట్లో నొప్పి లేకపోవచ్చు. క్రమం
                తప్పని డెంటల్ పరీక్ష ద్వారా సమస్యను ముందుగానే గుర్తించవచ్చు.
              </p>

              <Link
                href="/#appointment"
                className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-orange-600"
              >
                అపాయింట్‌మెంట్ బుక్ చేయండి
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FILLING PROCESS */}
      <section className="bg-orange-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              డెంటల్ ఫిల్లింగ్ ఎలా చేస్తారు?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
              ఫిల్లింగ్ అవసరమైనప్పుడు సాధారణంగా ఈ దశలను అనుసరిస్తారు.
              పంటి పరిస్థితిని బట్టి విధానం మారవచ్చు.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "పంటి పరీక్ష", "పంటిని పరీక్షించి అవసరమైతే ఎక్స్-రే తీస్తారు."],
              ["02", "పుచ్చు అంచనా", "పుచ్చు ఎంత లోతులో ఉందో తెలుసుకుంటారు."],
              ["03", "దెబ్బతిన్న భాగం తొలగింపు", "అవసరమైన మేరకు పుచ్చు భాగాన్ని తొలగిస్తారు."],
              ["04", "ఫిల్లింగ్", "తగిన మెటీరియల్‌తో పంటిని పునరుద్ధరిస్తారు."],
              ["05", "చివరి తనిఖీ", "ఫిల్లింగ్ ఆకారం, కొరికేటప్పుడు సౌకర్యాన్ని తనిఖీ చేస్తారు."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-2xl bg-white p-6">
                <span className="font-extrabold text-orange-600">{number}</span>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVENTION */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            పంటి పుచ్చు రాకుండా ఎలా చూసుకోవాలి?
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              "రోజుకు రెండుసార్లు ఫ్లోరైడ్ టూత్‌పేస్ట్‌తో బ్రష్ చేయండి.",
              "రోజూ పళ్ల మధ్య శుభ్రం చేయండి.",
              "తరచుగా తీపి పదార్థాలు, చక్కెర పానీయాలు తీసుకోవడం తగ్గించండి.",
              "భోజనాల మధ్య తరచుగా స్నాక్స్ తినడం తగ్గించండి.",
              "నోరు పొడిబారే సమస్య ఉంటే డెంటిస్ట్‌కు తెలియజేయండి.",
              "క్రమం తప్పకుండా డెంటల్ చెకప్ చేయించుకోండి.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-orange-100 p-5"
              >
                <span className="mr-3 font-bold text-orange-600">✓</span>
                <span className="leading-7">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="bg-zinc-950 px-6 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold tracking-widest text-orange-400">
              మీ దంత వైద్య సంరక్షణ
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              డాక్టర్ భువన్ క్లినిక్‌ను ఎందుకు సంప్రదించాలి?
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              డాక్టర్ భువనేష్ యానమాల, MDS Periodontics, ఆధ్వర్యంలో
              రోగి అవసరాలకు అనుగుణంగా పరీక్ష, చికిత్సా ప్రణాళిక మరియు
              దంత సంరక్షణ అందించబడుతుంది.
            </p>

            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "MDS Periodontics",
                "ఆధునిక డెంటల్ క్లినిక్",
                "వ్యక్తిగత చికిత్సా ప్రణాళిక",
                "అవసరాన్ని బట్టి డిజిటల్ డయాగ్నస్టిక్స్",
                "రోగికి ప్రత్యేక శ్రద్ధ",
                "సమగ్ర దంత సంరక్షణ",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="mr-2 text-orange-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/clinic2.webp"
            alt="డాక్టర్ భువన్ డెంటల్ లేజర్ అండ్ ఇంప్లాంట్ సెంటర్"
            className="h-[350px] w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      {/* LOCATION */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold tracking-widest text-orange-600">
            మా క్లినిక్
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            హైదరాబాద్‌లో పుచ్చిన పంటికి చికిత్స
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            అమీర్‌పేట్, యూసుఫ్‌గూడ మరియు సమీప ప్రాంతాల నుంచి వచ్చే
            రోగులు డెంటల్ చెకప్ మరియు చికిత్స కోసం మా క్లినిక్‌ను
            సంప్రదించవచ్చు.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {[
              "అమీర్‌పేట్",
              "యూసుఫ్‌గూడ",
              "ఎస్.ఆర్. నగర్",
              "మధురా నగర్",
              "శ్రీనగర్ కాలనీ",
              "బోరబండ",
              "బంజారా హిల్స్",
              "జూబ్లీ హిల్స్",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2.5 font-medium text-orange-700"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="mt-7 leading-7 text-zinc-500">
            Ganapati Complex, Navodaya Colony Road, Ameerpet, Hyderabad,
            Telangana 500073
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Dr+Bhuvans+Dental+Laser+Implant+Centre+Ameerpet+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-orange-600 px-7 py-3 font-bold text-white"
          >
            Google Maps‌లో దారి చూడండి
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            తరచుగా అడిగే ప్రశ్నలు
          </h2>

          <div className="mt-9 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer font-bold leading-7">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-8 text-zinc-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">
            ఇతర దంత చికిత్సలు
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "రూట్ కెనాల్ చికిత్స",
                text: "పంటి లోపలి పల్ప్ ప్రభావితమైనప్పుడు చికిత్స గురించి తెలుసుకోండి.",
                href: "/root-canal-treatment-ameerpet",
              },
              {
                title: "పళ్ల క్లీనింగ్",
                text: "ప్లాక్, టార్టార్ తొలగింపు మరియు నోటి పరిశుభ్రత గురించి తెలుసుకోండి.",
                href: "/teeth-cleaning-ameerpet",
              },
              {
                title: "అమీర్‌పేట్‌లో డెంటిస్ట్",
                text: "మీ దంత సమస్యలకు పరీక్ష మరియు చికిత్స కోసం అపాయింట్‌మెంట్ తీసుకోండి.",
                href: "/dentist-in-ameerpet",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-orange-100 p-6 transition hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{item.text}</p>
                <span className="mt-4 inline-block font-bold text-orange-600">
                  మరిన్ని వివరాలు →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-16 text-center text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            పంటి నొప్పిని నిర్లక్ష్యం చేయకండి
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
            పంటిలో పుచ్చు లేదా సున్నితత్వం ఉంటే పరీక్ష చేయించుకుని
            సరైన చికిత్స గురించి తెలుసుకోండి.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#appointment"
              className="rounded-full bg-white px-8 py-3.5 font-bold text-orange-600"
            >
              అపాయింట్‌మెంట్ బుక్ చేయండి
            </Link>

            <a
              href="tel:+918074528763"
              className="rounded-full border border-white px-8 py-3.5 font-bold"
            >
              80745 28763
            </a>
          </div>

          <p className="mt-6 text-sm text-orange-100">
            Dr. Bhuvan&apos;s Dental Laser &amp; Implant Centre • Ameerpet,
            Hyderabad
          </p>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dr. Bhuvan's Dental Laser & Implant Centre",
            url: "https://www.drbhuvandentalcare.com/telugu-teeth-cavity-treatment-hyderabad",
            telephone: "+918074528763",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ganapati Complex, Navodaya Colony Road",
              addressLocality: "Ameerpet, Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500073",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.drbhuvandentalcare.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "హైదరాబాద్‌లో పుచ్చిన పంటికి చికిత్స",
                item:
                  "https://www.drbhuvandentalcare.com/telugu-teeth-cavity-treatment-hyderabad",
              },
            ],
          }),
        }}
      />
    </main>
  );
}