"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  { src: "/assets/one.png", text: "Water Test" },
  { src: "/assets/two.png", text: "Safe Usage" },
  { src: "/assets/three.png", text: "Check Quality" },
  { src: "/assets/four.png", text: "River Care" },
  { src: "/assets/five.png", text: "Young Scientists" },
  { src: "/assets/six.png", text: "Pollution Check" },
  { src: "/assets/seven.png", text: "Water Safety" },
  { src: "/assets/eighteen.png", text: "Clean Rivers" },
  { src: "/assets/nine.png", text: "Field Test" },
  { src: "/assets/ten.png", text: "Lab Study" },
  { src: "/assets/eleven.png", text: "Inspection" },
  { src: "/assets/twel.png", text: "Inspection" },
  { src: "/assets/thrteen.png", text: "Inspection" },
];

// Scroll column with caption
const ScrollColumn = ({ direction = "up", speed = 25 }) => (
  <motion.div
    animate={{ y: direction === "up" ? ["0%", "-100%"] : ["-100%", "0%"] }}
    transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
    className="flex flex-col gap-8"
  >
    {[...cards, ...cards].map((card, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.07, rotate: 1 }}
        className="relative bg-white p-3 rounded-3xl shadow-lg hover:shadow-2xl transition-all w-56 h-64 flex flex-col items-center justify-between border border-gray-100 hover:border-green-200"
      >
        <div className="relative w-full h-44 overflow-hidden rounded-2xl">
          <Image
            src={card.src}
            alt={`gallery-${i}`}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500 rounded-2xl"
          />
        </div>
        <p className="text-sm font-semibold text-gray-800 mt-3 tracking-tight">
          {card.text}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

const Hero = () => {
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
              Welcome to <span className="font-semibold text-[#2E9E46]">Helpers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#120B06] leading-tight mb-6"
            >
              Complete Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43B34F] to-[#2E9E46]">
                Final Year Projects
              </span>{" "}
              Stress-Free
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg text-gray-700 mb-10 max-w-xl leading-relaxed"
            >
              At <span className="font-semibold text-[#2E9E46]">Helpers</span>, we provide{" "}
              <span className="font-medium">NTCC final year projects</span> with{" "}
              <span className="font-medium">clear reports, docs</span> and{" "}
              <span className="font-medium">ATS-friendly resumes</span> — all at{" "}
              <span className="font-semibold">student-friendly prices</span>.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#43B34F] to-[#2E9E46] text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* RIGHT COLUMN (Scrolling Cards) */}
        <div className="relative flex justify-center gap-8 h-[520px] overflow-hidden">
          {/* Fade edges */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

          <ScrollColumn direction="up" speed={28} />
          <ScrollColumn direction="down" speed={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
