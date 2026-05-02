"use client"

import { motion } from "framer-motion"
import { ArrowDoodle, StarDoodle, CheckmarkDoodle } from "@/components/doodles"

const experiences = [
  {
    role: "SDE-1",
    company: "Atlan",
    period: "May 2026 - Present",
    description: "Building the context layer for AI.",
    highlights: [
      "Helping AI understand data better"
    ],
    rotation: 1.8,
    stampRotation: -8,
    stampText: "CURRENT",
    stampColor: "text-green-600 border-green-600",
    note: "officially a dev",
  },
  {
    role: "Software Developer Intern",
    company: "Atlan",
    period: "Jan 2026 - April 2026",
    description: "Building data catalog features and shipping production code that actual enterprises use. Still amazed they let me touch the codebase.",
    highlights: [
      "Working on enterprise-grade data governance tools",
      "Collaborating with senior engineers (and learning SO much)",
      "Actually understanding what 'data' means now"
    ],
    rotation: -1.5,
    stampRotation: 12,
    stampText: "COMPLETED",
    stampColor: "text-accent border-accent",
    note: "dream job vibes",
  },
  {
    role: "Frontend Developer Intern",
    company: "VideoDubber.ai",
    period: "April 2025 - June 2025",
    description: "Built AI-powered image editing tools that actually work (most of the time). Turns out Fabric.js is both amazing and terrifying.",
    highlights: [
      "Created interactive canvas manipulation with Fabric.js",
      "Shipped AI image generation & editing features",
      "Implemented full-site dark mode (the users loved it)"
    ],
    rotation: 2,
    stampRotation: -10,
    stampText: "DONE",
    stampColor: "text-accent border-accent",
    note: "AI is wild",
  },
  {
    role: "Full Stack Intern",
    company: "Vrixaa Labs",
    period: "July 2024 - March 2025",
    description: "Built an entire LMS from scratch. Learned that 'full stack' means you fix bugs on both ends at 2 AM.",
    highlights: [
      "Developed core LMS features from zero to production",
      "Built in-browser code editor with Monaco (VS Code brain)",
      "Implemented JWT auth (finally understand tokens!)"
    ],
    rotation: -2,
    stampRotation: 18,
    stampText: "SHIPPED",
    stampColor: "text-accent border-accent",
    note: "9 months of growth",
  },
  {
    role: "Frontend Developer",
    company: "Voolata",
    period: "Jan 2024 - July 2024",
    description: "My first real dev job! Made things look pretty and actually work on mobile. Mom was impressed.",
    highlights: [
      "Built responsive UIs with React & Tailwind",
      "Integrated REST APIs (so many API calls...)",
      "Improved page load times significantly"
    ],
    rotation: 1.5,
    stampRotation: -15,
    stampText: "FIRST JOB",
    stampColor: "text-accent border-accent",
    note: "where it all began",
  },
]

function StampDoodle({ text, rotation, colorClass }: { text: string; rotation: number; colorClass: string }) {
  return (
    <div 
      className={`absolute -top-3 -right-3 w-16 h-16 rounded-full border-3 flex items-center justify-center opacity-70 ${colorClass}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        borderWidth: "3px",
        borderStyle: "double"
      }}
    >
      <span className="text-[10px] font-bold text-center leading-tight">{text}</span>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <motion.section 
      id="experience"
      className="min-h-screen py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Diary page */}
        <div className="relative bg-card paper-texture notebook-lines p-6 md:p-10 border-2 border-border"
             style={{ borderRadius: "2px 12px 12px 2px", borderWidth: "2px 3px 3px 2px" }}>
          
          {/* Page holes */}
          <div className="absolute left-2 top-12 w-4 h-4 rounded-full bg-background border-2 border-border shadow-inner" />
          <div className="absolute left-2 top-1/3 w-4 h-4 rounded-full bg-background border-2 border-border shadow-inner" />
          <div className="absolute left-2 top-2/3 w-4 h-4 rounded-full bg-background border-2 border-border shadow-inner" />
          <div className="absolute left-2 bottom-12 w-4 h-4 rounded-full bg-background border-2 border-border shadow-inner" />
          
          {/* Red margin line */}
          <svg className="absolute left-10 top-0 bottom-0 w-1" style={{ height: "100%" }}>
            <line x1="2" y1="0" x2="3" y2="100%" stroke="var(--accent)" strokeWidth="2" opacity="0.5" />
          </svg>
          
          {/* Eraser smudges */}
          <div className="absolute top-32 right-12 w-8 h-3 bg-eraser-smudge/50 rounded-full blur-sm" style={{ transform: "rotate(25deg)" }} />
          <div className="absolute bottom-40 right-20 w-10 h-3 bg-eraser-smudge/40 rounded-full blur-sm" style={{ transform: "rotate(-15deg)" }} />
          
          <div className="ml-8 space-y-8">
            {/* Date */}
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Friday, Reflecting on the journey so far...
            </motion.p>
            
            {/* Title */}
            <motion.h2 
              className="text-3xl md:text-4xl scribble-underline inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {"Entry #021: The grind (it paid off!)"}
            </motion.h2>
            
            {/* Intro with arrow */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <ArrowDoodle direction="down" className="opacity-50" />
              <span className="text-sm text-muted-foreground italic">2+ years of building stuff</span>
            </motion.div>
            
            {/* Timeline */}
            <div className="relative space-y-8">
              {/* Vertical timeline line - hand drawn style */}
              <svg className="absolute left-0 top-4 bottom-4 w-4" style={{ height: "calc(100% - 32px)" }}>
                <path 
                  d="M8 0 Q6 80 10 160 Q8 240 9 320 Q10 400 7 480 Q9 560 8 640" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="8 4"
                  className="opacity-30"
                />
              </svg>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: -30, rotate: exp.rotation * 1.5 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 80 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1 top-4 w-4 h-4">
                    <motion.div 
                      className="w-full h-full rounded-full bg-foreground"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                    />
                  </div>
                  
                  {/* Card - taped paper style */}
                  <div className="relative">
                    {/* Tape */}
                    <div 
                      className="absolute -top-3 left-[20%] w-16 h-5 z-10"
                      style={{ 
                        transform: `rotate(${exp.rotation * 2}deg)`,
                        background: "linear-gradient(135deg, var(--tape) 0%, var(--tape-dark) 100%)",
                        opacity: 0.8,
                      }}
                    />
                    
                    {/* Stamp */}
                    <StampDoodle text={exp.stampText} rotation={exp.stampRotation} colorClass={exp.stampColor} />
                    
                    <div 
                      className="bg-secondary border-2 border-foreground/40 p-5 pt-6 hover-wiggle sticky-note"
                      style={{ 
                        transform: `rotate(${exp.rotation}deg)`,
                        boxShadow: "3px 3px 8px rgba(0,0,0,0.1)"
                      }}
                    >
                      {/* Paper fold corner */}
                      <div className="absolute bottom-0 right-0 w-6 h-6" style={{
                        background: "linear-gradient(135deg, transparent 50%, var(--muted) 50%)",
                      }} />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                        <h3 className="text-xl font-bold hand-underline inline-block">{exp.role}</h3>
                        <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                      </div>
                      
                      <p className="text-accent font-medium mb-2 flex items-center gap-2">
                        {exp.company}
                        {index === 0 && <CheckmarkDoodle className="w-4 h-4 text-green-600" />}
                      </p>
                      
                      <p className="text-muted-foreground text-sm italic mb-3">{exp.description}</p>
                      
                      {/* Highlights */}
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-accent">→</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Hand-written note */}
                      <p 
                        className="text-xs text-accent/70 mt-3 font-mono"
                        style={{ transform: "rotate(-2deg)" }}
                      >
                        ^ {exp.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom note */}
            <motion.div 
              className="flex items-center justify-center gap-3 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <StarDoodle className="w-4 h-4 opacity-40" />
              <p className="text-sm text-muted-foreground italic">
                * From {"'what is React?'"} to building production apps in 2 years
              </p>
              <StarDoodle className="w-4 h-4 opacity-40" />
            </motion.div>
            
            {/* Page number */}
            <div className="text-center pt-4">
              <span className="page-number">4</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
