'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useAnimation } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection/AboutSection';

const Page = () => {
  const scrollContainer = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Example of triggering animations based on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div
      ref={scrollContainer}
      style={{
        background: 'linear-gradient(135deg, #FBFCFF 0%, #C9DAFF 100%)',
        color: '#333',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Navbar />
      <Hero />
      <AboutSection />
      
     

      <Footer />
      
      {/* Inline Keyframes for ripple or other effects if needed */}
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Page;


