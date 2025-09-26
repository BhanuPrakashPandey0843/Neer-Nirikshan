"use client";

import React from "react";
import { motion } from "framer-motion";

const Wqicalculator = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#120B06] mb-8 text-center leading-snug"
        >
          Water Quality Index (WQI){" "}
          <span className="text-[#4BB04F]">Calculator</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 text-center"
        >
          Enter key water quality parameters and instantly calculate the{" "}
          <span className="font-semibold text-[#4BB04F]">WQI score</span> 
          to assess whether your groundwater is safe for drinking, domestic, or 
          agricultural purposes.
        </motion.p>

       
      </div>
    </section>
  );
};

export default Wqicalculator;
