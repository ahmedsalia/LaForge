import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'

// Configuration du client Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-18',
  token: process.env.SANITY_API_TOKEN, // Token avec permissions d'écriture
  useCdn: false,
})

// Types pour les données à importer
interface ImportData {
  players?: any[]
  staff?: any[]
  matches?: any[]
  articles?: any[]
  galleries?: any[]
  history?: any[]
}

// Fonction pour générer un slug unique
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Fonction pour importer les joueurs
async function importPlayers(players: any[]) {
  console.log(`\n🏀 Import de ${players.length} joueurs...`)
  let success = 0
  let errors = 0

  for (const player of players) {
    try {
      const slug = player.slug || generateSlug(player.name)

      const doc = {
        _type: 'player',
        name: player.name,
        slug: { _type: 'slug', current: slug },
        jerseyNumber: player.jerseyNumber,
        position: player.position,
        height: player.height,
        weight: player.weight,
        birthDate: player.birthDate,
        age: player.age,
        nationality: player.nationality || 'Canada',
        canadianResident: player.canadianResident !== false,
        schoolLevel: player.schoolLevel,
        gpa: player.gpa,
        email: player.email,
        phone: player.phone,
        instagram: player.instagram,
        highlightVideo: player.highlightVideo,
        bio: player.bio,
        stats: player.stats,
        isActive: player.isActive !== false,
      }

      await client.create(doc)
      console.log(`  ✅ ${player.name} (#${player.jerseyNumber})`)
      success++
    } catch (error: any) {
      console.error(`  ❌ Erreur pour ${player.name}: ${error.message}`)
      errors++
    }
  }

  console.log(`\n📊 Joueurs: ${success} réussis, ${errors} erreurs`)
  return { success, errors }
}

// Fonction pour importer le staff
async function importStaff(staff: any[]) {
  console.log(`\n👥 Import de ${staff.length} membres du staff...`)
  let success = 0
  let errors = 0

  for (const member of staff) {
    try {
      const slug = member.slug || generateSlug(member.name)

      const doc = {
        _type: 'staff',
        name: member.name,
        slug: { _type: 'slug', current: slug },
        role: member.role,
        customRole: member.customRole,
        bio: member.bio,
        experience: member.experience,
        specialties: member.specialties,
        email: member.email,
        phone: member.phone,
        linkedin: member.linkedin,
        achievements: member.achievements,
      }

      await client.create(doc)
      console.log(`  ✅ ${member.name} (${member.role})`)
      success++
    } catch (error: any) {
      console.error(`  ❌ Erreur pour ${member.name}: ${error.message}`)
      errors++
    }
  }

  console.log(`\n📊 Staff: ${success} réussis, ${errors} erreurs`)
  return { success, errors }
}

// Fonction pour importer les matchs
async function importMatches(matches: any[]) {
  console.log(`\n🏆 Import de ${matches.length} matchs...`)
  let success = 0
  let errors = 0

  for (const match of matches) {
    try {
      const slug = match.slug || generateSlug(`${match.opponent}-${match.date}`)

      const doc = {
        _type: 'match',
        opponent: match.opponent,
        slug: { _type: 'slug', current: slug },
        date: match.date,
        location: match.location,
        isHome: match.isHome !== false,
        status: match.status || 'upcoming',
        isPlayoff: match.isPlayoff === true,
        ourScore: match.ourScore,
        opponentScore: match.opponentScore,
        period: match.period,
        highlights: match.highlights,
        recap: match.recap,
        teamStats: match.teamStats,
        autoGenerateArticle: match.autoGenerateArticle === true,
      }

      // Si MVP ou X-Factor sont fournis par référence de joueur
      if (match.mvpRef) {
        const mvpPlayer = await client.fetch(
          `*[_type == "player" && jerseyNumber == $jerseyNumber][0]`,
          { jerseyNumber: match.mvpRef }
        )
        if (mvpPlayer) {
          Object.assign(doc, {
            mvp: { _type: 'reference', _ref: mvpPlayer._id }
          })
        }
      }

      if (match.xFactorRef) {
        const xFactorPlayer = await client.fetch(
          `*[_type == "player" && jerseyNumber == $jerseyNumber][0]`,
          { jerseyNumber: match.xFactorRef }
        )
        if (xFactorPlayer) {
          Object.assign(doc, {
            xFactor: { _type: 'reference', _ref: xFactorPlayer._id }
          })
        }
      }

      await client.create(doc)
      console.log(`  ✅ ${match.opponent} (${match.date})`)
      success++
    } catch (error: any) {
      console.error(`  ❌ Erreur pour ${match.opponent}: ${error.message}`)
      errors++
    }
  }

  console.log(`\n📊 Matchs: ${success} réussis, ${errors} erreurs`)
  return { success, errors }
}

// Fonction pour importer les articles
async function importArticles(articles: any[]) {
  console.log(`\n📰 Import de ${articles.length} articles...`)
  let success = 0
  let errors = 0

  for (const article of articles) {
    try {
      const slug = article.slug || generateSlug(article.title)

      const doc = {
        _type: 'article',
        title: article.title,
        slug: { _type: 'slug', current: slug },
        excerpt: article.excerpt,
        category: article.category,
        publishedAt: article.publishedAt || new Date().toISOString(),
        content: article.content,
        author: article.author || 'La Forge Basketball',
        featured: article.featured === true,
      }

      await client.create(doc)
      console.log(`  ✅ ${article.title}`)
      success++
    } catch (error: any) {
      console.error(`  ❌ Erreur pour ${article.title}: ${error.message}`)
      errors++
    }
  }

  console.log(`\n📊 Articles: ${success} réussis, ${errors} erreurs`)
  return { success, errors }
}

// Fonction pour importer les galeries
async function importGalleries(galleries: any[]) {
  console.log(`\n📸 Import de ${galleries.length} galeries...`)
  let success = 0
  let errors = 0

  for (const gallery of galleries) {
    try {
      const slug = gallery.slug || generateSlug(gallery.title)

      const doc = {
        _type: 'gallery',
        title: gallery.title,
        slug: { _type: 'slug', current: slug },
        description: gallery.description,
        date: gallery.date || new Date().toISOString(),
        category: gallery.category,
      }

      await client.create(doc)
      console.log(`  ✅ ${gallery.title}`)
      success++
    } catch (error: any) {
      console.error(`  ❌ Erreur pour ${gallery.title}: ${error.message}`)
      errors++
    }
  }

  console.log(`\n📊 Galeries: ${success} réussis, ${errors} erreurs`)
  return { success, errors }
}

// Fonction pour importer l'histoire
async function importHistory(history: any[]) {
  console.log(`\n📜 Import de ${history.length} événements historiques...`)
  let success = 0
  let errors = 0

  for (const event of history) {
    try {
      const slug = event.slug || generateSlug(event.title)

      const doc = {
        _type: 'history',
        title: event.title,
        slug: { _type: 'slug', current: slug },
        year: event.year,
        excerpt: event.excerpt,
        content: event.content,
        category: event.category || 'milestone',
        order: event.order,
        featured: event.featured === true,
      }

      await client.create(doc)
      console.log(`  ✅ ${event.year} - ${event.title}`)
      success++
    } catch (error: any) {
      console.error(`  ❌ Erreur pour ${event.title}: ${error.message}`)
      errors++
    }
  }

  console.log(`\n📊 Histoire: ${success} réussis, ${errors} erreurs`)
  return { success, errors }
}

// Fonction principale
async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error(`
❌ Erreur: Aucun fichier spécifié

Usage:
  npm run import <fichier.json>

Exemples:
  npm run import data/players.json
  npm run import data/all-data.json
  npm run import data/examples/sample-players.json
    `)
    process.exit(1)
  }

  const filePath = path.resolve(args[0])

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Erreur: Le fichier ${filePath} n'existe pas`)
    process.exit(1)
  }

  console.log(`\n🚀 Import de données depuis: ${filePath}\n`)

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const data: ImportData = JSON.parse(fileContent)

    const results = {
      players: { success: 0, errors: 0 },
      staff: { success: 0, errors: 0 },
      matches: { success: 0, errors: 0 },
      articles: { success: 0, errors: 0 },
      galleries: { success: 0, errors: 0 },
      history: { success: 0, errors: 0 },
    }

    // Importer chaque type de données
    if (data.players && data.players.length > 0) {
      results.players = await importPlayers(data.players)
    }

    if (data.staff && data.staff.length > 0) {
      results.staff = await importStaff(data.staff)
    }

    if (data.matches && data.matches.length > 0) {
      results.matches = await importMatches(data.matches)
    }

    if (data.articles && data.articles.length > 0) {
      results.articles = await importArticles(data.articles)
    }

    if (data.galleries && data.galleries.length > 0) {
      results.galleries = await importGalleries(data.galleries)
    }

    if (data.history && data.history.length > 0) {
      results.history = await importHistory(data.history)
    }

    // Résumé final
    console.log(`\n\n🎉 Import terminé!`)
    console.log(`\n📈 Résumé global:`)

    const totalSuccess = Object.values(results).reduce((sum, r) => sum + r.success, 0)
    const totalErrors = Object.values(results).reduce((sum, r) => sum + r.errors, 0)

    console.log(`  ✅ Total réussis: ${totalSuccess}`)
    console.log(`  ❌ Total erreurs: ${totalErrors}`)
    console.log(`\n`)

  } catch (error: any) {
    console.error(`\n❌ Erreur lors de l'import: ${error.message}`)
    process.exit(1)
  }
}

main()
