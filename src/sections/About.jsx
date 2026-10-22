import Reveal from '../components/Reveal';
import './About.css';
function About() {
  return (
    <section className="about section-container" id="about">
      <Reveal className="section-heading">
        <p className="section-eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          Engineering with <span>purpose.</span>
        </h2>
      </Reveal>

      <div className="about-content">
        <Reveal className="about-intro" delay={0.1}>
          <p>
            I'm Druti Ghag, a software engineer based in Mumbai, India,
            with a background in building enterprise web applications
            and developing practical technology solutions.
          </p>

          <p>
            My experience includes C#, ASP.NET Core Web API, Angular,
            JavaScript and MySQL. I've worked on application modules,
            REST API integration, responsive interfaces, SQL queries
            and business reporting.
          </p>

          <p>
            Before focusing on software engineering, I worked in SEO
            analytics, where I developed skills in interpreting data,
            understanding user behavior and communicating insights.
            I enjoy learning new technologies and building software
            that solves real problems.
          </p>
        </Reveal>

        <Reveal className="about-highlights" delay={0.2}>
          <div className="about-highlight">
            <span className="highlight-number">01</span>
            <div>
              <h3>Full Stack Development</h3>
              <p>Frontend interfaces, backend APIs and database integration.</p>
            </div>
          </div>

          <div className="about-highlight">
            <span className="highlight-number">02</span>
            <div>
              <h3>Enterprise Applications</h3>
              <p>Business workflows, reporting and data-driven features.</p>
            </div>
          </div>

          <div className="about-highlight">
            <span className="highlight-number">03</span>
            <div>
              <h3>Continuous Learning</h3>
              <p>Exploring modern web development and AI-powered applications.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
