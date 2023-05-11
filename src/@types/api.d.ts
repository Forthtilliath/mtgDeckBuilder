namespace API {
  type Card = {
    id: string
    name: string
    imageUrl: string
  }

  type CardData = { cards: Card[] }
}
