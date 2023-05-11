declare global {
  type DeckWithoutId = Omit<DB.Deck, 'id'>

  type DeckQueryKeys = keyof DeckWithoutId
  type DeckQuery = Partial<Record<DeckQueryKeys, string>>

  type DeckCreation = DeckWithoutId & {
    cards: Array<CardStore>
  }
}

export {}
