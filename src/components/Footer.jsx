import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * COMPONENT: FOOTER
 */
const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-sm font-mono">
          © {new Date().getFullYear()} SANTOSH KUMAR SHAH.
        </div>
        <div className="flex gap-6">
          {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="text-gray-500 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
