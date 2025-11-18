import { client } from './client'
import type { Player, Match, Article, Gallery, Staff, History, SiteSettings } from '@/types'

// ============================================
// MATCHES
// ============================================

export async function getUpcomingMatches(limit = 3): Promise<Match[]> {
  return client.fetch(
    `*[_type == "match" && status == "upcoming"] | order(date asc) [0...${limit}] {
      _id,
      _createdAt,
      opponent,
      date,
      location,
      isHome,
      status,
      isPlayoff,
      period,
      opponentLogo
    }`
  )
}

export async function getRecentMatches(limit = 3): Promise<Match[]> {
  return client.fetch(
    `*[_type == "match" && status == "finished"] | order(date desc) [0...${limit}] {
      _id,
      _createdAt,
      opponent,
      date,
      location,
      isHome,
      status,
      isPlayoff,
      ourScore,
      opponentScore,
      period,
      opponentLogo,
      highlights,
      recap,
      "mvp": mvp-> {
        _id,
        name,
        jerseyNumber,
        image,
        stats
      },
      "xFactor": xFactor-> {
        _id,
        name,
        jerseyNumber,
        image,
        stats
      },
      teamStats,
      playerStats[] {
        _key,
        "player": player-> {
          _id,
          name,
          jerseyNumber
        },
        points,
        rebounds,
        assists,
        minutesPlayed
      }
    }`
  )
}

export async function getAllMatches(): Promise<Match[]> {
  return client.fetch(
    `*[_type == "match"] | order(date desc) {
      _id,
      _createdAt,
      opponent,
      date,
      location,
      isHome,
      status,
      isPlayoff,
      ourScore,
      opponentScore,
      period,
      opponentLogo,
      highlights,
      recap,
      "mvp": mvp-> {
        _id,
        name,
        jerseyNumber,
        image,
        stats
      },
      "xFactor": xFactor-> {
        _id,
        name,
        jerseyNumber,
        image,
        stats
      },
      teamStats
    }`
  )
}

export async function getMatchBySlug(slug: string): Promise<Match | null> {
  return client.fetch(
    `*[_type == "match" && slug.current == $slug][0] {
      _id,
      _createdAt,
      opponent,
      date,
      location,
      isHome,
      status,
      isPlayoff,
      ourScore,
      opponentScore,
      period,
      opponentLogo,
      highlights,
      recap,
      "mvp": mvp-> {
        _id,
        name,
        jerseyNumber,
        image,
        stats
      },
      "xFactor": xFactor-> {
        _id,
        name,
        jerseyNumber,
        image,
        stats
      },
      teamStats,
      playerStats[] {
        _key,
        "player": player-> {
          _id,
          name,
          jerseyNumber,
          position
        },
        points,
        rebounds,
        assists,
        minutesPlayed
      }
    }`,
    { slug }
  )
}

// ============================================
// PLAYERS
// ============================================

export async function getActivePlayers(): Promise<Player[]> {
  return client.fetch(
    `*[_type == "player" && isActive == true] | order(jerseyNumber asc) {
      _id,
      _createdAt,
      name,
      slug,
      image,
      jerseyNumber,
      position,
      height,
      weight,
      birthDate,
      age,
      nationality,
      canadianResident,
      schoolLevel,
      gpa,
      email,
      phone,
      instagram,
      highlightVideo,
      bio,
      stats,
      isActive
    }`
  )
}

export async function getPlayersByPosition(position: string): Promise<Player[]> {
  return client.fetch(
    `*[_type == "player" && isActive == true && position == $position] | order(jerseyNumber asc) {
      _id,
      _createdAt,
      name,
      slug,
      image,
      jerseyNumber,
      position,
      height,
      weight,
      birthDate,
      age,
      nationality,
      bio,
      stats,
      isActive
    }`,
    { position }
  )
}

export async function getPlayerBySlug(slug: string): Promise<Player | null> {
  return client.fetch(
    `*[_type == "player" && slug.current == $slug][0] {
      _id,
      _createdAt,
      name,
      slug,
      image,
      jerseyNumber,
      position,
      height,
      weight,
      birthDate,
      age,
      nationality,
      canadianResident,
      schoolLevel,
      gpa,
      email,
      phone,
      instagram,
      highlightVideo,
      bio,
      stats,
      isActive
    }`,
    { slug }
  )
}

// ============================================
// STAFF
// ============================================

export async function getAllStaff(): Promise<Staff[]> {
  return client.fetch(
    `*[_type == "staff"] | order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      slug,
      image,
      role,
      customRole,
      bio,
      experience,
      specialties,
      email,
      phone,
      linkedin,
      achievements
    }`
  )
}

export async function getStaffByRole(role: string): Promise<Staff[]> {
  return client.fetch(
    `*[_type == "staff" && role == $role] | order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      slug,
      image,
      role,
      customRole,
      bio,
      experience,
      specialties,
      email,
      phone,
      linkedin,
      achievements
    }`,
    { role }
  )
}

// ============================================
// ARTICLES / NEWS
// ============================================

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  return client.fetch(
    `*[_type == "article" && featured == true] | order(publishedAt desc) [0...${limit}] {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      publishedAt,
      author,
      featured
    }`
  )
}

export async function getAllArticles(): Promise<Article[]> {
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      publishedAt,
      author,
      featured
    }`
  )
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      publishedAt,
      content,
      author,
      featured
    }`,
    { slug }
  )
}

export async function getArticlesByCategory(category: string, limit = 10): Promise<Article[]> {
  return client.fetch(
    `*[_type == "article" && category == $category] | order(publishedAt desc) [0...${limit}] {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      mainImage,
      category,
      publishedAt,
      author,
      featured
    }`,
    { category }
  )
}

// ============================================
// GALLERY
// ============================================

export async function getLatestGalleries(limit = 3): Promise<Gallery[]> {
  return client.fetch(
    `*[_type == "gallery"] | order(date desc) [0...${limit}] {
      _id,
      _createdAt,
      title,
      slug,
      description,
      date,
      category,
      coverImage,
      images,
      videos
    }`
  )
}

export async function getAllGalleries(): Promise<Gallery[]> {
  return client.fetch(
    `*[_type == "gallery"] | order(date desc) {
      _id,
      _createdAt,
      title,
      slug,
      description,
      date,
      category,
      coverImage,
      images,
      videos
    }`
  )
}

export async function getGalleryBySlug(slug: string): Promise<Gallery | null> {
  return client.fetch(
    `*[_type == "gallery" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      description,
      date,
      category,
      coverImage,
      images,
      videos
    }`,
    { slug }
  )
}

// ============================================
// HISTORY
// ============================================

export async function getAllHistory(): Promise<History[]> {
  return client.fetch(
    `*[_type == "history"] | order(coalesce(order, 999) asc, year desc) {
      _id,
      _createdAt,
      title,
      slug,
      year,
      mainImage,
      excerpt,
      content,
      category,
      order,
      featured
    }`
  )
}

export async function getFeaturedHistory(): Promise<History[]> {
  return client.fetch(
    `*[_type == "history" && featured == true] | order(coalesce(order, 999) asc, year desc) {
      _id,
      _createdAt,
      title,
      slug,
      year,
      mainImage,
      excerpt,
      content,
      category,
      order,
      featured
    }`
  )
}

export async function getHistoryBySlug(slug: string): Promise<History | null> {
  return client.fetch(
    `*[_type == "history" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      year,
      mainImage,
      excerpt,
      content,
      category,
      order,
      featured
    }`,
    { slug }
  )
}

// ============================================
// SITE SETTINGS
// ============================================

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      _id,
      _createdAt,
      title,
      description,
      logo,
      favicon,
      socialLinks,
      contact,
      heroText
    }`
  )
}

// ============================================
// TEAM STATS (aggregate from players)
// ============================================

export async function getTeamStats() {
  const players = await getActivePlayers()

  if (!players || players.length === 0) {
    return {
      totalPlayers: 0,
      avgPPG: 0,
      avgRPG: 0,
      avgAPG: 0,
    }
  }

  const totalPPG = players.reduce((sum, p) => sum + (p.stats?.ppg || 0), 0)
  const totalRPG = players.reduce((sum, p) => sum + (p.stats?.rpg || 0), 0)
  const totalAPG = players.reduce((sum, p) => sum + (p.stats?.apg || 0), 0)

  return {
    totalPlayers: players.length,
    avgPPG: parseFloat((totalPPG / players.length).toFixed(1)),
    avgRPG: parseFloat((totalRPG / players.length).toFixed(1)),
    avgAPG: parseFloat((totalAPG / players.length).toFixed(1)),
  }
}
