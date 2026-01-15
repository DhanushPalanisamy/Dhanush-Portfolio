import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
        <img src="/profile.jpeg" alt="Dhanush" style={{'--profile-focus':'50% 5%'}} className="w-44 h-44 rounded-full shadow-2xl profile-img border-4 border-cyan-400" />
        <div className="prose prose-invert max-w-3xl mx-auto text-center md:text-left">
          <p>
            Hello — I'm <strong>Dhanush</strong>, My work spans data processing, visualization, and application development using Python (Pandas, NumPy), SQL, and Excel. I build scalable data pipelines, perform in-depth exploratory analysis, engineer features, and create interactive dashboards with Plotly, Power BI, and Tableau. 
            I also develop web-based interfaces and implement machine learning models using scikit-learn and XGBoost, emphasizing model interpretability with SHAP and reproducible, deployment-ready solutions.
          </p>
          <div className="mt-6">
            <a href="/resume.pdf" download className="px-5 py-2 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
