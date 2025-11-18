'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaTrophy, FaBolt, FaArrowRight } from 'react-icons/fa'

// Mock data - sera remplacé par des vraies données de Sanity
const mockResults = [
  {
    id: '1',
    opponent: 'Montreal Phoenix',
    ourScore: 98,
    opponentScore: 72,
    date: '2025-03-15',
    location: 'Pavillon Durocher',
    mvp: { name: 'Marcus Johnson', jerseyNumber: 23, points: 28, rebounds: 12, assists: 5 },
    xFactor: { name: 'Alex Dubois', jerseyNumber: 7, points: 18, rebounds: 4, assists: 8 },
  },
  {
    id: '2',
    opponent: 'Quebec Warriors',
    ourScore: 85,
    opponentScore: 90,
    date: '2025-03-12',
    location: 'Centre Bell',
    mvp: { name: 'Jordan Lee', jerseyNumber: 11, points: 24, rebounds: 8, assists: 6 },
    xFactor: { name: 'Samuel Roy', jerseyNumber: 15, points: 15, rebounds: 10, assists: 3 },
  },
]

export default function RecentResults() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[var(--noir-profond)] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--platine)] mb-4">
              Derniers Résultats
            </h2>
            <p className="text-[var(--blanc-platine)]/70 text-lg">
              Les performances récentes de La Forge Basketball
            </p>
          </div>
          <Link
            href="/calendrier"
            className="hidden md:flex items-center space-x-2 text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300 group"
          >
            <span>Voir tous les matchs</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        <div className="space-y-6">
          {mockResults.map((match, index) => {
            const isWin = match.ourScore > match.opponentScore

            return (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6 hover:border-[var(--vert-forge)] transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Score */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center justify-between">
                        <div className="text-center flex-1">
                          <div className="text-[var(--blanc-platine)] text-sm mb-1">La Forge</div>
                          <div className={`text-4xl font-bold ${isWin ? 'text-green-400' : 'text-[var(--platine)]'}`}>
                            {match.ourScore}
                          </div>
                        </div>

                        <div className="px-4">
                          <div className="text-[var(--blanc-platine)]/50 text-xl">-</div>
                        </div>

                        <div className="text-center flex-1">
                          <div className="text-[var(--blanc-platine)] text-sm mb-1">{match.opponent}</div>
                          <div className={`text-4xl font-bold ${!isWin ? 'text-red-400' : 'text-[var(--platine)]'}`}>
                            {match.opponentScore}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isWin
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {isWin ? 'VICTOIRE' : 'DÉFAITE'}
                        </span>
                      </div>

                      <div className="mt-4 text-center text-[var(--blanc-platine)]/60 text-xs">
                        {new Date(match.date).toLocaleDateString('fr-CA')}
                      </div>
                    </div>

                    {/* MVP */}
                    <div className="lg:col-span-4 border-l-0 lg:border-l border-[var(--vert-forge)]/30 lg:pl-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <FaTrophy className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-semibold">MVP</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-lg flex items-center justify-center">
                          <span className="text-[var(--platine)] font-bold">
                            #{match.mvp.jerseyNumber}
                          </span>
                        </div>
                        <div>
                          <div className="text-[var(--platine)] font-bold">{match.mvp.name}</div>
                          <div className="text-[var(--blanc-platine)]/60 text-sm">
                            {match.mvp.points} PTS • {match.mvp.rebounds} REB • {match.mvp.assists} AST
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* X-Factor */}
                    <div className="lg:col-span-4 border-l-0 lg:border-l border-[var(--vert-forge)]/30 lg:pl-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <FaBolt className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 text-sm font-semibold">X-FACTOR</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-lg flex items-center justify-center">
                          <span className="text-[var(--platine)] font-bold">
                            #{match.xFactor.jerseyNumber}
                          </span>
                        </div>
                        <div>
                          <div className="text-[var(--platine)] font-bold">{match.xFactor.name}</div>
                          <div className="text-[var(--blanc-platine)]/60 text-sm">
                            {match.xFactor.points} PTS • {match.xFactor.rebounds} REB • {match.xFactor.assists} AST
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
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
            <span>Voir tous les matchs</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
