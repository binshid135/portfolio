import Image from "next/image";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Al Yafour Construction",
    period: "Apr 2026 – Present",
    description: "Developing and maintaining construction-focused ERP software, including project-management workflows, internal business tools, scalable frontend and backend features, REST APIs, and database systems.",
    image: "/structora.png",
    imageClass: "object-cover",
    skills: ["React", "Django", "REST APIs", "Databases", "ERP Systems"],
  },
  {
    role: "React Native Developer",
    company: "Grabbzo",
    period: "Jan 2025 – Present",
    description: "Building and maintaining a food delivery platform with dedicated apps for restaurants and customers. Focused on smooth navigation, TypeScript-based state management, and API integrations while collaborating with designers and backend developers.",
    image: "/grabbzo.png",
    imageClass: "object-cover",
    skills: ["React Native CLI", "TypeScript", "API Integration", "Mobile UI/UX", "Next.js"],
  },
  {
    role: "MERN Stack Developer",
    company: "Riss Technologies",
    period: "Jun 2024 – Dec 2024",
    description: "Developed full-stack web applications using the MERN stack. Integrated third-party APIs, optimized database queries, and ensured responsive, scalable performance across devices.",
    image: "/riss_technologies_logo.jpeg",
    imageClass: "object-contain p-7",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "API Development"],
  },
];

export default function MyExperiences() {
  return <section className="section-shell py-20 md:py-28">
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow mb-3">Career journey</p>
      <h2 className="display text-4xl font-extrabold md:text-5xl">Where I&apos;ve <span className="text-[#a6c343]">worked</span></h2>
      <p className="mt-5 leading-7 text-[#626673]">My journey of building scalable, high-impact applications — and learning fast along the way.</p>
    </div>
    <div className="grid gap-6">
      {experiences.map((exp, index) => <article key={exp.company} className="grid overflow-hidden rounded-2xl border border-black/10 bg-white md:grid-cols-[260px_1fr]">
        <div className="relative min-h-52 bg-[#f0f3e4] md:min-h-full">
          <Image src={exp.image} alt={`${exp.company} project`} fill sizes="(max-width: 768px) 100vw, 260px" className={exp.imageClass} />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-sm font-bold text-[#769719]">{String(index + 1).padStart(2, "0")} / {exp.period}</p>
          <h3 className="display mt-2 text-2xl font-extrabold">{exp.role}</h3>
          <p className="mt-1 font-semibold">{exp.company}</p>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-[#626673]">{exp.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">{exp.skills.map(skill => <span key={skill} className="rounded-full bg-[#eef5d4] px-3 py-1.5 text-xs font-semibold text-[#4f6910]">{skill}</span>)}</div>
        </div>
      </article>)}
    </div>
  </section>;
}
