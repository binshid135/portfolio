import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  { title: "STRUCTORA", description: "Integrated Control for Construction & Finance. The all-in-one platform for contractors and consultants manages contracts, BOQs, progress claims, payments, variation orders, and project schedules with real-time financial and execution alerts. Developed with React and Django.", image: "/structora.png", link: "https://structora-frontend.vercel.app" },
  { title: "Shop House Al-ain", description: "Shop House Al Ain is a local business in Al Ain, combining a restaurant and a household items store. I developed a full-stack website for them as a freelance project, using Next.js for both frontend and backend, Neon for the database, Cloudinary for image storage and optimization, and Vercel for serverless deployment.", image: "/shophouseimage.png", link: "https://www.shophousealain.com" },
  { title: "Grabbzo Mobile App", description: "A smart dining app that helps users skip the wait by browsing restaurants, viewing menus, and placing orders for dine-in or pickup. Built with React Native CLI and TypeScript, featuring smooth navigation, state management, and API integrations, optimized for both iOS and Android.", image: "/grabbzo.png", link: "https://play.google.com/store/apps/details?id=com.grabbzo.customer&pcampaignid=web_share" },
  { title: "2ndChanceFoods", description: "A prison food production and management system designed to help manage and market food products made by inmates. I built features for user management, product orders, inventory, and delivery to streamline operations.", image: "/2ndchance.png", link: "https://github.com/binshid135/2ndchancefoods" },
  { title: "Caramarkets Trading Platform", description: "A comprehensive trading platform homepage frontend mockup built with Next.js, featuring a sleek, modern design and responsive layout.", image: "/caramarket.png", link: "https://caramarkets-one.vercel.app/" },
];

export default function Projects() {
  return <section className="border-y border-black/5 bg-white py-20 md:py-28"><div className="section-shell">
    <div className="mb-11 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow mb-3">Selected work</p><h2 className="display text-4xl font-extrabold md:text-5xl">Featured <span className="text-[#a6c343]">Projects</span></h2></div><a href="#experience" className="text-sm font-bold underline decoration-[#b6d653] decoration-2 underline-offset-4">Explore my experience →</a></div>
    <div className="grid gap-5 md:grid-cols-2">{projects.map((project, index) => <article key={project.title} className="group overflow-hidden rounded-2xl border border-black/10 bg-[#fcfcf8] p-3 transition hover:-translate-y-1 hover:shadow-xl">
      {project.link ? <a href={project.link} target="_blank" rel="noreferrer"><ProjectContent project={project} index={index} linked /></a> : <ProjectContent project={project} index={index} />}
    </article>)}</div>
  </div></section>;
}

function ProjectContent({ project, index, linked = false }: { project: Project; index: number; linked?: boolean }) {
  return <><div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#e9ebdf]"><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="px-2 pb-2 pt-5"><p className="mb-2 text-xs font-bold uppercase tracking-[.15em] text-[#75951a]">Project {String(index + 1).padStart(2, "0")}</p><h3 className="display text-2xl font-extrabold">{project.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-[#626673]">{project.description}</p>{linked && <span className="mt-5 inline-block text-sm font-bold">View project&nbsp; ↗</span>}</div></>;
}
