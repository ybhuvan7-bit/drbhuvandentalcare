export const metadata = {
  title: "Dental Articles | Dr. Bhuvan's Dental Laser & Implant Centre",
  description:
    "Read expert dental articles on root canal treatment, dental implants, gum disease, laser dentistry, tooth pain, teeth cleaning and more.",
};

const blogs = [
  {
    title: "Root Canal Treatment (RCT): Pain, Procedure & Cost",
    link: "https://drbhuvandental.blogspot.com/2026/07/root-canal-treatment-rct-pain-procedure.html",
  },
  {
    title: "Tooth Pain: Causes, Symptoms & Treatment",
    link: "https://drbhuvandental.blogspot.com/2026/07/tooth-pain-causes-symptoms-treatment.html",
  },
  {
    title: "Meet Dr. Bhuvanesh Yanamala",
    link: "https://drbhuvandental.blogspot.com/2026/07/dr.html",
  },
  {
    title: "Dental Implants in Hyderabad",
    link: "https://drbhuvandental.blogspot.com/2026/07/dental-implant-hyderabad-missing-tooth-replacement.html",
  },
  {
    title: "Is Teeth Cleaning Painful?",
    link: "https://drbhuvandental.blogspot.com/2026/06/is-teeth-cleaning-painful-truth-behind.html",
  },
  {
    title: "5 Early Signs of Gum Disease",
    link: "https://drbhuvandental.blogspot.com/2026/05/5-early-signs-of-gum-disease-you-should.html",
  },
  {
    title: "Benefits of Laser Dentistry",
    link: "https://drbhuvandental.blogspot.com/2026/05/benefits-of-laser-dentistry-in-modern.html",
  },
  {
    title: "Is Root Canal Treatment Painful?",
    link: "https://drbhuvandental.blogspot.com/2026/05/is-root-canal-treatment-painful-modern.html",
  },
  {
    title: "Braces vs Clear Aligners",
    link: "https://drbhuvandental.blogspot.com/2026/05/braces-vs-clear-aligners-which-is.html",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">
            Expert Dental Articles
          </h1>

          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about Dental Implants, Root Canal Treatment, Laser Dentistry,
            Gum Disease, Teeth Cleaning and many more dental topics written by
            Dr. Bhuvanesh Yanamala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border hover:-translate-y-2"
            >
              <div className="text-5xl mb-5">🦷</div>

              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                {blog.title}
              </h2>

              <span className="text-orange-600 font-semibold">
                Read Article →
              </span>
            </a>
          ))}

        </div>
      </div>
    </main>
  );
}