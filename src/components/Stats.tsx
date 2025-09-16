import { JSX } from "react";

// components/Stats.tsx
interface StatItem {
  value: string;
  label: string;
}

export default function Stats(): JSX.Element {
  const stats: StatItem[] = [
    { value: "120+", label: "Successful projects" },
    { value: "10+", label: "Years of experience" },
    { value: "1000+", label: "Cups of coffee" },
  ];

  return (
    <section className="py-20 md:py-24 px-8 md:px-20 text-center grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-7xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <h3 className="text-5xl md:text-8xl font-extrabold mb-4 md:mb-6 tracking-tight outline-text leading-tight">
            {stat.value}
          </h3>
          <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}