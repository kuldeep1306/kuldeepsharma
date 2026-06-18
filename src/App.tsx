import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Deepindiary from './pages/Deepindiary';
import Projects from './pages/Projects';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/deepindiary', label: 'Deepindiary' },
  { path: '/projects', label: 'Projects' }
];

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/deepindiary/', icon: '📸' },
  { name: 'GitHub', url: 'https://github.com/kuldeep1306', icon: '💻' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kuldeepkh1305/', icon: '💼' }
];

function App() {
  const [showGlow, setShowGlow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((el) => {
      el.classList.remove('visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className={`app-shell${showGlow ? ' light-mode' : ''}`}>
      <header className="site-header">
        <div className="brand">Kuldeep Sharma</div>
        <nav className="site-nav">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home showGlow={showGlow} />} />
          <Route path="/about" element={<About />} />
          <Route path="/deepindiary" element={<Deepindiary />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kuldeep Sharma</h3>
            <p>Investigative storyteller, content creator & full-stack developer</p>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" title={link.name}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map(link => (
                <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Kuldeep Sharma. All rights reserved.</p>
          <p>Made with ❤️ | Deepindiary — Expose the Untold</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;