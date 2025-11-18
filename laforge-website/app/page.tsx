import Hero from '@/components/sections/Hero'
import FeaturedNews from '@/components/sections/FeaturedNews'
import UpcomingMatches from '@/components/sections/UpcomingMatches'
import RecentResults from '@/components/sections/RecentResults'
import TeamStats from '@/components/sections/TeamStats'
import LatestGallery from '@/components/sections/LatestGallery'
import { getRecentMatches, getUpcomingMatches, getFeaturedArticles, getLatestGalleries } from '@/sanity/lib/queries'

export default async function HomePage() {
  // Fetch recent finished matches with MVP and X-Factor
  const recentMatches = await getRecentMatches(2)

  // Fetch upcoming matches
  const upcomingMatches = await getUpcomingMatches(3)

  // Fetch featured articles
  const featuredArticles = await getFeaturedArticles(3)

  // Fetch latest galleries
  const latestGalleries = await getLatestGalleries(4)

  return (
    <>
      <Hero />
      <TeamStats />
      <RecentResults matches={recentMatches} />
      <FeaturedNews articles={featuredArticles} />
      <UpcomingMatches matches={upcomingMatches} />
      <LatestGallery galleries={latestGalleries} />
    </>
  )
}
