
import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import TechMarquee from './components/TechMarquee';
import BackToTop from './components/BackToTop';
import useSpotlight from './hooks/useSpotlight';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  useSpotlight();

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}

export default App;
