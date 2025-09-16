import { JSX } from "react";
import Image from "next/image";

// components/Hero.tsx
export default function Hero(): JSX.Element {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-end relative max-w-7xl mx-auto">
      {/* Left */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-10 md:py-16 lg:py-20 xl:py-24 z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-4 text-black">
          Hi! I'm
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold mb-4 lg:mb-6 xl:mb-8 tracking-tight outline-text whitespace-nowrap">
          Ahammed Binsid
        </h1>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed mb-6 lg:mb-8 xl:mb-10 max-w-md lg:max-w-lg xl:max-w-xl">
          I'm a Full Stack Developer specializing in React.js, Next.js, Node.js,
          Express.js, MongoDB, Angular and React Native. Passionate about
          building scalable web and mobile applications with a strong focus
          on user experience and performance optimization.
        </p>
        <button className="relative w-32 md:w-36 lg:w-40 xl:w-44 py-2 lg:py-3 xl:py-4 font-semibold text-sm md:text-base lg:text-lg text-black border border-black shadow-[4px_4px_0px_black] hover:bg-black hover:text-white transition-all duration-300 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
          Hire ME
        </button>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2 flex items-end justify-center relative mb-8 lg:mb-0">
        <Image
          src="/portimage.png"
          alt="Ahammed Binsid"
          width={800}
          height={600}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto rounded-lg"
          priority
        />
      </div>
    </div>
  );
}