'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './Neer_Nirikshan_Logo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/predictor', label: 'Predictor' },
  { href: '/wqi', label: 'WQI Details' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 font-poppins">
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Neer Nirikshan Logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="text-2xl font-semibold tracking-wide text-[#333333]">
            Neer Nirikshan
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[#333333] font-medium">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <Link
                href={link.href}
                className="transition-colors duration-300 hover:text-[#558AFF]"
              >
                {link.label}
              </Link>
              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#558AFF] transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#333333]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`ri-${menuOpen ? 'close-line' : 'menu-line'} text-3xl`}
          ></i>
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FBFCFF] shadow-lg border-t"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-lg font-medium text-[#333333]">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-colors hover:text-[#558AFF]"
                >
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
