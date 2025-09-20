"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import phoneMockup from "./assets/price.png";

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
            alt="NTCC Mobile App"
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
          <p className="text-sm text-[#4BB04F] font-medium">Our Prices</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Professional Project Assistance
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Affordable, student-friendly pricing with complete transparency. 
            Pay only for what you need – from resumes to complete projects.
          </p>

          {/* Features with Pricing */}
          <ul className="space-y-4">
            <li className="flex items-start justify-between gap-3 border-b pb-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
                <span className="text-gray-700 text-sm font-medium">
                  Resume (ATS-Friendly)
                </span>
              </div>
              <span className="text-[#120B06] font-semibold">₹99</span>
            </li>
            <li className="flex items-start justify-between gap-3 border-b pb-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
                <span className="text-gray-700 text-sm font-medium">
                  PowerPoint Presentation (PPT)
                </span>
              </div>
              <span className="text-[#120B06] font-semibold">₹49</span>
            </li>
            <li className="flex items-start justify-between gap-3 border-b pb-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
                <span className="text-gray-700 text-sm font-medium">
                  NTCC Thesis / Project Report
                </span>
              </div>
              <span className="text-[#120B06] font-semibold">₹399</span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
                <span className="text-gray-700 text-sm font-medium">
                  Complete Project (with Documentation)
                </span>
              </div>
              <span className="text-[#120B06] font-semibold">₹599</span>
            </li>
          </ul>

          {/* Contact Us Button */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg text-white font-medium shadow-md transition-all hover:shadow-lg"
              style={{ backgroundColor: "#4BB04F" }}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
