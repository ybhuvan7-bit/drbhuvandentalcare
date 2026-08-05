import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle, Phone, Star } from "lucide-react";

export const metadata = {
  title:
    "Dental Implants in Srinagar Colony, Hyderabad | Best Implant Dentist | Dr. Bhuvan",
  description:
    "Looking for the best dental implants in Srinagar Colony, Hyderabad? Get advanced implant treatment by Dr. Bhuvanesh Yanamala, MDS Periodontist & Implantologist. Book your consultation today.",
};

export default function DentalImplantsPage() {
  return (
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
                Srinagar Colony, Hyderabad
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
              alt="Dental Implants in Srinagar Colony Hyderabad"
              width={700}
              height={700}
              priority
              className="relative z-10 mx-auto rounded-3xl shadow-2xl"
            />

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

{/* =======================================
WHY CHOOSE US
======================================= */}

<section className="bg-orange-50 py-24">

<div className="mx-auto max-w-7xl px-6">

<div className="grid items-center gap-16 lg:grid-cols-2">

<div>

<Image
src="/doctor.webp"
alt="Dr Bhuvanesh Yanamala"
width={650}
height={850}
className="rounded-3xl shadow-2xl"
/>

</div>

<div>

<span className="rounded-full bg-orange-200 px-5 py-2 text-sm font-bold text-orange-700">

Why Choose Dr. Bhuvan?

</span>

<h2 className="mt-6 text-5xl font-black text-gray-900">

Experience. Precision.
Personalized Care.

</h2>

<p className="mt-8 text-lg leading-9 text-gray-600">

Dr. Bhuvanesh Yanamala is an MDS Periodontist & Implantologist dedicated to
providing evidence-based implant dentistry using advanced technology and
patient-centered treatment planning.

</p>

<div className="mt-10 space-y-5">

<div>✅ MDS Periodontist & Implantologist</div>

<div>✅ Advanced Implant Planning</div>

<div>✅ Modern Digital Technology</div>

<div>✅ Personalized One-to-One Care</div>

<div>✅ Focus on Long-term Success</div>

</div>

</div>

</div>

</div>

</section>
{/* =======================================
DENTAL IMPLANT COST
======================================= */}

<section className="bg-white py-24">

<div className="mx-auto max-w-7xl px-6">

<div className="grid items-center gap-16 lg:grid-cols-2">

<div>

<span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
Dental Implant Cost
</span>

<h2 className="mt-6 text-5xl font-black text-gray-900">
How Much Do Dental Implants Cost in Hyderabad?
</h2>

<p className="mt-8 text-lg leading-9 text-gray-600">

The cost of dental implants varies depending on several clinical factors,
including the number of missing teeth, bone availability, implant system,
need for bone grafting or sinus lift procedures, and the type of final
prosthesis.

</p>

<p className="mt-6 text-lg leading-9 text-gray-600">

Every patient receives a personalized treatment plan after a comprehensive
clinical examination and digital assessment. During your consultation,
we explain all available treatment options and provide a transparent estimate
tailored to your individual needs.

</p>

<div className="mt-10 rounded-3xl bg-orange-50 p-8">

<h3 className="text-2xl font-bold text-orange-700">

What's Included?

</h3>

<ul className="mt-6 space-y-4 text-lg text-gray-700">

<li>✅ Comprehensive Consultation</li>

<li>✅ Digital Clinical Assessment</li>

<li>✅ Personalized Treatment Planning</li>

<li>✅ Implant Placement</li>

<li>✅ Crown / Prosthetic Planning</li>

<li>✅ Post-operative Guidance</li>

</ul>

</div>

</div>

<div>

<Image
src="/implant.webp"
alt="Dental Implant Cost Hyderabad"
width={650}
height={650}
className="rounded-3xl shadow-2xl"
/>

</div>

</div>

</div>

</section>

{/* =======================================
FAQ
======================================= */}

<section className="bg-gray-50 py-24">

<div className="mx-auto max-w-5xl px-6">

<div className="text-center">

<h2 className="text-5xl font-black text-gray-900">

Frequently Asked Questions

</h2>

<p className="mt-5 text-xl text-gray-600">

Common questions about dental implants.

</p>

</div>

<div className="mt-16 space-y-6">

<div className="rounded-2xl bg-white p-8 shadow-lg">

<h3 className="text-2xl font-bold">

Are dental implants painful?

</h3>

<p className="mt-4 leading-8 text-gray-600">

Dental implant placement is performed under local anesthesia.
Most patients report only mild discomfort after the procedure,
which usually improves within a few days.

</p>

</div>

<div className="rounded-2xl bg-white p-8 shadow-lg">

<h3 className="text-2xl font-bold">

How long do dental implants last?

</h3>

<p className="mt-4 leading-8 text-gray-600">

With proper oral hygiene and regular dental check-ups,
dental implants can function successfully for many years.

</p>

</div>

<div className="rounded-2xl bg-white p-8 shadow-lg">

<h3 className="text-2xl font-bold">

Am I eligible for dental implants?

</h3>

<p className="mt-4 leading-8 text-gray-600">

Most healthy adults with adequate jawbone support are suitable
candidates. A consultation and examination are necessary to
determine the most appropriate treatment plan.

</p>

</div>

<div className="rounded-2xl bg-white p-8 shadow-lg">

<h3 className="text-2xl font-bold">

How many visits are required?

</h3>

<p className="mt-4 leading-8 text-gray-600">

The number of visits depends on your individual treatment plan.
Some patients may qualify for immediate solutions, while others
require staged treatment.

</p>

</div>

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
href="/gum-disease-treatment-Srinagar Colony"
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
href="/root-canal-treatment-Srinagar Colony"
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
href="/laser-dentistry-Srinagar Colony"
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
        Dental Implant Services Near Srinagar Colony
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
        Our clinic is conveniently located for patients from <strong>Srinagar Colony, Hyderabad</strong> and nearby areas including Ameerpet, Yousufguda, SR Nagar, Madhura Nagar and Punjagutta. We provide advanced dental implant treatment using modern technology and personalized care for patients across these central Hyderabad neighbourhoods. Srinagar Colony is a well-connected residential and commercial area with easy access to Ameerpet and nearby metro stations. :contentReference[oaicite:0]{index=0}
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
          Personalized implant treatment near SR Nagar.
        </p>

        <span className="mt-4 inline-block font-semibold text-orange-600 transition group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>

      <Link
        href="/dental-implants-punjagutta"
        className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
      >
        <h3 className="font-bold text-orange-600">
          Dental Implants in Punjagutta
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Modern dental implant solutions near Punjagutta.
        </p>

        <span className="mt-4 inline-block font-semibold text-orange-600 transition group-hover:translate-x-1">
          Learn More →
        </span>
      </Link>

    </div>

  </div>

</section>
    </main>
  );
}