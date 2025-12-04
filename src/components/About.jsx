import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu } from 'lucide-react';
import GlassCard from './GlassCard';

/**
 * COMPONENT: ABOUT SECTION
 */
const About = () => {
  // Profile image path - place your image in the public folder
  const imageSrc = `${import.meta.env.BASE_URL}profile.jpg`;

  return (
    <section id="about" className="relative py-32 px-4 z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image / Abstract Representation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Animated Background Glow - Multiple Layers */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-[120px] opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-bl from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-[100px] opacity-20"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Hexagonal Frame Container */}
            <div className="relative w-full h-full group perspective-1000">
              {/* Rotating Border Ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(45deg, #00f3ff, #bc13fe, #0066ff, #00f3ff)',
                  backgroundSize: '300% 300%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-[3px] rounded-3xl bg-black/90 backdrop-blur-sm" />
              </motion.div>

              {/* Image Container with Advanced Effects */}
              <div className="absolute inset-[3px] rounded-3xl overflow-hidden">
                {/* Main Image */}
                <motion.img 
                  src={imageSrc} 
                  alt="Santosh Kumar Shah"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src="https://placehold.co/400x400/101010/888888?text=Image+Placeholder"; 
                  }}
                />
                
                {/* Holographic Overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,243,255,0.3) 0%, transparent 50%, rgba(188,19,254,0.3) 100%)',
                  }}
                />

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={{ y: '-100%' }}
                  whileHover={{ y: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(0,243,255,0.3), transparent)',
                    height: '30%',
                  }}
                />

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glitch Effect Overlay */}
                <motion.div
                  className="absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-20"
                  animate={{
                    x: [0, -5, 5, -5, 0],
                  }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                  style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'hue-rotate(180deg)',
                  }}
                />
              </div>

              {/* Outer Glow Ring */}
              <motion.div
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(45deg, #00f3ff, #bc13fe, #0066ff, #00f3ff)',
                  backgroundSize: '300% 300%',
                  filter: 'blur(20px)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Floating Tech Icons with Enhanced Animation */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0]
              }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/50 text-cyan-400 shadow-[0_0_30px_rgba(0,243,255,0.3)] hover:shadow-[0_0_50px_rgba(0,243,255,0.5)] transition-shadow"
            >
              <Code2 size={24} />
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0, 5, 0]
              }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-md p-4 rounded-xl border border-purple-500/50 text-purple-400 shadow-[0_0_30px_rgba(188,19,254,0.3)] hover:shadow-[0_0_50px_rgba(188,19,254,0.5)] transition-shadow"
            >
              <Cpu size={24} />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              ABOUT <span className="text-cyan-400">ME</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mb-6"></div>

            <GlassCard>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                I am a visionary developer crafting digital experiences that bridge the gap between 
                imagination and reality. My work is defined by a relentless pursuit of pixel-perfect 
                elegance and high-performance engineering. I don't just build websites; I curate 
                immersive environments.
              </p>
              <br />
              <p className="text-gray-400 font-mono text-sm">
                // SPECIALIZATION: <span className="text-purple-400">IMMERSIVE WEB</span>
              </p>
            </GlassCard>
          </motion.div>

          {/* Mini Stats */}
          <div className="grid grid-cols-2 gap-4">
            {['Creativity', 'Logic', 'Design', 'Code'].map((item, i) => (
              <GlassCard key={item} delay={i * 0.1} className="py-4 text-center border-l-4 border-l-cyan-500">
                <h3 className="text-white font-bold tracking-wider">{item}</h3>
                <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-cyan-400"
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
