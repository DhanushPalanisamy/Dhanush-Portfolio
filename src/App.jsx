import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Keep a class on <html> so global CSS can respond to theme changes.
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className={darkMode ? "bg-gray-950 text-white" : "bg-white text-slate-900"}>
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero3D />
      <About />
  <Skills />
  <Projects />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
