import { Link } from 'react-router-dom';

type HomeProps = {
  showGlow: boolean;
};

function Home({ showGlow }: HomeProps) {
  return (
    <>
      <section className={`hero home-hero${showGlow ? ' effect' : ''}`}>
        <div className="hero-copy reveal delay-1">
          <span className="eyebrow">Kuldeep Sharma</span>              
           <h3>Founder of deepindiary</h3>
            <h4>Currently working on thekuldeepsays</h4>


          <h1>Full-Stack Developer • Creator</h1>
          <p className="headline">Building impactful digital products and uncovering stories that matter.</p>
          <p className="intro">I'm Kuldeep Sharma, a Full-Stack Developer and digital storyteller passionate about technology, innovation, and meaningful narratives.</p>

          <div className="hero-links">
            <Link className="button" to="/projects">View My Work</Link>
            <Link className="button button-secondary" to="/deepindiary">Explore DeepInDiary</Link>
          </div>
        </div>

        <div className="hero-card reveal delay-2">
          <div className="profile-card">
            <div className="profile-image">KS</div>
            <div>
              <h2>Kuldeep Sharma </h2>
              <p>Building digital products and storytelling platforms with clarity, purpose, and impact.</p>
            </div>
          </div>

          <div className="profile-highlights">
            <div>
              <strong>
                <a href="https://deepindiary.vercel.app" target="_blank" rel="noreferrer">DeepInDiary</a>
              </strong>
              <span>Investigative journalism platform</span>
            </div>
            <div>
              <strong>
                <a href="https://deepindiary.vercel.app" target="_blank" rel="noreferrer">Live Site</a>
              </strong>
              <span>Niche: Exposé & long-form investigative stories</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section reveal delay-1">
        <h2>Skills & Expertise</h2>
        <p className="skills-intro">A balanced skill set for product development, storytelling, and technical delivery.</p>

        <div className="skills-grid">
          <article>
            <h3>Frontend</h3>
            <p>HTML · CSS · React · JavaScript</p>
          </article>
          <article>
            <h3>Backend</h3>
            <p>Node.js · Express</p>
          </article>
          <article>
            <h3>Database</h3>
            <p>MySQL · Firebase · MongoDB</p>
          </article>
          <article>
            <h3>Others</h3>
            <p>Java · Python · AI Integration · REST APIs · Git/GitHub</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
