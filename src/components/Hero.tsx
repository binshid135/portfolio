import { JSX } from "react";
import Image from "next/image";

// components/Hero.tsx
export default function Hero(): JSX.Element {
  return (
    <div className="flex flex-col-reverse md:flex-row items-end relative">
      {/* Left */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-10 md:py-20 z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">Hi! I'm</h2>
        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight outline-text whitespace-nowrap">
          Ahammed Binsid
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6 max-w-md">
          I'm a Full Stack Developer specializing in React.js, Next.js, Node.js,
          Express.js, MongoDB, Angular and React Native. Passionate about
          building scalable web and mobile applications with a strong focus
          on user experience and performance optimization.
        </p>
        <button className="relative w-32 md:w-40 py-2 font-semibold text-black border border-black shadow-[4px_4px_0px_black] hover:bg-black hover:text-white transition">
          Hire ME
        </button>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex items-end justify-center relative mb-8 md:mb-0">
        <Image
          src="/portimage.png"
          alt="Ahammed Binsid"
          width={800}
          height={600}
          className="w-full max-w-xs md:max-w-[600px] h-auto rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
