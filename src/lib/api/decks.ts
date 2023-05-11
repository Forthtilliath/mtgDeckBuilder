import { prisma } from '../db'
import { CardStore } from '../redux/slices/deck'

export async function listDecks({
  name = '',
  description = '',
  idAuthor = '',
}: DeckQuery) {
  const decks = prisma.deck.findMany({
    where: {
      OR: {
        name: { contains: name },
        description: { contains: description },
        idAuthor: Number(idAuthor) || undefined,
      },
    },
    include: {
      contents: {
        select: {
          card: true,
          count: true,
        },
      },
    },
  })
  return decks
}

export async function createCards(cards: Array<CardStore>) {
  await prisma.card.createMany({
    data: cards.map((card) => ({ name: card.name, uuid: card.uuid })),
    skipDuplicates: true,
  })

  return prisma.card.findMany({
    where: {
      uuid: { in: cards.map((card) => card.uuid) },
    },
  })
}

export async function createDeck({
  name,
  description,
  idAuthor,
  cards,
}: {
  name: string
  description: string
  idAuthor: number
  cards: Array<CardStore>
}) {
  const createdCards = await createCards(cards)

  const newDeck = prisma.deck.create({
    data: {
      description: description,
      name: name,
      author: {
        connect: {
          id: idAuthor,
        },
      },
      contents: {
        createMany: {
          data: cards.map((card) => ({
            count: card.count,
            // Ah j'ai pas l'erreur que tu avais hier
            idCard: createdCards.find((c) => c.uuid === card.uuid)!.id,
          })),
          skipDuplicates: true,
        },
      },
    },
  })
  return newDeck
}
