function Deepindiary() {
  const categories = [
    { title: 'Investigative Stories', desc: 'Deep-dive journalism uncovering hidden truths and exposing systemic problems' },
    { title: 'Crime Coverage', desc: 'Detailed reporting on criminal cases and their societal impact' },
    { title: 'Social Issues', desc: 'Stories about education, women safety, hostel conditions, and institutional failures' },
    { title: 'Scam Exposés', desc: 'Investigations into fraud, deception, and public exploitation' },
    { title: 'Personal Narratives', desc: 'Real stories from real people about their struggles and victories' },
    { title: 'Awareness & Change', desc: 'Content designed to spark conversation and inspire action' }
  ];

  return (
    <section className="page-content reveal delay-1">
      <div className="platform-banner reveal delay-2">
        <p>VISIT THE PLATFORM</p>
        <a href="https://deepindiary.vercel.app/" target="_blank" rel="noreferrer">deepindiary.vercel.app <span aria-hidden="true">→</span></a>
      </div>
      <h1>Deepindiary</h1>
      <p>"Expose the Untold" — Deepindiary is an investigative editorial hub for stories that demand to be told. From crime investigations to social injustices, from hidden truths to scam exposés, every story here is real, verified, and impactful.</p>
      
      <h2>Coverage Areas</h2>
      <div className="feature-grid">
        {categories.map((cat) => (
          <article key={cat.title}>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
          </article>
        ))}
      </div>
      
      <h2 className="page-subheading">Our Promise</h2>
      <ul>
        <li>✓ <strong>Truth First:</strong> Every story is thoroughly researched and verified</li>
        <li>✓ <strong>Real Voices:</strong> We amplify stories that mainstream media misses</li>
        <li>✓ <strong>Accountability:</strong> Stories that spark conversations and drive change</li>
        <li>✓ <strong>Responsibility:</strong> Sensitive topics handled with care and integrity</li>
      </ul>
      
      <div className="story-share">
        <h3>Share Your Story</h3>
        <p>Have an untold story? Know about a hidden truth? <strong>We're listening.</strong></p>
        <p>Visit <a href="https://deepindiary.vercel.app/" target="_blank" rel="noreferrer">deepindiary.vercel.app</a> to submit your story and be part of our mission to expose the untold.</p>
      </div>
    </section>
  );
}

export default Deepindiary;
