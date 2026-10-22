
import Reveal from '../components/Reveal';
import './Projects.css';

const projects = [
  {
    number: '01',
    category: 'ENTERPRISE APPLICATION',
    title: 'Marine Catering Management System',
    description:
      'Developed full-stack modules for vessel catering planning, inventory control, supplier tracking and PMPD cost analysis. Built interactive dashboards, low-stock alerts and automated PDF/Excel reporting.',
    technologies: ['ASP.NET Core', 'Angular', 'MySQL', 'Kendo UI', 'Telerik Reporting', 'REST API'],
    featured: true,
  },
  {
    number: '02',
    category: 'AI & COMPUTER VISION',
    title: 'AI Smart Attendance System',
    description:
      'Built a real-time attendance application using Python and OpenCV to recognize multiple faces and automatically log attendance timestamps to CSV files.',
    technologies: ['Python', 'OpenCV', 'Face Recognition', 'CSV'],
    featured: false,
  },
  {
    number: '03',
    category: 'AI-POWERED WEB APPLICATION',
    title: 'PrepWise — AI Job Interviewer',
    description:
      'Developed an AI-powered interview preparation platform that simulates interview scenarios and provides automated evaluation and feedback on user responses.',
    technologies: ['Next.js', 'Firebase', 'JavaScript', 'AI'],
    link: 'https://prepwise-iota-drab.vercel.app/',
    featured: false,
  },
];

function Projects() {
  return (
    <section className="projects section-container" id="projects">
      <Reveal className="section-heading">
        <p className="section-eyebrow">SELECTED WORK</p>
        <h2>
          Projects I've <span>built.</span>
        </h2>
        <p className="section-description">
          A selection of applications and solutions I've worked on,
          from enterprise systems to AI-powered projects.
        </p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal
            as="article"
            className={`project-card ${project.featured ? 'project-featured' : ''}`}
            key={project.number}
            delay={index === 2 ? 0.1 : 0}
          >
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span className="project-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View live project <span>↗</span>
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
