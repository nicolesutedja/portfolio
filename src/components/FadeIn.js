import React from 'react';
import { motion } from 'framer-motion';

export default function FadeIn({ children, x = 0, y = 0, duration = 0.8, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: x, y: y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }} // <-- This is the magic word that makes the stagger work!
      viewport={{ once: true, amount: 0, margin: "0px" }}
    >
      {children}
    </motion.div>
  );
}