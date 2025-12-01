import React from 'react';
import { motion } from 'framer-motion';

/**
 * COMPONENT: GLASS CARD (Reusable)
 * Provides the consistent glassmorphism style and motion effects across sections.
 */
const GlassCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.6 }}
    className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all duration-500 group ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
