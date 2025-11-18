'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { FaTrophy, FaBolt, FaArrowRight } from 'react-icons/fa'
import type { Match } from '@/types'

interface RecentResultsProps {
  matches: Match[]
}

export default function RecentResults({ matches }: RecentResultsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Si pas de matchs, ne rien afficher
  if (!matches || matches.length === 0) {
    return null
  }

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
          {matches.map((match, index) => {
            const isWin = (match.ourScore ?? 0) > (match.opponentScore ?? 0)

            return (
              <motion.div
                key={match._id}
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
                    {match.mvp && 'name' in match.mvp && (
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
                            {match.mvp.stats && (
                              <div className="text-[var(--blanc-platine)]/60 text-sm">
                                {match.mvp.stats.ppg} PTS • {match.mvp.stats.rpg} REB • {match.mvp.stats.apg} AST
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* X-Factor */}
                    {match.xFactor && 'name' in match.xFactor && (
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
                            {match.xFactor.stats && (
                              <div className="text-[var(--blanc-platine)]/60 text-sm">
                                {match.xFactor.stats.ppg} PTS • {match.xFactor.stats.rpg} REB • {match.xFactor.stats.apg} AST
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
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
