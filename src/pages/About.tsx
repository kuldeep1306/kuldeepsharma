function About() {
  return (
    <section className="page-content reveal delay-1">
      <h1>About Me</h1>
      <p>Hi, I'm Kuldeep Sharma, a Full-Stack Developer, content creator, and digital storyteller passionate about building meaningful products and sharing impactful stories. I enjoy combining technology, creativity, and problem-solving to create experiences that people can learn from, engage with, and benefit from.

Over the years, I've worked on web applications, AI-powered tools, and community-focused platforms using technologies like React, Node.js, Firebase, and modern web technologies. I am constantly exploring new ideas, improving my skills, and building projects that solve real-world problems.

<p>One of my most meaningful projects is DeepInDiary — a platform born from my curiosity to uncover stories that often go unnoticed. What started as a simple question, "What stories are left untold?", evolved into a space dedicated to investigative storytelling, social awareness, crime-related reports, and discussions around issues that deserve attention.</p>

Through both development and content creation, my goal remains the same: to build, inform, and create a positive impact through technology and storytelling.</p>
      
      <h2 style={{marginTop: '2rem'}}>What I Do</h2>
      <div className="feature-grid">
        <article>
         
        <h2>Full-Stack Development</h2>
        <p>I build modern web applications, AI-powered tools, and scalable digital solutions with a focus on performance, usability, and real-world impact.</p>
        </article>
        <article>
           <h2>Investigative Storytelling</h2>
           <p>Through DeepInDiary, I research and present stories that encourage awareness, critical thinking, and informed discussions.</p>
        </article>
        <article>
          <h2>Content Creation</h2>
          <p>Creating narratives that connect. Whether it's uncovering hidden truths or sharing personal growth stories, each piece is crafted with purpose.</p>
        </article>
      </div>
      
      <h2 style={{marginTop: '2rem'}}>My Values</h2>
      <ul>
        <li><strong>Truth First:</strong> Every story is verified before publication</li>
        <li><strong>Authenticity:</strong> Real experiences, real voices, real impact</li>
        <li><strong>Clarity:</strong> Complex stories told in accessible ways</li>
        <li><strong>Responsibility:</strong> Using my platform to amplify important conversations</li>
      </ul>
    </section>
  );
}

export default About;
