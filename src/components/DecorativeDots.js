import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

// --- Individual Dot Component ---
// We create a separate component for the dot so it can manage its own physics
const InteractiveDot = ({ mouseX, mouseY, defaultX, defaultY, index }) => {
  const dotRef = useRef(null);
  
  // Create native motion values for high-performance tracking
  const x = useMotionValue(defaultX);
  const y = useMotionValue(defaultY);

  // Apply spring physics to those values for the "water" snap-back
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const updatePosition = () => {
      if (!dotRef.current) return;

      // Get the dot's actual position on the screen
      const rect = dotRef.current.getBoundingClientRect();
      const dotCenterX = rect.left + rect.width / 2;
      const dotCenterY = rect.top + rect.height / 2;

      // Calculate distance between mouse and this specific dot
      const distanceX = mouseX.get() - dotCenterX;
      const distanceY = mouseY.get() - dotCenterY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      // The "Repel Radius" - how close the mouse needs to be to affect the dot
      const radius = 60; 

      if (distance < radius && distance > 0) {
        // Calculate the force pushing the dot away
        const force = (radius - distance) / radius;
        const pushX = (distanceX / distance) * force * -40; // The multiplier (40) is push strength
        const pushY = (distanceY / distance) * force * -40;

        // Move dot away from home
        x.set(defaultX + pushX);
        y.set(defaultY + pushY);
      } else {
        // Snap back to home position
        x.set(defaultX);
        y.set(defaultY);
      }
    };

    // Listen to the mouse movement globally
    const unsubscribeX = mouseX.on("change", updatePosition);
    const unsubscribeY = mouseY.on("change", updatePosition);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, x, y, defaultX, defaultY]);

  // The initial entry animation (Swarm effect)
  const entryVariant = {
    hidden: { 
      opacity: 0, 
      scale: 0, 
      x: 300 + (index % 5) * 40, 
      y: Math.sin(index) * 150 
    },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12, delay: index * 0.03 }
    }
  };

  return (
    <motion.div
      ref={dotRef}
      className="w-2 h-2 rounded-full cursor-pointer"
      style={{
        backgroundColor: '#e4a5a5',
        // Instead of standard x/y, we bind the spring physics values
        x: springX,
        y: springY,
      }}
      variants={entryVariant}
      whileHover={{ scale: 1.5, backgroundColor: '#ffffff' }}
    />
  );
};

// --- Main Grid Component ---
export default function DecorativeDots() {
  // Track mouse coordinates at the top level
  const mouseX = useMotionValue(-1000); // Start off-screen
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="mb-8 flex gap-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      // Fix: Only apply negative margin to top/left/right so it doesn't eat the bottom gap
      style={{ padding: "20px", margin: "-20px -20px 0px -20px" }} 
    >
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex flex-col gap-3">
          {[...Array(5)].map((_, j) => {
            const index = i * 5 + j;
            return (
              <InteractiveDot 
                key={j} 
                index={index}
                mouseX={mouseX} 
                mouseY={mouseY}
                defaultX={0} // The "home" x coordinate for the physics engine
                defaultY={0} // The "home" y coordinate for the physics engine
              />
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}