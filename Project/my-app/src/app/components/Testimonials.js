"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Neer Nirikshan helped me understand the water quality in my village. The WQI predictions and interactive maps made it easy to see which areas need attention.",
    name: "Ravi Sharma",
    role: "Environmental Researcher",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    color: "#4BB04F",
  },
  {
    text: "Using the dashboard, we could quickly assess groundwater contamination risks across multiple locations. The AI predictions were surprisingly accurate.",
    name: "Meena Kumari",
    role: "NGO Water Analyst",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    color: "#48407D",
  },
  {
    text: "As an environmental engineer, I found the Neer Nirikshan platform invaluable for presenting WQI data to stakeholders. The visualizations and standards check feature saved a lot of time.",
    name: "Ankit Verma",
    role: "Environmental Engineer",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    color: "#F98531",
  },
  {
    text: "The system’s combination of traditional WQI calculations and ML-based predictions gave me confidence in water quality assessments. Highly recommend for researchers and policymakers.",
    name: "Priya Singh",
    role: "Water Quality Specialist",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    color: "#FFB800",
  },
];

// Reusable testimonial card
const TestimonialCard = ({ t }) => (
  <div className="min-w-[320px] max-w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between mx-4 transition-transform duration-300 hover:scale-105">
    {/* Quote icon */}
    <i className="ri-double-quotes-l text-4xl mb-4" style={{ color: t.color }} />

    {/* Testimonial text */}
    <p className="text-gray-600 text-sm leading-relaxed mb-6 break-words whitespace-normal">
      {t.text}
    </p>

    {/* User info */}
    <div className="flex items-center gap-4 mt-auto">
      <img
        src={t.img}
        alt={t.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="text-base font-semibold text-[#120B06]">{t.name}</p>
        <p className="text-sm text-gray-500">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="font-[Rubik] bg-[#F9FFF9] text-[#120B06] px-6 py-20 overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        What Our <span className="text-[#4BB04F]">Users Say</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center text-gray-600 mb-16 text-lg leading-relaxed"
      >
        Real feedback from researchers, engineers, and water specialists who rely on Neer Nirikshan for groundwater quality monitoring and risk assessment.
      </motion.p>

      {/* Row 1 → left to right */}
      <motion.div
        className="flex mb-10 group"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`row1-${i}`} t={t} />
        ))}
      </motion.div>

      {/* Row 2 → right to left */}
      <motion.div
        className="flex group"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`row2-${i}`} t={t} />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
