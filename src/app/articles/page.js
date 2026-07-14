export const metadata = {
  title: "Expert Dental Articles | Dr. Bhuvan's Dental Laser & Implant Centre",
  description:
    "Expert blogs on Root Canal Treatment, Dental Implants, Laser Dentistry, Gum Disease, Tooth Pain, Teeth Cleaning and more by Dr. Bhuvanesh Yanamala.",
};

const blogs = [
  {
    title: "Root Canal Treatment (RCT): Pain, Procedure & Cost",
    description:
      "Everything you need to know about Root Canal Treatment including pain, procedure, recovery and benefits.",
    image: "/blogs/rct.webp",
    link: "https://drbhuvandental.blogspot.com/2026/07/root-canal-treatment-rct-pain-procedure.html",
  },

  {
    title: "Tooth Pain: Causes & Treatment",
    description:
      "Understand common causes of tooth pain and available treatment options.",
    image: "/blogs/toothpain.webp",
    link: "https://drbhuvandental.blogspot.com/2026/07/tooth-pain-causes-symptoms-treatment.html",
  },

  {
    title: "Dental Implants in Hyderabad",
    description:
      "Discover permanent tooth replacement with advanced dental implants.",
    image: "/blogs/implant.webp",
    link: "https://drbhuvandental.blogspot.com/2026/07/dental-implant-hyderabad-missing-tooth-replacement.html",
  },

  {
    title: "Is Teeth Cleaning Painful?",
    description:
      "Know what happens during professional teeth cleaning.",
    image: "/blogs/cleaning.webp",
    link: "https://drbhuvandental.blogspot.com/2026/06/is-teeth-cleaning-painful-truth-behind.html",
  },

  {
    title: "5 Early Signs of Gum Disease",
    description:
      "Recognize gum disease before it becomes serious.",
    image: "/blogs/gum.webp",
    link: "https://drbhuvandental.blogspot.com/2026/05/5-early-signs-of-gum-disease-you-should.html",
  },

  {
    title: "Benefits of Laser Dentistry",
    description:
      "Experience painless modern laser dental treatments.",
    image: "/blogs/laser.webp",
    link: "https://drbhuvandental.blogspot.com/2026/05/benefits-of-laser-dentistry-in-modern.html",
  },

  {
    title: "Is Root Canal Treatment Painful?",
    description:
      "Modern root canal treatment is comfortable and virtually painless.",
    image: "/blogs/rootcanal.webp",
    link: "https://drbhuvandental.blogspot.com/2026/05/is-root-canal-treatment-painful-modern.html",
  },

  {
    title: "Braces vs Clear Aligners",
    description:
      "Compare braces and aligners to choose the right treatment.",
    image: "/blogs/braces.webp",
    link: "https://drbhuvandental.blogspot.com/2026/05/braces-vs-clear-aligners-which-is.html",
  },
];

export default function ArticlesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-orange-600 font-semibold">
              Expert Dental Blogs
            </p>

            <h1 className="text-6xl font-bold mt-4">
              Latest Dental Articles
            </h1>

            <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
              Read expert articles by Dr. Bhuvanesh Yanamala on dental implants,
              root canal treatment, laser dentistry, gum disease,
              teeth cleaning and many other oral health topics.
            </p>

          </div>

          {/* FEATURED */}

          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-10 text-white shadow-2xl mb-20">

            <p className="uppercase tracking-[5px] font-semibold">
              Featured Article
            </p>

            <h2 className="text-5xl font-bold mt-5">
              Root Canal Treatment (RCT): Pain, Procedure & Cost
            </h2>

            <p className="mt-6 text-xl text-orange-100 max-w-3xl">
              Everything you need to know about Root Canal Treatment,
              including pain, procedure, recovery, benefits and cost
              explained by Dr. Bhuvanesh Yanamala.
            </p>

            <a
              href="https://drbhuvandental.blogspot.com/2026/07/root-canal-treatment-rct-pain-procedure.html"
              target="_blank"
              className="inline-block mt-10 bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Read Featured Article →
            </a>

          </div>
                    {/* BLOG CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-bold leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mt-5 text-lg leading-8">
                    {blog.description}
                  </p>

                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-8 text-orange-600 font-bold text-lg hover:text-orange-700"
                  >
                    Read Article →
                  </a>

                </div>

              </div>

            ))}

          </div>
                    {/* CALL TO ACTION */}

          <div className="mt-24">

            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl text-white p-12 text-center shadow-2xl">

              <h2 className="text-5xl font-bold">
                Need Expert Dental Care?
              </h2>

              <p className="mt-6 text-xl text-orange-100 max-w-3xl mx-auto">
                Schedule your consultation with Dr. Bhuvanesh Yanamala for
                Dental Implants, Laser Dentistry, Root Canal Treatment,
                Gum Care and Complete Smile Makeover.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">

                <a
                  href="/#appointment"
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
                >
                  📅 Book Appointment
                </a>

                <a
                  href="tel:+918074528763"
                  className="border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-orange-600 transition"
                >
                  📞 Call Now
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}