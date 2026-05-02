"use client"

import { motion } from "framer-motion"
import { ArrowDoodle, BugDoodle, StarDoodle, CheckmarkDoodle, LightbulbDoodle } from "@/components/doodles"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "Attendee",
    description: "An attendance tracking app because I kept forgetting if I had enough classes to pass. Now it tells me exactly how many lectures I can skip. Life-changing.",
    tech: ["Next.js", "Firebase Auth", "MongoDB"],
    liveUrl: "https://attendy-omega.vercel.app",
    githubUrl: "https://github.com/Fadddin/attendance-tracker",
    rotation: -2.5,
    tapeRotation: 4,
    tapePosition: "left",
    note: "saved my attendance",
    hasBug: false,
  },
  {
    name: "Scalable Coding Platform",
    description: "A LeetCode-style platform with microservices because I wanted to understand why everyone complains about them. Now I understand. Worth it though.",
    tech: ["MERN", "Docker", "Redis", "RabbitMQ", "WebSockets"],
    liveUrl: null,
    githubUrl: "https://github.com/Fadddin/BtrCode",
    rotation: 2,
    tapeRotation: -3,
    tapePosition: "right",
    note: "overengineered? maybe",
    hasBug: true,
  },
  {
    name: "AI Image Editor",
    description: "Built at VideoDubber.ai — interactive canvas editing with Fabric.js and AI image generation. Users can actually edit images with AI. The future is here.",
    tech: ["React", "Fabric.js", "AI APIs", "Mantine UI"],
    liveUrl: null,
    githubUrl: null,
    rotation: -1.5,
    tapeRotation: 2,
    tapePosition: "center",
    note: "work project",
    hasBug: false,
  },
  {
    name: "LMS Platform",
    description: "A full Learning Management System with in-browser code editor. Students can write and run code without leaving the platform. Teachers love it (I think).",
    tech: ["React", "Node.js", "MongoDB", "Monaco Editor"],
    liveUrl: null,
    githubUrl: null,
    rotation: 1.8,
    tapeRotation: -4,
    tapePosition: "left",
    note: "9 months of work",
    hasBug: false,
  },
]

function TapePiece({ rotation, position }: { rotation: number; position: string }) {
  const positions = {
    left: "left-[15%]",
    center: "left-1/2 -translate-x-1/2",
    right: "left-[75%]",
  }
  
  return (
    <div 
      className={`absolute -top-3 ${positions[position as keyof typeof positions]} w-18 h-6 z-10`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        background: "linear-gradient(135deg, var(--tape) 0%, var(--tape-dark) 100%)",
        opacity: 0.85,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        width: "72px"
      }}
    >
      {/* Tape texture */}
      <div className="absolute inset-0 opacity-10" style={{
        background: "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)"
      }} />
    </div>
  )
}

export function ProjectsSection() {
  return (
    <motion.section 
      id="projects"
      className="min-h-screen py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
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
          
          {/* Corner doodle */}
          <motion.div 
            className="absolute top-4 right-4 opacity-30"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <LightbulbDoodle className="w-8 h-12" />
          </motion.div>
          
          <div className="ml-8 space-y-8">
            {/* Date */}
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Wednesday, After midnight (as usual)
            </motion.p>
            
            {/* Title */}
            <motion.h2 
              className="text-3xl md:text-4xl scribble-underline inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {"Entry #014: Things I built (that actually work)"}
            </motion.h2>
            
            {/* Arrow pointing to projects */}
            <motion.div 
              className="flex items-center gap-3 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <ArrowDoodle direction="down" />
              <span className="text-sm italic">real projects, real users</span>
              <span className="text-xs">(click to explore)</span>
            </motion.div>
            
            {/* Project cards - taped paper notes */}
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="relative"
                  initial={{ opacity: 0, y: 40, rotate: project.rotation * 1.5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: project.rotation }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.12, type: "spring", stiffness: 100 }}
                >
                  {/* Tape */}
                  <TapePiece rotation={project.tapeRotation} position={project.tapePosition} />
                  
                  {/* Second tape for some cards */}
                  {index % 2 === 0 && (
                    <div 
                      className="absolute -bottom-2 right-[20%] w-14 h-5 z-10"
                      style={{ 
                        transform: `rotate(${-project.tapeRotation}deg)`,
                        background: "linear-gradient(135deg, var(--tape) 0%, var(--tape-dark) 100%)",
                        opacity: 0.7,
                      }}
                    />
                  )}
                  
                  {/* Card - sticky note style */}
                  <div 
                    className="relative bg-secondary border-2 border-foreground/40 p-5 pt-7 hover-wiggle-strong transition-all cursor-pointer group sticky-note torn-edge-bottom"
                    style={{ 
                      transform: `rotate(${project.rotation}deg)`,
                      boxShadow: "3px 3px 8px rgba(0,0,0,0.1)"
                    }}
                  >
                    {/* Paper curl effect */}
                    <div className="absolute bottom-0 right-0 w-8 h-8" style={{
                      background: "linear-gradient(135deg, transparent 50%, var(--muted) 50%)",
                      boxShadow: "-1px -1px 3px rgba(0,0,0,0.08)"
                    }} />
                    
                    {/* Bug doodle if has bug */}
                    {project.hasBug && (
                      <motion.div 
                        className="absolute -top-1 -right-3 opacity-60"
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <BugDoodle className="w-8 h-8" />
                      </motion.div>
                    )}
                    
                    {/* Checkmark for working projects */}
                    {!project.hasBug && (
                      <div className="absolute -top-1 -right-2 text-green-600 opacity-70">
                        <CheckmarkDoodle className="w-6 h-6" />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2 hand-underline inline-block">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 border border-foreground/30 rounded-sm bg-background/50">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    {/* Hand-written note */}
                    {project.note && (
                      <p className="text-xs text-accent italic mb-3 font-mono" style={{ transform: "rotate(-2deg)" }}>
                        ^ {project.note}
                      </p>
                    )}
                    
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm border-2 border-foreground/50 px-4 py-2 hover:bg-muted transition-colors pencil-shake"
                          style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm border-2 border-foreground/50 px-4 py-2 hover:bg-muted transition-colors pencil-shake"
                          style={{ borderRadius: "15px 255px 15px 255px/255px 15px 255px 15px" }}
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                      {!project.liveUrl && !project.githubUrl && (
                        <span className="text-xs text-muted-foreground italic">
                          (proprietary work)
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Note at bottom */}
            <motion.div 
              className="flex items-center justify-center gap-4 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <StarDoodle className="w-4 h-4 opacity-40" />
              <p className="text-sm text-muted-foreground italic">
                * More projects on GitHub (yes, I have a life outside of work)
              </p>
              <StarDoodle className="w-4 h-4 opacity-40" />
            </motion.div>
            
            {/* Page number */}
            <div className="text-center pt-4">
              <span className="page-number">2</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
