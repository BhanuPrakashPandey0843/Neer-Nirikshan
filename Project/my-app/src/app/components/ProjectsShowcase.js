"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import img1 from "../components/assets/opoa.png";
import img2 from "../components/assets/opob.png";
import img3 from "../components/assets/opoc.png";

const projects = [
  {
    title: "Timeless Elegance",
    subtitle: "The Classic Revival",
    image: img1,
  },
  {
    title: "Nature’s Embrace",
    subtitle: "The Organic Living Collection",
    image: img2,
  },
  {
    title: "Harmony in Simplicity",
    subtitle: "The Minimalist Collection",
    image: img3,
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="py-16 bg-[#F8F6F4] text-center font-sans">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#120B06] mb-6"
      >
        Why Choose <span className="text-[#4BB04F]">Helpers</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed"
      >
        We empower students and professionals with high-quality, affordable
        solutions. From NTCC & final-year projects to ATS-friendly resumes, our
        mission is simple: to help you succeed — professionally and reliably.
      </motion.p>

      {/* Projects Grid */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 px-6 md:px-20">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-xl w-80 p-5 flex flex-col items-center border border-gray-200 hover:shadow-2xl transition"
          >
            <div className="w-full h-56 rounded-xl overflow-hidden border-2 border-gray-200 mb-4 shadow-md relative">
              <Image
                src={project.image}
                alt={`${project.title} - ${project.subtitle}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="text-gray-600 hover:text-[#4BB04F] transition text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#4BB04F] transition text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-14 px-8 py-3 bg-[#4BB04F] text-white text-sm font-medium rounded-md shadow-md hover:bg-[#3a8e3e] transition"
      >
        View More
      </motion.button>
    </section>
  );
};

export default ProjectsShowcase;
