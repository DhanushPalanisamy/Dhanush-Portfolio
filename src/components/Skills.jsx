import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'Python', level: 'Advanced' },
    { name: 'Pandas / NumPy', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Plotly / Dash', level: 'Intermediate },
    { name: 'Power BI / Tableau', level: 'Advanced' },
    { name: 'Web Development', level: 'Advanced' },
    { name: 'Data Modelling', level: 'Intermediate' },
    { name: 'Feature Engineering', level: 'Intermediate' }
  ];

  // color palette used for skill accents (keeps consistent look)
  const colors = [
    'bg-cyan-400',
    'bg-emerald-400',
    'bg-amber-400',
    'bg-pink-400',
    'bg-violet-400',
    'bg-rose-400',
    'bg-sky-400',
    'bg-lime-400'
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-12 bg-gray-900/60">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-8">Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {skills.map((s, i) => {
          const color = colors[i % colors.length];
          return (
            <motion.div
              key={s.name}
              className="skill-tile"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="mb-3">
                <div className={`h-1 w-16 rounded-full ${color}`}></div>
              </div>
              <h3 className="font-semibold text-lg">{s.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{s.level}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
