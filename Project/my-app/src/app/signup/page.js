"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";  
import Signuphero from "../components/signuphero";
import Footer from "../components/Footer";   

// ✅ Define fadeUp animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SignupPage() {
  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}  // ✅ Now works
      >
        <Signuphero />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
