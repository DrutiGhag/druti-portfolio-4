
import Reveal from '../components/Reveal';
import './Skills.css';

const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    skills: ['JavaScript', 'TypeScript', 'Angular', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Kendo UI'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'Developing APIs and application logic.',
    skills: ['C#', 'ASP.NET Core', 'ASP.NET Core Web API', 'REST APIs'],
  },
  {
    number: '03',
    title: 'Database & Reporting',
    description: 'Working with relational data and business reporting.',
    skills: ['MySQL', 'SQL Queries', 'Telerik Reporting', 'Swagger'],
  },
  {
    number: '04',
    title: 'Tools & Additional Skills',
    description: 'Development tools, analytics and emerging technologies.',
    skills: ['Git', 'Visual Studio', 'VS Code', 'Power BI', 'Tableau', 'Advanced Excel', 'Google Analytics', 'Python', 'OpenCV'],
  },
];

function Skills() {
  return (
    <section className="skills section-container" id="skills">
      <Reveal className="section-heading">
        <p className="section-eyebrow">MY TOOLKIT</p>
        <h2>
          Technologies I <span>work with.</span>
        </h2>
        <p className="section-description">
          A selection of technologies and tools I've used across
          software development, databases, reporting and analytics.
        </p>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal as="article" className="skill-card" key={group.number} delay={(index % 2) * 0.1}>
            <div className="skill-card-top">
              <span className="skill-number">{group.number}</span>
              <span className="skill-symbol">✳</span>
            </div>

            <h3>{group.title}</h3>
            <p className="skill-description">{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
