"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CoverSection } from "@/components/sections/cover"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ContactSection } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { FloatingDoodles } from "@/components/doodles"

export default function Home() {
  const [diaryOpen, setDiaryOpen] = useState(false)

  const handleOpenDiary = () => {
    setDiaryOpen(true)
    // Smooth scroll to about section after a short delay
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  return (
    <main className="relative min-h-screen paper-texture">
      <FloatingDoodles />
      <Navigation isVisible={diaryOpen} />
      
      <AnimatePresence mode="wait">
        {!diaryOpen ? (
          <motion.div
            key="cover"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <CoverSection onOpenDiary={handleOpenDiary} />
          </motion.div>
        ) : (
          <motion.div
            key="diary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-16"
          >
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
