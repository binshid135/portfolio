import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex w-full h-64">
        {/* Left side - white */}
        <div className="w-1/2 bg-white flex flex-col justify-between p-8">
          {/* Nav */}
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold">Logo</div>
            <ul className="flex gap-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>

          {/* Hero content */}
          <div className="mt-auto">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
            <p className="text-gray-700">
              This is a simple hero section with some introductory text.
            </p>
          </div>
        </div>

        {/* Right side - yellow */}
        <div className="w-1/2 bg-yellow-400 flex items-center justify-center">
          <Image
            src="/next.svg"
            alt="Hero Image"
            width={200}
            height={200}
          />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Main Content</h2>
        <p className="text-gray-700">
          This is the main content area. Add your sections, components, or anything here.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        &copy; 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
}
