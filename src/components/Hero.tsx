import { JSX } from "react";

// components/Hero.tsx
export default function Hero(): JSX.Element {
  return (
    <div className="flex items-center">
      {/* Left */}
      <div className="w-1/2 flex flex-col justify-center px-16 py-20">
        <h2 className="text-3xl font-bold mb-2 text-black">Hi! I'm</h2>
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight outline-text">
          Ahammed Binsid
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6 max-w-md">
          I'm a Full Stack Developer specializing in React.js, Next.js, Node.js,
          Express.js, MongoDB, Angular and React Native. Passionate about
          building scalable web and mobile applications with a strong focus
          on user experience and performance optimization.
        </p>
        <button className="border-2 text-black border-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition">
          Hire Me
        </button>
      </div>

      {/* Right */}
      <div className="w-1/2 flex items-center justify-center">
        {/* Replace with Image later */}
        {/* <div className="w-[350px ] h-[350px] bg-gray-200 rounded-lg"></div> */}
      </div>
    </div>
  );
}