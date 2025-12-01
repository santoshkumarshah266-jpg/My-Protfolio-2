import { useState, useEffect } from 'react';

/**
 * Custom hook to track the current mouse position on the window.
 * @returns {{x: number, y: number}} The current mouse position.
 */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
