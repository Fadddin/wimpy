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
import { BookStack } from "@/components/page-turn"

export default function Home() {
  const [diaryOpen, setDiaryOpen] = useState(false)

  const handleOpenDiary = () => {
    setDiaryOpen(true)
    // The book stack starts at the top of the document
    setTimeout(() => {
      window.scrollTo({ top: 0 })
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
          >
            <BookStack
              pages={[
                { id: "about", content: <AboutSection /> },
                { id: "projects", content: <ProjectsSection /> },
                { id: "skills", content: <SkillsSection /> },
                { id: "experience", content: <ExperienceSection /> },
                { id: "contact", content: <ContactSection /> },
              ]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
