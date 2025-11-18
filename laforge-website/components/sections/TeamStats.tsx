'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaUsers, FaTrophy, FaFire, FaCalendarAlt } from 'react-icons/fa'

const stats = [
  {
    icon: FaUsers,
    value: '19',
    label: 'Joueurs Élite',
    description: 'Athlètes talentueux et dévoués',
  },
  {
    icon: FaTrophy,
    value: '5',
    label: 'Positions',
    description: 'Guards, Forwards, Centers',
  },
  {
    icon: FaFire,
    value: 'PrepU',
    label: 'Niveau',
    description: 'Canada Semi-Professionnel',
  },
  {
    icon: FaCalendarAlt,
    value: '16',
    label: 'Matchs',
    description: 'Saison 2025-2026',
  },
]

export default function TeamStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[var(--noir-profond)] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--platine)] mb-4">
            Notre Équipe en Chiffres
          </h2>
          <p className="text-[var(--blanc-platine)]/70 text-lg max-w-2xl mx-auto">
            Une équipe d&apos;élite composée des meilleurs talents du Québec
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-8 hover:border-[var(--vert-forge)] transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-[var(--platine)]" />
                  </div>
                  <div className="text-5xl font-bold text-[var(--platine)]">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-[var(--blanc-platine)]">
                    {stat.label}
                  </div>
                  <div className="text-[var(--blanc-platine)]/60 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
