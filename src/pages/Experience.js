import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <>
      {/* Experience Section */}
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-20" style={{ color: '#b8c5d6' }}>Experience.</h2>
          </motion.div>
          <div className="space-y-16">
            {/* Work Experience */}
            <div className="border-l-2 pl-8 space-y-12" style={{ borderColor: '#c9aed4' }}>
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#b8c5d6' }}>AI Tool Research Intern</h3>
                      <p className="text-slate-300 font-medium">Sciencia Consulting</p>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Jan 2025 – Jun 2025</p>
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    Analyzed and integrated APIs from five AI platforms, reducing manual effort by 20%. Contributed to AI workshops for PhD students and published research on optimizing content creation workflows using ChatGPT, Gemini, Claude, Grok, and Perplexity.
                  </p>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#b8c5d6' }}>Product Manager</h3>
                      <p className="text-slate-300 font-medium">CSE Society, UCSD</p>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Jun 2025 – Present</p>
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    Leading development of Low-Price Center, a student-centered marketplace for UCSD. Conducted user research through surveys to define features that foster affordability, sustainability, and campus community engagement.
                  </p>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#b8c5d6' }}>Undergraduate Researcher</h3>
                      <p className="text-slate-300 font-medium">Early Research Scholars Program, UCSD</p>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Sep 2025 – Jun 2026</p>
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    Conducting year-long research under Prof. Mia Minnes developing a specifications-based grading framework. Creating research poster to present findings on student learning outcomes at UCSD ERSP Symposium.
                  </p>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#b8c5d6' }}>Web Developer</h3>
                      <p className="text-slate-300 font-medium">San Diego Indonesian Association, UCSD</p>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Jun 2025 – Present</p>
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    Developed SDIA website using TypeScript and CSS with React frontend and SQL-backed Neon backend to streamline event organization and alumni data management for 140+ members.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Leadership */}
            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-20% 0px" }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#b8c5d6' }}>Leadership Roles.</h3>
              </motion.div>
              <div className="border-l-2 pl-8 space-y-12" style={{ borderColor: '#c9aed4' }}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, margin: "-20% 0px" }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div>
                        <h4 className="text-2xl font-bold mb-2" style={{ color: '#b8c5d6' }}>Head of Events</h4>
                        <p className="text-slate-300 font-medium">San Diego Indonesian Association, UCSD</p>
                      </div>
                      <p className="text-slate-400 text-sm font-medium">Jun 2025 – Present</p>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Oversee all event production including proposals, budgeting, and logistics for 140+ Indonesian students. Coordinate cross-university collaborations with UC Irvine and UCLA to strengthen cultural ties.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, margin: "-20% 0px" }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div>
                        <h4 className="text-2xl font-bold mb-2" style={{ color: '#b8c5d6' }}>CSE Curriculum Director</h4>
                        <p className="text-slate-300 font-medium">CS foreach, UCSD</p>
                      </div>
                      <p className="text-slate-400 text-sm font-medium">Jun 2025 – Present</p>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Lead 2 weekly meetings coordinating workshops for 30+ high school students. Led 6+ engaging CSE workshops for K–12 students focusing on increasing STEM access in underrepresented communities, including Intro to Web Development, AI Chatbots, and Python.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-8">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-20" style={{ color: '#b8c5d6' }}>What People Say.</h2>
          <div className="space-y-12">
            <div className="border-l-4 pl-8" style={{ borderColor: '#c9aed4' }}>
              <p className="text-xl font-medium text-slate-300 italic mb-4 leading-relaxed">
                "Nicole interned at Sciencia Consulting, where she quickly stood out for her precision, innovative thinking, 
                and ability to self-direct in a fast-moving environment. She explored the frontier of gen AI in life science 
                marketing, evaluating tools, crafting life science domain-specific prompts, and contributing thoughtful analysis 
                to improve our content workflows. Nicole brought clarity to complex tasks, communicated with professionalism, and 
                consistently delivered high-quality work. She's a sharp, curious mind who would be a valuable asset to any 
                forward-thinking team."
              </p>
              <p className="text-slate-400 font-medium">— Dr. Jill Roughan, Sciencia Consulting</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}