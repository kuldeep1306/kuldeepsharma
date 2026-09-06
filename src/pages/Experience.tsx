const experience = [
  {
    period: 'Jan 2026 - Jul 2026',
    role: 'SDE Intern',
    organization: 'GeeksforGeeks',
    description: 'Contributed to real-world software development tasks while strengthening core programming and problem-solving skills in a structured engineering environment.',
    highlights: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Code quality and engineering best practices'],
  },
  {
    period: 'Apr 2026 - Present',
    role: 'Founder & Full Stack Developer',
    organization: 'DeepInDiary',
    description: 'Founded and independently built a live platform for anonymously reporting scams, hidden truths, and crime news.',
    highlights: ['React frontend and Node.js/Express backend', 'MongoDB schema design and API architecture', 'Security, CORS, and production deployment'],
  },

];

function Experience() {
  return (
    <section className="page-content experience-page reveal delay-1">
      <div className="experience-intro">
        <p className="eyebrow">The work behind the work</p>
        <h1>Experience</h1>
        <p>My path moves between software, investigation, and independent creative work. Each chapter has sharpened how I turn complex ideas into useful, human digital experiences.</p>
      </div>

      <div className="experience-timeline">
        {experience.map((entry) => (
          <article className="experience-entry reveal" key={`${entry.role}-${entry.organization}`}>
            <div className="experience-period">{entry.period}</div>
            <div className="experience-details">
              <h2>{entry.role}</h2>
              <p className="experience-organization">{entry.organization}</p>
              <p>{entry.description}</p>
              <ul>
                {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;