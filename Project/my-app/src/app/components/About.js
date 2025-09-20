"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  RiBook2Line,
  RiUserStarLine,
  RiRocketLine,
  RiLightbulbFlashLine,
} from "react-icons/ri";
import phone from "./assets/about.png"; // replace with your image

export default function About() {
  const featuresLeft = [
    {
      icon: <RiBook2Line size={30} className="text-[#4BB04F]" />,
      title: "Academic Excellence",
      desc: "Structured NTCC & final-year projects with plagiarism-free impactful reports.",
    },
    {
      icon: <RiUserStarLine size={30} className="text-[#4BB04F]" />,
      title: "Career Growth",
      desc: "ATS-friendly resumes & tailored projects to boost your career profile.",
    },
  ];

  const featuresRight = [
    {
      icon: <RiRocketLine size={30} className="text-[#4BB04F]" />,
      title: "Fast Delivery",
      desc: "Never miss a deadline — we deliver quickly without losing quality.",
    },
    {
      icon: <RiLightbulbFlashLine size={30} className="text-[#4BB04F]" />,
      title: "Innovation First",
      desc: "Creative, modern solutions to help you stand out in academics & career.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-white text-center font-[Rubik] overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#120B06] mb-6"
      >
        Why Choose <span className="text-[#4BB04F]">Helpers</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed"
      >
        We empower students and professionals with high-quality, affordable
        solutions. From NTCC & final-year projects to ATS-friendly resumes, our
        mission is simple: to help you succeed — professionally and reliably.
      </motion.p>

      {/* Layout */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start px-6">
        {/* Left Features */}
        <div className="space-y-8">
          {featuresLeft.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group relative w-full max-w-[300px] mx-auto rounded-2xl 
              border border-white/30 bg-white/10 backdrop-blur-xl 
              shadow-lg p-6 text-left transition-all 
              hover:scale-[1.05] hover:shadow-2xl hover:border-[#4BB04F]/50"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="p-3 rounded-full bg-[#EAF8EB]">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#120B06]">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center Phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          {/* Soft gradient glow */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute w-64 h-64 bg-gradient-to-tr from-[#4BB04F] via-[#F98531] to-[#888EFF] blur-[80px] rounded-full -z-10"
          />
          {/* Floating phone */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              src={phone}
              alt="App preview"
              className="max-w-[140px] md:max-w-[180px] lg:max-w-[250px] drop-shadow-xl"
            />
          </motion.div>
          {/* Oval shadow */}
          <div  />
        </motion.div>

        {/* Right Features */}
        <div className="space-y-8">
          {featuresRight.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group relative w-full max-w-[300px] mx-auto rounded-2xl 
              border border-white/30 bg-white/10 backdrop-blur-xl 
              shadow-lg p-6 text-left transition-all 
              hover:scale-[1.05] hover:shadow-2xl hover:border-[#4BB04F]/50"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="p-3 rounded-full bg-[#EAF8EB]">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#120B06]">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile order fix */}
      <style jsx>{`
        @media (max-width: 768px) {
          #about .grid {
            display: grid;
            grid-template-columns: 1fr;
          }
          #about .grid > div:nth-child(2) {
            order: -1; /* phone comes first */
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
