import { prisma } from '@/lib/db'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function getCards() {
  const cards = prisma.card.findMany()
  return cards
}

// type Data = Awaited<ReturnType<typeof getCards>>
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cards = await getCards()
  res.status(200).json(cards)
}
