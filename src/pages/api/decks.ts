import { createDeck, listDecks } from '@/lib/api/decks'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const fields: Partial<{
        name: string
        description: string
        idAuthor: string
      }> = req.query
      const decks = await listDecks(fields)
      return res.status(200).json(decks)
    case 'POST':
      const rawData = req.body
      const newDeck = await createDeck(rawData)
      return res.status(201).json(newDeck)
    default:
      return res.status(405).end()
  }
}
