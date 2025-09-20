"use client";

import { motion } from "framer-motion";
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiGlobalLine,
} from "react-icons/ri"; // Remix Icons
import Image from "next/image";
import logo from "./assets/logo.png"; // Update path if needed

export default function Footer() {
  return (
    <footer className="relative bg-[#120B06] text-white font-[Rubik] px-6 py-16">
      {/* Gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120B06] via-[#1A120C] to-[#120B06] opacity-90 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 z-10">
        {/* Logo + Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-4">
            <Image src={logo} alt="Logo" width={45} height={45} />
            <h2 className="text-2xl font-bold text-[#4BB04F] tracking-wide">
              Helpers
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-md">
            Your trusted partner for final-year reports, academic projects, and
            ATS-friendly resumes — making your academic and career journey
            smooth, smart, and professional.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {[
               { Icon: RiMailLine, link: "mailto:helpersntcc@gmail.com" },
  { Icon: RiInstagramLine, link: "https://www.instagram.com/ntcc_cse/" },
  { Icon: RiLinkedinBoxLine, link: "https://www.linkedin.com/in/helpers-763135381/" },
  { Icon: RiGlobalLine, link: "https://helpers.com" },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.15 }}
                href={link}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#4BB04F]/20 transition-colors duration-300 text-[#4BB04F] text-xl shadow-md"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Columns */}
        {[
          {
            title: "Company",
            links: ["About Us", "Our Services", "Contact"],
          },
          {
            title: "Services",
            links: ["Final-Year Reports", "Academic Projects", "ATS-Friendly Resumes"],
          },
          {
            title: "Resources",
            links: ["Blog", "Templates", "Guides"],
          },
          
        ].map((col, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * (idx + 1) }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-5">{col.title}</h3>
            <ul className="space-y-3 text-gray-400">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#4BB04F] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 z-10">
        <p className="text-center md:text-left hover:text-[#4BB04F] transition-colors">
          User Terms & Conditions | Privacy Policy
        </p>
        <p className="text-center md:text-right">
          © {new Date().getFullYear()}  Helpers. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
