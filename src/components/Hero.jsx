import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * COMPONENT: HERO SECTION
 */
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 px-4">
      <motion.div 
        style={{ y, opacity }}
        className="text-center z-20"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="text-cyan-400 tracking-[0.3em] text-sm md:text-base mb-6 font-mono"
        >
          WELCOME TO THE FUTURE
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter"
        >
          HI, I'M <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 animate-gradient-x">
            SANTOSH
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 4.5, duration: 1 }}
          className="h-[1px] bg-white/20 mx-auto max-w-lg mb-8"
        />

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="text-lg md:text-2xl text-gray-400 font-light tracking-widest uppercase glass-text"
        >
          "I DONT THINK THAT I HAVE TO GIVE THE INTRO"
        </motion.h2>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 5.5, duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-widest uppercase">Explore</span>
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
