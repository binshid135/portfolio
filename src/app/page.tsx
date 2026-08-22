import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import MyExperiences from '@/components/MyExperiences';

export default function Home() { return <main className="min-h-screen overflow-x-clip"><Navbar /><Header /><section id="projects"><Projects /></section><section id="experience"><MyExperiences /></section><Footer /></main>; }
