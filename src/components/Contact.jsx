import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import GlassCard from './GlassCard';

/**
 * COMPONENT: CONTACT SECTION
 */
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  // Simple submission handler for demonstration
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    if(formRef.current) formRef.current.reset();
  };

  return (
    <section id="contact" className="relative py-32 z-10 max-w-4xl mx-auto px-4">
      <GlassCard className="border-t-4 border-t-cyan-500/50 relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">
            INITIATE <span className="text-cyan-400">CONTACT</span>
          </h2>
          <p className="text-gray-400 text-sm tracking-widest">SEND A TRANSMISSION</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <input 
                type="text" 
                placeholder="IDENTIFIER (NAME)" 
                required
                className="w-full bg-black/40 border border-white/10 p-4 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all font-mono text-sm placeholder:text-gray-600"
              />
            </div>
            <div className="group">
              <input 
                type="email" 
                placeholder="FREQUENCY (EMAIL)" 
                required
                className="w-full bg-black/40 border border-white/10 p-4 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_20px_rgba(188,19,254,0.2)] transition-all font-mono text-sm placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="group">
            <textarea 
              rows="5" 
              placeholder="MESSAGE DATA..." 
              required
              className="w-full bg-black/40 border border-white/10 p-4 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(0,102,255,0.2)] transition-all font-mono text-sm placeholder:text-gray-600"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button 
              type="submit" 
              className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-lg bg-white/5 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="absolute inset-0 w-0 bg-cyan-500/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative flex items-center gap-2 text-cyan-400 font-bold tracking-widest uppercase text-sm group-hover:text-white transition-colors">
                Transmit <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </div>
        </form>

        {/* Success Popup */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 rounded-2xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center mx-auto mb-4 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <Send />
                </div>
                <h3 className="text-xl font-bold text-white">TRANSMISSION SENT</h3>
                <p className="text-gray-400 text-sm mt-2">I will respond shortly.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </section>
  );
};

export default Contact;
