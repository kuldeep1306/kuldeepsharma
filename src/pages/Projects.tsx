type Project = {
  title: string;
  role?: string;
  summary: string;
  tags: string[];
  link?: string;
  github?: string;
};

const staticProjects: Project[] = [
  {
    title: 'DeepInDiary',
    role: 'Founder & Full Stack Developer · Self-Initiated, Live Product',
    summary: 'Founded, architected, and independently built a live public platform for anonymously reporting scams, hidden truths, and crime news, from concept through production deployment. Designed backend using Node.js/Express.js and MongoDB, deployed on Render with frontend on Vercel.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'RESTful APIs', 'Vercel', 'Render'],
    link: 'https://deepindiary.vercel.app/',
    github: 'https://github.com/kuldeep1306/deepindiaryy'
  },
  {
    title: 'JugaadU',
    role: 'MERN Stack Developer',
    summary: 'Designed and developed the backend of a campus item-exchange marketplace using Node.js and Express.js, with RESTful APIs for listings, chat, and user data. Built a polling-based real-time chat system and Web Push Notifications with optimized MongoDB schemas.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Web Push Notifications', 'REST APIs'],
    link: 'https://jugaduu.vercel.app/',
    github: 'https://github.com/kuldeep1306/jugad'
  },
  {
    title: 'HostelMate',
    role: 'MERN Stack Developer',
    summary: 'Developed the backend of a hostel management system with RESTful APIs for room booking, complaint tracking, and authentication. Implemented role-based access control (student/admin) and integrated Google Gemini AI for automated complaint categorization.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini AI', 'RBAC'],
    link: 'https://myhostelmate.vercel.app/',
    github: 'https://github.com/kuldeep1306/HostelMate'
  },
  {
    title: 'Hospital Management System — Patient Portal',
    role: 'MERN Stack Developer',
    summary: 'Patient-facing appointment booking system for scheduling doctor visits with a streamlined, easy-to-use interface.',
    tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
    link: 'https://hospital-front-ui5l.onrender.com/'
  },
  {
    title: 'Hospital Management System — Admin Panel',
    role: 'MERN Stack Developer',
    summary: 'Admin dashboard for managing hospital operations, patient records, and appointment scheduling behind the scenes.',
    tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Admin Dashboard'],
    link: 'https://medicare-admi.onrender.com/'
  },
  {
    title: 'Kulbot',
    role: 'AI Chatbot',
    summary: 'AI-powered chatbot delivering real-time conversational responses — built and deployed as a live web application.',
    tags: ['JavaScript', 'AI', 'Chatbot'],
    link: 'https://kulbot.vercel.app/'
  }
];

function Projects() {
  return (
    <section className="page-content reveal delay-1">
      <h1>Projects</h1>
      <p>A collection of software systems and web applications I've architected, built, and deployed to production.</p>
      <div className="project-list reveal delay-2">
        {staticProjects.map((project) => (
          <article key={project.title}>
            <h2>{project.title}</h2>
            {project.role && <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, margin: '0.25rem 0 0.75rem' }}>{project.role}</p>}
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Live Demo →</a>
              )}
              {project.github && (
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
