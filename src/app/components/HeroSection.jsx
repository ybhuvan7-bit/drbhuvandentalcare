import {
  ShieldCheck,
  Sparkles,
  Stethoscope,
  HeartHandshake,
  CalendarDays,
  Phone,
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8"> </div>

        <div className="grid min-h-[90vh] items-center gap-16 py-10 lg:grid-cols-2">
         {/* LEFT CONTENT */}

<div>

  {/* Google Rating */}

  <div className="inline-flex items-center gap-3 rounded-full border border-orange-100 bg-white px-5 py-3 shadow-lg">

    <div className="text-xl">⭐⭐⭐⭐⭐</div>

    <div>
      <p className="font-bold text-gray-800">
        Trusted by Hundreds of Happy Patients
      </p>
      <p className="text-sm text-gray-500">
        Read Our Google Reviews
      </p>
    </div>

  </div>

  {/* Heading */}

 <h1 className="mt-8 text-5xl font-black leading-tight text-gray-900 md:text-7xl">

Transform Your Smile with

<span className="block text-orange-600">

Advanced Dental Care

</span>

<span className="mt-3 block text-2xl font-bold text-gray-700 md:text-3xl">

Dental Implants • Laser Dentistry • Smile Makeovers

</span>

</h1>
{/* Description */}

<p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600 md:text-xl">

  Experience exceptional dental care at
  <strong> Dr. Bhuvan's Dental Laser & Implant Centre</strong>,
  a trusted <strong>dental clinic in Ameerpet, Hyderabad</strong>.
  From <strong>Dental Implants</strong> and
  <strong> Laser Dentistry</strong> to
  <strong> Root Canal Treatment</strong>,
  <strong> Cosmetic Dentistry</strong>,
  <strong> Wisdom Tooth Removal</strong>, and
  <strong> Gum Care</strong>, we combine advanced technology,
  evidence-based treatment, and compassionate one-to-one care to create healthy,
  confident smiles.

</p>

  {/* Buttons */}

<div className="mt-10 flex flex-wrap gap-5">

  <a
    href="#appointment"
    className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-2xl"
  >
    📅
    <span>Book an Appointment</span>
    <span>→</span>
  </a>

  <a
    href="tel:+918074528763"
    className="inline-flex items-center gap-2 rounded-full border-2 border-orange-600 px-8 py-4 font-bold text-orange-600 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:text-white hover:shadow-2xl"
  >
    📞
    <span>Call Now</span>
  </a>

</div>
  {/* Trust Badges */}

<div className="mt-8 flex flex-wrap gap-3">

  <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
    <Stethoscope size={16} />
    MDS Periodontist & Implantologist
  </div>

  <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
    <Sparkles size={16} />
    Advanced Laser Dentistry
  </div>

  <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
    <ShieldCheck size={16} />
    Digital Diagnosis & Modern Technology
  </div>

  <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
    <HeartHandshake size={16} />
    Personalized One-to-One Care
  </div>

</div>
 {/* Stats */}

<div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">

  {/* Card 1 */}

  <div className="rounded-3xl border border-orange-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

    <h3 className="text-4xl font-extrabold text-orange-600">
      1000+
    </h3>

    <p className="mt-2 text-sm font-medium text-gray-600">
      Happy Smiles
    </p>

  </div>

  {/* Card 2 */}

  <div className="rounded-3xl border border-orange-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

    <h3 className="text-4xl font-extrabold text-orange-600">
      MDS
    </h3>

    <p className="mt-2 text-sm font-medium text-gray-600">
      Periodontist &
      <br />
      Implantologist
    </p>

  </div>

  {/* Card 3 */}

  <div className="rounded-3xl border border-orange-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

    <h3 className="text-2xl font-extrabold text-orange-600">
      Advanced
    </h3>

    <p className="mt-2 text-sm font-medium text-gray-600">
      Laser Dentistry
    </p>

  </div>

  {/* Card 4 */}

  <div className="rounded-3xl border border-orange-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

    <h3 className="text-2xl font-extrabold text-orange-600">
      Digital
    </h3>

    <p className="mt-2 text-sm font-medium text-gray-600">
      Modern Equipment
    </p>

  </div>

</div>

{/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute h-[500px] w-[500px] rounded-full bg-orange-100 blur-3xl"></div>

            <Image
              src="/doctor.webp"
              alt="Dr Bhuvanesh Yanamala"
              width={700}
              height={850}
              priority
              className="relative z-10 w-full max-w-xl object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.25)]"
            />
<div className="absolute left-0 top-16 hidden rounded-2xl bg-white p-5 shadow-2xl lg:block">

  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Specialist
  </p>

  <h3 className="mt-1 font-bold text-orange-600">
    Dental Implants
  </h3>

</div>

<div className="absolute bottom-16 right-0 hidden rounded-2xl bg-white p-5 shadow-2xl lg:block">

  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Advanced
  </p>

  <h3 className="mt-1 font-bold text-orange-600">
    Laser Dentistry
  </h3>

</div>
          </div>

        </div>

      </div>

    </section>
  );
}