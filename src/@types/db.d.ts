import { Prisma } from '@prisma/client'

declare global {
  namespace DB {
    // Correct ?
    type CardWithDeck = Prisma.CardGetPayload<{
      include: {
        usedInDecks: true
      }
    }>
    
    type CardWithoutId = Prisma.CardGetPayload<{
      select: {
        name: true,
        usedInDecks: true,
        uuid:true
      }
    }>

    type Author = Prisma.UserGetPayload<object>
    type Card = Prisma.CardGetPayload<object>
    type Deck = Prisma.DeckGetPayload<object>
    type CardInDeck = Prisma.CardInDeckGetPayload<object>
  }
}

export {}
