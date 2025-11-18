import * as fs from 'fs'
import * as path from 'path'

const PUBLIC_DIR = path.join(process.cwd(), 'public')

const REQUIRED_LOGOS = [
  'logo-primary-1.svg',
  'logo-primary-2.svg',
  'lettermark-1.svg',
  'lettermark-2.svg',
]

console.log('🔍 Vérification des assets...\n')

// Vérifier que le dossier public existe
if (!fs.existsSync(PUBLIC_DIR)) {
  console.error('❌ Le dossier /public n\'existe pas!')
  process.exit(1)
}

// Vérifier les logos
console.log('📁 Logos SVG:')
let allLogosPresent = true

for (const logo of REQUIRED_LOGOS) {
  const logoPath = path.join(PUBLIC_DIR, logo)
  const exists = fs.existsSync(logoPath)

  if (exists) {
    const stats = fs.statSync(logoPath)
    const sizeKB = (stats.size / 1024).toFixed(2)
    console.log(`  ✅ ${logo} (${sizeKB} KB)`)
  } else {
    console.log(`  ❌ ${logo} - MANQUANT`)
    allLogosPresent = false
  }
}

console.log('')

// Lister tous les fichiers dans public
const allFiles = fs.readdirSync(PUBLIC_DIR)
const imageFiles = allFiles.filter(f => /\.(svg|png|jpg|jpeg|gif|webp|ico)$/i.test(f))

if (imageFiles.length > REQUIRED_LOGOS.length) {
  console.log('📸 Autres images trouvées:')
  imageFiles.forEach(file => {
    if (!REQUIRED_LOGOS.includes(file)) {
      const filePath = path.join(PUBLIC_DIR, file)
      const stats = fs.statSync(filePath)
      const sizeKB = (stats.size / 1024).toFixed(2)
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2)

      if (stats.size > 2 * 1024 * 1024) {
        console.log(`  ⚠️  ${file} (${sizeMB} MB) - TROP GRAND (> 2MB)`)
      } else if (stats.size > 500 * 1024) {
        console.log(`  ⚡ ${file} (${sizeKB} KB) - Pourrait être compressé`)
      } else {
        console.log(`  ✅ ${file} (${sizeKB} KB)`)
      }
    }
  })
  console.log('')
}

// Résumé
console.log('📊 Résumé:')
console.log(`  Total d'images: ${imageFiles.length}`)
console.log(`  Logos SVG: ${REQUIRED_LOGOS.filter(l => fs.existsSync(path.join(PUBLIC_DIR, l))).length}/${REQUIRED_LOGOS.length}`)

if (!allLogosPresent) {
  console.log('\n❌ Certains logos sont manquants!')
  console.log('   Assurez-vous d\'avoir tous les fichiers SVG dans /public/')
  process.exit(1)
}

console.log('\n✅ Tous les assets requis sont présents!')

// Vérifier la configuration
console.log('\n🔧 Configuration:')

const envPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8')

  if (envContent.includes('NEXT_PUBLIC_LOGO')) {
    const match = envContent.match(/NEXT_PUBLIC_LOGO\s*=\s*(.+)/);
    if (match) {
      console.log(`  Logo configuré: ${match[1].trim()}`)
    }
  } else {
    console.log('  ℹ️  Pas de logo configuré dans .env.local')
    console.log('     Ajoutez NEXT_PUBLIC_LOGO=lettermark-2.svg pour le définir')
  }

  if (envContent.includes('SANITY_API_TOKEN')) {
    console.log('  ✅ Token Sanity configuré')
  } else {
    console.log('  ⚠️  Token Sanity manquant (requis pour l\'import de données)')
  }
} else {
  console.log('  ⚠️  Fichier .env.local non trouvé')
}

console.log('\n✨ Vérification terminée!\n')
