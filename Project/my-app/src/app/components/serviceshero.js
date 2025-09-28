"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className="relative font-[Rubik] bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN (Text Content) */}
        <div className="flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#120B06] leading-tight mb-4"
          >
            Monitor, Analyze & Predict <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43B34F] to-[#2E9E46]">
              Groundwater Quality
            </span>{" "}
            for Everyone
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-700 mb-4 max-w-xl leading-relaxed"
          >
            Neer Nirikshan leverages <span className="font-semibold text-[#2E9E46]">Machine Learning</span> and <span className="font-semibold">WQI</span> methods 
            to provide <span className="font-medium">real-time water quality insights</span>. Tailored features include:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="list-disc list-inside text-gray-700 mb-4 space-y-1"
          >
            <li><strong>Farmer Mode:</strong> Crop suitability, irrigation advice, fertilizer recommendations.</li>
            <li><strong>Community Mode:</strong> Drinking water safety alerts, WQI scores, health guidance.</li>
            <li><strong>Industry Mode:</strong> Compliance checks, scaling/corrosion risk, treatment suggestions.</li>
           
          </motion.ul>

          <motion.div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#43B34F] to-[#2E9E46] text-white font-semibold shadow-lg hover:shadow-2xl transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white text-[#2E9E46] font-semibold shadow-lg hover:shadow-2xl border border-green-200 transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (Single Image / Card) */}
        <div className="flex justify-center items-center lg:order-last">
          <div className="relative w-[380px] h-[380px] lg:w-[450px] lg:h-[450px] rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <Image
              src="https://cdnl.iconscout.com/lottie/premium/thumb/smart-farming-use-drone-technologies-5122338-4282532.gif"
              alt="Groundwater Monitoring"
              fill
              className="object-cover"
              unoptimized={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesHero;
