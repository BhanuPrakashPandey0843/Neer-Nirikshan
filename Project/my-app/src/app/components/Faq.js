"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Neer Nirikshan?",
    answer:
      "Neer Nirikshan is an interactive platform that predicts and visualizes groundwater quality. It combines machine learning models, Water Quality Index (WQI) calculations, and standards checking to provide reliable insights.",
  },
  {
    question: "How does the WQI prediction work?",
    answer:
      "Users input water parameters like pH, TDS, Nitrate, and Hardness. The system uses trained ML models to compute a Water Quality Index and categorize water quality as Excellent, Good, Poor, or Unsafe.",
  },
  {
    question: "Can I check if my water meets WHO/BIS standards?",
    answer:
      "Yes! Neer Nirikshan automatically compares your water parameters against WHO and BIS guidelines and highlights any deviations, giving instant health advisories.",
  },
  {
    question: "Do I need technical knowledge to use the platform?",
    answer:
      "No technical expertise is required. The platform is designed to be user-friendly, allowing anyone to input water data and understand the results easily.",
  },
  {
    question: "Can I visualize trends and contamination risks over time?",
    answer:
      "Absolutely! Neer Nirikshan provides interactive charts and maps so you can track groundwater quality trends and contamination risks effectively.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 bg-white text-center font-[Rubik]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#120B06] mb-4"
      >
        Frequently Asked <span className="text-[#4BB04F]">Questions</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed"
      >
        Find answers to common queries about Neer Nirikshan, its features, and how it helps you monitor and predict groundwater quality efficiently.
      </motion.p>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4 text-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-[#120B06] font-medium text-lg focus:outline-none"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-600 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
