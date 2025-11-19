import React, { useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout({ children }) {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-slate-800 text-slate-200" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <ScrollToTop />
     {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold tracking-wide glow-text" style={{ color: '#ffd6d6ff' }}>
            Nicole Sutedja
          </Link>
          <div className="flex gap-8 items-center">
            <Link 
                to="/project" 
                className={`text-sm font-medium glow-text ${isActive('/project') ? 'text-pink-300' : ''}`}
            >
                Project
            </Link>
            <Link 
              to="/experience" 
              className={`text-sm font-medium glow-text ${isActive('/experience') ? 'text-pink-300' : ''}`}
            >
              Experience
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium glow-text ${isActive('/contact') ? 'text-pink-300' : ''}`}
            >
              Contact
            </Link>
            <div className="flex gap-4 ml-4">
              <a href="mailto:nicolesutedja@gmail.com" className="icon-glow">
                <Mail size={18} />
              </a>
              <a href="https://linkedin.com/in/nicolesutedja" target="_blank" rel="noopener noreferrer" className="icon-glow">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/nicolesutedja" target="_blank" rel="noopener noreferrer" className="icon-glow">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-slate-700">
        <div className="max-w-5xl mx-auto text-center text-slate-400 text-sm font-medium">
          <p>♡ Thank you for visiting my site!</p>
        </div>
      </footer>
    </div>
  );
}
