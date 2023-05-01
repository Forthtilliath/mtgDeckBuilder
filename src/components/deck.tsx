import styles from './deck.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface CardData {
  id: string
  uuid: string
  name: string
  count: number
}

export default function Deck() {
  const [cards, setCards] = useState<CardData[]>([])

  useEffect(() => {
    axios.get<CardData[]>('/api/cards').then(({ data }) => {
      setCards(data)
    })
  }, [])

  return (
    <ul className={styles.deck}>
      {cards.map((card) => (
        <li key={card.id}>
          <button>-</button>
          {card.count}x {card.name}
        </li>
      ))}
    </ul>
  )
}
