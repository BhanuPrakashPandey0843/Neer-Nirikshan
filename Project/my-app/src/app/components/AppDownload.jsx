"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import phoneMockup from "./assets/banner.png"; // Update image if needed

const AppDownload = () => {
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
            alt="Neer Nirikshan App"
            width={400}
            height={600}
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
            Groundwater Quality Monitoring & Prediction
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Neer Nirikshan is an interactive platform for predicting and visualizing groundwater quality. 
            Users can check water parameters against WHO/BIS standards, compute Water Quality Index (WQI), 
            and get AI-powered contamination risk assessments — all through a simple and user-friendly interface.
          </p>

          {/* Features */}
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Predict Water Quality Index (WQI) using machine learning models.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Compare results across multiple AI models for reliable assessments.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Check water parameters against WHO and BIS standards in real-time.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Interactive visualizations and maps to track groundwater safety trends.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;
