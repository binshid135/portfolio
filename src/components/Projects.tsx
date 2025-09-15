import React, { JSX } from "react";

// components/Projects.tsx
export default function Projects(): JSX.Element {
  return (
    <main className="flex-1 px-16 py-12 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-6 tracking-tight">
        Case studies & projects
      </h2>
      <hr className="border-t-2 border-gray-300 mb-6" />
      <p className="text-gray-700 text-lg max-w-2xl">
        Showcase your portfolio projects here with images, descriptions, and links.
      </p>
    </main>
  );
}