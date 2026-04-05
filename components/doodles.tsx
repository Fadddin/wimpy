"use client"

import { motion } from "framer-motion"

export function StickFigureDev() {
  return (
    <svg viewBox="0 0 120 160" className="w-36 h-44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Hair spikes - messy */}
      <path d="M42 12 Q44 2 48 8" />
      <path d="M52 6 Q56 -4 60 4" />
      <path d="M62 3 Q68 -3 72 6" />
      <path d="M74 10 Q80 4 78 14" />
      
      {/* Head - slightly wobbly circle */}
      <path d="M40 28 Q38 10 60 8 Q82 10 80 28 Q82 46 60 48 Q38 46 40 28" />
      
      {/* Eyes - uneven */}
      <circle cx="50" cy="24" r="4" fill="currentColor" />
      <circle cx="70" cy="23" r="4.5" fill="currentColor" />
      
      {/* Eyebrows */}
      <path d="M45 17 Q50 14 55 17" />
      <path d="M65 16 Q70 13 76 17" />
      
      {/* Nose */}
      <path d="M60 28 L58 34" />
      
      {/* Mouth - crooked smile */}
      <path d="M50 38 Q55 44 62 42 Q68 40 72 36" />
      
      {/* Neck */}
      <path d="M56 48 L54 58" />
      <path d="M64 48 L66 58" />
      
      {/* Body - wobbly */}
      <path d="M54 58 Q40 62 38 85 Q36 105 55 108" />
      <path d="M66 58 Q80 62 82 85 Q84 105 65 108" />
      <path d="M55 108 Q60 112 65 108" />
      
      {/* Left arm holding coffee */}
      <path d="M40 68 Q25 75 20 88" />
      
      {/* Coffee cup in hand */}
      <path d="M12 82 L12 98 Q12 102 16 102 L26 102 Q30 102 30 98 L30 82 Z" />
      <path d="M30 86 Q38 86 38 92 Q38 98 30 98" />
      {/* Steam */}
      <path d="M17 78 Q19 74 17 70" strokeWidth="1.5" />
      <path d="M22 76 Q24 72 22 68" strokeWidth="1.5" />
      
      {/* Right arm - typing on laptop */}
      <path d="M80 70 Q95 78 98 85" />
      
      {/* Laptop */}
      <rect x="88" y="78" width="28" height="20" rx="1" />
      <path d="M86 98 L118 98 L115 102 L89 102 Z" />
      {/* Screen lines */}
      <line x1="92" y1="84" x2="108" y2="84" strokeWidth="1" />
      <line x1="92" y1="88" x2="112" y2="88" strokeWidth="1" />
      <line x1="92" y1="92" x2="105" y2="92" strokeWidth="1" />
      
      {/* Legs */}
      <path d="M52 108 Q48 125 42 145" />
      <path d="M68 108 Q72 125 78 145" />
      
      {/* Feet */}
      <path d="M42 145 Q38 148 35 146" />
      <path d="M78 145 Q82 148 85 146" />
      
      {/* Thought bubble */}
      <circle cx="95" cy="55" r="3" strokeWidth="1.5" />
      <circle cx="102" cy="48" r="4" strokeWidth="1.5" />
      <ellipse cx="112" cy="38" rx="8" ry="6" strokeWidth="1.5" />
      <text x="109" y="41" fontSize="8" fill="currentColor" stroke="none">?!</text>
    </svg>
  )
}

export function BugDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={`w-10 h-10 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Body - wobbly */}
      <path d="M25 18 Q12 20 12 32 Q12 44 25 46 Q38 44 38 32 Q38 20 25 18" />
      
      {/* Head */}
      <circle cx="25" cy="12" r="7" />
      
      {/* Eyes - uneven angry eyes */}
      <circle cx="22" cy="11" r="2.5" fill="currentColor" />
      <circle cx="28" cy="11" r="2" fill="currentColor" />
      
      {/* Angry eyebrows */}
      <path d="M19 7 L24 9" strokeWidth="2" />
      <path d="M31 7 L26 9" strokeWidth="2" />
      
      {/* Fangs */}
      <path d="M23 16 L22 19" strokeWidth="1.5" />
      <path d="M27 16 L28 19" strokeWidth="1.5" />
      
      {/* Legs - sketchy */}
      <path d="M12 24 Q6 20 2 22" />
      <path d="M12 32 Q4 32 1 35" />
      <path d="M14 40 Q8 44 5 48" />
      <path d="M38 24 Q44 20 48 22" />
      <path d="M38 32 Q46 32 49 35" />
      <path d="M36 40 Q42 44 45 48" />
      
      {/* Antennae */}
      <path d="M20 6 Q16 0 14 2" />
      <path d="M30 6 Q34 0 36 2" />
      
      {/* Shell pattern */}
      <path d="M18 26 Q25 24 32 26" strokeWidth="1" />
      <path d="M16 34 Q25 32 34 34" strokeWidth="1" />
      <line x1="25" y1="20" x2="25" y2="44" strokeWidth="1" />
    </svg>
  )
}

export function LaptopDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 55" className={`w-14 h-11 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Screen - wobbly rectangle */}
      <path d="M5 5 Q4 3 35 3 Q66 3 65 5 L65 35 Q66 37 35 37 Q4 37 5 35 Z" />
      
      {/* Keyboard base */}
      <path d="M0 42 Q0 40 35 40 Q70 40 70 42 L68 48 Q68 50 35 50 Q2 50 2 48 Z" />
      
      {/* Hinge */}
      <path d="M8 37 Q35 42 62 37" />
      
      {/* Screen content - code */}
      <path d="M10 10 L25 10" strokeWidth="1.2" />
      <path d="M10 15 L40 15" strokeWidth="1.2" />
      <path d="M15 20 L50 20" strokeWidth="1.2" />
      <path d="M15 25 L35 25" strokeWidth="1.2" />
      <path d="M10 30 L30 30" strokeWidth="1.2" />
      
      {/* Cursor */}
      <rect x="52" y="12" width="6" height="10" strokeWidth="1" />
      
      {/* Trackpad */}
      <rect x="28" y="43" width="14" height="5" rx="1" strokeWidth="1" />
    </svg>
  )
}

export function CoffeeDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 45 55" className={`w-9 h-11 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Cup body - wobbly */}
      <path d="M6 18 Q4 20 5 42 Q6 50 12 50 L28 50 Q34 50 35 42 L36 18" />
      
      {/* Handle - sketchy loop */}
      <path d="M35 24 Q45 24 45 32 Q45 40 35 40" />
      
      {/* Coffee surface */}
      <path d="M8 22 Q20 24 34 22" strokeWidth="1.5" />
      
      {/* Steam - more elaborate */}
      <path d="M14 12 Q16 6 14 0" strokeWidth="1.5" />
      <path d="M21 14 Q23 8 21 2" strokeWidth="1.5" />
      <path d="M28 12 Q30 6 28 0" strokeWidth="1.5" />
      
      {/* Coffee drip stain */}
      <path d="M30 38 Q32 42 30 46" strokeWidth="1.2" opacity="0.5" />
      
      {/* "COFFEE" text attempt crossed out */}
      <text x="10" y="36" fontSize="6" fill="currentColor" stroke="none" opacity="0.4">fuel</text>
    </svg>
  )
}

export function ThinkingBubble({ className = "", text = "hmm..." }: { className?: string; text?: string }) {
  return (
    <svg viewBox="0 0 100 70" className={`w-20 h-14 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      {/* Main bubble - wobbly cloud shape */}
      <path d="M20 35 Q8 35 10 25 Q8 15 20 15 Q25 5 45 8 Q65 5 75 15 Q88 12 90 25 Q95 35 85 40 Q88 50 75 50 Q65 55 45 52 Q25 55 18 45 Q10 45 20 35" />
      
      {/* Thinking dots */}
      <circle cx="25" cy="58" r="4" />
      <circle cx="15" cy="65" r="3" />
      <circle cx="8" cy="68" r="2" />
      
      {/* Text inside */}
      <text x="50" y="35" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle">{text}</text>
    </svg>
  )
}

export function ArrowDoodle({ className = "", direction = "right" }: { className?: string; direction?: "right" | "left" | "down" | "up" }) {
  const rotations = { right: 0, down: 90, left: 180, up: -90 }
  return (
    <svg 
      viewBox="0 0 60 25" 
      className={`w-12 h-6 ${className}`} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      {/* Wobbly arrow line */}
      <path d="M2 12 Q15 8 30 13 Q45 18 50 12" />
      {/* Arrow head - sketchy */}
      <path d="M42 6 L52 12 L42 18" />
      <path d="M44 8 L50 12" strokeWidth="1.5" />
    </svg>
  )
}

export function StarDoodle({ filled = false, className = "" }: { filled?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={`w-6 h-6 ${className}`} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Wobbly star */}
      <path d="M14 2 L16.5 10 Q17 11 18 11 L26 11 L20 16 Q19 17 19.5 18 L22 26 L15 21 Q14 20.5 13 21 L6 26 L8.5 18 Q9 17 8 16 L2 11 L10 11 Q11 11 11.5 10 Z" />
    </svg>
  )
}

export function TapePiece({ className = "", rotation = -3, variant = "normal" }: { className?: string; rotation?: number; variant?: "normal" | "torn" | "wrinkled" }) {
  const baseClasses = "absolute h-6"
  const widths = { normal: "w-18", torn: "w-16", wrinkled: "w-20" }
  
  return (
    <div 
      className={`${baseClasses} ${widths[variant]} ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        background: `linear-gradient(135deg, var(--tape) 0%, var(--tape-dark) 100%)`,
        opacity: 0.85,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderRadius: '1px',
      }}
    >
      {variant === "wrinkled" && (
        <div className="absolute inset-0 opacity-20" style={{
          background: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px)'
        }} />
      )}
    </div>
  )
}

export function CodeSnippetDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 50" className={`w-14 h-10 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Brackets */}
      <path d="M18 10 L8 25 L18 40" />
      <path d="M52 10 L62 25 L52 40" />
      
      {/* Slash */}
      <line x1="28" y1="42" x2="42" y2="8" />
      
      {/* Decorative dots */}
      <circle cx="35" cy="25" r="2" fill="currentColor" />
    </svg>
  )
}

export function ScratchedText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`crossed-out text-muted-foreground ${className}`}>
      {children}
    </span>
  )
}

export function DoodleDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={`w-full h-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M10 10 Q30 5 50 10 T90 10 T130 10 T170 10 T190 10" />
      <circle cx="100" cy="10" r="3" fill="currentColor" />
    </svg>
  )
}

export function CheckmarkDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 16 L12 23 L25 8" />
    </svg>
  )
}

export function CrossDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M6 6 L24 24" />
      <path d="M24 6 L6 24" />
    </svg>
  )
}

export function StickyNoteDoodle({ className = "", color = "yellow" }: { className?: string; color?: "yellow" | "pink" | "blue" | "green" }) {
  const colors = {
    yellow: "bg-yellow-100",
    pink: "bg-pink-100", 
    blue: "bg-blue-100",
    green: "bg-green-100"
  }
  
  return (
    <div className={`${colors[color]} p-3 shadow-md ${className}`} style={{
      transform: 'rotate(-2deg)',
      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
    }}>
      <div className="absolute bottom-0 right-0 w-6 h-6" style={{
        background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)'
      }} />
    </div>
  )
}

export function PaperClipDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 50" className={`w-5 h-12 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 45 L5 10 Q5 5 10 5 Q15 5 15 10 L15 38 Q15 42 12 42 Q9 42 9 38 L9 15" />
    </svg>
  )
}

export function ExclamationDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 40" className={`w-4 h-8 ${className}`} fill="currentColor" stroke="currentColor" strokeWidth="1">
      <path d="M8 2 Q7 20 10 25 Q13 20 12 2 Z" />
      <circle cx="10" cy="34" r="4" />
    </svg>
  )
}

export function QuestionDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 40" className={`w-5 h-8 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 10 Q5 2 12.5 2 Q20 2 20 10 Q20 16 12.5 20 L12.5 26" />
      <circle cx="12.5" cy="34" r="3" fill="currentColor" />
    </svg>
  )
}

export function HeartDoodle({ className = "", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 30 28" className={`w-6 h-6 ${className}`} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 26 Q5 18 3 12 Q1 6 7 4 Q12 2 15 7 Q18 2 23 4 Q29 6 27 12 Q25 18 15 26" />
    </svg>
  )
}

export function LightbulbDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 45" className={`w-6 h-9 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {/* Bulb */}
      <path d="M8 18 Q4 12 6 6 Q10 0 15 0 Q20 0 24 6 Q26 12 22 18 Q20 22 20 28 L10 28 Q10 22 8 18" />
      {/* Base */}
      <line x1="10" y1="32" x2="20" y2="32" />
      <line x1="11" y1="36" x2="19" y2="36" />
      <line x1="12" y1="40" x2="18" y2="40" />
      {/* Rays */}
      <line x1="15" y1="-5" x2="15" y2="-10" strokeWidth="1.5" />
      <line x1="3" y1="8" x2="-2" y2="6" strokeWidth="1.5" />
      <line x1="27" y1="8" x2="32" y2="6" strokeWidth="1.5" />
    </svg>
  )
}

export function FloatingDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BugDoodle className="w-12 h-12" />
      </motion.div>
      <motion.div
        className="absolute top-32 right-16"
        animate={{ y: [0, 12, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <CoffeeDoodle className="w-10 h-12" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-8"
        animate={{ rotate: [-10, 10, -10], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <CodeSnippetDoodle className="w-16 h-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-16"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <LaptopDoodle className="w-16 h-14" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-12"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <QuestionDoodle className="w-8 h-12" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-8"
        animate={{ scale: [1, 1.1, 1], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ExclamationDoodle className="w-6 h-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-1/3"
        animate={{ y: [0, -10, 0], x: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <LightbulbDoodle className="w-8 h-12" />
      </motion.div>
    </div>
  )
}
