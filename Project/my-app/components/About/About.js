"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  RiDropLine,
  RiBarChart2Line,
  RiAlertLine,
  RiEarthLine,
} from "react-icons/ri";
import phone from "./image.png"; // replace with your app preview

export default function About() {
  const featuresLeft = [
    {
      icon: <RiDropLine size={26} className="text-[#558AFF]" />,
      title: "Groundwater Monitoring",
      desc: "Upload and analyze water samples (pH, TDS, fluoride, etc.) to track quality in real time.",
    },
    {
      icon: <RiBarChart2Line size={26} className="text-[#558AFF]" />,
      title: "Data Visualization",
      desc: "Interactive dashboards with maps, charts, and tables to understand regional water trends.",
    },
  ];

  const featuresRight = [
    {
      icon: <RiAlertLine size={26} className="text-[#558AFF]" />,
      title: "Smart Alerts",
      desc: "Instant notifications for unsafe water quality or abnormal readings in your region.",
    },
    {
      icon: <RiEarthLine size={26} className="text-[#558AFF]" />,
      title: "Forecast & Insights",
      desc: "AI-powered predictions for future groundwater trends, helping in sustainable planning.",
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
      className="relative py-24 bg-[#FBFCFF] text-center font-[Rubik] overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#333333] mb-6"
      >
        Why Choose{" "}
        <span className="text-[#558AFF]">Neer Nirikshan</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-2xl mx-auto text-[#666666] mb-16 text-lg leading-relaxed"
      >
        Neer Nirikshan is your smart civil and groundwater quality monitoring
        portal. From real-time sample tracking to AI-powered forecasting, we
        ensure safer water, better decision-making, and sustainable planning for
        communities and researchers.
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
              className="group relative w-full max-w-[320px] mx-auto rounded-2xl 
              border border-[#C9DAFF] bg-white/80 backdrop-blur-lg 
              shadow-md p-6 text-left transition-all 
              hover:scale-[1.05] hover:shadow-xl hover:border-[#558AFF]/60"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-full bg-[#C9DAFF]/40">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#333333]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed">
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
            animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute w-64 h-64 bg-gradient-to-tr from-[#558AFF] via-[#C9DAFF] to-[#FBFCFF] blur-[90px] rounded-full -z-10"
          />
          {/* Floating phone */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              src={phone}
              alt="App preview"
              className="max-w-[140px] md:max-w-[180px] lg:max-w-[250px] drop-shadow-xl"
            />
          </motion.div>
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
              className="group relative w-full max-w-[320px] mx-auto rounded-2xl 
              border border-[#C9DAFF] bg-white/80 backdrop-blur-lg 
              shadow-md p-6 text-left transition-all 
              hover:scale-[1.05] hover:shadow-xl hover:border-[#558AFF]/60"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-full bg-[#C9DAFF]/40">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#333333]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
