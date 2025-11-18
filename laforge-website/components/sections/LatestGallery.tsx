'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaArrowRight, FaImages } from 'react-icons/fa'

// Mock data - sera remplacé par des vraies données de Sanity
const mockGalleryItems = [
  {
    id: '1',
    title: 'Match contre les Titans',
    date: '2025-03-15',
    category: 'Match',
    imageCount: 24,
  },
  {
    id: '2',
    title: 'Entraînement intensif',
    date: '2025-03-12',
    category: 'Entraînement',
    imageCount: 18,
  },
  {
    id: '3',
    title: 'Portrait d\'équipe 2025',
    date: '2025-03-10',
    category: 'Équipe',
    imageCount: 32,
  },
  {
    id: '4',
    title: 'Finale régionale',
    date: '2025-03-08',
    category: 'Match',
    imageCount: 45,
  },
]

export default function LatestGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-[var(--noir-profond)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--platine)] mb-4">
              Galerie Photo
            </h2>
            <p className="text-[var(--blanc-platine)]/70 text-lg">
              Les meilleurs moments capturés en images
            </p>
          </div>
          <Link
            href="/galerie"
            className="hidden md:flex items-center space-x-2 text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300 group"
          >
            <span>Voir toutes les photos</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockGalleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/galerie/${item.id}`}>
                <div className="relative overflow-hidden rounded-2xl bg-[var(--noir-profond)] border border-[var(--vert-forge)]/30 hover:border-[var(--vert-forge)] transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaImages className="text-[var(--platine)]/20 text-6xl" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />

                    {/* Image Count Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[var(--platine)] text-sm font-semibold flex items-center space-x-2">
                      <FaImages className="w-3 h-3" />
                      <span>{item.imageCount}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-[var(--vert-forge)]/20 text-[var(--platine)] rounded-full border border-[var(--vert-forge)]/30 text-xs">
                        {item.category}
                      </span>
                      <span className="text-[var(--blanc-platine)]/60 text-xs">
                        {new Date(item.date).toLocaleDateString('fr-CA')}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--platine)] group-hover:text-[var(--blanc-platine)] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:hidden mt-8 text-center"
        >
          <Link
            href="/galerie"
            className="inline-flex items-center space-x-2 text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300 group"
          >
            <span>Voir toute la galerie</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
