"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Offer() {
  const features = [
    {
      service: "Groundwater Quality Testing",
      title: "AI-Powered Water Analysis",
      desc: "Upload water sample data (pH, TDS, fluoride, etc.) and get instant quality classification with actionable insights.",
      img: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg",
    },
    {
      service: "Data Visualization",
      title: "Interactive Dashboards",
      desc: "Monitor groundwater trends with charts, maps, and reports for smarter decision-making in water management.",
      img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    },
    {
      service: "Smart Alerts",
      title: "Real-Time Notifications",
      desc: "Get notified when water quality falls below safe levels to take immediate action for communities & projects.",
      img: "https://images.pexels.com/photos/691569/pexels-photo-691569.jpeg",
    },
    {
      service: "Forecasting & Insights",
      title: "Predict Future Trends",
      desc: "Use ML & AI models to forecast future water quality and plan sustainable groundwater usage effectively.",
      img: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg",
    },
  ];

  return (
    <section
      id="services"
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
        Services We <span className="text-[#558AFF]">Offer</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed"
      >
        From groundwater quality analysis to predictive insights, Neer Nirikshan
        provides reliable, data-driven solutions for communities, researchers,
        and civil engineering projects.
      </motion.p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-left bg-white rounded-xl shadow-md p-4 h-full"
          >
            {/* Alternate layout */}
            {i % 2 === 0 ? (
              <>
                {/* Image on top */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Text below */}
                <div className="flex flex-col flex-1">
                  <p className="text-sm text-[#558AFF] font-medium mb-1">
                    {item.service}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 flex-1">
                    {item.desc}
                  </p>
                  <button className="mt-auto w-max bg-[#558AFF] hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
                    Learn More
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Text on top */}
                <div className="flex flex-col flex-1 mb-4">
                  <p className="text-sm text-[#558AFF] font-medium mb-1">
                    {item.service}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 flex-1">
                    {item.desc}
                  </p>
                  <button className="mt-auto w-max bg-[#558AFF] hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
                    Learn More
                  </button>
                </div>
                {/* Image below */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
