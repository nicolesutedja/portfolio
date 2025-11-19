import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-8 bg-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              {[...Array(5)].map((_, j) => (
                <div 
                  key={j} 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: '#d4a5a5' }}
                />
              ))}
            </div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12" style={{ color: '#b8c5d6' }}>
            Let's Connect.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-medium text-slate-300 mb-16 max-w-2xl">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and community impact.
          </p>
        </motion.div>
        
        <div className="max-w-2xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3" style={{ color: '#c9aed4' }}>Email</h3>
            <a href="mailto:nsutedja@ucsd.edu" className="text-2xl text-slate-300 glow-text">
              nsutedja@ucsd.edu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3" style={{ color: '#c9aed4' }}>Phone</h3>
            <a href="tel:+16503828602" className="text-2xl text-slate-300 glow-text">
              (650) 382-8602
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3" style={{ color: '#c9aed4' }}>Connect</h3>
            <div className="flex gap-6 text-xl">
              <a href="https://linkedin.com/in/nicolesutedja" target="_blank" rel="noopener noreferrer" className="text-slate-300 icon-glow font-medium flex items-center gap-2">
                <Linkedin size={24} />
                LinkedIn
              </a>
              <a href="https://github.com/nicolesutedja" target="_blank" rel="noopener noreferrer" className="text-slate-300 icon-glow font-medium flex items-center gap-2">
                <Github size={24} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}