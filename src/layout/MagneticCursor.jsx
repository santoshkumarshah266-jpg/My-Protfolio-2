import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

/**
 * ADVANCED MAGNETIC CURSOR
 * Cursor with magnetic attraction to interactive elements
 */
const MagneticCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        // Smooth cursor follow
        const animateCursor = () => {
            const distX = mouseX - cursorX;
            const distY = mouseY - cursorY;

            cursorX += distX * 0.1;
            cursorY += distY * 0.1;

            if (cursor) {
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
            }

            if (cursorDot) {
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';
            }

            requestAnimationFrame(animateCursor);
        };

        animateCursor();

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // Magnetic effect on hover
        const handleHoverMagnetic = (e) => {
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * 0.3;
            const deltaY = (e.clientY - centerY) * 0.3;

            gsap.to(target, {
                x: deltaX,
                y: deltaY,
                duration: 0.3,
                ease: 'power2.out'
            });

            if (cursor) {
                cursor.style.width = '60px';
                cursor.style.height = '60px';
                cursor.style.borderColor = '#00f3ff';
            }
        };

        const handleLeaveMagnetic = (e) => {
            gsap.to(e.currentTarget, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });

            if (cursor) {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }
        };

        // Add magnetic effect to all interactive elements
        const magneticElements = document.querySelectorAll('a, button, .magnetic');
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', handleHoverMagnetic);
            el.addEventListener('mouseleave', handleLeaveMagnetic);
        });

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            magneticElements.forEach(el => {
                el.removeEventListener('mousemove', handleHoverMagnetic);
                el.removeEventListener('mouseleave', handleLeaveMagnetic);
            });
        };
    }, []);

    return (
        <>
            {/* Main cursor ring */}
            <div
                ref={cursorRef}
                className="fixed w-10 h-10 border-2 border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
                style={{ mixBlendMode: 'difference' }}
            />
            {/* Cursor dot */}
            <div
                ref={cursorDotRef}
                className="fixed w-1 h-1 bg-cyan-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default MagneticCursor;
