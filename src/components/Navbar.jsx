import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const linkClass = darkMode ? 'hover:text-cyan-300 text-white/90' : 'hover:text-cyan-600 text-slate-800';
  const iconColor = darkMode ? 'text-white/90' : 'text-slate-800';
  const navBgClass = darkMode ? 'border-b border-white/4 backdrop-blur-sm' : 'border-b border-slate-200/30 backdrop-blur-sm bg-white/10';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll-spy: observe sections and set active nav link
  useEffect(() => {
    const ids = ['about', 'skills', 'projects', 'contact'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent ${navBgClass}`}>
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between nav-font">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-black font-semibold">DP</div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#about" aria-current={activeId === 'about' ? 'page' : undefined} className={`${linkClass} ${activeId === 'about' ? 'text-cyan-400 underline underline-offset-4' : ''}`}>About</a>
            <a href="#skills" aria-current={activeId === 'skills' ? 'page' : undefined} className={`${linkClass} ${activeId === 'skills' ? 'text-cyan-400 underline underline-offset-4' : ''}`}>Skills</a>
            <a href="#projects" aria-current={activeId === 'projects' ? 'page' : undefined} className={`${linkClass} ${activeId === 'projects' ? 'text-cyan-400 underline underline-offset-4' : ''}`}>Projects</a>
            <a href="#contact" aria-current={activeId === 'contact' ? 'page' : undefined} className={`${linkClass} ${activeId === 'contact' ? 'text-cyan-400 underline underline-offset-4' : ''}`}>Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="toggle theme"
              className={
                darkMode
                  ? 'p-2 rounded-full bg-white/5 border border-white/6 hover:scale-105 transition'
                  : 'p-2 rounded-full bg-slate-100 border border-slate-200 hover:scale-105 transition'
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <a href="#contact" className="px-4 py-2 bg-cyan-500 text-black rounded-full font-semibold hidden md:inline-block">LET'S TALK</a>

            <div className="hidden md:flex items-center gap-3">
              <a href="/resume.pdf" aria-label="Resume" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/5 icon-btn">
                <Download className={`w-5 h-5 ${iconColor}`} />
              </a>
              <a href="https://github.com/DhanushPalanisamy" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/5 icon-btn">
                <Github className={`w-5 h-5 ${iconColor}`} />
              </a>
              <a href="https://www.linkedin.com/in/dhanush-palanisamy-06174128b/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/5 icon-btn">
                <Linkedin className={`w-5 h-5 ${iconColor}`} />
              </a>
              <a href="mailto:dhanushpalanisamy07@gmail.com" aria-label="Email" className="p-2 rounded-full hover:bg-white/5 icon-btn">
                <Mail className={`w-5 h-5 ${iconColor}`} />
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`fixed top-0 left-0 w-full h-full z-40 md:hidden ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'}`}>
          <div className="max-w-7xl mx-auto px-6 pt-24 flex flex-col items-center gap-8">
            <a href="#about" className={`${linkClass} text-2xl`} onClick={toggleMenu}>About</a>
            <a href="#skills" className={`${linkClass} text-2xl`} onClick={toggleMenu}>Skills</a>
            <a href="#projects" className={`${linkClass} text-2xl`} onClick={toggleMenu}>Projects</a>
            <a href="#contact" className={`${linkClass} text-2xl`} onClick={toggleMenu}>Contact</a>
            <a href="#contact" className="px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold text-lg" onClick={toggleMenu}>LET'S TALK</a>
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/DhanushPalanisamy" aria-label="GitHub" target="_blank" rel="noreferrer" className={`${linkClass} p-2 rounded-full hover:bg-white/5 icon-btn`} onClick={toggleMenu}>
                <Github className={`w-5 h-5 ${iconColor}`} />
              </a>
              <a href="https://www.linkedin.com/in/dhanush-palanisamy-06174128b/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className={`${linkClass} p-2 rounded-full hover:bg-white/5 icon-btn`} onClick={toggleMenu}>
                <Linkedin className={`w-5 h-5 ${iconColor}`} />
              </a>
              <a href="mailto:dhanushpalanisamy07@gmail.com" aria-label="Email" className={`${linkClass} p-2 rounded-full hover:bg-white/5 icon-btn`} onClick={toggleMenu}>
                <Mail className={`w-5 h-5 ${iconColor}`} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
