"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "./assets/logo.png"; // ✅ Your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 font-[Rubik]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#4BB04F]"
          >
            Helpers
          </motion.h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#120B06] font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#4BB04F" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-5 py-2 border border-[#4BB04F] text-[#4BB04F] rounded-full hover:bg-[#4BB04F] hover:text-white transition">
            Log in
          </button>
          <button className="px-5 py-2 bg-[#4BB04F] text-white rounded-full hover:bg-[#388B3F] transition">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#120B06]"
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-lg text-[#120B06] hover:text-[#4BB04F]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col space-y-3">
            <button className="px-5 py-2 border border-[#4BB04F] text-[#4BB04F] rounded-full hover:bg-[#4BB04F] hover:text-white transition">
              Log in
            </button>
            <button className="px-5 py-2 bg-[#4BB04F] text-white rounded-full hover:bg-[#388B3F] transition">
              Sign up
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
