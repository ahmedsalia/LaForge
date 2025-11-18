'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'

export default function ContactPage() {
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
            Contact
          </h1>
          <p className="text-xl text-[var(--blanc-platine)]/70 max-w-2xl mx-auto">
            Une question ? N&apos;hésitez pas à nous contacter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-[var(--platine)]">Coordonnées</h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--vert-forge)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="w-5 h-5 text-[var(--platine)]" />
                    </div>
                    <div>
                      <div className="text-[var(--blanc-platine)]/60 text-sm mb-1">Email</div>
                      <a href="mailto:laforgebasketball@gmail.com" className="text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300">
                        laforgebasketball@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--vert-forge)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="w-5 h-5 text-[var(--platine)]" />
                    </div>
                    <div>
                      <div className="text-[var(--blanc-platine)]/60 text-sm mb-1">Téléphone</div>
                      <a href="tel:+15149992550" className="text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300">
                        (514) 999-2550
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--vert-forge)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="w-5 h-5 text-[var(--platine)]" />
                    </div>
                    <div>
                      <div className="text-[var(--blanc-platine)]/60 text-sm mb-1">Localisation</div>
                      <p className="text-[var(--platine)]">Montréal, Québec</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--vert-forge)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaInstagram className="w-5 h-5 text-[var(--platine)]" />
                    </div>
                    <div>
                      <div className="text-[var(--blanc-platine)]/60 text-sm mb-1">Instagram</div>
                      <a href="https://www.instagram.com/laforgebasketball/" target="_blank" rel="noopener noreferrer" className="text-[var(--platine)] hover:text-[var(--blanc-platine)] transition-colors duration-300">
                        @laforgebasketball
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Locations */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-[var(--platine)]">Lieux d&apos;Entraînement</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-[var(--platine)] font-semibold mb-2">Pavillon Durocher</h3>
                    <p className="text-[var(--blanc-platine)]/60 text-sm">857 Rue Riverside, Saint-Lambert</p>
                  </div>
                  <div>
                    <h3 className="text-[var(--platine)] font-semibold mb-2">Pavillon Saint-Lambert</h3>
                    <p className="text-[var(--blanc-platine)]/60 text-sm">375 Rue Riverside, Saint-Lambert</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative bg-[var(--noir-profond)]/80 backdrop-blur-sm border border-[var(--vert-forge)]/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[var(--platine)] mb-6">Envoyez-nous un message</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[var(--blanc-platine)] mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[var(--noir-profond)]/50 border border-[var(--vert-forge)]/30 rounded-xl text-[var(--blanc-platine)] focus:border-[var(--vert-forge)] focus:outline-none transition-colors duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[var(--blanc-platine)] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[var(--noir-profond)]/50 border border-[var(--vert-forge)]/30 rounded-xl text-[var(--blanc-platine)] focus:border-[var(--vert-forge)] focus:outline-none transition-colors duration-300"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[var(--blanc-platine)] mb-2">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-[var(--noir-profond)]/50 border border-[var(--vert-forge)]/30 rounded-xl text-[var(--blanc-platine)] focus:border-[var(--vert-forge)] focus:outline-none transition-colors duration-300"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[var(--blanc-platine)] mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--noir-profond)]/50 border border-[var(--vert-forge)]/30 rounded-xl text-[var(--blanc-platine)] focus:border-[var(--vert-forge)] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Votre message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[var(--vert-forge)] to-[var(--vert-foret)] text-[var(--platine)] rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Envoyer le message
                </button>
              </form>

              <p className="text-[var(--blanc-platine)]/60 text-sm text-center mt-6 italic">
                Le formulaire sera connecté à un service d&apos;email lors de la configuration finale
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
