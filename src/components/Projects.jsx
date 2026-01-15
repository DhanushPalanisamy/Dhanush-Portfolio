import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sales Dashboard',
    image: '/project1.png',
    desc: 'Interactive dashboard analyzing sales trends and KPIs, built with Python and Plotly Dash.',
    href: 'https://github.com/DhanushPalanisamy/Sales-Dashboard',
    tags: ['Dash', 'Python', 'Plotly']
  },
  {
    title: 'Customer Churn Analysis',
    image: '/project2.jpg',
    desc: 'Churn prediction pipeline using feature engineering and XGBoost with SHAP for interpretability.',
    href: 'https://github.com/DhanushPalanisamy/Customer-Churn',
    tags: ['XGBoost', 'SHAP', 'ML']
  },
  {
    title: 'Time-Series Forecasting',
    image: '/project3.png',
    desc: 'Demand forecasting using ARIMA and LSTM experiments, with interactive visualizations.',
    href: 'https://github.com/DhanushPalanisamy/Time-Series-Forecasting',
    tags: ['LSTM', 'ARIMA', 'Forecasting']
  },
  {
    title: 'Realtime Chat App',
    image: '/project4.png',
    desc: 'A realtime chat application built with Socket.IO and React, featuring channels and typing indicators.',
    href: 'https://github.com/DhanushPalanisamy/Chat-App',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Portfolio',
    image: '/project5.png',
    desc: 'My 3D Portfolio created with react.js and node.js to showcase interactive visuals of my works.',
    href: 'https://github.com/DhanushPalanisamy/Dhanush-Portfolio',
    tags: ['react.js', 'node.js','vite']
  }
];

export default function Projects() {
  const handleMove = (e, ref) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(6px)`;
    card.style.boxShadow = `0 12px 30px rgba(2,6,23,0.45)`;
  };
  const handleLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.boxShadow = '';
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-10">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.href || '#'}
            target={p.href ? '_blank' : undefined}
            rel={p.href ? 'noopener noreferrer' : undefined}
            className="block"
          >
            <motion.article
              className="project-card"
              style={{ background: 'var(--card-bg)', color: 'var(--card-text)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <div className="flex items-start gap-4">
                <img src={p.image} alt={p.title} className="rounded-md mb-0 object-cover w-32 h-24" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--card-text)' }}>{p.title}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--card-desc)' }}>{p.desc}</p>
                  {p.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 dark:bg-white/5 text-slate-400">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="project-cta">→</div>
              </div>
            </motion.article>
          </a>
        ))}
      </div>
    </section>
  );
}
