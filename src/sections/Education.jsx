
import Reveal from '../components/Reveal';
import './Education.css';

const education = [
  {
    period: '2024 — 2026',
    degree: 'Master of Computer Applications',
    institution: 'Late Bhausaheb Hiray College, Mumbai',
    score: 'CGPA: 8.5',
  },
  {
    period: '2020 — 2023',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Thakur College of Science and Commerce, Mumbai',
    score: 'CGPA: 9.24',
  },
];

const certifications = [
  {
    name: 'Internship 6.0',
    provider: 'Infosys Springboard',
  },
  {
    name: 'Programming in Java',
    provider: 'NPTEL / SWAYAM',
  },
  {
    name: 'Cloud Computing',
    provider: 'NPTEL / SWAYAM',
  },
  {
    name: 'Data Analytics Job Simulation',
    provider: 'Deloitte — Forage',
  },
  {
    name: 'GenAI Powered Data Analytics',
    provider: 'Tata — Forage',
  },
];

function Education() {
  return (
    <section className="education section-container" id="education">
      <Reveal className="section-heading">
        <p className="section-eyebrow">EDUCATION & LEARNING</p>
        <h2>
          Building my <span>foundation.</span>
        </h2>
        <p className="section-description">
          Academic learning and professional programs that have
          contributed to my technical foundation.
        </p>
      </Reveal>

      <div className="education-layout">
        <div className="education-list">
          <h3 className="education-subheading">Education</h3>

          {education.map((item, index) => (
            <Reveal as="article" className="education-card" key={item.degree} delay={index * 0.1}>
              <span className="education-period">{item.period}</span>

              <h4>{item.degree}</h4>

              <p className="education-institution">
                {item.institution}
              </p>

              <span className="education-score">{item.score}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="certifications" delay={0.15}>
          <h3 className="education-subheading">Certifications & Programs</h3>

          {certifications.map((item) => (
            <article className="certification-item" key={item.name}>
              <span className="certification-icon">↗</span>

              <div>
                <h4>{item.name}</h4>
                <p>{item.provider}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Education;
