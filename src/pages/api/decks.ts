import { createDeck, listDecks } from '@/lib/api/decks'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DB.Deck | DB.DeckWithCards[]>
) {
  switch (req.method) {
    case 'GET':
      const fields: DeckQuery = req.query
      const decks = await listDecks(fields)
      return res.status(200).json(decks)
    case 'POST':
      const rawData: DeckCreation = req.body
      try {
        const newDeck = await createDeck(rawData)
        return res.status(201).json(newDeck)
      } catch (_err) {
        return res.status(409).end('Name already existing!')
      }
    default:
      return res.status(405).end()
  }
}
