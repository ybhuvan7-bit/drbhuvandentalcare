"use client";

import Navbar from "./components/Navbar";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyuMzwnNl6BnHrJYunkDCN3w0_3d_ji4iIh2DxY8d4rshGUwbsTpf2vdD2OBz0a0Nb6jQ/exec";

export default function Home() {
  const handleAppointment = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      phone: form.get("phone"),
      date: form.get("date"),
      message: form.get("message"),
    };

    try {
  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

  const result = await response.text();

  console.log("SUCCESS:", result);
  alert(result);

} catch (err) {
  console.error("ERROR:", err);
  alert(err.message);
}
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden pt-28">
        <img
          src="/doctor.jpg.png"
          alt="Dr Bhuvan"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

          <div className="max-w-2xl">

            <span className="bg-orange-600 text-white px-5 py-2 rounded-full font-semibold">
              ⭐ 4.9 Google Rating • 118+ Reviews
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
  Best Dental Clinic
  <br />

  <span className="text-orange-500">
    in Ameerpet,
  </span>

  <br />

  Hyderabad
</h1>

            <p className="mt-8 text-xl text-gray-200 leading-9 max-w-lg">
Experience world-class dental care with advanced Dental Implants,
Laser Dentistry, Cosmetic Dentistry, Root Canal Treatment and Gum Care
by Dr. Bhuvanesh Yanamala (MDS Periodontics).
</p>
            <div className="mt-10 flex flex-wrap gap-4">

<a
href="#appointment"
className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl"
>
📅 Book Appointment
</a>

<a
href="tel:+918074528763"
className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl"
>
📞 Call Now
</a>

<a
href="https://wa.me/918074528763"
target="_blank"
className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl"
>
💬 WhatsApp
</a>

</div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center">
<h2 className="text-3xl font-bold text-orange-400">5000+</h2>
<p className="text-white">Happy Patients</p>
</div>

<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center">
<h2 className="text-3xl font-bold text-orange-400">1000+</h2>
<p className="text-white">Dental Implants</p>
</div>

<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center">
<h2 className="text-3xl font-bold text-orange-400">4.9★</h2>
<p className="text-white">Google Rating</p>
</div>

<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center">
<h2 className="text-3xl font-bold text-orange-400">Laser</h2>
<p className="text-white">Modern Dentistry</p>
</div>

</div>

          </div>

        </div>

      </section>
            {/* DOCTOR */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="/doctor.jpg.png"
              alt="Dr Bhuvanesh"
              className="rounded-3xl shadow-2xl w-full"
            />

          </div>

          <div>

            <span className="uppercase tracking-[5px] text-orange-600 font-bold">
              Meet Your Specialist
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Dr. Bhuvanesh Yanamala
            </h2>

            <p className="text-orange-600 text-xl font-semibold mt-3">
              MDS (Periodontics) | Implantologist | Laser Specialist
            </p>

            <p className="mt-8 text-lg text-gray-600 leading-9">

              Dr. Bhuvan's Dental Laser & Implant Centre is dedicated
              to providing advanced dental care using modern technology,
              painless laser procedures and evidence-based treatment
              protocols for every patient.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="rounded-2xl p-6 bg-white shadow-xl border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                <h3 className="text-3xl font-bold text-orange-600">
                  5000+
                </h3>

                <p className="mt-2">
                  Happy Patients
                </p>

              </div>

              <div className="rounded-2xl p-6 bg-white shadow-xl border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                <h3 className="text-3xl font-bold text-orange-600">
                  1000+
                </h3>

                <p className="mt-2">
                  Dental Implants
                </p>

              </div>

              <div className="rounded-2xl p-6 bg-white shadow-xl border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                <h3 className="text-3xl font-bold text-orange-600">
                  4.9★
                </h3>

                <p className="mt-2">
                  Google Rating
                </p>

              </div>

              <div className="rounded-2xl p-6 bg-white shadow-xl border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                <h3 className="text-3xl font-bold text-orange-600">
                  Modern
                </h3>

                <p className="mt-2">
                  Laser Dentistry
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">

              Our Dental Services

            </h2>

            <p className="text-xl text-gray-600 mt-5">

              Complete dental care under one roof.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-5">
                🦷
              </div>

              <h3 className="text-2xl font-bold">
                Dental Implants
              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Permanent replacement for missing teeth with premium implant systems.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-5">
                ⚡
              </div>

              <h3 className="text-2xl font-bold">
                Laser Dentistry
              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Comfortable laser procedures with faster healing.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-5">
                😁
              </div>

              <h3 className="text-2xl font-bold">
                Smile Makeover
              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Cosmetic dentistry to improve smile confidence.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-5">
                🪥
              </div>

              <h3 className="text-2xl font-bold">
                Teeth Cleaning
              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Professional scaling and polishing for healthy gums.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-5">
                🛡️
              </div>

              <h3 className="text-2xl font-bold">
                Root Canal Treatment
              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Save infected teeth with modern painless techniques.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-5">
                ✨
              </div>

              <h3 className="text-2xl font-bold">
                Cosmetic Dentistry
              </h3>

              <p className="mt-4 text-gray-600 leading-8">

                Veneers, whitening and aesthetic smile enhancement.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* REVIEWS */}

      <section className="py-24 bg-orange-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              What Our Patients Say
            </h2>

            <p className="text-xl text-gray-600 mt-5">
              Trusted by thousands of happy smiles.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-3xl">⭐⭐⭐⭐⭐</div>

              <p className="mt-6 text-gray-600 leading-8">
                Excellent implant treatment. Completely painless and
                very professional care.
              </p>

              <h3 className="mt-6 font-bold">
                Rahul Kumar
              </h3>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-3xl">⭐⭐⭐⭐⭐</div>

              <p className="mt-6 text-gray-600 leading-8">
                Best dentist in Hyderabad. Very friendly staff and
                modern laser treatment.
              </p>

              <h3 className="mt-6 font-bold">
                Sneha Reddy
              </h3>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-3xl">⭐⭐⭐⭐⭐</div>

              <p className="mt-6 text-gray-600 leading-8">
                Highly recommended for cosmetic dentistry and smile
                makeover procedures.
              </p>

              <h3 className="mt-6 font-bold">
                Anjali Sharma
              </h3>

            </div>

          </div>

          <div className="text-center mt-14">

            <a
              href="https://g.page/r/Cb9Tvhf5l8RPEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold inline-block"
            >
              ⭐ Read Google Reviews
            </a>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Smile Gallery
            </h2>

            <p className="text-xl text-gray-600 mt-5">
              Modern Dentistry. Beautiful Results.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/gallery1.jpg"
              className="rounded-3xl shadow-xl"
              alt=""
            />

            <img
              src="/gallery2.jpg"
              className="rounded-3xl shadow-xl"
              alt=""
            />

            <img
              src="/gallery3.jpg"
              className="rounded-3xl shadow-xl"
              alt=""
            />

          </div>

        </div>

      </section>

      {/* APPOINTMENT */}

      <section
        id="appointment"
        className="py-24 bg-gray-100"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">
              Book Appointment
            </h2>

            <p className="text-gray-600 mt-5 text-xl">
              Fill the form below and we'll contact you shortly.
            </p>

          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

            <form
              onSubmit={handleAppointment}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border rounded-xl p-4"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border rounded-xl p-4"
              />

              <input
                type="date"
                name="date"
                required
                className="w-full border rounded-xl p-4"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Describe your dental concern"
                className="w-full border rounded-xl p-4"
              />

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl text-lg font-bold"
              >
                Book Appointment
              </button>

            </form>

          </div>

        </div>

      </section>
            {/* GOOGLE MAP */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-5xl font-bold">
              Visit Our Clinic
            </h2>

            <p className="text-gray-600 mt-5 text-xl">
              Dr. Bhuvan's Dental Laser & Implant Centre,
              Ameerpet, Hyderabad.
            </p>

          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Dr+Bhuvan's+Dental+Laser+%26+Implant+Centre+Hyderabad&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </section>

      {/* FLOATING BUTTONS */}

      <a
        href="https://wa.me/918074528763"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        💬
      </a>

      <a
        href="tel:+918074528763"
        className="fixed bottom-28 right-6 bg-orange-600 hover:bg-orange-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        📞
      </a>

      {/* FOOTER */}

      <footer className="bg-gray-900 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-bold text-orange-500">
              Dr. Bhuvan's Dental
            </h2>

            <p className="mt-5 text-gray-300 leading-8">

              Advanced Dental Implants,
              Laser Dentistry,
              Cosmetic Dentistry,
              Root Canal Treatment,
              Gum Care and Complete Oral Rehabilitation.

            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-5">
              Contact
            </h3>

            <p className="text-gray-300">
              📞 +91 8074528763
            </p>

            <p className="text-gray-300 mt-3">
              📧 ybhuvan7@gmail.com
            </p>

            <p className="text-gray-300 mt-3">
              📍 Ameerpet,
              Hyderabad
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-5">
              Working Hours
            </h3>

            <p className="text-gray-300">
              Monday – Saturday
            </p>

            <p className="text-gray-300 mt-3">
              10:00 AM – 9:00 PM
            </p>

            <a
              href="https://g.page/r/Cb9Tvhf5l8RPEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl font-semibold"
            >
              Leave Google Review
            </a>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">

          © 2026 Dr. Bhuvan's Dental Laser & Implant Centre.
          All Rights Reserved.

        </div>

      </footer>

    </main>

  );

}