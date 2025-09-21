import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "Timeless Elegance",
    subtitle: "The Classic Revival",
    image: "https://i.imgur.com/A2pPOhM.jpg",
  },
  {
    title: "Nature’s Embrace",
    subtitle: "The Organic Living Collection",
    image: "https://i.imgur.com/gYayUQg.jpg",
  },
  {
    title: "Harmony in Simplicity",
    subtitle: "The Minimalist Collection",
    image: "https://i.imgur.com/ru81uW8.jpg",
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="py-16 bg-[#F8F6F4] text-center font-sans">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 font-altruist">Our Clients</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl w-80 p-5 flex flex-col items-center border border-gray-200"
          >
            <div className="w-full h-56 rounded-xl overflow-hidden border-2 border-gray-200 mb-4 shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="text-gray-600 hover:text-[#7654A0] transition text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#7654A0] transition text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-14 px-8 py-3 bg-[#7654A0] text-white text-sm font-medium rounded-md hover:bg-[#684899] transition">
        View More
      </button>
    </section>
  );
};

export default ProjectsShowcase;
