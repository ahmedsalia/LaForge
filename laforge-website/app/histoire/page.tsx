import { getAllHistory } from '@/sanity/lib/queries'
import HistoirePageClient from '@/components/pages/HistoirePageClient'

export default async function HistoirePage() {
  // Fetch history timeline from Sanity
  const timeline = await getAllHistory()

  return <HistoirePageClient timeline={timeline} />
}
