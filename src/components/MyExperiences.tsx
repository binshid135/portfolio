import React from "react";
import Image from "next/image";

const experiences = [
  {
    role: "React Native Developer Intern",
    company: "Grabbzo",
    period: "Jan 2025 – Present",
    description:
      "Building and maintaining a food delivery platform with dedicated apps for restaurants and customers. Focused on smooth navigation, TypeScript-based state management, and API integrations while collaborating with designers and backend developers. Debugging and optimizing performance across iOS and Android.",
    image: "/grabbzo.png", // company/app image
    skills: ["React Native CLI", "TypeScript", "API Integration", "Mobile UI/UX", "Next.js"],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Riss Technologies",
    period: "Jun 2024 – Dec 2024",
    description:
      "Developed full-stack web applications using the MERN stack. Integrated third-party APIs, optimized database queries (30% faster), and ensured responsive, scalable performance across devices.",
    image: "/rissimage.png", // company logo/screenshot
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "API Development"],
  },
];

const MyExperiences = () => (
  <section className="flex-1 px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center md:text-left">
      <h2 className="text-5xl md:text-7xl text-black font-extrabold mb-6 tracking-tight leading-tight">
        Professional <br className="hidden sm:inline" /> Experiences
      </h2>
      <hr className="border-t-4 border-gray-300 mb-6 w-full max-w-4xl mx-auto md:mx-0" />
      <p className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto md:mx-0 leading-relaxed mb-12">
        My journey of building scalable, high-impact applications — and learning fast along the way.
      </p>
    </div>

    {/* Experience Timeline Style */}
    <div className="space-y-16 md:space-y-24 relative">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className={`flex flex-col ${
            idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8`}
        >
          {/* Image with gradient border */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-50 p-[2px] shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.company}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-black mb-2">{exp.role}</h3>
            <p className="text-gray-600 text-lg mb-3 font-medium">
              {exp.company} · {exp.period}
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              {exp.description}
            </p>

            {/* Skills / Tech Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Call to Action */}
    <div className="mt-20 text-center">
      <p className="text-xl md:text-2xl font-semibold text-gray-800">
        🚀 Open to exciting opportunities — let’s build something amazing together!
      </p>
      <a
        href="mailto:ahmedbinshid@gmail.com"
        className="mt-6 inline-block px-6 py-3 text-lg font-bold rounded-full bg-black text-white hover:bg-gray-800 transition"
      >
        Hire Me →
      </a>
    </div>
  </section>
);

export default MyExperiences;
