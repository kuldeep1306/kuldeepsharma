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
      <div className="reveal delay-2" style={{marginBottom: '2rem', padding: '1rem 1.5rem', borderRadius: '1.25rem', background: 'linear-gradient(135deg, rgba(85, 195, 255, 0.15), rgba(85, 195, 255, 0.08))', border: '2px solid rgba(85, 195, 255, 0.4)', textAlign: 'center'}}>
        <p style={{margin: '0 0 1rem', fontSize: '0.95rem', fontWeight: '600', color: 'var(--muted)'}}>VISIT THE PLATFORM</p>
        <a href="https://deepindiary.vercel.app/" target="_blank" rel="noreferrer" style={{display: 'inline-block', fontSize: '1.3rem', fontWeight: '700', background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))', color: '#07101b', padding: '0.9rem 2rem', borderRadius: '999px', boxShadow: '0 14px 30px rgba(85, 195, 255, 0.25)', transition: 'all 0.2s ease'}}>deepindiary.vercel.app →</a>
      </div>
      <h1>Deepindiary</h1>
      <p>"Expose the Untold" — Deepindiary is an investigative editorial hub for stories that demand to be told. From crime investigations to social injustices, from hidden truths to scam exposés, every story here is real, verified, and impactful.</p>
      
      <h2>Coverage Areas</h2>
      <div className="feature-grid">
        {categories.map((cat, idx) => (
          <article key={idx}>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
          </article>
        ))}
      </div>
      
      <h2 style={{marginTop: '2rem'}}>Our Promise</h2>
      <ul>
        <li>✓ <strong>Truth First:</strong> Every story is thoroughly researched and verified</li>
        <li>✓ <strong>Real Voices:</strong> We amplify stories that mainstream media misses</li>
        <li>✓ <strong>Accountability:</strong> Stories that spark conversations and drive change</li>
        <li>✓ <strong>Responsibility:</strong> Sensitive topics handled with care and integrity</li>
      </ul>
      
      <div style={{marginTop: '2rem', padding: '1.5rem', borderRadius: '1.25rem', background: 'rgba(85, 195, 255, 0.08)', border: '1px solid rgba(85, 195, 255, 0.2)'}}>
        <h3>Share Your Story</h3>
        <p>Have an untold story? Know about a hidden truth? <strong>We're listening.</strong></p>
        <p>Visit <a href="https://deepindiary.vercel.app/" target="_blank" rel="noreferrer" style={{fontWeight: 'bold'}}>deepindiary.vercel.app</a> to submit your story and be part of our mission to expose the untold.</p>
      </div>
    </section>
  );
}

export default Deepindiary;
