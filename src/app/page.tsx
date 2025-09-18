// app/page.tsx
import Header from '../components/Header';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import MyExperiences from '@/components/MyExperiences';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <Stats />
      <Projects />
      <MyExperiences />
      <Footer />
    </div>
  );
}