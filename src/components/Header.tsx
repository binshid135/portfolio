// components/Header.tsx
import Navbar from './Navbar';
import Hero from './Hero';
import { JSX } from 'react';

export default function Header(): JSX.Element {
  return (
    <header className="relative w-full overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white"></div>
        <div
          className="w-1/2"
          style={{ backgroundColor: "rgb(249, 255, 215)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
}