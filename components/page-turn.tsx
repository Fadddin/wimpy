"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

// iOS Books-style page turns, scoped to the diary card: every section is
// pinned while its content scrolls through, then further scrolling turns the
// diary page (just the card, not the whole screen) over its left spine,
// revealing the next page already lying beneath it.
//
// Scroll timeline per page: [hold while the previous page turns] -> [content
// scrolls 1:1] -> [dwell with the finished page at rest] -> [own turn].
// Tracks overlap by one viewport + one turn so the next page is already
// pinned underneath when a turn starts.

const FLIP_SCROLL = 0.5 // fraction of viewport height one page turn consumes
const DWELL_SCROLL = 0.35 // scroll pause on the finished page before it turns

interface BookPageDef {
  id: string
  content: React.ReactNode
}

export function BookStack({ pages }: { pages: BookPageDef[] }) {
  const prefersReducedMotion = useReducedMotion()
  const [vh, setVh] = useState(0)

  useLayoutEffect(() => {
    const measure = () => setVh(window.innerHeight)
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  if (prefersReducedMotion) {
    return (
      <>
        {pages.map((p) => (
          <div key={p.id} data-book-page={p.id}>
            {p.content}
          </div>
        ))}
      </>
    )
  }

  return (
    <>
      {pages.map((p, i) => (
        <BookPage
          key={p.id}
          id={p.id}
          vh={vh}
          index={i}
          isFirst={i === 0}
          isLast={i === pages.length - 1}
        >
          {p.content}
        </BookPage>
      ))}
    </>
  )
}

interface BookPageProps {
  id: string
  vh: number
  index: number
  isFirst: boolean
  isLast: boolean
  children: React.ReactNode
}

function BookPage({ id, vh, index, isFirst, isLast, children }: BookPageProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentH, setContentH] = useState(0)
  // Bounds of the diary card (the section's centered max-w container),
  // relative to the content wrapper — the card is the sheet that turns
  const [card, setCard] = useState({ left: 0, top: 0, w: 0, h: 0 })

  useLayoutEffect(() => {
    const content = contentRef.current
    if (!content) return
    const measure = () => {
      setContentH(content.offsetHeight)
      const inner = content.querySelector("section > div")
      if (inner) {
        const c = content.getBoundingClientRect()
        const r = inner.getBoundingClientRect()
        setCard({ left: r.left - c.left, top: r.top - c.top, w: r.width, h: r.height })
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(content)
    return () => ro.disconnect()
  }, [vh])

  const flipLen = Math.round(vh * FLIP_SCROLL)
  const hold = isFirst ? 0 : flipLen
  const scrollable = Math.max(contentH - vh, 0)
  const dwell = isLast ? 0 : Math.round(vh * DWELL_SCROLL)
  const flip = isLast ? 0 : flipLen
  const pinned = hold + scrollable + dwell + flip

  // Latest metrics readable from inside useTransform callbacks
  const metrics = useRef({ hold, scrollable, dwell, flip, pinned })
  metrics.current = { hold, scrollable, dwell, flip, pinned }

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, (p) => {
    const m = metrics.current
    if (!m.pinned || !m.scrollable) return 0
    const s = p * m.pinned
    return -Math.min(Math.max(s - m.hold, 0), m.scrollable)
  })

  // The page lifts about its spine and is gone just past edge-on (-90deg);
  // with no back face rendered, -100 avoids scroll spent on an invisible page
  const rotateY = useTransform(scrollYProgress, (p) => {
    const m = metrics.current
    if (!m.pinned || !m.flip) return 0
    const s = p * m.pinned
    return -100 * Math.min(Math.max((s - m.hold - m.scrollable - m.dwell) / m.flip, 0), 1)
  })

  // The lifting page darkens toward its free (right) edge mid-turn
  const turnShade = useTransform(rotateY, [-120, -20, 0], [0.4, 0.08, 0])

  // Shadow the previous page casts on this one, receding as it lifts away
  const underShade = useTransform(scrollYProgress, (p) => {
    const m = metrics.current
    if (!m.hold || !m.pinned) return 0
    const s = p * m.pinned
    return s >= m.hold ? 0 : 0.45 * (1 - s / m.hold)
  })

  // A page stays hidden until it pins beneath the previous page's turn —
  // otherwise it would peek out from behind the page being read
  const visibility = useTransform(scrollYProgress, (p) =>
    isFirst || p > 0.0005 ? "visible" : "hidden"
  )

  // While the previous page turns, this one fades in toward the turn's end
  const revealOpacity = useTransform(scrollYProgress, (p) => {
    const m = metrics.current
    if (isFirst || !m.hold || !m.pinned) return 1
    const s = p * m.pinned
    if (s >= m.hold) return 1
    return Math.min(Math.max((s / m.hold - 0.4) / 0.55, 0), 1)
  })

  return (
    <div
      ref={trackRef}
      data-book-page={id}
      data-hold={hold}
      className="relative"
      style={{
        height: vh ? vh + pinned : "100vh",
        marginTop: isFirst || !vh ? 0 : -(vh + flipLen),
        zIndex: 40 - index,
      }}
    >
      <motion.div
        className="sticky top-0 overflow-hidden"
        style={{ height: vh || "100vh", visibility, opacity: revealOpacity }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            rotateY,
            transformOrigin: `${card.left}px center`,
            transformPerspective: 2400,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div ref={contentRef} style={{ y, transformStyle: "preserve-3d" }}>
            {/* Front: the readable page */}
            <div style={{ backfaceVisibility: "hidden" }}>
              {children}
              <motion.div
                className="pointer-events-none absolute"
                style={{
                  left: card.left,
                  top: card.top,
                  width: card.w,
                  height: card.h,
                  borderRadius: "2px 12px 12px 2px",
                  opacity: turnShade,
                  background:
                    "linear-gradient(to left, rgba(0,0,0,0.55), rgba(0,0,0,0.15) 40%, transparent 75%)",
                }}
              />
              <motion.div
                className="pointer-events-none absolute"
                style={{
                  left: card.left,
                  top: card.top,
                  width: card.w,
                  height: card.h,
                  borderRadius: "2px 12px 12px 2px",
                  opacity: underShade,
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2) 35%, transparent 65%)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Scrolls to a page of the BookStack, landing just after the previous page's
// turn completes. Falls back to plain anchor scrolling (reduced motion).
export function scrollToBookPage(id: string) {
  const track = document.querySelector<HTMLElement>(`[data-book-page="${id}"]`)
  if (!track) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    return
  }
  const top =
    track.getBoundingClientRect().top + window.scrollY + Number(track.dataset.hold || 0)
  window.scrollTo({ top: top + 2, behavior: "smooth" })
}
