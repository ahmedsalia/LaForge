'use client'

import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import Logo from './Logo'

const navigation = {
  navigation: [
    { name: 'Accueil', href: '/' },
    { name: 'Équipe', href: '/equipe' },
    { name: 'Calendrier', href: '/calendrier' },
  ],
  ressources: [
    { name: 'Actualités', href: '/actualites' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Histoire', href: '/histoire' },
    { name: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/laforgebasketball/', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/LaForgeBasketball', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/LaForgeBasket', label: 'Twitter' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@LaForgeBasketball', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--noir-profond)] to-black border-t border-[var(--vert-forge)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo variant="primary" version="2" width={60} height={60} />
            </div>
            <p className="text-[var(--blanc-platine)]/60 text-sm">
              Excellence • Passion • Performance
            </p>
            <p className="text-[var(--blanc-platine)]/60 text-sm">
              Équipe PrepU Canada basée à Montréal
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[var(--platine)] font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--blanc-platine)]/60 hover:text-[var(--platine)] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-[var(--platine)] font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              {navigation.ressources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--blanc-platine)]/60 hover:text-[var(--platine)] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[var(--platine)] font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-[var(--blanc-platine)]/60 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--vert-forge)]" />
                <span>Montréal, Québec</span>
              </li>
              <li className="flex items-start space-x-3 text-[var(--blanc-platine)]/60 text-sm">
                <FaEnvelope className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--vert-forge)]" />
                <a href="mailto:laforgebasketball@gmail.com" className="hover:text-[var(--platine)] transition-colors duration-200">
                  laforgebasketball@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-[var(--blanc-platine)]/60 text-sm">
                <FaPhone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--vert-forge)]" />
                <a href="tel:+15149992550" className="hover:text-[var(--platine)] transition-colors duration-200">
                  (514) 999-2550
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--vert-forge)]/20 flex items-center justify-center text-[var(--blanc-platine)]/70 hover:bg-[var(--vert-forge)] hover:text-[var(--platine)] transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--vert-forge)]/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--blanc-platine)]/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} La Forge Basketball. Tous droits réservés.
            </p>
            <p className="text-[var(--blanc-platine)]/40 text-sm">
              PrepU Canada • Montréal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
