'use client'

import { motion } from 'framer-motion'
import { FaImages } from 'react-icons/fa'

const mockGalleries = [
  { id: '1', title: 'Match contre les Titans', category: 'Match', date: '2025-03-15', count: 24 },
  { id: '2', title: 'Entraînement intensif', category: 'Entraînement', date: '2025-03-12', count: 18 },
  { id: '3', title: 'Portrait d\'équipe 2025', category: 'Équipe', date: '2025-03-10', count: 32 },
  { id: '4', title: 'Finale régionale', category: 'Match', date: '2025-03-08', count: 45 },
  { id: '5', title: 'Camp d\'été 2025', category: 'Événement', date: '2025-03-05', count: 38 },
  { id: '6', title: 'Tournoi provincial', category: 'Match', date: '2025-03-01', count: 52 },
]

export default function GaleriePage() {
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
            Galerie
          </h1>
          <p className="text-xl text-[var(--blanc-platine)]/70 max-w-2xl mx-auto">
            Les meilleurs moments de La Forge Basketball capturés en images
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGalleries.map((gallery, index) => (
            <motion.div
              key={gallery.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[var(--noir-profond)] border border-[var(--vert-forge)]/30 hover:border-[var(--vert-forge)] transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaImages className="text-[var(--platine)]/20 text-6xl" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />

                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[var(--platine)] text-sm font-semibold flex items-center space-x-2">
                    <FaImages className="w-3 h-3" />
                    <span>{gallery.count}</span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[var(--vert-forge)]/20 text-[var(--platine)] rounded-full border border-[var(--vert-forge)]/30 text-xs">
                      {gallery.category}
                    </span>
                    <span className="text-[var(--blanc-platine)]/60 text-xs">
                      {new Date(gallery.date).toLocaleDateString('fr-CA')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--platine)] group-hover:text-[var(--blanc-platine)] transition-colors duration-300">
                    {gallery.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--blanc-platine)]/60 italic">
            Les galeries photos et vidéos seront gérées via l&apos;interface admin Sanity
          </p>
        </motion.div>
      </div>
    </div>
  )
}
