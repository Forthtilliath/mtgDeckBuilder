import { Prisma } from '@prisma/client'

declare global {
  namespace DB {
    type CardWithDeck = Prisma.CardGetPayload<{
      include: {
        usedInDecks: true
      }
    }>

    type Author = Prisma.UserGetPayload<object>
    type Card = Prisma.CardGetPayload<object>
    type Deck = Prisma.DeckGetPayload<object>
    type CardInDeck = Prisma.CardInDeckGetPayload<object>
  }
}

export {}
