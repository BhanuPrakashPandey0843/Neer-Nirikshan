'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  // Generate random bubbles with inline styles
  const bubbles = Array.from({ length: 8 }).map((_, i) => {
    return {
      left: `${Math.random() * 100}%`,
      size: 10 + Math.random() * 20,
      animationDuration: `${15 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
  });

  return (
    <section
      style={{ background: 'linear-gradient(to bottom, #FBFCFF, #C9DAFF)', overflow: 'hidden' }}
      className="relative min-h-screen flex items-center"
    >
      {/* Waves at the bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,0 V40 Q600,80 1200,40 V0z" fill="#558AFF" fillOpacity="0.3"></path>
        </svg>
      </div>

      {/* Floating bubbles */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
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
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 style={{ color: '#333333', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Smart Water Monitoring
          </h1>
          <p style={{ color: '#666666', fontSize: '1rem', marginBottom: '2rem' }}>
            Empower communities with real-time water quality insights powered by advanced technology and machine learning for a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/predictor"
              style={{
                padding: '0.75rem 2rem',
                background: 'linear-gradient(to right, rgba(85, 138, 255, 0.8), #558AFF)',
                color: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(85, 138, 255, 0.3)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s',
                fontWeight: 500,
                fontSize: '1.125rem',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Get Started
            </a>
            <a
              href="/contact"
              style={{
                padding: '0.75rem 2rem',
                background: 'transparent',
                border: '2px solid #558AFF',
                color: '#558AFF',
                borderRadius: '12px',
                transition: 'all 0.3s',
                fontWeight: 500,
                fontSize: '1.125rem',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#558AFF';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#558AFF';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div style={{ width: '100%', maxWidth: '384px', height: 'auto' }}>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm14ZHBhNHlrbnl1OWZyNGJlYTJjNnRucTdqZHBxamV2a3RiZXgzMSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/7JaAxDoSh150OE8kK6/giphy.gif"
              alt="Water Monitoring Animation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(85, 138, 255, 0.3)',
                transition: 'transform 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        </motion.div>
      </div>

      {/* Inline Keyframes for bubble animation */}
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
      `}</style>
    </section>
  );
}
