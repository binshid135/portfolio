import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "XYZ Corp",
    period: "2022-2024",
    description: "Built responsive web apps using React and TypeScript.",
  },
  {
    role: "Intern",
    company: "ABC Solutions",
    period: "2021-2022",
    description: "Assisted in developing internal tools and automation scripts.",
  },
];

const MyExperiences = () => (
  <section className="flex-1 px-8 md:px-20 py-16 md:py-20 max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center md:text-left">
      <h2 className="text-6xl md:text-8xl text-black font-extrabold mb-8 tracking-tight outline-text leading-tight">
        My<br /> Experiences
      </h2>
      <hr className="border-t-4 border-gray-300 mb-8 w-full max-w-4xl mx-auto md:mx-0" />
      <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto md:mx-0 leading-relaxed mb-12">
        A quick look at my professional journey so far.
      </p>
    </div>

    {/* Experience Cards */}
    <div className="grid gap-6 md:grid-cols-2">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            {exp.company} · {exp.period}
          </p>
          <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MyExperiences;
