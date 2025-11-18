'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const mockEvents = [
  { type: 'match', title: 'La Forge vs Montreal Phoenix', date: '2025-03-22', time: '19:00', location: 'Pavillon Durocher' },
  { type: 'training', title: 'Entraînement - Conditionnement', date: '2025-03-23', time: '18:00', location: 'Pavillon Saint-Lambert' },
  { type: 'match', title: 'La Forge vs Quebec Warriors', date: '2025-03-25', time: '20:00', location: 'Centre Bell' },
  { type: 'training', title: 'Entraînement - Tactique', date: '2025-03-26', time: '18:30', location: 'Pavillon Durocher' },
]

export default function CalendrierPage() {
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
            Calendrier
          </h1>
          <p className="text-xl text-[var(--blanc-platine)]/70 max-w-2xl mx-auto">
            Saison 2025-2026 • 65 entraînements • 16 matchs officiels
          </p>
        </motion.div>

        <div className="space-y-6">
          {mockEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6 hover:border-[var(--vert-forge)] transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-3 space-y-2">
                    <div className="flex items-center space-x-2 text-[var(--platine)]">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span className="text-sm font-medium">{new Date(event.date).toLocaleDateString('fr-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[var(--blanc-platine)]/70">
                      <FaClock className="w-4 h-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'match'
                          ? 'bg-[var(--vert-forge)]/20 text-[var(--platine)] border border-[var(--vert-forge)]/30'
                          : 'bg-[var(--blanc-platine)]/10 text-[var(--blanc-platine)]/70 border border-[var(--blanc-platine)]/20'
                      }`}>
                        {event.type === 'match' ? 'Match' : 'Entraînement'}
                      </span>
                      <h3 className="text-lg font-bold text-[var(--blanc-platine)]">{event.title}</h3>
                    </div>
                  </div>
                  <div className="md:col-span-3 flex items-center justify-end space-x-2 text-[var(--blanc-platine)]/70">
                    <FaMapMarkerAlt className="w-4 h-4 text-[var(--vert-forge)]" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--blanc-platine)]/60 italic">
            Le calendrier complet sera géré via l&apos;interface admin Sanity
          </p>
        </motion.div>
      </div>
    </div>
  )
}
