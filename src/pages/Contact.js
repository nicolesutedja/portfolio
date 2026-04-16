import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react'; // Added Mail icon
import DecorativeDots from '../components/DecorativeDots';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  return (
    <section className="py-32 px-8 bg-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        <DecorativeDots />
        
        <FadeIn x={-40} duration={0.6}>
          <h2 className="text-5xl md:text-6xl font-bold mb-12" style={{ color: '#b8c5d6' }}>
            Let's Connect.
          </h2>
        </FadeIn>

        <FadeIn x={-40} duration={0.7}>
          <p className="text-xl font-medium text-slate-300 mb-24 max-w-2xl">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and community impact.
          </p>
        </FadeIn>
        
        {/* Clean 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-3xl">
          
          <FadeIn y={30} duration={0.6} delay={0.1}>
            <a href="mailto:nsutedja@ucsd.edu" className="text-2xl md:text-3xl text-slate-300 icon-glow font-bold flex items-center gap-4">
              <Mail size={32} />
              Email
            </a>
          </FadeIn>

          <FadeIn y={30} duration={0.6} delay={0.2}>
            <a href="https://linkedin.com/in/nicolesutedja" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-slate-300 icon-glow font-bold flex items-center gap-4">
              <Linkedin size={32} />
              LinkedIn
            </a>
          </FadeIn>

          <FadeIn y={30} duration={0.6} delay={0.3}>
            <a href="https://github.com/nicolesutedja" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-slate-300 icon-glow font-bold flex items-center gap-4">
              <Github size={32} />
              GitHub
            </a>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}