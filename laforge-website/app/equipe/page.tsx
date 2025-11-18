'use client'

import { motion } from 'framer-motion'
import { FaBasketballBall, FaUsers } from 'react-icons/fa'

// Mock data pour le staff
const mockStaff = [
  { id: '1', name: 'Ahmed Salia Touré', role: 'Entraîneur-chef', experience: 10 },
  { id: '2', name: 'Jean Tremblay', role: 'Entraîneur adjoint', experience: 7 },
  { id: '3', name: 'Marie Dubois', role: 'Préparateur physique', experience: 5 },
  { id: '4', name: 'Pierre Gagnon', role: 'Analyste vidéo', experience: 3 },
]

export default function EquipePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[var(--noir-profond)] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Découvrez les 19 athlètes d&apos;élite et le staff technique qui composent La Forge Basketball
          </p>
        </motion.div>

        {/* Joueurs Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-[var(--platine)] mb-8 flex items-center gap-3"
          >
            <FaBasketballBall className="text-[var(--vert-forge)]" />
            Les Joueurs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
        </div>

        {/* Staff Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[var(--platine)] mb-8 flex items-center gap-3"
          >
            <FaUsers className="text-[var(--vert-forge)]" />
            Le Staff Technique
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockStaff.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6 hover:border-[var(--vert-forge)] transition-all duration-300 h-full">
                  <div className="aspect-square bg-gradient-to-br from-[var(--platine)]/20 to-[var(--blanc-platine)]/10 rounded-xl mb-4 flex items-center justify-center">
                    <FaUsers className="text-[var(--platine)]/30 text-5xl" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[var(--platine)]">
                      {member.name}
                    </h3>
                    <p className="text-[var(--blanc-platine)]/70 text-sm">{member.role}</p>
                    <p className="text-[var(--blanc-platine)]/50 text-xs">
                      {member.experience} ans d&apos;expérience
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--blanc-platine)]/60 italic">
            Les profils complets des joueurs et du staff seront disponibles via l&apos;interface admin Sanity
          </p>
        </motion.div>
      </div>
    </div>
  )
}
