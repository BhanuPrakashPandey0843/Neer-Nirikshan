"use client";

import { motion } from "framer-motion";

export default function Feature() {
  // All features content
  const features = [
    {
      title: "Crop Recommendation System",
      desc: "Suggests suitable crops for Kharif, Rabi, and Zaid seasons based on groundwater quality (salinity, nitrate, pH).",
      mode: "Farmer Mode",
    },
    {
      title: "Irrigation Advisory",
      desc: "Warns if water is too saline/hard for drip irrigation. Suggests blending/treatment (e.g., mixing canal + groundwater).",
      mode: "Farmer Mode",
    },
    {
      title: "Fertilizer Optimization",
      desc: "If groundwater has nitrates → reduce nitrogen fertilizer. Can integrate with SoilGrids API for soil fertility data.",
      mode: "Farmer Mode",
    },
    {
      title: "Drinking Water Safety Indicator",
      desc: "Color-coded (Green = Safe, Yellow = Moderate, Red = Unsafe) based on WHO/BIS standards for fluoride, arsenic, iron, nitrate.",
      mode: "Community Mode",
    },
    {
      title: "Treatment Suggestions",
      desc: "Practical methods like Activated Alumina for fluoride, Aeration + Filtration for iron, and more.",
      mode: "Community Mode",
    },
    {
      title: "Industrial Suitability Check",
      desc: "Ensures water meets needs of industries (Textile, Bottling, Power Plant). Suggests pre-treatment like RO, Softener, Sand Filter.",
      mode: "Industry Mode",
    },
  ];

  return (
    <section
      id="features"
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
        Features <span className="text-[#4BB04F]">Neer Nirikshan</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed"
      >
        Neer Nirikshan empowers communities, farmers, industries, and policymakers
        with accurate, real-time groundwater quality insights.
      </motion.p>

      {/* SVG Feature Layout */}
      <div className="w-full flex flex-col md:flex-row py-24 bg-white">
        {features.map((f, i) => (
          <div
            key={i}
            className={`relative w-full mt-6 md:w-auto ${
              i === 0
                ? "ml-auto md:!mt-0 md:-mr-[68px]"
                : i === 1
                ? "md:mt-[141px] md:-mr-[21px]"
                : i === 2
                ? "md:!mt-0 md:!w-auto md:-ml-[48px]"
                : i === 3
                ? "md:mt-[283px] md:-ml-[302px]"
                : i === 4
                ? "md:mt-[141px] md:-ml-[68px]"
                : "mr-auto md:!mt-0 md:-ml-[68px]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]"
              viewBox="0 0 512 512"
            >
              <path
                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                fill="url(#SvgjsLinearGradient1060)"
              />
              <defs>
                <linearGradient id="SvgjsLinearGradient1060">
                  <stop stopColor="#4BB04F" offset="0" />
                  <stop stopColor="#4BB04F" offset="1" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-[#fff] max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
              <h1 className="text-xl md:text-lg font-semibold text-[#4BB04F] md:my-2">
                {f.mode}
              </h1>
              <h2 className="text-lg md:text-md font-bold text-[#fff]">
                {f.title}
              </h2>
              <p className="w-full md:text-sm text-md my-3 md:mt-4 line-clamp-4 md:line-clamp-none">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
