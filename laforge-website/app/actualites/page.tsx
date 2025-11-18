'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

const mockArticles = [
  { id: '1', title: 'Victoire écrasante contre les Titans', excerpt: 'Notre équipe a dominé avec un score de 98-72', category: 'Match', date: '2025-03-15' },
  { id: '2', title: 'Record de saison pour Marcus Johnson', excerpt: '45 points en un seul match, une performance exceptionnelle', category: 'Joueur', date: '2025-03-12' },
  { id: '3', title: 'Camp d\'entraînement intensif', excerpt: 'Weekend d\'entraînement avec nos coachs experts', category: 'Entraînement', date: '2025-03-10' },
  { id: '4', title: 'Début de la saison 2025-2026', excerpt: 'La saison démarre en force avec des objectifs ambitieux', category: 'Équipe', date: '2025-03-08' },
]

export default function ActualitesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[var(--noir-profond)] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--platine)] mb-6">
            Actualités
          </h1>
          <p className="text-xl text-[var(--blanc-platine)]/70 max-w-2xl mx-auto">
            Les dernières nouvelles de La Forge Basketball
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[var(--noir-profond)] border border-[var(--vert-forge)]/30 hover:border-[var(--vert-forge)] transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[var(--platine)]/20 text-6xl font-bold">LF</div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="px-3 py-1 bg-[var(--vert-forge)]/20 text-[var(--platine)] rounded-full border border-[var(--vert-forge)]/30">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-2 text-[var(--blanc-platine)]/60">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString('fr-CA')}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--platine)] group-hover:text-[var(--blanc-platine)] transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-[var(--blanc-platine)]/70">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center space-x-2 text-[var(--vert-forge)] group-hover:text-[var(--vert-foret)] transition-colors duration-300">
                    <span className="text-sm font-semibold">Lire la suite</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--blanc-platine)]/60 italic">
            Les articles seront gérés via l&apos;interface admin Sanity
          </p>
        </motion.div>
      </div>
    </div>
  )
}
