"use client";
import React from "react";
import { motion } from "framer-motion";

const Paper = () => {
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
          Performance Comparison of Machine Learning Approaches for{" "}
          <span className="text-[#4BB04F]">
            Groundwater Quality Assessment
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 text-center"
        >
          Our platform provides an end-to-end solution designed to simplify water
          quality monitoring and analysis. Here’s why we stand out:
        </motion.p>

        {/* Documentation Content */}
        <div className="space-y-8 text-gray-700">
          {/* Point 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#E9F8EC] to-[#DFFFE7] p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-[#120B06] mb-2">
              1. Accurate Monitoring
            </h3>
            <p>
              Our system uses cutting-edge technology to ensure precise water
              quality measurements, eliminating guesswork and delivering reliable
              data for decision-making.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#FFF5E5] to-[#FFEFD5] p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-[#120B06] mb-2">
              2. Easy to Use
            </h3>
            <p>
              Our interface is designed for simplicity. Even non-technical users
              can easily navigate and generate meaningful insights from data.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-[#E8F0FE] to-[#E0ECFF] p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold text-[#120B06] mb-2">
              3. Data-Driven Insights
            </h3>
            <p>
              Beyond monitoring, we transform raw data into actionable insights
              with clear reports and analytics to guide sustainable practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Paper;
