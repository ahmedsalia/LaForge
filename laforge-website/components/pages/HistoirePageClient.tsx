'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaTrophy, FaFire } from 'react-icons/fa'
import type { History } from '@/types'

interface HistoirePageClientProps {
  timeline: History[]
}

const categoryIcons = {
  foundation: FaFire,
  milestone: FaCalendarAlt,
  victory: FaTrophy,
  expansion: FaFire,
  other: FaCalendarAlt,
}

const categoryColors = {
  foundation: 'from-[var(--vert-forge)] to-[var(--vert-foret)]',
  milestone: 'from-[var(--platine)] to-[var(--blanc-platine)]',
  victory: 'from-yellow-600 to-yellow-400',
  expansion: 'from-blue-600 to-blue-400',
  other: 'from-gray-600 to-gray-400',
}

export default function HistoirePageClient({ timeline }: HistoirePageClientProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[var(--noir-profond)] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--platine)] mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-[var(--blanc-platine)]/70 max-w-3xl mx-auto">
            Depuis notre fondation, La Forge Basketball n&apos;a cessé de grandir et d&apos;évoluer.
            Découvrez les moments clés qui ont façonné notre équipe.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-8 h-full">
              <h2 className="text-3xl font-bold text-[var(--platine)] mb-4">Notre Vision</h2>
              <p className="text-[var(--blanc-platine)]/70 leading-relaxed">
                Devenir l&apos;équipe de référence au Québec pour le développement des jeunes
                talents de basketball, en combinant excellence sportive et réussite académique.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-8 h-full">
              <h2 className="text-3xl font-bold text-[var(--platine)] mb-4">Notre Mission</h2>
              <p className="text-[var(--blanc-platine)]/70 leading-relaxed">
                Former des athlètes complets, développer leur potentiel sportif et académique,
                et les préparer pour les plus hauts niveaux de compétition.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        {timeline && timeline.length > 0 ? (
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--vert-forge)] via-[var(--vert-foret)] to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = categoryIcons[item.category as keyof typeof categoryIcons] || FaCalendarAlt
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col gap-8`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                        <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-6 hover:border-[var(--vert-forge)] transition-all duration-300">
                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                            {item.year && (
                              <span className="text-3xl font-bold text-[var(--platine)]">
                                {item.year}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-[var(--platine)] mb-2">
                            {item.title}
                          </h3>
                          <p className="text-[var(--blanc-platine)]/70">
                            {item.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${categoryColors[item.category as keyof typeof categoryColors] || categoryColors.other} flex items-center justify-center shadow-lg z-10`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[var(--blanc-platine)]/60 text-lg">
              Aucun événement historique pour le moment. Ajoutez des événements via le Studio Sanity.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="relative group inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-[var(--platine)] mb-4">
                Faites Partie de Notre Histoire
              </h2>
              <p className="text-[var(--blanc-platine)]/70 mb-6 max-w-2xl">
                Rejoignez La Forge Basketball et contribuez à écrire les prochains chapitres
                de notre succès. Ensemble, nous continuerons à repousser les limites.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--vert-forge)] to-[var(--vert-foret)] text-[var(--platine)] rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
