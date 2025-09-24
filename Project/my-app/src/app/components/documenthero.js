"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DocumentHero = () => {
  return (
    <section className="relative font-[Rubik] bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN (Text Content) */}
        <div className="flex flex-col gap-8">
    
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#120B06] leading-tight mb-6"
          >
            Monitor & Predict <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43B34F] to-[#2E9E46]">
              Groundwater Quality
            </span>{" "}
            Efficiently
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-700 mb-10 max-w-xl leading-relaxed"
          >
            Neer Nirikshan leverages <span className="font-semibold text-[#2E9E46]">Machine Learning</span> and WQI methods 
            to provide <span className="font-medium">instant water quality analysis</span>, 
            interactive visualizations, and actionable insights for <span className="font-medium">communities and researchers</span>.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#43B34F] to-[#2E9E46] text-white font-semibold shadow-lg hover:shadow-2xl transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-[#2E9E46] font-semibold shadow-lg hover:shadow-2xl border border-green-200 transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (Single Image / Card) */}
        <div className="flex justify-center items-center lg:order-last">
          <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <Image
              src="https://global-uploads.webflow.com/59e16042ec229e00016d3a66/60b8f057616cb823051a2fda_blog-listing%20(11).gif"
              alt="Groundwater Monitoring"
              fill
              className="object-cover"
              unoptimized={true} // optional if not in next.config.js
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DocumentHero;
