import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bounce = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 10 } }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-5xl w-full">
          <div 
            className="transition-all duration-700"
            style={{ 
              opacity: 1 - scrollY / 500,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
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

            {/* Hero Content with Profile Picture inline */}
            <div className="flex items-center gap-6 mb-8">
              <h1 className="text-7xl md:text-8xl font-bold leading-tight whitespace-nowrap" style={{ color: '#b8c5d6' }}>
                <Typewriter
                  words={["Hi! I'm Nicole."]}
                  typeSpeed={80}
                  deleteSpeed={0}
                  cursor
                />
              </h1>
            </div>


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-medium text-slate-300 max-w-3xl leading-relaxed">
                A Computer Science Student passionate about building technology that connects people and creates meaningful impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8">
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
            viewport={{ once: true, margin: "-20% 0px" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-20" style={{ color: '#b8c5d6' }}>
              About me.
            </h2>
          </motion.div>

            <motion.img 
            src="/picture.png" 
            alt="Nicole Sutedja Profile"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="float-right ml-8 mb-6 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4"
            style={{ borderColor: '#a5c9d4ff' }}
            />

          <div className="space-y-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-20% 0px" }}
              >
                <p className="text-xl font-medium text-slate-300 leading-relaxed mb-6">
                  My name is Nicole Sutedja, and I am a second-year Computer Science student at UC San Diego with a 3.925 GPA. I'm passionate about AI research, web development, and creating accessible technology education.
                </p>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-20% 0px" }}
              >
                <p className="text-xl font-medium text-slate-300 leading-relaxed">
                  I believe technology should empower communities and bridge gaps. Whether I'm integrating AI platforms, building student marketplaces, or leading workshops for underrepresented students, I'm driven by the goal of making tech more inclusive and impactful.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#b8c5d6' }}>
                  Tech Stack.
                </h3>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Languages",
                    content: "Python, Java, JavaScript, TypeScript, HTML, CSS, C"
                  },
                  {
                    title: "Frameworks & Tools",
                    content: "React, SQL, Git, Neon, Microsoft Office, Canva"
                  },
                  {
                    title: "Skills",
                    content: "Web Development, AI Integration, API Development, Database Management"
                  },
                  {
                    title: "Other",
                    content: "Product Management, Market Research, Academic Research, Event Planning, Workshop Facilitation, Public Speaking, Team Leadership"
                  }
                ].map((box, index) => (
                  <motion.div
                    key={index}
                    variants={bounce}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-10%" }}
                    className="p-4 rounded-xl bg-slate-700/40 border border-slate-600"
                  >
                    <h4 className="text-lg font-bold mb-3" style={{ color: '#c9aed4' }}>
                      {box.title}
                    </h4>
                    <p className="text-slate-300 font-medium">
                      {box.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}