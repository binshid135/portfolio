import { JSX } from "react";

// components/Footer.tsx
export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      &copy; {currentYear} Ahammed Binsid. All rights reserved.
    </footer>
  );
}