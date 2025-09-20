"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import phoneMockup from "./assets/phone.png";

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
            alt="NTCC Mobile App"
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
          <p className="text-sm text-[#4BB04F] font-medium">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Affordable Project & Resume Help
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            At very reasonable prices, we help students complete their NTCC final year projects, reports, ATS-friendly resumes, and personalized projects for resume building. All services are designed to save you time while making your submissions professional and impactful.
          </p>

          {/* Features */}
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Complete NTCC final year projects with proper documentation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Well-structured project reports and submissions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                ATS-friendly resumes highlighting your projects effectively.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#4BB04F] w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">
                Personalized projects tailored for your career growth.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;
