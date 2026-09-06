import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sistemas from '@/components/Sistemas';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Projects from '@/components/Projects';
import Founders from '@/components/Founders';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Sistemas />
        <Services />
        <Clients />
        <Projects />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
