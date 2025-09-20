"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing.js";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq";
import AppDownload from "./components/AppDownload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-16">
        {/* Hero */}
        <motion.section
          id="hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Hero />
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <About />
        </motion.section>

        {/* Pricing */}
        <motion.section
          id="pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Pricing />
        </motion.section>

        {/* Services */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Services />
        </motion.section>


<motion.section
          id="
      Testimonials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          
      <Testimonials />
        </motion.section>

      {/* Faq */}
        <motion.section
          id="app"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Faq />
        </motion.section>







        {/* App Download */}
        <motion.section
          id="app"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <AppDownload />
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Contact />
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
