function TheKuldeepSays() {
  const topics = [
    { title: 'Programming Fundamentals', desc: 'Clear explanations of core programming concepts and how they work.' },
    { title: 'Web Development', desc: 'Learn about the technologies and ideas behind building for the web.' },
    { title: 'Developer Tools', desc: 'Explore tools and workflows that help developers build software.' },
    { title: 'Tech Made Simple', desc: 'Approachable breakdowns of technical concepts, one idea at a time.' }
  ];

  return (
    <section className="page-content reveal delay-1">
      <div className="platform-banner reveal delay-2">
        <p>FOLLOW THE CHANNEL</p>
        <div className="platform-actions">
          <a href="https://www.instagram.com/thekuldeepsays/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a href="https://www.youtube.com/@thekuldeepsays" target="_blank" rel="noreferrer">YouTube <span aria-hidden="true">↗</span></a>
          <a href="https://medium.com/@thekuldeepsays" target="_blank" rel="noreferrer">Medium <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <h1>The Kuldeep Says</h1>
      <p>I explain technical concepts in a clear, approachable way. Follow along on Instagram and YouTube, or read my articles on Medium for content about programming, web development, developer tools, and the ideas behind modern technology.</p>
      
      <h2>What I Explain</h2>
      <div className="feature-grid">
        {topics.map((topic) => (
          <article key={topic.title}>
            <h3>{topic.title}</h3>
            <p>{topic.desc}</p>
          </article>
        ))}
      </div>
      
      <div className="story-share">
        <h3>Learn with me</h3>
        <p>Explore technical explainers and follow <strong>The Kuldeep Says</strong> on your preferred platform.</p>
        <p>
          <a href="https://www.instagram.com/thekuldeepsays/" target="_blank" rel="noreferrer">Follow on Instagram</a>
          {' · '}
          <a href="https://www.youtube.com/@thekuldeepsays" target="_blank" rel="noreferrer">Subscribe on YouTube</a>
          {' · '}
          <a href="https://medium.com/@thekuldeepsays" target="_blank" rel="noreferrer">Read on Medium</a>
        </p>
      </div>
    </section>
  );
}

export default TheKuldeepSays;
