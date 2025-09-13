import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="relative w-full">
        {/* Background Split */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-white"></div>
          <div className="w-1/2 bg-yellow-200"></div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Nav */}
          <nav className="flex justify-between items-center px-10 py-6">
            <div className="text-2xl font-bold">Ahammed Binsid.</div>
            <ul className="flex gap-8 text-gray-800 font-medium">
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">About me</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Projects</a></li>
            </ul>
            <div className="flex gap-4 text-gray-600 text-xl">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </nav>

          {/* Hero */}
          <div className="flex">
            {/* Left side */}
            <div className="w-1/2 flex flex-col justify-center px-16 py-20">
              <h2 className="text-3xl font-bold">Hi! I’m</h2>
              <h1 className="text-6xl font-extrabold mb-6">Ahammed Binsid</h1>
              <p className="text-gray-700 mb-6">
                I’m a Full Stack Developer specializing in React.js, Next.js, Node.js, 
                Express.js, MongoDB, Angular and React Native. Passionate about 
                building scalable web and mobile applications with a strong focus 
                on user experience and performance optimization.
              </p>
              <button className="border-2 border-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition">
                Hire Me
              </button>
            </div>

            {/* Right side */}
            <div className="w-1/2 flex items-center justify-center">
              {/* <Image
                src="/my-photo.png"
                alt="Ahammed Binsid"
                width={350}
                height={350}
                className="rounded-lg"
              /> */}
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 text-center grid grid-cols-3 gap-6">
        <div>
          <h3 className="text-4xl font-extrabold">120+</h3>
          <p className="text-lg font-semibold">Successful projects</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">10+</h3>
          <p className="text-lg font-semibold">Years of experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">1000+</h3>
          <p className="text-lg font-semibold">Cups of coffee</p>
        </div>
      </section>

      {/* Projects Section */}
      <main className="flex-1 px-16 py-12">
        <h2 className="text-4xl font-bold mb-8">Case studies & projects</h2>
        <p className="text-gray-700">
          Showcase your portfolio projects here with images, descriptions, and links.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        &copy; 2025 Ahammed Binsid. All rights reserved.
      </footer>
    </div>
  );
}
