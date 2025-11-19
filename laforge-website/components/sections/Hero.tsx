'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import Logo from '../common/Logo'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--noir-profond)] via-[var(--vert-forge)] to-[var(--noir-profond)]">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[var(--platine)] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl flex items-center justify-center shadow-2xl">
               <Logo variant="primary" version="2" width={500} height={500} />
            </div>
          </motion.div>

          {/* Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-black text-[var(--platine)] tracking-tight"
            >
              LA FORGE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl text-[var(--blanc-platine)] font-light tracking-wider"
            >
              BASKETBALL
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-4 text-[var(--platine)] text-lg md:text-xl font-medium"
          >
            <span>Excellence</span>
            <span className="w-2 h-2 bg-[var(--platine)] rounded-full"></span>
            <span>Passion</span>
            <span className="w-2 h-2 bg-[var(--platine)] rounded-full"></span>
            <span>Performance</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[var(--blanc-platine)]/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Équipe PrepU Canada basée à Montréal
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8"
          >
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[var(--platine)]">19</div>
              <div className="text-[var(--blanc-platine)]/70 text-sm md:text-base">Joueurs Élite</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[var(--platine)]">PrepU</div>
              <div className="text-[var(--blanc-platine)]/70 text-sm md:text-base">Niveau</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[var(--platine)]">2025</div>
              <div className="text-[var(--blanc-platine)]/70 text-sm md:text-base">Saison</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link
              href="/equipe"
              className="group px-8 py-4 bg-gradient-to-r from-[var(--vert-forge)] to-[var(--vert-foret)] text-[var(--platine)] rounded-full font-semibold flex items-center space-x-2 hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <span>Découvrir l&apos;équipe</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/calendrier"
              className="px-8 py-4 bg-transparent border-2 border-[var(--platine)] text-[var(--platine)] rounded-full font-semibold hover:bg-[var(--platine)] hover:text-[var(--vert-forge)] transition-all duration-300"
            >
              Voir le calendrier
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--platine)] rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[var(--platine)] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
