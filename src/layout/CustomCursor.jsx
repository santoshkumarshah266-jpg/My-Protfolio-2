import React from 'react';
import { motion, useSpring } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

/**
 * COMPONENT: CUSTOM CURSOR
 * Creates a responsive, animated trailing cursor effect.
 */
const CustomCursor = () => {
  const { x, y } = useMousePosition();

  // Use springs for smooth following effect on the larger element
  const cursorX = useSpring(x, { stiffness: 150, damping: 15 });
  const cursorY = useSpring(y, { stiffness: 150, damping: 15 });

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ x: x - 8, y: y - 8 }}
      />

      {/* Trailing Glow */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-cyan-500/30 rounded-full pointer-events-none z-[9998] backdrop-blur-[1px]"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        transition={{ type: "spring", mass: 0.6 }}
      />
    </>
  );
};

export default CustomCursor;
