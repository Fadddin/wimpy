"use client"

import { motion } from "framer-motion"
import { StickFigureDev, BugDoodle, StarDoodle } from "@/components/doodles"

interface CoverSectionProps {
  onOpenDiary: () => void
}

export function CoverSection({ onOpenDiary }: CoverSectionProps) {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative max-w-md w-full">
        {/* Scattered doodles around the book */}
        <motion.div 
          className="absolute -top-8 -left-12 opacity-40"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <BugDoodle className="w-10 h-10" />
        </motion.div>
        <motion.div 
          className="absolute -top-4 -right-8 opacity-30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <StarDoodle filled className="w-8 h-8" />
        </motion.div>
        
        {/* Book cover */}
        <motion.div 
          className="relative bg-card paper-texture border-4 border-foreground p-8 md:p-12"
          style={{ 
            borderRadius: "4px 20px 20px 4px",
            boxShadow: "10px 10px 0 rgba(0,0,0,0.12), inset -6px 0 12px rgba(0,0,0,0.06)",
            borderWidth: "3px 4px 4px 3px"
          }}
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Spine effect - more detailed */}
          <div className="absolute left-0 top-0 bottom-0 w-5 border-r-2 border-foreground" 
               style={{ 
                 borderRadius: "4px 0 0 4px",
                 background: "linear-gradient(90deg, var(--muted) 0%, var(--card) 100%)"
               }}>
            {/* Spine texture lines */}
            <div className="absolute top-8 left-1 right-1 h-0.5 bg-foreground/20" />
            <div className="absolute top-16 left-1 right-1 h-0.5 bg-foreground/20" />
            <div className="absolute bottom-16 left-1 right-1 h-0.5 bg-foreground/20" />
            <div className="absolute bottom-8 left-1 right-1 h-0.5 bg-foreground/20" />
          </div>
          
          {/* Corner wear marks */}
          <div className="absolute top-2 right-2 w-12 h-12 border-2 border-muted/50 rounded-full opacity-40" />
          <div className="absolute top-6 right-6 w-6 h-6 border border-muted/30 rounded-full opacity-30" />
          <div className="absolute bottom-4 left-8 w-20 h-1 bg-muted/40 rounded-full" style={{ transform: "rotate(-3deg)" }} />
          <div className="absolute bottom-12 right-4 w-8 h-0.5 bg-muted/30 rounded-full" />
          
          {/* Coffee stain */}
          <div className="absolute top-20 right-8 w-14 h-14 rounded-full border-4 border-coffee-stain/15 opacity-60" />
          
          {/* Tape piece at top */}
          <div 
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6"
            style={{
              background: "linear-gradient(135deg, var(--tape) 0%, var(--tape-dark) 100%)",
              transform: "translateX(-50%) rotate(-2deg)",
              opacity: 0.75,
              borderRadius: "1px"
            }}
          />
          
          <div className="ml-5 text-center space-y-6">
            {/* "DO NOT READ" crossed out text */}
            <motion.div
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="crossed-out mr-2">DO NOT READ</span>
              <span className="text-xs">(seriously)</span>
            </motion.div>
            
            {/* Title with hand-drawn feel */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl leading-tight">
                <span className="scribble-underline">{"Fardin's"}</span>
                <br />
                <span className="text-5xl md:text-6xl hand-underline inline-block mt-2">Dev Diary</span>
              </h1>
            </motion.div>
            
            {/* Decorative wobbly line */}
            <motion.svg 
              viewBox="0 0 150 8" 
              className="w-36 h-2 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <path 
                d="M5 4 Q20 1 40 5 Q60 9 80 3 Q100 -1 120 5 Q140 9 145 4" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
            
            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A <span className="highlighted">very serious</span> journey of a
              <br />
              full-stack developer
            </motion.p>
            
            {/* Stick figure */}
            <motion.div 
              className="flex justify-center py-2"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              <StickFigureDev />
            </motion.div>
            
            {/* Scribbled note */}
            <motion.p
              className="text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ transform: "rotate(2deg)" }}
            >
              {"<-- that's me (not to scale)"}
            </motion.p>
            
            {/* Open button - more sketchy */}
            <motion.button
              onClick={onOpenDiary}
              className="relative px-10 py-4 text-xl border-2 border-foreground bg-secondary hover:bg-muted transition-colors hover-wiggle-strong"
              style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Open Diary</span>
              {/* Arrow doodle */}
              <svg 
                className="absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-4 opacity-60"
                viewBox="0 0 40 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M2 8 Q10 4 20 8 Q30 12 35 8" />
                <path d="M30 4 L36 8 L30 12" />
              </svg>
            </motion.button>
            
            {/* Volume text with doodle */}
            <motion.div 
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <StarDoodle className="w-4 h-4" />
              <span>Vol. 1 — 2026 Edition | B.Tech ECE</span>
              <StarDoodle className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Book shadow - more realistic */}
        <div 
          className="absolute -bottom-3 left-6 right-1 h-6 bg-foreground/8 blur-md" 
          style={{ borderRadius: "0 0 20px 4px" }} 
        />
        
        {/* Scattered notes below */}
        <motion.div 
          className="absolute -bottom-16 -left-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ transform: "rotate(-8deg)" }}
        >
          * warning: contains bugs & caffeine
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-12 right-0 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ transform: "rotate(5deg)" }}
        >
          CGPA: 8.4 (Mom{"'"}s proud)
        </motion.div>
      </div>
    </motion.section>
  )
}
