import Header from '../components/Header';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import MyExperiences from '@/components/MyExperiences';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans scroll-smooth">
      <section id="header">
        <Header />
      </section>
      {/* Stats Section */}
      <section id="stats">
        <Stats />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Experiences Section */}
      <section id="experience">
        <MyExperiences />
      </section>

      <Footer />
    </div>
  );
}
