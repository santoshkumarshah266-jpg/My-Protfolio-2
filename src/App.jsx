import React from 'react';
import ParticleBackground from './layout/ParticleBackground';
import MagneticCursor from './layout/MagneticCursor';
import useWelcomeAudio from './hooks/useWelcomeAudio';

// Sections
import HeroAdvanced from './components/HeroAdvanced';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * MAIN APP COMPONENT
 * Coordinates all major layout elements and sections
 */
const App = () => {
  useWelcomeAudio();

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <MagneticCursor />
      <ParticleBackground />

      {/* Main Content */}
      <main>
        <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white bg-black/50 backdrop-blur-sm">
          <span className="font-bold text-xl tracking-tighter magnetic">SKS.</span>
          <div className="hidden md:flex gap-8 text-sm font-light tracking-widest text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors magnetic">ABOUT</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors magnetic">SKILLS</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors magnetic">CONTACT</a>
          </div>
        </nav>

        <HeroAdvanced />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
