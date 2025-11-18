'use client'

import { motion } from 'framer-motion'
import { FaBasketballBall, FaUsers } from 'react-icons/fa'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import type { Player, Staff } from '@/types'

interface TeamPageClientProps {
  players: Player[]
  staff: Staff[]
}

export default function TeamPageClient({ players, staff }: TeamPageClientProps) {
  // Fonction pour obtenir le nom du rôle en français
  const getRoleName = (role: string, customRole?: string) => {
    if (customRole) return customRole

    const roles: Record<string, string> = {
      head_coach: 'Entraîneur-chef',
      assistant_coach: 'Entraîneur adjoint',
      guard_coach: 'Entraîneur des guards',
      physical_trainer: 'Préparateur physique',
      physiotherapist: 'Physiothérapeute',
      video_analyst: 'Analyste vidéo',
      manager: 'Manager',
      general_manager: 'Directeur général',
      other: 'Staff',
    }

    return roles[role] || role
  }

  // Fonction pour obtenir le nom de la position en français
  const getPositionName = (position: string) => {
    const positions: Record<string, string> = {
      guard: 'Guard',
      forward: 'Forward',
      center: 'Center',
    }

    return positions[position] || position
  }

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
            Découvrez les athlètes d&apos;élite et le staff technique qui composent La Forge Basketball
          </p>
        </motion.div>

        {/* Joueurs Section */}
        {players && players.length > 0 && (
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold text-[var(--platine)] mb-8 flex items-center gap-3"
            >
              <FaBasketballBall className="text-[var(--vert-forge)]" />
              Les Joueurs ({players.length})
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {players.map((player, index) => (
                <motion.div
                  key={player._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6 hover:border-[var(--vert-forge)] transition-all duration-300">
                    <div className="aspect-square bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                      {player.image && player.image.asset && urlForImage(player.image) ? (
                        <Image
                          src={urlForImage(player.image)!.width(400).height(400).url()}
                          alt={player.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaBasketballBall className="text-[var(--platine)]/30 text-6xl" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-[var(--platine)]">
                          {player.name}
                        </h3>
                        <span className="text-2xl font-bold text-[var(--platine)]">
                          #{player.jerseyNumber}
                        </span>
                      </div>
                      <p className="text-[var(--blanc-platine)]/70">
                        {getPositionName(player.position)}
                      </p>
                      {(player.height || player.weight) && (
                        <p className="text-[var(--blanc-platine)]/50 text-sm">
                          {player.height && player.height}
                          {player.height && player.weight && ' • '}
                          {player.weight && `${player.weight} lbs`}
                        </p>
                      )}
                      {player.stats && (
                        <div className="pt-2 flex items-center justify-between text-sm">
                          {player.stats.ppg !== undefined && (
                            <span className="text-[var(--vert-forge)]">
                              {player.stats.ppg} PPG
                            </span>
                          )}
                          {player.stats.rpg !== undefined && (
                            <span className="text-[var(--blanc-platine)]/60">
                              {player.stats.rpg} RPG
                            </span>
                          )}
                          {player.stats.apg !== undefined && (
                            <span className="text-[var(--blanc-platine)]/60">
                              {player.stats.apg} APG
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Message si pas de joueurs */}
        {(!players || players.length === 0) && (
          <div className="mb-20 text-center">
            <p className="text-[var(--blanc-platine)]/60 text-lg">
              Aucun joueur pour le moment. Ajoutez des joueurs via le Studio Sanity.
            </p>
          </div>
        )}

        {/* Staff Section */}
        {staff && staff.length > 0 && (
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-[var(--platine)] mb-8 flex items-center gap-3"
            >
              <FaUsers className="text-[var(--vert-forge)]" />
              Le Staff Technique ({staff.length})
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {staff.map((member, index) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6 hover:border-[var(--vert-forge)] transition-all duration-300 h-full">
                    <div className="aspect-square bg-gradient-to-br from-[var(--platine)]/20 to-[var(--blanc-platine)]/10 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                      {member.image && member.image.asset && urlForImage(member.image) ? (
                        <Image
                          src={urlForImage(member.image)!.width(300).height(300).url()}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaUsers className="text-[var(--platine)]/30 text-5xl" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-[var(--platine)]">
                        {member.name}
                      </h3>
                      <p className="text-[var(--blanc-platine)]/70 text-sm">
                        {getRoleName(member.role, member.customRole)}
                      </p>
                      {member.experience && (
                        <p className="text-[var(--blanc-platine)]/50 text-xs">
                          {member.experience} ans d&apos;expérience
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Message si pas de staff */}
        {(!staff || staff.length === 0) && (
          <div className="text-center">
            <p className="text-[var(--blanc-platine)]/60 text-lg">
              Aucun membre du staff pour le moment. Ajoutez du staff via le Studio Sanity.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
