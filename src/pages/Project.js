import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Project() {
  const projects = [
    {
      title: "OtteRx",
      description: "OtteRx helps elderly users identify their prescriptions, open trusted pharmacy refill pages, and complete refill workflows with simple voice guidance, reminders, and an accessibility-first interface.",
      tags: ["React", "Vite", "Tailwind CSS", "Figma", "MongoDB", "ElevenLabs API", "Gemini API"],
      github: "https://github.com/nicolesutedja/DiamondHacks-2026",
      demo: "https://diamondhacks2026.vercel.app/",
      image: `url('${process.env.PUBLIC_URL}/otterx.png')`,  
    },
    {
      title: "Triton Minecraft Website",
      description: "A custom-built, community-driven hub for Triton Minecraft players to connect, explore, and stay updated on the latest server events",
      tags: ["TypeScript", "CSS", "JavaScript"],
      github: "https://github.com/TritonWebDev/triton-minecraft",
      demo: "https://tritonmc.com/",
      image: `url('${process.env.PUBLIC_URL}/tritonmc.png')`,  
    },
    {
      title: "S.P.E.C.S. — Syllabus Policies Evaluation & Classification System",
      description: "A Generative AI-powered research tool for auditing course syllabi against specifications grading criteria..",
      tags: ["TypeScript", "CSS", "HTML"],
      github: "https://github.com/nicolesutedja/SPECS/",
      image: `url('${process.env.PUBLIC_URL}/specs.png')`,  
    },

    {
      title: "SDIA Website",
      description: "Comprehensive website for San Diego Indonesian Association managing event organization and alumni data for 140+ members with seamless user experience.",
      tags: ["React", "TypeScript", "CSS", "JavaScript"],
      github: "https://github.com/PERMIAS-SDIA/sdia-website-v2",
      demo: "https://www.permiassdia.com/",
      image: `url('${process.env.PUBLIC_URL}/sdia.png')`,  
    },
    {
      title: "Low-Price Center Marketplace (In Progress)",
      description: "A student-centered marketplace platform for UCSD fostering affordability, sustainability, and campus community engagement.",
      tags: ["React", "TypeScript", "HTML", "JavaScript", "MongoDB"],
      github: "https://github.com/CSES-Open-Source/LowPriceCenter",
      demo: "https://low-price-center-kohl.vercel.app",
      image: `url('${process.env.PUBLIC_URL}/lpc.png')`,  
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
            A collection of projects showcasing my work in web development and community-focused technology solutions!
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
                  className="h-64 md:h-80 rounded-2xl overflow-hidden transition-transform duration-300"
                  style={{ 
                    background: project.image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
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
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-700/40 border border-slate-600 text-slate-300 font-medium hover:bg-slate-700 transition-colors"
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
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}