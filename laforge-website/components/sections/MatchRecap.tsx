'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaBolt, FaChartBar } from 'react-icons/fa'
import Image from 'next/image'

interface MatchRecapProps {
  match: {
    opponent: string
    ourScore: number
    opponentScore: number
    date: string
    location: string
    isHome: boolean
    mvp?: {
      name: string
      image?: any
      jerseyNumber: number
      stats?: {
        points: number
        rebounds: number
        assists: number
      }
    }
    xFactor?: {
      name: string
      image?: any
      jerseyNumber: number
      stats?: {
        points: number
        rebounds: number
        assists: number
      }
    }
    teamStats?: {
      fgPercentage?: number
      threePointPercentage?: number
      ftPercentage?: number
      totalRebounds?: number
      assists?: number
      steals?: number
      blocks?: number
    }
    recap?: string
  }
}

export default function MatchRecap({ match }: MatchRecapProps) {
  const isWin = match.ourScore > match.opponentScore

  return (
    <div className="space-y-8">
      {/* Score principal */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--noir-profond)] to-black border border-[var(--vert-forge)]/30 p-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <div className="text-[var(--blanc-platine)] text-lg mb-2">La Forge</div>
            <div className={`text-6xl font-bold ${isWin ? 'text-green-400' : 'text-[var(--platine)]'}`}>
              {match.ourScore}
            </div>
            {isWin && <div className="text-green-400 text-sm mt-2">VICTOIRE</div>}
          </div>

          <div className="px-8">
            <div className="text-[var(--blanc-platine)]/50 text-2xl">VS</div>
          </div>

          <div className="flex-1 text-center">
            <div className="text-[var(--blanc-platine)] text-lg mb-2">{match.opponent}</div>
            <div className={`text-6xl font-bold ${!isWin ? 'text-red-400' : 'text-[var(--platine)]'}`}>
              {match.opponentScore}
            </div>
            {!isWin && <div className="text-red-400 text-sm mt-2">DÉFAITE</div>}
          </div>
        </div>

        <div className="mt-6 text-center text-[var(--blanc-platine)]/60 text-sm">
          {new Date(match.date).toLocaleDateString('fr-CA', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })} • {match.location}
        </div>
      </div>

      {/* MVP et X-Factor */}
      {(match.mvp || match.xFactor) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MVP */}
          {match.mvp && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border-2 border-yellow-500/50 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FaTrophy className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-yellow-400">MVP du Match</h3>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-xl flex items-center justify-center">
                    <span className="text-[var(--platine)] text-2xl font-bold">
                      #{match.mvp.jerseyNumber}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-[var(--platine)]">
                      {match.mvp.name}
                    </div>
                    {match.mvp.stats && (
                      <div className="flex space-x-4 mt-2 text-[var(--blanc-platine)]/70">
                        <span>{match.mvp.stats.points} PTS</span>
                        <span>{match.mvp.stats.rebounds} REB</span>
                        <span>{match.mvp.stats.assists} AST</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* X-Factor */}
          {match.xFactor && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FaBolt className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-400">X-Factor</h3>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-xl flex items-center justify-center">
                    <span className="text-[var(--platine)] text-2xl font-bold">
                      #{match.xFactor.jerseyNumber}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-[var(--platine)]">
                      {match.xFactor.name}
                    </div>
                    {match.xFactor.stats && (
                      <div className="flex space-x-4 mt-2 text-[var(--blanc-platine)]/70">
                        <span>{match.xFactor.stats.points} PTS</span>
                        <span>{match.xFactor.stats.rebounds} REB</span>
                        <span>{match.xFactor.stats.assists} AST</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Statistiques de l'équipe */}
      {match.teamStats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
          <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <FaChartBar className="w-6 h-6 text-[var(--vert-forge)]" />
              <h3 className="text-xl font-bold text-[var(--platine)]">Statistiques de l&apos;équipe</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {match.teamStats.fgPercentage !== undefined && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--platine)]">
                    {match.teamStats.fgPercentage}%
                  </div>
                  <div className="text-[var(--blanc-platine)]/60 text-sm">Tirs réussis</div>
                </div>
              )}
              {match.teamStats.threePointPercentage !== undefined && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--platine)]">
                    {match.teamStats.threePointPercentage}%
                  </div>
                  <div className="text-[var(--blanc-platine)]/60 text-sm">3 Points</div>
                </div>
              )}
              {match.teamStats.totalRebounds !== undefined && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--platine)]">
                    {match.teamStats.totalRebounds}
                  </div>
                  <div className="text-[var(--blanc-platine)]/60 text-sm">Rebonds</div>
                </div>
              )}
              {match.teamStats.assists !== undefined && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--platine)]">
                    {match.teamStats.assists}
                  </div>
                  <div className="text-[var(--blanc-platine)]/60 text-sm">Passes</div>
                </div>
              )}
              {match.teamStats.steals !== undefined && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--platine)]">
                    {match.teamStats.steals}
                  </div>
                  <div className="text-[var(--blanc-platine)]/60 text-sm">Interceptions</div>
                </div>
              )}
              {match.teamStats.blocks !== undefined && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--platine)]">
                    {match.teamStats.blocks}
                  </div>
                  <div className="text-[var(--blanc-platine)]/60 text-sm">Contres</div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Résumé */}
      {match.recap && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-[var(--platine)] mb-4">Résumé du match</h3>
          <p className="text-[var(--blanc-platine)]/70 leading-relaxed">{match.recap}</p>
        </motion.div>
      )}
    </div>
  )
}
