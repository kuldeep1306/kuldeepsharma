import { useEffect, useState } from 'react';
import axios from 'axios';

type Project = {
  _id: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string;
};

const staticProjects = [
  {
    title: 'Deepindiary Platform',
    summary: 'Investigative storytelling platform covering crime, social issues, and untold truths. A digital hub where real stories reach real audiences.',
    tags: ['React', 'Storytelling', 'Journalism', 'Impact'],
    link: 'https://deepindiary.vercel.app/'
  },
  {
    title: 'JARVIS AI Assistant',
    summary: 'Virtual AI assistant built with JavaScript. An intelligent conversational tool designed for productivity and user engagement.',
    tags: ['JavaScript', 'AI', 'Automation'],
    link: 'https://github.com/kuldeep1306/JARVIS'
  },
  {
    title: 'World Tour Interactive',
    summary: 'Interactive web experience for exploring world destinations. Combines geography, visual design, and user engagement.',
    tags: ['JavaScript', 'Web Design', 'Interactive'],
    link: 'https://github.com/kuldeep1306/WORLD-TOUR'
  },
  {
    title: 'Portfolio Website',
    summary: 'Professional portfolio showcasing work, projects, and digital presence built with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/kuldeep1306/PORTFOLIO'
  },
  {
    title: 'Coding Solutions - GFG 160',
    summary: 'Complete solutions for GeeksforGeeks 160 coding problems. Problem-solving implementations demonstrating algorithm expertise.',
    tags: ['Data Structures', 'Algorithms', 'Coding'],
    link: 'https://github.com/kuldeep1306/GFG---160'
  },
  {
    title: 'Color Changer Tool',
    summary: 'Interactive background color changer. A simple yet effective tool for UI experimentation built with vanilla web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/kuldeep1306/color-changer'
  }
];

function Projects() {
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get<Project[]>('/api/projects')
      .then((response) => {
        if (response.data.length > 0) {
          setProjects([...staticProjects, ...response.data]);
        }
      })
      .catch(() => {
        // Use static projects if API fails
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="page-content reveal delay-1">
      <h1>Projects</h1>
      <p>A collection of work that spans storytelling, development, and digital innovation. From investigative platforms to interactive tools, each project represents ideas turned into reality.</p>
      <div className="project-list reveal delay-2">
        {projects.map((project, idx) => (
          <article key={idx}>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" style={{fontWeight: '600', marginTop: '0.75rem', display: 'inline-block'}}>View Project →</a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
