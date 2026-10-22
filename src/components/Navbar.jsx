import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 12);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const linkClass = (id) => (activeSection === id ? 'is-active' : undefined);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        druti<span>.</span>
      </a>

      <div className="navbar-links">
        <a href="#about" className={linkClass('about')}>About</a>
        <a href="#skills" className={linkClass('skills')}>Skills</a>
        <a href="#projects" className={linkClass('projects')}>Projects</a>
        <a href="#experience" className={linkClass('experience')}>Experience</a>
      </div>

      <div className="navbar-actions">
        <ThemeToggle />

        <a href="#contact" className="navbar-contact">
          Let's Talk <span>↗</span>
        </a>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;
