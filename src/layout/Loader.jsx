import React from 'react';
import { motion } from 'framer-motion';

/**
 * COMPONENT: LOADING SCREEN
 * Displays a futuristic loading sequence before the main content appears.
 */
const Loader = ({ onLoadingComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 3.5, duration: 1, ease: "easeInOut" }}
      onAnimationComplete={onLoadingComplete}
    >
      {/* Glowing Orb */}
      <motion.div 
        className="w-32 h-32 rounded-full bg-black border-2 border-cyan-500 shadow-[0_0_50px_rgba(0,243,255,0.4)] relative mb-12"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          boxShadow: [
            "0 0 50px rgba(0,243,255,0.4)", 
            "0 0 100px rgba(188,19,254,0.6)", 
            "0 0 50px rgba(0,243,255,0.4)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-purple-500/50 scale-75 blur-sm" />
      </motion.div>

      {/* Text Reveal */}
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-white tracking-widest text-center"
        initial={{ opacity: 0, letterSpacing: "1em" }}
        animate={{ opacity: 1, letterSpacing: "0.2em" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        SANTOSH KUMAR SHAH
      </motion.h1>

      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-0 mt-4"
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 1, duration: 1.5 }}
      />
    </motion.div>
  );
};

export default Loader;
