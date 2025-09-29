"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";  
import Serviceshero from "../components/serviceshero";
import Footer from "../components/Footer";   
import Feature from "../components/Feature";
import ProjectsShowcase from "../components/ProjectsShowcase"; 
import Pricing from "../components/Pricing";

export default function ServicesPage() {
  const [mode, setMode] = useState("farmer"); // default Farmer mode

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Serviceshero />
      </motion.div>
      
      {/* Mode Switcher */}
      <div className="flex justify-center space-x-4 my-8">
        {["farmer", "community", "industry"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              mode === m
                ? "bg-[#4BB04F] text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)} Mode
          </button>
        ))}
      </div>

      {/* Feature Section (Dynamic based on mode) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Feature mode={mode} />
      </motion.div>

      {/* Projects Showcase */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <ProjectsShowcase />
      </motion.section>
{/* Pricing */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Pricing />
      </motion.section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
