"use client";

import { useEffect, useState } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white/95 backdrop-blur-md shadow-xl py-0"
      : "bg-transparent py-2"
  }`}
>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className={`text-2xl font-bold transition ${
  scrolled ? "text-orange-600" : "text-white"
}`}>
            🦷 Dr. Bhuvan's
          </h1>

          <p className={`text-xs transition ${
  scrolled ? "text-gray-500" : "text-gray-200"
}`}>
            Dental Laser & Implant Centre
          </p>
        </div>

        <ul className={`hidden lg:flex gap-8 font-semibold transition ${
  scrolled ? "text-gray-700" : "text-white"
}`}>

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