"use client"
import { useState } from "react";
import { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// components/Navbar.tsx
interface SocialLink {
  icon: any;
  href: string;
}

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const socialLinks: SocialLink[] = [
    // { icon: faFacebookF, href: "#" },
    { icon: faTwitter, href: "#" },
    { icon: faInstagram, href: "#" },
    { icon: faLinkedinIn, href: "#" },
    { icon: faGithub, href: "#" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-6 relative">
      {/* Logo */}
      <div className="text-xl font-bold tracking-tight text-black">
        Ahammed <br /> Binsid.
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-6 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""
            }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        ></span>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#stats" className="hover:underline">
            Stats
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
        </li>
      </ul>


      {/* Desktop Socials */}
      <div className="hidden md:flex gap-4 text-gray-600 text-lg">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 flex flex-col items-center py-4 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium mb-4">
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#stats" onClick={() => setMenuOpen(false)}>
                Stats
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>
          </ul>

          <div className="flex gap-4 text-gray-600 text-lg">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
