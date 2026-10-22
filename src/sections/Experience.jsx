
import { motion } from 'motion/react';
import Reveal from '../components/Reveal';
import './Experience.css';

const experiences = [
  {
    period: 'JUL 2025 — AUG 2026',
    role: 'Software Engineer Trainee',
    company: 'Seagull VictSoft Pvt Ltd',
    location: 'Mumbai, India',
    description:
      'Developed and enhanced enterprise web application modules for a marine catering management system.',
    responsibilities: [
      'Built responsive user interfaces using Angular and Kendo UI.',
      'Integrated REST APIs developed with ASP.NET Core Web API.',
      'Wrote and optimized MySQL queries for application data and reporting.',
      'Created and customized business reports using Telerik Report Designer.',
    ],
    technologies: ['C#', 'ASP.NET Core', 'Angular', 'MySQL', 'Kendo UI'],
  },
  {
    period: 'JUN 2023 — SEP 2024',
    role: 'SEO Analyst',
    company: 'Feedspot',
    location: 'Mumbai, India',
    description:
      'Analyzed website performance, user behavior and search opportunities to support data-driven content strategies.',
    responsibilities: [
      'Analyzed website traffic using Google Analytics.',
      'Conducted keyword and competitor research.',
      'Prepared reports using Advanced Excel.',
      'Translated analytical findings into actionable recommendations.',
    ],
    technologies: ['Google Analytics', 'SEO', 'Advanced Excel', 'Reporting'],
  },
];

function Experience() {
  return (
    <section className="experience section-container" id="experience">
      <Reveal className="section-heading">
        <p className="section-eyebrow">MY JOURNEY</p>
        <h2>
          Experience that <span>shapes me.</span>
        </h2>
        <p className="section-description">
          My professional journey across software development,
          web technologies and analytics.
        </p>
      </Reveal>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <Reveal as="article" className="experience-item" key={item.company}>
            <div className="experience-timeline">
              <span className="timeline-dot"></span>
              {index !== experiences.length - 1 && (
                <motion.span
                  className="timeline-line"
                  style={{ originY: 0 }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                />
              )}
            </div>

            <div className="experience-card">
              <p className="experience-period">{item.period}</p>

              <div className="experience-heading">
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">
                    {item.company} <span>·</span> {item.location}
                  </p>
                </div>
              </div>

              <p className="experience-description">
                {item.description}
              </p>

              <ul className="experience-responsibilities">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>

              <div className="experience-tags">
                {item.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
