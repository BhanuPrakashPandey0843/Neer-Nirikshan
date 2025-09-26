"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";  
import Calhero from "../components/calhero";
import Wqicalculator from "../components/Wqicalculator";
import Footer from "../components/Footer";   

export default function CalculatorPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Calhero />
      </motion.div>

       {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Wqicalculator />
      </motion.div>
 
    

      {/* Footer */}
      <Footer />
    </div>
  );
}
