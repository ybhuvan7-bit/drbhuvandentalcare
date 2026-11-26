
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isContactPage = pathname === "/contact-us";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Homepage and Contact page have separate colour behaviour
  const navbarStyle = isContactPage
    ? scrolled
      ? "bg-[#FFFCF7]/95 backdrop-blur-xl shadow-lg border-b border-[#EDE5DA]"
      : "bg-[#FFFCF7]/80 backdrop-blur-sm shadow-sm"
    : scrolled
      ? "bg-white/95 backdrop-blur-md shadow-xl"
      : "bg-transparent";

  const textStyle =
    isContactPage || scrolled
      ? "text-gray-800"
      : "text-white";

  const logoStyle =
    isContactPage || scrolled
      ? "text-orange-700"
      : "text-white";

  const subtitleStyle =
    isContactPage || scrolled
      ? "text-gray-600"
      : "text-gray-200";

  const iconStyle =
    isContactPage || scrolled
      ? "text-gray-900"
      : "text-white";

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navbarStyle}`}
      >
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="/" onClick={closeMenu} className="shrink-0">
              <h1
                className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${logoStyle}`}
              >
                🦷 Dr. Bhuvan's
              </h1>

              <p
                className={`text-[10px] md:text-xs transition-colors duration-300 ${subtitleStyle}`}
              >
                Dental Laser & Implant Centre
              </p>
            </a>

            {/* Desktop Navigation */}
            <ul
              className={`hidden lg:flex gap-8 font-semibold transition-colors duration-300 ${textStyle}`}
            >
              <li>
                <a href="/#home" className="hover:text-orange-600 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/#about" className="hover:text-orange-600 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/#services" className="hover:text-orange-600 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="/#gallery" className="hover:text-orange-600 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="/#reviews" className="hover:text-orange-600 transition">
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="/contact-us"
                  className="hover:text-orange-600 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-4">
              <a
                href="/#appointment"
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

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
            >
              {menuOpen ? (
                <X size={30} className={iconStyle} />
              ) : (
                <Menu size={30} className={iconStyle} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">

          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu}
          />

          <div className="absolute top-20 left-4 right-4 bg-[#FFFCF7] rounded-2xl shadow-2xl p-6">
            <div className="space-y-5">

              <a href="/#home" onClick={closeMenu} className="block text-gray-800 font-medium">
                Home
              </a>

              <a href="/#about" onClick={closeMenu} className="block text-gray-800 font-medium">
                About
              </a>

              <a href="/#services" onClick={closeMenu} className="block text-gray-800 font-medium">
                Services
              </a>

              <a href="/#gallery" onClick={closeMenu} className="block text-gray-800 font-medium">
                Gallery
              </a>

              <a href="/#reviews" onClick={closeMenu} className="block text-gray-800 font-medium">
                Reviews
              </a>

              <a
                href="/contact-us"
                onClick={closeMenu}
                className="block text-orange-700 font-semibold"
              >
                Contact Us
              </a>

              <hr className="border-gray-200" />

              <a
                href="/#appointment"
                onClick={closeMenu}
                className="block bg-orange-600 text-white text-center py-3 rounded-full font-semibold"
              >
                📅 Book Appointment
              </a>

              <a
                href="https://g.page/r/Cb9Tvhf5l8RPEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
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
