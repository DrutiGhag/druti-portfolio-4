import './TechMarquee.css';

const technologies = [
  'C#',
  'ASP.NET Core',
  'Angular',
  'JavaScript',
  'MySQL',
  'Kendo UI',
  'Telerik Reporting',
  'React.js',
  'Python',
  'Power BI',
];

function TechMarquee() {
  // The list is rendered twice so the loop never shows a gap.
  const items = [...technologies, ...technologies];

  return (
    <div className="tech-marquee" aria-label="Technologies I work with">
      <div className="tech-marquee-track">
        {items.map((technology, index) => (
          <span
            className="tech-marquee-item"
            key={`${technology}-${index}`}
            aria-hidden={index >= technologies.length}
          >
            <i>✦</i>
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
