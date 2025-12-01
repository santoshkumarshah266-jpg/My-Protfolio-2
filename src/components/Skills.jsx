import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, Palette, Code2 } from 'lucide-react';
import GlassCard from './GlassCard';

/**
 * COMPONENT: SKILLS SECTION
 */
const Skills = () => {
  // Store Component references for Lucide icons
  const skills = [
    { name: "Next.js", Icon: Terminal, level: "Expert" },
    { name: "React Three Fiber", Icon: ExternalLink, level: "Advanced" },
    { name: "GSAP / Framer", Icon: Palette, level: "Master" },
    { name: "Tailwind CSS", Icon: Code2, level: "Expert" },
  ];

  return (
    <section id="skills" className="relative py-32 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            THE <span className="text-purple-400">ARSENAL</span>
          </h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Tech Stack & Tools</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <GlassCard 
              key={index} 
              delay={index * 0.1} 
              className="group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-cyan-500/20 text-cyan-400 transition-colors duration-300 ring-1 ring-white/10 group-hover:ring-cyan-500/50">
                  <skill.Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs font-mono text-gray-500 border border-gray-700 rounded-full px-3 py-1">
                  {skill.level}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
