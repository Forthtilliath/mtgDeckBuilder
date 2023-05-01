import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function getCards() {
  const prisma = new PrismaClient()
  const cards = await prisma.cards.findMany()
  return cards
}

type Data = Awaited<ReturnType<typeof getCards>>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cards = await getCards()
  res.status(200).json(cards)
}
