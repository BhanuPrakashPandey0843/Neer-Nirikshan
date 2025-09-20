"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative font-[Rubik] bg-gradient-to-br from-[#F9FFF9] via-[#F9FFF9] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-[#E9F8EC] text-[#120B06] px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-sm"
          >
            Welcome to <span className="font-semibold text-[#4BB04F]">Helpers</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#120B06] leading-tight mb-6"
          >
            Complete Your <br />
            <span className="text-[#4BB04F]">Final Year Projects</span> <br />
            Stress-Free
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-700 mb-8 max-w-xl leading-relaxed"
          >
            At <span className="font-semibold text-[#4BB04F]">Helpers</span>, we
            provide <span className="font-medium">NTCC final year projects</span>{" "}
            with clear documentation, formatted reports, and{" "}
            <span className="font-medium">ATS-friendly resumes</span> — all at{" "}
            <span className="font-semibold">student-friendly prices</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button className="bg-gradient-to-r from-[#4BB04F] to-[#3a9440] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
              Get Started →
            </button>
            <button className="flex items-center gap-2 font-medium text-[#120B06] hover:text-[#4BB04F] transition">
              <i className="ri-play-circle-fill text-[#F98531] text-2xl"></i>
              How It Works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { value: "3000+", label: "Projects Delivered", icon: "ri-rocket-line" },
              { value: "1500+", label: "Happy Students", icon: "ri-user-smile-line" },
              { value: "1000+", label: "Resumes Created", icon: "ri-profile-line" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <i className={`${stat.icon} text-2xl text-[#4BB04F] mb-2`}></i>
                <p className="text-3xl font-bold text-[#120B06]">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Mockups */}
        <div className="relative flex justify-center lg:justify-end">
       
        <motion.img
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 5 }}
  src="https://cdn.dribbble.com/users/42048/screenshots/8350927/media/23289b76ac7353ad4f0d0619ce6e9f2d.gif"
  alt="Docs Mockup"
  className="w-[500px] md:w-[600px] lg:w-[700px] -ml-16 mt-10 hidden md:block drop-shadow-xl opacity-80 rounded-xl"
/>

        </div>
      </div>

      {/* Bottom Features */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="bg-white/95 backdrop-blur-md py-10 px-6 shadow-inner grid grid-cols-2 sm:grid-cols-4 gap-8 text-center rounded-t-2xl"
      >
        {[
          {
            icon: "ri-file-paper-2-line",
            color: "#4BB04F",
            title: "Complete Projects",
            desc: "NTCC final year projects with docs",
          },
          {
            icon: "ri-book-2-line",
            color: "#3A82F6",
            title: "Project Reports",
            desc: "Well-written & formatted reports",
          },
          {
            icon: "ri-profile-line",
            color: "#F98531",
            title: "ATS Resumes",
            desc: "Boost career with ATS-friendly resumes",
          },
          {
            icon: "ri-wallet-3-line",
            color: "#FFB800",
            title: "Low-Cost Pricing",
            desc: "Affordable & student-friendly",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-transform duration-300 bg-white p-5 rounded-xl shadow-md hover:shadow-xl"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3"
              style={{ backgroundColor: `${feature.color}20` }}
            >
              <i className={`${feature.icon} text-2xl`} style={{ color: feature.color }}></i>
            </div>
            <p className="font-semibold text-[#120B06]">{feature.title}</p>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
