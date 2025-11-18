'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Équipe', href: '/equipe' },
  { name: 'Calendrier', href: '/calendrier' },
  { name: 'Actualités', href: '/actualites' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/laforgebasketball/', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/LaForgeBasketball', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/LaForgeBasket', label: 'Twitter' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@LaForgeBasketball', label: 'YouTube' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--noir-profond)]/95 backdrop-blur-md shadow-lg border-b border-[var(--vert-forge)]/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--vert-forge)] to-[var(--vert-foret)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-[var(--platine)] font-bold text-xl">LF</span>
            </div>
            <div className="hidden md:block">
              <div className="text-[var(--platine)] font-bold text-xl tracking-tight">
                LA FORGE
              </div>
              <div className="text-[var(--platine)]/60 text-xs tracking-wider">
                BASKETBALL
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-[var(--blanc-platine)] hover:text-[var(--platine)] transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--vert-forge)] to-[var(--vert-foret)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--blanc-platine)]/70 hover:text-[var(--platine)] transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--blanc-platine)] hover:bg-[var(--vert-forge)]/20 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--noir-profond)]/98 backdrop-blur-md border-t border-[var(--vert-forge)]/30"
          >
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-[var(--blanc-platine)] hover:bg-[var(--vert-forge)]/20 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-[var(--vert-forge)]/30">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--blanc-platine)]/70 hover:text-[var(--platine)] transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
