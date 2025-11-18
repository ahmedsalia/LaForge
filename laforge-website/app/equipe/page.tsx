'use client'

import { motion } from 'framer-motion'
import { FaBasketballBall } from 'react-icons/fa'

export default function EquipePage() {
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
            Notre Équipe
          </h1>
          <p className="text-xl text-[var(--blanc-platine)]/70 max-w-2xl mx-auto">
            Découvrez les 19 athlètes d&apos;élite qui composent La Forge Basketball
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6 hover:border-[var(--vert-forge)] transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-xl mb-4 flex items-center justify-center">
                  <FaBasketballBall className="text-[var(--platine)]/30 text-6xl" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[var(--platine)]">
                      Joueur {index + 1}
                    </h3>
                    <span className="text-2xl font-bold text-[var(--platine)]">
                      #{index + 5}
                    </span>
                  </div>
                  <p className="text-[var(--blanc-platine)]/70">Guard</p>
                  <p className="text-[var(--blanc-platine)]/50 text-sm">6&apos;2&quot; • 185 lbs</p>
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
            Les profils complets des joueurs seront disponibles via l&apos;interface admin Sanity
          </p>
        </motion.div>
      </div>
    </div>
  )
}
