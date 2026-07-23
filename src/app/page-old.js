"use client";

import GoogleReviews from "./components/GoogleReviews";
import Image from "next/image";
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

      <section
  id="home"
  className="relative min-h-screen overflow-hidden pt-28"
>
        <Image
  src="/doctor.webp"
  alt="Dr. Bhuvanesh Yanamala"
  fill
  priority
  quality={85}
  className="absolute inset-0 object-cover"
/>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

          <div className="max-w-2xl space-y-6">

            <span className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base whitespace-nowrap">
              ⭐ 4.9 Google Rating • 121+ Reviews
            </span>

            <h1 className="text-[54px] sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] text-white mt-1">
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
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

<a
href="#appointment"
className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-center"
>
📅 Book Appointment
</a>

<a
href="tel:+918074528763"
className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-center"
>
📞 Call Now
</a>

<a
href="https://wa.me/918074528763"
target="_blank"
className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-center"
>
💬 WhatsApp
</a>

</div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

<div className="bg-black/45 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center shadow-2xl hover:-translate-y-2 hover:bg-white/20 transition-all duration-300">
<h2 className="text-3xl font-bold text-orange-300">5000+</h2>
<p className="text-white">Happy Patients</p>
</div>

<div className="bg-black/45 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center shadow-2xl hover:-translate-y-2 hover:bg-white/20 transition-all duration-300">
<h2 className="text-3xl font-bold text-orange-300">1000+</h2>
<p className="text-white">Dental Implants</p>
</div>

<div className="bg-black/45 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center shadow-2xl hover:-translate-y-2 hover:bg-white/20 transition-all duration-300">
<h2 className="text-3xl font-bold text-orange-300">4.9★</h2>
<p className="text-white">Google Rating</p>
</div>

<div className="bg-black/45 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center shadow-2xl hover:-translate-y-2 hover:bg-white/20 transition-all duration-300">
<h2 className="text-3xl font-bold text-orange-300">Laser</h2>
<p className="text-white">Modern Dentistry</p>
</div>

</div>

          </div>

        </div>

      </section>
            {/* DOCTOR */}

      <section
  id="about"
  className="py-24 bg-white"
>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <Image
  src="/doctor.webp"
  alt="Dr. Bhuvanesh Yanamala"
  width={700}
  height={850}
  quality={85}
  className="rounded-3xl shadow-2xl w-full h-auto"
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

      <section
  id="services"
  className="py-24 bg-gray-100"
>

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

      <section
  id="reviews"
  className="py-24 bg-orange-50"
>

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

            

          </div>

        </div>

      </section>

      {/* Expert Dental Blogs */}

<section className="py-24 bg-gray-50">
  <div className="text-center mb-14">

  <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
    Expert Dental Blogs
  </p>

  <h2 className="text-5xl font-bold mt-2">
    Latest Dental Articles
  </h2>

  <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
    Read expert articles by Dr. Bhuvanesh Yanamala on dental implants,
    root canal treatment, laser dentistry, gum disease, teeth cleaning
    and other oral health topics.
  </p>

</div>

  <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-10 text-white shadow-2xl mb-12">

<p className="uppercase tracking-[4px] font-semibold">
Featured Article
</p>

<h2 className="text-4xl font-bold mt-4">
Root Canal Treatment (RCT): Pain, Procedure & Cost
</h2>

<p className="mt-5 text-lg text-orange-100 max-w-3xl">
Everything you need to know about Root Canal Treatment, including
pain, procedure, recovery, benefits and cost explained by
Dr. Bhuvanesh Yanamala.
</p>

<a
href="https://drbhuvandental.blogspot.com/2026/07/root-canal-treatment-rct-pain-procedure.html"
target="_blank"
rel="noopener noreferrer"
className="inline-block mt-8 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-100 transition"
>
Read Featured Article →
</a>

</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
{
  title: "Root Canal Treatment (RCT)",
  image: "/blogs/rct.webp",
  description: "Learn about RCT procedure, pain, recovery and treatment benefits.",
  link: "https://drbhuvandental.blogspot.com/2026/07/root-canal-treatment-rct-pain-procedure.html",
},
{
  title: "Tooth Pain: Causes & Treatment",
  image: "/blogs/toothpain.webp",
  description: "Understand common causes of tooth pain and available treatment options.",
  link: "https://drbhuvandental.blogspot.com/2026/07/tooth-pain-causes-symptoms-treatment.html",
},
{
  title: "Dental Implants in Hyderabad",
  image: "/blogs/implant.webp",
  description: "Discover permanent tooth replacement with advanced dental implants.",
  link: "https://drbhuvandental.blogspot.com/2026/07/dental-implant-hyderabad-missing-tooth-replacement.html",
},
{
  title: "Is Teeth Cleaning Painful?",
  image: "/blogs/cleaning.webp",
  description: "Know what happens during professional teeth cleaning and whether it hurts.",
  link: "https://drbhuvandental.blogspot.com/2026/06/is-teeth-cleaning-painful-truth-behind.html",
},
{
  title: "5 Early Signs of Gum Disease",
  image: "/blogs/gum.webp",
  description: "Identify gum disease early to protect your teeth and gums.",
  link: "https://drbhuvandental.blogspot.com/2026/05/5-early-signs-of-gum-disease-you-should.html",
},
{
  title: "Benefits of Laser Dentistry",
  image: "/blogs/laser.webp",
  description: "Explore painless and advanced laser dental treatments.",
  link: "https://drbhuvandental.blogspot.com/2026/05/benefits-of-laser-dentistry-in-modern.html",
},
].map((blog,index)=>(

<div
  key={index}
  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
>

  <Image
    src={blog.image}
    alt={blog.title}
    width={600}
    height={350}
    className="w-full h-56 object-cover"
  />

  <div className="p-6">

    <h3 className="text-2xl font-bold">
      {blog.title}
    </h3>

    <p className="text-gray-600 mt-3">
      {blog.description}
    </p>

    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 text-orange-600 font-bold hover:text-orange-700"
    >
      Read Article →
    </a>

  </div>

</div>

))}
</div>
<div className="text-center mt-14">

<a
href="https://drbhuvandental.blogspot.com"
target="_blank"
rel="noopener noreferrer"
className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition"
>
📚 View All Articles
</a>

</div>

</section>

      {/* GALLERY */}

      <section
  id="gallery"
  className="py-24 bg-white"
>

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

{/* OUR CLINIC GALLERY */}

<section
  id="clinic-gallery"
  className="py-20 bg-white"
>

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-14">

<p className="text-orange-500 uppercase tracking-[4px] font-semibold">
Our Clinic
</p>

<h2 className="text-4xl font-bold mt-2">
Clinic Gallery
</h2>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
Take a virtual tour of Dr. Bhuvan's Dental Laser & Implant Centre in
Ameerpet, Hyderabad. Our modern dental clinic is designed for comfort,
safety and advanced dental care.
</p>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{[
"/clinic/clinic1.webp",
"/clinic/clinic2.webp",
"/clinic/clinic3.webp",
"/clinic/clinic4.webp",
"/clinic/clinic5.webp",
"/clinic/clinic6.webp",
"/clinic/clinic7.webp",
"/clinic/clinic8.webp",
].map((image, index) => (
  <div
    key={index}
    className="overflow-hidden rounded-2xl shadow-lg group"
  >
    <Image
      src={image}
      alt={`Dr. Bhuvan's Dental Clinic - ${index + 1}`}
      width={600}
      height={600}
      className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
    />
  </div>
))}

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

      <section
  id="contact"
  className="py-24 bg-white"
>

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
        className="fixed bottom-6 md:bottom-6 right-4 md:right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-2xl z-50"
      >
        💬
      </a>

      <a
        href="tel:+918074528763"
        className="fixed bottom-24 md:bottom-28 right-4 md:right-6 bg-orange-600 hover:bg-orange-700 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-2xl z-50"
      >
        📞
      </a>
<section className="max-w-7xl mx-auto px-6 py-20">

<h2 className="text-4xl font-bold text-center mb-12">
Frequently Asked Questions
</h2>

<div className="space-y-6">

<div className="border rounded-xl p-6">
<h3 className="text-xl font-bold">
How much do dental implants cost in Hyderabad?
</h3>
<p className="mt-3 text-gray-600">
The cost depends on the implant system and individual case. Visit Dr. Bhuvan's Dental Laser & Implant Centre for a personalized consultation.
</p>
</div>

<div className="border rounded-xl p-6">
<h3 className="text-xl font-bold">
Is laser dentistry painful?
</h3>
<p className="mt-3 text-gray-600">
Laser dentistry is minimally invasive and usually causes less pain, less bleeding and faster healing than conventional procedures.
</p>
</div>

<div className="border rounded-xl p-6">
<h3 className="text-xl font-bold">
How often should I get my teeth cleaned?
</h3>
<p className="mt-3 text-gray-600">
Most patients should undergo professional teeth cleaning every 6 months. Some patients with gum disease may require more frequent visits.
</p>
</div>

<div className="border rounded-xl p-6">
<h3 className="text-xl font-bold">
Do you provide emergency dental treatment?
</h3>
<p className="mt-3 text-gray-600">
Yes. We provide emergency dental care for tooth pain, swelling, trauma and other urgent dental problems.
</p>
</div>

</div>

</section>
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