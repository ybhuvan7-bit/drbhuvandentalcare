export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-orange-600">
            🦷 Dr. Bhuvan's
          </h1>

          <p className="text-xs text-gray-500">
            Dental Laser & Implant Centre
          </p>
        </div>

        <ul className="hidden lg:flex gap-8 text-gray-700 font-semibold">

          <li><a href="#">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#services">Services</a></li>

          <li><a href="#gallery">Gallery</a></li>

          <li><a href="#reviews">Reviews</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        <a
          href="#appointment"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Book Appointment
        </a>
<a
  href="https://g.page/r/Cb9Tvhf5l8RPEBM/review"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-500 hover:text-white transition"
>
  ⭐ Reviews
</a>
      </div>
    </nav>
  );
}