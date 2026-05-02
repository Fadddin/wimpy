"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Note } from "@/lib/notes"
import { ArrowRight } from "lucide-react"

export default function NotesPage() {
    const [notes, setNotes] = useState<Note[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchNotes() {
            try {
                const response = await fetch('/api/notes')
                const data = await response.json()
                setNotes(data)
            } catch (error) {
                console.error('Failed to fetch notes:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchNotes()
    }, [])

    if (isLoading) {
        return (
            <div className="min-h-screen paper-texture flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-pulse">
                        <div className="w-12 h-12 bg-muted rounded-full" />
                    </div>
                    <p className="mt-4 text-muted-foreground">Loading notes...</p>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen paper-texture">
            <div className="max-w-6xl mx-auto px-4 py-12 pt-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 hand-writing">
                        My Notes
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A collection of thoughts
                    </p>
                </motion.div>

                {/* Notes Grid */}
                {notes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note, index) => (
                            <motion.div
                                key={note.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link href={`/notes/${note.slug}`}>
                                    <div className="group h-full bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-rotate-1 cursor-pointer transform">
                                        {/* Tape effect at top */}
                                        <div className="absolute top-0 left-1/4 w-24 h-3 bg-tape rounded-full opacity-60 -rotate-12 group-hover:opacity-80 transition-opacity" />

                                        <div className="relative">
                                            {/* Date Badge */}
                                            {note.meta.date && (
                                                <div className="inline-block mb-3 text-sm text-muted-foreground">
                                                    {new Date(note.meta.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric',
                                                    })}
                                                </div>
                                            )}

                                            {/* Title */}
                                            <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors hand-writing">
                                                {note.meta.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-muted-foreground mb-4 line-clamp-3">
                                                {note.meta.description}
                                            </p>

                                            {/* Read More Link */}
                                            <div className="flex items-center gap-2 text-accent font-medium group-hover:translate-x-1 transition-transform">
                                                <span>Read more</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Doodle corner */}
                                        <div className="absolute bottom-2 right-2 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                                            ✎
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-xl text-muted-foreground">No notes yet. Check back soon!</p>
                    </motion.div>
                )}
            </div>
        </main>
    )
}
