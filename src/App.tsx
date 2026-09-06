import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Deepindiary from './pages/Deepindiary';
import Projects from './pages/Projects';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/deepindiary', label: 'Deepindiary' }
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/kuldeep1306', icon: 'GitHub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kuldeepkh1305/', icon: 'LinkedIn' },
  { name: 'Instagram', url: 'https://www.instagram.com/thekuldeepsays/', icon: 'Instagram' }
];

function App() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem('theme') === 'light');

  useEffect(() => {
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

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
    <div className={`app-shell${isLightMode ? ' light-mode' : ''}`}>
      <header className="site-header">
        <div className="header-identity">
          <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
            <span className="brand-name">Kuldeep</span>
            <span className="brand-last">Sharma</span>
          </Link>
          <span className="header-role">Full Stack Developer</span>
        </div>
         <button
  className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label="Toggle navigation"
>
  {mobileOpen ? "✕" : "☰"}
</button>
        <nav className={`site-nav ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'active' : ''} onClick={() => setMobileOpen(false)}>{link.label}</Link>
          ))}
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setIsLightMode((current) => !current)}
          aria-label={`Switch to ${isLightMode ? 'dark' : 'light'} mode`}
          aria-pressed={isLightMode}
          title={`Switch to ${isLightMode ? 'dark' : 'light'} mode`}
        >
          <span aria-hidden="true">{isLightMode ? '☾' : '☀'}</span>
          <span>{isLightMode ? 'Dark' : 'Light'}</span>
        </button>
        <a className="header-cta" href="/Kuldeep-Sharma-Resume.pdf" download>Resume <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/deepindiary" element={<Deepindiary />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <h3>Kuldeep Sharma</h3>
              <p className="tagline">Full Stack Developer · MERN Stack</p>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noreferrer" title={link.name} className="social-icon">
                    <span>{link.icon}</span><span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
            
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="copyright">© 2026 Kuldeep Sharma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
