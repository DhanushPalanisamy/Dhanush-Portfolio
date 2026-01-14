import React, { useState } from 'react';
import { Github, Linkedin, Mail, Copy } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact({ darkMode }) {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    // Honeypot field
    if (data.get('website')) return;

    if (!FORMSPREE) {
      // fallback demo behavior
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
      form.reset();
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch(FORMSPREE, { method: 'POST', body: data });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 2500);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-4">Contact</h2>
        <p className="text-center text-sm text-gray-300 max-w-2xl mx-auto mb-8">I'd love to hear about your project or how we can work together. Send a message or reach me via one of the links below.</p>
      </Reveal>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white/5 p-8 rounded-xl glass space-y-4">
        {/* honeypot - bots will fill this */}
        <input name="website" type="text" className="hidden" tabIndex="-1" autoComplete="off" />
        <input name="name" required placeholder="Your name" className="w-full p-3 rounded-md bg-gray-800 text-white" />
        <input name="email" type="email" required placeholder="you@company.com" className="w-full p-3 rounded-md bg-gray-800 text-white" />
        <textarea name="message" rows="6" required placeholder="Tell me about your project" className="w-full p-3 rounded-md bg-gray-800 text-white" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <button type="submit" className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 w-full sm:w-auto">Send Message</button>
          <div className="flex items-center gap-2">
            <a href="mailto:youremail@example.com" id="contact-email" className="text-sm text-gray-300 text-center">Or email directly</a>
            <button
              type="button"
              aria-label="Copy email"
              onClick={() => { navigator.clipboard && navigator.clipboard.writeText('youremail@example.com'); }}
              className="p-1 rounded hover:bg-white/5 icon-btn"
            >
              <Copy className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>
        <div aria-live="polite" className="sr-only" id="contact-status">
          {status === 'sending' && 'Sending message...'}
          {status === 'success' && 'Message sent — thank you!'}
          {status === 'error' && 'Something went wrong. Please try again.'}
        </div>
      </form>

      <div className="max-w-3xl mx-auto mt-8 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-400">Or find me on</p>
        <div className="flex items-center justify-center gap-6">
          {/** icons should adapt to theme so they remain visible in light mode */}
          <a href="https://github.com/DhanushPalanisamy" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-white/5 icon-btn">
            <Github className={`w-6 h-6 ${darkMode ? 'text-white/90' : 'text-slate-800'}`} />
          </a>
          <a href="https://www.linkedin.com/in/dhanush-palanisamy-06174128b/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-white/5 icon-btn">
            <Linkedin className={`w-6 h-6 ${darkMode ? 'text-white/90' : 'text-slate-800'}`} />
          </a>
          <a href="mailto:dhanushpalanisamy07@gmail.com" aria-label="Email" className="p-3 rounded-full hover:bg-white/5 icon-btn">
            <Mail className={`w-6 h-6 ${darkMode ? 'text-white/90' : 'text-slate-800'}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
