import React, { JSX } from "react";
import Image from "next/image";

const projects = [
  {
    title: "2ndChanceFoods",
    description: "SecondChanceFoods (June 2024 – September 2024) – A prison food production and management system designed to help manage and market food products made by inmates. I built features for user management, product orders, inventory, and delivery to streamline operations. The front end was developed with React for a responsive experience, while the backend used Node.js and MongoDB for scalability and reliable data storage.",
    image: "/2ndchance.png",
    link: "https://github.com/binshid135/2ndchancefoods",
  },
  {
    title: "Grabbzo Mobile App",
    description:
      "Grabbzo Mobile App – A smart dining app that helps users skip the wait by browsing restaurants, viewing menus, and placing orders for dine-in or pickup. Built with React Native CLI and TypeScript, featuring smooth navigation, state management, and API integrations, optimized for both iOS and Android.",
    image: "/grabbzo.png",
    link: "https://play.google.com/store/apps/details?id=com.grabbzo.customer&pcampaignid=web_share",
  },
  {
    title: "Caramarkets Trading Platform",
    description:
      "Caramarkets Trading Platform – A comprehensive trading platform homepage frontend mockup built with Next.js, featuring a sleek, modern design and responsive layout.",
    image: "/caramarket.png",
    link: "https://caramarkets-one.vercel.app/",
  },
];

export default function Projects(): JSX.Element {
  return (
    <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-20 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-6xl md:text-8xl text-black font-extrabold mb-8 tracking-tight outline-text leading-tight">
          Case studies <br className="hidden sm:inline" /> & projects
        </h2>
        <hr className="border-t-2 md:border-t-4 border-gray-300 mb-6 md:mb-8 w-full max-w-4xl mx-auto md:mx-0" />
        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto md:mx-0 leading-relaxed mb-8 md:mb-12">
          Showcase your portfolio projects here with images, descriptions, and links.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12 md:space-y-16 lg:space-y-20">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-10`}
          >
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 md:mb-4">{proj.title}</h3>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
                {proj.description}
              </p>
              <a
                href={proj.link}
                className="inline-block text-base md:text-lg font-semibold text-black hover:underline"
              >
                Explore more →
              </a>
            </div>

            {/* Image */}
            <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
              <div className="relative aspect-video md:aspect-[4/3] lg:aspect-video">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={800}
                  height={600}
                  className="object-cover
                    shadow-[-8px_-8px_0px_rgb(239,239,239),8px_8px_0px_black] 
                    md:shadow-[-10px_-10px_0px_rgb(239,239,239),10px_10px_0px_black]
                    lg:shadow-[-12px_-12px_0px_rgb(239,239,239),12px_12px_0px_black]
                    hover:text-white 
                    transition-all duration-300 
                    hover:shadow-[-12px_-12px_0px_rgb(239,239,239),12px_12px_0px_rgba(0,0,0,0.3)]
                    md:hover:shadow-[-16px_-16px_0px_rgb(239,239,239),16px_16px_0px_rgba(0,0,0,0.3)]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}