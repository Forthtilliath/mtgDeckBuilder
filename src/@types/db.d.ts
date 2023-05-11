import { Prisma } from '@prisma/client'

declare global {
  namespace DB {
    type CardWithDeck = Prisma.CardGetPayload<{
      include: {
        usedInDecks: true
      }
    }>

    type Author = Prisma.UserGetPayload<{}>
    type Card = Prisma.CardGetPayload<{}>
    type Deck = Prisma.DeckGetPayload<{}>
    type CardInDeck = Prisma.CardInDeckGetPayload<{}>
  }
}

export {}
