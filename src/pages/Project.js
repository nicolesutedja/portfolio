import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Project() {
  const projects = [
    {
      title: "Low-Price Center Marketplace",
      description: "A student-centered marketplace platform for UCSD fostering affordability, sustainability, and campus community engagement. Built with React and SQL-backed Neon database.",
      tags: ["React", "TypeScript", "SQL", "Neon"],
      github: "https://github.com/CSES-Open-Source/LowPriceCenter",
      demo: "#",
      image: "#b8c5d6", // Placeholder color - replace with actual image
    },
    {
      title: "SDIA Website",
      description: "Comprehensive website for San Diego Indonesian Association managing event organization and alumni data for 140+ members with seamless user experience.",
      tags: ["React", "TypeScript", "CSS", "SQL"],
      github: "https://github.com/PERMIAS-SDIA/sdia-website-v2",
      demo: "#",
      image: "#c9aed4",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-32 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Decorative dots */}
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#b8c5d6' }}>
            Projects.
          </h1>
          <p className="text-xl font-medium text-slate-300 mb-20">
            A collection of projects showcasing my work in web development, AI integration, and community-focused technology solutions!
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Project Image/Color Block */}
                <div 
                  className="h-64 md:h-80 rounded-2xl transition-transform duration-300"
                  style={{ backgroundColor: project.image }}
                >
                  {/* Replace with actual project image */}
                  <div className="w-full h-full flex items-center justify-center text-slate-700 text-6xl font-bold opacity-20">
                    {index + 1}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#c9aed4' }}>
                    {project.title}
                  </h2>
                  
                  <p className="text-lg font-medium text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-slate-700/40 border border-slate-600"
                        style={{ color: '#c9aed4' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-700/40 border border-slate-600 text-slate-300 font-medium hover:bg-slate-700 transition-colors"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                    {project.demo !== "#" && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 text-slate-300 font-medium hover:bg-slate-700/20 transition-colors icon-glow"
                        style={{ borderColor: '#c9aed4' }}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#b8c5d6' }}>
            Other Notable Work.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Research Poster",
                description: "Specifications-based grading framework research under Prof. Mia Minnes",
                year: "2025-2026"
              },
              {
                title: "AI Integration Research",
                description: "Published research on optimizing workflows with ChatGPT, Gemini, Claude, Grok, and Perplexity",
                year: "2025"
              },
              {
                title: "Workshop Series",
                description: "6+ CSE workshops for K-12 students on Web Dev, AI, and Python",
                year: "2025"
              },
              {
                title: "Event Management Platform",
                description: "Cross-university collaboration system for SDIA events",
                year: "2025"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-slate-700/40 border border-slate-600 hover:bg-slate-700/60 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold" style={{ color: '#c9aed4' }}>
                    {item.title}
                  </h3>
                  <span className="text-sm text-slate-400 font-medium">{item.year}</span>
                </div>
                <p className="text-slate-300 font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#b8c5d6' }}>
            Want to collaborate?
          </h2>
          <p className="text-xl font-medium text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in working on new projects that make technology more accessible and impactful.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-medium transition-all icon-glow"
            style={{ 
              backgroundColor: '#d4aec7ff',
              color: '#77233fff'
            }}
          >
            Contact me!
          </a>
        </motion.div>
      </div>
    </section>
  );
}