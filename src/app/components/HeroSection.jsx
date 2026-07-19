import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-16">

          {/* LEFT CONTENT */}

          <div>

            {/* Google Rating */}

            <div className="inline-flex items-center gap-3 bg-white shadow-lg rounded-full px-5 py-3 border border-orange-100">

              <span className="text-yellow-500 text-lg">
                ⭐⭐⭐⭐⭐
              </span>

              <span className="font-semibold text-gray-700">
                4.9 Google Rating
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-gray-900">

              Best Dental Clinic

              <span className="block text-orange-600">

                in Ameerpet

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">

              Experience world-class Dental Implants,
              Laser Dentistry, Root Canal Treatment,
              Teeth Cleaning and Smile Makeovers by
              Dr. Bhuvanesh Yanamala.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#appointment"
                className="bg-orange-600 hover:bg-orange-700 transition text-white px-8 py-4 rounded-full font-bold shadow-xl"
              >
                📅 Book Appointment
              </a>

              <a
                href="tel:+918074528763"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition px-8 py-4 rounded-full font-bold"
              >
                📞 Call Now
              </a>

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
              className="relative z-10 object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}