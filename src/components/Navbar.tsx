"use client"
import { useState } from "react";
import { JSX } from "react";

// components/Navbar.tsx
interface SocialLink {
  icon: string;
  href: string;
}

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const socialLinks: SocialLink[] = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-pinterest-p", href: "#" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-6 relative">
      <div className="text-xl font-bold tracking-tight text-black">
        Ahammed <br></br>Binsid.
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-6 bg-black mb-1 transition-all ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-black mb-1 transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-black transition-all ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
        <li>
          <a href="#" className="hover:underline">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About me
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Reviews
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Projects
          </a>
        </li>
      </ul>

      {/* Desktop Socials */}
      <div className="md:flex gap-4 text-gray-600 text-lg">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <i className={link.icon}></i>
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 flex flex-col items-center py-4 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium mb-4">
            <li>
              <a
                href="#"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
          </ul>
          <div className="flex gap-4 text-gray-600 text-lg">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}