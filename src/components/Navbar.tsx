import { JSX } from "react";

// components/Navbar.tsx
interface SocialLink {
  icon: string;
  href: string;
}

export default function Navbar(): JSX.Element {
  const socialLinks: SocialLink[] = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-pinterest-p", href: "#" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <div className="text-xl font-bold tracking-tight text-black">
        Ahammed Binsid.
      </div>
      <ul className="flex gap-8 text-gray-800 font-medium">
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
      <div className="flex gap-4 text-gray-600 text-lg">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
    </nav>
  );
}