"use client"

import { motion } from "framer-motion"
import { BugDoodle, LaptopDoodle, ThinkingBubble, CoffeeDoodle, DoodleDivider, ArrowDoodle } from "@/components/doodles"

export function AboutSection() {
  return (
    <motion.section 
      id="about"
      className="min-h-screen py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Diary page */}
        <div className="relative bg-card paper-texture notebook-lines p-6 md:p-10 border-2 border-border coffee-stain"
             style={{ borderRadius: "2px 12px 12px 2px", borderWidth: "2px 3px 3px 2px" }}>
          
          {/* Page holes - more realistic */}
          <div className="absolute left-2 top-12 w-4 h-4 rounded-full bg-background border-2 border-border shadow-inner" />
          <div className="absolute left-2 top-1/3 w-4 h-4 rounded-full bg-background border-2 border-border shadow-inner" />
          <div className="absolute left-2 top-2/3 w-4 h-4 rounded-full bg-background border-2 border-border shadow-inner" />
          <div className="absolute left-2 bottom-12 w-4 h-4 rounded-full bg-background border-2 border-border shadow-inner" />
          
          {/* Red margin line - slightly wobbly */}
          <svg className="absolute left-10 top-0 bottom-0 w-1" style={{ height: "100%" }}>
            <line x1="2" y1="0" x2="3" y2="100%" stroke="var(--accent)" strokeWidth="2" opacity="0.5" />
            <line x1="5" y1="0" x2="4" y2="100%" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          </svg>
          
          {/* Eraser smudge */}
          <div className="absolute top-24 right-16 w-12 h-4 bg-eraser-smudge/40 rounded-full blur-sm" style={{ transform: "rotate(-15deg)" }} />
          
          {/* Paper clip */}
          <svg className="absolute -top-2 right-20 w-6 h-14 opacity-60" viewBox="0 0 20 50" fill="none" stroke="var(--pencil-gray)" strokeWidth="2" strokeLinecap="round">
            <path d="M5 45 L5 10 Q5 5 10 5 Q15 5 15 10 L15 38 Q15 42 12 42 Q9 42 9 38 L9 15" />
          </svg>
          
          <div className="ml-8 space-y-6">
            {/* Date with doodle */}
            <motion.div 
              className="flex items-center gap-3 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span>Monday, Somewhere in 2026</span>
              <CoffeeDoodle className="w-6 h-7 opacity-50" />
            </motion.div>
            
            {/* Title with scribble underline */}
            <motion.h2 
              className="text-3xl md:text-4xl scribble-underline inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {"Entry #001: Who even am I?"}
            </motion.h2>
            
            {/* Content */}
            <motion.div 
              className="space-y-4 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p>
                <span className="text-2xl">Dear Diary,</span>
              </p>
              <p>
                Sup, <span className="highlighted">Fardin</span> here, B.Tech student at Tezpur University 
                (class of 2026, CGPA 8.4 — {"Mom's"} finally proud).
              </p>
              
              {/* Margin note */}
              <div className="relative">
                <p>
                  My journey started when I realized clicking buttons on a computer could actually 
                  make money. Now {"I'm"} a <span className="hand-underline">{'"full-stack developer"'}</span> — which means 
                  I can confidently break things on BOTH the frontend AND the backend. Currently 
                  working at <span className="font-bold">Atlan</span> as a Software Developer Intern, building 
                  cool stuff with python(claude), vue(claude), Go (claude), and an unhealthy amount of caffeine.
                </p>
                <motion.div 
                  className="absolute -right-4 top-0 text-xs text-accent opacity-70"
                  style={{ transform: "rotate(5deg)", writingMode: "vertical-rl" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  {"<-- living the dream"}
                </motion.div>
              </div>
              
              <p>
                {"I've"} survived multiple internships (see experience section if you {"don't"} believe me), 
                built actual products that real humans use, and only mass-deployed bugs to production 
                <span className="text-sm text-muted-foreground"> (a few times)</span>. When {"I'm"} not 
                coding, {"I'm"} probably debugging. When {"I'm"} not debugging, {"I'm"} thinking about 
                that bug from last week.
              </p>
              
              {/* Signature with doodle */}
              <div className="flex items-end gap-4">
                <p className="text-muted-foreground italic text-xl font-mono">
                  — Fardin
                </p>
                <span className="text-sm text-muted-foreground">(Professional Bug Creator & Fixer)</span>
              </div>
            </motion.div>
            
            {/* Divider doodle */}
            <DoodleDivider className="opacity-30" />
            
            {/* Doodles at bottom */}
            <div className="relative h-28 mt-4">
              <motion.div 
                className="absolute left-0 bottom-0"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <ThinkingBubble text="why??" />
              </motion.div>
              <motion.div 
                className="absolute left-1/3 bottom-4"
                initial={{ scale: 0, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <LaptopDoodle className="w-16 h-14" />
              </motion.div>
              <motion.div 
                className="absolute right-1/4 bottom-2"
                initial={{ scale: 0, rotate: 10 }}
                whileInView={{ scale: 1, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75, type: "spring" }}
              >
                <ArrowDoodle direction="right" className="opacity-50" />
              </motion.div>
              <motion.div 
                className="absolute right-8 bottom-0"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <BugDoodle className="w-12 h-12" />
              </motion.div>
              
              {/* Hand-drawn arrow pointing to bug */}
              <motion.div
                className="absolute right-24 bottom-6 text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                style={{ transform: "rotate(-10deg)" }}
              >
                {"my code's best friend"}
              </motion.div>
            </div>
            
            {/* Page number */}
            <div className="text-center pt-4">
              <span className="page-number">1</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
