import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function listDecks() {
  const prisma = new PrismaClient()
  const decks = prisma.deck.findMany()
  return decks
}
export async function createDeck({
  name,
  description,
  idAuthor,
}: {
  name: string
  description: string
  idAuthor: number
}) {
  const prisma = new PrismaClient()
  const newDeck = prisma.deck.create({
    data: {
      description: description,
      name: name,
      author: {
        connect: {
          id: idAuthor,
        },
      },
    },
  })
  return newDeck
}
// DeckCreation = Omit<NonNullable<Prisma.DeckSelect>, 'id'>
// type Data = Awaited<ReturnType<typeof getCards>>
export default async function handler(
  req: NextApiRequest,
  //res: NextApiResponse<Data>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const decks = await listDecks()
      return res.status(200).json(decks)
    case 'POST':
      const rawData = req.body
      const newDeck = await createDeck(rawData)
      return res.status(201).json(newDeck)
    default:
      return res.status(405).end()
  }
}
