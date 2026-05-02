"use client"

import { motion } from "framer-motion"
import { ArrowDoodle, StarDoodle, HeartDoodle, PaperClipDoodle } from "@/components/doodles"
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "fardinkhan479@gmail.com",
    href: "mailto:fardinkhan479@gmail.com",
    rotation: -2,
    note: "fastest way!",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70863-25210",
    href: "tel:+917086325210",
    rotation: 1.5,
    note: "call anytime",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Fadddin",
    href: "https://github.com/Fadddin",
    rotation: -1,
    note: "see my code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/fardin-khan-a62a06266",
    href: "https://www.linkedin.com/in/fardin-khan-a62a06266/",
    rotation: 2,
    note: "let's connect",
  },
]

export function ContactSection() {
  return (
    <motion.section 
      id="contact"
      className="min-h-screen py-16 px-4 pb-32"
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
          
          {/* Paper clip decoration */}
          <div className="absolute -top-4 right-24">
            <PaperClipDoodle className="w-6 h-14 opacity-50" />
          </div>
          
          {/* Coffee ring stain */}
          <div className="absolute top-40 right-6 w-12 h-12 rounded-full border-4 border-coffee-stain/15 opacity-40" />
          
          <div className="ml-8 space-y-8">
            {/* Date */}
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Any day, hopefully soon...
            </motion.p>
            
            {/* Title */}
            <motion.h2 
              className="text-3xl md:text-4xl scribble-underline inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {"Entry #999: Let's work together!"}
            </motion.h2>
            
            {/* Location */}
            <motion.div 
              className="flex items-center gap-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <MapPin className="w-4 h-4" />
              <span>Tezpur, Assam, India 784001</span>
              <span className="text-xs italic">(remote-friendly!)</span>
            </motion.div>
            
            {/* Intro */}
            <motion.p 
              className="text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Dear <span className="highlighted">future collaborator</span>/fellow dev,
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              If {"you've"} made it this far, <span className="font-bold">congratulations!</span> You now know more about me 
              than most of my professors. hit me up,  
              open to interesting stuff, side projects, or just geeking out about tech. 
              Feel free to reach out.
            </motion.p>
            
            {/* Arrow */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <ArrowDoodle direction="down" className="opacity-60" />
              <span className="text-sm italic text-muted-foreground">find me here</span>
              <span className="text-xs text-muted-foreground">(I {"don't"} bite)</span>
            </motion.div>
            
            {/* Contact links - taped cards */}
            <div className="space-y-5">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="relative block"
                  initial={{ opacity: 0, x: -30, rotate: contact.rotation * 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: contact.rotation }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                >
                  {/* Tape */}
                  <div 
                    className="absolute -top-2 left-[30%] w-14 h-5 z-10"
                    style={{ 
                      transform: `rotate(${contact.rotation * -2}deg)`,
                      background: "linear-gradient(135deg, var(--tape) 0%, var(--tape-dark) 100%)",
                      opacity: 0.8,
                    }}
                  />
                  
                  <div 
                    className="flex items-center gap-4 p-5 pt-6 bg-secondary border-2 border-foreground/40 hover:bg-muted transition-colors group sticky-note"
                    style={{ 
                      transform: `rotate(${contact.rotation}deg)`,
                      boxShadow: "3px 3px 8px rgba(0,0,0,0.1)"
                    }}
                  >
                    {/* Paper corner fold */}
                    <div className="absolute bottom-0 right-0 w-5 h-5" style={{
                      background: "linear-gradient(135deg, transparent 50%, var(--muted) 50%)",
                    }} />
                    
                    <div className="w-10 h-10 rounded-full border-2 border-foreground/50 flex items-center justify-center group-hover:border-foreground transition-colors">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-bold text-lg">{contact.label}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {contact.value}
                      </p>
                    </div>
                    
                    {/* Hand-written note */}
                    <span 
                      className="text-xs text-accent/60 font-mono hidden sm:block"
                      style={{ transform: "rotate(-3deg)" }}
                    >
                      {contact.note}
                    </span>
                    
                    <ArrowDoodle direction="right" className="w-8 h-4 opacity-40 group-hover:opacity-70 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Sign off */}
            <motion.div 
              className="pt-8 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <p className="text-muted-foreground">Looking forward to building something awesome together!</p>
              
              <div className="flex items-center gap-3">
                <p className="text-2xl italic font-mono">— Fardin Khan Rahman</p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HeartDoodle filled className="w-5 h-5 text-accent/60" />
                </motion.div>
              </div>
              
              {/* <p 
                className="text-sm text-muted-foreground"
                style={{ transform: "rotate(-1deg)" }}
              >
                P.S. If {"you're"} a recruiter, <span className="highlighted">yes I can work remotely!</span>
              </p> */}
            
            </motion.div>
            
            {/* Page number */}
            <div className="text-center pt-4">
              <span className="page-number">5</span>
            </div>
          </div>
        </div>
        
        {/* Footer - sketchy style */}
        <motion.footer 
          className="relative mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          {/* Decorative line */}
          <svg viewBox="0 0 200 10" className="w-48 h-3 mx-auto mb-4 opacity-30">
            <path d="M10 5 Q50 2 100 6 Q150 10 190 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          
          <p className="text-sm text-muted-foreground">Made with caffeine, late nights, and questionable life choices</p>
          
          <div className="flex items-center justify-center gap-2 mt-2">
            <StarDoodle className="w-3 h-3 opacity-30" />
            <p className="text-xs text-muted-foreground">© 2026 {"Fardin's"} Diary</p>
            <StarDoodle className="w-3 h-3 opacity-30" />
          </div>
          
          {/* Scattered doodle */}
          <motion.div 
            className="absolute -bottom-8 right-8 text-xs text-muted-foreground opacity-40"
            style={{ transform: "rotate(8deg)" }}
          >
            the end... for now
          </motion.div>
        </motion.footer>
      </div>
    </motion.section>
  )
}
