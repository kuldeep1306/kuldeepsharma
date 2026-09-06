import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'JugaadU',
    category: 'Campus Marketplace',
    description: 'A student item-exchange platform with polling-based chat and web push notifications.',
    tech: 'React · Node.js · Express · MongoDB',
    href: 'https://jugaduu.vercel.app/',
    featured: true,
  },
  {
    name: 'HostelMate',
    category: 'Hostel Management',
    description: 'A role-based hostel management platform for room allotment, complaints, and resident records.',
    tech: 'React · Node.js · Express · MongoDB · Gemini AI',
    href: 'https://myhostelmate.vercel.app/',
    featured: false,
  },
];

const expertise = [
  { title: 'Frontend', skills: ['React.js', 'Redux', 'Tailwind CSS', 'Framer Motion', 'Responsive Web Design'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'RESTful API Design', 'Authentication & Authorization (Clerk)', 'JWT'] },
  { title: 'Database', skills: ['MongoDB', 'Mongoose', 'Schema Design'] },
  { title: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Vercel', 'Render', 'MongoDB Atlas', 'Postman', 'VS Code', 'IntelliJ IDEA'] },
  { title: 'Languages', skills: ['JavaScript', 'Java', 'Python', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Core Concepts', skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems'] },
];

function Home() {
  return (
    <div className="portfolio-home">
      <section className="portfolio-hero" aria-labelledby="hero-title">
        <div className="portfolio-hero-copy reveal delay-1">
          <p className="eyebrow">Full Stack Developer · MERN</p>
          <h1 id="hero-title">Hi, I'm Kuldeep Sharma.</h1>
          <p className="hero-lead">I build full-stack products that turn ideas into reliable, scalable experiences.</p>
          <p className="hero-description">Focused on React, Node.js, APIs, databases, and building products from idea to production.</p>
          <div className="hero-actions">
            <a className="button" href="#selected-work">View Projects <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="/Kuldeep-Sharma-Resume.pdf" download>Download Resume</a>
          </div>
          <div className="hero-status"><span className="status-dot" aria-hidden="true" /> Open to Full-Time Opportunities</div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/kuldeep1306" target="_blank" rel="noreferrer" aria-label="GitHub profile">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/kuldeepkh1305/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="terminal-card reveal delay-2" aria-label="Developer activity preview">
          <div className="terminal-bar"><span className="terminal-dots"><i /><i /><i /></span><span>kuldeep@portfolio ~/build</span><span>⌘</span></div>
          <div className="terminal-body">
            <p><span className="code-muted">01</span> <span className="code-keyword">const</span> developer = {'{'}</p>
            <p><span className="code-muted">02</span> <span className="code-indent">name:</span> <span className="code-string">'Kuldeep Sharma'</span>,</p>
            <p><span className="code-muted">03</span> <span className="code-indent">stack:</span> <span className="code-string">'MERN'</span>,</p>
            <p><span className="code-muted">04</span> <span className="code-indent">location:</span> <span className="code-string">'Noida, IN'</span>,</p>
            <p><span className="code-muted">05</span> <span className="code-indent">ships:</span> <span className="code-function">true</span></p>
            <p><span className="code-muted">06</span> {'}'};</p>
            <div className="terminal-rule" />
            <p className="terminal-command"><span className="code-accent">$</span> npm run build:future</p>
            <p className="terminal-success"><span>✓</span> product shipped successfully</p>
          </div>
          <div className="terminal-footer"><span>React</span><span>Node.js</span><span>MongoDB</span><span>TypeScript</span></div>
        </div>
      </section>
      <section className="portfolio-section projects-section reveal delay-1" id="selected-work" aria-labelledby="projects-title">
        <div className="section-intro-row"><div><p className="section-kicker">Selected Work</p><h2 id="projects-title">Things I've built, shipped, and learned from.</h2></div><Link className="section-link" to="/projects">View All Projects <span aria-hidden="true">→</span></Link></div>
        <div className="project-grid">
          {projects.map((project) => <a className={`project-card${project.featured ? ' project-card-featured' : ''}`} href={project.href} target="_blank" rel="noreferrer" key={project.name}><div className="project-card-top"><span className="project-index">0{projects.indexOf(project) + 1}</span><span className="project-arrow" aria-hidden="true">↗</span></div><p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="project-tech">{project.tech}</p><span className="project-cta">View Live <span aria-hidden="true">→</span></span></a>)}
        </div>
      </section>
      <section className="portfolio-section expertise-section reveal delay-1" aria-labelledby="expertise-title">
        <div className="section-intro"><p className="section-kicker">Technical Expertise</p><h2 id="expertise-title">Built across the stack.</h2></div>
        <div className="expertise-grid">{expertise.map((group, index) => <article className="expertise-card" key={group.title}><span className="expertise-number">0{index + 1}</span><h3>{group.title}</h3><div className="tech-badges">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>
      <section className="portfolio-section value-section reveal delay-1" aria-labelledby="value-title">
        <div className="value-copy"><p className="section-kicker">Engineering Mindset</p><h2 id="value-title">More than just writing code.</h2><p>I enjoy turning ambiguous ideas into usable products — designing the interface, building the API, connecting the database, and getting the final product into production.</p></div>
        <div className="value-highlights"><div><span>→</span><strong>Product-minded</strong><p>I care about the why behind every feature.</p></div><div><span>→</span><strong>Full-stack ownership</strong><p>From first screen to production system.</p></div><div><span>→</span><strong>Always learning</strong><p>Curious, practical, and open to better ways.</p></div></div>
      </section>
    </div>
  );
}

export default Home;
