import React from 'react';
import { motion } from 'framer-motion';
import DecorativeDots from '../components/DecorativeDots';
import FadeIn from '../components/FadeIn';

// --- DATA ---
const workExperiences = [
  {
    title: "Project Lead",
    company: "Triton Web Developers, UCSD",
    date: "Sep 2025 – Present",
    description: "Manage branding and social media outreach while serving as lead developer for client projects. Connect with campus organizations to scope project visions, including UI/UX direction, framework utilization, and quality inspection for custom web solutions."
  },
  {
    title: "Product Manager",
    company: "CSE Society, UCSD",
    date: "Jun 2025 – Present",
    description: "Own product strategy and execution for Low-Price Center, a student marketplace addressing affordability and sustainability gaps. Translate user research into prioritized requirements, defining MVP scope, trade-offs, and success criteria before campus-wide deployment."
  },
  {
    title: "Web Developer",
    company: "San Diego Indonesian Association, UCSD",
    date: "Jun 2025 – Present",
    description: "Built and deployed a full-stack web application using React, TypeScript, CSS, and SQL. Integrated a Neon SQL backend to improve data reliability for event management and alumni tracking while collaborating with non-technical stakeholders to define features."
  },
  {
    title: "Undergraduate Researcher",
    company: "Early Research Scholars Program, UCSD",
    date: "Sep 2025 – Jun 2026",
    description: "Conducting year-long research under Prof. Mia Minnes developing a specifications-based grading framework. Analyzing student learning outcomes and presenting findings through a research poster at the UCSD ERSP Symposium."
  },
  {
    title: "AI Research Intern",
    company: "Sciencia Consulting",
    date: "Jan 2025 – Jun 2025",
    description: "Analyzed and integrated APIs from five AI platforms, streamlining automation for marketing and scientific teams with a 20% reduction in manual effort. Contributed to AI workshops at UCSD for PhD students, teaching practical use of generative tools."
  }
];

const leadershipRoles = [
  {
    title: "President",
    company: "CS foreach, UCSD",
    date: "Jan 2026 – Present",
    description: "Lead an outreach-focused CS organization increasing resource accessibility for K-12 students. Coordinate cross-functional teams to plan workshops and hackathons, partnering with 120+ students and faculty to identify and fill gaps in local CS education."
  },
  {
    title: "Head of Events",
    company: "San Diego Indonesian Association, UCSD",
    date: "Jun 2025 – Present",
    description: "Oversee all event production including proposals, budgeting, and logistics for 140+ Indonesian students. Coordinate cross-university collaborations with UC Irvine and UCLA to strengthen cultural ties."
  },
  {
    title: "Curriculum Director & Workshop Lead",
    company: "CS foreach, UCSD",
    date: "Jan 2025 – Dec 2026",
    description: "Developed comprehensive K-12 curriculum covering Python, Java, and Machine Learning. Acted as the primary liaison for San Diego schools, delivering 2+ introductory workshops per quarter to increase local STEM accessibility."
  }
];


// Reusable Experience Card
const ExperienceCard = ({ title, company, date, description }) => (
  <div>
    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
      <div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#b8c5d6' }}>{title}</h3>
        <p className="text-slate-300 font-medium">{company}</p>
      </div>
      <p className="text-slate-400 text-sm font-medium">{date}</p>
    </div>
    <p className="text-slate-300 font-medium leading-relaxed">{description}</p>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function Experience() {
  return (
    <>
      <section className="py-32 px-8 bg-slate-900 min-h-screen">
        <div className="max-w-5xl mx-auto">
          
          <DecorativeDots />
          
          <FadeIn x={-40} duration={0.6}>
            <h2 className="text-5xl md:text-6xl font-bold mb-10" style={{ color: '#b8c5d6' }}>Experience.</h2>
          </FadeIn>

          <div className="space-y-16">
            
            {/* Work Experience Section */}
            <div className="border-l-2 pl-8 space-y-12" style={{ borderColor: '#c9aed4' }}>
              {workExperiences.map((exp, index) => (
                <FadeIn key={index} x={-30} duration={0.6} delay={index * 0.1}>
                  <ExperienceCard {...exp} />
                </FadeIn>
              ))}
            </div>

            {/* Leadership Section */}
            <div className="mt-20">
              <FadeIn x={-40} duration={0.7}>
                <h3 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#b8c5d6' }}>Leadership Roles.</h3>
              </FadeIn>
              
              <div className="border-l-2 pl-8 space-y-12" style={{ borderColor: '#c9aed4' }}>
                {leadershipRoles.map((role, index) => (
                  <FadeIn key={index} x={-30} duration={0.6} delay={index * 0.1}>
                    <ExperienceCard {...role} />
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          
          <DecorativeDots />
          
          <FadeIn x={-40} duration={0.6}>
            <h2 className="text-5xl md:text-6xl font-bold mb-20" style={{ color: '#b8c5d6' }}>What People Say.</h2>
          </FadeIn>
          
          <div className="space-y-12">
            <FadeIn x={-40} duration={0.7}>
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
            </FadeIn>
          </div>

        </div>
      </section>
    </>
  );
}