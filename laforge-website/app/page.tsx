import Hero from '@/components/sections/Hero'
import FeaturedNews from '@/components/sections/FeaturedNews'
import UpcomingMatches from '@/components/sections/UpcomingMatches'
import RecentResults from '@/components/sections/RecentResults'
import TeamStats from '@/components/sections/TeamStats'
import LatestGallery from '@/components/sections/LatestGallery'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TeamStats />
      <RecentResults />
      <FeaturedNews />
      <UpcomingMatches />
      <LatestGallery />
    </>
  )
}
