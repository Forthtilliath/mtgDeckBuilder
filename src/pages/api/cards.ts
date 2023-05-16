import { prisma } from '@/lib/prisma.config'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function getCards() {
  const cards = prisma.card.findMany()
  return cards
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const cards = await getCards()
  res.status(200).json(cards)
}
