'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from './Neer_Nirikshan_Logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: '#', icon: 'ri-facebook-fill', label: 'Facebook' },
    { href: '#', icon: 'ri-twitter-fill', label: 'Twitter' },
    { href: '#', icon: 'ri-instagram-fill', label: 'Instagram' },
    { href: '#', icon: 'ri-linkedin-box-fill', label: 'LinkedIn' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About WQI' },
    { href: '/predictor', label: 'Predictor' },
    { href: '/wqi', label: 'WQI Details' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-blue-900 via-blue-800 to-blue-600 text-white w-full shadow-inner">
      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3"
      >
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={logo}
            alt="Neer Nirikshan Logo"
            width={100}
            height={100}
            className="rounded-full shadow-2xl mb-5 border-2 border-white/40 transition-transform hover:scale-105"
          />
          <p className="text-base opacity-90 leading-relaxed max-w-xs">
            Empowering water quality monitoring and prediction with machine
            learning and environmental insights.
          </p>
          <div className="flex gap-5 mt-6">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-300 transition-transform hover:scale-125"
              >
                <i className={item.icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-5 border-b border-blue-300/40 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {navLinks.map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  href={item.href}
                  className="hover:underline hover:text-blue-200 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-5 border-b border-blue-300/40 pb-2 inline-block">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <i className="ri-map-pin-line text-lg" aria-hidden="true"></i> BIT Mesra
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <i className="ri-phone-line text-lg" aria-hidden="true"></i> +964 (0) 770 342 7474
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <i className="ri-mail-line text-lg" aria-hidden="true"></i>
              <a
                href="mailto:contact@neernirikshancompany.com"
                className="hover:underline hover:text-blue-200"
              >
                contact@neernirikshancompany.com
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-blue-950/40 backdrop-blur-md py-4 text-center text-xs tracking-wide border-t border-blue-400/20 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
        <span>
          © {currentYear} <span className="font-semibold">Neer Nirikshan</span>. All rights reserved.
        </span>
        <span className="text-blue-300 hover:text-white transition-colors ml-2 md:ml-4">
          <Link href="/privacy">Privacy Policy</Link>
        </span>
        <span className="text-blue-300 hover:text-white transition-colors ml-2 md:ml-4">
          <Link href="/terms">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
