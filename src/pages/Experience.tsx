const experience = [
  {
    period: 'Sep 2026 – Present',
    role: 'Backend Developer Intern',
    organization: 'Keys on Rent · Bengaluru, Karnataka',
    description: 'Developing and maintaining backend services for a production rental platform.',
    highlights: [
      'Developed and maintained RESTful backend services using Node.js, TypeScript, and Express.js for a production rental platform.',
      'Designed relational schemas and queries using PostgreSQL with Prisma ORM, and optimized MongoDB schemas, to improve query efficiency and API performance.',
      'Built and maintained CI/CD pipelines (GitHub Actions) to automate testing and deployment, reducing release turnaround time.',
      'Implemented authentication, authorization, and API security best practices to protect sensitive user data; collaborated via Git/GitHub code reviews in an agile team.',
    ],
  },
  {
    period: 'May 2026 – Jul 2026',
    role: 'Web Developer Intern',
    organization: 'GRS India Pvt. Ltd. · Noida, Uttar Pradesh',
    description: 'Developed responsive web application features and optimized frontend-backend communication.',
    highlights: [
      'Developed responsive web application features using React.js, Node.js, and Express.js.',
      'Integrated RESTful APIs and optimized frontend-backend communication.',
      'Used Git/GitHub for version control and team collaboration.',
      'Debugged, tested, and improved application performance and code quality.',
    ],
  },
];

const education = {
  institution: 'Raj Kumar Goel Institute of Technology and Management',
  degree: 'B.Tech, Computer Science',
  period: '2022 – 2026',
  location: 'Ghaziabad, Uttar Pradesh'
};

const certifications = [
  'Object-Oriented Programming — TakeUForward (TUF)',
  'Programming with JavaScript — Coursera'
];

function Experience() {
  return (
    <section className="page-content experience-page reveal delay-1">
      <div className="experience-intro">
        <p className="eyebrow">The work behind the work</p>
        <h1>Experience</h1>
        <p>My experience spans backend services, API design, database architecture, and cloud infrastructure. I focus on building reliable, performant server-side software.</p>
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

      <div className="experience-timeline" style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>Education</h2>
        <article className="experience-entry reveal">
          <div className="experience-period">{education.period}</div>
          <div className="experience-details">
            <h2>{education.degree}</h2>
            <p className="experience-organization">{education.institution} · {education.location}</p>
          </div>
        </article>
      </div>

      <div className="experience-timeline" style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>Certifications</h2>
        <article className="experience-entry reveal">
          <div className="experience-details">
            <ul>
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;