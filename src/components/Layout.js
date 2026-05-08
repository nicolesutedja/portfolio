import React, { useEffect, useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Github, Menu, X } from 'lucide-react';
import CustomCursor from './CustomCursor';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-800 text-slate-200 cursor-none">
      <ScrollToTop />
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-8 py-6 flex justify-between items-center">
          
          <Link to="/" className="text-xl font-semibold tracking-wide glow-text" style={{ color: '#ffd6d6ff' }}>
            Nicole Sutedja
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/project" className={`text-sm font-medium glow-text ${isActive('/project') ? 'text-pink-300' : ''}`}>Project</Link>
            <Link to="/experience" className={`text-sm font-medium glow-text ${isActive('/experience') ? 'text-pink-300' : ''}`}>Experience</Link>
            <Link to="/contact" className={`text-sm font-medium glow-text ${isActive('/contact') ? 'text-pink-300' : ''}`}>Contact</Link>
            <a href="https://drive.google.com/file/d/1OziEMDd7xvoDVOUGmCJ4nJzKcFqn8KjN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm font-medium glow-text">
              Resume
            </a>

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

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-700 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 px-8 py-4">
            <Link onClick={() => setMenuOpen(false)} to="/project">Project</Link>
            <Link onClick={() => setMenuOpen(false)} to="/experience">Experience</Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
            <a onClick={() => setMenuOpen(false)} href="https://drive.google.com/file/d/1OziEMDd7xvoDVOUGmCJ4nJzKcFqn8KjN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </a>

            <div className="flex gap-4 pt-2">
              <a href="mailto:nicolesutedja@gmail.com"><Mail size={18} /></a>
              <a href="https://linkedin.com/in/nicolesutedja" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
              <a href="https://github.com/nicolesutedja" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
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