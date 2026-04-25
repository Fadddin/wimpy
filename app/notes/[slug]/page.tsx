"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Note } from "@/lib/notes"

export default function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const [note, setNote] = useState<Note | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [slug, setSlug] = useState<string | null>(null)

  // Unwrap params promise
  useEffect(() => {
    params.then((p) => setSlug(p.slug))
  }, [params])

  // Fetch note when slug is ready
  useEffect(() => {
    if (!slug) return

    async function fetchNote() {
      try {
        const response = await fetch(`/api/notes/${slug}`)
        if (!response.ok) {
          throw new Error('Note not found')
        }
        const data = await response.json()
        setNote(data)
      } catch (error) {
        console.error('Failed to fetch note:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNote()
  }, [slug])

  if (isLoading) {
    return (
      <div className="min-h-screen paper-texture flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-pulse">
            <div className="w-12 h-12 bg-muted rounded-full" />
          </div>
          <p className="mt-4 text-muted-foreground">Loading note...</p>
        </div>
      </div>
    )
  }

  if (!note) {
    return (
      <div className="min-h-screen paper-texture flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Note not found</h1>
          <Link href="/notes" className="text-accent hover:underline flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to notes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen paper-texture">
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium hand-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to notes
          </Link>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm"
        >
          {/* Tape decoration */}
          <div className="absolute top-8 left-12 w-32 h-4 bg-tape rounded-full opacity-60 -rotate-12" />
          <div className="absolute top-8 right-12 w-32 h-4 bg-tape rounded-full opacity-60 rotate-12" />

          <div className="relative">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 pb-8 border-b border-border"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 hand-writing">
                {note.meta.title}
              </h1>

              {note.meta.date && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={note.meta.date}>
                    {new Date(note.meta.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              )}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="prose prose-sm md:prose-base max-w-none"
            >
              <div className="space-y-4 text-foreground leading-relaxed">
                {note.content.split('\n\n').map((paragraph, index) => {
                  // Check if it's a heading
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-4xl font-bold mt-8 mb-4 hand-writing">
                        {paragraph.replace(/^# /, '')}
                      </h1>
                    )
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold mt-8 mb-4 hand-writing">
                        {paragraph.replace(/^## /, '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold mt-6 mb-3 hand-writing">
                        {paragraph.replace(/^### /, '')}
                      </h3>
                    )
                  }

                  // Check if it's a code block
                  if (paragraph.startsWith('```')) {
                    const codeMatch = paragraph.match(/```(\w+)?\n([\s\S]*?)```/)
                    if (codeMatch) {
                      const [, language, code] = codeMatch
                      return (
                        <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 border border-border">
                          <code className="text-sm font-mono">{code.trim()}</code>
                        </pre>
                      )
                    }
                  }

                  // Check if it's a list
                  if (paragraph.startsWith('- ') || paragraph.match(/^\d+\. /)) {
                    const items = paragraph.split('\n').filter(line => line.trim())
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 mb-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-foreground">
                            {item.replace(/^[-*] |\d+\. /, '')}
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  // Check if it's a blockquote
                  if (paragraph.startsWith('> ')) {
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-accent pl-4 py-2 italic text-muted-foreground mb-4"
                      >
                        {paragraph.replace(/^> /, '')}
                      </blockquote>
                    )
                  }

                  // Regular paragraph with markdown formatting
                  return (
                    <p key={index} className="mb-4">
                      {paragraph
                        .split(/(\*\*.*?\*\*|`.*?`|\*.*?\*)/)
                        .map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={i} className="font-bold">
                                {part.replace(/\*\*/g, '')}
                              </strong>
                            )
                          }
                          if (part.startsWith('`') && part.endsWith('`')) {
                            return (
                              <code
                                key={i}
                                className="bg-muted px-2 py-1 rounded font-mono text-sm border border-border"
                              >
                                {part.replace(/`/g, '')}
                              </code>
                            )
                          }
                          if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                            return (
                              <em key={i} className="italic">
                                {part.replace(/\*/g, '')}
                              </em>
                            )
                          }
                          return part
                        })}
                    </p>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.article>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium hand-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all notes
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
