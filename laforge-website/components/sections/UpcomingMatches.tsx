'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa'

// Mock data - sera remplacé par des vraies données de Sanity
const mockMatches = [
  {
    id: '1',
    opponent: 'Montreal Phoenix',
    date: '2025-03-22T19:00:00',
    location: 'Pavillon Durocher',
    isHome: true,
    status: 'upcoming',
  },
  {
    id: '2',
    opponent: 'Quebec Warriors',
    date: '2025-03-25T20:00:00',
    location: 'Centre Bell',
    isHome: false,
    status: 'upcoming',
  },
  {
    id: '3',
    opponent: 'Laval Gladiators',
    date: '2025-03-28T18:30:00',
    location: 'Pavillon Saint-Lambert',
    isHome: true,
    status: 'upcoming',
  },
]

export default function UpcomingMatches() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-CA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('fr-CA', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black to-[var(--noir-profond)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--platine)] mb-4">
              Prochains Matchs
            </h2>
            <p className="text-[var(--blanc-platine)]/70 text-lg">
              Venez supporter La Forge Basketball
            </p>
          </div>
          <Link
            href="/calendrier"
            className="hidden md:flex items-center space-x-2 text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300 group"
          >
            <span>Calendrier complet</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        <div className="space-y-6">
          {mockMatches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6 hover:border-[var(--vert-forge)] transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Date */}
                  <div className="md:col-span-3 space-y-2">
                    <div className="flex items-center space-x-2 text-[var(--platine)]">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {formatDate(match.date)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-[var(--blanc-platine)]/70">
                      <FaClock className="w-4 h-4" />
                      <span className="text-sm">{formatTime(match.date)}</span>
                    </div>
                  </div>

                  {/* Match Info */}
                  <div className="md:col-span-6 flex items-center justify-center space-x-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-xl flex items-center justify-center">
                        <span className="text-[var(--platine)] font-bold text-xl">LF</span>
                      </div>
                      <span className="text-[var(--blanc-platine)] font-semibold text-sm">
                        La Forge
                      </span>
                    </div>

                    <div className="flex flex-col items-center space-y-1">
                      <span className="text-3xl font-bold text-[var(--platine)]">VS</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        match.isHome
                          ? 'bg-[var(--vert-forge)]/20 text-[var(--platine)] border border-[var(--vert-forge)]/30'
                          : 'bg-[var(--blanc-platine)]/10 text-[var(--blanc-platine)]/70 border border-[var(--blanc-platine)]/20'
                      }`}>
                        {match.isHome ? 'Domicile' : 'Extérieur'}
                      </span>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-[var(--blanc-platine)]/10 rounded-xl flex items-center justify-center border border-[var(--blanc-platine)]/20">
                        <span className="text-[var(--blanc-platine)]/70 font-bold text-sm text-center px-2">
                          {match.opponent.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <span className="text-[var(--blanc-platine)]/70 font-semibold text-sm text-center">
                        {match.opponent}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="md:col-span-3 flex items-center justify-end space-x-2 text-[var(--blanc-platine)]/70">
                    <FaMapMarkerAlt className="w-4 h-4 text-[var(--vert-forge)]" />
                    <span className="text-sm">{match.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
            href="/calendrier"
            className="inline-flex items-center space-x-2 text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300 group"
          >
            <span>Voir le calendrier complet</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
