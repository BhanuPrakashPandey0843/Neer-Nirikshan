"use client";
import React from "react";
import { motion } from "framer-motion";

const Contacthero = () => {
  return (
    <section className="relative font-[Rubik] bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT COLUMN (Text Content) */}
        <div className="-mt-10 flex flex-col gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-[#E9F8EC] to-[#DFFFE7] text-[#120B06] px-6 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm border border-green-100"
            >
              Get in Touch with <span className="font-semibold text-[#2E9E46]">Neer Nirikshan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#120B06] leading-tight mb-6"
            >
              We’re Here to Help <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43B34F] to-[#2E9E46]">
                Your Water Queries
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg text-gray-700 mb-10 max-w-xl leading-relaxed"
            >
              Have questions about water quality, testing, or how Neer Nirikshan works? 
              Fill out the form and our team of experts will get back to you promptly. 
              We value your feedback and are committed to supporting communities and researchers.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#43B34F] to-[#2E9E46] text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* RIGHT COLUMN (Bigger GIF) */}
        <div className="relative flex justify-center items-center h-[600px]">
          <motion.img
            src="https://cdn.dribbble.com/userupload/4749696/file/original-a3e159ca42b204289c0edb0a423cfaca.gif"
            alt="Contact GIF"
            className="w-full max-w-xl h-full object-contain rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contacthero;

