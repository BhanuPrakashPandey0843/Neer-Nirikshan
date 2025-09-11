'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  // Generate random bubbles
  const bubbles = Array.from({ length: 15 }).map(() => {
    return {
      left: `${Math.random() * 100}%`,
      size: 10 + Math.random() * 25,
      animationDuration: `${12 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: 0.2 + Math.random() * 0.3,
    };
  });

  return (
    <section
      style={{
        background: 'radial-gradient(circle at top left, #eef4ff, #ffffff)',
        overflow: 'hidden',
      }}
      className="relative min-h-screen flex items-center"
    >
      {/* Floating bubbles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: bubble.left,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: 'rgba(85, 138, 255, 0.3)',
              borderRadius: '50%',
              animation: `float ${bubble.animationDuration} linear infinite`,
              animationDelay: bubble.animationDelay,
              opacity: bubble.opacity,
              boxShadow: '0 4px 10px rgba(85,138,255,0.25)',
              filter: Math.random() > 0.5 ? 'blur(2px)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 animate-gradient-x"
          >
            Smart Water Monitoring
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
          >
            Empower communities with <span className="font-semibold text-blue-600">real-time insights</span> into water quality, powered by
            <span className="font-semibold text-indigo-600"> AI & advanced technology</span> for a sustainable future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            {/* Get Started Button */}
            <a
              href="/predictor"
              className="px-8 py-3 flex items-center gap-2 rounded-xl text-white font-semibold text-lg shadow-lg transition-transform hover:scale-105 hover:shadow-blue-300"
              style={{
                background:
                  'linear-gradient(to right, rgba(85,138,255,0.95), #3B6BFF)',
              }}
            >
              {/* Inline SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              Get Started
            </a>

            {/* Contact Button */}
            <a
              href="/contact"
              className="px-8 py-3 flex items-center gap-2 rounded-xl border-2 text-lg font-medium transition-all hover:scale-105 hover:bg-blue-500 hover:text-white"
              style={{ borderColor: '#558AFF', color: '#558AFF' }}
            >
              {/* Inline Mail Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex justify-center"
        >
          <motion.img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm14ZHBhNHlrbnl1OWZyNGJlYTJjNnRucTdqZHBxamV2a3RiZXgzMSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/7JaAxDoSh150OE8kK6/giphy.gif"
            alt="Smart Water Monitoring Robot"
            className="max-w-sm rounded-2xl shadow-xl"
            style={{ objectFit: 'contain' }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Inline Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh);
            opacity: 0;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
