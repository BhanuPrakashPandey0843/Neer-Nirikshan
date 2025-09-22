"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import phoneMockup from "./assets/price.png"; // Keep the same placeholder or update if needed

const Pricing = () => {
  return (
    <section className="font-[Rubik] bg-[#F9FFF9] px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src={phoneMockup}
            alt="Neer Nirikshan Dashboard"
            width={400}
            height={500}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm text-[#4BB04F] font-medium">Our Platform</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Free & Open Access
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Neer Nirikshan provides free access to groundwater quality predictions, Water Quality Index (WQI) calculations, and interactive visualizations. All tools are designed to help communities, researchers, and policymakers monitor water safety effortlessly.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm font-medium">
                Upload water data (CSV/Excel) for WQI predictions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm font-medium">
                Compare ML-based predictions with traditional WQI calculations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm font-medium">
                Interactive visualizations for contamination risks and trends
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm font-medium">
                Parameter-wise standards check (WHO/BIS) for safety advisory
              </span>
            </li>
          </ul>

          {/* Contact Us Button */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg text-white font-medium shadow-md transition-all hover:shadow-lg"
              style={{ backgroundColor: "#4BB04F" }}
            >
              Try It Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
