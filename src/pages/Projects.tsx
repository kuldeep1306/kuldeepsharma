type Project = {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
};

const staticProjects = [
  {
    title: 'DeepInDiary',
    summary: 'Flagship solo-built platform for anonymously reporting scams and fraud — built end-to-end with React/Vite frontend and Express/TypeScript backend, deployed on Vercel and Render.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    link: 'https://deepindiary.vercel.app/'
  },
  {
    title: 'HostelMate',
    summary: 'Hostel management platform streamlining room allocation, resident records, and day-to-day hostel operations.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://myhostelmate.vercel.app/'
  },
  {
    title: 'Hospital Management System — Patient Portal',
    summary: 'Patient-facing appointment booking system for scheduling doctor visits with a streamlined, easy-to-use interface.',
    tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
    link: 'https://hospital-front-ui5l.onrender.com/'
  },
  {
    title: 'Hospital Management System — Admin Panel',
    summary: 'Admin dashboard for managing hospital operations, patient records, and appointment scheduling behind the scenes.',
    tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Admin Dashboard'],
    link: 'https://medicare-admi.onrender.com/'
  },
  {
    title: 'E-commerce Shopping Platform',
    summary: 'E-commerce shopping platform with cart management and product browsing built on the MERN stack.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '' // yaha apna GitHub repo link/live link daal dena
  },
  {
    title: 'Kulbot',
    summary: 'AI-powered chatbot delivering real-time conversational responses — built and deployed as a live web application.',
    tags: ['JavaScript', 'AI', 'Chatbot'],
    link: 'https://kulbot.vercel.app/'
  }
];

function Projects() {
  return (
    <section className="page-content reveal delay-1">
      <h1>Projects</h1>
      <p>A collection of work that spans storytelling, development, and digital innovation. From investigative platforms to interactive tools, each project represents ideas turned into reality.</p>
      <div className="project-list reveal delay-2">
        {staticProjects.map((project) => (
          <article key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View Project →</a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
