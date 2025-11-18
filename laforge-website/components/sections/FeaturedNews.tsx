'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa'

// Mock data - sera remplacé par des vraies données de Sanity
const mockNews = [
  {
    id: '1',
    title: 'Victoire écrasante contre les Titans',
    excerpt: 'Notre équipe a dominé les Titans avec un score impressionnant de 98-72. Une performance exceptionnelle de nos joueurs.',
    category: 'Match',
    publishedAt: '2025-03-15',
    image: '/api/placeholder/600/400',
  },
  {
    id: '2',
    title: 'Nouveau record de saison pour Marcus Johnson',
    excerpt: 'Marcus Johnson établit un nouveau record avec 45 points en un seul match. Une performance qui restera dans les annales.',
    category: 'Joueur',
    publishedAt: '2025-03-12',
    image: '/api/placeholder/600/400',
  },
  {
    id: '3',
    title: 'Camp d\'entraînement intensif ce weekend',
    excerpt: 'Préparez-vous pour un weekend d\'entraînement intensif avec nos coachs experts. Tous les joueurs doivent être présents.',
    category: 'Entraînement',
    publishedAt: '2025-03-10',
    image: '/api/placeholder/600/400',
  },
]

export default function FeaturedNews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--platine)] mb-4">
              Actualités
            </h2>
            <p className="text-[var(--blanc-platine)]/70 text-lg">
              Les dernières nouvelles de La Forge Basketball
            </p>
          </div>
          <Link
            href="/actualites"
            className="hidden md:flex items-center space-x-2 text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300 group"
          >
            <span>Voir tout</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/actualites/${article.id}`}>
                <div className="relative overflow-hidden rounded-2xl bg-[var(--noir-profond)] border border-[var(--vert-forge)]/30 hover:border-[var(--vert-forge)] transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-[var(--platine)]/20 text-6xl font-bold">LF</div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-[var(--vert-forge)]/20 text-[var(--platine)] rounded-full border border-[var(--vert-forge)]/30">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-2 text-[var(--blanc-platine)]/60">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{new Date(article.publishedAt).toLocaleDateString('fr-CA')}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--platine)] group-hover:text-[var(--blanc-platine)] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-[var(--blanc-platine)]/70 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center space-x-2 text-[var(--vert-forge)] group-hover:text-[var(--vert-foret)] transition-colors duration-300">
                      <span className="text-sm font-semibold">Lire la suite</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:hidden mt-8 text-center"
        >
          <Link
            href="/actualites"
            className="inline-flex items-center space-x-2 text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300 group"
          >
            <span>Voir toutes les actualités</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
