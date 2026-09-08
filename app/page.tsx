import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SiteSimulator from '@/components/SiteSimulator';
import Projects from '@/components/Projects';
import ClientsMap from '@/components/ClientsMap';
import Founders from '@/components/Founders';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <SiteSimulator />
        <Projects />
        <ClientsMap />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
