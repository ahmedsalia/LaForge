import { getActivePlayers, getAllStaff } from '@/sanity/lib/queries'
import TeamPageClient from '@/components/pages/TeamPageClient'

export default async function EquipePage() {
  // Fetch players and staff from Sanity
  const players = await getActivePlayers()
  const staff = await getAllStaff()

  return <TeamPageClient players={players} staff={staff} />
}
