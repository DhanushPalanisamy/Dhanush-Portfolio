import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
        <img src="/profile.jpeg" alt="Dhanush" style={{'--profile-focus':'50% 5%'}} className="w-44 h-44 rounded-full shadow-2xl profile-img border-4 border-cyan-400" />
        <div className="prose prose-invert max-w-3xl mx-auto text-center md:text-left">
          <p>
            Hello — I'm <strong>Dhanush</strong>, a data analyst who loves transforming messy datasets into clear visual stories. I build end-to-end data pipelines, perform exploratory analysis, engineer features, and create production-ready dashboards.
            Strong in Python (Pandas, NumPy), SQL, and data visualization (Plotly, Power BI, Tableau). • Experience with machine learning (scikit-learn, XGBoost) and model interpretability (SHAP). • Focus on reproducibility: versioned notebooks, clear documentation, and deployment-ready dashboards.
          </p>
          <div className="mt-6">
            <a href="/resume.pdf" download className="px-5 py-2 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
