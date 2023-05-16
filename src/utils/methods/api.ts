export function formatAPICardsWithImages(cards: API.Card[]) {
  return cards
    .filter((cardData) => cardData.imageUrl)
    .map((c) => ({ id: c.id, name: c.name, imageUrl: c.imageUrl }))
}
