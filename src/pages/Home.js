import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import DecorativeDots from '../components/DecorativeDots';
import FadeIn from '../components/FadeIn';

const techStack = [
  {
    title: "Languages",
    content: "Python, Java, JavaScript, TypeScript, HTML, CSS, C, C++"
  },
  {
    title: "Frameworks & Tools",
    content: "React, SQL, Git, Figma, Notion, Microsoft Office, Canva"
  },
  {
    title: "Skills",
    content: "Web Development, AI Integration, UI/UX Design"
  },
  {
    title: "Other",
    content: "Product Management, Market Research, Academic Research, Event Planning, Workshop Facilitation, Public Speaking, Team Leadership"
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

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
            {/* Replaced static arrays with your new component */}
            <DecorativeDots />

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

            <FadeIn y={40} duration={2}>
              <p className="text-2xl md:text-3xl font-medium text-slate-300 max-w-3xl leading-relaxed">
                A Computer Science Student passionate about building technology that connects people and creates meaningful impact.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          
          <DecorativeDots />
          
          <FadeIn x={-40} duration={0.6}>
            <h2 className="text-5xl md:text-6xl font-bold mb-20" style={{ color: '#b8c5d6' }}>
              About me.
            </h2>
          </FadeIn>

          <motion.img 
            src={process.env.PUBLIC_URL + '/picture.png'} 
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
              <FadeIn x={-40} duration={0.7}>
                <p className="text-xl font-medium text-slate-300 leading-relaxed mb-6">
                  My name is Nicole Sutedja, and I am a second-year Computer Science student at UC San Diego with a 3.9 GPA. I'm passionate about AI research, web development, and creating accessible technology education.
                </p>
              </FadeIn>

              <FadeIn x={-40} duration={0.8}>
                <p className="text-xl font-medium text-slate-300 leading-relaxed">
                  I believe technology should empower communities and bridge gaps. Whether I'm integrating AI platforms, building student marketplaces, or leading workshops for underrepresented students, I'm driven by the goal of making tech more inclusive and impactful.
                </p>
              </FadeIn>
            </div>

            <div>
              <FadeIn x={-40} duration={0.8}>
                <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#b8c5d6' }}>
                  Tech Stack.
                </h3>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-6">
                {techStack.map((box, index) => (
                  <motion.div
                    key={index}
                    variants={bounce}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0 }}
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