type CardData<T> = { cards: T[] }

type CardAPI = {
  id: string
  name: string
  imageUrl: string
}

type CardAPIData = CardData<CardAPI>