import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Removed the offset so the SVG arrow tip points exactly at the mouse coordinates
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none', 
        zIndex: 999999, 
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0, 
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Standard Cursor SVG with a refined, shape-hugging glow */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="#ffc8ba" /* The main pink color */
        stroke="#ffffff" /* White outline to make it pop against dark backgrounds */
        strokeWidth="1.5"
        style={{ 
          // Drop-shadow perfectly hugs the arrow shape instead of making a square glow
          filter: 'drop-shadow(0px 0px 6px rgba(201, 174, 212, 0.7))' 
        }}
      >
        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L5.5 3.21z" />
      </svg>
    </motion.div>
  );
}