"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of projects do you provide?",
    answer:
      "We deliver academic and professional projects in multiple domains like Web Development, Machine Learning, Data Science, and Civil/Mechanical Engineering with complete source code.",
  },
  {
    question: "Do I get documentation and reports with the project?",
    answer:
      "Yes! Every project includes a detailed project report, proper documentation, and implementation guidelines for easy understanding and submission.",
  },
  {
    question: "Can you customize the project according to my requirements?",
    answer:
      "Yes, we offer full customization. You can share your specific requirements, and we’ll tailor the project to match your syllabus or personal goals.",
  },
  {
    question: "Are your services budget-friendly for students?",
    answer:
      "Definitely! We maintain affordable pricing with student discounts, while ensuring top-notch quality in coding, documentation, and support.",
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
        Frequently Asked <span className="text-[#558AFF]">Questions</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed"
      >
        Find answers to the most common queries about our projects, services, and
        support designed especially for students and professionals.
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
