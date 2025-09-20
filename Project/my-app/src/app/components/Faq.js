"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How will I receive my project?",
    answer:
      "We deliver all completed projects directly to your email for quick and secure access.",
  },
  {
    question: "Do you provide documentation with the project?",
    answer:
      "Yes, every project comes with proper documentation to help you understand and present it easily.",
  },
  {
    question: "Will I get a presentation (PPT) along with the project?",
    answer:
      "Absolutely! We provide a ready-to-use PowerPoint presentation to make your submission seamless.",
  },
  {
    question: "Are your services affordable for students?",
    answer:
      "Yes, we offer high-quality work at very reasonable and student-friendly prices.",
  },
  {
    question: "Can I get both project and resume help together?",
    answer:
      "Of course! We provide bundled services including projects, reports, resumes, and more at discounted rates.",
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
        Find answers to common queries about our services, features, and how we
        can help you make the most of your experience.
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
