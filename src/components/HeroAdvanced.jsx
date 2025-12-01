import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * ADVANCED HERO SECTION
 * With glitch effects, holographic text, and advanced animations
 */
const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const [glitching, setGlitching] = useState(false);

    useEffect(() => {
        // Random glitch effect
        const glitchInterval = setInterval(() => {
            setGlitching(true);
            setTimeout(() => setGlitching(false), 200);
        }, 5000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 px-4">
            {/* Holographic grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            <motion.div
                style={{ y, opacity }}
                className="text-center z-20"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.8, duration: 0.8 }}
                    className="text-cyan-400 tracking-[0.3em] text-sm md:text-base mb-6 font-mono relative"
                >
                    <span className="inline-block animate-pulse">▸</span> WELCOME TO THE FUTURE <span className="inline-block animate-pulse">◂</span>
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                    className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter relative"
                >
                    HI, I'M <br />
                    <motion.span
                        className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 animate-gradient-x relative inline-block ${glitching ? 'glitch' : ''}`}
                        data-text="SANTOSH"
                        animate={{
                            textShadow: [
                                "0 0 10px rgba(0,243,255,0.5)",
                                "0 0 30px rgba(0,243,255,1), 0 0 60px rgba(188,19,254,0.8)",
                                "0 0 10px rgba(0,243,255,0.5)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        SANTOSH
                    </motion.span>
                </motion.h1>

                {/* Animated line with glow */}
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ delay: 4.5, duration: 1 }}
                    className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto max-w-lg mb-8 shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                />

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5, duration: 1 }}
                    className="text-lg md:text-2xl text-gray-400 font-light tracking-widest uppercase glass-text relative"
                >
                    <span className="relative inline-block">
                        "I DONT THINK THAT I HAVE TO GIVE THE INTRO"
                        <motion.span
                            className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 5.5, duration: 1 }}
                        />
                    </span>
                </motion.h2>

                {/* Floating badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 5.8, duration: 0.8 }}
                    className="mt-8 flex gap-4 justify-center flex-wrap"
                >
                    {['DEVELOPER', 'DESIGNER', 'CREATOR'].map((badge, i) => (
                        <motion.span
                            key={badge}
                            className="px-4 py-2 border border-cyan-400/30 rounded-full text-xs tracking-widest text-cyan-400 backdrop-blur-sm bg-cyan-400/5 magnetic"
                            whileHover={{ scale: 1.1, borderColor: 'rgba(0,243,255,1)' }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 6 + i * 0.1 }}
                        >
                            {badge}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400 flex flex-col items-center gap-2 cursor-pointer magnetic group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 5.5, duration: 2, repeat: Infinity }}
            >
                <span className="text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">Explore</span>
                <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-1 group-hover:border-white transition-colors">
                    <motion.div
                        className="w-1 h-2 bg-cyan-400 rounded-full group-hover:bg-white"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.a>
        </section>
    );
};

export default Hero;
