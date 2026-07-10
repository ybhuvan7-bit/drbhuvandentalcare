"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div>
              <h1
                className={`text-xl md:text-2xl font-bold transition ${
                  scrolled ? "text-orange-600" : "text-white"
                }`}
              >
                🦷 Dr. Bhuvan's
              </h1>

              <p
                className={`text-[10px] md:text-xs transition ${
                  scrolled ? "text-gray-500" : "text-gray-200"
                }`}
              >
                Dental Laser & Implant Centre
              </p>
            </div>

            {/* Desktop Menu */}
            <ul
              className={`hidden lg:flex gap-8 font-semibold transition ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-4">
              <a
                href="#appointment"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Book Appointment
              </a>

              <a
                href="https://g.page/r/Cb9Tvhf5l8RPEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-semibold transition"
              >
                ⭐ Reviews
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
            >
              {menuOpen ? (
                <X
                  size={30}
                  className={scrolled ? "text-black" : "text-white"}
                />
              ) : (
                <Menu
                  size={30}
                  className={scrolled ? "text-black" : "text-white"}
                />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">

          {/* Dark Background */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu}
          />

          {/* Menu */}
          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6">

            <div className="space-y-5">

              <a href="#" onClick={closeMenu} className="block text-gray-700 font-medium">Home</a>

              <a href="#about" onClick={closeMenu} className="block text-gray-700 font-medium">About</a>

              <a href="#services" onClick={closeMenu} className="block text-gray-700 font-medium">Services</a>

              <a href="#gallery" onClick={closeMenu} className="block text-gray-700 font-medium">Gallery</a>

              <a href="#reviews" onClick={closeMenu} className="block text-gray-700 font-medium">Reviews</a>

              <a href="#contact" onClick={closeMenu} className="block text-gray-700 font-medium">Contact</a>

              <hr />

              <a
                href="#appointment"
                onClick={closeMenu}
                className="block bg-orange-600 text-white text-center py-3 rounded-full font-semibold"
              >
                📅 Book Appointment
              </a>

              <a
                href="https://g.page/r/Cb9Tvhf5l8RPEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-2 border-orange-500 text-orange-600 text-center py-3 rounded-full font-semibold"
              >
                ⭐ Reviews
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
}