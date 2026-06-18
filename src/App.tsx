import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Deepindiary from './pages/Deepindiary';
import Projects from './pages/Projects';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/admin', label: 'Admin' },
  { path: '/projects', label: 'Projects' },
  { path: '/deepindiary', label: 'Deepindiary' }
];

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/deepindiary/', icon: '📸' },
  { name: 'GitHub', url: 'https://github.com/kuldeep1306', icon: '💻' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kuldeepkh1305/', icon: '💼' }
];

function App() {
  const [showGlow, setShowGlow] = useState(false);
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-name">Kuldeep</span>
          <span className="brand-last">Sharma</span>
        </Link>
        <button className={`nav-toggle ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          ☰
        </button>
        <nav className={`site-nav ${mobileOpen ? 'open' : ''}`}>
          {(() => {
            const blogIndex = navLinks.findIndex(l => l.path === '/blog');
            const left = navLinks.slice(0, blogIndex);
            const center = navLinks[blogIndex];
            const right = navLinks.slice(blogIndex + 1);

            return (
              <>
                <div className="nav-left">
                  {left.map(link => (
                    <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'active' : ''} onClick={() => setMobileOpen(false)}>{link.label}</Link>
                  ))}
                </div>

                <div className="nav-center">
                  {center && (
                    <Link key={center.path} to={center.path} className={`${location.pathname === center.path ? 'active' : ''} center`} onClick={() => setMobileOpen(false)}>{center.label}</Link>
                  )}
                </div>

                <div className="nav-right">
                  {right.map(link => (
                    <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'active' : ''} onClick={() => setMobileOpen(false)}>{link.label}</Link>
                  ))}
                </div>
              </>
            );
          })()}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home showGlow={showGlow} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/deepindiary" element={<Deepindiary />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-wrapper">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <h3>Kuldeep Sharma</h3>
              <p className="tagline">Investigative storyteller, content creator & full-stack developer</p>
              <p className="mission">Building narratives. Exposing truths. Deepindiary.</p>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noreferrer" title={link.name} className="social-icon">
                    <span>{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Explore</h4>
              <ul className="footer-links">
                {navLinks.slice(0, 3).map(link => (
                  <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>More</h4>
              <ul className="footer-links">
                {navLinks.slice(3).map(link => (
                  <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="copyright">© 2026 Kuldeep Sharma. All rights reserved.</p>
            <p className="credit">Made with <span className="heart">❤️</span> using React, TypeScript & Vite</p>
          </div>
        </div>
      </footer>
    </div>
    
  );
}

export default App;