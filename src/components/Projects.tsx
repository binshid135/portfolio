import React, { JSX } from "react";

// components/Projects.tsx
export default function Projects(): JSX.Element {
  return (
    <main className="flex-1 px-8 md:px-20 py-16 md:py-20 max-w-7xl mx-auto">
      <div className="text-center md:text-left">
        <h2 className="text-6xl md:text-8xl text-black font-extrabold mb-8 tracking-tight outline-text leading-tight">
          Case studies<br></br> & projects
        </h2>
        <hr className="border-t-4 border-gray-300 mb-8 w-full max-w-4xl mx-auto md:mx-0" />
        <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto md:mx-0 leading-relaxed">
          Showcase your portfolio projects here with images, descriptions, and links.
        </p>
      </div>
    </main>
  );
}