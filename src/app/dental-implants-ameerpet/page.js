import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle, Phone, Star } from "lucide-react";

export const metadata = {
  title:
    "Dental Implants in Ameerpet, Hyderabad | Best Implant Dentist | Dr. Bhuvan",
  description:
    "Looking for the best dental implants in Ameerpet, Hyderabad? Get advanced implant treatment by Dr. Bhuvanesh Yanamala, MDS Periodontist & Implantologist. Book your consultation today.",
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
                Ameerpet, Hyderabad
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
              alt="Dental Implants in Ameerpet Hyderabad"
              width={700}
              height={700}
              priority
              className="relative z-10 mx-auto rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>

    </main>
  );
}