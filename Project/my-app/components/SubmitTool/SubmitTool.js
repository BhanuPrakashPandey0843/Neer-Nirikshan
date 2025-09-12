"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SubmitTool() {
  const icons = [
    { src: "https://eliteai.tools/images/home/1.svg", position: "top-[5%] left-[5%]", delay: 0.2 },
    { src: "https://eliteai.tools/images/home/3.svg", position: "top-[5%] right-[5%]", delay: 0.6 },
    { src: "https://eliteai.tools/images/home/5.svg", position: "top-[45%] left-[15%]", delay: 0.8 },
    { src: "https://eliteai.tools/images/home/10.svg", position: "top-[45%] right-[15%]", delay: 1.2 },
    { src: "https://eliteai.tools/images/home/4.svg", position: "top-[85%] left-[5%]", delay: 1.4 },
    { src: "https://eliteai.tools/images/home/8.svg", position: "top-[85%] right-[5%]", delay: 1.8 },
    { src: "https://eliteai.tools/images/home/9.svg", position: "top-[25%] left-[30%]", delay: 2.0, hidden: "hidden md:block" },
    { src: "https://eliteai.tools/images/home/7.svg", position: "top-[65%] right-[30%]", delay: 2.2, hidden: "hidden md:block" },
  ];

  return (
    <div className="w-full bg-[#FBFCFF]">
      <div className="max-w-4xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl">
          {/* Content */}
          <div className="relative z-10 p-8 text-center md:p-16 lg:p-20">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#333333] sm:text-5xl">
              Neer-Nirikshan Features
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-[#666666]">
              A smart portal for groundwater quality and construction material monitoring. Empowering civil engineers with predictive insights.
            </p>

            <a
              href="/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-[#558AFF] to-[#3B6BFF] rounded-xl hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explore Documentation
            </a>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {icons.map((icon, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
                transition={{ delay: icon.delay, repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className={`absolute w-16 h-16 ${icon.position} ${icon.hidden || ""}`}
              >
                <Image src={icon.src} alt="Icon" width={64} height={64} unoptimized />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
