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
    <section className="py-16 text-center grid grid-cols-3 gap-6 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index}>
          <h3 className="text-5xl font-extrabold mb-2">{stat.value}</h3>
          <p className="text-lg font-semibold text-gray-800">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}