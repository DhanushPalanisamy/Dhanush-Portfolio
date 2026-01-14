import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ darkMode }) {
  const iconColor = darkMode ? 'text-gray-300' : 'text-slate-700';

  return (
    <footer className="py-8 bg-gray-950 text-center text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="order-2 md:order-1">© {new Date().getFullYear()} Dhanush — All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 order-1 md:order-2">
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
      </div>
    </footer>
  );
}
