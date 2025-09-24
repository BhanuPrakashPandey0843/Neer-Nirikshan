"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";  
import DocumentHero from "../components/documenthero";
import Footer from "../components/Footer";   

export default function DocumentPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white">
      <Navbar />

      <main>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <DocumentHero/>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
