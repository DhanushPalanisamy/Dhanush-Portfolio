// src/components/Hero3D.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const Hero3D = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('profileImageUrl');
    setUrl(stored || '/profile.jpeg');
  }, []);

  // Profile image URL is read from localStorage (key: profileImageUrl). No inline edit UI.

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-0">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 2, 1]} intensity={1.2} />
          <Float>
            <Sphere args={[1, 64, 64]} scale={1.8}>
              <MeshDistortMaterial color="#0ea5e9" speed={2} distort={0.25} />
            </Sphere>
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
              <div className="text-sm uppercase text-cyan-300 font-semibold mb-3">DHANUSH PALANISAMY</div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">I'M DHANUSH<br /><span className="text-cyan-400 typewriter">I'M A SOFTWARE ENGINEER</span></h1>
              <p className="text-gray-300 mt-6">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing, indulgence way everything joy alteration boisterous the attachment.</p>
              <div className="mt-6 flex gap-3 justify-center md:justify-start">
                <a href="#contact" className="px-5 py-3 bg-cyan-500 text-black rounded-full font-semibold">GET IN TOUCH</a>
                <a href="#projects" className="px-4 py-3 border border-white/6 rounded-full">See Projects</a>
              </div>
              <div className="logo-strip mt-8 flex items-center gap-6 overflow-x-auto justify-center md:justify-start">
                <img className="logo-item" src="/project1.png" alt="logo1" />
                <img className="logo-item" src="/project2.jpg" alt="logo2" />
                <img className="logo-item" src="/project3.png" alt="logo3" />
              </div>
            </div>
          </motion.div>

          <motion.div className="flex justify-center md:justify-end" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="profile-card max-w-sm md:mr-12 text-center">
              <div className="relative inline-block profile-img-wrapper mx-auto">
                  <img src={url} alt="Dhanush profile" style={{'--profile-focus':'50% 5%'}} className="w-56 h-56 rounded-lg profile-img object-cover object-center" />
                  <div className="profile-neon-ring" aria-hidden />
                </div>
              <div className="mt-4">
                <div className="font-semibold text-lg">Dhanush Palanisamy</div>
                <div className="text-sm text-gray-400 mt-1">Python • Web Development • Visualization</div>
                <div className="mt-4 flex items-center justify-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-gray-300 bg-white/3 rounded-md">Open to work — Available for hire</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Inline edit UI removed */}
      </div>
    </section>
  );
};

export default Hero3D;
