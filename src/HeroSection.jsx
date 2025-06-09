import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Watermark Text */}
      <h1 className="absolute text-[35vw] mb-60 font-extrabold text-white/5 select-none z-0 tracking-tight">
        RILEY
      </h1>

      {/* Foreground Content */}
      <motion.div
        className="z-10 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="inline-block px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm backdrop-blur-md">
          Unique Design - Fast Loading - Awesome Features
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Digital Agency & Creative <br /> Webflow Template
        </h2>

        <p className="text-white/60">Enhance your online presence with us</p>

        <button className="mt-4 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold shadow-lg">
          Explore Designs
        </button>
      </motion.div>
    </div>
  );
}
