import './Hero.css';
import { Download, ArrowUpRight, MapPin } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';


function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 140, damping: 18 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-9, 9]), { stiffness: 140, damping: 18 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className="hero" id="home">
      <motion.div
  className="hero-content"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
        <div className="hero-status">
          <span className="status-dot"></span>
          Available for software engineering opportunities
        </div>

        <p className="hero-eyebrow">HELLO, I'M</p>

        <h1>
          Druti Ghag<span className="hero-period">.</span>
        </h1>

        <h2>
          Software Engineer building
          <span> meaningful digital experiences.</span>
        </h2>

        <p className="hero-description">
          I develop enterprise web applications using C#, ASP.NET Core,
          Angular, JavaScript and MySQL. I enjoy solving problems,
          building intuitive interfaces and turning complex requirements
          into reliable software.
        </p>

        <div className="hero-location">
          <MapPin size={16} />
          Mumbai, India
        </div>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore my work <ArrowUpRight size={18} />
          </a>

          <a
            href="/Druti_Ghag_Software_Engineer_Resume-1.pdf"
            className="button button-secondary"
            download
          >
            Resume <Download size={17} />
          </a>
        </div>

        

<div className="hero-socials">
  <a
    href="https://github.com/DrutiGhag"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub profile"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.02.75 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
    GitHub
  </a>

 
<a
  href="https://www.linkedin.com/in/druti-ghag-1b4582400/"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn profile"
>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.95V9.3h2.98v9.6ZM6.44 7.99a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19.05 18.9h-2.97v-4.67c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.75H9.77V9.3h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.56v5.28Z" />
    </svg>
    LinkedIn
  </a>
</div>


      </motion.div>

      <motion.div
  className="hero-visual"
  initial={{ opacity: 0, scale: 0.96, x: 20 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
  onPointerMove={handlePointerMove}
  onPointerLeave={resetTilt}
>
        <motion.div className="hero-image-frame" style={{ rotateX, rotateY, transformPerspective: 900 }}>
          <div className="hero-image-glow"></div>

          <img
            src="/druti-profile.png"
            alt="Druti Ghag, Software Engineer"
            className="hero-image"
          />

          <div className="hero-image-label">
            <span className="label-indicator"></span>
            Software Engineer
          </div>
        </motion.div>

        <div className="floating-card floating-card-top">
          <span className="floating-card-icon">{"{ }"}</span>
          <div>
            <strong>Full Stack</strong>
            <p>Development</p>
          </div>
        </div>

        <div className="floating-card floating-card-bottom">
          <span className="floating-card-icon">✦</span>
          <div>
            <strong>Always learning</strong>
            <p>Always building</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
