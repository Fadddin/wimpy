"use client"

import { motion } from "framer-motion"
import { StarDoodle, CoffeeDoodle, CodeSnippetDoodle, CheckmarkDoodle, CrossDoodle, ArrowDoodle } from "@/components/doodles"

const skills = [
  { name: "JavaScript/TypeScript", stars: 5, note: "fluent in both + console.log", checked: true },
  { name: "React & Next.js", stars: 5, note: "my bread and butter", checked: true },
  { name: "Node.js & Express", stars: 4, note: "APIs for days", checked: true },
  { name: "Tailwind CSS", stars: 5, note: "divs finally centered", checked: true },
  { name: "MongoDB & Firebase", stars: 4, note: "NoSQL gang", checked: true },
  { name: "Docker", stars: 3, note: "containers go brrr", checked: true },
  { name: "Redis & RabbitMQ", stars: 3, note: "async is cool", checked: true },
  { name: "Git/GitHub", stars: 4, note: "only force push sometimes", checked: false },
  { name: "WebSockets", stars: 4, note: "real-time everything", checked: true },
  { name: "Java, C, Python", stars: 3, note: "college requirements", checked: true },
  { name: "Coffee Consumption", stars: 5, note: "PROFESSIONAL LEVEL", checked: true },
]

function SketchyStarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: star % 2 === 0 ? 3 : -3 }}
          viewport={{ once: true }}
          transition={{ delay: star * 0.05, type: "spring" }}
        >
          <StarDoodle filled={star <= count} className="w-5 h-5" />
        </motion.div>
      ))}
    </div>
  )
}

export function SkillsSection() {
  return (
    <motion.section 
      id="skills"
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
          
          {/* Coffee stain ring */}
          <div className="absolute bottom-20 right-8 w-16 h-16 rounded-full border-6 border-coffee-stain/20 opacity-50" style={{ borderWidth: "6px" }} />
          
          <div className="ml-8 space-y-6">
            {/* Date with doodle */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm text-muted-foreground">Thursday, Coffee break #147</span>
              <motion.div
                animate={{ rotate: [0, -5, 0], y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <CoffeeDoodle className="w-8 h-10" />
              </motion.div>
            </motion.div>
            
            {/* Title */}
            <motion.h2 
              className="text-3xl md:text-4xl scribble-underline inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {"Entry #007: The tech stack (it's stacked)"}
            </motion.h2>
            
            {/* Intro */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <ArrowDoodle direction="down" className="opacity-60" />
              <p className="text-muted-foreground italic">
                Skills rated with <span className="highlighted">brutal honesty</span>:
              </p>
            </motion.div>
            
            {/* Skills list - checklist style */}
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 border-b-2 border-dashed border-border/40 pb-3 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  {/* Checkbox */}
                  <div className="w-6 h-6 flex-shrink-0">
                    {skill.checked ? (
                      <CheckmarkDoodle className="w-6 h-6 text-green-600/70" />
                    ) : (
                      <CrossDoodle className="w-5 h-5 text-accent/70" />
                    )}
                  </div>
                  
                  {/* Skill name */}
                  <span className="font-bold min-w-[140px] md:min-w-[180px] group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  
                  {/* Stars */}
                  <div className="hidden sm:block">
                    <SketchyStarRating count={skill.stars} />
                  </div>
                  
                  {/* Note - handwritten style */}
                  <span 
                    className="text-xs md:text-sm text-muted-foreground italic font-mono ml-auto"
                    style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                  >
                    {skill.note}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom note with arrow */}
            <motion.div 
              className="flex items-center gap-4 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <ArrowDoodle direction="right" className="opacity-40" />
              <p className="text-xs text-muted-foreground" style={{ transform: "rotate(-1deg)" }}>
                (always learning new things — currently exploring AI/ML)
              </p>
            </motion.div>
            
            {/* Bottom doodle */}
            <motion.div 
              className="flex justify-center pt-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring" }}
            >
              <CodeSnippetDoodle className="w-20 h-14 opacity-40" />
            </motion.div>
            
            {/* Page number */}
            <div className="text-center pt-4">
              <span className="page-number">3</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
